import Controller from "./js/controllers/controller.js";
import FloorBtnView from "./js/views/floorBtnView.js";

(function () {
    let simulationBtn = document.getElementById("simulation");

    simulationBtn.addEventListener("click", onClickStart);

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
})();