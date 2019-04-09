define(function (require) {
  "use strict";
  var $= require("jquery");

  function elevatorView (index, floorNum) {
    this.className = "elevator" + index;
    this.$el = $("<div></div>").addClass(this.className);

    this.init(floorNum);
  }

  elevatorView.prototype.init = function(floorNum) {
    for (var i = floorNum; i > 0; i--) {
      var floor = $("<div></div>").addClass("floor").attr("value",i);
      this.$el.append(floor);

      if (i ===1) {
        floor.addClass("current");
      }
    }

    $(".elevatorsView").append(this.$el);
  };

  // mac os - safari, windows - IE, Edge, FF, Chrome 정상동작.
  elevatorView.prototype.move = function(floor) {
    this.$el.find(".current").removeClass("current moving");
    this.$el.find("[value='"+ floor + "']").addClass("current moving");
  };

  elevatorView.prototype.initUi = function() {
    this.$el.find(".current").removeClass("moving");
  };

  return elevatorView;
});
