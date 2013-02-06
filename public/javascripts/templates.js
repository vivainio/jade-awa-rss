window.require.define({"index": function(exports, require, module) {
  module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
  attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
  var buf = [];
  with (locals || {}) {
  var interp;
  var __indent = [];
  buf.push('<!DOCTYPE html>\n<html>\n  <head>\n    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">\n    <title>FooProject</title>\n    <link href="s40-theme/css/s40-theme.css" rel="stylesheet" type="text/css">\n    <link rel="stylesheet" href="s40-theme/css/single_portrait.css" type="text/css">\n    <!--script(language=\'javascript\', type=\'text/javascript\', -->\n    <!--  src=\'s40-theme/js/screensize.js\')-->\n    <script type="text/javascript">\n      function refreshPageContent() {\n        // Add code for refreshing the page here...\n        console.log("Hey from refresh!");\n        //console.log(navigator.userAgent);\n        //console.log(window.innerWidth);\n        var testCs = require("testCs")\n        var testJs = require("testJs")        \n        testCs.callCs();\n        testJs.callJs();\n        ml = require("templates/mainlist")\n        console.log(ml)\n        var ns = {listitems: ["one", "two", "three"] }\n        var rend = ml(ns, jade.attrs, jade.escape, jade.rethrow, jade.merge)\n        console.log(rend)\n        n = document.getElementById("listdiv")\n        n.innerHTML=rend\n        \n      }\n      \n    </script>\n    <!-- added for brunch-->\n    <script language="javascript" type="text/javascript" src="javascripts/app.js"></script>\n    <script language="javascript" type="text/javascript" src="javascripts/vendor.js">       </script>\n    <script language="javascript" type="text/javascript" src="javascripts/templates.js">       </script>\n  </head>\n  <body>\n    <div class="ui-page">\n      <!-- header-->\n      <div class="ui-header">\n        <div class="ui-title inline">\n          <h2>Title</h2>\n        </div>\n        <div class="refresh-icon inline"><a onclick="refreshPageContent();"><img alt="icon" src="s40-theme/images/refresh_40x40.png"></a></div>\n      </div>\n      <div class="ui-content">\n        <p>Some test content</p>\n        <div onclick="refreshPageContent();" class="ui-button">Press this</div>\n        <div id="listdiv"></div>\n      </div>\n    </div>\n  </body>\n</html>');
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
  buf.push('</li>');
      }

    } else {
      var $$l = 0;
      for (var $index in listitems) {
        $$l++;      var it = listitems[$index];

  buf.push('\n  <li>');
  var __val__ = it
  buf.push(escape(null == __val__ ? "" : __val__));
  buf.push('</li>');
      }

    }
  }).call(this);

  buf.push('\n</ul>');
  }
  return buf.join("");
  };
}});

