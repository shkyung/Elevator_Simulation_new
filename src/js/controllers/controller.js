import Elevator from "../models/elevator.js";
import Constants from "../utils/const.js"

let elevatorModelList = [];
let taskQueue = [];
let stateMap = Constants.stateMap;
let that;
class Controller {
    // constructor과 같은 레벨에 선언하면 prototype 함수로 들어감.
    constructor() {
        if (!Controller.instance) {
            Controller.instance = this;
        }

        that = this;

        this.setElevatorModels = function(elevatorNum, floorNum) {
            // elevator 모델을 생성하고 model list에 넣는다.
            for (let i = 0; i < elevatorNum; i++) {
                elevatorModelList.push(new Elevator(i, floorNum));
            }
        };

        this.request = function(destFloor) {
            // 현재 층에서 대기중인 엘리베이터가 하나라도 있다면 루프를 다 돌지 않고 반환.
            let availableElevators = elevatorModelList.find((elevator) =>
                elevator.location === destFloor && elevator.state === stateMap.stop);

            if (availableElevators) {
                // waitingElevator 존재한다면 요청을 종료한다.
                console.error("가용할 수 있는 엘리베이터가 있습니다");
                return;
            }

            let candidateElevators = elevatorModelList.filter((elevator) =>
                elevator.state !== stateMap.moving),
                targetIndex = 0,
                minTime = 10000;

            if (candidateElevators.length !== 0) {

                // 멈춰있는 엘리베이터에 한해 시간 계산
                candidateElevators.forEach(function (elevator, index) {
                    let time = elevator.getEstimateTime(destFloor);

                    if (time < minTime) {
                        minTime = time;
                        targetIndex = index;
                    }
                });

                // 현재층 버튼을 비활성화 시킨다.
                updateFloorBtn(destFloor, false);
                // 최소 시간이 걸리는 엘리베이터 모델에 start move 호출
                candidateElevators[targetIndex].startMove(destFloor);
            } else {
                // 엘리베이터가 모두 이동중일때
                console.error("현재 엘리베이터가 모두 이동중이니 잠시만 기다려주세요..");
                taskQueue.push(destFloor);
            }
        };

        this.handleTaskQueue = function(e) {
            if (taskQueue.length) {
                elevatorModelList[e.detail].startMove(taskQueue.pop());
            }
        };

        document.body.addEventListener("done", this.handleTaskQueue);

        return Controller.instance;
    }
}

const instance = new Controller();
//Object.freeze(instance);

export default instance;