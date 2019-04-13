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
        let that = this,
            // waiting시간이 있는 경우에도 stop상태이므로 그 시간만큼 기다렸다가 이동한다.
            timer = setTimeout(_moveStart, this.stayingTime * 1000);

        that.changeState(_stateMap.moving);

        function _moveStart() {
            clearTimeout(timer);

            that.move(dest);
        }
    }

    move(dest) {
        let that = this,
            interval = setInterval(function () {
                that.view.move(that.location < dest ? ++that.location : --that.location);

                if (that.location === dest) {
                    clearInterval(interval);

                    that.changeState(_stateMap.stop);
                    that.waiting(dest);
                }
            }, 1000);
    }

    waiting(dest) {
        let that = this,
            event = new CustomEvent("done", {"detail": that.index}),
            waitingInterval = setInterval(function () {
                --that.stayingTime;

                if (that.stayingTime <= 0) {
                    clearInterval(waitingInterval);
                }
            }, 1000);

        that.stayingTime = 3;
        that.view.initUi();
        updateFloorBtn(dest, true);
        document.body.dispatchEvent(event);
    }
}