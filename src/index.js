import Controller from "./js/controllers/controller.js";
import FloorBtnView, {floorBtnViewEl} from "./js/views/floorBtnView.js";

(function () {
    let simulationBtn = document.getElementById("simulation");

    simulationBtn.addEventListener("click", onClickStart);

    registerGlobalApi();

    function onClickStart() {
        let elevatorNum = +document.getElementById("elevatorInput").value,
            floorNum = +document.getElementById("floorInput").value;


        document.getElementById("intro").style.display = "none";
        document.getElementById("app").style.display = "block";

        startSimulation(elevatorNum, floorNum);
    }

    function startSimulation(elevatorNum, floorNum) {
        //controller에서 elevator model 생성
        Controller.setElevatorModels(elevatorNum, floorNum);

        // ElevatorView가 많아지고 로드할게 많아진다면 비동기 로드로 하고 아래코드는 _.defer()를 사용해서 처리
        FloorBtnView.initialize(floorNum);
    }

    function registerGlobalApi() {
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
        window.activeFloorBtn = function (floor) {
            floorBtnViewEl.querySelector("[value='" + floor + "']").classList.remove("disable");
        };
    }
})();