require.config({
  paths: {
    jquery: "libs/jquery-3.2.1",
    underscore: "libs/underscore"
  }
});

require([
  "jquery",
  "js/controllers/app",
  "js/utils/polyfill"
], function ($, App, Polyfill) {

    // IE에 input type=number 지원하지 않음.
    // $(".floorInput").get(0).valueAsNumber -> +$(".floorInput").get(0).valueAsNumber
    // 페이지가 로드 된 후에 이벤트핸들러를 등록 할 것.
  $(".simulation").on("click", function () {
    App.init(+$(".floorInput").get(0).value, +$(".elevatorInput").get(0).value);
    $(".intro").hide();
  });
});