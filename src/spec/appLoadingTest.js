import App from "../js/controllers/app";
import Controller from "../js/controllers/controller.js"
import FloorBtnView from "../js/views/floorBtnView";

describe("app 테스트", function () {
    beforeEach(()=> {
        let el = document.createElement("div");
        el.setAttribute("id","simulation");
        document.body.append(el);

        App.init(4,3);

        //spyOn(Controller.prototype, "setElevatorModels");
        spyOn(FloorBtnView.prototype, "initialize");

        done();
    });

    it("spyOn 테스트", function () {
        expect(Controller.prototype.setElevatorModels).toHaveBeenCalled();
        expect(FloorBtnView.prototype.initialize).toHaveBeenCalled();
    });
});