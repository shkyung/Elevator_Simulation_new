import Elevator from "../js/models/elevator.js";

describe("model 테스트", function () {
  beforeAll(()=> {
    let el = document.createElement("div");
    el.setAttribute("id","elevatorsView");
    document.body.append(el);

  });

  it("model 생성 테스트", function () {
    let elevator = new Elevator(2,3);

    expect(elevator.index).toBe(2);
    expect(elevator.state).toBe(1);
    expect(elevator.location).toBe(1);
    expect(elevator.stayingTime).toBe(0);
    expect(elevator.view).toBeTruthy();
  });

  it("model startMove 테스트", function () {
    let elevator = new Elevator(2,3);

    elevator.startMove(3);
    expect(elevator.state).toBe(2);
  });
});