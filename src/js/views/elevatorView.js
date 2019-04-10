export default class elevatorView {
    constructor(index, floorNum) {
        this.className = "elevator" + index;
        this.el = document.createElement("div");
        this.el.classList.add(this.className);

        this.initialize(floorNum);
    }

    initialize(floorNum) {
        for (let i = floorNum; i > 0; i--) {
            let floorEl = document.createElement("div");

            floorEl.classList.add("floor");
            floorEl.setAttribute("value", i);
            this.el.appendChild(floorEl);

            if (i === 1) {
                floorEl.classList.add("current");
            }
        }
        document.getElementById("elevatorsView").appendChild(this.el);
    }

    move(floor) {
        this.el.getElementsByClassName("current")[0].classList.remove("moving");
        this.el.getElementsByClassName("current")[0].classList.remove("current");

        this.el.querySelector("[value='" + floor + "']").classList.add("current");
        this.el.querySelector("[value='" + floor + "']").classList.add("moving");
    }

    initUi() {
        this.el.getElementsByClassName("current")[0].classList.remove("moving");
    }
}
