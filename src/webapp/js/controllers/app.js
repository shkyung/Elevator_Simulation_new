define(function (require) {
  "use strict";

  //import
  var $ = require("jquery"),
    FloorBtnView = require("../views/floorBtnView"),
    Elevator = require("../models/elevator"),
    Controller = require("../controllers/controller");

  var app = (function () {
    function initialize(floorNum, elevatorNum) {
	// IE, Edge 브라우저는 input type=number를 지원하지 않아 숫자가 아닌 경우 처리를 해줘야함. try catch
      var elevatorModelList = [];
      // 1. simulation이 나타날 element를 보여준다.
      $(".app").show();

      // 2. elevator 모델을 생성하고 model list에 넣는다.
      for (var i = 0; i < elevatorNum; i++) {
        elevatorModelList.push(new Elevator(i, floorNum));
      }
      // 3. controller에 위의 model list를 set해준다.
      Controller.setElevatorModels(elevatorModelList);
      
      // ElevatorView가 많아지고 로드할게 많아진다면 비동기 로드로 하고 아래코드는 _.defer()를 사용해서 처리
      FloorBtnView.initialize(floorNum);
    }

    return {
      init: initialize
    }
  }());

  return app;
});
