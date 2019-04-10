import Elevator from "../models/elevator.js";
import Constants from "../utils/const.js"

let elevatorModelList = [];
class Controller {
    // constructor과 같은 레벨에 선언하면 prototype 함수로 들어감.
    constructor() {
        if (!Controller.instance) {
            Controller.instance = this;
        }

        this.setElevatorModels = function(elevatorNum, floorNum) {
            // elevator 모델을 생성하고 model list에 넣는다.
            for (let i = 0; i < elevatorNum; i++) {
                elevatorModelList.push(new Elevator(i, floorNum));
            }
        };

        this.request = function(targetFloor, cb) {
            // 현재 층에서 대기중인 엘리베이터가 하나라도 있다면 루프를 다 돌지 않고 반환.
            let waitingElevator = elevatorModelList.find((elevator) =>
                elevator.state === Constants.stateMap.stop && elevator.location === targetFloor);

            if (waitingElevator) {
                // waitingElevator 존재한다면 요청을 종료한다.
                return;
            }

            let availableElevators = elevatorModelList.filter((elevator) =>
                elevator.state === Constants.stateMap.stop),
                targetIndex = 0,
                minTime;

            if (availableElevators.length !== 0) {

                availableElevators.forEach(function (elevator, index) {
                    let time = elevator.getEstimateTime(targetFloor);

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
                availableElevators[targetIndex].startMove(targetFloor);
            } else {
                console.error("현재 엘리베이터가 모두 이동중이니 잠시만 기다려주세요..");
            }
        }

        return Controller.instance;
    }
}

const instance = new Controller();
Object.freeze(instance);

export default instance;