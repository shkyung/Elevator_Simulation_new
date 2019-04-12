import App from "../js/controllers/app";
import Controller from "../js/controllers/controller.js"
import FloorBtnView from "../js/views/floorBtnView";

describe("app 테스트", function () {
    beforeEach(()=> {
        let el = document.createElement("div");
        el.setAttribute("id","elevatorsView");
        document.body.append(el);

        spyOn(Controller, "setElevatorModels");
        spyOn(FloorBtnView, "initialize");
        App.init(4,3);
        done();
    });

    it("spyOn 테스트", function () {
        expect(Controller.setElevatorModels).toHaveBeenCalled();
        expect(FloorBtnView.initialize).toHaveBeenCalled();
    });
});