window.require.define({"templates/verticalview": function(exports, require, module) {
  module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
  attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
  var buf = [];
  with (locals || {}) {
  var interp;
  var __indent = [];
  buf.push('\n<html>\n  <body>\n    <div class="header_contnr">\n      <div class="inline ui-title"><img src="s40-theme/images/title_news.png" width="113" height="40" alt="News"/></div>\n      <div class="inline refresh-icon"><a onclick="refreshPageContent();"><img alt="icon" src="s40-theme/images/reload.png"/></a></div>\n    </div>\n    <div class="pubDate_contnr">\n      <div id="catPubDate" class="pubDate_txt">Wed, 06 Feb 2013 05:50:22 EST</div>\n    </div>\n    <div class="content">');
  // iterate entries
  ;(function(){
    if ('number' == typeof entries.length) {

      for (var index = 0, $$l = entries.length; index < $$l; index++) {
        var ent = entries[index];

  buf.push('\n      <div');
  buf.push(attrs({ 'id':("entry" + index), 'onclick':('mwl.setGroupTarget("#btns","#btn0", "show", "hide");mwl.setGroupTarget("#td_back", "#back_id_0", "show", "hide");mwl.addClass("#verviewcontainer", "height_cur");mwl.scrollTo("#views");mwl.switchClass("#horview", "hide", "show");mwl.removeClass("#entry0", "height_cur2");mwl.addClass("#entries", "entry0");mwl.switchClass("#views", "view1", "view2");mwl.addClass("#entries", "hortransition");'), "class": ('entry') }, {"id":true,"onclick":true}));
  buf.push('>       \n        <div style="display: block;">\n          <div class="headlinePic inline"><img width="77" height="50" src="http://img.timeinc.net/time/daily/2013/1302/232_sl_obama_0205.jpg"/></div>\n          <div class="headline inline">');
  var __val__ = ent.headline
  buf.push(escape(null == __val__ ? "" : __val__));
  buf.push('</div>\n          <div class="pubDate">');
  var __val__ = ent.pubDate
  buf.push(escape(null == __val__ ? "" : __val__));
  buf.push('</div>\n        </div>\n      </div>\n      <div class="greySep"></div>');
      }

    } else {
      var $$l = 0;
      for (var index in entries) {
        $$l++;      var ent = entries[index];

  buf.push('\n      <div');
  buf.push(attrs({ 'id':("entry" + index), 'onclick':('mwl.setGroupTarget("#btns","#btn0", "show", "hide");mwl.setGroupTarget("#td_back", "#back_id_0", "show", "hide");mwl.addClass("#verviewcontainer", "height_cur");mwl.scrollTo("#views");mwl.switchClass("#horview", "hide", "show");mwl.removeClass("#entry0", "height_cur2");mwl.addClass("#entries", "entry0");mwl.switchClass("#views", "view1", "view2");mwl.addClass("#entries", "hortransition");'), "class": ('entry') }, {"id":true,"onclick":true}));
  buf.push('>       \n        <div style="display: block;">\n          <div class="headlinePic inline"><img width="77" height="50" src="http://img.timeinc.net/time/daily/2013/1302/232_sl_obama_0205.jpg"/></div>\n          <div class="headline inline">');
  var __val__ = ent.headline
  buf.push(escape(null == __val__ ? "" : __val__));
  buf.push('</div>\n          <div class="pubDate">');
  var __val__ = ent.pubDate
  buf.push(escape(null == __val__ ? "" : __val__));
  buf.push('</div>\n        </div>\n      </div>\n      <div class="greySep"></div>');
      }

    }
  }).call(this);

  buf.push('\n      <div id="entryn0" onclick="mwl.setGroupTarget(&quot;#btns&quot;,&quot;#btn0&quot;, &quot;show&quot;, &quot;hide&quot;);mwl.setGroupTarget(&quot;#td_back&quot;, &quot;#back_id_0&quot;, &quot;show&quot;, &quot;hide&quot;);mwl.addClass(&quot;#verviewcontainer&quot;, &quot;height_cur&quot;);mwl.scrollTo(&quot;#views&quot;);mwl.switchClass(&quot;#horview&quot;, &quot;hide&quot;, &quot;show&quot;);mwl.removeClass(&quot;#entry0&quot;, &quot;height_cur2&quot;);mwl.addClass(&quot;#entries&quot;, &quot;entry0&quot;);mwl.switchClass(&quot;#views&quot;, &quot;view1&quot;, &quot;view2&quot;);mwl.addClass(&quot;#entries&quot;, &quot;hortransition&quot;);" class="entry">\n        <div style="display: block;">\n          <div class="headlinePic inline"><img width="77" height="50" src="http://img.timeinc.net/time/daily/2013/1302/232_sl_obama_0205.jpg"/></div>\n          <div class="headline inline">A Guide to Sequestration, the Bad Budget Policy We...</div>\n          <div class="pubDate">Wed, 06 Feb 2013 05:50:22 EST</div>\n        </div>\n      </div>\n      <div class="greySep"></div>\n      <div id="entryn1" onclick="mwl.setGroupTarget(&quot;#btns&quot;,&quot;#btn1&quot;, &quot;show&quot;, &quot;hide&quot;);mwl.setGroupTarget(&quot;#td_back&quot;, &quot;#back_id_1&quot;, &quot;show&quot;, &quot;hide&quot;);mwl.addClass(&quot;#verviewcontainer&quot;, &quot;height_cur&quot;);mwl.scrollTo(&quot;#views&quot;);mwl.switchClass(&quot;#horview&quot;, &quot;hide&quot;, &quot;show&quot;);mwl.removeClass(&quot;#entry1&quot;, &quot;height_cur2&quot;);mwl.addClass(&quot;#entries&quot;, &quot;entry1&quot;);mwl.switchClass(&quot;#views&quot;, &quot;view1&quot;, &quot;view2&quot;);mwl.addClass(&quot;#entries&quot;, &quot;hortransition&quot;);" class="entry">\n        <div style="display: block;">\n          <div class="headlinePic inline"><img width="75" height="50" src="s40-theme/images/rss3.png"/></div>\n          <div class="headline inline">Justice Sues S&P, But What Purpose are Ratings Age...</div>\n          <div class="pubDate">Wed, 06 Feb 2013 05:50:22 EST</div>\n        </div>\n      </div>\n      <div class="greySep"></div>\n      <div id="entryn2" onclick="mwl.setGroupTarget(&quot;#btns&quot;,&quot;#btn2&quot;, &quot;show&quot;, &quot;hide&quot;);mwl.setGroupTarget(&quot;#td_back&quot;, &quot;#back_id_2&quot;, &quot;show&quot;, &quot;hide&quot;);mwl.addClass(&quot;#verviewcontainer&quot;, &quot;height_cur&quot;);mwl.scrollTo(&quot;#views&quot;);mwl.switchClass(&quot;#horview&quot;, &quot;hide&quot;, &quot;show&quot;);mwl.removeClass(&quot;#entry2&quot;, &quot;height_cur2&quot;);mwl.addClass(&quot;#entries&quot;, &quot;entry2&quot;);mwl.switchClass(&quot;#views&quot;, &quot;view1&quot;, &quot;view2&quot;);mwl.addClass(&quot;#entries&quot;, &quot;hortransition&quot;);" class="entry">\n        <div style="display: block;">\n          <div class="headlinePic inline"><img width="77" height="50" src="http://img.timeinc.net/time/daily/2013/1302/232_int_siliviri_0205.jpg"/></div>\n          <div class="headline inline">The Big Prison By the Sea: Will Its Captives Chang...</div>\n          <div class="pubDate">Wed, 06 Feb 2013 05:50:22 EST</div>\n        </div>\n      </div>\n      <div class="greySep"></div>\n      <div id="entryn3" onclick="mwl.setGroupTarget(&quot;#btns&quot;,&quot;#btn3&quot;, &quot;show&quot;, &quot;hide&quot;);mwl.setGroupTarget(&quot;#td_back&quot;, &quot;#back_id_3&quot;, &quot;show&quot;, &quot;hide&quot;);mwl.addClass(&quot;#verviewcontainer&quot;, &quot;height_cur&quot;);mwl.scrollTo(&quot;#views&quot;);mwl.switchClass(&quot;#horview&quot;, &quot;hide&quot;, &quot;show&quot;);mwl.removeClass(&quot;#entry3&quot;, &quot;height_cur2&quot;);mwl.addClass(&quot;#entries&quot;, &quot;entry3&quot;);mwl.switchClass(&quot;#views&quot;, &quot;view1&quot;, &quot;view2&quot;);mwl.addClass(&quot;#entries&quot;, &quot;hortransition&quot;);" class="entry">\n        <div style="display: block;">\n          <div class="headlinePic inline"><img width="77" height="50" src="http://img.timeinc.net/time/daily/2013/1302/232_int_malilede1_0205.jpg"/></div>\n          <div class="headline inline">France\'s Mali Mission: Has al-Qaeda Been Defeated?...</div>\n          <div class="pubDate">Wed, 06 Feb 2013 05:50:22 EST</div>\n        </div>\n      </div>\n      <div class="greySep"></div>\n      <div id="entryn4" onclick="mwl.setGroupTarget(&quot;#btns&quot;,&quot;#btn4&quot;, &quot;show&quot;, &quot;hide&quot;);mwl.setGroupTarget(&quot;#td_back&quot;, &quot;#back_id_4&quot;, &quot;show&quot;, &quot;hide&quot;);mwl.addClass(&quot;#verviewcontainer&quot;, &quot;height_cur&quot;);mwl.scrollTo(&quot;#views&quot;);mwl.switchClass(&quot;#horview&quot;, &quot;hide&quot;, &quot;show&quot;);mwl.removeClass(&quot;#entry4&quot;, &quot;height_cur2&quot;);mwl.addClass(&quot;#entries&quot;, &quot;entry4&quot;);mwl.switchClass(&quot;#views&quot;, &quot;view1&quot;, &quot;view2&quot;);mwl.addClass(&quot;#entries&quot;, &quot;hortransition&quot;);" class="entry">\n        <div style="display: block;">\n          <div class="headlinePic inline"><img width="75" height="50" src="s40-theme/images/rss3.png"/></div>\n          <div class="headline inline">Former England Soccer Star Paul Gascoigne in Rehab...</div>\n          <div class="pubDate">Wed, 06 Feb 2013 05:50:22 EST</div>\n        </div>\n      </div>\n      <div class="greySep"></div>\n      <div id="entryn5" onclick="mwl.setGroupTarget(&quot;#btns&quot;,&quot;#btn5&quot;, &quot;show&quot;, &quot;hide&quot;);mwl.setGroupTarget(&quot;#td_back&quot;, &quot;#back_id_5&quot;, &quot;show&quot;, &quot;hide&quot;);mwl.addClass(&quot;#verviewcontainer&quot;, &quot;height_cur&quot;);mwl.scrollTo(&quot;#views&quot;);mwl.switchClass(&quot;#horview&quot;, &quot;hide&quot;, &quot;show&quot;);mwl.removeClass(&quot;#entry5&quot;, &quot;height_cur2&quot;);mwl.addClass(&quot;#entries&quot;, &quot;entry5&quot;);mwl.switchClass(&quot;#views&quot;, &quot;view1&quot;, &quot;view2&quot;);mwl.addClass(&quot;#entries&quot;, &quot;hortransition&quot;);" class="entry">\n        <div style="display: block;">\n          <div class="headlinePic inline"><img width="77" height="50" src="http://img.timeinc.net/time/daily/2013/1302/232_int_nu_river_0205.jpg"/></div>\n          <div class="headline inline">Chinese Environmentalists Lose Long Fight to Stop ...</div>\n          <div class="pubDate">Wed, 06 Feb 2013 05:50:23 EST</div>\n        </div>\n      </div>\n      <div class="greySep"></div>\n      <div id="entryn6" onclick="mwl.setGroupTarget(&quot;#btns&quot;,&quot;#btn6&quot;, &quot;show&quot;, &quot;hide&quot;);mwl.setGroupTarget(&quot;#td_back&quot;, &quot;#back_id_6&quot;, &quot;show&quot;, &quot;hide&quot;);mwl.addClass(&quot;#verviewcontainer&quot;, &quot;height_cur&quot;);mwl.scrollTo(&quot;#views&quot;);mwl.switchClass(&quot;#horview&quot;, &quot;hide&quot;, &quot;show&quot;);mwl.removeClass(&quot;#entry6&quot;, &quot;height_cur2&quot;);mwl.addClass(&quot;#entries&quot;, &quot;entry6&quot;);mwl.switchClass(&quot;#views&quot;, &quot;view1&quot;, &quot;view2&quot;);mwl.addClass(&quot;#entries&quot;, &quot;hortransition&quot;);" class="entry">\n        <div style="display: block;">\n          <div class="headlinePic inline"><img width="77" height="50" src="http://img.timeinc.net/time/daily/2013/1302/232_biz_chart_0205.jpg"/></div>\n          <div class="headline inline">The Most Important Chart in American Politics</div>\n          <div class="pubDate">Wed, 06 Feb 2013 05:50:23 EST</div>\n        </div>\n      </div>\n      <div class="greySep"></div>\n      <div id="entryn7" onclick="mwl.setGroupTarget(&quot;#btns&quot;,&quot;#btn7&quot;, &quot;show&quot;, &quot;hide&quot;);mwl.setGroupTarget(&quot;#td_back&quot;, &quot;#back_id_7&quot;, &quot;show&quot;, &quot;hide&quot;);mwl.addClass(&quot;#verviewcontainer&quot;, &quot;height_cur&quot;);mwl.scrollTo(&quot;#views&quot;);mwl.switchClass(&quot;#horview&quot;, &quot;hide&quot;, &quot;show&quot;);mwl.removeClass(&quot;#entry7&quot;, &quot;height_cur2&quot;);mwl.addClass(&quot;#entries&quot;, &quot;entry7&quot;);mwl.switchClass(&quot;#views&quot;, &quot;view1&quot;, &quot;view2&quot;);mwl.addClass(&quot;#entries&quot;, &quot;hortransition&quot;);" class="entry">\n        <div style="display: block;">\n          <div class="headlinePic inline"><img width="75" height="50" src="s40-theme/images/rss3.png"/></div>\n          <div class="headline inline">The Last Ride of the Devil of Ramadi: Sniper Chris...</div>\n          <div class="pubDate">Wed, 06 Feb 2013 05:50:23 EST</div>\n        </div>\n      </div>\n      <div class="greySep"></div>\n      <div id="entryn8" onclick="mwl.setGroupTarget(&quot;#btns&quot;,&quot;#btn8&quot;, &quot;show&quot;, &quot;hide&quot;);mwl.setGroupTarget(&quot;#td_back&quot;, &quot;#back_id_8&quot;, &quot;show&quot;, &quot;hide&quot;);mwl.addClass(&quot;#verviewcontainer&quot;, &quot;height_cur&quot;);mwl.scrollTo(&quot;#views&quot;);mwl.switchClass(&quot;#horview&quot;, &quot;hide&quot;, &quot;show&quot;);mwl.removeClass(&quot;#entry8&quot;, &quot;height_cur2&quot;);mwl.addClass(&quot;#entries&quot;, &quot;entry8&quot;);mwl.switchClass(&quot;#views&quot;, &quot;view1&quot;, &quot;view2&quot;);mwl.addClass(&quot;#entries&quot;, &quot;hortransition&quot;);" class="entry">\n        <div style="display: block;">\n          <div class="headlinePic inline"><img width="77" height="50" src="http://img.timeinc.net/time/daily/2013/1302/232_int_ninja_0204.jpg"/></div>\n          <div class="headline inline">You Don\'t Know Ninjas: 8 Revelations</div>\n          <div class="pubDate">Tue, 05 Feb 2013 09:20:00 EST</div>\n        </div>\n      </div>\n      <div class="greySep"></div>\n      <div id="entryn9" onclick="mwl.setGroupTarget(&quot;#btns&quot;,&quot;#btn9&quot;, &quot;show&quot;, &quot;hide&quot;);mwl.setGroupTarget(&quot;#td_back&quot;, &quot;#back_id_9&quot;, &quot;show&quot;, &quot;hide&quot;);mwl.addClass(&quot;#verviewcontainer&quot;, &quot;height_cur&quot;);mwl.scrollTo(&quot;#views&quot;);mwl.switchClass(&quot;#horview&quot;, &quot;hide&quot;, &quot;show&quot;);mwl.removeClass(&quot;#entry9&quot;, &quot;height_cur2&quot;);mwl.addClass(&quot;#entries&quot;, &quot;entry9&quot;);mwl.switchClass(&quot;#views&quot;, &quot;view1&quot;, &quot;view2&quot;);mwl.addClass(&quot;#entries&quot;, &quot;hortransition&quot;);" class="entry">\n        <div style="display: block;">\n          <div class="headlinePic inline"><img width="77" height="50" src="http://img.timeinc.net/time/daily/2013/1302/232_sci_asteroid_0204.jpg"/></div>\n          <div class="headline inline">Duck! Close Shave with an Asteroid</div>\n          <div class="pubDate">Tue, 05 Feb 2013 02:45:00 EST</div>\n        </div>\n      </div>\n      <div class="greySep"></div>\n    </div>\n  </body>\n</html>');
  }
  return buf.join("");
  };
}});

