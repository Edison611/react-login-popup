import ee from "react";
import { GoogleLogin as re } from "@react-oauth/google";
var S = { exports: {} }, R = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var F;
function te() {
  if (F) return R;
  F = 1;
  var u = Symbol.for("react.transitional.element"), i = Symbol.for("react.fragment");
  function d(m, a, s) {
    var E = null;
    if (s !== void 0 && (E = "" + s), a.key !== void 0 && (E = "" + a.key), "key" in a) {
      s = {};
      for (var b in a)
        b !== "key" && (s[b] = a[b]);
    } else s = a;
    return a = s.ref, {
      $$typeof: u,
      type: m,
      key: E,
      ref: a !== void 0 ? a : null,
      props: s
    };
  }
  return R.Fragment = i, R.jsx = d, R.jsxs = d, R;
}
var _ = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var D;
function ne() {
  return D || (D = 1, process.env.NODE_ENV !== "production" && function() {
    function u(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Z ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case v:
          return "Fragment";
        case z:
          return "Profiler";
        case U:
          return "StrictMode";
        case J:
          return "Suspense";
        case X:
          return "SuspenseList";
        case H:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case M:
            return "Portal";
          case V:
            return (e.displayName || "Context") + ".Provider";
          case G:
            return (e._context.displayName || "Context") + ".Consumer";
          case q:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case B:
            return r = e.displayName || null, r !== null ? r : u(e.type) || "Memo";
          case h:
            r = e._payload, e = e._init;
            try {
              return u(e(r));
            } catch {
            }
        }
      return null;
    }
    function i(e) {
      return "" + e;
    }
    function d(e) {
      try {
        i(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, n = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          n
        ), i(e);
      }
    }
    function m(e) {
      if (e === v) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === h)
        return "<...>";
      try {
        var r = u(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var e = T.A;
      return e === null ? null : e.getOwner();
    }
    function s() {
      return Error("react-stack-top-frame");
    }
    function E(e) {
      if (y.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function b(e, r) {
      function t() {
        N || (N = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function L() {
      var e = u(this.type);
      return C[e] || (C[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function W(e, r, t, n, l, c, x, O) {
      return t = c.ref, e = {
        $$typeof: w,
        type: e,
        key: r,
        props: c,
        _owner: l
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: L
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: x
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: O
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function P(e, r, t, n, l, c, x, O) {
      var o = r.children;
      if (o !== void 0)
        if (n)
          if (Q(o)) {
            for (n = 0; n < o.length; n++)
              j(o[n]);
            Object.freeze && Object.freeze(o);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else j(o);
      if (y.call(r, "key")) {
        o = u(e);
        var f = Object.keys(r).filter(function(K) {
          return K !== "key";
        });
        n = 0 < f.length ? "{key: someKey, " + f.join(": ..., ") + ": ...}" : "{key: someKey}", $[o + n] || (f = 0 < f.length ? "{" + f.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          o,
          f,
          o
        ), $[o + n] = !0);
      }
      if (o = null, t !== void 0 && (d(t), o = "" + t), E(r) && (d(r.key), o = "" + r.key), "key" in r) {
        t = {};
        for (var g in r)
          g !== "key" && (t[g] = r[g]);
      } else t = r;
      return o && b(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), W(
        e,
        o,
        c,
        l,
        a(),
        t,
        x,
        O
      );
    }
    function j(e) {
      typeof e == "object" && e !== null && e.$$typeof === w && e._store && (e._store.validated = 1);
    }
    var p = ee, w = Symbol.for("react.transitional.element"), M = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), U = Symbol.for("react.strict_mode"), z = Symbol.for("react.profiler"), G = Symbol.for("react.consumer"), V = Symbol.for("react.context"), q = Symbol.for("react.forward_ref"), J = Symbol.for("react.suspense"), X = Symbol.for("react.suspense_list"), B = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), H = Symbol.for("react.activity"), Z = Symbol.for("react.client.reference"), T = p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, y = Object.prototype.hasOwnProperty, Q = Array.isArray, k = console.createTask ? console.createTask : function() {
      return null;
    };
    p = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var N, C = {}, Y = p["react-stack-bottom-frame"].bind(
      p,
      s
    )(), I = k(m(s)), $ = {};
    _.Fragment = v, _.jsx = function(e, r, t, n, l) {
      var c = 1e4 > T.recentlyCreatedOwnerStacks++;
      return P(
        e,
        r,
        t,
        !1,
        n,
        l,
        c ? Error("react-stack-top-frame") : Y,
        c ? k(m(e)) : I
      );
    }, _.jsxs = function(e, r, t, n, l) {
      var c = 1e4 > T.recentlyCreatedOwnerStacks++;
      return P(
        e,
        r,
        t,
        !0,
        n,
        l,
        c ? Error("react-stack-top-frame") : Y,
        c ? k(m(e)) : I
      );
    };
  }()), _;
}
process.env.NODE_ENV === "production" ? S.exports = te() : S.exports = ne();
var A = S.exports;
const se = ({ onSuccess: u, onError: i }) => /* @__PURE__ */ A.jsxs("div", { style: {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "#fff",
  border: "1px solid #ccc",
  borderRadius: 8,
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  padding: 32,
  zIndex: 1e3,
  minWidth: 300,
  textAlign: "center"
}, children: [
  /* @__PURE__ */ A.jsx("h2", { children: "Sign in" }),
  /* @__PURE__ */ A.jsx(re, { onSuccess: u, onError: i })
] });
export {
  se as default
};
