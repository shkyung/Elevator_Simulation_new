// define(function (require) {
//   "use strict";
//
//   var App = require("../js/controllers/app"),
//     FloorBtnView = require("../js/views/floorBtnView"),
//     Controller = require("../js/controllers/controller");
//
//   describe("app 테스트", function () {
//     beforeEach(function (done) {
//       spyOn(Controller, "setElevatorModels");
//       spyOn(FloorBtnView, "initialize");
//       App.init(4,3);
//      done();
//     });
//
//     it("spyOn 테스트", function () {
//       expect(Controller.setElevatorModels).toHaveBeenCalled();
//       expect(FloorBtnView.initialize).toHaveBeenCalled();
//     });
//   });
// });