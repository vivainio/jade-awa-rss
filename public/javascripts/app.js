window.require.define({"index": function(exports, require, module) {
  module.exports = function anonymous(locals, attrs, escape, rethrow, merge) {
  attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
  var buf = [];
  with (locals || {}) {
  var interp;
  buf.push('<!DOCTYPE html><html><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"><title>FooProject</title><link href="s40-theme/css/s40-theme.css" rel="stylesheet" type="text/css"><script language="javascript" type="text/javascript" src="s40-theme/js/screensize.js"></script><script type="text/javascript">function refreshPageContent() {\n// Add code for refreshing te page here...\n}</script></head><body><div class="ui-page"><!-- header--><div class="ui-header"><div class="ui-title inline"><h2>FooProject</h2></div><div class="refresh-icon inline"><a onclick="refreshPageContent();"><img alt="icon" src="s40-theme/images/refresh_40x40.png"></a></div></div><div class="ui-content">Test content</div></div></body></html>');
  }
  return buf.join("");
  };
}});

