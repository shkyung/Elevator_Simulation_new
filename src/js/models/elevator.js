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

    changeState(state, justArrived) {
        this.state = state;

        if (justArrived) {
            this.stayingTime = 3;
        }
    }

    startMove(dest) {
        let that = this;

        function _move() {
            that.changeState(_stateMap.moving);
            that[that.location > dest ? "moveDown" : "moveUp"](dest);
        }

        if (this.stayingTime !== 0) {
            setTimeout(_move, this.stayingTime * 1000);
        } else {
            _move();
        }
    }

    moveUp(dest) {
        let that = this,
            interval;

        interval = setInterval(function () {
            that.view.move(++that.location);

            if (that.location === dest) {
                clearInterval(interval);
                that.arrive(dest);
            }
        }, 1000);
    }

    moveDown(dest) {
        let that = this,
            interval;

        interval = setInterval(function () {
            that.view.move(--that.location);

            if (that.location === dest) {
                clearInterval(interval);
                that.arrive(dest);
            }
        }, 1000);
    }

    arrive(dest) {
        let that = this,
            interval;

        this.changeState(_stateMap.stop, true);
        activeFloorBtn(dest);

        interval = setInterval(function () {
            --that.stayingTime;
            if (that.stayingTime === 0) {
                clearInterval(interval);
            } else if (that.stayingTime === 2) {
                // 도착하고 1초가 지나면 엘리베이터의 이동중 표시를 없앤다.
                that.view.initUi();
            }
        }, 1000);
    }
}