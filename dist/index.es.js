/**
 * name: tui-vue-log
 * version: v0.0.4
 * description: vue log tool
 * author: babytutu
 * homepage: https://github.com/babytutu/tui-vue-log
 */
const w = {
  install: function(l, y) {
    var n = y || {}, s = n.border, i = s === void 0 ? "4px" : s, u = n.background, v = u === void 0 ? ["#606060", "#409EFF"] : u, k = n.style, c = n.display, F = c === void 0 ? !0 : c, a = k || "padding: 4px 8px; color: #fff;", b = Number(l.version.split(".")[0]);
    function f(N) {
      var g = "";
      if (b > 2) {
        var o, r, d = (l == null || (o = l.config) === null || o === void 0 || (o = o.globalProperties) === null || o === void 0 || (o = o.$route) === null || o === void 0 ? void 0 : o.matched) || [];
        g = d.length ? (r = d[d.length - 1]) === null || r === void 0 || (r = r.components) === null || r === void 0 || (r = r.default) === null || r === void 0 ? void 0 : r.__file : "";
      }
      for (var e = arguments.length, x = new Array(e > 1 ? e - 1 : 0), t = 1; t < e; t++)
        x[t - 1] = arguments[t];
      F && console.log(
        "%c".concat(N, "%c").concat(JSON.stringify(x)),
        // Console Message
        "border-radius: ".concat(i, " 0 0 ").concat(i, "; background: ").concat(v[0], "; ").concat(a),
        "border-radius: 0 ".concat(i, " ").concat(i, " 0; background: ").concat(v[1], "; ").concat(a),
        g.replace(/.*\/src(.*$)/, "$1")
      );
    }
    b > 2 ? l.provide("log", f) : l.prototype.log = f;
  }
};
export {
  w as default
};
