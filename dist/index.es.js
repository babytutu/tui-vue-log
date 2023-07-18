/**
 * name: tui-vue-log
 * version: v0.0.3
 * description: vue log tool
 * author: babytutu
 * homepage: https://github.com/babytutu/tui-vue-log
 */
function T(r, e) {
  var t = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (t != null) {
    var n, d, o, i, a = [], u = !0, f = !1;
    try {
      if (o = (t = t.call(r)).next, e === 0) {
        if (Object(t) !== t)
          return;
        u = !1;
      } else
        for (; !(u = (n = o.call(t)).done) && (a.push(n.value), a.length !== e); u = !0)
          ;
    } catch (v) {
      f = !0, d = v;
    } finally {
      try {
        if (!u && t.return != null && (i = t.return(), Object(i) !== i))
          return;
      } finally {
        if (f)
          throw d;
      }
    }
    return a;
  }
}
function k(r, e) {
  return E(r) || T(r, e) || F(r, e) || N();
}
function E(r) {
  if (Array.isArray(r))
    return r;
}
function F(r, e) {
  if (r) {
    if (typeof r == "string")
      return w(r, e);
    var t = Object.prototype.toString.call(r).slice(8, -1);
    if (t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set")
      return Array.from(r);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return w(r, e);
  }
}
function w(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var t = 0, n = new Array(e); t < e; t++)
    n[t] = r[t];
  return n;
}
function N() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
const P = {
  install: function(e, t) {
    var n = t || {}, d = n.border, o = d === void 0 ? "4px" : d, i = n.background, a = i === void 0 ? ["#606060", "#409EFF"] : i, u = n.style, f = n.display, v = f === void 0 ? !0 : f, g = u || "padding: 4px 8px; color: #fff;", h = Number(e.version.split(".")[0]);
    function A(x) {
      var m = "";
      if (h > 2) {
        var l, c, I = (e == null || (l = e.config) === null || l === void 0 || (l = l.globalProperties) === null || l === void 0 || (l = l.$route) === null || l === void 0 ? void 0 : l.matched) || [], O = k(I, 1), S = O[0], y = S === void 0 ? {} : S;
        m = (y == null || (c = y.components) === null || c === void 0 || (c = c.default) === null || c === void 0 ? void 0 : c.__file) || "";
      }
      for (var b = arguments.length, j = new Array(b > 1 ? b - 1 : 0), s = 1; s < b; s++)
        j[s - 1] = arguments[s];
      v && console.log(
        "%c".concat(x, "%c").concat(JSON.stringify(j)),
        // Console Message
        "border-radius: ".concat(o, " 0 0 ").concat(o, "; background: ").concat(a[0], "; ").concat(g),
        "border-radius: 0 ".concat(o, " ").concat(o, " 0; background: ").concat(a[1], "; ").concat(g),
        m.replace(/.*\/src(.*$)/, "$1")
      );
    }
    h > 2 ? e.provide("log", A) : e.prototype.log = A;
  }
};
export {
  P as default
};
