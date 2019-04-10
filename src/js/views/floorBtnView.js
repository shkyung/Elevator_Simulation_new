import Controller from "../controllers/controller.js";

export let floorBtnViewEl = document.getElementById("floorBtnView");

let disableFloorBtn = function (floor) {
    floorBtnViewEl.querySelector("[value='" + floor + "']").classList.add("disable");
};

let onClickFloorBtn = function (e) {
    let target = e.currentTarget;

    if (!target.classList.contains("disable")) {
        Controller.request(+target.getAttribute("value"), disableFloorBtn);
    }
};

class FloorBtnView {
    // constructor과 같은 레벨에 선언하면 prototype 함수로 들어감.
    constructor() {
        if (!FloorBtnView.instance) {
            FloorBtnView.instance = this;
        }

        this.initialize = function (floorNum) {
            for (let i = floorNum; i > 0; i--) {
                let floor = document.createElement("div"),
                    floorBtn = document.createElement("div");

                floor.classList.add("floor");
                floorBtn.classList.add("floorBtn");
                floorBtn.setAttribute("value", i);
                floorBtn.innerText = i + "층";

                floor.appendChild(floorBtn);
                floorBtnViewEl.appendChild(floor);

                floorBtn.addEventListener("click", onClickFloorBtn);
            }
        };

        return FloorBtnView.instance;
    }
}

const instance = new FloorBtnView();
Object.freeze(instance);

export default instance;