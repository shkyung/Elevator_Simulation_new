require.config({
  paths: {
    jquery: "./ibs/jquery-3.3.1",
    underscore: "./libs/underscore",
    'jasmine': ['./libs/jasmine/jasmine'],
    'jasmine-html': ['./libs/jasmine/jasmine-html'],
    'jasmine-boot': ['./libs/jasmine/boot']

  },
  shim: {
    'jasmine-html': {
      deps : ['jasmine']
    },
    'jasmine-boot': {
      deps : ['jasmine', 'jasmine-html']
    }
  }
});

require(["jquery","jasmine-boot"], function($) {

  $(document).ready(function() {
    require(["spec/AppLoadingTest", "src/spec/ModelTest"], function() {
      window.onload();
    });
  });
});