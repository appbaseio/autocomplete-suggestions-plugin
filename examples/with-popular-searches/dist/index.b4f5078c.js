// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"63iPG":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "d231a23f43d60e28ed500b93b4f5078c";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
import type {
HMRAsset,
HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
(string): mixed;
cache: {|[string]: ParcelModule|};
hotData: mixed;
Module: any;
parent: ?ParcelRequire;
isParcelRequire: true;
modules: {|[string]: [Function, {|[string]: string|}]|};
HMR_BUNDLE_ID: string;
root: ParcelRequire;
}
interface ParcelModule {
hot: {|
data: mixed,
accept(cb: (Function) => void): void,
dispose(cb: (mixed) => void): void,
// accept(deps: Array<string> | string, cb: (Function) => void): void,
// decline(): void,
_acceptCallbacks: Array<(Function) => void>,
_disposeCallbacks: Array<(mixed) => void>,
|};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ✨ Error resolved');
  }
}
function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      // $FlowFixMe[incompatible-type]
      var href = links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"4ThtM":[function(require,module,exports) {
var _algoliaAutocompleteJs = require("@algolia/autocomplete-js");
require("@algolia/autocomplete-theme-classic");
var _appbaseioAutocompleteSuggestionsPlugin = require("@appbaseio/autocomplete-suggestions-plugin");
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
var _appbaseioAutocompleteSuggestionsPluginDefault = _parcelHelpers.interopDefault(_appbaseioAutocompleteSuggestionsPlugin);
var _utils = require("./utils");
var JSONTreeView = require("json-tree-view");
// appbase client config object
const appbaseClientConfig = {
  url: "https://appbase-demo-ansible-abxiydt-arc.searchbase.io",
  app: "best-buy-dataset",
  credentials: "b8917d239a52:82a2f609-6439-4253-a542-3697f5545947",
  settings: {
    userId: "s@s",
    recordAnalytics: true
  }
};
// reactivesearch api configuration
const rsApiConfig = {
  dataField: [{
    field: "name.autosuggest",
    weight: 1
  }, {
    field: "name",
    weight: 3
  }],
  enablePopularSuggestions: true,
  popularSuggestionsConfig: {
    size: 3,
    minChars: 3,
    index: "best-buy-dataset"
  },
  index: "best-buy-dataset",
  size: 3
};
const suggestionsPlugin = _appbaseioAutocompleteSuggestionsPluginDefault.default(appbaseClientConfig, {
  ...rsApiConfig
}, {
  onItemSelect: props => {
    const {item: {label}, setQuery} = props;
    setQuery(label.replace(/(<([^>]+)>)/gi, ""));
    _utils.renderResults({
      value: label.replace(/(<([^>]+)>)/gi, ""),
      url: appbaseClientConfig.url,
      app: appbaseClientConfig.app,
      credentials: appbaseClientConfig.credentials,
      settings: appbaseClientConfig.settings,
      query: {
        dataField: rsApiConfig.dataField
      }
    }, JSONTreeView);
  }
});
_algoliaAutocompleteJs.autocomplete({
  container: "#autocomplete",
  plugins: [suggestionsPlugin],
  debug: true,
  openOnFocus: true,
  detachedMediaQuery: "none"
});

},{"@algolia/autocomplete-js":"3Dm7o","@algolia/autocomplete-theme-classic":"4ZOnh","@appbaseio/autocomplete-suggestions-plugin":"4Vknd","@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y","./utils":"2SL7q","json-tree-view":"rfAXK"}],"3Dm7o":[function(require,module,exports) {
var define;
/*! @algolia/autocomplete-js 1.4.1 | MIT License | © Algolia, Inc. and contributors | https://github.com/algolia/autocomplete*/
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = "undefined" != typeof globalThis ? globalThis : e || self)["@algolia/autocomplete-js"] = {});
})(this, function (e) {
  "use strict";
  function t(e) {
    return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
      return typeof e;
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
    })(e);
  }
  function n(e, t, n) {
    return ((t in e) ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e);
  }
  function r() {
    return (r = Object.assign || (function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    })).apply(this, arguments);
  }
  function o(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      (t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r));
    }
    return n;
  }
  function i(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = null != arguments[t] ? arguments[t] : {};
      t % 2 ? o(Object(r), !0).forEach(function (t) {
        n(e, t, r[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
      });
    }
    return e;
  }
  function u(e, t) {
    if (null == e) return {};
    var n, r, o = (function (e, t) {
      if (null == e) return {};
      var n, r, o = {}, i = Object.keys(e);
      for (r = 0; r < i.length; r++) (n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]));
      return o;
    })(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (r = 0; r < i.length; r++) (n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
    }
    return o;
  }
  function a(e) {
    return (function (e) {
      if (Array.isArray(e)) return c(e);
    })(e) || (function (e) {
      if ("undefined" != typeof Symbol && (Symbol.iterator in Object(e))) return Array.from(e);
    })(e) || (function (e, t) {
      if (!e) return;
      if ("string" == typeof e) return c(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      "Object" === n && e.constructor && (n = e.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(e);
      if ("Arguments" === n || (/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/).test(n)) return c(e, t);
    })(e) || (function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    })();
  }
  function c(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function l(e) {
    return {
      current: e
    };
  }
  function s(e, t) {
    var n = void 0;
    return function () {
      for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
      (n && clearTimeout(n), n = setTimeout(function () {
        return e.apply(void 0, o);
      }, t));
    };
  }
  function p(e) {
    return e.reduce(function (e, t) {
      return e.concat(t);
    }, []);
  }
  var f = 0;
  function d() {
    return ("autocomplete-").concat(f++);
  }
  function v(e, t) {
    return t.reduce(function (e, t) {
      return e && e[t];
    }, e);
  }
  function m(e) {
    return 0 === e.collections.length ? 0 : e.collections.reduce(function (e, t) {
      return e + t.items.length;
    }, 0);
  }
  var h = function () {};
  function y(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      (t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r));
    }
    return n;
  }
  function g(e, t, n) {
    return ((t in e) ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e);
  }
  function b(e, t, n) {
    var r = t.initialState;
    return {
      getState: function () {
        return r;
      },
      dispatch: function (o, i) {
        var u = (function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? y(Object(n), !0).forEach(function (t) {
              g(e, t, n[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : y(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
          }
          return e;
        })({}, r);
        (r = e(r, {
          type: o,
          props: t,
          payload: i
        }), n({
          state: r,
          prevState: u
        }));
      }
    };
  }
  function O(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      (t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r));
    }
    return n;
  }
  function _(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? O(Object(n), !0).forEach(function (t) {
        P(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : O(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  function P(e, t, n) {
    return ((t in e) ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e);
  }
  function j(e, t, n, r) {
    if (!n) return null;
    if (e < 0 && (null === t || null !== r && 0 === t)) return n + e;
    var o = (null === t ? -1 : t) + e;
    return o <= -1 || o >= n ? null === r ? null : 0 : o;
  }
  function S(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      (t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r));
    }
    return n;
  }
  function w(e, t, n) {
    return ((t in e) ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e);
  }
  function I(e, t) {
    var n = [];
    return Promise.resolve(e(t)).then(function (e) {
      return Promise.all(e.filter(function (e) {
        return Boolean(e);
      }).map(function (e) {
        if ((e.sourceId, n.includes(e.sourceId))) throw new Error(("[Autocomplete] The `sourceId` ").concat(JSON.stringify(e.sourceId), " is not unique."));
        n.push(e.sourceId);
        var t = (function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? S(Object(n), !0).forEach(function (t) {
              w(e, t, n[t]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : S(Object(n)).forEach(function (t) {
              Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
            });
          }
          return e;
        })({
          getItemInputValue: function (e) {
            return e.state.query;
          },
          getItemUrl: function () {},
          onSelect: function (e) {
            (0, e.setIsOpen)(!1);
          },
          onActive: h
        }, e);
        return Promise.resolve(t);
      }));
    });
  }
  function E(e) {
    var t = (function (e) {
      var t = e.collections.map(function (e) {
        return e.items.length;
      }).reduce(function (e, t, n) {
        var r = (e[n - 1] || 0) + t;
        return (e.push(r), e);
      }, []).reduce(function (t, n) {
        return n <= e.activeItemId ? t + 1 : t;
      }, 0);
      return e.collections[t];
    })(e);
    if (!t) return null;
    var n = t.items[(function (e) {
      for (var t = e.state, n = e.collection, r = !1, o = 0, i = 0; !1 === r; ) {
        var u = t.collections[o];
        if (u === n) {
          r = !0;
          break;
        }
        (i += u.items.length, o++);
      }
      return t.activeItemId - i;
    })({
      state: e,
      collection: t
    })], r = t.source;
    return {
      item: n,
      itemInputValue: r.getItemInputValue({
        item: n,
        state: e
      }),
      itemUrl: r.getItemUrl({
        item: n,
        state: e
      }),
      source: r
    };
  }
  function A(e, t) {
    return e === t || e.contains(t);
  }
  function D(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      (t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r));
    }
    return n;
  }
  function C(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? D(Object(n), !0).forEach(function (t) {
        k(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : D(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  function k(e, t, n) {
    return ((t in e) ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e);
  }
  function x(e) {
    return (function (e) {
      if (Array.isArray(e)) return N(e);
    })(e) || (function (e) {
      if ("undefined" != typeof Symbol && (Symbol.iterator in Object(e))) return Array.from(e);
    })(e) || (function (e, t) {
      if (!e) return;
      if ("string" == typeof e) return N(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      "Object" === n && e.constructor && (n = e.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(e);
      if ("Arguments" === n || (/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/).test(n)) return N(e, t);
    })(e) || (function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    })();
  }
  function N(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function B(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      (t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r));
    }
    return n;
  }
  function T(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? B(Object(n), !0).forEach(function (t) {
        L(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : B(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  function L(e, t, n) {
    return ((t in e) ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e);
  }
  function q(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      (t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r));
    }
    return n;
  }
  function F(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? q(Object(n), !0).forEach(function (t) {
        R(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : q(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  function R(e, t, n) {
    return ((t in e) ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e);
  }
  function U(e) {
    return (function (e) {
      if (Array.isArray(e)) return M(e);
    })(e) || (function (e) {
      if ("undefined" != typeof Symbol && (Symbol.iterator in Object(e))) return Array.from(e);
    })(e) || (function (e, t) {
      if (!e) return;
      if ("string" == typeof e) return M(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      "Object" === n && e.constructor && (n = e.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(e);
      if ("Arguments" === n || (/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/).test(n)) return M(e, t);
    })(e) || (function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    })();
  }
  function M(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function H(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      (t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r));
    }
    return n;
  }
  function V(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? H(Object(n), !0).forEach(function (t) {
        W(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : H(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  function W(e, t, n) {
    return ((t in e) ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e);
  }
  function Q(e) {
    return Boolean(e.execute);
  }
  function $(e, t) {
    return (n = e, Boolean(null == n ? void 0 : n.execute) ? V(V({}, e), {}, {
      requests: e.queries.map(function (n) {
        return {
          query: n,
          sourceId: t,
          transformResponse: e.transformResponse
        };
      })
    }) : {
      items: e,
      sourceId: t
    });
    var n;
  }
  function z(e) {
    var t = e.reduce(function (e, t) {
      if (!Q(t)) return (e.push(t), e);
      var n = t.searchClient, r = t.execute, o = t.requests, i = e.find(function (e) {
        return Q(t) && Q(e) && e.searchClient === n && e.execute === r;
      });
      if (i) {
        var u;
        (u = i.items).push.apply(u, U(o));
      } else {
        var a = {
          execute: r,
          items: o,
          searchClient: n
        };
        e.push(a);
      }
      return e;
    }, []).map(function (e) {
      if (!Q(e)) return Promise.resolve(e);
      var t = e, n = t.execute, r = t.items;
      return n({
        searchClient: t.searchClient,
        requests: r
      });
    });
    return Promise.all(t).then(function (e) {
      return p(e);
    });
  }
  function G(e, t) {
    return t.map(function (t) {
      var n = e.filter(function (e) {
        return e.sourceId === t.sourceId;
      }), r = n.map(function (e) {
        return e.items;
      }), o = n[0].transformResponse, i = o ? o((function (e) {
        var t = e.map(function (e) {
          var t;
          return C(C({}, e), {}, {
            hits: null === (t = e.hits) || void 0 === t ? void 0 : t.map(function (t) {
              return C(C({}, t), {}, {
                __autocomplete_indexName: e.index,
                __autocomplete_queryID: e.queryID
              });
            })
          });
        });
        return {
          results: t,
          hits: t.map(function (e) {
            return e.hits;
          }).filter(Boolean),
          facetHits: t.map(function (e) {
            var t;
            return null === (t = e.facetHits) || void 0 === t ? void 0 : t.map(function (e) {
              return {
                label: e.value,
                count: e.count,
                _highlightResult: {
                  label: {
                    value: e.highlighted
                  }
                }
              };
            });
          }).filter(Boolean)
        };
      })(r)) : r;
      return (i.every(Boolean), ('The `getItems` function from source "').concat(t.sourceId, '" must return an array of items but returned ').concat(JSON.stringify(void 0), ".\n\nDid you forget to return items?\n\nSee: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems"), {
        source: t,
        items: i
      });
    });
  }
  function K(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      (t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r));
    }
    return n;
  }
  function J(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? K(Object(n), !0).forEach(function (t) {
        Y(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : K(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  function Y(e, t, n) {
    return ((t in e) ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e);
  }
  function X(e, t) {
    if (null == e) return {};
    var n, r, o = (function (e, t) {
      if (null == e) return {};
      var n, r, o = {}, i = Object.keys(e);
      for (r = 0; r < i.length; r++) (n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]));
      return o;
    })(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (r = 0; r < i.length; r++) (n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
    }
    return o;
  }
  var Z, ee, te, ne = null, re = (Z = -1, ee = -1, te = void 0, function (e) {
    var t = ++Z;
    return Promise.resolve(e).then(function (e) {
      return te && t < ee ? te : (ee = t, te = e, e);
    });
  });
  function oe(e) {
    var t = e.event, n = e.nextState, r = void 0 === n ? {} : n, o = e.props, i = e.query, u = e.refresh, a = e.store, c = X(e, ["event", "nextState", "props", "query", "refresh", "store"]);
    ne && o.environment.clearTimeout(ne);
    var l = c.setCollections, s = c.setIsOpen, f = c.setQuery, d = c.setActiveItemId, v = c.setStatus;
    if ((f(i), d(o.defaultActiveItemId), !i && !1 === o.openOnFocus)) {
      var m, h = a.getState().collections.map(function (e) {
        return J(J({}, e), {}, {
          items: []
        });
      });
      return (v("idle"), l(h), s(null !== (m = r.isOpen) && void 0 !== m ? m : o.shouldPanelOpen({
        state: a.getState()
      })), re(h).then(function () {
        return Promise.resolve();
      }));
    }
    return (v("loading"), ne = o.environment.setTimeout(function () {
      v("stalled");
    }, o.stallThreshold), re(o.getSources(J({
      query: i,
      refresh: u,
      state: a.getState()
    }, c)).then(function (e) {
      return Promise.all(e.map(function (e) {
        return Promise.resolve(e.getItems(J({
          query: i,
          refresh: u,
          state: a.getState()
        }, c))).then(function (t) {
          return $(t, e.sourceId);
        });
      })).then(z).then(function (t) {
        return G(t, e);
      }).then(function (e) {
        return (function (e) {
          var t = e.collections, n = e.props, r = e.state, o = t.reduce(function (e, t) {
            return F(F({}, e), {}, R({}, t.source.sourceId, F(F({}, t.source), {}, {
              getItems: function () {
                return p(t.items);
              }
            })));
          }, {});
          return p(n.reshape({
            sources: Object.values(o),
            sourcesBySourceId: o,
            state: r
          })).filter(Boolean).map(function (e) {
            return {
              source: e,
              items: e.getItems()
            };
          });
        })({
          collections: e,
          props: o,
          state: a.getState()
        });
      });
    })).then(function (e) {
      var n;
      (v("idle"), l(e));
      var p = o.shouldPanelOpen({
        state: a.getState()
      });
      s(null !== (n = r.isOpen) && void 0 !== n ? n : o.openOnFocus && !i && p || p);
      var f = E(a.getState());
      if (null !== a.getState().activeItemId && f) {
        var d = f.item, m = f.itemInputValue, h = f.itemUrl, y = f.source;
        y.onActive(J({
          event: t,
          item: d,
          itemInputValue: m,
          itemUrl: h,
          refresh: u,
          source: y,
          state: a.getState()
        }, c));
      }
    }).finally(function () {
      ne && o.environment.clearTimeout(ne);
    }));
  }
  function ie(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      (t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r));
    }
    return n;
  }
  function ue(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? ie(Object(n), !0).forEach(function (t) {
        ae(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ie(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  function ae(e, t, n) {
    return ((t in e) ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e);
  }
  function ce(e, t) {
    if (null == e) return {};
    var n, r, o = (function (e, t) {
      if (null == e) return {};
      var n, r, o = {}, i = Object.keys(e);
      for (r = 0; r < i.length; r++) (n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]));
      return o;
    })(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (r = 0; r < i.length; r++) (n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
    }
    return o;
  }
  function le(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      (t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r));
    }
    return n;
  }
  function se(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? le(Object(n), !0).forEach(function (t) {
        pe(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : le(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  function pe(e, t, n) {
    return ((t in e) ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e);
  }
  function fe(e, t) {
    if (null == e) return {};
    var n, r, o = (function (e, t) {
      if (null == e) return {};
      var n, r, o = {}, i = Object.keys(e);
      for (r = 0; r < i.length; r++) (n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]));
      return o;
    })(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (r = 0; r < i.length; r++) (n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
    }
    return o;
  }
  function de(e) {
    var t = e.props, n = e.refresh, r = e.store, o = fe(e, ["props", "refresh", "store"]);
    return {
      getEnvironmentProps: function (e) {
        var n = e.inputElement, o = e.formElement, i = e.panelElement;
        return se({
          onTouchStart: function (e) {
            !1 !== r.getState().isOpen && e.target !== n && (!1 === [o, i].some(function (n) {
              return A(n, e.target) || A(n, t.environment.document.activeElement);
            }) && r.dispatch("blur", null));
          },
          onTouchMove: function (e) {
            !1 !== r.getState().isOpen && n === t.environment.document.activeElement && e.target !== n && n.blur();
          }
        }, fe(e, ["inputElement", "formElement", "panelElement"]));
      },
      getRootProps: function (e) {
        return se({
          role: "combobox",
          "aria-expanded": r.getState().isOpen,
          "aria-haspopup": "listbox",
          "aria-owns": r.getState().isOpen ? ("").concat(t.id, "-list") : void 0,
          "aria-labelledby": ("").concat(t.id, "-label")
        }, e);
      },
      getFormProps: function (e) {
        e.inputElement;
        return se({
          action: "",
          noValidate: !0,
          role: "search",
          onSubmit: function (i) {
            var u;
            (i.preventDefault(), t.onSubmit(se({
              event: i,
              refresh: n,
              state: r.getState()
            }, o)), r.dispatch("submit", null), null === (u = e.inputElement) || void 0 === u || u.blur());
          },
          onReset: function (i) {
            var u;
            (i.preventDefault(), t.onReset(se({
              event: i,
              refresh: n,
              state: r.getState()
            }, o)), r.dispatch("reset", null), null === (u = e.inputElement) || void 0 === u || u.focus());
          }
        }, fe(e, ["inputElement"]));
      },
      getLabelProps: function (e) {
        return se({
          htmlFor: ("").concat(t.id, "-input"),
          id: ("").concat(t.id, "-label")
        }, e);
      },
      getInputProps: function (e) {
        function i(e) {
          ((t.openOnFocus || Boolean(r.getState().query)) && oe(se({
            event: e,
            props: t,
            query: r.getState().completion || r.getState().query,
            refresh: n,
            store: r
          }, o)), r.dispatch("focus", null));
        }
        var u = ("ontouchstart" in t.environment), a = e || ({}), c = (a.inputElement, a.maxLength), l = void 0 === c ? 512 : c, s = fe(a, ["inputElement", "maxLength"]), p = E(r.getState());
        return se({
          "aria-autocomplete": "both",
          "aria-activedescendant": r.getState().isOpen && null !== r.getState().activeItemId ? ("").concat(t.id, "-item-").concat(r.getState().activeItemId) : void 0,
          "aria-controls": r.getState().isOpen ? ("").concat(t.id, "-list") : void 0,
          "aria-labelledby": ("").concat(t.id, "-label"),
          value: r.getState().completion || r.getState().query,
          id: ("").concat(t.id, "-input"),
          autoComplete: "off",
          autoCorrect: "off",
          autoCapitalize: "off",
          enterKeyHint: null != p && p.itemUrl ? "go" : "search",
          spellCheck: "false",
          autoFocus: t.autoFocus,
          placeholder: t.placeholder,
          maxLength: l,
          type: "search",
          onChange: function (e) {
            oe(se({
              event: e,
              props: t,
              query: e.currentTarget.value.slice(0, l),
              refresh: n,
              store: r
            }, o));
          },
          onKeyDown: function (e) {
            !(function (e) {
              var t = e.event, n = e.props, r = e.refresh, o = e.store, i = ce(e, ["event", "props", "refresh", "store"]);
              if ("ArrowUp" === t.key || "ArrowDown" === t.key) {
                var u = function () {
                  var e = n.environment.document.getElementById(("").concat(n.id, "-item-").concat(o.getState().activeItemId));
                  e && (e.scrollIntoViewIfNeeded ? e.scrollIntoViewIfNeeded(!1) : e.scrollIntoView(!1));
                }, a = function () {
                  var e = E(o.getState());
                  if (null !== o.getState().activeItemId && e) {
                    var n = e.item, u = e.itemInputValue, a = e.itemUrl, c = e.source;
                    c.onActive(ue({
                      event: t,
                      item: n,
                      itemInputValue: u,
                      itemUrl: a,
                      refresh: r,
                      source: c,
                      state: o.getState()
                    }, i));
                  }
                };
                (t.preventDefault(), !1 === o.getState().isOpen && (n.openOnFocus || Boolean(o.getState().query)) ? oe(ue({
                  event: t,
                  props: n,
                  query: o.getState().query,
                  refresh: r,
                  store: o
                }, i)).then(function () {
                  (o.dispatch(t.key, {
                    nextActiveItemId: n.defaultActiveItemId
                  }), a(), setTimeout(u, 0));
                }) : (o.dispatch(t.key, {}), a(), u()));
              } else if ("Escape" === t.key) (t.preventDefault(), o.dispatch(t.key, null)); else if ("Enter" === t.key) {
                if (null === o.getState().activeItemId || o.getState().collections.every(function (e) {
                  return 0 === e.items.length;
                })) return;
                t.preventDefault();
                var c = E(o.getState()), l = c.item, s = c.itemInputValue, p = c.itemUrl, f = c.source;
                if (t.metaKey || t.ctrlKey) void 0 !== p && (f.onSelect(ue({
                  event: t,
                  item: l,
                  itemInputValue: s,
                  itemUrl: p,
                  refresh: r,
                  source: f,
                  state: o.getState()
                }, i)), n.navigator.navigateNewTab({
                  itemUrl: p,
                  item: l,
                  state: o.getState()
                })); else if (t.shiftKey) void 0 !== p && (f.onSelect(ue({
                  event: t,
                  item: l,
                  itemInputValue: s,
                  itemUrl: p,
                  refresh: r,
                  source: f,
                  state: o.getState()
                }, i)), n.navigator.navigateNewWindow({
                  itemUrl: p,
                  item: l,
                  state: o.getState()
                })); else if (t.altKey) ; else {
                  if (void 0 !== p) return (f.onSelect(ue({
                    event: t,
                    item: l,
                    itemInputValue: s,
                    itemUrl: p,
                    refresh: r,
                    source: f,
                    state: o.getState()
                  }, i)), void n.navigator.navigate({
                    itemUrl: p,
                    item: l,
                    state: o.getState()
                  }));
                  oe(ue({
                    event: t,
                    nextState: {
                      isOpen: !1
                    },
                    props: n,
                    query: s,
                    refresh: r,
                    store: o
                  }, i)).then(function () {
                    f.onSelect(ue({
                      event: t,
                      item: l,
                      itemInputValue: s,
                      itemUrl: p,
                      refresh: r,
                      source: f,
                      state: o.getState()
                    }, i));
                  });
                }
              }
            })(se({
              event: e,
              props: t,
              refresh: n,
              store: r
            }, o));
          },
          onFocus: i,
          onBlur: function () {
            u || r.dispatch("blur", null);
          },
          onClick: function (n) {
            e.inputElement !== t.environment.document.activeElement || r.getState().isOpen || i(n);
          }
        }, s);
      },
      getPanelProps: function (e) {
        return se({
          onMouseDown: function (e) {
            e.preventDefault();
          },
          onMouseLeave: function () {
            r.dispatch("mouseleave", null);
          }
        }, e);
      },
      getListProps: function (e) {
        return se({
          role: "listbox",
          "aria-labelledby": ("").concat(t.id, "-label"),
          id: ("").concat(t.id, "-list")
        }, e);
      },
      getItemProps: function (e) {
        var i = e.item, u = e.source, a = fe(e, ["item", "source"]);
        return se({
          id: ("").concat(t.id, "-item-").concat(i.__autocomplete_id),
          role: "option",
          "aria-selected": r.getState().activeItemId === i.__autocomplete_id,
          onMouseMove: function (e) {
            if (i.__autocomplete_id !== r.getState().activeItemId) {
              r.dispatch("mousemove", i.__autocomplete_id);
              var t = E(r.getState());
              if (null !== r.getState().activeItemId && t) {
                var u = t.item, a = t.itemInputValue, c = t.itemUrl, l = t.source;
                l.onActive(se({
                  event: e,
                  item: u,
                  itemInputValue: a,
                  itemUrl: c,
                  refresh: n,
                  source: l,
                  state: r.getState()
                }, o));
              }
            }
          },
          onMouseDown: function (e) {
            e.preventDefault();
          },
          onClick: function (e) {
            var a = u.getItemInputValue({
              item: i,
              state: r.getState()
            }), c = u.getItemUrl({
              item: i,
              state: r.getState()
            });
            (c ? Promise.resolve() : oe(se({
              event: e,
              nextState: {
                isOpen: !1
              },
              props: t,
              query: a,
              refresh: n,
              store: r
            }, o))).then(function () {
              u.onSelect(se({
                event: e,
                item: i,
                itemInputValue: a,
                itemUrl: c,
                refresh: n,
                source: u,
                state: r.getState()
              }, o));
            });
          }
        }, a);
      }
    };
  }
  function ve(e) {
    var t, n = e.state;
    return !1 === n.isOpen || null === n.activeItemId ? null : (null === (t = E(n)) || void 0 === t ? void 0 : t.itemInputValue) || null;
  }
  function me(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      (t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r));
    }
    return n;
  }
  function he(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? me(Object(n), !0).forEach(function (t) {
        ye(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : me(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  function ye(e, t, n) {
    return ((t in e) ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e);
  }
  var ge = function (e, t) {
    switch (t.type) {
      case "setActiveItemId":
        return he(he({}, e), {}, {
          activeItemId: t.payload
        });
      case "setQuery":
        return he(he({}, e), {}, {
          query: t.payload,
          completion: null
        });
      case "setCollections":
        return he(he({}, e), {}, {
          collections: t.payload
        });
      case "setIsOpen":
        return he(he({}, e), {}, {
          isOpen: t.payload
        });
      case "setStatus":
        return he(he({}, e), {}, {
          status: t.payload
        });
      case "setContext":
        return he(he({}, e), {}, {
          context: he(he({}, e.context), t.payload)
        });
      case "ArrowDown":
        var n = he(he({}, e), {}, {
          activeItemId: t.payload.hasOwnProperty("nextActiveItemId") ? t.payload.nextActiveItemId : j(1, e.activeItemId, m(e), t.props.defaultActiveItemId)
        });
        return he(he({}, n), {}, {
          completion: ve({
            state: n
          })
        });
      case "ArrowUp":
        var r = he(he({}, e), {}, {
          activeItemId: j(-1, e.activeItemId, m(e), t.props.defaultActiveItemId)
        });
        return he(he({}, r), {}, {
          completion: ve({
            state: r
          })
        });
      case "Escape":
        return e.isOpen ? he(he({}, e), {}, {
          activeItemId: null,
          isOpen: !1,
          completion: null
        }) : he(he({}, e), {}, {
          activeItemId: null,
          query: "",
          status: "idle",
          collections: []
        });
      case "submit":
        return he(he({}, e), {}, {
          activeItemId: null,
          isOpen: !1,
          status: "idle"
        });
      case "reset":
        return he(he({}, e), {}, {
          activeItemId: !0 === t.props.openOnFocus ? t.props.defaultActiveItemId : null,
          status: "idle",
          query: ""
        });
      case "focus":
        return he(he({}, e), {}, {
          activeItemId: t.props.defaultActiveItemId,
          isOpen: (t.props.openOnFocus || Boolean(e.query)) && t.props.shouldPanelOpen({
            state: e
          })
        });
      case "blur":
        return t.props.debug ? e : he(he({}, e), {}, {
          isOpen: !1,
          activeItemId: null
        });
      case "mousemove":
        return he(he({}, e), {}, {
          activeItemId: t.payload
        });
      case "mouseleave":
        return he(he({}, e), {}, {
          activeItemId: t.props.defaultActiveItemId
        });
      default:
        return (("The reducer action ").concat(JSON.stringify(t.type), " is not supported."), e);
    }
  };
  function be(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      (t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r));
    }
    return n;
  }
  function Oe(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? be(Object(n), !0).forEach(function (t) {
        _e(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : be(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  function _e(e, t, n) {
    return ((t in e) ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e);
  }
  function Pe(e) {
    var t = [], n = (function (e, t) {
      var n, r = "undefined" != typeof window ? window : {}, o = e.plugins || [];
      return T(T({
        debug: !1,
        openOnFocus: !1,
        placeholder: "",
        autoFocus: !1,
        defaultActiveItemId: null,
        stallThreshold: 300,
        environment: r,
        shouldPanelOpen: function (e) {
          return m(e.state) > 0;
        },
        reshape: function (e) {
          return e.sources;
        }
      }, e), {}, {
        id: null !== (n = e.id) && void 0 !== n ? n : d(),
        plugins: o,
        initialState: T({
          activeItemId: null,
          query: "",
          completion: null,
          collections: [],
          isOpen: !1,
          status: "idle",
          context: {}
        }, e.initialState),
        onStateChange: function (t) {
          var n;
          (null === (n = e.onStateChange) || void 0 === n || n.call(e, t), o.forEach(function (e) {
            var n;
            return null === (n = e.onStateChange) || void 0 === n ? void 0 : n.call(e, t);
          }));
        },
        onSubmit: function (t) {
          var n;
          (null === (n = e.onSubmit) || void 0 === n || n.call(e, t), o.forEach(function (e) {
            var n;
            return null === (n = e.onSubmit) || void 0 === n ? void 0 : n.call(e, t);
          }));
        },
        onReset: function (t) {
          var n;
          (null === (n = e.onReset) || void 0 === n || n.call(e, t), o.forEach(function (e) {
            var n;
            return null === (n = e.onReset) || void 0 === n ? void 0 : n.call(e, t);
          }));
        },
        getSources: function (n) {
          return Promise.all([].concat(x(o.map(function (e) {
            return e.getSources;
          })), [e.getSources]).filter(Boolean).map(function (e) {
            return I(e, n);
          })).then(function (e) {
            return p(e);
          }).then(function (e) {
            return e.map(function (e) {
              return T(T({}, e), {}, {
                onSelect: function (n) {
                  (e.onSelect(n), t.forEach(function (e) {
                    var t;
                    return null === (t = e.onSelect) || void 0 === t ? void 0 : t.call(e, n);
                  }));
                },
                onActive: function (n) {
                  (e.onActive(n), t.forEach(function (e) {
                    var t;
                    return null === (t = e.onActive) || void 0 === t ? void 0 : t.call(e, n);
                  }));
                }
              });
            });
          });
        },
        navigator: T({
          navigate: function (e) {
            var t = e.itemUrl;
            r.location.assign(t);
          },
          navigateNewTab: function (e) {
            var t = e.itemUrl, n = r.open(t, "_blank", "noopener");
            null == n || n.focus();
          },
          navigateNewWindow: function (e) {
            var t = e.itemUrl;
            r.open(t, "_blank", "noopener");
          }
        }, e.navigator)
      });
    })(e, t), r = b(ge, n, function (e) {
      var t = e.prevState, r = e.state;
      n.onStateChange(Oe({
        prevState: t,
        state: r,
        refresh: u
      }, o));
    }), o = (function (e) {
      var t = e.store;
      return {
        setActiveItemId: function (e) {
          t.dispatch("setActiveItemId", e);
        },
        setQuery: function (e) {
          t.dispatch("setQuery", e);
        },
        setCollections: function (e) {
          var n = 0, r = e.map(function (e) {
            return _(_({}, e), {}, {
              items: p(e.items).map(function (e) {
                return _(_({}, e), {}, {
                  __autocomplete_id: n++
                });
              })
            });
          });
          t.dispatch("setCollections", r);
        },
        setIsOpen: function (e) {
          t.dispatch("setIsOpen", e);
        },
        setStatus: function (e) {
          t.dispatch("setStatus", e);
        },
        setContext: function (e) {
          t.dispatch("setContext", e);
        }
      };
    })({
      store: r
    }), i = de(Oe({
      props: n,
      refresh: u,
      store: r
    }, o));
    function u() {
      return oe(Oe({
        event: new Event("input"),
        nextState: {
          isOpen: r.getState().isOpen
        },
        props: n,
        query: r.getState().query,
        refresh: u,
        store: r
      }, o));
    }
    return (n.plugins.forEach(function (e) {
      var n;
      return null === (n = e.subscribe) || void 0 === n ? void 0 : n.call(e, Oe(Oe({}, o), {}, {
        refresh: u,
        onSelect: function (e) {
          t.push({
            onSelect: e
          });
        },
        onActive: function (e) {
          t.push({
            onActive: e
          });
        }
      }));
    }), Oe(Oe({
      refresh: u
    }, i), o));
  }
  var je = function (e) {
    var t = e.environment, n = t.document.createElementNS("http://www.w3.org/2000/svg", "svg");
    (n.setAttribute("class", "aa-ClearIcon"), n.setAttribute("viewBox", "0 0 24 24"), n.setAttribute("width", "18"), n.setAttribute("height", "18"), n.setAttribute("fill", "currentColor"));
    var r = t.document.createElementNS("http://www.w3.org/2000/svg", "path");
    return (r.setAttribute("d", "M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"), n.appendChild(r), n);
  };
  function Se(e, t) {
    if ("string" == typeof t) {
      var n = e.document.querySelector(t);
      return (("The element ").concat(JSON.stringify(t), " is not in the document."), n);
    }
    return t;
  }
  function we() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.reduce(function (e, t) {
      return (Object.keys(t).forEach(function (n) {
        var r = e[n], o = t[n];
        r !== o && (e[n] = [r, o].filter(Boolean).join(" "));
      }), e);
    }, {});
  }
  var Ie = function (e) {
    return e && "object" === t(e);
  };
  function Ee() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    return t.reduce(function (e, t) {
      return (Object.keys(t).forEach(function (n) {
        var r = e[n], o = t[n];
        Array.isArray(r) && Array.isArray(o) ? e[n] = r.concat.apply(r, a(o)) : Ie(r) && Ie(o) ? e[n] = Ee(r, o) : e[n] = o;
      }), e);
    }, {});
  }
  function Ae(e, t, n) {
    e[t] = null === n ? "" : "number" != typeof n ? n : n + "px";
  }
  function De(e) {
    this._listeners[e.type](e);
  }
  function Ce(e, t, n) {
    var r, o, i = e[t];
    if ("style" === t) if ("string" == typeof n) e.style = n; else if (null === n) e.style = ""; else for (t in n) i && n[t] === i[t] || Ae(e.style, t, n[t]); else "o" === t[0] && "n" === t[1] ? (r = t !== (t = t.replace(/Capture$/, "")), ((o = t.toLowerCase()) in e) && (t = o), t = t.slice(2), e._listeners || (e._listeners = {}), e._listeners[t] = n, n ? i || e.addEventListener(t, De, r) : e.removeEventListener(t, De, r)) : "list" !== t && "tagName" !== t && "form" !== t && "type" !== t && "size" !== t && "download" !== t && "href" !== t && (t in e) ? e[t] = null == n ? "" : n : "function" != typeof n && "dangerouslySetInnerHTML" !== t && (null == n || !1 === n && !(/^ar/).test(t) ? e.removeAttribute(t) : e.setAttribute(t, n));
  }
  function ke(e) {
    switch (e) {
      case "onChange":
        return "onInput";
      default:
        return e;
    }
  }
  function xe(e, t) {
    for (var n in t) Ce(e, ke(n), t[n]);
  }
  function Ne(e, t) {
    for (var n in t) "o" === n[0] && "n" === n[1] || Ce(e, ke(n), t[n]);
  }
  function Be(e) {
    return function (t, n) {
      var r = n.children, o = void 0 === r ? [] : r, i = u(n, ["children"]), c = e.document.createElement(t);
      return (xe(c, i), c.append.apply(c, a(o)), c);
    };
  }
  var Te = function (e) {
    var t = e.environment.document.createElementNS("http://www.w3.org/2000/svg", "svg");
    return (t.setAttribute("class", "aa-LoadingIcon"), t.setAttribute("viewBox", "0 0 100 100"), t.setAttribute("width", "20"), t.setAttribute("height", "20"), t.innerHTML = '<circle\n  cx="50"\n  cy="50"\n  fill="none"\n  r="35"\n  stroke="currentColor"\n  stroke-dasharray="164.93361431346415 56.97787143782138"\n  stroke-width="6"\n>\n  <animateTransform\n    attributeName="transform"\n    type="rotate"\n    repeatCount="indefinite"\n    dur="1s"\n    values="0 50 50;90 50 50;180 50 50;360 50 50"\n    keyTimes="0;0.40;0.65;1"\n  />\n</circle>', t);
  }, Le = function (e) {
    var t = e.environment, n = t.document.createElementNS("http://www.w3.org/2000/svg", "svg");
    (n.setAttribute("class", "aa-SubmitIcon"), n.setAttribute("viewBox", "0 0 24 24"), n.setAttribute("width", "20"), n.setAttribute("height", "20"), n.setAttribute("fill", "currentColor"));
    var r = t.document.createElementNS("http://www.w3.org/2000/svg", "path");
    return (r.setAttribute("d", "M16.041 15.856c-0.034 0.026-0.067 0.055-0.099 0.087s-0.060 0.064-0.087 0.099c-1.258 1.213-2.969 1.958-4.855 1.958-1.933 0-3.682-0.782-4.95-2.050s-2.050-3.017-2.050-4.95 0.782-3.682 2.050-4.95 3.017-2.050 4.95-2.050 3.682 0.782 4.95 2.050 2.050 3.017 2.050 4.95c0 1.886-0.745 3.597-1.959 4.856zM21.707 20.293l-3.675-3.675c1.231-1.54 1.968-3.493 1.968-5.618 0-2.485-1.008-4.736-2.636-6.364s-3.879-2.636-6.364-2.636-4.736 1.008-6.364 2.636-2.636 3.879-2.636 6.364 1.008 4.736 2.636 6.364 3.879 2.636 6.364 2.636c2.125 0 4.078-0.737 5.618-1.968l3.675 3.675c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"), n.appendChild(r), n);
  };
  function qe(e) {
    var t = e.autocomplete, n = e.autocompleteScopeApi, r = e.classNames, o = e.environment, a = e.isDetached, c = e.placeholder, l = void 0 === c ? "Search" : c, s = e.propGetters, p = e.setIsModalOpen, f = e.state, d = e.translations, v = Be(o), m = s.getRootProps(i({
      state: f,
      props: t.getRootProps({})
    }, n)), h = v("div", i({
      class: r.root
    }, m)), y = v("div", {
      class: r.detachedContainer,
      onMouseDown: function (e) {
        e.stopPropagation();
      }
    }), g = v("div", {
      class: r.detachedOverlay,
      children: [y],
      onMouseDown: function () {
        (p(!1), t.setIsOpen(!1));
      }
    }), b = s.getLabelProps(i({
      state: f,
      props: t.getLabelProps({})
    }, n)), O = v("button", {
      class: r.submitButton,
      type: "submit",
      title: d.submitButtonTitle,
      children: [Le({
        environment: o
      })]
    }), _ = v("label", i({
      class: r.label,
      children: [O]
    }, b)), P = v("button", {
      class: r.clearButton,
      type: "reset",
      title: d.clearButtonTitle,
      children: [je({
        environment: o
      })]
    }), j = v("div", {
      class: r.loadingIndicator,
      children: [Te({
        environment: o
      })]
    }), S = (function (e) {
      var t = e.autocompleteScopeApi, n = e.environment, r = (e.classNames, e.getInputProps), o = e.getInputPropsCore, a = e.onDetachedEscape, c = e.state, l = u(e, ["autocompleteScopeApi", "environment", "classNames", "getInputProps", "getInputPropsCore", "onDetachedEscape", "state"]), s = Be(n)("input", l), p = r(i({
        state: c,
        props: o({
          inputElement: s
        }),
        inputElement: s
      }, t));
      return (xe(s, i(i({}, p), {}, {
        onKeyDown: function (e) {
          if (a && "Escape" === e.key) return (e.preventDefault(), void a());
          p.onKeyDown(e);
        }
      })), s);
    })({
      class: r.input,
      environment: o,
      state: f,
      getInputProps: s.getInputProps,
      getInputPropsCore: t.getInputProps,
      autocompleteScopeApi: n,
      onDetachedEscape: a ? function () {
        (t.setIsOpen(!1), p(!1));
      } : void 0
    }), w = v("div", {
      class: r.inputWrapperPrefix,
      children: [_, j]
    }), I = v("div", {
      class: r.inputWrapperSuffix,
      children: [P]
    }), E = v("div", {
      class: r.inputWrapper,
      children: [S]
    }), A = s.getFormProps(i({
      state: f,
      props: t.getFormProps({
        inputElement: S
      })
    }, n)), D = v("form", i({
      class: r.form,
      children: [w, E, I]
    }, A)), C = s.getPanelProps(i({
      state: f,
      props: t.getPanelProps({})
    }, n)), k = v("div", i({
      class: r.panel
    }, C));
    if (a) {
      var x = v("div", {
        class: r.detachedSearchButtonIcon,
        children: [Le({
          environment: o
        })]
      }), N = v("div", {
        class: r.detachedSearchButtonPlaceholder,
        textContent: l
      }), B = v("button", {
        class: r.detachedSearchButton,
        onClick: function (e) {
          (e.preventDefault(), p(!0));
        },
        children: [x, N]
      }), T = v("button", {
        class: r.detachedCancelButton,
        textContent: d.detachedCancelButtonText,
        onClick: function () {
          (t.setIsOpen(!1), p(!1));
        }
      }), L = v("div", {
        class: r.detachedFormContainer,
        children: [D, T]
      });
      (y.appendChild(L), h.appendChild(B));
    } else h.appendChild(D);
    return {
      detachedContainer: y,
      detachedOverlay: g,
      inputWrapper: E,
      input: S,
      root: h,
      form: D,
      label: _,
      submitButton: O,
      clearButton: P,
      loadingIndicator: j,
      panel: k
    };
  }
  var Fe, Re, Ue, Me, He = {}, Ve = [], We = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function Qe(e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  }
  function $e(e) {
    var t = e.parentNode;
    t && t.removeChild(e);
  }
  function ze(e, t, n) {
    var r, o, i, u = arguments, a = {};
    for (i in t) "key" == i ? r = t[i] : "ref" == i ? o = t[i] : a[i] = t[i];
    if (arguments.length > 3) for ((n = [n], i = 3); i < arguments.length; i++) n.push(u[i]);
    if ((null != n && (a.children = n), "function" == typeof e && null != e.defaultProps)) for (i in e.defaultProps) void 0 === a[i] && (a[i] = e.defaultProps[i]);
    return Ge(e, a, r, o, null);
  }
  function Ge(e, t, n, r, o) {
    var i = {
      type: e,
      props: t,
      key: n,
      ref: r,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __d: void 0,
      __c: null,
      __h: null,
      constructor: void 0,
      __v: null == o ? ++Fe.__v : o
    };
    return (null != Fe.vnode && Fe.vnode(i), i);
  }
  function Ke(e) {
    return e.children;
  }
  function Je(e, t) {
    (this.props = e, this.context = t);
  }
  function Ye(e, t) {
    if (null == t) return e.__ ? Ye(e.__, e.__.__k.indexOf(e) + 1) : null;
    for (var n; t < e.__k.length; t++) if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
    return "function" == typeof e.type ? Ye(e) : null;
  }
  function Xe(e) {
    var t, n;
    if (null != (e = e.__) && null != e.__c) {
      for ((e.__e = e.__c.base = null, t = 0); t < e.__k.length; t++) if (null != (n = e.__k[t]) && null != n.__e) {
        e.__e = e.__c.base = n.__e;
        break;
      }
      return Xe(e);
    }
  }
  function Ze(e) {
    (!e.__d && (e.__d = !0) && Re.push(e) && !et.__r++ || Me !== Fe.debounceRendering) && ((Me = Fe.debounceRendering) || Ue)(et);
  }
  function et() {
    for (var e; et.__r = Re.length; ) (e = Re.sort(function (e, t) {
      return e.__v.__b - t.__v.__b;
    }), Re = [], e.some(function (e) {
      var t, n, r, o, i, u;
      e.__d && (i = (o = (t = e).__v).__e, (u = t.__P) && (n = [], (r = Qe({}, o)).__v = o.__v + 1, ct(u, o, r, t.__n, void 0 !== u.ownerSVGElement, null != o.__h ? [i] : null, n, null == i ? Ye(o) : i, o.__h), lt(n, o), o.__e != i && Xe(o)));
    }));
  }
  function tt(e, t, n, r, o, i, u, a, c, l) {
    var s, p, f, d, v, m, h, y = r && r.__k || Ve, g = y.length;
    for ((n.__k = [], s = 0); s < t.length; s++) if (null != (d = n.__k[s] = null == (d = t[s]) || "boolean" == typeof d ? null : "string" == typeof d || "number" == typeof d || "bigint" == typeof d ? Ge(null, d, null, null, d) : Array.isArray(d) ? Ge(Ke, {
      children: d
    }, null, null, null) : d.__b > 0 ? Ge(d.type, d.props, d.key, null, d.__v) : d)) {
      if ((d.__ = n, d.__b = n.__b + 1, null === (f = y[s]) || f && d.key == f.key && d.type === f.type)) y[s] = void 0; else for (p = 0; p < g; p++) {
        if ((f = y[p]) && d.key == f.key && d.type === f.type) {
          y[p] = void 0;
          break;
        }
        f = null;
      }
      (ct(e, d, f = f || He, o, i, u, a, c, l), v = d.__e, (p = d.ref) && f.ref != p && (h || (h = []), f.ref && h.push(f.ref, null, d), h.push(p, d.__c || v, d)), null != v ? (null == m && (m = v), "function" == typeof d.type && null != d.__k && d.__k === f.__k ? d.__d = c = nt(d, c, e) : c = rt(e, d, f, y, v, c), l || "option" !== n.type ? "function" == typeof n.type && (n.__d = c) : e.value = "") : c && f.__e == c && c.parentNode != e && (c = Ye(f)));
    }
    for ((n.__e = m, s = g); s--; ) null != y[s] && ("function" == typeof n.type && null != y[s].__e && y[s].__e == n.__d && (n.__d = Ye(r, s + 1)), ft(y[s], y[s]));
    if (h) for (s = 0; s < h.length; s++) pt(h[s], h[++s], h[++s]);
  }
  function nt(e, t, n) {
    var r, o;
    for (r = 0; r < e.__k.length; r++) (o = e.__k[r]) && (o.__ = e, t = "function" == typeof o.type ? nt(o, t, n) : rt(n, o, o, e.__k, o.__e, t));
    return t;
  }
  function rt(e, t, n, r, o, i) {
    var u, a, c;
    if (void 0 !== t.__d) (u = t.__d, t.__d = void 0); else if (null == n || o != i || null == o.parentNode) e: if (null == i || i.parentNode !== e) (e.appendChild(o), u = null); else {
      for ((a = i, c = 0); (a = a.nextSibling) && c < r.length; c += 2) if (a == o) break e;
      (e.insertBefore(o, i), u = i);
    }
    return void 0 !== u ? u : o.nextSibling;
  }
  function ot(e, t, n) {
    "-" === t[0] ? e.setProperty(t, n) : e[t] = null == n ? "" : "number" != typeof n || We.test(t) ? n : n + "px";
  }
  function it(e, t, n, r, o) {
    var i;
    e: if ("style" === t) if ("string" == typeof n) e.style.cssText = n; else {
      if (("string" == typeof r && (e.style.cssText = r = ""), r)) for (t in r) n && (t in n) || ot(e.style, t, "");
      if (n) for (t in n) r && n[t] === r[t] || ot(e.style, t, n[t]);
    } else if ("o" === t[0] && "n" === t[1]) (i = t !== (t = t.replace(/Capture$/, "")), t = (t.toLowerCase() in e) ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? r || e.addEventListener(t, i ? at : ut, i) : e.removeEventListener(t, i ? at : ut, i)); else if ("dangerouslySetInnerHTML" !== t) {
      if (o) t = t.replace(/xlink[H:h]/, "h").replace(/sName$/, "s"); else if ("href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && (t in e)) try {
        e[t] = null == n ? "" : n;
        break e;
      } catch (e) {}
      "function" == typeof n || (null != n && (!1 !== n || "a" === t[0] && "r" === t[1]) ? e.setAttribute(t, n) : e.removeAttribute(t));
    }
  }
  function ut(e) {
    this.l[e.type + !1](Fe.event ? Fe.event(e) : e);
  }
  function at(e) {
    this.l[e.type + !0](Fe.event ? Fe.event(e) : e);
  }
  function ct(e, t, n, r, o, i, u, a, c) {
    var l, s, p, f, d, v, m, h, y, g, b, O = t.type;
    if (void 0 !== t.constructor) return null;
    (null != n.__h && (c = n.__h, a = t.__e = n.__e, t.__h = null, i = [a]), (l = Fe.__b) && l(t));
    try {
      e: if ("function" == typeof O) {
        if ((h = t.props, y = (l = O.contextType) && r[l.__c], g = l ? y ? y.props.value : l.__ : r, n.__c ? m = (s = t.__c = n.__c).__ = s.__E : (("prototype" in O) && O.prototype.render ? t.__c = s = new O(h, g) : (t.__c = s = new Je(h, g), s.constructor = O, s.render = dt), y && y.sub(s), s.props = h, s.state || (s.state = {}), s.context = g, s.__n = r, p = s.__d = !0, s.__h = []), null == s.__s && (s.__s = s.state), null != O.getDerivedStateFromProps && (s.__s == s.state && (s.__s = Qe({}, s.__s)), Qe(s.__s, O.getDerivedStateFromProps(h, s.__s))), f = s.props, d = s.state, p)) (null == O.getDerivedStateFromProps && null != s.componentWillMount && s.componentWillMount(), null != s.componentDidMount && s.__h.push(s.componentDidMount)); else {
          if ((null == O.getDerivedStateFromProps && h !== f && null != s.componentWillReceiveProps && s.componentWillReceiveProps(h, g), !s.__e && null != s.shouldComponentUpdate && !1 === s.shouldComponentUpdate(h, s.__s, g) || t.__v === n.__v)) {
            (s.props = h, s.state = s.__s, t.__v !== n.__v && (s.__d = !1), s.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach(function (e) {
              e && (e.__ = t);
            }), s.__h.length && u.push(s));
            break e;
          }
          (null != s.componentWillUpdate && s.componentWillUpdate(h, s.__s, g), null != s.componentDidUpdate && s.__h.push(function () {
            s.componentDidUpdate(f, d, v);
          }));
        }
        (s.context = g, s.props = h, s.state = s.__s, (l = Fe.__r) && l(t), s.__d = !1, s.__v = t, s.__P = e, l = s.render(s.props, s.state, s.context), s.state = s.__s, null != s.getChildContext && (r = Qe(Qe({}, r), s.getChildContext())), p || null == s.getSnapshotBeforeUpdate || (v = s.getSnapshotBeforeUpdate(f, d)), b = null != l && l.type === Ke && null == l.key ? l.props.children : l, tt(e, Array.isArray(b) ? b : [b], t, n, r, o, i, u, a, c), s.base = t.__e, t.__h = null, s.__h.length && u.push(s), m && (s.__E = s.__ = null), s.__e = !1);
      } else null == i && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = st(n.__e, t, n, r, o, i, u, c);
      (l = Fe.diffed) && l(t);
    } catch (e) {
      (t.__v = null, (c || null != i) && (t.__e = a, t.__h = !!c, i[i.indexOf(a)] = null), Fe.__e(e, t, n));
    }
  }
  function lt(e, t) {
    (Fe.__c && Fe.__c(t, e), e.some(function (t) {
      try {
        (e = t.__h, t.__h = [], e.some(function (e) {
          e.call(t);
        }));
      } catch (e) {
        Fe.__e(e, t.__v);
      }
    }));
  }
  function st(e, t, n, r, o, i, u, a) {
    var c, l, s, p, f = n.props, d = t.props, v = t.type, m = 0;
    if (("svg" === v && (o = !0), null != i)) for (; m < i.length; m++) if ((c = i[m]) && (c === e || (v ? c.localName == v : 3 == c.nodeType))) {
      (e = c, i[m] = null);
      break;
    }
    if (null == e) {
      if (null === v) return document.createTextNode(d);
      (e = o ? document.createElementNS("http://www.w3.org/2000/svg", v) : document.createElement(v, d.is && d), i = null, a = !1);
    }
    if (null === v) f === d || a && e.data === d || (e.data = d); else {
      if ((i = i && Ve.slice.call(e.childNodes), l = (f = n.props || He).dangerouslySetInnerHTML, s = d.dangerouslySetInnerHTML, !a)) {
        if (null != i) for ((f = {}, p = 0); p < e.attributes.length; p++) f[e.attributes[p].name] = e.attributes[p].value;
        (s || l) && (s && (l && s.__html == l.__html || s.__html === e.innerHTML) || (e.innerHTML = s && s.__html || ""));
      }
      if (((function (e, t, n, r, o) {
        var i;
        for (i in n) "children" === i || "key" === i || (i in t) || it(e, i, null, n[i], r);
        for (i in t) o && "function" != typeof t[i] || "children" === i || "key" === i || "value" === i || "checked" === i || n[i] === t[i] || it(e, i, t[i], n[i], r);
      })(e, d, f, o, a), s)) t.__k = []; else if ((m = t.props.children, tt(e, Array.isArray(m) ? m : [m], t, n, r, o && "foreignObject" !== v, i, u, e.firstChild, a), null != i)) for (m = i.length; m--; ) null != i[m] && $e(i[m]);
      a || (("value" in d) && void 0 !== (m = d.value) && (m !== e.value || "progress" === v && !m) && it(e, "value", m, f.value, !1), ("checked" in d) && void 0 !== (m = d.checked) && m !== e.checked && it(e, "checked", m, f.checked, !1));
    }
    return e;
  }
  function pt(e, t, n) {
    try {
      "function" == typeof e ? e(t) : e.current = t;
    } catch (e) {
      Fe.__e(e, n);
    }
  }
  function ft(e, t, n) {
    var r, o, i;
    if ((Fe.unmount && Fe.unmount(e), (r = e.ref) && (r.current && r.current !== e.__e || pt(r, null, t)), n || "function" == typeof e.type || (n = null != (o = e.__e)), e.__e = e.__d = void 0, null != (r = e.__c))) {
      if (r.componentWillUnmount) try {
        r.componentWillUnmount();
      } catch (e) {
        Fe.__e(e, t);
      }
      r.base = r.__P = null;
    }
    if (r = e.__k) for (i = 0; i < r.length; i++) r[i] && ft(r[i], t, n);
    null != o && $e(o);
  }
  function dt(e, t, n) {
    return this.constructor(e, n);
  }
  (Fe = {
    __e: function (e, t) {
      for (var n, r, o; t = t.__; ) if ((n = t.__c) && !n.__) try {
        if (((r = n.constructor) && null != r.getDerivedStateFromError && (n.setState(r.getDerivedStateFromError(e)), o = n.__d), null != n.componentDidCatch && (n.componentDidCatch(e), o = n.__d), o)) return n.__E = n;
      } catch (t) {
        e = t;
      }
      throw e;
    },
    __v: 0
  }, Je.prototype.setState = function (e, t) {
    var n;
    (n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = Qe({}, this.state), "function" == typeof e && (e = e(Qe({}, n), this.props)), e && Qe(n, e), null != e && this.__v && (t && this.__h.push(t), Ze(this)));
  }, Je.prototype.forceUpdate = function (e) {
    this.__v && (this.__e = !0, e && this.__h.push(e), Ze(this));
  }, Je.prototype.render = Ke, Re = [], Ue = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, et.__r = 0);
  var vt = "__aa-highlight__", mt = "__/aa-highlight__";
  function ht(e) {
    var t = e.highlightedValue.split(vt), n = t.shift(), r = (function () {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      return {
        get: function () {
          return e;
        },
        add: function (t) {
          var n = e[e.length - 1];
          (null == n ? void 0 : n.isHighlighted) === t.isHighlighted ? e[e.length - 1] = {
            value: n.value + t.value,
            isHighlighted: n.isHighlighted
          } : e.push(t);
        }
      };
    })(n ? [{
      value: n,
      isHighlighted: !1
    }] : []);
    return (t.forEach(function (e) {
      var t = e.split(mt);
      (r.add({
        value: t[0],
        isHighlighted: !0
      }), "" !== t[1] && r.add({
        value: t[1],
        isHighlighted: !1
      }));
    }), r.get());
  }
  function yt(e) {
    return (function (e) {
      if (Array.isArray(e)) return gt(e);
    })(e) || (function (e) {
      if ("undefined" != typeof Symbol && (Symbol.iterator in Object(e))) return Array.from(e);
    })(e) || (function (e, t) {
      if (!e) return;
      if ("string" == typeof e) return gt(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      "Object" === n && e.constructor && (n = e.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(e);
      if ("Arguments" === n || (/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/).test(n)) return gt(e, t);
    })(e) || (function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    })();
  }
  function gt(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function bt(e) {
    var t = e.hit, n = e.attribute, r = Array.isArray(n) ? n : [n], o = v(t, ["_highlightResult"].concat(yt(r), ["value"]));
    return ("string" != typeof o && (o = v(t, r) || ""), ht({
      highlightedValue: o
    }));
  }
  var Ot = {
    "&amp;": "&",
    "&lt;": "<",
    "&gt;": ">",
    "&quot;": '"',
    "&#39;": "'"
  }, _t = new RegExp(/\w/i), Pt = /&(amp|quot|lt|gt|#39);/g, jt = RegExp(Pt.source);
  function St(e, t) {
    var n, r, o, i = e[t], u = (null === (n = e[t + 1]) || void 0 === n ? void 0 : n.isHighlighted) || !0, a = (null === (r = e[t - 1]) || void 0 === r ? void 0 : r.isHighlighted) || !0;
    return _t.test((o = i.value) && jt.test(o) ? o.replace(Pt, function (e) {
      return Ot[e];
    }) : o) || a !== u ? i.isHighlighted : a;
  }
  function wt(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      (t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r));
    }
    return n;
  }
  function It(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? wt(Object(n), !0).forEach(function (t) {
        Et(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : wt(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  function Et(e, t, n) {
    return ((t in e) ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e);
  }
  function At(e) {
    return e.some(function (e) {
      return e.isHighlighted;
    }) ? e.map(function (t, n) {
      return It(It({}, t), {}, {
        isHighlighted: !St(e, n)
      });
    }) : e.map(function (e) {
      return It(It({}, e), {}, {
        isHighlighted: !1
      });
    });
  }
  function Dt(e) {
    return (function (e) {
      if (Array.isArray(e)) return Ct(e);
    })(e) || (function (e) {
      if ("undefined" != typeof Symbol && (Symbol.iterator in Object(e))) return Array.from(e);
    })(e) || (function (e, t) {
      if (!e) return;
      if ("string" == typeof e) return Ct(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      "Object" === n && e.constructor && (n = e.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(e);
      if ("Arguments" === n || (/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/).test(n)) return Ct(e, t);
    })(e) || (function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    })();
  }
  function Ct(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function kt(e) {
    var t = e.hit, n = e.attribute, r = Array.isArray(n) ? n : [n], o = v(t, ["_snippetResult"].concat(Dt(r), ["value"]));
    return ("string" != typeof o && (o = v(t, r) || ""), ht({
      highlightedValue: o
    }));
  }
  function xt(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      (t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r));
    }
    return n;
  }
  function Nt(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? xt(Object(n), !0).forEach(function (t) {
        Bt(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : xt(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  function Bt(e, t, n) {
    return ((t in e) ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e);
  }
  var Tt = "1.4.1";
  function Lt(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      (t && (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })), n.push.apply(n, r));
    }
    return n;
  }
  function qt(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2 ? Lt(Object(n), !0).forEach(function (t) {
        Ft(e, t, n[t]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Lt(Object(n)).forEach(function (t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
      });
    }
    return e;
  }
  function Ft(e, t, n) {
    return ((t in e) ? Object.defineProperty(e, t, {
      value: n,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }) : e[t] = n, e);
  }
  function Rt(e, t) {
    if (null == e) return {};
    var n, r, o = (function (e, t) {
      if (null == e) return {};
      var n, r, o = {}, i = Object.keys(e);
      for (r = 0; r < i.length; r++) (n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]));
      return o;
    })(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (r = 0; r < i.length; r++) (n = i[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
    }
    return o;
  }
  function Ut(e) {
    return (function (e) {
      if (Array.isArray(e)) return Mt(e);
    })(e) || (function (e) {
      if ("undefined" != typeof Symbol && (Symbol.iterator in Object(e))) return Array.from(e);
    })(e) || (function (e, t) {
      if (!e) return;
      if ("string" == typeof e) return Mt(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      "Object" === n && e.constructor && (n = e.constructor.name);
      if ("Map" === n || "Set" === n) return Array.from(e);
      if ("Arguments" === n || (/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/).test(n)) return Mt(e, t);
    })(e) || (function () {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    })();
  }
  function Mt(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function Ht(e) {
    var t = e.createElement, n = e.Fragment;
    return function (e) {
      var r, o = e.hit, i = e.attribute, u = e.tagName, a = void 0 === u ? "mark" : u;
      return t(n, {}, (r = {
        hit: o,
        attribute: i
      }, At(bt(r))).map(function (e, n) {
        return e.isHighlighted ? t(a, {
          key: n
        }, e.value) : e.value;
      }));
    };
  }
  function Vt(e) {
    var t = e.createElement, n = e.Fragment;
    return function (e) {
      var r, o = e.hit, i = e.attribute, u = e.tagName, a = void 0 === u ? "mark" : u;
      return t(n, {}, (r = {
        hit: o,
        attribute: i
      }, At(kt(r))).map(function (e, n) {
        return e.isHighlighted ? t(a, {
          key: n
        }, e.value) : e.value;
      }));
    };
  }
  function Wt(e) {
    var t = e.createElement, n = e.Fragment;
    return function (e) {
      var r = e.hit, o = e.attribute, i = e.tagName, u = void 0 === i ? "mark" : i;
      return t(n, {}, kt({
        hit: r,
        attribute: o
      }).map(function (e, n) {
        return e.isHighlighted ? t(u, {
          key: n
        }, e.value) : e.value;
      }));
    };
  }
  var Qt = {
    clearButton: "aa-ClearButton",
    detachedCancelButton: "aa-DetachedCancelButton",
    detachedContainer: "aa-DetachedContainer",
    detachedFormContainer: "aa-DetachedFormContainer",
    detachedOverlay: "aa-DetachedOverlay",
    detachedSearchButton: "aa-DetachedSearchButton",
    detachedSearchButtonIcon: "aa-DetachedSearchButtonIcon",
    detachedSearchButtonPlaceholder: "aa-DetachedSearchButtonPlaceholder",
    form: "aa-Form",
    input: "aa-Input",
    inputWrapper: "aa-InputWrapper",
    inputWrapperPrefix: "aa-InputWrapperPrefix",
    inputWrapperSuffix: "aa-InputWrapperSuffix",
    item: "aa-Item",
    label: "aa-Label",
    list: "aa-List",
    loadingIndicator: "aa-LoadingIndicator",
    panel: "aa-Panel",
    panelLayout: "aa-PanelLayout aa-Panel--scrollable",
    root: "aa-Autocomplete",
    source: "aa-Source",
    sourceFooter: "aa-SourceFooter",
    sourceHeader: "aa-SourceHeader",
    sourceNoResults: "aa-SourceNoResults",
    submitButton: "aa-SubmitButton"
  }, $t = function (e, t) {
    !(function (e, t, n) {
      var r, o, i;
      (Fe.__ && Fe.__(e, t), o = (r = "function" == typeof n) ? null : n && n.__k || t.__k, i = [], ct(t, e = (!r && n || t).__k = ze(Ke, null, [e]), o || He, He, void 0 !== t.ownerSVGElement, !r && n ? [n] : o ? null : t.firstChild ? Ve.slice.call(t.childNodes) : null, i, !r && n ? n : o ? o.__e : t.firstChild, r), lt(i, e));
    })(e.children, t);
  }, zt = {
    createElement: ze,
    Fragment: Ke
  };
  function Gt(e) {
    var t = e.panelPlacement, n = e.container, r = e.form, o = e.environment, i = n.getBoundingClientRect(), u = (o.pageYOffset || o.document.documentElement.scrollTop || o.document.body.scrollTop || 0) + i.top + i.height;
    switch (t) {
      case "start":
        return {
          top: u,
          left: i.left
        };
      case "end":
        return {
          top: u,
          right: o.document.documentElement.clientWidth - (i.left + i.width)
        };
      case "full-width":
        return {
          top: u,
          left: 0,
          right: 0,
          width: "unset",
          maxWidth: "unset"
        };
      case "input-wrapper-width":
        var a = r.getBoundingClientRect();
        return {
          top: u,
          left: a.left,
          right: o.document.documentElement.clientWidth - (a.left + a.width),
          width: "unset",
          maxWidth: "unset"
        };
      default:
        throw new Error(("[Autocomplete] The `panelPlacement` value ").concat(JSON.stringify(t), " is not valid."));
    }
  }
  var Kt = (function (e) {
    function t(t) {
      return e({
        searchClient: t.searchClient,
        queries: t.requests.map(function (e) {
          return e.query;
        })
      }).then(function (e) {
        return e.map(function (e, n) {
          var r = t.requests[n];
          return {
            items: e,
            sourceId: r.sourceId,
            transformResponse: r.transformResponse
          };
        });
      });
    }
    return function (e) {
      return function (n) {
        return Nt(Nt({
          execute: t
        }, e), n);
      };
    };
  })(function (e) {
    return (t = i(i({}, e), {}, {
      userAgents: [{
        segment: "autocomplete-js",
        version: "1.4.1"
      }]
    }), n = t.searchClient, r = t.queries, o = t.userAgents, u = void 0 === o ? [] : o, "function" == typeof n.addAlgoliaAgent && [{
      segment: "autocomplete-core",
      version: Tt
    }].concat(Ut(u)).forEach(function (e) {
      var t = e.segment, r = e.version;
      n.addAlgoliaAgent(t, r);
    }), n.search(r.map(function (e) {
      var t = e.params;
      return qt(qt({}, Rt(e, ["params"])), {}, {
        params: qt({
          hitsPerPage: 5,
          highlightPreTag: vt,
          highlightPostTag: mt
        }, t)
      });
    })).then(function (e) {
      return e.results;
    }));
    var t, n, r, o, u;
  });
  var Jt = Kt({
    transformResponse: function (e) {
      return e.hits;
    }
  });
  (e.autocomplete = function (e) {
    var t, o = (function () {
      var e = [], t = [];
      function n(n) {
        e.push(n);
        var r = n();
        t.push(r);
      }
      return {
        runEffect: n,
        cleanupEffects: function () {
          var e = t;
          (t = [], e.forEach(function (e) {
            e();
          }));
        },
        runEffects: function () {
          var t = e;
          (e = [], t.forEach(function (e) {
            n(e);
          }));
        }
      };
    })(), a = o.runEffect, c = o.cleanupEffects, p = o.runEffects, f = (t = [], {
      reactive: function (e) {
        var n = e(), r = {
          _fn: e,
          _ref: {
            current: n
          },
          get value() {
            return this._ref.current;
          },
          set value(e) {
            this._ref.current = e;
          }
        };
        return (t.push(r), r);
      },
      runReactives: function () {
        t.forEach(function (e) {
          e._ref.current = e._fn();
        });
      }
    }), v = f.reactive, h = f.runReactives, y = l(!1), g = l(e), b = l(void 0), O = v(function () {
      return (function (e) {
        var t, n = e.classNames, r = e.container, o = e.getEnvironmentProps, a = e.getFormProps, c = e.getInputProps, l = e.getItemProps, s = e.getLabelProps, p = e.getListProps, f = e.getPanelProps, v = e.getRootProps, m = e.panelContainer, h = e.panelPlacement, y = e.render, g = e.renderNoResults, b = e.renderer, O = e.detachedMediaQuery, _ = e.components, P = e.translations, j = u(e, ["classNames", "container", "getEnvironmentProps", "getFormProps", "getInputProps", "getItemProps", "getLabelProps", "getListProps", "getPanelProps", "getRootProps", "panelContainer", "panelPlacement", "render", "renderNoResults", "renderer", "detachedMediaQuery", "components", "translations"]), S = "undefined" != typeof window ? window : {}, w = Se(S, r);
        w.tagName;
        var I, E, A, D = null != b ? b : zt, C = {
          Highlight: (I = D, E = I.createElement, A = I.Fragment, function (e) {
            var t = e.hit, n = e.attribute, r = e.tagName, o = void 0 === r ? "mark" : r;
            return E(A, {}, bt({
              hit: t,
              attribute: n
            }).map(function (e, t) {
              return e.isHighlighted ? E(o, {
                key: t
              }, e.value) : e.value;
            }));
          }),
          ReverseHighlight: Ht(D),
          ReverseSnippet: Vt(D),
          Snippet: Wt(D)
        };
        return {
          renderer: {
            classNames: we(Qt, null != n ? n : {}),
            container: w,
            getEnvironmentProps: null != o ? o : function (e) {
              return e.props;
            },
            getFormProps: null != a ? a : function (e) {
              return e.props;
            },
            getInputProps: null != c ? c : function (e) {
              return e.props;
            },
            getItemProps: null != l ? l : function (e) {
              return e.props;
            },
            getLabelProps: null != s ? s : function (e) {
              return e.props;
            },
            getListProps: null != p ? p : function (e) {
              return e.props;
            },
            getPanelProps: null != f ? f : function (e) {
              return e.props;
            },
            getRootProps: null != v ? v : function (e) {
              return e.props;
            },
            panelContainer: m ? Se(S, m) : S.document.body,
            panelPlacement: null != h ? h : "input-wrapper-width",
            render: null != y ? y : $t,
            renderNoResults: g,
            renderer: D,
            detachedMediaQuery: null != O ? O : getComputedStyle(S.document.documentElement).getPropertyValue("--aa-detached-media-query"),
            components: i(i({}, C), _),
            translations: i(i({}, {
              clearButtonTitle: "Clear",
              detachedCancelButtonText: "Cancel",
              submitButtonTitle: "Submit"
            }), P)
          },
          core: i(i({}, j), {}, {
            id: null !== (t = j.id) && void 0 !== t ? t : d(),
            environment: S
          })
        };
      })(g.current);
    }), _ = v(function () {
      return O.value.core.environment.matchMedia(O.value.renderer.detachedMediaQuery).matches;
    }), P = v(function () {
      return Pe(i(i({}, O.value.core), {}, {
        onStateChange: function (e) {
          var t, n, r;
          (y.current = e.state.collections.some(function (e) {
            return e.source.templates.noResults;
          }), null === (t = b.current) || void 0 === t || t.call(b, e), null === (n = (r = O.value.core).onStateChange) || void 0 === n || n.call(r, e));
        },
        shouldPanelOpen: g.current.shouldPanelOpen || (function (e) {
          var t = e.state;
          if (_.value) return !0;
          var n = m(t) > 0;
          if (!O.value.core.openOnFocus && !t.query) return n;
          var r = Boolean(y.current || O.value.renderer.renderNoResults);
          return !n && r || n;
        })
      }));
    }), j = l(i({
      collections: [],
      completion: null,
      context: {},
      isOpen: !1,
      query: "",
      activeItemId: null,
      status: "idle"
    }, O.value.core.initialState)), S = {
      getEnvironmentProps: O.value.renderer.getEnvironmentProps,
      getFormProps: O.value.renderer.getFormProps,
      getInputProps: O.value.renderer.getInputProps,
      getItemProps: O.value.renderer.getItemProps,
      getLabelProps: O.value.renderer.getLabelProps,
      getListProps: O.value.renderer.getListProps,
      getPanelProps: O.value.renderer.getPanelProps,
      getRootProps: O.value.renderer.getRootProps
    }, w = {
      setActiveItemId: P.value.setActiveItemId,
      setQuery: P.value.setQuery,
      setCollections: P.value.setCollections,
      setIsOpen: P.value.setIsOpen,
      setStatus: P.value.setStatus,
      setContext: P.value.setContext,
      refresh: P.value.refresh
    }, I = v(function () {
      return qe({
        autocomplete: P.value,
        autocompleteScopeApi: w,
        classNames: O.value.renderer.classNames,
        environment: O.value.core.environment,
        isDetached: _.value,
        placeholder: O.value.core.placeholder,
        propGetters: S,
        setIsModalOpen: C,
        state: j.current,
        translations: O.value.renderer.translations
      });
    });
    function E() {
      xe(I.value.panel, {
        style: _.value ? {} : Gt({
          panelPlacement: O.value.renderer.panelPlacement,
          container: I.value.root,
          form: I.value.form,
          environment: O.value.core.environment
        })
      });
    }
    function A(e) {
      j.current = e;
      var t = {
        autocomplete: P.value,
        autocompleteScopeApi: w,
        classNames: O.value.renderer.classNames,
        components: O.value.renderer.components,
        container: O.value.renderer.container,
        createElement: O.value.renderer.renderer.createElement,
        dom: I.value,
        Fragment: O.value.renderer.renderer.Fragment,
        panelContainer: _.value ? I.value.detachedContainer : O.value.renderer.panelContainer,
        propGetters: S,
        state: j.current
      }, n = !m(e) && !y.current && O.value.renderer.renderNoResults || O.value.renderer.render;
      (!(function (e) {
        var t = e.autocomplete, n = e.autocompleteScopeApi, r = e.dom, o = e.propGetters, u = e.state;
        (Ne(r.root, o.getRootProps(i({
          state: u,
          props: t.getRootProps({})
        }, n))), Ne(r.input, o.getInputProps(i({
          state: u,
          props: t.getInputProps({
            inputElement: r.input
          }),
          inputElement: r.input
        }, n))), xe(r.label, {
          hidden: "stalled" === u.status
        }), xe(r.loadingIndicator, {
          hidden: "stalled" !== u.status
        }), xe(r.clearButton, {
          hidden: !u.query
        }));
      })(t), (function (e, t) {
        var n = t.autocomplete, o = t.autocompleteScopeApi, u = t.classNames, a = t.createElement, c = t.dom, l = t.Fragment, s = t.panelContainer, p = t.propGetters, f = t.state, d = t.components;
        if (f.isOpen) {
          (s.contains(c.panel) || "loading" === f.status || s.appendChild(c.panel), c.panel.classList.toggle("aa-Panel--stalled", "stalled" === f.status));
          var v = f.collections.filter(function (e) {
            var t = e.source, n = e.items;
            return t.templates.noResults || n.length > 0;
          }).map(function (e, t) {
            var c = e.source, s = e.items;
            return a("section", {
              key: t,
              className: u.source,
              "data-autocomplete-source-id": c.sourceId
            }, c.templates.header && a("div", {
              className: u.sourceHeader
            }, c.templates.header({
              components: d,
              createElement: a,
              Fragment: l,
              items: s,
              source: c,
              state: f
            })), c.templates.noResults && 0 === s.length ? a("div", {
              className: u.sourceNoResults
            }, c.templates.noResults({
              components: d,
              createElement: a,
              Fragment: l,
              source: c,
              state: f
            })) : a("ul", r({
              className: u.list
            }, p.getListProps(i({
              state: f,
              props: n.getListProps({})
            }, o))), s.map(function (e) {
              var t = n.getItemProps({
                item: e,
                source: c
              });
              return a("li", r({
                key: t.id,
                className: u.item
              }, p.getItemProps(i({
                state: f,
                props: t
              }, o))), c.templates.item({
                components: d,
                createElement: a,
                Fragment: l,
                item: e,
                state: f
              }));
            })), c.templates.footer && a("div", {
              className: u.sourceFooter
            }, c.templates.footer({
              components: d,
              createElement: a,
              Fragment: l,
              items: s,
              source: c,
              state: f
            })));
          }), m = a(l, null, a("div", {
            className: u.panelLayout
          }, v), a("div", {
            className: "aa-GradientBottom"
          })), h = v.reduce(function (e, t) {
            return (e[t.props["data-autocomplete-source-id"]] = t, e);
          }, {});
          e(i({
            children: m,
            state: f,
            sections: v,
            elements: h,
            createElement: a,
            Fragment: l,
            components: d
          }, o), c.panel);
        } else s.contains(c.panel) && s.removeChild(c.panel);
      })(n, t));
    }
    function D() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      (c(), g.current = Ee(O.value.renderer, O.value.core, {
        initialState: j.current
      }, e), h(), p(), P.value.refresh().then(function () {
        A(j.current);
      }));
    }
    function C(e) {
      requestAnimationFrame(function () {
        var t = O.value.core.environment.document.body.contains(I.value.detachedOverlay);
        e !== t && (e ? (O.value.core.environment.document.body.appendChild(I.value.detachedOverlay), O.value.core.environment.document.body.classList.add("aa-Detached"), I.value.input.focus()) : (O.value.core.environment.document.body.removeChild(I.value.detachedOverlay), O.value.core.environment.document.body.classList.remove("aa-Detached"), P.value.setQuery(""), P.value.refresh()));
      });
    }
    return (a(function () {
      var e = P.value.getEnvironmentProps({
        formElement: I.value.form,
        panelElement: I.value.panel,
        inputElement: I.value.input
      });
      return (xe(O.value.core.environment, e), function () {
        xe(O.value.core.environment, Object.keys(e).reduce(function (e, t) {
          return i(i({}, e), {}, n({}, t, void 0));
        }, {}));
      });
    }), a(function () {
      var e = _.value ? O.value.core.environment.document.body : O.value.renderer.panelContainer, t = _.value ? I.value.detachedOverlay : I.value.panel;
      return (_.value && j.current.isOpen && C(!0), A(j.current), function () {
        e.contains(t) && e.removeChild(t);
      });
    }), a(function () {
      var e = O.value.renderer.container;
      return (e.appendChild(I.value.root), function () {
        e.removeChild(I.value.root);
      });
    }), a(function () {
      var e = s(function (e) {
        A(e.state);
      }, 0);
      return (b.current = function (t) {
        var n = t.state, r = t.prevState;
        (_.value && r.isOpen !== n.isOpen && C(n.isOpen), _.value || !n.isOpen || r.isOpen || E(), n.query !== r.query) && O.value.core.environment.document.querySelectorAll(".aa-Panel--scrollable").forEach(function (e) {
          0 !== e.scrollTop && (e.scrollTop = 0);
        });
        e({
          state: n
        });
      }, function () {
        b.current = void 0;
      });
    }), a(function () {
      var e = s(function () {
        var e = _.value;
        (_.value = O.value.core.environment.matchMedia(O.value.renderer.detachedMediaQuery).matches, e !== _.value ? D({}) : requestAnimationFrame(E));
      }, 20);
      return (O.value.core.environment.addEventListener("resize", e), function () {
        O.value.core.environment.removeEventListener("resize", e);
      });
    }), a(function () {
      if (!_.value) return function () {};
      function e(e) {
        I.value.detachedContainer.classList.toggle("aa-DetachedContainer--modal", e);
      }
      function t(t) {
        e(t.matches);
      }
      var n = O.value.core.environment.matchMedia(getComputedStyle(O.value.core.environment.document.documentElement).getPropertyValue("--aa-detached-modal-media-query"));
      e(n.matches);
      var r = Boolean(n.addEventListener);
      return (r ? n.addEventListener("change", t) : n.addListener(t), function () {
        r ? n.removeEventListener("change", t) : n.removeListener(t);
      });
    }), a(function () {
      return (requestAnimationFrame(E), function () {});
    }), i(i({}, w), {}, {
      update: D,
      destroy: function () {
        c();
      }
    }));
  }, e.getAlgoliaFacets = function (e) {
    var t = Kt({
      transformResponse: function (e) {
        return e.facetHits;
      }
    }), n = e.queries.map(function (e) {
      return i(i({}, e), {}, {
        type: "facet"
      });
    });
    return t(i(i({}, e), {}, {
      queries: n
    }));
  }, e.getAlgoliaResults = Jt, Object.defineProperty(e, "__esModule", {
    value: !0
  }));
});

},{}],"4ZOnh":[function() {},{}],"4Vknd":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "default", function () {
  return lt;
});
var ve = Object.create;
var Q = Object.defineProperty, me = Object.defineProperties, be = Object.getOwnPropertyDescriptor, ge = Object.getOwnPropertyDescriptors, we = Object.getOwnPropertyNames, K = Object.getOwnPropertySymbols, Ae = Object.getPrototypeOf, Y = Object.prototype.hasOwnProperty, Re = Object.prototype.propertyIsEnumerable;
var W = (t, e, n) => (e in t) ? Q(t, e, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: n
}) : t[e] = n, I = (t, e) => {
  for (var n in e || (e = {})) Y.call(e, n) && W(t, n, e[n]);
  if (K) for (var n of K(e)) Re.call(e, n) && W(t, n, e[n]);
  return t;
}, V = (t, e) => me(t, ge(e)), _e = t => Q(t, "__esModule", {
  value: !0
});
var L = (t, e) => () => (e || t((e = {
  exports: {}
}).exports, e), e.exports);
var Se = (t, e, n) => {
  if (e && typeof e == "object" || typeof e == "function") for (let s of we(e)) !Y.call(t, s) && s !== "default" && Q(t, s, {
    get: () => e[s],
    enumerable: !(n = be(e, s)) || n.enumerable
  });
  return t;
}, G = t => Se(_e(Q(t != null ? ve(Ae(t)) : {}, "default", t && t.__esModule && ("default" in t) ? {
  get: () => t.default,
  enumerable: !0
} : {
  value: t,
  enumerable: !0
})), t);
var C = L((We, Z) => {
  function xe(t) {
    var e = RegExp("^(([^:/?#]*)?://)?(((.*)?@)?([^/?#]*)?)([^?#]*)(\\?([^#]*))?(#(.*))?"), n = t.match(e);
    return {
      protocol: n[2],
      auth: n[5],
      host: n[6],
      path: n[7],
      query: n[9],
      hash: n[11]
    };
  }
  Z.exports = xe;
});
var te = L((Ze, ee) => {
  "use strict";
  function Te(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }
  ee.exports = function (t, e, n, s) {
    (e = e || "&", n = n || "=");
    var i = {};
    if (typeof t != "string" || t.length === 0) return i;
    var h = /\+/g;
    t = t.split(e);
    var u = 1e3;
    s && typeof s.maxKeys == "number" && (u = s.maxKeys);
    var f = t.length;
    u > 0 && f > u && (f = u);
    for (var m = 0; m < f; ++m) {
      var l = t[m].replace(h, "%20"), v = l.indexOf(n), p, c, d, g;
      (v >= 0 ? (p = l.substr(0, v), c = l.substr(v + 1)) : (p = l, c = ""), d = decodeURIComponent(p), g = decodeURIComponent(c), Te(i, d) ? Array.isArray(i[d]) ? i[d].push(g) : i[d] = [i[d], g] : i[d] = g);
    }
    return i;
  };
});
var ne = L((Ce, re) => {
  "use strict";
  var q = function (t) {
    switch (typeof t) {
      case "string":
        return t;
      case "boolean":
        return t ? "true" : "false";
      case "number":
        return isFinite(t) ? t : "";
      default:
        return "";
    }
  };
  re.exports = function (t, e, n, s) {
    return (e = e || "&", n = n || "=", t === null && (t = void 0), typeof t == "object" ? Object.keys(t).map(function (i) {
      var h = encodeURIComponent(q(i)) + n;
      return Array.isArray(t[i]) ? t[i].map(function (u) {
        return h + encodeURIComponent(q(u));
      }).join(e) : h + encodeURIComponent(q(t[i]));
    }).filter(Boolean).join(e) : s ? encodeURIComponent(q(s)) + n + encodeURIComponent(q(t)) : "");
  };
});
var oe = L(H => {
  "use strict";
  H.decode = H.parse = te();
  H.encode = H.stringify = ne();
});
var ie = L((se, M) => {
  var D = (function (t) {
    function e() {
      this.fetch = !1;
    }
    return (e.prototype = t, new e());
  })(typeof self != "undefined" ? self : se);
  (function (t) {
    (function (e) {
      if (e.fetch) return;
      var n = {
        searchParams: ("URLSearchParams" in e),
        iterable: ("Symbol" in e) && ("iterator" in Symbol),
        blob: ("FileReader" in e) && ("Blob" in e) && (function () {
          try {
            return (new Blob(), !0);
          } catch (r) {
            return !1;
          }
        })(),
        formData: ("FormData" in e),
        arrayBuffer: ("ArrayBuffer" in e)
      };
      if (n.arrayBuffer) var s = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"], i = function (r) {
        return r && DataView.prototype.isPrototypeOf(r);
      }, h = ArrayBuffer.isView || (function (r) {
        return r && s.indexOf(Object.prototype.toString.call(r)) > -1;
      });
      function u(r) {
        if ((typeof r != "string" && (r = String(r)), (/[^a-z0-9\-#$%&'*+.\^_`|~]/i).test(r))) throw new TypeError("Invalid character in header field name");
        return r.toLowerCase();
      }
      function f(r) {
        return (typeof r != "string" && (r = String(r)), r);
      }
      function m(r) {
        var o = {
          next: function () {
            var a = r.shift();
            return {
              done: a === void 0,
              value: a
            };
          }
        };
        return (n.iterable && (o[Symbol.iterator] = function () {
          return o;
        }), o);
      }
      function l(r) {
        (this.map = {}, r instanceof l ? r.forEach(function (o, a) {
          this.append(a, o);
        }, this) : Array.isArray(r) ? r.forEach(function (o) {
          this.append(o[0], o[1]);
        }, this) : r && Object.getOwnPropertyNames(r).forEach(function (o) {
          this.append(o, r[o]);
        }, this));
      }
      (l.prototype.append = function (r, o) {
        (r = u(r), o = f(o));
        var a = this.map[r];
        this.map[r] = a ? a + "," + o : o;
      }, l.prototype.delete = function (r) {
        delete this.map[u(r)];
      }, l.prototype.get = function (r) {
        return (r = u(r), this.has(r) ? this.map[r] : null);
      }, l.prototype.has = function (r) {
        return this.map.hasOwnProperty(u(r));
      }, l.prototype.set = function (r, o) {
        this.map[u(r)] = f(o);
      }, l.prototype.forEach = function (r, o) {
        for (var a in this.map) this.map.hasOwnProperty(a) && r.call(o, this.map[a], a, this);
      }, l.prototype.keys = function () {
        var r = [];
        return (this.forEach(function (o, a) {
          r.push(a);
        }), m(r));
      }, l.prototype.values = function () {
        var r = [];
        return (this.forEach(function (o) {
          r.push(o);
        }), m(r));
      }, l.prototype.entries = function () {
        var r = [];
        return (this.forEach(function (o, a) {
          r.push([a, o]);
        }), m(r));
      }, n.iterable && (l.prototype[Symbol.iterator] = l.prototype.entries));
      function v(r) {
        if (r.bodyUsed) return Promise.reject(new TypeError("Already read"));
        r.bodyUsed = !0;
      }
      function p(r) {
        return new Promise(function (o, a) {
          (r.onload = function () {
            o(r.result);
          }, r.onerror = function () {
            a(r.error);
          });
        });
      }
      function c(r) {
        var o = new FileReader(), a = p(o);
        return (o.readAsArrayBuffer(r), a);
      }
      function d(r) {
        var o = new FileReader(), a = p(o);
        return (o.readAsText(r), a);
      }
      function g(r) {
        for (var o = new Uint8Array(r), a = new Array(o.length), w = 0; w < o.length; w++) a[w] = String.fromCharCode(o[w]);
        return a.join("");
      }
      function B(r) {
        if (r.slice) return r.slice(0);
        var o = new Uint8Array(r.byteLength);
        return (o.set(new Uint8Array(r)), o.buffer);
      }
      function T() {
        return (this.bodyUsed = !1, this._initBody = function (r) {
          if ((this._bodyInit = r, !r)) this._bodyText = ""; else if (typeof r == "string") this._bodyText = r; else if (n.blob && Blob.prototype.isPrototypeOf(r)) this._bodyBlob = r; else if (n.formData && FormData.prototype.isPrototypeOf(r)) this._bodyFormData = r; else if (n.searchParams && URLSearchParams.prototype.isPrototypeOf(r)) this._bodyText = r.toString(); else if (n.arrayBuffer && n.blob && i(r)) (this._bodyArrayBuffer = B(r.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])); else if (n.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(r) || h(r))) this._bodyArrayBuffer = B(r); else throw new Error("unsupported BodyInit type");
          this.headers.get("content-type") || (typeof r == "string" ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : n.searchParams && URLSearchParams.prototype.isPrototypeOf(r) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
        }, n.blob && (this.blob = function () {
          var r = v(this);
          if (r) return r;
          if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
          if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
          if (this._bodyFormData) throw new Error("could not read FormData body as blob");
          return Promise.resolve(new Blob([this._bodyText]));
        }, this.arrayBuffer = function () {
          return this._bodyArrayBuffer ? v(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(c);
        }), this.text = function () {
          var r = v(this);
          if (r) return r;
          if (this._bodyBlob) return d(this._bodyBlob);
          if (this._bodyArrayBuffer) return Promise.resolve(g(this._bodyArrayBuffer));
          if (this._bodyFormData) throw new Error("could not read FormData body as text");
          return Promise.resolve(this._bodyText);
        }, n.formData && (this.formData = function () {
          return this.text().then($);
        }), this.json = function () {
          return this.text().then(JSON.parse);
        }, this);
      }
      var P = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
      function j(r) {
        var o = r.toUpperCase();
        return P.indexOf(o) > -1 ? o : r;
      }
      function _(r, o) {
        o = o || ({});
        var a = o.body;
        if (r instanceof _) {
          if (r.bodyUsed) throw new TypeError("Already read");
          (this.url = r.url, this.credentials = r.credentials, o.headers || (this.headers = new l(r.headers)), this.method = r.method, this.mode = r.mode, !a && r._bodyInit != null && (a = r._bodyInit, r.bodyUsed = !0));
        } else this.url = String(r);
        if ((this.credentials = o.credentials || this.credentials || "omit", (o.headers || !this.headers) && (this.headers = new l(o.headers)), this.method = j(o.method || this.method || "GET"), this.mode = o.mode || this.mode || null, this.referrer = null, (this.method === "GET" || this.method === "HEAD") && a)) throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(a);
      }
      _.prototype.clone = function () {
        return new _(this, {
          body: this._bodyInit
        });
      };
      function $(r) {
        var o = new FormData();
        return (r.trim().split("&").forEach(function (a) {
          if (a) {
            var w = a.split("="), A = w.shift().replace(/\+/g, " "), y = w.join("=").replace(/\+/g, " ");
            o.append(decodeURIComponent(A), decodeURIComponent(y));
          }
        }), o);
      }
      function J(r) {
        var o = new l(), a = r.replace(/\r?\n[\t ]+/g, " ");
        return (a.split(/\r?\n/).forEach(function (w) {
          var A = w.split(":"), y = A.shift().trim();
          if (y) {
            var x = A.join(":").trim();
            o.append(y, x);
          }
        }), o);
      }
      T.call(_.prototype);
      function b(r, o) {
        (o || (o = {}), this.type = "default", this.status = o.status === void 0 ? 200 : o.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = ("statusText" in o) ? o.statusText : "OK", this.headers = new l(o.headers), this.url = o.url || "", this._initBody(r));
      }
      (T.call(b.prototype), b.prototype.clone = function () {
        return new b(this._bodyInit, {
          status: this.status,
          statusText: this.statusText,
          headers: new l(this.headers),
          url: this.url
        });
      }, b.error = function () {
        var r = new b(null, {
          status: 0,
          statusText: ""
        });
        return (r.type = "error", r);
      });
      var O = [301, 302, 303, 307, 308];
      (b.redirect = function (r, o) {
        if (O.indexOf(o) === -1) throw new RangeError("Invalid status code");
        return new b(null, {
          status: o,
          headers: {
            location: r
          }
        });
      }, e.Headers = l, e.Request = _, e.Response = b, e.fetch = function (r, o) {
        return new Promise(function (a, w) {
          var A = new _(r, o), y = new XMLHttpRequest();
          (y.onload = function () {
            var x = {
              status: y.status,
              statusText: y.statusText,
              headers: J(y.getAllResponseHeaders() || "")
            };
            x.url = ("responseURL" in y) ? y.responseURL : x.headers.get("X-Request-URL");
            var F = ("response" in y) ? y.response : y.responseText;
            a(new b(F, x));
          }, y.onerror = function () {
            w(new TypeError("Network request failed"));
          }, y.ontimeout = function () {
            w(new TypeError("Network request failed"));
          }, y.open(A.method, A.url, !0), A.credentials === "include" ? y.withCredentials = !0 : A.credentials === "omit" && (y.withCredentials = !1), ("responseType" in y) && n.blob && (y.responseType = "blob"), A.headers.forEach(function (x, F) {
            y.setRequestHeader(F, x);
          }), y.send(typeof A._bodyInit == "undefined" ? null : A._bodyInit));
        });
      }, e.fetch.polyfill = !0);
    })(typeof t != "undefined" ? t : this);
  }).call(D, void 0);
  var z = D.fetch, tt = z.Response = D.Response, rt = z.Request = D.Request, nt = z.Headers = D.Headers;
  typeof M == "object" && M.exports && (M.exports = z, M.exports.default = z);
});
var ae = G(C()), ue = G(oe()), pe = G(ie()), Pe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (t) {
  return typeof t;
} : function (t) {
  return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
};
function Oe(t, e) {
  return t.indexOf(e) !== -1;
}
function Ie(t) {
  return Oe(t, "scalr.api.appbase.io");
}
function Be() {
  for (var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", n = t, s = "", i = 0, h, u = 0, f = e; n.charAt(u | 0) || (f = "=", u % 1); s += f.charAt(63 & i >> 8 - u % 1 * 8)) {
    if ((h = n.charCodeAt(u += 3 / 4), h > 255)) throw new Error('"btoa" failed: The string to be encoded contains characters outside of the Latin1 range.');
    i = i << 8 | h;
  }
  return s;
}
function X(t) {
  if (t && Object.prototype.toString.call(t) === "[object Array]") {
    for (var e = 0; e < t.length; e += 1) {
      var n = t[e];
      if (n) {
        if (!n.id) return new Error("'id' field must be present in query object");
      } else return new Error("query object can not have an empty value");
    }
    return !0;
  }
  return new Error("invalid query value, 'query' value must be an array");
}
function E(t, e) {
  var n = [], s = {
    object: null,
    string: "",
    number: 0
  }, i = Object.keys(e);
  i.forEach(function (f) {
    var m = e[f].split("|"), l = m.find(function (v) {
      return Pe(t[f]) === v;
    });
    (!l || t[f] === s[l]) && n.push(f);
  });
  for (var h = "", u = 0; u < n.length; u += 1) h += n[u] + ", ";
  return n.length > 0 ? new Error("fields missing: " + h) : !0;
}
function S() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return t || !(Object.keys(t).length === 0 && t.constructor === Object) ? JSON.parse(JSON.stringify(t)) : null;
}
function Ue() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, n = {};
  return (e ? Object.keys(t).forEach(function (s) {
    n[s] = encodeURI(t[s]);
  }) : n = t, n);
}
function k(t) {
  var e = {};
  return (Object.assign(e, {
    "X-Search-Client": "Appbase JS"
  }), t === !1 && Object.assign(e, {
    "X-Enable-Telemetry": t
  }), e);
}
function R(t) {
  var e = (0, ae.default)(t.url || ""), n = e.auth, s = n === void 0 ? null : n, i = e.host, h = i === void 0 ? "" : i, u = e.path, f = u === void 0 ? "" : u, m = e.protocol, l = m === void 0 ? "" : m, v = h + f;
  if (typeof v != "string" || v === "") throw new Error("URL not present in options.");
  if (typeof t.app != "string" || t.app === "") throw new Error("App name is not present in options.");
  if (typeof l != "string" || l === "") throw new Error("Protocol is not present in url. URL should be of the form https://appbase-demo-ansible-abxiydt-arc.searchbase.io");
  v.slice(-1) === "/" && (v = v.slice(0, -1));
  var p = s || null;
  if ((typeof t.credentials == "string" && t.credentials !== "" ? p = t.credentials : typeof t.username == "string" && t.username !== "" && typeof t.password == "string" && t.password !== "" && (p = t.username + ":" + t.password), Ie(v) && p === null)) throw new Error("Authentication information is not present. Did you add credentials?");
  (this.url = v, this.protocol = l, this.app = t.app, this.credentials = p, typeof t.enableTelemetry == "boolean" && (this.enableTelemetry = t.enableTelemetry));
}
function Ee(t) {
  var e = this;
  return new Promise(function (n, s) {
    var i = S(t);
    try {
      var h = i.method, u = i.path, f = i.params, m = i.body, l = i.isRSAPI, v = i.isSuggestionsAPI, p = v ? ".suggestions" : e.app, c = m, d = u.endsWith("msearch") || u.endsWith("bulk") ? "application/x-ndjson" : "application/json", g = Object.assign({}, {
        Accept: "application/json",
        "Content-Type": d
      }, e.headers, t.headers), B = Date.now();
      e.credentials && (g.Authorization = "Basic " + Be(e.credentials));
      var T = {
        method: h,
        headers: g
      };
      if (Array.isArray(c)) {
        var P = "";
        (c.forEach(function (b) {
          (P += JSON.stringify(b), P += `
`);
        }), c = P);
      } else c = JSON.stringify(c) || ({});
      Object.keys(c).length !== 0 && (T.body = c);
      var j = function (O) {
        if (e.transformRequest && typeof e.transformRequest == "function") {
          var r = e.transformRequest(O);
          return r instanceof Promise ? r : Promise.resolve(r);
        }
        return Promise.resolve(O);
      }, _ = {}, $ = "";
      f && ($ = "?" + ue.default.stringify(f));
      var J = e.protocol + "://" + e.url + "/" + p + "/" + u + $;
      return j(Object.assign({}, {
        url: J
      }, T)).then(function (b) {
        var O = Object.assign({}, b), r = O.url;
        return (delete O.url, (0, pe.default)(r || J, O).then(function (o) {
          return o.status >= 500 ? s(o) : (_ = o.headers, o.json().then(function (a) {
            if (o.status >= 400) return s(o);
            if (a && a.error) return s(a);
            if (l && a && Object.prototype.toString.call(a) === "[object Object]" && m && m.query && m.query instanceof Array) {
              var w = 0, A = m.query.filter(function (U) {
                return U.execute || U.execute === void 0;
              }).length;
              if ((a && Object.keys(a).forEach(function (U) {
                a[U] && Object.prototype.hasOwnProperty.call(a[U], "error") && (w += 1);
              }), w > 0 && A === w)) return s(a);
            }
            if (a && a.responses instanceof Array) {
              var y = a.responses.length, x = a.responses.filter(function (U) {
                return Object.prototype.hasOwnProperty.call(U, "error");
              }).length;
              if (y === x) return s(a);
            }
            var F = Object.assign({}, a, {
              _timestamp: B,
              _headers: _
            });
            return n(F);
          }).catch(function (a) {
            return s(a);
          }));
        }).catch(function (o) {
          return s(o);
        }));
      }).catch(function (b) {
        return s(b);
      });
    } catch (b) {
      return s(b);
    }
  });
}
function je(t) {
  var e = S(t), n = E(e, {
    body: "object"
  });
  if (n !== !0) throw n;
  var s = e.type, i = s === void 0 ? "_doc" : s, h = e.id, u = e.body;
  (delete e.type, delete e.body, delete e.id);
  var f = void 0;
  return (h ? f = i ? i + "/" + encodeURIComponent(h) : encodeURIComponent(h) : f = i, this.performFetchRequest({
    method: "POST",
    path: f,
    params: e,
    body: u
  }));
}
function Fe(t) {
  var e = S(t), n = E(e, {
    id: "string|number"
  });
  if (n !== !0) throw n;
  var s = e.type, i = s === void 0 ? "_doc" : s, h = e.id;
  (delete e.type, delete e.id);
  var u = i + "/" + encodeURIComponent(h);
  return this.performFetchRequest({
    method: "GET",
    path: u,
    params: e
  });
}
function Le(t) {
  var e = S(t), n = E(e, {
    id: "string|number",
    body: "object"
  });
  if (n !== !0) throw n;
  var s = e.type, i = s === void 0 ? "_doc" : s, h = e.id, u = e.body;
  (delete e.type, delete e.id, delete e.body);
  var f = i + "/" + encodeURIComponent(h) + "/_update";
  return this.performFetchRequest({
    method: "POST",
    path: f,
    params: e,
    body: u
  });
}
function qe(t) {
  var e = S(t), n = E(e, {
    id: "string|number"
  });
  if (n !== !0) throw n;
  var s = e.type, i = s === void 0 ? "_doc" : s, h = e.id;
  (delete e.type, delete e.id);
  var u = i + "/" + encodeURIComponent(h);
  return this.performFetchRequest({
    method: "DELETE",
    path: u,
    params: e
  });
}
function He(t) {
  var e = S(t), n = E(e, {
    body: "object"
  });
  if (n !== !0) throw n;
  var s = e.type, i = e.body;
  (delete e.type, delete e.body);
  var h = void 0;
  return (s ? h = s + "/_bulk" : h = "_bulk", this.performFetchRequest({
    method: "POST",
    path: h,
    params: e,
    body: i
  }));
}
function De(t) {
  var e = S(t), n = E(e, {
    body: "object"
  });
  if (n !== !0) throw n;
  var s = void 0;
  Array.isArray(e.type) ? s = e.type.join() : s = e.type;
  var i = e.body;
  (delete e.type, delete e.body);
  var h = void 0;
  return (s ? h = s + "/_search" : h = "_search", this.performFetchRequest({
    method: "POST",
    path: h,
    params: e,
    body: i
  }));
}
function ze(t) {
  var e = S(t), n = E(e, {
    body: "object"
  });
  if (n !== !0) throw n;
  var s = void 0;
  Array.isArray(e.type) ? s = e.type.join() : s = e.type;
  var i = e.body;
  (delete e.type, delete e.body);
  var h = void 0;
  return (s ? h = s + "/_msearch" : h = "_msearch", this.performFetchRequest({
    method: "POST",
    path: h,
    params: e,
    body: i
  }));
}
function Me(t, e) {
  var n = S(e), s = X(t);
  if (s !== !0) throw s;
  var i = {
    settings: n,
    query: t
  };
  return this.performFetchRequest({
    method: "POST",
    path: "_reactivesearch",
    body: i,
    headers: k(this.enableTelemetry),
    isRSAPI: !0
  });
}
function Ne(t, e) {
  var n = S(e), s = X(t);
  if (s !== !0) throw s;
  var i = {
    settings: n,
    query: t
  };
  return this.performFetchRequest({
    method: "POST",
    path: "_reactivesearch.v3",
    body: i,
    headers: k(this.enableTelemetry),
    isRSAPI: !0
  });
}
function $e() {
  return this.performFetchRequest({
    method: "GET",
    path: "_mapping"
  });
}
function Je(t, e) {
  var n = S(e), s = X(t);
  if (s !== !0) throw s;
  var i = {
    settings: n,
    query: t
  };
  return this.performFetchRequest({
    method: "POST",
    path: "_reactivesearch.v3",
    body: i,
    headers: k(this.enableTelemetry),
    isRSAPI: !0,
    isSuggestionsAPI: !0
  });
}
function Qe(t) {
  var e = new R(t);
  return (R.prototype.performFetchRequest = Ee, R.prototype.index = je, R.prototype.get = Fe, R.prototype.update = Le, R.prototype.delete = qe, R.prototype.bulk = He, R.prototype.search = De, R.prototype.msearch = ze, R.prototype.reactiveSearch = Me, R.prototype.reactiveSearchv3 = Ne, R.prototype.getQuerySuggestions = Je, R.prototype.getMappings = $e, R.prototype.setHeaders = function () {
    var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    i ? this.headers = Ue(s) : this.headers = s;
  }, typeof window != "undefined" && (window.Appbase = e), e);
}
var he = Qe;
var N = "suggestions", le = ["url", "index", "app", "username", "password", "credentials", "enableTelemetry"];
var Ve = t => t("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  alt: "Recent Search",
  height: "20",
  width: "20",
  viewBox: "0 0 24 24",
  style: {
    fill: "#707070",
    marginRight: "1rem",
    display: "inline"
  }
}, t("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}), t("path", {
  d: "M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"
})), Ge = t => t("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  alt: "Popular Search",
  height: "20",
  width: "20",
  viewBox: "0 0 24 24",
  style: {
    fill: "#707070",
    marginRight: "1rem",
    display: "inline"
  }
}, t("path", {
  d: "M0 0h24v24H0z",
  fill: "none"
}), t("path", {
  d: "M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"
})), Xe = t => t("svg", {
  viewBox: "0 0 24 24",
  width: "20",
  height: "20",
  style: {
    fill: "#707070",
    marginRight: "1rem",
    display: "inline"
  }
}, t("path", {
  d: "M16.041 15.856c-0.034 0.026-0.067 0.055-0.099 0.087s-0.060 0.064-0.087 0.099c-1.258 1.213-2.969 1.958-4.855 1.958-1.933 0-3.682-0.782-4.95-2.050s-2.050-3.017-2.050-4.95 0.782-3.682 2.050-4.95 3.017-2.050 4.95-2.050 3.682 0.782 4.95 2.050 2.050 3.017 2.050 4.95c0 1.886-0.745 3.597-1.959 4.856zM21.707 20.293l-3.675-3.675c1.231-1.54 1.968-3.493 1.968-5.618 0-2.485-1.008-4.736-2.636-6.364s-3.879-2.636-6.364-2.636-4.736 1.008-6.364 2.636-2.636 3.879-2.636 6.364 1.008 4.736 2.636 6.364 3.879 2.636 6.364 2.636c2.125 0 4.078-0.737 5.618-1.968l3.675 3.675c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"
})), ke = t => t("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "20",
  height: "20",
  viewBox: "0 0 24 24",
  style: {
    fill: "#707070",
    marginRight: "1rem",
    display: "inline"
  }
}, t("path", {
  d: "M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
})), ce = t => {
  switch (t) {
    case "index":
      return Xe;
    case "recent":
      return Ve;
    case "popular":
      return Ge;
    case "promoted":
      return ke;
    default:
      return () => {};
  }
}, fe = t => t.map(e => V(I({}, e), {
  type: e._suggestion_type
})), de = t => {
  let e = {};
  return (le.forEach(n => {
    t[n] && Object.assign(e, {
      [n]: t[n]
    });
  }), e);
}, ye = (t, e, n) => n ? e + "<b> in " + n + "</b>" : t;
function Ke(t = {}, e = {}, n = {}) {
  let s = he(I({}, de(t))), i = `suggestions_source_${Math.random() * Math.random() * 1e3}`;
  return {
    getSources: function (u) {
      var f = u.query, m = u.setQuery, l = u.refresh, v = u.setContext;
      return [{
        sourceId: i,
        getItems() {
          return (s.setHeaders({
            "X-Timestamp": new Date().getTime()
          }), s.reactiveSearchv3([I(I({
            id: N,
            type: "suggestion"
          }, !!f && ({
            value: f
          })), e)], I({}, t.settings)).then(function (p) {
            var c, d, g, B, T, P, j, _;
            return ((n == null ? void 0 : n.useContextValue) && v({
              total: (g = (d = (c = p == null ? void 0 : p[N]) == null ? void 0 : c.hits) == null ? void 0 : d.total) == null ? void 0 : g.value,
              time: (B = p == null ? void 0 : p[N]) == null ? void 0 : B.took,
              resultsJson: (P = (T = p == null ? void 0 : p[N]) == null ? void 0 : T.hits) == null ? void 0 : P.hits
            }), fe(((_ = (j = p == null ? void 0 : p.suggestions) == null ? void 0 : j.hits) == null ? void 0 : _.hits) || []));
          }).catch(function (p) {
            return (console.log("suggestions search error: ", p), []);
          }));
        },
        onSelect(p) {
          let {item: c, setQuery: d, refresh: g} = p;
          if (typeof (n == null ? void 0 : n.onItemSelect) == "function") {
            n.onItemSelect(p);
            return;
          }
          if (c.url && new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$", "i").test(c.url)) {
            window.open(c.url);
            return;
          }
          (console.log(c), d((c._category ? c.label : c.value).replace(/(<([^>]+)>)/gi, "")), g());
        },
        templates: {
          header(p) {
            return typeof (n == null ? void 0 : n.renderHeader) == "function" ? n.renderHeader(p) : null;
          },
          item(p) {
            let {item: c, createElement: d} = p;
            return typeof (n == null ? void 0 : n.renderItem) == "function" ? n.renderItem(V(I({}, p), {
              setQuery: m,
              refresh: l,
              setContext: v
            })) : d("div", {
              style: {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                marginLeft: "5px"
              }
            }, d("div", {
              style: {
                display: "grid",
                gridTemplateColumns: "max-content 1fr"
              }
            }, ce(c.type)(d), d("span", {
              style: {
                display: "block",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                paddingRight: "1rem"
              },
              dangerouslySetInnerHTML: {
                __html: ye(c.label, c.value, c._category)
              }
            })), d("div", {
              style: {
                display: "grid"
              }
            }, d("button", {
              onClick: g => {
                (g.stopPropagation(), m((c._category ? c.label : c.value).replace(/(<([^>]+)>)/gi, "")), l());
              },
              type: "button"
            }, d("svg", {
              style: {
                marginRight: "1rem",
                display: "inline",
                fontSize: "20px",
                cursor: "pointer",
                color: "#707070",
                height: "22px",
                ":hover": {
                  color: "#000"
                }
              },
              viewBox: "0 0 24 24",
              fill: "currentColor"
            }, d("path", {
              d: "M8 17v-7.586l8.293 8.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-8.293-8.293h7.586c0.552 0 1-0.448 1-1s-0.448-1-1-1h-10c-0.552 0-1 0.448-1 1v10c0 0.552 0.448 1 1 1s1-0.448 1-1z"
            })))));
          },
          footer(p) {
            return typeof (n == null ? void 0 : n.renderFooter) == "function" ? n.renderFooter(p) : null;
          },
          noResults(p) {
            let {createElement: c} = p;
            return typeof (n == null ? void 0 : n.renderNoResults) == "function" ? n.renderNoResults(p) : c("span", {
              style: {
                marginLeft: "-9px"
              }
            }, "No Results Found!");
          }
        }
      }];
    }
  };
}
var lt = Ke;

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"5gA8y":[function(require,module,exports) {
"use strict";

exports.interopDefault = function (a) {
  return a && a.__esModule ? a : {
    default: a
  };
};

exports.defineInteropFlag = function (a) {
  Object.defineProperty(a, '__esModule', {
    value: true
  });
};

exports.exportAll = function (source, dest) {
  Object.keys(source).forEach(function (key) {
    if (key === 'default' || key === '__esModule') {
      return;
    } // Skip duplicate re-exports when they have the same value.


    if (key in dest && dest[key] === source[key]) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function () {
        return source[key];
      }
    });
  });
  return dest;
};

exports.export = function (dest, destName, get) {
  Object.defineProperty(dest, destName, {
    enumerable: true,
    get: get
  });
};
},{}],"2SL7q":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "renderResults", function () {
  return renderResults;
});
const renderResults = ({value, url, app, credentials, settings, query}, JSONTreeView) => {
  const resultStatsElement = document.getElementById("results-stats");
  const resultElement = document.getElementById("result");
  fetch(`${url}/${app}/_reactivesearch.v3`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Basic ${btoa(credentials)}`
    },
    body: JSON.stringify({
      settings,
      query: [{
        id: "search",
        type: "search",
        ...query,
        value
      }]
    })
  }).then(res => res.json()).then(data => {
    const responseData = data.search;
    if (responseData?.hits?.total?.value) {
      resultStatsElement.style.display = "block";
      // setting results stats
      resultStatsElement.innerHTML = `Displaying ${responseData?.hits?.hits?.length} results, of ${responseData.hits.total.value} results found in ${responseData.took} ms`;
    } else {
      resultStatsElement.style.display = "none";
    }
    if (Array.isArray(responseData?.hits?.hits)) {
      resultElement.style.display = "block";
      resultElement.innerHTML = "";
      var jsonView = new JSONTreeView("Results", [...responseData?.hits?.hits]);
      jsonView.readonly = true;
      jsonView.expand(true);
      var textnode = document.createTextNode("No Results Found");
      // setting results json
      resultElement.appendChild(Object.keys(responseData?.hits?.hits).length ? jsonView.dom : textnode);
    } else {
      resultElement.style.display = "none";
    }
  }).catch(err => {
    console.error(err);
  });
};

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"5gA8y"}],"rfAXK":[function(require,module,exports) {
/**
 * Created by richard.livingston on 18/02/2017.
 */
'use strict';

var util = require('util'),
	EE = require('events').EventEmitter;


module.exports = JSONTreeView;
util.inherits(JSONTreeView, EE);


function JSONTreeView(name_, value_, parent_, isRoot_){
	var self = this;

	if (typeof isRoot_ === 'undefined' && arguments.length < 4) {
		isRoot_ = true;
	}

	EE.call(self);

	if(arguments.length < 2){
		value_ = name_;
		name_ = undefined;
	}

	var name, value, type, oldType = null, filterText = '', hidden = false,
		readonly = parent_ ? parent_.readonly : false,
		readonlyWhenFiltering = parent_ ? parent_.readonlyWhenFiltering : false,
		alwaysShowRoot = false,
		showCount = parent_ ? parent_.showCountOfObjectOrArray : true,
		includingRootName = true,
		domEventListeners = [], children = [], expanded = false,
		edittingName = false, edittingValue = false,
		nameEditable = true, valueEditable = true;

	var dom = {
		container : document.createElement('div'),
		collapseExpand : document.createElement('div'),
		name : document.createElement('div'),
		separator : document.createElement('div'),
		value : document.createElement('div'),
		spacing: document.createElement('div'),
		delete : document.createElement('div'),
		children : document.createElement('div'),
		insert : document.createElement('div')
	};


	Object.defineProperties(self, {

		dom : {
			value : dom.container,
			enumerable : true
		},

		isRoot: {
			get : function(){
				return isRoot_;
			}
		},

		parent: {
			get: function() {
				return parent_;
			}
		},

		children: {
			get: function() {
				var result = null;
				if (type === 'array') {
					result = children;
				}
				else if (type === 'object') {
					result = {};
					children.forEach(function(e) {
						result[e.name] = e;
					});
				}
				return result;
			}
		},

		readonly: {
			get: function() {
				return !!(readonly & 1);
			},
			set: function(ro) {
				readonly = setBit(readonly, 0, +ro);
				!!(readonly & 1) ? dom.container.classList.add('readonly')
						: dom.container.classList.remove('readonly');
				for (var i in children) {
					if (typeof children[i] === 'object') {
						children[i].readonly = setBit(readonly, 0, +ro);
					}
				}
			}
		},

		readonlyWhenFiltering: {
			get: function() {
				return readonlyWhenFiltering;
			},
			set: function(rowf) {
				readonly = setBit(readonly, 1, +rowf);
				readonlyWhenFiltering = rowf;
				(readonly && this.filterText) || !!(readonly & 1)
						? dom.container.classList.add('readonly')
								: dom.container.classList.remove('readonly');
				for (var i in children) {
					if (typeof children[i] === 'object') {
						children[i].readonly = setBit(readonly, 1, +rowf);
						children[i].readonlyWhenFiltering = rowf;
					}
				}
			}
		},

		hidden: {
			get: function() {
				return hidden;
			},
			set: function(h) {
				hidden = h;
				h ? dom.container.classList.add('hidden')
						: dom.container.classList.remove('hidden');
				if (!h) {
					parent_ && (parent_.hidden = h);
				}
			}
		},

		showCountOfObjectOrArray: {
			get: function() {
				return showCount;
			},
			set: function(show) {
				showCount = show;
				for (var i in children) {
					if (typeof children[i] === 'object') {
						children[i].showCountOfObjectOrArray = show;
					}
				}
				(this.type === 'object' || this.type === 'array') && this.updateCount();
			}
		},

		filterText: {
			get: function() {
				return filterText;
			},
			set: function(text) {
				filterText = text;
				if (text) {
					if (readonly > 0) {
						dom.container.classList.add('readonly');
					}
					var key = this.name + '';
					var value = this.value + '';
					if (this.type === 'object' || this.type === 'array') {
						value = '';
					}
					if (key.indexOf(text) > -1 || value.indexOf(text) > -1) {
						this.hidden = false;
					}
					else {
						if (!this.alwaysShowRoot || !isRoot_) {
							this.hidden = true;
						}
					}
				}
				else {
					!this.readonly && dom.container.classList.remove('readonly');
					this.hidden = false;
				}
				for (var i in children) {
					if (typeof children[i] === 'object') {
						children[i].filterText = text;
					}
				}
			}
		},

		alwaysShowRoot: {
			get: function() {
				return alwaysShowRoot;
			},
			set: function(value) {
				if (isRoot_ && this.filterText) {
					this.hidden = !value;
				}
				alwaysShowRoot = value;
				for (var i in children) {
					if (typeof children[i] === 'object') {
						children[i].alwaysShowRoot = value;
					}
				}
			}
		},

		withRootName: {
			get: function() {
				return includingRootName;
			},
			set: function(value) {
				includingRootName = value;
			}
		},

		name : {
			get : function(){
				return name;
			},

			set : setName,
			enumerable : true
		},

		value : {
			get : function(){
				return value;
			},

			set : setValue,
			enumerable : true
		},

		type : {
			get : function(){
				return type;
			},

			enumerable : true
		},

		oldType: {
			get: function () {
				return oldType;
			},

			enumerable: true
		},

		nameEditable : {
			get : function(){
				return nameEditable;
			},

			set : function(value){
				nameEditable = !!value;
			},

			enumerable : true
		},

		valueEditable : {
			get : function(){
				return valueEditable;
			},

			set : function(value){
				valueEditable = !!value;
			},

			enumerable : true
		},

		refresh : {
			value : refresh,
			enumerable : true
		},

		updateCount: {
			value: updateObjectChildCount,
			enumerable: true
		},

		collapse : {
			value : collapse,
			enumerable : true
		},

		expand : {
			value : expand,
			enumerable : true
		},

		destroy : {
			value : destroy,
			enumerable : true
		},

		editName : {
			value : editField.bind(null, 'name'),
			enumerable : true
		},

		editValue : {
			value : editField.bind(null, 'value'),
			enumerable : true
		}

	});


	Object.keys(dom).forEach(function(k){
		if (k === 'delete' && self.isRoot) {
			return;
		}

		var element = dom[k];

		if(k == 'container'){
			return;
		}

		element.className = k;
		if (['name', 'separator', 'value', 'spacing'].indexOf(k) > -1) {
			element.className += ' item';
		}
		dom.container.appendChild(element);
	});

	dom.container.className = 'jsonView';

	addDomEventListener(dom.collapseExpand, 'click', onCollapseExpandClick);
	addDomEventListener(dom.value, 'click', expand.bind(null, false));
	addDomEventListener(dom.name, 'click', expand.bind(null, false));

	addDomEventListener(dom.name, 'dblclick', editField.bind(null, 'name'));
	addDomEventListener(dom.name, 'click', itemClicked.bind(null, 'name'));
	addDomEventListener(dom.name, 'blur', editFieldStop.bind(null, 'name'));
	addDomEventListener(dom.name, 'keypress',
			editFieldKeyPressed.bind(null, 'name'));
	addDomEventListener(dom.name, 'keydown',
			editFieldTabPressed.bind(null, 'name'));

	addDomEventListener(dom.value, 'dblclick', editField.bind(null, 'value'));
	addDomEventListener(dom.value, 'click', itemClicked.bind(null, 'value'));
	addDomEventListener(dom.value, 'blur', editFieldStop.bind(null, 'value'));
	addDomEventListener(dom.value, 'keypress',
			editFieldKeyPressed.bind(null, 'value'));
	addDomEventListener(dom.value, 'keydown',
			editFieldTabPressed.bind(null, 'value'));
	addDomEventListener(dom.value, 'keydown', numericValueKeyDown);

	addDomEventListener(dom.insert, 'click', onInsertClick);
	addDomEventListener(dom.delete, 'click', onDeleteClick);

	setName(name_);
	setValue(value_);

	function setBit(n, i, b) {
		var j = 0;
		while ((n >> j << j)) {
			j++;
		}
		return i >= j
				? (n | +b << i )
						: (n >> (i + 1) << (i + 1)) | (n % (n >> i << i)) | (+b << i);
	}


	function squarebracketify(exp) {
		return typeof exp === 'string'
			? exp.replace(/\.([0-9]+)/g, '[$1]') : exp + '';
	}

	function refresh(silent){
		var expandable = type == 'object' || type == 'array';

		children.forEach(function(child){
			child.refresh(true);
		});

		dom.collapseExpand.style.display = expandable ? '' : 'none';

		if(expanded && expandable){
			expand(false, silent);
		}
		else{
			collapse(false, silent);
		}
		if (!silent) {
			self.emit('refresh', self, [self.name], self.value);
		}
	}


	function collapse(recursive, silent){
		if(recursive){
			children.forEach(function(child){
				child.collapse(true, true);
			});
		}

		expanded = false;

		dom.children.style.display = 'none';
		dom.collapseExpand.className = 'expand';
		dom.container.classList.add('collapsed');
		dom.container.classList.remove('expanded');
		if (!silent && (type == 'object' || type == 'array')) {
			self.emit('collapse', self, [self.name], self.value);
		}
	}


	function expand(recursive, silent){
		var keys;

		if(type == 'object'){
			keys = Object.keys(value);
		}
		else if(type == 'array'){
			keys = value.map(function(v, k){
				return k;
			});
		}
		else{
			keys = [];
		}

		// Remove children that no longer exist
		for(var i = children.length - 1; i >= 0; i --){
			var child = children[i];
			if (!child) {
				break;
			}

			if(keys.indexOf(child.name) == -1){
				children.splice(i, 1);
				removeChild(child);
			}
		}

		if(type != 'object' && type != 'array'){
			return collapse();
		}

		keys.forEach(function(key){
			addChild(key, value[key]);
		});

		if(recursive){
			children.forEach(function(child){
				child.expand(true, true);
			});
		}

		expanded = true;
		dom.children.style.display = '';
		dom.collapseExpand.className = 'collapse';
		dom.container.classList.add('expanded');
		dom.container.classList.remove('collapsed');
		if (!silent && (type == 'object' || type == 'array')) {
			self.emit('expand', self, [self.name], self.value);
		}
	}


	function destroy(){
		var child, event;

		while(event = domEventListeners.pop()){
			event.element.removeEventListener(event.name, event.fn);
		}

		while(child = children.pop()){
			removeChild(child);
		}
	}


	function setName(newName){
		var nameType = typeof newName,
			oldName = name;

		if(newName === name){
			return;
		}

		if(nameType != 'string' && nameType != 'number'){
			throw new Error('Name must be either string or number, ' + newName);
		}

		dom.name.innerText = newName;
		name = newName;
		self.emit('rename', self, [name], oldName, newName, true);
	}


	function setValue(newValue){
		var oldValue = value,
			str, len;

		if (isRoot_ && !oldValue) {
			oldValue = newValue;
		}
		type = getType(newValue);
		oldType = oldValue ? getType(oldValue) : type;

		switch(type){
			case 'null':
				str = 'null';
				break;
			case 'undefined':
				str = 'undefined';
				break;
			case 'object':
				len = Object.keys(newValue).length;
				str = showCount ? 'Object[' + len + ']' : (len < 1 ? '{}' : '');
				break;

			case 'array':
				len = newValue.length;
				str = showCount ? 'Array[' + len + ']' : (len < 1 ? '[]' : '');
				break;

			default:
				str = newValue;
				break;
		}

		dom.value.innerText = str;
		dom.value.className = 'value item ' + type;

		if(newValue === value){
			return;
		}

		value = newValue;

		if(type == 'array' || type == 'object'){
			// Cannot edit objects as string because the formatting is too messy
			// Would have to either pass as JSON and force user to wrap properties in quotes
			// Or first JSON stringify the input before passing, this could allow users to reference globals

			// Instead the user can modify individual properties, or just delete the object and start again
			valueEditable = false;

			if(type == 'array'){
				// Obviously cannot modify array keys
				nameEditable = false;
			}
		}

		self.emit('change', self, [name], oldValue, newValue);
		refresh();
	}


	function updateObjectChildCount() {
		var str = '', len;
		if (type === 'object') {
			len = Object.keys(value).length;
			str = showCount ? 'Object[' + len + ']' : (len < 1 ? '{}' : '');
		}
		if (type === 'array') {
			len = value.length;
			str = showCount ? 'Array[' + len + ']' : (len < 1 ? '[]' : '');
		}
		dom.value.innerText = str;
	}


	function addChild(key, val){
		var child;

		for(var i = 0, len = children.length; i < len; i ++){
			if(children[i].name == key){
				child = children[i];
				break;
			}
		}

		if(child){
			child.value = val;
		}
		else{
			child = new JSONTreeView(key, val, self, false);
			child.on('rename', onChildRename);
			child.on('delete', onChildDelete);
			child.on('change', onChildChange);
			child.on('append', onChildAppend);
			child.on('click', onChildClick);
			child.on('expand', onChildExpand);
			child.on('collapse', onChildCollapse);
			child.on('refresh', onChildRefresh);
			children.push(child);
			child.emit('append', child, [key], 'value', val, true);
		}

		dom.children.appendChild(child.dom);

		return child;
	}


	function removeChild(child){
		if(child.dom.parentNode){
			dom.children.removeChild(child.dom);
		}

		child.destroy();
		child.emit('delete', child, [child.name], child.value,
			child.parent.isRoot ? child.parent.oldType : child.parent.type, true);
		child.removeAllListeners();
	}


	function editField(field){
		if((readonly > 0 && filterText) || !!(readonly & 1)) {
			return;
		}
		if(field === 'value' && (type === 'object' || type === 'array')){
			return;
		}
		if(parent_ && parent_.type == 'array'){
			// Obviously cannot modify array keys
			nameEditable = false;
		}
		var editable = field == 'name' ? nameEditable : valueEditable,
			element = dom[field];

		if(!editable && (parent_ && parent_.type === 'array')){
			if (!parent_.inserting) {
				// throw new Error('Cannot edit an array index.');
				return;
			}
		}

		if(field == 'value' && type == 'string'){
			element.innerText = '"' + value + '"';
		}

		if(field == 'name'){
			edittingName = true;
		}

		if(field == 'value'){
			edittingValue = true;
		}

		element.classList.add('edit');
		element.setAttribute('contenteditable', true);
		element.focus();
		document.execCommand('selectAll', false, null);
	}


	function itemClicked(field) {
		self.emit('click', self,
			!self.withRootName && self.isRoot ? [''] : [self.name], self.value);
	}


	function editFieldStop(field){
		var element = dom[field];
		
		if(field == 'name'){
			if(!edittingName){
				return;
			}
			edittingName = false;
		}

		if(field == 'value'){
			if(!edittingValue){
				return;
			}
			edittingValue = false;
		}
		
		if(field == 'name'){
			var p = self.parent;
			var edittingNameText = element.innerText;
			if (p && p.type === 'object' && edittingNameText in p.value) {
				element.innerText = name;
				element.classList.remove('edit');
				element.removeAttribute('contenteditable');
				// throw new Error('Name exist, ' + edittingNameText);
			}
			else {
				setName.call(self, edittingNameText);
			}
		}
		else{
			var text = element.innerText;
			try{
				setValue(text === 'undefined' ? undefined : JSON.parse(text));
			}
			catch(err){
				setValue(text);
			}
		}

		element.classList.remove('edit');
		element.removeAttribute('contenteditable');
	}


	function editFieldKeyPressed(field, e){
		switch(e.key){
			case 'Escape':
			case 'Enter':
				editFieldStop(field);
				break;
		}
	}


	function editFieldTabPressed(field, e){
		if(e.key == 'Tab'){
			editFieldStop(field);

			if(field == 'name'){
				e.preventDefault();
				editField('value');
			}
			else{
				editFieldStop(field);
			}
		}
	}


	function numericValueKeyDown(e){
		var increment = 0, currentValue;

		if(type != 'number'){
			return;
		}

		switch(e.key){
			case 'ArrowDown':
			case 'Down':
				increment = -1;
				break;

			case 'ArrowUp':
			case 'Up':
				increment = 1;
				break;
		}

		if(e.shiftKey){
			increment *= 10;
		}

		if(e.ctrlKey || e.metaKey){
			increment /= 10;
		}

		if(increment){
			currentValue = parseFloat(dom.value.innerText);

			if(!isNaN(currentValue)){
				setValue(Number((currentValue + increment).toFixed(10)));
			}
		}
	}


	function getType(value){
		var type = typeof value;

		if(type == 'object'){
			if(value === null){
				return 'null';
			}

			if(Array.isArray(value)){
				return 'array';
			}
		}
		if (type === 'undefined') {
			return 'undefined';
		}

		return type;
	}


	function onCollapseExpandClick(){
		if(expanded){
			collapse();
		}
		else{
			expand();
		}
	}


	function onInsertClick(){
		var newName = type == 'array' ? value.length : undefined,
			child = addChild(newName, null);
		if (child.parent) {
			child.parent.inserting = true;
		}
		if(type == 'array'){
			value.push(null);
			child.editValue();
			child.emit('append', self, [value.length - 1], 'value', null, true);
			if (child.parent) {
				child.parent.inserting = false;
			}
		}
		else{
			child.editName();
		}
	}


	function onDeleteClick(){
		self.emit('delete', self, [self.name], self.value,
			self.parent.isRoot ? self.parent.oldType : self.parent.type, false);
	}


	function onChildRename(child, keyPath, oldName, newName, original){
		var allow = newName && type != 'array' && !(newName in value) && original;
		if(allow){
			value[newName] = child.value;
			delete value[oldName];
			if (self.inserting) {
				child.emit('append', child, [newName], 'name', newName, true);
				self.inserting = false;
				return;
			}
		}
		else if(oldName === undefined){
			// A new node inserted via the UI
			original && removeChild(child);
		}
		else if (original){
			// Cannot rename array keys, or duplicate object key names
			child.name = oldName;
			return;
		}
		// value[keyPath] = newName;

		// child.once('rename', onChildRename);

		if (self.withRootName || !self.isRoot) {
			keyPath.unshift(name);
		}
		else if (self.withRootName && self.isRoot) {
			keyPath.unshift(name);
		}
		if (oldName !== undefined) {
			self.emit('rename', child, keyPath, oldName, newName, false);
		}
	}


	function onChildAppend(child, keyPath, nameOrValue, newValue, sender){
		if (self.withRootName || !self.isRoot) {
			keyPath.unshift(name);
		}
		self.emit('append', child, keyPath, nameOrValue, newValue, false);
		sender && updateObjectChildCount();
	}


	function onChildChange(child, keyPath, oldValue, newValue, recursed){
		if(!recursed){
			value[keyPath] = newValue;
		}

		if (self.withRootName || !self.isRoot) {
			keyPath.unshift(name);
		}
		self.emit('change', child, keyPath, oldValue, newValue, true);
	}


	function onChildDelete(child, keyPath, deletedValue, parentType, passive){
		var key = child.name;

		if (passive) {
			if (self.withRootName/* || !self.isRoot*/) {
				keyPath.unshift(name);
			}
			self.emit('delete', child, keyPath, deletedValue, parentType, passive);
			updateObjectChildCount();
		}
		else {
			if (type == 'array') {
				value.splice(key, 1);
			}
			else {
				delete value[key];
			}
			refresh(true);
		}
	}


	function onChildClick(child, keyPath, value) {
		if (self.withRootName || !self.isRoot) {
			keyPath.unshift(name);
		}
		self.emit('click', child, keyPath, value);
	}


	function onChildExpand(child, keyPath, value) {
		if (self.withRootName || !self.isRoot) {
			keyPath.unshift(name);
		}
		self.emit('expand', child, keyPath, value);
	}


	function onChildCollapse(child, keyPath, value) {
		if (self.withRootName || !self.isRoot) {
			keyPath.unshift(name);
		}
		self.emit('collapse', child, keyPath, value);
	}


	function onChildRefresh(child, keyPath, value) {
		if (self.withRootName || !self.isRoot) {
			keyPath.unshift(name);
		}
		self.emit('refresh', child, keyPath, value);
	}


	function addDomEventListener(element, name, fn){
		element.addEventListener(name, fn);
		domEventListeners.push({element : element, name : name, fn : fn});
	}
}

},{"util":"1TanC","events":"1LHgi"}],"1TanC":[function(require,module,exports) {
var process = require("process");
// Copyright Joyent, Inc. and other Node contributors.
// 
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
// 
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || (function getOwnPropertyDescriptors(obj) {
  var keys = Object.keys(obj);
  var descriptors = {};
  for (var i = 0; i < keys.length; i++) {
    descriptors[keys[i]] = Object.getOwnPropertyDescriptor(obj, keys[i]);
  }
  return descriptors;
});
var formatRegExp = /%[sdj%]/g;
exports.format = function (f) {
  if (!isString(f)) {
    var objects = [];
    for (var i = 0; i < arguments.length; i++) {
      objects.push(inspect(arguments[i]));
    }
    return objects.join(' ');
  }
  var i = 1;
  var args = arguments;
  var len = args.length;
  var str = String(f).replace(formatRegExp, function (x) {
    if (x === '%%') return '%';
    if (i >= len) return x;
    switch (x) {
      case '%s':
        return String(args[i++]);
      case '%d':
        return Number(args[i++]);
      case '%j':
        try {
          return JSON.stringify(args[i++]);
        } catch (_) {
          return '[Circular]';
        }
      default:
        return x;
    }
  });
  for (var x = args[i]; i < len; x = args[++i]) {
    if (isNull(x) || !isObject(x)) {
      str += ' ' + x;
    } else {
      str += ' ' + inspect(x);
    }
  }
  return str;
};
// Mark that a method should not be used.
// Returns a modified function which warns once by default.
// If --no-deprecation is set, then it is a no-op.
exports.deprecate = function (fn, msg) {
  if (typeof process !== 'undefined' && process.noDeprecation === true) {
    return fn;
  }
  // Allow for deprecating things in the process of starting up.
  if (typeof process === 'undefined') {
    return function () {
      return exports.deprecate(fn, msg).apply(this, arguments);
    };
  }
  var warned = false;
  function deprecated() {
    if (!warned) {
      if (process.throwDeprecation) {
        throw new Error(msg);
      } else if (process.traceDeprecation) {
        console.trace(msg);
      } else {
        console.error(msg);
      }
      warned = true;
    }
    return fn.apply(this, arguments);
  }
  return deprecated;
};
var debugs = {};
var debugEnvRegex = /^$/;
if (undefined) {
  var debugEnv = undefined;
  debugEnv = debugEnv.replace(/[|\\{}()[\]^$+?.]/g, '\\$&').replace(/\*/g, '.*').replace(/,/g, '$|^').toUpperCase();
  debugEnvRegex = new RegExp('^' + debugEnv + '$', 'i');
}
exports.debuglog = function (set) {
  set = set.toUpperCase();
  if (!debugs[set]) {
    if (debugEnvRegex.test(set)) {
      var pid = process.pid;
      debugs[set] = function () {
        var msg = exports.format.apply(exports, arguments);
        console.error('%s %d: %s', set, pid, msg);
      };
    } else {
      debugs[set] = function () {};
    }
  }
  return debugs[set];
};
/**
* Echos the value of a value. Trys to print the value out
* in the best way possible given the different types.
*
* @param {Object} obj The object to print out.
* @param {Object} opts Optional options object that alters the output.
*/
/*legacy: obj, showHidden, depth, colors*/
function inspect(obj, opts) {
  // default options
  var ctx = {
    seen: [],
    stylize: stylizeNoColor
  };
  // legacy...
  if (arguments.length >= 3) ctx.depth = arguments[2];
  if (arguments.length >= 4) ctx.colors = arguments[3];
  if (isBoolean(opts)) {
    // legacy...
    ctx.showHidden = opts;
  } else if (opts) {
    // got an "options" object
    exports._extend(ctx, opts);
  }
  // set default options
  if (isUndefined(ctx.showHidden)) ctx.showHidden = false;
  if (isUndefined(ctx.depth)) ctx.depth = 2;
  if (isUndefined(ctx.colors)) ctx.colors = false;
  if (isUndefined(ctx.customInspect)) ctx.customInspect = true;
  if (ctx.colors) ctx.stylize = stylizeWithColor;
  return formatValue(ctx, obj, ctx.depth);
}
exports.inspect = inspect;
// http://en.wikipedia.org/wiki/ANSI_escape_code#graphics
inspect.colors = {
  'bold': [1, 22],
  'italic': [3, 23],
  'underline': [4, 24],
  'inverse': [7, 27],
  'white': [37, 39],
  'grey': [90, 39],
  'black': [30, 39],
  'blue': [34, 39],
  'cyan': [36, 39],
  'green': [32, 39],
  'magenta': [35, 39],
  'red': [31, 39],
  'yellow': [33, 39]
};
// Don't use 'blue' not visible on cmd.exe
inspect.styles = {
  'special': 'cyan',
  'number': 'yellow',
  'boolean': 'yellow',
  'undefined': 'grey',
  'null': 'bold',
  'string': 'green',
  'date': 'magenta',
  // "name": intentionally not styling
  'regexp': 'red'
};
function stylizeWithColor(str, styleType) {
  var style = inspect.styles[styleType];
  if (style) {
    return '\u001b[' + inspect.colors[style][0] + 'm' + str + '\u001b[' + inspect.colors[style][1] + 'm';
  } else {
    return str;
  }
}
function stylizeNoColor(str, styleType) {
  return str;
}
function arrayToHash(array) {
  var hash = {};
  array.forEach(function (val, idx) {
    hash[val] = true;
  });
  return hash;
}
function formatValue(ctx, value, recurseTimes) {
  // Provide a hook for user-specified inspect functions.
  // Check that value is an object with an inspect function on it
  if (ctx.customInspect && value && isFunction(value.inspect) && // Filter out the util module, it's inspect function is special
  value.inspect !== exports.inspect && // Also filter out any prototype objects using the circular check.
  !(value.constructor && value.constructor.prototype === value)) {
    var ret = value.inspect(recurseTimes, ctx);
    if (!isString(ret)) {
      ret = formatValue(ctx, ret, recurseTimes);
    }
    return ret;
  }
  // Primitive types cannot have properties
  var primitive = formatPrimitive(ctx, value);
  if (primitive) {
    return primitive;
  }
  // Look up the keys of the object.
  var keys = Object.keys(value);
  var visibleKeys = arrayToHash(keys);
  if (ctx.showHidden) {
    keys = Object.getOwnPropertyNames(value);
  }
  // IE doesn't make error fields non-enumerable
  // http://msdn.microsoft.com/en-us/library/ie/dww52sbt(v=vs.94).aspx
  if (isError(value) && (keys.indexOf('message') >= 0 || keys.indexOf('description') >= 0)) {
    return formatError(value);
  }
  // Some type of object without properties can be shortcutted.
  if (keys.length === 0) {
    if (isFunction(value)) {
      var name = value.name ? ': ' + value.name : '';
      return ctx.stylize('[Function' + name + ']', 'special');
    }
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    }
    if (isDate(value)) {
      return ctx.stylize(Date.prototype.toString.call(value), 'date');
    }
    if (isError(value)) {
      return formatError(value);
    }
  }
  var base = '', array = false, braces = ['{', '}'];
  // Make Array say that they are Array
  if (isArray(value)) {
    array = true;
    braces = ['[', ']'];
  }
  // Make functions say that they are functions
  if (isFunction(value)) {
    var n = value.name ? ': ' + value.name : '';
    base = ' [Function' + n + ']';
  }
  // Make RegExps say that they are RegExps
  if (isRegExp(value)) {
    base = ' ' + RegExp.prototype.toString.call(value);
  }
  // Make dates with properties first say the date
  if (isDate(value)) {
    base = ' ' + Date.prototype.toUTCString.call(value);
  }
  // Make error with message first say the error
  if (isError(value)) {
    base = ' ' + formatError(value);
  }
  if (keys.length === 0 && (!array || value.length == 0)) {
    return braces[0] + base + braces[1];
  }
  if (recurseTimes < 0) {
    if (isRegExp(value)) {
      return ctx.stylize(RegExp.prototype.toString.call(value), 'regexp');
    } else {
      return ctx.stylize('[Object]', 'special');
    }
  }
  ctx.seen.push(value);
  var output;
  if (array) {
    output = formatArray(ctx, value, recurseTimes, visibleKeys, keys);
  } else {
    output = keys.map(function (key) {
      return formatProperty(ctx, value, recurseTimes, visibleKeys, key, array);
    });
  }
  ctx.seen.pop();
  return reduceToSingleString(output, base, braces);
}
function formatPrimitive(ctx, value) {
  if (isUndefined(value)) return ctx.stylize('undefined', 'undefined');
  if (isString(value)) {
    var simple = '\'' + JSON.stringify(value).replace(/^"|"$/g, '').replace(/'/g, "\\'").replace(/\\"/g, '"') + '\'';
    return ctx.stylize(simple, 'string');
  }
  if (isNumber(value)) return ctx.stylize('' + value, 'number');
  if (isBoolean(value)) return ctx.stylize('' + value, 'boolean');
  // For some reason typeof null is "object", so special case here.
  if (isNull(value)) return ctx.stylize('null', 'null');
}
function formatError(value) {
  return '[' + Error.prototype.toString.call(value) + ']';
}
function formatArray(ctx, value, recurseTimes, visibleKeys, keys) {
  var output = [];
  for (var i = 0, l = value.length; i < l; ++i) {
    if (hasOwnProperty(value, String(i))) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, String(i), true));
    } else {
      output.push('');
    }
  }
  keys.forEach(function (key) {
    if (!key.match(/^\d+$/)) {
      output.push(formatProperty(ctx, value, recurseTimes, visibleKeys, key, true));
    }
  });
  return output;
}
function formatProperty(ctx, value, recurseTimes, visibleKeys, key, array) {
  var name, str, desc;
  desc = Object.getOwnPropertyDescriptor(value, key) || ({
    value: value[key]
  });
  if (desc.get) {
    if (desc.set) {
      str = ctx.stylize('[Getter/Setter]', 'special');
    } else {
      str = ctx.stylize('[Getter]', 'special');
    }
  } else {
    if (desc.set) {
      str = ctx.stylize('[Setter]', 'special');
    }
  }
  if (!hasOwnProperty(visibleKeys, key)) {
    name = '[' + key + ']';
  }
  if (!str) {
    if (ctx.seen.indexOf(desc.value) < 0) {
      if (isNull(recurseTimes)) {
        str = formatValue(ctx, desc.value, null);
      } else {
        str = formatValue(ctx, desc.value, recurseTimes - 1);
      }
      if (str.indexOf('\n') > -1) {
        if (array) {
          str = str.split('\n').map(function (line) {
            return '  ' + line;
          }).join('\n').substr(2);
        } else {
          str = '\n' + str.split('\n').map(function (line) {
            return '   ' + line;
          }).join('\n');
        }
      }
    } else {
      str = ctx.stylize('[Circular]', 'special');
    }
  }
  if (isUndefined(name)) {
    if (array && key.match(/^\d+$/)) {
      return str;
    }
    name = JSON.stringify('' + key);
    if (name.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)) {
      name = name.substr(1, name.length - 2);
      name = ctx.stylize(name, 'name');
    } else {
      name = name.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'");
      name = ctx.stylize(name, 'string');
    }
  }
  return name + ': ' + str;
}
function reduceToSingleString(output, base, braces) {
  var numLinesEst = 0;
  var length = output.reduce(function (prev, cur) {
    numLinesEst++;
    if (cur.indexOf('\n') >= 0) numLinesEst++;
    return prev + cur.replace(/\u001b\[\d\d?m/g, '').length + 1;
  }, 0);
  if (length > 60) {
    return braces[0] + (base === '' ? '' : base + '\n ') + ' ' + output.join(',\n  ') + ' ' + braces[1];
  }
  return braces[0] + base + ' ' + output.join(', ') + ' ' + braces[1];
}
// NOTE: These type checking functions intentionally don't use `instanceof`
// because it is fragile and can be easily faked with `Object.create()`.
exports.types = require('./support/types');
function isArray(ar) {
  return Array.isArray(ar);
}
exports.isArray = isArray;
function isBoolean(arg) {
  return typeof arg === 'boolean';
}
exports.isBoolean = isBoolean;
function isNull(arg) {
  return arg === null;
}
exports.isNull = isNull;
function isNullOrUndefined(arg) {
  return arg == null;
}
exports.isNullOrUndefined = isNullOrUndefined;
function isNumber(arg) {
  return typeof arg === 'number';
}
exports.isNumber = isNumber;
function isString(arg) {
  return typeof arg === 'string';
}
exports.isString = isString;
function isSymbol(arg) {
  return typeof arg === 'symbol';
}
exports.isSymbol = isSymbol;
function isUndefined(arg) {
  return arg === void 0;
}
exports.isUndefined = isUndefined;
function isRegExp(re) {
  return isObject(re) && objectToString(re) === '[object RegExp]';
}
exports.isRegExp = isRegExp;
exports.types.isRegExp = isRegExp;
function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}
exports.isObject = isObject;
function isDate(d) {
  return isObject(d) && objectToString(d) === '[object Date]';
}
exports.isDate = isDate;
exports.types.isDate = isDate;
function isError(e) {
  return isObject(e) && (objectToString(e) === '[object Error]' || e instanceof Error);
}
exports.isError = isError;
exports.types.isNativeError = isError;
function isFunction(arg) {
  return typeof arg === 'function';
}
exports.isFunction = isFunction;
function isPrimitive(arg) {
  return arg === null || typeof arg === 'boolean' || typeof arg === 'number' || typeof arg === 'string' || typeof arg === 'symbol' || // ES6 symbol
  typeof arg === 'undefined';
}
exports.isPrimitive = isPrimitive;
exports.isBuffer = require('./support/isBuffer');
function objectToString(o) {
  return Object.prototype.toString.call(o);
}
function pad(n) {
  return n < 10 ? '0' + n.toString(10) : n.toString(10);
}
var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// 26 Feb 16:19:34
function timestamp() {
  var d = new Date();
  var time = [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(':');
  return [d.getDate(), months[d.getMonth()], time].join(' ');
}
// log is just a thin wrapper to console.log that prepends a timestamp
exports.log = function () {
  console.log('%s - %s', timestamp(), exports.format.apply(exports, arguments));
};
/**
* Inherit the prototype methods from one constructor into another.
*
* The Function.prototype.inherits from lang.js rewritten as a standalone
* function (not on Function.prototype). NOTE: If this file is to be loaded
* during bootstrapping this function needs to be rewritten using some native
* functions as prototype setup using normal JavaScript does not work as
* expected during bootstrapping (see mirror.js in r114903).
*
* @param {function} ctor Constructor function which needs to inherit the
*     prototype.
* @param {function} superCtor Constructor function to inherit prototype from.
*/
exports.inherits = require('inherits');
exports._extend = function (origin, add) {
  // Don't do anything if add isn't an object
  if (!add || !isObject(add)) return origin;
  var keys = Object.keys(add);
  var i = keys.length;
  while (i--) {
    origin[keys[i]] = add[keys[i]];
  }
  return origin;
};
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
var kCustomPromisifiedSymbol = typeof Symbol !== 'undefined' ? Symbol('util.promisify.custom') : undefined;
exports.promisify = function promisify(original) {
  if (typeof original !== 'function') throw new TypeError('The "original" argument must be of type Function');
  if (kCustomPromisifiedSymbol && original[kCustomPromisifiedSymbol]) {
    var fn = original[kCustomPromisifiedSymbol];
    if (typeof fn !== 'function') {
      throw new TypeError('The "util.promisify.custom" argument must be of type Function');
    }
    Object.defineProperty(fn, kCustomPromisifiedSymbol, {
      value: fn,
      enumerable: false,
      writable: false,
      configurable: true
    });
    return fn;
  }
  function fn() {
    var promiseResolve, promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    args.push(function (err, value) {
      if (err) {
        promiseReject(err);
      } else {
        promiseResolve(value);
      }
    });
    try {
      original.apply(this, args);
    } catch (err) {
      promiseReject(err);
    }
    return promise;
  }
  Object.setPrototypeOf(fn, Object.getPrototypeOf(original));
  if (kCustomPromisifiedSymbol) Object.defineProperty(fn, kCustomPromisifiedSymbol, {
    value: fn,
    enumerable: false,
    writable: false,
    configurable: true
  });
  return Object.defineProperties(fn, getOwnPropertyDescriptors(original));
};
exports.promisify.custom = kCustomPromisifiedSymbol;
function callbackifyOnRejected(reason, cb) {
  // `!reason` guard inspired by bluebird (Ref: https://goo.gl/t5IS6M).
  // Because `null` is a special error value in callbacks which means "no error
  // occurred", we error-wrap so the callback consumer can distinguish between
  // "the promise rejected with null" or "the promise fulfilled with undefined".
  if (!reason) {
    var newReason = new Error('Promise was rejected with a falsy value');
    newReason.reason = reason;
    reason = newReason;
  }
  return cb(reason);
}
function callbackify(original) {
  if (typeof original !== 'function') {
    throw new TypeError('The "original" argument must be of type Function');
  }
  // We DO NOT return the promise as it gives the user a false sense that
  // the promise is actually somehow related to the callback's execution
  // and that the callback throwing will reject the promise.
  function callbackified() {
    var args = [];
    for (var i = 0; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    var maybeCb = args.pop();
    if (typeof maybeCb !== 'function') {
      throw new TypeError('The last argument must be of type Function');
    }
    var self = this;
    var cb = function () {
      return maybeCb.apply(self, arguments);
    };
    // In true node style we process the callback on `nextTick` with all the
    // implications (stack, `uncaughtException`, `async_hooks`)
    original.apply(this, args).then(function (ret) {
      process.nextTick(cb.bind(null, null, ret));
    }, function (rej) {
      process.nextTick(callbackifyOnRejected.bind(null, rej, cb));
    });
  }
  Object.setPrototypeOf(callbackified, Object.getPrototypeOf(original));
  Object.defineProperties(callbackified, getOwnPropertyDescriptors(original));
  return callbackified;
}
exports.callbackify = callbackify;

},{"process":"7AgFc","./support/types":"7ojRf","./support/isBuffer":"3ucGb","inherits":"1EUwN"}],"7AgFc":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}
(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }
  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();
function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    // normal enviroments in sane situations
    return setTimeout(fun, 0);
  }
  // if setTimeout wasn't available but was latter defined
  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }
  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}
function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    // normal enviroments in sane situations
    return clearTimeout(marker);
  }
  // if clearTimeout wasn't available but was latter defined
  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }
  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }
  draining = false;
  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }
  if (queue.length) {
    drainQueue();
  }
}
function drainQueue() {
  if (draining) {
    return;
  }
  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;
  while (len) {
    currentQueue = queue;
    queue = [];
    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }
    queueIndex = -1;
    len = queue.length;
  }
  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}
process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);
  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }
  queue.push(new Item(fun, args));
  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
};
// v8 likes predictible objects
function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}
Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = '';
// empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function (name) {
  return [];
};
process.binding = function (name) {
  throw new Error('process.binding is not supported');
};
process.cwd = function () {
  return '/';
};
process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};
process.umask = function () {
  return 0;
};

},{}],"7ojRf":[function(require,module,exports) {
// Currently in sync with Node.js lib/internal/util/types.js
// https://github.com/nodejs/node/commit/112cc7c27551254aa2b17098fb774867f05ed0d9

'use strict';

var isArgumentsObject = require('is-arguments');
var isGeneratorFunction = require('is-generator-function');
var whichTypedArray = require('which-typed-array');
var isTypedArray = require('is-typed-array');

function uncurryThis(f) {
  return f.call.bind(f);
}

var BigIntSupported = typeof BigInt !== 'undefined';
var SymbolSupported = typeof Symbol !== 'undefined';

var ObjectToString = uncurryThis(Object.prototype.toString);

var numberValue = uncurryThis(Number.prototype.valueOf);
var stringValue = uncurryThis(String.prototype.valueOf);
var booleanValue = uncurryThis(Boolean.prototype.valueOf);

if (BigIntSupported) {
  var bigIntValue = uncurryThis(BigInt.prototype.valueOf);
}

if (SymbolSupported) {
  var symbolValue = uncurryThis(Symbol.prototype.valueOf);
}

function checkBoxedPrimitive(value, prototypeValueOf) {
  if (typeof value !== 'object') {
    return false;
  }
  try {
    prototypeValueOf(value);
    return true;
  } catch(e) {
    return false;
  }
}

exports.isArgumentsObject = isArgumentsObject;
exports.isGeneratorFunction = isGeneratorFunction;
exports.isTypedArray = isTypedArray;

// Taken from here and modified for better browser support
// https://github.com/sindresorhus/p-is-promise/blob/cda35a513bda03f977ad5cde3a079d237e82d7ef/index.js
function isPromise(input) {
	return (
		(
			typeof Promise !== 'undefined' &&
			input instanceof Promise
		) ||
		(
			input !== null &&
			typeof input === 'object' &&
			typeof input.then === 'function' &&
			typeof input.catch === 'function'
		)
	);
}
exports.isPromise = isPromise;

function isArrayBufferView(value) {
  if (typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView) {
    return ArrayBuffer.isView(value);
  }

  return (
    isTypedArray(value) ||
    isDataView(value)
  );
}
exports.isArrayBufferView = isArrayBufferView;


function isUint8Array(value) {
  return whichTypedArray(value) === 'Uint8Array';
}
exports.isUint8Array = isUint8Array;

function isUint8ClampedArray(value) {
  return whichTypedArray(value) === 'Uint8ClampedArray';
}
exports.isUint8ClampedArray = isUint8ClampedArray;

function isUint16Array(value) {
  return whichTypedArray(value) === 'Uint16Array';
}
exports.isUint16Array = isUint16Array;

function isUint32Array(value) {
  return whichTypedArray(value) === 'Uint32Array';
}
exports.isUint32Array = isUint32Array;

function isInt8Array(value) {
  return whichTypedArray(value) === 'Int8Array';
}
exports.isInt8Array = isInt8Array;

function isInt16Array(value) {
  return whichTypedArray(value) === 'Int16Array';
}
exports.isInt16Array = isInt16Array;

function isInt32Array(value) {
  return whichTypedArray(value) === 'Int32Array';
}
exports.isInt32Array = isInt32Array;

function isFloat32Array(value) {
  return whichTypedArray(value) === 'Float32Array';
}
exports.isFloat32Array = isFloat32Array;

function isFloat64Array(value) {
  return whichTypedArray(value) === 'Float64Array';
}
exports.isFloat64Array = isFloat64Array;

function isBigInt64Array(value) {
  return whichTypedArray(value) === 'BigInt64Array';
}
exports.isBigInt64Array = isBigInt64Array;

function isBigUint64Array(value) {
  return whichTypedArray(value) === 'BigUint64Array';
}
exports.isBigUint64Array = isBigUint64Array;

function isMapToString(value) {
  return ObjectToString(value) === '[object Map]';
}
isMapToString.working = (
  typeof Map !== 'undefined' &&
  isMapToString(new Map())
);

function isMap(value) {
  if (typeof Map === 'undefined') {
    return false;
  }

  return isMapToString.working
    ? isMapToString(value)
    : value instanceof Map;
}
exports.isMap = isMap;

function isSetToString(value) {
  return ObjectToString(value) === '[object Set]';
}
isSetToString.working = (
  typeof Set !== 'undefined' &&
  isSetToString(new Set())
);
function isSet(value) {
  if (typeof Set === 'undefined') {
    return false;
  }

  return isSetToString.working
    ? isSetToString(value)
    : value instanceof Set;
}
exports.isSet = isSet;

function isWeakMapToString(value) {
  return ObjectToString(value) === '[object WeakMap]';
}
isWeakMapToString.working = (
  typeof WeakMap !== 'undefined' &&
  isWeakMapToString(new WeakMap())
);
function isWeakMap(value) {
  if (typeof WeakMap === 'undefined') {
    return false;
  }

  return isWeakMapToString.working
    ? isWeakMapToString(value)
    : value instanceof WeakMap;
}
exports.isWeakMap = isWeakMap;

function isWeakSetToString(value) {
  return ObjectToString(value) === '[object WeakSet]';
}
isWeakSetToString.working = (
  typeof WeakSet !== 'undefined' &&
  isWeakSetToString(new WeakSet())
);
function isWeakSet(value) {
  return isWeakSetToString(value);
}
exports.isWeakSet = isWeakSet;

function isArrayBufferToString(value) {
  return ObjectToString(value) === '[object ArrayBuffer]';
}
isArrayBufferToString.working = (
  typeof ArrayBuffer !== 'undefined' &&
  isArrayBufferToString(new ArrayBuffer())
);
function isArrayBuffer(value) {
  if (typeof ArrayBuffer === 'undefined') {
    return false;
  }

  return isArrayBufferToString.working
    ? isArrayBufferToString(value)
    : value instanceof ArrayBuffer;
}
exports.isArrayBuffer = isArrayBuffer;

function isDataViewToString(value) {
  return ObjectToString(value) === '[object DataView]';
}
isDataViewToString.working = (
  typeof ArrayBuffer !== 'undefined' &&
  typeof DataView !== 'undefined' &&
  isDataViewToString(new DataView(new ArrayBuffer(1), 0, 1))
);
function isDataView(value) {
  if (typeof DataView === 'undefined') {
    return false;
  }

  return isDataViewToString.working
    ? isDataViewToString(value)
    : value instanceof DataView;
}
exports.isDataView = isDataView;

// Store a copy of SharedArrayBuffer in case it's deleted elsewhere
var SharedArrayBufferCopy = typeof SharedArrayBuffer !== 'undefined' ? SharedArrayBuffer : undefined;
function isSharedArrayBufferToString(value) {
  return ObjectToString(value) === '[object SharedArrayBuffer]';
}
function isSharedArrayBuffer(value) {
  if (typeof SharedArrayBufferCopy === 'undefined') {
    return false;
  }

  if (typeof isSharedArrayBufferToString.working === 'undefined') {
    isSharedArrayBufferToString.working = isSharedArrayBufferToString(new SharedArrayBufferCopy());
  }

  return isSharedArrayBufferToString.working
    ? isSharedArrayBufferToString(value)
    : value instanceof SharedArrayBufferCopy;
}
exports.isSharedArrayBuffer = isSharedArrayBuffer;

function isAsyncFunction(value) {
  return ObjectToString(value) === '[object AsyncFunction]';
}
exports.isAsyncFunction = isAsyncFunction;

function isMapIterator(value) {
  return ObjectToString(value) === '[object Map Iterator]';
}
exports.isMapIterator = isMapIterator;

function isSetIterator(value) {
  return ObjectToString(value) === '[object Set Iterator]';
}
exports.isSetIterator = isSetIterator;

function isGeneratorObject(value) {
  return ObjectToString(value) === '[object Generator]';
}
exports.isGeneratorObject = isGeneratorObject;

function isWebAssemblyCompiledModule(value) {
  return ObjectToString(value) === '[object WebAssembly.Module]';
}
exports.isWebAssemblyCompiledModule = isWebAssemblyCompiledModule;

function isNumberObject(value) {
  return checkBoxedPrimitive(value, numberValue);
}
exports.isNumberObject = isNumberObject;

function isStringObject(value) {
  return checkBoxedPrimitive(value, stringValue);
}
exports.isStringObject = isStringObject;

function isBooleanObject(value) {
  return checkBoxedPrimitive(value, booleanValue);
}
exports.isBooleanObject = isBooleanObject;

function isBigIntObject(value) {
  return BigIntSupported && checkBoxedPrimitive(value, bigIntValue);
}
exports.isBigIntObject = isBigIntObject;

function isSymbolObject(value) {
  return SymbolSupported && checkBoxedPrimitive(value, symbolValue);
}
exports.isSymbolObject = isSymbolObject;

function isBoxedPrimitive(value) {
  return (
    isNumberObject(value) ||
    isStringObject(value) ||
    isBooleanObject(value) ||
    isBigIntObject(value) ||
    isSymbolObject(value)
  );
}
exports.isBoxedPrimitive = isBoxedPrimitive;

function isAnyArrayBuffer(value) {
  return typeof Uint8Array !== 'undefined' && (
    isArrayBuffer(value) ||
    isSharedArrayBuffer(value)
  );
}
exports.isAnyArrayBuffer = isAnyArrayBuffer;

['isProxy', 'isExternal', 'isModuleNamespaceObject'].forEach(function(method) {
  Object.defineProperty(exports, method, {
    enumerable: false,
    value: function() {
      throw new Error(method + ' is not supported in userland');
    }
  });
});

},{"is-arguments":"3H9Pn","is-generator-function":"6f5pX","which-typed-array":"2qIcv","is-typed-array":"dBlx5"}],"3H9Pn":[function(require,module,exports) {
'use strict';

var hasToStringTag = require('has-tostringtag/shams')();
var callBound = require('call-bind/callBound');

var $toString = callBound('Object.prototype.toString');

var isStandardArguments = function isArguments(value) {
	if (hasToStringTag && value && typeof value === 'object' && Symbol.toStringTag in value) {
		return false;
	}
	return $toString(value) === '[object Arguments]';
};

var isLegacyArguments = function isArguments(value) {
	if (isStandardArguments(value)) {
		return true;
	}
	return value !== null &&
		typeof value === 'object' &&
		typeof value.length === 'number' &&
		value.length >= 0 &&
		$toString(value) !== '[object Array]' &&
		$toString(value.callee) === '[object Function]';
};

var supportsStandardArguments = (function () {
	return isStandardArguments(arguments);
}());

isStandardArguments.isLegacyArguments = isLegacyArguments; // for tests

module.exports = supportsStandardArguments ? isStandardArguments : isLegacyArguments;

},{"has-tostringtag/shams":"4JMPx","call-bind/callBound":"2diBM"}],"4JMPx":[function(require,module,exports) {
'use strict';

var hasSymbols = require('has-symbols/shams');

module.exports = function hasToStringTagShams() {
	return hasSymbols() && !!Symbol.toStringTag;
};

},{"has-symbols/shams":"3VSTQ"}],"3VSTQ":[function(require,module,exports) {
'use strict';

/* eslint complexity: [2, 18], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};

},{}],"2diBM":[function(require,module,exports) {
'use strict';

var GetIntrinsic = require('get-intrinsic');

var callBind = require('./');

var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));

module.exports = function callBoundIntrinsic(name, allowMissing) {
	var intrinsic = GetIntrinsic(name, !!allowMissing);
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
		return callBind(intrinsic);
	}
	return intrinsic;
};

},{"get-intrinsic":"4mEyY","./":"lLIWm"}],"4mEyY":[function(require,module,exports) {
'use strict';

var undefined;

var $SyntaxError = SyntaxError;
var $Function = Function;
var $TypeError = TypeError;

// eslint-disable-next-line consistent-return
var getEvalledConstructor = function (expressionSyntax) {
	try {
		return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
	} catch (e) {}
};

var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) {
	try {
		$gOPD({}, '');
	} catch (e) {
		$gOPD = null; // this is IE 8, which has a broken gOPD
	}
}

var throwTypeError = function () {
	throw new $TypeError();
};
var ThrowTypeError = $gOPD
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = require('has-symbols')();

var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto

var needsEval = {};

var TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);

var INTRINSICS = {
	'%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
	'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
	'%AsyncFromSyncIteratorPrototype%': undefined,
	'%AsyncFunction%': needsEval,
	'%AsyncGenerator%': needsEval,
	'%AsyncGeneratorFunction%': needsEval,
	'%AsyncIteratorPrototype%': needsEval,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
	'%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
	'%Boolean%': Boolean,
	'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
	'%Date%': Date,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': Error,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': EvalError,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
	'%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
	'%Function%': $Function,
	'%GeneratorFunction%': needsEval,
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined,
	'%Map%': typeof Map === 'undefined' ? undefined : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
	'%Math%': Math,
	'%Number%': Number,
	'%Object%': Object,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
	'%RangeError%': RangeError,
	'%ReferenceError%': ReferenceError,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
	'%RegExp%': RegExp,
	'%Set%': typeof Set === 'undefined' ? undefined : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
	'%Symbol%': hasSymbols ? Symbol : undefined,
	'%SyntaxError%': $SyntaxError,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypeError%': $TypeError,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
	'%URIError%': URIError,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
	'%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet
};

var doEval = function doEval(name) {
	var value;
	if (name === '%AsyncFunction%') {
		value = getEvalledConstructor('async function () {}');
	} else if (name === '%GeneratorFunction%') {
		value = getEvalledConstructor('function* () {}');
	} else if (name === '%AsyncGeneratorFunction%') {
		value = getEvalledConstructor('async function* () {}');
	} else if (name === '%AsyncGenerator%') {
		var fn = doEval('%AsyncGeneratorFunction%');
		if (fn) {
			value = fn.prototype;
		}
	} else if (name === '%AsyncIteratorPrototype%') {
		var gen = doEval('%AsyncGenerator%');
		if (gen) {
			value = getProto(gen.prototype);
		}
	}

	INTRINSICS[name] = value;

	return value;
};

var LEGACY_ALIASES = {
	'%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
	'%ArrayPrototype%': ['Array', 'prototype'],
	'%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
	'%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
	'%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
	'%ArrayProto_values%': ['Array', 'prototype', 'values'],
	'%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
	'%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
	'%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
	'%BooleanPrototype%': ['Boolean', 'prototype'],
	'%DataViewPrototype%': ['DataView', 'prototype'],
	'%DatePrototype%': ['Date', 'prototype'],
	'%ErrorPrototype%': ['Error', 'prototype'],
	'%EvalErrorPrototype%': ['EvalError', 'prototype'],
	'%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
	'%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
	'%FunctionPrototype%': ['Function', 'prototype'],
	'%Generator%': ['GeneratorFunction', 'prototype'],
	'%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
	'%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
	'%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
	'%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
	'%JSONParse%': ['JSON', 'parse'],
	'%JSONStringify%': ['JSON', 'stringify'],
	'%MapPrototype%': ['Map', 'prototype'],
	'%NumberPrototype%': ['Number', 'prototype'],
	'%ObjectPrototype%': ['Object', 'prototype'],
	'%ObjProto_toString%': ['Object', 'prototype', 'toString'],
	'%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
	'%PromisePrototype%': ['Promise', 'prototype'],
	'%PromiseProto_then%': ['Promise', 'prototype', 'then'],
	'%Promise_all%': ['Promise', 'all'],
	'%Promise_reject%': ['Promise', 'reject'],
	'%Promise_resolve%': ['Promise', 'resolve'],
	'%RangeErrorPrototype%': ['RangeError', 'prototype'],
	'%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
	'%RegExpPrototype%': ['RegExp', 'prototype'],
	'%SetPrototype%': ['Set', 'prototype'],
	'%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
	'%StringPrototype%': ['String', 'prototype'],
	'%SymbolPrototype%': ['Symbol', 'prototype'],
	'%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
	'%TypedArrayPrototype%': ['TypedArray', 'prototype'],
	'%TypeErrorPrototype%': ['TypeError', 'prototype'],
	'%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
	'%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
	'%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
	'%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
	'%URIErrorPrototype%': ['URIError', 'prototype'],
	'%WeakMapPrototype%': ['WeakMap', 'prototype'],
	'%WeakSetPrototype%': ['WeakSet', 'prototype']
};

var bind = require('function-bind');
var hasOwn = require('has');
var $concat = bind.call(Function.call, Array.prototype.concat);
var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
var $replace = bind.call(Function.call, String.prototype.replace);
var $strSlice = bind.call(Function.call, String.prototype.slice);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var first = $strSlice(string, 0, 1);
	var last = $strSlice(string, -1);
	if (first === '%' && last !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
	} else if (last === '%' && first !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
	}
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	var intrinsicName = name;
	var alias;
	if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
		alias = LEGACY_ALIASES[intrinsicName];
		intrinsicName = '%' + alias[0] + '%';
	}

	if (hasOwn(INTRINSICS, intrinsicName)) {
		var value = INTRINSICS[intrinsicName];
		if (value === needsEval) {
			value = doEval(intrinsicName);
		}
		if (typeof value === 'undefined' && !allowMissing) {
			throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
		}

		return {
			alias: alias,
			name: intrinsicName,
			value: value
		};
	}

	throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};

module.exports = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new $TypeError('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new $TypeError('"allowMissing" argument must be a boolean');
	}

	var parts = stringToPath(name);
	var intrinsicBaseName = parts.length > 0 ? parts[0] : '';

	var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
	var intrinsicRealName = intrinsic.name;
	var value = intrinsic.value;
	var skipFurtherCaching = false;

	var alias = intrinsic.alias;
	if (alias) {
		intrinsicBaseName = alias[0];
		$spliceApply(parts, $concat([0, 1], alias));
	}

	for (var i = 1, isOwn = true; i < parts.length; i += 1) {
		var part = parts[i];
		var first = $strSlice(part, 0, 1);
		var last = $strSlice(part, -1);
		if (
			(
				(first === '"' || first === "'" || first === '`')
				|| (last === '"' || last === "'" || last === '`')
			)
			&& first !== last
		) {
			throw new $SyntaxError('property names with quotes must have matching quotes');
		}
		if (part === 'constructor' || !isOwn) {
			skipFurtherCaching = true;
		}

		intrinsicBaseName += '.' + part;
		intrinsicRealName = '%' + intrinsicBaseName + '%';

		if (hasOwn(INTRINSICS, intrinsicRealName)) {
			value = INTRINSICS[intrinsicRealName];
		} else if (value != null) {
			if (!(part in value)) {
				if (!allowMissing) {
					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				return void undefined;
			}
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, part);
				isOwn = !!desc;

				// By convention, when a data property is converted to an accessor
				// property to emulate a data property that does not suffer from
				// the override mistake, that accessor's getter is marked with
				// an `originalValue` property. Here, when we detect this, we
				// uphold the illusion by pretending to see that original data
				// property, i.e., returning the value rather than the getter
				// itself.
				if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
					value = desc.get;
				} else {
					value = value[part];
				}
			} else {
				isOwn = hasOwn(value, part);
				value = value[part];
			}

			if (isOwn && !skipFurtherCaching) {
				INTRINSICS[intrinsicRealName] = value;
			}
		}
	}
	return value;
};

},{"has-symbols":"2Tuim","function-bind":"3Idfw","has":"2jarm"}],"2Tuim":[function(require,module,exports) {
'use strict';

var origSymbol = typeof Symbol !== 'undefined' && Symbol;
var hasSymbolSham = require('./shams');

module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};

},{"./shams":"3VSTQ"}],"3Idfw":[function(require,module,exports) {
'use strict';

var implementation = require('./implementation');

module.exports = Function.prototype.bind || implementation;

},{"./implementation":"KKGxB"}],"KKGxB":[function(require,module,exports) {
'use strict';

/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};

},{}],"2jarm":[function(require,module,exports) {
'use strict';

var bind = require('function-bind');

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);

},{"function-bind":"3Idfw"}],"lLIWm":[function(require,module,exports) {
'use strict';

var bind = require('function-bind');
var GetIntrinsic = require('get-intrinsic');

var $apply = GetIntrinsic('%Function.prototype.apply%');
var $call = GetIntrinsic('%Function.prototype.call%');
var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);
var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);
var $max = GetIntrinsic('%Math.max%');

if ($defineProperty) {
	try {
		$defineProperty({}, 'a', { value: 1 });
	} catch (e) {
		// IE 8 has a broken defineProperty
		$defineProperty = null;
	}
}

module.exports = function callBind(originalFunction) {
	var func = $reflectApply(bind, $call, arguments);
	if ($gOPD && $defineProperty) {
		var desc = $gOPD(func, 'length');
		if (desc.configurable) {
			// original length, plus the receiver, minus any additional arguments (after the receiver)
			$defineProperty(
				func,
				'length',
				{ value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) }
			);
		}
	}
	return func;
};

var applyBind = function applyBind() {
	return $reflectApply(bind, $apply, arguments);
};

if ($defineProperty) {
	$defineProperty(module.exports, 'apply', { value: applyBind });
} else {
	module.exports.apply = applyBind;
}

},{"function-bind":"3Idfw","get-intrinsic":"4mEyY"}],"6f5pX":[function(require,module,exports) {
'use strict';

var toStr = Object.prototype.toString;
var fnToStr = Function.prototype.toString;
var isFnRegex = /^\s*(?:function)?\*/;
var hasToStringTag = require('has-tostringtag/shams')();
var getProto = Object.getPrototypeOf;
var getGeneratorFunc = function () { // eslint-disable-line consistent-return
	if (!hasToStringTag) {
		return false;
	}
	try {
		return Function('return function*() {}')();
	} catch (e) {
	}
};
var GeneratorFunction;

module.exports = function isGeneratorFunction(fn) {
	if (typeof fn !== 'function') {
		return false;
	}
	if (isFnRegex.test(fnToStr.call(fn))) {
		return true;
	}
	if (!hasToStringTag) {
		var str = toStr.call(fn);
		return str === '[object GeneratorFunction]';
	}
	if (!getProto) {
		return false;
	}
	if (typeof GeneratorFunction === 'undefined') {
		var generatorFunc = getGeneratorFunc();
		GeneratorFunction = generatorFunc ? getProto(generatorFunc) : false;
	}
	return getProto(fn) === GeneratorFunction;
};

},{"has-tostringtag/shams":"4JMPx"}],"2qIcv":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var forEach = require('foreach');
var availableTypedArrays = require('available-typed-arrays');
var callBound = require('call-bind/callBound');
var $toString = callBound('Object.prototype.toString');
var hasToStringTag = require('has-tostringtag/shams')();
var g = typeof globalThis === 'undefined' ? global : globalThis;
var typedArrays = availableTypedArrays();
var $slice = callBound('String.prototype.slice');
var toStrTags = {};
var gOPD = require('es-abstract/helpers/getOwnPropertyDescriptor');
var getPrototypeOf = Object.getPrototypeOf;
// require('getprototypeof');
if (hasToStringTag && gOPD && getPrototypeOf) {
  forEach(typedArrays, function (typedArray) {
    if (typeof g[typedArray] === 'function') {
      var arr = new g[typedArray]();
      if ((Symbol.toStringTag in arr)) {
        var proto = getPrototypeOf(arr);
        var descriptor = gOPD(proto, Symbol.toStringTag);
        if (!descriptor) {
          var superProto = getPrototypeOf(proto);
          descriptor = gOPD(superProto, Symbol.toStringTag);
        }
        toStrTags[typedArray] = descriptor.get;
      }
    }
  });
}
var tryTypedArrays = function tryAllTypedArrays(value) {
  var foundName = false;
  forEach(toStrTags, function (getter, typedArray) {
    if (!foundName) {
      try {
        var name = getter.call(value);
        if (name === typedArray) {
          foundName = name;
        }
      } catch (e) {}
    }
  });
  return foundName;
};
var isTypedArray = require('is-typed-array');
module.exports = function whichTypedArray(value) {
  if (!isTypedArray(value)) {
    return false;
  }
  if (!hasToStringTag || !((Symbol.toStringTag in value))) {
    return $slice($toString(value), 8, -1);
  }
  return tryTypedArrays(value);
};

},{"foreach":"3IRxu","available-typed-arrays":"4ydvw","call-bind/callBound":"2diBM","has-tostringtag/shams":"4JMPx","es-abstract/helpers/getOwnPropertyDescriptor":"4SDps","is-typed-array":"dBlx5"}],"3IRxu":[function(require,module,exports) {

var hasOwn = Object.prototype.hasOwnProperty;
var toString = Object.prototype.toString;

module.exports = function forEach (obj, fn, ctx) {
    if (toString.call(fn) !== '[object Function]') {
        throw new TypeError('iterator must be a function');
    }
    var l = obj.length;
    if (l === +l) {
        for (var i = 0; i < l; i++) {
            fn.call(ctx, obj[i], i, obj);
        }
    } else {
        for (var k in obj) {
            if (hasOwn.call(obj, k)) {
                fn.call(ctx, obj[k], k, obj);
            }
        }
    }
};


},{}],"4ydvw":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var possibleNames = ['BigInt64Array', 'BigUint64Array', 'Float32Array', 'Float64Array', 'Int16Array', 'Int32Array', 'Int8Array', 'Uint16Array', 'Uint32Array', 'Uint8Array', 'Uint8ClampedArray'];
var g = typeof globalThis === 'undefined' ? global : globalThis;
module.exports = function availableTypedArrays() {
  var out = [];
  for (var i = 0; i < possibleNames.length; i++) {
    if (typeof g[possibleNames[i]] === 'function') {
      out[out.length] = possibleNames[i];
    }
  }
  return out;
};

},{}],"4SDps":[function(require,module,exports) {
'use strict';

var GetIntrinsic = require('get-intrinsic');

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);
if ($gOPD) {
	try {
		$gOPD([], 'length');
	} catch (e) {
		// IE 8 has a broken gOPD
		$gOPD = null;
	}
}

module.exports = $gOPD;

},{"get-intrinsic":"4mEyY"}],"dBlx5":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var forEach = require('foreach');
var availableTypedArrays = require('available-typed-arrays');
var callBound = require('call-bind/callBound');
var $toString = callBound('Object.prototype.toString');
var hasToStringTag = require('has-tostringtag/shams')();
var g = typeof globalThis === 'undefined' ? global : globalThis;
var typedArrays = availableTypedArrays();
var $indexOf = callBound('Array.prototype.indexOf', true) || (function indexOf(array, value) {
  for (var i = 0; i < array.length; i += 1) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
});
var $slice = callBound('String.prototype.slice');
var toStrTags = {};
var gOPD = require('es-abstract/helpers/getOwnPropertyDescriptor');
var getPrototypeOf = Object.getPrototypeOf;
// require('getprototypeof');
if (hasToStringTag && gOPD && getPrototypeOf) {
  forEach(typedArrays, function (typedArray) {
    var arr = new g[typedArray]();
    if ((Symbol.toStringTag in arr)) {
      var proto = getPrototypeOf(arr);
      var descriptor = gOPD(proto, Symbol.toStringTag);
      if (!descriptor) {
        var superProto = getPrototypeOf(proto);
        descriptor = gOPD(superProto, Symbol.toStringTag);
      }
      toStrTags[typedArray] = descriptor.get;
    }
  });
}
var tryTypedArrays = function tryAllTypedArrays(value) {
  var anyTrue = false;
  forEach(toStrTags, function (getter, typedArray) {
    if (!anyTrue) {
      try {
        anyTrue = getter.call(value) === typedArray;
      } catch (e) {}
    }
  });
  return anyTrue;
};
module.exports = function isTypedArray(value) {
  if (!value || typeof value !== 'object') {
    return false;
  }
  if (!hasToStringTag || !((Symbol.toStringTag in value))) {
    var tag = $slice($toString(value), 8, -1);
    return $indexOf(typedArrays, tag) > -1;
  }
  if (!gOPD) {
    return false;
  }
  return tryTypedArrays(value);
};

},{"foreach":"3IRxu","available-typed-arrays":"4ydvw","call-bind/callBound":"2diBM","has-tostringtag/shams":"4JMPx","es-abstract/helpers/getOwnPropertyDescriptor":"4SDps"}],"3ucGb":[function(require,module,exports) {
module.exports = function isBuffer(arg) {
  return arg && typeof arg === 'object'
    && typeof arg.copy === 'function'
    && typeof arg.fill === 'function'
    && typeof arg.readUInt8 === 'function';
}
},{}],"1EUwN":[function(require,module,exports) {
if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      })
    }
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor
      var TempCtor = function () {}
      TempCtor.prototype = superCtor.prototype
      ctor.prototype = new TempCtor()
      ctor.prototype.constructor = ctor
    }
  }
}

},{}],"1LHgi":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };

    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}

},{}]},["63iPG","4ThtM"], "4ThtM", "parcelRequire02c7")

//# sourceMappingURL=index.b4f5078c.js.map
