import Constants from "../utils/const.js"
import ElevatorView from "../views/elevatorView.js"

let _stateMap = Constants.stateMap;

export default class elevator {
    constructor(index, floorNum) {
        this.index = index;
        this.state = _stateMap.stop;
        this.location = 1;
        this.stayingTime = 0;
        this.view = new ElevatorView(this.index, floorNum);
    }

    getEstimateTime(dest) {
        let time = Math.abs(this.location - dest);

        time += this.stayingTime;

        return time;
    }

    changeState(state) {
        this.state = state;
    }

    startMove(dest) {
        console.error(this.index + "호 엘리베이터가 " + dest + " 층으로 움직임");

        let that = this,
            timer;
        //console.error("*********that context: ", that);

        that.changeState(_stateMap.moving);

        function _moveStart() {
            clearTimeout(timer);

            that.move(dest);
        }

        // waiting시간이 있는 경우에도 stop상태이므로 그 시간만큼 기다렸다가 이동한다.
        timer = setTimeout(_moveStart, this.stayingTime * 1000);
    }

    move(dest) {
        let that = this,
            interval = setInterval(function () {
                that.view.move(that.location < dest ? ++that.location : --that.location);

                if (that.location === dest) {
                    console.error("도착! clearInterval -> that.wating 호출");
                    clearInterval(interval);

                    that.changeState(_stateMap.stop);
                    that.waiting(dest);
                }
            }, 1000);
    }

    waiting(dest) {
        let that = this;

        that.stayingTime = 3;
        that.view.initUi();
        updateFloorBtn(dest, true);

        let event = new CustomEvent("done", { "detail": that.index });

        document.body.dispatchEvent(event);

        let waitingInterval = setInterval(function () {
            // console.error(" ** that : ", that);
            // console.error("waiting that.stayingTime : ", that.stayingTime);
                --that.stayingTime;

                if (that.stayingTime <= 0) {
                    //console.error("that.stayingTime <== 0 clearInterval");
                    clearInterval(waitingInterval);
                }
            }, 1000);
    }
}