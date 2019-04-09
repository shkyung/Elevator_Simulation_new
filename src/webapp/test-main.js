require.config({
  paths: {
    jquery: "libs/jquery-3.2.1",
    underscore: "libs/underscore",
    'jasmine': ['libs/jasmine/jasmine'],
    'jasmine-html': ['libs/jasmine/jasmine-html'],
    'jasmine-boot': ['libs/jasmine/boot']

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
    require(["spec/AppLoadingTest", "spec/ModelTest"], function() {
      window.onload();
    });
  });
});