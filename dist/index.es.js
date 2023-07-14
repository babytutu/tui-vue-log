/**
 * name: tui-vue-log
 * version: v0.0.1
 * description: vue log tool
 * author: babytutu
 * homepage: https://github.com/babytutu/tui-vue-log
 */
function S(r, e) {
  var t = r == null ? null : typeof Symbol < "u" && r[Symbol.iterator] || r["@@iterator"];
  if (t != null) {
    var n, d, o, i, a = [], c = !0, f = !1;
    try {
      if (o = (t = t.call(r)).next, e === 0) {
        if (Object(t) !== t)
          return;
        c = !1;
      } else
        for (; !(c = (n = o.call(t)).done) && (a.push(n.value), a.length !== e); c = !0)
          ;
    } catch (s) {
      f = !0, d = s;
    } finally {
      try {
        if (!c && t.return != null && (i = t.return(), Object(i) !== i))
          return;
      } finally {
        if (f)
          throw d;
      }
    }
    return a;
  }
}
function j(r, e) {
  return x(r) || S(r, e) || I(r, e) || O();
}
function x(r) {
  if (Array.isArray(r))
    return r;
}
function I(r, e) {
  if (r) {
    if (typeof r == "string")
      return h(r, e);
    var t = Object.prototype.toString.call(r).slice(8, -1);
    if (t === "Object" && r.constructor && (t = r.constructor.name), t === "Map" || t === "Set")
      return Array.from(r);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
      return h(r, e);
  }
}
function h(r, e) {
  (e == null || e > r.length) && (e = r.length);
  for (var t = 0, n = new Array(e); t < e; t++)
    n[t] = r[t];
  return n;
}
function O() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
const T = {
  install: function(e, t) {
    var n = t || {}, d = n.border, o = d === void 0 ? "4px" : d, i = n.background, a = i === void 0 ? ["#606060", "#409EFF"] : i, c = n.style, f = c || "padding: 4px 8px; color: #fff;", s = Number(e.version.split(".")[0]);
    function y(g, A) {
      var b = "";
      if (s > 2) {
        var l, u, m = e == null || (l = e.config) === null || l === void 0 || (l = l.globalProperties) === null || l === void 0 || (l = l.$route) === null || l === void 0 ? void 0 : l.matched, k = j(m, 1), v = k[0];
        b = (v == null || (u = v.components) === null || u === void 0 || (u = u.default) === null || u === void 0 ? void 0 : u.__file) || "";
      }
      console.log(
        "%c".concat(g, "%c").concat(JSON.stringify(A)),
        // Console Message
        "border-radius: ".concat(o, " 0 0 ").concat(o, "; background: ").concat(a[0], "; ").concat(f),
        "border-radius: 0 ".concat(o, " ").concat(o, " 0; background: ").concat(a[1], "; ").concat(f),
        b.replace(/.*\/src(.*$)/, "$1")
      );
    }
    s > 2 ? e.provide("log", y) : e.prototype.log = y;
  }
};
export {
  T as default
};
