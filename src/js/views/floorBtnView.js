// 전역 함수 선언
// import Elevator from "../models/elevator";
// import Constants from "../utils/const";
//
// var isFloorBtnActive, activeFloorBtn;
//
// define(function (require) {
//   "use strict";
//
//   // import
//   var $ = require("jquery"),
//     Controller = require("../controllers/controller");
//
//   //private variables
//   var $el;
//
//   /**
//    * @description 해당 층의 버튼이 활성화되었는지 반환한다.
//    * @param {number} floor
//    * @returns {boolean}
//    */
//   isFloorBtnActive =  function (floor) {
//     return !$el.find("[value='" + floor + "']").hasClass("disable");
//   };
//
//   /**
//    * @description 해당 층의 버튼을 활성화 시킨다.
//    * @param {number} floor
//    */
//   activeFloorBtn = function (floor) {
//     $el.find("[value='" + floor + "']").removeClass("disable");
//   };
//
//   function disableFloorBtn(floor) {
//     $el.find("[value='" + floor + "']").addClass("disable");
//   }
//
//   function onClickFloorBtn (e) {
//     var $target = $(e.currentTarget);
//
//     if (!$target.hasClass("disable")) {
//       Controller.request(+$target.attr("value"), disableFloorBtn);
//     }
//   }
//
//   return {
//     initialize: function (floorNum) {
//       $el = $(".floorBtnView");
//
//       for (var i = floorNum; i > 0; i--) {
//         var $floor = $("<div></div>").addClass("floor"),
//           $floorBtn = $("<div></div>").addClass("floorBtn").attr("value", i).text(i + "층");
//
//         $floorBtn.on("click", onClickFloorBtn);
//
//         $floor.append($floorBtn);
//         $el.append($floor);
//       }
//     }
//   }
// });

let floorBtnView = document.getElementById("floorBtnView");
class FloorBtnView {
    // constructor과 같은 레벨에 선언하면 prototype 함수로 들어감.
    constructor() {
        if (!FloorBtnView.instance) {
            FloorBtnView.instance = this;
        }

        this.initialize = function(floorNum) {
            for(let i = floorNum; i > 0; i--) {
                let floor = document.createElement("div"),
                    floorBtn = document.createElement("div");

                floor.classList.add("floor");
                floorBtn.classList.add("floorBtn");
                floorBtn.setAttribute("value", i);
                floorBtn.innerText = i+"층";

                floor.appendChild(floorBtn);
                floorBtnView.appendChild(floor);
            }
        };

        return FloorBtnView.instance;
    }
}

const instance = new FloorBtnView();
Object.freeze(instance);

export default instance;