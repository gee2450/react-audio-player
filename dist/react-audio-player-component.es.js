import Ke, { forwardRef as wr, useRef as Lr, useState as H, useImperativeHandle as vr, useEffect as sr } from "react";
var cr = { exports: {} }, He = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mr;
function Ir() {
  if (Mr)
    return He;
  Mr = 1;
  var v = Ke, j = Symbol.for("react.element"), z = Symbol.for("react.fragment"), I = Object.prototype.hasOwnProperty, m = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, O = { key: !0, ref: !0, __self: !0, __source: !0 };
  function T(w, M, g) {
    var s, N = {}, D = null, A = null;
    g !== void 0 && (D = "" + g), M.key !== void 0 && (D = "" + M.key), M.ref !== void 0 && (A = M.ref);
    for (s in M)
      I.call(M, s) && !O.hasOwnProperty(s) && (N[s] = M[s]);
    if (w && w.defaultProps)
      for (s in M = w.defaultProps, M)
        N[s] === void 0 && (N[s] = M[s]);
    return { $$typeof: j, type: w, key: D, ref: A, props: N, _owner: m.current };
  }
  return He.Fragment = z, He.jsx = T, He.jsxs = T, He;
}
var Je = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nr;
function zr() {
  return Nr || (Nr = 1, process.env.NODE_ENV !== "production" && function() {
    var v = Ke, j = Symbol.for("react.element"), z = Symbol.for("react.portal"), I = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), w = Symbol.for("react.context"), M = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), s = Symbol.for("react.suspense_list"), N = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), A = Symbol.for("react.offscreen"), x = Symbol.iterator, U = "@@iterator";
    function Y(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = x && e[x] || e[U];
      return typeof r == "function" ? r : null;
    }
    var d = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function c(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        L("error", e, t);
      }
    }
    function L(e, r, t) {
      {
        var n = d.ReactDebugCurrentFrame, o = n.getStackAddendum();
        o !== "" && (r += "%s", t = t.concat([o]));
        var u = t.map(function(i) {
          return String(i);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var ae = !1, ie = !1, $ = !1, he = !1, ke = !1, Me;
    Me = Symbol.for("react.module.reference");
    function xe(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === I || e === O || ke || e === m || e === g || e === s || he || e === A || ae || ie || $ || typeof e == "object" && e !== null && (e.$$typeof === D || e.$$typeof === N || e.$$typeof === T || e.$$typeof === w || e.$$typeof === M || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === Me || e.getModuleId !== void 0));
    }
    function Ue(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var o = r.displayName || r.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function Ne(e) {
      return e.displayName || "Context";
    }
    function E(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case I:
          return "Fragment";
        case z:
          return "Portal";
        case O:
          return "Profiler";
        case m:
          return "StrictMode";
        case g:
          return "Suspense";
        case s:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case w:
            var r = e;
            return Ne(r) + ".Consumer";
          case T:
            var t = e;
            return Ne(t._context) + ".Provider";
          case M:
            return Ue(e, e.render, "ForwardRef");
          case N:
            var n = e.displayName || null;
            return n !== null ? n : E(e.type) || "Memo";
          case D: {
            var o = e, u = o._payload, i = o._init;
            try {
              return E(i(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var C = Object.assign, R = 0, oe, fe, ye, je, ue, ge, de;
    function De() {
    }
    De.__reactDisabledLog = !0;
    function Oe() {
      {
        if (R === 0) {
          oe = console.log, fe = console.info, ye = console.warn, je = console.error, ue = console.group, ge = console.groupCollapsed, de = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: De,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        R++;
      }
    }
    function Ye() {
      {
        if (R--, R === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: C({}, e, {
              value: oe
            }),
            info: C({}, e, {
              value: fe
            }),
            warn: C({}, e, {
              value: ye
            }),
            error: C({}, e, {
              value: je
            }),
            group: C({}, e, {
              value: ue
            }),
            groupCollapsed: C({}, e, {
              value: ge
            }),
            groupEnd: C({}, e, {
              value: de
            })
          });
        }
        R < 0 && c("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var K = d.ReactCurrentDispatcher, q;
    function G(e, r, t) {
      {
        if (q === void 0)
          try {
            throw Error();
          } catch (o) {
            var n = o.stack.trim().match(/\n( *(at )?)/);
            q = n && n[1] || "";
          }
        return `
` + q + e;
      }
    }
    var ee = !1, B;
    {
      var be = typeof WeakMap == "function" ? WeakMap : Map;
      B = new be();
    }
    function Le(e, r) {
      if (!e || ee)
        return "";
      {
        var t = B.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      ee = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = K.current, K.current = null, Oe();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (k) {
              n = k;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (k) {
              n = k;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (k) {
            n = k;
          }
          e();
        }
      } catch (k) {
        if (k && n && typeof k.stack == "string") {
          for (var a = k.stack.split(`
`), p = n.stack.split(`
`), f = a.length - 1, y = p.length - 1; f >= 1 && y >= 0 && a[f] !== p[y]; )
            y--;
          for (; f >= 1 && y >= 0; f--, y--)
            if (a[f] !== p[y]) {
              if (f !== 1 || y !== 1)
                do
                  if (f--, y--, y < 0 || a[f] !== p[y]) {
                    var S = `
` + a[f].replace(" at new ", " at ");
                    return e.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", e.displayName)), typeof e == "function" && B.set(e, S), S;
                  }
                while (f >= 1 && y >= 0);
              break;
            }
        }
      } finally {
        ee = !1, K.current = u, Ye(), Error.prepareStackTrace = o;
      }
      var V = e ? e.displayName || e.name : "", Fe = V ? G(V) : "";
      return typeof e == "function" && B.set(e, Fe), Fe;
    }
    function l(e, r, t) {
      return Le(e, !1);
    }
    function J(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function _(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Le(e, J(e));
      if (typeof e == "string")
        return G(e);
      switch (e) {
        case g:
          return G("Suspense");
        case s:
          return G("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case M:
            return l(e.render);
          case N:
            return _(e.type, r, t);
          case D: {
            var n = e, o = n._payload, u = n._init;
            try {
              return _(u(o), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var P = Object.prototype.hasOwnProperty, se = {}, X = d.ReactDebugCurrentFrame;
    function W(e) {
      if (e) {
        var r = e._owner, t = _(e.type, e._source, r ? r.type : null);
        X.setExtraStackFrame(t);
      } else
        X.setExtraStackFrame(null);
    }
    function Re(e, r, t, n, o) {
      {
        var u = Function.call.bind(P);
        for (var i in e)
          if (u(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var p = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw p.name = "Invariant Violation", p;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (f) {
              a = f;
            }
            a && !(a instanceof Error) && (W(o), c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), W(null)), a instanceof Error && !(a.message in se) && (se[a.message] = !0, W(o), c("Failed %s type: %s", t, a.message), W(null));
          }
      }
    }
    var Pe = Array.isArray;
    function F(e) {
      return Pe(e);
    }
    function pe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ae(e) {
      try {
        return we(e), !1;
      } catch {
        return !0;
      }
    }
    function we(e) {
      return "" + e;
    }
    function ce(e) {
      if (Ae(e))
        return c("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", pe(e)), we(e);
    }
    var Q = d.ReactCurrentOwner, ve = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ie, ze, re;
    re = {};
    function te(e) {
      if (P.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Qe(e) {
      if (P.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ee(e, r) {
      if (typeof e.ref == "string" && Q.current && r && Q.current.stateNode !== r) {
        var t = E(Q.current.type);
        re[t] || (c('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', E(Q.current.type), e.ref), re[t] = !0);
      }
    }
    function Ce(e, r) {
      {
        var t = function() {
          Ie || (Ie = !0, c("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function We(e, r) {
      {
        var t = function() {
          ze || (ze = !0, c("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var h = function(e, r, t, n, o, u, i) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: j,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function ne(e, r, t, n, o) {
      {
        var u, i = {}, a = null, p = null;
        t !== void 0 && (ce(t), a = "" + t), Qe(r) && (ce(r.key), a = "" + r.key), te(r) && (p = r.ref, Ee(r, o));
        for (u in r)
          P.call(r, u) && !ve.hasOwnProperty(u) && (i[u] = r[u]);
        if (e && e.defaultProps) {
          var f = e.defaultProps;
          for (u in f)
            i[u] === void 0 && (i[u] = f[u]);
        }
        if (a || p) {
          var y = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Ce(i, y), p && We(i, y);
        }
        return h(e, a, p, o, n, Q.current, i);
      }
    }
    var le = d.ReactCurrentOwner, me = d.ReactDebugCurrentFrame;
    function Z(e) {
      if (e) {
        var r = e._owner, t = _(e.type, e._source, r ? r.type : null);
        me.setExtraStackFrame(t);
      } else
        me.setExtraStackFrame(null);
    }
    var Se;
    Se = !1;
    function Te(e) {
      return typeof e == "object" && e !== null && e.$$typeof === j;
    }
    function Ze() {
      {
        if (le.current) {
          var e = E(le.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function qe(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Ve = {};
    function er(e) {
      {
        var r = Ze();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function _e(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = er(r);
        if (Ve[t])
          return;
        Ve[t] = !0;
        var n = "";
        e && e._owner && e._owner !== le.current && (n = " It was passed a child from " + E(e._owner.type) + "."), Z(e), c('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), Z(null);
      }
    }
    function Ge(e, r) {
      {
        if (typeof e != "object")
          return;
        if (F(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            Te(n) && _e(n, r);
          }
        else if (Te(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var o = Y(e);
          if (typeof o == "function" && o !== e.entries)
            for (var u = o.call(e), i; !(i = u.next()).done; )
              Te(i.value) && _e(i.value, r);
        }
      }
    }
    function rr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === M || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === N))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = E(r);
          Re(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !Se) {
          Se = !0;
          var o = E(r);
          c("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && c("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function tr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            Z(e), c("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), Z(null);
            break;
          }
        }
        e.ref !== null && (Z(e), c("Invalid attribute `ref` supplied to `React.Fragment`."), Z(null));
      }
    }
    function Be(e, r, t, n, o, u) {
      {
        var i = xe(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = qe(o);
          p ? a += p : a += Ze();
          var f;
          e === null ? f = "null" : F(e) ? f = "array" : e !== void 0 && e.$$typeof === j ? (f = "<" + (E(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : f = typeof e, c("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", f, a);
        }
        var y = ne(e, r, t, o, u);
        if (y == null)
          return y;
        if (i) {
          var S = r.children;
          if (S !== void 0)
            if (n)
              if (F(S)) {
                for (var V = 0; V < S.length; V++)
                  Ge(S[V], e);
                Object.freeze && Object.freeze(S);
              } else
                c("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ge(S, e);
        }
        return e === I ? tr(y) : rr(y), y;
      }
    }
    function nr(e, r, t) {
      return Be(e, r, t, !0);
    }
    function ar(e, r, t) {
      return Be(e, r, t, !1);
    }
    var ir = ar, or = nr;
    Je.Fragment = I, Je.jsx = ir, Je.jsxs = or;
  }()), Je;
}
process.env.NODE_ENV === "production" ? cr.exports = Ir() : cr.exports = zr();
var b = cr.exports, lr = { exports: {} }, Xe = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fr;
function mr() {
  if (fr)
    return Xe;
  fr = 1;
  var v = Ke, j = Symbol.for("react.element"), z = Symbol.for("react.fragment"), I = Object.prototype.hasOwnProperty, m = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, O = { key: !0, ref: !0, __self: !0, __source: !0 };
  function T(w, M, g) {
    var s, N = {}, D = null, A = null;
    g !== void 0 && (D = "" + g), M.key !== void 0 && (D = "" + M.key), M.ref !== void 0 && (A = M.ref);
    for (s in M)
      I.call(M, s) && !O.hasOwnProperty(s) && (N[s] = M[s]);
    if (w && w.defaultProps)
      for (s in M = w.defaultProps, M)
        N[s] === void 0 && (N[s] = M[s]);
    return { $$typeof: j, type: w, key: D, ref: A, props: N, _owner: m.current };
  }
  return Xe.Fragment = z, Xe.jsx = T, Xe.jsxs = T, Xe;
}
var $e = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yr;
function Sr() {
  return yr || (yr = 1, process.env.NODE_ENV !== "production" && function() {
    var v = Ke, j = Symbol.for("react.element"), z = Symbol.for("react.portal"), I = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), O = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), w = Symbol.for("react.context"), M = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), s = Symbol.for("react.suspense_list"), N = Symbol.for("react.memo"), D = Symbol.for("react.lazy"), A = Symbol.for("react.offscreen"), x = Symbol.iterator, U = "@@iterator";
    function Y(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = x && e[x] || e[U];
      return typeof r == "function" ? r : null;
    }
    var d = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function c(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        L("error", e, t);
      }
    }
    function L(e, r, t) {
      {
        var n = d.ReactDebugCurrentFrame, o = n.getStackAddendum();
        o !== "" && (r += "%s", t = t.concat([o]));
        var u = t.map(function(i) {
          return String(i);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var ae = !1, ie = !1, $ = !1, he = !1, ke = !1, Me;
    Me = Symbol.for("react.module.reference");
    function xe(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === I || e === O || ke || e === m || e === g || e === s || he || e === A || ae || ie || $ || typeof e == "object" && e !== null && (e.$$typeof === D || e.$$typeof === N || e.$$typeof === T || e.$$typeof === w || e.$$typeof === M || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === Me || e.getModuleId !== void 0));
    }
    function Ue(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var o = r.displayName || r.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function Ne(e) {
      return e.displayName || "Context";
    }
    function E(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && c("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case I:
          return "Fragment";
        case z:
          return "Portal";
        case O:
          return "Profiler";
        case m:
          return "StrictMode";
        case g:
          return "Suspense";
        case s:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case w:
            var r = e;
            return Ne(r) + ".Consumer";
          case T:
            var t = e;
            return Ne(t._context) + ".Provider";
          case M:
            return Ue(e, e.render, "ForwardRef");
          case N:
            var n = e.displayName || null;
            return n !== null ? n : E(e.type) || "Memo";
          case D: {
            var o = e, u = o._payload, i = o._init;
            try {
              return E(i(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var C = Object.assign, R = 0, oe, fe, ye, je, ue, ge, de;
    function De() {
    }
    De.__reactDisabledLog = !0;
    function Oe() {
      {
        if (R === 0) {
          oe = console.log, fe = console.info, ye = console.warn, je = console.error, ue = console.group, ge = console.groupCollapsed, de = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: De,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        R++;
      }
    }
    function Ye() {
      {
        if (R--, R === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: C({}, e, {
              value: oe
            }),
            info: C({}, e, {
              value: fe
            }),
            warn: C({}, e, {
              value: ye
            }),
            error: C({}, e, {
              value: je
            }),
            group: C({}, e, {
              value: ue
            }),
            groupCollapsed: C({}, e, {
              value: ge
            }),
            groupEnd: C({}, e, {
              value: de
            })
          });
        }
        R < 0 && c("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var K = d.ReactCurrentDispatcher, q;
    function G(e, r, t) {
      {
        if (q === void 0)
          try {
            throw Error();
          } catch (o) {
            var n = o.stack.trim().match(/\n( *(at )?)/);
            q = n && n[1] || "";
          }
        return `
` + q + e;
      }
    }
    var ee = !1, B;
    {
      var be = typeof WeakMap == "function" ? WeakMap : Map;
      B = new be();
    }
    function Le(e, r) {
      if (!e || ee)
        return "";
      {
        var t = B.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      ee = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = K.current, K.current = null, Oe();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (k) {
              n = k;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (k) {
              n = k;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (k) {
            n = k;
          }
          e();
        }
      } catch (k) {
        if (k && n && typeof k.stack == "string") {
          for (var a = k.stack.split(`
`), p = n.stack.split(`
`), f = a.length - 1, y = p.length - 1; f >= 1 && y >= 0 && a[f] !== p[y]; )
            y--;
          for (; f >= 1 && y >= 0; f--, y--)
            if (a[f] !== p[y]) {
              if (f !== 1 || y !== 1)
                do
                  if (f--, y--, y < 0 || a[f] !== p[y]) {
                    var S = `
` + a[f].replace(" at new ", " at ");
                    return e.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", e.displayName)), typeof e == "function" && B.set(e, S), S;
                  }
                while (f >= 1 && y >= 0);
              break;
            }
        }
      } finally {
        ee = !1, K.current = u, Ye(), Error.prepareStackTrace = o;
      }
      var V = e ? e.displayName || e.name : "", Fe = V ? G(V) : "";
      return typeof e == "function" && B.set(e, Fe), Fe;
    }
    function l(e, r, t) {
      return Le(e, !1);
    }
    function J(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function _(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Le(e, J(e));
      if (typeof e == "string")
        return G(e);
      switch (e) {
        case g:
          return G("Suspense");
        case s:
          return G("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case M:
            return l(e.render);
          case N:
            return _(e.type, r, t);
          case D: {
            var n = e, o = n._payload, u = n._init;
            try {
              return _(u(o), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var P = Object.prototype.hasOwnProperty, se = {}, X = d.ReactDebugCurrentFrame;
    function W(e) {
      if (e) {
        var r = e._owner, t = _(e.type, e._source, r ? r.type : null);
        X.setExtraStackFrame(t);
      } else
        X.setExtraStackFrame(null);
    }
    function Re(e, r, t, n, o) {
      {
        var u = Function.call.bind(P);
        for (var i in e)
          if (u(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var p = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw p.name = "Invariant Violation", p;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (f) {
              a = f;
            }
            a && !(a instanceof Error) && (W(o), c("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), W(null)), a instanceof Error && !(a.message in se) && (se[a.message] = !0, W(o), c("Failed %s type: %s", t, a.message), W(null));
          }
      }
    }
    var Pe = Array.isArray;
    function F(e) {
      return Pe(e);
    }
    function pe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Ae(e) {
      try {
        return we(e), !1;
      } catch {
        return !0;
      }
    }
    function we(e) {
      return "" + e;
    }
    function ce(e) {
      if (Ae(e))
        return c("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", pe(e)), we(e);
    }
    var Q = d.ReactCurrentOwner, ve = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ie, ze, re;
    re = {};
    function te(e) {
      if (P.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Qe(e) {
      if (P.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ee(e, r) {
      if (typeof e.ref == "string" && Q.current && r && Q.current.stateNode !== r) {
        var t = E(Q.current.type);
        re[t] || (c('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', E(Q.current.type), e.ref), re[t] = !0);
      }
    }
    function Ce(e, r) {
      {
        var t = function() {
          Ie || (Ie = !0, c("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function We(e, r) {
      {
        var t = function() {
          ze || (ze = !0, c("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var h = function(e, r, t, n, o, u, i) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: j,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function ne(e, r, t, n, o) {
      {
        var u, i = {}, a = null, p = null;
        t !== void 0 && (ce(t), a = "" + t), Qe(r) && (ce(r.key), a = "" + r.key), te(r) && (p = r.ref, Ee(r, o));
        for (u in r)
          P.call(r, u) && !ve.hasOwnProperty(u) && (i[u] = r[u]);
        if (e && e.defaultProps) {
          var f = e.defaultProps;
          for (u in f)
            i[u] === void 0 && (i[u] = f[u]);
        }
        if (a || p) {
          var y = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && Ce(i, y), p && We(i, y);
        }
        return h(e, a, p, o, n, Q.current, i);
      }
    }
    var le = d.ReactCurrentOwner, me = d.ReactDebugCurrentFrame;
    function Z(e) {
      if (e) {
        var r = e._owner, t = _(e.type, e._source, r ? r.type : null);
        me.setExtraStackFrame(t);
      } else
        me.setExtraStackFrame(null);
    }
    var Se;
    Se = !1;
    function Te(e) {
      return typeof e == "object" && e !== null && e.$$typeof === j;
    }
    function Ze() {
      {
        if (le.current) {
          var e = E(le.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function qe(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Ve = {};
    function er(e) {
      {
        var r = Ze();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function _e(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = er(r);
        if (Ve[t])
          return;
        Ve[t] = !0;
        var n = "";
        e && e._owner && e._owner !== le.current && (n = " It was passed a child from " + E(e._owner.type) + "."), Z(e), c('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), Z(null);
      }
    }
    function Ge(e, r) {
      {
        if (typeof e != "object")
          return;
        if (F(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            Te(n) && _e(n, r);
          }
        else if (Te(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var o = Y(e);
          if (typeof o == "function" && o !== e.entries)
            for (var u = o.call(e), i; !(i = u.next()).done; )
              Te(i.value) && _e(i.value, r);
        }
      }
    }
    function rr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === M || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === N))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = E(r);
          Re(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !Se) {
          Se = !0;
          var o = E(r);
          c("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && c("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function tr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            Z(e), c("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), Z(null);
            break;
          }
        }
        e.ref !== null && (Z(e), c("Invalid attribute `ref` supplied to `React.Fragment`."), Z(null));
      }
    }
    function Be(e, r, t, n, o, u) {
      {
        var i = xe(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = qe(o);
          p ? a += p : a += Ze();
          var f;
          e === null ? f = "null" : F(e) ? f = "array" : e !== void 0 && e.$$typeof === j ? (f = "<" + (E(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : f = typeof e, c("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", f, a);
        }
        var y = ne(e, r, t, o, u);
        if (y == null)
          return y;
        if (i) {
          var S = r.children;
          if (S !== void 0)
            if (n)
              if (F(S)) {
                for (var V = 0; V < S.length; V++)
                  Ge(S[V], e);
                Object.freeze && Object.freeze(S);
              } else
                c("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ge(S, e);
        }
        return e === I ? tr(y) : rr(y), y;
      }
    }
    function nr(e, r, t) {
      return Be(e, r, t, !0);
    }
    function ar(e, r, t) {
      return Be(e, r, t, !1);
    }
    var ir = ar, or = nr;
    $e.Fragment = I, $e.jsx = ir, $e.jsxs = or;
  }()), $e;
}
process.env.NODE_ENV === "production" ? lr.exports = mr() : lr.exports = Sr();
var Tr = lr.exports;
const Or = (v, j, z, I, m) => {
  const O = v.getChannelData(0), T = z / (I + m), w = Math.floor(O.length / T), M = j / 2;
  let g = [], s = 0;
  for (let N = 0; N < T; N++) {
    const D = [];
    let A = 0;
    const x = [];
    let U = 0;
    for (let c = 0; c < w && N * w + c < v.length; c++) {
      const L = O[N * w + c];
      L <= 0 && (D.push(L), A++), L > 0 && (x.push(L), U++);
    }
    const Y = D.reduce((c, L) => c + L, 0) / A, d = { max: x.reduce((c, L) => c + L, 0) / U, min: Y };
    d.max > s && (s = d.max), Math.abs(d.min) > s && (s = Math.abs(d.min)), g.push(d);
  }
  if (M * 0.8 > s * M) {
    const N = M * 0.8 / s;
    g = g.map((D) => ({
      max: D.max * N,
      min: D.min * N
    }));
  }
  return g;
}, ur = (v, j, z, I, m, O, T, w = 0, M = 1) => {
  const g = j.height / 2, s = j.getContext("2d");
  if (!s)
    return;
  s.clearRect(0, 0, j.width, j.height), m !== "transparent" && (s.fillStyle = m, s.fillRect(0, 0, j.width, j.height));
  const N = (w || 0) / M;
  v.forEach((D, A) => {
    const x = A / v.length, U = N > x;
    s.fillStyle = U && T ? T : O;
    const Y = A * (z + I), d = g + D.min, c = z, L = g + D.max - d;
    s.beginPath(), s.roundRect ? (s.roundRect(Y, d, c, L, 50), s.fill()) : s.fillRect(Y, d, c, L);
  });
}, pr = wr(
  ({
    blob: v,
    width: j,
    height: z,
    barWidth: I = 2,
    gap: m = 1,
    currentTime: O,
    style: T,
    backgroundColor: w = "transparent",
    barColor: M = "rgb(184, 184, 184)",
    barPlayedColor: g = "rgb(160, 198, 255)"
  }, s) => {
    const N = Lr(null), [D, A] = H([]), [x, U] = H(0);
    return vr(
      s,
      () => N.current,
      []
    ), sr(() => {
      (async () => {
        if (!N.current)
          return;
        if (!v) {
          const d = Array.from({ length: 100 }, () => ({
            max: 0,
            min: 0
          }));
          ur(
            d,
            N.current,
            I,
            m,
            w,
            M,
            g
          );
          return;
        }
        const Y = await v.arrayBuffer();
        await new AudioContext().decodeAudioData(Y, (d) => {
          if (!N.current)
            return;
          U(d.duration);
          const c = Or(
            d,
            z,
            j,
            I,
            m
          );
          A(c), ur(
            c,
            N.current,
            I,
            m,
            w,
            M,
            g
          );
        });
      })();
    }, [v, N.current]), sr(() => {
      N.current && ur(
        D,
        N.current,
        I,
        m,
        w,
        M,
        g,
        O,
        x
      );
    }, [O, x]), /* @__PURE__ */ Tr.jsx(
      "canvas",
      {
        ref: N,
        width: j,
        height: z,
        style: {
          ...T
        }
      }
    );
  }
);
pr.displayName = "AudioVisualizer";
const br = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDQ5NC4xNDggNDk0LjE0OCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDk0LjE0OCA0OTQuMTQ4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+Cgk8Zz4KCQk8Zz4KCQkJPHBhdGggZD0iTTQwNS4yODQsMjAxLjE4OEwxMzAuODA0LDEzLjI4QzExOC4xMjgsNC41OTYsMTA1LjM1NiwwLDk0Ljc0LDBDNzQuMjE2LDAsNjEuNTIsMTYuNDcyLDYxLjUyLDQ0LjA0NHY0MDYuMTI0CgkJCQljMCwyNy41NCwxMi42OCw0My45OCwzMy4xNTYsNDMuOThjMTAuNjMyLDAsMjMuMi00LjYsMzUuOTA0LTEzLjMwOGwyNzQuNjA4LTE4Ny45MDRjMTcuNjYtMTIuMTA0LDI3LjQ0LTI4LjM5MiwyNy40NC00NS44ODQKCQkJCUM0MzIuNjMyLDIyOS41NzIsNDIyLjk2NCwyMTMuMjg4LDQwNS4yODQsMjAxLjE4OHoiLz4KCQk8L2c+Cgk8L2c+Cjwvc3ZnPgo=", Ar = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgNDcuNjA3IDQ3LjYwNyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDcuNjA3IDQ3LjYwNzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPgoJPGc+CgkJPHBhdGggZD0iTTE3Ljk5MSw0MC45NzZjMCwzLjY2Mi0yLjk2OSw2LjYzMS02LjYzMSw2LjYzMWwwLDBjLTMuNjYyLDAtNi42MzEtMi45NjktNi42MzEtNi42MzFWNi42MzFDNC43MjksMi45NjksNy42OTgsMCwxMS4zNiwwCgkJCWwwLDBjMy42NjIsMCw2LjYzMSwyLjk2OSw2LjYzMSw2LjYzMVY0MC45NzZ6Ii8+CgkJPHBhdGggZD0iTTQyLjg3Nyw0MC45NzZjMCwzLjY2Mi0yLjk2OSw2LjYzMS02LjYzMSw2LjYzMWwwLDBjLTMuNjYyLDAtNi42MzEtMi45NjktNi42MzEtNi42MzFWNi42MzEKCQkJQzI5LjYxNiwyLjk2OSwzMi41ODUsMCwzNi4yNDYsMGwwLDBjMy42NjIsMCw2LjYzMSwyLjk2OSw2LjYzMSw2LjYzMVY0MC45NzZ6Ii8+Cgk8L2c+Cjwvc3ZnPgo=", jr = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjkwcHgiIGhlaWdodD0iOTBweCIgc3R5bGU9InNoYXBlLXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IHRleHQtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjsgaW1hZ2UtcmVuZGVyaW5nOm9wdGltaXplUXVhbGl0eTsgZmlsbC1ydWxlOmV2ZW5vZGQ7IGNsaXAtcnVsZTpldmVub2RkIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CjxnPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjAuOTcyIiBmaWxsPSIjMDAwMDAwIiBkPSJNIDEuNSwtMC41IEMgMy41LC0wLjUgNS41LC0wLjUgNy41LC0wLjVDIDI2LjQzMjIsMTMuMjUxNCA0NS4yNjU2LDI3LjI1MTQgNjQsNDEuNUMgNjUuMjkzMSw0NS41ODIxIDY0LjEyNjUsNDguNzQ4NyA2MC41LDUxQyA0Mi43NjYsNjMuODU0NyAyNS4wOTk0LDc2LjY4OCA3LjUsODkuNUMgNS41LDg5LjUgMy41LDg5LjUgMS41LDg5LjVDIDEuMTY2NjcsODguNSAwLjUsODcuODMzMyAtMC41LDg3LjVDIC0wLjUsNTguODMzMyAtMC41LDMwLjE2NjcgLTAuNSwxLjVDIDAuNSwxLjE2NjY3IDEuMTY2NjcsMC41IDEuNSwtMC41IFoiLz48L2c+CjxnPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjAuOTgxIiBmaWxsPSIjMDAwMDAwIiBkPSJNIDc3LjUsLTAuNSBDIDgwLjUsLTAuNSA4My41LC0wLjUgODYuNSwtMC41QyA4Ny4xNjY3LDAuODMzMzMzIDg4LjE2NjcsMS44MzMzMyA4OS41LDIuNUMgODkuNSwzMC41IDg5LjUsNTguNSA4OS41LDg2LjVDIDg4LjE2NjcsODcuMTY2NyA4Ny4xNjY3LDg4LjE2NjcgODYuNSw4OS41QyA4My41LDg5LjUgODAuNSw4OS41IDc3LjUsODkuNUMgNzYuODc4Myw4OC4zNzM0IDc2LjA0NSw4Ny4zNzM0IDc1LDg2LjVDIDc0LjMzMzMsNTguNSA3NC4zMzMzLDMwLjUgNzUsMi41QyA3Ni4wNDUsMS42MjY1NiA3Ni44NzgzLDAuNjI2NTYxIDc3LjUsLTAuNSBaIi8+PC9nPgo8L3N2Zz4K", gr = ({
  isPlaying: v,
  allowSkip: j,
  onPlayClick: z,
  onPauseClick: I,
  onSkipForwardClick: m,
  onSkipBackwardClick: O
}) => /* @__PURE__ */ b.jsxs(
  "div",
  {
    style: {
      display: "flex",
      alignItems: "center",
      gridColumn: "2 / 2",
      gap: 15
    },
    children: [
      j && /* @__PURE__ */ b.jsx(
        "img",
        {
          src: jr,
          onClick: O,
          title: "Skip backwards",
          style: {
            cursor: "pointer",
            height: 16,
            width: 16,
            transform: "rotate(180deg)"
          },
          "data-testid": "skip-back"
        }
      ),
      /* @__PURE__ */ b.jsx(
        "img",
        {
          src: v ? Ar : br,
          onClick: v ? I : z,
          title: v ? "Pause" : "Play",
          style: {
            cursor: "pointer",
            height: "20px",
            width: "20px"
          },
          "data-testid": "play-pause"
        }
      ),
      j && /* @__PURE__ */ b.jsx(
        "img",
        {
          src: jr,
          onClick: m,
          title: "Skip forwards",
          style: {
            cursor: "pointer",
            height: 16,
            width: 16
          },
          "data-testid": "skip-forward"
        }
      )
    ]
  }
), dr = ({
  current: v,
  setCurrent: j,
  total: z,
  showTrack: I = !0,
  showKnob: m = !0,
  trackHeight: O = 1,
  color: T = "rgba(140, 140, 140)",
  ...w
}) => {
  const [M, g] = H(!1), s = Lr(null), N = () => `${v / z * 100}%`, D = (L) => {
    if (!s.current)
      return;
    const ae = s.current.getBoundingClientRect(), ie = ae.width, $ = A(L) - ae.left;
    $ < 0 ? j(0) : $ > ie ? j(z) : j(z * $ / ie);
  }, A = (L) => L instanceof TouchEvent ? L.touches[0].clientX : L.clientX, x = (L) => {
    L.nativeEvent instanceof MouseEvent ? (window.addEventListener("mousemove", U), window.addEventListener("mouseup", Y)) : (window.addEventListener("touchmove", U), window.addEventListener("touchend", Y)), D(L.nativeEvent), g(!0);
  }, U = (L) => {
    D(L);
  }, Y = (L) => {
    L instanceof MouseEvent ? (window.removeEventListener("mousemove", U), window.removeEventListener("mouseup", Y)) : (window.removeEventListener("touchmove", U), window.removeEventListener("touchend", Y)), g(!1);
  }, d = () => {
    g(!0);
  }, c = () => {
    g(!1);
  };
  return /* @__PURE__ */ b.jsx(
    "div",
    {
      tabIndex: 0,
      style: {
        height: "15px",
        width: "100%",
        gridColumn: 1 / 1,
        gridRow: 1 / 1,
        placeSelf: "center",
        display: "flex",
        alignItems: "center",
        cursor: "pointer"
      },
      onMouseDown: x,
      onTouchStart: x,
      onMouseEnter: d,
      onMouseLeave: c,
      ref: s,
      "data-testid": w["data-testid"] ? `${w["data-testid"]}-trackbar` : "trackbar",
      children: /* @__PURE__ */ b.jsx(
        "div",
        {
          style: {
            backgroundColor: T,
            height: I ? O : 0,
            width: "100%",
            display: "flex",
            alignItems: "center",
            position: "relative",
            cursor: "pointer"
          },
          children: /* @__PURE__ */ b.jsx(
            "div",
            {
              style: {
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: T,
                opacity: m || M ? 1 : 0,
                position: "absolute",
                // left: `${percentage}%`,
                left: N(),
                marginLeft: -5,
                cursor: "pointer",
                transition: M ? "opacity 0.3s ease-in-out" : "opacity 0.75s ease-in-out"
              }
            }
          )
        }
      )
    }
  );
}, Er = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjEwMHB4IiBoZWlnaHQ9IjEwMHB4IiBzdHlsZT0ic2hhcGUtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjsgdGV4dC1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW9uOyBpbWFnZS1yZW5kZXJpbmc6b3B0aW1pemVRdWFsaXR5OyBmaWxsLXJ1bGU6ZXZlbm9kZDsgY2xpcC1ydWxlOmV2ZW5vZGQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KPGc+PHBhdGggc3R5bGU9Im9wYWNpdHk6MC45NTQiIGZpbGw9IiMwMDAwMDAiIGQ9Ik0gNTMuNSwtMC41IEMgNTQuODMzMywtMC41IDU2LjE2NjcsLTAuNSA1Ny41LC0wLjVDIDU5LjQ3NSwwLjY0NjM4MSA2MC45NzUsMi4zMTMwNSA2Miw0LjVDIDYyLjY2NjcsMzQuMTY2NyA2Mi42NjY3LDYzLjgzMzMgNjIsOTMuNUMgNjEuNDAxNSw5Ni4yNTQyIDU5LjkwMTUsOTguMjU0MiA1Ny41LDk5LjVDIDU2LjE2NjcsOTkuNSA1NC44MzMzLDk5LjUgNTMuNSw5OS41QyA0Mi45MjYzLDkwLjQzMDQgMzIuNzU5Niw4MC43NjM4IDIzLDcwLjVDIDIxLjg2ODYsNjMuNjAxMiAyMS4zNjg2LDU2LjYwMTIgMjEuNSw0OS41QyAyMS4zNjg2LDQyLjM5ODggMjEuODY4NiwzNS4zOTg4IDIzLDI4LjVDIDMyLjc1OTYsMTguMjM2MiA0Mi45MjYzLDguNTY5NTcgNTMuNSwtMC41IFoiLz48L2c+CjxnPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjAuNzc0IiBmaWxsPSIjMDAwMDAwIiBkPSJNIDc3LjUsMjAuNSBDIDg2LjYxMDgsMjIuNzcwNCA5Mi43Nzc1LDI4LjQzNzEgOTYsMzcuNUMgMTAwLjg0Nyw1Mi41OTYyIDk3LjM0NjcsNjUuNDI5NSA4NS41LDc2QyA4My42MDk2LDc3LjExMjMgODEuNjA5Niw3Ny45NDU2IDc5LjUsNzguNUMgNzguMDksNzguMTMyMiA3Ny4wOSw3Ny4yOTg5IDc2LjUsNzZDIDgwLjY2NjcsNzIuNSA4NC41LDY4LjY2NjcgODgsNjQuNUMgOTYuMzM4Myw0Ny44NSA5Mi42NzE2LDM0LjUxNjcgNzcsMjQuNUMgNzYuNDIwOSwyMy4wNzE1IDc2LjU4NzYsMjEuNzM4MiA3Ny41LDIwLjUgWiIvPjwvZz4KPGc+PHBhdGggc3R5bGU9Im9wYWNpdHk6MC44OTciIGZpbGw9IiMwMDAwMDAiIGQ9Ik0gNi41LDI4LjUgQyAxMC41LDI4LjUgMTQuNSwyOC41IDE4LjUsMjguNUMgMTcuMTY2Nyw0Mi41IDE3LjE2NjcsNTYuNSAxOC41LDcwLjVDIDEzLjQwMTIsNzAuODI1NCA4LjQwMTE4LDcwLjMyNTQgMy41LDY5QyAyLjEwNjc5LDY3LjgyODkgMS4yNzM0Niw2Ni4zMjg5IDEsNjQuNUMgMC4wNjkxOTM3LDUzLjQyNzIgMC40MDI1MjcsNDIuNDI3MiAyLDMxLjVDIDMuNDA4NzUsMzAuMjE4OSA0LjkwODc1LDI5LjIxODkgNi41LDI4LjUgWiIvPjwvZz4KPGc+PHBhdGggc3R5bGU9Im9wYWNpdHk6MC43NjgiIGZpbGw9IiMwMDAwMDAiIGQ9Ik0gNjcuNSwzNC41IEMgNzYuNzYxOSwzNS4wOTUgODEuNzYxOSw0MC4wOTUgODIuNSw0OS41QyA4Mi4yMTI4LDU3LjI4MDEgNzguMzc5NSw2Mi4yODAxIDcxLDY0LjVDIDY4LjA1ODUsNjQuNTYzMyA2Ny4wNTg1LDYzLjIzIDY4LDYwLjVDIDc2LjEzODYsNTcuMjIyOSA3OC40NzE5LDUxLjU1NjIgNzUsNDMuNUMgNzMuMDE4OCw0MS4zNDI1IDcwLjY4NTUsMzkuNjc1OSA2OCwzOC41QyA2Ny41MSwzNy4yMDY4IDY3LjM0MzMsMzUuODczNCA2Ny41LDM0LjUgWiIvPjwvZz4KPC9zdmc+Cg==", Cr = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjEwMHB4IiBoZWlnaHQ9IjEwMHB4IiBzdHlsZT0ic2hhcGUtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjsgdGV4dC1yZW5kZXJpbmc6Z2VvbWV0cmljUHJlY2lzaW9uOyBpbWFnZS1yZW5kZXJpbmc6b3B0aW1pemVRdWFsaXR5OyBmaWxsLXJ1bGU6ZXZlbm9kZDsgY2xpcC1ydWxlOmV2ZW5vZGQiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KPGc+PHBhdGggc3R5bGU9Im9wYWNpdHk6MC45NDUiIGZpbGw9IiMwMDAwMDAiIGQ9Ik0gNTMuNSwtMC41IEMgNTQuODMzMywtMC41IDU2LjE2NjcsLTAuNSA1Ny41LC0wLjVDIDU5LjQ3NSwwLjY0NjM4MSA2MC45NzUsMi4zMTMwNSA2Miw0LjVDIDYyLjY2NjcsMzQuMTY2NyA2Mi42NjY3LDYzLjgzMzMgNjIsOTMuNUMgNjEuNDAxNSw5Ni4yNTQyIDU5LjkwMTUsOTguMjU0MiA1Ny41LDk5LjVDIDU2LjE2NjcsOTkuNSA1NC44MzMzLDk5LjUgNTMuNSw5OS41QyA0Mi45MjYzLDkwLjQzMDQgMzIuNzU5Niw4MC43NjM4IDIzLDcwLjVDIDIyLjAyNjYsNjguNjA3OSAyMS4zNTk5LDY2LjYwNzkgMjEsNjQuNUMgMjAuMTEyOCw1Mi43ODM4IDIwLjQ0NjIsNDEuMTE3MSAyMiwyOS41QyAzMi4wOTI4LDE4LjkwMzIgNDIuNTkyOCw4LjkwMzE3IDUzLjUsLTAuNSBaIi8+PC9nPgo8Zz48cGF0aCBzdHlsZT0ib3BhY2l0eTowLjg5NCIgZmlsbD0iIzAwMDAwMCIgZD0iTSA2LjUsMjguNSBDIDEwLjUsMjguNSAxNC41LDI4LjUgMTguNSwyOC41QyAxNy4xNjY3LDQyLjUgMTcuMTY2Nyw1Ni41IDE4LjUsNzAuNUMgMTMuNDAxMiw3MC44MjU0IDguNDAxMTgsNzAuMzI1NCAzLjUsNjlDIDIuMjk4NTcsNjguMDk3NSAxLjQ2NTI0LDY2LjkzMDggMSw2NS41QyAwLjMzMzMzMyw1NC44MzMzIDAuMzMzMzMzLDQ0LjE2NjcgMSwzMy41QyAyLjEwNjUzLDMwLjg4NyAzLjkzOTg2LDI5LjIyMDMgNi41LDI4LjUgWiIvPjwvZz4KPGc+PHBhdGggc3R5bGU9Im9wYWNpdHk6MC43OTEiIGZpbGw9IiMwMDAwMDAiIGQ9Ik0gNzEuNSwzNS41IEMgNzIuNTUyLDM1LjM1MDUgNzMuNTUyLDM1LjUxNzIgNzQuNSwzNkMgNzcuNjY2NywzOS4xNjY3IDgwLjgzMzMsNDIuMzMzMyA4NCw0NS41QyA4Ny4xNjY3LDQyLjMzMzMgOTAuMzMzMywzOS4xNjY3IDkzLjUsMzZDIDk3LjExMTQsMzQuNzQ1OCA5OC42MTE0LDM1LjkxMjQgOTgsMzkuNUMgOTQuNjUwNyw0Mi42ODIgOTEuNDg0LDQ2LjAxNTQgODguNSw0OS41QyA5MS40ODQsNTIuOTg0NiA5NC42NTA3LDU2LjMxOCA5OCw1OS41QyA5OC4yMTc0LDYyLjY1NzIgOTYuNzE3NCw2My44MjM5IDkzLjUsNjNDIDkwLjMzMzMsNTkuODMzMyA4Ny4xNjY3LDU2LjY2NjcgODQsNTMuNUMgODAuODMzMyw1Ni42NjY3IDc3LjY2NjcsNTkuODMzMyA3NC41LDYzQyA3MC45MTI0LDYzLjYxMTQgNjkuNzQ1OCw2Mi4xMTE0IDcxLDU4LjVDIDc0LjAxNjIsNTUuNjUxMSA3Ni44NDk2LDUyLjY1MTEgNzkuNSw0OS41QyA3Ni44NDk2LDQ2LjM0ODkgNzQuMDE2Miw0My4zNDg5IDcxLDQwLjVDIDcwLjM2MDMsMzguNzM1IDcwLjUyNjksMzcuMDY4MyA3MS41LDM1LjUgWiIvPjwvZz4KPC9zdmc+Cg==", hr = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9Ijk2cHgiIGhlaWdodD0iOTZweCIgc3R5bGU9InNoYXBlLXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IHRleHQtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjsgaW1hZ2UtcmVuZGVyaW5nOm9wdGltaXplUXVhbGl0eTsgZmlsbC1ydWxlOmV2ZW5vZGQ7IGNsaXAtcnVsZTpldmVub2RkIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CjxnPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjAuODY1IiBmaWxsPSIjMDAwMDAwIiBkPSJNIDczLjUsLTAuNSBDIDc0LjgzMzMsLTAuNSA3Ni4xNjY3LC0wLjUgNzcuNSwtMC41QyA4My44MzMzLDUuMTY2NjcgODkuODMzMywxMS4xNjY3IDk1LjUsMTcuNUMgOTUuNSwxOC41IDk1LjUsMTkuNSA5NS41LDIwLjVDIDg5Ljc3ODEsMjcuMzkwNCA4My4yNzgxLDMzLjM5MDQgNzYsMzguNUMgNzAuNjI3MSwzNy4zNjYyIDY5LjI5MzgsMzQuMzY2MiA3MiwyOS41QyA3My41LDI4IDc1LDI2LjUgNzYuNSwyNUMgNTUuMTY2NywyNC4zMzMzIDMzLjgzMzMsMjQuMzMzMyAxMi41LDI1QyAxMiwyNS41IDExLjUsMjYgMTEsMjYuNUMgMTAuNjY2NywzNi4xNjY3IDEwLjMzMzMsNDUuODMzMyAxMCw1NS41QyA2LjkwMjMxLDU5LjEwNzQgMy40MDIzMSw2Mi4xMDc0IC0wLjUsNjQuNUMgLTAuNSw1MS44MzMzIC0wLjUsMzkuMTY2NyAtMC41LDI2LjVDIDEuNDQsMTkuMzk4NCA2LjEwNjY2LDE1LjIzMTggMTMuNSwxNEMgMzQuNSwxMy42NjY3IDU1LjUsMTMuMzMzMyA3Ni41LDEzQyA3NC42NjY3LDExLjE2NjcgNzIuODMzMyw5LjMzMzMzIDcxLDcuNUMgNzAuMDE4Miw0LjIyNTMgNzAuODUxNSwxLjU1ODYzIDczLjUsLTAuNSBaIi8+PC9nPgo8Zz48cGF0aCBzdHlsZT0ib3BhY2l0eTowLjg2NSIgZmlsbD0iIzAwMDAwMCIgZD0iTSA5NS41LDMwLjUgQyA5NS41LDQzLjE2NjcgOTUuNSw1NS44MzMzIDk1LjUsNjguNUMgOTMuNTYsNzUuNjAxNiA4OC44OTMzLDc5Ljc2ODIgODEuNSw4MUMgNjAuNSw4MS4zMzMzIDM5LjUsODEuNjY2NyAxOC41LDgyQyAyMC4zMzMzLDgzLjgzMzMgMjIuMTY2Nyw4NS42NjY3IDI0LDg3LjVDIDI0Ljk4MTgsOTAuNzc0NyAyNC4xNDg1LDkzLjQ0MTQgMjEuNSw5NS41QyAyMC4xNjY3LDk1LjUgMTguODMzMyw5NS41IDE3LjUsOTUuNUMgMTEuMTY2Nyw4OS44MzMzIDUuMTY2NjcsODMuODMzMyAtMC41LDc3LjVDIC0wLjUsNzYuNSAtMC41LDc1LjUgLTAuNSw3NC41QyA1LjIyMTkzLDY3LjYwOTYgMTEuNzIxOSw2MS42MDk2IDE5LDU2LjVDIDI0LjM3MjksNTcuNjMzOCAyNS43MDYyLDYwLjYzMzggMjMsNjUuNUMgMjEuNSw2NyAyMCw2OC41IDE4LjUsNzBDIDM5LjgzMzMsNzAuNjY2NyA2MS4xNjY3LDcwLjY2NjcgODIuNSw3MEMgODMsNjkuNSA4My41LDY5IDg0LDY4LjVDIDg0LjMzMzMsNTguODMzMyA4NC42NjY3LDQ5LjE2NjcgODUsMzkuNUMgODguMDk3NywzNS44OTI2IDkxLjU5NzcsMzIuODkyNiA5NS41LDMwLjUgWiIvPjwvZz4KPC9zdmc+Cg==", kr = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9Ijk2cHgiIGhlaWdodD0iOTZweCIgc3R5bGU9InNoYXBlLXJlbmRlcmluZzpnZW9tZXRyaWNQcmVjaXNpb247IHRleHQtcmVuZGVyaW5nOmdlb21ldHJpY1ByZWNpc2lvbjsgaW1hZ2UtcmVuZGVyaW5nOm9wdGltaXplUXVhbGl0eTsgZmlsbC1ydWxlOmV2ZW5vZGQ7IGNsaXAtcnVsZTpldmVub2RkIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CjxnPjxwYXRoIHN0eWxlPSJvcGFjaXR5OjAuODY1IiBmaWxsPSIjMDAwMDAwIiBkPSJNIDczLjUsLTAuNSBDIDc0LjgzMzMsLTAuNSA3Ni4xNjY3LC0wLjUgNzcuNSwtMC41QyA4My44MzMzLDUuMTY2NjcgODkuODMzMywxMS4xNjY3IDk1LjUsMTcuNUMgOTUuNSwxOC41IDk1LjUsMTkuNSA5NS41LDIwLjVDIDg5Ljc3ODEsMjcuMzkwNCA4My4yNzgxLDMzLjM5MDQgNzYsMzguNUMgNzAuNjI3MSwzNy4zNjYyIDY5LjI5MzgsMzQuMzY2MiA3MiwyOS41QyA3My41LDI4IDc1LDI2LjUgNzYuNSwyNUMgNTUuMTY2NywyNC4zMzMzIDMzLjgzMzMsMjQuMzMzMyAxMi41LDI1QyAxMiwyNS41IDExLjUsMjYgMTEsMjYuNUMgMTAuNjY2NywzNi4xNjY3IDEwLjMzMzMsNDUuODMzMyAxMCw1NS41QyA2LjkwMjMxLDU5LjEwNzQgMy40MDIzMSw2Mi4xMDc0IC0wLjUsNjQuNUMgLTAuNSw1MS44MzMzIC0wLjUsMzkuMTY2NyAtMC41LDI2LjVDIDEuNDQsMTkuMzk4NCA2LjEwNjY2LDE1LjIzMTggMTMuNSwxNEMgMzQuNSwxMy42NjY3IDU1LjUsMTMuMzMzMyA3Ni41LDEzQyA3NC42NjY3LDExLjE2NjcgNzIuODMzMyw5LjMzMzMzIDcxLDcuNUMgNzAuMDE4Miw0LjIyNTMgNzAuODUxNSwxLjU1ODYzIDczLjUsLTAuNSBaIi8+PC9nPgo8Zz48cGF0aCBzdHlsZT0ib3BhY2l0eTowLjg1OCIgZmlsbD0iIzAwMDAwMCIgZD0iTSA0Ni41LDMwLjUgQyA0OC43MjI0LDMwLjE3OCA1MC41NTU3LDMwLjg0NDYgNTIsMzIuNUMgNTIuNjY2Nyw0Mi41IDUyLjY2NjcsNTIuNSA1Miw2Mi41QyA0OS42NjY3LDY1LjE2NjcgNDcuMzMzMyw2NS4xNjY3IDQ1LDYyLjVDIDQ0LjUwMDMsNTUuMTc0MiA0NC4zMzM3LDQ3Ljg0MDkgNDQuNSw0MC41QyAzOC43MTA4LDQxLjQ2MjkgMzYuNzEwOCwzOS4yOTYyIDM4LjUsMzRDIDQxLjMwOTMsMzIuOTA2NiA0My45NzYsMzEuNzM5OSA0Ni41LDMwLjUgWiIvPjwvZz4KPGc+PHBhdGggc3R5bGU9Im9wYWNpdHk6MC44NjUiIGZpbGw9IiMwMDAwMDAiIGQ9Ik0gOTUuNSwzMC41IEMgOTUuNSw0My4xNjY3IDk1LjUsNTUuODMzMyA5NS41LDY4LjVDIDkzLjU2LDc1LjYwMTYgODguODkzMyw3OS43NjgyIDgxLjUsODFDIDYwLjUsODEuMzMzMyAzOS41LDgxLjY2NjcgMTguNSw4MkMgMjAuMzMzMyw4My44MzMzIDIyLjE2NjcsODUuNjY2NyAyNCw4Ny41QyAyNC45ODE4LDkwLjc3NDcgMjQuMTQ4NSw5My40NDE0IDIxLjUsOTUuNUMgMjAuMTY2Nyw5NS41IDE4LjgzMzMsOTUuNSAxNy41LDk1LjVDIDExLjE2NjcsODkuODMzMyA1LjE2NjY3LDgzLjgzMzMgLTAuNSw3Ny41QyAtMC41LDc2LjUgLTAuNSw3NS41IC0wLjUsNzQuNUMgNS4yMjE5Myw2Ny42MDk2IDExLjcyMTksNjEuNjA5NiAxOSw1Ni41QyAyNC4zNzI5LDU3LjYzMzggMjUuNzA2Miw2MC42MzM4IDIzLDY1LjVDIDIxLjUsNjcgMjAsNjguNSAxOC41LDcwQyAzOS44MzMzLDcwLjY2NjcgNjEuMTY2Nyw3MC42NjY3IDgyLjUsNzBDIDgzLDY5LjUgODMuNSw2OSA4NCw2OC41QyA4NC4zMzMzLDU4LjgzMzMgODQuNjY2Nyw0OS4xNjY3IDg1LDM5LjVDIDg4LjA5NzcsMzUuODkyNiA5MS41OTc3LDMyLjg5MjYgOTUuNSwzMC41IFoiLz48L2c+Cjwvc3ZnPgo=", Dr = ({ seconds: v }) => /* @__PURE__ */ b.jsx(
  "div",
  {
    style: {
      color: "#000000",
      fontSize: 14
    },
    "data-testid": "timer",
    children: v !== void 0 ? `${Math.floor(v / 60).toString().padStart(2, "0")}:${String(Math.round(v % 60)).padStart(
      2,
      "0"
    )}` : "--:--"
  }
), Ur = ({
  // native props
  src: v,
  loop: j = !1,
  volume: z = 0.75,
  muted: I = !1,
  autoplay: m = !1,
  crossOrigin: O = null,
  preload: T = "",
  playbackRate: w = 1,
  // audio element events
  onabort: M = null,
  oncanplay: g = null,
  oncanplaythrough: s = null,
  ondurationchange: N = null,
  onemptied: D = null,
  onended: A = null,
  onerror: x = null,
  onloadeddata: U = null,
  onloadedmetadata: Y = null,
  onloadstart: d = null,
  onpause: c = null,
  onplay: L = null,
  onplaying: ae = null,
  onprogress: ie = null,
  onratechange: $ = null,
  onseeked: he = null,
  onseeking: ke = null,
  onstalled: Me = null,
  onsuspend: xe = null,
  ontimeupdate: Ue = null,
  onvolumechange: Ne = null,
  onwaiting: E = null,
  // Audio player props
  minimal: C = !1,
  width: R,
  trackHeight: oe = 75,
  barWidth: fe = 2,
  gap: ye = 1,
  visualise: je = !0,
  backgroundColor: ue = "#EFEFEF",
  barColor: ge,
  barPlayedColor: de,
  allowSkip: De = !0,
  skipDuration: Oe = 5,
  showLoopOption: Ye = !0,
  showVolumeControl: K = !0,
  seekBarColor: q,
  volumeControlColor: G,
  hideSeekBar: ee = !1,
  hideSeekKnobWhenPlaying: B = !1
}) => {
  const [be, Le] = H(), [l] = H(() => new Audio()), [J, _] = H(0), [P, se] = H(0), [X, W] = H(!1), [Re, Pe] = H(z), [F, pe] = H(!1), [Ae, we] = H(j);
  sr(() => (fetch(v).then(async (h) => {
    const ne = await h.blob();
    return l.src = URL.createObjectURL(ne), l.volume = z, l.loop = j, l.muted = I, l.autoplay = m, l.crossOrigin = O, l.preload = T, l.playbackRate = w, l.onabort = M, l.oncanplay = g, l.oncanplaythrough = s, l.ondurationchange = N, l.onemptied = D, l.onended = A, l.onerror = x, l.onloadeddata = U, l.onloadedmetadata = Y, l.onloadstart = d, l.onpause = c, l.onplay = L, l.onplaying = ae, l.onprogress = ie, l.onratechange = $, l.onseeked = he, l.onseeking = ke, l.onstalled = Me, l.onsuspend = xe, l.ontimeupdate = Ue, l.onvolumechange = Ne, l.onwaiting = E, l.addEventListener("ended", ce), Le(ne), ne;
  }).then(async (h) => {
    const ne = await h.arrayBuffer();
    await new AudioContext().decodeAudioData(ne, (me) => {
      se(me.duration);
    });
  }), () => {
    l.removeEventListener("ended", ce);
  }), []);
  const ce = () => {
    W(!1), te(0);
  }, Q = () => {
    if (!l.src)
      return;
    l.duration !== 1 / 0 && se(l.duration), l.play(), W(!0);
    const h = () => {
      if (l.currentTime >= P) {
        ve(), te(0);
        return;
      }
      _(l.currentTime), requestAnimationFrame(h);
    };
    requestAnimationFrame(h);
  }, ve = () => {
    l.pause(), W(!1);
  }, Ie = () => {
    l.volume = 0, pe(!0);
  }, ze = () => {
    l.volume = z, pe(!1);
  }, re = (h) => {
    pe(!1), Pe(h), l.volume = h;
  }, te = (h) => {
    l.currentTime = h, _(h);
  }, Qe = () => {
    we((h) => !h), l.loop = !Ae;
  }, Ee = () => {
    te(Math.min(P, J + Oe));
  }, Ce = () => {
    te(Math.max(0, J - Oe));
  }, We = (h) => {
    te(h);
  };
  return /* @__PURE__ */ b.jsxs(
    "div",
    {
      style: {
        backgroundColor: ue,
        borderRadius: "5px",
        width: R,
        height: "max-content",
        display: "flex",
        gap: 10,
        flexDirection: "column",
        alignItems: "center",
        padding: C ? "7px 10px" : "10px 20px 15px",
        position: "relative"
      },
      children: [
        /* @__PURE__ */ b.jsxs(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              gap: C ? 10 : 15,
              width: R
            },
            children: [
              C ? /* @__PURE__ */ b.jsx(
                gr,
                {
                  isPlaying: X,
                  allowSkip: !1,
                  onPauseClick: ve,
                  onPlayClick: Q,
                  onSkipBackwardClick: Ce,
                  onSkipForwardClick: Ee
                }
              ) : /* @__PURE__ */ b.jsx(Dr, { seconds: J }),
              /* @__PURE__ */ b.jsxs(
                "div",
                {
                  style: {
                    display: "grid",
                    gridTemplateColumns: "1fr",
                    gridTemplateRows: "1fr",
                    width: R * 0.7,
                    height: oe
                  },
                  children: [
                    je && be && /* @__PURE__ */ b.jsx(
                      pr,
                      {
                        width: R * 0.7,
                        height: oe,
                        barWidth: fe,
                        gap: ye,
                        blob: be,
                        currentTime: J,
                        backgroundColor: ue,
                        barColor: ge,
                        barPlayedColor: de,
                        style: {
                          gridColumn: 1 / 1,
                          gridRow: 1 / 1,
                          placeSelf: "center"
                        }
                      }
                    ),
                    /* @__PURE__ */ b.jsx(
                      dr,
                      {
                        total: P,
                        current: J,
                        setCurrent: We,
                        color: q,
                        showTrack: !ee,
                        showKnob: !(B && X),
                        "data-testid": "seek-trackbar"
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ b.jsx(
                Dr,
                {
                  seconds: C && X ? J : Math.round(P)
                }
              )
            ]
          }
        ),
        !C && /* @__PURE__ */ b.jsxs(
          "div",
          {
            style: {
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              placeItems: "center",
              width: "98%"
            },
            children: [
              Ye && /* @__PURE__ */ b.jsx(
                "img",
                {
                  src: Ae ? hr : kr,
                  onClick: Qe,
                  title: "Loop",
                  style: {
                    cursor: "pointer",
                    justifySelf: "flex-start",
                    height: 16,
                    width: 16
                  }
                }
              ),
              /* @__PURE__ */ b.jsx(
                gr,
                {
                  isPlaying: X,
                  allowSkip: De,
                  onPauseClick: ve,
                  onPlayClick: Q,
                  onSkipBackwardClick: Ce,
                  onSkipForwardClick: Ee
                }
              ),
              K && /* @__PURE__ */ b.jsxs(
                "div",
                {
                  style: {
                    display: "flex",
                    gap: 8,
                    justifySelf: "flex-end",
                    width: 80
                  },
                  children: [
                    /* @__PURE__ */ b.jsx(
                      "img",
                      {
                        src: !F && z > 0 ? Er : Cr,
                        onClick: F ? ze : Ie,
                        title: F ? "Un-mute" : "Mute",
                        style: {
                          cursor: "pointer",
                          height: 16,
                          width: 16
                        }
                      }
                    ),
                    /* @__PURE__ */ b.jsx(
                      dr,
                      {
                        current: Re,
                        total: 1,
                        setCurrent: re,
                        color: G,
                        "data-testid": "volume"
                      }
                    )
                  ]
                }
              )
            ]
          }
        )
      ]
    }
  );
};
export {
  Ur as AudioPlayer
};
