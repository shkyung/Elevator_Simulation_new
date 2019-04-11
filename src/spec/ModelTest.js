import Elevator from "../js/models/elevator";

describe("model 테스트", function () {
  it("model 생성 테스트", function () {
    var index = 2,
        floor = 3,
        elevator = new Elevator(index,floor);

    expect(elevator.index).toBe(index);
    expect(elevator.state).toBe(1);
    expect(elevator.location).toBe(1);
    expect(elevator.stayingTime).toBe(0);
    expect(elevator.view).toBeTruthy();
  });
});