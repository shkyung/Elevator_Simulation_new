define(function (require) {
  "use strict";

  var ElevatorView = require("../views/elevatorView"),
    Const = require("../utils/const");

  var _stateMap = Const.stateMap;

  function elevator(index, floorNum) {
    this.index = index;
    this.state = _stateMap.stop;
    this.location = 1;
    this.stayingTime = 0;
    this.view = new ElevatorView(this.index, floorNum);
  }

  elevator.prototype.getEstimateTime = function (dest) {
    var time = Math.abs(this.location - dest);

    time += this.stayingTime;

    return time;
  };

  elevator.prototype.changeState = function (state, justArrived) {
    this.state = state;

    if (justArrived) {
      this.stayingTime = 3;
    }
  };

  elevator.prototype.startMove = function (dest) {
    var that = this;

    function _move() {
      that.changeState(_stateMap.moving);
      that[ that.location > dest ? "moveDown" : "moveUp" ](dest);
    }

    if (this.stayingTime !== 0) {
      setTimeout(_move, this.stayingTime * 1000);
    } else {
      _move();
    }
  };

  elevator.prototype.moveUp = function (dest) {
    var that = this,
      interval;

    interval = setInterval(function () {
      that.view.move(++that.location);

      if (that.location === dest) {
        clearInterval(interval);
        that.arrive(dest);
      }
    }, 1000);

  };

  elevator.prototype.moveDown = function (dest) {
    var that = this,
      interval;

    interval = setInterval(function () {
      that.view.move(--that.location);

      if (that.location === dest) {
        clearInterval(interval);
        that.arrive(dest);
      }
    }, 1000);
  };

  elevator.prototype.arrive = function (dest) {
    var that = this,
      interval;

    this.changeState(_stateMap.stop, true);
    activeFloorBtn(dest);

    interval = setInterval(function () {
      --that.stayingTime;
      if (that.stayingTime === 0) {
        clearInterval(interval);
      } else if(that.stayingTime === 2) {
        // 도착하고 1초가 지나면 엘리베이터의 이동중 표시를 없앤다.
        that.view.initUi();
      }
    }, 1000);
  };

  return elevator;
});