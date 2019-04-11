import Controller from "./controller.js";
import FloorBtnView, {floorBtnViewEl} from "../views/floorBtnView.js";

const onClickStart = function () {
    let elevatorNum = +document.getElementById("elevatorInput").value,
        floorNum = +document.getElementById("floorInput").value;

    document.getElementById("intro").style.display = "none";
    document.getElementById("app").style.display = "block";

    startSimulation(elevatorNum, floorNum);
};

const startSimulation= function (elevatorNum, floorNum) {
    //controller에서 elevator model 생성
    Controller.setElevatorModels(elevatorNum, floorNum);

    FloorBtnView.initialize(floorNum);
};

const registerGlobalApi = function () {
    /**
     * @description 해당 층의 버튼이 활성화되었는지 반환한다.
     * @param {number} floor
     * @returns {boolean}
     */

    window.isFloorBtnActive = function(floor){
        return floorBtnViewEl.querySelector("[value='" + floor + "']").classList.contains("disable");
    };

    /**
     * @description 해당 층의 버튼을 활성화 시킨다.
     * @param {number} floor
     */
    window.updateFloorBtn = function (floor, tobeActive) {
        floorBtnViewEl.querySelector("[value='" + floor + "']").classList[tobeActive? "remove" : "add"]("disable");
    };
};
class App {
    // constructor과 같은 레벨에 선언하면 prototype 함수로 들어감.
    constructor() {
        if (!App.instance) {
            App.instance = this;
        }

        this.init = function () {
            let simulationBtn = document.getElementById("simulation");

            simulationBtn.addEventListener("click", onClickStart);
            registerGlobalApi();
        };


        return App.instance;
    }
}

const instance = new App();
//Object.freeze(instance);

export default instance;
