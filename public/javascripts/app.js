(function(/*! Brunch !*/) {
  'use strict';

  var globals = typeof window !== 'undefined' ? window : global;
  if (typeof globals.require === 'function') return;

  var modules = {};
  var cache = {};

  var has = function(object, name) {
    return ({}).hasOwnProperty.call(object, name);
  };

  var expand = function(root, name) {
    var results = [], parts, part;
    if (/^\.\.?(\/|$)/.test(name)) {
      parts = [root, name].join('/').split('/');
    } else {
      parts = name.split('/');
    }
    for (var i = 0, length = parts.length; i < length; i++) {
      part = parts[i];
      if (part === '..') {
        results.pop();
      } else if (part !== '.' && part !== '') {
        results.push(part);
      }
    }
    return results.join('/');
  };

  var dirname = function(path) {
    return path.split('/').slice(0, -1).join('/');
  };

  var localRequire = function(path) {
    return function(name) {
      var dir = dirname(path);
      var absolute = expand(dir, name);
      return globals.require(absolute);
    };
  };

  var initModule = function(name, definition) {
    var module = {id: name, exports: {}};
    definition(module.exports, localRequire(name), module);
    var exports = cache[name] = module.exports;
    return exports;
  };

  var require = function(name) {
    var path = expand(name, '.');

    if (has(cache, path)) return cache[path];
    if (has(modules, path)) return initModule(path, modules[path]);

    var dirIndex = expand(path, './index');
    if (has(cache, dirIndex)) return cache[dirIndex];
    if (has(modules, dirIndex)) return initModule(dirIndex, modules[dirIndex]);

    throw new Error('Cannot find module "' + name + '"');
  };

  var define = function(bundle) {
    for (var key in bundle) {
      if (has(bundle, key)) {
        modules[key] = bundle[key];
      }
    }
  }

  globals.require = require;
  globals.require.define = define;
  globals.require.brunch = true;
})();

window.require.define({"rssapp": function(exports, require, module) {
  var App, jadeRender;

  jadeRender = function(template, ns) {
    var rend;
    console.log("Render", ns);
    rend = template(ns, jade.attrs, jade.escape, jade.rethrow, jade.merge);
    return rend;
  };

  App = (function() {

    function App() {
      this.vertTmpl = require("templates/verticalview");
    }

    App.prototype.fetch = function(url) {
      var _this = this;
      return jQuery.getFeed({
        url: url,
        success: function(feed) {
          var ents, it, _i, _len, _ref;
          console.log("Success", feed);
          ents = [];
          _ref = feed.items;
          for (_i = 0, _len = _ref.length; _i < _len; _i++) {
            it = _ref[_i];
            ents.push({
              headline: it.description,
              pubdate: it.updated
            });
          }
          console.log("Entries", ents);
          _this.items = ents;
          return _this.publishItems();
        }
      });
    };

    App.prototype.publishItems = function() {
      var html, ns;
      ns = {
        entries: this.items
      };
      html = jadeRender(this.vertTmpl, ns);
      return console.log(html);
    };

    return App;

  })();

  exports.App = App;
  
}});

window.require.define({"testCs": function(exports, require, module) {
  
  exports.callCs = function() {
    return console.log("Hello from coffeescript");
  };
  
}});

window.require.define({"testJs": function(exports, require, module) {
  exports.callJs = function () {
  	console.log("Hello from javascript!");
  }
}});

