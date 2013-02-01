window.require.define({"index": function(exports, require, module) {
  module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
  attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
  var buf = [];
  with (locals || {}) {
  var interp;
  var __indent = [];
  buf.push('<!DOCTYPE html>\n<html>\n  <head>\n    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">\n    <title>FooProject</title>\n    <link href="s40-theme/css/s40-theme.css" rel="stylesheet" type="text/css">\n    <link rel="stylesheet" href="s40-theme/css/single_portrait.css" type="text/css">\n    <!--script(language=\'javascript\', type=\'text/javascript\', -->\n    <!--  src=\'s40-theme/js/screensize.js\')-->\n    <script type="text/javascript">\n      function refreshPageContent() {\n        // Add code for refreshing the page here...\n        console.log("Hey from refresh!");\n        //console.log(navigator.userAgent);\n        //console.log(window.innerWidth);\n        var testCs = require("testCs")\n        var testJs = require("testJs")        \n        testCs.callCs();\n        testJs.callJs();\n        ml = require("templates/mainlist")\n        console.log(ml)\n        var ns = {listitems: ["one", "two"] }\n        var rend = ml(ns, jade.attrs, jade.escape, jade.rethrow, jade.merge)\n        console.log(rend)\n        n = document.getElementById("listdiv")\n        n.innerHTML=rend\n        \n      }\n      \n    </script>\n    <!-- added for brunch-->\n    <script language="javascript" type="text/javascript" src="javascripts/app.js"></script>\n    <script language="javascript" type="text/javascript" src="javascripts/vendor.js">       </script>\n    <script language="javascript" type="text/javascript" src="javascripts/templates.js">       </script>\n  </head>\n  <body>\n    <div class="ui-page">\n      <!-- header-->\n      <div class="ui-header">\n        <div class="ui-title inline">\n          <h2>Title</h2>\n        </div>\n        <div class="refresh-icon inline"><a onclick="refreshPageContent();"><img alt="icon" src="s40-theme/images/refresh_40x40.png"></a></div>\n      </div>\n      <div class="ui-content">\n        <p>Some test content</p>\n        <div onclick="refreshPageContent();" class="ui-button">Press this</div>\n        <div id="listdiv"></div>\n      </div>\n    </div>\n  </body>\n</html>');
  }
  return buf.join("");
  };
}});

window.require.define({"templates/mainlist": function(exports, require, module) {
  module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
  attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
  var buf = [];
  with (locals || {}) {
  var interp;
  var __indent = [];
  buf.push('\n<ul>');
  // iterate listitems
  ;(function(){
    if ('number' == typeof listitems.length) {

      for (var $index = 0, $$l = listitems.length; $index < $$l; $index++) {
        var it = listitems[$index];

  buf.push('\n  <li>');
  var __val__ = it
  buf.push(escape(null == __val__ ? "" : __val__));
  buf.push('</li>\n  <li>Every other</li>');
      }

    } else {
      var $$l = 0;
      for (var $index in listitems) {
        $$l++;      var it = listitems[$index];

  buf.push('\n  <li>');
  var __val__ = it
  buf.push(escape(null == __val__ ? "" : __val__));
  buf.push('</li>\n  <li>Every other</li>');
      }

    }
  }).call(this);

  buf.push('\n</ul>');
  }
  return buf.join("");
  };
}});

