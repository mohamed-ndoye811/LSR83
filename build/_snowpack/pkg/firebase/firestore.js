import { g as getUA, i as isMobileCordova, a as isReactNative, b as isElectron, c as isIE, d as isUWP, e as isBrowserExtension, L as LogLevel, h as Logger, C as Component, f as firebase$1 } from '../common/index.esm-b02c78e6.js';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var h, goog = goog || {}, k = commonjsGlobal || self;
function aa() { }
function ba(a) { var b = typeof a; b = "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null"; return "array" == b || "object" == b && "number" == typeof a.length; }
function n(a) { var b = typeof a; return "object" == b && null != a || "function" == b; }
function ca(a) { return Object.prototype.hasOwnProperty.call(a, da) && a[da] || (a[da] = ++ea); }
var da = "closure_uid_" + (1E9 * Math.random() >>> 0), ea = 0;
function fa(a, b, c) { return a.call.apply(a.bind, arguments); }
function ha(a, b, c) { if (!a)
    throw Error(); if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function () { var e = Array.prototype.slice.call(arguments); Array.prototype.unshift.apply(e, d); return a.apply(b, e); };
} return function () { return a.apply(b, arguments); }; }
function p(a, b, c) { Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? p = fa : p = ha; return p.apply(null, arguments); }
function ja(a, b) { var c = Array.prototype.slice.call(arguments, 1); return function () { var d = c.slice(); d.push.apply(d, arguments); return a.apply(this, d); }; }
function q() { return Date.now(); }
function r(a, b) { function c() { } c.prototype = b.prototype; a.X = b.prototype; a.prototype = new c; a.prototype.constructor = a; a.Kb = function (d, e, f) { for (var g = Array(arguments.length - 2), m = 2; m < arguments.length; m++)
    g[m - 2] = arguments[m]; return b.prototype[e].apply(d, g); }; }
function t() { this.j = this.j; this.i = this.i; }
var ka = 0;
t.prototype.j = !1;
t.prototype.ja = function () { if (!this.j && (this.j = !0, this.G(), 0 != ka)) {
    ca(this);
} };
t.prototype.G = function () { if (this.i)
    for (; this.i.length;)
        this.i.shift()(); };
var ma = Array.prototype.indexOf ? function (a, b) { return Array.prototype.indexOf.call(a, b, void 0); } : function (a, b) { if ("string" === typeof a)
    return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0); for (var c = 0; c < a.length; c++)
    if (c in a && a[c] === b)
        return c; return -1; }, na = Array.prototype.forEach ? function (a, b, c) { Array.prototype.forEach.call(a, b, c); } : function (a, b, c) { for (var d = a.length, e = "string" === typeof a ? a.split("") : a, f = 0; f < d; f++)
    f in e && b.call(c, e[f], f, a); };
function oa(a) { a: {
    var b = pa;
    for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
        if (e in d && b.call(void 0, d[e], e, a)) {
            b = e;
            break a;
        }
    b = -1;
} return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]; }
function qa(a) { return Array.prototype.concat.apply([], arguments); }
function ra(a) { var b = a.length; if (0 < b) {
    for (var c = Array(b), d = 0; d < b; d++)
        c[d] = a[d];
    return c;
} return []; }
function sa(a) { return /^[\s\xa0]*$/.test(a); }
var ta = String.prototype.trim ? function (a) { return a.trim(); } : function (a) { return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]; };
function v(a, b) { return -1 != a.indexOf(b); }
function ua(a, b) { return a < b ? -1 : a > b ? 1 : 0; }
var w;
a: {
    var va = k.navigator;
    if (va) {
        var wa = va.userAgent;
        if (wa) {
            w = wa;
            break a;
        }
    }
    w = "";
}
function za(a, b, c) { for (var d in a)
    b.call(c, a[d], d, a); }
function Aa(a) { var b = {}; for (var c in a)
    b[c] = a[c]; return b; }
var Ba = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Ca(a, b) { var c, d; for (var e = 1; e < arguments.length; e++) {
    d = arguments[e];
    for (c in d)
        a[c] = d[c];
    for (var f = 0; f < Ba.length; f++)
        c = Ba[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
} }
function Da(a) { Da[" "](a); return a; }
Da[" "] = aa;
function Ea(a, b) { var c = Fa; return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a); }
var Ga = v(w, "Opera"), x = v(w, "Trident") || v(w, "MSIE"), Ha = v(w, "Edge"), Ia = Ha || x, Ja = v(w, "Gecko") && !(v(w.toLowerCase(), "webkit") && !v(w, "Edge")) && !(v(w, "Trident") || v(w, "MSIE")) && !v(w, "Edge"), Ka = v(w.toLowerCase(), "webkit") && !v(w, "Edge");
function La() { var a = k.document; return a ? a.documentMode : void 0; }
var Ma;
a: {
    var Na = "", Oa = function () { var a = w; if (Ja)
        return /rv:([^\);]+)(\)|;)/.exec(a); if (Ha)
        return /Edge\/([\d\.]+)/.exec(a); if (x)
        return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a); if (Ka)
        return /WebKit\/(\S+)/.exec(a); if (Ga)
        return /(?:Version)[ \/]?(\S+)/.exec(a); }();
    Oa && (Na = Oa ? Oa[1] : "");
    if (x) {
        var Pa = La();
        if (null != Pa && Pa > parseFloat(Na)) {
            Ma = String(Pa);
            break a;
        }
    }
    Ma = Na;
}
var Fa = {};
function Qa(a) { return Ea(a, function () { {
    var b = 0;
    var e = ta(String(Ma)).split("."), f = ta(String(a)).split("."), g = Math.max(e.length, f.length);
    for (var m = 0; 0 == b && m < g; m++) {
        var c = e[m] || "", d = f[m] || "";
        do {
            c = /(\d*)(\D*)(.*)/.exec(c) || ["", "", "", ""];
            d = /(\d*)(\D*)(.*)/.exec(d) || ["", "", "", ""];
            if (0 == c[0].length && 0 == d[0].length)
                break;
            b = ua(0 == c[1].length ? 0 : parseInt(c[1], 10), 0 == d[1].length ? 0 : parseInt(d[1], 10)) || ua(0 == c[2].length, 0 == d[2].length) || ua(c[2], d[2]);
            c = c[3];
            d = d[3];
        } while (0 == b);
    }
} return 0 <= b; }); }
var Ra;
if (k.document && x) {
    var Sa = La();
    Ra = Sa ? Sa : parseInt(Ma, 10) || void 0;
}
else
    Ra = void 0;
var Ta = Ra;
var Ua = !x || 9 <= Number(Ta), Va = x && !Qa("9"), Wa = function () { if (!k.addEventListener || !Object.defineProperty)
    return !1; var a = !1, b = Object.defineProperty({}, "passive", { get: function () { a = !0; } }); try {
    k.addEventListener("test", aa, b), k.removeEventListener("test", aa, b);
}
catch (c) { } return a; }();
function y(a, b) { this.type = a; this.a = this.target = b; this.defaultPrevented = !1; }
y.prototype.b = function () { this.defaultPrevented = !0; };
function z(a, b) {
    y.call(this, a ? a.type : "");
    this.relatedTarget = this.a = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.key = "";
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
    this.pointerId = 0;
    this.pointerType = "";
    this.c = null;
    if (a) {
        var c = this.type = a.type, d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.a = b;
        if (b = a.relatedTarget) {
            if (Ja) {
                a: {
                    try {
                        Da(b.nodeName);
                        var e = !0;
                        break a;
                    }
                    catch (f) { }
                    e = !1;
                }
                e || (b = null);
            }
        }
        else
            "mouseover" ==
                c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
        this.relatedTarget = b;
        d ? (this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX, this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX, this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
        this.button = a.button;
        this.key = a.key || "";
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey =
            a.metaKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType = "string" === typeof a.pointerType ? a.pointerType : Xa[a.pointerType] || "";
        this.c = a;
        a.defaultPrevented && this.b();
    }
}
r(z, y);
var Xa = { 2: "touch", 3: "pen", 4: "mouse" };
z.prototype.b = function () { z.X.b.call(this); var a = this.c; if (a.preventDefault)
    a.preventDefault();
else if (a.returnValue = !1, Va)
    try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode)
            a.keyCode = -1;
    }
    catch (b) { } };
var A = "closure_listenable_" + (1E6 * Math.random() | 0), Ya = 0;
function Za(a, b, c, d, e) { this.listener = a; this.proxy = null; this.src = b; this.type = c; this.capture = !!d; this.ca = e; this.key = ++Ya; this.Y = this.Z = !1; }
function $a(a) { a.Y = !0; a.listener = null; a.proxy = null; a.src = null; a.ca = null; }
function ab(a) { this.src = a; this.a = {}; this.b = 0; }
ab.prototype.add = function (a, b, c, d, e) { var f = a.toString(); a = this.a[f]; a || (a = this.a[f] = [], this.b++); var g = bb(a, b, d, e); -1 < g ? (b = a[g], c || (b.Z = !1)) : (b = new Za(b, this.src, f, !!d, e), b.Z = c, a.push(b)); return b; };
function cb(a, b) { var c = b.type; if (c in a.a) {
    var d = a.a[c], e = ma(d, b), f;
    (f = 0 <= e) && Array.prototype.splice.call(d, e, 1);
    f && ($a(b), 0 == a.a[c].length && (delete a.a[c], a.b--));
} }
function bb(a, b, c, d) { for (var e = 0; e < a.length; ++e) {
    var f = a[e];
    if (!f.Y && f.listener == b && f.capture == !!c && f.ca == d)
        return e;
} return -1; }
var db = "closure_lm_" + (1E6 * Math.random() | 0), eb = {};
function gb(a, b, c, d, e) { if (d && d.once)
    return hb(a, b, c, d, e); if (Array.isArray(b)) {
    for (var f = 0; f < b.length; f++)
        gb(a, b[f], c, d, e);
    return null;
} c = ib(c); return a && a[A] ? a.va(b, c, n(d) ? !!d.capture : !!d, e) : jb(a, b, c, !1, d, e); }
function jb(a, b, c, d, e, f) {
    if (!b)
        throw Error("Invalid event type");
    var g = n(e) ? !!e.capture : !!e;
    if (g && !Ua)
        return null;
    var m = kb(a);
    m || (a[db] = m = new ab(a));
    c = m.add(b, c, d, g, f);
    if (c.proxy)
        return c;
    d = lb();
    c.proxy = d;
    d.src = a;
    d.listener = c;
    if (a.addEventListener)
        Wa || (e = g), void 0 === e && (e = !1), a.addEventListener(b.toString(), d, e);
    else if (a.attachEvent)
        a.attachEvent(mb(b.toString()), d);
    else if (a.addListener && a.removeListener)
        a.addListener(d);
    else
        throw Error("addEventListener and attachEvent are unavailable.");
    return c;
}
function lb() { var a = nb, b = Ua ? function (c) { return a.call(b.src, b.listener, c); } : function (c) { c = a.call(b.src, b.listener, c); if (!c)
    return c; }; return b; }
function hb(a, b, c, d, e) { if (Array.isArray(b)) {
    for (var f = 0; f < b.length; f++)
        hb(a, b[f], c, d, e);
    return null;
} c = ib(c); return a && a[A] ? a.wa(b, c, n(d) ? !!d.capture : !!d, e) : jb(a, b, c, !0, d, e); }
function ob(a, b, c, d, e) { if (Array.isArray(b))
    for (var f = 0; f < b.length; f++)
        ob(a, b[f], c, d, e);
else
    (d = n(d) ? !!d.capture : !!d, c = ib(c), a && a[A]) ? (a = a.c, b = String(b).toString(), b in a.a && (f = a.a[b], c = bb(f, c, d, e), -1 < c && ($a(f[c]), Array.prototype.splice.call(f, c, 1), 0 == f.length && (delete a.a[b], a.b--)))) : a && (a = kb(a)) && (b = a.a[b.toString()], a = -1, b && (a = bb(b, c, d, e)), (c = -1 < a ? b[a] : null) && pb(c)); }
function pb(a) { if ("number" !== typeof a && a && !a.Y) {
    var b = a.src;
    if (b && b[A])
        cb(b.c, a);
    else {
        var c = a.type, d = a.proxy;
        b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(mb(c), d) : b.addListener && b.removeListener && b.removeListener(d);
        (c = kb(b)) ? (cb(c, a), 0 == c.b && (c.src = null, b[db] = null)) : $a(a);
    }
} }
function mb(a) { return a in eb ? eb[a] : eb[a] = "on" + a; }
function qb(a, b) { var c = a.listener, d = a.ca || a.src; a.Z && pb(a); return c.call(d, b); }
function nb(a, b) { if (a.Y)
    return !0; if (!Ua) {
    if (!b)
        a: {
            b = ["window", "event"];
            for (var c = k, d = 0; d < b.length; d++)
                if (c = c[b[d]], null == c) {
                    b = null;
                    break a;
                }
            b = c;
        }
    b = new z(b, this);
    return qb(a, b);
} return qb(a, new z(b, this)); }
function kb(a) { a = a[db]; return a instanceof ab ? a : null; }
var sb = "__closure_events_fn_" + (1E9 * Math.random() >>> 0);
function ib(a) { if ("function" === typeof a)
    return a; a[sb] || (a[sb] = function (b) { return a.handleEvent(b); }); return a[sb]; }
function D() { t.call(this); this.c = new ab(this); this.J = this; this.C = null; }
r(D, t);
D.prototype[A] = !0;
h = D.prototype;
h.addEventListener = function (a, b, c, d) { gb(this, a, b, c, d); };
h.removeEventListener = function (a, b, c, d) { ob(this, a, b, c, d); };
function E(a, b) { var c, d = a.C; if (d)
    for (c = []; d; d = d.C)
        c.push(d); a = a.J; d = b.type || b; if ("string" === typeof b)
    b = new y(b, a);
else if (b instanceof y)
    b.target = b.target || a;
else {
    var e = b;
    b = new y(d, a);
    Ca(b, e);
} e = !0; if (c)
    for (var f = c.length - 1; 0 <= f; f--) {
        var g = b.a = c[f];
        e = tb(g, d, !0, b) && e;
    } g = b.a = a; e = tb(g, d, !0, b) && e; e = tb(g, d, !1, b) && e; if (c)
    for (f = 0; f < c.length; f++)
        g = b.a = c[f], e = tb(g, d, !1, b) && e; }
h.G = function () { D.X.G.call(this); if (this.c) {
    var a = this.c, c;
    for (c in a.a) {
        for (var d = a.a[c], e = 0; e < d.length; e++)
            $a(d[e]);
        delete a.a[c];
        a.b--;
    }
} this.C = null; };
h.va = function (a, b, c, d) { return this.c.add(String(a), b, !1, c, d); };
h.wa = function (a, b, c, d) { return this.c.add(String(a), b, !0, c, d); };
function tb(a, b, c, d) { b = a.c.a[String(b)]; if (!b)
    return !0; b = b.concat(); for (var e = !0, f = 0; f < b.length; ++f) {
    var g = b[f];
    if (g && !g.Y && g.capture == c) {
        var m = g.listener, l = g.ca || g.src;
        g.Z && cb(a.c, g);
        e = !1 !== m.call(l, d) && e;
    }
} return e && !d.defaultPrevented; }
var ub = k.JSON.stringify;
function vb() { this.b = this.a = null; }
var xb = new /** @class */ (function () {
    function class_1(a, b) {
        this.c = a;
        this.f = b;
        this.b = 0;
        this.a = null;
    }
    class_1.prototype.get = function () { var a; 0 < this.b ? (this.b--, a = this.a, this.a = a.next, a.next = null) : a = this.c(); return a; };
    return class_1;
}())(function () { return new wb; }, function (a) { a.reset(); });
vb.prototype.add = function (a, b) { var c = xb.get(); c.set(a, b); this.b ? this.b.next = c : this.a = c; this.b = c; };
function yb() { var a = zb, b = null; a.a && (b = a.a, a.a = a.a.next, a.a || (a.b = null), b.next = null); return b; }
function wb() { this.next = this.b = this.a = null; }
wb.prototype.set = function (a, b) { this.a = a; this.b = b; this.next = null; };
wb.prototype.reset = function () { this.next = this.b = this.a = null; };
function Ab(a) { k.setTimeout(function () { throw a; }, 0); }
function Bb(a, b) { Cb || Db(); Eb || (Cb(), Eb = !0); zb.add(a, b); }
var Cb;
function Db() { var a = k.Promise.resolve(void 0); Cb = function () { a.then(Fb); }; }
var Eb = !1, zb = new vb;
function Fb() { for (var a; a = yb();) {
    try {
        a.a.call(a.b);
    }
    catch (c) {
        Ab(c);
    }
    var b = xb;
    b.f(a);
    100 > b.b && (b.b++, a.next = b.a, b.a = a);
} Eb = !1; }
function Gb(a, b) { D.call(this); this.b = a || 1; this.a = b || k; this.f = p(this.Za, this); this.g = q(); }
r(Gb, D);
h = Gb.prototype;
h.aa = !1;
h.M = null;
h.Za = function () { if (this.aa) {
    var a = q() - this.g;
    0 < a && a < .8 * this.b ? this.M = this.a.setTimeout(this.f, this.b - a) : (this.M && (this.a.clearTimeout(this.M), this.M = null), E(this, "tick"), this.aa && (Hb(this), this.start()));
} };
h.start = function () { this.aa = !0; this.M || (this.M = this.a.setTimeout(this.f, this.b), this.g = q()); };
function Hb(a) { a.aa = !1; a.M && (a.a.clearTimeout(a.M), a.M = null); }
h.G = function () { Gb.X.G.call(this); Hb(this); delete this.a; };
function Ib(a, b, c) { if ("function" === typeof a)
    c && (a = p(a, c));
else if (a && "function" == typeof a.handleEvent)
    a = p(a.handleEvent, a);
else
    throw Error("Invalid listener argument"); return 2147483647 < Number(b) ? -1 : k.setTimeout(a, b || 0); }
function Jb(a) { a.a = Ib(function () { a.a = null; a.c && (a.c = !1, Jb(a)); }, a.h); var b = a.b; a.b = null; a.g.apply(null, b); }
var Kb = /** @class */ (function (_super) {
    __extends(Kb, _super);
    function Kb(a, b) {
        var _this = _super.call(this) || this;
        _this.g = a;
        _this.h = b;
        _this.b = null;
        _this.c = !1;
        _this.a = null;
        return _this;
    }
    Kb.prototype.f = function (a) { this.b = arguments; this.a ? this.c = !0 : Jb(this); };
    Kb.prototype.G = function () { _super.prototype.G.call(this); this.a && (k.clearTimeout(this.a), this.a = null, this.c = !1, this.b = null); };
    return Kb;
}(t));
function F(a) { t.call(this); this.b = a; this.a = {}; }
r(F, t);
var Lb = [];
function Mb(a, b, c, d) { Array.isArray(c) || (c && (Lb[0] = c.toString()), c = Lb); for (var e = 0; e < c.length; e++) {
    var f = gb(b, c[e], d || a.handleEvent, !1, a.b || a);
    if (!f)
        break;
    a.a[f.key] = f;
} }
function Nb(a) { za(a.a, function (b, c) { this.a.hasOwnProperty(c) && pb(b); }, a); a.a = {}; }
F.prototype.G = function () { F.X.G.call(this); Nb(this); };
F.prototype.handleEvent = function () { throw Error("EventHandler.handleEvent not implemented"); };
function Ob() { this.a = !0; }
function Pb(a, b, c, d, e, f) { a.info(function () { if (a.a)
    if (f) {
        var g = "";
        for (var m = f.split("&"), l = 0; l < m.length; l++) {
            var u = m[l].split("=");
            if (1 < u.length) {
                var C = u[0];
                u = u[1];
                var B = C.split("_");
                g = 2 <= B.length && "type" == B[1] ? g + (C + "=" + u + "&") : g + (C + "=redacted&");
            }
        }
    }
    else
        g = null;
else
    g = f; return "XMLHTTP REQ (" + d + ") [attempt " + e + "]: " + b + "\n" + c + "\n" + g; }); }
function Qb(a, b, c, d, e, f, g) { a.info(function () { return "XMLHTTP RESP (" + d + ") [ attempt " + e + "]: " + b + "\n" + c + "\n" + f + " " + g; }); }
function G(a, b, c, d) { a.info(function () { return "XMLHTTP TEXT (" + b + "): " + Rb(a, c) + (d ? " " + d : ""); }); }
function Sb(a, b) { a.info(function () { return "TIMEOUT: " + b; }); }
Ob.prototype.info = function () { };
function Rb(a, b) { if (!a.a)
    return b; if (!b)
    return null; try {
    var c = JSON.parse(b);
    if (c)
        for (a = 0; a < c.length; a++)
            if (Array.isArray(c[a])) {
                var d = c[a];
                if (!(2 > d.length)) {
                    var e = d[1];
                    if (Array.isArray(e) && !(1 > e.length)) {
                        var f = e[0];
                        if ("noop" != f && "stop" != f && "close" != f)
                            for (var g = 1; g < e.length; g++)
                                e[g] = "";
                    }
                }
            }
    return ub(c);
}
catch (m) {
    return b;
} }
var H = {}, Tb = null;
function Ub() { return Tb = Tb || new D; }
H.Fa = "serverreachability";
function Vb(a) { y.call(this, H.Fa, a); }
r(Vb, y);
function I(a) { var b = Ub(); E(b, new Vb(b, a)); }
H.STAT_EVENT = "statevent";
function Wb(a, b) { y.call(this, H.STAT_EVENT, a); this.stat = b; }
r(Wb, y);
function J(a) { var b = Ub(); E(b, new Wb(b, a)); }
H.Ga = "timingevent";
function Xb(a) { y.call(this, H.Ga, a); }
r(Xb, y);
function K(a, b) { if ("function" !== typeof a)
    throw Error("Fn must not be null and must be a function"); return k.setTimeout(function () { a(); }, b); }
var Yb = { NO_ERROR: 0, $a: 1, nb: 2, mb: 3, hb: 4, lb: 5, ob: 6, Da: 7, TIMEOUT: 8, rb: 9 };
var Zb = { fb: "complete", Bb: "success", Ea: "error", Da: "abort", tb: "ready", ub: "readystatechange", TIMEOUT: "timeout", pb: "incrementaldata", sb: "progress", ib: "downloadprogress", Jb: "uploadprogress" };
function $b() { }
$b.prototype.a = null;
function ac(a) { var b; (b = a.a) || (b = a.a = {}); return b; }
function bc() { }
var L = { OPEN: "a", eb: "b", Ea: "c", qb: "d" };
function cc() { y.call(this, "d"); }
r(cc, y);
function dc() { y.call(this, "c"); }
r(dc, y);
var ec;
function fc() { }
r(fc, $b);
ec = new fc;
function M(a, b, c, d) { this.g = a; this.c = b; this.f = c; this.S = d || 1; this.J = new F(this); this.P = gc; a = Ia ? 125 : void 0; this.R = new Gb(a); this.B = null; this.b = !1; this.j = this.l = this.i = this.H = this.u = this.T = this.o = null; this.s = []; this.a = null; this.D = 0; this.h = this.m = null; this.N = -1; this.A = !1; this.O = 0; this.F = null; this.V = this.C = this.U = this.I = !1; }
var gc = 45E3, hc = {}, ic = {};
h = M.prototype;
h.setTimeout = function (a) { this.P = a; };
function jc(a, b, c) { a.H = 1; a.i = kc(N(b)); a.j = c; a.I = !0; lc(a, null); }
function lc(a, b) { a.u = q(); mc(a); a.l = N(a.i); var c = a.l, d = a.S; Array.isArray(d) || (d = [String(d)]); nc(c.b, "t", d); a.D = 0; a.a = oc(a.g, a.g.C ? b : null); 0 < a.O && (a.F = new Kb(p(a.Ca, a, a.a), a.O)); Mb(a.J, a.a, "readystatechange", a.Xa); b = a.B ? Aa(a.B) : {}; a.j ? (a.m || (a.m = "POST"), b["Content-Type"] = "application/x-www-form-urlencoded", a.a.ba(a.l, a.m, a.j, b)) : (a.m = "GET", a.a.ba(a.l, a.m, null, b)); I(1); Pb(a.c, a.m, a.l, a.f, a.S, a.j); }
h.Xa = function (a) { a = a.target; var b = this.F; b && 3 == O(a) ? b.f() : this.Ca(a); };
h.Ca = function (a) {
    try {
        if (a == this.a)
            a: {
                var b = O(this.a), c = this.a.ua(), d = this.a.W();
                if (!(3 > b || 3 == b && !Ia && !this.a.$())) {
                    this.A || 4 != b || 7 == c || (8 == c || 0 >= d ? I(3) : I(2));
                    pc(this);
                    var e = this.a.W();
                    this.N = e;
                    var f = this.a.$();
                    this.b = 200 == e;
                    Qb(this.c, this.m, this.l, this.f, this.S, b, e);
                    if (this.b) {
                        if (this.U && !this.C) {
                            b: {
                                if (this.a) {
                                    var g, m = this.a;
                                    if ((g = m.a ? m.a.getResponseHeader("X-HTTP-Initial-Response") : null) && !sa(g)) {
                                        var l = g;
                                        break b;
                                    }
                                }
                                l = null;
                            }
                            if (l)
                                G(this.c, this.f, l, "Initial handshake response via X-HTTP-Initial-Response"),
                                    this.C = !0, qc(this, l);
                            else {
                                this.b = !1;
                                this.h = 3;
                                J(12);
                                P(this);
                                rc(this);
                                break a;
                            }
                        }
                        this.I ? (sc(this, b, f), Ia && this.b && 3 == b && (Mb(this.J, this.R, "tick", this.Wa), this.R.start())) : (G(this.c, this.f, f, null), qc(this, f));
                        4 == b && P(this);
                        this.b && !this.A && (4 == b ? uc(this.g, this) : (this.b = !1, mc(this)));
                    }
                    else
                        400 == e && 0 < f.indexOf("Unknown SID") ? (this.h = 3, J(12)) : (this.h = 0, J(13)), P(this), rc(this);
                }
            }
    }
    catch (u) { }
    finally { }
};
function sc(a, b, c) { for (var d = !0; !a.A && a.D < c.length;) {
    var e = vc(a, c);
    if (e == ic) {
        4 == b && (a.h = 4, J(14), d = !1);
        G(a.c, a.f, null, "[Incomplete Response]");
        break;
    }
    else if (e == hc) {
        a.h = 4;
        J(15);
        G(a.c, a.f, c, "[Invalid Chunk]");
        d = !1;
        break;
    }
    else
        G(a.c, a.f, e, null), qc(a, e);
} 4 == b && 0 == c.length && (a.h = 1, J(16), d = !1); a.b = a.b && d; d ? 0 < c.length && !a.V && (a.V = !0, b = a.g, b.a == a && b.U && !b.F && (b.c.info("Great, no buffering proxy detected. Bytes received: " + c.length), wc(b), b.F = !0, J(11))) : (G(a.c, a.f, c, "[Invalid Chunked Response]"), P(a), rc(a)); }
h.Wa = function () { if (this.a) {
    var a = O(this.a), b = this.a.$();
    this.D < b.length && (pc(this), sc(this, a, b), this.b && 4 != a && mc(this));
} };
function vc(a, b) { var c = a.D, d = b.indexOf("\n", c); if (-1 == d)
    return ic; c = Number(b.substring(c, d)); if (isNaN(c))
    return hc; d += 1; if (d + c > b.length)
    return ic; b = b.substr(d, c); a.D = d + c; return b; }
h.cancel = function () { this.A = !0; P(this); };
function mc(a) { a.T = q() + a.P; yc(a, a.P); }
function yc(a, b) { if (null != a.o)
    throw Error("WatchDog timer not null"); a.o = K(p(a.Va, a), b); }
function pc(a) { a.o && (k.clearTimeout(a.o), a.o = null); }
h.Va = function () { this.o = null; var a = q(); 0 <= a - this.T ? (Sb(this.c, this.l), 2 != this.H && (I(3), J(17)), P(this), this.h = 2, rc(this)) : yc(this, this.T - a); };
function rc(a) { 0 == a.g.v || a.A || uc(a.g, a); }
function P(a) { pc(a); var b = a.F; b && "function" == typeof b.ja && b.ja(); a.F = null; Hb(a.R); Nb(a.J); a.a && (b = a.a, a.a = null, b.abort(), b.ja()); }
function qc(a, b) {
    try {
        var c = a.g;
        if (0 != c.v && (c.a == a || zc(c.b, a)))
            if (c.I = a.N, !a.C && zc(c.b, a) && 3 == c.v) {
                try {
                    var d = c.ka.a.parse(b);
                }
                catch (tc) {
                    d = null;
                }
                if (Array.isArray(d) && 3 == d.length) {
                    var e = d;
                    if (0 == e[0])
                        a: {
                            if (!c.j) {
                                if (c.a)
                                    if (c.a.u + 3E3 < a.u)
                                        Ac(c), Bc(c);
                                    else
                                        break a;
                                Cc(c);
                                J(18);
                            }
                        }
                    else
                        c.oa = e[1], 0 < c.oa - c.P && 37500 > e[2] && c.H && 0 == c.o && !c.m && (c.m = K(p(c.Sa, c), 6E3));
                    if (1 >= Dc(c.b) && c.ea) {
                        try {
                            c.ea();
                        }
                        catch (tc) { }
                        c.ea = void 0;
                    }
                }
                else
                    Q(c, 11);
            }
            else if ((a.C || c.a == a) && Ac(c), !sa(b))
                for (b = d = c.ka.a.parse(b), d = 0; d < b.length; d++)
                    if (e =
                        b[d], c.P = e[0], e = e[1], 2 == c.v)
                        if ("c" == e[0]) {
                            c.J = e[1];
                            c.ga = e[2];
                            var f = e[3];
                            null != f && (c.ha = f, c.c.info("VER=" + c.ha));
                            var g = e[4];
                            null != g && (c.pa = g, c.c.info("SVER=" + c.pa));
                            var m = e[5];
                            if (null != m && "number" === typeof m && 0 < m) {
                                var l = 1.5 * m;
                                c.D = l;
                                c.c.info("backChannelRequestTimeoutMs_=" + l);
                            }
                            l = c;
                            var u = a.a;
                            if (u) {
                                var C = u.a ? u.a.getResponseHeader("X-Client-Wire-Protocol") : null;
                                if (C) {
                                    var B = l.b;
                                    !B.a && (v(C, "spdy") || v(C, "quic") || v(C, "h2")) && (B.f = B.g, B.a = new Set, B.b && (Ec(B, B.b), B.b = null));
                                }
                                if (l.A) {
                                    var rb = u.a ? u.a.getResponseHeader("X-HTTP-Session-Id") :
                                        null;
                                    rb && (l.na = rb, R(l.B, l.A, rb));
                                }
                            }
                            c.v = 3;
                            c.f && c.f.ta();
                            c.U && (c.N = q() - a.u, c.c.info("Handshake RTT: " + c.N + "ms"));
                            l = c;
                            var xa = a;
                            l.la = Fc(l, l.C ? l.ga : null, l.fa);
                            if (xa.C) {
                                Gc(l.b, xa);
                                var ya = xa, xc = l.D;
                                xc && ya.setTimeout(xc);
                                ya.o && (pc(ya), mc(ya));
                                l.a = xa;
                            }
                            else
                                Hc(l);
                            0 < c.g.length && Ic(c);
                        }
                        else
                            "stop" != e[0] && "close" != e[0] || Q(c, 7);
                    else
                        3 == c.v && ("stop" == e[0] || "close" == e[0] ? "stop" == e[0] ? Q(c, 7) : Jc(c) : "noop" != e[0] && c.f && c.f.sa(e), c.o = 0);
        I(4);
    }
    catch (tc) { }
}
function Kc(a) { if (a.K && "function" == typeof a.K)
    return a.K(); if ("string" === typeof a)
    return a.split(""); if (ba(a)) {
    for (var b = [], c = a.length, d = 0; d < c; d++)
        b.push(a[d]);
    return b;
} b = []; c = 0; for (d in a)
    b[c++] = a[d]; return a = b; }
function Lc(a, b) { if (a.forEach && "function" == typeof a.forEach)
    a.forEach(b, void 0);
else if (ba(a) || "string" === typeof a)
    na(a, b, void 0);
else {
    if (a.L && "function" == typeof a.L)
        var c = a.L();
    else if (a.K && "function" == typeof a.K)
        c = void 0;
    else if (ba(a) || "string" === typeof a) {
        c = [];
        for (var d = a.length, e = 0; e < d; e++)
            c.push(e);
    }
    else
        for (e in c = [], d = 0, a)
            c[d++] = e;
    d = Kc(a);
    e = d.length;
    for (var f = 0; f < e; f++)
        b.call(void 0, d[f], c && c[f], a);
} }
function S(a, b) { this.b = {}; this.a = []; this.c = 0; var c = arguments.length; if (1 < c) {
    if (c % 2)
        throw Error("Uneven number of arguments");
    for (var d = 0; d < c; d += 2)
        this.set(arguments[d], arguments[d + 1]);
}
else if (a)
    if (a instanceof S)
        for (c = a.L(), d = 0; d < c.length; d++)
            this.set(c[d], a.get(c[d]));
    else
        for (d in a)
            this.set(d, a[d]); }
h = S.prototype;
h.K = function () { Mc(this); for (var a = [], b = 0; b < this.a.length; b++)
    a.push(this.b[this.a[b]]); return a; };
h.L = function () { Mc(this); return this.a.concat(); };
function Mc(a) { if (a.c != a.a.length) {
    for (var b = 0, c = 0; b < a.a.length;) {
        var d = a.a[b];
        T(a.b, d) && (a.a[c++] = d);
        b++;
    }
    a.a.length = c;
} if (a.c != a.a.length) {
    var e = {};
    for (c = b = 0; b < a.a.length;)
        d = a.a[b], T(e, d) || (a.a[c++] = d, e[d] = 1), b++;
    a.a.length = c;
} }
h.get = function (a, b) { return T(this.b, a) ? this.b[a] : b; };
h.set = function (a, b) { T(this.b, a) || (this.c++, this.a.push(a)); this.b[a] = b; };
h.forEach = function (a, b) { for (var c = this.L(), d = 0; d < c.length; d++) {
    var e = c[d], f = this.get(e);
    a.call(b, f, e, this);
} };
function T(a, b) { return Object.prototype.hasOwnProperty.call(a, b); }
var Nc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
function Oc(a, b) { if (a) {
    a = a.split("&");
    for (var c = 0; c < a.length; c++) {
        var d = a[c].indexOf("="), e = null;
        if (0 <= d) {
            var f = a[c].substring(0, d);
            e = a[c].substring(d + 1);
        }
        else
            f = a[c];
        b(f, e ? decodeURIComponent(e.replace(/\+/g, " ")) : "");
    }
} }
function U(a, b) { this.c = this.j = this.f = ""; this.h = null; this.i = this.g = ""; this.a = !1; if (a instanceof U) {
    this.a = void 0 !== b ? b : a.a;
    Pc(this, a.f);
    this.j = a.j;
    Qc(this, a.c);
    Rc(this, a.h);
    this.g = a.g;
    b = a.b;
    var c = new Sc;
    c.c = b.c;
    b.a && (c.a = new S(b.a), c.b = b.b);
    Tc(this, c);
    this.i = a.i;
}
else
    a && (c = String(a).match(Nc)) ? (this.a = !!b, Pc(this, c[1] || "", !0), this.j = Uc(c[2] || ""), Qc(this, c[3] || "", !0), Rc(this, c[4]), this.g = Uc(c[5] || "", !0), Tc(this, c[6] || "", !0), this.i = Uc(c[7] || "")) : (this.a = !!b, this.b = new Sc(null, this.a)); }
U.prototype.toString = function () { var a = [], b = this.f; b && a.push(Vc(b, Wc, !0), ":"); var c = this.c; if (c || "file" == b)
    a.push("//"), (b = this.j) && a.push(Vc(b, Wc, !0), "@"), a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g, "%$1")), c = this.h, null != c && a.push(":", String(c)); if (c = this.g)
    this.c && "/" != c.charAt(0) && a.push("/"), a.push(Vc(c, "/" == c.charAt(0) ? Xc : Yc, !0)); (c = this.b.toString()) && a.push("?", c); (c = this.i) && a.push("#", Vc(c, Zc)); return a.join(""); };
function N(a) { return new U(a); }
function Pc(a, b, c) { a.f = c ? Uc(b, !0) : b; a.f && (a.f = a.f.replace(/:$/, "")); }
function Qc(a, b, c) { a.c = c ? Uc(b, !0) : b; }
function Rc(a, b) { if (b) {
    b = Number(b);
    if (isNaN(b) || 0 > b)
        throw Error("Bad port number " + b);
    a.h = b;
}
else
    a.h = null; }
function Tc(a, b, c) { b instanceof Sc ? (a.b = b, $c(a.b, a.a)) : (c || (b = Vc(b, ad)), a.b = new Sc(b, a.a)); }
function R(a, b, c) { a.b.set(b, c); }
function kc(a) { R(a, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ q()).toString(36)); return a; }
function bd(a) { return a instanceof U ? N(a) : new U(a, void 0); }
function cd(a, b, c, d) { var e = new U(null, void 0); a && Pc(e, a); b && Qc(e, b); c && Rc(e, c); d && (e.g = d); return e; }
function Uc(a, b) { return a ? b ? decodeURI(a.replace(/%25/g, "%2525")) : decodeURIComponent(a) : ""; }
function Vc(a, b, c) { return "string" === typeof a ? (a = encodeURI(a).replace(b, dd), c && (a = a.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), a) : null; }
function dd(a) { a = a.charCodeAt(0); return "%" + (a >> 4 & 15).toString(16) + (a & 15).toString(16); }
var Wc = /[#\/\?@]/g, Yc = /[#\?:]/g, Xc = /[#\?]/g, ad = /[#\?@]/g, Zc = /#/g;
function Sc(a, b) { this.b = this.a = null; this.c = a || null; this.f = !!b; }
function V(a) { a.a || (a.a = new S, a.b = 0, a.c && Oc(a.c, function (b, c) { a.add(decodeURIComponent(b.replace(/\+/g, " ")), c); })); }
h = Sc.prototype;
h.add = function (a, b) { V(this); this.c = null; a = W(this, a); var c = this.a.get(a); c || this.a.set(a, c = []); c.push(b); this.b += 1; return this; };
function ed(a, b) { V(a); b = W(a, b); T(a.a.b, b) && (a.c = null, a.b -= a.a.get(b).length, a = a.a, T(a.b, b) && (delete a.b[b], a.c--, a.a.length > 2 * a.c && Mc(a))); }
function fd(a, b) { V(a); b = W(a, b); return T(a.a.b, b); }
h.forEach = function (a, b) { V(this); this.a.forEach(function (c, d) { na(c, function (e) { a.call(b, e, d, this); }, this); }, this); };
h.L = function () { V(this); for (var a = this.a.K(), b = this.a.L(), c = [], d = 0; d < b.length; d++)
    for (var e = a[d], f = 0; f < e.length; f++)
        c.push(b[d]); return c; };
h.K = function (a) { V(this); var b = []; if ("string" === typeof a)
    fd(this, a) && (b = qa(b, this.a.get(W(this, a))));
else {
    a = this.a.K();
    for (var c = 0; c < a.length; c++)
        b = qa(b, a[c]);
} return b; };
h.set = function (a, b) { V(this); this.c = null; a = W(this, a); fd(this, a) && (this.b -= this.a.get(a).length); this.a.set(a, [b]); this.b += 1; return this; };
h.get = function (a, b) { if (!a)
    return b; a = this.K(a); return 0 < a.length ? String(a[0]) : b; };
function nc(a, b, c) { ed(a, b); 0 < c.length && (a.c = null, a.a.set(W(a, b), ra(c)), a.b += c.length); }
h.toString = function () { if (this.c)
    return this.c; if (!this.a)
    return ""; for (var a = [], b = this.a.L(), c = 0; c < b.length; c++) {
    var d = b[c], e = encodeURIComponent(String(d));
    d = this.K(d);
    for (var f = 0; f < d.length; f++) {
        var g = e;
        "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
        a.push(g);
    }
} return this.c = a.join("&"); };
function W(a, b) { b = String(b); a.f && (b = b.toLowerCase()); return b; }
function $c(a, b) { b && !a.f && (V(a), a.c = null, a.a.forEach(function (c, d) { var e = d.toLowerCase(); d != e && (ed(this, d), nc(this, e, c)); }, a)); a.f = b; }
var gd = /** @class */ (function () {
    function gd(a, b) {
        this.b = a;
        this.a = b;
    }
    return gd;
}());
function hd(a) { this.g = a || id; k.PerformanceNavigationTiming ? (a = k.performance.getEntriesByType("navigation"), a = 0 < a.length && ("hq" == a[0].nextHopProtocol || "h2" == a[0].nextHopProtocol)) : a = !!(k.ia && k.ia.ya && k.ia.ya() && k.ia.ya().Lb); this.f = a ? this.g : 1; this.a = null; 1 < this.f && (this.a = new Set); this.b = null; this.c = []; }
var id = 10;
function jd(a) { return a.b ? !0 : a.a ? a.a.size >= a.f : !1; }
function Dc(a) { return a.b ? 1 : a.a ? a.a.size : 0; }
function zc(a, b) { return a.b ? a.b == b : a.a ? a.a.has(b) : !1; }
function Ec(a, b) { a.a ? a.a.add(b) : a.b = b; }
function Gc(a, b) { a.b && a.b == b ? a.b = null : a.a && a.a.has(b) && a.a.delete(b); }
hd.prototype.cancel = function () {
    var e_1, _a;
    this.c = kd(this);
    if (this.b)
        this.b.cancel(), this.b = null;
    else if (this.a && 0 !== this.a.size) {
        try {
            for (var _b = __values(this.a.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var a = _c.value;
                a.cancel();
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.a.clear();
    }
};
function kd(a) {
    var e_2, _a;
    if (null != a.b)
        return a.c.concat(a.b.s);
    if (null != a.a && 0 !== a.a.size) {
        var b = a.c;
        try {
            for (var _b = __values(a.a.values()), _c = _b.next(); !_c.done; _c = _b.next()) {
                var c = _c.value;
                b = b.concat(c.s);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return b;
    }
    return ra(a.c);
}
function ld() { }
ld.prototype.stringify = function (a) { return k.JSON.stringify(a, void 0); };
ld.prototype.parse = function (a) { return k.JSON.parse(a, void 0); };
function md() { this.a = new ld; }
function nd(a, b, c) { var d = c || ""; try {
    Lc(a, function (e, f) { var g = e; n(e) && (g = ub(e)); b.push(d + f + "=" + encodeURIComponent(g)); });
}
catch (e) {
    throw b.push(d + "type=" + encodeURIComponent("_badmap")), e;
} }
function od(a, b) { var c = new Ob; if (k.Image) {
    var d = new Image;
    d.onload = ja(pd, c, d, "TestLoadImage: loaded", !0, b);
    d.onerror = ja(pd, c, d, "TestLoadImage: error", !1, b);
    d.onabort = ja(pd, c, d, "TestLoadImage: abort", !1, b);
    d.ontimeout = ja(pd, c, d, "TestLoadImage: timeout", !1, b);
    k.setTimeout(function () { if (d.ontimeout)
        d.ontimeout(); }, 1E4);
    d.src = a;
}
else
    b(!1); }
function pd(a, b, c, d, e) { try {
    b.onload = null, b.onerror = null, b.onabort = null, b.ontimeout = null, e(d);
}
catch (f) { } }
var qd = k.JSON.parse;
function X(a) { D.call(this); this.headers = new S; this.H = a || null; this.b = !1; this.s = this.a = null; this.B = ""; this.h = 0; this.f = ""; this.g = this.A = this.l = this.u = !1; this.o = 0; this.m = null; this.I = rd; this.D = this.F = !1; }
r(X, D);
var rd = "", sd = /^https?$/i, td = ["POST", "PUT"];
h = X.prototype;
h.ba = function (a, b, c, d) {
    if (this.a)
        throw Error("[goog.net.XhrIo] Object is active with another request=" + this.B + "; newUri=" + a);
    b = b ? b.toUpperCase() : "GET";
    this.B = a;
    this.f = "";
    this.h = 0;
    this.u = !1;
    this.b = !0;
    this.a = new XMLHttpRequest;
    this.s = this.H ? ac(this.H) : ac(ec);
    this.a.onreadystatechange = p(this.za, this);
    try {
        this.A = !0, this.a.open(b, String(a), !0), this.A = !1;
    }
    catch (f) {
        ud(this, f);
        return;
    }
    a = c || "";
    var e = new S(this.headers);
    d && Lc(d, function (f, g) { e.set(g, f); });
    d = oa(e.L());
    c = k.FormData && a instanceof k.FormData;
    !(0 <=
        ma(td, b)) || d || c || e.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    e.forEach(function (f, g) { this.a.setRequestHeader(g, f); }, this);
    this.I && (this.a.responseType = this.I);
    "withCredentials" in this.a && this.a.withCredentials !== this.F && (this.a.withCredentials = this.F);
    try {
        vd(this), 0 < this.o && ((this.D = wd(this.a)) ? (this.a.timeout = this.o, this.a.ontimeout = p(this.xa, this)) : this.m = Ib(this.xa, this.o, this)), this.l = !0, this.a.send(a), this.l = !1;
    }
    catch (f) {
        ud(this, f);
    }
};
function wd(a) { return x && Qa(9) && "number" === typeof a.timeout && void 0 !== a.ontimeout; }
function pa(a) { return "content-type" == a.toLowerCase(); }
h.xa = function () { "undefined" != typeof goog && this.a && (this.f = "Timed out after " + this.o + "ms, aborting", this.h = 8, E(this, "timeout"), this.abort(8)); };
function ud(a, b) { a.b = !1; a.a && (a.g = !0, a.a.abort(), a.g = !1); a.f = b; a.h = 5; xd(a); yd(a); }
function xd(a) { a.u || (a.u = !0, E(a, "complete"), E(a, "error")); }
h.abort = function (a) { this.a && this.b && (this.b = !1, this.g = !0, this.a.abort(), this.g = !1, this.h = a || 7, E(this, "complete"), E(this, "abort"), yd(this)); };
h.G = function () { this.a && (this.b && (this.b = !1, this.g = !0, this.a.abort(), this.g = !1), yd(this, !0)); X.X.G.call(this); };
h.za = function () { this.j || (this.A || this.l || this.g ? zd(this) : this.Ua()); };
h.Ua = function () { zd(this); };
function zd(a) {
    if (a.b && "undefined" != typeof goog && (!a.s[1] || 4 != O(a) || 2 != a.W()))
        if (a.l && 4 == O(a))
            Ib(a.za, 0, a);
        else if (E(a, "readystatechange"), 4 == O(a)) {
            a.b = !1;
            try {
                {
                    var l = a.W();
                    a: switch (l) {
                        case 200:
                        case 201:
                        case 202:
                        case 204:
                        case 206:
                        case 304:
                        case 1223:
                            var b = !0;
                            break a;
                        default: b = !1;
                    }
                    var c;
                    if (!(c = b)) {
                        var d;
                        if (d = 0 === l) {
                            var e = String(a.B).match(Nc)[1] || null;
                            if (!e && k.self && k.self.location) {
                                var f = k.self.location.protocol;
                                e = f.substr(0, f.length - 1);
                            }
                            d = !sd.test(e ? e.toLowerCase() : "");
                        }
                        c = d;
                    }
                    var g = c;
                }
                if (g)
                    E(a, "complete"),
                        E(a, "success");
                else {
                    a.h = 6;
                    try {
                        var m = 2 < O(a) ? a.a.statusText : "";
                    }
                    catch (l) {
                        m = "";
                    }
                    a.f = m + " [" + a.W() + "]";
                    xd(a);
                }
            }
            finally {
                yd(a);
            }
        }
}
function yd(a, b) { if (a.a) {
    vd(a);
    var c = a.a, d = a.s[0] ? aa : null;
    a.a = null;
    a.s = null;
    b || E(a, "ready");
    try {
        c.onreadystatechange = d;
    }
    catch (e) { }
} }
function vd(a) { a.a && a.D && (a.a.ontimeout = null); a.m && (k.clearTimeout(a.m), a.m = null); }
function O(a) { return a.a ? a.a.readyState : 0; }
h.W = function () { try {
    return 2 < O(this) ? this.a.status : -1;
}
catch (a) {
    return -1;
} };
h.$ = function () { try {
    return this.a ? this.a.responseText : "";
}
catch (a) {
    return "";
} };
h.Pa = function (a) { if (this.a) {
    var b = this.a.responseText;
    a && 0 == b.indexOf(a) && (b = b.substring(a.length));
    return qd(b);
} };
h.ua = function () { return this.h; };
h.Qa = function () { return "string" === typeof this.f ? this.f : String(this.f); };
function Ad(a) { var b = ""; za(a, function (c, d) { b += d; b += ":"; b += c; b += "\r\n"; }); return b; }
function Bd(a, b, c) { a: {
    for (d in c) {
        var d = !1;
        break a;
    }
    d = !0;
} d || (c = Ad(c), "string" === typeof a ? (null != c && encodeURIComponent(String(c))) : R(a, b, c)); }
function Cd(a, b, c) { return c && c.internalChannelParams ? c.internalChannelParams[a] || b : b; }
function Dd(a) {
    this.pa = 0;
    this.g = [];
    this.c = new Ob;
    this.ga = this.la = this.B = this.fa = this.a = this.na = this.A = this.V = this.i = this.O = this.l = null;
    this.Oa = this.R = 0;
    this.La = Cd("failFast", !1, a);
    this.H = this.m = this.j = this.h = this.f = null;
    this.S = !0;
    this.I = this.oa = this.P = -1;
    this.T = this.o = this.u = 0;
    this.Ha = Cd("baseRetryDelayMs", 5E3, a);
    this.Ra = Cd("retryDelaySeedMs", 1E4, a);
    this.Ma = Cd("forwardChannelMaxRetries", 2, a);
    this.ma = Cd("forwardChannelRequestTimeoutMs", 2E4, a);
    this.Na = a && a.g || void 0;
    this.D = void 0;
    this.C = a && a.supportsCrossDomainXhr ||
        !1;
    this.J = "";
    this.b = new hd(a && a.concurrentRequestLimit);
    this.ka = new md;
    this.da = a && a.fastHandshake || !1;
    this.Ia = a && a.b || !1;
    a && a.f && (this.c.a = !1);
    a && a.forceLongPolling && (this.S = !1);
    this.U = !this.da && this.S && a && a.detectBufferingProxy || !1;
    this.ea = void 0;
    this.N = 0;
    this.F = !1;
    this.s = null;
    (this.Ka = a && a.c || !1) && this.c.info("Opt-in to enable Chrome Origin Trials.");
}
h = Dd.prototype;
h.ha = 8;
h.v = 1;
function Jc(a) { Ed(a); if (3 == a.v) {
    var b = a.R++, c = N(a.B);
    R(c, "SID", a.J);
    R(c, "RID", b);
    R(c, "TYPE", "terminate");
    Fd(a, c);
    b = new M(a, a.c, b, void 0);
    b.H = 2;
    b.i = kc(N(c));
    c = !1;
    k.navigator && k.navigator.sendBeacon && (c = k.navigator.sendBeacon(b.i.toString(), ""));
    !c && k.Image && ((new Image).src = b.i, c = !0);
    c || (b.a = oc(b.g, null), b.a.ba(b.i));
    b.u = q();
    mc(b);
} Gd(a); }
function Bc(a) { a.a && (wc(a), a.a.cancel(), a.a = null); }
function Ed(a) { Bc(a); a.j && (k.clearTimeout(a.j), a.j = null); Ac(a); a.b.cancel(); a.h && ("number" === typeof a.h && k.clearTimeout(a.h), a.h = null); }
function Hd(a, b) { a.g.push(new gd(a.Oa++, b)); 3 == a.v && Ic(a); }
function Ic(a) { jd(a.b) || a.h || (a.h = !0, Bb(a.Ba, a), a.u = 0); }
function Id(a, b) { if (Dc(a.b) >= a.b.f - (a.h ? 1 : 0))
    return !1; if (a.h)
    return a.g = b.s.concat(a.g), !0; if (1 == a.v || 2 == a.v || a.u >= (a.La ? 0 : a.Ma))
    return !1; a.h = K(p(a.Ba, a, b), Jd(a, a.u)); a.u++; return !0; }
h.Ba = function (a) {
    if (this.h)
        if (this.h = null, 1 == this.v) {
            if (!a) {
                this.R = Math.floor(1E5 * Math.random());
                a = this.R++;
                var b = new M(this, this.c, a, void 0), c = this.l;
                this.O && (c ? (c = Aa(c), Ca(c, this.O)) : c = this.O);
                null === this.i && (b.B = c);
                var d;
                if (this.da)
                    a: {
                        for (var e = d = 0; e < this.g.length; e++) {
                            b: {
                                var f = this.g[e];
                                if ("__data__" in f.a && (f = f.a.__data__, "string" === typeof f)) {
                                    f = f.length;
                                    break b;
                                }
                                f = void 0;
                            }
                            if (void 0 === f)
                                break;
                            d += f;
                            if (4096 < d) {
                                d = e;
                                break a;
                            }
                            if (4096 === d || e === this.g.length - 1) {
                                d = e + 1;
                                break a;
                            }
                        }
                        d = 1E3;
                    }
                else
                    d = 1E3;
                d = Kd(this, b, d);
                e = N(this.B);
                R(e, "RID", a);
                R(e, "CVER", 22);
                this.A && R(e, "X-HTTP-Session-Id", this.A);
                Fd(this, e);
                this.i && c && Bd(e, this.i, c);
                Ec(this.b, b);
                this.Ia && R(e, "TYPE", "init");
                this.da ? (R(e, "$req", d), R(e, "SID", "null"), b.U = !0, jc(b, e, null)) : jc(b, e, d);
                this.v = 2;
            }
        }
        else
            3 == this.v && (a ? Ld(this, a) : 0 == this.g.length || jd(this.b) || Ld(this));
};
function Ld(a, b) { var c; b ? c = b.f : c = a.R++; var d = N(a.B); R(d, "SID", a.J); R(d, "RID", c); R(d, "AID", a.P); Fd(a, d); a.i && a.l && Bd(d, a.i, a.l); c = new M(a, a.c, c, a.u + 1); null === a.i && (c.B = a.l); b && (a.g = b.s.concat(a.g)); b = Kd(a, c, 1E3); c.setTimeout(Math.round(.5 * a.ma) + Math.round(.5 * a.ma * Math.random())); Ec(a.b, c); jc(c, d, b); }
function Fd(a, b) { a.f && Lc({}, function (c, d) { R(b, d, c); }); }
function Kd(a, b, c) { c = Math.min(a.g.length, c); var d = a.f ? p(a.f.Ja, a.f, a) : null; a: for (var e = a.g, f = -1;;) {
    var g = ["count=" + c];
    -1 == f ? 0 < c ? (f = e[0].b, g.push("ofs=" + f)) : f = 0 : g.push("ofs=" + f);
    for (var m = !0, l = 0; l < c; l++) {
        var u = e[l].b, C = e[l].a;
        u -= f;
        if (0 > u)
            f = Math.max(0, e[l].b - 100), m = !1;
        else
            try {
                nd(C, g, "req" + u + "_");
            }
            catch (B) {
                d && d(C);
            }
    }
    if (m) {
        d = g.join("&");
        break a;
    }
} a = a.g.splice(0, c); b.s = a; return d; }
function Hc(a) { a.a || a.j || (a.T = 1, Bb(a.Aa, a), a.o = 0); }
function Cc(a) { if (a.a || a.j || 3 <= a.o)
    return !1; a.T++; a.j = K(p(a.Aa, a), Jd(a, a.o)); a.o++; return !0; }
h.Aa = function () { this.j = null; Md(this); if (this.U && !(this.F || null == this.a || 0 >= this.N)) {
    var a = 2 * this.N;
    this.c.info("BP detection timer enabled: " + a);
    this.s = K(p(this.Ta, this), a);
} };
h.Ta = function () { this.s && (this.s = null, this.c.info("BP detection timeout reached."), this.c.info("Buffering proxy detected and switch to long-polling!"), this.H = !1, this.F = !0, J(10), Bc(this), Md(this)); };
function wc(a) { null != a.s && (k.clearTimeout(a.s), a.s = null); }
function Md(a) { a.a = new M(a, a.c, "rpc", a.T); null === a.i && (a.a.B = a.l); a.a.O = 0; var b = N(a.la); R(b, "RID", "rpc"); R(b, "SID", a.J); R(b, "CI", a.H ? "0" : "1"); R(b, "AID", a.P); Fd(a, b); R(b, "TYPE", "xmlhttp"); a.i && a.l && Bd(b, a.i, a.l); a.D && a.a.setTimeout(a.D); var c = a.a; a = a.ga; c.H = 1; c.i = kc(N(b)); c.j = null; c.I = !0; lc(c, a); }
h.Sa = function () { null != this.m && (this.m = null, Bc(this), Cc(this), J(19)); };
function Ac(a) { null != a.m && (k.clearTimeout(a.m), a.m = null); }
function uc(a, b) { var c = null; if (a.a == b) {
    Ac(a);
    wc(a);
    a.a = null;
    var d = 2;
}
else if (zc(a.b, b))
    c = b.s, Gc(a.b, b), d = 1;
else
    return; a.I = b.N; if (0 != a.v)
    if (b.b)
        if (1 == d) {
            c = b.j ? b.j.length : 0;
            b = q() - b.u;
            var e = a.u;
            d = Ub();
            E(d, new Xb(d, c, b, e));
            Ic(a);
        }
        else
            Hc(a);
    else if (e = b.h, 3 == e || 0 == e && 0 < a.I || !(1 == d && Id(a, b) || 2 == d && Cc(a)))
        switch (c && 0 < c.length && (b = a.b, b.c = b.c.concat(c)), e) {
            case 1:
                Q(a, 5);
                break;
            case 4:
                Q(a, 10);
                break;
            case 3:
                Q(a, 6);
                break;
            default: Q(a, 2);
        } }
function Jd(a, b) { var c = a.Ha + Math.floor(Math.random() * a.Ra); a.f || (c *= 2); return c * b; }
function Q(a, b) { a.c.info("Error code " + b); if (2 == b) {
    var c = null;
    a.f && (c = null);
    var d = p(a.Ya, a);
    c || (c = new U("//www.google.com/images/cleardot.gif"), k.location && "http" == k.location.protocol || Pc(c, "https"), kc(c));
    od(c.toString(), d);
}
else
    J(2); a.v = 0; a.f && a.f.ra(b); Gd(a); Ed(a); }
h.Ya = function (a) { a ? (this.c.info("Successfully pinged google.com"), J(2)) : (this.c.info("Failed to ping google.com"), J(1)); };
function Gd(a) { a.v = 0; a.I = -1; if (a.f) {
    if (0 != kd(a.b).length || 0 != a.g.length)
        a.b.c.length = 0, ra(a.g), a.g.length = 0;
    a.f.qa();
} }
function Fc(a, b, c) { var d = bd(c); if ("" != d.c)
    b && Qc(d, b + "." + d.c), Rc(d, d.h);
else {
    var e = k.location;
    d = cd(e.protocol, b ? b + "." + e.hostname : e.hostname, +e.port, c);
} a.V && za(a.V, function (f, g) { R(d, g, f); }); b = a.A; c = a.na; b && c && R(d, b, c); R(d, "VER", a.ha); Fd(a, d); return d; }
function oc(a, b) { if (b && !a.C)
    throw Error("Can't create secondary domain capable XhrIo object."); b = new X(a.Na); b.F = a.C; return b; }
function Nd() { }
h = Nd.prototype;
h.ta = function () { };
h.sa = function () { };
h.ra = function () { };
h.qa = function () { };
h.Ja = function () { };
function Od() { if (x && !(10 <= Number(Ta)))
    throw Error("Environmental error: no available transport."); }
Od.prototype.a = function (a, b) { return new Y(a, b); };
function Y(a, b) {
    D.call(this);
    this.a = new Dd(b);
    this.o = a;
    this.b = b && b.messageUrlParams || null;
    a = b && b.messageHeaders || null;
    b && b.clientProtocolHeaderRequired && (a ? a["X-Client-Protocol"] = "webchannel" : a = { "X-Client-Protocol": "webchannel" });
    this.a.l = a;
    a = b && b.initMessageHeaders || null;
    b && b.messageContentType && (a ? a["X-WebChannel-Content-Type"] = b.messageContentType : a = { "X-WebChannel-Content-Type": b.messageContentType });
    b && b.a && (a ? a["X-WebChannel-Client-Profile"] = b.a : a = { "X-WebChannel-Client-Profile": b.a });
    this.a.O =
        a;
    (a = b && b.httpHeadersOverwriteParam) && !sa(a) && (this.a.i = a);
    this.m = b && b.supportsCrossDomainXhr || !1;
    this.l = b && b.sendRawJson || !1;
    (b = b && b.httpSessionIdParam) && !sa(b) && (this.a.A = b, a = this.b, null !== a && b in a && (a = this.b, b in a && delete a[b]));
    this.f = new Z(this);
}
r(Y, D);
Y.prototype.g = function () { this.a.f = this.f; this.m && (this.a.C = !0); var a = this.a, b = this.o, c = this.b || void 0; J(0); a.fa = b; a.V = c || {}; a.H = a.S; a.B = Fc(a, null, a.fa); Ic(a); };
Y.prototype.close = function () { Jc(this.a); };
Y.prototype.h = function (a) { if ("string" === typeof a) {
    var b = {};
    b.__data__ = a;
    Hd(this.a, b);
}
else
    this.l ? (b = {}, b.__data__ = ub(a), Hd(this.a, b)) : Hd(this.a, a); };
Y.prototype.G = function () { this.a.f = null; delete this.f; Jc(this.a); delete this.a; Y.X.G.call(this); };
function Pd(a) { cc.call(this); var b = a.__sm__; if (b) {
    a: {
        for (var c in b) {
            a = c;
            break a;
        }
        a = void 0;
    }
    (this.c = a) ? (a = this.c, this.data = null !== b && a in b ? b[a] : void 0) : this.data = b;
}
else
    this.data = a; }
r(Pd, cc);
function Qd() { dc.call(this); this.status = 1; }
r(Qd, dc);
function Z(a) { this.a = a; }
r(Z, Nd);
Z.prototype.ta = function () { E(this.a, "a"); };
Z.prototype.sa = function (a) { E(this.a, new Pd(a)); };
Z.prototype.ra = function (a) { E(this.a, new Qd(a)); };
Z.prototype.qa = function () { E(this.a, "b"); }; /*

 Copyright 2017 Google LLC

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/
Od.prototype.createWebChannel = Od.prototype.a;
Y.prototype.send = Y.prototype.h;
Y.prototype.open = Y.prototype.g;
Y.prototype.close = Y.prototype.close;
Yb.NO_ERROR = 0;
Yb.TIMEOUT = 8;
Yb.HTTP_ERROR = 6;
Zb.COMPLETE = "complete";
bc.EventType = L;
L.OPEN = "a";
L.CLOSE = "b";
L.ERROR = "c";
L.MESSAGE = "d";
D.prototype.listen = D.prototype.va;
X.prototype.listenOnce = X.prototype.wa;
X.prototype.getLastError = X.prototype.Qa;
X.prototype.getLastErrorCode = X.prototype.ua;
X.prototype.getStatus = X.prototype.W;
X.prototype.getResponseJson = X.prototype.Pa;
X.prototype.getResponseText = X.prototype.$;
X.prototype.send = X.prototype.ba;
var createWebChannelTransport = function () { return new Od; };
var getStatEventTarget = function () { return Ub(); };
var ErrorCode = Yb;
var EventType = Zb;
var Event = H;
var Stat = { gb: 0, jb: 1, kb: 2, Db: 3, Ib: 4, Fb: 5, Gb: 6, Eb: 7, Cb: 8, Hb: 9, PROXY: 10, NOPROXY: 11, Ab: 12, wb: 13, xb: 14, vb: 15, yb: 16, zb: 17, bb: 18, ab: 19, cb: 20 };
var WebChannel = bc;
var XhrIo = X;

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics$1 = function(d, b) {
    extendStatics$1 = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics$1(d, b);
};

function __extends$1(d, b) {
    extendStatics$1(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

/* SNOWPACK PROCESS POLYFILL (based on https://github.com/calvinmetcalf/node-process-es6) */
function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
var cachedSetTimeout = defaultSetTimout;
var cachedClearTimeout = defaultClearTimeout;
var globalContext;
if (typeof window !== 'undefined') {
    globalContext = window;
} else if (typeof self !== 'undefined') {
    globalContext = self;
} else {
    globalContext = {};
}
if (typeof globalContext.setTimeout === 'function') {
    cachedSetTimeout = setTimeout;
}
if (typeof globalContext.clearTimeout === 'function') {
    cachedClearTimeout = clearTimeout;
}

function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
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
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
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
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
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
    while(len) {
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
function nextTick(fun) {
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
}
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
var title = 'browser';
var platform = 'browser';
var browser = true;
var argv = [];
var version = ''; // empty string to avoid regexp issues
var versions = {};
var release = {};
var config = {};

function noop() {}

var on = noop;
var addListener = noop;
var once = noop;
var off = noop;
var removeListener = noop;
var removeAllListeners = noop;
var emit = noop;

function binding(name) {
    throw new Error('process.binding is not supported');
}

function cwd () { return '/' }
function chdir (dir) {
    throw new Error('process.chdir is not supported');
}function umask() { return 0; }

// from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js
var performance = globalContext.performance || {};
var performanceNow =
  performance.now        ||
  performance.mozNow     ||
  performance.msNow      ||
  performance.oNow       ||
  performance.webkitNow  ||
  function(){ return (new Date()).getTime() };

// generate timestamp or delta
// see http://nodejs.org/api/process.html#process_process_hrtime
function hrtime(previousTimestamp){
  var clocktime = performanceNow.call(performance)*1e-3;
  var seconds = Math.floor(clocktime);
  var nanoseconds = Math.floor((clocktime%1)*1e9);
  if (previousTimestamp) {
    seconds = seconds - previousTimestamp[0];
    nanoseconds = nanoseconds - previousTimestamp[1];
    if (nanoseconds<0) {
      seconds--;
      nanoseconds += 1e9;
    }
  }
  return [seconds,nanoseconds]
}

var startTime = new Date();
function uptime() {
  var currentTime = new Date();
  var dif = currentTime - startTime;
  return dif / 1000;
}

var process = {
  nextTick: nextTick,
  title: title,
  browser: browser,
  env: {"NODE_ENV":"production"},
  argv: argv,
  version: version,
  versions: versions,
  on: on,
  addListener: addListener,
  once: once,
  off: off,
  removeListener: removeListener,
  removeAllListeners: removeAllListeners,
  emit: emit,
  binding: binding,
  cwd: cwd,
  chdir: chdir,
  umask: umask,
  hrtime: hrtime,
  platform: platform,
  release: release,
  config: config,
  uptime: uptime
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var _ = 
/**
     * Constructs a DatabaseInfo using the provided host, databaseId and
     * persistenceKey.
     *
     * @param databaseId - The database to use.
     * @param persistenceKey - A unique identifier for this Firestore's local
     * storage (used in conjunction with the databaseId).
     * @param host - The Firestore backend host to connect to.
     * @param ssl - Whether to use SSL when connecting.
     * @param forceLongPolling - Whether to use the forceLongPolling option
     * when using WebChannel as the network transport.
     * @param autoDetectLongPolling - Whether to use the detectBufferingProxy
     * option when using WebChannel as the network transport.
     */
function(t, e, n, r, i, o) {
    this.t = t, this.persistenceKey = e, this.host = n, this.ssl = r, this.forceLongPolling = i, 
    this.i = o;
}, I$1 = /** @class */ function() {
    function t(t, e) {
        this.projectId = t, this.database = e || "(default)";
    }
    return Object.defineProperty(t.prototype, "o", {
        get: function() {
            return "(default)" === this.database;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.isEqual = function(e) {
        return e instanceof t && e.projectId === this.projectId && e.database === this.database;
    }, t;
}(), E$1 = new Logger("@firebase/firestore");

/** The default database name for a project. */
/** Represents the database ID a Firestore client is associated with. */
// Helper methods are needed because variables can't be exported as read/write
function T$1() {
    return E$1.logLevel;
}

/**
 * Sets the verbosity of Cloud Firestore logs (debug, error, or silent).
 *
 * @param logLevel - The verbosity you set for activity and error logging. Can
 *   be any of the following values:
 *
 *   <ul>
 *     <li>`debug` for the most verbose logging level, primarily for
 *     debugging.</li>
 *     <li>`error` to log errors only.</li>
 *     <li><code>`silent` to turn off logging.</li>
 *   </ul>
 */ function N$1(t) {
    for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
    if (E$1.logLevel <= LogLevel.DEBUG) {
        var i = n.map(S$1);
        E$1.debug.apply(E$1, __spreadArrays([ "Firestore (8.2.9): " + t ], i));
    }
}

function A$1(t) {
    for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
    if (E$1.logLevel <= LogLevel.ERROR) {
        var i = n.map(S$1);
        E$1.error.apply(E$1, __spreadArrays([ "Firestore (8.2.9): " + t ], i));
    }
}

function D$1(t) {
    for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
    if (E$1.logLevel <= LogLevel.WARN) {
        var i = n.map(S$1);
        E$1.warn.apply(E$1, __spreadArrays([ "Firestore (8.2.9): " + t ], i));
    }
}

/**
 * Converts an additional log parameter to a string representation.
 */ function S$1(t) {
    if ("string" == typeof t) return t;
    try {
        return e = t, JSON.stringify(e);
    } catch (e) {
        // Converting to JSON failed, just log the object directly
        return t;
    }
    /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
    /** Formats an object as a JSON string, suitable for logging. */    var e;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Unconditionally fails, throwing an Error with the given message.
 * Messages are stripped in production builds.
 *
 * Returns `never` and can be used in expressions:
 * @example
 * let futureVar = fail('not implemented yet');
 */ function x$1(t) {
    void 0 === t && (t = "Unexpected state");
    // Log the failure in addition to throw an exception, just in case the
    // exception is swallowed.
        var e = "FIRESTORE (8.2.9) INTERNAL ASSERTION FAILED: " + t;
    // NOTE: We don't use FirestoreError here because these are internal failures
    // that cannot be handled by the user. (Also it would create a circular
    // dependency between the error and assert modules which doesn't work.)
        throw A$1(e), new Error(e)
    /**
 * Fails if the given assertion condition is false, throwing an Error with the
 * given message if it did.
 *
 * Messages are stripped in production builds.
 */;
}

function k$1(t, e) {
    t || x$1();
}

/**
 * Casts `obj` to `T`. In non-production builds, verifies that `obj` is an
 * instance of `T` before casting.
 */ function O$1(t, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
e) {
    return t;
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Generates `nBytes` of random bytes.
 *
 * If `nBytes < 0` , an error will be thrown.
 */ function P$1(t) {
    // Polyfills for IE and WebWorker by using `self` and `msCrypto` when `crypto` is not available.
    var e = 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    "undefined" != typeof self && (self.crypto || self.msCrypto), n = new Uint8Array(t);
    if (e && "function" == typeof e.getRandomValues) e.getRandomValues(n); else 
    // Falls back to Math.random
    for (var r = 0; r < t; r++) n[r] = Math.floor(256 * Math.random());
    return n;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var V$1 = /** @class */ function() {
    function t() {}
    return t.u = function() {
        for (
        // Alphanumeric characters
        var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = Math.floor(256 / t.length) * t.length, n = ""
        // The largest byte value that is a multiple of `char.length`.
        ; n.length < 20; ) for (var r = P$1(40), i = 0; i < r.length; ++i) 
        // Only accept values that are [0, maxMultiple), this ensures they can
        // be evenly mapped to indices of `chars` via a modulo operation.
        n.length < 20 && r[i] < e && (n += t.charAt(r[i] % t.length));
        return n;
    }, t;
}();

function C(t, e) {
    return t < e ? -1 : t > e ? 1 : 0;
}

/** Helper to compare arrays using isEqual(). */ function L$1(t, e, n) {
    return t.length === e.length && t.every((function(t, r) {
        return n(t, e[r]);
    }));
}

/**
 * Returns the immediate lexicographically-following string. This is useful to
 * construct an inclusive range for indexeddb iterators.
 */ function R$1(t) {
    // Return the input string, with an additional NUL byte appended.
    return t + "\0";
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Immutable class that represents a "proto" byte string.
 *
 * Proto byte strings can either be Base64-encoded strings or Uint8Arrays when
 * sent on the wire. This class abstracts away this differentiation by holding
 * the proto byte string in a common class that must be converted into a string
 * before being sent as a proto.
 */ var U$1 = /** @class */ function() {
    function t(t) {
        this.h = t;
    }
    return t.fromBase64String = function(e) {
        return new t(atob(e));
    }, t.fromUint8Array = function(e) {
        return new t(
        /**
 * Helper function to convert an Uint8array to a binary string.
 */
        function(t) {
            for (var e = "", n = 0; n < t.length; ++n) e += String.fromCharCode(t[n]);
            return e;
        }(e));
    }, t.prototype.toBase64 = function() {
        return t = this.h, btoa(t);
        /** Converts a binary string to a Base64 encoded string. */        var t;
        /** True if and only if the Base64 conversion functions are available. */    }, 
    t.prototype.toUint8Array = function() {
        return function(t) {
            for (var e = new Uint8Array(t.length), n = 0; n < t.length; n++) e[n] = t.charCodeAt(n);
            return e;
        }(this.h);
    }, t.prototype.l = function() {
        return 2 * this.h.length;
    }, t.prototype._ = function(t) {
        return C(this.h, t.h);
    }, t.prototype.isEqual = function(t) {
        return this.h === t.h;
    }, t;
}();

U$1.T = new U$1("");

var M$1 = {
    // Causes are copied from:
    // https://github.com/grpc/grpc/blob/bceec94ea4fc5f0085d81235d8e1c06798dc341a/include/grpc%2B%2B/impl/codegen/status_code_enum.h
    /** Not an error; returned on success. */
    OK: "ok",
    /** The operation was cancelled (typically by the caller). */
    CANCELLED: "cancelled",
    /** Unknown error or an error from a different error domain. */
    UNKNOWN: "unknown",
    /**
     * Client specified an invalid argument. Note that this differs from
     * FAILED_PRECONDITION. INVALID_ARGUMENT indicates arguments that are
     * problematic regardless of the state of the system (e.g., a malformed file
     * name).
     */
    INVALID_ARGUMENT: "invalid-argument",
    /**
     * Deadline expired before operation could complete. For operations that
     * change the state of the system, this error may be returned even if the
     * operation has completed successfully. For example, a successful response
     * from a server could have been delayed long enough for the deadline to
     * expire.
     */
    DEADLINE_EXCEEDED: "deadline-exceeded",
    /** Some requested entity (e.g., file or directory) was not found. */
    NOT_FOUND: "not-found",
    /**
     * Some entity that we attempted to create (e.g., file or directory) already
     * exists.
     */
    ALREADY_EXISTS: "already-exists",
    /**
     * The caller does not have permission to execute the specified operation.
     * PERMISSION_DENIED must not be used for rejections caused by exhausting
     * some resource (use RESOURCE_EXHAUSTED instead for those errors).
     * PERMISSION_DENIED must not be used if the caller can not be identified
     * (use UNAUTHENTICATED instead for those errors).
     */
    PERMISSION_DENIED: "permission-denied",
    /**
     * The request does not have valid authentication credentials for the
     * operation.
     */
    UNAUTHENTICATED: "unauthenticated",
    /**
     * Some resource has been exhausted, perhaps a per-user quota, or perhaps the
     * entire file system is out of space.
     */
    RESOURCE_EXHAUSTED: "resource-exhausted",
    /**
     * Operation was rejected because the system is not in a state required for
     * the operation's execution. For example, directory to be deleted may be
     * non-empty, an rmdir operation is applied to a non-directory, etc.
     *
     * A litmus test that may help a service implementor in deciding
     * between FAILED_PRECONDITION, ABORTED, and UNAVAILABLE:
     *  (a) Use UNAVAILABLE if the client can retry just the failing call.
     *  (b) Use ABORTED if the client should retry at a higher-level
     *      (e.g., restarting a read-modify-write sequence).
     *  (c) Use FAILED_PRECONDITION if the client should not retry until
     *      the system state has been explicitly fixed. E.g., if an "rmdir"
     *      fails because the directory is non-empty, FAILED_PRECONDITION
     *      should be returned since the client should not retry unless
     *      they have first fixed up the directory by deleting files from it.
     *  (d) Use FAILED_PRECONDITION if the client performs conditional
     *      REST Get/Update/Delete on a resource and the resource on the
     *      server does not match the condition. E.g., conflicting
     *      read-modify-write on the same resource.
     */
    FAILED_PRECONDITION: "failed-precondition",
    /**
     * The operation was aborted, typically due to a concurrency issue like
     * sequencer check failures, transaction aborts, etc.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
     * and UNAVAILABLE.
     */
    ABORTED: "aborted",
    /**
     * Operation was attempted past the valid range. E.g., seeking or reading
     * past end of file.
     *
     * Unlike INVALID_ARGUMENT, this error indicates a problem that may be fixed
     * if the system state changes. For example, a 32-bit file system will
     * generate INVALID_ARGUMENT if asked to read at an offset that is not in the
     * range [0,2^32-1], but it will generate OUT_OF_RANGE if asked to read from
     * an offset past the current file size.
     *
     * There is a fair bit of overlap between FAILED_PRECONDITION and
     * OUT_OF_RANGE. We recommend using OUT_OF_RANGE (the more specific error)
     * when it applies so that callers who are iterating through a space can
     * easily look for an OUT_OF_RANGE error to detect when they are done.
     */
    OUT_OF_RANGE: "out-of-range",
    /** Operation is not implemented or not supported/enabled in this service. */
    UNIMPLEMENTED: "unimplemented",
    /**
     * Internal errors. Means some invariants expected by underlying System has
     * been broken. If you see one of these errors, Something is very broken.
     */
    INTERNAL: "internal",
    /**
     * The service is currently unavailable. This is a most likely a transient
     * condition and may be corrected by retrying with a backoff.
     *
     * See litmus test above for deciding between FAILED_PRECONDITION, ABORTED,
     * and UNAVAILABLE.
     */
    UNAVAILABLE: "unavailable",
    /** Unrecoverable data loss or corruption. */
    DATA_LOSS: "data-loss"
}, q$1 = /** @class */ function(t) {
    /** @hideconstructor */
    function e(e, n) {
        var r = this;
        return (r = t.call(this, n) || this).code = e, r.message = n, r.name = "FirebaseError", 
        // HACK: We write a toString property directly because Error is not a real
        // class and so inheritance does not work correctly. We could alternatively
        // do the same "back-door inheritance" trick that FirebaseError does.
        r.toString = function() {
            return r.name + ": [code=" + r.code + "]: " + r.message;
        }, r;
    }
    return __extends$1(e, t), e;
}(Error), F$1 = /** @class */ function() {
    /** @hideconstructor */
    function t(t) {
        this.I = t;
    }
    /**
     * Creates a new `Bytes` object from the given Base64 string, converting it to
     * bytes.
     *
     * @param base64 - The Base64 string used to create the `Bytes` object.
     */    return t.fromBase64String = function(e) {
        try {
            return new t(U$1.fromBase64String(e));
        } catch (e) {
            throw new q$1(M$1.INVALID_ARGUMENT, "Failed to construct data from Base64 string: " + e);
        }
    }, 
    /**
     * Creates a new `Bytes` object from the given Uint8Array.
     *
     * @param array - The Uint8Array used to create the `Bytes` object.
     */
    t.fromUint8Array = function(e) {
        return new t(U$1.fromUint8Array(e));
    }, 
    /**
     * Returns the underlying bytes as a Base64-encoded string.
     *
     * @returns The Base64-encoded string created from the `Bytes` object.
     */
    t.prototype.toBase64 = function() {
        return this.I.toBase64();
    }, 
    /**
     * Returns the underlying bytes in a new `Uint8Array`.
     *
     * @returns The Uint8Array created from the `Bytes` object.
     */
    t.prototype.toUint8Array = function() {
        return this.I.toUint8Array();
    }, 
    /**
     * Returns a string representation of the `Bytes` object.
     *
     * @returns A string representation of the `Bytes` object.
     */
    t.prototype.toString = function() {
        return "Bytes(base64: " + this.toBase64() + ")";
    }, 
    /**
     * Returns true if this `Bytes` object is equal to the provided one.
     *
     * @param other - The `Bytes` object to compare against.
     * @returns true if this `Bytes` object is equal to the provided one.
     */
    t.prototype.isEqual = function(t) {
        return this.I.isEqual(t.I);
    }, t;
}(), j = /** @class */ function() {
    function t(t) {
        this.uid = t;
    }
    return t.prototype.m = function() {
        return null != this.uid;
    }, 
    /**
     * Returns a key representing this user, suitable for inclusion in a
     * dictionary.
     */
    t.prototype.A = function() {
        return this.m() ? "uid:" + this.uid : "anonymous-user";
    }, t.prototype.isEqual = function(t) {
        return t.uid === this.uid;
    }, t;
}();

/** An error returned by a Firestore operation. */
/** A user with a null UID. */ j.UNAUTHENTICATED = new j(null), 
// TODO(mikelehen): Look into getting a proper uid-equivalent for
// non-FirebaseAuth providers.
j.R = new j("google-credentials-uid"), j.P = new j("first-party-uid");

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var z$1 = function(t, e) {
    this.user = e, this.type = "OAuth", this.g = {}, 
    // Set the headers using Object Literal notation to avoid minification
    this.g.Authorization = "Bearer " + t;
}, G$1 = /** @class */ function() {
    function t() {
        /**
         * Stores the listener registered with setChangeListener()
         * This isn't actually necessary since the UID never changes, but we use this
         * to verify the listen contract is adhered to in tests.
         */
        this.V = null;
    }
    return t.prototype.getToken = function() {
        return Promise.resolve(null);
    }, t.prototype.p = function() {}, t.prototype.v = function(t) {
        this.V = t, 
        // Fire with initial user.
        t(j.UNAUTHENTICATED);
    }, t.prototype.S = function() {
        this.V = null;
    }, t;
}(), B = /** @class */ function() {
    function t(t) {
        var e = this;
        /**
         * The auth token listener registered with FirebaseApp, retained here so we
         * can unregister it.
         */        this.D = null, 
        /** Tracks the current User. */
        this.currentUser = j.UNAUTHENTICATED, this.C = !1, 
        /**
             * Counter used to detect if the token changed while a getToken request was
             * outstanding.
             */
        this.N = 0, 
        /** The listener registered with setChangeListener(). */
        this.V = null, this.forceRefresh = !1, this.D = function() {
            e.N++, e.currentUser = e.$(), e.C = !0, e.V && e.V(e.currentUser);
        }, this.N = 0, this.auth = t.getImmediate({
            optional: !0
        }), this.auth ? this.auth.addAuthTokenListener(this.D) : (
        // if auth is not available, invoke tokenListener once with null token
        this.D(null), t.get().then((function(t) {
            e.auth = t, e.D && 
            // tokenListener can be removed by removeChangeListener()
            e.auth.addAuthTokenListener(e.D);
        }), (function() {})));
    }
    return t.prototype.getToken = function() {
        var t = this, e = this.N, n = this.forceRefresh;
        // Take note of the current value of the tokenCounter so that this method
        // can fail (with an ABORTED error) if there is a token change while the
        // request is outstanding.
                return this.forceRefresh = !1, this.auth ? this.auth.getToken(n).then((function(n) {
            // Cancel the request since the token changed while the request was
            // outstanding so the response is potentially for a previous user (which
            // user, we can't be sure).
            return t.N !== e ? (N$1("FirebaseCredentialsProvider", "getToken aborted due to token change."), 
            t.getToken()) : n ? (k$1("string" == typeof n.accessToken), new z$1(n.accessToken, t.currentUser)) : null;
        })) : Promise.resolve(null);
    }, t.prototype.p = function() {
        this.forceRefresh = !0;
    }, t.prototype.v = function(t) {
        this.V = t, 
        // Fire the initial event
        this.C && t(this.currentUser);
    }, t.prototype.S = function() {
        this.auth && this.auth.removeAuthTokenListener(this.D), this.D = null, this.V = null;
    }, 
    // Auth.getUid() can return null even with a user logged in. It is because
    // getUid() is synchronous, but the auth code populating Uid is asynchronous.
    // This method should only be called in the AuthTokenListener callback
    // to guarantee to get the actual user.
    t.prototype.$ = function() {
        var t = this.auth && this.auth.getUid();
        return k$1(null === t || "string" == typeof t), new j(t);
    }, t;
}(), Q$1 = /** @class */ function() {
    function t(t, e) {
        this.F = t, this.O = e, this.type = "FirstParty", this.user = j.P;
    }
    return Object.defineProperty(t.prototype, "g", {
        get: function() {
            var t = {
                "X-Goog-AuthUser": this.O
            }, e = this.F.auth.getAuthHeaderValueForFirstParty([]);
            // Use array notation to prevent minification
                        return e && (t.Authorization = e), t;
        },
        enumerable: !1,
        configurable: !0
    }), t;
}(), Y$1 = /** @class */ function() {
    function t(t, e) {
        this.F = t, this.O = e;
    }
    return t.prototype.getToken = function() {
        return Promise.resolve(new Q$1(this.F, this.O));
    }, t.prototype.v = function(t) {
        // Fire with initial uid.
        t(j.P);
    }, t.prototype.S = function() {}, t.prototype.p = function() {}, t;
}(), H$1 = /** @class */ function() {
    function t(t, e) {
        var n = this;
        this.previousValue = t, e && (e.k = function(t) {
            return n.M(t);
        }, this.L = function(t) {
            return e.B(t);
        });
    }
    return t.prototype.M = function(t) {
        return this.previousValue = Math.max(t, this.previousValue), this.previousValue;
    }, t.prototype.next = function() {
        var t = ++this.previousValue;
        return this.L && this.L(t), t;
    }, t;
}();

/** A CredentialsProvider that always yields an empty token. */ H$1.q = -1;

/**
 * A `Timestamp` represents a point in time independent of any time zone or
 * calendar, represented as seconds and fractions of seconds at nanosecond
 * resolution in UTC Epoch time.
 *
 * It is encoded using the Proleptic Gregorian Calendar which extends the
 * Gregorian calendar backwards to year one. It is encoded assuming all minutes
 * are 60 seconds long, i.e. leap seconds are "smeared" so that no leap second
 * table is needed for interpretation. Range is from 0001-01-01T00:00:00Z to
 * 9999-12-31T23:59:59.999999999Z.
 *
 * For examples and further specifications, refer to the
 * {@link https://github.com/google/protobuf/blob/master/src/google/protobuf/timestamp.proto | Timestamp definition}.
 */
var K$1 = /** @class */ function() {
    /**
     * Creates a new timestamp.
     *
     * @param seconds - The number of seconds of UTC time since Unix epoch
     *     1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to
     *     9999-12-31T23:59:59Z inclusive.
     * @param nanoseconds - The non-negative fractions of a second at nanosecond
     *     resolution. Negative second values with fractions must still have
     *     non-negative nanoseconds values that count forward in time. Must be
     *     from 0 to 999,999,999 inclusive.
     */
    function t(t, e) {
        if (this.seconds = t, this.nanoseconds = e, e < 0) throw new q$1(M$1.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
        if (e >= 1e9) throw new q$1(M$1.INVALID_ARGUMENT, "Timestamp nanoseconds out of range: " + e);
        if (t < -62135596800) throw new q$1(M$1.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
        // This will break in the year 10,000.
                if (t >= 253402300800) throw new q$1(M$1.INVALID_ARGUMENT, "Timestamp seconds out of range: " + t);
    }
    /**
     * Creates a new timestamp with the current date, with millisecond precision.
     *
     * @returns a new timestamp representing the current date.
     */    return t.now = function() {
        return t.fromMillis(Date.now());
    }, 
    /**
     * Creates a new timestamp from the given date.
     *
     * @param date - The date to initialize the `Timestamp` from.
     * @returns A new `Timestamp` representing the same point in time as the given
     *     date.
     */
    t.fromDate = function(e) {
        return t.fromMillis(e.getTime());
    }, 
    /**
     * Creates a new timestamp from the given number of milliseconds.
     *
     * @param milliseconds - Number of milliseconds since Unix epoch
     *     1970-01-01T00:00:00Z.
     * @returns A new `Timestamp` representing the same point in time as the given
     *     number of milliseconds.
     */
    t.fromMillis = function(e) {
        var n = Math.floor(e / 1e3);
        return new t(n, 1e6 * (e - 1e3 * n));
    }, 
    /**
     * Converts a `Timestamp` to a JavaScript `Date` object. This conversion causes
     * a loss of precision since `Date` objects only support millisecond precision.
     *
     * @returns JavaScript `Date` object representing the same point in time as
     *     this `Timestamp`, with millisecond precision.
     */
    t.prototype.toDate = function() {
        return new Date(this.toMillis());
    }, 
    /**
     * Converts a `Timestamp` to a numeric timestamp (in milliseconds since
     * epoch). This operation causes a loss of precision.
     *
     * @returns The point in time corresponding to this timestamp, represented as
     *     the number of milliseconds since Unix epoch 1970-01-01T00:00:00Z.
     */
    t.prototype.toMillis = function() {
        return 1e3 * this.seconds + this.nanoseconds / 1e6;
    }, t.prototype.U = function(t) {
        return this.seconds === t.seconds ? C(this.nanoseconds, t.nanoseconds) : C(this.seconds, t.seconds);
    }, 
    /**
     * Returns true if this `Timestamp` is equal to the provided one.
     *
     * @param other - The `Timestamp` to compare against.
     * @returns true if this `Timestamp` is equal to the provided one.
     */
    t.prototype.isEqual = function(t) {
        return t.seconds === this.seconds && t.nanoseconds === this.nanoseconds;
    }, t.prototype.toString = function() {
        return "Timestamp(seconds=" + this.seconds + ", nanoseconds=" + this.nanoseconds + ")";
    }, t.prototype.toJSON = function() {
        return {
            seconds: this.seconds,
            nanoseconds: this.nanoseconds
        };
    }, 
    /**
     * Converts this object to a primitive string, which allows Timestamp objects to be compared
     * using the `>`, `<=`, `>=` and `>` operators.
     */
    t.prototype.valueOf = function() {
        // This method returns a string of the form <seconds>.<nanoseconds> where <seconds> is
        // translated to have a non-negative value and both <seconds> and <nanoseconds> are left-padded
        // with zeroes to be a consistent length. Strings with this format then have a lexiographical
        // ordering that matches the expected ordering. The <seconds> translation is done to avoid
        // having a leading negative sign (i.e. a leading '-' character) in its string representation,
        // which would affect its lexiographical ordering.
        var t = this.seconds - -62135596800;
        // Note: Up to 12 decimal digits are required to represent all valid 'seconds' values.
                return String(t).padStart(12, "0") + "." + String(this.nanoseconds).padStart(9, "0");
    }, t;
}(), X$1 = /** @class */ function() {
    function t(t) {
        this.timestamp = t;
    }
    return t.K = function(e) {
        return new t(e);
    }, t.min = function() {
        return new t(new K$1(0, 0));
    }, t.prototype._ = function(t) {
        return this.timestamp.U(t.timestamp);
    }, t.prototype.isEqual = function(t) {
        return this.timestamp.isEqual(t.timestamp);
    }, 
    /** Returns a number representation of the version for use in spec tests. */ t.prototype.W = function() {
        // Convert to microseconds.
        return 1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3;
    }, t.prototype.toString = function() {
        return "SnapshotVersion(" + this.timestamp.toString() + ")";
    }, t.prototype.j = function() {
        return this.timestamp;
    }, t;
}(), W$1 = /** @class */ function() {
    function t(t, e, n) {
        void 0 === e ? e = 0 : e > t.length && x$1(), void 0 === n ? n = t.length - e : n > t.length - e && x$1(), 
        this.segments = t, this.offset = e, this.G = n;
    }
    return Object.defineProperty(t.prototype, "length", {
        get: function() {
            return this.G;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.isEqual = function(e) {
        return 0 === t.H(this, e);
    }, t.prototype.child = function(e) {
        var n = this.segments.slice(this.offset, this.limit());
        return e instanceof t ? e.forEach((function(t) {
            n.push(t);
        })) : n.push(e), this.J(n);
    }, 
    /** The index of one past the last segment of the path. */ t.prototype.limit = function() {
        return this.offset + this.length;
    }, t.prototype.Y = function(t) {
        return t = void 0 === t ? 1 : t, this.J(this.segments, this.offset + t, this.length - t);
    }, t.prototype.X = function() {
        return this.J(this.segments, this.offset, this.length - 1);
    }, t.prototype.Z = function() {
        return this.segments[this.offset];
    }, t.prototype.tt = function() {
        return this.get(this.length - 1);
    }, t.prototype.get = function(t) {
        return this.segments[this.offset + t];
    }, t.prototype.et = function() {
        return 0 === this.length;
    }, t.prototype.nt = function(t) {
        if (t.length < this.length) return !1;
        for (var e = 0; e < this.length; e++) if (this.get(e) !== t.get(e)) return !1;
        return !0;
    }, t.prototype.st = function(t) {
        if (this.length + 1 !== t.length) return !1;
        for (var e = 0; e < this.length; e++) if (this.get(e) !== t.get(e)) return !1;
        return !0;
    }, t.prototype.forEach = function(t) {
        for (var e = this.offset, n = this.limit(); e < n; e++) t(this.segments[e]);
    }, t.prototype.it = function() {
        return this.segments.slice(this.offset, this.limit());
    }, t.H = function(t, e) {
        for (var n = Math.min(t.length, e.length), r = 0; r < n; r++) {
            var i = t.get(r), o = e.get(r);
            if (i < o) return -1;
            if (i > o) return 1;
        }
        return t.length < e.length ? -1 : t.length > e.length ? 1 : 0;
    }, t;
}(), Z$1 = /** @class */ function(t) {
    function e() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return __extends$1(e, t), e.prototype.J = function(t, n, r) {
        return new e(t, n, r);
    }, e.prototype.rt = function() {
        // NOTE: The client is ignorant of any path segments containing escape
        // sequences (e.g. __id123__) and just passes them through raw (they exist
        // for legacy reasons and should not be used frequently).
        return this.it().join("/");
    }, e.prototype.toString = function() {
        return this.rt();
    }, 
    /**
     * Creates a resource path from the given slash-delimited string. If multiple
     * arguments are provided, all components are combined. Leading and trailing
     * slashes from all components are ignored.
     */
    e.ot = function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        // NOTE: The client is ignorant of any path segments containing escape
        // sequences (e.g. __id123__) and just passes them through raw (they exist
        // for legacy reasons and should not be used frequently).
                for (var r = [], i = 0, o = t; i < o.length; i++) {
            var u = o[i];
            if (u.indexOf("//") >= 0) throw new q$1(M$1.INVALID_ARGUMENT, "Invalid segment (" + u + "). Paths must not contain // in them.");
            // Strip leading and traling slashed.
                        r.push.apply(r, u.split("/").filter((function(t) {
                return t.length > 0;
            })));
        }
        return new e(r);
    }, e.ct = function() {
        return new e([]);
    }, e;
}(W$1), J$1 = /^[_a-zA-Z][_a-zA-Z0-9]*$/, $ = /** @class */ function(t) {
    function e() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return __extends$1(e, t), e.prototype.J = function(t, n, r) {
        return new e(t, n, r);
    }, 
    /**
     * Returns true if the string could be used as a segment in a field path
     * without escaping.
     */
    e.at = function(t) {
        return J$1.test(t);
    }, e.prototype.rt = function() {
        return this.it().map((function(t) {
            return t = t.replace(/\\/g, "\\\\").replace(/`/g, "\\`"), e.at(t) || (t = "`" + t + "`"), 
            t;
        })).join(".");
    }, e.prototype.toString = function() {
        return this.rt();
    }, 
    /**
     * Returns true if this field references the key of a document.
     */
    e.prototype.ut = function() {
        return 1 === this.length && "__name__" === this.get(0);
    }, 
    /**
     * The field designating the key of a document.
     */
    e.ht = function() {
        return new e([ "__name__" ]);
    }, 
    /**
     * Parses a field string from the given server-formatted string.
     *
     * - Splitting the empty string is not allowed (for now at least).
     * - Empty segments within the string (e.g. if there are two consecutive
     *   separators) are not allowed.
     *
     * TODO(b/37244157): we should make this more strict. Right now, it allows
     * non-identifier path components, even if they aren't escaped.
     */
    e.lt = function(t) {
        for (var n = [], r = "", i = 0, o = function() {
            if (0 === r.length) throw new q$1(M$1.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
            n.push(r), r = "";
        }, u = !1; i < t.length; ) {
            var s = t[i];
            if ("\\" === s) {
                if (i + 1 === t.length) throw new q$1(M$1.INVALID_ARGUMENT, "Path has trailing escape character: " + t);
                var a = t[i + 1];
                if ("\\" !== a && "." !== a && "`" !== a) throw new q$1(M$1.INVALID_ARGUMENT, "Path has invalid escape sequence: " + t);
                r += a, i += 2;
            } else "`" === s ? (u = !u, i++) : "." !== s || u ? (r += s, i++) : (o(), i++);
        }
        if (o(), u) throw new q$1(M$1.INVALID_ARGUMENT, "Unterminated ` in path: " + t);
        return new e(n);
    }, e.ct = function() {
        return new e([]);
    }, e;
}(W$1), tt = /** @class */ function() {
    function t(t) {
        this.path = t;
    }
    return t._t = function(e) {
        return new t(Z$1.ot(e));
    }, t.ft = function(e) {
        return new t(Z$1.ot(e).Y(5));
    }, 
    /** Returns true if the document is in the specified collectionId. */ t.prototype.dt = function(t) {
        return this.path.length >= 2 && this.path.get(this.path.length - 2) === t;
    }, t.prototype.isEqual = function(t) {
        return null !== t && 0 === Z$1.H(this.path, t.path);
    }, t.prototype.toString = function() {
        return this.path.toString();
    }, t.H = function(t, e) {
        return Z$1.H(t.path, e.path);
    }, t.wt = function(t) {
        return t.length % 2 == 0;
    }, 
    /**
     * Creates and returns a new document key with the given segments.
     *
     * @param segments - The segments of the path to the document
     * @returns A new instance of DocumentKey
     */
    t.Et = function(e) {
        return new t(new Z$1(e.slice()));
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A version of a document in Firestore. This corresponds to the version
 * timestamp, such as update_time or read_time.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function et(t) {
    var e = 0;
    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e++;
    return e;
}

function nt(t, e) {
    for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n]);
}

function rt(t) {
    for (var e in t) if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
    return !0;
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provides a set of fields that can be used to partially patch a document.
 * FieldMask is used in conjunction with ObjectValue.
 * Examples:
 *   foo - Overwrites foo entirely with the provided value. If foo is not
 *         present in the companion ObjectValue, the field is deleted.
 *   foo.bar - Overwrites only the field bar of the object foo.
 *             If foo is not an object, foo is replaced with an object
 *             containing foo
 */ var it = /** @class */ function() {
    function t(t) {
        this.fields = t, 
        // TODO(dimond): validation of FieldMask
        // Sort the field mask to support `FieldMask.isEqual()` and assert below.
        t.sort($.H)
        /**
     * Verifies that `fieldPath` is included by at least one field in this field
     * mask.
     *
     * This is an O(n) operation, where `n` is the size of the field mask.
     */;
    }
    return t.prototype.Tt = function(t) {
        for (var e = 0, n = this.fields; e < n.length; e++) {
            if (n[e].nt(t)) return !0;
        }
        return !1;
    }, t.prototype.isEqual = function(t) {
        return L$1(this.fields, t.fields, (function(t, e) {
            return t.isEqual(e);
        }));
    }, t;
}(), ot = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// A RegExp matching ISO 8601 UTC timestamps with optional fraction.
/**
 * Converts the possible Proto values for a timestamp value into a "seconds and
 * nanos" representation.
 */
function ut(t) {
    // The json interface (for the browser) will return an iso timestamp string,
    // while the proto js library (for node) will return a
    // google.protobuf.Timestamp instance.
    if (k$1(!!t), "string" == typeof t) {
        // The date string can have higher precision (nanos) than the Date class
        // (millis), so we do some custom parsing here.
        // Parse the nanos right out of the string.
        var e = 0, n = ot.exec(t);
        if (k$1(!!n), n[1]) {
            // Pad the fraction out to 9 digits (nanos).
            var r = n[1];
            r = (r + "000000000").substr(0, 9), e = Number(r);
        }
        // Parse the date to get the seconds.
                var i = new Date(t);
        return {
            seconds: Math.floor(i.getTime() / 1e3),
            nanos: e
        };
    }
    return {
        seconds: st(t.seconds),
        nanos: st(t.nanos)
    };
}

/**
 * Converts the possible Proto types for numbers into a JavaScript number.
 * Returns 0 if the value is not numeric.
 */ function st(t) {
    // TODO(bjornick): Handle int64 greater than 53 bits.
    return "number" == typeof t ? t : "string" == typeof t ? Number(t) : 0;
}

/** Converts the possible Proto types for Blobs into a ByteString. */ function at(t) {
    return "string" == typeof t ? U$1.fromBase64String(t) : U$1.fromUint8Array(t);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Represents a locally-applied ServerTimestamp.
 *
 * Server Timestamps are backed by MapValues that contain an internal field
 * `__type__` with a value of `server_timestamp`. The previous value and local
 * write time are stored in its `__previous_value__` and `__local_write_time__`
 * fields respectively.
 *
 * Notes:
 * - ServerTimestampValue instances are created as the result of applying a
 *   transform. They can only exist in the local view of a document. Therefore
 *   they do not need to be parsed or serialized.
 * - When evaluated locally (e.g. for snapshot.data()), they by default
 *   evaluate to `null`. This behavior can be configured by passing custom
 *   FieldValueOptions to value().
 * - With respect to other ServerTimestampValues, they sort by their
 *   localWriteTime.
 */ function ct(t) {
    var e, n;
    return "server_timestamp" === (null === (n = ((null === (e = null == t ? void 0 : t.mapValue) || void 0 === e ? void 0 : e.fields) || {}).__type__) || void 0 === n ? void 0 : n.stringValue);
}

/**
 * Creates a new ServerTimestamp proto value (using the internal format).
 */
/**
 * Returns the value of the field before this ServerTimestamp was set.
 *
 * Preserving the previous values allows the user to display the last resoled
 * value until the backend responds with the timestamp.
 */ function ht(t) {
    var e = t.mapValue.fields.__previous_value__;
    return ct(e) ? ht(e) : e;
}

/**
 * Returns the local time at which this timestamp was first set.
 */ function ft(t) {
    var e = ut(t.mapValue.fields.__local_write_time__.timestampValue);
    return new K$1(e.seconds, e.nanos);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Sentinel value that sorts before any Mutation Batch ID. */
/**
 * Returns whether a variable is either undefined or null.
 */ function lt(t) {
    return null == t;
}

/** Returns whether the value represents -0. */ function pt(t) {
    // Detect if the value is -0.0. Based on polyfill from
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
    return 0 === t && 1 / t == -1 / 0;
}

/**
 * Returns whether a value is an integer and in the safe integer range
 * @param value - The value to test for being an integer and in the safe range
 */ function dt(t) {
    return "number" == typeof t && Number.isInteger(t) && !pt(t) && t <= Number.MAX_SAFE_INTEGER && t >= Number.MIN_SAFE_INTEGER;
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Extracts the backend's type order for the provided value. */ function vt(t) {
    return "nullValue" in t ? 0 /* NullValue */ : "booleanValue" in t ? 1 /* BooleanValue */ : "integerValue" in t || "doubleValue" in t ? 2 /* NumberValue */ : "timestampValue" in t ? 3 /* TimestampValue */ : "stringValue" in t ? 5 /* StringValue */ : "bytesValue" in t ? 6 /* BlobValue */ : "referenceValue" in t ? 7 /* RefValue */ : "geoPointValue" in t ? 8 /* GeoPointValue */ : "arrayValue" in t ? 9 /* ArrayValue */ : "mapValue" in t ? ct(t) ? 4 /* ServerTimestampValue */ : 10 /* ObjectValue */ : x$1();
}

/** Tests `left` and `right` for equality based on the backend semantics. */ function yt(t, e) {
    var n = vt(t);
    if (n !== vt(e)) return !1;
    switch (n) {
      case 0 /* NullValue */ :
        return !0;

      case 1 /* BooleanValue */ :
        return t.booleanValue === e.booleanValue;

      case 4 /* ServerTimestampValue */ :
        return ft(t).isEqual(ft(e));

      case 3 /* TimestampValue */ :
        return function(t, e) {
            if ("string" == typeof t.timestampValue && "string" == typeof e.timestampValue && t.timestampValue.length === e.timestampValue.length) 
            // Use string equality for ISO 8601 timestamps
            return t.timestampValue === e.timestampValue;
            var n = ut(t.timestampValue), r = ut(e.timestampValue);
            return n.seconds === r.seconds && n.nanos === r.nanos;
        }(t, e);

      case 5 /* StringValue */ :
        return t.stringValue === e.stringValue;

      case 6 /* BlobValue */ :
        return function(t, e) {
            return at(t.bytesValue).isEqual(at(e.bytesValue));
        }(t, e);

      case 7 /* RefValue */ :
        return t.referenceValue === e.referenceValue;

      case 8 /* GeoPointValue */ :
        return function(t, e) {
            return st(t.geoPointValue.latitude) === st(e.geoPointValue.latitude) && st(t.geoPointValue.longitude) === st(e.geoPointValue.longitude);
        }(t, e);

      case 2 /* NumberValue */ :
        return function(t, e) {
            if ("integerValue" in t && "integerValue" in e) return st(t.integerValue) === st(e.integerValue);
            if ("doubleValue" in t && "doubleValue" in e) {
                var n = st(t.doubleValue), r = st(e.doubleValue);
                return n === r ? pt(n) === pt(r) : isNaN(n) && isNaN(r);
            }
            return !1;
        }(t, e);

      case 9 /* ArrayValue */ :
        return L$1(t.arrayValue.values || [], e.arrayValue.values || [], yt);

      case 10 /* ObjectValue */ :
        return function(t, e) {
            var n = t.mapValue.fields || {}, r = e.mapValue.fields || {};
            if (et(n) !== et(r)) return !1;
            for (var i in n) if (n.hasOwnProperty(i) && (void 0 === r[i] || !yt(n[i], r[i]))) return !1;
            return !0;
        }(t, e);

      default:
        return x$1();
    }
}

function mt(t, e) {
    return void 0 !== (t.values || []).find((function(t) {
        return yt(t, e);
    }));
}

function gt(t, e) {
    var n = vt(t), r = vt(e);
    if (n !== r) return C(n, r);
    switch (n) {
      case 0 /* NullValue */ :
        return 0;

      case 1 /* BooleanValue */ :
        return C(t.booleanValue, e.booleanValue);

      case 2 /* NumberValue */ :
        return function(t, e) {
            var n = st(t.integerValue || t.doubleValue), r = st(e.integerValue || e.doubleValue);
            return n < r ? -1 : n > r ? 1 : n === r ? 0 : 
            // one or both are NaN.
            isNaN(n) ? isNaN(r) ? 0 : -1 : 1;
        }(t, e);

      case 3 /* TimestampValue */ :
        return wt(t.timestampValue, e.timestampValue);

      case 4 /* ServerTimestampValue */ :
        return wt(ft(t), ft(e));

      case 5 /* StringValue */ :
        return C(t.stringValue, e.stringValue);

      case 6 /* BlobValue */ :
        return function(t, e) {
            var n = at(t), r = at(e);
            return n._(r);
        }(t.bytesValue, e.bytesValue);

      case 7 /* RefValue */ :
        return function(t, e) {
            for (var n = t.split("/"), r = e.split("/"), i = 0; i < n.length && i < r.length; i++) {
                var o = C(n[i], r[i]);
                if (0 !== o) return o;
            }
            return C(n.length, r.length);
        }(t.referenceValue, e.referenceValue);

      case 8 /* GeoPointValue */ :
        return function(t, e) {
            var n = C(st(t.latitude), st(e.latitude));
            return 0 !== n ? n : C(st(t.longitude), st(e.longitude));
        }(t.geoPointValue, e.geoPointValue);

      case 9 /* ArrayValue */ :
        return function(t, e) {
            for (var n = t.values || [], r = e.values || [], i = 0; i < n.length && i < r.length; ++i) {
                var o = gt(n[i], r[i]);
                if (o) return o;
            }
            return C(n.length, r.length);
        }(t.arrayValue, e.arrayValue);

      case 10 /* ObjectValue */ :
        return function(t, e) {
            var n = t.fields || {}, r = Object.keys(n), i = e.fields || {}, o = Object.keys(i);
            // Even though MapValues are likely sorted correctly based on their insertion
            // order (e.g. when received from the backend), local modifications can bring
            // elements out of order. We need to re-sort the elements to ensure that
            // canonical IDs are independent of insertion order.
                        r.sort(), o.sort();
            for (var u = 0; u < r.length && u < o.length; ++u) {
                var s = C(r[u], o[u]);
                if (0 !== s) return s;
                var a = gt(n[r[u]], i[o[u]]);
                if (0 !== a) return a;
            }
            return C(r.length, o.length);
        }(t.mapValue, e.mapValue);

      default:
        throw x$1();
    }
}

function wt(t, e) {
    if ("string" == typeof t && "string" == typeof e && t.length === e.length) return C(t, e);
    var n = ut(t), r = ut(e), i = C(n.seconds, r.seconds);
    return 0 !== i ? i : C(n.nanos, r.nanos);
}

function bt(t) {
    return _t(t);
}

function _t(t) {
    return "nullValue" in t ? "null" : "booleanValue" in t ? "" + t.booleanValue : "integerValue" in t ? "" + t.integerValue : "doubleValue" in t ? "" + t.doubleValue : "timestampValue" in t ? function(t) {
        var e = ut(t);
        return "time(" + e.seconds + "," + e.nanos + ")";
    }(t.timestampValue) : "stringValue" in t ? t.stringValue : "bytesValue" in t ? at(t.bytesValue).toBase64() : "referenceValue" in t ? (n = t.referenceValue, 
    tt.ft(n).toString()) : "geoPointValue" in t ? "geo(" + (e = t.geoPointValue).latitude + "," + e.longitude + ")" : "arrayValue" in t ? function(t) {
        for (var e = "[", n = !0, r = 0, i = t.values || []; r < i.length; r++) {
            n ? n = !1 : e += ",", e += _t(i[r]);
        }
        return e + "]";
    }(t.arrayValue) : "mapValue" in t ? function(t) {
        for (
        // Iteration order in JavaScript is not guaranteed. To ensure that we generate
        // matching canonical IDs for identical maps, we need to sort the keys.
        var e = "{", n = !0, r = 0, i = Object.keys(t.fields || {}).sort(); r < i.length; r++) {
            var o = i[r];
            n ? n = !1 : e += ",", e += o + ":" + _t(t.fields[o]);
        }
        return e + "}";
    }(t.mapValue) : x$1();
    var e, n;
}

function It(t, e) {
    return {
        referenceValue: "projects/" + t.projectId + "/databases/" + t.database + "/documents/" + e.path.rt()
    };
}

/** Returns true if `value` is an IntegerValue . */ function Et(t) {
    return !!t && "integerValue" in t;
}

/** Returns true if `value` is a DoubleValue. */
/** Returns true if `value` is an ArrayValue. */ function Tt(t) {
    return !!t && "arrayValue" in t;
}

/** Returns true if `value` is a NullValue. */ function Nt(t) {
    return !!t && "nullValue" in t;
}

/** Returns true if `value` is NaN. */ function At(t) {
    return !!t && "doubleValue" in t && isNaN(Number(t.doubleValue));
}

/** Returns true if `value` is a MapValue. */ function Dt(t) {
    return !!t && "mapValue" in t;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An ObjectValue represents a MapValue in the Firestore Proto and offers the
 * ability to add and remove fields (via the ObjectValueBuilder).
 */ var St = /** @class */ function() {
    function t(t) {
        this.proto = t;
    }
    return t.empty = function() {
        return new t({
            mapValue: {}
        });
    }, 
    /**
     * Returns the value at the given path or null.
     *
     * @param path - the path to search
     * @returns The value at the path or if there it doesn't exist.
     */
    t.prototype.field = function(t) {
        if (t.et()) return this.proto;
        for (var e = this.proto, n = 0; n < t.length - 1; ++n) {
            if (!e.mapValue.fields) return null;
            if (!Dt(e = e.mapValue.fields[t.get(n)])) return null;
        }
        return (e = (e.mapValue.fields || {})[t.tt()]) || null;
    }, t.prototype.isEqual = function(t) {
        return yt(this.proto, t.proto);
    }, t;
}(), xt = /** @class */ function() {
    /**
     * @param baseObject - The object to mutate.
     */
    function t(t) {
        void 0 === t && (t = St.empty()), this.It = t, 
        /** A map that contains the accumulated changes in this builder. */
        this.At = new Map;
    }
    /**
     * Sets the field to the provided value.
     *
     * @param path - The field path to set.
     * @param value - The value to set.
     * @returns The current Builder instance.
     */    return t.prototype.set = function(t, e) {
        return this.Rt(t, e), this;
    }, 
    /**
     * Removes the field at the specified path. If there is no field at the
     * specified path, nothing is changed.
     *
     * @param path - The field path to remove.
     * @returns The current Builder instance.
     */
    t.prototype.delete = function(t) {
        return this.Rt(t, null), this;
    }, 
    /**
     * Adds `value` to the overlay map at `path`. Creates nested map entries if
     * needed.
     */
    t.prototype.Rt = function(t, e) {
        for (var n = this.At, r = 0; r < t.length - 1; ++r) {
            var i = t.get(r), o = n.get(i);
            o instanceof Map ? 
            // Re-use a previously created map
            n = o : o && 10 /* ObjectValue */ === vt(o) ? (
            // Convert the existing Protobuf MapValue into a map
            o = new Map(Object.entries(o.mapValue.fields || {})), n.set(i, o), n = o) : (
            // Create an empty map to represent the current nesting level
            o = new Map, n.set(i, o), n = o);
        }
        n.set(t.tt(), e);
    }, 
    /** Returns an ObjectValue with all mutations applied. */ t.prototype.Pt = function() {
        var t = this.yt($.ct(), this.At);
        return null != t ? new St(t) : this.It;
    }, 
    /**
     * Applies any overlays from `currentOverlays` that exist at `currentPath`
     * and returns the merged data at `currentPath` (or null if there were no
     * changes).
     *
     * @param currentPath - The path at the current nesting level. Can be set to
     * FieldValue.emptyPath() to represent the root.
     * @param currentOverlays - The overlays at the current nesting level in the
     * same format as `overlayMap`.
     * @returns The merged data at `currentPath` or null if no modifications
     * were applied.
     */
    t.prototype.yt = function(t, e) {
        var n = this, r = !1, i = this.It.field(t), o = Dt(i) ? // If there is already data at the current path, base our
        Object.assign({}, i.mapValue.fields) : {};
        return e.forEach((function(e, i) {
            if (e instanceof Map) {
                var u = n.yt(t.child(i), e);
                null != u && (o[i] = u, r = !0);
            } else null !== e ? (o[i] = e, r = !0) : o.hasOwnProperty(i) && (delete o[i], r = !0);
        })), r ? {
            mapValue: {
                fields: o
            }
        } : null;
    }, t;
}();

/**
 * An ObjectValueBuilder provides APIs to set and delete fields from an
 * ObjectValue.
 */
/**
 * Returns a FieldMask built from all fields in a MapValue.
 */
function kt(t) {
    var e = [];
    return nt(t.fields || {}, (function(t, n) {
        var r = new $([ t ]);
        if (Dt(n)) {
            var i = kt(n.mapValue).fields;
            if (0 === i.length) 
            // Preserve the empty map by adding it to the FieldMask.
            e.push(r); else 
            // For nested and non-empty ObjectValues, add the FieldPath of the
            // leaf nodes.
            for (var o = 0, u = i; o < u.length; o++) {
                var s = u[o];
                e.push(r.child(s));
            }
        } else 
        // For nested and non-empty ObjectValues, add the FieldPath of the leaf
        // nodes.
        e.push(r);
    })), new it(e)
    /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
    /**
 * The result of a lookup for a given path may be an existing document or a
 * marker that this document does not exist at a given version.
 */;
}

var Ot = function(t, e) {
    this.key = t, this.version = e;
}, Pt = /** @class */ function(t) {
    function e(e, n, r, i) {
        var o = this;
        return (o = t.call(this, e, n) || this).gt = r, o.Vt = !!i.Vt, o.hasCommittedMutations = !!i.hasCommittedMutations, 
        o;
    }
    return __extends$1(e, t), e.prototype.field = function(t) {
        return this.gt.field(t);
    }, e.prototype.data = function() {
        return this.gt;
    }, e.prototype.bt = function() {
        return this.gt.proto;
    }, e.prototype.isEqual = function(t) {
        return t instanceof e && this.key.isEqual(t.key) && this.version.isEqual(t.version) && this.Vt === t.Vt && this.hasCommittedMutations === t.hasCommittedMutations && this.gt.isEqual(t.gt);
    }, e.prototype.toString = function() {
        return "Document(" + this.key + ", " + this.version + ", " + this.gt.toString() + ", {hasLocalMutations: " + this.Vt + "}), {hasCommittedMutations: " + this.hasCommittedMutations + "})";
    }, Object.defineProperty(e.prototype, "hasPendingWrites", {
        get: function() {
            return this.Vt || this.hasCommittedMutations;
        },
        enumerable: !1,
        configurable: !0
    }), e;
}(Ot), Vt = /** @class */ function(t) {
    function e(e, n, r) {
        var i = this;
        return (i = t.call(this, e, n) || this).hasCommittedMutations = !(!r || !r.hasCommittedMutations), 
        i;
    }
    return __extends$1(e, t), e.prototype.toString = function() {
        return "NoDocument(" + this.key + ", " + this.version + ")";
    }, Object.defineProperty(e.prototype, "hasPendingWrites", {
        get: function() {
            return this.hasCommittedMutations;
        },
        enumerable: !1,
        configurable: !0
    }), e.prototype.isEqual = function(t) {
        return t instanceof e && t.hasCommittedMutations === this.hasCommittedMutations && t.version.isEqual(this.version) && t.key.isEqual(this.key);
    }, e;
}(Ot), Ct = /** @class */ function(t) {
    function e() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return __extends$1(e, t), e.prototype.toString = function() {
        return "UnknownDocument(" + this.key + ", " + this.version + ")";
    }, Object.defineProperty(e.prototype, "hasPendingWrites", {
        get: function() {
            return !0;
        },
        enumerable: !1,
        configurable: !0
    }), e.prototype.isEqual = function(t) {
        return t instanceof e && t.version.isEqual(this.version) && t.key.isEqual(this.key);
    }, e;
}(Ot), Lt = function(t, e, n, r, i, o, u) {
    void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), 
    void 0 === i && (i = null), void 0 === o && (o = null), void 0 === u && (u = null), 
    this.path = t, this.collectionGroup = e, this.orderBy = n, this.filters = r, this.limit = i, 
    this.startAt = o, this.endAt = u, this.vt = null;
};

/**
 * Represents a document in Firestore with a key, version, data and whether the
 * data has local mutations applied to it.
 */
/**
 * Initializes a Target with a path and optional additional query constraints.
 * Path must currently be empty if this is a collection group query.
 *
 * NOTE: you should always construct `Target` from `Query.toTarget` instead of
 * using this factory method, because `Query` provides an implicit `orderBy`
 * property.
 */
function Rt(t, e, n, r, i, o, u) {
    return void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), 
    void 0 === i && (i = null), void 0 === o && (o = null), void 0 === u && (u = null), 
    new Lt(t, e, n, r, i, o, u);
}

function Ut(t) {
    var e = O$1(t);
    if (null === e.vt) {
        var n = e.path.rt();
        null !== e.collectionGroup && (n += "|cg:" + e.collectionGroup), n += "|f:", n += e.filters.map((function(t) {
            return function(t) {
                // TODO(b/29183165): Technically, this won't be unique if two values have
                // the same description, such as the int 3 and the string "3". So we should
                // add the types in here somehow, too.
                return t.field.rt() + t.op.toString() + bt(t.value);
            }(t);
        })).join(","), n += "|ob:", n += e.orderBy.map((function(t) {
            return function(t) {
                // TODO(b/29183165): Make this collision robust.
                return t.field.rt() + t.dir;
            }(t);
        })).join(","), lt(e.limit) || (n += "|l:", n += e.limit), e.startAt && (n += "|lb:", 
        n += Wt(e.startAt)), e.endAt && (n += "|ub:", n += Wt(e.endAt)), e.vt = n;
    }
    return e.vt;
}

function Mt(t, e) {
    if (t.limit !== e.limit) return !1;
    if (t.orderBy.length !== e.orderBy.length) return !1;
    for (var n = 0; n < t.orderBy.length; n++) if (!Jt(t.orderBy[n], e.orderBy[n])) return !1;
    if (t.filters.length !== e.filters.length) return !1;
    for (var r = 0; r < t.filters.length; r++) if (i = t.filters[r], o = e.filters[r], 
    i.op !== o.op || !i.field.isEqual(o.field) || !yt(i.value, o.value)) return !1;
    var i, o;
    return t.collectionGroup === e.collectionGroup && !!t.path.isEqual(e.path) && !!te(t.startAt, e.startAt) && te(t.endAt, e.endAt);
}

function qt(t) {
    return tt.wt(t.path) && null === t.collectionGroup && 0 === t.filters.length;
}

var Ft = /** @class */ function(t) {
    function e(e, n, r) {
        var i = this;
        return (i = t.call(this) || this).field = e, i.op = n, i.value = r, i;
    }
    /**
     * Creates a filter based on the provided arguments.
     */    return __extends$1(e, t), e.create = function(t, n, r) {
        return t.ut() ? "in" /* IN */ === n || "not-in" /* NOT_IN */ === n ? this.St(t, n, r) : new jt(t, n, r) : "array-contains" /* ARRAY_CONTAINS */ === n ? new Qt(t, r) : "in" /* IN */ === n ? new Yt(t, r) : "not-in" /* NOT_IN */ === n ? new Ht(t, r) : "array-contains-any" /* ARRAY_CONTAINS_ANY */ === n ? new Kt(t, r) : new e(t, n, r);
    }, e.St = function(t, e, n) {
        return "in" /* IN */ === e ? new zt(t, n) : new Gt(t, n);
    }, e.prototype.matches = function(t) {
        var e = t.field(this.field);
        // Types do not have to match in NOT_EQUAL filters.
                return "!=" /* NOT_EQUAL */ === this.op ? null !== e && this.Dt(gt(e, this.value)) : null !== e && vt(this.value) === vt(e) && this.Dt(gt(e, this.value));
        // Only compare types with matching backend order (such as double and int).
        }, e.prototype.Dt = function(t) {
        switch (this.op) {
          case "<" /* LESS_THAN */ :
            return t < 0;

          case "<=" /* LESS_THAN_OR_EQUAL */ :
            return t <= 0;

          case "==" /* EQUAL */ :
            return 0 === t;

          case "!=" /* NOT_EQUAL */ :
            return 0 !== t;

          case ">" /* GREATER_THAN */ :
            return t > 0;

          case ">=" /* GREATER_THAN_OR_EQUAL */ :
            return t >= 0;

          default:
            return x$1();
        }
    }, e.prototype.Ct = function() {
        return [ "<" /* LESS_THAN */ , "<=" /* LESS_THAN_OR_EQUAL */ , ">" /* GREATER_THAN */ , ">=" /* GREATER_THAN_OR_EQUAL */ , "!=" /* NOT_EQUAL */ , "not-in" /* NOT_IN */ ].indexOf(this.op) >= 0;
    }, e;
}((function() {}));

var jt = /** @class */ function(t) {
    function e(e, n, r) {
        var i = this;
        return (i = t.call(this, e, n, r) || this).key = tt.ft(r.referenceValue), i;
    }
    return __extends$1(e, t), e.prototype.matches = function(t) {
        var e = tt.H(t.key, this.key);
        return this.Dt(e);
    }, e;
}(Ft), zt = /** @class */ function(t) {
    function e(e, n) {
        var r = this;
        return (r = t.call(this, e, "in" /* IN */ , n) || this).keys = Bt("in" /* IN */ , n), 
        r;
    }
    return __extends$1(e, t), e.prototype.matches = function(t) {
        return this.keys.some((function(e) {
            return e.isEqual(t.key);
        }));
    }, e;
}(Ft), Gt = /** @class */ function(t) {
    function e(e, n) {
        var r = this;
        return (r = t.call(this, e, "not-in" /* NOT_IN */ , n) || this).keys = Bt("not-in" /* NOT_IN */ , n), 
        r;
    }
    return __extends$1(e, t), e.prototype.matches = function(t) {
        return !this.keys.some((function(e) {
            return e.isEqual(t.key);
        }));
    }, e;
}(Ft);

/** Filter that matches on key fields within an array. */ function Bt(t, e) {
    var n;
    return ((null === (n = e.arrayValue) || void 0 === n ? void 0 : n.values) || []).map((function(t) {
        return tt.ft(t.referenceValue);
    }));
}

/** A Filter that implements the array-contains operator. */ var Qt = /** @class */ function(t) {
    function e(e, n) {
        return t.call(this, e, "array-contains" /* ARRAY_CONTAINS */ , n) || this;
    }
    return __extends$1(e, t), e.prototype.matches = function(t) {
        var e = t.field(this.field);
        return Tt(e) && mt(e.arrayValue, this.value);
    }, e;
}(Ft), Yt = /** @class */ function(t) {
    function e(e, n) {
        return t.call(this, e, "in" /* IN */ , n) || this;
    }
    return __extends$1(e, t), e.prototype.matches = function(t) {
        var e = t.field(this.field);
        return null !== e && mt(this.value.arrayValue, e);
    }, e;
}(Ft), Ht = /** @class */ function(t) {
    function e(e, n) {
        return t.call(this, e, "not-in" /* NOT_IN */ , n) || this;
    }
    return __extends$1(e, t), e.prototype.matches = function(t) {
        if (mt(this.value.arrayValue, {
            nullValue: "NULL_VALUE"
        })) return !1;
        var e = t.field(this.field);
        return null !== e && !mt(this.value.arrayValue, e);
    }, e;
}(Ft), Kt = /** @class */ function(t) {
    function e(e, n) {
        return t.call(this, e, "array-contains-any" /* ARRAY_CONTAINS_ANY */ , n) || this;
    }
    return __extends$1(e, t), e.prototype.matches = function(t) {
        var e = this, n = t.field(this.field);
        return !(!Tt(n) || !n.arrayValue.values) && n.arrayValue.values.some((function(t) {
            return mt(e.value.arrayValue, t);
        }));
    }, e;
}(Ft), Xt = function(t, e) {
    this.position = t, this.before = e;
};

/** A Filter that implements the IN operator. */ function Wt(t) {
    // TODO(b/29183165): Make this collision robust.
    return (t.before ? "b" : "a") + ":" + t.position.map((function(t) {
        return bt(t);
    })).join(",");
}

/**
 * An ordering on a field, in some Direction. Direction defaults to ASCENDING.
 */ var Zt = function(t, e /* ASCENDING */) {
    void 0 === e && (e = "asc"), this.field = t, this.dir = e;
};

function Jt(t, e) {
    return t.dir === e.dir && t.field.isEqual(e.field);
}

/**
 * Returns true if a document sorts before a bound using the provided sort
 * order.
 */ function $t(t, e, n) {
    for (var r = 0, i = 0; i < t.position.length; i++) {
        var o = e[i], u = t.position[i];
        if (r = o.field.ut() ? tt.H(tt.ft(u.referenceValue), n.key) : gt(u, n.field(o.field)), 
        "desc" /* DESCENDING */ === o.dir && (r *= -1), 0 !== r) break;
    }
    return t.before ? r <= 0 : r < 0;
}

function te(t, e) {
    if (null === t) return null === e;
    if (null === e) return !1;
    if (t.before !== e.before || t.position.length !== e.position.length) return !1;
    for (var n = 0; n < t.position.length; n++) if (!yt(t.position[n], e.position[n])) return !1;
    return !0;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Query encapsulates all the query attributes we support in the SDK. It can
 * be run against the LocalStore, as well as be converted to a `Target` to
 * query the RemoteStore results.
 *
 * Visible for testing.
 */ var ee = 
/**
     * Initializes a Query with a path and optional additional query constraints.
     * Path must currently be empty if this is a collection group query.
     */
function(t, e, n, r, i, o /* First */ , u, s) {
    void 0 === e && (e = null), void 0 === n && (n = []), void 0 === r && (r = []), 
    void 0 === i && (i = null), void 0 === o && (o = "F"), void 0 === u && (u = null), 
    void 0 === s && (s = null), this.path = t, this.collectionGroup = e, this.xt = n, 
    this.filters = r, this.limit = i, this.limitType = o, this.startAt = u, this.endAt = s, 
    this.Nt = null, 
    // The corresponding `Target` of this `Query` instance.
    this.$t = null, this.startAt, this.endAt;
};

/** Creates a new Query instance with the options provided. */ function ne(t, e, n, r, i, o, u, s) {
    return new ee(t, e, n, r, i, o, u, s);
}

/** Creates a new Query for a query that matches all documents at `path` */ function re(t) {
    return new ee(t);
}

/**
 * Helper to convert a collection group query into a collection query at a
 * specific path. This is used when executing collection group queries, since
 * we have to split the query into a set of collection queries at multiple
 * paths.
 */ function ie(t) {
    return !lt(t.limit) && "F" /* First */ === t.limitType;
}

function oe(t) {
    return !lt(t.limit) && "L" /* Last */ === t.limitType;
}

function ue(t) {
    return t.xt.length > 0 ? t.xt[0].field : null;
}

function se(t) {
    for (var e = 0, n = t.filters; e < n.length; e++) {
        var r = n[e];
        if (r.Ct()) return r.field;
    }
    return null;
}

/**
 * Checks if any of the provided Operators are included in the query and
 * returns the first one that is, or null if none are.
 */
/**
 * Returns whether the query matches a collection group rather than a specific
 * collection.
 */ function ae(t) {
    return null !== t.collectionGroup;
}

/**
 * Returns the implicit order by constraint that is used to execute the Query,
 * which can be different from the order by constraints the user provided (e.g.
 * the SDK and backend always orders by `__name__`).
 */ function ce(t) {
    var e = O$1(t);
    if (null === e.Nt) {
        e.Nt = [];
        var n = se(e), r = ue(e);
        if (null !== n && null === r) 
        // In order to implicitly add key ordering, we must also add the
        // inequality filter field for it to be a valid query.
        // Note that the default inequality field and key ordering is ascending.
        n.ut() || e.Nt.push(new Zt(n)), e.Nt.push(new Zt($.ht(), "asc" /* ASCENDING */)); else {
            for (var i = !1, o = 0, u = e.xt; o < u.length; o++) {
                var s = u[o];
                e.Nt.push(s), s.field.ut() && (i = !0);
            }
            if (!i) {
                // The order of the implicit key ordering always matches the last
                // explicit order by
                var a = e.xt.length > 0 ? e.xt[e.xt.length - 1].dir : "asc" /* ASCENDING */;
                e.Nt.push(new Zt($.ht(), a));
            }
        }
    }
    return e.Nt;
}

/**
 * Converts this `Query` instance to it's corresponding `Target` representation.
 */ function he(t) {
    var e = O$1(t);
    if (!e.$t) if ("F" /* First */ === e.limitType) e.$t = Rt(e.path, e.collectionGroup, ce(e), e.filters, e.limit, e.startAt, e.endAt); else {
        for (
        // Flip the orderBy directions since we want the last results
        var n = [], r = 0, i = ce(e); r < i.length; r++) {
            var o = i[r], u = "desc" /* DESCENDING */ === o.dir ? "asc" /* ASCENDING */ : "desc" /* DESCENDING */;
            n.push(new Zt(o.field, u));
        }
        // We need to swap the cursors to match the now-flipped query ordering.
                var s = e.endAt ? new Xt(e.endAt.position, !e.endAt.before) : null, a = e.startAt ? new Xt(e.startAt.position, !e.startAt.before) : null;
        // Now return as a LimitType.First query.
                e.$t = Rt(e.path, e.collectionGroup, n, e.filters, e.limit, s, a);
    }
    return e.$t;
}

function fe(t, e, n) {
    return new ee(t.path, t.collectionGroup, t.xt.slice(), t.filters.slice(), e, n, t.startAt, t.endAt);
}

function le(t, e) {
    return Mt(he(t), he(e)) && t.limitType === e.limitType;
}

// TODO(b/29183165): This is used to get a unique string from a query to, for
// example, use as a dictionary key, but the implementation is subject to
// collisions. Make it collision-free.
function pe(t) {
    return Ut(he(t)) + "|lt:" + t.limitType;
}

function de(t) {
    return "Query(target=" + function(t) {
        var e = t.path.rt();
        return null !== t.collectionGroup && (e += " collectionGroup=" + t.collectionGroup), 
        t.filters.length > 0 && (e += ", filters: [" + t.filters.map((function(t) {
            return (e = t).field.rt() + " " + e.op + " " + bt(e.value);
            /** Returns a debug description for `filter`. */            var e;
            /** Filter that matches on key fields (i.e. '__name__'). */        })).join(", ") + "]"), 
        lt(t.limit) || (e += ", limit: " + t.limit), t.orderBy.length > 0 && (e += ", orderBy: [" + t.orderBy.map((function(t) {
            return function(t) {
                return t.field.rt() + " (" + t.dir + ")";
            }(t);
        })).join(", ") + "]"), t.startAt && (e += ", startAt: " + Wt(t.startAt)), t.endAt && (e += ", endAt: " + Wt(t.endAt)), 
        "Target(" + e + ")";
    }(he(t)) + "; limitType=" + t.limitType + ")";
}

/** Returns whether `doc` matches the constraints of `query`. */ function ve(t, e) {
    return function(t, e) {
        var n = e.key.path;
        return null !== t.collectionGroup ? e.key.dt(t.collectionGroup) && t.path.nt(n) : tt.wt(t.path) ? t.path.isEqual(n) : t.path.st(n);
    }(t, e) && function(t, e) {
        for (var n = 0, r = t.xt; n < r.length; n++) {
            var i = r[n];
            // order by key always matches
                        if (!i.field.ut() && null === e.field(i.field)) return !1;
        }
        return !0;
    }(t, e) && function(t, e) {
        for (var n = 0, r = t.filters; n < r.length; n++) {
            if (!r[n].matches(e)) return !1;
        }
        return !0;
    }(t, e) && function(t, e) {
        return !(t.startAt && !$t(t.startAt, ce(t), e)) && (!t.endAt || !$t(t.endAt, ce(t), e));
    }(t, e);
}

function ye(t) {
    return function(e, n) {
        for (var r = !1, i = 0, o = ce(t); i < o.length; i++) {
            var u = o[i], s = me(u, e, n);
            if (0 !== s) return s;
            r = r || u.field.ut();
        }
        return 0;
    };
}

function me(t, e, n) {
    var r = t.field.ut() ? tt.H(e.key, n.key) : function(t, e, n) {
        var r = e.field(t), i = n.field(t);
        return null !== r && null !== i ? gt(r, i) : x$1();
    }(t.field, e, n);
    switch (t.dir) {
      case "asc" /* ASCENDING */ :
        return r;

      case "desc" /* DESCENDING */ :
        return -1 * r;

      default:
        return x$1();
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An immutable set of metadata that the local store tracks for each target.
 */ var ge = /** @class */ function() {
    function t(
    /** The target being listened to. */
    t, 
    /**
     * The target ID to which the target corresponds; Assigned by the
     * LocalStore for user listens and by the SyncEngine for limbo watches.
     */
    e, 
    /** The purpose of the target. */
    n, 
    /**
     * The sequence number of the last transaction during which this target data
     * was modified.
     */
    r, 
    /** The latest snapshot version seen for this target. */
    i
    /**
     * The maximum snapshot version at which the associated view
     * contained no limbo documents.
     */ , o
    /**
     * An opaque, server-assigned token that allows watching a target to be
     * resumed after disconnecting without retransmitting all the data that
     * matches the target. The resume token essentially identifies a point in
     * time from which the server should resume sending results.
     */ , u) {
        void 0 === i && (i = X$1.min()), void 0 === o && (o = X$1.min()), void 0 === u && (u = U$1.T), 
        this.target = t, this.targetId = e, this.Ft = n, this.sequenceNumber = r, this.Ot = i, 
        this.lastLimboFreeSnapshotVersion = o, this.resumeToken = u;
    }
    /** Creates a new target data instance with an updated sequence number. */    return t.prototype.kt = function(e) {
        return new t(this.target, this.targetId, this.Ft, e, this.Ot, this.lastLimboFreeSnapshotVersion, this.resumeToken);
    }, 
    /**
     * Creates a new target data instance with an updated resume token and
     * snapshot version.
     */
    t.prototype.Mt = function(e, n) {
        return new t(this.target, this.targetId, this.Ft, this.sequenceNumber, n, this.lastLimboFreeSnapshotVersion, e);
    }, 
    /**
     * Creates a new target data instance with an updated last limbo free
     * snapshot version number.
     */
    t.prototype.Lt = function(e) {
        return new t(this.target, this.targetId, this.Ft, this.sequenceNumber, this.Ot, e, this.resumeToken);
    }, t;
}();

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns an DoubleValue for `value` that is encoded based the serializer's
 * `useProto3Json` setting.
 */ function we(t, e) {
    if (t.Bt) {
        if (isNaN(e)) return {
            doubleValue: "NaN"
        };
        if (e === 1 / 0) return {
            doubleValue: "Infinity"
        };
        if (e === -1 / 0) return {
            doubleValue: "-Infinity"
        };
    }
    return {
        doubleValue: pt(e) ? "-0" : e
    };
}

/**
 * Returns an IntegerValue for `value`.
 */ function be(t) {
    return {
        integerValue: "" + t
    };
}

/**
 * Returns a value for a number that's appropriate to put into a proto.
 * The return value is an IntegerValue if it can safely represent the value,
 * otherwise a DoubleValue is returned.
 */ function _e(t, e) {
    return dt(e) ? be(e) : we(t, e);
}

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Used to represent a field transform on a mutation. */ var Ie = function() {
    // Make sure that the structural type of `TransformOperation` is unique.
    // See https://github.com/microsoft/TypeScript/issues/5451
    this.qt = void 0;
};

/**
 * Computes the local transform result against the provided `previousValue`,
 * optionally using the provided localWriteTime.
 */ function Ee(t, e, n) {
    return t instanceof Ae ? function(t, e) {
        var n = {
            fields: {
                __type__: {
                    stringValue: "server_timestamp"
                },
                __local_write_time__: {
                    timestampValue: {
                        seconds: t.seconds,
                        nanos: t.nanoseconds
                    }
                }
            }
        };
        return e && (n.fields.__previous_value__ = e), {
            mapValue: n
        };
    }(n, e) : t instanceof De ? Se(t, e) : t instanceof xe ? ke(t, e) : function(t, e) {
        // PORTING NOTE: Since JavaScript's integer arithmetic is limited to 53 bit
        // precision and resolves overflows by reducing precision, we do not
        // manually cap overflows at 2^63.
        var n = Ne(t, e), r = Pe(n) + Pe(t.Ut);
        return Et(n) && Et(t.Ut) ? be(r) : we(t.Qt, r);
    }(t, e);
}

/**
 * Computes a final transform result after the transform has been acknowledged
 * by the server, potentially using the server-provided transformResult.
 */ function Te(t, e, n) {
    // The server just sends null as the transform result for array operations,
    // so we have to calculate a result the same as we do for local
    // applications.
    return t instanceof De ? Se(t, e) : t instanceof xe ? ke(t, e) : n;
}

/**
 * If this transform operation is not idempotent, returns the base value to
 * persist for this transform. If a base value is returned, the transform
 * operation is always applied to this base value, even if document has
 * already been updated.
 *
 * Base values provide consistent behavior for non-idempotent transforms and
 * allow us to return the same latency-compensated value even if the backend
 * has already applied the transform operation. The base value is null for
 * idempotent transforms, as they can be re-played even if the backend has
 * already applied them.
 *
 * @returns a base value to store along with the mutation, or null for
 * idempotent transforms.
 */ function Ne(t, e) {
    return t instanceof Oe ? Et(n = e) || function(t) {
        return !!t && "doubleValue" in t;
    }(n) ? e : {
        integerValue: 0
    } : null;
    var n;
}

/** Transforms a value into a server-generated timestamp. */ var Ae = /** @class */ function(t) {
    function e() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return __extends$1(e, t), e;
}(Ie), De = /** @class */ function(t) {
    function e(e) {
        var n = this;
        return (n = t.call(this) || this).elements = e, n;
    }
    return __extends$1(e, t), e;
}(Ie);

/** Transforms an array value via a union operation. */ function Se(t, e) {
    for (var n = Ve(e), r = function(t) {
        n.some((function(e) {
            return yt(e, t);
        })) || n.push(t);
    }, i = 0, o = t.elements; i < o.length; i++) {
        r(o[i]);
    }
    return {
        arrayValue: {
            values: n
        }
    };
}

/** Transforms an array value via a remove operation. */ var xe = /** @class */ function(t) {
    function e(e) {
        var n = this;
        return (n = t.call(this) || this).elements = e, n;
    }
    return __extends$1(e, t), e;
}(Ie);

function ke(t, e) {
    for (var n = Ve(e), r = function(t) {
        n = n.filter((function(e) {
            return !yt(e, t);
        }));
    }, i = 0, o = t.elements; i < o.length; i++) {
        r(o[i]);
    }
    return {
        arrayValue: {
            values: n
        }
    };
}

/**
 * Implements the backend semantics for locally computed NUMERIC_ADD (increment)
 * transforms. Converts all field values to integers or doubles, but unlike the
 * backend does not cap integer values at 2^63. Instead, JavaScript number
 * arithmetic is used and precision loss can occur for values greater than 2^53.
 */ var Oe = /** @class */ function(t) {
    function e(e, n) {
        var r = this;
        return (r = t.call(this) || this).Qt = e, r.Ut = n, r;
    }
    return __extends$1(e, t), e;
}(Ie);

function Pe(t) {
    return st(t.integerValue || t.doubleValue);
}

function Ve(t) {
    return Tt(t) && t.arrayValue.values ? t.arrayValue.values.slice() : [];
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** A field path and the TransformOperation to perform upon it. */ var Ce = function(t, e) {
    this.field = t, this.transform = e;
};

/** The result of successfully applying a mutation to the backend. */
var Le = function(
/**
     * The version at which the mutation was committed:
     *
     * - For most operations, this is the updateTime in the WriteResult.
     * - For deletes, the commitTime of the WriteResponse (because deletes are
     *   not stored and have no updateTime).
     *
     * Note that these versions can be different: No-op writes will not change
     * the updateTime even though the commitTime advances.
     */
t, 
/**
     * The resulting fields returned from the backend after a mutation
     * containing field transforms has been committed. Contains one FieldValue
     * for each FieldTransform that was in the mutation.
     *
     * Will be null if the mutation did not contain any field transforms.
     */
e) {
    this.version = t, this.transformResults = e;
}, Re = /** @class */ function() {
    function t(t, e) {
        this.updateTime = t, this.exists = e
        /** Creates a new empty Precondition. */;
    }
    return t.Kt = function() {
        return new t;
    }, 
    /** Creates a new Precondition with an exists flag. */ t.exists = function(e) {
        return new t(void 0, e);
    }, 
    /** Creates a new Precondition based on a version a document exists at. */ t.updateTime = function(e) {
        return new t(e);
    }, Object.defineProperty(t.prototype, "Wt", {
        /** Returns whether this Precondition is empty. */ get: function() {
            return void 0 === this.updateTime && void 0 === this.exists;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.isEqual = function(t) {
        return this.exists === t.exists && (this.updateTime ? !!t.updateTime && this.updateTime.isEqual(t.updateTime) : !t.updateTime);
    }, t;
}();

/**
 * Encodes a precondition for a mutation. This follows the model that the
 * backend accepts with the special case of an explicit "empty" precondition
 * (meaning no precondition).
 */
/**
 * Returns true if the preconditions is valid for the given document
 * (or null if no document is available).
 */
function Ue(t, e) {
    return void 0 !== t.updateTime ? e instanceof Pt && e.version.isEqual(t.updateTime) : void 0 === t.exists || t.exists === e instanceof Pt;
}

/**
 * A mutation describes a self-contained change to a document. Mutations can
 * create, replace, delete, and update subsets of documents.
 *
 * Mutations not only act on the value of the document but also its version.
 *
 * For local mutations (mutations that haven't been committed yet), we preserve
 * the existing version for Set and Patch mutations. For Delete mutations, we
 * reset the version to 0.
 *
 * Here's the expected transition table.
 *
 * MUTATION           APPLIED TO            RESULTS IN
 *
 * SetMutation        Document(v3)          Document(v3)
 * SetMutation        NoDocument(v3)        Document(v0)
 * SetMutation        null                  Document(v0)
 * PatchMutation      Document(v3)          Document(v3)
 * PatchMutation      NoDocument(v3)        NoDocument(v3)
 * PatchMutation      null                  null
 * DeleteMutation     Document(v3)          NoDocument(v0)
 * DeleteMutation     NoDocument(v3)        NoDocument(v0)
 * DeleteMutation     null                  NoDocument(v0)
 *
 * For acknowledged mutations, we use the updateTime of the WriteResponse as
 * the resulting version for Set and Patch mutations. As deletes have no
 * explicit update time, we use the commitTime of the WriteResponse for
 * Delete mutations.
 *
 * If a mutation is acknowledged by the backend but fails the precondition check
 * locally, we return an `UnknownDocument` and rely on Watch to send us the
 * updated version.
 *
 * Field transforms are used only with Patch and Set Mutations. We use the
 * `updateTransforms` message to store transforms, rather than the `transforms`s
 * messages.
 *
 * ## Subclassing Notes
 *
 * Subclasses of Mutation need to implement applyToRemoteDocument() and
 * applyToLocalView() to implement the actual behavior of applying the mutation
 * to some source document.
 */ var Me = function() {};

/**
 * Applies this mutation to the given MaybeDocument or null for the purposes
 * of computing a new remote document. If the input document doesn't match the
 * expected state (e.g. it is null or outdated), an `UnknownDocument` can be
 * returned.
 *
 * @param mutation - The mutation to apply.
 * @param maybeDoc - The document to mutate. The input document can be null if
 *     the client has no knowledge of the pre-mutation state of the document.
 * @param mutationResult - The result of applying the mutation from the backend.
 * @returns The mutated document. The returned document may be an
 *     UnknownDocument if the mutation could not be applied to the locally
 *     cached base document.
 */ function qe(t, e, n) {
    return t instanceof Be ? function(t, e, n) {
        // Unlike applySetMutationToLocalView, if we're applying a mutation to a
        // remote document the server has accepted the mutation so the precondition
        // must have held.
        var r = t.value;
        if (n.transformResults) {
            var i = He(t.fieldTransforms, e, n.transformResults);
            r = Xe(t.fieldTransforms, r, i);
        }
        return new Pt(t.key, n.version, r, {
            hasCommittedMutations: !0
        });
    }(t, e, n) : t instanceof Qe ? function(t, e, n) {
        if (!Ue(t.jt, e)) 
        // Since the mutation was not rejected, we know that the precondition
        // matched on the backend. We therefore must not have the expected version
        // of the document in our cache and return an UnknownDocument with the
        // known updateTime.
        return new Ct(t.key, n.version);
        var r = Ye(t, e, n.transformResults ? He(t.fieldTransforms, e, n.transformResults) : []);
        return new Pt(t.key, n.version, r, {
            hasCommittedMutations: !0
        });
    }(t, e, n) : function(t, e, n) {
        // Unlike applyToLocalView, if we're applying a mutation to a remote
        // document the server has accepted the mutation so the precondition must
        // have held.
        return new Vt(t.key, n.version, {
            hasCommittedMutations: !0
        });
    }(t, 0, n);
}

/**
 * Applies this mutation to the given MaybeDocument or null for the purposes
 * of computing the new local view of a document. Both the input and returned
 * documents can be null.
 *
 * @param mutation - The mutation to apply.
 * @param maybeDoc - The document to mutate. The input document can be null if
 *     the client has no knowledge of the pre-mutation state of the document.
 * @param localWriteTime - A timestamp indicating the local write time of the
 *     batch this mutation is a part of.
 * @returns The mutated document. The returned document may be null, but only
 *     if maybeDoc was null and the mutation would not create a new document.
 */ function Fe(t, e, n) {
    return t instanceof Be ? function(t, e, n) {
        if (!Ue(t.jt, e)) return e;
        var r = t.value, i = Ke(t.fieldTransforms, n, e);
        r = Xe(t.fieldTransforms, r, i);
        var o = Ge(e);
        return new Pt(t.key, o, r, {
            Vt: !0
        });
    }(t, e, n) : t instanceof Qe ? function(t, e, n) {
        if (!Ue(t.jt, e)) return e;
        var r = Ge(e), i = Ye(t, e, Ke(t.fieldTransforms, n, e));
        return new Pt(t.key, r, i, {
            Vt: !0
        });
    }(t, e, n) : function(t, e) {
        return Ue(t.jt, e) ? new Vt(t.key, X$1.min()) : e;
    }(t, e);
}

/**
 * If this mutation is not idempotent, returns the base value to persist with
 * this mutation. If a base value is returned, the mutation is always applied
 * to this base value, even if document has already been updated.
 *
 * The base value is a sparse object that consists of only the document
 * fields for which this mutation contains a non-idempotent transformation
 * (e.g. a numeric increment). The provided value guarantees consistent
 * behavior for non-idempotent transforms and allow us to return the same
 * latency-compensated value even if the backend has already applied the
 * mutation. The base value is null for idempotent mutations, as they can be
 * re-played even if the backend has already applied them.
 *
 * @returns a base value to store along with the mutation, or null for
 * idempotent mutations.
 */ function je(t, e) {
    return function(t, e) {
        for (var n = null, r = 0, i = t; r < i.length; r++) {
            var o = i[r], u = e instanceof Pt ? e.field(o.field) : void 0, s = Ne(o.transform, u || null);
            null != s && (n = null == n ? (new xt).set(o.field, s) : n.set(o.field, s));
        }
        return n ? n.Pt() : null;
    }(t.fieldTransforms, e);
}

function ze(t, e) {
    return t.type === e.type && !!t.key.isEqual(e.key) && !!t.jt.isEqual(e.jt) && !!function(t, e) {
        return void 0 === t && void 0 === e || !(!t || !e) && L$1(t, e, (function(t, e) {
            return function(t, e) {
                return t.field.isEqual(e.field) && function(t, e) {
                    return t instanceof De && e instanceof De || t instanceof xe && e instanceof xe ? L$1(t.elements, e.elements, yt) : t instanceof Oe && e instanceof Oe ? yt(t.Ut, e.Ut) : t instanceof Ae && e instanceof Ae;
                }(t.transform, e.transform);
            }(t, e);
        }));
    }(t.fieldTransforms, e.fieldTransforms) && (0 /* Set */ === t.type ? t.value.isEqual(e.value) : 1 /* Patch */ !== t.type || t.data.isEqual(e.data) && t.Gt.isEqual(e.Gt));
}

/**
 * Returns the version from the given document for use as the result of a
 * mutation. Mutations are defined to return the version of the base document
 * only if it is an existing document. Deleted and unknown documents have a
 * post-mutation version of SnapshotVersion.min().
 */ function Ge(t) {
    return t instanceof Pt ? t.version : X$1.min();
}

/**
 * A mutation that creates or replaces the document at the given key with the
 * object value contents.
 */ var Be = /** @class */ function(t) {
    function e(e, n, r, i) {
        void 0 === i && (i = []);
        var o = this;
        return (o = t.call(this) || this).key = e, o.value = n, o.jt = r, o.fieldTransforms = i, 
        o.type = 0 /* Set */ , o;
    }
    return __extends$1(e, t), e;
}(Me), Qe = /** @class */ function(t) {
    function e(e, n, r, i, o) {
        void 0 === o && (o = []);
        var u = this;
        return (u = t.call(this) || this).key = e, u.data = n, u.Gt = r, u.jt = i, u.fieldTransforms = o, 
        u.type = 1 /* Patch */ , u;
    }
    return __extends$1(e, t), e;
}(Me);

function Ye(t, e, n) {
    var r;
    return r = function(t, e) {
        var n = new xt(e);
        return t.Gt.fields.forEach((function(e) {
            if (!e.et()) {
                var r = t.data.field(e);
                null !== r ? n.set(e, r) : n.delete(e);
            }
        })), n.Pt();
    }(t, r = e instanceof Pt ? e.data() : St.empty()), r = Xe(t.fieldTransforms, r, n);
}

function He(t, e, n) {
    var r = [];
    k$1(t.length === n.length);
    for (var i = 0; i < n.length; i++) {
        var o = t[i], u = o.transform, s = null;
        e instanceof Pt && (s = e.field(o.field)), r.push(Te(u, s, n[i]));
    }
    return r;
}

/**
 * Creates a list of "transform results" (a transform result is a field value
 * representing the result of applying a transform) for use when applying a
 * transform locally.
 *
 * @param fieldTransforms - The field transforms to apply the result to.
 * @param localWriteTime - The local time of the mutation (used to
 *     generate ServerTimestampValues).
 * @param maybeDoc - The current state of the document after applying all
 *     previous mutations.
 * @returns The transform results list.
 */ function Ke(t, e, n) {
    for (var r = [], i = 0, o = t; i < o.length; i++) {
        var u = o[i], s = u.transform, a = null;
        n instanceof Pt && (a = n.field(u.field)), r.push(Ee(s, a, e));
    }
    return r;
}

function Xe(t, e, n) {
    for (var r = new xt(e), i = 0; i < t.length; i++) {
        var o = t[i];
        r.set(o.field, n[i]);
    }
    return r.Pt();
}

/** A mutation that deletes the document at the given key. */ var We, Ze, Je = /** @class */ function(t) {
    function e(e, n) {
        var r = this;
        return (r = t.call(this) || this).key = e, r.jt = n, r.type = 2 /* Delete */ , r.fieldTransforms = [], 
        r;
    }
    return __extends$1(e, t), e;
}(Me), $e = /** @class */ function(t) {
    function e(e, n) {
        var r = this;
        return (r = t.call(this) || this).key = e, r.jt = n, r.type = 3 /* Verify */ , r.fieldTransforms = [], 
        r;
    }
    return __extends$1(e, t), e;
}(Me), tn = 
// TODO(b/33078163): just use simplest form of existence filter for now
function(t) {
    this.count = t;
};

/**
 * Determines whether an error code represents a permanent error when received
 * in response to a non-write operation.
 *
 * See isPermanentWriteError for classifying write errors.
 */
function en(t) {
    switch (t) {
      case M$1.OK:
        return x$1();

      case M$1.CANCELLED:
      case M$1.UNKNOWN:
      case M$1.DEADLINE_EXCEEDED:
      case M$1.RESOURCE_EXHAUSTED:
      case M$1.INTERNAL:
      case M$1.UNAVAILABLE:
 // Unauthenticated means something went wrong with our token and we need
        // to retry with new credentials which will happen automatically.
              case M$1.UNAUTHENTICATED:
        return !1;

      case M$1.INVALID_ARGUMENT:
      case M$1.NOT_FOUND:
      case M$1.ALREADY_EXISTS:
      case M$1.PERMISSION_DENIED:
      case M$1.FAILED_PRECONDITION:
 // Aborted might be retried in some scenarios, but that is dependant on
        // the context and should handled individually by the calling code.
        // See https://cloud.google.com/apis/design/errors.
              case M$1.ABORTED:
      case M$1.OUT_OF_RANGE:
      case M$1.UNIMPLEMENTED:
      case M$1.DATA_LOSS:
        return !0;

      default:
        return x$1();
    }
}

/**
 * Determines whether an error code represents a permanent error when received
 * in response to a write operation.
 *
 * Write operations must be handled specially because as of b/119437764, ABORTED
 * errors on the write stream should be retried too (even though ABORTED errors
 * are not generally retryable).
 *
 * Note that during the initial handshake on the write stream an ABORTED error
 * signals that we should discard our stream token (i.e. it is permanent). This
 * means a handshake error should be classified with isPermanentError, above.
 */
/**
 * Maps an error Code from GRPC status code number, like 0, 1, or 14. These
 * are not the same as HTTP status codes.
 *
 * @returns The Code equivalent to the given GRPC status code. Fails if there
 *     is no match.
 */ function nn(t) {
    if (void 0 === t) 
    // This shouldn't normally happen, but in certain error cases (like trying
    // to send invalid proto messages) we may get an error with no GRPC code.
    return A$1("GRPC error has no .code"), M$1.UNKNOWN;
    switch (t) {
      case We.OK:
        return M$1.OK;

      case We.CANCELLED:
        return M$1.CANCELLED;

      case We.UNKNOWN:
        return M$1.UNKNOWN;

      case We.DEADLINE_EXCEEDED:
        return M$1.DEADLINE_EXCEEDED;

      case We.RESOURCE_EXHAUSTED:
        return M$1.RESOURCE_EXHAUSTED;

      case We.INTERNAL:
        return M$1.INTERNAL;

      case We.UNAVAILABLE:
        return M$1.UNAVAILABLE;

      case We.UNAUTHENTICATED:
        return M$1.UNAUTHENTICATED;

      case We.INVALID_ARGUMENT:
        return M$1.INVALID_ARGUMENT;

      case We.NOT_FOUND:
        return M$1.NOT_FOUND;

      case We.ALREADY_EXISTS:
        return M$1.ALREADY_EXISTS;

      case We.PERMISSION_DENIED:
        return M$1.PERMISSION_DENIED;

      case We.FAILED_PRECONDITION:
        return M$1.FAILED_PRECONDITION;

      case We.ABORTED:
        return M$1.ABORTED;

      case We.OUT_OF_RANGE:
        return M$1.OUT_OF_RANGE;

      case We.UNIMPLEMENTED:
        return M$1.UNIMPLEMENTED;

      case We.DATA_LOSS:
        return M$1.DATA_LOSS;

      default:
        return x$1();
    }
}

/**
 * Converts an HTTP response's error status to the equivalent error code.
 *
 * @param status - An HTTP error response status ("FAILED_PRECONDITION",
 * "UNKNOWN", etc.)
 * @returns The equivalent Code. Non-matching responses are mapped to
 *     Code.UNKNOWN.
 */ (Ze = We || (We = {}))[Ze.OK = 0] = "OK", Ze[Ze.CANCELLED = 1] = "CANCELLED", 
Ze[Ze.UNKNOWN = 2] = "UNKNOWN", Ze[Ze.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", 
Ze[Ze.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", Ze[Ze.NOT_FOUND = 5] = "NOT_FOUND", 
Ze[Ze.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", Ze[Ze.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", 
Ze[Ze.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", Ze[Ze.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", 
Ze[Ze.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", Ze[Ze.ABORTED = 10] = "ABORTED", 
Ze[Ze.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", Ze[Ze.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", 
Ze[Ze.INTERNAL = 13] = "INTERNAL", Ze[Ze.UNAVAILABLE = 14] = "UNAVAILABLE", Ze[Ze.DATA_LOSS = 15] = "DATA_LOSS";

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// An immutable sorted map implementation, based on a Left-leaning Red-Black
// tree.
var rn = /** @class */ function() {
    function t(t, e) {
        this.H = t, this.root = e || un.EMPTY;
    }
    // Returns a copy of the map, with the specified key/value added or replaced.
        return t.prototype.zt = function(e, n) {
        return new t(this.H, this.root.zt(e, n, this.H).copy(null, null, un.Ht, null, null));
    }, 
    // Returns a copy of the map, with the specified key removed.
    t.prototype.remove = function(e) {
        return new t(this.H, this.root.remove(e, this.H).copy(null, null, un.Ht, null, null));
    }, 
    // Returns the value of the node with the given key, or null.
    t.prototype.get = function(t) {
        for (var e = this.root; !e.et(); ) {
            var n = this.H(t, e.key);
            if (0 === n) return e.value;
            n < 0 ? e = e.left : n > 0 && (e = e.right);
        }
        return null;
    }, 
    // Returns the index of the element in this sorted map, or -1 if it doesn't
    // exist.
    t.prototype.indexOf = function(t) {
        for (
        // Number of nodes that were pruned when descending right
        var e = 0, n = this.root; !n.et(); ) {
            var r = this.H(t, n.key);
            if (0 === r) return e + n.left.size;
            r < 0 ? n = n.left : (
            // Count all nodes left of the node plus the node itself
            e += n.left.size + 1, n = n.right);
        }
        // Node not found
                return -1;
    }, t.prototype.et = function() {
        return this.root.et();
    }, Object.defineProperty(t.prototype, "size", {
        // Returns the total number of nodes in the map.
        get: function() {
            return this.root.size;
        },
        enumerable: !1,
        configurable: !0
    }), 
    // Returns the minimum key in the map.
    t.prototype.Jt = function() {
        return this.root.Jt();
    }, 
    // Returns the maximum key in the map.
    t.prototype.Yt = function() {
        return this.root.Yt();
    }, 
    // Traverses the map in key order and calls the specified action function
    // for each key/value pair. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.Xt = function(t) {
        return this.root.Xt(t);
    }, t.prototype.forEach = function(t) {
        this.Xt((function(e, n) {
            return t(e, n), !1;
        }));
    }, t.prototype.toString = function() {
        var t = [];
        return this.Xt((function(e, n) {
            return t.push(e + ":" + n), !1;
        })), "{" + t.join(", ") + "}";
    }, 
    // Traverses the map in reverse key order and calls the specified action
    // function for each key/value pair. If action returns true, traversal is
    // aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.Zt = function(t) {
        return this.root.Zt(t);
    }, 
    // Returns an iterator over the SortedMap.
    t.prototype.te = function() {
        return new on$1(this.root, null, this.H, !1);
    }, t.prototype.ee = function(t) {
        return new on$1(this.root, t, this.H, !1);
    }, t.prototype.ne = function() {
        return new on$1(this.root, null, this.H, !0);
    }, t.prototype.se = function(t) {
        return new on$1(this.root, t, this.H, !0);
    }, t;
}(), on$1 = /** @class */ function() {
    function t(t, e, n, r) {
        this.ie = r, this.re = [];
        for (var i = 1; !t.et(); ) if (i = e ? n(t.key, e) : 1, 
        // flip the comparison if we're going in reverse
        r && (i *= -1), i < 0) 
        // This node is less than our start key. ignore it
        t = this.ie ? t.left : t.right; else {
            if (0 === i) {
                // This node is exactly equal to our start key. Push it on the stack,
                // but stop iterating;
                this.re.push(t);
                break;
            }
            // This node is greater than our start key, add it to the stack and move
            // to the next one
                        this.re.push(t), t = this.ie ? t.right : t.left;
        }
    }
    return t.prototype.oe = function() {
        var t = this.re.pop(), e = {
            key: t.key,
            value: t.value
        };
        if (this.ie) for (t = t.left; !t.et(); ) this.re.push(t), t = t.right; else for (t = t.right; !t.et(); ) this.re.push(t), 
        t = t.left;
        return e;
    }, t.prototype.ce = function() {
        return this.re.length > 0;
    }, t.prototype.ae = function() {
        if (0 === this.re.length) return null;
        var t = this.re[this.re.length - 1];
        return {
            key: t.key,
            value: t.value
        };
    }, t;
}(), un = /** @class */ function() {
    function t(e, n, r, i, o) {
        this.key = e, this.value = n, this.color = null != r ? r : t.RED, this.left = null != i ? i : t.EMPTY, 
        this.right = null != o ? o : t.EMPTY, this.size = this.left.size + 1 + this.right.size;
    }
    // Returns a copy of the current node, optionally replacing pieces of it.
        return t.prototype.copy = function(e, n, r, i, o) {
        return new t(null != e ? e : this.key, null != n ? n : this.value, null != r ? r : this.color, null != i ? i : this.left, null != o ? o : this.right);
    }, t.prototype.et = function() {
        return !1;
    }, 
    // Traverses the tree in key order and calls the specified action function
    // for each node. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.Xt = function(t) {
        return this.left.Xt(t) || t(this.key, this.value) || this.right.Xt(t);
    }, 
    // Traverses the tree in reverse key order and calls the specified action
    // function for each node. If action returns true, traversal is aborted.
    // Returns the first truthy value returned by action, or the last falsey
    // value returned by action.
    t.prototype.Zt = function(t) {
        return this.right.Zt(t) || t(this.key, this.value) || this.left.Zt(t);
    }, 
    // Returns the minimum node in the tree.
    t.prototype.min = function() {
        return this.left.et() ? this : this.left.min();
    }, 
    // Returns the maximum key in the tree.
    t.prototype.Jt = function() {
        return this.min().key;
    }, 
    // Returns the maximum key in the tree.
    t.prototype.Yt = function() {
        return this.right.et() ? this.key : this.right.Yt();
    }, 
    // Returns new tree, with the key/value added.
    t.prototype.zt = function(t, e, n) {
        var r = this, i = n(t, r.key);
        return (r = i < 0 ? r.copy(null, null, null, r.left.zt(t, e, n), null) : 0 === i ? r.copy(null, e, null, null, null) : r.copy(null, null, null, null, r.right.zt(t, e, n))).ue();
    }, t.prototype.he = function() {
        if (this.left.et()) return t.EMPTY;
        var e = this;
        return e.left.le() || e.left.left.le() || (e = e._e()), (e = e.copy(null, null, null, e.left.he(), null)).ue();
    }, 
    // Returns new tree, with the specified item removed.
    t.prototype.remove = function(e, n) {
        var r, i = this;
        if (n(e, i.key) < 0) i.left.et() || i.left.le() || i.left.left.le() || (i = i._e()), 
        i = i.copy(null, null, null, i.left.remove(e, n), null); else {
            if (i.left.le() && (i = i.fe()), i.right.et() || i.right.le() || i.right.left.le() || (i = i.de()), 
            0 === n(e, i.key)) {
                if (i.right.et()) return t.EMPTY;
                r = i.right.min(), i = i.copy(r.key, r.value, null, null, i.right.he());
            }
            i = i.copy(null, null, null, null, i.right.remove(e, n));
        }
        return i.ue();
    }, t.prototype.le = function() {
        return this.color;
    }, 
    // Returns new tree after performing any needed rotations.
    t.prototype.ue = function() {
        var t = this;
        return t.right.le() && !t.left.le() && (t = t.we()), t.left.le() && t.left.left.le() && (t = t.fe()), 
        t.left.le() && t.right.le() && (t = t.Ee()), t;
    }, t.prototype._e = function() {
        var t = this.Ee();
        return t.right.left.le() && (t = (t = (t = t.copy(null, null, null, null, t.right.fe())).we()).Ee()), 
        t;
    }, t.prototype.de = function() {
        var t = this.Ee();
        return t.left.left.le() && (t = (t = t.fe()).Ee()), t;
    }, t.prototype.we = function() {
        var e = this.copy(null, null, t.RED, null, this.right.left);
        return this.right.copy(null, null, this.color, e, null);
    }, t.prototype.fe = function() {
        var e = this.copy(null, null, t.RED, this.left.right, null);
        return this.left.copy(null, null, this.color, null, e);
    }, t.prototype.Ee = function() {
        var t = this.left.copy(null, null, !this.left.color, null, null), e = this.right.copy(null, null, !this.right.color, null, null);
        return this.copy(null, null, !this.color, t, e);
    }, 
    // For testing.
    t.prototype.Te = function() {
        var t = this.Ie();
        return Math.pow(2, t) <= this.size + 1;
    }, 
    // In a balanced RB tree, the black-depth (number of black nodes) from root to
    // leaves is equal on both sides.  This function verifies that or asserts.
    t.prototype.Ie = function() {
        if (this.le() && this.left.le()) throw x$1();
        if (this.right.le()) throw x$1();
        var t = this.left.Ie();
        if (t !== this.right.Ie()) throw x$1();
        return t + (this.le() ? 0 : 1);
    }, t;
}();

// end SortedMap
// An iterator over an LLRBNode.
// end LLRBNode
// Empty node is shared between all LLRB trees.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
un.EMPTY = null, un.RED = !0, un.Ht = !1, 
// end LLRBEmptyNode
un.EMPTY = new (/** @class */ function() {
    function t() {
        this.size = 0;
    }
    return Object.defineProperty(t.prototype, "key", {
        get: function() {
            throw x$1();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "value", {
        get: function() {
            throw x$1();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "color", {
        get: function() {
            throw x$1();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "left", {
        get: function() {
            throw x$1();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "right", {
        get: function() {
            throw x$1();
        },
        enumerable: !1,
        configurable: !0
    }), 
    // Returns a copy of the current node.
    t.prototype.copy = function(t, e, n, r, i) {
        return this;
    }, 
    // Returns a copy of the tree, with the specified key/value added.
    t.prototype.zt = function(t, e, n) {
        return new un(t, e);
    }, 
    // Returns a copy of the tree, with the specified key removed.
    t.prototype.remove = function(t, e) {
        return this;
    }, t.prototype.et = function() {
        return !0;
    }, t.prototype.Xt = function(t) {
        return !1;
    }, t.prototype.Zt = function(t) {
        return !1;
    }, t.prototype.Jt = function() {
        return null;
    }, t.prototype.Yt = function() {
        return null;
    }, t.prototype.le = function() {
        return !1;
    }, 
    // For testing.
    t.prototype.Te = function() {
        return !0;
    }, t.prototype.Ie = function() {
        return 0;
    }, t;
}());

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * SortedSet is an immutable (copy-on-write) collection that holds elements
 * in order specified by the provided comparator.
 *
 * NOTE: if provided comparator returns 0 for two elements, we consider them to
 * be equal!
 */
var sn = /** @class */ function() {
    function t(t) {
        this.H = t, this.data = new rn(this.H);
    }
    return t.prototype.has = function(t) {
        return null !== this.data.get(t);
    }, t.prototype.first = function() {
        return this.data.Jt();
    }, t.prototype.last = function() {
        return this.data.Yt();
    }, Object.defineProperty(t.prototype, "size", {
        get: function() {
            return this.data.size;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.indexOf = function(t) {
        return this.data.indexOf(t);
    }, 
    /** Iterates elements in order defined by "comparator" */ t.prototype.forEach = function(t) {
        this.data.Xt((function(e, n) {
            return t(e), !1;
        }));
    }, 
    /** Iterates over `elem`s such that: range[0] &lt;= elem &lt; range[1]. */ t.prototype.me = function(t, e) {
        for (var n = this.data.ee(t[0]); n.ce(); ) {
            var r = n.oe();
            if (this.H(r.key, t[1]) >= 0) return;
            e(r.key);
        }
    }, 
    /**
     * Iterates over `elem`s such that: start &lt;= elem until false is returned.
     */
    t.prototype.Ae = function(t, e) {
        var n;
        for (n = void 0 !== e ? this.data.ee(e) : this.data.te(); n.ce(); ) if (!t(n.oe().key)) return;
    }, 
    /** Finds the least element greater than or equal to `elem`. */ t.prototype.Re = function(t) {
        var e = this.data.ee(t);
        return e.ce() ? e.oe().key : null;
    }, t.prototype.te = function() {
        return new an(this.data.te());
    }, t.prototype.ee = function(t) {
        return new an(this.data.ee(t));
    }, 
    /** Inserts or updates an element */ t.prototype.add = function(t) {
        return this.copy(this.data.remove(t).zt(t, !0));
    }, 
    /** Deletes an element */ t.prototype.delete = function(t) {
        return this.has(t) ? this.copy(this.data.remove(t)) : this;
    }, t.prototype.et = function() {
        return this.data.et();
    }, t.prototype.Pe = function(t) {
        var e = this;
        // Make sure `result` always refers to the larger one of the two sets.
                return e.size < t.size && (e = t, t = this), t.forEach((function(t) {
            e = e.add(t);
        })), e;
    }, t.prototype.isEqual = function(e) {
        if (!(e instanceof t)) return !1;
        if (this.size !== e.size) return !1;
        for (var n = this.data.te(), r = e.data.te(); n.ce(); ) {
            var i = n.oe().key, o = r.oe().key;
            if (0 !== this.H(i, o)) return !1;
        }
        return !0;
    }, t.prototype.it = function() {
        var t = [];
        return this.forEach((function(e) {
            t.push(e);
        })), t;
    }, t.prototype.toString = function() {
        var t = [];
        return this.forEach((function(e) {
            return t.push(e);
        })), "SortedSet(" + t.toString() + ")";
    }, t.prototype.copy = function(e) {
        var n = new t(this.H);
        return n.data = e, n;
    }, t;
}(), an = /** @class */ function() {
    function t(t) {
        this.ye = t;
    }
    return t.prototype.oe = function() {
        return this.ye.oe().key;
    }, t.prototype.ce = function() {
        return this.ye.ce();
    }, t;
}(), cn = new rn(tt.H);

function hn() {
    return cn;
}

function fn() {
    return hn();
}

var ln = new rn(tt.H);

function pn() {
    return ln;
}

var dn = new rn(tt.H);

function vn() {
    return dn;
}

var yn = new sn(tt.H);

function mn() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    for (var n = yn, r = 0, i = t; r < i.length; r++) {
        var o = i[r];
        n = n.add(o);
    }
    return n;
}

var gn = new sn(C);

function wn() {
    return gn;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * DocumentSet is an immutable (copy-on-write) collection that holds documents
 * in order specified by the provided comparator. We always add a document key
 * comparator on top of what is provided to guarantee document equality based on
 * the key.
 */ var bn = /** @class */ function() {
    /** The default ordering is by key if the comparator is omitted */
    function t(t) {
        // We are adding document key comparator to the end as it's the only
        // guaranteed unique property of a document.
        this.H = t ? function(e, n) {
            return t(e, n) || tt.H(e.key, n.key);
        } : function(t, e) {
            return tt.H(t.key, e.key);
        }, this.ge = pn(), this.Ve = new rn(this.H)
        /**
     * Returns an empty copy of the existing DocumentSet, using the same
     * comparator.
     */;
    }
    return t.pe = function(e) {
        return new t(e.H);
    }, t.prototype.has = function(t) {
        return null != this.ge.get(t);
    }, t.prototype.get = function(t) {
        return this.ge.get(t);
    }, t.prototype.first = function() {
        return this.Ve.Jt();
    }, t.prototype.last = function() {
        return this.Ve.Yt();
    }, t.prototype.et = function() {
        return this.Ve.et();
    }, 
    /**
     * Returns the index of the provided key in the document set, or -1 if the
     * document key is not present in the set;
     */
    t.prototype.indexOf = function(t) {
        var e = this.ge.get(t);
        return e ? this.Ve.indexOf(e) : -1;
    }, Object.defineProperty(t.prototype, "size", {
        get: function() {
            return this.Ve.size;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /** Iterates documents in order defined by "comparator" */ t.prototype.forEach = function(t) {
        this.Ve.Xt((function(e, n) {
            return t(e), !1;
        }));
    }, 
    /** Inserts or updates a document with the same key */ t.prototype.add = function(t) {
        // First remove the element if we have it.
        var e = this.delete(t.key);
        return e.copy(e.ge.zt(t.key, t), e.Ve.zt(t, null));
    }, 
    /** Deletes a document with a given key */ t.prototype.delete = function(t) {
        var e = this.get(t);
        return e ? this.copy(this.ge.remove(t), this.Ve.remove(e)) : this;
    }, t.prototype.isEqual = function(e) {
        if (!(e instanceof t)) return !1;
        if (this.size !== e.size) return !1;
        for (var n = this.Ve.te(), r = e.Ve.te(); n.ce(); ) {
            var i = n.oe().key, o = r.oe().key;
            if (!i.isEqual(o)) return !1;
        }
        return !0;
    }, t.prototype.toString = function() {
        var t = [];
        return this.forEach((function(e) {
            t.push(e.toString());
        })), 0 === t.length ? "DocumentSet ()" : "DocumentSet (\n  " + t.join("  \n") + "\n)";
    }, t.prototype.copy = function(e, n) {
        var r = new t;
        return r.H = this.H, r.ge = e, r.Ve = n, r;
    }, t;
}(), _n = /** @class */ function() {
    function t() {
        this.be = new rn(tt.H);
    }
    return t.prototype.track = function(t) {
        var e = t.doc.key, n = this.be.get(e);
        n ? 
        // Merge the new change with the existing change.
        0 /* Added */ !== t.type && 3 /* Metadata */ === n.type ? this.be = this.be.zt(e, t) : 3 /* Metadata */ === t.type && 1 /* Removed */ !== n.type ? this.be = this.be.zt(e, {
            type: n.type,
            doc: t.doc
        }) : 2 /* Modified */ === t.type && 2 /* Modified */ === n.type ? this.be = this.be.zt(e, {
            type: 2 /* Modified */ ,
            doc: t.doc
        }) : 2 /* Modified */ === t.type && 0 /* Added */ === n.type ? this.be = this.be.zt(e, {
            type: 0 /* Added */ ,
            doc: t.doc
        }) : 1 /* Removed */ === t.type && 0 /* Added */ === n.type ? this.be = this.be.remove(e) : 1 /* Removed */ === t.type && 2 /* Modified */ === n.type ? this.be = this.be.zt(e, {
            type: 1 /* Removed */ ,
            doc: n.doc
        }) : 0 /* Added */ === t.type && 1 /* Removed */ === n.type ? this.be = this.be.zt(e, {
            type: 2 /* Modified */ ,
            doc: t.doc
        }) : 
        // This includes these cases, which don't make sense:
        // Added->Added
        // Removed->Removed
        // Modified->Added
        // Removed->Modified
        // Metadata->Added
        // Removed->Metadata
        x$1() : this.be = this.be.zt(e, t);
    }, t.prototype.ve = function() {
        var t = [];
        return this.be.Xt((function(e, n) {
            t.push(n);
        })), t;
    }, t;
}(), In = /** @class */ function() {
    function t(t, e, n, r, i, o, u, s) {
        this.query = t, this.docs = e, this.Se = n, this.docChanges = r, this.De = i, this.fromCache = o, 
        this.Ce = u, this.xe = s
        /** Returns a view snapshot as if all documents in the snapshot were added. */;
    }
    return t.Ne = function(e, n, r, i) {
        var o = [];
        return n.forEach((function(t) {
            o.push({
                type: 0 /* Added */ ,
                doc: t
            });
        })), new t(e, n, bn.pe(n), o, r, i, 
        /* syncStateChanged= */ !0, 
        /* excludesMetadataChanges= */ !1);
    }, Object.defineProperty(t.prototype, "hasPendingWrites", {
        get: function() {
            return !this.De.et();
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.isEqual = function(t) {
        if (!(this.fromCache === t.fromCache && this.Ce === t.Ce && this.De.isEqual(t.De) && le(this.query, t.query) && this.docs.isEqual(t.docs) && this.Se.isEqual(t.Se))) return !1;
        var e = this.docChanges, n = t.docChanges;
        if (e.length !== n.length) return !1;
        for (var r = 0; r < e.length; r++) if (e[r].type !== n[r].type || !e[r].doc.isEqual(n[r].doc)) return !1;
        return !0;
    }, t;
}(), En = /** @class */ function() {
    function t(
    /**
     * The snapshot version this event brings us up to, or MIN if not set.
     */
    t, 
    /**
     * A map from target to changes to the target. See TargetChange.
     */
    e, 
    /**
     * A set of targets that is known to be inconsistent. Listens for these
     * targets should be re-established without resume tokens.
     */
    n, 
    /**
     * A set of which documents have changed or been deleted, along with the
     * doc's new values (if not deleted).
     */
    r, 
    /**
     * A set of which document updates are due only to limbo resolution targets.
     */
    i) {
        this.Ot = t, this.$e = e, this.Fe = n, this.Oe = r, this.ke = i;
    }
    /**
     * HACK: Views require RemoteEvents in order to determine whether the view is
     * CURRENT, but secondary tabs don't receive remote events. So this method is
     * used to create a synthesized RemoteEvent that can be used to apply a
     * CURRENT status change to a View, for queries executed in a different tab.
     */
    // PORTING NOTE: Multi-tab only
        return t.Me = function(e, n) {
        var r = new Map;
        return r.set(e, Tn.Le(e, n)), new t(X$1.min(), r, wn(), hn(), mn());
    }, t;
}(), Tn = /** @class */ function() {
    function t(
    /**
     * An opaque, server-assigned token that allows watching a query to be resumed
     * after disconnecting without retransmitting all the data that matches the
     * query. The resume token essentially identifies a point in time from which
     * the server should resume sending results.
     */
    t, 
    /**
     * The "current" (synced) status of this target. Note that "current"
     * has special meaning in the RPC protocol that implies that a target is
     * both up-to-date and consistent with the rest of the watch stream.
     */
    e, 
    /**
     * The set of documents that were newly assigned to this target as part of
     * this remote event.
     */
    n, 
    /**
     * The set of documents that were already assigned to this target but received
     * an update during this remote event.
     */
    r, 
    /**
     * The set of documents that were removed from this target as part of this
     * remote event.
     */
    i) {
        this.resumeToken = t, this.Be = e, this.qe = n, this.Ue = r, this.Qe = i
        /**
     * This method is used to create a synthesized TargetChanges that can be used to
     * apply a CURRENT status change to a View (for queries executed in a different
     * tab) or for new queries (to raise snapshots with correct CURRENT status).
     */;
    }
    return t.Le = function(e, n) {
        return new t(U$1.T, n, mn(), mn(), mn());
    }, t;
}(), Nn = function(
/** The new document applies to all of these targets. */
t, 
/** The new document is removed from all of these targets. */
e, 
/** The key of the document for this change. */
n, 
/**
     * The new document or NoDocument if it was deleted. Is null if the
     * document went out of view without the server sending a new document.
     */
r) {
    this.Ke = t, this.removedTargetIds = e, this.key = n, this.We = r;
}, An = function(t, e) {
    this.targetId = t, this.je = e;
}, Dn = function(
/** What kind of change occurred to the watch target. */
t, 
/** The target IDs that were added/removed/set. */
e, 
/**
     * An opaque, server-assigned token that allows watching a target to be
     * resumed after disconnecting without retransmitting all the data that
     * matches the target. The resume token essentially identifies a point in
     * time from which the server should resume sending results.
     */
n
/** An RPC error indicating why the watch failed. */ , r) {
    void 0 === n && (n = U$1.T), void 0 === r && (r = null), this.state = t, this.targetIds = e, 
    this.resumeToken = n, this.cause = r;
}, Sn = /** @class */ function() {
    function t() {
        /**
         * The number of pending responses (adds or removes) that we are waiting on.
         * We only consider targets active that have no pending responses.
         */
        this.Ge = 0, 
        /**
             * Keeps track of the document changes since the last raised snapshot.
             *
             * These changes are continuously updated as we receive document updates and
             * always reflect the current set of changes against the last issued snapshot.
             */
        this.ze = On(), 
        /** See public getters for explanations of these fields. */
        this.He = U$1.T, this.Je = !1, 
        /**
             * Whether this target state should be included in the next snapshot. We
             * initialize to true so that newly-added targets are included in the next
             * RemoteEvent.
             */
        this.Ye = !0;
    }
    return Object.defineProperty(t.prototype, "Be", {
        /**
         * Whether this target has been marked 'current'.
         *
         * 'Current' has special meaning in the RPC protocol: It implies that the
         * Watch backend has sent us all changes up to the point at which the target
         * was added and that the target is consistent with the rest of the watch
         * stream.
         */
        get: function() {
            return this.Je;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "resumeToken", {
        /** The last resume token sent to us for this target. */ get: function() {
            return this.He;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "Xe", {
        /** Whether this target has pending target adds or target removes. */ get: function() {
            return 0 !== this.Ge;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "Ze", {
        /** Whether we have modified any state that should trigger a snapshot. */ get: function() {
            return this.Ye;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /**
     * Applies the resume token to the TargetChange, but only when it has a new
     * value. Empty resumeTokens are discarded.
     */
    t.prototype.tn = function(t) {
        t.l() > 0 && (this.Ye = !0, this.He = t);
    }, 
    /**
     * Creates a target change from the current set of changes.
     *
     * To reset the document changes after raising this snapshot, call
     * `clearPendingChanges()`.
     */
    t.prototype.en = function() {
        var t = mn(), e = mn(), n = mn();
        return this.ze.forEach((function(r, i) {
            switch (i) {
              case 0 /* Added */ :
                t = t.add(r);
                break;

              case 2 /* Modified */ :
                e = e.add(r);
                break;

              case 1 /* Removed */ :
                n = n.add(r);
                break;

              default:
                x$1();
            }
        })), new Tn(this.He, this.Je, t, e, n);
    }, 
    /**
     * Resets the document changes and sets `hasPendingChanges` to false.
     */
    t.prototype.nn = function() {
        this.Ye = !1, this.ze = On();
    }, t.prototype.sn = function(t, e) {
        this.Ye = !0, this.ze = this.ze.zt(t, e);
    }, t.prototype.rn = function(t) {
        this.Ye = !0, this.ze = this.ze.remove(t);
    }, t.prototype.on = function() {
        this.Ge += 1;
    }, t.prototype.cn = function() {
        this.Ge -= 1;
    }, t.prototype.an = function() {
        this.Ye = !0, this.Je = !0;
    }, t;
}(), xn = /** @class */ function() {
    function t(t) {
        this.un = t, 
        /** The internal state of all tracked targets. */
        this.hn = new Map, 
        /** Keeps track of the documents to update since the last raised snapshot. */
        this.ln = hn(), 
        /** A mapping of document keys to their set of target IDs. */
        this._n = kn(), 
        /**
             * A list of targets with existence filter mismatches. These targets are
             * known to be inconsistent and their listens needs to be re-established by
             * RemoteStore.
             */
        this.fn = new sn(C)
        /**
     * Processes and adds the DocumentWatchChange to the current set of changes.
     */;
    }
    return t.prototype.dn = function(t) {
        for (var e = 0, n = t.Ke; e < n.length; e++) {
            var r = n[e];
            t.We instanceof Pt ? this.wn(r, t.We) : t.We instanceof Vt && this.En(r, t.key, t.We);
        }
        for (var i = 0, o = t.removedTargetIds; i < o.length; i++) {
            r = o[i];
            this.En(r, t.key, t.We);
        }
    }, 
    /** Processes and adds the WatchTargetChange to the current set of changes. */ t.prototype.Tn = function(t) {
        var e = this;
        this.In(t, (function(n) {
            var r = e.mn(n);
            switch (t.state) {
              case 0 /* NoChange */ :
                e.An(n) && r.tn(t.resumeToken);
                break;

              case 1 /* Added */ :
                // We need to decrement the number of pending acks needed from watch
                // for this targetId.
                r.cn(), r.Xe || 
                // We have a freshly added target, so we need to reset any state
                // that we had previously. This can happen e.g. when remove and add
                // back a target for existence filter mismatches.
                r.nn(), r.tn(t.resumeToken);
                break;

              case 2 /* Removed */ :
                // We need to keep track of removed targets to we can post-filter and
                // remove any target changes.
                // We need to decrement the number of pending acks needed from watch
                // for this targetId.
                r.cn(), r.Xe || e.removeTarget(n);
                break;

              case 3 /* Current */ :
                e.An(n) && (r.an(), r.tn(t.resumeToken));
                break;

              case 4 /* Reset */ :
                e.An(n) && (
                // Reset the target and synthesizes removes for all existing
                // documents. The backend will re-add any documents that still
                // match the target before it sends the next global snapshot.
                e.Rn(n), r.tn(t.resumeToken));
                break;

              default:
                x$1();
            }
        }));
    }, 
    /**
     * Iterates over all targetIds that the watch change applies to: either the
     * targetIds explicitly listed in the change or the targetIds of all currently
     * active targets.
     */
    t.prototype.In = function(t, e) {
        var n = this;
        t.targetIds.length > 0 ? t.targetIds.forEach(e) : this.hn.forEach((function(t, r) {
            n.An(r) && e(r);
        }));
    }, 
    /**
     * Handles existence filters and synthesizes deletes for filter mismatches.
     * Targets that are invalidated by filter mismatches are added to
     * `pendingTargetResets`.
     */
    t.prototype.Pn = function(t) {
        var e = t.targetId, n = t.je.count, r = this.yn(e);
        if (r) {
            var i = r.target;
            if (qt(i)) if (0 === n) {
                // The existence filter told us the document does not exist. We deduce
                // that this document does not exist and apply a deleted document to
                // our updates. Without applying this deleted document there might be
                // another query that will raise this document as part of a snapshot
                // until it is resolved, essentially exposing inconsistency between
                // queries.
                var o = new tt(i.path);
                this.En(e, o, new Vt(o, X$1.min()));
            } else k$1(1 === n); else this.gn(e) !== n && (
            // Existence filter mismatch: We reset the mapping and raise a new
            // snapshot with `isFromCache:true`.
            this.Rn(e), this.fn = this.fn.add(e));
        }
    }, 
    /**
     * Converts the currently accumulated state into a remote event at the
     * provided snapshot version. Resets the accumulated changes before returning.
     */
    t.prototype.Vn = function(t) {
        var e = this, n = new Map;
        this.hn.forEach((function(r, i) {
            var o = e.yn(i);
            if (o) {
                if (r.Be && qt(o.target)) {
                    // Document queries for document that don't exist can produce an empty
                    // result set. To update our local cache, we synthesize a document
                    // delete if we have not previously received the document. This
                    // resolves the limbo state of the document, removing it from
                    // limboDocumentRefs.
                    // TODO(dimond): Ideally we would have an explicit lookup target
                    // instead resulting in an explicit delete message and we could
                    // remove this special logic.
                    var u = new tt(o.target.path);
                    null !== e.ln.get(u) || e.pn(i, u) || e.En(i, u, new Vt(u, t));
                }
                r.Ze && (n.set(i, r.en()), r.nn());
            }
        }));
        var r = mn();
        // We extract the set of limbo-only document updates as the GC logic
        // special-cases documents that do not appear in the target cache.
        // TODO(gsoltis): Expand on this comment once GC is available in the JS
        // client.
                this._n.forEach((function(t, n) {
            var i = !0;
            n.Ae((function(t) {
                var n = e.yn(t);
                return !n || 2 /* LimboResolution */ === n.Ft || (i = !1, !1);
            })), i && (r = r.add(t));
        }));
        var i = new En(t, n, this.fn, this.ln, r);
        return this.ln = hn(), this._n = kn(), this.fn = new sn(C), i;
    }, 
    /**
     * Adds the provided document to the internal list of document updates and
     * its document key to the given target's mapping.
     */
    // Visible for testing.
    t.prototype.wn = function(t, e) {
        if (this.An(t)) {
            var n = this.pn(t, e.key) ? 2 /* Modified */ : 0 /* Added */;
            this.mn(t).sn(e.key, n), this.ln = this.ln.zt(e.key, e), this._n = this._n.zt(e.key, this.bn(e.key).add(t));
        }
    }, 
    /**
     * Removes the provided document from the target mapping. If the
     * document no longer matches the target, but the document's state is still
     * known (e.g. we know that the document was deleted or we received the change
     * that caused the filter mismatch), the new document can be provided
     * to update the remote document cache.
     */
    // Visible for testing.
    t.prototype.En = function(t, e, n) {
        if (this.An(t)) {
            var r = this.mn(t);
            this.pn(t, e) ? r.sn(e, 1 /* Removed */) : 
            // The document may have entered and left the target before we raised a
            // snapshot, so we can just ignore the change.
            r.rn(e), this._n = this._n.zt(e, this.bn(e).delete(t)), n && (this.ln = this.ln.zt(e, n));
        }
    }, t.prototype.removeTarget = function(t) {
        this.hn.delete(t);
    }, 
    /**
     * Returns the current count of documents in the target. This includes both
     * the number of documents that the LocalStore considers to be part of the
     * target as well as any accumulated changes.
     */
    t.prototype.gn = function(t) {
        var e = this.mn(t).en();
        return this.un.vn(t).size + e.qe.size - e.Qe.size;
    }, 
    /**
     * Increment the number of acks needed from watch before we can consider the
     * server to be 'in-sync' with the client's active targets.
     */
    t.prototype.on = function(t) {
        this.mn(t).on();
    }, t.prototype.mn = function(t) {
        var e = this.hn.get(t);
        return e || (e = new Sn, this.hn.set(t, e)), e;
    }, t.prototype.bn = function(t) {
        var e = this._n.get(t);
        return e || (e = new sn(C), this._n = this._n.zt(t, e)), e;
    }, 
    /**
     * Verifies that the user is still interested in this target (by calling
     * `getTargetDataForTarget()`) and that we are not waiting for pending ADDs
     * from watch.
     */
    t.prototype.An = function(t) {
        var e = null !== this.yn(t);
        return e || N$1("WatchChangeAggregator", "Detected inactive target", t), e;
    }, 
    /**
     * Returns the TargetData for an active target (i.e. a target that the user
     * is still interested in that has no outstanding target change requests).
     */
    t.prototype.yn = function(t) {
        var e = this.hn.get(t);
        return e && e.Xe ? null : this.un.Sn(t);
    }, 
    /**
     * Resets the state of a Watch target to its initial state (e.g. sets
     * 'current' to false, clears the resume token and removes its target mapping
     * from all documents).
     */
    t.prototype.Rn = function(t) {
        var e = this;
        this.hn.set(t, new Sn), this.un.vn(t).forEach((function(n) {
            e.En(t, n, /*updatedDocument=*/ null);
        }));
    }, 
    /**
     * Returns whether the LocalStore considers the document to be part of the
     * specified target.
     */
    t.prototype.pn = function(t, e) {
        return this.un.vn(t).has(e);
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * DocumentChangeSet keeps track of a set of changes to docs in a query, merging
 * duplicate events for the same doc.
 */ function kn() {
    return new rn(tt.H);
}

function On() {
    return new rn(tt.H);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Pn = {
    asc: "ASCENDING",
    desc: "DESCENDING"
}, Vn = {
    "<": "LESS_THAN",
    "<=": "LESS_THAN_OR_EQUAL",
    ">": "GREATER_THAN",
    ">=": "GREATER_THAN_OR_EQUAL",
    "==": "EQUAL",
    "!=": "NOT_EQUAL",
    "array-contains": "ARRAY_CONTAINS",
    in: "IN",
    "not-in": "NOT_IN",
    "array-contains-any": "ARRAY_CONTAINS_ANY"
}, Cn = function(t, e) {
    this.t = t, this.Bt = e;
};

/**
 * This class generates JsonObject values for the Datastore API suitable for
 * sending to either GRPC stub methods or via the JSON/HTTP REST API.
 *
 * The serializer supports both Protobuf.js and Proto3 JSON formats. By
 * setting `useProto3Json` to true, the serializer will use the Proto3 JSON
 * format.
 *
 * For a description of the Proto3 JSON format check
 * https://developers.google.com/protocol-buffers/docs/proto3#json
 *
 * TODO(klimt): We can remove the databaseId argument if we keep the full
 * resource name in documents.
 */
/**
 * Returns a value for a Date that's appropriate to put into a proto.
 */
function Ln(t, e) {
    return t.Bt ? new Date(1e3 * e.seconds).toISOString().replace(/\.\d*/, "").replace("Z", "") + "." + ("000000000" + e.nanoseconds).slice(-9) + "Z" : {
        seconds: "" + e.seconds,
        nanos: e.nanoseconds
    };
}

/**
 * Returns a value for bytes that's appropriate to put in a proto.
 *
 * Visible for testing.
 */ function Rn(t, e) {
    return t.Bt ? e.toBase64() : e.toUint8Array();
}

/**
 * Returns a ByteString based on the proto string value.
 */ function Un(t, e) {
    return Ln(t, e.j());
}

function Mn(t) {
    return k$1(!!t), X$1.K(function(t) {
        var e = ut(t);
        return new K$1(e.seconds, e.nanos);
    }(t));
}

function qn(t, e) {
    return function(t) {
        return new Z$1([ "projects", t.projectId, "databases", t.database ]);
    }(t).child("documents").child(e).rt();
}

function Fn(t) {
    var e = Z$1.ot(t);
    return k$1(hr(e)), e;
}

function jn(t, e) {
    return qn(t.t, e.path);
}

function zn(t, e) {
    var n = Fn(e);
    if (n.get(1) !== t.t.projectId) throw new q$1(M$1.INVALID_ARGUMENT, "Tried to deserialize key from different project: " + n.get(1) + " vs " + t.t.projectId);
    if (n.get(3) !== t.t.database) throw new q$1(M$1.INVALID_ARGUMENT, "Tried to deserialize key from different database: " + n.get(3) + " vs " + t.t.database);
    return new tt(Yn(n));
}

function Gn(t, e) {
    return qn(t.t, e);
}

function Bn(t) {
    var e = Fn(t);
    // In v1beta1 queries for collections at the root did not have a trailing
    // "/documents". In v1 all resource paths contain "/documents". Preserve the
    // ability to read the v1beta1 form for compatibility with queries persisted
    // in the local target cache.
        return 4 === e.length ? Z$1.ct() : Yn(e);
}

function Qn(t) {
    return new Z$1([ "projects", t.t.projectId, "databases", t.t.database ]).rt();
}

function Yn(t) {
    return k$1(t.length > 4 && "documents" === t.get(4)), t.Y(5)
    /** Creates a Document proto from key and fields (but no create/update time) */;
}

function Hn(t, e, n) {
    return {
        name: jn(t, e),
        fields: n.proto.mapValue.fields
    };
}

function Kn(t, e, n) {
    var r = zn(t, e.name), i = Mn(e.updateTime), o = new St({
        mapValue: {
            fields: e.fields
        }
    });
    return new Pt(r, i, o, {
        hasCommittedMutations: !!n
    });
}

function Xn(t, e) {
    var n;
    if (e instanceof Be) n = {
        update: Hn(t, e.key, e.value)
    }; else if (e instanceof Je) n = {
        delete: jn(t, e.key)
    }; else if (e instanceof Qe) n = {
        update: Hn(t, e.key, e.data),
        updateMask: cr(e.Gt)
    }; else {
        if (!(e instanceof $e)) return x$1();
        n = {
            verify: jn(t, e.key)
        };
    }
    return e.fieldTransforms.length > 0 && (n.updateTransforms = e.fieldTransforms.map((function(t) {
        return function(t, e) {
            var n = e.transform;
            if (n instanceof Ae) return {
                fieldPath: e.field.rt(),
                setToServerValue: "REQUEST_TIME"
            };
            if (n instanceof De) return {
                fieldPath: e.field.rt(),
                appendMissingElements: {
                    values: n.elements
                }
            };
            if (n instanceof xe) return {
                fieldPath: e.field.rt(),
                removeAllFromArray: {
                    values: n.elements
                }
            };
            if (n instanceof Oe) return {
                fieldPath: e.field.rt(),
                increment: n.Ut
            };
            throw x$1();
        }(0, t);
    }))), e.jt.Wt || (n.currentDocument = function(t, e) {
        return void 0 !== e.updateTime ? {
            updateTime: Un(t, e.updateTime)
        } : void 0 !== e.exists ? {
            exists: e.exists
        } : x$1();
    }(t, e.jt)), n;
}

function Wn(t, e) {
    var n = e.currentDocument ? function(t) {
        return void 0 !== t.updateTime ? Re.updateTime(Mn(t.updateTime)) : void 0 !== t.exists ? Re.exists(t.exists) : Re.Kt();
    }(e.currentDocument) : Re.Kt(), r = e.updateTransforms ? e.updateTransforms.map((function(e) {
        return function(t, e) {
            var n = null;
            if ("setToServerValue" in e) k$1("REQUEST_TIME" === e.setToServerValue), n = new Ae; else if ("appendMissingElements" in e) {
                var r = e.appendMissingElements.values || [];
                n = new De(r);
            } else if ("removeAllFromArray" in e) {
                var i = e.removeAllFromArray.values || [];
                n = new xe(i);
            } else "increment" in e ? n = new Oe(t, e.increment) : x$1();
            var o = $.lt(e.fieldPath);
            return new Ce(o, n);
        }(t, e);
    })) : [];
    if (e.update) {
        e.update.name;
        var i = zn(t, e.update.name), o = new St({
            mapValue: {
                fields: e.update.fields
            }
        });
        if (e.updateMask) {
            var u = function(t) {
                var e = t.fieldPaths || [];
                return new it(e.map((function(t) {
                    return $.lt(t);
                })));
            }(e.updateMask);
            return new Qe(i, o, u, n, r);
        }
        return new Be(i, o, n, r);
    }
    if (e.delete) {
        var s = zn(t, e.delete);
        return new Je(s, n);
    }
    if (e.verify) {
        var a = zn(t, e.verify);
        return new $e(a, n);
    }
    return x$1();
}

function Zn(t, e) {
    return {
        documents: [ Gn(t, e.path) ]
    };
}

function Jn(t, e) {
    // Dissect the path into parent, collectionId, and optional key filter.
    var n = {
        structuredQuery: {}
    }, r = e.path;
    null !== e.collectionGroup ? (n.parent = Gn(t, r), n.structuredQuery.from = [ {
        collectionId: e.collectionGroup,
        allDescendants: !0
    } ]) : (n.parent = Gn(t, r.X()), n.structuredQuery.from = [ {
        collectionId: r.tt()
    } ]);
    var i = function(t) {
        if (0 !== t.length) {
            var e = t.map((function(t) {
                // visible for testing
                return function(t) {
                    if ("==" /* EQUAL */ === t.op) {
                        if (At(t.value)) return {
                            unaryFilter: {
                                field: or(t.field),
                                op: "IS_NAN"
                            }
                        };
                        if (Nt(t.value)) return {
                            unaryFilter: {
                                field: or(t.field),
                                op: "IS_NULL"
                            }
                        };
                    } else if ("!=" /* NOT_EQUAL */ === t.op) {
                        if (At(t.value)) return {
                            unaryFilter: {
                                field: or(t.field),
                                op: "IS_NOT_NAN"
                            }
                        };
                        if (Nt(t.value)) return {
                            unaryFilter: {
                                field: or(t.field),
                                op: "IS_NOT_NULL"
                            }
                        };
                    }
                    return {
                        fieldFilter: {
                            field: or(t.field),
                            op: ir(t.op),
                            value: t.value
                        }
                    };
                }(t);
            }));
            return 1 === e.length ? e[0] : {
                compositeFilter: {
                    op: "AND",
                    filters: e
                }
            };
        }
    }(e.filters);
    i && (n.structuredQuery.where = i);
    var o = function(t) {
        if (0 !== t.length) return t.map((function(t) {
            // visible for testing
            return function(t) {
                return {
                    field: or(t.field),
                    direction: rr(t.dir)
                };
            }(t);
        }));
    }(e.orderBy);
    o && (n.structuredQuery.orderBy = o);
    var u = function(t, e) {
        return t.Bt || lt(e) ? e : {
            value: e
        };
    }(t, e.limit);
    return null !== u && (n.structuredQuery.limit = u), e.startAt && (n.structuredQuery.startAt = er(e.startAt)), 
    e.endAt && (n.structuredQuery.endAt = er(e.endAt)), n;
}

function $n(t) {
    var e = Bn(t.parent), n = t.structuredQuery, r = n.from ? n.from.length : 0, i = null;
    if (r > 0) {
        k$1(1 === r);
        var o = n.from[0];
        o.allDescendants ? i = o.collectionId : e = e.child(o.collectionId);
    }
    var u = [];
    n.where && (u = tr(n.where));
    var s = [];
    n.orderBy && (s = n.orderBy.map((function(t) {
        return function(t) {
            return new Zt(ur(t.field), 
            // visible for testing
            function(t) {
                switch (t) {
                  case "ASCENDING":
                    return "asc" /* ASCENDING */;

                  case "DESCENDING":
                    return "desc" /* DESCENDING */;

                  default:
                    return;
                }
            }(t.direction));
        }(t);
    })));
    var a = null;
    n.limit && (a = function(t) {
        var e;
        return lt(e = "object" == typeof t ? t.value : t) ? null : e;
    }(n.limit));
    var c = null;
    n.startAt && (c = nr(n.startAt));
    var h = null;
    return n.endAt && (h = nr(n.endAt)), ne(e, i, s, u, a, "F" /* First */ , c, h);
}

function tr(t) {
    return t ? void 0 !== t.unaryFilter ? [ ar(t) ] : void 0 !== t.fieldFilter ? [ sr(t) ] : void 0 !== t.compositeFilter ? t.compositeFilter.filters.map((function(t) {
        return tr(t);
    })).reduce((function(t, e) {
        return t.concat(e);
    })) : x$1() : [];
}

function er(t) {
    return {
        before: t.before,
        values: t.position
    };
}

function nr(t) {
    var e = !!t.before, n = t.values || [];
    return new Xt(n, e);
}

// visible for testing
function rr(t) {
    return Pn[t];
}

function ir(t) {
    return Vn[t];
}

function or(t) {
    return {
        fieldPath: t.rt()
    };
}

function ur(t) {
    return $.lt(t.fieldPath);
}

function sr(t) {
    return Ft.create(ur(t.fieldFilter.field), function(t) {
        switch (t) {
          case "EQUAL":
            return "==" /* EQUAL */;

          case "NOT_EQUAL":
            return "!=" /* NOT_EQUAL */;

          case "GREATER_THAN":
            return ">" /* GREATER_THAN */;

          case "GREATER_THAN_OR_EQUAL":
            return ">=" /* GREATER_THAN_OR_EQUAL */;

          case "LESS_THAN":
            return "<" /* LESS_THAN */;

          case "LESS_THAN_OR_EQUAL":
            return "<=" /* LESS_THAN_OR_EQUAL */;

          case "ARRAY_CONTAINS":
            return "array-contains" /* ARRAY_CONTAINS */;

          case "IN":
            return "in" /* IN */;

          case "NOT_IN":
            return "not-in" /* NOT_IN */;

          case "ARRAY_CONTAINS_ANY":
            return "array-contains-any" /* ARRAY_CONTAINS_ANY */;

          case "OPERATOR_UNSPECIFIED":
          default:
            return x$1();
        }
    }(t.fieldFilter.op), t.fieldFilter.value);
}

function ar(t) {
    switch (t.unaryFilter.op) {
      case "IS_NAN":
        var e = ur(t.unaryFilter.field);
        return Ft.create(e, "==" /* EQUAL */ , {
            doubleValue: NaN
        });

      case "IS_NULL":
        var n = ur(t.unaryFilter.field);
        return Ft.create(n, "==" /* EQUAL */ , {
            nullValue: "NULL_VALUE"
        });

      case "IS_NOT_NAN":
        var r = ur(t.unaryFilter.field);
        return Ft.create(r, "!=" /* NOT_EQUAL */ , {
            doubleValue: NaN
        });

      case "IS_NOT_NULL":
        var i = ur(t.unaryFilter.field);
        return Ft.create(i, "!=" /* NOT_EQUAL */ , {
            nullValue: "NULL_VALUE"
        });

      case "OPERATOR_UNSPECIFIED":
      default:
        return x$1();
    }
}

function cr(t) {
    var e = [];
    return t.fields.forEach((function(t) {
        return e.push(t.rt());
    })), {
        fieldPaths: e
    };
}

function hr(t) {
    // Resource names have at least 4 components (project ID, database ID)
    return t.length >= 4 && "projects" === t.get(0) && "databases" === t.get(2);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var fr = function() {
    var t = this;
    this.promise = new Promise((function(e, n) {
        t.resolve = e, t.reject = n;
    }));
}, lr = /** @class */ function() {
    function t(t) {
        var e = this;
        // NOTE: next/catchCallback will always point to our own wrapper functions,
        // not the user's raw next() or catch() callbacks.
                this.Dn = null, this.Cn = null, 
        // When the operation resolves, we'll set result or error and mark isDone.
        this.result = void 0, this.error = void 0, this.xn = !1, 
        // Set to true when .then() or .catch() are called and prevents additional
        // chaining.
        this.Nn = !1, t((function(t) {
            e.xn = !0, e.result = t, e.Dn && 
            // value should be defined unless T is Void, but we can't express
            // that in the type system.
            e.Dn(t);
        }), (function(t) {
            e.xn = !0, e.error = t, e.Cn && e.Cn(t);
        }));
    }
    return t.prototype.catch = function(t) {
        return this.next(void 0, t);
    }, t.prototype.next = function(e, n) {
        var r = this;
        return this.Nn && x$1(), this.Nn = !0, this.xn ? this.error ? this.$n(n, this.error) : this.Fn(e, this.result) : new t((function(t, i) {
            r.Dn = function(n) {
                r.Fn(e, n).next(t, i);
            }, r.Cn = function(e) {
                r.$n(n, e).next(t, i);
            };
        }));
    }, t.prototype.On = function() {
        var t = this;
        return new Promise((function(e, n) {
            t.next(e, n);
        }));
    }, t.prototype.kn = function(e) {
        try {
            var n = e();
            return n instanceof t ? n : t.resolve(n);
        } catch (e) {
            return t.reject(e);
        }
    }, t.prototype.Fn = function(e, n) {
        return e ? this.kn((function() {
            return e(n);
        })) : t.resolve(n);
    }, t.prototype.$n = function(e, n) {
        return e ? this.kn((function() {
            return e(n);
        })) : t.reject(n);
    }, t.resolve = function(e) {
        return new t((function(t, n) {
            t(e);
        }));
    }, t.reject = function(e) {
        return new t((function(t, n) {
            n(e);
        }));
    }, t.Mn = function(
    // Accept all Promise types in waitFor().
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e) {
        return new t((function(t, n) {
            var r = 0, i = 0, o = !1;
            e.forEach((function(e) {
                ++r, e.next((function() {
                    ++i, o && i === r && t();
                }), (function(t) {
                    return n(t);
                }));
            })), o = !0, i === r && t();
        }));
    }, 
    /**
     * Given an array of predicate functions that asynchronously evaluate to a
     * boolean, implements a short-circuiting `or` between the results. Predicates
     * will be evaluated until one of them returns `true`, then stop. The final
     * result will be whether any of them returned `true`.
     */
    t.Ln = function(e) {
        for (var n = t.resolve(!1), r = function(e) {
            n = n.next((function(n) {
                return n ? t.resolve(n) : e();
            }));
        }, i = 0, o = e; i < o.length; i++) {
            r(o[i]);
        }
        return n;
    }, t.forEach = function(t, e) {
        var n = this, r = [];
        return t.forEach((function(t, i) {
            r.push(e.call(n, t, i));
        })), this.Mn(r);
    }, t;
}(), pr = /** @class */ function() {
    function t(t, e) {
        var n = this;
        this.action = t, this.transaction = e, this.aborted = !1, 
        /**
             * A promise that resolves with the result of the IndexedDb transaction.
             */
        this.Bn = new fr, this.transaction.oncomplete = function() {
            n.Bn.resolve();
        }, this.transaction.onabort = function() {
            e.error ? n.Bn.reject(new yr(t, e.error)) : n.Bn.resolve();
        }, this.transaction.onerror = function(e) {
            var r = _r(e.target.error);
            n.Bn.reject(new yr(t, r));
        };
    }
    return t.open = function(e, n, r, i) {
        try {
            return new t(n, e.transaction(i, r));
        } catch (e) {
            throw new yr(n, e);
        }
    }, Object.defineProperty(t.prototype, "qn", {
        get: function() {
            return this.Bn.promise;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.abort = function(t) {
        t && this.Bn.reject(t), this.aborted || (N$1("SimpleDb", "Aborting transaction:", t ? t.message : "Client-initiated abort"), 
        this.aborted = !0, this.transaction.abort());
    }, 
    /**
     * Returns a SimpleDbStore<KeyType, ValueType> for the specified store. All
     * operations performed on the SimpleDbStore happen within the context of this
     * transaction and it cannot be used anymore once the transaction is
     * completed.
     *
     * Note that we can't actually enforce that the KeyType and ValueType are
     * correct, but they allow type safety through the rest of the consuming code.
     */
    t.prototype.store = function(t) {
        var e = this.transaction.objectStore(t);
        return new gr(e);
    }, t;
}(), dr = /** @class */ function() {
    /*
     * Creates a new SimpleDb wrapper for IndexedDb database `name`.
     *
     * Note that `version` must not be a downgrade. IndexedDB does not support
     * downgrading the schema version. We currently do not support any way to do
     * versioning outside of IndexedDB's versioning mechanism, as only
     * version-upgrade transactions are allowed to do things like create
     * objectstores.
     */
    function t(e, r, i) {
        this.name = e, this.version = r, this.Un = i, 
        // NOTE: According to https://bugs.webkit.org/show_bug.cgi?id=197050, the
        // bug we're checking for should exist in iOS >= 12.2 and < 13, but for
        // whatever reason it's much harder to hit after 12.2 so we only proactively
        // log on 12.2.
        12.2 === t.Qn(getUA()) && A$1("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.");
    }
    /** Deletes the specified database. */    return t.delete = function(t) {
        return N$1("SimpleDb", "Removing database:", t), wr(window.indexedDB.deleteDatabase(t)).On();
    }, 
    /** Returns true if IndexedDB is available in the current environment. */ t.Kn = function() {
        if ("undefined" == typeof indexedDB) return !1;
        if (t.Wn()) return !0;
        // We extensively use indexed array values and compound keys,
        // which IE and Edge do not support. However, they still have indexedDB
        // defined on the window, so we need to check for them here and make sure
        // to return that persistence is not enabled for those browsers.
        // For tracking support of this feature, see here:
        // https://developer.microsoft.com/en-us/microsoft-edge/platform/status/indexeddbarraysandmultientrysupport/
        // Check the UA string to find out the browser.
                var e = getUA(), r = t.Qn(e), i = 0 < r && r < 10, o = t.jn(e), u = 0 < o && o < 4.5;
        // IE 10
        // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
        // IE 11
        // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
        // Edge
        // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML,
        // like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
        // iOS Safari: Disable for users running iOS version < 10.
                return !(e.indexOf("MSIE ") > 0 || e.indexOf("Trident/") > 0 || e.indexOf("Edge/") > 0 || i || u);
    }, 
    /**
     * Returns true if the backing IndexedDB store is the Node IndexedDBShim
     * (see https://github.com/axemclion/IndexedDBShim).
     */
    t.Wn = function() {
        var t;
        return "undefined" != typeof process && "YES" === (null === (t = process.env) || void 0 === t ? void 0 : t.Gn);
    }, 
    /** Helper to get a typed SimpleDbStore from a transaction. */ t.zn = function(t, e) {
        return t.store(e);
    }, 
    // visible for testing
    /** Parse User Agent to determine iOS version. Returns -1 if not found. */
    t.Qn = function(t) {
        var e = t.match(/i(?:phone|pad|pod) os ([\d_]+)/i), n = e ? e[1].split("_").slice(0, 2).join(".") : "-1";
        return Number(n);
    }, 
    // visible for testing
    /** Parse User Agent to determine Android version. Returns -1 if not found. */
    t.jn = function(t) {
        var e = t.match(/Android ([\d.]+)/i), n = e ? e[1].split(".").slice(0, 2).join(".") : "-1";
        return Number(n);
    }, 
    /**
     * Opens the specified database, creating or upgrading it if necessary.
     */
    t.prototype.Hn = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, n = this;
            return __generator(this, (function(r) {
                switch (r.label) {
                  case 0:
                    return this.db ? [ 3 /*break*/ , 2 ] : (N$1("SimpleDb", "Opening database:", this.name), 
                    e = this, [ 4 /*yield*/ , new Promise((function(e, r) {
                        // TODO(mikelehen): Investigate browser compatibility.
                        // https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB
                        // suggests IE9 and older WebKit browsers handle upgrade
                        // differently. They expect setVersion, as described here:
                        // https://developer.mozilla.org/en-US/docs/Web/API/IDBVersionChangeRequest/setVersion
                        var i = indexedDB.open(n.name, n.version);
                        i.onsuccess = function(t) {
                            var n = t.target.result;
                            e(n);
                        }, i.onblocked = function() {
                            r(new yr(t, "Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."));
                        }, i.onerror = function(e) {
                            var n = e.target.error;
                            "VersionError" === n.name ? r(new q$1(M$1.FAILED_PRECONDITION, "A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")) : r(new yr(t, n));
                        }, i.onupgradeneeded = function(t) {
                            N$1("SimpleDb", 'Database "' + n.name + '" requires upgrade from version:', t.oldVersion);
                            var e = t.target.result;
                            n.Un.Jn(e, i.transaction, t.oldVersion, n.version).next((function() {
                                N$1("SimpleDb", "Database upgrade to version " + n.version + " complete");
                            }));
                        };
                    })) ]);

                  case 1:
                    e.db = r.sent(), r.label = 2;

                  case 2:
                    return [ 2 /*return*/ , (this.Yn && (this.db.onversionchange = function(t) {
                        return n.Yn(t);
                    }), this.db) ];
                }
            }));
        }));
    }, t.prototype.Xn = function(t) {
        this.Yn = t, this.db && (this.db.onversionchange = function(e) {
            return t(e);
        });
    }, t.prototype.runTransaction = function(t, e, n, r) {
        return __awaiter(this, void 0, void 0, (function() {
            var i, o, u, s, a;
            return __generator(this, (function(c) {
                switch (c.label) {
                  case 0:
                    i = "readonly" === e, o = 0, u = function() {
                        var e, u, a, c, h;
                        return __generator(this, (function(f) {
                            switch (f.label) {
                              case 0:
                                ++o, f.label = 1;

                              case 1:
                                return f.trys.push([ 1, 4, , 5 ]), [ 4 /*yield*/ , s.Hn(t) ];

                              case 2:
                                // Wait for the transaction to complete (i.e. IndexedDb's onsuccess event to
                                // fire), but still return the original transactionFnResult back to the
                                // caller.
                                return s.db = f.sent(), e = pr.open(s.db, t, i ? "readonly" : "readwrite", n), u = r(e).catch((function(t) {
                                    // Abort the transaction if there was an error.
                                    return e.abort(t), lr.reject(t);
                                })).On(), a = {}, u.catch((function() {})), [ 4 /*yield*/ , e.qn ];

                              case 3:
                                return [ 2 /*return*/ , (a.value = (
                                // Wait for the transaction to complete (i.e. IndexedDb's onsuccess event to
                                // fire), but still return the original transactionFnResult back to the
                                // caller.
                                f.sent(), u), a) ];

                              case 4:
                                return c = f.sent(), h = "FirebaseError" !== c.name && o < 3, N$1("SimpleDb", "Transaction failed with error:", c.message, "Retrying:", h), 
                                s.close(), h ? [ 3 /*break*/ , 5 ] : [ 2 /*return*/ , {
                                    value: Promise.reject(c)
                                } ];

                              case 5:
                                return [ 2 /*return*/ ];
                            }
                        }));
                    }, s = this, c.label = 1;

                  case 1:
                    return [ 5 /*yield**/ , u() ];

                  case 2:
                    if ("object" == typeof (a = c.sent())) return [ 2 /*return*/ , a.value ];
                    c.label = 3;

                  case 3:
                    return [ 3 /*break*/ , 1 ];

                  case 4:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.close = function() {
        this.db && this.db.close(), this.db = void 0;
    }, t;
}(), vr = /** @class */ function() {
    function t(t) {
        this.Zn = t, this.ts = !1, this.es = null;
    }
    return Object.defineProperty(t.prototype, "xn", {
        get: function() {
            return this.ts;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "ns", {
        get: function() {
            return this.es;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "cursor", {
        set: function(t) {
            this.Zn = t;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /**
     * This function can be called to stop iteration at any point.
     */
    t.prototype.done = function() {
        this.ts = !0;
    }, 
    /**
     * This function can be called to skip to that next key, which could be
     * an index or a primary key.
     */
    t.prototype.ss = function(t) {
        this.es = t;
    }, 
    /**
     * Delete the current cursor value from the object store.
     *
     * NOTE: You CANNOT do this with a keysOnly query.
     */
    t.prototype.delete = function() {
        return wr(this.Zn.delete());
    }, t;
}(), yr = /** @class */ function(t) {
    function e(e, n) {
        var r = this;
        return (r = t.call(this, M$1.UNAVAILABLE, "IndexedDB transaction '" + e + "' failed: " + n) || this).name = "IndexedDbTransactionError", 
        r;
    }
    return __extends$1(e, t), e;
}(q$1);

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * PersistencePromise is essentially a re-implementation of Promise except
 * it has a .next() method instead of .then() and .next() and .catch() callbacks
 * are executed synchronously when a PersistencePromise resolves rather than
 * asynchronously (Promise implementations use setImmediate() or similar).
 *
 * This is necessary to interoperate with IndexedDB which will automatically
 * commit transactions if control is returned to the event loop without
 * synchronously initiating another operation on the transaction.
 *
 * NOTE: .then() and .catch() only allow a single consumer, unlike normal
 * Promises.
 */
/** Verifies whether `e` is an IndexedDbTransactionError. */ function mr(t) {
    // Use name equality, as instanceof checks on errors don't work with errors
    // that wrap other errors.
    return "IndexedDbTransactionError" === t.name;
}

/**
 * A wrapper around an IDBObjectStore providing an API that:
 *
 * 1) Has generic KeyType / ValueType parameters to provide strongly-typed
 * methods for acting against the object store.
 * 2) Deals with IndexedDB's onsuccess / onerror event callbacks, making every
 * method return a PersistencePromise instead.
 * 3) Provides a higher-level API to avoid needing to do excessive wrapping of
 * intermediate IndexedDB types (IDBCursorWithValue, etc.)
 */ var gr = /** @class */ function() {
    function t(t) {
        this.store = t;
    }
    return t.prototype.put = function(t, e) {
        var n;
        return void 0 !== e ? (N$1("SimpleDb", "PUT", this.store.name, t, e), n = this.store.put(e, t)) : (N$1("SimpleDb", "PUT", this.store.name, "<auto-key>", t), 
        n = this.store.put(t)), wr(n);
    }, 
    /**
     * Adds a new value into an Object Store and returns the new key. Similar to
     * IndexedDb's `add()`, this method will fail on primary key collisions.
     *
     * @param value - The object to write.
     * @returns The key of the value to add.
     */
    t.prototype.add = function(t) {
        return N$1("SimpleDb", "ADD", this.store.name, t, t), wr(this.store.add(t));
    }, 
    /**
     * Gets the object with the specified key from the specified store, or null
     * if no object exists with the specified key.
     *
     * @key The key of the object to get.
     * @returns The object with the specified key or null if no object exists.
     */
    t.prototype.get = function(t) {
        var e = this;
        // We're doing an unsafe cast to ValueType.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                return wr(this.store.get(t)).next((function(n) {
            // Normalize nonexistence to null.
            return void 0 === n && (n = null), N$1("SimpleDb", "GET", e.store.name, t, n), n;
        }));
    }, t.prototype.delete = function(t) {
        return N$1("SimpleDb", "DELETE", this.store.name, t), wr(this.store.delete(t));
    }, 
    /**
     * If we ever need more of the count variants, we can add overloads. For now,
     * all we need is to count everything in a store.
     *
     * Returns the number of rows in the store.
     */
    t.prototype.count = function() {
        return N$1("SimpleDb", "COUNT", this.store.name), wr(this.store.count());
    }, t.prototype.rs = function(t, e) {
        var n = this.cursor(this.options(t, e)), r = [];
        return this.os(n, (function(t, e) {
            r.push(e);
        })).next((function() {
            return r;
        }));
    }, t.prototype.cs = function(t, e) {
        N$1("SimpleDb", "DELETE ALL", this.store.name);
        var n = this.options(t, e);
        n.us = !1;
        var r = this.cursor(n);
        return this.os(r, (function(t, e, n) {
            return n.delete();
        }));
    }, t.prototype.hs = function(t, e) {
        var n;
        e ? n = t : (n = {}, e = t);
        var r = this.cursor(n);
        return this.os(r, e);
    }, 
    /**
     * Iterates over a store, but waits for the given callback to complete for
     * each entry before iterating the next entry. This allows the callback to do
     * asynchronous work to determine if this iteration should continue.
     *
     * The provided callback should return `true` to continue iteration, and
     * `false` otherwise.
     */
    t.prototype.ls = function(t) {
        var e = this.cursor({});
        return new lr((function(n, r) {
            e.onerror = function(t) {
                var e = _r(t.target.error);
                r(e);
            }, e.onsuccess = function(e) {
                var r = e.target.result;
                r ? t(r.primaryKey, r.value).next((function(t) {
                    t ? r.continue() : n();
                })) : n();
            };
        }));
    }, t.prototype.os = function(t, e) {
        var n = [];
        return new lr((function(r, i) {
            t.onerror = function(t) {
                i(t.target.error);
            }, t.onsuccess = function(t) {
                var i = t.target.result;
                if (i) {
                    var o = new vr(i), u = e(i.primaryKey, i.value, o);
                    if (u instanceof lr) {
                        var s = u.catch((function(t) {
                            return o.done(), lr.reject(t);
                        }));
                        n.push(s);
                    }
                    o.xn ? r() : null === o.ns ? i.continue() : i.continue(o.ns);
                } else r();
            };
        })).next((function() {
            return lr.Mn(n);
        }));
    }, t.prototype.options = function(t, e) {
        var n;
        return void 0 !== t && ("string" == typeof t ? n = t : e = t), {
            index: n,
            range: e
        };
    }, t.prototype.cursor = function(t) {
        var e = "next";
        if (t.reverse && (e = "prev"), t.index) {
            var n = this.store.index(t.index);
            return t.us ? n.openKeyCursor(t.range, e) : n.openCursor(t.range, e);
        }
        return this.store.openCursor(t.range, e);
    }, t;
}();

/**
 * Wraps an IDBRequest in a PersistencePromise, using the onsuccess / onerror
 * handlers to resolve / reject the PersistencePromise as appropriate.
 */ function wr(t) {
    return new lr((function(e, n) {
        t.onsuccess = function(t) {
            var n = t.target.result;
            e(n);
        }, t.onerror = function(t) {
            var e = _r(t.target.error);
            n(e);
        };
    }));
}

// Guard so we only report the error once.
var br = !1;

function _r(t) {
    var e = dr.Qn(getUA());
    if (e >= 12.2 && e < 13) {
        var r = "An internal error was encountered in the Indexed Database server";
        if (t.message.indexOf(r) >= 0) {
            // Wrap error in a more descriptive one.
            var i = new q$1("internal", "IOS_INDEXEDDB_BUG1: IndexedDb has thrown '" + r + "'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.");
            return br || (br = !0, 
            // Throw a global exception outside of this promise chain, for the user to
            // potentially catch.
            setTimeout((function() {
                throw i;
            }), 0)), i;
        }
    }
    return t;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Represents an operation scheduled to be run in the future on an AsyncQueue.
 *
 * It is created via DelayedOperation.createAndSchedule().
 *
 * Supports cancellation (via cancel()) and early execution (via skipDelay()).
 *
 * Note: We implement `PromiseLike` instead of `Promise`, as the `Promise` type
 * in newer versions of TypeScript defines `finally`, which is not available in
 * IE.
 */ var Ir = /** @class */ function() {
    function t(t, e, n, r, i) {
        this._s = t, this.fs = e, this.ds = n, this.op = r, this.ws = i, this.Es = new fr, 
        this.then = this.Es.promise.then.bind(this.Es.promise), 
        // It's normal for the deferred promise to be canceled (due to cancellation)
        // and so we attach a dummy catch callback to avoid
        // 'UnhandledPromiseRejectionWarning' log spam.
        this.Es.promise.catch((function(t) {}))
        /**
     * Creates and returns a DelayedOperation that has been scheduled to be
     * executed on the provided asyncQueue after the provided delayMs.
     *
     * @param asyncQueue - The queue to schedule the operation on.
     * @param id - A Timer ID identifying the type of operation this is.
     * @param delayMs - The delay (ms) before the operation should be scheduled.
     * @param op - The operation to run.
     * @param removalCallback - A callback to be called synchronously once the
     *   operation is executed or canceled, notifying the AsyncQueue to remove it
     *   from its delayedOperations list.
     *   PORTING NOTE: This exists to prevent making removeDelayedOperation() and
     *   the DelayedOperation class public.
     */;
    }
    return t.Ts = function(e, n, r, i, o) {
        var u = new t(e, n, Date.now() + r, i, o);
        return u.start(r), u;
    }, 
    /**
     * Starts the timer. This is called immediately after construction by
     * createAndSchedule().
     */
    t.prototype.start = function(t) {
        var e = this;
        this.Is = setTimeout((function() {
            return e.As();
        }), t);
    }, 
    /**
     * Queues the operation to run immediately (if it hasn't already been run or
     * canceled).
     */
    t.prototype.Rs = function() {
        return this.As();
    }, 
    /**
     * Cancels the operation if it hasn't already been executed or canceled. The
     * promise will be rejected.
     *
     * As long as the operation has not yet been run, calling cancel() provides a
     * guarantee that the operation will not be run.
     */
    t.prototype.cancel = function(t) {
        null !== this.Is && (this.clearTimeout(), this.Es.reject(new q$1(M$1.CANCELLED, "Operation cancelled" + (t ? ": " + t : ""))));
    }, t.prototype.As = function() {
        var t = this;
        this._s.Ps((function() {
            return null !== t.Is ? (t.clearTimeout(), t.op().then((function(e) {
                return t.Es.resolve(e);
            }))) : Promise.resolve();
        }));
    }, t.prototype.clearTimeout = function() {
        null !== this.Is && (this.ws(this), clearTimeout(this.Is), this.Is = null);
    }, t;
}();

/**
 * Returns a FirestoreError that can be surfaced to the user if the provided
 * error is an IndexedDbTransactionError. Re-throws the error otherwise.
 */ function Er(t, e) {
    if (A$1("AsyncQueue", e + ": " + t), mr(t)) return new q$1(M$1.UNAVAILABLE, e + ": " + t);
    throw t;
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Tr = "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.", Nr = /** @class */ function() {
    function t() {
        this.ys = [];
    }
    return t.prototype.gs = function(t) {
        this.ys.push(t);
    }, t.prototype.Vs = function() {
        this.ys.forEach((function(t) {
            return t();
        }));
    }, t;
}();

/**
 * A base class representing a persistence transaction, encapsulating both the
 * transaction's sequence numbers as well as a list of onCommitted listeners.
 *
 * When you call Persistence.runTransaction(), it will create a transaction and
 * pass it to your callback. You then pass it to any method that operates
 * on persistence.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Encodes a resource path into a IndexedDb-compatible string form.
 */
function Ar(t) {
    for (var e = "", n = 0; n < t.length; n++) e.length > 0 && (e = Sr(e)), e = Dr(t.get(n), e);
    return Sr(e);
}

/** Encodes a single segment of a resource path into the given result */ function Dr(t, e) {
    for (var n = e, r = t.length, i = 0; i < r; i++) {
        var o = t.charAt(i);
        switch (o) {
          case "\0":
            n += "";
            break;

          case "":
            n += "";
            break;

          default:
            n += o;
        }
    }
    return n;
}

/** Encodes a path separator into the given result */ function Sr(t) {
    return t + "";
}

/**
 * Decodes the given IndexedDb-compatible string form of a resource path into
 * a ResourcePath instance. Note that this method is not suitable for use with
 * decoding resource names from the server; those are One Platform format
 * strings.
 */ function xr(t) {
    // Event the empty path must encode as a path of at least length 2. A path
    // with exactly 2 must be the empty path.
    var e = t.length;
    if (k$1(e >= 2), 2 === e) return k$1("" === t.charAt(0) && "" === t.charAt(1)), Z$1.ct();
    // Escape characters cannot exist past the second-to-last position in the
    // source value.
        for (var n = e - 2, r = [], i = "", o = 0; o < e; ) {
        // The last two characters of a valid encoded path must be a separator, so
        // there must be an end to this segment.
        var u = t.indexOf("", o);
        switch ((u < 0 || u > n) && x$1(), t.charAt(u + 1)) {
          case "":
            var s = t.substring(o, u), a = void 0;
            0 === i.length ? 
            // Avoid copying for the common case of a segment that excludes \0
            // and \001
            a = s : (a = i += s, i = ""), r.push(a);
            break;

          case "":
            i += t.substring(o, u), i += "\0";
            break;

          case "":
            // The escape character can be used in the output to encode itself.
            i += t.substring(o, u + 1);
            break;

          default:
            x$1();
        }
        o = u + 2;
    }
    return new Z$1(r);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Schema Version for the Web client:
 * 1.  Initial version including Mutation Queue, Query Cache, and Remote
 *     Document Cache
 * 2.  Used to ensure a targetGlobal object exists and add targetCount to it. No
 *     longer required because migration 3 unconditionally clears it.
 * 3.  Dropped and re-created Query Cache to deal with cache corruption related
 *     to limbo resolution. Addresses
 *     https://github.com/firebase/firebase-ios-sdk/issues/1548
 * 4.  Multi-Tab Support.
 * 5.  Removal of held write acks.
 * 6.  Create document global for tracking document cache size.
 * 7.  Ensure every cached document has a sentinel row with a sequence number.
 * 8.  Add collection-parent index for Collection Group queries.
 * 9.  Change RemoteDocumentChanges store to be keyed by readTime rather than
 *     an auto-incrementing ID. This is required for Index-Free queries.
 * 10. Rewrite the canonical IDs to the explicit Protobuf-based format.
 * 11. Add bundles and named_queries for bundle support.
 */
/**
 * Wrapper class to store timestamps (seconds and nanos) in IndexedDb objects.
 */ var kr = function(t, e) {
    this.seconds = t, this.nanoseconds = e;
}, Or = function(t, 
/** Whether to allow shared access from multiple tabs. */
e, n) {
    this.ownerId = t, this.allowTabSynchronization = e, this.leaseTimestampMs = n;
};

/**
 * A singleton object to be stored in the 'owner' store in IndexedDb.
 *
 * A given database can have a single primary tab assigned at a given time. That
 * tab must validate that it is still holding the primary lease before every
 * operation that requires locked access. The primary tab should regularly
 * write an updated timestamp to this lease to prevent other tabs from
 * "stealing" the primary lease
 */
/**
 * Name of the IndexedDb object store.
 *
 * Note that the name 'owner' is chosen to ensure backwards compatibility with
 * older clients that only supported single locked access to the persistence
 * layer.
 */
Or.store = "owner", 
/**
     * The key string used for the single object that exists in the
     * DbPrimaryClient store.
     */
Or.key = "owner";

/**
 * An object to be stored in the 'mutationQueues' store in IndexedDb.
 *
 * Each user gets a single queue of MutationBatches to apply to the server.
 * DbMutationQueue tracks the metadata about the queue.
 */
var Pr = function(
/**
     * The normalized user ID to which this queue belongs.
     */
t, 
/**
     * An identifier for the highest numbered batch that has been acknowledged
     * by the server. All MutationBatches in this queue with batchIds less
     * than or equal to this value are considered to have been acknowledged by
     * the server.
     *
     * NOTE: this is deprecated and no longer used by the code.
     */
e, 
/**
     * A stream token that was previously sent by the server.
     *
     * See StreamingWriteRequest in datastore.proto for more details about
     * usage.
     *
     * After sending this token, earlier tokens may not be used anymore so
     * only a single stream token is retained.
     *
     * NOTE: this is deprecated and no longer used by the code.
     */
n) {
    this.userId = t, this.lastAcknowledgedBatchId = e, this.lastStreamToken = n;
};

/** Name of the IndexedDb object store.  */ Pr.store = "mutationQueues", 
/** Keys are automatically assigned via the userId property. */
Pr.keyPath = "userId";

/**
 * An object to be stored in the 'mutations' store in IndexedDb.
 *
 * Represents a batch of user-level mutations intended to be sent to the server
 * in a single write. Each user-level batch gets a separate DbMutationBatch
 * with a new batchId.
 */
var Vr = function(
/**
     * The normalized user ID to which this batch belongs.
     */
t, 
/**
     * An identifier for this batch, allocated using an auto-generated key.
     */
e, 
/**
     * The local write time of the batch, stored as milliseconds since the
     * epoch.
     */
n, 
/**
     * A list of "mutations" that represent a partial base state from when this
     * write batch was initially created. During local application of the write
     * batch, these baseMutations are applied prior to the real writes in order
     * to override certain document fields from the remote document cache. This
     * is necessary in the case of non-idempotent writes (e.g. `increment()`
     * transforms) to make sure that the local view of the modified documents
     * doesn't flicker if the remote document cache receives the result of the
     * non-idempotent write before the write is removed from the queue.
     *
     * These mutations are never sent to the backend.
     */
r, 
/**
     * A list of mutations to apply. All mutations will be applied atomically.
     *
     * Mutations are serialized via toMutation().
     */
i) {
    this.userId = t, this.batchId = e, this.localWriteTimeMs = n, this.baseMutations = r, 
    this.mutations = i;
};

/** Name of the IndexedDb object store.  */ Vr.store = "mutations", 
/** Keys are automatically assigned via the userId, batchId properties. */
Vr.keyPath = "batchId", 
/** The index name for lookup of mutations by user. */
Vr.userMutationsIndex = "userMutationsIndex", 
/** The user mutations index is keyed by [userId, batchId] pairs. */
Vr.userMutationsKeyPath = [ "userId", "batchId" ];

/**
 * An object to be stored in the 'documentMutations' store in IndexedDb.
 *
 * A manually maintained index of all the mutation batches that affect a given
 * document key. The rows in this table are references based on the contents of
 * DbMutationBatch.mutations.
 */
var Cr = /** @class */ function() {
    function t() {}
    /**
     * Creates a [userId] key for use in the DbDocumentMutations index to iterate
     * over all of a user's document mutations.
     */    return t.prefixForUser = function(t) {
        return [ t ];
    }, 
    /**
     * Creates a [userId, encodedPath] key for use in the DbDocumentMutations
     * index to iterate over all at document mutations for a given path or lower.
     */
    t.prefixForPath = function(t, e) {
        return [ t, Ar(e) ];
    }, 
    /**
     * Creates a full index key of [userId, encodedPath, batchId] for inserting
     * and deleting into the DbDocumentMutations index.
     */
    t.key = function(t, e, n) {
        return [ t, Ar(e), n ];
    }, t;
}();

Cr.store = "documentMutations", 
/**
     * Because we store all the useful information for this store in the key,
     * there is no useful information to store as the value. The raw (unencoded)
     * path cannot be stored because IndexedDb doesn't store prototype
     * information.
     */
Cr.PLACEHOLDER = new Cr;

/**
 * Represents the known absence of a document at a particular version.
 * Stored in IndexedDb as part of a DbRemoteDocument object.
 */
var Lr = function(t, e) {
    this.path = t, this.readTime = e;
}, Rr = function(t, e) {
    this.path = t, this.version = e;
}, Ur = 
// TODO: We are currently storing full document keys almost three times
// (once as part of the primary key, once - partly - as `parentPath` and once
// inside the encoded documents). During our next migration, we should
// rewrite the primary key as parentPath + document ID which would allow us
// to drop one value.
function(
/**
     * Set to an instance of DbUnknownDocument if the data for a document is
     * not known, but it is known that a document exists at the specified
     * version (e.g. it had a successful update applied to it)
     */
t, 
/**
     * Set to an instance of a DbNoDocument if it is known that no document
     * exists.
     */
e, 
/**
     * Set to an instance of a Document if there's a cached version of the
     * document.
     */
n, 
/**
     * Documents that were written to the remote document store based on
     * a write acknowledgment are marked with `hasCommittedMutations`. These
     * documents are potentially inconsistent with the backend's copy and use
     * the write's commit version as their document version.
     */
r, 
/**
     * When the document was read from the backend. Undefined for data written
     * prior to schema version 9.
     */
i, 
/**
     * The path of the collection this document is part of. Undefined for data
     * written prior to schema version 9.
     */
o) {
    this.unknownDocument = t, this.noDocument = e, this.document = n, this.hasCommittedMutations = r, 
    this.readTime = i, this.parentPath = o;
};

/**
 * Represents a document that is known to exist but whose data is unknown.
 * Stored in IndexedDb as part of a DbRemoteDocument object.
 */ Ur.store = "remoteDocuments", 
/**
     * An index that provides access to all entries sorted by read time (which
     * corresponds to the last modification time of each row).
     *
     * This index is used to provide a changelog for Multi-Tab.
     */
Ur.readTimeIndex = "readTimeIndex", Ur.readTimeIndexPath = "readTime", 
/**
     * An index that provides access to documents in a collection sorted by read
     * time.
     *
     * This index is used to allow the RemoteDocumentCache to fetch newly changed
     * documents in a collection.
     */
Ur.collectionReadTimeIndex = "collectionReadTimeIndex", Ur.collectionReadTimeIndexPath = [ "parentPath", "readTime" ];

/**
 * Contains a single entry that has metadata about the remote document cache.
 */
var Mr = 
/**
     * @param byteSize - Approximately the total size in bytes of all the
     * documents in the document cache.
     */
function(t) {
    this.byteSize = t;
};

Mr.store = "remoteDocumentGlobal", Mr.key = "remoteDocumentGlobalKey";

/**
 * An object to be stored in the 'targets' store in IndexedDb.
 *
 * This is based on and should be kept in sync with the proto used in the iOS
 * client.
 *
 * Each query the client listens to against the server is tracked on disk so
 * that the query can be efficiently resumed on restart.
 */
var qr = function(
/**
     * An auto-generated sequential numeric identifier for the query.
     *
     * Queries are stored using their canonicalId as the key, but these
     * canonicalIds can be quite long so we additionally assign a unique
     * queryId which can be used by referenced data structures (e.g.
     * indexes) to minimize the on-disk cost.
     */
t, 
/**
     * The canonical string representing this query. This is not unique.
     */
e, 
/**
     * The last readTime received from the Watch Service for this query.
     *
     * This is the same value as TargetChange.read_time in the protos.
     */
n, 
/**
     * An opaque, server-assigned token that allows watching a query to be
     * resumed after disconnecting without retransmitting all the data
     * that matches the query. The resume token essentially identifies a
     * point in time from which the server should resume sending results.
     *
     * This is related to the snapshotVersion in that the resumeToken
     * effectively also encodes that value, but the resumeToken is opaque
     * and sometimes encodes additional information.
     *
     * A consequence of this is that the resumeToken should be used when
     * asking the server to reason about where this client is in the watch
     * stream, but the client should use the snapshotVersion for its own
     * purposes.
     *
     * This is the same value as TargetChange.resume_token in the protos.
     */
r, 
/**
     * A sequence number representing the last time this query was
     * listened to, used for garbage collection purposes.
     *
     * Conventionally this would be a timestamp value, but device-local
     * clocks are unreliable and they must be able to create new listens
     * even while disconnected. Instead this should be a monotonically
     * increasing number that's incremented on each listen call.
     *
     * This is different from the queryId since the queryId is an
     * immutable identifier assigned to the Query on first use while
     * lastListenSequenceNumber is updated every time the query is
     * listened to.
     */
i, 
/**
     * Denotes the maximum snapshot version at which the associated query view
     * contained no limbo documents.  Undefined for data written prior to
     * schema version 9.
     */
o, 
/**
     * The query for this target.
     *
     * Because canonical ids are not unique we must store the actual query. We
     * use the proto to have an object we can persist without having to
     * duplicate translation logic to and from a `Query` object.
     */
u) {
    this.targetId = t, this.canonicalId = e, this.readTime = n, this.resumeToken = r, 
    this.lastListenSequenceNumber = i, this.lastLimboFreeSnapshotVersion = o, this.query = u;
};

qr.store = "targets", 
/** Keys are automatically assigned via the targetId property. */
qr.keyPath = "targetId", 
/** The name of the queryTargets index. */
qr.queryTargetsIndexName = "queryTargetsIndex", 
/**
     * The index of all canonicalIds to the targets that they match. This is not
     * a unique mapping because canonicalId does not promise a unique name for all
     * possible queries, so we append the targetId to make the mapping unique.
     */
qr.queryTargetsKeyPath = [ "canonicalId", "targetId" ];

/**
 * An object representing an association between a target and a document, or a
 * sentinel row marking the last sequence number at which a document was used.
 * Each document cached must have a corresponding sentinel row before lru
 * garbage collection is enabled.
 *
 * The target associations and sentinel rows are co-located so that orphaned
 * documents and their sequence numbers can be identified efficiently via a scan
 * of this store.
 */
var Fr = function(
/**
     * The targetId identifying a target or 0 for a sentinel row.
     */
t, 
/**
     * The path to the document, as encoded in the key.
     */
e, 
/**
     * If this is a sentinel row, this should be the sequence number of the last
     * time the document specified by `path` was used. Otherwise, it should be
     * `undefined`.
     */
n) {
    this.targetId = t, this.path = e, this.sequenceNumber = n;
};

/** Name of the IndexedDb object store.  */ Fr.store = "targetDocuments", 
/** Keys are automatically assigned via the targetId, path properties. */
Fr.keyPath = [ "targetId", "path" ], 
/** The index name for the reverse index. */
Fr.documentTargetsIndex = "documentTargetsIndex", 
/** We also need to create the reverse index for these properties. */
Fr.documentTargetsKeyPath = [ "path", "targetId" ];

/**
 * A record of global state tracked across all Targets, tracked separately
 * to avoid the need for extra indexes.
 *
 * This should be kept in-sync with the proto used in the iOS client.
 */
var jr = function(
/**
     * The highest numbered target id across all targets.
     *
     * See DbTarget.targetId.
     */
t, 
/**
     * The highest numbered lastListenSequenceNumber across all targets.
     *
     * See DbTarget.lastListenSequenceNumber.
     */
e, 
/**
     * A global snapshot version representing the last consistent snapshot we
     * received from the backend. This is monotonically increasing and any
     * snapshots received from the backend prior to this version (e.g. for
     * targets resumed with a resumeToken) should be suppressed (buffered)
     * until the backend has caught up to this snapshot version again. This
     * prevents our cache from ever going backwards in time.
     */
n, 
/**
     * The number of targets persisted.
     */
r) {
    this.highestTargetId = t, this.highestListenSequenceNumber = e, this.lastRemoteSnapshotVersion = n, 
    this.targetCount = r;
};

/**
 * The key string used for the single object that exists in the
 * DbTargetGlobal store.
 */ jr.key = "targetGlobalKey", jr.store = "targetGlobal";

/**
 * An object representing an association between a Collection id (e.g. 'messages')
 * to a parent path (e.g. '/chats/123') that contains it as a (sub)collection.
 * This is used to efficiently find all collections to query when performing
 * a Collection Group query.
 */
var zr = function(
/**
     * The collectionId (e.g. 'messages')
     */
t, 
/**
     * The path to the parent (either a document location or an empty path for
     * a root-level collection).
     */
e) {
    this.collectionId = t, this.parent = e;
};

/** Name of the IndexedDb object store. */ zr.store = "collectionParents", 
/** Keys are automatically assigned via the collectionId, parent properties. */
zr.keyPath = [ "collectionId", "parent" ];

/**
 * A record of the metadata state of each client.
 *
 * PORTING NOTE: This is used to synchronize multi-tab state and does not need
 * to be ported to iOS or Android.
 */
var Gr = function(
// Note: Previous schema versions included a field
// "lastProcessedDocumentChangeId". Don't use anymore.
/** The auto-generated client id assigned at client startup. */
t, 
/** The last time this state was updated. */
e, 
/** Whether the client's network connection is enabled. */
n, 
/** Whether this client is running in a foreground tab. */
r) {
    this.clientId = t, this.updateTimeMs = e, this.networkEnabled = n, this.inForeground = r;
};

/** Name of the IndexedDb object store. */ Gr.store = "clientMetadata", 
/** Keys are automatically assigned via the clientId properties. */
Gr.keyPath = "clientId";

/**
 * A object representing a bundle loaded by the SDK.
 */
var Br = function(
/** The ID of the loaded bundle. */
t, 
/** The create time of the loaded bundle. */
e, 
/** The schema version of the loaded bundle. */
n) {
    this.bundleId = t, this.createTime = e, this.version = n;
};

/** Name of the IndexedDb object store. */ Br.store = "bundles", Br.keyPath = "bundleId";

/**
 * A object representing a named query loaded by the SDK via a bundle.
 */
var Qr = function(
/** The name of the query. */
t, 
/** The read time of the results saved in the bundle from the named query. */
e, 
/** The query saved in the bundle. */
n) {
    this.name = t, this.readTime = e, this.bundledQuery = n;
};

/** Name of the IndexedDb object store. */ Qr.store = "namedQueries", Qr.keyPath = "name";

// Visible for testing
var Yr = __spreadArrays(__spreadArrays(__spreadArrays(__spreadArrays([ Pr.store, Vr.store, Cr.store, Ur.store, qr.store, Or.store, jr.store, Fr.store ], [ Gr.store ]), [ Mr.store ]), [ zr.store ]), [ Br.store, Qr.store ]), Hr = /** @class */ function(t) {
    function e(e, n) {
        var r = this;
        return (r = t.call(this) || this).ps = e, r.bs = n, r;
    }
    return __extends$1(e, t), e;
}(Nr);

// V2 is no longer usable (see comment at top of file)
// Visible for testing
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Kr(t, e) {
    var n = O$1(t);
    return dr.zn(n.ps, e);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A batch of mutations that will be sent as one unit to the backend.
 */ var Xr = /** @class */ function() {
    /**
     * @param batchId - The unique ID of this mutation batch.
     * @param localWriteTime - The original write time of this mutation.
     * @param baseMutations - Mutations that are used to populate the base
     * values when this mutation is applied locally. This can be used to locally
     * overwrite values that are persisted in the remote document cache. Base
     * mutations are never sent to the backend.
     * @param mutations - The user-provided mutations in this mutation batch.
     * User-provided mutations are applied both locally and remotely on the
     * backend.
     */
    function t(t, e, n, r) {
        this.batchId = t, this.vs = e, this.baseMutations = n, this.mutations = r
        /**
     * Applies all the mutations in this MutationBatch to the specified document
     * to create a new remote document
     *
     * @param docKey - The key of the document to apply mutations to.
     * @param maybeDoc - The document to apply mutations to.
     * @param batchResult - The result of applying the MutationBatch to the
     * backend.
     */;
    }
    return t.prototype.Ss = function(t, e, n) {
        for (var r = n.Ds, i = 0; i < this.mutations.length; i++) {
            var o = this.mutations[i];
            o.key.isEqual(t) && (e = qe(o, e, r[i]));
        }
        return e;
    }, 
    /**
     * Computes the local view of a document given all the mutations in this
     * batch.
     *
     * @param docKey - The key of the document to apply mutations to.
     * @param maybeDoc - The document to apply mutations to.
     */
    t.prototype.Cs = function(t, e) {
        // First, apply the base state. This allows us to apply non-idempotent
        // transform against a consistent set of values.
        for (var n = 0, r = this.baseMutations; n < r.length; n++) {
            (u = r[n]).key.isEqual(t) && (e = Fe(u, e, this.vs));
        }
        // Second, apply all user-provided mutations.
                for (var i = 0, o = this.mutations; i < o.length; i++) {
            var u;
            (u = o[i]).key.isEqual(t) && (e = Fe(u, e, this.vs));
        }
        return e;
    }, 
    /**
     * Computes the local view for all provided documents given the mutations in
     * this batch.
     */
    t.prototype.xs = function(t) {
        var e = this, n = t;
        // TODO(mrschmidt): This implementation is O(n^2). If we apply the mutations
        // directly (as done in `applyToLocalView()`), we can reduce the complexity
        // to O(n).
                return this.mutations.forEach((function(r) {
            var i = e.Cs(r.key, t.get(r.key));
            i && (n = n.zt(r.key, i));
        })), n;
    }, t.prototype.keys = function() {
        return this.mutations.reduce((function(t, e) {
            return t.add(e.key);
        }), mn());
    }, t.prototype.isEqual = function(t) {
        return this.batchId === t.batchId && L$1(this.mutations, t.mutations, (function(t, e) {
            return ze(t, e);
        })) && L$1(this.baseMutations, t.baseMutations, (function(t, e) {
            return ze(t, e);
        }));
    }, t;
}(), Wr = /** @class */ function() {
    function t(t, e, n, 
    /**
     * A pre-computed mapping from each mutated document to the resulting
     * version.
     */
    r) {
        this.batch = t, this.Ns = e, this.Ds = n, this.$s = r
        /**
     * Creates a new MutationBatchResult for the given batch and results. There
     * must be one result for each mutation in the batch. This static factory
     * caches a document=&gt;version mapping (docVersions).
     */;
    }
    return t.from = function(e, n, r) {
        k$1(e.mutations.length === r.length);
        for (var i = vn(), o = e.mutations, u = 0; u < o.length; u++) i = i.zt(o[u].key, r[u].version);
        return new t(e, n, r, i);
    }, t;
}(), Zr = function(t) {
    this.Fs = t;
};

/** The result of applying a mutation batch to the backend. */
/** Decodes a remote document from storage locally to a Document. */ function Jr(t, e) {
    if (e.document) return Kn(t.Fs, e.document, !!e.hasCommittedMutations);
    if (e.noDocument) {
        var n = tt.Et(e.noDocument.path), r = ri(e.noDocument.readTime);
        return new Vt(n, r, {
            hasCommittedMutations: !!e.hasCommittedMutations
        });
    }
    if (e.unknownDocument) {
        var i = tt.Et(e.unknownDocument.path);
        r = ri(e.unknownDocument.version);
        return new Ct(i, r);
    }
    return x$1();
}

/** Encodes a document for storage locally. */ function $r(t, e, n) {
    var r = ti(n), i = e.key.path.X().it();
    if (e instanceof Pt) {
        var o = function(t, e) {
            return {
                name: jn(t, e.key),
                fields: e.bt().mapValue.fields,
                updateTime: Ln(t, e.version.j())
            };
        }(t.Fs, e), u = e.hasCommittedMutations;
        return new Ur(
        /* unknownDocument= */ null, 
        /* noDocument= */ null, o, u, r, i);
    }
    if (e instanceof Vt) {
        var s = e.key.path.it(), a = ni(e.version);
        u = e.hasCommittedMutations;
        return new Ur(
        /* unknownDocument= */ null, new Lr(s, a), 
        /* document= */ null, u, r, i);
    }
    if (e instanceof Ct) {
        var c = e.key.path.it(), h = ni(e.version);
        return new Ur(new Rr(c, h), 
        /* noDocument= */ null, 
        /* document= */ null, 
        /* hasCommittedMutations= */ !0, r, i);
    }
    return x$1();
}

function ti(t) {
    var e = t.j();
    return [ e.seconds, e.nanoseconds ];
}

function ei(t) {
    var e = new K$1(t[0], t[1]);
    return X$1.K(e);
}

function ni(t) {
    var e = t.j();
    return new kr(e.seconds, e.nanoseconds);
}

function ri(t) {
    var e = new K$1(t.seconds, t.nanoseconds);
    return X$1.K(e);
}

/** Encodes a batch of mutations into a DbMutationBatch for local storage. */
/** Decodes a DbMutationBatch into a MutationBatch */ function ii(t, e) {
    // Squash old transform mutations into existing patch or set mutations.
    // The replacement of representing `transforms` with `update_transforms`
    // on the SDK means that old `transform` mutations stored in IndexedDB need
    // to be updated to `update_transforms`.
    // TODO(b/174608374): Remove this code once we perform a schema migration.
    for (var n = (e.baseMutations || []).map((function(e) {
        return Wn(t.Fs, e);
    })), r = 0; r < e.mutations.length - 1; ++r) {
        var i = e.mutations[r];
        if (r + 1 < e.mutations.length && void 0 !== e.mutations[r + 1].transform) {
            var o = e.mutations[r + 1];
            i.updateTransforms = o.transform.fieldTransforms, e.mutations.splice(r + 1, 1), 
            ++r;
        }
    }
    var u = e.mutations.map((function(e) {
        return Wn(t.Fs, e);
    })), s = K$1.fromMillis(e.localWriteTimeMs);
    return new Xr(e.batchId, s, n, u);
}

/** Decodes a DbTarget into TargetData */ function oi(t) {
    var e, n, r = ri(t.readTime), i = void 0 !== t.lastLimboFreeSnapshotVersion ? ri(t.lastLimboFreeSnapshotVersion) : X$1.min();
    return void 0 !== t.query.documents ? (k$1(1 === (n = t.query).documents.length), 
    e = he(re(Bn(n.documents[0])))) : e = function(t) {
        return he($n(t));
    }(t.query), new ge(e, t.targetId, 0 /* Listen */ , t.lastListenSequenceNumber, r, i, U$1.fromBase64String(t.resumeToken))
    /** Encodes TargetData into a DbTarget for storage locally. */;
}

function ui(t, e) {
    var n, r = ni(e.Ot), i = ni(e.lastLimboFreeSnapshotVersion);
    n = qt(e.target) ? Zn(t.Fs, e.target) : Jn(t.Fs, e.target);
    // We can't store the resumeToken as a ByteString in IndexedDb, so we
    // convert it to a base64 string for storage.
    var o = e.resumeToken.toBase64();
    // lastListenSequenceNumber is always 0 until we do real GC.
        return new qr(e.targetId, Ut(e.target), r, o, e.sequenceNumber, i, n);
}

/**
 * A helper function for figuring out what kind of query has been stored.
 */
/**
 * Encodes a `BundledQuery` from bundle proto to a Query object.
 *
 * This reconstructs the original query used to build the bundle being loaded,
 * including features exists only in SDKs (for example: limit-to-last).
 */ function si(t) {
    var e = $n({
        parent: t.parent,
        structuredQuery: t.structuredQuery
    });
    return "LAST" === t.limitType ? fe(e, e.limit, "L" /* Last */) : e;
}

/** Encodes a NamedQuery proto object to a NamedQuery model object. */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var ai = /** @class */ function() {
    function t() {}
    return t.prototype.Os = function(t, e) {
        return ci(t).get(e).next((function(t) {
            if (t) return {
                id: (e = t).bundleId,
                createTime: ri(e.createTime),
                version: e.version
            };
            /** Encodes a DbBundle to a BundleMetadata object. */            var e;
            /** Encodes a BundleMetadata to a DbBundle. */        }));
    }, t.prototype.ks = function(t, e) {
        return ci(t).put({
            bundleId: (n = e).id,
            createTime: ni(Mn(n.createTime)),
            version: n.version
        });
        var n;
        /** Encodes a DbNamedQuery to a NamedQuery. */    }, t.prototype.Ms = function(t, e) {
        return hi(t).get(e).next((function(t) {
            if (t) return {
                name: (e = t).name,
                query: si(e.bundledQuery),
                readTime: ri(e.readTime)
            };
            var e;
            /** Encodes a NamedQuery from a bundle proto to a DbNamedQuery. */        }));
    }, t.prototype.Ls = function(t, e) {
        return hi(t).put(function(t) {
            return {
                name: t.name,
                readTime: ni(Mn(t.readTime)),
                bundledQuery: t.bundledQuery
            };
        }(e));
    }, t;
}();

/**
 * Helper to get a typed SimpleDbStore for the bundles object store.
 */ function ci(t) {
    return Kr(t, Br.store);
}

/**
 * Helper to get a typed SimpleDbStore for the namedQueries object store.
 */ function hi(t) {
    return Kr(t, Qr.store);
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An in-memory implementation of IndexManager.
 */ var fi = /** @class */ function() {
    function t() {
        this.Bs = new li;
    }
    return t.prototype.qs = function(t, e) {
        return this.Bs.add(e), lr.resolve();
    }, t.prototype.Us = function(t, e) {
        return lr.resolve(this.Bs.getEntries(e));
    }, t;
}(), li = /** @class */ function() {
    function t() {
        this.index = {};
    }
    // Returns false if the entry already existed.
        return t.prototype.add = function(t) {
        var e = t.tt(), n = t.X(), r = this.index[e] || new sn(Z$1.H), i = !r.has(n);
        return this.index[e] = r.add(n), i;
    }, t.prototype.has = function(t) {
        var e = t.tt(), n = t.X(), r = this.index[e];
        return r && r.has(n);
    }, t.prototype.getEntries = function(t) {
        return (this.index[t] || new sn(Z$1.H)).it();
    }, t;
}(), pi = /** @class */ function() {
    function t() {
        /**
         * An in-memory copy of the index entries we've already written since the SDK
         * launched. Used to avoid re-writing the same entry repeatedly.
         *
         * This is *NOT* a complete cache of what's in persistence and so can never be used to
         * satisfy reads.
         */
        this.Qs = new li;
    }
    /**
     * Adds a new entry to the collection parent index.
     *
     * Repeated calls for the same collectionPath should be avoided within a
     * transaction as IndexedDbIndexManager only caches writes once a transaction
     * has been committed.
     */    return t.prototype.qs = function(t, e) {
        var n = this;
        if (!this.Qs.has(e)) {
            var r = e.tt(), i = e.X();
            t.gs((function() {
                // Add the collection to the in memory cache only if the transaction was
                // successfully committed.
                n.Qs.add(e);
            }));
            var o = {
                collectionId: r,
                parent: Ar(i)
            };
            return di(t).put(o);
        }
        return lr.resolve();
    }, t.prototype.Us = function(t, e) {
        var n = [], r = IDBKeyRange.bound([ e, "" ], [ R$1(e), "" ], 
        /*lowerOpen=*/ !1, 
        /*upperOpen=*/ !0);
        return di(t).rs(r).next((function(t) {
            for (var r = 0, i = t; r < i.length; r++) {
                var o = i[r];
                // This collectionId guard shouldn't be necessary (and isn't as long
                // as we're running in a real browser), but there's a bug in
                // indexeddbshim that breaks our range in our tests running in node:
                // https://github.com/axemclion/IndexedDBShim/issues/334
                                if (o.collectionId !== e) break;
                n.push(xr(o.parent));
            }
            return n;
        }));
    }, t;
}();

/**
 * Internal implementation of the collection-parent index exposed by MemoryIndexManager.
 * Also used for in-memory caching by IndexedDbIndexManager and initial index population
 * in indexeddb_schema.ts
 */
/**
 * Helper to get a typed SimpleDbStore for the collectionParents
 * document store.
 */
function di(t) {
    return Kr(t, zr.store);
}

/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var vi = {
    Ks: !1,
    Ws: 0,
    js: 0,
    Gs: 0
}, yi = /** @class */ function() {
    function t(
    // When we attempt to collect, we will only do so if the cache size is greater than this
    // threshold. Passing `COLLECTION_DISABLED` here will cause collection to always be skipped.
    t, 
    // The percentage of sequence numbers that we will attempt to collect
    e, 
    // A cap on the total number of sequence numbers that will be collected. This prevents
    // us from collecting a huge number of sequence numbers if the cache has grown very large.
    n) {
        this.zs = t, this.Hs = e, this.Js = n;
    }
    return t.Ys = function(e) {
        return new t(e, t.Xs, t.Zs);
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Verifies the error thrown by a LocalStore operation. If a LocalStore
 * operation fails because the primary lease has been taken by another client,
 * we ignore the error (the persistence layer will immediately call
 * `applyPrimaryLease` to propagate the primary state change). All other errors
 * are re-thrown.
 *
 * @param err - An error returned by a LocalStore operation.
 * @returns A Promise that resolves after we recovered, or the original error.
 */
function mi(t) {
    return __awaiter(this, void 0, void 0, (function() {
        return __generator(this, (function(e) {
            if (t.code !== M$1.FAILED_PRECONDITION || t.message !== Tr) throw t;
            return N$1("LocalStore", "Unexpectedly lost primary lease"), [ 2 /*return*/ ];
        }));
    }));
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A map implementation that uses objects as keys. Objects must have an
 * associated equals function and must be immutable. Entries in the map are
 * stored together with the key being produced from the mapKeyFn. This map
 * automatically handles collisions of keys.
 */ yi.Xs = 10, yi.Zs = 1e3, yi.ti = new yi(41943040, yi.Xs, yi.Zs), yi.ei = new yi(-1, 0, 0);

var gi = /** @class */ function() {
    function t(t, e) {
        this.ni = t, this.si = e, 
        /**
             * The inner map for a key/value pair. Due to the possibility of collisions we
             * keep a list of entries that we do a linear search through to find an actual
             * match. Note that collisions should be rare, so we still expect near
             * constant time lookups in practice.
             */
        this.ii = {}
        /** Get a value for this key, or undefined if it does not exist. */;
    }
    return t.prototype.get = function(t) {
        var e = this.ni(t), n = this.ii[e];
        if (void 0 !== n) for (var r = 0, i = n; r < i.length; r++) {
            var o = i[r], u = o[0], s = o[1];
            if (this.si(u, t)) return s;
        }
    }, t.prototype.has = function(t) {
        return void 0 !== this.get(t);
    }, 
    /** Put this key and value in the map. */ t.prototype.set = function(t, e) {
        var n = this.ni(t), r = this.ii[n];
        if (void 0 !== r) {
            for (var i = 0; i < r.length; i++) if (this.si(r[i][0], t)) return void (r[i] = [ t, e ]);
            r.push([ t, e ]);
        } else this.ii[n] = [ [ t, e ] ];
    }, 
    /**
     * Remove this key from the map. Returns a boolean if anything was deleted.
     */
    t.prototype.delete = function(t) {
        var e = this.ni(t), n = this.ii[e];
        if (void 0 === n) return !1;
        for (var r = 0; r < n.length; r++) if (this.si(n[r][0], t)) return 1 === n.length ? delete this.ii[e] : n.splice(r, 1), 
        !0;
        return !1;
    }, t.prototype.forEach = function(t) {
        nt(this.ii, (function(e, n) {
            for (var r = 0, i = n; r < i.length; r++) {
                var o = i[r], u = o[0], s = o[1];
                t(u, s);
            }
        }));
    }, t.prototype.et = function() {
        return rt(this.ii);
    }, t;
}(), wi = /** @class */ function() {
    function t() {
        // A mapping of document key to the new cache entry that should be written (or null if any
        // existing cache entry should be removed).
        this.ri = new gi((function(t) {
            return t.toString();
        }), (function(t, e) {
            return t.isEqual(e);
        })), this.oi = !1;
    }
    return t.prototype.ci = function(t) {
        var e = this.ri.get(t);
        return e ? e.readTime : X$1.min();
    }, 
    /**
     * Buffers a `RemoteDocumentCache.addEntry()` call.
     *
     * You can only modify documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */
    t.prototype.ai = function(t, e) {
        this.ui(), this.ri.set(t.key, {
            hi: t,
            readTime: e
        });
    }, 
    /**
     * Buffers a `RemoteDocumentCache.removeEntry()` call.
     *
     * You can only remove documents that have already been retrieved via
     * `getEntry()/getEntries()` (enforced via IndexedDbs `apply()`).
     */
    t.prototype.li = function(t, e) {
        void 0 === e && (e = null), this.ui(), this.ri.set(t, {
            hi: null,
            readTime: e
        });
    }, 
    /**
     * Looks up an entry in the cache. The buffered changes will first be checked,
     * and if no buffered change applies, this will forward to
     * `RemoteDocumentCache.getEntry()`.
     *
     * @param transaction - The transaction in which to perform any persistence
     *     operations.
     * @param documentKey - The key of the entry to look up.
     * @returns The cached Document or NoDocument entry, or null if we have
     *     nothing cached.
     */
    t.prototype._i = function(t, e) {
        this.ui();
        var n = this.ri.get(e);
        return void 0 !== n ? lr.resolve(n.hi) : this.fi(t, e);
    }, 
    /**
     * Looks up several entries in the cache, forwarding to
     * `RemoteDocumentCache.getEntry()`.
     *
     * @param transaction - The transaction in which to perform any persistence
     *     operations.
     * @param documentKeys - The keys of the entries to look up.
     * @returns A map of cached `Document`s or `NoDocument`s, indexed by key. If
     *     an entry cannot be found, the corresponding key will be mapped to a
     *     null value.
     */
    t.prototype.getEntries = function(t, e) {
        return this.di(t, e);
    }, 
    /**
     * Applies buffered changes to the underlying RemoteDocumentCache, using
     * the provided transaction.
     */
    t.prototype.apply = function(t) {
        return this.ui(), this.oi = !0, this.wi(t);
    }, 
    /** Helper to assert this.changes is not null  */ t.prototype.ui = function() {}, 
    t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * An in-memory buffer of entries to be written to a RemoteDocumentCache.
 * It can be used to batch up a set of changes to be written to the cache, but
 * additionally supports reading entries back with the `getEntry()` method,
 * falling back to the underlying RemoteDocumentCache if no entry is
 * buffered.
 *
 * Entries added to the cache *must* be read first. This is to facilitate
 * calculating the size delta of the pending changes.
 *
 * PORTING NOTE: This class was implemented then removed from other platforms.
 * If byte-counting ends up being needed on the other platforms, consider
 * porting this class as part of that implementation work.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Delete a mutation batch and the associated document mutations.
 * @returns A PersistencePromise of the document mutations that were removed.
 */
function bi(t, e, n) {
    var r = t.store(Vr.store), i = t.store(Cr.store), o = [], u = IDBKeyRange.only(n.batchId), s = 0, a = r.hs({
        range: u
    }, (function(t, e, n) {
        return s++, n.delete();
    }));
    o.push(a.next((function() {
        k$1(1 === s);
    })));
    for (var c = [], h = 0, f = n.mutations; h < f.length; h++) {
        var l = f[h], p = Cr.key(e, l.key.path, n.batchId);
        o.push(i.delete(p)), c.push(l.key);
    }
    return lr.Mn(o).next((function() {
        return c;
    }));
}

/**
 * Returns an approximate size for the given document.
 */ function _i(t) {
    var e;
    if (t.document) e = t.document; else if (t.unknownDocument) e = t.unknownDocument; else {
        if (!t.noDocument) throw x$1();
        e = t.noDocument;
    }
    return JSON.stringify(e).length;
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** A mutation queue for a specific user, backed by IndexedDB. */ var Ii = /** @class */ function() {
    function t(
    /**
     * The normalized userId (e.g. null UID => "" userId) used to store /
     * retrieve mutations.
     */
    t, e, n, r) {
        this.userId = t, this.Qt = e, this.Ei = n, this.Ti = r, 
        /**
             * Caches the document keys for pending mutation batches. If the mutation
             * has been removed from IndexedDb, the cached value may continue to
             * be used to retrieve the batch's document keys. To remove a cached value
             * locally, `removeCachedMutationKeys()` should be invoked either directly
             * or through `removeMutationBatches()`.
             *
             * With multi-tab, when the primary client acknowledges or rejects a mutation,
             * this cache is used by secondary clients to invalidate the local
             * view of the documents that were previously affected by the mutation.
             */
        // PORTING NOTE: Multi-tab only.
        this.Ii = {}
        /**
     * Creates a new mutation queue for the given user.
     * @param user - The user for which to create a mutation queue.
     * @param serializer - The serializer to use when persisting to IndexedDb.
     */;
    }
    return t.mi = function(e, n, r, i) {
        // TODO(mcg): Figure out what constraints there are on userIDs
        // In particular, are there any reserved characters? are empty ids allowed?
        // For the moment store these together in the same mutations table assuming
        // that empty userIDs aren't allowed.
        return k$1("" !== e.uid), new t(e.m() ? e.uid : "", n, r, i);
    }, t.prototype.Ai = function(t) {
        var e = !0, n = IDBKeyRange.bound([ this.userId, Number.NEGATIVE_INFINITY ], [ this.userId, Number.POSITIVE_INFINITY ]);
        return Ti(t).hs({
            index: Vr.userMutationsIndex,
            range: n
        }, (function(t, n, r) {
            e = !1, r.done();
        })).next((function() {
            return e;
        }));
    }, t.prototype.Ri = function(t, e, n, r) {
        var i = this, o = Ni(t), u = Ti(t);
        // The IndexedDb implementation in Chrome (and Firefox) does not handle
        // compound indices that include auto-generated keys correctly. To ensure
        // that the index entry is added correctly in all browsers, we perform two
        // writes: The first write is used to retrieve the next auto-generated Batch
        // ID, and the second write populates the index and stores the actual
        // mutation batch.
        // See: https://bugs.chromium.org/p/chromium/issues/detail?id=701972
        // We write an empty object to obtain key
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return u.add({}).next((function(s) {
            k$1("number" == typeof s);
            for (var a = new Xr(s, e, n, r), c = function(t, e, n) {
                var r = n.baseMutations.map((function(e) {
                    return Xn(t.Fs, e);
                })), i = n.mutations.map((function(e) {
                    return Xn(t.Fs, e);
                }));
                return new Vr(e, n.batchId, n.vs.toMillis(), r, i);
            }(i.Qt, i.userId, a), h = [], f = new sn((function(t, e) {
                return C(t.rt(), e.rt());
            })), l = 0, p = r; l < p.length; l++) {
                var d = p[l], v = Cr.key(i.userId, d.key.path, s);
                f = f.add(d.key.path.X()), h.push(u.put(c)), h.push(o.put(v, Cr.PLACEHOLDER));
            }
            return f.forEach((function(e) {
                h.push(i.Ei.qs(t, e));
            })), t.gs((function() {
                i.Ii[s] = a.keys();
            })), lr.Mn(h).next((function() {
                return a;
            }));
        }));
    }, t.prototype.Pi = function(t, e) {
        var n = this;
        return Ti(t).get(e).next((function(t) {
            return t ? (k$1(t.userId === n.userId), ii(n.Qt, t)) : null;
        }));
    }, 
    /**
     * Returns the document keys for the mutation batch with the given batchId.
     * For primary clients, this method returns `null` after
     * `removeMutationBatches()` has been called. Secondary clients return a
     * cached result until `removeCachedMutationKeys()` is invoked.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.yi = function(t, e) {
        var n = this;
        return this.Ii[e] ? lr.resolve(this.Ii[e]) : this.Pi(t, e).next((function(t) {
            if (t) {
                var r = t.keys();
                return n.Ii[e] = r, r;
            }
            return null;
        }));
    }, t.prototype.gi = function(t, e) {
        var n = this, r = e + 1, i = IDBKeyRange.lowerBound([ this.userId, r ]), o = null;
        return Ti(t).hs({
            index: Vr.userMutationsIndex,
            range: i
        }, (function(t, e, i) {
            e.userId === n.userId && (k$1(e.batchId >= r), o = ii(n.Qt, e)), i.done();
        })).next((function() {
            return o;
        }));
    }, t.prototype.Vi = function(t) {
        var e = IDBKeyRange.upperBound([ this.userId, Number.POSITIVE_INFINITY ]), n = -1;
        return Ti(t).hs({
            index: Vr.userMutationsIndex,
            range: e,
            reverse: !0
        }, (function(t, e, r) {
            n = e.batchId, r.done();
        })).next((function() {
            return n;
        }));
    }, t.prototype.pi = function(t) {
        var e = this, n = IDBKeyRange.bound([ this.userId, -1 ], [ this.userId, Number.POSITIVE_INFINITY ]);
        return Ti(t).rs(Vr.userMutationsIndex, n).next((function(t) {
            return t.map((function(t) {
                return ii(e.Qt, t);
            }));
        }));
    }, t.prototype.bi = function(t, e) {
        var n = this, r = Cr.prefixForPath(this.userId, e.path), i = IDBKeyRange.lowerBound(r), o = [];
        // Scan the document-mutation index starting with a prefix starting with
        // the given documentKey.
                return Ni(t).hs({
            range: i
        }, (function(r, i, u) {
            var s = r[0], a = r[1], c = r[2], h = xr(a);
            // Only consider rows matching exactly the specific key of
            // interest. Note that because we order by path first, and we
            // order terminators before path separators, we'll encounter all
            // the index rows for documentKey contiguously. In particular, all
            // the rows for documentKey will occur before any rows for
            // documents nested in a subcollection beneath documentKey so we
            // can stop as soon as we hit any such row.
                        if (s === n.userId && e.path.isEqual(h)) 
            // Look up the mutation batch in the store.
            return Ti(t).get(c).next((function(t) {
                if (!t) throw x$1();
                k$1(t.userId === n.userId), o.push(ii(n.Qt, t));
            }));
            u.done();
        })).next((function() {
            return o;
        }));
    }, t.prototype.vi = function(t, e) {
        var n = this, r = new sn(C), i = [];
        return e.forEach((function(e) {
            var o = Cr.prefixForPath(n.userId, e.path), u = IDBKeyRange.lowerBound(o), s = Ni(t).hs({
                range: u
            }, (function(t, i, o) {
                var u = t[0], s = t[1], a = t[2], c = xr(s);
                // Only consider rows matching exactly the specific key of
                // interest. Note that because we order by path first, and we
                // order terminators before path separators, we'll encounter all
                // the index rows for documentKey contiguously. In particular, all
                // the rows for documentKey will occur before any rows for
                // documents nested in a subcollection beneath documentKey so we
                // can stop as soon as we hit any such row.
                                u === n.userId && e.path.isEqual(c) ? r = r.add(a) : o.done();
            }));
            i.push(s);
        })), lr.Mn(i).next((function() {
            return n.Si(t, r);
        }));
    }, t.prototype.Di = function(t, e) {
        var n = this, r = e.path, i = r.length + 1, o = Cr.prefixForPath(this.userId, r), u = IDBKeyRange.lowerBound(o), s = new sn(C);
        return Ni(t).hs({
            range: u
        }, (function(t, e, o) {
            var u = t[0], a = t[1], c = t[2], h = xr(a);
            u === n.userId && r.nt(h) ? 
            // Rows with document keys more than one segment longer than the
            // query path can't be matches. For example, a query on 'rooms'
            // can't match the document /rooms/abc/messages/xyx.
            // TODO(mcg): we'll need a different scanner when we implement
            // ancestor queries.
            h.length === i && (s = s.add(c)) : o.done();
        })).next((function() {
            return n.Si(t, s);
        }));
    }, t.prototype.Si = function(t, e) {
        var n = this, r = [], i = [];
        // TODO(rockwood): Implement this using iterate.
        return e.forEach((function(e) {
            i.push(Ti(t).get(e).next((function(t) {
                if (null === t) throw x$1();
                k$1(t.userId === n.userId), r.push(ii(n.Qt, t));
            })));
        })), lr.Mn(i).next((function() {
            return r;
        }));
    }, t.prototype.Ci = function(t, e) {
        var n = this;
        return bi(t.ps, this.userId, e).next((function(r) {
            return t.gs((function() {
                n.xi(e.batchId);
            })), lr.forEach(r, (function(e) {
                return n.Ti.Ni(t, e);
            }));
        }));
    }, 
    /**
     * Clears the cached keys for a mutation batch. This method should be
     * called by secondary clients after they process mutation updates.
     *
     * Note that this method does not have to be called from primary clients as
     * the corresponding cache entries are cleared when an acknowledged or
     * rejected batch is removed from the mutation queue.
     */
    // PORTING NOTE: Multi-tab only
    t.prototype.xi = function(t) {
        delete this.Ii[t];
    }, t.prototype.$i = function(t) {
        var e = this;
        return this.Ai(t).next((function(n) {
            if (!n) return lr.resolve();
            // Verify that there are no entries in the documentMutations index if
            // the queue is empty.
                        var r = IDBKeyRange.lowerBound(Cr.prefixForUser(e.userId)), i = [];
            return Ni(t).hs({
                range: r
            }, (function(t, n, r) {
                if (t[0] === e.userId) {
                    var o = xr(t[1]);
                    i.push(o);
                } else r.done();
            })).next((function() {
                k$1(0 === i.length);
            }));
        }));
    }, t.prototype.Fi = function(t, e) {
        return Ei(t, this.userId, e);
    }, 
    // PORTING NOTE: Multi-tab only (state is held in memory in other clients).
    /** Returns the mutation queue's metadata from IndexedDb. */
    t.prototype.Oi = function(t) {
        var e = this;
        return Ai(t).get(this.userId).next((function(t) {
            return t || new Pr(e.userId, -1, 
            /*lastStreamToken=*/ "");
        }));
    }, t;
}();

/**
 * @returns true if the mutation queue for the given user contains a pending
 *         mutation for the given key.
 */ function Ei(t, e, n) {
    var r = Cr.prefixForPath(e, n.path), i = r[1], o = IDBKeyRange.lowerBound(r), u = !1;
    return Ni(t).hs({
        range: o,
        us: !0
    }, (function(t, n, r) {
        var o = t[0], s = t[1];
        t[2];
        o === e && s === i && (u = !0), r.done();
    })).next((function() {
        return u;
    }));
}

/** Returns true if any mutation queue contains the given document. */
/**
 * Helper to get a typed SimpleDbStore for the mutations object store.
 */ function Ti(t) {
    return Kr(t, Vr.store);
}

/**
 * Helper to get a typed SimpleDbStore for the mutationQueues object store.
 */ function Ni(t) {
    return Kr(t, Cr.store);
}

/**
 * Helper to get a typed SimpleDbStore for the mutationQueues object store.
 */ function Ai(t) {
    return Kr(t, Pr.store);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Offset to ensure non-overlapping target ids. */
/**
 * Generates monotonically increasing target IDs for sending targets to the
 * watch stream.
 *
 * The client constructs two generators, one for the target cache, and one for
 * for the sync engine (to generate limbo documents targets). These
 * generators produce non-overlapping IDs (by using even and odd IDs
 * respectively).
 *
 * By separating the target ID space, the query cache can generate target IDs
 * that persist across client restarts, while sync engine can independently
 * generate in-memory target IDs that are transient and can be reused after a
 * restart.
 */ var Di = /** @class */ function() {
    function t(t) {
        this.ki = t;
    }
    return t.prototype.next = function() {
        return this.ki += 2, this.ki;
    }, t.Mi = function() {
        // The target cache generator must return '2' in its first call to `next()`
        // as there is no differentiation in the protocol layer between an unset
        // number and the number '0'. If we were to sent a target with target ID
        // '0', the backend would consider it unset and replace it with its own ID.
        return new t(0);
    }, t.Li = function() {
        // Sync engine assigns target IDs for limbo document detection.
        return new t(-1);
    }, t;
}(), Si = /** @class */ function() {
    function t(t, e) {
        this.Ti = t, this.Qt = e;
    }
    // PORTING NOTE: We don't cache global metadata for the target cache, since
    // some of it (in particular `highestTargetId`) can be modified by secondary
    // tabs. We could perhaps be more granular (and e.g. still cache
    // `lastRemoteSnapshotVersion` in memory) but for simplicity we currently go
    // to IndexedDb whenever we need to read metadata. We can revisit if it turns
    // out to have a meaningful performance impact.
        return t.prototype.Bi = function(t) {
        var e = this;
        return this.qi(t).next((function(n) {
            var r = new Di(n.highestTargetId);
            return n.highestTargetId = r.next(), e.Ui(t, n).next((function() {
                return n.highestTargetId;
            }));
        }));
    }, t.prototype.Qi = function(t) {
        return this.qi(t).next((function(t) {
            return X$1.K(new K$1(t.lastRemoteSnapshotVersion.seconds, t.lastRemoteSnapshotVersion.nanoseconds));
        }));
    }, t.prototype.Ki = function(t) {
        return this.qi(t).next((function(t) {
            return t.highestListenSequenceNumber;
        }));
    }, t.prototype.Wi = function(t, e, n) {
        var r = this;
        return this.qi(t).next((function(i) {
            return i.highestListenSequenceNumber = e, n && (i.lastRemoteSnapshotVersion = n.j()), 
            e > i.highestListenSequenceNumber && (i.highestListenSequenceNumber = e), r.Ui(t, i);
        }));
    }, t.prototype.ji = function(t, e) {
        var n = this;
        return this.Gi(t, e).next((function() {
            return n.qi(t).next((function(r) {
                return r.targetCount += 1, n.zi(e, r), n.Ui(t, r);
            }));
        }));
    }, t.prototype.Hi = function(t, e) {
        return this.Gi(t, e);
    }, t.prototype.Ji = function(t, e) {
        var n = this;
        return this.Yi(t, e.targetId).next((function() {
            return xi(t).delete(e.targetId);
        })).next((function() {
            return n.qi(t);
        })).next((function(e) {
            return k$1(e.targetCount > 0), e.targetCount -= 1, n.Ui(t, e);
        }));
    }, 
    /**
     * Drops any targets with sequence number less than or equal to the upper bound, excepting those
     * present in `activeTargetIds`. Document associations for the removed targets are also removed.
     * Returns the number of targets removed.
     */
    t.prototype.Xi = function(t, e, n) {
        var r = this, i = 0, o = [];
        return xi(t).hs((function(u, s) {
            var a = oi(s);
            a.sequenceNumber <= e && null === n.get(a.targetId) && (i++, o.push(r.Ji(t, a)));
        })).next((function() {
            return lr.Mn(o);
        })).next((function() {
            return i;
        }));
    }, 
    /**
     * Call provided function with each `TargetData` that we have cached.
     */
    t.prototype.In = function(t, e) {
        return xi(t).hs((function(t, n) {
            var r = oi(n);
            e(r);
        }));
    }, t.prototype.qi = function(t) {
        return ki(t).get(jr.key).next((function(t) {
            return k$1(null !== t), t;
        }));
    }, t.prototype.Ui = function(t, e) {
        return ki(t).put(jr.key, e);
    }, t.prototype.Gi = function(t, e) {
        return xi(t).put(ui(this.Qt, e));
    }, 
    /**
     * In-place updates the provided metadata to account for values in the given
     * TargetData. Saving is done separately. Returns true if there were any
     * changes to the metadata.
     */
    t.prototype.zi = function(t, e) {
        var n = !1;
        return t.targetId > e.highestTargetId && (e.highestTargetId = t.targetId, n = !0), 
        t.sequenceNumber > e.highestListenSequenceNumber && (e.highestListenSequenceNumber = t.sequenceNumber, 
        n = !0), n;
    }, t.prototype.Zi = function(t) {
        return this.qi(t).next((function(t) {
            return t.targetCount;
        }));
    }, t.prototype.tr = function(t, e) {
        // Iterating by the canonicalId may yield more than one result because
        // canonicalId values are not required to be unique per target. This query
        // depends on the queryTargets index to be efficient.
        var n = Ut(e), r = IDBKeyRange.bound([ n, Number.NEGATIVE_INFINITY ], [ n, Number.POSITIVE_INFINITY ]), i = null;
        return xi(t).hs({
            range: r,
            index: qr.queryTargetsIndexName
        }, (function(t, n, r) {
            var o = oi(n);
            // After finding a potential match, check that the target is
            // actually equal to the requested target.
                        Mt(e, o.target) && (i = o, r.done());
        })).next((function() {
            return i;
        }));
    }, t.prototype.er = function(t, e, n) {
        var r = this, i = [], o = Oi(t);
        // PORTING NOTE: The reverse index (documentsTargets) is maintained by
        // IndexedDb.
                return e.forEach((function(e) {
            var u = Ar(e.path);
            i.push(o.put(new Fr(n, u))), i.push(r.Ti.nr(t, n, e));
        })), lr.Mn(i);
    }, t.prototype.sr = function(t, e, n) {
        var r = this, i = Oi(t);
        // PORTING NOTE: The reverse index (documentsTargets) is maintained by
        // IndexedDb.
                return lr.forEach(e, (function(e) {
            var o = Ar(e.path);
            return lr.Mn([ i.delete([ n, o ]), r.Ti.ir(t, n, e) ]);
        }));
    }, t.prototype.Yi = function(t, e) {
        var n = Oi(t), r = IDBKeyRange.bound([ e ], [ e + 1 ], 
        /*lowerOpen=*/ !1, 
        /*upperOpen=*/ !0);
        return n.delete(r);
    }, t.prototype.rr = function(t, e) {
        var n = IDBKeyRange.bound([ e ], [ e + 1 ], 
        /*lowerOpen=*/ !1, 
        /*upperOpen=*/ !0), r = Oi(t), i = mn();
        return r.hs({
            range: n,
            us: !0
        }, (function(t, e, n) {
            var r = xr(t[1]), o = new tt(r);
            i = i.add(o);
        })).next((function() {
            return i;
        }));
    }, t.prototype.Fi = function(t, e) {
        var n = Ar(e.path), r = IDBKeyRange.bound([ n ], [ R$1(n) ], 
        /*lowerOpen=*/ !1, 
        /*upperOpen=*/ !0), i = 0;
        return Oi(t).hs({
            index: Fr.documentTargetsIndex,
            us: !0,
            range: r
        }, (function(t, e, n) {
            var r = t[0];
            // Having a sentinel row for a document does not count as containing that document;
            // For the target cache, containing the document means the document is part of some
            // target.
                        t[1];
            0 !== r && (i++, n.done());
        })).next((function() {
            return i > 0;
        }));
    }, 
    /**
     * Looks up a TargetData entry by target ID.
     *
     * @param targetId - The target ID of the TargetData entry to look up.
     * @returns The cached TargetData entry, or null if the cache has no entry for
     * the target.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.Sn = function(t, e) {
        return xi(t).get(e).next((function(t) {
            return t ? oi(t) : null;
        }));
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Helper to get a typed SimpleDbStore for the queries object store.
 */
function xi(t) {
    return Kr(t, qr.store);
}

/**
 * Helper to get a typed SimpleDbStore for the target globals object store.
 */ function ki(t) {
    return Kr(t, jr.store);
}

/**
 * Helper to get a typed SimpleDbStore for the document target object store.
 */ function Oi(t) {
    return Kr(t, Fr.store);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Pi(t, e) {
    var n = t[0], r = t[1], i = e[0], o = e[1], u = C(n, i);
    return 0 === u ? C(r, o) : u;
}

/**
 * Used to calculate the nth sequence number. Keeps a rolling buffer of the
 * lowest n values passed to `addElement`, and finally reports the largest of
 * them in `maxValue`.
 */ var Vi = /** @class */ function() {
    function t(t) {
        this.cr = t, this.buffer = new sn(Pi), this.ar = 0;
    }
    return t.prototype.ur = function() {
        return ++this.ar;
    }, t.prototype.hr = function(t) {
        var e = [ t, this.ur() ];
        if (this.buffer.size < this.cr) this.buffer = this.buffer.add(e); else {
            var n = this.buffer.last();
            Pi(e, n) < 0 && (this.buffer = this.buffer.delete(n).add(e));
        }
    }, Object.defineProperty(t.prototype, "maxValue", {
        get: function() {
            // Guaranteed to be non-empty. If we decide we are not collecting any
            // sequence numbers, nthSequenceNumber below short-circuits. If we have
            // decided that we are collecting n sequence numbers, it's because n is some
            // percentage of the existing sequence numbers. That means we should never
            // be in a situation where we are collecting sequence numbers but don't
            // actually have any.
            return this.buffer.last()[0];
        },
        enumerable: !1,
        configurable: !0
    }), t;
}(), Ci = /** @class */ function() {
    function t(t, e) {
        this.lr = t, this._s = e, this._r = !1, this.dr = null;
    }
    return t.prototype.start = function(t) {
        -1 !== this.lr.params.zs && this.wr(t);
    }, t.prototype.stop = function() {
        this.dr && (this.dr.cancel(), this.dr = null);
    }, Object.defineProperty(t.prototype, "Er", {
        get: function() {
            return null !== this.dr;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.wr = function(t) {
        var e = this, n = this._r ? 3e5 : 6e4;
        N$1("LruGarbageCollector", "Garbage collection scheduled in " + n + "ms"), this.dr = this._s.Tr("lru_garbage_collection" /* LruGarbageCollection */ , n, (function() {
            return __awaiter(e, void 0, void 0, (function() {
                var e;
                return __generator(this, (function(n) {
                    switch (n.label) {
                      case 0:
                        this.dr = null, this._r = !0, n.label = 1;

                      case 1:
                        return n.trys.push([ 1, 3, , 7 ]), [ 4 /*yield*/ , t.Ir(this.lr) ];

                      case 2:
                        return n.sent(), [ 3 /*break*/ , 7 ];

                      case 3:
                        return mr(e = n.sent()) ? (N$1("LruGarbageCollector", "Ignoring IndexedDB error during garbage collection: ", e), 
                        [ 3 /*break*/ , 6 ]) : [ 3 /*break*/ , 4 ];

                      case 4:
                        return [ 4 /*yield*/ , mi(e) ];

                      case 5:
                        n.sent(), n.label = 6;

                      case 6:
                        return [ 3 /*break*/ , 7 ];

                      case 7:
                        return [ 4 /*yield*/ , this.wr(t) ];

                      case 8:
                        return n.sent(), [ 2 /*return*/ ];
                    }
                }));
            }));
        }));
    }, t;
}(), Li = /** @class */ function() {
    function t(t, e) {
        this.mr = t, this.params = e;
    }
    return t.prototype.Ar = function(t, e) {
        return this.mr.Rr(t).next((function(t) {
            return Math.floor(e / 100 * t);
        }));
    }, t.prototype.Pr = function(t, e) {
        var n = this;
        if (0 === e) return lr.resolve(H$1.q);
        var r = new Vi(e);
        return this.mr.In(t, (function(t) {
            return r.hr(t.sequenceNumber);
        })).next((function() {
            return n.mr.yr(t, (function(t) {
                return r.hr(t);
            }));
        })).next((function() {
            return r.maxValue;
        }));
    }, t.prototype.Xi = function(t, e, n) {
        return this.mr.Xi(t, e, n);
    }, t.prototype.gr = function(t, e) {
        return this.mr.gr(t, e);
    }, t.prototype.Vr = function(t, e) {
        var n = this;
        return -1 === this.params.zs ? (N$1("LruGarbageCollector", "Garbage collection skipped; disabled"), 
        lr.resolve(vi)) : this.pr(t).next((function(r) {
            return r < n.params.zs ? (N$1("LruGarbageCollector", "Garbage collection skipped; Cache size " + r + " is lower than threshold " + n.params.zs), 
            vi) : n.br(t, e);
        }));
    }, t.prototype.pr = function(t) {
        return this.mr.pr(t);
    }, t.prototype.br = function(t, n) {
        var r, i, o, u, s, a, c, h = this, f = Date.now();
        return this.Ar(t, this.params.Hs).next((function(e) {
            // Cap at the configured max
            return e > h.params.Js ? (N$1("LruGarbageCollector", "Capping sequence numbers to collect down to the maximum of " + h.params.Js + " from " + e), 
            i = h.params.Js) : i = e, u = Date.now(), h.Pr(t, i);
        })).next((function(e) {
            return r = e, s = Date.now(), h.Xi(t, r, n);
        })).next((function(e) {
            return o = e, a = Date.now(), h.gr(t, r);
        })).next((function(t) {
            return c = Date.now(), T$1() <= LogLevel.DEBUG && N$1("LruGarbageCollector", "LRU Garbage Collection\n\tCounted targets in " + (u - f) + "ms\n\tDetermined least recently used " + i + " in " + (s - u) + "ms\n\tRemoved " + o + " targets in " + (a - s) + "ms\n\tRemoved " + t + " documents in " + (c - a) + "ms\nTotal Duration: " + (c - f) + "ms"), 
            lr.resolve({
                Ks: !0,
                Ws: i,
                js: o,
                Gs: t
            });
        }));
    }, t;
}(), Ri = /** @class */ function() {
    function t(t, e) {
        this.db = t, this.lr = function(t, e) {
            return new Li(t, e);
        }(this, e);
    }
    return t.prototype.Rr = function(t) {
        var e = this.vr(t);
        return this.db.Sr().Zi(t).next((function(t) {
            return e.next((function(e) {
                return t + e;
            }));
        }));
    }, t.prototype.vr = function(t) {
        var e = 0;
        return this.yr(t, (function(t) {
            e++;
        })).next((function() {
            return e;
        }));
    }, t.prototype.In = function(t, e) {
        return this.db.Sr().In(t, e);
    }, t.prototype.yr = function(t, e) {
        return this.Dr(t, (function(t, n) {
            return e(n);
        }));
    }, t.prototype.nr = function(t, e, n) {
        return Ui(t, n);
    }, t.prototype.ir = function(t, e, n) {
        return Ui(t, n);
    }, t.prototype.Xi = function(t, e, n) {
        return this.db.Sr().Xi(t, e, n);
    }, t.prototype.Ni = function(t, e) {
        return Ui(t, e);
    }, 
    /**
     * Returns true if anything would prevent this document from being garbage
     * collected, given that the document in question is not present in any
     * targets and has a sequence number less than or equal to the upper bound for
     * the collection run.
     */
    t.prototype.Cr = function(t, e) {
        return function(t, e) {
            var n = !1;
            return Ai(t).ls((function(r) {
                return Ei(t, r, e).next((function(t) {
                    return t && (n = !0), lr.resolve(!t);
                }));
            })).next((function() {
                return n;
            }));
        }(t, e);
    }, t.prototype.gr = function(t, e) {
        var n = this, r = this.db.$r().Nr(), i = [], o = 0;
        return this.Dr(t, (function(u, s) {
            if (s <= e) {
                var a = n.Cr(t, u).next((function(e) {
                    if (!e) 
                    // Our size accounting requires us to read all documents before
                    // removing them.
                    return o++, r._i(t, u).next((function() {
                        return r.li(u), Oi(t).delete([ 0, Ar(u.path) ]);
                    }));
                }));
                i.push(a);
            }
        })).next((function() {
            return lr.Mn(i);
        })).next((function() {
            return r.apply(t);
        })).next((function() {
            return o;
        }));
    }, t.prototype.removeTarget = function(t, e) {
        var n = e.kt(t.bs);
        return this.db.Sr().Hi(t, n);
    }, t.prototype.Fr = function(t, e) {
        return Ui(t, e);
    }, 
    /**
     * Call provided function for each document in the cache that is 'orphaned'. Orphaned
     * means not a part of any target, so the only entry in the target-document index for
     * that document will be the sentinel row (targetId 0), which will also have the sequence
     * number for the last time the document was accessed.
     */
    t.prototype.Dr = function(t, e) {
        var n, r = Oi(t), i = H$1.q;
        return r.hs({
            index: Fr.documentTargetsIndex
        }, (function(t, r) {
            var o = t[0], u = (t[1], r.path), s = r.sequenceNumber;
            0 === o ? (
            // if nextToReport is valid, report it, this is a new key so the
            // last one must not be a member of any targets.
            i !== H$1.q && e(new tt(xr(n)), i), 
            // set nextToReport to be this sequence number. It's the next one we
            // might report, if we don't find any targets for this document.
            // Note that the sequence number must be defined when the targetId
            // is 0.
            i = s, n = u) : 
            // set nextToReport to be invalid, we know we don't need to report
            // this one since we found a target for it.
            i = H$1.q;
        })).next((function() {
            // Since we report sequence numbers after getting to the next key, we
            // need to check if the last key we iterated over was an orphaned
            // document and report it.
            i !== H$1.q && e(new tt(xr(n)), i);
        }));
    }, t.prototype.pr = function(t) {
        return this.db.$r().Or(t);
    }, t;
}();

/**
 * This class is responsible for the scheduling of LRU garbage collection. It handles checking
 * whether or not GC is enabled, as well as which delay to use before the next run.
 */ function Ui(t, e) {
    return Oi(t).put(
    /**
 * @returns A value suitable for writing a sentinel row in the target-document
 * store.
 */
    function(t, e) {
        return new Fr(0, Ar(t.path), e);
    }(e, t.bs));
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The RemoteDocumentCache for IndexedDb. To construct, invoke
 * `newIndexedDbRemoteDocumentCache()`.
 */ var Mi = /** @class */ function() {
    /**
     * @param serializer - The document serializer.
     * @param indexManager - The query indexes that need to be maintained.
     */
    function t(t, e) {
        this.Qt = t, this.Ei = e
        /**
     * Adds the supplied entries to the cache.
     *
     * All calls of `addEntry` are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()` to ensure proper accounting of metadata.
     */;
    }
    return t.prototype.ai = function(t, e, n) {
        return ji(t).put(zi(e), n);
    }, 
    /**
     * Removes a document from the cache.
     *
     * All calls of `removeEntry`  are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()` to ensure proper accounting of metadata.
     */
    t.prototype.li = function(t, e) {
        var n = ji(t), r = zi(e);
        return n.delete(r);
    }, 
    /**
     * Updates the current cache size.
     *
     * Callers to `addEntry()` and `removeEntry()` *must* call this afterwards to update the
     * cache's metadata.
     */
    t.prototype.updateMetadata = function(t, e) {
        var n = this;
        return this.getMetadata(t).next((function(r) {
            return r.byteSize += e, n.kr(t, r);
        }));
    }, t.prototype._i = function(t, e) {
        var n = this;
        return ji(t).get(zi(e)).next((function(t) {
            return n.Mr(t);
        }));
    }, 
    /**
     * Looks up an entry in the cache.
     *
     * @param documentKey - The key of the entry to look up.
     * @returns The cached MaybeDocument entry and its size, or null if we have
     * nothing cached.
     */
    t.prototype.Lr = function(t, e) {
        var n = this;
        return ji(t).get(zi(e)).next((function(t) {
            var e = n.Mr(t);
            return e ? {
                hi: e,
                size: _i(t)
            } : null;
        }));
    }, t.prototype.getEntries = function(t, e) {
        var n = this, r = fn();
        return this.Br(t, e, (function(t, e) {
            var i = n.Mr(e);
            r = r.zt(t, i);
        })).next((function() {
            return r;
        }));
    }, 
    /**
     * Looks up several entries in the cache.
     *
     * @param documentKeys - The set of keys entries to look up.
     * @returns A map of MaybeDocuments indexed by key (if a document cannot be
     *     found, the key will be mapped to null) and a map of sizes indexed by
     *     key (zero if the key cannot be found).
     */
    t.prototype.qr = function(t, e) {
        var n = this, r = fn(), i = new rn(tt.H);
        return this.Br(t, e, (function(t, e) {
            var o = n.Mr(e);
            o ? (r = r.zt(t, o), i = i.zt(t, _i(e))) : (r = r.zt(t, null), i = i.zt(t, 0));
        })).next((function() {
            return {
                Ur: r,
                Qr: i
            };
        }));
    }, t.prototype.Br = function(t, e, n) {
        if (e.et()) return lr.resolve();
        var r = IDBKeyRange.bound(e.first().path.it(), e.last().path.it()), i = e.te(), o = i.oe();
        return ji(t).hs({
            range: r
        }, (function(t, e, r) {
            // Go through keys not found in cache.
            for (var u = tt.Et(t); o && tt.H(o, u) < 0; ) n(o, null), o = i.oe();
            o && o.isEqual(u) && (
            // Key found in cache.
            n(o, e), o = i.ce() ? i.oe() : null), 
            // Skip to the next key (if there is one).
            o ? r.ss(o.path.it()) : r.done();
        })).next((function() {
            // The rest of the keys are not in the cache. One case where `iterate`
            // above won't go through them is when the cache is empty.
            for (;o; ) n(o, null), o = i.ce() ? i.oe() : null;
        }));
    }, t.prototype.Kr = function(t, e, n) {
        var r = this, i = pn(), o = e.path.length + 1, u = {};
        if (n.isEqual(X$1.min())) {
            // Documents are ordered by key, so we can use a prefix scan to narrow
            // down the documents we need to match the query against.
            var s = e.path.it();
            u.range = IDBKeyRange.lowerBound(s);
        } else {
            // Execute an index-free query and filter by read time. This is safe
            // since all document changes to queries that have a
            // lastLimboFreeSnapshotVersion (`sinceReadTime`) have a read time set.
            var a = e.path.it(), c = ti(n);
            u.range = IDBKeyRange.lowerBound([ a, c ], 
            /* open= */ !0), u.index = Ur.collectionReadTimeIndex;
        }
        return ji(t).hs(u, (function(t, n, u) {
            // The query is actually returning any path that starts with the query
            // path prefix which may include documents in subcollections. For
            // example, a query on 'rooms' will return rooms/abc/messages/xyx but we
            // shouldn't match it. Fix this by discarding rows with document keys
            // more than one segment longer than the query path.
            if (t.length === o) {
                var s = Jr(r.Qt, n);
                e.path.nt(s.key.path) ? s instanceof Pt && ve(e, s) && (i = i.zt(s.key, s)) : u.done();
            }
        })).next((function() {
            return i;
        }));
    }, t.prototype.Nr = function(t) {
        return new qi(this, !!t && t.Wr);
    }, t.prototype.Or = function(t) {
        return this.getMetadata(t).next((function(t) {
            return t.byteSize;
        }));
    }, t.prototype.getMetadata = function(t) {
        return Fi(t).get(Mr.key).next((function(t) {
            return k$1(!!t), t;
        }));
    }, t.prototype.kr = function(t, e) {
        return Fi(t).put(Mr.key, e);
    }, 
    /**
     * Decodes `remoteDoc` and returns the document (or null, if the document
     * corresponds to the format used for sentinel deletes).
     */
    t.prototype.Mr = function(t) {
        if (t) {
            var e = Jr(this.Qt, t);
            return e instanceof Vt && e.version.isEqual(X$1.min()) ? null : e;
        }
        return null;
    }, t;
}(), qi = /** @class */ function(t) {
    /**
     * @param documentCache - The IndexedDbRemoteDocumentCache to apply the changes to.
     * @param trackRemovals - Whether to create sentinel deletes that can be tracked by
     * `getNewDocumentChanges()`.
     */
    function e(e, n) {
        var r = this;
        return (r = t.call(this) || this).jr = e, r.Wr = n, 
        // A map of document sizes prior to applying the changes in this buffer.
        r.Gr = new gi((function(t) {
            return t.toString();
        }), (function(t, e) {
            return t.isEqual(e);
        })), r;
    }
    return __extends$1(e, t), e.prototype.wi = function(t) {
        var e = this, n = [], r = 0, i = new sn((function(t, e) {
            return C(t.rt(), e.rt());
        }));
        return this.ri.forEach((function(o, u) {
            var s = e.Gr.get(o);
            if (u.hi) {
                var a = $r(e.jr.Qt, u.hi, e.ci(o));
                i = i.add(o.path.X());
                var c = _i(a);
                r += c - s, n.push(e.jr.ai(t, o, a));
            } else if (r -= s, e.Wr) {
                // In order to track removals, we store a "sentinel delete" in the
                // RemoteDocumentCache. This entry is represented by a NoDocument
                // with a version of 0 and ignored by `maybeDecodeDocument()` but
                // preserved in `getNewDocumentChanges()`.
                var h = $r(e.jr.Qt, new Vt(o, X$1.min()), e.ci(o));
                n.push(e.jr.ai(t, o, h));
            } else n.push(e.jr.li(t, o));
        })), i.forEach((function(r) {
            n.push(e.jr.Ei.qs(t, r));
        })), n.push(this.jr.updateMetadata(t, r)), lr.Mn(n);
    }, e.prototype.fi = function(t, e) {
        var n = this;
        // Record the size of everything we load from the cache so we can compute a delta later.
                return this.jr.Lr(t, e).next((function(t) {
            return null === t ? (n.Gr.set(e, 0), null) : (n.Gr.set(e, t.size), t.hi);
        }));
    }, e.prototype.di = function(t, e) {
        var n = this;
        // Record the size of everything we load from the cache so we can compute
        // a delta later.
                return this.jr.qr(t, e).next((function(t) {
            var e = t.Ur;
            // Note: `getAllFromCache` returns two maps instead of a single map from
            // keys to `DocumentSizeEntry`s. This is to allow returning the
            // `NullableMaybeDocumentMap` directly, without a conversion.
            return t.Qr.forEach((function(t, e) {
                n.Gr.set(t, e);
            })), e;
        }));
    }, e;
}(wi);

/**
 * Creates a new IndexedDbRemoteDocumentCache.
 *
 * @param serializer - The document serializer.
 * @param indexManager - The query indexes that need to be maintained.
 */
/**
 * Handles the details of adding and updating documents in the IndexedDbRemoteDocumentCache.
 *
 * Unlike the MemoryRemoteDocumentChangeBuffer, the IndexedDb implementation computes the size
 * delta for all submitted changes. This avoids having to re-read all documents from IndexedDb
 * when we apply the changes.
 */ function Fi(t) {
    return Kr(t, Mr.store);
}

/**
 * Helper to get a typed SimpleDbStore for the remoteDocuments object store.
 */ function ji(t) {
    return Kr(t, Ur.store);
}

function zi(t) {
    return t.path.it();
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Performs database creation and schema upgrades. */ var Gi = /** @class */ function() {
    function t(t) {
        this.Qt = t;
    }
    /**
     * Performs database creation and schema upgrades.
     *
     * Note that in production, this method is only ever used to upgrade the schema
     * to SCHEMA_VERSION. Different values of toVersion are only used for testing
     * and local feature development.
     */    return t.prototype.Jn = function(t, e, n, r) {
        var i = this;
        k$1(n < r && n >= 0 && r <= 11);
        var o = new pr("createOrUpgrade", e);
        n < 1 && r >= 1 && (function(t) {
            t.createObjectStore(Or.store);
        }(t), function(t) {
            t.createObjectStore(Pr.store, {
                keyPath: Pr.keyPath
            }), t.createObjectStore(Vr.store, {
                keyPath: Vr.keyPath,
                autoIncrement: !0
            }).createIndex(Vr.userMutationsIndex, Vr.userMutationsKeyPath, {
                unique: !0
            }), t.createObjectStore(Cr.store);
        }(t), Bi(t), function(t) {
            t.createObjectStore(Ur.store);
        }(t));
        // Migration 2 to populate the targetGlobal object no longer needed since
        // migration 3 unconditionally clears it.
        var u = lr.resolve();
        return n < 3 && r >= 3 && (
        // Brand new clients don't need to drop and recreate--only clients that
        // potentially have corrupt data.
        0 !== n && (function(t) {
            t.deleteObjectStore(Fr.store), t.deleteObjectStore(qr.store), t.deleteObjectStore(jr.store);
        }(t), Bi(t)), u = u.next((function() {
            /**
     * Creates the target global singleton row.
     *
     * @param txn - The version upgrade transaction for indexeddb
     */
            return function(t) {
                var e = t.store(jr.store), n = new jr(
                /*highestTargetId=*/ 0, 
                /*lastListenSequenceNumber=*/ 0, X$1.min().j(), 
                /*targetCount=*/ 0);
                return e.put(jr.key, n);
            }(o);
        }))), n < 4 && r >= 4 && (0 !== n && (
        // Schema version 3 uses auto-generated keys to generate globally unique
        // mutation batch IDs (this was previously ensured internally by the
        // client). To migrate to the new schema, we have to read all mutations
        // and write them back out. We preserve the existing batch IDs to guarantee
        // consistency with other object stores. Any further mutation batch IDs will
        // be auto-generated.
        u = u.next((function() {
            return function(t, e) {
                return e.store(Vr.store).rs().next((function(n) {
                    t.deleteObjectStore(Vr.store), t.createObjectStore(Vr.store, {
                        keyPath: Vr.keyPath,
                        autoIncrement: !0
                    }).createIndex(Vr.userMutationsIndex, Vr.userMutationsKeyPath, {
                        unique: !0
                    });
                    var r = e.store(Vr.store), i = n.map((function(t) {
                        return r.put(t);
                    }));
                    return lr.Mn(i);
                }));
            }(t, o);
        }))), u = u.next((function() {
            !function(t) {
                t.createObjectStore(Gr.store, {
                    keyPath: Gr.keyPath
                });
            }(t);
        }))), n < 5 && r >= 5 && (u = u.next((function() {
            return i.zr(o);
        }))), n < 6 && r >= 6 && (u = u.next((function() {
            return function(t) {
                t.createObjectStore(Mr.store);
            }(t), i.Hr(o);
        }))), n < 7 && r >= 7 && (u = u.next((function() {
            return i.Jr(o);
        }))), n < 8 && r >= 8 && (u = u.next((function() {
            return i.Yr(t, o);
        }))), n < 9 && r >= 9 && (u = u.next((function() {
            // Multi-Tab used to manage its own changelog, but this has been moved
            // to the DbRemoteDocument object store itself. Since the previous change
            // log only contained transient data, we can drop its object store.
            !function(t) {
                t.objectStoreNames.contains("remoteDocumentChanges") && t.deleteObjectStore("remoteDocumentChanges");
            }(t), function(t) {
                var e = t.objectStore(Ur.store);
                e.createIndex(Ur.readTimeIndex, Ur.readTimeIndexPath, {
                    unique: !1
                }), e.createIndex(Ur.collectionReadTimeIndex, Ur.collectionReadTimeIndexPath, {
                    unique: !1
                });
            }(e);
        }))), n < 10 && r >= 10 && (u = u.next((function() {
            return i.Xr(o);
        }))), n < 11 && r >= 11 && (u = u.next((function() {
            !function(t) {
                t.createObjectStore(Br.store, {
                    keyPath: Br.keyPath
                });
            }(t), function(t) {
                t.createObjectStore(Qr.store, {
                    keyPath: Qr.keyPath
                });
            }(t);
        }))), u;
    }, t.prototype.Hr = function(t) {
        var e = 0;
        return t.store(Ur.store).hs((function(t, n) {
            e += _i(n);
        })).next((function() {
            var n = new Mr(e);
            return t.store(Mr.store).put(Mr.key, n);
        }));
    }, t.prototype.zr = function(t) {
        var e = this, n = t.store(Pr.store), r = t.store(Vr.store);
        return n.rs().next((function(n) {
            return lr.forEach(n, (function(n) {
                var i = IDBKeyRange.bound([ n.userId, -1 ], [ n.userId, n.lastAcknowledgedBatchId ]);
                return r.rs(Vr.userMutationsIndex, i).next((function(r) {
                    return lr.forEach(r, (function(r) {
                        k$1(r.userId === n.userId);
                        var i = ii(e.Qt, r);
                        return bi(t, n.userId, i).next((function() {}));
                    }));
                }));
            }));
        }));
    }, 
    /**
     * Ensures that every document in the remote document cache has a corresponding sentinel row
     * with a sequence number. Missing rows are given the most recently used sequence number.
     */
    t.prototype.Jr = function(t) {
        var e = t.store(Fr.store), n = t.store(Ur.store);
        return t.store(jr.store).get(jr.key).next((function(t) {
            var r = [];
            return n.hs((function(n, i) {
                var o = new Z$1(n), u = function(t) {
                    return [ 0, Ar(t) ];
                }(o);
                r.push(e.get(u).next((function(n) {
                    return n ? lr.resolve() : function(n) {
                        return e.put(new Fr(0, Ar(n), t.highestListenSequenceNumber));
                    }(o);
                })));
            })).next((function() {
                return lr.Mn(r);
            }));
        }));
    }, t.prototype.Yr = function(t, e) {
        // Create the index.
        t.createObjectStore(zr.store, {
            keyPath: zr.keyPath
        });
        var n = e.store(zr.store), r = new li, i = function(t) {
            if (r.add(t)) {
                var e = t.tt(), i = t.X();
                return n.put({
                    collectionId: e,
                    parent: Ar(i)
                });
            }
        };
        // Helper to add an index entry iff we haven't already written it.
        // Index existing remote documents.
                return e.store(Ur.store).hs({
            us: !0
        }, (function(t, e) {
            var n = new Z$1(t);
            return i(n.X());
        })).next((function() {
            return e.store(Cr.store).hs({
                us: !0
            }, (function(t, e) {
                t[0];
                var n = t[1], r = (t[2], xr(n));
                return i(r.X());
            }));
        }));
    }, t.prototype.Xr = function(t) {
        var e = this, n = t.store(qr.store);
        return n.hs((function(t, r) {
            var i = oi(r), o = ui(e.Qt, i);
            return n.put(o);
        }));
    }, t;
}();

function Bi(t) {
    t.createObjectStore(Fr.store, {
        keyPath: Fr.keyPath
    }).createIndex(Fr.documentTargetsIndex, Fr.documentTargetsKeyPath, {
        unique: !0
    }), 
    // NOTE: This is unique only because the TargetId is the suffix.
    t.createObjectStore(qr.store, {
        keyPath: qr.keyPath
    }).createIndex(qr.queryTargetsIndexName, qr.queryTargetsKeyPath, {
        unique: !0
    }), t.createObjectStore(jr.store);
}

var Qi = "Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.", Yi = /** @class */ function() {
    function t(
    /**
     * Whether to synchronize the in-memory state of multiple tabs and share
     * access to local persistence.
     */
    e, n, r, i, o, u, s, a, c, 
    /**
     * If set to true, forcefully obtains database access. Existing tabs will
     * no longer be able to access IndexedDB.
     */
    h) {
        if (this.allowTabSynchronization = e, this.persistenceKey = n, this.clientId = r, 
        this.Zr = o, this.window = u, this.document = s, this.eo = c, this.no = h, this.so = null, 
        this.io = !1, this.isPrimary = !1, this.networkEnabled = !0, 
        /** Our window.unload handler, if registered. */
        this.ro = null, this.inForeground = !1, 
        /** Our 'visibilitychange' listener if registered. */
        this.oo = null, 
        /** The client metadata refresh task. */
        this.co = null, 
        /** The last time we garbage collected the client metadata object store. */
        this.ao = Number.NEGATIVE_INFINITY, 
        /** A listener to notify on primary state changes. */
        this.uo = function(t) {
            return Promise.resolve();
        }, !t.Kn()) throw new q$1(M$1.UNIMPLEMENTED, "This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");
        this.Ti = new Ri(this, i), this.ho = n + "main", this.Qt = new Zr(a), this.lo = new dr(this.ho, 11, new Gi(this.Qt)), 
        this._o = new Si(this.Ti, this.Qt), this.Ei = new pi, this.fo = function(t, e) {
            return new Mi(t, e);
        }(this.Qt, this.Ei), this.wo = new ai, this.window && this.window.localStorage ? this.Eo = this.window.localStorage : (this.Eo = null, 
        !1 === h && A$1("IndexedDbPersistence", "LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."));
    }
    /**
     * Attempt to start IndexedDb persistence.
     *
     * @returns Whether persistence was enabled.
     */    return t.prototype.start = function() {
        var t = this;
        // NOTE: This is expected to fail sometimes (in the case of another tab
        // already having the persistence lock), so it's the first thing we should
        // do.
                return this.To().then((function() {
            if (!t.isPrimary && !t.allowTabSynchronization) 
            // Fail `start()` if `synchronizeTabs` is disabled and we cannot
            // obtain the primary lease.
            throw new q$1(M$1.FAILED_PRECONDITION, Qi);
            return t.Io(), t.mo(), t.Ao(), t.runTransaction("getHighestListenSequenceNumber", "readonly", (function(e) {
                return t._o.Ki(e);
            }));
        })).then((function(e) {
            t.so = new H$1(e, t.eo);
        })).then((function() {
            t.io = !0;
        })).catch((function(e) {
            return t.lo && t.lo.close(), Promise.reject(e);
        }));
    }, 
    /**
     * Registers a listener that gets called when the primary state of the
     * instance changes. Upon registering, this listener is invoked immediately
     * with the current primary state.
     *
     * PORTING NOTE: This is only used for Web multi-tab.
     */
    t.prototype.Ro = function(t) {
        var e = this;
        return this.uo = function(n) {
            return __awaiter(e, void 0, void 0, (function() {
                return __generator(this, (function(e) {
                    return this.Er ? [ 2 /*return*/ , t(n) ] : [ 2 /*return*/ ];
                }));
            }));
        }, t(this.isPrimary);
    }, 
    /**
     * Registers a listener that gets called when the database receives a
     * version change event indicating that it has deleted.
     *
     * PORTING NOTE: This is only used for Web multi-tab.
     */
    t.prototype.Po = function(t) {
        var e = this;
        this.lo.Xn((function(n) {
            return __awaiter(e, void 0, void 0, (function() {
                return __generator(this, (function(e) {
                    switch (e.label) {
                      case 0:
                        return null === n.newVersion ? [ 4 /*yield*/ , t() ] : [ 3 /*break*/ , 2 ];

                      case 1:
                        e.sent(), e.label = 2;

                      case 2:
                        return [ 2 /*return*/ ];
                    }
                }));
            }));
        }));
    }, 
    /**
     * Adjusts the current network state in the client's metadata, potentially
     * affecting the primary lease.
     *
     * PORTING NOTE: This is only used for Web multi-tab.
     */
    t.prototype.yo = function(t) {
        var e = this;
        this.networkEnabled !== t && (this.networkEnabled = t, 
        // Schedule a primary lease refresh for immediate execution. The eventual
        // lease update will be propagated via `primaryStateListener`.
        this.Zr.Ps((function() {
            return __awaiter(e, void 0, void 0, (function() {
                return __generator(this, (function(t) {
                    switch (t.label) {
                      case 0:
                        return this.Er ? [ 4 /*yield*/ , this.To() ] : [ 3 /*break*/ , 2 ];

                      case 1:
                        t.sent(), t.label = 2;

                      case 2:
                        return [ 2 /*return*/ ];
                    }
                }));
            }));
        })));
    }, 
    /**
     * Updates the client metadata in IndexedDb and attempts to either obtain or
     * extend the primary lease for the local client. Asynchronously notifies the
     * primary state listener if the client either newly obtained or released its
     * primary lease.
     */
    t.prototype.To = function() {
        var t = this;
        return this.runTransaction("updateClientMetadataAndTryBecomePrimary", "readwrite", (function(e) {
            return Ki(e).put(new Gr(t.clientId, Date.now(), t.networkEnabled, t.inForeground)).next((function() {
                if (t.isPrimary) return t.Vo(e).next((function(e) {
                    e || (t.isPrimary = !1, t.Zr.po((function() {
                        return t.uo(!1);
                    })));
                }));
            })).next((function() {
                return t.bo(e);
            })).next((function(n) {
                return t.isPrimary && !n ? t.vo(e).next((function() {
                    return !1;
                })) : !!n && t.So(e).next((function() {
                    return !0;
                }));
            }));
        })).catch((function(e) {
            if (mr(e)) 
            // Proceed with the existing state. Any subsequent access to
            // IndexedDB will verify the lease.
            return N$1("IndexedDbPersistence", "Failed to extend owner lease: ", e), t.isPrimary;
            if (!t.allowTabSynchronization) throw e;
            return N$1("IndexedDbPersistence", "Releasing owner lease after error during lease refresh", e), 
            /* isPrimary= */ !1;
        })).then((function(e) {
            t.isPrimary !== e && t.Zr.po((function() {
                return t.uo(e);
            })), t.isPrimary = e;
        }));
    }, t.prototype.Vo = function(t) {
        var e = this;
        return Hi(t).get(Or.key).next((function(t) {
            return lr.resolve(e.Do(t));
        }));
    }, t.prototype.Co = function(t) {
        return Ki(t).delete(this.clientId);
    }, 
    /**
     * If the garbage collection threshold has passed, prunes the
     * RemoteDocumentChanges and the ClientMetadata store based on the last update
     * time of all clients.
     */
    t.prototype.xo = function() {
        return __awaiter(this, void 0, void 0, (function() {
            var t, e, n, r, i = this;
            return __generator(this, (function(o) {
                switch (o.label) {
                  case 0:
                    return !this.isPrimary || this.No(this.ao, 18e5) ? [ 3 /*break*/ , 2 ] : (this.ao = Date.now(), 
                    [ 4 /*yield*/ , this.runTransaction("maybeGarbageCollectMultiClientState", "readwrite-primary", (function(t) {
                        var e = Kr(t, Gr.store);
                        return e.rs().next((function(t) {
                            var n = i.$o(t, 18e5), r = t.filter((function(t) {
                                return -1 === n.indexOf(t);
                            }));
                            // Delete metadata for clients that are no longer considered active.
                                                        return lr.forEach(r, (function(t) {
                                return e.delete(t.clientId);
                            })).next((function() {
                                return r;
                            }));
                        }));
                    })).catch((function() {
                        return [];
                    })) ]);

                  case 1:
                    // Delete potential leftover entries that may continue to mark the
                    // inactive clients as zombied in LocalStorage.
                    // Ideally we'd delete the IndexedDb and LocalStorage zombie entries for
                    // the client atomically, but we can't. So we opt to delete the IndexedDb
                    // entries first to avoid potentially reviving a zombied client.
                    if (t = o.sent(), this.Eo) for (e = 0, n = t; e < n.length; e++) r = n[e], this.Eo.removeItem(this.Fo(r.clientId));
                    o.label = 2;

                  case 2:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Schedules a recurring timer to update the client metadata and to either
     * extend or acquire the primary lease if the client is eligible.
     */
    t.prototype.Ao = function() {
        var t = this;
        this.co = this.Zr.Tr("client_metadata_refresh" /* ClientMetadataRefresh */ , 4e3, (function() {
            return t.To().then((function() {
                return t.xo();
            })).then((function() {
                return t.Ao();
            }));
        }));
    }, 
    /** Checks whether `client` is the local client. */ t.prototype.Do = function(t) {
        return !!t && t.ownerId === this.clientId;
    }, 
    /**
     * Evaluate the state of all active clients and determine whether the local
     * client is or can act as the holder of the primary lease. Returns whether
     * the client is eligible for the lease, but does not actually acquire it.
     * May return 'false' even if there is no active leaseholder and another
     * (foreground) client should become leaseholder instead.
     */
    t.prototype.bo = function(t) {
        var e = this;
        return this.no ? lr.resolve(!0) : Hi(t).get(Or.key).next((function(n) {
            // A client is eligible for the primary lease if:
            // - its network is enabled and the client's tab is in the foreground.
            // - its network is enabled and no other client's tab is in the
            //   foreground.
            // - every clients network is disabled and the client's tab is in the
            //   foreground.
            // - every clients network is disabled and no other client's tab is in
            //   the foreground.
            // - the `forceOwningTab` setting was passed in.
            if (null !== n && e.No(n.leaseTimestampMs, 5e3) && !e.Oo(n.ownerId)) {
                if (e.Do(n) && e.networkEnabled) return !0;
                if (!e.Do(n)) {
                    if (!n.allowTabSynchronization) 
                    // Fail the `canActAsPrimary` check if the current leaseholder has
                    // not opted into multi-tab synchronization. If this happens at
                    // client startup, we reject the Promise returned by
                    // `enablePersistence()` and the user can continue to use Firestore
                    // with in-memory persistence.
                    // If this fails during a lease refresh, we will instead block the
                    // AsyncQueue from executing further operations. Note that this is
                    // acceptable since mixing & matching different `synchronizeTabs`
                    // settings is not supported.
                    // TODO(b/114226234): Remove this check when `synchronizeTabs` can
                    // no longer be turned off.
                    throw new q$1(M$1.FAILED_PRECONDITION, Qi);
                    return !1;
                }
            }
            return !(!e.networkEnabled || !e.inForeground) || Ki(t).rs().next((function(t) {
                return void 0 === e.$o(t, 5e3).find((function(t) {
                    if (e.clientId !== t.clientId) {
                        var n = !e.networkEnabled && t.networkEnabled, r = !e.inForeground && t.inForeground, i = e.networkEnabled === t.networkEnabled;
                        if (n || r && i) return !0;
                    }
                    return !1;
                }));
            }));
        })).next((function(t) {
            return e.isPrimary !== t && N$1("IndexedDbPersistence", "Client " + (t ? "is" : "is not") + " eligible for a primary lease."), 
            t;
        }));
    }, t.prototype.ko = function() {
        return __awaiter(this, void 0, void 0, (function() {
            var t = this;
            return __generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    // Use `SimpleDb.runTransaction` directly to avoid failing if another tab
                    // has obtained the primary lease.
                    // The shutdown() operations are idempotent and can be called even when
                    // start() aborted (e.g. because it couldn't acquire the persistence lease).
                    return this.io = !1, this.Mo(), this.co && (this.co.cancel(), this.co = null), this.Lo(), 
                    this.Bo(), [ 4 /*yield*/ , this.lo.runTransaction("shutdown", "readwrite", [ Or.store, Gr.store ], (function(e) {
                        var n = new Hr(e, H$1.q);
                        return t.vo(n).next((function() {
                            return t.Co(n);
                        }));
                    })) ];

                  case 1:
                    // The shutdown() operations are idempotent and can be called even when
                    // start() aborted (e.g. because it couldn't acquire the persistence lease).
                    // Use `SimpleDb.runTransaction` directly to avoid failing if another tab
                    // has obtained the primary lease.
                    return e.sent(), this.lo.close(), 
                    // Remove the entry marking the client as zombied from LocalStorage since
                    // we successfully deleted its metadata from IndexedDb.
                    this.qo(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Returns clients that are not zombied and have an updateTime within the
     * provided threshold.
     */
    t.prototype.$o = function(t, e) {
        var n = this;
        return t.filter((function(t) {
            return n.No(t.updateTimeMs, e) && !n.Oo(t.clientId);
        }));
    }, 
    /**
     * Returns the IDs of the clients that are currently active. If multi-tab
     * is not supported, returns an array that only contains the local client's
     * ID.
     *
     * PORTING NOTE: This is only used for Web multi-tab.
     */
    t.prototype.Uo = function() {
        var t = this;
        return this.runTransaction("getActiveClients", "readonly", (function(e) {
            return Ki(e).rs().next((function(e) {
                return t.$o(e, 18e5).map((function(t) {
                    return t.clientId;
                }));
            }));
        }));
    }, Object.defineProperty(t.prototype, "Er", {
        get: function() {
            return this.io;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.Qo = function(t) {
        return Ii.mi(t, this.Qt, this.Ei, this.Ti);
    }, t.prototype.Sr = function() {
        return this._o;
    }, t.prototype.$r = function() {
        return this.fo;
    }, t.prototype.Ko = function() {
        return this.Ei;
    }, t.prototype.Wo = function() {
        return this.wo;
    }, t.prototype.runTransaction = function(t, e, n) {
        var r = this;
        N$1("IndexedDbPersistence", "Starting transaction:", t);
        var i, o = "readonly" === e ? "readonly" : "readwrite";
        // Do all transactions as readwrite against all object stores, since we
        // are the only reader/writer.
        return this.lo.runTransaction(t, o, Yr, (function(o) {
            return i = new Hr(o, r.so ? r.so.next() : H$1.q), "readwrite-primary" === e ? r.Vo(i).next((function(t) {
                return !!t || r.bo(i);
            })).next((function(e) {
                if (!e) throw A$1("Failed to obtain primary lease for action '" + t + "'."), r.isPrimary = !1, 
                r.Zr.po((function() {
                    return r.uo(!1);
                })), new q$1(M$1.FAILED_PRECONDITION, Tr);
                return n(i);
            })).next((function(t) {
                return r.So(i).next((function() {
                    return t;
                }));
            })) : r.jo(i).next((function() {
                return n(i);
            }));
        })).then((function(t) {
            return i.Vs(), t;
        }));
    }, 
    /**
     * Verifies that the current tab is the primary leaseholder or alternatively
     * that the leaseholder has opted into multi-tab synchronization.
     */
    // TODO(b/114226234): Remove this check when `synchronizeTabs` can no longer
    // be turned off.
    t.prototype.jo = function(t) {
        var e = this;
        return Hi(t).get(Or.key).next((function(t) {
            if (null !== t && e.No(t.leaseTimestampMs, 5e3) && !e.Oo(t.ownerId) && !e.Do(t) && !(e.no || e.allowTabSynchronization && t.allowTabSynchronization)) throw new q$1(M$1.FAILED_PRECONDITION, Qi);
        }));
    }, 
    /**
     * Obtains or extends the new primary lease for the local client. This
     * method does not verify that the client is eligible for this lease.
     */
    t.prototype.So = function(t) {
        var e = new Or(this.clientId, this.allowTabSynchronization, Date.now());
        return Hi(t).put(Or.key, e);
    }, t.Kn = function() {
        return dr.Kn();
    }, 
    /** Checks the primary lease and removes it if we are the current primary. */ t.prototype.vo = function(t) {
        var e = this, n = Hi(t);
        return n.get(Or.key).next((function(t) {
            return e.Do(t) ? (N$1("IndexedDbPersistence", "Releasing primary lease."), n.delete(Or.key)) : lr.resolve();
        }));
    }, 
    /** Verifies that `updateTimeMs` is within `maxAgeMs`. */ t.prototype.No = function(t, e) {
        var n = Date.now();
        return !(t < n - e || t > n && (A$1("Detected an update time that is in the future: " + t + " > " + n), 
        1));
    }, t.prototype.Io = function() {
        var t = this;
        null !== this.document && "function" == typeof this.document.addEventListener && (this.oo = function() {
            t.Zr.Ps((function() {
                return t.inForeground = "visible" === t.document.visibilityState, t.To();
            }));
        }, this.document.addEventListener("visibilitychange", this.oo), this.inForeground = "visible" === this.document.visibilityState);
    }, t.prototype.Lo = function() {
        this.oo && (this.document.removeEventListener("visibilitychange", this.oo), this.oo = null);
    }, 
    /**
     * Attaches a window.unload handler that will synchronously write our
     * clientId to a "zombie client id" location in LocalStorage. This can be used
     * by tabs trying to acquire the primary lease to determine that the lease
     * is no longer valid even if the timestamp is recent. This is particularly
     * important for the refresh case (so the tab correctly re-acquires the
     * primary lease). LocalStorage is used for this rather than IndexedDb because
     * it is a synchronous API and so can be used reliably from  an unload
     * handler.
     */
    t.prototype.mo = function() {
        var t, e = this;
        "function" == typeof (null === (t = this.window) || void 0 === t ? void 0 : t.addEventListener) && (this.ro = function() {
            // Note: In theory, this should be scheduled on the AsyncQueue since it
            // accesses internal state. We execute this code directly during shutdown
            // to make sure it gets a chance to run.
            e.Mo(), e.Zr.Ps((function() {
                return e.ko();
            }));
        }, this.window.addEventListener("unload", this.ro));
    }, t.prototype.Bo = function() {
        this.ro && (this.window.removeEventListener("unload", this.ro), this.ro = null);
    }, 
    /**
     * Returns whether a client is "zombied" based on its LocalStorage entry.
     * Clients become zombied when their tab closes without running all of the
     * cleanup logic in `shutdown()`.
     */
    t.prototype.Oo = function(t) {
        var e;
        try {
            var n = null !== (null === (e = this.Eo) || void 0 === e ? void 0 : e.getItem(this.Fo(t)));
            return N$1("IndexedDbPersistence", "Client '" + t + "' " + (n ? "is" : "is not") + " zombied in LocalStorage"), 
            n;
        } catch (t) {
            // Gracefully handle if LocalStorage isn't working.
            return A$1("IndexedDbPersistence", "Failed to get zombied client id.", t), !1;
        }
    }, 
    /**
     * Record client as zombied (a client that had its tab closed). Zombied
     * clients are ignored during primary tab selection.
     */
    t.prototype.Mo = function() {
        if (this.Eo) try {
            this.Eo.setItem(this.Fo(this.clientId), String(Date.now()));
        } catch (t) {
            // Gracefully handle if LocalStorage isn't available / working.
            A$1("Failed to set zombie client id.", t);
        }
    }, 
    /** Removes the zombied client entry if it exists. */ t.prototype.qo = function() {
        if (this.Eo) try {
            this.Eo.removeItem(this.Fo(this.clientId));
        } catch (t) {
            // Ignore
        }
    }, t.prototype.Fo = function(t) {
        return "firestore_zombie_" + this.persistenceKey + "_" + t;
    }, t;
}();

/**
 * Oldest acceptable age in milliseconds for client metadata before the client
 * is considered inactive and its associated data is garbage collected.
 */
/**
 * An IndexedDB-backed instance of Persistence. Data is stored persistently
 * across sessions.
 *
 * On Web only, the Firestore SDKs support shared access to its persistence
 * layer. This allows multiple browser tabs to read and write to IndexedDb and
 * to synchronize state even without network connectivity. Shared access is
 * currently optional and not enabled unless all clients invoke
 * `enablePersistence()` with `{synchronizeTabs:true}`.
 *
 * In multi-tab mode, if multiple clients are active at the same time, the SDK
 * will designate one client as the “primary client”. An effort is made to pick
 * a visible, network-connected and active client, and this client is
 * responsible for letting other clients know about its presence. The primary
 * client writes a unique client-generated identifier (the client ID) to
 * IndexedDb’s “owner” store every 4 seconds. If the primary client fails to
 * update this entry, another client can acquire the lease and take over as
 * primary.
 *
 * Some persistence operations in the SDK are designated as primary-client only
 * operations. This includes the acknowledgment of mutations and all updates of
 * remote documents. The effects of these operations are written to persistence
 * and then broadcast to other tabs via LocalStorage (see
 * `WebStorageSharedClientState`), which then refresh their state from
 * persistence.
 *
 * Similarly, the primary client listens to notifications sent by secondary
 * clients to discover persistence changes written by secondary clients, such as
 * the addition of new mutations and query targets.
 *
 * If multi-tab is not enabled and another tab already obtained the primary
 * lease, IndexedDbPersistence enters a failed state and all subsequent
 * operations will automatically fail.
 *
 * Additionally, there is an optimization so that when a tab is closed, the
 * primary lease is released immediately (this is especially important to make
 * sure that a refreshed tab is able to immediately re-acquire the primary
 * lease). Unfortunately, IndexedDB cannot be reliably used in window.unload
 * since it is an asynchronous API. So in addition to attempting to give up the
 * lease, the leaseholder writes its client ID to a "zombiedClient" entry in
 * LocalStorage which acts as an indicator that another tab should go ahead and
 * take the primary lease immediately regardless of the current lease timestamp.
 *
 * TODO(b/114226234): Remove `synchronizeTabs` section when multi-tab is no
 * longer optional.
 */
/**
 * Helper to get a typed SimpleDbStore for the primary client object store.
 */
function Hi(t) {
    return Kr(t, Or.store);
}

/**
 * Helper to get a typed SimpleDbStore for the client metadata object store.
 */ function Ki(t) {
    return Kr(t, Gr.store);
}

/**
 * Generates a string used as a prefix when storing data in IndexedDB and
 * LocalStorage.
 */ function Xi(t, e) {
    // Use two different prefix formats:
    //   * firestore / persistenceKey / projectID . databaseID / ...
    //   * firestore / persistenceKey / projectID / ...
    // projectIDs are DNS-compatible names and cannot contain dots
    // so there's no danger of collisions.
    var n = t.projectId;
    return t.o || (n += "." + t.database), "firestore/" + e + "/" + n + "/"
    /**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */;
}

var Zi = /** @class */ function() {
    function t(t, e, n) {
        this.fo = t, this.zo = e, this.Ei = n
        /**
     * Get the local view of the document identified by `key`.
     *
     * @returns Local view of the document or null if we don't have any cached
     * state for it.
     */;
    }
    return t.prototype.Ho = function(t, e) {
        var n = this;
        return this.zo.bi(t, e).next((function(r) {
            return n.Jo(t, e, r);
        }));
    }, 
    /** Internal version of `getDocument` that allows reusing batches. */ t.prototype.Jo = function(t, e, n) {
        return this.fo._i(t, e).next((function(t) {
            for (var r = 0, i = n; r < i.length; r++) {
                t = i[r].Cs(e, t);
            }
            return t;
        }));
    }, 
    // Returns the view of the given `docs` as they would appear after applying
    // all mutations in the given `batches`.
    t.prototype.Yo = function(t, e, n) {
        var r = fn();
        return e.forEach((function(t, e) {
            for (var i = 0, o = n; i < o.length; i++) {
                e = o[i].Cs(t, e);
            }
            r = r.zt(t, e);
        })), r;
    }, 
    /**
     * Gets the local view of the documents identified by `keys`.
     *
     * If we don't have cached state for a document in `keys`, a NoDocument will
     * be stored for that key in the resulting set.
     */
    t.prototype.Xo = function(t, e) {
        var n = this;
        return this.fo.getEntries(t, e).next((function(e) {
            return n.Zo(t, e);
        }));
    }, 
    /**
     * Similar to `getDocuments`, but creates the local view from the given
     * `baseDocs` without retrieving documents from the local store.
     */
    t.prototype.Zo = function(t, e) {
        var n = this;
        return this.zo.vi(t, e).next((function(r) {
            var i = n.Yo(t, e, r), o = hn();
            return i.forEach((function(t, e) {
                // TODO(http://b/32275378): Don't conflate missing / deleted.
                e || (e = new Vt(t, X$1.min())), o = o.zt(t, e);
            })), o;
        }));
    }, 
    /**
     * Performs a query against the local view of all documents.
     *
     * @param transaction - The persistence transaction.
     * @param query - The query to match documents against.
     * @param sinceReadTime - If not set to SnapshotVersion.min(), return only
     *     documents that have been read since this snapshot version (exclusive).
     */
    t.prototype.Kr = function(t, e, n) {
        /**
 * Returns whether the query matches a single document by path (rather than a
 * collection).
 */
        return function(t) {
            return tt.wt(t.path) && null === t.collectionGroup && 0 === t.filters.length;
        }(e) ? this.tc(t, e.path) : ae(e) ? this.ec(t, e, n) : this.nc(t, e, n);
    }, t.prototype.tc = function(t, e) {
        // Just do a simple document lookup.
        return this.Ho(t, new tt(e)).next((function(t) {
            var e = pn();
            return t instanceof Pt && (e = e.zt(t.key, t)), e;
        }));
    }, t.prototype.ec = function(t, e, n) {
        var r = this, i = e.collectionGroup, o = pn();
        return this.Ei.Us(t, i).next((function(u) {
            return lr.forEach(u, (function(u) {
                var s = function(t, e) {
                    return new ee(e, 
                    /*collectionGroup=*/ null, t.xt.slice(), t.filters.slice(), t.limit, t.limitType, t.startAt, t.endAt);
                }(e, u.child(i));
                return r.nc(t, s, n).next((function(t) {
                    t.forEach((function(t, e) {
                        o = o.zt(t, e);
                    }));
                }));
            })).next((function() {
                return o;
            }));
        }));
    }, t.prototype.nc = function(t, e, n) {
        var r, i, o = this;
        // Query the remote documents and overlay mutations.
                return this.fo.Kr(t, e, n).next((function(n) {
            return r = n, o.zo.Di(t, e);
        })).next((function(e) {
            return i = e, o.sc(t, i, r).next((function(t) {
                r = t;
                for (var e = 0, n = i; e < n.length; e++) for (var o = n[e], u = 0, s = o.mutations; u < s.length; u++) {
                    var a = s[u], c = a.key, h = Fe(a, r.get(c), o.vs);
                    r = h instanceof Pt ? r.zt(c, h) : r.remove(c);
                }
            }));
        })).next((function() {
            // Finally, filter out any documents that don't actually match
            // the query.
            return r.forEach((function(t, n) {
                ve(e, n) || (r = r.remove(t));
            })), r;
        }));
    }, t.prototype.sc = function(t, e, n) {
        for (var r = mn(), i = 0, o = e; i < o.length; i++) for (var u = 0, s = o[i].mutations; u < s.length; u++) {
            var a = s[u];
            a instanceof Qe && null === n.get(a.key) && (r = r.add(a.key));
        }
        var c = n;
        return this.fo.getEntries(t, r).next((function(t) {
            return t.forEach((function(t, e) {
                null !== e && e instanceof Pt && (c = c.zt(t, e));
            })), c;
        }));
    }, t;
}(), Ji = /** @class */ function() {
    function t(t, e, n, r) {
        this.targetId = t, this.fromCache = e, this.ic = n, this.rc = r;
    }
    return t.oc = function(e, n) {
        for (var r = mn(), i = mn(), o = 0, u = n.docChanges; o < u.length; o++) {
            var s = u[o];
            switch (s.type) {
              case 0 /* Added */ :
                r = r.add(s.doc.key);
                break;

              case 1 /* Removed */ :
                i = i.add(s.doc.key);
                // do nothing
                        }
        }
        return new t(e, n.fromCache, r, i);
    }, t;
}(), $i = /** @class */ function() {
    function t() {}
    /** Sets the document view to query against. */    return t.prototype.cc = function(t) {
        this.ac = t;
    }, 
    /** Returns all local documents matching the specified query. */ t.prototype.Kr = function(t, n, r, i) {
        var o = this;
        // Queries that match all documents don't benefit from using
        // key-based lookups. It is more efficient to scan all documents in a
        // collection, rather than to perform individual lookups.
                return function(t) {
            return 0 === t.filters.length && null === t.limit && null == t.startAt && null == t.endAt && (0 === t.xt.length || 1 === t.xt.length && t.xt[0].field.ut());
        }(n) || r.isEqual(X$1.min()) ? this.uc(t, n) : this.ac.Xo(t, i).next((function(u) {
            var s = o.hc(n, u);
            return (ie(n) || oe(n)) && o.lc(n.limitType, s, i, r) ? o.uc(t, n) : (T$1() <= LogLevel.DEBUG && N$1("QueryEngine", "Re-using previous result from %s to execute query: %s", r.toString(), de(n)), 
            o.ac.Kr(t, n, r).next((function(t) {
                // We merge `previousResults` into `updateResults`, since
                // `updateResults` is already a DocumentMap. If a document is
                // contained in both lists, then its contents are the same.
                return s.forEach((function(e) {
                    t = t.zt(e.key, e);
                })), t;
            })));
        }));
        // Queries that have never seen a snapshot without limbo free documents
        // should also be run as a full collection scan.
        }, 
    /** Applies the query filter and sorting to the provided documents.  */ t.prototype.hc = function(t, e) {
        // Sort the documents and re-apply the query filter since previously
        // matching documents do not necessarily still match the query.
        var n = new sn(ye(t));
        return e.forEach((function(e, r) {
            r instanceof Pt && ve(t, r) && (n = n.add(r));
        })), n;
    }, 
    /**
     * Determines if a limit query needs to be refilled from cache, making it
     * ineligible for index-free execution.
     *
     * @param sortedPreviousResults - The documents that matched the query when it
     * was last synchronized, sorted by the query's comparator.
     * @param remoteKeys - The document keys that matched the query at the last
     * snapshot.
     * @param limboFreeSnapshotVersion - The version of the snapshot when the
     * query was last synchronized.
     */
    t.prototype.lc = function(t, e, n, r) {
        // The query needs to be refilled if a previously matching document no
        // longer matches.
        if (n.size !== e.size) return !0;
        // Limit queries are not eligible for index-free query execution if there is
        // a potential that an older document from cache now sorts before a document
        // that was previously part of the limit. This, however, can only happen if
        // the document at the edge of the limit goes out of limit.
        // If a document that is not the limit boundary sorts differently,
        // the boundary of the limit itself did not change and documents from cache
        // will continue to be "rejected" by this boundary. Therefore, we can ignore
        // any modifications that don't affect the last document.
                var i = "F" /* First */ === t ? e.last() : e.first();
        return !!i && (i.hasPendingWrites || i.version._(r) > 0);
    }, t.prototype.uc = function(t, n) {
        return T$1() <= LogLevel.DEBUG && N$1("QueryEngine", "Using full collection scan to execute query:", de(n)), 
        this.ac.Kr(t, n, X$1.min());
    }, t;
}(), to = /** @class */ function() {
    function t(
    /** Manages our in-memory or durable persistence. */
    t, e, n, r) {
        this.persistence = t, this._c = e, this.Qt = r, 
        /**
             * Maps a targetID to data about its target.
             *
             * PORTING NOTE: We are using an immutable data structure on Web to make re-runs
             * of `applyRemoteEvent()` idempotent.
             */
        this.fc = new rn(C), 
        /** Maps a target to its targetID. */
        // TODO(wuandy): Evaluate if TargetId can be part of Target.
        this.dc = new gi((function(t) {
            return Ut(t);
        }), Mt), 
        /**
             * The read time of the last entry processed by `getNewDocumentChanges()`.
             *
             * PORTING NOTE: This is only used for multi-tab synchronization.
             */
        this.wc = X$1.min(), this.zo = t.Qo(n), this.Ec = t.$r(), this._o = t.Sr(), this.Tc = new Zi(this.Ec, this.zo, this.persistence.Ko()), 
        this.wo = t.Wo(), this._c.cc(this.Tc);
    }
    return t.prototype.Ir = function(t) {
        var e = this;
        return this.persistence.runTransaction("Collect garbage", "readwrite-primary", (function(n) {
            return t.Vr(n, e.fc);
        }));
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A readonly view of the local state of all documents we're tracking (i.e. we
 * have a cached version in remoteDocumentCache or local mutations for the
 * document). The view is computed by applying the mutations in the
 * MutationQueue to the RemoteDocumentCache.
 */ function eo(
/** Manages our in-memory or durable persistence. */
t, e, n, r) {
    return new to(t, e, n, r);
}

/**
 * Tells the LocalStore that the currently authenticated user has changed.
 *
 * In response the local store switches the mutation queue to the new user and
 * returns any resulting document changes.
 */
// PORTING NOTE: Android and iOS only return the documents affected by the
// change.
function no(t, e) {
    return __awaiter(this, void 0, void 0, (function() {
        var n, r, i, o;
        return __generator(this, (function(u) {
            switch (u.label) {
              case 0:
                return n = O$1(t), r = n.zo, i = n.Tc, [ 4 /*yield*/ , n.persistence.runTransaction("Handle user change", "readonly", (function(t) {
                    // Swap out the mutation queue, grabbing the pending mutation batches
                    // before and after.
                    var o;
                    return n.zo.pi(t).next((function(u) {
                        return o = u, r = n.persistence.Qo(e), 
                        // Recreate our LocalDocumentsView using the new
                        // MutationQueue.
                        i = new Zi(n.Ec, r, n.persistence.Ko()), r.pi(t);
                    })).next((function(e) {
                        for (var n = [], r = [], u = mn(), s = 0, a = o
                        // Union the old/new changed keys.
                        ; s < a.length; s++) {
                            var c = a[s];
                            n.push(c.batchId);
                            for (var h = 0, f = c.mutations; h < f.length; h++) {
                                var l = f[h];
                                u = u.add(l.key);
                            }
                        }
                        for (var p = 0, d = e; p < d.length; p++) {
                            var v = d[p];
                            r.push(v.batchId);
                            for (var y = 0, m = v.mutations; y < m.length; y++) {
                                var g = m[y];
                                u = u.add(g.key);
                            }
                        }
                        // Return the set of all (potentially) changed documents and the list
                        // of mutation batch IDs that were affected by change.
                                                return i.Xo(t, u).next((function(t) {
                            return {
                                Ic: t,
                                mc: n,
                                Ac: r
                            };
                        }));
                    }));
                })) ];

              case 1:
                return o = u.sent(), [ 2 /*return*/ , (n.zo = r, n.Tc = i, n._c.cc(n.Tc), o) ];
            }
        }));
    }));
}

/* Accepts locally generated Mutations and commit them to storage. */
/**
 * Acknowledges the given batch.
 *
 * On the happy path when a batch is acknowledged, the local store will
 *
 *  + remove the batch from the mutation queue;
 *  + apply the changes to the remote document cache;
 *  + recalculate the latency compensated view implied by those changes (there
 *    may be mutations in the queue that affect the documents but haven't been
 *    acknowledged yet); and
 *  + give the changed documents back the sync engine
 *
 * @returns The resulting (modified) documents.
 */ function ro(t, e) {
    var n = O$1(t);
    return n.persistence.runTransaction("Acknowledge batch", "readwrite-primary", (function(t) {
        var r = e.batch.keys(), i = n.Ec.Nr({
            Wr: !0
        });
        return function(t, e, n, r) {
            var i = n.batch, o = i.keys(), u = lr.resolve();
            return o.forEach((function(t) {
                u = u.next((function() {
                    return r._i(e, t);
                })).next((function(e) {
                    var o = e, u = n.$s.get(t);
                    k$1(null !== u), (!o || o.version._(u) < 0) && ((o = i.Ss(t, o, n)) && 
                    // We use the commitVersion as the readTime rather than the
                    // document's updateTime since the updateTime is not advanced
                    // for updates that do not modify the underlying document.
                    r.ai(o, n.Ns));
                }));
            })), u.next((function() {
                return t.zo.Ci(e, i);
            }));
        }(n, t, e, i).next((function() {
            return i.apply(t);
        })).next((function() {
            return n.zo.$i(t);
        })).next((function() {
            return n.Tc.Xo(t, r);
        }));
    }));
}

/**
 * Removes mutations from the MutationQueue for the specified batch;
 * LocalDocuments will be recalculated.
 *
 * @returns The resulting modified documents.
 */
/**
 * Returns the last consistent snapshot processed (used by the RemoteStore to
 * determine whether to buffer incoming snapshots from the backend).
 */ function io(t) {
    var e = O$1(t);
    return e.persistence.runTransaction("Get last remote snapshot version", "readonly", (function(t) {
        return e._o.Qi(t);
    }));
}

/**
 * Updates the "ground-state" (remote) documents. We assume that the remote
 * event reflects any write batches that have been acknowledged or rejected
 * (i.e. we do not re-apply local mutations to updates from this event).
 *
 * LocalDocuments are re-calculated if there are remaining mutations in the
 * queue.
 */ function oo(t, e) {
    var n = O$1(t), r = e.Ot, i = n.fc;
    return n.persistence.runTransaction("Apply remote event", "readwrite-primary", (function(t) {
        var o = n.Ec.Nr({
            Wr: !0
        });
        // Reset newTargetDataByTargetMap in case this transaction gets re-run.
                i = n.fc;
        var u = [];
        e.$e.forEach((function(e, o) {
            var s = i.get(o);
            if (s) {
                // Only update the remote keys if the target is still active. This
                // ensures that we can persist the updated target data along with
                // the updated assignment.
                u.push(n._o.sr(t, e.Qe, o).next((function() {
                    return n._o.er(t, e.qe, o);
                })));
                var a = e.resumeToken;
                // Update the resume token if the change includes one.
                                if (a.l() > 0) {
                    var c = s.Mt(a, r).kt(t.bs);
                    i = i.zt(o, c), 
                    // Update the target data if there are target changes (or if
                    // sufficient time has passed since the last update).
                    /**
     * Returns true if the newTargetData should be persisted during an update of
     * an active target. TargetData should always be persisted when a target is
     * being released and should not call this function.
     *
     * While the target is active, TargetData updates can be omitted when nothing
     * about the target has changed except metadata like the resume token or
     * snapshot version. Occasionally it's worth the extra write to prevent these
     * values from getting too stale after a crash, but this doesn't have to be
     * too frequent.
     */
                    function(t, e, n) {
                        // Always persist target data if we don't already have a resume token.
                        return k$1(e.resumeToken.l() > 0), 0 === t.resumeToken.l() || (
                        // Don't allow resume token changes to be buffered indefinitely. This
                        // allows us to be reasonably up-to-date after a crash and avoids needing
                        // to loop over all active queries on shutdown. Especially in the browser
                        // we may not get time to do anything interesting while the current tab is
                        // closing.
                        e.Ot.W() - t.Ot.W() >= 3e8 || n.qe.size + n.Ue.size + n.Qe.size > 0);
                    }(s, c, e) && u.push(n._o.Hi(t, c));
                }
            }
        }));
        var s = hn();
        // HACK: The only reason we allow a null snapshot version is so that we
        // can synthesize remote events when we get permission denied errors while
        // trying to resolve the state of a locally cached document that is in
        // limbo.
                if (e.Oe.forEach((function(r, i) {
            e.ke.has(r) && u.push(n.persistence.Ti.Fr(t, r));
        })), 
        // Each loop iteration only affects its "own" doc, so it's safe to get all the remote
        // documents in advance in a single call.
        u.push(uo(t, o, e.Oe, r, void 0).next((function(t) {
            s = t;
        }))), !r.isEqual(X$1.min())) {
            var a = n._o.Qi(t).next((function(e) {
                return n._o.Wi(t, t.bs, r);
            }));
            u.push(a);
        }
        return lr.Mn(u).next((function() {
            return o.apply(t);
        })).next((function() {
            return n.Tc.Zo(t, s);
        }));
    })).then((function(t) {
        return n.fc = i, t;
    }));
}

/**
 * Populates document change buffer with documents from backend or a bundle.
 * Returns the document changes resulting from applying those documents.
 *
 * @param txn - Transaction to use to read existing documents from storage.
 * @param documentBuffer - Document buffer to collect the resulted changes to be
 *        applied to storage.
 * @param documents - Documents to be applied.
 * @param globalVersion - A `SnapshotVersion` representing the read time if all
 *        documents have the same read time.
 * @param documentVersions - A DocumentKey-to-SnapshotVersion map if documents
 *        have their own read time.
 *
 * Note: this function will use `documentVersions` if it is defined;
 * when it is not defined, resorts to `globalVersion`.
 */ function uo(t, e, n, r, 
// TODO(wuandy): We could add `readTime` to MaybeDocument instead to remove
// this parameter.
i) {
    var o = mn();
    return n.forEach((function(t) {
        return o = o.add(t);
    })), e.getEntries(t, o).next((function(t) {
        var o = hn();
        return n.forEach((function(n, u) {
            var s = t.get(n), a = (null == i ? void 0 : i.get(n)) || r;
            // Note: The order of the steps below is important, since we want
            // to ensure that rejected limbo resolutions (which fabricate
            // NoDocuments with SnapshotVersion.min()) never add documents to
            // cache.
                        u instanceof Vt && u.version.isEqual(X$1.min()) ? (
            // NoDocuments with SnapshotVersion.min() are used in manufactured
            // events. We remove these documents from cache since we lost
            // access.
            e.li(n, a), o = o.zt(n, u)) : null == s || u.version._(s.version) > 0 || 0 === u.version._(s.version) && s.hasPendingWrites ? (e.ai(u, a), 
            o = o.zt(n, u)) : N$1("LocalStore", "Ignoring outdated watch update for ", n, ". Current version:", s.version, " Watch version:", u.version);
        })), o;
    }))
    /**
 * Gets the mutation batch after the passed in batchId in the mutation queue
 * or null if empty.
 * @param afterBatchId - If provided, the batch to search after.
 * @returns The next mutation or null if there wasn't one.
 */;
}

function so(t, e) {
    var n = O$1(t);
    return n.persistence.runTransaction("Get next mutation batch", "readonly", (function(t) {
        return void 0 === e && (e = -1), n.zo.gi(t, e);
    }));
}

/**
 * Reads the current value of a Document with a given key or null if not
 * found - used for testing.
 */
/**
 * Assigns the given target an internal ID so that its results can be pinned so
 * they don't get GC'd. A target must be allocated in the local store before
 * the store can be used to manage its view.
 *
 * Allocating an already allocated `Target` will return the existing `TargetData`
 * for that `Target`.
 */ function ao(t, e) {
    var n = O$1(t);
    return n.persistence.runTransaction("Allocate target", "readwrite", (function(t) {
        var r;
        return n._o.tr(t, e).next((function(i) {
            return i ? (
            // This target has been listened to previously, so reuse the
            // previous targetID.
            // TODO(mcg): freshen last accessed date?
            r = i, lr.resolve(r)) : n._o.Bi(t).next((function(i) {
                return r = new ge(e, i, 0 /* Listen */ , t.bs), n._o.ji(t, r).next((function() {
                    return r;
                }));
            }));
        }));
    })).then((function(t) {
        // If Multi-Tab is enabled, the existing target data may be newer than
        // the in-memory data
        var r = n.fc.get(t.targetId);
        return (null === r || t.Ot._(r.Ot) > 0) && (n.fc = n.fc.zt(t.targetId, t), n.dc.set(e, t.targetId)), 
        t;
    }));
}

/**
 * Returns the TargetData as seen by the LocalStore, including updates that may
 * have not yet been persisted to the TargetCache.
 */
// Visible for testing.
/**
 * Unpins all the documents associated with the given target. If
 * `keepPersistedTargetData` is set to false and Eager GC enabled, the method
 * directly removes the associated target data from the target cache.
 *
 * Releasing a non-existing `Target` is a no-op.
 */
// PORTING NOTE: `keepPersistedTargetData` is multi-tab only.
function co(t, e, n) {
    return __awaiter(this, void 0, void 0, (function() {
        var r, i, o, u;
        return __generator(this, (function(s) {
            switch (s.label) {
              case 0:
                r = O$1(t), i = r.fc.get(e), o = n ? "readwrite" : "readwrite-primary", s.label = 1;

              case 1:
                return s.trys.push([ 1, 4, , 5 ]), n ? [ 3 /*break*/ , 3 ] : [ 4 /*yield*/ , r.persistence.runTransaction("Release target", o, (function(t) {
                    return r.persistence.Ti.removeTarget(t, i);
                })) ];

              case 2:
                s.sent(), s.label = 3;

              case 3:
                return [ 3 /*break*/ , 5 ];

              case 4:
                if (!mr(u = s.sent())) throw u;
                // All `releaseTarget` does is record the final metadata state for the
                // target, but we've been recording this periodically during target
                // activity. If we lose this write this could cause a very slight
                // difference in the order of target deletion during GC, but we
                // don't define exact LRU semantics so this is acceptable.
                                return N$1("LocalStore", "Failed to update sequence numbers for target " + e + ": " + u), 
                [ 3 /*break*/ , 5 ];

              case 5:
                return r.fc = r.fc.remove(e), r.dc.delete(i.target), [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Runs the specified query against the local store and returns the results,
 * potentially taking advantage of query data from previous executions (such
 * as the set of remote keys).
 *
 * @param usePreviousResults - Whether results from previous executions can
 * be used to optimize this query execution.
 */ function ho(t, e, n) {
    var r = O$1(t), i = X$1.min(), o = mn();
    return r.persistence.runTransaction("Execute query", "readonly", (function(t) {
        return function(t, e, n) {
            var r = O$1(t), i = r.dc.get(n);
            return void 0 !== i ? lr.resolve(r.fc.get(i)) : r._o.tr(e, n);
        }(r, t, he(e)).next((function(e) {
            if (e) return i = e.lastLimboFreeSnapshotVersion, r._o.rr(t, e.targetId).next((function(t) {
                o = t;
            }));
        })).next((function() {
            return r._c.Kr(t, e, n ? i : X$1.min(), n ? o : mn());
        })).next((function(t) {
            return {
                documents: t,
                Rc: o
            };
        }));
    }));
}

// PORTING NOTE: Multi-Tab only.
function fo(t, e) {
    var n = O$1(t), r = O$1(n._o), i = n.fc.get(e);
    return i ? Promise.resolve(i.target) : n.persistence.runTransaction("Get target data", "readonly", (function(t) {
        return r.Sn(t, e).next((function(t) {
            return t ? t.target : null;
        }));
    }));
}

/**
 * Returns the set of documents that have been updated since the last call.
 * If this is the first call, returns the set of changes since client
 * initialization. Further invocations will return document that have changed
 * since the prior call.
 */
// PORTING NOTE: Multi-Tab only.
function lo(t) {
    var e = O$1(t);
    return e.persistence.runTransaction("Get new document changes", "readonly", (function(t) {
        return function(t, e, n) {
            var r = O$1(t), i = hn(), o = ti(n), u = ji(e), s = IDBKeyRange.lowerBound(o, !0);
            return u.hs({
                index: Ur.readTimeIndex,
                range: s
            }, (function(t, e) {
                // Unlike `getEntry()` and others, `getNewDocumentChanges()` parses
                // the documents directly since we want to keep sentinel deletes.
                var n = Jr(r.Qt, e);
                i = i.zt(n.key, n), o = e.readTime;
            })).next((function() {
                return {
                    Go: i,
                    readTime: ei(o)
                };
            }));
        }(e.Ec, t, e.wc);
    })).then((function(t) {
        var n = t.Go, r = t.readTime;
        return e.wc = r, n;
    }));
}

/**
 * Reads the newest document change from persistence and moves the internal
 * synchronization marker forward so that calls to `getNewDocumentChanges()`
 * only return changes that happened after client initialization.
 */
// PORTING NOTE: Multi-Tab only.
function po(t) {
    return __awaiter(this, void 0, void 0, (function() {
        var e;
        return __generator(this, (function(n) {
            return [ 2 /*return*/ , (e = O$1(t)).persistence.runTransaction("Synchronize last document change read time", "readonly", (function(t) {
                return function(t) {
                    var e = ji(t), n = X$1.min();
                    // If there are no existing entries, we return SnapshotVersion.min().
                                        return e.hs({
                        index: Ur.readTimeIndex,
                        reverse: !0
                    }, (function(t, e, r) {
                        e.readTime && (n = ei(e.readTime)), r.done();
                    })).next((function() {
                        return n;
                    }));
                }(t);
            })).then((function(t) {
                e.wc = t;
            })) ];
        }));
    }));
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var mo = /** @class */ function() {
    function t(t) {
        this.Qt = t, this.Vc = new Map, this.bc = new Map;
    }
    return t.prototype.Os = function(t, e) {
        return lr.resolve(this.Vc.get(e));
    }, t.prototype.ks = function(t, e) {
        /** Decodes a BundleMetadata proto into a BundleMetadata object. */
        var n;
        return this.Vc.set(e.id, {
            id: (n = e).id,
            version: n.version,
            createTime: Mn(n.createTime)
        }), lr.resolve();
    }, t.prototype.Ms = function(t, e) {
        return lr.resolve(this.bc.get(e));
    }, t.prototype.Ls = function(t, e) {
        return this.bc.set(e.name, function(t) {
            return {
                name: t.name,
                query: si(t.bundledQuery),
                readTime: Mn(t.readTime)
            };
        }(e)), lr.resolve();
    }, t;
}(), go = /** @class */ function() {
    function t() {
        // A set of outstanding references to a document sorted by key.
        this.vc = new sn(wo.Sc), 
        // A set of outstanding references to a document sorted by target id.
        this.Dc = new sn(wo.Cc)
        /** Returns true if the reference set contains no references. */;
    }
    return t.prototype.et = function() {
        return this.vc.et();
    }, 
    /** Adds a reference to the given document key for the given ID. */ t.prototype.nr = function(t, e) {
        var n = new wo(t, e);
        this.vc = this.vc.add(n), this.Dc = this.Dc.add(n);
    }, 
    /** Add references to the given document keys for the given ID. */ t.prototype.xc = function(t, e) {
        var n = this;
        t.forEach((function(t) {
            return n.nr(t, e);
        }));
    }, 
    /**
     * Removes a reference to the given document key for the given
     * ID.
     */
    t.prototype.ir = function(t, e) {
        this.Nc(new wo(t, e));
    }, t.prototype.$c = function(t, e) {
        var n = this;
        t.forEach((function(t) {
            return n.ir(t, e);
        }));
    }, 
    /**
     * Clears all references with a given ID. Calls removeRef() for each key
     * removed.
     */
    t.prototype.Fc = function(t) {
        var e = this, n = new tt(new Z$1([])), r = new wo(n, t), i = new wo(n, t + 1), o = [];
        return this.Dc.me([ r, i ], (function(t) {
            e.Nc(t), o.push(t.key);
        })), o;
    }, t.prototype.Oc = function() {
        var t = this;
        this.vc.forEach((function(e) {
            return t.Nc(e);
        }));
    }, t.prototype.Nc = function(t) {
        this.vc = this.vc.delete(t), this.Dc = this.Dc.delete(t);
    }, t.prototype.kc = function(t) {
        var e = new tt(new Z$1([])), n = new wo(e, t), r = new wo(e, t + 1), i = mn();
        return this.Dc.me([ n, r ], (function(t) {
            i = i.add(t.key);
        })), i;
    }, t.prototype.Fi = function(t) {
        var e = new wo(t, 0), n = this.vc.Re(e);
        return null !== n && t.isEqual(n.key);
    }, t;
}(), wo = /** @class */ function() {
    function t(t, e) {
        this.key = t, this.Mc = e
        /** Compare by key then by ID */;
    }
    return t.Sc = function(t, e) {
        return tt.H(t.key, e.key) || C(t.Mc, e.Mc);
    }, 
    /** Compare by ID then by key */ t.Cc = function(t, e) {
        return C(t.Mc, e.Mc) || tt.H(t.key, e.key);
    }, t;
}(), bo = /** @class */ function() {
    function t(t, e) {
        this.Ei = t, this.Ti = e, 
        /**
             * The set of all mutations that have been sent but not yet been applied to
             * the backend.
             */
        this.zo = [], 
        /** Next value to use when assigning sequential IDs to each mutation batch. */
        this.Lc = 1, 
        /** An ordered mapping between documents and the mutations batch IDs. */
        this.Bc = new sn(wo.Sc);
    }
    return t.prototype.Ai = function(t) {
        return lr.resolve(0 === this.zo.length);
    }, t.prototype.Ri = function(t, e, n, r) {
        var i = this.Lc;
        this.Lc++, this.zo.length > 0 && this.zo[this.zo.length - 1];
        var o = new Xr(i, e, n, r);
        this.zo.push(o);
        // Track references by document key and index collection parents.
        for (var u = 0, s = r; u < s.length; u++) {
            var a = s[u];
            this.Bc = this.Bc.add(new wo(a.key, i)), this.Ei.qs(t, a.key.path.X());
        }
        return lr.resolve(o);
    }, t.prototype.Pi = function(t, e) {
        return lr.resolve(this.qc(e));
    }, t.prototype.gi = function(t, e) {
        var n = e + 1, r = this.Uc(n), i = r < 0 ? 0 : r;
        // The requested batchId may still be out of range so normalize it to the
        // start of the queue.
                return lr.resolve(this.zo.length > i ? this.zo[i] : null);
    }, t.prototype.Vi = function() {
        return lr.resolve(0 === this.zo.length ? -1 : this.Lc - 1);
    }, t.prototype.pi = function(t) {
        return lr.resolve(this.zo.slice());
    }, t.prototype.bi = function(t, e) {
        var n = this, r = new wo(e, 0), i = new wo(e, Number.POSITIVE_INFINITY), o = [];
        return this.Bc.me([ r, i ], (function(t) {
            var e = n.qc(t.Mc);
            o.push(e);
        })), lr.resolve(o);
    }, t.prototype.vi = function(t, e) {
        var n = this, r = new sn(C);
        return e.forEach((function(t) {
            var e = new wo(t, 0), i = new wo(t, Number.POSITIVE_INFINITY);
            n.Bc.me([ e, i ], (function(t) {
                r = r.add(t.Mc);
            }));
        })), lr.resolve(this.Qc(r));
    }, t.prototype.Di = function(t, e) {
        // Use the query path as a prefix for testing if a document matches the
        // query.
        var n = e.path, r = n.length + 1, i = n;
        // Construct a document reference for actually scanning the index. Unlike
        // the prefix the document key in this reference must have an even number of
        // segments. The empty segment can be used a suffix of the query path
        // because it precedes all other segments in an ordered traversal.
                tt.wt(i) || (i = i.child(""));
        var o = new wo(new tt(i), 0), u = new sn(C);
        // Find unique batchIDs referenced by all documents potentially matching the
        // query.
                return this.Bc.Ae((function(t) {
            var e = t.key.path;
            return !!n.nt(e) && (
            // Rows with document keys more than one segment longer than the query
            // path can't be matches. For example, a query on 'rooms' can't match
            // the document /rooms/abc/messages/xyx.
            // TODO(mcg): we'll need a different scanner when we implement
            // ancestor queries.
            e.length === r && (u = u.add(t.Mc)), !0);
        }), o), lr.resolve(this.Qc(u));
    }, t.prototype.Qc = function(t) {
        var e = this, n = [];
        // Construct an array of matching batches, sorted by batchID to ensure that
        // multiple mutations affecting the same document key are applied in order.
                return t.forEach((function(t) {
            var r = e.qc(t);
            null !== r && n.push(r);
        })), n;
    }, t.prototype.Ci = function(t, e) {
        var n = this;
        k$1(0 === this.Kc(e.batchId, "removed")), this.zo.shift();
        var r = this.Bc;
        return lr.forEach(e.mutations, (function(i) {
            var o = new wo(i.key, e.batchId);
            return r = r.delete(o), n.Ti.Ni(t, i.key);
        })).next((function() {
            n.Bc = r;
        }));
    }, t.prototype.xi = function(t) {
        // No-op since the memory mutation queue does not maintain a separate cache.
    }, t.prototype.Fi = function(t, e) {
        var n = new wo(e, 0), r = this.Bc.Re(n);
        return lr.resolve(e.isEqual(r && r.key));
    }, t.prototype.$i = function(t) {
        return this.zo.length, lr.resolve();
    }, 
    /**
     * Finds the index of the given batchId in the mutation queue and asserts that
     * the resulting index is within the bounds of the queue.
     *
     * @param batchId - The batchId to search for
     * @param action - A description of what the caller is doing, phrased in passive
     * form (e.g. "acknowledged" in a routine that acknowledges batches).
     */
    t.prototype.Kc = function(t, e) {
        return this.Uc(t);
    }, 
    /**
     * Finds the index of the given batchId in the mutation queue. This operation
     * is O(1).
     *
     * @returns The computed index of the batch with the given batchId, based on
     * the state of the queue. Note this index can be negative if the requested
     * batchId has already been remvoed from the queue or past the end of the
     * queue if the batchId is larger than the last added batch.
     */
    t.prototype.Uc = function(t) {
        return 0 === this.zo.length ? 0 : t - this.zo[0].batchId;
        // Examine the front of the queue to figure out the difference between the
        // batchId and indexes in the array. Note that since the queue is ordered
        // by batchId, if the first batch has a larger batchId then the requested
        // batchId doesn't exist in the queue.
        }, 
    /**
     * A version of lookupMutationBatch that doesn't return a promise, this makes
     * other functions that uses this code easier to read and more efficent.
     */
    t.prototype.qc = function(t) {
        var e = this.Uc(t);
        return e < 0 || e >= this.zo.length ? null : this.zo[e];
    }, t;
}(), _o = /** @class */ function() {
    /**
     * @param sizer - Used to assess the size of a document. For eager GC, this is
     * expected to just return 0 to avoid unnecessarily doing the work of
     * calculating the size.
     */
    function t(t, e) {
        this.Ei = t, this.Wc = e, 
        /** Underlying cache of documents and their read times. */
        this.docs = new rn(tt.H), 
        /** Size of all cached documents. */
        this.size = 0
        /**
     * Adds the supplied entry to the cache and updates the cache size as appropriate.
     *
     * All calls of `addEntry`  are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */;
    }
    return t.prototype.ai = function(t, e, n) {
        var r = e.key, i = this.docs.get(r), o = i ? i.size : 0, u = this.Wc(e);
        return this.docs = this.docs.zt(r, {
            hi: e,
            size: u,
            readTime: n
        }), this.size += u - o, this.Ei.qs(t, r.path.X());
    }, 
    /**
     * Removes the specified entry from the cache and updates the cache size as appropriate.
     *
     * All calls of `removeEntry` are required to go through the RemoteDocumentChangeBuffer
     * returned by `newChangeBuffer()`.
     */
    t.prototype.li = function(t) {
        var e = this.docs.get(t);
        e && (this.docs = this.docs.remove(t), this.size -= e.size);
    }, t.prototype._i = function(t, e) {
        var n = this.docs.get(e);
        return lr.resolve(n ? n.hi : null);
    }, t.prototype.getEntries = function(t, e) {
        var n = this, r = fn();
        return e.forEach((function(t) {
            var e = n.docs.get(t);
            r = r.zt(t, e ? e.hi : null);
        })), lr.resolve(r);
    }, t.prototype.Kr = function(t, e, n) {
        for (var r = pn(), i = new tt(e.path.child("")), o = this.docs.ee(i)
        // Documents are ordered by key, so we can use a prefix scan to narrow down
        // the documents we need to match the query against.
        ; o.ce(); ) {
            var u = o.oe(), s = u.key, a = u.value, c = a.hi, h = a.readTime;
            if (!e.path.nt(s.path)) break;
            h._(n) <= 0 || c instanceof Pt && ve(e, c) && (r = r.zt(c.key, c));
        }
        return lr.resolve(r);
    }, t.prototype.jc = function(t, e) {
        return lr.forEach(this.docs, (function(t) {
            return e(t);
        }));
    }, t.prototype.Nr = function(t) {
        // `trackRemovals` is ignores since the MemoryRemoteDocumentCache keeps
        // a separate changelog and does not need special handling for removals.
        return new Io(this);
    }, t.prototype.Or = function(t) {
        return lr.resolve(this.size);
    }, t;
}(), Io = /** @class */ function(t) {
    function e(e) {
        var n = this;
        return (n = t.call(this) || this).jr = e, n;
    }
    return __extends$1(e, t), e.prototype.wi = function(t) {
        var e = this, n = [];
        return this.ri.forEach((function(r, i) {
            i && i.hi ? n.push(e.jr.ai(t, i.hi, e.ci(r))) : e.jr.li(r);
        })), lr.Mn(n);
    }, e.prototype.fi = function(t, e) {
        return this.jr._i(t, e);
    }, e.prototype.di = function(t, e) {
        return this.jr.getEntries(t, e);
    }, e;
}(wi), Eo = /** @class */ function() {
    function t(t) {
        this.persistence = t, 
        /**
             * Maps a target to the data about that target
             */
        this.Gc = new gi((function(t) {
            return Ut(t);
        }), Mt), 
        /** The last received snapshot version. */
        this.lastRemoteSnapshotVersion = X$1.min(), 
        /** The highest numbered target ID encountered. */
        this.highestTargetId = 0, 
        /** The highest sequence number encountered. */
        this.zc = 0, 
        /**
             * A ordered bidirectional mapping between documents and the remote target
             * IDs.
             */
        this.Hc = new go, this.targetCount = 0, this.Jc = Di.Mi();
    }
    return t.prototype.In = function(t, e) {
        return this.Gc.forEach((function(t, n) {
            return e(n);
        })), lr.resolve();
    }, t.prototype.Qi = function(t) {
        return lr.resolve(this.lastRemoteSnapshotVersion);
    }, t.prototype.Ki = function(t) {
        return lr.resolve(this.zc);
    }, t.prototype.Bi = function(t) {
        return this.highestTargetId = this.Jc.next(), lr.resolve(this.highestTargetId);
    }, t.prototype.Wi = function(t, e, n) {
        return n && (this.lastRemoteSnapshotVersion = n), e > this.zc && (this.zc = e), 
        lr.resolve();
    }, t.prototype.Gi = function(t) {
        this.Gc.set(t.target, t);
        var e = t.targetId;
        e > this.highestTargetId && (this.Jc = new Di(e), this.highestTargetId = e), t.sequenceNumber > this.zc && (this.zc = t.sequenceNumber);
    }, t.prototype.ji = function(t, e) {
        return this.Gi(e), this.targetCount += 1, lr.resolve();
    }, t.prototype.Hi = function(t, e) {
        return this.Gi(e), lr.resolve();
    }, t.prototype.Ji = function(t, e) {
        return this.Gc.delete(e.target), this.Hc.Fc(e.targetId), this.targetCount -= 1, 
        lr.resolve();
    }, t.prototype.Xi = function(t, e, n) {
        var r = this, i = 0, o = [];
        return this.Gc.forEach((function(u, s) {
            s.sequenceNumber <= e && null === n.get(s.targetId) && (r.Gc.delete(u), o.push(r.Yi(t, s.targetId)), 
            i++);
        })), lr.Mn(o).next((function() {
            return i;
        }));
    }, t.prototype.Zi = function(t) {
        return lr.resolve(this.targetCount);
    }, t.prototype.tr = function(t, e) {
        var n = this.Gc.get(e) || null;
        return lr.resolve(n);
    }, t.prototype.er = function(t, e, n) {
        return this.Hc.xc(e, n), lr.resolve();
    }, t.prototype.sr = function(t, e, n) {
        this.Hc.$c(e, n);
        var r = this.persistence.Ti, i = [];
        return r && e.forEach((function(e) {
            i.push(r.Ni(t, e));
        })), lr.Mn(i);
    }, t.prototype.Yi = function(t, e) {
        return this.Hc.Fc(e), lr.resolve();
    }, t.prototype.rr = function(t, e) {
        var n = this.Hc.kc(e);
        return lr.resolve(n);
    }, t.prototype.Fi = function(t, e) {
        return lr.resolve(this.Hc.Fi(e));
    }, t;
}(), To = /** @class */ function() {
    /**
     * The constructor accepts a factory for creating a reference delegate. This
     * allows both the delegate and this instance to have strong references to
     * each other without having nullable fields that would then need to be
     * checked or asserted on every access.
     */
    function t(t, e) {
        var n = this;
        this.Yc = {}, this.so = new H$1(0), this.io = !1, this.io = !0, this.Ti = t(this), 
        this._o = new Eo(this), this.Ei = new fi, this.fo = function(t, e) {
            return new _o(t, (function(t) {
                return n.Ti.Xc(t);
            }));
        }(this.Ei), this.Qt = new Zr(e), this.wo = new mo(this.Qt);
    }
    return t.prototype.start = function() {
        return Promise.resolve();
    }, t.prototype.ko = function() {
        // No durable state to ensure is closed on shutdown.
        return this.io = !1, Promise.resolve();
    }, Object.defineProperty(t.prototype, "Er", {
        get: function() {
            return this.io;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.Po = function() {
        // No op.
    }, t.prototype.yo = function() {
        // No op.
    }, t.prototype.Ko = function() {
        return this.Ei;
    }, t.prototype.Qo = function(t) {
        var e = this.Yc[t.A()];
        return e || (e = new bo(this.Ei, this.Ti), this.Yc[t.A()] = e), e;
    }, t.prototype.Sr = function() {
        return this._o;
    }, t.prototype.$r = function() {
        return this.fo;
    }, t.prototype.Wo = function() {
        return this.wo;
    }, t.prototype.runTransaction = function(t, e, n) {
        var r = this;
        N$1("MemoryPersistence", "Starting transaction:", t);
        var i = new No(this.so.next());
        return this.Ti.Zc(), n(i).next((function(t) {
            return r.Ti.ta(i).next((function() {
                return t;
            }));
        })).On().then((function(t) {
            return i.Vs(), t;
        }));
    }, t.prototype.ea = function(t, e) {
        return lr.Ln(Object.values(this.Yc).map((function(n) {
            return function() {
                return n.Fi(t, e);
            };
        })));
    }, t;
}(), No = /** @class */ function(t) {
    function e(e) {
        var n = this;
        return (n = t.call(this) || this).bs = e, n;
    }
    return __extends$1(e, t), e;
}(Nr), Ao = /** @class */ function() {
    function t(t) {
        this.persistence = t, 
        /** Tracks all documents that are active in Query views. */
        this.na = new go, 
        /** The list of documents that are potentially GCed after each transaction. */
        this.sa = null;
    }
    return t.ia = function(e) {
        return new t(e);
    }, Object.defineProperty(t.prototype, "ra", {
        get: function() {
            if (this.sa) return this.sa;
            throw x$1();
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.nr = function(t, e, n) {
        return this.na.nr(n, e), this.ra.delete(n.toString()), lr.resolve();
    }, t.prototype.ir = function(t, e, n) {
        return this.na.ir(n, e), this.ra.add(n.toString()), lr.resolve();
    }, t.prototype.Ni = function(t, e) {
        return this.ra.add(e.toString()), lr.resolve();
    }, t.prototype.removeTarget = function(t, e) {
        var n = this;
        this.na.Fc(e.targetId).forEach((function(t) {
            return n.ra.add(t.toString());
        }));
        var r = this.persistence.Sr();
        return r.rr(t, e.targetId).next((function(t) {
            t.forEach((function(t) {
                return n.ra.add(t.toString());
            }));
        })).next((function() {
            return r.Ji(t, e);
        }));
    }, t.prototype.Zc = function() {
        this.sa = new Set;
    }, t.prototype.ta = function(t) {
        var e = this, n = this.persistence.$r().Nr();
        // Remove newly orphaned documents.
                return lr.forEach(this.ra, (function(r) {
            var i = tt._t(r);
            return e.oa(t, i).next((function(t) {
                t || n.li(i);
            }));
        })).next((function() {
            return e.sa = null, n.apply(t);
        }));
    }, t.prototype.Fr = function(t, e) {
        var n = this;
        return this.oa(t, e).next((function(t) {
            t ? n.ra.delete(e.toString()) : n.ra.add(e.toString());
        }));
    }, t.prototype.Xc = function(t) {
        // For eager GC, we don't care about the document size, there are no size thresholds.
        return 0;
    }, t.prototype.oa = function(t, e) {
        var n = this;
        return lr.Ln([ function() {
            return lr.resolve(n.na.Fi(e));
        }, function() {
            return n.persistence.Sr().Fi(t, e);
        }, function() {
            return n.persistence.ea(t, e);
        } ]);
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A collection of references to a document from some kind of numbered entity
 * (either a target ID or batch ID). As references are added to or removed from
 * the set corresponding events are emitted to a registered garbage collector.
 *
 * Each reference is represented by a DocumentReference object. Each of them
 * contains enough information to uniquely identify the reference. They are all
 * stored primarily in a set sorted by key. A document is considered garbage if
 * there's no references in that set (this can be efficiently checked thanks to
 * sorting by key).
 *
 * ReferenceSet also keeps a secondary set that contains references sorted by
 * IDs. This one is used to efficiently implement removal of all references by
 * some target ID.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// The format of the LocalStorage key that stores the client state is:
//     firestore_clients_<persistence_prefix>_<instance_key>
/** Assembles the key for a client state in WebStorage */
function Do(t, e) {
    return "firestore_clients_" + t + "_" + e;
}

// The format of the WebStorage key that stores the mutation state is:
//     firestore_mutations_<persistence_prefix>_<batch_id>
//     (for unauthenticated users)
// or: firestore_mutations_<persistence_prefix>_<batch_id>_<user_uid>
// 'user_uid' is last to avoid needing to escape '_' characters that it might
// contain.
/** Assembles the key for a mutation batch in WebStorage */ function So(t, e, n) {
    var r = "firestore_mutations_" + t + "_" + n;
    return e.m() && (r += "_" + e.uid), r;
}

// The format of the WebStorage key that stores a query target's metadata is:
//     firestore_targets_<persistence_prefix>_<target_id>
/** Assembles the key for a query state in WebStorage */ function xo(t, e) {
    return "firestore_targets_" + t + "_" + e;
}

// The WebStorage prefix that stores the primary tab's online state. The
// format of the key is:
//     firestore_online_state_<persistence_prefix>
/**
 * Holds the state of a mutation batch, including its user ID, batch ID and
 * whether the batch is 'pending', 'acknowledged' or 'rejected'.
 */
// Visible for testing
var ko = /** @class */ function() {
    function t(t, e, n, r) {
        this.user = t, this.batchId = e, this.state = n, this.error = r
        /**
     * Parses a MutationMetadata from its JSON representation in WebStorage.
     * Logs a warning and returns null if the format of the data is not valid.
     */;
    }
    return t.ca = function(e, n, r) {
        var i, o = JSON.parse(r), u = "object" == typeof o && -1 !== [ "pending", "acknowledged", "rejected" ].indexOf(o.state) && (void 0 === o.error || "object" == typeof o.error);
        return u && o.error && ((u = "string" == typeof o.error.message && "string" == typeof o.error.code) && (i = new q$1(o.error.code, o.error.message))), 
        u ? new t(e, n, o.state, i) : (A$1("SharedClientState", "Failed to parse mutation state for ID '" + n + "': " + r), 
        null);
    }, t.prototype.aa = function() {
        var t = {
            state: this.state,
            updateTimeMs: Date.now()
        };
        return this.error && (t.error = {
            code: this.error.code,
            message: this.error.message
        }), JSON.stringify(t);
    }, t;
}(), Oo = /** @class */ function() {
    function t(t, e, n) {
        this.targetId = t, this.state = e, this.error = n
        /**
     * Parses a QueryTargetMetadata from its JSON representation in WebStorage.
     * Logs a warning and returns null if the format of the data is not valid.
     */;
    }
    return t.ca = function(e, n) {
        var r, i = JSON.parse(n), o = "object" == typeof i && -1 !== [ "not-current", "current", "rejected" ].indexOf(i.state) && (void 0 === i.error || "object" == typeof i.error);
        return o && i.error && ((o = "string" == typeof i.error.message && "string" == typeof i.error.code) && (r = new q$1(i.error.code, i.error.message))), 
        o ? new t(e, i.state, r) : (A$1("SharedClientState", "Failed to parse target state for ID '" + e + "': " + n), 
        null);
    }, t.prototype.aa = function() {
        var t = {
            state: this.state,
            updateTimeMs: Date.now()
        };
        return this.error && (t.error = {
            code: this.error.code,
            message: this.error.message
        }), JSON.stringify(t);
    }, t;
}(), Po = /** @class */ function() {
    function t(t, e) {
        this.clientId = t, this.activeTargetIds = e
        /**
     * Parses a RemoteClientState from the JSON representation in WebStorage.
     * Logs a warning and returns null if the format of the data is not valid.
     */;
    }
    return t.ca = function(e, n) {
        for (var r = JSON.parse(n), i = "object" == typeof r && r.activeTargetIds instanceof Array, o = wn(), u = 0; i && u < r.activeTargetIds.length; ++u) i = dt(r.activeTargetIds[u]), 
        o = o.add(r.activeTargetIds[u]);
        return i ? new t(e, o) : (A$1("SharedClientState", "Failed to parse client data for instance '" + e + "': " + n), 
        null);
    }, t;
}(), Vo = /** @class */ function() {
    function t(t, e) {
        this.clientId = t, this.onlineState = e
        /**
     * Parses a SharedOnlineState from its JSON representation in WebStorage.
     * Logs a warning and returns null if the format of the data is not valid.
     */;
    }
    return t.ca = function(e) {
        var n = JSON.parse(e);
        return "object" == typeof n && -1 !== [ "Unknown", "Online", "Offline" ].indexOf(n.onlineState) && "string" == typeof n.clientId ? new t(n.clientId, n.onlineState) : (A$1("SharedClientState", "Failed to parse online state: " + e), 
        null);
    }, t;
}(), Co = /** @class */ function() {
    function t() {
        this.activeTargetIds = wn();
    }
    return t.prototype.ua = function(t) {
        this.activeTargetIds = this.activeTargetIds.add(t);
    }, t.prototype.ha = function(t) {
        this.activeTargetIds = this.activeTargetIds.delete(t);
    }, 
    /**
     * Converts this entry into a JSON-encoded format we can use for WebStorage.
     * Does not encode `clientId` as it is part of the key in WebStorage.
     */
    t.prototype.aa = function() {
        var t = {
            activeTargetIds: this.activeTargetIds.it(),
            updateTimeMs: Date.now()
        };
        return JSON.stringify(t);
    }, t;
}(), Lo = /** @class */ function() {
    function t(t, e, n, r, i) {
        this.window = t, this.Zr = e, this.persistenceKey = n, this.la = r, this._a = null, 
        this.fa = null, this.k = null, this.da = this.wa.bind(this), this.Ea = new rn(C), 
        this.Er = !1, 
        /**
             * Captures WebStorage events that occur before `start()` is called. These
             * events are replayed once `WebStorageSharedClientState` is started.
             */
        this.Ta = [];
        // Escape the special characters mentioned here:
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
        var o = n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        this.storage = this.window.localStorage, this.currentUser = i, this.Ia = Do(this.persistenceKey, this.la), 
        this.ma = 
        /** Assembles the key for the current sequence number. */
        function(t) {
            return "firestore_sequence_number_" + t;
        }(this.persistenceKey), this.Ea = this.Ea.zt(this.la, new Co), this.Aa = new RegExp("^firestore_clients_" + o + "_([^_]*)$"), 
        this.Ra = new RegExp("^firestore_mutations_" + o + "_(\\d+)(?:_(.*))?$"), this.Pa = new RegExp("^firestore_targets_" + o + "_(\\d+)$"), 
        this.ya = 
        /** Assembles the key for the online state of the primary tab. */
        function(t) {
            return "firestore_online_state_" + t;
        }(this.persistenceKey), this.ga = function(t) {
            return "firestore_bundle_loaded_" + t;
        }(this.persistenceKey), 
        // Rather than adding the storage observer during start(), we add the
        // storage observer during initialization. This ensures that we collect
        // events before other components populate their initial state (during their
        // respective start() calls). Otherwise, we might for example miss a
        // mutation that is added after LocalStore's start() processed the existing
        // mutations but before we observe WebStorage events.
        this.window.addEventListener("storage", this.da);
    }
    /** Returns 'true' if WebStorage is available in the current environment. */    return t.Kn = function(t) {
        return !(!t || !t.localStorage);
    }, t.prototype.start = function() {
        return __awaiter(this, void 0, void 0, (function() {
            var t, e, n, r, i, o, u, s, a, c, h, f = this;
            return __generator(this, (function(l) {
                switch (l.label) {
                  case 0:
                    return [ 4 /*yield*/ , this._a.Uo() ];

                  case 1:
                    for (t = l.sent(), e = 0, n = t; e < n.length; e++) (r = n[e]) !== this.la && (i = this.getItem(Do(this.persistenceKey, r))) && (o = Po.ca(r, i)) && (this.Ea = this.Ea.zt(o.clientId, o));
                    for (this.Va(), (u = this.storage.getItem(this.ya)) && (s = this.pa(u)) && this.ba(s), 
                    a = 0, c = this.Ta; a < c.length; a++) h = c[a], this.wa(h);
                    return this.Ta = [], 
                    // Register a window unload hook to remove the client metadata entry from
                    // WebStorage even if `shutdown()` was not called.
                    this.window.addEventListener("unload", (function() {
                        return f.ko();
                    })), this.Er = !0, [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.B = function(t) {
        this.setItem(this.ma, JSON.stringify(t));
    }, t.prototype.va = function() {
        return this.Sa(this.Ea);
    }, t.prototype.Da = function(t) {
        var e = !1;
        return this.Ea.forEach((function(n, r) {
            r.activeTargetIds.has(t) && (e = !0);
        })), e;
    }, t.prototype.Ca = function(t) {
        this.xa(t, "pending");
    }, t.prototype.Na = function(t, e, n) {
        this.xa(t, e, n), 
        // Once a final mutation result is observed by other clients, they no longer
        // access the mutation's metadata entry. Since WebStorage replays events
        // in order, it is safe to delete the entry right after updating it.
        this.$a(t);
    }, t.prototype.Fa = function(t) {
        var e = "not-current";
        // Lookup an existing query state if the target ID was already registered
        // by another tab
                if (this.Da(t)) {
            var n = this.storage.getItem(xo(this.persistenceKey, t));
            if (n) {
                var r = Oo.ca(t, n);
                r && (e = r.state);
            }
        }
        return this.Oa.ua(t), this.Va(), e;
    }, t.prototype.ka = function(t) {
        this.Oa.ha(t), this.Va();
    }, t.prototype.Ma = function(t) {
        return this.Oa.activeTargetIds.has(t);
    }, t.prototype.La = function(t) {
        this.removeItem(xo(this.persistenceKey, t));
    }, t.prototype.Ba = function(t, e, n) {
        this.qa(t, e, n);
    }, t.prototype.Ua = function(t, e, n) {
        var r = this;
        e.forEach((function(t) {
            r.$a(t);
        })), this.currentUser = t, n.forEach((function(t) {
            r.Ca(t);
        }));
    }, t.prototype.Qa = function(t) {
        this.Ka(t);
    }, t.prototype.Wa = function() {
        this.ja();
    }, t.prototype.ko = function() {
        this.Er && (this.window.removeEventListener("storage", this.da), this.removeItem(this.Ia), 
        this.Er = !1);
    }, t.prototype.getItem = function(t) {
        var e = this.storage.getItem(t);
        return N$1("SharedClientState", "READ", t, e), e;
    }, t.prototype.setItem = function(t, e) {
        N$1("SharedClientState", "SET", t, e), this.storage.setItem(t, e);
    }, t.prototype.removeItem = function(t) {
        N$1("SharedClientState", "REMOVE", t), this.storage.removeItem(t);
    }, t.prototype.wa = function(t) {
        var e = this, n = t;
        // Note: The function is typed to take Event to be interface-compatible with
        // `Window.addEventListener`.
                if (n.storageArea === this.storage) {
            if (N$1("SharedClientState", "EVENT", n.key, n.newValue), n.key === this.Ia) return void A$1("Received WebStorage notification for local change. Another client might have garbage-collected our state");
            this.Zr.po((function() {
                return __awaiter(e, void 0, void 0, (function() {
                    var t, e, r, i, o, u;
                    return __generator(this, (function(s) {
                        if (this.Er) {
                            if (null !== n.key) if (this.Aa.test(n.key)) {
                                if (null == n.newValue) return t = this.Ga(n.key), [ 2 /*return*/ , this.za(t, null) ];
                                if (e = this.Ha(n.key, n.newValue)) return [ 2 /*return*/ , this.za(e.clientId, e) ];
                            } else if (this.Ra.test(n.key)) {
                                if (null !== n.newValue && (r = this.Ja(n.key, n.newValue))) return [ 2 /*return*/ , this.Ya(r) ];
                            } else if (this.Pa.test(n.key)) {
                                if (null !== n.newValue && (i = this.Xa(n.key, n.newValue))) return [ 2 /*return*/ , this.Za(i) ];
                            } else if (n.key === this.ya) {
                                if (null !== n.newValue && (o = this.pa(n.newValue))) return [ 2 /*return*/ , this.ba(o) ];
                            } else if (n.key === this.ma) (u = function(t) {
                                var e = H$1.q;
                                if (null != t) try {
                                    var n = JSON.parse(t);
                                    k$1("number" == typeof n), e = n;
                                } catch (t) {
                                    A$1("SharedClientState", "Failed to read sequence number from WebStorage", t);
                                }
                                return e;
                            }(n.newValue)) !== H$1.q && this.k(u); else if (n.key === this.ga) return [ 2 /*return*/ , this._a.tu() ];
                        } else this.Ta.push(n);
                        return [ 2 /*return*/ ];
                    }));
                }));
            }));
        }
    }, Object.defineProperty(t.prototype, "Oa", {
        get: function() {
            return this.Ea.get(this.la);
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.Va = function() {
        this.setItem(this.Ia, this.Oa.aa());
    }, t.prototype.xa = function(t, e, n) {
        var r = new ko(this.currentUser, t, e, n), i = So(this.persistenceKey, this.currentUser, t);
        this.setItem(i, r.aa());
    }, t.prototype.$a = function(t) {
        var e = So(this.persistenceKey, this.currentUser, t);
        this.removeItem(e);
    }, t.prototype.Ka = function(t) {
        var e = {
            clientId: this.la,
            onlineState: t
        };
        this.storage.setItem(this.ya, JSON.stringify(e));
    }, t.prototype.qa = function(t, e, n) {
        var r = xo(this.persistenceKey, t), i = new Oo(t, e, n);
        this.setItem(r, i.aa());
    }, t.prototype.ja = function() {
        this.setItem(this.ga, "value-not-used");
    }, 
    /**
     * Parses a client state key in WebStorage. Returns null if the key does not
     * match the expected key format.
     */
    t.prototype.Ga = function(t) {
        var e = this.Aa.exec(t);
        return e ? e[1] : null;
    }, 
    /**
     * Parses a client state in WebStorage. Returns 'null' if the value could not
     * be parsed.
     */
    t.prototype.Ha = function(t, e) {
        var n = this.Ga(t);
        return Po.ca(n, e);
    }, 
    /**
     * Parses a mutation batch state in WebStorage. Returns 'null' if the value
     * could not be parsed.
     */
    t.prototype.Ja = function(t, e) {
        var n = this.Ra.exec(t), r = Number(n[1]), i = void 0 !== n[2] ? n[2] : null;
        return ko.ca(new j(i), r, e);
    }, 
    /**
     * Parses a query target state from WebStorage. Returns 'null' if the value
     * could not be parsed.
     */
    t.prototype.Xa = function(t, e) {
        var n = this.Pa.exec(t), r = Number(n[1]);
        return Oo.ca(r, e);
    }, 
    /**
     * Parses an online state from WebStorage. Returns 'null' if the value
     * could not be parsed.
     */
    t.prototype.pa = function(t) {
        return Vo.ca(t);
    }, t.prototype.Ya = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(e) {
                return t.user.uid === this.currentUser.uid ? [ 2 /*return*/ , this._a.eu(t.batchId, t.state, t.error) ] : (N$1("SharedClientState", "Ignoring mutation for non-active user " + t.user.uid), 
                [ 2 /*return*/ ]);
            }));
        }));
    }, t.prototype.Za = function(t) {
        return this._a.nu(t.targetId, t.state, t.error);
    }, t.prototype.za = function(t, e) {
        var n = this, r = e ? this.Ea.zt(t, e) : this.Ea.remove(t), i = this.Sa(this.Ea), o = this.Sa(r), u = [], s = [];
        return o.forEach((function(t) {
            i.has(t) || u.push(t);
        })), i.forEach((function(t) {
            o.has(t) || s.push(t);
        })), this._a.su(u, s).then((function() {
            n.Ea = r;
        }));
    }, t.prototype.ba = function(t) {
        // We check whether the client that wrote this online state is still active
        // by comparing its client ID to the list of clients kept active in
        // IndexedDb. If a client does not update their IndexedDb client state
        // within 5 seconds, it is considered inactive and we don't emit an online
        // state event.
        this.Ea.get(t.clientId) && this.fa(t.onlineState);
    }, t.prototype.Sa = function(t) {
        var e = wn();
        return t.forEach((function(t, n) {
            e = e.Pe(n.activeTargetIds);
        })), e;
    }, t;
}(), Ro = /** @class */ function() {
    function t() {
        this.iu = new Co, this.ru = {}, this.fa = null, this.k = null;
    }
    return t.prototype.Ca = function(t) {
        // No op.
    }, t.prototype.Na = function(t, e, n) {
        // No op.
    }, t.prototype.Fa = function(t) {
        return this.iu.ua(t), this.ru[t] || "not-current";
    }, t.prototype.Ba = function(t, e, n) {
        this.ru[t] = e;
    }, t.prototype.ka = function(t) {
        this.iu.ha(t);
    }, t.prototype.Ma = function(t) {
        return this.iu.activeTargetIds.has(t);
    }, t.prototype.La = function(t) {
        delete this.ru[t];
    }, t.prototype.va = function() {
        return this.iu.activeTargetIds;
    }, t.prototype.Da = function(t) {
        return this.iu.activeTargetIds.has(t);
    }, t.prototype.start = function() {
        return this.iu = new Co, Promise.resolve();
    }, t.prototype.Ua = function(t, e, n) {
        // No op.
    }, t.prototype.Qa = function(t) {
        // No op.
    }, t.prototype.ko = function() {}, t.prototype.B = function(t) {}, t.prototype.Wa = function() {
        // No op.
    }, t;
}(), Uo = /** @class */ function() {
    function t() {}
    return t.prototype.ou = function(t) {
        // No-op.
    }, t.prototype.ko = function() {
        // No-op.
    }, t;
}(), Mo = /** @class */ function() {
    function t() {
        var t = this;
        this.cu = function() {
            return t.au();
        }, this.uu = function() {
            return t.hu();
        }, this.lu = [], this._u();
    }
    return t.prototype.ou = function(t) {
        this.lu.push(t);
    }, t.prototype.ko = function() {
        window.removeEventListener("online", this.cu), window.removeEventListener("offline", this.uu);
    }, t.prototype._u = function() {
        window.addEventListener("online", this.cu), window.addEventListener("offline", this.uu);
    }, t.prototype.au = function() {
        N$1("ConnectivityMonitor", "Network connectivity changed: AVAILABLE");
        for (var t = 0, e = this.lu; t < e.length; t++) {
            (0, e[t])(0 /* AVAILABLE */);
        }
    }, t.prototype.hu = function() {
        N$1("ConnectivityMonitor", "Network connectivity changed: UNAVAILABLE");
        for (var t = 0, e = this.lu; t < e.length; t++) {
            (0, e[t])(1 /* UNAVAILABLE */);
        }
    }, 
    // TODO(chenbrian): Consider passing in window either into this component or
    // here for testing via FakeWindow.
    /** Checks that all used attributes of window are available. */
    t.Kn = function() {
        return "undefined" != typeof window && void 0 !== window.addEventListener && void 0 !== window.removeEventListener;
    }, t;
}(), qo = {
    BatchGetDocuments: "batchGet",
    Commit: "commit",
    RunQuery: "runQuery"
}, Fo = /** @class */ function() {
    function t(t) {
        this.fu = t.fu, this.du = t.du;
    }
    return t.prototype.wu = function(t) {
        this.Eu = t;
    }, t.prototype.Tu = function(t) {
        this.Iu = t;
    }, t.prototype.onMessage = function(t) {
        this.mu = t;
    }, t.prototype.close = function() {
        this.du();
    }, t.prototype.send = function(t) {
        this.fu(t);
    }, t.prototype.Au = function() {
        this.Eu();
    }, t.prototype.Ru = function(t) {
        this.Iu(t);
    }, t.prototype.Pu = function(t) {
        this.mu(t);
    }, t;
}(), jo = /** @class */ function(t) {
    function e(e) {
        var n = this;
        return (n = t.call(this, e) || this).forceLongPolling = e.forceLongPolling, n.i = e.i, 
        n;
    }
    /**
     * Base class for all Rest-based connections to the backend (WebChannel and
     * HTTP).
     */
    return __extends$1(e, t), e.prototype.Su = function(t, e, n, r) {
        return new Promise((function(i, o) {
            var u = new XhrIo;
            u.listenOnce(EventType.COMPLETE, (function() {
                try {
                    switch (u.getLastErrorCode()) {
                      case ErrorCode.NO_ERROR:
                        var e = u.getResponseJson();
                        N$1("Connection", "XHR received:", JSON.stringify(e)), i(e);
                        break;

                      case ErrorCode.TIMEOUT:
                        N$1("Connection", 'RPC "' + t + '" timed out'), o(new q$1(M$1.DEADLINE_EXCEEDED, "Request time out"));
                        break;

                      case ErrorCode.HTTP_ERROR:
                        var n = u.getStatus();
                        if (N$1("Connection", 'RPC "' + t + '" failed with status:', n, "response text:", u.getResponseText()), 
                        n > 0) {
                            var r = u.getResponseJson().error;
                            if (r && r.status && r.message) {
                                var s = function(t) {
                                    var e = t.toLowerCase().replace(/_/g, "-");
                                    return Object.values(M$1).indexOf(e) >= 0 ? e : M$1.UNKNOWN;
                                }(r.status);
                                o(new q$1(s, r.message));
                            } else o(new q$1(M$1.UNKNOWN, "Server responded with status " + u.getStatus()));
                        } else 
                        // If we received an HTTP_ERROR but there's no status code,
                        // it's most probably a connection issue
                        o(new q$1(M$1.UNAVAILABLE, "Connection failed."));
                        break;

                      default:
                        x$1();
                    }
                } finally {
                    N$1("Connection", 'RPC "' + t + '" completed.');
                }
            }));
            var s = JSON.stringify(r);
            u.send(e, "POST", s, n, 15);
        }));
    }, e.prototype.Cu = function(t, e) {
        var n = [ this.gu, "/", "google.firestore.v1.Firestore", "/", t, "/channel" ], c = createWebChannelTransport(), h = getStatEventTarget(), f = {
            // Required for backend stickiness, routing behavior is based on this
            // parameter.
            httpSessionIdParam: "gsessionid",
            initMessageHeaders: {},
            messageUrlParams: {
                // This param is used to improve routing and project isolation by the
                // backend and must be included in every request.
                database: "projects/" + this.t.projectId + "/databases/" + this.t.database
            },
            sendRawJson: !0,
            supportsCrossDomainXhr: !0,
            internalChannelParams: {
                // Override the default timeout (randomized between 10-20 seconds) since
                // a large write batch on a slow internet connection may take a long
                // time to send to the backend. Rather than have WebChannel impose a
                // tight timeout which could lead to infinite timeouts and retries, we
                // set it very large (5-10 minutes) and rely on the browser's builtin
                // timeouts to kick in if the request isn't working.
                forwardChannelRequestTimeoutMs: 6e5
            },
            forceLongPolling: this.forceLongPolling,
            detectBufferingProxy: this.i
        };
        this.vu(f.initMessageHeaders, e), 
        // Sending the custom headers we just added to request.initMessageHeaders
        // (Authorization, etc.) will trigger the browser to make a CORS preflight
        // request because the XHR will no longer meet the criteria for a "simple"
        // CORS request:
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS#Simple_requests
        // Therefore to avoid the CORS preflight request (an extra network
        // roundtrip), we use the httpHeadersOverwriteParam option to specify that
        // the headers should instead be encoded into a special "$httpHeaders" query
        // parameter, which is recognized by the webchannel backend. This is
        // formally defined here:
        // https://github.com/google/closure-library/blob/b0e1815b13fb92a46d7c9b3c30de5d6a396a3245/closure/goog/net/rpc/httpcors.js#L32
        // TODO(b/145624756): There is a backend bug where $httpHeaders isn't respected if the request
        // doesn't have an Origin header. So we have to exclude a few browser environments that are
        // known to (sometimes) not include an Origin. See
        // https://github.com/firebase/firebase-js-sdk/issues/1491.
        isMobileCordova() || isReactNative() || isElectron() || isIE() || isUWP() || isBrowserExtension() || (f.httpHeadersOverwriteParam = "$httpHeaders");
        var m = n.join("");
        N$1("Connection", "Creating WebChannel: " + m, f);
        var g = c.createWebChannel(m, f), w = !1, b = !1, _ = new Fo({
            fu: function(t) {
                b ? N$1("Connection", "Not sending because WebChannel is closed:", t) : (w || (N$1("Connection", "Opening WebChannel transport."), 
                g.open(), w = !0), N$1("Connection", "WebChannel sending:", t), g.send(t));
            },
            du: function() {
                return g.close();
            }
        }), I = function(t, e, n) {
            // TODO(dimond): closure typing seems broken because WebChannel does
            // not implement goog.events.Listenable
            t.listen(e, (function(t) {
                try {
                    n(t);
                } catch (t) {
                    setTimeout((function() {
                        throw t;
                    }), 0);
                }
            }));
        };
        // WebChannel supports sending the first message with the handshake - saving
        // a network round trip. However, it will have to call send in the same
        // JS event loop as open. In order to enforce this, we delay actually
        // opening the WebChannel until send is called. Whether we have called
        // open is tracked with this variable.
                // Closure events are guarded and exceptions are swallowed, so catch any
        // exception and rethrow using a setTimeout so they become visible again.
        // Note that eventually this function could go away if we are confident
        // enough the code is exception free.
        return I(g, WebChannel.EventType.OPEN, (function() {
            b || N$1("Connection", "WebChannel transport opened.");
        })), I(g, WebChannel.EventType.CLOSE, (function() {
            b || (b = !0, N$1("Connection", "WebChannel transport closed"), _.Ru());
        })), I(g, WebChannel.EventType.ERROR, (function(t) {
            b || (b = !0, D$1("Connection", "WebChannel transport errored:", t), _.Ru(new q$1(M$1.UNAVAILABLE, "The operation could not be completed")));
        })), I(g, WebChannel.EventType.MESSAGE, (function(t) {
            var e;
            if (!b) {
                var n = t.data[0];
                k$1(!!n);
                // TODO(b/35143891): There is a bug in One Platform that caused errors
                // (and only errors) to be wrapped in an extra array. To be forward
                // compatible with the bug we need to check either condition. The latter
                // can be removed once the fix has been rolled out.
                // Use any because msgData.error is not typed.
                var r = n, i = r.error || (null === (e = r[0]) || void 0 === e ? void 0 : e.error);
                if (i) {
                    N$1("Connection", "WebChannel received error:", i);
                    // error.status will be a string like 'OK' or 'NOT_FOUND'.
                    var o = i.status, u = 
                    /**
 * Maps an error Code from a GRPC status identifier like 'NOT_FOUND'.
 *
 * @returns The Code equivalent to the given status string or undefined if
 *     there is no match.
 */
                    function(t) {
                        // lookup by string
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        var e = We[t];
                        if (void 0 !== e) return nn(e);
                    }(o), s = i.message;
                    void 0 === u && (u = M$1.INTERNAL, s = "Unknown error status: " + o + " with message " + i.message), 
                    // Mark closed so no further events are propagated
                    b = !0, _.Ru(new q$1(u, s)), g.close();
                } else N$1("Connection", "WebChannel received:", n), _.Pu(n);
            }
        })), I(h, Event.STAT_EVENT, (function(t) {
            t.stat === Stat.PROXY ? N$1("Connection", "Detected buffering proxy") : t.stat === Stat.NOPROXY && N$1("Connection", "Detected no buffering proxy");
        })), setTimeout((function() {
            // Technically we could/should wait for the WebChannel opened event,
            // but because we want to send the first message with the WebChannel
            // handshake we pretend the channel opened here (asynchronously), and
            // then delay the actual open until the first message is sent.
            _.Au();
        }), 0), _;
    }, e;
}(/** @class */ function() {
    function t(t) {
        this.yu = t, this.t = t.t;
        var e = t.ssl ? "https" : "http";
        this.gu = e + "://" + t.host, this.Vu = "projects/" + this.t.projectId + "/databases/" + this.t.database + "/documents";
    }
    return t.prototype.pu = function(t, e, n, r) {
        var i = this.bu(t, e);
        N$1("RestConnection", "Sending: ", i, n);
        var o = {};
        return this.vu(o, r), this.Su(t, i, o, n).then((function(t) {
            return N$1("RestConnection", "Received: ", t), t;
        }), (function(e) {
            throw D$1("RestConnection", t + " failed with error: ", e, "url: ", i, "request:", n), 
            e;
        }));
    }, t.prototype.Du = function(t, e, n, r) {
        // The REST API automatically aggregates all of the streamed results, so we
        // can just use the normal invoke() method.
        return this.pu(t, e, n, r);
    }, 
    /**
     * Modifies the headers for a request, adding any authorization token if
     * present and any additional headers for the request.
     */
    t.prototype.vu = function(t, e) {
        if (t["X-Goog-Api-Client"] = "gl-js/ fire/8.2.9", 
        // Content-Type: text/plain will avoid preflight requests which might
        // mess with CORS and redirects by proxies. If we add custom headers
        // we will need to change this code to potentially use the $httpOverwrite
        // parameter supported by ESF to avoid triggering preflight requests.
        t["Content-Type"] = "text/plain", e) for (var n in e.g) e.g.hasOwnProperty(n) && (t[n] = e.g[n]);
    }, t.prototype.bu = function(t, e) {
        var n = qo[t];
        return this.gu + "/v1/" + e + ":" + n;
    }, t;
}());

/**
 * Holds the state of a query target, including its target ID and whether the
 * target is 'not-current', 'current' or 'rejected'.
 */
// Visible for testing
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Initializes the WebChannelConnection for the browser. */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** The Platform's 'window' implementation or null if not available. */
function zo() {
    // `window` is not always available, e.g. in ReactNative and WebWorkers.
    // eslint-disable-next-line no-restricted-globals
    return "undefined" != typeof window ? window : null;
}

/** The Platform's 'document' implementation or null if not available. */ function Go() {
    // `document` is not always available, e.g. in ReactNative and WebWorkers.
    // eslint-disable-next-line no-restricted-globals
    return "undefined" != typeof document ? document : null;
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Bo(t) {
    return new Cn(t, /* useProto3Json= */ !0);
}

/**
 * An instance of the Platform's 'TextEncoder' implementation.
 */
/**
 * A helper for running delayed tasks following an exponential backoff curve
 * between attempts.
 *
 * Each delay is made up of a "base" delay which follows the exponential
 * backoff curve, and a +/- 50% "jitter" that is calculated and added to the
 * base delay. This prevents clients from accidentally synchronizing their
 * delays causing spikes of load to the backend.
 */ var Qo = /** @class */ function() {
    function t(
    /**
     * The AsyncQueue to run backoff operations on.
     */
    t, 
    /**
     * The ID to use when scheduling backoff operations on the AsyncQueue.
     */
    e, 
    /**
     * The initial delay (used as the base delay on the first retry attempt).
     * Note that jitter will still be applied, so the actual delay could be as
     * little as 0.5*initialDelayMs.
     */
    n
    /**
     * The multiplier to use to determine the extended base delay after each
     * attempt.
     */ , r
    /**
     * The maximum base delay after which no further backoff is performed.
     * Note that jitter will still be applied, so the actual delay could be as
     * much as 1.5*maxDelayMs.
     */ , i) {
        void 0 === n && (n = 1e3), void 0 === r && (r = 1.5), void 0 === i && (i = 6e4), 
        this.Zr = t, this.fs = e, this.xu = n, this.Nu = r, this.$u = i, this.Fu = 0, this.Ou = null, 
        /** The last backoff attempt, as epoch milliseconds. */
        this.ku = Date.now(), this.reset();
    }
    /**
     * Resets the backoff delay.
     *
     * The very next backoffAndWait() will have no delay. If it is called again
     * (i.e. due to an error), initialDelayMs (plus jitter) will be used, and
     * subsequent ones will increase according to the backoffFactor.
     */    return t.prototype.reset = function() {
        this.Fu = 0;
    }, 
    /**
     * Resets the backoff delay to the maximum delay (e.g. for use after a
     * RESOURCE_EXHAUSTED error).
     */
    t.prototype.Mu = function() {
        this.Fu = this.$u;
    }, 
    /**
     * Returns a promise that resolves after currentDelayMs, and increases the
     * delay for any subsequent attempts. If there was a pending backoff operation
     * already, it will be canceled.
     */
    t.prototype.Lu = function(t) {
        var e = this;
        // Cancel any pending backoff operation.
                this.cancel();
        // First schedule using the current base (which may be 0 and should be
        // honored as such).
        var n = Math.floor(this.Fu + this.Bu()), r = Math.max(0, Date.now() - this.ku), i = Math.max(0, n - r);
        // Guard against lastAttemptTime being in the future due to a clock change.
                i > 0 && N$1("ExponentialBackoff", "Backing off for " + i + " ms (base delay: " + this.Fu + " ms, delay with jitter: " + n + " ms, last attempt: " + r + " ms ago)"), 
        this.Ou = this.Zr.Tr(this.fs, i, (function() {
            return e.ku = Date.now(), t();
        })), 
        // Apply backoff factor to determine next delay and ensure it is within
        // bounds.
        this.Fu *= this.Nu, this.Fu < this.xu && (this.Fu = this.xu), this.Fu > this.$u && (this.Fu = this.$u);
    }, t.prototype.qu = function() {
        null !== this.Ou && (this.Ou.Rs(), this.Ou = null);
    }, t.prototype.cancel = function() {
        null !== this.Ou && (this.Ou.cancel(), this.Ou = null);
    }, 
    /** Returns a random value in the range [-currentBaseMs/2, currentBaseMs/2] */ t.prototype.Bu = function() {
        return (Math.random() - .5) * this.Fu;
    }, t;
}(), Yo = /** @class */ function() {
    function t(t, e, n, r, i, o) {
        this.Zr = t, this.Uu = n, this.Qu = r, this.Ku = i, this.listener = o, this.state = 0 /* Initial */ , 
        /**
             * A close count that's incremented every time the stream is closed; used by
             * getCloseGuardedDispatcher() to invalidate callbacks that happen after
             * close.
             */
        this.Wu = 0, this.ju = null, this.stream = null, this.Gu = new Qo(t, e)
        /**
     * Returns true if start() has been called and no error has occurred. True
     * indicates the stream is open or in the process of opening (which
     * encompasses respecting backoff, getting auth tokens, and starting the
     * actual RPC). Use isOpen() to determine if the stream is open and ready for
     * outbound requests.
     */;
    }
    return t.prototype.zu = function() {
        return 1 /* Starting */ === this.state || 2 /* Open */ === this.state || 4 /* Backoff */ === this.state;
    }, 
    /**
     * Returns true if the underlying RPC is open (the onOpen() listener has been
     * called) and the stream is ready for outbound requests.
     */
    t.prototype.Hu = function() {
        return 2 /* Open */ === this.state;
    }, 
    /**
     * Starts the RPC. Only allowed if isStarted() returns false. The stream is
     * not immediately ready for use: onOpen() will be invoked when the RPC is
     * ready for outbound requests, at which point isOpen() will return true.
     *
     * When start returns, isStarted() will return true.
     */
    t.prototype.start = function() {
        3 /* Error */ !== this.state ? this.auth() : this.Ju();
    }, 
    /**
     * Stops the RPC. This call is idempotent and allowed regardless of the
     * current isStarted() state.
     *
     * When stop returns, isStarted() and isOpen() will both return false.
     */
    t.prototype.stop = function() {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return this.zu() ? [ 4 /*yield*/ , this.close(0 /* Initial */) ] : [ 3 /*break*/ , 2 ];

                  case 1:
                    t.sent(), t.label = 2;

                  case 2:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * After an error the stream will usually back off on the next attempt to
     * start it. If the error warrants an immediate restart of the stream, the
     * sender can use this to indicate that the receiver should not back off.
     *
     * Each error will call the onClose() listener. That function can decide to
     * inhibit backoff if required.
     */
    t.prototype.Yu = function() {
        this.state = 0 /* Initial */ , this.Gu.reset();
    }, 
    /**
     * Marks this stream as idle. If no further actions are performed on the
     * stream for one minute, the stream will automatically close itself and
     * notify the stream's onClose() handler with Status.OK. The stream will then
     * be in a !isStarted() state, requiring the caller to start the stream again
     * before further use.
     *
     * Only streams that are in state 'Open' can be marked idle, as all other
     * states imply pending network operations.
     */
    t.prototype.Xu = function() {
        var t = this;
        // Starts the idle time if we are in state 'Open' and are not yet already
        // running a timer (in which case the previous idle timeout still applies).
                this.Hu() && null === this.ju && (this.ju = this.Zr.Tr(this.Uu, 6e4, (function() {
            return t.Zu();
        })));
    }, 
    /** Sends a message to the underlying stream. */ t.prototype.th = function(t) {
        this.eh(), this.stream.send(t);
    }, 
    /** Called by the idle timer when the stream should close due to inactivity. */ t.prototype.Zu = function() {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(t) {
                return this.Hu() ? [ 2 /*return*/ , this.close(0 /* Initial */) ] : [ 2 /*return*/ ];
            }));
        }));
    }, 
    /** Marks the stream as active again. */ t.prototype.eh = function() {
        this.ju && (this.ju.cancel(), this.ju = null);
    }, 
    /**
     * Closes the stream and cleans up as necessary:
     *
     * * closes the underlying GRPC stream;
     * * calls the onClose handler with the given 'error';
     * * sets internal stream state to 'finalState';
     * * adjusts the backoff timer based on the error
     *
     * A new stream can be opened by calling start().
     *
     * @param finalState - the intended state of the stream after closing.
     * @param error - the error the connection was closed with.
     */
    t.prototype.close = function(t, e) {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    // Notify the listener that the stream closed.
                    // Cancel any outstanding timers (they're guaranteed not to execute).
                    return this.eh(), this.Gu.cancel(), 
                    // Invalidates any stream-related callbacks (e.g. from auth or the
                    // underlying stream), guaranteeing they won't execute.
                    this.Wu++, 3 /* Error */ !== t ? 
                    // If this is an intentional close ensure we don't delay our next connection attempt.
                    this.Gu.reset() : e && e.code === M$1.RESOURCE_EXHAUSTED ? (
                    // Log the error. (Probably either 'quota exceeded' or 'max queue length reached'.)
                    A$1(e.toString()), A$1("Using maximum backoff delay to prevent overloading the backend."), 
                    this.Gu.Mu()) : e && e.code === M$1.UNAUTHENTICATED && 
                    // "unauthenticated" error means the token was rejected. Try force refreshing it in case it
                    // just expired.
                    this.Ku.p(), 
                    // Clean up the underlying stream because we are no longer interested in events.
                    null !== this.stream && (this.nh(), this.stream.close(), this.stream = null), 
                    // This state must be assigned before calling onClose() to allow the callback to
                    // inhibit backoff or otherwise manipulate the state in its non-started state.
                    this.state = t, [ 4 /*yield*/ , this.listener.Tu(e) ];

                  case 1:
                    // Cancel any outstanding timers (they're guaranteed not to execute).
                    // Notify the listener that the stream closed.
                    return n.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * Can be overridden to perform additional cleanup before the stream is closed.
     * Calling super.tearDown() is not required.
     */
    t.prototype.nh = function() {}, t.prototype.auth = function() {
        var t = this;
        this.state = 1 /* Starting */;
        var e = this.sh(this.Wu), n = this.Wu;
        // TODO(mikelehen): Just use dispatchIfNotClosed, but see TODO below.
                this.Ku.getToken().then((function(e) {
            // Stream can be stopped while waiting for authentication.
            // TODO(mikelehen): We really should just use dispatchIfNotClosed
            // and let this dispatch onto the queue, but that opened a spec test can
            // of worms that I don't want to deal with in this PR.
            t.Wu === n && 
            // Normally we'd have to schedule the callback on the AsyncQueue.
            // However, the following calls are safe to be called outside the
            // AsyncQueue since they don't chain asynchronous calls
            t.ih(e);
        }), (function(n) {
            e((function() {
                var e = new q$1(M$1.UNKNOWN, "Fetching auth token failed: " + n.message);
                return t.rh(e);
            }));
        }));
    }, t.prototype.ih = function(t) {
        var e = this, n = this.sh(this.Wu);
        this.stream = this.oh(t), this.stream.wu((function() {
            n((function() {
                return e.state = 2 /* Open */ , e.listener.wu();
            }));
        })), this.stream.Tu((function(t) {
            n((function() {
                return e.rh(t);
            }));
        })), this.stream.onMessage((function(t) {
            n((function() {
                return e.onMessage(t);
            }));
        }));
    }, t.prototype.Ju = function() {
        var t = this;
        this.state = 4 /* Backoff */ , this.Gu.Lu((function() {
            return __awaiter(t, void 0, void 0, (function() {
                return __generator(this, (function(t) {
                    return this.state = 0 /* Initial */ , this.start(), [ 2 /*return*/ ];
                }));
            }));
        }));
    }, 
    // Visible for tests
    t.prototype.rh = function(t) {
        // In theory the stream could close cleanly, however, in our current model
        // we never expect this to happen because if we stop a stream ourselves,
        // this callback will never be called. To prevent cases where we retry
        // without a backoff accidentally, we set the stream to error in all cases.
        return N$1("PersistentStream", "close with error: " + t), this.stream = null, this.close(3 /* Error */ , t);
    }, 
    /**
     * Returns a "dispatcher" function that dispatches operations onto the
     * AsyncQueue but only runs them if closeCount remains unchanged. This allows
     * us to turn auth / stream callbacks into no-ops if the stream is closed /
     * re-opened, etc.
     */
    t.prototype.sh = function(t) {
        var e = this;
        return function(n) {
            e.Zr.Ps((function() {
                return e.Wu === t ? n() : (N$1("PersistentStream", "stream callback skipped by getCloseGuardedDispatcher."), 
                Promise.resolve());
            }));
        };
    }, t;
}(), Ho = /** @class */ function(t) {
    function e(e, n, r, i, o) {
        var u = this;
        return (u = t.call(this, e, "listen_stream_connection_backoff" /* ListenStreamConnectionBackoff */ , "listen_stream_idle" /* ListenStreamIdle */ , n, r, o) || this).Qt = i, 
        u;
    }
    return __extends$1(e, t), e.prototype.oh = function(t) {
        return this.Qu.Cu("Listen", t);
    }, e.prototype.onMessage = function(t) {
        // A successful response means the stream is healthy
        this.Gu.reset();
        var e = function(t, e) {
            var n;
            if ("targetChange" in e) {
                e.targetChange;
                // proto3 default value is unset in JSON (undefined), so use 'NO_CHANGE'
                // if unset
                var r = function(t) {
                    return "NO_CHANGE" === t ? 0 /* NoChange */ : "ADD" === t ? 1 /* Added */ : "REMOVE" === t ? 2 /* Removed */ : "CURRENT" === t ? 3 /* Current */ : "RESET" === t ? 4 /* Reset */ : x$1();
                }(e.targetChange.targetChangeType || "NO_CHANGE"), i = e.targetChange.targetIds || [], o = function(t, e) {
                    return t.Bt ? (k$1(void 0 === e || "string" == typeof e), U$1.fromBase64String(e || "")) : (k$1(void 0 === e || e instanceof Uint8Array), 
                    U$1.fromUint8Array(e || new Uint8Array));
                }(t, e.targetChange.resumeToken), u = (s = e.targetChange.cause) && function(t) {
                    var e = void 0 === t.code ? M$1.UNKNOWN : nn(t.code);
                    return new q$1(e, t.message || "");
                }(s);
                n = new Dn(r, i, o, u || null);
            } else if ("documentChange" in e) {
                e.documentChange, (r = e.documentChange).document, r.document.name, r.document.updateTime, 
                i = zn(t, r.document.name), o = Mn(r.document.updateTime);
                var s = new St({
                    mapValue: {
                        fields: r.document.fields
                    }
                }), a = (u = new Pt(i, o, s, {}), r.targetIds || []), c = r.removedTargetIds || [];
                n = new Nn(a, c, u.key, u);
            } else if ("documentDelete" in e) e.documentDelete, (r = e.documentDelete).document, 
            i = zn(t, r.document), o = r.readTime ? Mn(r.readTime) : X$1.min(), s = new Vt(i, o), 
            u = r.removedTargetIds || [], n = new Nn([], u, s.key, s); else if ("documentRemove" in e) e.documentRemove, 
            (r = e.documentRemove).document, i = zn(t, r.document), o = r.removedTargetIds || [], 
            n = new Nn([], o, i, null); else {
                if (!("filter" in e)) return x$1();
                e.filter;
                var h = e.filter;
                h.targetId, r = h.count || 0, i = new tn(r), o = h.targetId, n = new An(o, i);
            }
            return n;
        }(this.Qt, t), n = function(t) {
            // We have only reached a consistent snapshot for the entire stream if there
            // is a read_time set and it applies to all targets (i.e. the list of
            // targets is empty). The backend is guaranteed to send such responses.
            if (!("targetChange" in t)) return X$1.min();
            var e = t.targetChange;
            return e.targetIds && e.targetIds.length ? X$1.min() : e.readTime ? Mn(e.readTime) : X$1.min();
        }(t);
        return this.listener.ah(e, n);
    }, 
    /**
     * Registers interest in the results of the given target. If the target
     * includes a resumeToken it will be included in the request. Results that
     * affect the target will be streamed back as WatchChange messages that
     * reference the targetId.
     */
    e.prototype.uh = function(t) {
        var e = {};
        e.database = Qn(this.Qt), e.addTarget = function(t, e) {
            var n, r = e.target;
            return (n = qt(r) ? {
                documents: Zn(t, r)
            } : {
                query: Jn(t, r)
            }).targetId = e.targetId, e.resumeToken.l() > 0 ? n.resumeToken = Rn(t, e.resumeToken) : e.Ot._(X$1.min()) > 0 && (
            // TODO(wuandy): Consider removing above check because it is most likely true.
            // Right now, many tests depend on this behaviour though (leaving min() out
            // of serialization).
            n.readTime = Ln(t, e.Ot.j())), n;
        }(this.Qt, t);
        var n = function(t, e) {
            var n = function(t, e) {
                switch (e) {
                  case 0 /* Listen */ :
                    return null;

                  case 1 /* ExistenceFilterMismatch */ :
                    return "existence-filter-mismatch";

                  case 2 /* LimboResolution */ :
                    return "limbo-document";

                  default:
                    return x$1();
                }
            }(0, e.Ft);
            return null == n ? null : {
                "goog-listen-tags": n
            };
        }(this.Qt, t);
        n && (e.labels = n), this.th(e);
    }, 
    /**
     * Unregisters interest in the results of the target associated with the
     * given targetId.
     */
    e.prototype.hh = function(t) {
        var e = {};
        e.database = Qn(this.Qt), e.removeTarget = t, this.th(e);
    }, e;
}(Yo), Ko = /** @class */ function(t) {
    function e(e, n, r, i, o) {
        var u = this;
        return (u = t.call(this, e, "write_stream_connection_backoff" /* WriteStreamConnectionBackoff */ , "write_stream_idle" /* WriteStreamIdle */ , n, r, o) || this).Qt = i, 
        u.lh = !1, u;
    }
    return __extends$1(e, t), Object.defineProperty(e.prototype, "_h", {
        /**
         * Tracks whether or not a handshake has been successfully exchanged and
         * the stream is ready to accept mutations.
         */
        get: function() {
            return this.lh;
        },
        enumerable: !1,
        configurable: !0
    }), 
    // Override of PersistentStream.start
    e.prototype.start = function() {
        this.lh = !1, this.lastStreamToken = void 0, t.prototype.start.call(this);
    }, e.prototype.nh = function() {
        this.lh && this.fh([]);
    }, e.prototype.oh = function(t) {
        return this.Qu.Cu("Write", t);
    }, e.prototype.onMessage = function(t) {
        if (
        // Always capture the last stream token.
        k$1(!!t.streamToken), this.lastStreamToken = t.streamToken, this.lh) {
            // A successful first write response means the stream is healthy,
            // Note, that we could consider a successful handshake healthy, however,
            // the write itself might be causing an error we want to back off from.
            this.Gu.reset();
            var e = function(t, e) {
                return t && t.length > 0 ? (k$1(void 0 !== e), t.map((function(t) {
                    return function(t, e) {
                        // NOTE: Deletes don't have an updateTime.
                        var n = t.updateTime ? Mn(t.updateTime) : Mn(e);
                        n.isEqual(X$1.min()) && (
                        // The Firestore Emulator currently returns an update time of 0 for
                        // deletes of non-existing documents (rather than null). This breaks the
                        // test "get deleted doc while offline with source=cache" as NoDocuments
                        // with version 0 are filtered by IndexedDb's RemoteDocumentCache.
                        // TODO(#2149): Remove this when Emulator is fixed
                        n = Mn(e));
                        var r = null;
                        return t.transformResults && t.transformResults.length > 0 && (r = t.transformResults), 
                        new Le(n, r);
                    }(t, e);
                }))) : [];
            }(t.writeResults, t.commitTime), n = Mn(t.commitTime);
            return this.listener.dh(n, e);
        }
        // The first response is always the handshake response
                return k$1(!t.writeResults || 0 === t.writeResults.length), this.lh = !0, 
        this.listener.wh();
    }, 
    /**
     * Sends an initial streamToken to the server, performing the handshake
     * required to make the StreamingWrite RPC work. Subsequent
     * calls should wait until onHandshakeComplete was called.
     */
    e.prototype.Eh = function() {
        // TODO(dimond): Support stream resumption. We intentionally do not set the
        // stream token on the handshake, ignoring any stream token we might have.
        var t = {};
        t.database = Qn(this.Qt), this.th(t);
    }, 
    /** Sends a group of mutations to the Firestore backend to apply. */ e.prototype.fh = function(t) {
        var e = this, n = {
            streamToken: this.lastStreamToken,
            writes: t.map((function(t) {
                return Xn(e.Qt, t);
            }))
        };
        this.th(n);
    }, e;
}(Yo), Xo = /** @class */ function(t) {
    function e(e, n, r) {
        var i = this;
        return (i = t.call(this) || this).credentials = e, i.Qu = n, i.Qt = r, i.Th = !1, 
        i;
    }
    return __extends$1(e, t), e.prototype.Ih = function() {
        if (this.Th) throw new q$1(M$1.FAILED_PRECONDITION, "The client has already been terminated.");
    }, 
    /** Gets an auth token and invokes the provided RPC. */ e.prototype.pu = function(t, e, n) {
        var r = this;
        return this.Ih(), this.credentials.getToken().then((function(i) {
            return r.Qu.pu(t, e, n, i);
        })).catch((function(t) {
            throw t.code === M$1.UNAUTHENTICATED && r.credentials.p(), t;
        }));
    }, 
    /** Gets an auth token and invokes the provided RPC with streamed results. */ e.prototype.Du = function(t, e, n) {
        var r = this;
        return this.Ih(), this.credentials.getToken().then((function(i) {
            return r.Qu.Du(t, e, n, i);
        })).catch((function(t) {
            throw t.code === M$1.UNAUTHENTICATED && r.credentials.p(), t;
        }));
    }, e.prototype.terminate = function() {
        this.Th = !1;
    }, e;
}((function() {})), Wo = /** @class */ function() {
    function t(t, e) {
        this._s = t, this.fa = e, 
        /** The current OnlineState. */
        this.state = "Unknown" /* Unknown */ , 
        /**
             * A count of consecutive failures to open the stream. If it reaches the
             * maximum defined by MAX_WATCH_STREAM_FAILURES, we'll set the OnlineState to
             * Offline.
             */
        this.mh = 0, 
        /**
             * A timer that elapses after ONLINE_STATE_TIMEOUT_MS, at which point we
             * transition from OnlineState.Unknown to OnlineState.Offline without waiting
             * for the stream to actually fail (MAX_WATCH_STREAM_FAILURES times).
             */
        this.Ah = null, 
        /**
             * Whether the client should log a warning message if it fails to connect to
             * the backend (initially true, cleared after a successful stream, or if we've
             * logged the message already).
             */
        this.Rh = !0
        /**
     * Called by RemoteStore when a watch stream is started (including on each
     * backoff attempt).
     *
     * If this is the first attempt, it sets the OnlineState to Unknown and starts
     * the onlineStateTimer.
     */;
    }
    return t.prototype.Ph = function() {
        var t = this;
        0 === this.mh && (this.yh("Unknown" /* Unknown */), this.Ah = this._s.Tr("online_state_timeout" /* OnlineStateTimeout */ , 1e4, (function() {
            return t.Ah = null, t.gh("Backend didn't respond within 10 seconds."), t.yh("Offline" /* Offline */), 
            Promise.resolve();
        })));
    }, 
    /**
     * Updates our OnlineState as appropriate after the watch stream reports a
     * failure. The first failure moves us to the 'Unknown' state. We then may
     * allow multiple failures (based on MAX_WATCH_STREAM_FAILURES) before we
     * actually transition to the 'Offline' state.
     */
    t.prototype.Vh = function(t) {
        "Online" /* Online */ === this.state ? this.yh("Unknown" /* Unknown */) : (this.mh++, 
        this.mh >= 1 && (this.ph(), this.gh("Connection failed 1 times. Most recent error: " + t.toString()), 
        this.yh("Offline" /* Offline */)));
    }, 
    /**
     * Explicitly sets the OnlineState to the specified state.
     *
     * Note that this resets our timers / failure counters, etc. used by our
     * Offline heuristics, so must not be used in place of
     * handleWatchStreamStart() and handleWatchStreamFailure().
     */
    t.prototype.set = function(t) {
        this.ph(), this.mh = 0, "Online" /* Online */ === t && (
        // We've connected to watch at least once. Don't warn the developer
        // about being offline going forward.
        this.Rh = !1), this.yh(t);
    }, t.prototype.yh = function(t) {
        t !== this.state && (this.state = t, this.fa(t));
    }, t.prototype.gh = function(t) {
        var e = "Could not reach Cloud Firestore backend. " + t + "\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.";
        this.Rh ? (A$1(e), this.Rh = !1) : N$1("OnlineStateTracker", e);
    }, t.prototype.ph = function() {
        null !== this.Ah && (this.Ah.cancel(), this.Ah = null);
    }, t;
}(), Zo = function(
/**
     * The local store, used to fill the write pipeline with outbound mutations.
     */
t, 
/** The client-side proxy for interacting with the backend. */
e, n, r, i) {
    var o = this;
    this.bh = t, this.Sh = e, this._s = n, this.Dh = {}, 
    /**
             * A list of up to MAX_PENDING_WRITES writes that we have fetched from the
             * LocalStore via fillWritePipeline() and have or will send to the write
             * stream.
             *
             * Whenever writePipeline.length > 0 the RemoteStore will attempt to start or
             * restart the write stream. When the stream is established the writes in the
             * pipeline will be sent in order.
             *
             * Writes remain in writePipeline until they are acknowledged by the backend
             * and thus will automatically be re-sent if the stream is interrupted /
             * restarted before they're acknowledged.
             *
             * Write responses from the backend are linked to their originating request
             * purely based on order, and so we can just shift() writes from the front of
             * the writePipeline as we receive responses.
             */
    this.Ch = [], 
    /**
             * A mapping of watched targets that the client cares about tracking and the
             * user has explicitly called a 'listen' for this target.
             *
             * These targets may or may not have been sent to or acknowledged by the
             * server. On re-establishing the listen stream, these targets should be sent
             * to the server. The targets removed with unlistens are removed eagerly
             * without waiting for confirmation from the listen stream.
             */
    this.xh = new Map, 
    /**
             * A set of reasons for why the RemoteStore may be offline. If empty, the
             * RemoteStore may start its network connections.
             */
    this.Nh = new Set, 
    /**
             * Event handlers that get called when the network is disabled or enabled.
             *
             * PORTING NOTE: These functions are used on the Web client to create the
             * underlying streams (to support tree-shakeable streams). On Android and iOS,
             * the streams are created during construction of RemoteStore.
             */
    this.$h = [], this.Fh = i, this.Fh.ou((function(t) {
        n.Ps((function() {
            return __awaiter(o, void 0, void 0, (function() {
                return __generator(this, (function(t) {
                    switch (t.label) {
                      case 0:
                        return uu(this) ? (N$1("RemoteStore", "Restarting streams for network reachability change."), 
                        [ 4 /*yield*/ , function(t) {
                            return __awaiter(this, void 0, void 0, (function() {
                                var e;
                                return __generator(this, (function(n) {
                                    switch (n.label) {
                                      case 0:
                                        return (e = O$1(t)).Nh.add(4 /* ConnectivityChange */), [ 4 /*yield*/ , $o(e) ];

                                      case 1:
                                        return n.sent(), e.Oh.set("Unknown" /* Unknown */), e.Nh.delete(4 /* ConnectivityChange */), 
                                        [ 4 /*yield*/ , Jo(e) ];

                                      case 2:
                                        return n.sent(), [ 2 /*return*/ ];
                                    }
                                }));
                            }));
                        }(this) ]) : [ 3 /*break*/ , 2 ];

                      case 1:
                        t.sent(), t.label = 2;

                      case 2:
                        return [ 2 /*return*/ ];
                    }
                }));
            }));
        }));
    })), this.Oh = new Wo(n, r);
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A PersistentStream is an abstract base class that represents a streaming RPC
 * to the Firestore backend. It's built on top of the connections own support
 * for streaming RPCs, and adds several critical features for our clients:
 *
 *   - Exponential backoff on failure
 *   - Authentication via CredentialsProvider
 *   - Dispatching all callbacks into the shared worker queue
 *   - Closing idle streams after 60 seconds of inactivity
 *
 * Subclasses of PersistentStream implement serialization of models to and
 * from the JSON representation of the protocol buffers for a specific
 * streaming RPC.
 *
 * ## Starting and Stopping
 *
 * Streaming RPCs are stateful and need to be start()ed before messages can
 * be sent and received. The PersistentStream will call the onOpen() function
 * of the listener once the stream is ready to accept requests.
 *
 * Should a start() fail, PersistentStream will call the registered onClose()
 * listener with a FirestoreError indicating what went wrong.
 *
 * A PersistentStream can be started and stopped repeatedly.
 *
 * Generic types:
 *  SendType: The type of the outgoing message of the underlying
 *    connection stream
 *  ReceiveType: The type of the incoming message of the underlying
 *    connection stream
 *  ListenerType: The type of the listener that will be used for callbacks
 */ function Jo(t) {
    return __awaiter(this, void 0, void 0, (function() {
        var e, n;
        return __generator(this, (function(r) {
            switch (r.label) {
              case 0:
                if (!uu(t)) return [ 3 /*break*/ , 4 ];
                e = 0, n = t.$h, r.label = 1;

              case 1:
                return e < n.length ? [ 4 /*yield*/ , (0, n[e])(/* enabled= */ !0) ] : [ 3 /*break*/ , 4 ];

              case 2:
                r.sent(), r.label = 3;

              case 3:
                return e++, [ 3 /*break*/ , 1 ];

              case 4:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Temporarily disables the network. The network can be re-enabled using
 * enableNetwork().
 */ function $o(t) {
    return __awaiter(this, void 0, void 0, (function() {
        var e, n;
        return __generator(this, (function(r) {
            switch (r.label) {
              case 0:
                e = 0, n = t.$h, r.label = 1;

              case 1:
                return e < n.length ? [ 4 /*yield*/ , (0, n[e])(/* enabled= */ !1) ] : [ 3 /*break*/ , 4 ];

              case 2:
                r.sent(), r.label = 3;

              case 3:
                return e++, [ 3 /*break*/ , 1 ];

              case 4:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Starts new listen for the given target. Uses resume token if provided. It
 * is a no-op if the target of given `TargetData` is already being listened to.
 */ function tu(t, e) {
    var n = O$1(t);
    n.xh.has(e.targetId) || (
    // Mark this as something the client is currently listening for.
    n.xh.set(e.targetId, e), ou(n) ? 
    // The listen will be sent in onWatchStreamOpen
    iu(n) : _u(n).Hu() && nu(n, e));
}

/**
 * Removes the listen from server. It is a no-op if the given target id is
 * not being listened to.
 */ function eu(t, e) {
    var n = O$1(t), r = _u(n);
    n.xh.delete(e), r.Hu() && ru(n, e), 0 === n.xh.size && (r.Hu() ? r.Xu() : uu(n) && 
    // Revert to OnlineState.Unknown if the watch stream is not open and we
    // have no listeners, since without any listens to send we cannot
    // confirm if the stream is healthy and upgrade to OnlineState.Online.
    n.Oh.set("Unknown" /* Unknown */));
}

/**
 * We need to increment the the expected number of pending responses we're due
 * from watch so we wait for the ack to process any messages from this target.
 */ function nu(t, e) {
    t.kh.on(e.targetId), _u(t).uh(e)
    /**
 * We need to increment the expected number of pending responses we're due
 * from watch so we wait for the removal on the server before we process any
 * messages from this target.
 */;
}

function ru(t, e) {
    t.kh.on(e), _u(t).hh(e);
}

function iu(t) {
    t.kh = new xn({
        vn: function(e) {
            return t.Dh.vn(e);
        },
        Sn: function(e) {
            return t.xh.get(e) || null;
        }
    }), _u(t).start(), t.Oh.Ph()
    /**
 * Returns whether the watch stream should be started because it's necessary
 * and has not yet been started.
 */;
}

function ou(t) {
    return uu(t) && !_u(t).zu() && t.xh.size > 0;
}

function uu(t) {
    return 0 === O$1(t).Nh.size;
}

function su(t) {
    t.kh = void 0;
}

function au(t) {
    return __awaiter(this, void 0, void 0, (function() {
        return __generator(this, (function(e) {
            return t.xh.forEach((function(e, n) {
                nu(t, e);
            })), [ 2 /*return*/ ];
        }));
    }));
}

function cu(t, e) {
    return __awaiter(this, void 0, void 0, (function() {
        return __generator(this, (function(n) {
            return su(t), 
            // If we still need the watch stream, retry the connection.
            ou(t) ? (t.Oh.Vh(e), iu(t)) : 
            // No need to restart watch stream because there are no active targets.
            // The online state is set to unknown because there is no active attempt
            // at establishing a connection
            t.Oh.set("Unknown" /* Unknown */), [ 2 /*return*/ ];
        }));
    }));
}

function hu(t, e, n) {
    return __awaiter(this, void 0, void 0, (function() {
        var r, i, o;
        return __generator(this, (function(u) {
            switch (u.label) {
              case 0:
                if (t.Oh.set("Online" /* Online */), !(e instanceof Dn && 2 /* Removed */ === e.state && e.cause)) 
                // Mark the client as online since we got a message from the server
                return [ 3 /*break*/ , 6 ];
                u.label = 1;

              case 1:
                return u.trys.push([ 1, 3, , 5 ]), [ 4 /*yield*/ , 
                /** Handles an error on a target */
                function(t, e) {
                    return __awaiter(this, void 0, void 0, (function() {
                        var n, r, i, o;
                        return __generator(this, (function(u) {
                            switch (u.label) {
                              case 0:
                                n = e.cause, r = 0, i = e.targetIds, u.label = 1;

                              case 1:
                                return r < i.length ? (o = i[r], t.xh.has(o) ? [ 4 /*yield*/ , t.Dh.Mh(o, n) ] : [ 3 /*break*/ , 3 ]) : [ 3 /*break*/ , 5 ];

                              case 2:
                                u.sent(), t.xh.delete(o), t.kh.removeTarget(o), u.label = 3;

                              case 3:
                                u.label = 4;

                              case 4:
                                return r++, [ 3 /*break*/ , 1 ];

                              case 5:
                                return [ 2 /*return*/ ];
                            }
                        }));
                    }));
                }(t, e) ];

              case 2:
                return u.sent(), [ 3 /*break*/ , 5 ];

              case 3:
                return r = u.sent(), N$1("RemoteStore", "Failed to remove targets %s: %s ", e.targetIds.join(","), r), 
                [ 4 /*yield*/ , fu(t, r) ];

              case 4:
                return u.sent(), [ 3 /*break*/ , 5 ];

              case 5:
                return [ 3 /*break*/ , 13 ];

              case 6:
                if (e instanceof Nn ? t.kh.dn(e) : e instanceof An ? t.kh.Pn(e) : t.kh.Tn(e), n.isEqual(X$1.min())) return [ 3 /*break*/ , 13 ];
                u.label = 7;

              case 7:
                return u.trys.push([ 7, 11, , 13 ]), [ 4 /*yield*/ , io(t.bh) ];

              case 8:
                return i = u.sent(), n._(i) >= 0 ? [ 4 /*yield*/ , 
                /**
                 * Takes a batch of changes from the Datastore, repackages them as a
                 * RemoteEvent, and passes that on to the listener, which is typically the
                 * SyncEngine.
                 */
                function(t, e) {
                    var n = t.kh.Vn(e);
                    // Update in-memory resume tokens. LocalStore will update the
                    // persistent view of these when applying the completed RemoteEvent.
                                        return n.$e.forEach((function(n, r) {
                        if (n.resumeToken.l() > 0) {
                            var i = t.xh.get(r);
                            // A watched target might have been removed already.
                                                        i && t.xh.set(r, i.Mt(n.resumeToken, e));
                        }
                    })), 
                    // Re-establish listens for the targets that have been invalidated by
                    // existence filter mismatches.
                    n.Fe.forEach((function(e) {
                        var n = t.xh.get(e);
                        if (n) {
                            // Clear the resume token for the target, since we're in a known mismatch
                            // state.
                            t.xh.set(e, n.Mt(U$1.T, n.Ot)), 
                            // Cause a hard reset by unwatching and rewatching immediately, but
                            // deliberately don't send a resume token so that we get a full update.
                            ru(t, e);
                            // Mark the target we send as being on behalf of an existence filter
                            // mismatch, but don't actually retain that in listenTargets. This ensures
                            // that we flag the first re-listen this way without impacting future
                            // listens of this target (that might happen e.g. on reconnect).
                            var r = new ge(n.target, e, 1 /* ExistenceFilterMismatch */ , n.sequenceNumber);
                            nu(t, r);
                        }
                    })), t.Dh.Lh(n);
                }(t, n) ] : [ 3 /*break*/ , 10 ];

                // We have received a target change with a global snapshot if the snapshot
                // version is not equal to SnapshotVersion.min().
                              case 9:
                // We have received a target change with a global snapshot if the snapshot
                // version is not equal to SnapshotVersion.min().
                u.sent(), u.label = 10;

              case 10:
                return [ 3 /*break*/ , 13 ];

              case 11:
                return N$1("RemoteStore", "Failed to raise snapshot:", o = u.sent()), [ 4 /*yield*/ , fu(t, o) ];

              case 12:
                return u.sent(), [ 3 /*break*/ , 13 ];

              case 13:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Recovery logic for IndexedDB errors that takes the network offline until
 * `op` succeeds. Retries are scheduled with backoff using
 * `enqueueRetryable()`. If `op()` is not provided, IndexedDB access is
 * validated via a generic operation.
 *
 * The returned Promise is resolved once the network is disabled and before
 * any retry attempt.
 */ function fu(t, e, n) {
    return __awaiter(this, void 0, void 0, (function() {
        var r = this;
        return __generator(this, (function(i) {
            switch (i.label) {
              case 0:
                if (!mr(e)) throw e;
                // Disable network and raise offline snapshots
                return t.Nh.add(1 /* IndexedDbFailed */), [ 4 /*yield*/ , $o(t) ];

              case 1:
                // Disable network and raise offline snapshots
                return i.sent(), t.Oh.set("Offline" /* Offline */), n || (
                // Use a simple read operation to determine if IndexedDB recovered.
                // Ideally, we would expose a health check directly on SimpleDb, but
                // RemoteStore only has access to persistence through LocalStore.
                n = function() {
                    return io(t.bh);
                }), 
                // Probe IndexedDB periodically and re-enable network
                t._s.po((function() {
                    return __awaiter(r, void 0, void 0, (function() {
                        return __generator(this, (function(e) {
                            switch (e.label) {
                              case 0:
                                return N$1("RemoteStore", "Retrying IndexedDB access"), [ 4 /*yield*/ , n() ];

                              case 1:
                                return e.sent(), t.Nh.delete(1 /* IndexedDbFailed */), [ 4 /*yield*/ , Jo(t) ];

                              case 2:
                                return e.sent(), [ 2 /*return*/ ];
                            }
                        }));
                    }));
                })), [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Executes `op`. If `op` fails, takes the network offline until `op`
 * succeeds. Returns after the first attempt.
 */ function lu(t, e) {
    return e().catch((function(n) {
        return fu(t, n, e);
    }));
}

function pu(t) {
    return __awaiter(this, void 0, void 0, (function() {
        var e, n, r, i, o;
        return __generator(this, (function(u) {
            switch (u.label) {
              case 0:
                e = O$1(t), n = Iu(e), r = e.Ch.length > 0 ? e.Ch[e.Ch.length - 1].batchId : -1, u.label = 1;

              case 1:
                if (!
                /**
 * Returns true if we can add to the write pipeline (i.e. the network is
 * enabled and the write pipeline is not full).
 */
                function(t) {
                    return uu(t) && t.Ch.length < 10;
                }
                /**
 * Queues additional writes to be sent to the write stream, sending them
 * immediately if the write stream is established.
 */ (e)) return [ 3 /*break*/ , 7 ];
                u.label = 2;

              case 2:
                return u.trys.push([ 2, 4, , 6 ]), [ 4 /*yield*/ , so(e.bh, r) ];

              case 3:
                return null === (i = u.sent()) ? (0 === e.Ch.length && n.Xu(), [ 3 /*break*/ , 7 ]) : (r = i.batchId, 
                function(t, e) {
                    t.Ch.push(e);
                    var n = Iu(t);
                    n.Hu() && n._h && n.fh(e.mutations);
                }(e, i), [ 3 /*break*/ , 6 ]);

              case 4:
                return o = u.sent(), [ 4 /*yield*/ , fu(e, o) ];

              case 5:
                return u.sent(), [ 3 /*break*/ , 6 ];

              case 6:
                return [ 3 /*break*/ , 1 ];

              case 7:
                return du(e) && vu(e), [ 2 /*return*/ ];
            }
        }));
    }));
}

function du(t) {
    return uu(t) && !Iu(t).zu() && t.Ch.length > 0;
}

function vu(t) {
    Iu(t).start();
}

function yu(t) {
    return __awaiter(this, void 0, void 0, (function() {
        return __generator(this, (function(e) {
            return Iu(t).Eh(), [ 2 /*return*/ ];
        }));
    }));
}

function mu(t) {
    return __awaiter(this, void 0, void 0, (function() {
        var e, n, r, i;
        return __generator(this, (function(o) {
            // Send the write pipeline now that the stream is established.
            for (e = Iu(t), n = 0, r = t.Ch; n < r.length; n++) i = r[n], e.fh(i.mutations);
            return [ 2 /*return*/ ];
        }));
    }));
}

function gu(t, e, n) {
    return __awaiter(this, void 0, void 0, (function() {
        var r, i;
        return __generator(this, (function(o) {
            switch (o.label) {
              case 0:
                return r = t.Ch.shift(), i = Wr.from(r, e, n), [ 4 /*yield*/ , lu(t, (function() {
                    return t.Dh.Bh(i);
                })) ];

              case 1:
                // It's possible that with the completion of this mutation another
                // slot has freed up.
                return o.sent(), [ 4 /*yield*/ , pu(t) ];

              case 2:
                // It's possible that with the completion of this mutation another
                // slot has freed up.
                return o.sent(), [ 2 /*return*/ ];
            }
        }));
    }));
}

function wu(t, e) {
    return __awaiter(this, void 0, void 0, (function() {
        return __generator(this, (function(n) {
            switch (n.label) {
              case 0:
                return e && Iu(t)._h ? [ 4 /*yield*/ , function(t, e) {
                    return __awaiter(this, void 0, void 0, (function() {
                        var n, r;
                        return __generator(this, (function(i) {
                            switch (i.label) {
                              case 0:
                                return en(r = e.code) && r !== M$1.ABORTED ? (n = t.Ch.shift(), 
                                // In this case it's also unlikely that the server itself is melting
                                // down -- this was just a bad request so inhibit backoff on the next
                                // restart.
                                Iu(t).Yu(), [ 4 /*yield*/ , lu(t, (function() {
                                    return t.Dh.qh(n.batchId, e);
                                })) ]) : [ 3 /*break*/ , 3 ];

                              case 1:
                                // It's possible that with the completion of this mutation
                                // another slot has freed up.
                                return i.sent(), [ 4 /*yield*/ , pu(t) ];

                              case 2:
                                // In this case it's also unlikely that the server itself is melting
                                // down -- this was just a bad request so inhibit backoff on the next
                                // restart.
                                // It's possible that with the completion of this mutation
                                // another slot has freed up.
                                i.sent(), i.label = 3;

                              case 3:
                                return [ 2 /*return*/ ];
                            }
                        }));
                    }));
                }(t, e) ] : [ 3 /*break*/ , 2 ];

                // This error affects the actual write.
                              case 1:
                // This error affects the actual write.
                n.sent(), n.label = 2;

              case 2:
                // If the write stream closed after the write handshake completes, a write
                // operation failed and we fail the pending operation.
                // The write stream might have been started by refilling the write
                // pipeline for failed writes
                return du(t) && vu(t), [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Toggles the network state when the client gains or loses its primary lease.
 */ function bu(t, e) {
    return __awaiter(this, void 0, void 0, (function() {
        var n;
        return __generator(this, (function(i) {
            switch (i.label) {
              case 0:
                return n = O$1(t), e ? (n.Nh.delete(2 /* IsSecondary */), [ 4 /*yield*/ , Jo(n) ]) : [ 3 /*break*/ , 2 ];

              case 1:
                return i.sent(), [ 3 /*break*/ , 5 ];

              case 2:
                return (e) ? [ 3 /*break*/ , 4 ] : (n.Nh.add(2 /* IsSecondary */), [ 4 /*yield*/ , $o(n) ]);

              case 3:
                i.sent(), n.Oh.set("Unknown" /* Unknown */), i.label = 4;

              case 4:
                i.label = 5;

              case 5:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * If not yet initialized, registers the WatchStream and its network state
 * callback with `remoteStoreImpl`. Returns the existing stream if one is
 * already available.
 *
 * PORTING NOTE: On iOS and Android, the WatchStream gets registered on startup.
 * This is not done on Web to allow it to be tree-shaken.
 */ function _u(t) {
    var e = this;
    return t.Uh || (
    // Create stream (but note that it is not started yet).
    t.Uh = function(t, e, n) {
        var r = O$1(t);
        return r.Ih(), new Ho(e, r.Qu, r.credentials, r.Qt, n);
    }(t.Sh, t._s, {
        wu: au.bind(null, t),
        Tu: cu.bind(null, t),
        ah: hu.bind(null, t)
    }), t.$h.push((function(n) {
        return __awaiter(e, void 0, void 0, (function() {
            return __generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return n ? (t.Uh.Yu(), ou(t) ? iu(t) : t.Oh.set("Unknown" /* Unknown */), [ 3 /*break*/ , 3 ]) : [ 3 /*break*/ , 1 ];

                  case 1:
                    return [ 4 /*yield*/ , t.Uh.stop() ];

                  case 2:
                    e.sent(), su(t), e.label = 3;

                  case 3:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }))), t.Uh
    /**
 * If not yet initialized, registers the WriteStream and its network state
 * callback with `remoteStoreImpl`. Returns the existing stream if one is
 * already available.
 *
 * PORTING NOTE: On iOS and Android, the WriteStream gets registered on startup.
 * This is not done on Web to allow it to be tree-shaken.
 */;
}

function Iu(t) {
    var e = this;
    return t.Qh || (
    // Create stream (but note that it is not started yet).
    t.Qh = function(t, e, n) {
        var r = O$1(t);
        return r.Ih(), new Ko(e, r.Qu, r.credentials, r.Qt, n);
    }(t.Sh, t._s, {
        wu: yu.bind(null, t),
        Tu: wu.bind(null, t),
        wh: mu.bind(null, t),
        dh: gu.bind(null, t)
    }), t.$h.push((function(n) {
        return __awaiter(e, void 0, void 0, (function() {
            return __generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return n ? (t.Qh.Yu(), [ 4 /*yield*/ , pu(t) ]) : [ 3 /*break*/ , 2 ];

                  case 1:
                    // This will start the write stream if necessary.
                    return e.sent(), [ 3 /*break*/ , 4 ];

                  case 2:
                    return [ 4 /*yield*/ , t.Qh.stop() ];

                  case 3:
                    e.sent(), t.Ch.length > 0 && (N$1("RemoteStore", "Stopping write stream with " + t.Ch.length + " pending writes"), 
                    t.Ch = []), e.label = 4;

                  case 4:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }))), t.Qh
    /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
    /**
 * Holds the listeners and the last received ViewSnapshot for a query being
 * tracked by EventManager.
 */;
}

var Eu = function() {
    this.Kh = void 0, this.listeners = [];
}, Tu = function() {
    this.queries = new gi((function(t) {
        return pe(t);
    }), le), this.onlineState = "Unknown" /* Unknown */ , this.Wh = new Set;
};

function Nu(t, e) {
    return __awaiter(this, void 0, void 0, (function() {
        var n, r, i, o, u, s, a;
        return __generator(this, (function(c) {
            switch (c.label) {
              case 0:
                if (n = O$1(t), r = e.query, i = !1, (o = n.queries.get(r)) || (i = !0, o = new Eu), 
                !i) return [ 3 /*break*/ , 4 ];
                c.label = 1;

              case 1:
                return c.trys.push([ 1, 3, , 4 ]), u = o, [ 4 /*yield*/ , n.jh(r) ];

              case 2:
                return u.Kh = c.sent(), [ 3 /*break*/ , 4 ];

              case 3:
                return s = c.sent(), a = Er(s, "Initialization of query '" + de(e.query) + "' failed"), 
                [ 2 /*return*/ , void e.onError(a) ];

              case 4:
                return n.queries.set(r, o), o.listeners.push(e), 
                // Run global snapshot listeners if a consistent snapshot has been emitted.
                e.Gh(n.onlineState), o.Kh && e.zh(o.Kh) && xu(n), [ 2 /*return*/ ];
            }
        }));
    }));
}

function Au(t, e) {
    return __awaiter(this, void 0, void 0, (function() {
        var n, r, i, o, u;
        return __generator(this, (function(s) {
            return n = O$1(t), r = e.query, i = !1, (o = n.queries.get(r)) && (u = o.listeners.indexOf(e)) >= 0 && (o.listeners.splice(u, 1), 
            i = 0 === o.listeners.length), i ? [ 2 /*return*/ , (n.queries.delete(r), n.Hh(r)) ] : [ 2 /*return*/ ];
        }));
    }));
}

function Du(t, e) {
    for (var n = O$1(t), r = !1, i = 0, o = e; i < o.length; i++) {
        var u = o[i], s = u.query, a = n.queries.get(s);
        if (a) {
            for (var c = 0, h = a.listeners; c < h.length; c++) {
                h[c].zh(u) && (r = !0);
            }
            a.Kh = u;
        }
    }
    r && xu(n);
}

function Su(t, e, n) {
    var r = O$1(t), i = r.queries.get(e);
    if (i) for (var o = 0, u = i.listeners; o < u.length; o++) {
        u[o].onError(n);
    }
    // Remove all listeners. NOTE: We don't need to call syncEngine.unlisten()
    // after an error.
        r.queries.delete(e);
}

// Call all global snapshot listeners that have been set.
function xu(t) {
    t.Wh.forEach((function(t) {
        t.next();
    }));
}

/**
 * QueryListener takes a series of internal view snapshots and determines
 * when to raise the event.
 *
 * It uses an Observer to dispatch events.
 */ var ku = /** @class */ function() {
    function t(t, e, n) {
        this.query = t, this.Jh = e, 
        /**
             * Initial snapshots (e.g. from cache) may not be propagated to the wrapped
             * observer. This flag is set to true once we've actually raised an event.
             */
        this.Yh = !1, this.Xh = null, this.onlineState = "Unknown" /* Unknown */ , this.options = n || {}
        /**
     * Applies the new ViewSnapshot to this listener, raising a user-facing event
     * if applicable (depending on what changed, whether the user has opted into
     * metadata-only changes, etc.). Returns true if a user-facing event was
     * indeed raised.
     */;
    }
    return t.prototype.zh = function(t) {
        if (!this.options.includeMetadataChanges) {
            for (
            // Remove the metadata only changes.
            var e = [], n = 0, r = t.docChanges; n < r.length; n++) {
                var i = r[n];
                3 /* Metadata */ !== i.type && e.push(i);
            }
            t = new In(t.query, t.docs, t.Se, e, t.De, t.fromCache, t.Ce, 
            /* excludesMetadataChanges= */ !0);
        }
        var o = !1;
        return this.Yh ? this.Zh(t) && (this.Jh.next(t), o = !0) : this.tl(t, this.onlineState) && (this.el(t), 
        o = !0), this.Xh = t, o;
    }, t.prototype.onError = function(t) {
        this.Jh.error(t);
    }, 
    /** Returns whether a snapshot was raised. */ t.prototype.Gh = function(t) {
        this.onlineState = t;
        var e = !1;
        return this.Xh && !this.Yh && this.tl(this.Xh, t) && (this.el(this.Xh), e = !0), 
        e;
    }, t.prototype.tl = function(t, e) {
        // Always raise the first event when we're synced
        if (!t.fromCache) return !0;
        // NOTE: We consider OnlineState.Unknown as online (it should become Offline
        // or Online if we wait long enough).
                var n = "Offline" /* Offline */ !== e;
        // Don't raise the event if we're online, aren't synced yet (checked
        // above) and are waiting for a sync.
                return !(this.options.nl && n || t.docs.et() && "Offline" /* Offline */ !== e);
        // Raise data from cache if we have any documents or we are offline
        }, t.prototype.Zh = function(t) {
        // We don't need to handle includeDocumentMetadataChanges here because
        // the Metadata only changes have already been stripped out if needed.
        // At this point the only changes we will see are the ones we should
        // propagate.
        if (t.docChanges.length > 0) return !0;
        var e = this.Xh && this.Xh.hasPendingWrites !== t.hasPendingWrites;
        return !(!t.Ce && !e) && !0 === this.options.includeMetadataChanges;
        // Generally we should have hit one of the cases above, but it's possible
        // to get here if there were only metadata docChanges and they got
        // stripped out.
        }, t.prototype.el = function(t) {
        t = In.Ne(t.query, t.docs, t.De, t.fromCache), this.Yh = !0, this.Jh.next(t);
    }, t;
}();

/**
 * Returns a `LoadBundleTaskProgress` representing the progress that the loading
 * has succeeded.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ var Lu = function(t) {
    this.key = t;
}, Ru = function(t) {
    this.key = t;
}, Uu = /** @class */ function() {
    function t(t, 
    /** Documents included in the remote target */
    e) {
        this.query = t, this.cl = e, this.al = null, 
        /**
             * A flag whether the view is current with the backend. A view is considered
             * current after it has seen the current flag from the backend and did not
             * lose consistency within the watch stream (e.g. because of an existence
             * filter mismatch).
             */
        this.Be = !1, 
        /** Documents in the view but not in the remote target */
        this.ul = mn(), 
        /** Document Keys that have local changes */
        this.De = mn(), this.hl = ye(t), this.ll = new bn(this.hl);
    }
    return Object.defineProperty(t.prototype, "_l", {
        /**
         * The set of remote documents that the server has told us belongs to the target associated with
         * this view.
         */
        get: function() {
            return this.cl;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /**
     * Iterates over a set of doc changes, applies the query limit, and computes
     * what the new results should be, what the changes were, and whether we may
     * need to go back to the local cache for more results. Does not make any
     * changes to the view.
     * @param docChanges - The doc changes to apply to this view.
     * @param previousChanges - If this is being called with a refill, then start
     *        with this set of docs and changes instead of the current view.
     * @returns a new set of docs, changes, and refill flag.
     */
    t.prototype.fl = function(t, e) {
        var n = this, r = e ? e.dl : new _n, i = e ? e.ll : this.ll, o = e ? e.De : this.De, u = i, s = !1, a = ie(this.query) && i.size === this.query.limit ? i.last() : null, c = oe(this.query) && i.size === this.query.limit ? i.first() : null;
        // Drop documents out to meet limit/limitToLast requirement.
        if (t.Xt((function(t, e) {
            var h = i.get(t), f = e instanceof Pt ? e : null;
            f && (f = ve(n.query, f) ? f : null);
            var l = !!h && n.De.has(h.key), p = !!f && (f.Vt || 
            // We only consider committed mutations for documents that were
            // mutated during the lifetime of the view.
            n.De.has(f.key) && f.hasCommittedMutations), d = !1;
            // Calculate change
            h && f ? h.data().isEqual(f.data()) ? l !== p && (r.track({
                type: 3 /* Metadata */ ,
                doc: f
            }), d = !0) : n.wl(h, f) || (r.track({
                type: 2 /* Modified */ ,
                doc: f
            }), d = !0, (a && n.hl(f, a) > 0 || c && n.hl(f, c) < 0) && (
            // This doc moved from inside the limit to outside the limit.
            // That means there may be some other doc in the local cache
            // that should be included instead.
            s = !0)) : !h && f ? (r.track({
                type: 0 /* Added */ ,
                doc: f
            }), d = !0) : h && !f && (r.track({
                type: 1 /* Removed */ ,
                doc: h
            }), d = !0, (a || c) && (
            // A doc was removed from a full limit query. We'll need to
            // requery from the local cache to see if we know about some other
            // doc that should be in the results.
            s = !0)), d && (f ? (u = u.add(f), o = p ? o.add(t) : o.delete(t)) : (u = u.delete(t), 
            o = o.delete(t)));
        })), ie(this.query) || oe(this.query)) for (;u.size > this.query.limit; ) {
            var h = ie(this.query) ? u.last() : u.first();
            u = u.delete(h.key), o = o.delete(h.key), r.track({
                type: 1 /* Removed */ ,
                doc: h
            });
        }
        return {
            ll: u,
            dl: r,
            lc: s,
            De: o
        };
    }, t.prototype.wl = function(t, e) {
        // We suppress the initial change event for documents that were modified as
        // part of a write acknowledgment (e.g. when the value of a server transform
        // is applied) as Watch will send us the same document again.
        // By suppressing the event, we only raise two user visible events (one with
        // `hasPendingWrites` and the final state of the document) instead of three
        // (one with `hasPendingWrites`, the modified document with
        // `hasPendingWrites` and the final state of the document).
        return t.Vt && e.hasCommittedMutations && !e.Vt;
    }, 
    /**
     * Updates the view with the given ViewDocumentChanges and optionally updates
     * limbo docs and sync state from the provided target change.
     * @param docChanges - The set of changes to make to the view's docs.
     * @param updateLimboDocuments - Whether to update limbo documents based on
     *        this change.
     * @param targetChange - A target change to apply for computing limbo docs and
     *        sync state.
     * @returns A new ViewChange with the given docs, changes, and sync state.
     */
    // PORTING NOTE: The iOS/Android clients always compute limbo document changes.
    t.prototype.wi = function(t, e, n) {
        var r = this, i = this.ll;
        this.ll = t.ll, this.De = t.De;
        // Sort changes based on type and query comparator
        var o = t.dl.ve();
        o.sort((function(t, e) {
            return function(t, e) {
                var n = function(t) {
                    switch (t) {
                      case 0 /* Added */ :
                        return 1;

                      case 2 /* Modified */ :
                      case 3 /* Metadata */ :
                        // A metadata change is converted to a modified change at the public
                        // api layer.  Since we sort by document key and then change type,
                        // metadata and modified changes must be sorted equivalently.
                        return 2;

                      case 1 /* Removed */ :
                        return 0;

                      default:
                        return x$1();
                    }
                };
                return n(t) - n(e);
            }(t.type, e.type) || r.hl(t.doc, e.doc);
        })), this.El(n);
        var u = e ? this.Tl() : [], s = 0 === this.ul.size && this.Be ? 1 /* Synced */ : 0 /* Local */ , a = s !== this.al;
        return this.al = s, 0 !== o.length || a ? {
            snapshot: new In(this.query, t.ll, i, o, t.De, 0 /* Local */ === s, a, 
            /* excludesMetadataChanges= */ !1),
            Il: u
        } : {
            Il: u
        };
        // no changes
        }, 
    /**
     * Applies an OnlineState change to the view, potentially generating a
     * ViewChange if the view's syncState changes as a result.
     */
    t.prototype.Gh = function(t) {
        return this.Be && "Offline" /* Offline */ === t ? (
        // If we're offline, set `current` to false and then call applyChanges()
        // to refresh our syncState and generate a ViewChange as appropriate. We
        // are guaranteed to get a new TargetChange that sets `current` back to
        // true once the client is back online.
        this.Be = !1, this.wi({
            ll: this.ll,
            dl: new _n,
            De: this.De,
            lc: !1
        }, 
        /* updateLimboDocuments= */ !1)) : {
            Il: []
        };
    }, 
    /**
     * Returns whether the doc for the given key should be in limbo.
     */
    t.prototype.ml = function(t) {
        // If the remote end says it's part of this query, it's not in limbo.
        return !this.cl.has(t) && 
        // The local store doesn't think it's a result, so it shouldn't be in limbo.
        !!this.ll.has(t) && !this.ll.get(t).Vt;
    }, 
    /**
     * Updates syncedDocuments, current, and limbo docs based on the given change.
     * Returns the list of changes to which docs are in limbo.
     */
    t.prototype.El = function(t) {
        var e = this;
        t && (t.qe.forEach((function(t) {
            return e.cl = e.cl.add(t);
        })), t.Ue.forEach((function(t) {})), t.Qe.forEach((function(t) {
            return e.cl = e.cl.delete(t);
        })), this.Be = t.Be);
    }, t.prototype.Tl = function() {
        var t = this;
        // We can only determine limbo documents when we're in-sync with the server.
                if (!this.Be) return [];
        // TODO(klimt): Do this incrementally so that it's not quadratic when
        // updating many documents.
                var e = this.ul;
        this.ul = mn(), this.ll.forEach((function(e) {
            t.ml(e.key) && (t.ul = t.ul.add(e.key));
        }));
        // Diff the new limbo docs with the old limbo docs.
        var n = [];
        return e.forEach((function(e) {
            t.ul.has(e) || n.push(new Ru(e));
        })), this.ul.forEach((function(t) {
            e.has(t) || n.push(new Lu(t));
        })), n;
    }, 
    /**
     * Update the in-memory state of the current view with the state read from
     * persistence.
     *
     * We update the query view whenever a client's primary status changes:
     * - When a client transitions from primary to secondary, it can miss
     *   LocalStorage updates and its query views may temporarily not be
     *   synchronized with the state on disk.
     * - For secondary to primary transitions, the client needs to update the list
     *   of `syncedDocuments` since secondary clients update their query views
     *   based purely on synthesized RemoteEvents.
     *
     * @param queryResult.documents - The documents that match the query according
     * to the LocalStore.
     * @param queryResult.remoteKeys - The keys of the documents that match the
     * query according to the backend.
     *
     * @returns The ViewChange that resulted from this synchronization.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.Al = function(t) {
        this.cl = t.Rc, this.ul = mn();
        var e = this.fl(t.documents);
        return this.wi(e, /*updateLimboDocuments=*/ !0);
    }, 
    /**
     * Returns a view snapshot as if this query was just listened to. Contains
     * a document add for every existing document and the `fromCache` and
     * `hasPendingWrites` status of the already established view.
     */
    // PORTING NOTE: Multi-tab only.
    t.prototype.Rl = function() {
        return In.Ne(this.query, this.ll, this.De, 0 /* Local */ === this.al);
    }, t;
}(), Mu = function(
/**
     * The query itself.
     */
t, 
/**
     * The target number created by the client that is used in the watch
     * stream to identify this query.
     */
e, 
/**
     * The view is responsible for computing the final merged truth of what
     * docs are in the query. It gets notified of local and remote changes,
     * and applies the query filters and limits to determine the most correct
     * possible results.
     */
n) {
    this.query = t, this.targetId = e, this.view = n;
}, qu = function(t) {
    this.key = t, 
    /**
             * Set to true once we've received a document. This is used in
             * getRemoteKeysForTarget() and ultimately used by WatchChangeAggregator to
             * decide whether it needs to manufacture a delete event for the target once
             * the target is CURRENT.
             */
    this.Pl = !1;
}, Fu = /** @class */ function() {
    function t(t, e, n, 
    // PORTING NOTE: Manages state synchronization in multi-tab environments.
    r, i, o) {
        this.bh = t, this.yl = e, this.gl = n, this.Vl = r, this.currentUser = i, this.pl = o, 
        this.bl = {}, this.vl = new gi((function(t) {
            return pe(t);
        }), le), this.Sl = new Map, 
        /**
             * The keys of documents that are in limbo for which we haven't yet started a
             * limbo resolution query. The strings in this set are the result of calling
             * `key.path.canonicalString()` where `key` is a `DocumentKey` object.
             *
             * The `Set` type was chosen because it provides efficient lookup and removal
             * of arbitrary elements and it also maintains insertion order, providing the
             * desired queue-like FIFO semantics.
             */
        this.Dl = new Set, 
        /**
             * Keeps track of the target ID for each document that is in limbo with an
             * active target.
             */
        this.Cl = new rn(tt.H), 
        /**
             * Keeps track of the information about an active limbo resolution for each
             * active target ID that was started for the purpose of limbo resolution.
             */
        this.xl = new Map, this.Nl = new go, 
        /** Stores user completion handlers, indexed by User and BatchId. */
        this.$l = {}, 
        /** Stores user callbacks waiting for all pending writes to be acknowledged. */
        this.Fl = new Map, this.Ol = Di.Li(), this.onlineState = "Unknown" /* Unknown */ , 
        // The primary state is set to `true` or `false` immediately after Firestore
        // startup. In the interim, a client should only be considered primary if
        // `isPrimary` is true.
        this.kl = void 0;
    }
    return Object.defineProperty(t.prototype, "Ml", {
        get: function() {
            return !0 === this.kl;
        },
        enumerable: !1,
        configurable: !0
    }), t;
}();

/**
 * Initiates the new listen, resolves promise when listen enqueued to the
 * server. All the subsequent view snapshots or errors are sent to the
 * subscribed handlers. Returns the initial snapshot.
 */
function ju(t, e) {
    return __awaiter(this, void 0, void 0, (function() {
        var n, r, i, o, u, s;
        return __generator(this, (function(a) {
            switch (a.label) {
              case 0:
                return n = ys(t), (o = n.vl.get(e)) ? (
                // PORTING NOTE: With Multi-Tab Web, it is possible that a query view
                // already exists when EventManager calls us for the first time. This
                // happens when the primary tab is already listening to this query on
                // behalf of another tab and the user of the primary also starts listening
                // to the query. EventManager will not have an assigned target ID in this
                // case and calls `listen` to obtain this ID.
                r = o.targetId, n.Vl.Fa(r), i = o.view.Rl(), [ 3 /*break*/ , 4 ]) : [ 3 /*break*/ , 1 ];

              case 1:
                return [ 4 /*yield*/ , ao(n.bh, he(e)) ];

              case 2:
                return u = a.sent(), s = n.Vl.Fa(u.targetId), r = u.targetId, [ 4 /*yield*/ , zu(n, e, r, "current" === s) ];

              case 3:
                i = a.sent(), n.Ml && tu(n.yl, u), a.label = 4;

              case 4:
                return [ 2 /*return*/ , i ];
            }
        }));
    }));
}

/**
 * Registers a view for a previously unknown query and computes its initial
 * snapshot.
 */ function zu(t, e, n, r) {
    return __awaiter(this, void 0, void 0, (function() {
        var i, o, u, s, a, c;
        return __generator(this, (function(h) {
            switch (h.label) {
              case 0:
                // PORTING NOTE: On Web only, we inject the code that registers new Limbo
                // targets based on view changes. This allows us to only depend on Limbo
                // changes when user code includes queries.
                return t.Ll = function(e, n, r) {
                    return function(t, e, n, r) {
                        return __awaiter(this, void 0, void 0, (function() {
                            var i, o, u;
                            return __generator(this, (function(s) {
                                switch (s.label) {
                                  case 0:
                                    return i = e.view.fl(n), i.lc ? [ 4 /*yield*/ , ho(t.bh, e.query, 
                                    /* usePreviousResults= */ !1).then((function(t) {
                                        var n = t.documents;
                                        return e.view.fl(n, i);
                                    })) ] : [ 3 /*break*/ , 2 ];

                                  case 1:
                                    // The query has a limit and some docs were removed, so we need
                                    // to re-run the query against the local store to make sure we
                                    // didn't lose any good docs that had been past the limit.
                                    i = s.sent(), s.label = 2;

                                  case 2:
                                    return o = r && r.$e.get(e.targetId), u = e.view.wi(i, 
                                    /* updateLimboDocuments= */ t.Ml, o), [ 2 /*return*/ , (es(t, e.targetId, u.Il), 
                                    u.snapshot) ];
                                }
                            }));
                        }));
                    }(t, e, n, r);
                }, [ 4 /*yield*/ , ho(t.bh, e, 
                /* usePreviousResults= */ !0) ];

              case 1:
                return i = h.sent(), o = new Uu(e, i.Rc), u = o.fl(i.documents), s = Tn.Le(n, r && "Offline" /* Offline */ !== t.onlineState), 
                a = o.wi(u, 
                /* updateLimboDocuments= */ t.Ml, s), es(t, n, a.Il), c = new Mu(e, n, o), [ 2 /*return*/ , (t.vl.set(e, c), 
                t.Sl.has(n) ? t.Sl.get(n).push(e) : t.Sl.set(n, [ e ]), a.snapshot) ];
            }
        }));
    }));
}

/** Stops listening to the query. */ function Gu(t, e) {
    return __awaiter(this, void 0, void 0, (function() {
        var n, r, i;
        return __generator(this, (function(o) {
            switch (o.label) {
              case 0:
                return n = O$1(t), r = n.vl.get(e), (i = n.Sl.get(r.targetId)).length > 1 ? [ 2 /*return*/ , (n.Sl.set(r.targetId, i.filter((function(t) {
                    return !le(t, e);
                }))), void n.vl.delete(e)) ] : n.Ml ? (
                // We need to remove the local query target first to allow us to verify
                // whether any other client is still interested in this target.
                n.Vl.ka(r.targetId), n.Vl.Da(r.targetId) ? [ 3 /*break*/ , 2 ] : [ 4 /*yield*/ , co(n.bh, r.targetId, 
                /*keepPersistedTargetData=*/ !1).then((function() {
                    n.Vl.La(r.targetId), eu(n.yl, r.targetId), $u(n, r.targetId);
                })).catch(mi) ]) : [ 3 /*break*/ , 3 ];

              case 1:
                o.sent(), o.label = 2;

              case 2:
                return [ 3 /*break*/ , 5 ];

              case 3:
                return $u(n, r.targetId), [ 4 /*yield*/ , co(n.bh, r.targetId, 
                /*keepPersistedTargetData=*/ !0) ];

              case 4:
                o.sent(), o.label = 5;

              case 5:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Initiates the write of local mutation batch which involves adding the
 * writes to the mutation queue, notifying the remote store about new
 * mutations and raising events for any changes this write caused.
 *
 * The promise returned by this call is resolved when the above steps
 * have completed, *not* when the write was acked by the backend. The
 * userCallback is resolved once the write was acked/rejected by the
 * backend (or failed locally for any other reason).
 */ function Bu(t, e, n) {
    return __awaiter(this, void 0, void 0, (function() {
        var r, i, o, u;
        return __generator(this, (function(s) {
            switch (s.label) {
              case 0:
                r = ms(t), s.label = 1;

              case 1:
                return s.trys.push([ 1, 5, , 6 ]), [ 4 /*yield*/ , function(t, e) {
                    var n, r = O$1(t), i = K$1.now(), o = e.reduce((function(t, e) {
                        return t.add(e.key);
                    }), mn());
                    return r.persistence.runTransaction("Locally write mutations", "readwrite", (function(t) {
                        return r.Tc.Xo(t, o).next((function(o) {
                            n = o;
                            for (
                            // For non-idempotent mutations (such as `FieldValue.increment()`),
                            // we record the base state in a separate patch mutation. This is
                            // later used to guarantee consistent values and prevents flicker
                            // even if the backend sends us an update that already includes our
                            // transform.
                            var u = [], s = 0, a = e; s < a.length; s++) {
                                var c = a[s], h = je(c, n.get(c.key));
                                null != h && 
                                // NOTE: The base state should only be applied if there's some
                                // existing document to override, so use a Precondition of
                                // exists=true
                                u.push(new Qe(c.key, h, kt(h.proto.mapValue), Re.exists(!0)));
                            }
                            return r.zo.Ri(t, i, u, e);
                        }));
                    })).then((function(t) {
                        var e = t.xs(n);
                        return {
                            batchId: t.batchId,
                            ri: e
                        };
                    }));
                }(r.bh, e) ];

              case 2:
                return i = s.sent(), r.Vl.Ca(i.batchId), function(t, e, n) {
                    var r = t.$l[t.currentUser.A()];
                    r || (r = new rn(C)), r = r.zt(e, n), t.$l[t.currentUser.A()] = r;
                }(r, i.batchId, n), [ 4 /*yield*/ , is(r, i.ri) ];

              case 3:
                return s.sent(), [ 4 /*yield*/ , pu(r.yl) ];

              case 4:
                return s.sent(), [ 3 /*break*/ , 6 ];

              case 5:
                return o = s.sent(), u = Er(o, "Failed to persist write"), n.reject(u), [ 3 /*break*/ , 6 ];

              case 6:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Applies one remote event to the sync engine, notifying any views of the
 * changes, and releasing any pending mutation batches that would become
 * visible because of the snapshot version the remote event contains.
 */ function Qu(t, e) {
    return __awaiter(this, void 0, void 0, (function() {
        var n, r;
        return __generator(this, (function(i) {
            switch (i.label) {
              case 0:
                n = O$1(t), i.label = 1;

              case 1:
                return i.trys.push([ 1, 4, , 6 ]), [ 4 /*yield*/ , oo(n.bh, e) ];

              case 2:
                return r = i.sent(), 
                // Update `receivedDocument` as appropriate for any limbo targets.
                e.$e.forEach((function(t, e) {
                    var r = n.xl.get(e);
                    r && (
                    // Since this is a limbo resolution lookup, it's for a single document
                    // and it could be added, modified, or removed, but not a combination.
                    k$1(t.qe.size + t.Ue.size + t.Qe.size <= 1), t.qe.size > 0 ? r.Pl = !0 : t.Ue.size > 0 ? k$1(r.Pl) : t.Qe.size > 0 && (k$1(r.Pl), 
                    r.Pl = !1));
                })), [ 4 /*yield*/ , is(n, r, e) ];

              case 3:
                // Update `receivedDocument` as appropriate for any limbo targets.
                return i.sent(), [ 3 /*break*/ , 6 ];

              case 4:
                return [ 4 /*yield*/ , mi(i.sent()) ];

              case 5:
                return i.sent(), [ 3 /*break*/ , 6 ];

              case 6:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Applies an OnlineState change to the sync engine and notifies any views of
 * the change.
 */ function Yu(t, e, n) {
    var r = O$1(t);
    // If we are the secondary client, we explicitly ignore the remote store's
    // online state (the local client may go offline, even though the primary
    // tab remains online) and only apply the primary tab's online state from
    // SharedClientState.
        if (r.Ml && 0 /* RemoteStore */ === n || !r.Ml && 1 /* SharedClientState */ === n) {
        var i = [];
        r.vl.forEach((function(t, n) {
            var r = n.view.Gh(e);
            r.snapshot && i.push(r.snapshot);
        })), function(t, e) {
            var n = O$1(t);
            n.onlineState = e;
            var r = !1;
            n.queries.forEach((function(t, n) {
                for (var i = 0, o = n.listeners; i < o.length; i++) {
                    // Run global snapshot listeners if a consistent snapshot has been emitted.
                    o[i].Gh(e) && (r = !0);
                }
            })), r && xu(n);
        }(r.gl, e), i.length && r.bl.ah(i), r.onlineState = e, r.Ml && r.Vl.Qa(e);
    }
}

/**
 * Rejects the listen for the given targetID. This can be triggered by the
 * backend for any active target.
 *
 * @param syncEngine - The sync engine implementation.
 * @param targetId - The targetID corresponds to one previously initiated by the
 * user as part of TargetData passed to listen() on RemoteStore.
 * @param err - A description of the condition that has forced the rejection.
 * Nearly always this will be an indication that the user is no longer
 * authorized to see the data matching the target.
 */ function Hu(t, e, n) {
    return __awaiter(this, void 0, void 0, (function() {
        var r, i, o, u, s, a;
        return __generator(this, (function(c) {
            switch (c.label) {
              case 0:
                // PORTING NOTE: Multi-tab only.
                return (r = O$1(t)).Vl.Ba(e, "rejected", n), i = r.xl.get(e), (o = i && i.key) ? (u = (u = new rn(tt.H)).zt(o, new Vt(o, X$1.min())), 
                s = mn().add(o), a = new En(X$1.min(), 
                /* targetChanges= */ new Map, 
                /* targetMismatches= */ new sn(C), u, s), [ 4 /*yield*/ , Qu(r, a) ]) : [ 3 /*break*/ , 2 ];

              case 1:
                return c.sent(), 
                // Since this query failed, we won't want to manually unlisten to it.
                // We only remove it from bookkeeping after we successfully applied the
                // RemoteEvent. If `applyRemoteEvent()` throws, we want to re-listen to
                // this query when the RemoteStore restarts the Watch stream, which should
                // re-trigger the target failure.
                r.Cl = r.Cl.remove(o), r.xl.delete(e), rs(r), [ 3 /*break*/ , 4 ];

              case 2:
                return [ 4 /*yield*/ , co(r.bh, e, 
                /* keepPersistedTargetData */ !1).then((function() {
                    return $u(r, e, n);
                })).catch(mi) ];

              case 3:
                c.sent(), c.label = 4;

              case 4:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

function Ku(t, e) {
    return __awaiter(this, void 0, void 0, (function() {
        var n, r, i;
        return __generator(this, (function(o) {
            switch (o.label) {
              case 0:
                n = O$1(t), r = e.batch.batchId, o.label = 1;

              case 1:
                return o.trys.push([ 1, 4, , 6 ]), [ 4 /*yield*/ , ro(n.bh, e) ];

              case 2:
                return i = o.sent(), 
                // The local store may or may not be able to apply the write result and
                // raise events immediately (depending on whether the watcher is caught
                // up), so we raise user callbacks first so that they consistently happen
                // before listen events.
                Ju(n, r, /*error=*/ null), Zu(n, r), n.Vl.Na(r, "acknowledged"), [ 4 /*yield*/ , is(n, i) ];

              case 3:
                // The local store may or may not be able to apply the write result and
                // raise events immediately (depending on whether the watcher is caught
                // up), so we raise user callbacks first so that they consistently happen
                // before listen events.
                return o.sent(), [ 3 /*break*/ , 6 ];

              case 4:
                return [ 4 /*yield*/ , mi(o.sent()) ];

              case 5:
                return o.sent(), [ 3 /*break*/ , 6 ];

              case 6:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

function Xu(t, e, n) {
    return __awaiter(this, void 0, void 0, (function() {
        var r, i;
        return __generator(this, (function(o) {
            switch (o.label) {
              case 0:
                r = O$1(t), o.label = 1;

              case 1:
                return o.trys.push([ 1, 4, , 6 ]), [ 4 /*yield*/ , function(t, e) {
                    var n = O$1(t);
                    return n.persistence.runTransaction("Reject batch", "readwrite-primary", (function(t) {
                        var r;
                        return n.zo.Pi(t, e).next((function(e) {
                            return k$1(null !== e), r = e.keys(), n.zo.Ci(t, e);
                        })).next((function() {
                            return n.zo.$i(t);
                        })).next((function() {
                            return n.Tc.Xo(t, r);
                        }));
                    }));
                }(r.bh, e) ];

              case 2:
                return i = o.sent(), 
                // The local store may or may not be able to apply the write result and
                // raise events immediately (depending on whether the watcher is caught up),
                // so we raise user callbacks first so that they consistently happen before
                // listen events.
                Ju(r, e, n), Zu(r, e), r.Vl.Na(e, "rejected", n), [ 4 /*yield*/ , is(r, i) ];

              case 3:
                // The local store may or may not be able to apply the write result and
                // raise events immediately (depending on whether the watcher is caught up),
                // so we raise user callbacks first so that they consistently happen before
                // listen events.
                return o.sent(), [ 3 /*break*/ , 6 ];

              case 4:
                return [ 4 /*yield*/ , mi(o.sent()) ];

              case 5:
                return o.sent(), [ 3 /*break*/ , 6 ];

              case 6:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Registers a user callback that resolves when all pending mutations at the moment of calling
 * are acknowledged .
 */ function Wu(t, e) {
    return __awaiter(this, void 0, void 0, (function() {
        var n, r, i, o, u;
        return __generator(this, (function(s) {
            switch (s.label) {
              case 0:
                uu((n = O$1(t)).yl) || N$1("SyncEngine", "The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled."), 
                s.label = 1;

              case 1:
                return s.trys.push([ 1, 3, , 4 ]), [ 4 /*yield*/ , function(t) {
                    var e = O$1(t);
                    return e.persistence.runTransaction("Get highest unacknowledged batch id", "readonly", (function(t) {
                        return e.zo.Vi(t);
                    }));
                }(n.bh) ];

              case 2:
                return -1 === (r = s.sent()) ? [ 2 /*return*/ , void e.resolve() ] : ((i = n.Fl.get(r) || []).push(e), 
                n.Fl.set(r, i), [ 3 /*break*/ , 4 ]);

              case 3:
                return o = s.sent(), u = Er(o, "Initialization of waitForPendingWrites() operation failed"), 
                e.reject(u), [ 3 /*break*/ , 4 ];

              case 4:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/**
 * Triggers the callbacks that are waiting for this batch id to get acknowledged by server,
 * if there are any.
 */ function Zu(t, e) {
    (t.Fl.get(e) || []).forEach((function(t) {
        t.resolve();
    })), t.Fl.delete(e)
    /** Reject all outstanding callbacks waiting for pending writes to complete. */;
}

function Ju(t, e, n) {
    var r = O$1(t), i = r.$l[r.currentUser.A()];
    // NOTE: Mutations restored from persistence won't have callbacks, so it's
    // okay for there to be no callback for this ID.
    if (i) {
        var o = i.get(e);
        o && (n ? o.reject(n) : o.resolve(), i = i.remove(e)), r.$l[r.currentUser.A()] = i;
    }
}

function $u(t, e, n) {
    void 0 === n && (n = null), t.Vl.ka(e);
    for (var r = 0, i = t.Sl.get(e); r < i.length; r++) {
        var o = i[r];
        t.vl.delete(o), n && t.bl.Bl(o, n);
    }
    t.Sl.delete(e), t.Ml && t.Nl.Fc(e).forEach((function(e) {
        t.Nl.Fi(e) || 
        // We removed the last reference for this key
        ts(t, e);
    }));
}

function ts(t, e) {
    t.Dl.delete(e.path.rt());
    // It's possible that the target already got removed because the query failed. In that case,
    // the key won't exist in `limboTargetsByKey`. Only do the cleanup if we still have the target.
    var n = t.Cl.get(e);
    null !== n && (eu(t.yl, n), t.Cl = t.Cl.remove(e), t.xl.delete(n), rs(t));
}

function es(t, e, n) {
    for (var r = 0, i = n; r < i.length; r++) {
        var o = i[r];
        o instanceof Lu ? (t.Nl.nr(o.key, e), ns(t, o)) : o instanceof Ru ? (N$1("SyncEngine", "Document no longer in limbo: " + o.key), 
        t.Nl.ir(o.key, e), t.Nl.Fi(o.key) || 
        // We removed the last reference for this key
        ts(t, o.key)) : x$1();
    }
}

function ns(t, e) {
    var n = e.key, r = n.path.rt();
    t.Cl.get(n) || t.Dl.has(r) || (N$1("SyncEngine", "New document in limbo: " + n), t.Dl.add(r), 
    rs(t));
}

/**
 * Starts listens for documents in limbo that are enqueued for resolution,
 * subject to a maximum number of concurrent resolutions.
 *
 * Without bounding the number of concurrent resolutions, the server can fail
 * with "resource exhausted" errors which can lead to pathological client
 * behavior as seen in https://github.com/firebase/firebase-js-sdk/issues/2683.
 */ function rs(t) {
    for (;t.Dl.size > 0 && t.Cl.size < t.pl; ) {
        var e = t.Dl.values().next().value;
        t.Dl.delete(e);
        var n = new tt(Z$1.ot(e)), r = t.Ol.next();
        t.xl.set(r, new qu(n)), t.Cl = t.Cl.zt(n, r), tu(t.yl, new ge(he(re(n.path)), r, 2 /* LimboResolution */ , H$1.q));
    }
}

function is(t, e, n) {
    return __awaiter(this, void 0, void 0, (function() {
        var r, i, o, u;
        return __generator(this, (function(s) {
            switch (s.label) {
              case 0:
                return r = O$1(t), i = [], o = [], u = [], r.vl.et() ? [ 3 /*break*/ , 3 ] : (r.vl.forEach((function(t, s) {
                    u.push(r.Ll(s, e, n).then((function(t) {
                        if (t) {
                            r.Ml && r.Vl.Ba(s.targetId, t.fromCache ? "not-current" : "current"), i.push(t);
                            var e = Ji.oc(s.targetId, t);
                            o.push(e);
                        }
                    })));
                })), [ 4 /*yield*/ , Promise.all(u) ]);

              case 1:
                return s.sent(), r.bl.ah(i), [ 4 /*yield*/ , function(t, e) {
                    return __awaiter(this, void 0, void 0, (function() {
                        var n, r, i, o, u, s, a, c, h;
                        return __generator(this, (function(f) {
                            switch (f.label) {
                              case 0:
                                n = O$1(t), f.label = 1;

                              case 1:
                                return f.trys.push([ 1, 3, , 4 ]), [ 4 /*yield*/ , n.persistence.runTransaction("notifyLocalViewChanges", "readwrite", (function(t) {
                                    return lr.forEach(e, (function(e) {
                                        return lr.forEach(e.ic, (function(r) {
                                            return n.persistence.Ti.nr(t, e.targetId, r);
                                        })).next((function() {
                                            return lr.forEach(e.rc, (function(r) {
                                                return n.persistence.Ti.ir(t, e.targetId, r);
                                            }));
                                        }));
                                    }));
                                })) ];

                              case 2:
                                return f.sent(), [ 3 /*break*/ , 4 ];

                              case 3:
                                if (!mr(r = f.sent())) throw r;
                                // If `notifyLocalViewChanges` fails, we did not advance the sequence
                                // number for the documents that were included in this transaction.
                                // This might trigger them to be deleted earlier than they otherwise
                                // would have, but it should not invalidate the integrity of the data.
                                                                return N$1("LocalStore", "Failed to update sequence numbers: " + r), 
                                [ 3 /*break*/ , 4 ];

                              case 4:
                                for (i = 0, o = e; i < o.length; i++) u = o[i], s = u.targetId, u.fromCache || (a = n.fc.get(s), 
                                c = a.Ot, h = a.Lt(c), 
                                // Advance the last limbo free snapshot version
                                n.fc = n.fc.zt(s, h));
                                return [ 2 /*return*/ ];
                            }
                        }));
                    }));
                }(r.bh, o) ];

              case 2:
                s.sent(), s.label = 3;

              case 3:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

function os(t, e) {
    return __awaiter(this, void 0, void 0, (function() {
        var n, r;
        return __generator(this, (function(i) {
            switch (i.label) {
              case 0:
                return (n = O$1(t)).currentUser.isEqual(e) ? [ 3 /*break*/ , 3 ] : (N$1("SyncEngine", "User change. New user:", e.A()), 
                [ 4 /*yield*/ , no(n.bh, e) ]);

              case 1:
                return r = i.sent(), n.currentUser = e, 
                // Fails tasks waiting for pending writes requested by previous user.
                function(t, e) {
                    t.Fl.forEach((function(t) {
                        t.forEach((function(t) {
                            t.reject(new q$1(M$1.CANCELLED, "'waitForPendingWrites' promise is rejected due to a user change."));
                        }));
                    })), t.Fl.clear();
                }(n), 
                // TODO(b/114226417): Consider calling this only in the primary tab.
                n.Vl.Ua(e, r.mc, r.Ac), [ 4 /*yield*/ , is(n, r.Ic) ];

              case 2:
                i.sent(), i.label = 3;

              case 3:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

function us(t, e) {
    var n = O$1(t), r = n.xl.get(e);
    if (r && r.Pl) return mn().add(r.key);
    var i = mn(), o = n.Sl.get(e);
    if (!o) return i;
    for (var u = 0, s = o; u < s.length; u++) {
        var a = s[u], c = n.vl.get(a);
        i = i.Pe(c.view._l);
    }
    return i;
}

/**
 * Reconcile the list of synced documents in an existing view with those
 * from persistence.
 */ function ss(t, e) {
    return __awaiter(this, void 0, void 0, (function() {
        var n, r, i;
        return __generator(this, (function(o) {
            switch (o.label) {
              case 0:
                return [ 4 /*yield*/ , ho((n = O$1(t)).bh, e.query, 
                /* usePreviousResults= */ !0) ];

              case 1:
                return r = o.sent(), i = e.view.Al(r), [ 2 /*return*/ , (n.Ml && es(n, e.targetId, i.Il), 
                i) ];
            }
        }));
    }));
}

/**
 * Retrieves newly changed documents from remote document cache and raises
 * snapshots if needed.
 */
// PORTING NOTE: Multi-Tab only.
function as(t) {
    return __awaiter(this, void 0, void 0, (function() {
        var e;
        return __generator(this, (function(n) {
            return [ 2 /*return*/ , lo((e = O$1(t)).bh).then((function(t) {
                return is(e, t);
            })) ];
        }));
    }));
}

/** Applies a mutation state to an existing batch.  */
// PORTING NOTE: Multi-Tab only.
function cs(t, e, n, r) {
    return __awaiter(this, void 0, void 0, (function() {
        var i, o;
        return __generator(this, (function(u) {
            switch (u.label) {
              case 0:
                return [ 4 /*yield*/ , function(t, e) {
                    var n = O$1(t), r = O$1(n.zo);
                    return n.persistence.runTransaction("Lookup mutation documents", "readonly", (function(t) {
                        return r.yi(t, e).next((function(e) {
                            return e ? n.Tc.Xo(t, e) : lr.resolve(null);
                        }));
                    }));
                }((i = O$1(t)).bh, e) ];

              case 1:
                return null === (o = u.sent()) ? [ 3 /*break*/ , 6 ] : "pending" !== n ? [ 3 /*break*/ , 3 ] : [ 4 /*yield*/ , pu(i.yl) ];

              case 2:
                // If we are the primary client, we need to send this write to the
                // backend. Secondary clients will ignore these writes since their remote
                // connection is disabled.
                return u.sent(), [ 3 /*break*/ , 4 ];

              case 3:
                "acknowledged" === n || "rejected" === n ? (
                // NOTE: Both these methods are no-ops for batches that originated from
                // other clients.
                Ju(i, e, r || null), Zu(i, e), function(t, e) {
                    O$1(O$1(t).zo).xi(e);
                }(i.bh, e)) : x$1(), u.label = 4;

              case 4:
                return [ 4 /*yield*/ , is(i, o) ];

              case 5:
                return u.sent(), [ 3 /*break*/ , 7 ];

              case 6:
                // A throttled tab may not have seen the mutation before it was completed
                // and removed from the mutation queue, in which case we won't have cached
                // the affected documents. In this case we can safely ignore the update
                // since that means we didn't apply the mutation locally at all (if we
                // had, we would have cached the affected documents), and so we will just
                // see any resulting document changes via normal remote document updates
                // as applicable.
                N$1("SyncEngine", "Cannot apply mutation batch with id: " + e), u.label = 7;

              case 7:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/** Applies a query target change from a different tab. */
// PORTING NOTE: Multi-Tab only.
function hs(t, e) {
    return __awaiter(this, void 0, void 0, (function() {
        var n, r, i, o, u, s, a, c;
        return __generator(this, (function(h) {
            switch (h.label) {
              case 0:
                return ys(n = O$1(t)), ms(n), !0 !== e || !0 === n.kl ? [ 3 /*break*/ , 3 ] : (r = n.Vl.va(), 
                [ 4 /*yield*/ , fs(n, r.it()) ]);

              case 1:
                return i = h.sent(), n.kl = !0, [ 4 /*yield*/ , bu(n.yl, !0) ];

              case 2:
                for (h.sent(), o = 0, u = i; o < u.length; o++) s = u[o], tu(n.yl, s);
                return [ 3 /*break*/ , 7 ];

              case 3:
                return !1 !== e || !1 === n.kl ? [ 3 /*break*/ , 7 ] : (a = [], c = Promise.resolve(), 
                n.Sl.forEach((function(t, e) {
                    n.Vl.Ma(e) ? a.push(e) : c = c.then((function() {
                        return $u(n, e), co(n.bh, e, 
                        /*keepPersistedTargetData=*/ !0);
                    })), eu(n.yl, e);
                })), [ 4 /*yield*/ , c ]);

              case 4:
                return h.sent(), [ 4 /*yield*/ , fs(n, a) ];

              case 5:
                return h.sent(), 
                // PORTING NOTE: Multi-Tab only.
                function(t) {
                    var e = O$1(t);
                    e.xl.forEach((function(t, n) {
                        eu(e.yl, n);
                    })), e.Nl.Oc(), e.xl = new Map, e.Cl = new rn(tt.H);
                }(n), n.kl = !1, [ 4 /*yield*/ , bu(n.yl, !1) ];

              case 6:
                h.sent(), h.label = 7;

              case 7:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

function fs(t, e, n) {
    return __awaiter(this, void 0, void 0, (function() {
        var n, r, i, o, u, s, a, c, h, f, l, p, d, v;
        return __generator(this, (function(y) {
            switch (y.label) {
              case 0:
                n = O$1(t), r = [], i = [], o = 0, u = e, y.label = 1;

              case 1:
                return o < u.length ? (s = u[o], a = void 0, (c = n.Sl.get(s)) && 0 !== c.length ? [ 4 /*yield*/ , ao(n.bh, he(c[0])) ] : [ 3 /*break*/ , 7 ]) : [ 3 /*break*/ , 13 ];

              case 2:
                // For queries that have a local View, we fetch their current state
                // from LocalStore (as the resume token and the snapshot version
                // might have changed) and reconcile their views with the persisted
                // state (the list of syncedDocuments may have gotten out of sync).
                a = y.sent(), h = 0, f = c, y.label = 3;

              case 3:
                return h < f.length ? (l = f[h], p = n.vl.get(l), [ 4 /*yield*/ , ss(n, p) ]) : [ 3 /*break*/ , 6 ];

              case 4:
                (d = y.sent()).snapshot && i.push(d.snapshot), y.label = 5;

              case 5:
                return h++, [ 3 /*break*/ , 3 ];

              case 6:
                return [ 3 /*break*/ , 11 ];

              case 7:
                return [ 4 /*yield*/ , fo(n.bh, s) ];

              case 8:
                return v = y.sent(), [ 4 /*yield*/ , ao(n.bh, v) ];

              case 9:
                return a = y.sent(), [ 4 /*yield*/ , zu(n, ls(v), s, 
                /*current=*/ !1) ];

              case 10:
                y.sent(), y.label = 11;

              case 11:
                r.push(a), y.label = 12;

              case 12:
                return o++, [ 3 /*break*/ , 1 ];

              case 13:
                return [ 2 /*return*/ , (n.bl.ah(i), r) ];
            }
        }));
    }));
}

/**
 * Creates a `Query` object from the specified `Target`. There is no way to
 * obtain the original `Query`, so we synthesize a `Query` from the `Target`
 * object.
 *
 * The synthesized result might be different from the original `Query`, but
 * since the synthesized `Query` should return the same results as the
 * original one (only the presentation of results might differ), the potential
 * difference will not cause issues.
 */
// PORTING NOTE: Multi-Tab only.
function ls(t) {
    return ne(t.path, t.collectionGroup, t.orderBy, t.filters, t.limit, "F" /* First */ , t.startAt, t.endAt);
}

/** Returns the IDs of the clients that are currently active. */
// PORTING NOTE: Multi-Tab only.
function ps(t) {
    var e = O$1(t);
    return O$1(O$1(e.bh).persistence).Uo();
}

/** Applies a query target change from a different tab. */
// PORTING NOTE: Multi-Tab only.
function ds(t, e, n, r) {
    return __awaiter(this, void 0, void 0, (function() {
        var i, o, u;
        return __generator(this, (function(s) {
            switch (s.label) {
              case 0:
                return (i = O$1(t)).kl ? (
                // If we receive a target state notification via WebStorage, we are
                // either already secondary or another tab has taken the primary lease.
                N$1("SyncEngine", "Ignoring unexpected query state notification."), [ 3 /*break*/ , 8 ]) : [ 3 /*break*/ , 1 ];

              case 1:
                if (!i.Sl.has(e)) return [ 3 /*break*/ , 8 ];
                switch (n) {
                  case "current":
                  case "not-current":
                    return [ 3 /*break*/ , 2 ];

                  case "rejected":
                    return [ 3 /*break*/ , 5 ];
                }
                return [ 3 /*break*/ , 7 ];

              case 2:
                return [ 4 /*yield*/ , lo(i.bh) ];

              case 3:
                return o = s.sent(), u = En.Me(e, "current" === n), [ 4 /*yield*/ , is(i, o, u) ];

              case 4:
                return s.sent(), [ 3 /*break*/ , 8 ];

              case 5:
                return [ 4 /*yield*/ , co(i.bh, e, 
                /* keepPersistedTargetData */ !0) ];

              case 6:
                return s.sent(), $u(i, e, r), [ 3 /*break*/ , 8 ];

              case 7:
                x$1(), s.label = 8;

              case 8:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

/** Adds or removes Watch targets for queries from different tabs. */ function vs(t, e, n) {
    return __awaiter(this, void 0, void 0, (function() {
        var r, i, o, u, s, a, c, h, f, l;
        return __generator(this, (function(p) {
            switch (p.label) {
              case 0:
                if (!(r = ys(t)).kl) return [ 3 /*break*/ , 10 ];
                i = 0, o = e, p.label = 1;

              case 1:
                return i < o.length ? (u = o[i], r.Sl.has(u) ? (
                // A target might have been added in a previous attempt
                N$1("SyncEngine", "Adding an already active target " + u), [ 3 /*break*/ , 5 ]) : [ 4 /*yield*/ , fo(r.bh, u) ]) : [ 3 /*break*/ , 6 ];

              case 2:
                return s = p.sent(), [ 4 /*yield*/ , ao(r.bh, s) ];

              case 3:
                return a = p.sent(), [ 4 /*yield*/ , zu(r, ls(s), a.targetId, 
                /*current=*/ !1) ];

              case 4:
                p.sent(), tu(r.yl, a), p.label = 5;

              case 5:
                return i++, [ 3 /*break*/ , 1 ];

              case 6:
                c = function(t) {
                    return __generator(this, (function(e) {
                        switch (e.label) {
                          case 0:
                            return r.Sl.has(t) ? [ 4 /*yield*/ , co(r.bh, t, 
                            /* keepPersistedTargetData */ !1).then((function() {
                                eu(r.yl, t), $u(r, t);
                            })).catch(mi) ] : [ 3 /*break*/ , 2 ];

                            // Release queries that are still active.
                                                      case 1:
                            // Release queries that are still active.
                            e.sent(), e.label = 2;

                          case 2:
                            return [ 2 /*return*/ ];
                        }
                    }));
                }, h = 0, f = n, p.label = 7;

              case 7:
                return h < f.length ? (l = f[h], [ 5 /*yield**/ , c(l) ]) : [ 3 /*break*/ , 10 ];

              case 8:
                p.sent(), p.label = 9;

              case 9:
                return h++, [ 3 /*break*/ , 7 ];

              case 10:
                return [ 2 /*return*/ ];
            }
        }));
    }));
}

function ys(t) {
    var e = O$1(t);
    return e.yl.Dh.Lh = Qu.bind(null, e), e.yl.Dh.vn = us.bind(null, e), e.yl.Dh.Mh = Hu.bind(null, e), 
    e.bl.ah = Du.bind(null, e.gl), e.bl.Bl = Su.bind(null, e.gl), e;
}

function ms(t) {
    var e = O$1(t);
    return e.yl.Dh.Bh = Ku.bind(null, e), e.yl.Dh.qh = Xu.bind(null, e), e
    /**
 * Loads a Firestore bundle into the SDK. The returned promise resolves when
 * the bundle finished loading.
 *
 * @param syncEngine - SyncEngine to use.
 * @param bundleReader - Bundle to load into the SDK.
 * @param task - LoadBundleTask used to update the loading progress to public API.
 */;
}

var ws = /** @class */ function() {
    function t() {
        this.synchronizeTabs = !1;
    }
    return t.prototype.initialize = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return this.Qt = Bo(t.yu.t), this.Vl = this.Wl(t), this.persistence = this.jl(t), 
                    [ 4 /*yield*/ , this.persistence.start() ];

                  case 1:
                    return e.sent(), this.Gl = this.zl(t), this.bh = this.Hl(t), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.zl = function(t) {
        return null;
    }, t.prototype.Hl = function(t) {
        return eo(this.persistence, new $i, t.Jl, this.Qt);
    }, t.prototype.jl = function(t) {
        return new To(Ao.ia, this.Qt);
    }, t.prototype.Wl = function(t) {
        return new Ro;
    }, t.prototype.terminate = function() {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return this.Gl && this.Gl.stop(), [ 4 /*yield*/ , this.Vl.ko() ];

                  case 1:
                    return t.sent(), [ 4 /*yield*/ , this.persistence.ko() ];

                  case 2:
                    return t.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, t;
}(), bs = /** @class */ function(t) {
    function e(e, n, r) {
        var i = this;
        return (i = t.call(this) || this).Yl = e, i.cacheSizeBytes = n, i.forceOwnership = r, 
        i.synchronizeTabs = !1, i;
    }
    return __extends$1(e, t), e.prototype.initialize = function(e) {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    return [ 4 /*yield*/ , t.prototype.initialize.call(this, e) ];

                  case 1:
                    return n.sent(), [ 4 /*yield*/ , po(this.bh) ];

                  case 2:
                    return n.sent(), [ 4 /*yield*/ , this.Yl.initialize(this, e) ];

                  case 3:
                    // Enqueue writes from a previous session
                    return n.sent(), [ 4 /*yield*/ , ms(this.Yl._a) ];

                  case 4:
                    // Enqueue writes from a previous session
                    return n.sent(), [ 4 /*yield*/ , pu(this.Yl.yl) ];

                  case 5:
                    return n.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, e.prototype.Hl = function(t) {
        return eo(this.persistence, new $i, t.Jl, this.Qt);
    }, e.prototype.zl = function(t) {
        var e = this.persistence.Ti.lr;
        return new Ci(e, t._s);
    }, e.prototype.jl = function(t) {
        var e = Xi(t.yu.t, t.yu.persistenceKey), n = void 0 !== this.cacheSizeBytes ? yi.Ys(this.cacheSizeBytes) : yi.ti;
        return new Yi(this.synchronizeTabs, e, t.clientId, n, t._s, zo(), Go(), this.Qt, this.Vl, !!this.forceOwnership);
    }, e.prototype.Wl = function(t) {
        return new Ro;
    }, e;
}(ws), _s = /** @class */ function(t) {
    function e(e, n) {
        var r = this;
        return (r = t.call(this, e, n, /* forceOwnership= */ !1) || this).Yl = e, r.cacheSizeBytes = n, 
        r.synchronizeTabs = !0, r;
    }
    return __extends$1(e, t), e.prototype.initialize = function(e) {
        return __awaiter(this, void 0, void 0, (function() {
            var n, r = this;
            return __generator(this, (function(i) {
                switch (i.label) {
                  case 0:
                    return [ 4 /*yield*/ , t.prototype.initialize.call(this, e) ];

                  case 1:
                    return i.sent(), n = this.Yl._a, this.Vl instanceof Lo ? (this.Vl._a = {
                        eu: cs.bind(null, n),
                        nu: ds.bind(null, n),
                        su: vs.bind(null, n),
                        Uo: ps.bind(null, n),
                        tu: as.bind(null, n)
                    }, [ 4 /*yield*/ , this.Vl.start() ]) : [ 3 /*break*/ , 3 ];

                  case 2:
                    i.sent(), i.label = 3;

                  case 3:
                    // NOTE: This will immediately call the listener, so we make sure to
                    // set it after localStore / remoteStore are started.
                    return [ 4 /*yield*/ , this.persistence.Ro((function(t) {
                        return __awaiter(r, void 0, void 0, (function() {
                            return __generator(this, (function(e) {
                                switch (e.label) {
                                  case 0:
                                    return [ 4 /*yield*/ , hs(this.Yl._a, t) ];

                                  case 1:
                                    return e.sent(), this.Gl && (t && !this.Gl.Er ? this.Gl.start(this.bh) : t || this.Gl.stop()), 
                                    [ 2 /*return*/ ];
                                }
                            }));
                        }));
                    })) ];

                  case 4:
                    // NOTE: This will immediately call the listener, so we make sure to
                    // set it after localStore / remoteStore are started.
                    return i.sent(), [ 2 /*return*/ ];
                }
            }));
        }));
    }, e.prototype.Wl = function(t) {
        var e = zo();
        if (!Lo.Kn(e)) throw new q$1(M$1.UNIMPLEMENTED, "IndexedDB persistence is only available on platforms that support LocalStorage.");
        var n = Xi(t.yu.t, t.yu.persistenceKey);
        return new Lo(e, t._s, n, t.clientId, t.Jl);
    }, e;
}(bs), Is = /** @class */ function() {
    function t() {}
    return t.prototype.initialize = function(t, e) {
        return __awaiter(this, void 0, void 0, (function() {
            var n = this;
            return __generator(this, (function(r) {
                switch (r.label) {
                  case 0:
                    return this.bh ? [ 3 /*break*/ , 2 ] : (this.bh = t.bh, this.Vl = t.Vl, this.Sh = this.Xl(e), 
                    this.yl = this.Zl(e), this.gl = this.t_(e), this._a = this.e_(e, 
                    /* startAsPrimary=*/ !t.synchronizeTabs), this.Vl.fa = function(t) {
                        return Yu(n._a, t, 1 /* SharedClientState */);
                    }, this.yl.Dh.n_ = os.bind(null, this._a), [ 4 /*yield*/ , bu(this.yl, this._a.Ml) ]);

                  case 1:
                    r.sent(), r.label = 2;

                  case 2:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.t_ = function(t) {
        return new Tu;
    }, t.prototype.Xl = function(t) {
        var e, n = Bo(t.yu.t), r = (e = t.yu, new jo(e));
        /** Return the Platform-specific connectivity monitor. */ return function(t, e, n) {
            return new Xo(t, e, n);
        }(t.credentials, r, n);
    }, t.prototype.Zl = function(t) {
        var e, n, r, i, o, u = this;
        return e = this.bh, n = this.Sh, r = t._s, i = function(t) {
            return Yu(u._a, t, 0 /* RemoteStore */);
        }, o = Mo.Kn() ? new Mo : new Uo, new Zo(e, n, r, i, o);
    }, t.prototype.e_ = function(t, e) {
        return function(t, e, n, 
        // PORTING NOTE: Manages state synchronization in multi-tab environments.
        r, i, o, u) {
            var s = new Fu(t, e, n, r, i, o);
            return u && (s.kl = !0), s;
        }(this.bh, this.yl, this.gl, this.Vl, t.Jl, t.pl, e);
    }, t.prototype.terminate = function() {
        return function(t) {
            return __awaiter(this, void 0, void 0, (function() {
                var e;
                return __generator(this, (function(n) {
                    switch (n.label) {
                      case 0:
                        return e = O$1(t), N$1("RemoteStore", "RemoteStore shutting down."), e.Nh.add(5 /* Shutdown */), 
                        [ 4 /*yield*/ , $o(e) ];

                      case 1:
                        return n.sent(), e.Fh.ko(), 
                        // Set the OnlineState to Unknown (rather than Offline) to avoid potentially
                        // triggering spurious listener events with cached data, etc.
                        e.Oh.set("Unknown" /* Unknown */), [ 2 /*return*/ ];
                    }
                }));
            }));
        }(this.yl);
    }, t;
}();

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * On web, a `ReadableStream` is wrapped around by a `ByteStreamReader`.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/*
 * A wrapper implementation of Observer<T> that will dispatch events
 * asynchronously. To allow immediate silencing, a mute call is added which
 * causes events scheduled to no longer be raised.
 */ var Ts = /** @class */ function() {
    function t(t) {
        this.observer = t, 
        /**
             * When set to true, will not raise future events. Necessary to deal with
             * async detachment of listener.
             */
        this.muted = !1;
    }
    return t.prototype.next = function(t) {
        this.observer.next && this.s_(this.observer.next, t);
    }, t.prototype.error = function(t) {
        this.observer.error ? this.s_(this.observer.error, t) : console.error("Uncaught Error in snapshot listener:", t);
    }, t.prototype.i_ = function() {
        this.muted = !0;
    }, t.prototype.s_ = function(t, e) {
        var n = this;
        this.muted || setTimeout((function() {
            n.muted || t(e);
        }), 0);
    }, t;
}(), As = /** @class */ function() {
    /**
     * Creates a FieldPath from the provided field names. If more than one field
     * name is provided, the path will point to a nested field in a document.
     *
     * @param fieldNames - A list of field names.
     */
    function t() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        for (var n = 0; n < t.length; ++n) if (0 === t[n].length) throw new q$1(M$1.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
        this.f_ = new $(t);
    }
    /**
     * Returns true if this `FieldPath` is equal to the provided one.
     *
     * @param other - The `FieldPath` to compare against.
     * @returns true if this `FieldPath` is equal to the provided one.
     */    return t.prototype.isEqual = function(t) {
        return this.f_.isEqual(t.f_);
    }, t;
}(), Ds = 
/**
     * @param _methodName - The public API endpoint that returns this class.
     */
function(t) {
    this._methodName = t;
}, Ss = function(t) {
    this.d_ = t;
};

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A class representing a bundle.
 *
 * Takes a bundle stream or buffer, and presents abstractions to read bundled
 * elements out of the underlying content.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function xs(t, e, n) {
    if (!n) throw new q$1(M$1.INVALID_ARGUMENT, "Function " + t + "() cannot be called with an empty " + e + ".");
}

function ks(t, e) {
    if (void 0 === e) return {
        merge: !1
    };
    if (void 0 !== e.mergeFields && void 0 !== e.merge) throw new q$1(M$1.INVALID_ARGUMENT, "Invalid options passed to function " + t + '(): You cannot specify both "merge" and "mergeFields".');
    return e;
}

/**
 * Validates that two boolean options are not set at the same time.
 */ function Os(t, e, n, r) {
    if (!0 === e && !0 === r) throw new q$1(M$1.INVALID_ARGUMENT, t + " and " + n + " cannot be used together.");
}

/**
 * Validates that `path` refers to a document (indicated by the fact it contains
 * an even numbers of segments).
 */ function Ps(t) {
    if (!tt.wt(t)) throw new q$1(M$1.INVALID_ARGUMENT, "Invalid document reference. Document references must have an even number of segments, but " + t + " has " + t.length + ".");
}

/**
 * Validates that `path` refers to a collection (indicated by the fact it
 * contains an odd numbers of segments).
 */ function Vs(t) {
    if (tt.wt(t)) throw new q$1(M$1.INVALID_ARGUMENT, "Invalid collection reference. Collection references must have an odd number of segments, but " + t + " has " + t.length + ".");
}

/**
 * Returns true if it's a non-null object without a custom prototype
 * (i.e. excludes Array, Date, etc.).
 */
/** Returns a string describing the type / value of the provided input. */ function Cs(t) {
    if (void 0 === t) return "undefined";
    if (null === t) return "null";
    if ("string" == typeof t) return t.length > 20 && (t = t.substring(0, 20) + "..."), 
    JSON.stringify(t);
    if ("number" == typeof t || "boolean" == typeof t) return "" + t;
    if ("object" == typeof t) {
        if (t instanceof Array) return "an array";
        var e = 
        /** Hacky method to try to get the constructor name for an object. */
        function(t) {
            if (t.constructor) {
                var e = /function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString());
                if (e && e.length > 1) return e[1];
            }
            return null;
        }(t);
        return e ? "a custom " + e + " object" : "an object";
    }
    return "function" == typeof t ? "a function" : x$1();
}

function Ls(t, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
e) {
    if ("_delegate" in t && (
    // Unwrap Compat types
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    t = t.d_), !(t instanceof e)) {
        if (e.name === t.constructor.name) throw new q$1(M$1.INVALID_ARGUMENT, "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");
        var n = Cs(t);
        throw new q$1(M$1.INVALID_ARGUMENT, "Expected type '" + e.name + "', but it was: " + n);
    }
    return t;
}

function Rs(t, e) {
    if (e <= 0) throw new q$1(M$1.INVALID_ARGUMENT, "Function " + t + "() requires a positive number, but it was: " + e + ".");
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// settings() defaults:
/**
 * A concrete type describing all the values that can be applied via a
 * user-supplied firestore.Settings object. This is a separate type so that
 * defaults can be supplied and the value can be checked for equality.
 */ var Us = /** @class */ function() {
    function t(t) {
        var e;
        if (void 0 === t.host) {
            if (void 0 !== t.ssl) throw new q$1(M$1.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
            this.host = "firestore.googleapis.com", this.ssl = !0;
        } else this.host = t.host, this.ssl = null === (e = t.ssl) || void 0 === e || e;
        if (this.credentials = t.credentials, this.ignoreUndefinedProperties = !!t.ignoreUndefinedProperties, 
        void 0 === t.cacheSizeBytes) this.cacheSizeBytes = 41943040; else {
            if (-1 !== t.cacheSizeBytes && t.cacheSizeBytes < 1048576) throw new q$1(M$1.INVALID_ARGUMENT, "cacheSizeBytes must be at least 1048576");
            this.cacheSizeBytes = t.cacheSizeBytes;
        }
        this.experimentalForceLongPolling = !!t.experimentalForceLongPolling, this.experimentalAutoDetectLongPolling = !!t.experimentalAutoDetectLongPolling, 
        Os("experimentalForceLongPolling", t.experimentalForceLongPolling, "experimentalAutoDetectLongPolling", t.experimentalAutoDetectLongPolling);
    }
    return t.prototype.isEqual = function(t) {
        return this.host === t.host && this.ssl === t.ssl && this.credentials === t.credentials && this.cacheSizeBytes === t.cacheSizeBytes && this.experimentalForceLongPolling === t.experimentalForceLongPolling && this.experimentalAutoDetectLongPolling === t.experimentalAutoDetectLongPolling && this.ignoreUndefinedProperties === t.ignoreUndefinedProperties;
    }, t;
}(), Ms = new Map, qs = /** @class */ function() {
    /** @hideconstructor */
    function t(t, e) {
        this.w_ = "(lite)", this.E_ = new Us({}), this.T_ = !1, t instanceof I$1 ? (this.I_ = t, 
        this.m_ = new G$1) : (this.A_ = t, this.I_ = function(t) {
            if (!Object.prototype.hasOwnProperty.apply(t.options, [ "projectId" ])) throw new q$1(M$1.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.');
            return new I$1(t.options.projectId);
        }(t), this.m_ = new B(e));
    }
    return Object.defineProperty(t.prototype, "app", {
        /**
         * The {@link FirebaseApp} associated with this `Firestore` service
         * instance.
         */
        get: function() {
            if (!this.A_) throw new q$1(M$1.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
            return this.A_;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "R_", {
        get: function() {
            return this.T_;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "P_", {
        get: function() {
            return void 0 !== this.y_;
        },
        enumerable: !1,
        configurable: !0
    }), t.prototype.g_ = function(t) {
        if (this.T_) throw new q$1(M$1.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");
        this.E_ = new Us(t), void 0 !== t.credentials && (this.m_ = function(t) {
            if (!t) return new G$1;
            switch (t.type) {
              case "gapi":
                var e = t.client;
                // Make sure this really is a Gapi client.
                                return k$1(!("object" != typeof e || null === e || !e.auth || !e.auth.getAuthHeaderValueForFirstParty)), 
                new Y$1(e, t.sessionIndex || "0");

              case "provider":
                return t.client;

              default:
                throw new q$1(M$1.INVALID_ARGUMENT, "makeCredentialsProvider failed due to invalid credential type");
            }
        }(t.credentials));
    }, t.prototype.V_ = function() {
        return this.E_;
    }, t.prototype.p_ = function() {
        return this.T_ = !0, this.E_;
    }, t.prototype._delete = function() {
        return this.y_ || (this.y_ = this.b_()), this.y_;
    }, t.prototype.toJSON = function() {
        return {
            app: this.A_,
            t: this.I_,
            settings: this.E_
        };
    }, 
    /**
     * Terminates all components used by this client. Subclasses can override
     * this method to clean up their own dependencies, but must also call this
     * method.
     *
     * Only ever called once.
     */
    t.prototype.b_ = function() {
        /**
 * Removes all components associated with the provided instance. Must be called
 * when the `Firestore` instance is terminated.
 */
        return t = this, (e = Ms.get(t)) && (N$1("ComponentProvider", "Removing Datastore"), 
        Ms.delete(t), e.terminate()), Promise.resolve();
        var t, e;
    }, t;
}(), Fs = /** @class */ function() {
    /** @hideconstructor */
    function t(t, e, n) {
        this.v_ = e, this.S_ = n, 
        /** The type of this Firestore reference. */
        this.type = "document", this.firestore = t;
    }
    return Object.defineProperty(t.prototype, "D_", {
        get: function() {
            return this.S_.path;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "id", {
        /**
         * The document's identifier within its collection.
         */
        get: function() {
            return this.S_.path.tt();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "path", {
        /**
         * A string representing the path of the referenced document (relative
         * to the root of the database).
         */
        get: function() {
            return this.S_.path.rt();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "parent", {
        /**
         * The collection this `DocumentReference` belongs to.
         */
        get: function() {
            return new zs(this.firestore, this.v_, this.S_.path.X());
        },
        enumerable: !1,
        configurable: !0
    }), 
    /**
     * Applies a custom data converter to this `DocumentReference`, allowing you
     * to use your own custom model objects with Firestore. When you call {@link
     * setDoc}, {@link getDoc}, etc. with the returned `DocumentReference`
     * instance, the provided converter will convert between Firestore data and
     * your custom type `U`.
     *
     * @param converter - Converts objects to and from Firestore.
     * @returns A `DocumentReference<U>` that uses the provided converter.
     */
    t.prototype.withConverter = function(e) {
        return new t(this.firestore, e, this.S_);
    }, t;
}(), js = /** @class */ function() {
    // This is the lite version of the Query class in the main SDK.
    /** @hideconstructor protected */
    function t(t, e, n) {
        this.v_ = e, this.C_ = n, 
        /** The type of this Firestore reference. */
        this.type = "query", this.firestore = t
        /**
     * Applies a custom data converter to this query, allowing you to use your own
     * custom model objects with Firestore. When you call {@link getDocs} with
     * the returned query, the provided converter will convert between Firestore
     * data and your custom type `U`.
     *
     * @param converter - Converts objects to and from Firestore.
     * @returns A `Query<U>` that uses the provided converter.
     */;
    }
    return t.prototype.withConverter = function(e) {
        return new t(this.firestore, e, this.C_);
    }, t;
}(), zs = /** @class */ function(t) {
    /** @hideconstructor */
    function e(e, n, r) {
        var i = this;
        return (i = t.call(this, e, n, re(r)) || this).firestore = e, i.D_ = r, i.type = "collection", 
        i;
    }
    return __extends$1(e, t), Object.defineProperty(e.prototype, "id", {
        /** The collection's identifier. */ get: function() {
            return this.C_.path.tt();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "path", {
        /**
         * A string representing the path of the referenced collection (relative
         * to the root of the database).
         */
        get: function() {
            return this.C_.path.rt();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "parent", {
        /**
         * A reference to the containing `DocumentReference` if this is a
         * subcollection. If this isn't a subcollection, the reference is null.
         */
        get: function() {
            var t = this.D_.X();
            return t.et() ? null : new Fs(this.firestore, 
            /* converter= */ null, new tt(t));
        },
        enumerable: !1,
        configurable: !0
    }), 
    /**
     * Applies a custom data converter to this CollectionReference, allowing you
     * to use your own custom model objects with Firestore. When you call {@link
     * addDoc} with the returned `CollectionReference` instance, the provided
     * converter will convert between Firestore data and your custom type `U`.
     *
     * @param converter - Converts objects to and from Firestore.
     * @returns A `CollectionReference<U>` that uses the provided converter.
     */
    e.prototype.withConverter = function(t) {
        return new e(this.firestore, t, this.D_);
    }, e;
}(js);

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Gs(t, e) {
    for (var n, r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
    if (t instanceof Ss && (t = t.d_), xs("collection", "path", e), t instanceof qs) return Vs(n = Z$1.ot.apply(Z$1, __spreadArrays([ e ], r))), 
    new zs(t, /* converter= */ null, n);
    if (!(t instanceof Fs || t instanceof zs)) throw new q$1(M$1.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
    return Vs(n = Z$1.ot.apply(Z$1, __spreadArrays([ t.path ], r)).child(Z$1.ot(e))), new zs(t.firestore, 
    /* converter= */ null, n);
}

// TODO(firestorelite): Consider using ErrorFactory -
// https://github.com/firebase/firebase-js-sdk/blob/0131e1f/packages/util/src/errors.ts#L106
/**
 * Creates and returns a new `Query` instance that includes all documents in the
 * database that are contained in a collection or subcollection with the
 * given `collectionId`.
 *
 * @param firestore - A reference to the root Firestore instance.
 * @param collectionId - Identifies the collections to query over. Every
 * collection or subcollection with this ID as the last segment of its path
 * will be included. Cannot contain a slash.
 * @returns The created `Query`.
 */ function Bs(t, e) {
    for (var n, r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
    if (t instanceof Ss && (t = t.d_), 
    // We allow omission of 'pathString' but explicitly prohibit passing in both
    // 'undefined' and 'null'.
    1 === arguments.length && (e = V$1.u()), xs("doc", "path", e), t instanceof qs) return Ps(n = Z$1.ot.apply(Z$1, __spreadArrays([ e ], r))), 
    new Fs(t, 
    /* converter= */ null, new tt(n));
    if (!(t instanceof Fs || t instanceof zs)) throw new q$1(M$1.INVALID_ARGUMENT, "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");
    return Ps(n = t.D_.child(Z$1.ot.apply(Z$1, __spreadArrays([ e ], r)))), new Fs(t.firestore, t instanceof zs ? t.v_ : null, new tt(n));
}

/**
 * Returns true if the provided references are equal.
 *
 * @param left - A reference to compare.
 * @param right - A reference to compare.
 * @returns true if the references point to the same location in the same
 * Firestore database.
 */ function Qs(t, e) {
    return t instanceof Ss && (t = t.d_), e instanceof Ss && (e = e.d_), (t instanceof Fs || t instanceof zs) && (e instanceof Fs || e instanceof zs) && t.firestore === e.firestore && t.path === e.path && t.v_ === e.v_
    /**
 * Returns true if the provided queries point to the same collection and apply
 * the same constraints.
 *
 * @param left - A `Query` to compare.
 * @param right - A `Query` to compare.
 * @returns true if the references point to the same location in the same
 * Firestore database.
 */;
}

function Ys(t, e) {
    return t instanceof Ss && (t = t.d_), e instanceof Ss && (e = e.d_), t instanceof js && e instanceof js && t.firestore === e.firestore && le(t.C_, e.C_) && t.v_ === e.v_
    /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
    /**
 * An immutable object representing a geographic location in Firestore. The
 * location is represented as latitude/longitude pair.
 *
 * Latitude values are in the range of [-90, 90].
 * Longitude values are in the range of [-180, 180].
 */;
}

var Hs = /** @class */ function() {
    /**
     * Creates a new immutable `GeoPoint` object with the provided latitude and
     * longitude values.
     * @param latitude - The latitude as number between -90 and 90.
     * @param longitude - The longitude as number between -180 and 180.
     */
    function t(t, e) {
        if (!isFinite(t) || t < -90 || t > 90) throw new q$1(M$1.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + t);
        if (!isFinite(e) || e < -180 || e > 180) throw new q$1(M$1.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + e);
        this.x_ = t, this.N_ = e;
    }
    return Object.defineProperty(t.prototype, "latitude", {
        /**
         * The latitude of this `GeoPoint` instance.
         */
        get: function() {
            return this.x_;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "longitude", {
        /**
         * The longitude of this `GeoPoint` instance.
         */
        get: function() {
            return this.N_;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /**
     * Returns true if this `GeoPoint` is equal to the provided one.
     *
     * @param other - The `GeoPoint` to compare against.
     * @returns true if this `GeoPoint` is equal to the provided one.
     */
    t.prototype.isEqual = function(t) {
        return this.x_ === t.x_ && this.N_ === t.N_;
    }, t.prototype.toJSON = function() {
        return {
            latitude: this.x_,
            longitude: this.N_
        };
    }, 
    /**
     * Actually private to JS consumers of our API, so this function is prefixed
     * with an underscore.
     */
    t.prototype.U = function(t) {
        return C(this.x_, t.x_) || C(this.N_, t.N_);
    }, t;
}(), Ks = /^__.*__$/, Xs = /** @class */ function() {
    function t(t, e, n) {
        this.data = t, this.Gt = e, this.fieldTransforms = n;
    }
    return t.prototype.F_ = function(t, e) {
        return null !== this.Gt ? new Qe(t, this.data, this.Gt, e, this.fieldTransforms) : new Be(t, this.data, e, this.fieldTransforms);
    }, t;
}(), Ws = /** @class */ function() {
    function t(t, 
    // The fieldMask does not include document transforms.
    e, n) {
        this.data = t, this.Gt = e, this.fieldTransforms = n;
    }
    return t.prototype.F_ = function(t, e) {
        return new Qe(t, this.data, this.Gt, e, this.fieldTransforms);
    }, t;
}();

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Zs(t) {
    switch (t) {
      case 0 /* Set */ :
 // fall through
              case 2 /* MergeSet */ :
 // fall through
              case 1 /* Update */ :
        return !0;

      case 3 /* Argument */ :
      case 4 /* ArrayArgument */ :
        return !1;

      default:
        throw x$1();
    }
}

/** A "context" object passed around while parsing user data. */ var Js = /** @class */ function() {
    /**
     * Initializes a ParseContext with the given source and path.
     *
     * @param settings - The settings for the parser.
     * @param databaseId - The database ID of the Firestore instance.
     * @param serializer - The serializer to use to generate the Value proto.
     * @param ignoreUndefinedProperties - Whether to ignore undefined properties
     * rather than throw.
     * @param fieldTransforms - A mutable list of field transforms encountered
     * while parsing the data.
     * @param fieldMask - A mutable list of field paths encountered while parsing
     * the data.
     *
     * TODO(b/34871131): We don't support array paths right now, so path can be
     * null to indicate the context represents any location within an array (in
     * which case certain features will not work and errors will be somewhat
     * compromised).
     */
    function t(t, e, n, r, i, o) {
        this.settings = t, this.t = e, this.Qt = n, this.ignoreUndefinedProperties = r, 
        // Minor hack: If fieldTransforms is undefined, we assume this is an
        // external call and we need to validate the entire path.
        void 0 === i && this.O_(), this.fieldTransforms = i || [], this.Gt = o || [];
    }
    return Object.defineProperty(t.prototype, "path", {
        get: function() {
            return this.settings.path;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "k_", {
        get: function() {
            return this.settings.k_;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /** Returns a new context with the specified settings overwritten. */ t.prototype.M_ = function(e) {
        return new t(Object.assign(Object.assign({}, this.settings), e), this.t, this.Qt, this.ignoreUndefinedProperties, this.fieldTransforms, this.Gt);
    }, t.prototype.L_ = function(t) {
        var e, n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t), r = this.M_({
            path: n,
            B_: !1
        });
        return r.q_(t), r;
    }, t.prototype.U_ = function(t) {
        var e, n = null === (e = this.path) || void 0 === e ? void 0 : e.child(t), r = this.M_({
            path: n,
            B_: !1
        });
        return r.O_(), r;
    }, t.prototype.Q_ = function(t) {
        // TODO(b/34871131): We don't support array paths right now; so make path
        // undefined.
        return this.M_({
            path: void 0,
            B_: !0
        });
    }, t.prototype.K_ = function(t) {
        return ga(t, this.settings.methodName, this.settings.W_ || !1, this.path, this.settings.j_);
    }, 
    /** Returns 'true' if 'fieldPath' was traversed when creating this context. */ t.prototype.contains = function(t) {
        return void 0 !== this.Gt.find((function(e) {
            return t.nt(e);
        })) || void 0 !== this.fieldTransforms.find((function(e) {
            return t.nt(e.field);
        }));
    }, t.prototype.O_ = function() {
        // TODO(b/34871131): Remove null check once we have proper paths for fields
        // within arrays.
        if (this.path) for (var t = 0; t < this.path.length; t++) this.q_(this.path.get(t));
    }, t.prototype.q_ = function(t) {
        if (0 === t.length) throw this.K_("Document fields must not be empty");
        if (Zs(this.k_) && Ks.test(t)) throw this.K_('Document fields cannot begin and end with "__"');
    }, t;
}(), $s = /** @class */ function() {
    function t(t, e, n) {
        this.t = t, this.ignoreUndefinedProperties = e, this.Qt = n || Bo(t)
        /** Creates a new top-level parse context. */;
    }
    return t.prototype.G_ = function(t, e, n, r) {
        return void 0 === r && (r = !1), new Js({
            k_: t,
            methodName: e,
            j_: n,
            path: $.ct(),
            B_: !1,
            W_: r
        }, this.t, this.Qt, this.ignoreUndefinedProperties);
    }, t;
}();

/**
 * Helper for parsing raw user input (provided via the API) into internal model
 * classes.
 */ function ta$1(t) {
    var e = t.p_(), n = Bo(t.I_);
    return new $s(t.I_, !!e.ignoreUndefinedProperties, n);
}

/** Parse document data from a set() call. */ function ea$1(t, e, n, r, i, o) {
    void 0 === o && (o = {});
    var u = t.G_(o.merge || o.mergeFields ? 2 /* MergeSet */ : 0 /* Set */ , e, n, i);
    da$1("Data must be an object, but it was:", u, r);
    var s, a, c = la(r, u);
    if (o.merge) s = new it(u.Gt), a = u.fieldTransforms; else if (o.mergeFields) {
        for (var h = [], f = 0, l = o.mergeFields; f < l.length; f++) {
            var p = va$1(e, l[f], n);
            if (!u.contains(p)) throw new q$1(M$1.INVALID_ARGUMENT, "Field '" + p + "' is specified in your field mask but missing from your input data.");
            wa$1(h, p) || h.push(p);
        }
        s = new it(h), a = u.fieldTransforms.filter((function(t) {
            return s.Tt(t.field);
        }));
    } else s = null, a = u.fieldTransforms;
    return new Xs(new St(c), s, a);
}

var na$1 = /** @class */ function(t) {
    function e() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return __extends$1(e, t), e.prototype.z_ = function(t) {
        if (2 /* MergeSet */ !== t.k_) throw 1 /* Update */ === t.k_ ? t.K_(this._methodName + "() can only appear at the top level of your update data") : t.K_(this._methodName + "() cannot be used with set() unless you pass {merge:true}");
        // No transform to add for a delete, but we need to add it to our
        // fieldMask so it gets deleted.
                return t.Gt.push(t.path), null;
    }, e.prototype.isEqual = function(t) {
        return t instanceof e;
    }, e;
}(Ds);

/**
 * Creates a child context for parsing SerializableFieldValues.
 *
 * This is different than calling `ParseContext.contextWith` because it keeps
 * the fieldTransforms and fieldMask separate.
 *
 * The created context has its `dataSource` set to `UserDataSource.Argument`.
 * Although these values are used with writes, any elements in these FieldValues
 * are not considered writes since they cannot contain any FieldValue sentinels,
 * etc.
 *
 * @param fieldValue - The sentinel FieldValue for which to create a child
 *     context.
 * @param context - The parent context.
 * @param arrayElement - Whether or not the FieldValue has an array.
 */ function ra$1(t, e, n) {
    return new Js({
        k_: 3 /* Argument */ ,
        j_: e.settings.j_,
        methodName: t._methodName,
        B_: n
    }, e.t, e.Qt, e.ignoreUndefinedProperties);
}

var ia = /** @class */ function(t) {
    function e() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return __extends$1(e, t), e.prototype.z_ = function(t) {
        return new Ce(t.path, new Ae);
    }, e.prototype.isEqual = function(t) {
        return t instanceof e;
    }, e;
}(Ds), oa$1 = /** @class */ function(t) {
    function e(e, n) {
        var r = this;
        return (r = t.call(this, e) || this).H_ = n, r;
    }
    return __extends$1(e, t), e.prototype.z_ = function(t) {
        var e = ra$1(this, t, 
        /*array=*/ !0), n = this.H_.map((function(t) {
            return fa$1(t, e);
        })), r = new De(n);
        return new Ce(t.path, r);
    }, e.prototype.isEqual = function(t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
    }, e;
}(Ds), ua$1 = /** @class */ function(t) {
    function e(e, n) {
        var r = this;
        return (r = t.call(this, e) || this).H_ = n, r;
    }
    return __extends$1(e, t), e.prototype.z_ = function(t) {
        var e = ra$1(this, t, 
        /*array=*/ !0), n = this.H_.map((function(t) {
            return fa$1(t, e);
        })), r = new xe(n);
        return new Ce(t.path, r);
    }, e.prototype.isEqual = function(t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
    }, e;
}(Ds), sa$1 = /** @class */ function(t) {
    function e(e, n) {
        var r = this;
        return (r = t.call(this, e) || this).J_ = n, r;
    }
    return __extends$1(e, t), e.prototype.z_ = function(t) {
        var e = new Oe(t.Qt, _e(t.Qt, this.J_));
        return new Ce(t.path, e);
    }, e.prototype.isEqual = function(t) {
        // TODO(mrschmidt): Implement isEquals
        return this === t;
    }, e;
}(Ds);

/** Parse update data from an update() call. */ function aa$1(t, e, n, r) {
    var i = t.G_(1 /* Update */ , e, n);
    da$1("Data must be an object, but it was:", i, r);
    var o = [], u = new xt;
    nt(r, (function(t, r) {
        var s = ma$1(e, t, n);
        // For Compat types, we have to "extract" the underlying types before
        // performing validation.
                r instanceof Ss && (r = r.d_);
        var a = i.U_(s);
        if (r instanceof na$1) 
        // Add it to the field mask, but don't add anything to updateData.
        o.push(s); else {
            var c = fa$1(r, a);
            null != c && (o.push(s), u.set(s, c));
        }
    }));
    var s = new it(o);
    return new Ws(u.Pt(), s, i.fieldTransforms);
}

/** Parse update data from a list of field/value arguments. */ function ca$1(t, e, n, r, i, o) {
    var u = t.G_(1 /* Update */ , e, n), s = [ va$1(e, r, n) ], a = [ i ];
    if (o.length % 2 != 0) throw new q$1(M$1.INVALID_ARGUMENT, "Function " + e + "() needs to be called with an even number of arguments that alternate between field names and values.");
    for (var c = 0; c < o.length; c += 2) s.push(va$1(e, o[c])), a.push(o[c + 1]);
    // We iterate in reverse order to pick the last value for a field if the
    // user specified the field multiple times.
    for (var h = [], f = new xt, l = s.length - 1; l >= 0; --l) if (!wa$1(h, s[l])) {
        var p = s[l], d = a[l];
        // For Compat types, we have to "extract" the underlying types before
        // performing validation.
        d instanceof Ss && (d = d.d_);
        var v = u.U_(p);
        if (d instanceof na$1) 
        // Add it to the field mask, but don't add anything to updateData.
        h.push(p); else {
            var y = fa$1(d, v);
            null != y && (h.push(p), f.set(p, y));
        }
    }
    var m = new it(h);
    return new Ws(f.Pt(), m, u.fieldTransforms);
}

/**
 * Parse a "query value" (e.g. value in a where filter or a value in a cursor
 * bound).
 *
 * @param allowArrays - Whether the query value is an array that may directly
 * contain additional arrays (e.g. the operand of an `in` query).
 */ function ha$1(t, e, n, r) {
    return void 0 === r && (r = !1), fa$1(n, t.G_(r ? 4 /* ArrayArgument */ : 3 /* Argument */ , e));
}

/**
 * Parses user data to Protobuf Values.
 *
 * @param input - Data to be parsed.
 * @param context - A context object representing the current path being parsed,
 * the source of the data being parsed, etc.
 * @returns The parsed value, or null if the value was a FieldValue sentinel
 * that should not be included in the resulting parsed data.
 */ function fa$1(t, e) {
    if (
    // Unwrap the API type from the Compat SDK. This will return the API type
    // from firestore-exp.
    t instanceof Ss && (t = t.d_), pa$1(t)) return da$1("Unsupported field value:", e, t), 
    la(t, e);
    if (t instanceof Ds) 
    // FieldValues usually parse into transforms (except FieldValue.delete())
    // in which case we do not want to include this field in our parsed data
    // (as doing so will overwrite the field directly prior to the transform
    // trying to transform it). So we don't add this location to
    // context.fieldMask and we return null as our parsing result.
    /**
     * "Parses" the provided FieldValueImpl, adding any necessary transforms to
     * context.fieldTransforms.
     */
    return function(t, e) {
        // Sentinels are only supported with writes, and not within arrays.
        if (!Zs(e.k_)) throw e.K_(t._methodName + "() can only be used with update() and set()");
        if (!e.path) throw e.K_(t._methodName + "() is not currently supported inside arrays");
        var n = t.z_(e);
        n && e.fieldTransforms.push(n);
    }(t, e), null;
    if (void 0 === t && e.ignoreUndefinedProperties) 
    // If the input is undefined it can never participate in the fieldMask, so
    // don't handle this below. If `ignoreUndefinedProperties` is false,
    // `parseScalarValue` will reject an undefined value.
    return null;
    if (
    // If context.path is null we are inside an array and we don't support
    // field mask paths more granular than the top-level array.
    e.path && e.Gt.push(e.path), t instanceof Array) {
        // TODO(b/34871131): Include the path containing the array in the error
        // message.
        // In the case of IN queries, the parsed data is an array (representing
        // the set of values to be included for the IN query) that may directly
        // contain additional arrays (each representing an individual field
        // value), so we disable this validation.
        if (e.settings.B_ && 4 /* ArrayArgument */ !== e.k_) throw e.K_("Nested arrays are not supported");
        return function(t, e) {
            for (var n = [], r = 0, i = 0, o = t; i < o.length; i++) {
                var u = fa$1(o[i], e.Q_(r));
                null == u && (
                // Just include nulls in the array for fields being replaced with a
                // sentinel.
                u = {
                    nullValue: "NULL_VALUE"
                }), n.push(u), r++;
            }
            return {
                arrayValue: {
                    values: n
                }
            };
        }(t, e);
    }
    return function(t, e) {
        if (t instanceof Ss && (t = t.d_), null === t) return {
            nullValue: "NULL_VALUE"
        };
        if ("number" == typeof t) return _e(e.Qt, t);
        if ("boolean" == typeof t) return {
            booleanValue: t
        };
        if ("string" == typeof t) return {
            stringValue: t
        };
        if (t instanceof Date) {
            var n = K$1.fromDate(t);
            return {
                timestampValue: Ln(e.Qt, n)
            };
        }
        if (t instanceof K$1) {
            // Firestore backend truncates precision down to microseconds. To ensure
            // offline mode works the same with regards to truncation, perform the
            // truncation immediately without waiting for the backend to do that.
            n = new K$1(t.seconds, 1e3 * Math.floor(t.nanoseconds / 1e3));
            return {
                timestampValue: Ln(e.Qt, n)
            };
        }
        if (t instanceof Hs) return {
            geoPointValue: {
                latitude: t.latitude,
                longitude: t.longitude
            }
        };
        if (t instanceof F$1) return {
            bytesValue: Rn(e.Qt, t.I)
        };
        if (t instanceof Fs) {
            n = e.t;
            var r = t.firestore.I_;
            if (!r.isEqual(n)) throw e.K_("Document reference is for database " + r.projectId + "/" + r.database + " but should be for database " + n.projectId + "/" + n.database);
            return {
                referenceValue: qn(t.firestore.I_ || e.t, t.S_.path)
            };
        }
        throw e.K_("Unsupported field value: " + Cs(t));
    }(t, e);
}

function la(t, e) {
    var n = {};
    return rt(t) ? 
    // If we encounter an empty object, we explicitly add it to the update
    // mask to ensure that the server creates a map entry.
    e.path && e.path.length > 0 && e.Gt.push(e.path) : nt(t, (function(t, r) {
        var i = fa$1(r, e.L_(t));
        null != i && (n[t] = i);
    })), {
        mapValue: {
            fields: n
        }
    };
}

function pa$1(t) {
    return !("object" != typeof t || null === t || t instanceof Array || t instanceof Date || t instanceof K$1 || t instanceof Hs || t instanceof F$1 || t instanceof Fs || t instanceof Ds);
}

function da$1(t, e, n) {
    if (!pa$1(n) || !function(t) {
        return "object" == typeof t && null !== t && (Object.getPrototypeOf(t) === Object.prototype || null === Object.getPrototypeOf(t));
    }(n)) {
        var r = Cs(n);
        throw "an object" === r ? e.K_(t + " a custom object") : e.K_(t + " " + r);
    }
}

/**
 * Helper that calls fromDotSeparatedString() but wraps any error thrown.
 */ function va$1(t, e, n) {
    if (
    // If required, replace the FieldPath Compat class with with the firestore-exp
    // FieldPath.
    e instanceof Ss && (e = e.d_), e instanceof As) return e.f_;
    if ("string" == typeof e) return ma$1(t, e);
    throw ga("Field path arguments must be of type string or FieldPath.", t, 
    /* hasConverter= */ !1, 
    /* path= */ void 0, n);
}

/**
 * Matches any characters in a field path string that are reserved.
 */ var ya = new RegExp("[~\\*/\\[\\]]");

/**
 * Wraps fromDotSeparatedString with an error message about the method that
 * was thrown.
 * @param methodName - The publicly visible method name
 * @param path - The dot-separated string form of a field path which will be
 * split on dots.
 * @param targetDoc - The document against which the field path will be
 * evaluated.
 */ function ma$1(t, e, n) {
    if (e.search(ya) >= 0) throw ga("Invalid field path (" + e + "). Paths must not contain '~', '*', '/', '[', or ']'", t, 
    /* hasConverter= */ !1, 
    /* path= */ void 0, n);
    try {
        return (new (As.bind.apply(As, __spreadArrays([ void 0 ], e.split("."))))).f_;
    } catch (r) {
        throw ga("Invalid field path (" + e + "). Paths must not be empty, begin with '.', end with '.', or contain '..'", t, 
        /* hasConverter= */ !1, 
        /* path= */ void 0, n);
    }
}

function ga(t, e, n, r, i) {
    var o = r && !r.et(), u = void 0 !== i, s = "Function " + e + "() called with invalid data";
    n && (s += " (via `toFirestore()`)");
    var a = "";
    return (o || u) && (a += " (found", o && (a += " in field " + r), u && (a += " in document " + i), 
    a += ")"), new q$1(M$1.INVALID_ARGUMENT, (s += ". ") + t + a)
    /** Checks `haystack` if FieldPath `needle` is present. Runs in O(n). */;
}

function wa$1(t, e) {
    return t.some((function(t) {
        return t.isEqual(e);
    }));
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Internal transaction object responsible for accumulating the mutations to
 * perform and the base versions for any documents read.
 */ var ba$1 = /** @class */ function() {
    function t(t) {
        this.Sh = t, 
        // The version of each document that was read during this transaction.
        this.Y_ = new Map, this.mutations = [], this.X_ = !1, 
        /**
             * A deferred usage error that occurred previously in this transaction that
             * will cause the transaction to fail once it actually commits.
             */
        this.Z_ = null, 
        /**
             * Set of documents that have been written in the transaction.
             *
             * When there's more than one write to the same key in a transaction, any
             * writes after the first are handled differently.
             */
        this.tf = new Set;
    }
    return t.prototype.ef = function(t) {
        return __awaiter(this, void 0, void 0, (function() {
            var e, n = this;
            return __generator(this, (function(r) {
                switch (r.label) {
                  case 0:
                    if (this.nf(), this.mutations.length > 0) throw new q$1(M$1.INVALID_ARGUMENT, "Firestore transactions require all reads to be executed before all writes.");
                    return [ 4 /*yield*/ , function(t, e) {
                        return __awaiter(this, void 0, void 0, (function() {
                            var n, r, i, o, u, s;
                            return __generator(this, (function(a) {
                                switch (a.label) {
                                  case 0:
                                    return n = O$1(t), r = Qn(n.Qt) + "/documents", i = {
                                        documents: e.map((function(t) {
                                            return jn(n.Qt, t);
                                        }))
                                    }, [ 4 /*yield*/ , n.Du("BatchGetDocuments", r, i) ];

                                  case 1:
                                    return o = a.sent(), u = new Map, o.forEach((function(t) {
                                        var e = function(t, e) {
                                            return "found" in e ? function(t, e) {
                                                k$1(!!e.found), e.found.name, e.found.updateTime;
                                                var n = zn(t, e.found.name), r = Mn(e.found.updateTime), i = new St({
                                                    mapValue: {
                                                        fields: e.found.fields
                                                    }
                                                });
                                                return new Pt(n, r, i, {});
                                            }(t, e) : "missing" in e ? function(t, e) {
                                                k$1(!!e.missing), k$1(!!e.readTime);
                                                var n = zn(t, e.missing), r = Mn(e.readTime);
                                                return new Vt(n, r);
                                            }(t, e) : x$1();
                                        }(n.Qt, t);
                                        u.set(e.key.toString(), e);
                                    })), s = [], [ 2 /*return*/ , (e.forEach((function(t) {
                                        var e = u.get(t.toString());
                                        k$1(!!e), s.push(e);
                                    })), s) ];
                                }
                            }));
                        }));
                    }(this.Sh, t) ];

                  case 1:
                    return [ 2 /*return*/ , ((e = r.sent()).forEach((function(t) {
                        t instanceof Vt || t instanceof Pt ? n.sf(t) : x$1();
                    })), e) ];
                }
            }));
        }));
    }, t.prototype.set = function(t, e) {
        this.write(e.F_(t, this.jt(t))), this.tf.add(t.toString());
    }, t.prototype.update = function(t, e) {
        try {
            this.write(e.F_(t, this.rf(t)));
        } catch (t) {
            this.Z_ = t;
        }
        this.tf.add(t.toString());
    }, t.prototype.delete = function(t) {
        this.write(new Je(t, this.jt(t))), this.tf.add(t.toString());
    }, t.prototype.commit = function() {
        return __awaiter(this, void 0, void 0, (function() {
            var t, e = this;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    if (this.nf(), this.Z_) throw this.Z_;
                    return t = this.Y_, 
                    // For each mutation, note that the doc was written.
                    this.mutations.forEach((function(e) {
                        t.delete(e.key.toString());
                    })), 
                    // For each document that was read but not written to, we want to perform
                    // a `verify` operation.
                    t.forEach((function(t, n) {
                        var r = tt._t(n);
                        e.mutations.push(new $e(r, e.jt(r)));
                    })), [ 4 /*yield*/ , function(t, e) {
                        return __awaiter(this, void 0, void 0, (function() {
                            var n, r, i;
                            return __generator(this, (function(o) {
                                switch (o.label) {
                                  case 0:
                                    return n = O$1(t), r = Qn(n.Qt) + "/documents", i = {
                                        writes: e.map((function(t) {
                                            return Xn(n.Qt, t);
                                        }))
                                    }, [ 4 /*yield*/ , n.pu("Commit", r, i) ];

                                  case 1:
                                    return o.sent(), [ 2 /*return*/ ];
                                }
                            }));
                        }));
                    }(this.Sh, this.mutations) ];

                  case 1:
                    // For each mutation, note that the doc was written.
                    return n.sent(), this.X_ = !0, [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.sf = function(t) {
        var e;
        if (t instanceof Pt) e = t.version; else {
            if (!(t instanceof Vt)) throw x$1();
            // For deleted docs, we must use baseVersion 0 when we overwrite them.
                        e = X$1.min();
        }
        var n = this.Y_.get(t.key.toString());
        if (n) {
            if (!e.isEqual(n)) 
            // This transaction will fail no matter what.
            throw new q$1(M$1.ABORTED, "Document version changed between two reads.");
        } else this.Y_.set(t.key.toString(), e);
    }, 
    /**
     * Returns the version of this document when it was read in this transaction,
     * as a precondition, or no precondition if it was not read.
     */
    t.prototype.jt = function(t) {
        var e = this.Y_.get(t.toString());
        return !this.tf.has(t.toString()) && e ? Re.updateTime(e) : Re.Kt();
    }, 
    /**
     * Returns the precondition for a document if the operation is an update.
     */
    t.prototype.rf = function(t) {
        var e = this.Y_.get(t.toString());
        // The first time a document is written, we want to take into account the
        // read time and existence
                if (!this.tf.has(t.toString()) && e) {
            if (e.isEqual(X$1.min())) 
            // The document doesn't exist, so fail the transaction.
            // This has to be validated locally because you can't send a
            // precondition that a document does not exist without changing the
            // semantics of the backend write to be an insert. This is the reverse
            // of what we want, since we want to assert that the document doesn't
            // exist but then send the update and have it fail. Since we can't
            // express that to the backend, we have to validate locally.
            // Note: this can change once we can send separate verify writes in the
            // transaction.
            throw new q$1(M$1.INVALID_ARGUMENT, "Can't update a document that doesn't exist.");
            // Document exists, base precondition on document update time.
                        return Re.updateTime(e);
        }
        // Document was not read, so we just use the preconditions for a blind
        // update.
                return Re.exists(!0);
    }, t.prototype.write = function(t) {
        this.nf(), this.mutations.push(t);
    }, t.prototype.nf = function() {}, t;
}(), _a = /** @class */ function() {
    function t(t, e, n, r) {
        this._s = t, this.Sh = e, this.updateFunction = n, this.Es = r, this.cf = 5, this.Gu = new Qo(this._s, "transaction_retry" /* TransactionRetry */)
        /** Runs the transaction and sets the result on deferred. */;
    }
    return t.prototype.run = function() {
        this.af();
    }, t.prototype.af = function() {
        var t = this;
        this.Gu.Lu((function() {
            return __awaiter(t, void 0, void 0, (function() {
                var t, e, n = this;
                return __generator(this, (function(r) {
                    return t = new ba$1(this.Sh), (e = this.uf(t)) && e.then((function(e) {
                        n._s.Ps((function() {
                            return t.commit().then((function() {
                                n.Es.resolve(e);
                            })).catch((function(t) {
                                n.hf(t);
                            }));
                        }));
                    })).catch((function(t) {
                        n.hf(t);
                    })), [ 2 /*return*/ ];
                }));
            }));
        }));
    }, t.prototype.uf = function(t) {
        try {
            var e = this.updateFunction(t);
            return !lt(e) && e.catch && e.then ? e : (this.Es.reject(Error("Transaction callback must return a Promise")), 
            null);
        } catch (t) {
            // Do not retry errors thrown by user provided updateFunction.
            return this.Es.reject(t), null;
        }
    }, t.prototype.hf = function(t) {
        var e = this;
        this.cf > 0 && this.lf(t) ? (this.cf -= 1, this._s.Ps((function() {
            return e.af(), Promise.resolve();
        }))) : this.Es.reject(t);
    }, t.prototype.lf = function(t) {
        if ("FirebaseError" === t.name) {
            // In transactions, the backend will fail outdated reads with FAILED_PRECONDITION and
            // non-matching document versions with ABORTED. These errors should be retried.
            var e = t.code;
            return "aborted" === e || "failed-precondition" === e || !en(e);
        }
        return !1;
    }, t;
}(), Ia$1 = /** @class */ function() {
    function t(t, 
    /**
     * Asynchronous queue responsible for all of our internal processing. When
     * we get incoming work from the user (via public API) or the network
     * (incoming GRPC messages), we should always schedule onto this queue.
     * This ensures all of our work is properly serialized (e.g. we don't
     * start processing a new operation while the previous one is waiting for
     * an async I/O to complete).
     */
    e, n) {
        var r = this;
        this.credentials = t, this._s = e, this.yu = n, this.user = j.UNAUTHENTICATED, this.clientId = V$1.u(), 
        this._f = function() {}, this.C = new fr, this.credentials.v((function(t) {
            N$1("FirestoreClient", "Received user=", t.uid), r.user = t, r._f(t), r.C.resolve();
        }));
    }
    return t.prototype.getConfiguration = function() {
        return __awaiter(this, void 0, void 0, (function() {
            return __generator(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return [ 4 /*yield*/ , this.C.promise ];

                  case 1:
                    return [ 2 /*return*/ , (t.sent(), {
                        _s: this._s,
                        yu: this.yu,
                        clientId: this.clientId,
                        credentials: this.credentials,
                        Jl: this.user,
                        pl: 100
                    }) ];
                }
            }));
        }));
    }, t.prototype.ff = function(t) {
        var e = this;
        this._f = t, 
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.C.promise.then((function() {
            return e._f(e.user);
        }));
    }, 
    /**
     * Checks that the client has not been terminated. Ensures that other methods on
     * this class cannot be called after the client is terminated.
     */
    t.prototype.df = function() {
        if (this._s.wf) throw new q$1(M$1.FAILED_PRECONDITION, "The client has already been terminated.");
    }, t.prototype.terminate = function() {
        var t = this;
        this._s.Ef();
        var e = new fr;
        return this._s.Tf((function() {
            return __awaiter(t, void 0, void 0, (function() {
                var t, n;
                return __generator(this, (function(r) {
                    switch (r.label) {
                      case 0:
                        return r.trys.push([ 0, 5, , 6 ]), this.If ? [ 4 /*yield*/ , this.If.terminate() ] : [ 3 /*break*/ , 2 ];

                      case 1:
                        r.sent(), r.label = 2;

                      case 2:
                        return this.mf ? [ 4 /*yield*/ , this.mf.terminate() ] : [ 3 /*break*/ , 4 ];

                      case 3:
                        r.sent(), r.label = 4;

                      case 4:
                        // `removeChangeListener` must be called after shutting down the
                        // RemoteStore as it will prevent the RemoteStore from retrieving
                        // auth tokens.
                        return this.credentials.S(), e.resolve(), [ 3 /*break*/ , 6 ];

                      case 5:
                        return t = r.sent(), n = Er(t, "Failed to shutdown persistence"), e.reject(n), [ 3 /*break*/ , 6 ];

                      case 6:
                        return [ 2 /*return*/ ];
                    }
                }));
            }));
        })), e.promise;
    }, t;
}();

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * TransactionRunner encapsulates the logic needed to run and retry transactions
 * with backoff.
 */ function Ea$1(t, e) {
    return __awaiter(this, void 0, void 0, (function() {
        var n, r, i = this;
        return __generator(this, (function(o) {
            switch (o.label) {
              case 0:
                return t._s.Af(), N$1("FirestoreClient", "Initializing OfflineComponentProvider"), 
                [ 4 /*yield*/ , t.getConfiguration() ];

              case 1:
                return n = o.sent(), [ 4 /*yield*/ , e.initialize(n) ];

              case 2:
                return o.sent(), r = n.Jl, t.ff((function(n) {
                    r.isEqual(n) || (r = n, t._s.po((function() {
                        return __awaiter(i, void 0, void 0, (function() {
                            return __generator(this, (function(t) {
                                switch (t.label) {
                                  case 0:
                                    return [ 4 /*yield*/ , no(e.bh, n) ];

                                  case 1:
                                    return t.sent(), [ 2 /*return*/ ];
                                }
                            }));
                        }));
                    })));
                })), 
                // When a user calls clearPersistence() in one client, all other clients
                // need to be terminated to allow the delete to succeed.
                e.persistence.Po((function() {
                    return t.terminate();
                })), t.mf = e, [ 2 /*return*/ ];
            }
        }));
    }));
}

function Ta$1(t, e) {
    return __awaiter(this, void 0, void 0, (function() {
        var n, r;
        return __generator(this, (function(i) {
            switch (i.label) {
              case 0:
                return t._s.Af(), [ 4 /*yield*/ , Na$1(t) ];

              case 1:
                return n = i.sent(), N$1("FirestoreClient", "Initializing OnlineComponentProvider"), 
                [ 4 /*yield*/ , t.getConfiguration() ];

              case 2:
                return r = i.sent(), [ 4 /*yield*/ , e.initialize(n, r) ];

              case 3:
                return i.sent(), 
                // The CredentialChangeListener of the online component provider takes
                // precedence over the offline component provider.
                t.ff((function(n) {
                    return t._s.po((function() {
                        return function(t, e) {
                            return __awaiter(this, void 0, void 0, (function() {
                                var n, r;
                                return __generator(this, (function(i) {
                                    switch (i.label) {
                                      case 0:
                                        return (n = O$1(t))._s.Af(), N$1("RemoteStore", "RemoteStore received new credentials"), 
                                        r = uu(n), 
                                        // Tear down and re-create our network streams. This will ensure we get a
                                        // fresh auth token for the new user and re-fill the write pipeline with
                                        // new mutations from the LocalStore (since mutations are per-user).
                                        n.Nh.add(3 /* CredentialChange */), [ 4 /*yield*/ , $o(n) ];

                                      case 1:
                                        return i.sent(), r && 
                                        // Don't set the network status to Unknown if we are offline.
                                        n.Oh.set("Unknown" /* Unknown */), [ 4 /*yield*/ , n.Dh.n_(e) ];

                                      case 2:
                                        return i.sent(), n.Nh.delete(3 /* CredentialChange */), [ 4 /*yield*/ , Jo(n) ];

                                      case 3:
                                        // Tear down and re-create our network streams. This will ensure we get a
                                        // fresh auth token for the new user and re-fill the write pipeline with
                                        // new mutations from the LocalStore (since mutations are per-user).
                                        return i.sent(), [ 2 /*return*/ ];
                                    }
                                }));
                            }));
                        }(e.yl, n);
                    }));
                })), t.If = e, [ 2 /*return*/ ];
            }
        }));
    }));
}

function Na$1(t) {
    return __awaiter(this, void 0, void 0, (function() {
        return __generator(this, (function(e) {
            switch (e.label) {
              case 0:
                return t.mf ? [ 3 /*break*/ , 2 ] : (N$1("FirestoreClient", "Using default OfflineComponentProvider"), 
                [ 4 /*yield*/ , Ea$1(t, new ws) ]);

              case 1:
                e.sent(), e.label = 2;

              case 2:
                return [ 2 /*return*/ , t.mf ];
            }
        }));
    }));
}

function Aa$1(t) {
    return __awaiter(this, void 0, void 0, (function() {
        return __generator(this, (function(e) {
            switch (e.label) {
              case 0:
                return t.If ? [ 3 /*break*/ , 2 ] : (N$1("FirestoreClient", "Using default OnlineComponentProvider"), 
                [ 4 /*yield*/ , Ta$1(t, new Is) ]);

              case 1:
                e.sent(), e.label = 2;

              case 2:
                return [ 2 /*return*/ , t.If ];
            }
        }));
    }));
}

function Da$1(t) {
    return Na$1(t).then((function(t) {
        return t.persistence;
    }));
}

function Sa$1(t) {
    return Na$1(t).then((function(t) {
        return t.bh;
    }));
}

function xa(t) {
    return Aa$1(t).then((function(t) {
        return t.yl;
    }));
}

function ka$1(t) {
    return Aa$1(t).then((function(t) {
        return t._a;
    }));
}

function Oa$1(t) {
    return __awaiter(this, void 0, void 0, (function() {
        var e, n;
        return __generator(this, (function(r) {
            switch (r.label) {
              case 0:
                return [ 4 /*yield*/ , Aa$1(t) ];

              case 1:
                return e = r.sent(), [ 2 /*return*/ , ((n = e.gl).jh = ju.bind(null, e._a), n.Hh = Gu.bind(null, e._a), 
                n) ];
            }
        }));
    }));
}

/** Enables the network connection and re-enqueues all pending operations. */ function Pa$1(t, e, n) {
    var r = this;
    void 0 === n && (n = {});
    var i = new fr;
    return t._s.Ps((function() {
        return __awaiter(r, void 0, void 0, (function() {
            var r;
            return __generator(this, (function(o) {
                switch (o.label) {
                  case 0:
                    return r = function(t, e, n, r, i) {
                        var o = new Ts({
                            next: function(o) {
                                // Remove query first before passing event to user to avoid
                                // user actions affecting the now stale query.
                                e.Ps((function() {
                                    return Au(t, u);
                                }));
                                var s = o.docs.has(n);
                                !s && o.fromCache ? 
                                // TODO(dimond): If we're online and the document doesn't
                                // exist then we resolve with a doc.exists set to false. If
                                // we're offline however, we reject the Promise in this
                                // case. Two options: 1) Cache the negative response from
                                // the server so we can deliver that even when you're
                                // offline 2) Actually reject the Promise in the online case
                                // if the document doesn't exist.
                                i.reject(new q$1(M$1.UNAVAILABLE, "Failed to get document because the client is offline.")) : s && o.fromCache && r && "server" === r.source ? i.reject(new q$1(M$1.UNAVAILABLE, 'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')) : i.resolve(o);
                            },
                            error: function(t) {
                                return i.reject(t);
                            }
                        }), u = new ku(re(n.path), o, {
                            includeMetadataChanges: !0,
                            nl: !0
                        });
                        return Nu(t, u);
                    }, [ 4 /*yield*/ , Oa$1(t) ];

                  case 1:
                    return [ 2 /*return*/ , r.apply(void 0, [ o.sent(), t._s, e, n, i ]) ];
                }
            }));
        }));
    })), i.promise;
}

function Va$1(t, e, n) {
    var r = this;
    void 0 === n && (n = {});
    var i = new fr;
    return t._s.Ps((function() {
        return __awaiter(r, void 0, void 0, (function() {
            var r;
            return __generator(this, (function(o) {
                switch (o.label) {
                  case 0:
                    return r = function(t, e, n, r, i) {
                        var o = new Ts({
                            next: function(n) {
                                // Remove query first before passing event to user to avoid
                                // user actions affecting the now stale query.
                                e.Ps((function() {
                                    return Au(t, u);
                                })), n.fromCache && "server" === r.source ? i.reject(new q$1(M$1.UNAVAILABLE, 'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')) : i.resolve(n);
                            },
                            error: function(t) {
                                return i.reject(t);
                            }
                        }), u = new ku(n, o, {
                            includeMetadataChanges: !0,
                            nl: !0
                        });
                        return Nu(t, u);
                    }, [ 4 /*yield*/ , Oa$1(t) ];

                  case 1:
                    return [ 2 /*return*/ , r.apply(void 0, [ o.sent(), t._s, e, n, i ]) ];
                }
            }));
        }));
    })), i.promise;
}

var Ca$1 = /** @class */ function() {
    function t() {
        var t = this;
        // The last promise in the queue.
                this.Rf = Promise.resolve(), 
        // A list of retryable operations. Retryable operations are run in order and
        // retried with backoff.
        this.Pf = [], 
        // Is this AsyncQueue being shut down? Once it is set to true, it will not
        // be changed again.
        this.yf = !1, 
        // Operations scheduled to be queued in the future. Operations are
        // automatically removed after they are run or canceled.
        this.gf = [], 
        // visible for testing
        this.Vf = null, 
        // Flag set while there's an outstanding AsyncQueue operation, used for
        // assertion sanity-checks.
        this.pf = !1, 
        // List of TimerIds to fast-forward delays for.
        this.bf = [], 
        // Backoff timer used to schedule retries for retryable operations
        this.Gu = new Qo(this, "async_queue_retry" /* AsyncQueueRetry */), 
        // Visibility handler that triggers an immediate retry of all retryable
        // operations. Meant to speed up recovery when we regain file system access
        // after page comes into foreground.
        this.vf = function() {
            var e = Go();
            e && N$1("AsyncQueue", "Visibility state changed to " + e.visibilityState), t.Gu.qu();
        };
        var e = Go();
        e && "function" == typeof e.addEventListener && e.addEventListener("visibilitychange", this.vf);
    }
    return Object.defineProperty(t.prototype, "wf", {
        get: function() {
            return this.yf;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /**
     * Adds a new operation to the queue without waiting for it to complete (i.e.
     * we ignore the Promise result).
     */
    t.prototype.Ps = function(t) {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.enqueue(t);
    }, t.prototype.Tf = function(t) {
        this.Sf(), 
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.Df(t);
    }, t.prototype.Ef = function() {
        if (!this.yf) {
            this.yf = !0;
            var t = Go();
            t && "function" == typeof t.removeEventListener && t.removeEventListener("visibilitychange", this.vf);
        }
    }, t.prototype.enqueue = function(t) {
        return this.Sf(), this.yf ? new Promise((function(t) {})) : this.Df(t);
    }, t.prototype.po = function(t) {
        var e = this;
        this.Ps((function() {
            return e.Pf.push(t), e.Cf();
        }));
    }, 
    /**
     * Runs the next operation from the retryable queue. If the operation fails,
     * reschedules with backoff.
     */
    t.prototype.Cf = function() {
        return __awaiter(this, void 0, void 0, (function() {
            var t, e = this;
            return __generator(this, (function(n) {
                switch (n.label) {
                  case 0:
                    if (0 === this.Pf.length) return [ 3 /*break*/ , 5 ];
                    n.label = 1;

                  case 1:
                    return n.trys.push([ 1, 3, , 4 ]), [ 4 /*yield*/ , this.Pf[0]() ];

                  case 2:
                    return n.sent(), this.Pf.shift(), this.Gu.reset(), [ 3 /*break*/ , 4 ];

                  case 3:
                    if (!mr(t = n.sent())) throw t;
                    // Failure will be handled by AsyncQueue
                                        return N$1("AsyncQueue", "Operation failed with retryable error: " + t), 
                    [ 3 /*break*/ , 4 ];

                  case 4:
                    this.Pf.length > 0 && 
                    // If there are additional operations, we re-schedule `retryNextOp()`.
                    // This is necessary to run retryable operations that failed during
                    // their initial attempt since we don't know whether they are already
                    // enqueued. If, for example, `op1`, `op2`, `op3` are enqueued and `op1`
                    // needs to  be re-run, we will run `op1`, `op1`, `op2` using the
                    // already enqueued calls to `retryNextOp()`. `op3()` will then run in the
                    // call scheduled here.
                    // Since `backoffAndRun()` cancels an existing backoff and schedules a
                    // new backoff on every call, there is only ever a single additional
                    // operation in the queue.
                    this.Gu.Lu((function() {
                        return e.Cf();
                    })), n.label = 5;

                  case 5:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, t.prototype.Df = function(t) {
        var e = this, n = this.Rf.then((function() {
            return e.pf = !0, t().catch((function(t) {
                // Re-throw the error so that this.tail becomes a rejected Promise and
                // all further attempts to chain (via .then) will just short-circuit
                // and return the rejected Promise.
                throw e.Vf = t, e.pf = !1, A$1("INTERNAL UNHANDLED ERROR: ", 
                /**
 * Chrome includes Error.message in Error.stack. Other browsers do not.
 * This returns expected output of message + stack when available.
 * @param error - Error or FirestoreError
 */
                function(t) {
                    var e = t.message || "";
                    return t.stack && (e = t.stack.includes(t.message) ? t.stack : t.message + "\n" + t.stack), 
                    e;
                }(t)), t;
            })).then((function(t) {
                return e.pf = !1, t;
            }));
        }));
        return this.Rf = n, n;
    }, t.prototype.Tr = function(t, e, n) {
        var r = this;
        this.Sf(), 
        // Fast-forward delays for timerIds that have been overriden.
        this.bf.indexOf(t) > -1 && (e = 0);
        var i = Ir.Ts(this, t, e, n, (function(t) {
            return r.xf(t);
        }));
        return this.gf.push(i), i;
    }, t.prototype.Sf = function() {
        this.Vf && x$1();
    }, t.prototype.Af = function() {}, 
    /**
     * Waits until all currently queued tasks are finished executing. Delayed
     * operations are not run.
     */
    t.prototype.Nf = function() {
        return __awaiter(this, void 0, void 0, (function() {
            var t;
            return __generator(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return [ 4 /*yield*/ , t = this.Rf ];

                  case 1:
                    e.sent(), e.label = 2;

                  case 2:
                    if (t !== this.Rf) return [ 3 /*break*/ , 0 ];
                    e.label = 3;

                  case 3:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    }, 
    /**
     * For Tests: Determine if a delayed operation with a particular TimerId
     * exists.
     */
    t.prototype.$f = function(t) {
        for (var e = 0, n = this.gf; e < n.length; e++) {
            if (n[e].fs === t) return !0;
        }
        return !1;
    }, 
    /**
     * For Tests: Runs some or all delayed operations early.
     *
     * @param lastTimerId - Delayed operations up to and including this TimerId
     * will be drained. Pass TimerId.All to run all delayed operations.
     * @returns a Promise that resolves once all operations have been run.
     */
    t.prototype.Ff = function(t) {
        var e = this;
        // Note that draining may generate more delayed ops, so we do that first.
                return this.Nf().then((function() {
            // Run ops in the same order they'd run if they ran naturally.
            e.gf.sort((function(t, e) {
                return t.ds - e.ds;
            }));
            for (var n = 0, r = e.gf; n < r.length; n++) {
                var i = r[n];
                if (i.Rs(), "all" /* All */ !== t && i.fs === t) break;
            }
            return e.Nf();
        }));
    }, 
    /**
     * For Tests: Skip all subsequent delays for a timer id.
     */
    t.prototype.Of = function(t) {
        this.bf.push(t);
    }, 
    /** Called once a DelayedOperation is run or canceled. */ t.prototype.xf = function(t) {
        // NOTE: indexOf / slice are O(n), but delayedOperations is expected to be small.
        var e = this.gf.indexOf(t);
        this.gf.splice(e, 1);
    }, t;
}();

function La$1(t) {
    /**
 * Returns true if obj is an object and contains at least one of the specified
 * methods.
 */
    return function(t, e) {
        if ("object" != typeof t || null === t) return !1;
        for (var n = t, r = 0, i = [ "next", "error", "complete" ]; r < i.length; r++) {
            var o = i[r];
            if (o in n && "function" == typeof n[o]) return !0;
        }
        return !1;
    }(t);
}

var Ua$1 = -1, Ma$1 = /** @class */ function(t) {
    /** @hideconstructor */
    function e(e, n) {
        var r = this;
        return (r = t.call(this, e, n) || this).Bf = new Ca$1, r.w_ = "name" in e ? e.name : "[DEFAULT]", 
        r;
    }
    return __extends$1(e, t), e.prototype.b_ = function() {
        return this.qf || 
        // The client must be initialized to ensure that all subsequent API
        // usage throws an exception.
        Fa$1(this), this.qf.terminate();
    }, e;
}(qs);

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** DOMException error code constants. */ function qa$1(t) {
    return t.qf || Fa$1(t), t.qf.df(), t.qf;
}

function Fa$1(t) {
    var e = t.p_(), n = function(t, e, n) {
        return new _(t, e, n.host, n.ssl, n.experimentalForceLongPolling, n.experimentalAutoDetectLongPolling);
    }(t.I_, t.w_, e);
    t.qf = new Ia$1(t.m_, t.Bf, n);
}

/**
 * Attempts to enable persistent storage, if possible.
 *
 * Must be called before any other functions (other than
 * {@link initializeFirestore}, {@link getFirestore} or
 * {@link clearIndexedDbPersistence}.
 *
 * If this fails, `enableIndexedDbPersistence()` will reject the promise it
 * returns. Note that even after this failure, the `Firestore` instance will
 * remain usable, however offline persistence will be disabled.
 *
 * There are several reasons why this can fail, which can be identified by
 * the `code` on the error.
 *
 *   * failed-precondition: The app is already open in another browser tab.
 *   * unimplemented: The browser is incompatible with the offline
 *     persistence implementation.
 *
 * @param firestore - The `Firestore` instance to enable persistence for.
 * @param persistenceSettings - Optional settings object to configure
 * persistence.
 * @returns A promise that represents successfully enabling persistent storage.
 */
/**
 * Registers both the `OfflineComponentProvider` and `OnlineComponentProvider`.
 * If the operation fails with a recoverable error (see
 * `canRecoverFromIndexedDbError()` below), the returned Promise is rejected
 * but the client remains usable.
 */ function ja$1(t, e, n) {
    var r = this, i = new fr;
    return t._s.enqueue((function() {
        return __awaiter(r, void 0, void 0, (function() {
            var r;
            return __generator(this, (function(o) {
                switch (o.label) {
                  case 0:
                    return o.trys.push([ 0, 3, , 4 ]), [ 4 /*yield*/ , Ea$1(t, n) ];

                  case 1:
                    return o.sent(), [ 4 /*yield*/ , Ta$1(t, e) ];

                  case 2:
                    return o.sent(), i.resolve(), [ 3 /*break*/ , 4 ];

                  case 3:
                    if (!
                    /**
         * Decides whether the provided error allows us to gracefully disable
         * persistence (as opposed to crashing the client).
         */
                    function(t) {
                        return "FirebaseError" === t.name ? t.code === M$1.FAILED_PRECONDITION || t.code === M$1.UNIMPLEMENTED : !("undefined" != typeof DOMException && t instanceof DOMException) || (22 === t.code || 20 === t.code || 
                        // Firefox Private Browsing mode disables IndexedDb and returns
                        // INVALID_STATE for any usage.
                        11 === t.code);
                    }(r = o.sent())) throw r;
                    return console.warn("Error enabling offline persistence. Falling back to persistence disabled: " + r), 
                    i.reject(r), [ 3 /*break*/ , 4 ];

                  case 4:
                    return [ 2 /*return*/ ];
                }
            }));
        }));
    })).then((function() {
        return i.promise;
    }));
}

/**
 * Re-enables use of the network for this Firestore instance after a prior
 * call to {@link disableNetwork}.
 *
 * @returns A promise that is resolved once the network has been enabled.
 */
function za$1(t) {
    if (t.R_ || t.P_) throw new q$1(M$1.FAILED_PRECONDITION, "Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Converts Firestore's internal types to the JavaScript types that we expose
 * to the user.
 */ var Ga$1 = /** @class */ function() {
    function t() {}
    return t.prototype.Uf = function(t, e) {
        switch (void 0 === e && (e = "none"), vt(t)) {
          case 0 /* NullValue */ :
            return null;

          case 1 /* BooleanValue */ :
            return t.booleanValue;

          case 2 /* NumberValue */ :
            return st(t.integerValue || t.doubleValue);

          case 3 /* TimestampValue */ :
            return this.Qf(t.timestampValue);

          case 4 /* ServerTimestampValue */ :
            return this.Kf(t, e);

          case 5 /* StringValue */ :
            return t.stringValue;

          case 6 /* BlobValue */ :
            return this.Wf(at(t.bytesValue));

          case 7 /* RefValue */ :
            return this.jf(t.referenceValue);

          case 8 /* GeoPointValue */ :
            return this.Gf(t.geoPointValue);

          case 9 /* ArrayValue */ :
            return this.zf(t.arrayValue, e);

          case 10 /* ObjectValue */ :
            return this.Hf(t.mapValue, e);

          default:
            throw x$1();
        }
    }, t.prototype.Hf = function(t, e) {
        var n = this, r = {};
        return nt(t.fields || {}, (function(t, i) {
            r[t] = n.Uf(i, e);
        })), r;
    }, t.prototype.Gf = function(t) {
        return new Hs(st(t.latitude), st(t.longitude));
    }, t.prototype.zf = function(t, e) {
        var n = this;
        return (t.values || []).map((function(t) {
            return n.Uf(t, e);
        }));
    }, t.prototype.Kf = function(t, e) {
        switch (e) {
          case "previous":
            var n = ht(t);
            return null == n ? null : this.Uf(n, e);

          case "estimate":
            return this.Qf(ft(t));

          default:
            return null;
        }
    }, t.prototype.Qf = function(t) {
        var e = ut(t);
        return new K$1(e.seconds, e.nanos);
    }, t.prototype.Jf = function(t, e) {
        var n = Z$1.ot(t);
        k$1(hr(n));
        var r = new I$1(n.get(1), n.get(3)), i = new tt(n.Y(5));
        return r.isEqual(e) || 
        // TODO(b/64130202): Somehow support foreign references.
        A$1("Document " + i + " contains a document reference within a different database (" + r.projectId + "/" + r.database + ") which is not supported. It will be treated as a reference in the current database (" + e.projectId + "/" + e.database + ") instead."), 
        i;
    }, t;
}(), Ba$1 = /** @class */ function() {
    // Note: This class is stripped down version of the DocumentSnapshot in
    // the legacy SDK. The changes are:
    // - No support for SnapshotMetadata.
    // - No support for SnapshotOptions.
    /** @hideconstructor protected */
    function t(t, e, n, r, i) {
        this.Yf = t, this.Xf = e, this.S_ = n, this.Zf = r, this.v_ = i;
    }
    return Object.defineProperty(t.prototype, "id", {
        /** Property of the `DocumentSnapshot` that provides the document's ID. */ get: function() {
            return this.S_.path.tt();
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "ref", {
        /**
         * The `DocumentReference` for the document included in the `DocumentSnapshot`.
         */
        get: function() {
            return new Fs(this.Yf, this.v_, this.S_);
        },
        enumerable: !1,
        configurable: !0
    }), 
    /**
     * Signals whether or not the document at the snapshot's location exists.
     *
     * @returns true if the document exists.
     */
    t.prototype.exists = function() {
        return null !== this.Zf;
    }, 
    /**
     * Retrieves all fields in the document as an `Object`. Returns `undefined` if
     * the document doesn't exist.
     *
     * @returns An `Object` containing all fields in the document or `undefined`
     * if the document doesn't exist.
     */
    t.prototype.data = function() {
        if (this.Zf) {
            if (this.v_) {
                // We only want to use the converter and create a new DocumentSnapshot
                // if a converter has been provided.
                var t = new Qa$1(this.Yf, this.Xf, this.S_, this.Zf, 
                /* converter= */ null);
                return this.v_.fromFirestore(t);
            }
            return this.Xf.Uf(this.Zf.bt());
        }
    }, 
    /**
     * Retrieves the field specified by `fieldPath`. Returns `undefined` if the
     * document or field doesn't exist.
     *
     * @param fieldPath - The path (for example 'foo' or 'foo.bar') to a specific
     * field.
     * @returns The data at the specified field location or undefined if no such
     * field exists in the document.
     */
    // We are using `any` here to avoid an explicit cast by our users.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    t.prototype.get = function(t) {
        if (this.Zf) {
            var e = this.Zf.data().field(Ya$1("DocumentSnapshot.get", t));
            if (null !== e) return this.Xf.Uf(e);
        }
    }, t;
}(), Qa$1 = /** @class */ function(t) {
    function e() {
        return null !== t && t.apply(this, arguments) || this;
    }
    /**
     * Retrieves all fields in the document as an `Object`.
     *
     * @override
     * @returns An `Object` containing all fields in the document.
     */    return __extends$1(e, t), e.prototype.data = function() {
        return t.prototype.data.call(this);
    }, e;
}(Ba$1);

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A `DocumentSnapshot` contains data read from a document in your Firestore
 * database. The data can be extracted with `.data()` or `.get(<field>)` to
 * get a specific field.
 *
 * For a `DocumentSnapshot` that points to a non-existing document, any data
 * access will return 'undefined'. You can use the `exists()` method to
 * explicitly verify a document's existence.
 */
/**
 * Helper that calls fromDotSeparatedString() but wraps any error thrown.
 */
function Ya$1(t, e) {
    return "string" == typeof e ? ma$1(t, e) : e instanceof Ss ? e.d_.f_ : e.f_;
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ function Ha$1(t) {
    if (oe(t) && 0 === t.xt.length) throw new q$1(M$1.UNIMPLEMENTED, "limitToLast() queries require specifying at least one orderBy() clause");
}

/**
 * A `QueryConstraint` is used to narrow the set of documents returned by a
 * Firestore query. `QueryConstraint`s are created by invoking {@link where},
 * {@link orderBy}, {@link startAt}, {@link startAfter}, {@link
 * endBefore}, {@link endAt}, {@link limit} or {@link limitToLast} and
 * can then be passed to {@link query} to create a new query instance that
 * also contains this `QueryConstraint`.
 */ var Ka$1 = function() {};

/**
 * Creates a new immutable instance of `query` that is extended to also include
 * additional query constraints.
 *
 * @param query - The query instance to use as a base for the new constraints.
 * @param queryConstraints - The list of `QueryConstraint`s to apply.
 * @throws if any of the provided query constraints cannot be combined with the
 * existing or new constraints.
 */ function Xa$1(t) {
    for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
    for (var r = 0, i = e; r < i.length; r++) {
        var o = i[r];
        t = o.td(t);
    }
    return t;
}

var Wa$1 = /** @class */ function(t) {
    function e(e, n, r) {
        var i = this;
        return (i = t.call(this) || this).ed = e, i.nd = n, i.sd = r, i.type = "where", 
        i;
    }
    return __extends$1(e, t), e.prototype.td = function(t) {
        var e = ta$1(t.firestore), n = function(t, e, n, r, i, o, u) {
            var s;
            if (i.ut()) {
                if ("array-contains" /* ARRAY_CONTAINS */ === o || "array-contains-any" /* ARRAY_CONTAINS_ANY */ === o) throw new q$1(M$1.INVALID_ARGUMENT, "Invalid Query. You can't perform '" + o + "' queries on FieldPath.documentId().");
                if ("in" /* IN */ === o || "not-in" /* NOT_IN */ === o) {
                    rc$1(u, o);
                    for (var a = [], c = 0, h = u; c < h.length; c++) {
                        var f = h[c];
                        a.push(nc$1(r, t, f));
                    }
                    s = {
                        arrayValue: {
                            values: a
                        }
                    };
                } else s = nc$1(r, t, u);
            } else "in" /* IN */ !== o && "not-in" /* NOT_IN */ !== o && "array-contains-any" /* ARRAY_CONTAINS_ANY */ !== o || rc$1(u, o), 
            s = ha$1(n, "where", u, 
            /* allowArrays= */ "in" /* IN */ === o || "not-in" /* NOT_IN */ === o);
            var l = Ft.create(i, o, s);
            return function(t, e) {
                if (e.Ct()) {
                    var n = se(t);
                    if (null !== n && !n.isEqual(e.field)) throw new q$1(M$1.INVALID_ARGUMENT, "Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '" + n.toString() + "' and '" + e.field.toString() + "'");
                    var r = ue(t);
                    null !== r && ic$1(t, e.field, r);
                }
                var i = function(t, e) {
                    for (var n = 0, r = t.filters; n < r.length; n++) {
                        var i = r[n];
                        if (e.indexOf(i.op) >= 0) return i.op;
                    }
                    return null;
                }(t, 
                /**
 * Given an operator, returns the set of operators that cannot be used with it.
 *
 * Operators in a query must adhere to the following set of rules:
 * 1. Only one array operator is allowed.
 * 2. Only one disjunctive operator is allowed.
 * 3. NOT_EQUAL cannot be used with another NOT_EQUAL operator.
 * 4. NOT_IN cannot be used with array, disjunctive, or NOT_EQUAL operators.
 *
 * Array operators: ARRAY_CONTAINS, ARRAY_CONTAINS_ANY
 * Disjunctive operators: IN, ARRAY_CONTAINS_ANY, NOT_IN
 */
                function(t) {
                    switch (t) {
                      case "!=" /* NOT_EQUAL */ :
                        return [ "!=" /* NOT_EQUAL */ , "not-in" /* NOT_IN */ ];

                      case "array-contains" /* ARRAY_CONTAINS */ :
                        return [ "array-contains" /* ARRAY_CONTAINS */ , "array-contains-any" /* ARRAY_CONTAINS_ANY */ , "not-in" /* NOT_IN */ ];

                      case "in" /* IN */ :
                        return [ "array-contains-any" /* ARRAY_CONTAINS_ANY */ , "in" /* IN */ , "not-in" /* NOT_IN */ ];

                      case "array-contains-any" /* ARRAY_CONTAINS_ANY */ :
                        return [ "array-contains" /* ARRAY_CONTAINS */ , "array-contains-any" /* ARRAY_CONTAINS_ANY */ , "in" /* IN */ , "not-in" /* NOT_IN */ ];

                      case "not-in" /* NOT_IN */ :
                        return [ "array-contains" /* ARRAY_CONTAINS */ , "array-contains-any" /* ARRAY_CONTAINS_ANY */ , "in" /* IN */ , "not-in" /* NOT_IN */ , "!=" /* NOT_EQUAL */ ];

                      default:
                        return [];
                    }
                }(e.op));
                if (null !== i) 
                // Special case when it's a duplicate op to give a slightly clearer error message.
                throw i === e.op ? new q$1(M$1.INVALID_ARGUMENT, "Invalid query. You cannot use more than one '" + e.op.toString() + "' filter.") : new q$1(M$1.INVALID_ARGUMENT, "Invalid query. You cannot use '" + e.op.toString() + "' filters with '" + i.toString() + "' filters.");
            }(t, l), l;
        }(t.C_, 0, e, t.firestore.I_, this.ed, this.nd, this.sd);
        return new js(t.firestore, t.v_, function(t, e) {
            var n = t.filters.concat([ e ]);
            return new ee(t.path, t.collectionGroup, t.xt.slice(), n, t.limit, t.limitType, t.startAt, t.endAt);
        }(t.C_, n));
    }, e;
}(Ka$1), Za$1 = /** @class */ function(t) {
    function e(e, n) {
        var r = this;
        return (r = t.call(this) || this).ed = e, r.rd = n, r.type = "orderBy", r;
    }
    return __extends$1(e, t), e.prototype.td = function(t) {
        var e = function(t, e, n) {
            if (null !== t.startAt) throw new q$1(M$1.INVALID_ARGUMENT, "Invalid query. You must not call startAt() or startAfter() before calling orderBy().");
            if (null !== t.endAt) throw new q$1(M$1.INVALID_ARGUMENT, "Invalid query. You must not call endAt() or endBefore() before calling orderBy().");
            var r = new Zt(e, n);
            return function(t, e) {
                if (null === ue(t)) {
                    // This is the first order by. It must match any inequality.
                    var n = se(t);
                    null !== n && ic$1(t, n, e.field);
                }
            }(t, r), r;
        }(t.C_, this.ed, this.rd);
        return new js(t.firestore, t.v_, function(t, e) {
            // TODO(dimond): validate that orderBy does not list the same key twice.
            var n = t.xt.concat([ e ]);
            return new ee(t.path, t.collectionGroup, n, t.filters.slice(), t.limit, t.limitType, t.startAt, t.endAt);
        }(t.C_, e));
    }, e;
}(Ka$1), Ja$1 = /** @class */ function(t) {
    function e(e, n, r) {
        var i = this;
        return (i = t.call(this) || this).type = e, i.od = n, i.ad = r, i;
    }
    return __extends$1(e, t), e.prototype.td = function(t) {
        return new js(t.firestore, t.v_, fe(t.C_, this.od, this.ad));
    }, e;
}(Ka$1), $a$1 = /** @class */ function(t) {
    function e(e, n, r) {
        var i = this;
        return (i = t.call(this) || this).type = e, i.ud = n, i.hd = r, i;
    }
    return __extends$1(e, t), e.prototype.td = function(t) {
        var e = ec$1(t, this.type, this.ud, this.hd);
        return new js(t.firestore, t.v_, function(t, e) {
            return new ee(t.path, t.collectionGroup, t.xt.slice(), t.filters.slice(), t.limit, t.limitType, e, t.endAt);
        }(t.C_, e));
    }, e;
}(Ka$1), tc = /** @class */ function(t) {
    function e(e, n, r) {
        var i = this;
        return (i = t.call(this) || this).type = e, i.ud = n, i.hd = r, i;
    }
    return __extends$1(e, t), e.prototype.td = function(t) {
        var e = ec$1(t, this.type, this.ud, this.hd);
        return new js(t.firestore, t.v_, function(t, e) {
            return new ee(t.path, t.collectionGroup, t.xt.slice(), t.filters.slice(), t.limit, t.limitType, t.startAt, e);
        }(t.C_, e));
    }, e;
}(Ka$1);

/**
 * Creates a `QueryConstraint` that enforces that documents must contain the
 * specified field and that the value should satisfy the relation constraint
 * provided.
 *
 * @param fieldPath - The path to compare
 * @param opStr - The operation string (e.g "&lt;", "&lt;=", "==", "&lt;",
 *   "&lt;=", "!=").
 * @param value - The value for comparison
 * @returns The created `Query`.
 */
/** Helper function to create a bound from a document or fields */
function ec$1(t, e, n, r) {
    if (n[0] instanceof Ss && (n[0] = n[0].d_), n[0] instanceof Ba$1) return function(t, e, n, r, i) {
        if (!r) throw new q$1(M$1.NOT_FOUND, "Can't use a DocumentSnapshot that doesn't exist for " + n + "().");
        // Because people expect to continue/end a query at the exact document
        // provided, we need to use the implicit sort order rather than the explicit
        // sort order, because it's guaranteed to contain the document key. That way
        // the position becomes unambiguous and the query continues/ends exactly at
        // the provided document. Without the key (by using the explicit sort
        // orders), multiple documents could match the position, yielding duplicate
        // results.
        for (var o = [], u = 0, s = ce(t); u < s.length; u++) {
            var a = s[u];
            if (a.field.ut()) o.push(It(e, r.key)); else {
                var c = r.field(a.field);
                if (ct(c)) throw new q$1(M$1.INVALID_ARGUMENT, 'Invalid query. You are trying to start or end a query using a document for which the field "' + a.field + '" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');
                if (null === c) {
                    var h = a.field.rt();
                    throw new q$1(M$1.INVALID_ARGUMENT, "Invalid query. You are trying to start or end a query using a document for which the field '" + h + "' (used as the orderBy) does not exist.");
                }
                o.push(c);
            }
        }
        return new Xt(o, i);
    }(t.C_, t.firestore.I_, e, n[0].Zf, r);
    var i = ta$1(t.firestore);
    return function(t, e, n, r, i, o) {
        // Use explicit order by's because it has to match the query the user made
        var u = t.xt;
        if (i.length > u.length) throw new q$1(M$1.INVALID_ARGUMENT, "Too many arguments provided to " + r + "(). The number of arguments must be less than or equal to the number of orderBy() clauses");
        for (var s = [], a = 0; a < i.length; a++) {
            var c = i[a];
            if (u[a].field.ut()) {
                if ("string" != typeof c) throw new q$1(M$1.INVALID_ARGUMENT, "Invalid query. Expected a string for document ID in " + r + "(), but got a " + typeof c);
                if (!ae(t) && -1 !== c.indexOf("/")) throw new q$1(M$1.INVALID_ARGUMENT, "Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to " + r + "() must be a plain document ID, but '" + c + "' contains a slash.");
                var h = t.path.child(Z$1.ot(c));
                if (!tt.wt(h)) throw new q$1(M$1.INVALID_ARGUMENT, "Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to " + r + "() must result in a valid document path, but '" + h + "' is not because it contains an odd number of segments.");
                var f = new tt(h);
                s.push(It(e, f));
            } else {
                var l = ha$1(n, r, c);
                s.push(l);
            }
        }
        return new Xt(s, o);
    }(t.C_, t.firestore.I_, i, e, n, r);
}

function nc$1(t, e, n) {
    if (n instanceof Ss && (n = n.d_), "string" == typeof n) {
        if ("" === n) throw new q$1(M$1.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");
        if (!ae(e) && -1 !== n.indexOf("/")) throw new q$1(M$1.INVALID_ARGUMENT, "Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '" + n + "' contains a '/' character.");
        var r = e.path.child(Z$1.ot(n));
        if (!tt.wt(r)) throw new q$1(M$1.INVALID_ARGUMENT, "Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '" + r + "' is not because it has an odd number of segments (" + r.length + ").");
        return It(t, new tt(r));
    }
    if (n instanceof Fs) return It(t, n.S_);
    throw new q$1(M$1.INVALID_ARGUMENT, "Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: " + Cs(n) + ".");
}

/**
 * Validates that the value passed into a disjunctive filter satisfies all
 * array requirements.
 */ function rc$1(t, e) {
    if (!Array.isArray(t) || 0 === t.length) throw new q$1(M$1.INVALID_ARGUMENT, "Invalid Query. A non-empty array is required for '" + e.toString() + "' filters.");
    if (t.length > 10) throw new q$1(M$1.INVALID_ARGUMENT, "Invalid Query. '" + e.toString() + "' filters support a maximum of 10 elements in the value array.");
}

function ic$1(t, e, n) {
    if (!n.isEqual(e)) throw new q$1(M$1.INVALID_ARGUMENT, "Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '" + e.toString() + "' and so you must also use '" + e.toString() + "' as your first argument to orderBy(), but your first orderBy() is on field '" + n.toString() + "' instead.");
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Converts custom model object of type T into DocumentData by applying the
 * converter if it exists.
 *
 * This function is used when converting user objects to DocumentData
 * because we want to provide the user with a more specific error message if
 * their set() or fails due to invalid data originating from a toFirestore()
 * call.
 */ function oc$1(t, e, n) {
    // Cast to `any` in order to satisfy the union type constraint on
    // toFirestore().
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return t ? n && (n.merge || n.mergeFields) ? t.toFirestore(e, n) : t.toFirestore(e) : e;
}

var uc$1 = /** @class */ function(t) {
    function e(e) {
        var n = this;
        return (n = t.call(this) || this).firestore = e, n;
    }
    return __extends$1(e, t), e.prototype.Wf = function(t) {
        return new F$1(t);
    }, e.prototype.jf = function(t) {
        var e = this.Jf(t, this.firestore.I_);
        return new Fs(this.firestore, /* converter= */ null, e);
    }, e;
}(Ga$1), sc$1 = /** @class */ function() {
    /** @hideconstructor */
    function t(t, e) {
        this.hasPendingWrites = t, this.fromCache = e
        /**
     * Returns true if this `SnapshotMetadata` is equal to the provided one.
     *
     * @param other - The `SnapshotMetadata` to compare against.
     * @returns true if this `SnapshotMetadata` is equal to the provided one.
     */;
    }
    return t.prototype.isEqual = function(t) {
        return this.hasPendingWrites === t.hasPendingWrites && this.fromCache === t.fromCache;
    }, t;
}(), ac$1 = /** @class */ function(t) {
    /** @hideconstructor protected */
    function e(e, n, r, i, o, u) {
        var s = this;
        return (s = t.call(this, e, n, r, i, u) || this).Yf = e, s.ld = e, s.metadata = o, 
        s;
    }
    /**
     * Property of the `DocumentSnapshot` that signals whether or not the data
     * exists. True if the document exists.
     */    return __extends$1(e, t), e.prototype.exists = function() {
        return t.prototype.exists.call(this);
    }, 
    /**
     * Retrieves all fields in the document as an `Object`. Returns `undefined` if
     * the document doesn't exist.
     *
     * By default, `FieldValue.serverTimestamp()` values that have not yet been
     * set to their final value will be returned as `null`. You can override
     * this by passing an options object.
     *
     * @param options - An options object to configure how data is retrieved from
     * the snapshot (for example the desired behavior for server timestamps that
     * have not yet been set to their final value).
     * @returns An `Object` containing all fields in the document or `undefined` if
     * the document doesn't exist.
     */
    e.prototype.data = function(t) {
        if (void 0 === t && (t = {}), this.Zf) {
            if (this.v_) {
                // We only want to use the converter and create a new DocumentSnapshot
                // if a converter has been provided.
                var e = new cc$1(this.Yf, this.Xf, this.S_, this.Zf, this.metadata, 
                /* converter= */ null);
                return this.v_.fromFirestore(e, t);
            }
            return this.Xf.Uf(this.Zf.bt(), t.serverTimestamps);
        }
    }, 
    /**
     * Retrieves the field specified by `fieldPath`. Returns `undefined` if the
     * document or field doesn't exist.
     *
     * By default, a `FieldValue.serverTimestamp()` that has not yet been set to
     * its final value will be returned as `null`. You can override this by
     * passing an options object.
     *
     * @param fieldPath - The path (for example 'foo' or 'foo.bar') to a specific
     * field.
     * @param options - An options object to configure how the field is retrieved
     * from the snapshot (for example the desired behavior for server timestamps
     * that have not yet been set to their final value).
     * @returns The data at the specified field location or undefined if no such
     * field exists in the document.
     */
    // We are using `any` here to avoid an explicit cast by our users.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e.prototype.get = function(t, e) {
        if (void 0 === e && (e = {}), this.Zf) {
            var n = this.Zf.data().field(Ya$1("DocumentSnapshot.get", t));
            if (null !== n) return this.Xf.Uf(n, e.serverTimestamps);
        }
    }, e;
}(Ba$1), cc$1 = /** @class */ function(t) {
    function e() {
        return null !== t && t.apply(this, arguments) || this;
    }
    /**
     * Retrieves all fields in the document as an `Object`.
     *
     * By default, `FieldValue.serverTimestamp()` values that have not yet been
     * set to their final value will be returned as `null`. You can override
     * this by passing an options object.
     *
     * @override
     * @param options - An options object to configure how data is retrieved from
     * the snapshot (for example the desired behavior for server timestamps that
     * have not yet been set to their final value).
     * @returns An `Object` containing all fields in the document.
     */    return __extends$1(e, t), e.prototype.data = function(e) {
        return void 0 === e && (e = {}), t.prototype.data.call(this, e);
    }, e;
}(ac$1), hc$1 = /** @class */ function() {
    /** @hideconstructor */
    function t(t, e, n, r) {
        this.Yf = t, this.Xf = e, this._d = r, this.metadata = new sc$1(r.hasPendingWrites, r.fromCache), 
        this.query = n;
    }
    return Object.defineProperty(t.prototype, "docs", {
        /** An array of all the documents in the `QuerySnapshot`. */ get: function() {
            var t = [];
            return this.forEach((function(e) {
                return t.push(e);
            })), t;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "size", {
        /** The number of documents in the `QuerySnapshot`. */ get: function() {
            return this._d.docs.size;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(t.prototype, "empty", {
        /** True if there are no documents in the `QuerySnapshot`. */ get: function() {
            return 0 === this.size;
        },
        enumerable: !1,
        configurable: !0
    }), 
    /**
     * Enumerates all of the documents in the `QuerySnapshot`.
     *
     * @param callback - A callback to be called with a `QueryDocumentSnapshot` for
     * each document in the snapshot.
     * @param thisArg - The `this` binding for the callback.
     */
    t.prototype.forEach = function(t, e) {
        var n = this;
        this._d.docs.forEach((function(r) {
            t.call(e, new cc$1(n.Yf, n.Xf, r.key, r, new sc$1(n._d.De.has(r.key), n._d.fromCache), n.query.v_));
        }));
    }, 
    /**
     * Returns an array of the documents changes since the last snapshot. If this
     * is the first snapshot, all documents will be in the list as 'added'
     * changes.
     *
     * @param options - `SnapshotListenOptions` that control whether metadata-only
     * changes (i.e. only `DocumentSnapshot.metadata` changed) should trigger
     * snapshot events.
     */
    t.prototype.docChanges = function(t) {
        void 0 === t && (t = {});
        var e = !!t.includeMetadataChanges;
        if (e && this._d.xe) throw new q$1(M$1.INVALID_ARGUMENT, "To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");
        return this.fd && this.dd === e || (this.fd = 
        /** Calculates the array of DocumentChanges for a given ViewSnapshot. */
        function(t, e) {
            if (t._d.Se.et()) {
                // Special case the first snapshot because index calculation is easy and
                // fast
                var n = 0;
                return t._d.docChanges.map((function(e) {
                    var r = new cc$1(t.Yf, t.Xf, e.doc.key, e.doc, new sc$1(t._d.De.has(e.doc.key), t._d.fromCache), t.query.v_);
                    return e.doc, {
                        type: "added",
                        doc: r,
                        oldIndex: -1,
                        newIndex: n++
                    };
                }));
            }
            // A DocumentSet that is updated incrementally as changes are applied to use
            // to lookup the index of a document.
            var r = t._d.Se;
            return t._d.docChanges.filter((function(t) {
                return e || 3 /* Metadata */ !== t.type;
            })).map((function(e) {
                var n = new cc$1(t.Yf, t.Xf, e.doc.key, e.doc, new sc$1(t._d.De.has(e.doc.key), t._d.fromCache), t.query.v_), i = -1, o = -1;
                return 0 /* Added */ !== e.type && (i = r.indexOf(e.doc.key), r = r.delete(e.doc.key)), 
                1 /* Removed */ !== e.type && (o = (r = r.add(e.doc)).indexOf(e.doc.key)), {
                    type: fc$1(e.type),
                    doc: n,
                    oldIndex: i,
                    newIndex: o
                };
            }));
        }(this, e), this.dd = e), this.fd;
    }, t;
}();

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Metadata about a snapshot, describing the state of the snapshot.
 */ function fc$1(t) {
    switch (t) {
      case 0 /* Added */ :
        return "added";

      case 2 /* Modified */ :
      case 3 /* Metadata */ :
        return "modified";

      case 1 /* Removed */ :
        return "removed";

      default:
        return x$1();
    }
}

// TODO(firestoreexp): Add tests for snapshotEqual with different snapshot
// metadata
/**
 * Returns true if the provided snapshots are equal.
 *
 * @param left - A snapshot to compare.
 * @param right - A snapshot to compare.
 * @returns true if the snapshots are equal.
 */ function lc$1(t, e) {
    return t instanceof ac$1 && e instanceof ac$1 ? t.Yf === e.Yf && t.S_.isEqual(e.S_) && (null === t.Zf ? null === e.Zf : t.Zf.isEqual(e.Zf)) && t.v_ === e.v_ : t instanceof hc$1 && e instanceof hc$1 && t.Yf === e.Yf && Ys(t.query, e.query) && t.metadata.isEqual(e.metadata) && t._d.isEqual(e._d);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Reads the document referred to by this `DocumentReference`.
 *
 * Note: `getDoc()` attempts to provide up-to-date data when possible by waiting
 * for data from the server, but it may return cached data or fail if you are
 * offline and the server cannot be reached. To specify this behavior, invoke
 * {@link getDocFromCache} or {@link getDocFromServer}.
 *
 * @param reference - The reference of the document to fetch.
 * @returns A Promise resolved with a `DocumentSnapshot` containing the
 * current document contents.
 */ var pc$1 = /** @class */ function(t) {
    function e(e) {
        var n = this;
        return (n = t.call(this) || this).firestore = e, n;
    }
    return __extends$1(e, t), e.prototype.Wf = function(t) {
        return new F$1(t);
    }, e.prototype.jf = function(t) {
        var e = this.Jf(t, this.firestore.I_);
        return new Fs(this.firestore, /* converter= */ null, e);
    }, e;
}(Ga$1);

/**
 * Reads the document referred to by this `DocumentReference` from cache.
 * Returns an error if the document is not currently cached.
 *
 * @returns A Promise resolved with a `DocumentSnapshot` containing the
 * current document contents.
 */ function dc$1(t, e, n) {
    for (var r = [], i = 3; i < arguments.length; i++) r[i - 3] = arguments[i];
    t = Ls(t, Fs);
    var o = Ls(t.firestore, Ma$1), u = ta$1(o);
    // For Compat types, we have to "extract" the underlying types before
    // performing validation.
    return e instanceof Ss && (e = e.d_), yc$1(o, [ ("string" == typeof e || e instanceof As ? ca$1(u, "updateDoc", t.S_, e, n, r) : aa$1(u, "updateDoc", t.S_, e)).F_(t.S_, Re.exists(!0)) ]);
}

/**
 * Deletes the document referred to by the specified `DocumentReference`.
 *
 * @param reference - A reference to the document to delete.
 * @returns A Promise resolved once the document has been successfully
 * deleted from the backend (note that it won't resolve while you're offline).
 */ function vc$1(t) {
    for (var e, n, r, i = [], o = 1; o < arguments.length; o++) i[o - 1] = arguments[o];
    t instanceof Ss && (t = t.d_);
    var u = {
        includeMetadataChanges: !1
    }, s = 0;
    "object" != typeof i[s] || La$1(i[s]) || (u = i[s], s++);
    var a, c, h, f = {
        includeMetadataChanges: u.includeMetadataChanges
    };
    if (La$1(i[s])) {
        var l = i[s];
        i[s] = null === (e = l.next) || void 0 === e ? void 0 : e.bind(l), i[s + 1] = null === (n = l.error) || void 0 === n ? void 0 : n.bind(l), 
        i[s + 2] = null === (r = l.complete) || void 0 === r ? void 0 : r.bind(l);
    }
    if (t instanceof Fs) c = Ls(t.firestore, Ma$1), h = re(t.S_.path), a = {
        next: function(e) {
            i[s] && i[s](mc$1(c, t, e));
        },
        error: i[s + 1],
        complete: i[s + 2]
    }; else {
        var p = Ls(t, js);
        c = Ls(p.firestore, Ma$1), h = p.C_;
        var d = new pc$1(c);
        a = {
            next: function(t) {
                i[s] && i[s](new hc$1(c, d, p, t));
            },
            error: i[s + 1],
            complete: i[s + 2]
        }, Ha$1(t.C_);
    }
    return function(t, e, n, r) {
        var i = this, o = new Ts(r), u = new ku(e, o, n);
        return t._s.Ps((function() {
            return __awaiter(i, void 0, void 0, (function() {
                var e;
                return __generator(this, (function(n) {
                    switch (n.label) {
                      case 0:
                        return e = Nu, [ 4 /*yield*/ , Oa$1(t) ];

                      case 1:
                        return [ 2 /*return*/ , e.apply(void 0, [ n.sent(), u ]) ];
                    }
                }));
            }));
        })), function() {
            o.i_(), t._s.Ps((function() {
                return __awaiter(i, void 0, void 0, (function() {
                    var e;
                    return __generator(this, (function(n) {
                        switch (n.label) {
                          case 0:
                            return e = Au, [ 4 /*yield*/ , Oa$1(t) ];

                          case 1:
                            return [ 2 /*return*/ , e.apply(void 0, [ n.sent(), u ]) ];
                        }
                    }));
                }));
            }));
        };
    }(qa$1(c), h, f, a);
}

/** Locally writes `mutations` on the async queue. */ function yc$1(t, e) {
    return function(t, e) {
        var n = this, r = new fr;
        return t._s.Ps((function() {
            return __awaiter(n, void 0, void 0, (function() {
                var n;
                return __generator(this, (function(i) {
                    switch (i.label) {
                      case 0:
                        return n = Bu, [ 4 /*yield*/ , ka$1(t) ];

                      case 1:
                        return [ 2 /*return*/ , n.apply(void 0, [ i.sent(), e, r ]) ];
                    }
                }));
            }));
        })), r.promise;
    }(qa$1(t), e);
}

/**
 * Converts a ViewSnapshot that contains the single document specified by `ref`
 * to a DocumentSnapshot.
 */ function mc$1(t, e, n) {
    var r = n.docs.get(e.S_), i = new pc$1(t);
    return new ac$1(t, i, e.S_, r, new sc$1(n.hasPendingWrites, n.fromCache), e.v_);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A write batch, used to perform multiple writes as a single atomic unit.
 *
 * A `WriteBatch` object can be acquired by calling {@link writeBatch}. It
 * provides methods for adding writes to the write batch. None of the writes
 * will be committed (or visible locally) until {@link WriteBatch#commit} is
 * called.
 */ var gc$1 = /** @class */ function() {
    /** @hideconstructor */
    function t(t, e) {
        this.Yf = t, this.wd = e, this.Ed = [], this.Td = !1, this.Id = ta$1(t);
    }
    return t.prototype.set = function(t, e, n) {
        this.md();
        var r = wc$1(t, this.Yf), i = oc$1(r.v_, e, n), o = ea$1(this.Id, "WriteBatch.set", r.S_, i, null !== r.v_, n);
        return this.Ed.push(o.F_(r.S_, Re.Kt())), this;
    }, t.prototype.update = function(t, e, n) {
        for (var r = [], i = 3; i < arguments.length; i++) r[i - 3] = arguments[i];
        this.md();
        var o, u = wc$1(t, this.Yf);
        // For Compat types, we have to "extract" the underlying types before
        // performing validation.
                return e instanceof Ss && (e = e.d_), o = "string" == typeof e || e instanceof As ? ca$1(this.Id, "WriteBatch.update", u.S_, e, n, r) : aa$1(this.Id, "WriteBatch.update", u.S_, e), 
        this.Ed.push(o.F_(u.S_, Re.exists(!0))), this;
    }, 
    /**
     * Deletes the document referred to by the provided {@link DocumentReference}.
     *
     * @param documentRef - A reference to the document to be deleted.
     * @returns This `WriteBatch` instance. Used for chaining method calls.
     */
    t.prototype.delete = function(t) {
        this.md();
        var e = wc$1(t, this.Yf);
        return this.Ed = this.Ed.concat(new Je(e.S_, Re.Kt())), this;
    }, 
    /**
     * Commits all of the writes in this write batch as a single atomic unit.
     *
     * The result of these writes will only be reflected in document reads that
     * occur after the returned Promise resolves. If the client is offline, the
     * write fails. If you would like to see local modifications or buffer writes
     * until the client is online, use the full Firestore SDK.
     *
     * @returns A Promise resolved once all of the writes in the batch have been
     * successfully written to the backend as an atomic unit (note that it won't
     * resolve while you're offline).
     */
    t.prototype.commit = function() {
        return this.md(), this.Td = !0, this.Ed.length > 0 ? this.wd(this.Ed) : Promise.resolve();
    }, t.prototype.md = function() {
        if (this.Td) throw new q$1(M$1.FAILED_PRECONDITION, "A write batch can no longer be used after commit() has been called.");
    }, t;
}();

function wc$1(t, e) {
    if (t instanceof Ss && (t = t.d_), t.firestore !== e) throw new q$1(M$1.INVALID_ARGUMENT, "Provided document reference is from a different Firestore instance.");
    return t;
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// TODO(mrschmidt) Consider using `BaseTransaction` as the base class in the
// legacy SDK.
/**
 * A reference to a transaction.
 *
 * The `Transaction` object passed to a transaction's `updateFunction` provides
 * the methods to read and write data within the transaction context. See
 * {@link runTransaction}.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A reference to a transaction.
 *
 * The `Transaction` object passed to a transaction's `updateFunction` provides
 * the methods to read and write data within the transaction context. See
 * {@link runTransaction}.
 */ var bc$1 = /** @class */ function(t) {
    // This class implements the same logic as the Transaction API in the Lite SDK
    // but is subclassed in order to return its own DocumentSnapshot types.
    /** @hideconstructor */
    function e(e, n) {
        var r = this;
        return (r = t.call(this, e, n) || this).Yf = e, r;
    }
    /**
     * Reads the document referenced by the provided {@link DocumentReference}.
     *
     * @param documentRef - A reference to the document to be read.
     * @returns A `DocumentSnapshot` with the read data.
     */    return __extends$1(e, t), e.prototype.get = function(e) {
        var n = this, r = wc$1(e, this.Yf), i = new pc$1(this.Yf);
        return t.prototype.get.call(this, e).then((function(t) {
            return new ac$1(n.Yf, i, r.S_, t.Zf, new sc$1(
            /* hasPendingWrites= */ !1, 
            /* fromCache= */ !1), r.v_);
        }));
    }, e;
}(/** @class */ function() {
    /** @hideconstructor */
    function t(t, e) {
        this.Yf = t, this.Ad = e, this.Id = ta$1(t)
        /**
     * Reads the document referenced by the provided {@link DocumentReference}.
     *
     * @param documentRef - A reference to the document to be read.
     * @returns A `DocumentSnapshot` with the read data.
     */;
    }
    return t.prototype.get = function(t) {
        var e = this, n = wc$1(t, this.Yf), r = new uc$1(this.Yf);
        return this.Ad.ef([ n.S_ ]).then((function(t) {
            if (!t || 1 !== t.length) return x$1();
            var i = t[0];
            if (i instanceof Vt) return new Ba$1(e.Yf, r, n.S_, null, n.v_);
            if (i instanceof Pt) return new Ba$1(e.Yf, r, i.key, i, n.v_);
            throw x$1();
        }));
    }, t.prototype.set = function(t, e, n) {
        var r = wc$1(t, this.Yf), i = oc$1(r.v_, e, n), o = ea$1(this.Id, "Transaction.set", r.S_, i, null !== r.v_, n);
        return this.Ad.set(r.S_, o), this;
    }, t.prototype.update = function(t, e, n) {
        for (var r = [], i = 3; i < arguments.length; i++) r[i - 3] = arguments[i];
        var o, u = wc$1(t, this.Yf);
        // For Compat types, we have to "extract" the underlying types before
        // performing validation.
                return e instanceof Ss && (e = e.d_), o = "string" == typeof e || e instanceof As ? ca$1(this.Id, "Transaction.update", u.S_, e, n, r) : aa$1(this.Id, "Transaction.update", u.S_, e), 
        this.Ad.update(u.S_, o), this;
    }, 
    /**
     * Deletes the document referred to by the provided {@link DocumentReference}.
     *
     * @param documentRef - A reference to the document to be deleted.
     * @returns This `Transaction` instance. Used for chaining method calls.
     */
    t.prototype.delete = function(t) {
        var e = wc$1(t, this.Yf);
        return this.Ad.delete(e.S_), this;
    }, t;
}());

/**
 * Executes the given `updateFunction` and then attempts to commit the changes
 * applied within the transaction. If any document read within the transaction
 * has changed, Cloud Firestore retries the `updateFunction`. If it fails to
 * commit after 5 attempts, the transaction fails.
 *
 * The maximum number of writes allowed in a single transaction is 500.
 *
 * @param firestore - A reference to the Firestore database to run this
 * transaction against.
 * @param updateFunction - The function to execute within the transaction
 * context.
 * @returns If the transaction completed successfully or was explicitly aborted
 * (the `updateFunction` returned a failed promise), the promise returned by the
 * `updateFunction `is returned here. Otherwise, if the transaction failed, a
 * rejected promise with the corresponding failure error is returned.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/** Helper function to assert Uint8Array is available at runtime. */ function _c() {
    if ("undefined" == typeof Uint8Array) throw new q$1(M$1.UNIMPLEMENTED, "Uint8Arrays are not available in this environment.");
}

/** Helper function to assert Base64 functions are available at runtime. */ function Ic$1() {
    if ("undefined" == typeof atob) throw new q$1(M$1.UNIMPLEMENTED, "Blobs are unavailable in Firestore in this environment.");
}

/** Immutable class holding a blob (binary data) */ var Ec$1 = /** @class */ function(t) {
    function e() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return __extends$1(e, t), e.fromBase64String = function(t) {
        return Ic$1(), new e(F$1.fromBase64String(t));
    }, e.fromUint8Array = function(t) {
        return _c(), new e(F$1.fromUint8Array(t));
    }, e.prototype.toBase64 = function() {
        return Ic$1(), this.d_.toBase64();
    }, e.prototype.toUint8Array = function() {
        return _c(), this.d_.toUint8Array();
    }, e.prototype.isEqual = function(t) {
        return this.d_.isEqual(t.d_);
    }, e.prototype.toString = function() {
        return "Blob(base64: " + this.toBase64() + ")";
    }, e;
}(Ss), Tc$1 = /** @class */ function() {
    function t() {}
    return t.prototype.enableIndexedDbPersistence = function(t, e) {
        return function(t, e) {
            za$1(t = Ls(t, Ma$1));
            var n = qa$1(t), r = t.p_(), i = new Is;
            return ja$1(n, i, new bs(i, r.cacheSizeBytes, null == e ? void 0 : e.forceOwnership));
        }(t.d_, {
            forceOwnership: e
        });
    }, t.prototype.enableMultiTabIndexedDbPersistence = function(t) {
        return function(t) {
            za$1(t = Ls(t, Ma$1));
            var e = qa$1(t), n = t.p_(), r = new Is;
            return ja$1(e, r, new _s(r, n.cacheSizeBytes));
        }(t.d_);
    }, t.prototype.clearIndexedDbPersistence = function(t) {
        return function(t) {
            var e = this;
            if (t.R_ && !t.P_) throw new q$1(M$1.FAILED_PRECONDITION, "Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");
            var n = new fr;
            return t.Bf.Tf((function() {
                return __awaiter(e, void 0, void 0, (function() {
                    var e;
                    return __generator(this, (function(r) {
                        switch (r.label) {
                          case 0:
                            return r.trys.push([ 0, 2, , 3 ]), [ 4 /*yield*/ , function(t) {
                                return __awaiter(this, void 0, void 0, (function() {
                                    var e;
                                    return __generator(this, (function(n) {
                                        switch (n.label) {
                                          case 0:
                                            return dr.Kn() ? (e = t + "main", [ 4 /*yield*/ , dr.delete(e) ]) : [ 2 /*return*/ , Promise.resolve() ];

                                          case 1:
                                            return n.sent(), [ 2 /*return*/ ];
                                        }
                                    }));
                                }));
                            }(Xi(t.I_, t.w_)) ];

                          case 1:
                            return r.sent(), n.resolve(), [ 3 /*break*/ , 3 ];

                          case 2:
                            return e = r.sent(), n.reject(e), [ 3 /*break*/ , 3 ];

                          case 3:
                            return [ 2 /*return*/ ];
                        }
                    }));
                }));
            })), n.promise
            /**
 * Waits until all currently pending writes for the active user have been
 * acknowledged by the backend.
 *
 * The returned Promise resolves immediately if there are no outstanding writes.
 * Otherwise, the Promise waits for all previously issued writes (including
 * those written in a previous app session), but it does not wait for writes
 * that were added after the function is called. If you want to wait for
 * additional writes, call `waitForPendingWrites()` again.
 *
 * Any outstanding `waitForPendingWrites()` Promises are rejected during user
 * changes.
 *
 * @returns A Promise which resolves when all currently pending writes have been
 * acknowledged by the backend.
 */;
        }(t.d_);
    }, t;
}(), Nc$1 = /** @class */ function(t) {
    function e(e, n, r) {
        var i = this;
        return (i = t.call(this, n) || this).Rd = r, i.INTERNAL = {
            delete: function() {
                return i.terminate();
            }
        }, e instanceof I$1 || (i.Pd = e), i;
    }
    return __extends$1(e, t), Object.defineProperty(e.prototype, "I_", {
        get: function() {
            return this.d_.I_;
        },
        enumerable: !1,
        configurable: !0
    }), e.prototype.settings = function(t) {
        t.merge && 
        // Remove the property from the settings once the merge is completed
        delete (t = Object.assign(Object.assign({}, this.d_.V_()), t)).merge, this.d_.g_(t);
    }, e.prototype.useEmulator = function(t, e) {
        !function(t, e, n) {
            var r = (t = Ls(t, qs)).V_();
            "firestore.googleapis.com" !== r.host && r.host !== e && D$1("Host has been set in both settings() and useEmulator(), emulator host will be used"), 
            t.g_(Object.assign(Object.assign({}, r), {
                host: e + ":" + n,
                ssl: !1
            }));
        }(this.d_, t, e);
    }, e.prototype.enableNetwork = function() {
        return function(t) {
            var e = this;
            return t._s.enqueue((function() {
                return __awaiter(e, void 0, void 0, (function() {
                    var e, n;
                    return __generator(this, (function(r) {
                        switch (r.label) {
                          case 0:
                            return [ 4 /*yield*/ , Da$1(t) ];

                          case 1:
                            return e = r.sent(), [ 4 /*yield*/ , xa(t) ];

                          case 2:
                            return n = r.sent(), [ 2 /*return*/ , (e.yo(!0), function(t) {
                                var e = O$1(t);
                                return e.Nh.delete(0 /* UserDisabled */), Jo(e);
                            }(n)) ];
                        }
                    }));
                }));
            }));
        }
        /** Disables the network connection. Pending operations will not complete. */ (qa$1(Ls(this.d_, Ma$1)));
    }, e.prototype.disableNetwork = function() {
        return function(t) {
            var e = this;
            return t._s.enqueue((function() {
                return __awaiter(e, void 0, void 0, (function() {
                    var e, n;
                    return __generator(this, (function(r) {
                        switch (r.label) {
                          case 0:
                            return [ 4 /*yield*/ , Da$1(t) ];

                          case 1:
                            return e = r.sent(), [ 4 /*yield*/ , xa(t) ];

                          case 2:
                            return n = r.sent(), [ 2 /*return*/ , (e.yo(!1), function(t) {
                                return __awaiter(this, void 0, void 0, (function() {
                                    var e;
                                    return __generator(this, (function(n) {
                                        switch (n.label) {
                                          case 0:
                                            return (e = O$1(t)).Nh.add(0 /* UserDisabled */), [ 4 /*yield*/ , $o(e) ];

                                          case 1:
                                            return n.sent(), 
                                            // Set the OnlineState to Offline so get()s return from cache, etc.
                                            e.Oh.set("Offline" /* Offline */), [ 2 /*return*/ ];
                                        }
                                    }));
                                }));
                            }(n)) ];
                        }
                    }));
                }));
            }));
        }
        /**
 * Returns a Promise that resolves when all writes that were pending at the time
 * this method was called received server acknowledgement. An acknowledgement
 * can be either acceptance or rejection.
 */ (qa$1(Ls(this.d_, Ma$1)));
    }, e.prototype.enablePersistence = function(t) {
        var e = !1, n = !1;
        return t && Os("synchronizeTabs", e = !!t.synchronizeTabs, "experimentalForceOwningTab", n = !!t.experimentalForceOwningTab), 
        e ? this.Rd.enableMultiTabIndexedDbPersistence(this) : this.Rd.enableIndexedDbPersistence(this, n);
    }, e.prototype.clearPersistence = function() {
        return this.Rd.clearIndexedDbPersistence(this);
    }, e.prototype.terminate = function() {
        return this.Pd && (this.Pd._removeServiceInstance("firestore"), this.Pd._removeServiceInstance("firestore-exp")), 
        this.d_._delete();
    }, e.prototype.waitForPendingWrites = function() {
        return function(t) {
            var e = this, n = new fr;
            return t._s.Ps((function() {
                return __awaiter(e, void 0, void 0, (function() {
                    var e;
                    return __generator(this, (function(r) {
                        switch (r.label) {
                          case 0:
                            return e = Wu, [ 4 /*yield*/ , ka$1(t) ];

                          case 1:
                            return [ 2 /*return*/ , e.apply(void 0, [ r.sent(), n ]) ];
                        }
                    }));
                }));
            })), n.promise;
        }(qa$1(Ls(this.d_, Ma$1)));
    }, e.prototype.onSnapshotsInSync = function(t) {
        return function(t, e) {
            return function(t, e) {
                var n = this, r = new Ts(e);
                return t._s.Ps((function() {
                    return __awaiter(n, void 0, void 0, (function() {
                        var e;
                        return __generator(this, (function(n) {
                            switch (n.label) {
                              case 0:
                                return e = function(t, e) {
                                    O$1(t).Wh.add(e), 
                                    // Immediately fire an initial event, indicating all existing listeners
                                    // are in-sync.
                                    e.next();
                                }, [ 4 /*yield*/ , Oa$1(t) ];

                              case 1:
                                return [ 2 /*return*/ , e.apply(void 0, [ n.sent(), r ]) ];
                            }
                        }));
                    }));
                })), function() {
                    r.i_(), t._s.Ps((function() {
                        return __awaiter(n, void 0, void 0, (function() {
                            var e;
                            return __generator(this, (function(n) {
                                switch (n.label) {
                                  case 0:
                                    return e = function(t, e) {
                                        O$1(t).Wh.delete(e);
                                    }, [ 4 /*yield*/ , Oa$1(t) ];

                                  case 1:
                                    return [ 2 /*return*/ , e.apply(void 0, [ n.sent(), r ]) ];
                                }
                            }));
                        }));
                    }));
                }
                /**
 * Takes an updateFunction in which a set of reads and writes can be performed
 * atomically. In the updateFunction, the client can read and write values
 * using the supplied transaction object. After the updateFunction, all
 * changes will be committed. If a retryable error occurs (ex: some other
 * client has changed any of the data referenced), then the updateFunction
 * will be called again after a backoff. If the updateFunction still fails
 * after all retries, then the transaction will be rejected.
 *
 * The transaction object passed to the updateFunction contains methods for
 * accessing documents and collections. Unlike other datastore access, data
 * accessed with the transaction will not reflect local changes that have not
 * been committed. For this reason, it is required that all reads are
 * performed before any writes. Transactions must be performed while online.
 */;
            }(qa$1(t = Ls(t, Ma$1)), La$1(e) ? e : {
                next: e
            });
        }(this.d_, t);
    }, Object.defineProperty(e.prototype, "app", {
        get: function() {
            if (!this.Pd) throw new q$1(M$1.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
            return this.Pd;
        },
        enumerable: !1,
        configurable: !0
    }), e.prototype.collection = function(t) {
        try {
            return new Fc$1(this, Gs(this.d_, t));
        } catch (t) {
            throw Pc$1(t, "collection()", "Firestore.collection()");
        }
    }, e.prototype.doc = function(t) {
        try {
            return new Oc$1(this, Bs(this.d_, t));
        } catch (t) {
            throw Pc$1(t, "doc()", "Firestore.doc()");
        }
    }, e.prototype.collectionGroup = function(t) {
        try {
            return new Uc$1(this, function(t, e) {
                if (t = Ls(t, qs), xs("collectionGroup", "collection id", e), e.indexOf("/") >= 0) throw new q$1(M$1.INVALID_ARGUMENT, "Invalid collection ID '" + e + "' passed to function collectionGroup(). Collection IDs must not contain '/'.");
                return new js(t, 
                /* converter= */ null, 
                /**
 * Creates a new Query for a collection group query that matches all documents
 * within the provided collection group.
 */
                function(t) {
                    return new ee(Z$1.ct(), t);
                }(e));
            }(this.d_, t));
        } catch (t) {
            throw Pc$1(t, "collectionGroup()", "Firestore.collectionGroup()");
        }
    }, e.prototype.runTransaction = function(t) {
        var e = this;
        return function(t, e) {
            return function(t, e) {
                var n = this, r = new fr;
                return t._s.Ps((function() {
                    return __awaiter(n, void 0, void 0, (function() {
                        var n;
                        return __generator(this, (function(i) {
                            switch (i.label) {
                              case 0:
                                return [ 4 /*yield*/ , function(t) {
                                    return Aa$1(t).then((function(t) {
                                        return t.Sh;
                                    }));
                                }(t) ];

                              case 1:
                                return n = i.sent(), new _a(t._s, n, e, r).run(), [ 2 /*return*/ ];
                            }
                        }));
                    }));
                })), r.promise;
            }(qa$1(t), (function(n) {
                return e(new bc$1(t, n));
            }));
        }(this.d_, (function(n) {
            return t(new Sc$1(e, n));
        }));
    }, e.prototype.batch = function() {
        var t = this;
        return qa$1(this.d_), new xc(new gc$1(this.d_, (function(e) {
            return yc$1(t.d_, e);
        })));
    }, e.prototype.loadBundle = function(t) {
        throw new q$1(M$1.FAILED_PRECONDITION, '"loadBundle()" does not exist, have you imported "firebase/firestore/bundle"?');
    }, e.prototype.namedQuery = function(t) {
        throw new q$1(M$1.FAILED_PRECONDITION, '"namedQuery()" does not exist, have you imported "firebase/firestore/bundle"?');
    }, e;
}(Ss), Ac$1 = /** @class */ function(t) {
    function e(e) {
        var n = this;
        return (n = t.call(this) || this).firestore = e, n;
    }
    return __extends$1(e, t), e.prototype.Wf = function(t) {
        return new Ec$1(new F$1(t));
    }, e.prototype.jf = function(t) {
        var e = this.Jf(t, this.firestore.I_);
        return Oc$1.yd(e, this.firestore, /* converter= */ null);
    }, e;
}(Ga$1);

/**
 * The persistence provider included with the full Firestore SDK.
 */ function Dc$1(t) {
    var e;
    e = t, E$1.setLogLevel(e);
}

/**
 * A reference to a transaction.
 */ var Sc$1 = /** @class */ function(t) {
    function e(e, n) {
        var r = this;
        return (r = t.call(this, n) || this).Yf = e, r.Xf = new Ac$1(e), r;
    }
    return __extends$1(e, t), e.prototype.get = function(t) {
        var e = this, n = jc$1(t);
        return this.d_.get(n).then((function(t) {
            return new Lc$1(e.Yf, new ac$1(e.Yf.d_, e.Xf, t.S_, t.Zf, t.metadata, n.v_));
        }));
    }, e.prototype.set = function(t, e, n) {
        var r = jc$1(t);
        return n ? (ks("Transaction.set", n), this.d_.set(r, e, n)) : this.d_.set(r, e), 
        this;
    }, e.prototype.update = function(t, e, n) {
        for (var r, i = [], o = 3; o < arguments.length; o++) i[o - 3] = arguments[o];
        var u = jc$1(t);
        return 2 === arguments.length ? this.d_.update(u, e) : (r = this.d_).update.apply(r, __spreadArrays([ u, e, n ], i)), 
        this;
    }, e.prototype.delete = function(t) {
        var e = jc$1(t);
        return this.d_.delete(e), this;
    }, e;
}(Ss), xc = /** @class */ function(t) {
    function e() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return __extends$1(e, t), e.prototype.set = function(t, e, n) {
        var r = jc$1(t);
        return n ? (ks("WriteBatch.set", n), this.d_.set(r, e, n)) : this.d_.set(r, e), 
        this;
    }, e.prototype.update = function(t, e, n) {
        for (var r, i = [], o = 3; o < arguments.length; o++) i[o - 3] = arguments[o];
        var u = jc$1(t);
        return 2 === arguments.length ? this.d_.update(u, e) : (r = this.d_).update.apply(r, __spreadArrays([ u, e, n ], i)), 
        this;
    }, e.prototype.delete = function(t) {
        var e = jc$1(t);
        return this.d_.delete(e), this;
    }, e.prototype.commit = function() {
        return this.d_.commit();
    }, e;
}(Ss), kc$1 = /** @class */ function(t) {
    function e(e, n, r) {
        var i = this;
        return (i = t.call(this, r) || this).Yf = e, i.Xf = n, i;
    }
    return __extends$1(e, t), e.prototype.fromFirestore = function(t, e) {
        var n = new cc$1(this.Yf.d_, this.Xf, t.S_, t.Zf, t.metadata, 
        /* converter= */ null);
        return this.d_.fromFirestore(new Rc$1(this.Yf, n), null != e ? e : {});
    }, e.prototype.toFirestore = function(t, e) {
        return e ? this.d_.toFirestore(t, e) : this.d_.toFirestore(t);
    }, 
    // Use the same instance of `FirestoreDataConverter` for the given instances
    // of `Firestore` and `PublicFirestoreDataConverter` so that isEqual() will
    // compare equal for two objects created with the same converter instance.
    e.gd = function(t, n) {
        var r = e.Vd, i = r.get(t);
        i || (i = new WeakMap, r.set(t, i));
        var o = i.get(n);
        return o || (o = new e(t, new Ac$1(t), n), i.set(n, o)), o;
    }, e;
}(Ss);

kc$1.Vd = new WeakMap;

/**
 * A reference to a particular document in a collection in the database.
 */
var Oc$1 = /** @class */ function(t) {
    function e(e, n) {
        var r = this;
        return (r = t.call(this, n) || this).firestore = e, r.Xf = new Ac$1(e), r;
    }
    return __extends$1(e, t), e.pd = function(t, n, r) {
        if (t.length % 2 != 0) throw new q$1(M$1.INVALID_ARGUMENT, "Invalid document reference. Document references must have an even number of segments, but " + t.rt() + " has " + t.length);
        return new e(n, new Fs(n.d_, r, new tt(t)));
    }, e.yd = function(t, n, r) {
        return new e(n, new Fs(n.d_, r, t));
    }, Object.defineProperty(e.prototype, "id", {
        get: function() {
            return this.d_.id;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "parent", {
        get: function() {
            return new Fc$1(this.firestore, this.d_.parent);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "path", {
        get: function() {
            return this.d_.path;
        },
        enumerable: !1,
        configurable: !0
    }), e.prototype.collection = function(t) {
        try {
            return new Fc$1(this.firestore, Gs(this.d_, t));
        } catch (t) {
            throw Pc$1(t, "collection()", "DocumentReference.collection()");
        }
    }, e.prototype.isEqual = function(t) {
        return t instanceof Ss && (t = t.d_), t instanceof Fs && Qs(this.d_, t);
    }, e.prototype.set = function(t, e) {
        e = ks("DocumentReference.set", e);
        try {
            return function(t, e, n) {
                t = Ls(t, Fs);
                var r = Ls(t.firestore, Ma$1), i = oc$1(t.v_, e, n);
                return yc$1(r, [ ea$1(ta$1(r), "setDoc", t.S_, i, null !== t.v_, n).F_(t.S_, Re.Kt()) ]);
            }(this.d_, t, e);
        } catch (t) {
            throw Pc$1(t, "setDoc()", "DocumentReference.set()");
        }
    }, e.prototype.update = function(t, e) {
        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
        try {
            return 1 === arguments.length ? dc$1(this.d_, t) : dc$1.apply(void 0, __spreadArrays([ this.d_, t, e ], n));
        } catch (t) {
            throw Pc$1(t, "updateDoc()", "DocumentReference.update()");
        }
    }, e.prototype.delete = function() {
        return yc$1(Ls((t = this.d_).firestore, Ma$1), [ new Je(t.S_, Re.Kt()) ]);
        var t;
        /**
 * Add a new document to specified `CollectionReference` with the given data,
 * assigning it a document ID automatically.
 *
 * @param reference - A reference to the collection to add this document to.
 * @param data - An Object containing the data for the new document.
 * @returns A Promise resolved with a `DocumentReference` pointing to the
 * newly created document after it has been written to the backend (Note that it
 * won't resolve while you're offline).
 */    }, e.prototype.onSnapshot = function() {
        for (var t = this, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
        var r = Vc$1(e), i = Cc$1(e, (function(e) {
            return new Lc$1(t.firestore, new ac$1(t.firestore.d_, t.Xf, e.S_, e.Zf, e.metadata, t.d_.v_));
        }));
        return vc$1(this.d_, r, i);
    }, e.prototype.get = function(t) {
        var e = this;
        return ("cache" === (null == t ? void 0 : t.source) ? function(t) {
            t = Ls(t, Fs);
            var e = Ls(t.firestore, Ma$1), n = qa$1(e), r = new pc$1(e);
            return function(t, e) {
                var n = this, r = new fr;
                return t._s.Ps((function() {
                    return __awaiter(n, void 0, void 0, (function() {
                        var n;
                        return __generator(this, (function(i) {
                            switch (i.label) {
                              case 0:
                                return n = function(t, e, n) {
                                    return __awaiter(this, void 0, void 0, (function() {
                                        var r, i;
                                        return __generator(this, (function(o) {
                                            switch (o.label) {
                                              case 0:
                                                return o.trys.push([ 0, 2, , 3 ]), [ 4 /*yield*/ , function(t, e) {
                                                    var n = O$1(t);
                                                    return n.persistence.runTransaction("read document", "readonly", (function(t) {
                                                        return n.Tc.Ho(t, e);
                                                    }));
                                                }(t, e) ];

                                              case 1:
                                                return (i = o.sent()) instanceof Pt ? n.resolve(i) : i instanceof Vt ? n.resolve(null) : n.reject(new q$1(M$1.UNAVAILABLE, "Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)")), 
                                                [ 3 /*break*/ , 3 ];

                                              case 2:
                                                return r = o.sent(), i = Er(r, "Failed to get document '" + e + " from cache"), 
                                                n.reject(i), [ 3 /*break*/ , 3 ];

                                              case 3:
                                                return [ 2 /*return*/ ];
                                            }
                                        }));
                                    }));
                                }, [ 4 /*yield*/ , Sa$1(t) ];

                              case 1:
                                return [ 2 /*return*/ , n.apply(void 0, [ i.sent(), e, r ]) ];
                            }
                        }));
                    }));
                })), r.promise;
            }(n, t.S_).then((function(n) {
                return new ac$1(e, r, t.S_, n, new sc$1(n instanceof Pt && n.Vt, 
                /* fromCache= */ !0), t.v_);
            }));
        }(this.d_) : "server" === (null == t ? void 0 : t.source) ? function(t) {
            t = Ls(t, Fs);
            var e = Ls(t.firestore, Ma$1);
            return Pa$1(qa$1(e), t.S_, {
                source: "server"
            }).then((function(n) {
                return mc$1(e, t, n);
            }));
        }(this.d_) : function(t) {
            t = Ls(t, Fs);
            var e = Ls(t.firestore, Ma$1);
            return Pa$1(qa$1(e), t.S_).then((function(n) {
                return mc$1(e, t, n);
            }));
        }(this.d_)).then((function(t) {
            return new Lc$1(e.firestore, new ac$1(e.firestore.d_, e.Xf, t.S_, t.Zf, t.metadata, e.d_.v_));
        }));
    }, e.prototype.withConverter = function(t) {
        return new e(this.firestore, this.d_.withConverter(kc$1.gd(this.firestore, t)));
    }, e;
}(Ss);

/**
 * Replaces the function name in an error thrown by the firestore-exp API
 * with the function names used in the classic API.
 */ function Pc$1(t, e, n) {
    return t.message = t.message.replace(e, n), t
    /**
 * Iterates the list of arguments from an `onSnapshot` call and returns the
 * first argument that may be an `SnapshotListenOptions` object. Returns an
 * empty object if none is found.
 */;
}

function Vc$1(t) {
    for (var e = 0, n = t; e < n.length; e++) {
        var r = n[e];
        if ("object" == typeof r && !La$1(r)) return r;
    }
    return {};
}

/**
 * Creates an observer that can be passed to the firestore-exp SDK. The
 * observer converts all observed values into the format expected by the classic
 * SDK.
 *
 * @param args - The list of arguments from an `onSnapshot` call.
 * @param wrapper - The function that converts the firestore-exp type into the
 * type used by this shim.
 */ function Cc$1(t, e) {
    var n, r, i;
    return {
        next: function(t) {
            i.next && i.next(e(t));
        },
        error: null === (n = (i = La$1(t[0]) ? t[0] : La$1(t[1]) ? t[1] : "function" == typeof t[0] ? {
            next: t[0],
            error: t[1],
            complete: t[2]
        } : {
            next: t[1],
            error: t[2],
            complete: t[3]
        }).error) || void 0 === n ? void 0 : n.bind(i),
        complete: null === (r = i.complete) || void 0 === r ? void 0 : r.bind(i)
    };
}

var Lc$1 = /** @class */ function(t) {
    function e(e, n) {
        var r = this;
        return (r = t.call(this, n) || this).Yf = e, r;
    }
    return __extends$1(e, t), Object.defineProperty(e.prototype, "ref", {
        get: function() {
            return new Oc$1(this.Yf, this.d_.ref);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "id", {
        get: function() {
            return this.d_.id;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "metadata", {
        get: function() {
            return this.d_.metadata;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "exists", {
        get: function() {
            return this.d_.exists();
        },
        enumerable: !1,
        configurable: !0
    }), e.prototype.data = function(t) {
        return this.d_.data(t);
    }, e.prototype.get = function(t, e) {
        return this.d_.get(t, e);
    }, e.prototype.isEqual = function(t) {
        return lc$1(this.d_, t.d_);
    }, e;
}(Ss), Rc$1 = /** @class */ function(t) {
    function e() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return __extends$1(e, t), e.prototype.data = function(t) {
        return this.d_.data(t);
    }, e;
}(Lc$1), Uc$1 = /** @class */ function(t) {
    function e(e, n) {
        var r = this;
        return (r = t.call(this, n) || this).firestore = e, r.Xf = new Ac$1(e), r;
    }
    return __extends$1(e, t), e.prototype.where = function(t, n, r) {
        try {
            // The "as string" cast is a little bit of a hack. `where` accepts the
            // FieldPath Compat type as input, but is not typed as such in order to
            // not expose this via our public typings file.
            return new e(this.firestore, Xa$1(this.d_, function(t, e, n) {
                var r = e, i = Ya$1("where", t);
                return new Wa$1(i, r, n);
            }(t, n, r)));
        } catch (t) {
            throw Pc$1(t, /(orderBy|where)\(\)/, "Query.$1()");
        }
    }, e.prototype.orderBy = function(t, n) {
        try {
            // The "as string" cast is a little bit of a hack. `orderBy` accepts the
            // FieldPath Compat type as input, but is not typed as such in order to
            // not expose this via our public typings file.
            return new e(this.firestore, Xa$1(this.d_, function(t, e) {
                void 0 === e && (e = "asc");
                var n = e, r = Ya$1("orderBy", t);
                return new Za$1(r, n);
            }(t, n)));
        } catch (t) {
            throw Pc$1(t, /(orderBy|where)\(\)/, "Query.$1()");
        }
    }, e.prototype.limit = function(t) {
        try {
            return new e(this.firestore, Xa$1(this.d_, function(t) {
                return Rs("limit", t), new Ja$1("limit", t, "F" /* First */);
            }(t)));
        } catch (t) {
            throw Pc$1(t, "limit()", "Query.limit()");
        }
    }, e.prototype.limitToLast = function(t) {
        try {
            return new e(this.firestore, Xa$1(this.d_, function(t) {
                return Rs("limitToLast", t), new Ja$1("limitToLast", t, "L" /* Last */);
            }(t)));
        } catch (t) {
            throw Pc$1(t, "limitToLast()", "Query.limitToLast()");
        }
    }, e.prototype.startAt = function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return new e(this.firestore, Xa$1(this.d_, function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return new $a$1("startAt", t, /*before=*/ !0);
            }.apply(void 0, t)));
        } catch (t) {
            throw Pc$1(t, "startAt()", "Query.startAt()");
        }
    }, e.prototype.startAfter = function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return new e(this.firestore, Xa$1(this.d_, function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return new $a$1("startAfter", t, 
                /*before=*/ !1);
            }.apply(void 0, t)));
        } catch (t) {
            throw Pc$1(t, "startAfter()", "Query.startAfter()");
        }
    }, e.prototype.endBefore = function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return new e(this.firestore, Xa$1(this.d_, function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return new tc("endBefore", t, /*before=*/ !0);
            }.apply(void 0, t)));
        } catch (t) {
            throw Pc$1(t, "endBefore()", "Query.endBefore()");
        }
    }, e.prototype.endAt = function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        try {
            return new e(this.firestore, Xa$1(this.d_, function() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return new tc("endAt", t, /*before=*/ !1);
            }.apply(void 0, t)));
        } catch (t) {
            throw Pc$1(t, "endAt()", "Query.endAt()");
        }
    }, e.prototype.isEqual = function(t) {
        return Ys(this.d_, t.d_);
    }, e.prototype.get = function(t) {
        var e = this;
        return ("cache" === (null == t ? void 0 : t.source) ? 
        /**
     * Executes the query and returns the results as a `QuerySnapshot` from cache.
     * Returns an error if the document is not currently cached.
     *
     * @returns A Promise that will be resolved with the results of the query.
     */
        function(t) {
            t = Ls(t, js);
            var e = Ls(t.firestore, Ma$1), n = qa$1(e), r = new pc$1(e);
            return function(t, e) {
                var n = this, r = new fr;
                return t._s.Ps((function() {
                    return __awaiter(n, void 0, void 0, (function() {
                        var n;
                        return __generator(this, (function(i) {
                            switch (i.label) {
                              case 0:
                                return n = function(t, e, n) {
                                    return __awaiter(this, void 0, void 0, (function() {
                                        var r, i, o, u, s;
                                        return __generator(this, (function(a) {
                                            switch (a.label) {
                                              case 0:
                                                return a.trys.push([ 0, 2, , 3 ]), [ 4 /*yield*/ , ho(t, e, 
                                                /* usePreviousResults= */ !0) ];

                                              case 1:
                                                return s = a.sent(), r = new Uu(e, s.Rc), i = r.fl(s.documents), o = r.wi(i, 
                                                /* updateLimboDocuments= */ !1), n.resolve(o.snapshot), [ 3 /*break*/ , 3 ];

                                              case 2:
                                                return u = a.sent(), s = Er(u, "Failed to execute query '" + e + " against cache"), 
                                                n.reject(s), [ 3 /*break*/ , 3 ];

                                              case 3:
                                                return [ 2 /*return*/ ];
                                            }
                                        }));
                                    }));
                                }, [ 4 /*yield*/ , Sa$1(t) ];

                              case 1:
                                return [ 2 /*return*/ , n.apply(void 0, [ i.sent(), e, r ]) ];
                            }
                        }));
                    }));
                })), r.promise;
            }(n, t.C_).then((function(n) {
                return new hc$1(e, r, t, n);
            }));
        }(this.d_) : "server" === (null == t ? void 0 : t.source) ? function(t) {
            t = Ls(t, js);
            var e = Ls(t.firestore, Ma$1), n = qa$1(e), r = new pc$1(e);
            return Va$1(n, t.C_, {
                source: "server"
            }).then((function(n) {
                return new hc$1(e, r, t, n);
            }));
        }(this.d_) : function(t) {
            t = Ls(t, js);
            var e = Ls(t.firestore, Ma$1), n = qa$1(e), r = new pc$1(e);
            return Ha$1(t.C_), Va$1(n, t.C_).then((function(n) {
                return new hc$1(e, r, t, n);
            }));
        }(this.d_)).then((function(t) {
            return new qc$1(e.firestore, new hc$1(e.firestore.d_, e.Xf, e.d_, t._d));
        }));
    }, e.prototype.onSnapshot = function() {
        for (var t = this, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
        var r = Vc$1(e), i = Cc$1(e, (function(e) {
            return new qc$1(t.firestore, new hc$1(t.firestore.d_, t.Xf, t.d_, e._d));
        }));
        return vc$1(this.d_, r, i);
    }, e.prototype.withConverter = function(t) {
        return new e(this.firestore, this.d_.withConverter(kc$1.gd(this.firestore, t)));
    }, e;
}(Ss), Mc$1 = /** @class */ function(t) {
    function e(e, n) {
        var r = this;
        return (r = t.call(this, n) || this).Yf = e, r;
    }
    return __extends$1(e, t), Object.defineProperty(e.prototype, "type", {
        get: function() {
            return this.d_.type;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "doc", {
        get: function() {
            return new Rc$1(this.Yf, this.d_.doc);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "oldIndex", {
        get: function() {
            return this.d_.oldIndex;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "newIndex", {
        get: function() {
            return this.d_.newIndex;
        },
        enumerable: !1,
        configurable: !0
    }), e;
}(Ss), qc$1 = /** @class */ function(t) {
    function e(e, n) {
        var r = this;
        return (r = t.call(this, n) || this).Yf = e, r;
    }
    return __extends$1(e, t), Object.defineProperty(e.prototype, "query", {
        get: function() {
            return new Uc$1(this.Yf, this.d_.query);
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "metadata", {
        get: function() {
            return this.d_.metadata;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "size", {
        get: function() {
            return this.d_.size;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "empty", {
        get: function() {
            return this.d_.empty;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "docs", {
        get: function() {
            var t = this;
            return this.d_.docs.map((function(e) {
                return new Rc$1(t.Yf, e);
            }));
        },
        enumerable: !1,
        configurable: !0
    }), e.prototype.docChanges = function(t) {
        var e = this;
        return this.d_.docChanges(t).map((function(t) {
            return new Mc$1(e.Yf, t);
        }));
    }, e.prototype.forEach = function(t, e) {
        var n = this;
        this.d_.forEach((function(r) {
            t.call(e, new Rc$1(n.Yf, r));
        }));
    }, e.prototype.isEqual = function(t) {
        return lc$1(this.d_, t.d_);
    }, e;
}(Ss), Fc$1 = /** @class */ function(t) {
    function e(e, n) {
        var r = this;
        return (r = t.call(this, e, n) || this).firestore = e, r.d_ = n, r;
    }
    return __extends$1(e, t), Object.defineProperty(e.prototype, "id", {
        get: function() {
            return this.d_.id;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "path", {
        get: function() {
            return this.d_.path;
        },
        enumerable: !1,
        configurable: !0
    }), Object.defineProperty(e.prototype, "parent", {
        get: function() {
            var t = this.d_.parent;
            return t ? new Oc$1(this.firestore, t) : null;
        },
        enumerable: !1,
        configurable: !0
    }), e.prototype.doc = function(t) {
        try {
            return new Oc$1(this.firestore, void 0 === t ? Bs(this.d_) : Bs(this.d_, t));
        } catch (t) {
            throw Pc$1(t, "doc()", "CollectionReference.doc()");
        }
    }, e.prototype.add = function(t) {
        var e = this;
        return function(t, e) {
            var n = Ls(t.firestore, Ma$1), r = Bs(t), i = oc$1(t.v_, e);
            return yc$1(n, [ ea$1(ta$1(t.firestore), "addDoc", r.S_, i, null !== t.v_, {}).F_(r.S_, Re.exists(!1)) ]).then((function() {
                return r;
            }));
        }(this.d_, t).then((function(t) {
            return new Oc$1(e.firestore, t);
        }));
    }, e.prototype.isEqual = function(t) {
        return Qs(this.d_, t.d_);
    }, e.prototype.withConverter = function(t) {
        return new e(this.firestore, this.d_.withConverter(kc$1.gd(this.firestore, t)));
    }, e;
}(Uc$1);

function jc$1(t) {
    return t instanceof Ss && (t = t.d_), Ls(t, Fs);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// The objects that are a part of this API are exposed to third-parties as
// compiled javascript so we want to flag our private members with a leading
// underscore to discourage their use.
/**
 * A `FieldPath` refers to a field in a document. The path may consist of a
 * single field name (referring to a top-level field in the document), or a list
 * of field names (referring to a nested field in the document).
 */ var zc$1 = /** @class */ function(t) {
    /**
     * Creates a FieldPath from the provided field names. If more than one field
     * name is provided, the path will point to a nested field in a document.
     *
     * @param fieldNames - A list of field names.
     */
    function e() {
        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
        return t.call(this, new (As.bind.apply(As, __spreadArrays([ void 0 ], e)))) || this;
    }
    return __extends$1(e, t), e.documentId = function() {
        /**
         * Internal Note: The backend doesn't technically support querying by
         * document ID. Instead it queries by the entire document name (full path
         * included), but in the cases we currently support documentId(), the net
         * effect is the same.
         */
        return new e($.ht().rt());
    }, e.prototype.isEqual = function(t) {
        return t instanceof Ss && (t = t.d_), t instanceof As && this.d_.f_.isEqual(t.f_);
    }, e;
}(Ss), Gc$1 = /** @class */ function(t) {
    function e() {
        return null !== t && t.apply(this, arguments) || this;
    }
    return __extends$1(e, t), e.serverTimestamp = function() {
        var t = new ia("serverTimestamp");
        return t._methodName = "FieldValue.serverTimestamp", new e(t);
    }, e.delete = function() {
        var t = new na$1("deleteField");
        return t._methodName = "FieldValue.delete", new e(t);
    }, e.arrayUnion = function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        var r = 
        /**
 * Returns a special value that can be used with {@link setDoc} or {@link
 * updateDoc} that tells the server to union the given elements with any array
 * value that already exists on the server. Each specified element that doesn't
 * already exist in the array will be added to the end. If the field being
 * modified is not already an array it will be overwritten with an array
 * containing exactly the specified elements.
 *
 * @param elements - The elements to union into the array.
 * @returns The `FieldValue` sentinel for use in a call to `setDoc()` or
 * `updateDoc()`.
 */
        function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            // NOTE: We don't actually parse the data until it's used in set() or
            // update() since we'd need the Firestore instance to do this.
                        return new oa$1("arrayUnion", t);
        }.apply(void 0, t);
        return r._methodName = "FieldValue.arrayUnion", new e(r);
    }, e.arrayRemove = function() {
        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        var r = function() {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            // NOTE: We don't actually parse the data until it's used in set() or
            // update() since we'd need the Firestore instance to do this.
                        return new ua$1("arrayRemove", t);
        }.apply(void 0, t);
        return r._methodName = "FieldValue.arrayRemove", new e(r);
    }, e.increment = function(t) {
        var n = function(t) {
            return new sa$1("increment", t);
        }(t);
        return n._methodName = "FieldValue.increment", new e(n);
    }, e.prototype.isEqual = function(t) {
        return this.d_.isEqual(t.d_);
    }, e;
}(Ss);

var I$2 = {
    Firestore: Nc$1,
    GeoPoint: Hs,
    Timestamp: K$1,
    Blob: Ec$1,
    Transaction: Sc$1,
    WriteBatch: xc,
    DocumentReference: Oc$1,
    DocumentSnapshot: Lc$1,
    Query: Uc$1,
    QueryDocumentSnapshot: Rc$1,
    QuerySnapshot: qc$1,
    CollectionReference: Fc$1,
    FieldPath: zc$1,
    FieldValue: Gc$1,
    setLogLevel: Dc$1,
    CACHE_SIZE_UNLIMITED: Ua$1
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Registers the main Firestore build with the components framework.
 * Persistence can be enabled via `firebase.firestore().enablePersistence()`.
 */
function L$2(e) {
    !
    /**
 * Configures Firestore as part of the Firebase SDK by calling registerService.
 *
 * @param firebase - The FirebaseNamespace to register Firestore with
 * @param firestoreFactory - A factory function that returns a new Firestore
 *    instance.
 */
    function(e, r) {
        e.INTERNAL.registerComponent(new Component("firestore", (function(e) {
            var t = e.getProvider("app").getImmediate();
            return r(t, e.getProvider("auth-internal"));
        }), "PUBLIC" /* PUBLIC */).setServiceProps(Object.assign({}, I$2)));
    }(e, (function(e, s) {
        return new Nc$1(e, new Ma$1(e, s), new Tc$1);
    })), e.registerVersion("@firebase/firestore", "2.1.7");
}

L$2(firebase$1);
