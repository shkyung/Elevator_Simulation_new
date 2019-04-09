define(function (require) {
  "use strict";

  // import
  var _ = require("underscore"),
    Const = require("../utils/const");

  // private variables
  var _elevatorModelList = [];

  return {
    setElevatorModels: function (elevators) {
      _elevatorModelList = elevators;
    },

    request: function (targetFloor, cb) {
      // 현재 층에서 대기중인 엘리베이터가 하나라도 있다면 루프를 다 돌지 않고 반환.
      var waitingElevator = _.find(_elevatorModelList, function (elevator) {
        return elevator.state === Const.stateMap.stop && elevator.location === targetFloor;
      });

      if (waitingElevator) {
        // waitingElevator 존재한다면 요청을 종료한다.
        return;
      }

      var availableElevators = _.filter(_elevatorModelList, function (elevator) {
          // stop 상태인 엘리베이터를 대상으로 한다.
          return elevator.state === Const.stateMap.stop;
        }),
        targetIndex = 0,
        minTime;

      if (availableElevators.length !== 0) {

        availableElevators.forEach(function (elevator, index) {
          var time = elevator.getEstimateTime(targetFloor);

          // 시간이 같을 경우 index가 낮은 엘리베이터가 움직인다.
          if (index === 0) {
            minTime = time;
          } else if (time < minTime) {
            minTime = time;
            targetIndex = index;
          }
        });

        // 현재층 버튼을 비활성화 시킨다.
        cb(targetFloor);
        // 최소 시간이 걸리는 엘리베이터 모델에 start move 호출
        availableElevators[ targetIndex ].startMove(targetFloor);
      } else {
        console.error("현재 엘리베이터가 모두 이동중이니 잠시만 기다려주세요..");
      }
    }
  }
});