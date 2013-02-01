window.require.define({"index": function(exports, require, module) {
  module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
  attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
  var buf = [];
  with (locals || {}) {
  var interp;
  var __indent = [];
  buf.push('<!DOCTYPE html>\n<html>\n  <head>\n    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">\n    <title>FooProject</title>\n    <link href="s40-theme/css/s40-theme.css" rel="stylesheet" type="text/css">\n    <link rel="stylesheet" href="s40-theme/css/single_portrait.css" type="text/css">\n    <!--script(language=\'javascript\', type=\'text/javascript\', -->\n    <!--  src=\'s40-theme/js/screensize.js\')-->\n    <script type="text/javascript">\n      function refreshPageContent() {\n        // Add code for refreshing the page here...\n        console.log("Hey from refresh!");\n        //console.log(navigator.userAgent);\n        //console.log(window.innerWidth);\n        var testCs = require("testCs")\n        var testJs = require("testJs")\n        console.log(testJs)\n        testCs.callCs();\n        testJs.callJs();\n        \n      }\n      \n    </script>\n    <!-- added for brunch-->\n    <script language="javascript" type="text/javascript" src="javascripts/app.js"></script>\n    <script language="javascript" type="text/javascript" src="javascripts/vendor.js">       </script>\n    <script language="javascript" type="text/javascript" src="javascripts/templates.js">       </script>\n  </head>\n  <body>\n    <div class="ui-page">\n      <!-- header-->\n      <div class="ui-header">\n        <div class="ui-title inline">\n          <h2>Title</h2>\n        </div>\n        <div class="refresh-icon inline"><a onclick="refreshPageContent();"><img alt="icon" src="s40-theme/images/refresh_40x40.png"></a></div>\n      </div>\n      <div class="ui-content">\n        <p>Some test content</p>\n        <div onclick="refreshPageContent();" class="ui-button">Press this</div>\n      </div>\n    </div>\n  </body>\n</html>');
  }
  return buf.join("");
  };
}});

