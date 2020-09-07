(window.webpackJsonp = window.webpackJsonp || []).push([[1], {
                "+qE3": function (t, e, n) {
                    "use strict";
                    var r, i = "object" == typeof Reflect ? Reflect : null,
                        o = i && "function" == typeof i.apply ? i.apply : function (t, e, n) {
                            return Function.prototype.apply.call(t, e, n)
                        };
                    r = i && "function" == typeof i.ownKeys ? i.ownKeys : Object.getOwnPropertySymbols ? function (t) {
                        return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))
                    } : function (t) {
                        return Object.getOwnPropertyNames(t)
                    };
                    var s = Number.isNaN || function (t) {
                        return t != t
                    };

                    function a() {
                        a.init.call(this)
                    }
                    t.exports = a, t.exports.once = function (t, e) {
                        return new Promise((function (n, r) {
                            function i() {
                                void 0 !== o && t.removeListener("error", o), n([].slice.call(arguments))
                            }
                            var o;
                            "error" !== e && (o = function (n) {
                                t.removeListener(e, i), r(n)
                            }, t.once("error", o)), t.once(e, i)
                        }))
                    }, a.EventEmitter = a, a.prototype._events = void 0, a.prototype._eventsCount = 0, a.prototype._maxListeners = void 0;
                    var u = 10;

                    function c(t) {
                        if ("function" != typeof t) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t)
                    }

                    function l(t) {
                        return void 0 === t._maxListeners ? a.defaultMaxListeners : t._maxListeners
                    }

                    function h(t, e, n, r) {
                        var i, o, s;
                        if (c(n), void 0 === (o = t._events) ? (o = t._events = Object.create(null), t._eventsCount = 0) : (void 0 !== o.newListener && (t.emit("newListener", e, n.listener ? n.listener : n), o = t._events), s = o[e]), void 0 === s) s = o[e] = n, ++t._eventsCount;
                        else if ("function" == typeof s ? s = o[e] = r ? [n, s] : [s, n] : r ? s.unshift(n) : s.push(n), (i = l(t)) > 0 && s.length > i && !s.warned) {
                            s.warned = !0;
                            var a = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                            a.name = "MaxListenersExceededWarning", a.emitter = t, a.type = e, a.count = s.length, console && console.warn && console.warn(a)
                        }
                        return t
                    }

                    function p() {
                        if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
                    }

                    function d(t, e, n) {
                        var r = {
                                fired: !1,
                                wrapFn: void 0,
                                target: t,
                                type: e,
                                listener: n
                            },
                            i = p.bind(r);
                        return i.listener = n, r.wrapFn = i, i
                    }

                    function f(t, e, n) {
                        var r = t._events;
                        if (void 0 === r) return [];
                        var i = r[e];
                        return void 0 === i ? [] : "function" == typeof i ? n ? [i.listener || i] : [i] : n ? function (t) {
                            for (var e = new Array(t.length), n = 0; n < e.length; ++n) e[n] = t[n].listener || t[n];
                            return e
                        }(i) : m(i, i.length)
                    }

                    function g(t) {
                        var e = this._events;
                        if (void 0 !== e) {
                            var n = e[t];
                            if ("function" == typeof n) return 1;
                            if (void 0 !== n) return n.length
                        }
                        return 0
                    }

                    function m(t, e) {
                        for (var n = new Array(e), r = 0; r < e; ++r) n[r] = t[r];
                        return n
                    }
                    Object.defineProperty(a, "defaultMaxListeners", {
                        enumerable: !0,
                        get: function () {
                            return u
                        },
                        set: function (t) {
                            if ("number" != typeof t || t < 0 || s(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
                            u = t
                        }
                    }), a.init = function () {
                        void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
                    }, a.prototype.setMaxListeners = function (t) {
                        if ("number" != typeof t || t < 0 || s(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
                        return this._maxListeners = t, this
                    }, a.prototype.getMaxListeners = function () {
                        return l(this)
                    }, a.prototype.emit = function (t) {
                        for (var e = [], n = 1; n < arguments.length; n++) e.push(arguments[n]);
                        var r = "error" === t,
                            i = this._events;
                        if (void 0 !== i) r = r && void 0 === i.error;
                        else if (!r) return !1;
                        if (r) {
                            var s;
                            if (e.length > 0 && (s = e[0]), s instanceof Error) throw s;
                            var a = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
                            throw a.context = s, a
                        }
                        var u = i[t];
                        if (void 0 === u) return !1;
                        if ("function" == typeof u) o(u, this, e);
                        else {
                            var c = u.length,
                                l = m(u, c);
                            for (n = 0; n < c; ++n) o(l[n], this, e)
                        }
                        return !0
                    }, a.prototype.on = a.prototype.addListener = function (t, e) {
                        return h(this, t, e, !1)
                    }, a.prototype.prependListener = function (t, e) {
                        return h(this, t, e, !0)
                    }, a.prototype.once = function (t, e) {
                        return c(e), this.on(t, d(this, t, e)), this
                    }, a.prototype.prependOnceListener = function (t, e) {
                        return c(e), this.prependListener(t, d(this, t, e)), this
                    }, a.prototype.off = a.prototype.removeListener = function (t, e) {
                        var n, r, i, o, s;
                        if (c(e), void 0 === (r = this._events)) return this;
                        if (void 0 === (n = r[t])) return this;
                        if (n === e || n.listener === e) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete r[t], r.removeListener && this.emit("removeListener", t, n.listener || e));
                        else if ("function" != typeof n) {
                            for (i = -1, o = n.length - 1; o >= 0; o--)
                                if (n[o] === e || n[o].listener === e) {
                                    s = n[o].listener, i = o;
                                    break
                                } if (i < 0) return this;
                            0 === i ? n.shift() : function (t, e) {
                                for (; e + 1 < t.length; e++) t[e] = t[e + 1];
                                t.pop()
                            }(n, i), 1 === n.length && (r[t] = n[0]), void 0 !== r.removeListener && this.emit("removeListener", t, s || e)
                        }
                        return this
                    }, a.prototype.removeAllListeners = function (t) {
                        var e, n, r;
                        if (void 0 === (n = this._events)) return this;
                        if (void 0 === n.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== n[t] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n[t]), this;
                        if (0 === arguments.length) {
                            var i, o = Object.keys(n);
                            for (r = 0; r < o.length; ++r) "removeListener" !== (i = o[r]) && this.removeAllListeners(i);
                            return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
                        }
                        if ("function" == typeof (e = n[t])) this.removeListener(t, e);
                        else if (void 0 !== e)
                            for (r = e.length - 1; r >= 0; r--) this.removeListener(t, e[r]);
                        return this
                    }, a.prototype.listeners = function (t) {
                        return f(this, t, !0)
                    }, a.prototype.rawListeners = function (t) {
                        return f(this, t, !1)
                    }, a.listenerCount = function (t, e) {
                        return "function" == typeof t.listenerCount ? t.listenerCount(e) : g.call(t, e)
                    }, a.prototype.listenerCount = g, a.prototype.eventNames = function () {
                        return this._eventsCount > 0 ? r(this._events) : []
                    }
                },
                0: function (t, e, n) {
                    t.exports = n("zUnb")
                },
                "0dQ4": function (t, e) {
                    (function () {
                        t.exports = {
                            Disconnected: 1,
                            Preceding: 2,
                            Following: 4,
                            Contains: 8,
                            ContainedBy: 16,
                            ImplementationSpecific: 32
                        }
                    }).call(this)
                },
                "1+OA": function (t, e, n) {
                    (function () {
                        var e, r, i, o, s, a, u, c, l = {}.hasOwnProperty;
                        c = n("RfOz").isObject, u = n("kud4"), e = n("Bl63"), r = n("GI8a"), o = n("FYWk"), i = n("OzLs"), s = n("tuH/"), a = n("XCq/"), t.exports = function (t) {
                            function n(t, r, i) {
                                var o, s, a, u, l, h;
                                if (n.__super__.constructor.call(this, t), this.type = e.DocType, t.children)
                                    for (s = 0, a = (u = t.children).length; s < a; s++)
                                        if ((o = u[s]).type === e.Element) {
                                            this.name = o.name;
                                            break
                                        } this.documentObject = t, c(r) && (r = (l = r).pubID, i = l.sysID), null == i && (i = (h = [r, i])[0], r = h[1]), null != r && (this.pubID = this.stringify.dtdPubID(r)), null != i && (this.sysID = this.stringify.dtdSysID(i))
                            }
                            return function (t, e) {
                                for (var n in e) l.call(e, n) && (t[n] = e[n]);

                                function r() {
                                    this.constructor = t
                                }
                                r.prototype = e.prototype, t.prototype = new r, t.__super__ = e.prototype
                            }(n, t), Object.defineProperty(n.prototype, "entities", {
                                get: function () {
                                    var t, n, r, i, o;
                                    for (i = {}, n = 0, r = (o = this.children).length; n < r; n++)(t = o[n]).type !== e.EntityDeclaration || t.pe || (i[t.name] = t);
                                    return new a(i)
                                }
                            }), Object.defineProperty(n.prototype, "notations", {
                                get: function () {
                                    var t, n, r, i, o;
                                    for (i = {}, n = 0, r = (o = this.children).length; n < r; n++)(t = o[n]).type === e.NotationDeclaration && (i[t.name] = t);
                                    return new a(i)
                                }
                            }), Object.defineProperty(n.prototype, "publicId", {
                                get: function () {
                                    return this.pubID
                                }
                            }), Object.defineProperty(n.prototype, "systemId", {
                                get: function () {
                                    return this.sysID
                                }
                            }), Object.defineProperty(n.prototype, "internalSubset", {
                                get: function () {
                                    throw new Error("This DOM method is not implemented." + this.debugInfo())
                                }
                            }), n.prototype.element = function (t, e) {
                                var n;
                                return n = new i(this, t, e), this.children.push(n), this
                            }, n.prototype.attList = function (t, e, n, i, o) {
                                var s;
                                return s = new r(this, t, e, n, i, o), this.children.push(s), this
                            }, n.prototype.entity = function (t, e) {
                                var n;
                                return n = new o(this, !1, t, e), this.children.push(n), this
                            }, n.prototype.pEntity = function (t, e) {
                                var n;
                                return n = new o(this, !0, t, e), this.children.push(n), this
                            }, n.prototype.notation = function (t, e) {
                                var n;
                                return n = new s(this, t, e), this.children.push(n), this
                            }, n.prototype.toString = function (t) {
                                return this.options.writer.docType(this, this.options.writer.filterOptions(t))
                            }, n.prototype.ele = function (t, e) {
                                return this.element(t, e)
                            }, n.prototype.att = function (t, e, n, r, i) {
                                return this.attList(t, e, n, r, i)
                            }, n.prototype.ent = function (t, e) {
                                return this.entity(t, e)
                            }, n.prototype.pent = function (t, e) {
                                return this.pEntity(t, e)
                            }, n.prototype.not = function (t, e) {
                                return this.notation(t, e)
                            }, n.prototype.up = function () {
                                return this.root() || this.documentObject
                            }, n.prototype.isEqualNode = function (t) {
                                return !!n.__super__.isEqualNode.apply(this, arguments).isEqualNode(t) && t.name === this.name && t.publicId === this.publicId && t.systemId === this.systemId
                            }, n
                        }(u)
                    }).call(this)
                },
                "2QA8": function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return r
                    }));
                    const r = (() => "function" == typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random())()
                },
                "2Vo4": function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return o
                    }));
                    var r = n("XNiG"),
                        i = n("9ppp");
                    class o extends r.a {
                        constructor(t) {
                            super(), this._value = t
                        }
                        get value() {
                            return this.getValue()
                        }
                        _subscribe(t) {
                            const e = super._subscribe(t);
                            return e && !e.closed && t.next(this._value), e
                        }
                        getValue() {
                            if (this.hasError) throw this.thrownError;
                            if (this.closed) throw new i.a;
                            return this._value
                        }
                        next(t) {
                            super.next(this._value = t)
                        }
                    }
                },
                "2fFW": function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return i
                    }));
                    let r = !1;
                    const i = {
                        Promise: void 0,
                        set useDeprecatedSynchronousErrorHandling(t) {
                            if (t) {
                                const t = new Error;
                                console.warn("DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" + t.stack)
                            } else r && console.log("RxJS: Back to a better error behavior. Thank you. <3");
                            r = t
                        },
                        get useDeprecatedSynchronousErrorHandling() {
                            return r
                        }
                    }
                },
                "3Pt+": function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return s
                    }));
                    var r = n("fXoL");
                    n("ofXK"), n("HDdC"), n("DH7j"), n("lJxs"), n("XoHu"), n("Cfvw");
                    let i = (() => {
                            class t {
                                constructor() {
                                    this._accessors = []
                                }
                                add(t, e) {
                                    this._accessors.push([t, e])
                                }
                                remove(t) {
                                    for (let e = this._accessors.length - 1; e >= 0; --e)
                                        if (this._accessors[e][1] === t) return void this._accessors.splice(e, 1)
                                }
                                select(t) {
                                    this._accessors.forEach(e => {
                                        this._isSameGroup(e, t) && e[1] !== t && e[1].fireUncheck(t.value)
                                    })
                                }
                                _isSameGroup(t, e) {
                                    return !!t[0].control && t[0]._parent === e._control._parent && t[1].name === e.name
                                }
                            }
                            return t.\u0275fac = function (e) {
                                return new(e || t)
                            }, t.\u0275prov = r.Db({
                                token: t,
                                factory: t.\u0275fac
                            }), t
                        })(),
                        o = (() => {
                            class t {}
                            return t.\u0275mod = r.Fb({
                                type: t
                            }), t.\u0275inj = r.Eb({
                                factory: function (e) {
                                    return new(e || t)
                                }
                            }), t
                        })(),
                        s = (() => {
                            class t {}
                            return t.\u0275mod = r.Fb({
                                type: t
                            }), t.\u0275inj = r.Eb({
                                factory: function (e) {
                                    return new(e || t)
                                },
                                providers: [i],
                                imports: [o]
                            }), t
                        })()
                },
                "49sm": function (t, e) {
                    var n = {}.toString;
                    t.exports = Array.isArray || function (t) {
                        return "[object Array]" == n.call(t)
                    }
                },
                "5+tZ": function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return s
                    }));
                    var r = n("lJxs"),
                        i = n("Cfvw"),
                        o = n("zx2A");

                    function s(t, e, n = Number.POSITIVE_INFINITY) {
                        return "function" == typeof e ? o => o.pipe(s((n, o) => Object(i.a)(t(n, o)).pipe(Object(r.a)((t, r) => e(n, t, o, r))), n)) : ("number" == typeof e && (n = e), e => e.lift(new a(t, n)))
                    }
                    class a {
                        constructor(t, e = Number.POSITIVE_INFINITY) {
                            this.project = t, this.concurrent = e
                        }
                        call(t, e) {
                            return e.subscribe(new u(t, this.project, this.concurrent))
                        }
                    }
                    class u extends o.b {
                        constructor(t, e, n = Number.POSITIVE_INFINITY) {
                            super(t), this.project = e, this.concurrent = n, this.hasCompleted = !1, this.buffer = [], this.active = 0, this.index = 0
                        }
                        _next(t) {
                            this.active < this.concurrent ? this._tryNext(t) : this.buffer.push(t)
                        }
                        _tryNext(t) {
                            let e;
                            const n = this.index++;
                            try {
                                e = this.project(t, n)
                            } catch (r) {
                                return void this.destination.error(r)
                            }
                            this.active++, this._innerSub(e)
                        }
                        _innerSub(t) {
                            const e = new o.a(this),
                                n = this.destination;
                            n.add(e);
                            const r = Object(o.c)(t, e);
                            r !== e && n.add(r)
                        }
                        _complete() {
                            this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete(), this.unsubscribe()
                        }
                        notifyNext(t) {
                            this.destination.next(t)
                        }
                        notifyComplete() {
                            const t = this.buffer;
                            this.active--, t.length > 0 ? this._next(t.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete()
                        }
                    }
                },
                "62BN": function (t, e) {
                    e.every = function (t) {
                        return new i(t)
                    };
                    var n = {
                        millisecond: 1,
                        second: 1e3,
                        minute: 6e4,
                        hour: 36e5,
                        day: 864e5
                    };
                    for (var r in n) "millisecond" === r ? n.ms = n[r] : n[r.charAt(0)] = n[r], n[r + "s"] = n[r];

                    function i(t) {
                        this.count = 0;
                        var e = function (t) {
                            var e = t.match(o);
                            return e && n[e[2]] ? e.slice(1) : null
                        }(t);
                        e && (this.time = Number(e[0]) * n[e[1]], this.type = e[1])
                    }
                    i.prototype.do = function (t) {
                        this.time && (this.interval = setInterval((function () {
                            e.count++, t.call(e)
                        }), this.time));
                        var e = this;
                        return this
                    }, i.prototype.stop = function () {
                        return this.interval && (clearInterval(this.interval), delete this.interval), this
                    };
                    var o = /^\s*(\d+(?:\.\d+)?)\s*([a-z]+)\s*$/
                },
                "7o/Q": function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return c
                    }));
                    var r = n("n6bG"),
                        i = n("gRHU"),
                        o = n("quSY"),
                        s = n("2QA8"),
                        a = n("2fFW"),
                        u = n("NJ4a");
                    class c extends o.a {
                        constructor(t, e, n) {
                            switch (super(), this.syncErrorValue = null, this.syncErrorThrown = !1, this.syncErrorThrowable = !1, this.isStopped = !1, arguments.length) {
                                case 0:
                                    this.destination = i.a;
                                    break;
                                case 1:
                                    if (!t) {
                                        this.destination = i.a;
                                        break
                                    }
                                    if ("object" == typeof t) {
                                        t instanceof c ? (this.syncErrorThrowable = t.syncErrorThrowable, this.destination = t, t.add(this)) : (this.syncErrorThrowable = !0, this.destination = new l(this, t));
                                        break
                                    }
                                    default:
                                        this.syncErrorThrowable = !0, this.destination = new l(this, t, e, n)
                            }
                        } [s.a]() {
                            return this
                        }
                        static create(t, e, n) {
                            const r = new c(t, e, n);
                            return r.syncErrorThrowable = !1, r
                        }
                        next(t) {
                            this.isStopped || this._next(t)
                        }
                        error(t) {
                            this.isStopped || (this.isStopped = !0, this._error(t))
                        }
                        complete() {
                            this.isStopped || (this.isStopped = !0, this._complete())
                        }
                        unsubscribe() {
                            this.closed || (this.isStopped = !0, super.unsubscribe())
                        }
                        _next(t) {
                            this.destination.next(t)
                        }
                        _error(t) {
                            this.destination.error(t), this.unsubscribe()
                        }
                        _complete() {
                            this.destination.complete(), this.unsubscribe()
                        }
                        _unsubscribeAndRecycle() {
                            const {
                                _parentOrParents: t
                            } = this;
                            return this._parentOrParents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parentOrParents = t, this
                        }
                    }
                    class l extends c {
                        constructor(t, e, n, o) {
                            let s;
                            super(), this._parentSubscriber = t;
                            let a = this;
                            Object(r.a)(e) ? s = e : e && (s = e.next, n = e.error, o = e.complete, e !== i.a && (a = Object.create(e), Object(r.a)(a.unsubscribe) && this.add(a.unsubscribe.bind(a)), a.unsubscribe = this.unsubscribe.bind(this))), this._context = a, this._next = s, this._error = n, this._complete = o
                        }
                        next(t) {
                            if (!this.isStopped && this._next) {
                                const {
                                    _parentSubscriber: e
                                } = this;
                                a.a.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe() : this.__tryOrUnsub(this._next, t)
                            }
                        }
                        error(t) {
                            if (!this.isStopped) {
                                const {
                                    _parentSubscriber: e
                                } = this, {
                                    useDeprecatedSynchronousErrorHandling: n
                                } = a.a;
                                if (this._error) n && e.syncErrorThrowable ? (this.__tryOrSetError(e, this._error, t), this.unsubscribe()) : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
                                else if (e.syncErrorThrowable) n ? (e.syncErrorValue = t, e.syncErrorThrown = !0) : Object(u.a)(t), this.unsubscribe();
                                else {
                                    if (this.unsubscribe(), n) throw t;
                                    Object(u.a)(t)
                                }
                            }
                        }
                        complete() {
                            if (!this.isStopped) {
                                const {
                                    _parentSubscriber: t
                                } = this;
                                if (this._complete) {
                                    const e = () => this._complete.call(this._context);
                                    a.a.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable ? (this.__tryOrSetError(t, e), this.unsubscribe()) : (this.__tryOrUnsub(e), this.unsubscribe())
                                } else this.unsubscribe()
                            }
                        }
                        __tryOrUnsub(t, e) {
                            try {
                                t.call(this._context, e)
                            } catch (n) {
                                if (this.unsubscribe(), a.a.useDeprecatedSynchronousErrorHandling) throw n;
                                Object(u.a)(n)
                            }
                        }
                        __tryOrSetError(t, e, n) {
                            if (!a.a.useDeprecatedSynchronousErrorHandling) throw new Error("bad call");
                            try {
                                e.call(this._context, n)
                            } catch (r) {
                                return a.a.useDeprecatedSynchronousErrorHandling ? (t.syncErrorValue = r, t.syncErrorThrown = !0, !0) : (Object(u.a)(r), !0)
                            }
                            return !1
                        }
                        _unsubscribe() {
                            const {
                                _parentSubscriber: t
                            } = this;
                            this._context = null, this._parentSubscriber = null, t.unsubscribe()
                        }
                    }
                },
                "8BaB": function (t, e, n) {
                    (function () {
                        var e, r, i = {}.hasOwnProperty;
                        e = n("Bl63"), r = n("V4+3"), t.exports = function (t) {
                            function n(t, r, i) {
                                if (n.__super__.constructor.call(this, t), null == r) throw new Error("Missing instruction target. " + this.debugInfo());
                                this.type = e.ProcessingInstruction, this.target = this.stringify.insTarget(r), this.name = this.target, i && (this.value = this.stringify.insValue(i))
                            }
                            return function (t, e) {
                                for (var n in e) i.call(e, n) && (t[n] = e[n]);

                                function r() {
                                    this.constructor = t
                                }
                                r.prototype = e.prototype, t.prototype = new r, t.__super__ = e.prototype
                            }(n, t), n.prototype.clone = function () {
                                return Object.create(this)
                            }, n.prototype.toString = function (t) {
                                return this.options.writer.processingInstruction(this, this.options.writer.filterOptions(t))
                            }, n.prototype.isEqualNode = function (t) {
                                return !!n.__super__.isEqualNode.apply(this, arguments).isEqualNode(t) && t.target === this.target
                            }, n
                        }(r)
                    }).call(this)
                },
                "9ppp": function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return r
                    }));
                    const r = (() => {
                        function t() {
                            return Error.call(this), this.message = "object unsubscribed", this.name = "ObjectUnsubscribedError", this
                        }
                        return t.prototype = Object.create(Error.prototype), t
                    })()
                },
                AytR: function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return r
                    }));
                    const r = {
                        production: !0,
                        application: {
                            name: "angular-starter",
                            angular: "Angular 10.0.8",
                            bootstrap: "Bootstrap 4.5.1",
                            fontawesome: "Font Awesome 5.14.0"
                        }
                    }
                },
                BEho: function (t, e, n) {
                    "use strict";

                    function r(t, e, n, r) {
                        return new(n || (n = Promise))((function (i, o) {
                            function s(t) {
                                try {
                                    u(r.next(t))
                                } catch (e) {
                                    o(e)
                                }
                            }

                            function a(t) {
                                try {
                                    u(r.throw(t))
                                } catch (e) {
                                    o(e)
                                }
                            }

                            function u(t) {
                                var e;
                                t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n((function (t) {
                                    t(e)
                                }))).then(s, a)
                            }
                            u((r = r.apply(t, e || [])).next())
                        }))
                    }
                    n.d(e, "a", (function () {
                        return u
                    }));
                    var i = n("tk/3"),
                        o = n("2Vo4"),
                        s = n("fXoL"),
                        a = n("b6Qw");
                    let u = (() => {
                        class t {
                            constructor(t, e) {
                                this.http = t, this.cookieService = e, this._isLogged = new o.a(!1), this.isLogged = this._isLogged.asObservable(), this.url = "//ftp.etud.insa-toulouse.fr/", e.get("username") && (this.user = {
                                    username: e.get("username"),
                                    grade: e.get("grade")
                                }, this._isLogged.next(!0))
                            }
                            isUserValid(t) {
                                let e = new i.c;
                                return e = e.append("user", t), this.http.get(this.url + "isUserValid", {
                                    params: e
                                })
                            }
                            initGoogleAuth() {
                                return r(this, void 0, void 0, (function* () {
                                    return new Promise(t => {
                                        gapi.load("auth2", t)
                                    }).then(() => r(this, void 0, void 0, (function* () {
                                        yield gapi.auth2.init({
                                            client_id: "287226960863-42hp4g9gh596ofdndgmdej55quc7ie48.apps.googleusercontent.com"
                                        }).then(t => {
                                            this.gapiSetup = !0, this.authInstance = t
                                        })
                                    })))
                                }))
                            }
                            authenticateGoogle() {
                                return r(this, void 0, void 0, (function* () {
                                    return this.gapiSetup || (yield this.initGoogleAuth()), new Promise(() => r(this, void 0, void 0, (function* () {
                                        yield this.authInstance.signIn().then(t => this.userG = t, t => this.error = t), console.log(this.userG.getBasicProfile().Ad), this.authenticate(this.userG.getBasicProfile().Ad).subscribe(t => {
                                            this.setUser(t)
                                        })
                                    })))
                                }))
                            }
                            checkIfUserAuthenticated() {
                                return r(this, void 0, void 0, (function* () {
                                    return this.gapiSetup || (yield this.initGoogleAuth()), this.authInstance.isSignedIn.get()
                                }))
                            }
                            authenticate(t) {
                                let e = new i.c;
                                return e = e.append("username", t), this.http.get(this.url + "authenticate", {
                                    params: e
                                })
                            }
                            getLeaderboardGeneral() {
                                return this.http.get(this.url + "getLeaderboardGeneral")
                            }
                            getLeaderboardPerGame(t) {
                                let e = new i.c;
                                return e = e.append("game", t), this.http.get(this.url + "getLeaderboardPerGame", {
                                    params: e
                                })
                            }
                            getLeaderboardCourseLimit() {
                                return this.http.get(this.url + "getLeaderboardCourseLimit")
                            }
                            getLeaderboardPerGameLimit(t) {
                                let e = new i.c;
                                return e = e.append("game", t), this.http.get(this.url + "getLeaderboardPerGameLimit", {
                                    params: e
                                })
                            }
                            getLeaderboardCourse() {
                                return this.http.get(this.url + "getLeaderboardCourse")
                            }
                            getLeaderboardGeneralLimit() {
                                return this.http.get(this.url + "getLeaderboardGeneralLimit")
                            }
                            getLeaderboardCourseGen() {
                                return this.http.get(this.url + "getLeaderboardCourseGen")
                            }
                            getUserAvg(t) {
                                let e = new i.c;
                                return e = e.append("username", t), this.http.get(this.url + "getUserAvg", {
                                    params: e
                                })
                            }
                            getUserGame(t, e) {
                                let n = new i.c;
                                return n = n.append("username", t), n = n.append("game", e), this.http.get(this.url + "getUserGame", {
                                    params: n
                                })
                            }
                            updateUser(t, e, n) {
                                console.log("youpiiiiiii");
                                let r = new i.c;
                                return r = r.append("username", t), r = r.append("game", e), r = r.append("score", "17614"), this.http.post(this.url + "updateUser", {
                                    params: r
                                })
                            }
                            setUser(t) {
                                console.log("setUser"), console.log(t), this.user = {
                                    username: t.username,
                                    grade: t.grade
                                }, this.cookieService.set("username", this.user.username), this.cookieService.set("grade", this.user.grade), this._isLogged.next(!0)
                            }
                            getUser() {
                                return console.log("getUser"), console.log(this.user), this.user
                            }
                            isUserLogged() {
                                return this._isLogged.getValue()
                            }
                            disconnect() {
                                this._isLogged.next(!1), this.cookieService.deleteAll(), this.authInstance.disconnect()
                            }
                        }
                        return t.\u0275fac = function (e) {
                            return new(e || t)(s.Pb(i.a), s.Pb(a.a))
                        }, t.\u0275prov = s.Db({
                            token: t,
                            factory: t.\u0275fac,
                            providedIn: "root"
                        }), t
                    })()
                },
                BMbm: function (t, e) {
                    (function () {
                        t.exports = function () {
                            function t(t) {
                                this.nodes = t
                            }
                            return Object.defineProperty(t.prototype, "length", {
                                get: function () {
                                    return this.nodes.length || 0
                                }
                            }), t.prototype.clone = function () {
                                return this.nodes = null
                            }, t.prototype.item = function (t) {
                                return this.nodes[t] || null
                            }, t
                        }()
                    }).call(this)
                },
                Bl63: function (t, e) {
                    (function () {
                        t.exports = {
                            Element: 1,
                            Attribute: 2,
                            Text: 3,
                            CData: 4,
                            EntityReference: 5,
                            EntityDeclaration: 6,
                            ProcessingInstruction: 7,
                            Comment: 8,
                            Document: 9,
                            DocType: 10,
                            DocumentFragment: 11,
                            NotationDeclaration: 12,
                            Declaration: 201,
                            Raw: 202,
                            AttributeDeclaration: 203,
                            ElementDeclaration: 204,
                            Dummy: 205
                        }
                    }).call(this)
                },
                CDzl: function (t, e, n) {
                    (function () {
                        "use strict";
                        var t, r, i, o, s = {}.hasOwnProperty;
                        r = n("pn46"), t = n("QVo3"), i = n("qxDF"), o = n("gTaY"), e.defaults = r.defaults, e.processors = o, e.ValidationError = function (t) {
                            function e(t) {
                                this.message = t
                            }
                            return function (t, e) {
                                for (var n in e) s.call(e, n) && (t[n] = e[n]);

                                function r() {
                                    this.constructor = t
                                }
                                r.prototype = e.prototype, t.prototype = new r, t.__super__ = e.prototype
                            }(e, Error), e
                        }(), e.Builder = t.Builder, e.Parser = i.Parser, e.parseString = i.parseString, e.parseStringPromise = i.parseStringPromise
                    }).call(this)
                },
                CYXk: function (t, e) {
                    (function () {
                        t.exports = {
                            None: 0,
                            OpenTag: 1,
                            InsideTag: 2,
                            CloseTag: 3
                        }
                    }).call(this)
                },
                Cfvw: function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return h
                    }));
                    var r = n("HDdC"),
                        i = n("SeVD"),
                        o = n("quSY"),
                        s = n("kJWO"),
                        a = n("jZKg"),
                        u = n("Lhse"),
                        c = n("c2HN"),
                        l = n("I55L");

                    function h(t, e) {
                        return e ? function (t, e) {
                            if (null != t) {
                                if (function (t) {
                                        return t && "function" == typeof t[s.a]
                                    }(t)) return function (t, e) {
                                    return new r.a(n => {
                                        const r = new o.a;
                                        return r.add(e.schedule(() => {
                                            const i = t[s.a]();
                                            r.add(i.subscribe({
                                                next(t) {
                                                    r.add(e.schedule(() => n.next(t)))
                                                },
                                                error(t) {
                                                    r.add(e.schedule(() => n.error(t)))
                                                },
                                                complete() {
                                                    r.add(e.schedule(() => n.complete()))
                                                }
                                            }))
                                        })), r
                                    })
                                }(t, e);
                                if (Object(c.a)(t)) return function (t, e) {
                                    return new r.a(n => {
                                        const r = new o.a;
                                        return r.add(e.schedule(() => t.then(t => {
                                            r.add(e.schedule(() => {
                                                n.next(t), r.add(e.schedule(() => n.complete()))
                                            }))
                                        }, t => {
                                            r.add(e.schedule(() => n.error(t)))
                                        }))), r
                                    })
                                }(t, e);
                                if (Object(l.a)(t)) return Object(a.a)(t, e);
                                if (function (t) {
                                        return t && "function" == typeof t[u.a]
                                    }(t) || "string" == typeof t) return function (t, e) {
                                    if (!t) throw new Error("Iterable cannot be null");
                                    return new r.a(n => {
                                        const r = new o.a;
                                        let i;
                                        return r.add(() => {
                                            i && "function" == typeof i.return && i.return()
                                        }), r.add(e.schedule(() => {
                                            i = t[u.a](), r.add(e.schedule((function () {
                                                if (n.closed) return;
                                                let t, e;
                                                try {
                                                    const n = i.next();
                                                    t = n.value, e = n.done
                                                } catch (r) {
                                                    return void n.error(r)
                                                }
                                                e ? n.complete() : (n.next(t), this.schedule())
                                            })))
                                        })), r
                                    })
                                }(t, e)
                            }
                            throw new TypeError((null !== t && typeof t || t) + " is not observable")
                        }(t, e) : t instanceof r.a ? t : new r.a(Object(i.a)(t))
                    }
                },
                Cm3p: function (t, e) {
                    (function () {
                        t.exports = function () {
                            function t() {}
                            return t.prototype.hasFeature = function (t, e) {
                                return !0
                            }, t.prototype.createDocumentType = function (t, e, n) {
                                throw new Error("This DOM method is not implemented.")
                            }, t.prototype.createDocument = function (t, e, n) {
                                throw new Error("This DOM method is not implemented.")
                            }, t.prototype.createHTMLDocument = function (t) {
                                throw new Error("This DOM method is not implemented.")
                            }, t.prototype.getFeature = function (t, e) {
                                throw new Error("This DOM method is not implemented.")
                            }, t
                        }()
                    }).call(this)
                },
                DD3b: function (t, e, n) {
                    var r = n("j0oL");

                    function i() {
                        r.call(this)
                    }
                    i.prototype = new r, t.exports = i, i.Stream = i, i.prototype.pipe = function (t, e) {
                        var n = this;

                        function r(e) {
                            t.writable && !1 === t.write(e) && n.pause && n.pause()
                        }

                        function i() {
                            n.readable && n.resume && n.resume()
                        }
                        n.on("data", r), t.on("drain", i), t._isStdio || e && !1 === e.end || (n.on("end", s), n.on("close", a));
                        var o = !1;

                        function s() {
                            o || (o = !0, t.end())
                        }

                        function a() {
                            o || (o = !0, "function" == typeof t.destroy && t.destroy())
                        }

                        function u(t) {
                            if (c(), !this.hasListeners("error")) throw t
                        }

                        function c() {
                            n.off("data", r), t.off("drain", i), n.off("end", s), n.off("close", a), n.off("error", u), t.off("error", u), n.off("end", c), n.off("close", c), t.off("end", c), t.off("close", c)
                        }
                        return n.on("error", u), t.on("error", u), n.on("end", c), n.on("close", c), t.on("end", c), t.on("close", c), t.emit("pipe", n), t
                    }
                },
                DH7j: function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return r
                    }));
                    const r = (() => Array.isArray || (t => t && "number" == typeof t.length))()
                },
                Dh7r: function (t, e, n) {
                    (function () {
                        var e, r, i = {}.hasOwnProperty;
                        r = n("kud4"), e = n("Bl63"), t.exports = function (t) {
                            function n(t) {
                                n.__super__.constructor.call(this, t), this.type = e.Dummy
                            }
                            return function (t, e) {
                                for (var n in e) i.call(e, n) && (t[n] = e[n]);

                                function r() {
                                    this.constructor = t
                                }
                                r.prototype = e.prototype, t.prototype = new r, t.__super__ = e.prototype
                            }(n, t), n.prototype.clone = function () {
                                return Object.create(this)
                            }, n.prototype.toString = function (t) {
                                return ""
                            }, n
                        }(r)
                    }).call(this)
                },
                FYWk: function (t, e, n) {
                    (function () {
                        var e, r, i, o = {}.hasOwnProperty;
                        i = n("RfOz").isObject, r = n("kud4"), e = n("Bl63"), t.exports = function (t) {
                            function n(t, r, o, s) {
                                if (n.__super__.constructor.call(this, t), null == o) throw new Error("Missing DTD entity name. " + this.debugInfo(o));
                                if (null == s) throw new Error("Missing DTD entity value. " + this.debugInfo(o));
                                if (this.pe = !!r, this.name = this.stringify.name(o), this.type = e.EntityDeclaration, i(s)) {
                                    if (!s.pubID && !s.sysID) throw new Error("Public and/or system identifiers are required for an external entity. " + this.debugInfo(o));
                                    if (s.pubID && !s.sysID) throw new Error("System identifier is required for a public external entity. " + this.debugInfo(o));
                                    if (this.internal = !1, null != s.pubID && (this.pubID = this.stringify.dtdPubID(s.pubID)), null != s.sysID && (this.sysID = this.stringify.dtdSysID(s.sysID)), null != s.nData && (this.nData = this.stringify.dtdNData(s.nData)), this.pe && this.nData) throw new Error("Notation declaration is not allowed in a parameter entity. " + this.debugInfo(o))
                                } else this.value = this.stringify.dtdEntityValue(s), this.internal = !0
                            }
                            return function (t, e) {
                                for (var n in e) o.call(e, n) && (t[n] = e[n]);

                                function r() {
                                    this.constructor = t
                                }
                                r.prototype = e.prototype, t.prototype = new r, t.__super__ = e.prototype
                            }(n, t), Object.defineProperty(n.prototype, "publicId", {
                                get: function () {
                                    return this.pubID
                                }
                            }), Object.defineProperty(n.prototype, "systemId", {
                                get: function () {
                                    return this.sysID
                                }
                            }), Object.defineProperty(n.prototype, "notationName", {
                                get: function () {
                                    return this.nData || null
                                }
                            }), Object.defineProperty(n.prototype, "inputEncoding", {
                                get: function () {
                                    return null
                                }
                            }), Object.defineProperty(n.prototype, "xmlEncoding", {
                                get: function () {
                                    return null
                                }
                            }), Object.defineProperty(n.prototype, "xmlVersion", {
                                get: function () {
                                    return null
                                }
                            }), n.prototype.toString = function (t) {
                                return this.options.writer.dtdEntity(this, this.options.writer.filterOptions(t))
                            }, n
                        }(r)
                    }).call(this)
                },
                "G/lS": function (t, e) {
                    (function () {
                        t.exports = function () {
                            function t(t) {
                                this.arr = t || []
                            }
                            return Object.defineProperty(t.prototype, "length", {
                                get: function () {
                                    return this.arr.length
                                }
                            }), t.prototype.item = function (t) {
                                return this.arr[t] || null
                            }, t.prototype.contains = function (t) {
                                return -1 !== this.arr.indexOf(t)
                            }, t
                        }()
                    }).call(this)
                },
                GI8a: function (t, e, n) {
                    (function () {
                        var e, r, i = {}.hasOwnProperty;
                        r = n("kud4"), e = n("Bl63"), t.exports = function (t) {
                            function n(t, r, i, o, s, a) {
                                if (n.__super__.constructor.call(this, t), null == r) throw new Error("Missing DTD element name. " + this.debugInfo());
                                if (null == i) throw new Error("Missing DTD attribute name. " + this.debugInfo(r));
                                if (!o) throw new Error("Missing DTD attribute type. " + this.debugInfo(r));
                                if (!s) throw new Error("Missing DTD attribute default. " + this.debugInfo(r));
                                if (0 !== s.indexOf("#") && (s = "#" + s), !s.match(/^(#REQUIRED|#IMPLIED|#FIXED|#DEFAULT)$/)) throw new Error("Invalid default value type; expected: #REQUIRED, #IMPLIED, #FIXED or #DEFAULT. " + this.debugInfo(r));
                                if (a && !s.match(/^(#FIXED|#DEFAULT)$/)) throw new Error("Default value only applies to #FIXED or #DEFAULT. " + this.debugInfo(r));
                                this.elementName = this.stringify.name(r), this.type = e.AttributeDeclaration, this.attributeName = this.stringify.name(i), this.attributeType = this.stringify.dtdAttType(o), a && (this.defaultValue = this.stringify.dtdAttDefault(a)), this.defaultValueType = s
                            }
                            return function (t, e) {
                                for (var n in e) i.call(e, n) && (t[n] = e[n]);

                                function r() {
                                    this.constructor = t
                                }
                                r.prototype = e.prototype, t.prototype = new r, t.__super__ = e.prototype
                            }(n, t), n.prototype.toString = function (t) {
                                return this.options.writer.dtdAttList(this, this.options.writer.filterOptions(t))
                            }, n
                        }(r)
                    }).call(this)
                },
                H7XF: function (t, e, n) {
                    "use strict";
                    e.byteLength = function (t) {
                        var e = c(t),
                            n = e[1];
                        return 3 * (e[0] + n) / 4 - n
                    }, e.toByteArray = function (t) {
                        var e, n, r = c(t),
                            s = r[0],
                            a = r[1],
                            u = new o(function (t, e, n) {
                                return 3 * (e + n) / 4 - n
                            }(0, s, a)),
                            l = 0,
                            h = a > 0 ? s - 4 : s;
                        for (n = 0; n < h; n += 4) e = i[t.charCodeAt(n)] << 18 | i[t.charCodeAt(n + 1)] << 12 | i[t.charCodeAt(n + 2)] << 6 | i[t.charCodeAt(n + 3)], u[l++] = e >> 16 & 255, u[l++] = e >> 8 & 255, u[l++] = 255 & e;
                        return 2 === a && (e = i[t.charCodeAt(n)] << 2 | i[t.charCodeAt(n + 1)] >> 4, u[l++] = 255 & e), 1 === a && (e = i[t.charCodeAt(n)] << 10 | i[t.charCodeAt(n + 1)] << 4 | i[t.charCodeAt(n + 2)] >> 2, u[l++] = e >> 8 & 255, u[l++] = 255 & e), u
                    }, e.fromByteArray = function (t) {
                        for (var e, n = t.length, i = n % 3, o = [], s = 0, a = n - i; s < a; s += 16383) o.push(l(t, s, s + 16383 > a ? a : s + 16383));
                        return 1 === i ? o.push(r[(e = t[n - 1]) >> 2] + r[e << 4 & 63] + "==") : 2 === i && o.push(r[(e = (t[n - 2] << 8) + t[n - 1]) >> 10] + r[e >> 4 & 63] + r[e << 2 & 63] + "="), o.join("")
                    };
                    for (var r = [], i = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, u = s.length; a < u; ++a) r[a] = s[a], i[s.charCodeAt(a)] = a;

                    function c(t) {
                        var e = t.length;
                        if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                        var n = t.indexOf("=");
                        return -1 === n && (n = e), [n, n === e ? 0 : 4 - n % 4]
                    }

                    function l(t, e, n) {
                        for (var i, o = [], s = e; s < n; s += 3) o.push(r[(i = (t[s] << 16 & 16711680) + (t[s + 1] << 8 & 65280) + (255 & t[s + 2])) >> 18 & 63] + r[i >> 12 & 63] + r[i >> 6 & 63] + r[63 & i]);
                        return o.join("")
                    }
                    i["-".charCodeAt(0)] = 62, i["_".charCodeAt(0)] = 63
                },
                HDdC: function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return c
                    }));
                    var r = n("7o/Q"),
                        i = n("2QA8"),
                        o = n("gRHU"),
                        s = n("kJWO"),
                        a = n("SpAZ"),
                        u = n("2fFW");
                    let c = (() => {
                        class t {
                            constructor(t) {
                                this._isScalar = !1, t && (this._subscribe = t)
                            }
                            lift(e) {
                                const n = new t;
                                return n.source = this, n.operator = e, n
                            }
                            subscribe(t, e, n) {
                                const {
                                    operator: s
                                } = this, a = function (t, e, n) {
                                    if (t) {
                                        if (t instanceof r.a) return t;
                                        if (t[i.a]) return t[i.a]()
                                    }
                                    return t || e || n ? new r.a(t, e, n) : new r.a(o.a)
                                }(t, e, n);
                                if (a.add(s ? s.call(a, this.source) : this.source || u.a.useDeprecatedSynchronousErrorHandling && !a.syncErrorThrowable ? this._subscribe(a) : this._trySubscribe(a)), u.a.useDeprecatedSynchronousErrorHandling && a.syncErrorThrowable && (a.syncErrorThrowable = !1, a.syncErrorThrown)) throw a.syncErrorValue;
                                return a
                            }
                            _trySubscribe(t) {
                                try {
                                    return this._subscribe(t)
                                } catch (e) {
                                    u.a.useDeprecatedSynchronousErrorHandling && (t.syncErrorThrown = !0, t.syncErrorValue = e),
                                        function (t) {
                                            for (; t;) {
                                                const {
                                                    closed: e,
                                                    destination: n,
                                                    isStopped: i
                                                } = t;
                                                if (e || i) return !1;
                                                t = n && n instanceof r.a ? n : null
                                            }
                                            return !0
                                        }(t) ? t.error(e) : console.warn(e)
                                }
                            }
                            forEach(t, e) {
                                return new(e = l(e))((e, n) => {
                                    let r;
                                    r = this.subscribe(e => {
                                        try {
                                            t(e)
                                        } catch (i) {
                                            n(i), r && r.unsubscribe()
                                        }
                                    }, n, e)
                                })
                            }
                            _subscribe(t) {
                                const {
                                    source: e
                                } = this;
                                return e && e.subscribe(t)
                            } [s.a]() {
                                return this
                            }
                            pipe(...t) {
                                return 0 === t.length ? this : (0 === (e = t).length ? a.a : 1 === e.length ? e[0] : function (t) {
                                    return e.reduce((t, e) => e(t), t)
                                })(this);
                                var e
                            }
                            toPromise(t) {
                                return new(t = l(t))((t, e) => {
                                    let n;
                                    this.subscribe(t => n = t, t => e(t), () => t(n))
                                })
                            }
                        }
                        return t.create = e => new t(e), t
                    })();

                    function l(t) {
                        if (t || (t = u.a.Promise || Promise), !t) throw new Error("no Promise impl found");
                        return t
                    }
                },
                HwjW: function (t, e, n) {
                    (function () {
                        var e, r = {}.hasOwnProperty;
                        e = n("pLb+"), t.exports = function (t) {
                            function e(t) {
                                e.__super__.constructor.call(this, t)
                            }
                            return function (t, e) {
                                for (var n in e) r.call(e, n) && (t[n] = e[n]);

                                function i() {
                                    this.constructor = t
                                }
                                i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype
                            }(e, t), e.prototype.document = function (t, e) {
                                var n, r, i, o;
                                for (e = this.filterOptions(e), i = "", n = 0, r = (o = t.children).length; n < r; n++) i += this.writeChildNode(o[n], e, 0);
                                return e.pretty && i.slice(-e.newline.length) === e.newline && (i = i.slice(0, -e.newline.length)), i
                            }, e
                        }(e)
                    }).call(this)
                },
                I55L: function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return r
                    }));
                    const r = t => t && "number" == typeof t.length && "function" != typeof t
                },
                IoDD: function (t, e, n) {
                    (function () {
                        var e;
                        e = n("Bl63"), n("kud4"), t.exports = function () {
                            function t(t, n, r) {
                                if (this.parent = t, this.parent && (this.options = this.parent.options, this.stringify = this.parent.stringify), null == n) throw new Error("Missing attribute name. " + this.debugInfo(n));
                                this.name = this.stringify.name(n), this.value = this.stringify.attValue(r), this.type = e.Attribute, this.isId = !1, this.schemaTypeInfo = null
                            }
                            return Object.defineProperty(t.prototype, "nodeType", {
                                get: function () {
                                    return this.type
                                }
                            }), Object.defineProperty(t.prototype, "ownerElement", {
                                get: function () {
                                    return this.parent
                                }
                            }), Object.defineProperty(t.prototype, "textContent", {
                                get: function () {
                                    return this.value
                                },
                                set: function (t) {
                                    return this.value = t || ""
                                }
                            }), Object.defineProperty(t.prototype, "namespaceURI", {
                                get: function () {
                                    return ""
                                }
                            }), Object.defineProperty(t.prototype, "prefix", {
                                get: function () {
                                    return ""
                                }
                            }), Object.defineProperty(t.prototype, "localName", {
                                get: function () {
                                    return this.name
                                }
                            }), Object.defineProperty(t.prototype, "specified", {
                                get: function () {
                                    return !0
                                }
                            }), t.prototype.clone = function () {
                                return Object.create(this)
                            }, t.prototype.toString = function (t) {
                                return this.options.writer.attribute(this, this.options.writer.filterOptions(t))
                            }, t.prototype.debugInfo = function (t) {
                                return null == (t = t || this.name) ? "parent: <" + this.parent.name + ">" : "attribute: {" + t + "}, parent: <" + this.parent.name + ">"
                            }, t.prototype.isEqualNode = function (t) {
                                return t.namespaceURI === this.namespaceURI && t.prefix === this.prefix && t.localName === this.localName && t.value === this.value
                            }, t
                        }()
                    }).call(this)
                },
                LRne: function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return s
                    }));
                    var r = n("z+Ro"),
                        i = n("yCtX"),
                        o = n("jZKg");

                    function s(...t) {
                        let e = t[t.length - 1];
                        return Object(r.a)(e) ? (t.pop(), Object(o.a)(t, e)) : Object(i.a)(t)
                    }
                },
                Lhse: function (t, e, n) {
                    "use strict";

                    function r() {
                        return "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator"
                    }
                    n.d(e, "a", (function () {
                        return i
                    }));
                    const i = r()
                },
                MXF5: function (t, e, n) {
                    ! function (t) {
                        t.parser = function (t, e) {
                            return new i(t, e)
                        }, t.SAXParser = i, t.SAXStream = s, t.createStream = function (t, e) {
                            return new s(t, e)
                        }, t.MAX_BUFFER_LENGTH = 65536;
                        var e, r = ["comment", "sgmlDecl", "textNode", "tagName", "doctype", "procInstName", "procInstBody", "entity", "attribName", "attribValue", "cdata", "script"];

                        function i(e, n) {
                            if (!(this instanceof i)) return new i(e, n);
                            ! function (t) {
                                for (var e = 0, n = r.length; e < n; e++) t[r[e]] = ""
                            }(this), this.q = this.c = "", this.bufferCheckPosition = t.MAX_BUFFER_LENGTH, this.opt = n || {}, this.opt.lowercase = this.opt.lowercase || this.opt.lowercasetags, this.looseCase = this.opt.lowercase ? "toLowerCase" : "toUpperCase", this.tags = [], this.closed = this.closedRoot = this.sawRoot = !1, this.tag = this.error = null, this.strict = !!e, this.noscript = !(!e && !this.opt.noscript), this.state = _.BEGIN, this.strictEntities = this.opt.strictEntities, this.ENTITIES = Object.create(this.strictEntities ? t.XML_ENTITIES : t.ENTITIES), this.attribList = [], this.opt.xmlns && (this.ns = Object.create(u)), this.trackPosition = !1 !== this.opt.position, this.trackPosition && (this.position = this.line = this.column = 0), T(this, "onready")
                        }
                        t.EVENTS = ["text", "processinginstruction", "sgmldeclaration", "doctype", "comment", "opentagstart", "attribute", "opentag", "closetag", "opencdata", "cdata", "closecdata", "error", "end", "ready", "script", "opennamespace", "closenamespace"], Object.create || (Object.create = function (t) {
                            function e() {}
                            return e.prototype = t, new e
                        }), Object.keys || (Object.keys = function (t) {
                            var e = [];
                            for (var n in t) t.hasOwnProperty(n) && e.push(n);
                            return e
                        }), i.prototype = {
                            end: function () {
                                I(this)
                            },
                            write: function (e) {
                                if (this.error) throw this.error;
                                if (this.closed) return S(this, "Cannot write after close. Assign an onready handler.");
                                if (null === e) return I(this);
                                "object" == typeof e && (e = e.toString());
                                for (var n, i, o, s, a = 0, u = ""; u = L(e, a++), this.c = u, u;) switch (this.trackPosition && (this.position++, "\n" === u ? (this.line++, this.column = 0) : this.column++), this.state) {
                                    case _.BEGIN:
                                        if (this.state = _.BEGIN_WHITESPACE, "\ufeff" === u) continue;
                                        k(this, u);
                                        continue;
                                    case _.BEGIN_WHITESPACE:
                                        k(this, u);
                                        continue;
                                    case _.TEXT:
                                        if (this.sawRoot && !this.closedRoot) {
                                            for (var b = a - 1; u && "<" !== u && "&" !== u;)(u = L(e, a++)) && this.trackPosition && (this.position++, "\n" === u ? (this.line++, this.column = 0) : this.column++);
                                            this.textNode += e.substring(b, a - 1)
                                        }
                                        "<" !== u || this.sawRoot && this.closedRoot && !this.strict ? (d(u) || this.sawRoot && !this.closedRoot || A(this, "Text data outside of root node."), "&" === u ? this.state = _.TEXT_ENTITY : this.textNode += u) : (this.state = _.OPEN_WAKA, this.startTagPosition = this.position);
                                        continue;
                                    case _.SCRIPT:
                                        "<" === u ? this.state = _.SCRIPT_ENDING : this.script += u;
                                        continue;
                                    case _.SCRIPT_ENDING:
                                        "/" === u ? this.state = _.CLOSE_TAG : (this.script += "<" + u, this.state = _.SCRIPT);
                                        continue;
                                    case _.OPEN_WAKA:
                                        "!" === u ? (this.state = _.SGML_DECL, this.sgmlDecl = "") : d(u) || (m(c, u) ? (this.state = _.OPEN_TAG, this.tagName = u) : "/" === u ? (this.state = _.CLOSE_TAG, this.tagName = "") : "?" === u ? (this.state = _.PROC_INST, this.procInstName = this.procInstBody = "") : (A(this, "Unencoded <"), this.startTagPosition + 1 < this.position && (u = new Array(this.position - this.startTagPosition).join(" ") + u), this.textNode += "<" + u, this.state = _.TEXT));
                                        continue;
                                    case _.SGML_DECL:
                                        "[CDATA[" === (this.sgmlDecl + u).toUpperCase() ? (C(this, "onopencdata"), this.state = _.CDATA, this.sgmlDecl = "", this.cdata = "") : this.sgmlDecl + u === "--" ? (this.state = _.COMMENT, this.comment = "", this.sgmlDecl = "") : "DOCTYPE" === (this.sgmlDecl + u).toUpperCase() ? (this.state = _.DOCTYPE, (this.doctype || this.sawRoot) && A(this, "Inappropriately located doctype declaration"), this.doctype = "", this.sgmlDecl = "") : ">" === u ? (C(this, "onsgmldeclaration", this.sgmlDecl), this.sgmlDecl = "", this.state = _.TEXT) : f(u) ? (this.state = _.SGML_DECL_QUOTED, this.sgmlDecl += u) : this.sgmlDecl += u;
                                        continue;
                                    case _.SGML_DECL_QUOTED:
                                        u === this.q && (this.state = _.SGML_DECL, this.q = ""), this.sgmlDecl += u;
                                        continue;
                                    case _.DOCTYPE:
                                        ">" === u ? (this.state = _.TEXT, C(this, "ondoctype", this.doctype), this.doctype = !0) : (this.doctype += u, "[" === u ? this.state = _.DOCTYPE_DTD : f(u) && (this.state = _.DOCTYPE_QUOTED, this.q = u));
                                        continue;
                                    case _.DOCTYPE_QUOTED:
                                        this.doctype += u, u === this.q && (this.q = "", this.state = _.DOCTYPE);
                                        continue;
                                    case _.DOCTYPE_DTD:
                                        this.doctype += u, "]" === u ? this.state = _.DOCTYPE : f(u) && (this.state = _.DOCTYPE_DTD_QUOTED, this.q = u);
                                        continue;
                                    case _.DOCTYPE_DTD_QUOTED:
                                        this.doctype += u, u === this.q && (this.state = _.DOCTYPE_DTD, this.q = "");
                                        continue;
                                    case _.COMMENT:
                                        "-" === u ? this.state = _.COMMENT_ENDING : this.comment += u;
                                        continue;
                                    case _.COMMENT_ENDING:
                                        "-" === u ? (this.state = _.COMMENT_ENDED, this.comment = x(this.opt, this.comment), this.comment && C(this, "oncomment", this.comment), this.comment = "") : (this.comment += "-" + u, this.state = _.COMMENT);
                                        continue;
                                    case _.COMMENT_ENDED:
                                        ">" !== u ? (A(this, "Malformed comment"), this.comment += "--" + u, this.state = _.COMMENT) : this.state = _.TEXT;
                                        continue;
                                    case _.CDATA:
                                        "]" === u ? this.state = _.CDATA_ENDING : this.cdata += u;
                                        continue;
                                    case _.CDATA_ENDING:
                                        "]" === u ? this.state = _.CDATA_ENDING_2 : (this.cdata += "]" + u, this.state = _.CDATA);
                                        continue;
                                    case _.CDATA_ENDING_2:
                                        ">" === u ? (this.cdata && C(this, "oncdata", this.cdata), C(this, "onclosecdata"), this.cdata = "", this.state = _.TEXT) : "]" === u ? this.cdata += "]" : (this.cdata += "]]" + u, this.state = _.CDATA);
                                        continue;
                                    case _.PROC_INST:
                                        "?" === u ? this.state = _.PROC_INST_ENDING : d(u) ? this.state = _.PROC_INST_BODY : this.procInstName += u;
                                        continue;
                                    case _.PROC_INST_BODY:
                                        if (!this.procInstBody && d(u)) continue;
                                        "?" === u ? this.state = _.PROC_INST_ENDING : this.procInstBody += u;
                                        continue;
                                    case _.PROC_INST_ENDING:
                                        ">" === u ? (C(this, "onprocessinginstruction", {
                                            name: this.procInstName,
                                            body: this.procInstBody
                                        }), this.procInstName = this.procInstBody = "", this.state = _.TEXT) : (this.procInstBody += "?" + u, this.state = _.PROC_INST_BODY);
                                        continue;
                                    case _.OPEN_TAG:
                                        m(l, u) ? this.tagName += u : (P(this), ">" === u ? j(this) : "/" === u ? this.state = _.OPEN_TAG_SLASH : (d(u) || A(this, "Invalid character in tag name"), this.state = _.ATTRIB));
                                        continue;
                                    case _.OPEN_TAG_SLASH:
                                        ">" === u ? (j(this, !0), R(this)) : (A(this, "Forward-slash in opening tag not followed by >"), this.state = _.ATTRIB);
                                        continue;
                                    case _.ATTRIB:
                                        if (d(u)) continue;
                                        ">" === u ? j(this) : "/" === u ? this.state = _.OPEN_TAG_SLASH : m(c, u) ? (this.attribName = u, this.attribValue = "", this.state = _.ATTRIB_NAME) : A(this, "Invalid attribute name");
                                        continue;
                                    case _.ATTRIB_NAME:
                                        "=" === u ? this.state = _.ATTRIB_VALUE : ">" === u ? (A(this, "Attribute without value"), this.attribValue = this.attribName, D(this), j(this)) : d(u) ? this.state = _.ATTRIB_NAME_SAW_WHITE : m(l, u) ? this.attribName += u : A(this, "Invalid attribute name");
                                        continue;
                                    case _.ATTRIB_NAME_SAW_WHITE:
                                        if ("=" === u) this.state = _.ATTRIB_VALUE;
                                        else {
                                            if (d(u)) continue;
                                            A(this, "Attribute without value"), this.tag.attributes[this.attribName] = "", this.attribValue = "", C(this, "onattribute", {
                                                name: this.attribName,
                                                value: ""
                                            }), this.attribName = "", ">" === u ? j(this) : m(c, u) ? (this.attribName = u, this.state = _.ATTRIB_NAME) : (A(this, "Invalid attribute name"), this.state = _.ATTRIB)
                                        }
                                        continue;
                                    case _.ATTRIB_VALUE:
                                        if (d(u)) continue;
                                        f(u) ? (this.q = u, this.state = _.ATTRIB_VALUE_QUOTED) : (A(this, "Unquoted attribute value"), this.state = _.ATTRIB_VALUE_UNQUOTED, this.attribValue = u);
                                        continue;
                                    case _.ATTRIB_VALUE_QUOTED:
                                        if (u !== this.q) {
                                            "&" === u ? this.state = _.ATTRIB_VALUE_ENTITY_Q : this.attribValue += u;
                                            continue
                                        }
                                        D(this), this.q = "", this.state = _.ATTRIB_VALUE_CLOSED;
                                        continue;
                                    case _.ATTRIB_VALUE_CLOSED:
                                        d(u) ? this.state = _.ATTRIB : ">" === u ? j(this) : "/" === u ? this.state = _.OPEN_TAG_SLASH : m(c, u) ? (A(this, "No whitespace between attributes"), this.attribName = u, this.attribValue = "", this.state = _.ATTRIB_NAME) : A(this, "Invalid attribute name");
                                        continue;
                                    case _.ATTRIB_VALUE_UNQUOTED:
                                        if (!g(u)) {
                                            "&" === u ? this.state = _.ATTRIB_VALUE_ENTITY_U : this.attribValue += u;
                                            continue
                                        }
                                        D(this), ">" === u ? j(this) : this.state = _.ATTRIB;
                                        continue;
                                    case _.CLOSE_TAG:
                                        if (this.tagName) ">" === u ? R(this) : m(l, u) ? this.tagName += u : this.script ? (this.script += "</" + this.tagName, this.tagName = "", this.state = _.SCRIPT) : (d(u) || A(this, "Invalid tagname in closing tag"), this.state = _.CLOSE_TAG_SAW_WHITE);
                                        else {
                                            if (d(u)) continue;
                                            y(c, u) ? this.script ? (this.script += "</" + u, this.state = _.SCRIPT) : A(this, "Invalid tagname in closing tag.") : this.tagName = u
                                        }
                                        continue;
                                    case _.CLOSE_TAG_SAW_WHITE:
                                        if (d(u)) continue;
                                        ">" === u ? R(this) : A(this, "Invalid characters in closing tag");
                                        continue;
                                    case _.TEXT_ENTITY:
                                    case _.ATTRIB_VALUE_ENTITY_Q:
                                    case _.ATTRIB_VALUE_ENTITY_U:
                                        var w, v;
                                        switch (this.state) {
                                            case _.TEXT_ENTITY:
                                                w = _.TEXT, v = "textNode";
                                                break;
                                            case _.ATTRIB_VALUE_ENTITY_Q:
                                                w = _.ATTRIB_VALUE_QUOTED, v = "attribValue";
                                                break;
                                            case _.ATTRIB_VALUE_ENTITY_U:
                                                w = _.ATTRIB_VALUE_UNQUOTED, v = "attribValue"
                                        }
                                        ";" === u ? (this[v] += (n = void 0, i = void 0, void 0, s = void 0, o = (i = this.entity).toLowerCase(), s = "", this.ENTITIES[i] ? this.ENTITIES[i] : this.ENTITIES[o] ? this.ENTITIES[o] : ("#" === (i = o).charAt(0) && ("x" === i.charAt(1) ? (i = i.slice(2), s = (n = parseInt(i, 16)).toString(16)) : (i = i.slice(1), s = (n = parseInt(i, 10)).toString(10))), i = i.replace(/^0+/, ""), isNaN(n) || s.toLowerCase() !== i ? (A(this, "Invalid character entity"), "&" + this.entity + ";") : String.fromCodePoint(n))), this.entity = "", this.state = w) : m(this.entity.length ? p : h, u) ? this.entity += u : (A(this, "Invalid character in entity name"), this[v] += "&" + this.entity + u, this.entity = "", this.state = w);
                                        continue;
                                    default:
                                        throw new Error(this, "Unknown state: " + this.state)
                                }
                                return this.position >= this.bufferCheckPosition && function (e) {
                                    for (var n = Math.max(t.MAX_BUFFER_LENGTH, 10), i = 0, o = 0, s = r.length; o < s; o++) {
                                        var a = e[r[o]].length;
                                        if (a > n) switch (r[o]) {
                                            case "textNode":
                                                O(e);
                                                break;
                                            case "cdata":
                                                C(e, "oncdata", e.cdata), e.cdata = "";
                                                break;
                                            case "script":
                                                C(e, "onscript", e.script), e.script = "";
                                                break;
                                            default:
                                                S(e, "Max buffer length exceeded: " + r[o])
                                        }
                                        i = Math.max(i, a)
                                    }
                                    e.bufferCheckPosition = t.MAX_BUFFER_LENGTH - i + e.position
                                }(this), this
                            },
                            resume: function () {
                                return this.error = null, this
                            },
                            close: function () {
                                return this.write(null)
                            },
                            flush: function () {
                                O(this), "" !== this.cdata && (C(this, "oncdata", this.cdata), this.cdata = ""), "" !== this.script && (C(this, "onscript", this.script), this.script = "")
                            }
                        };
                        try {
                            e = n("DD3b").Stream
                        } catch (M) {
                            e = function () {}
                        }
                        var o = t.EVENTS.filter((function (t) {
                            return "error" !== t && "end" !== t
                        }));

                        function s(t, n) {
                            if (!(this instanceof s)) return new s(t, n);
                            e.apply(this), this._parser = new i(t, n), this.writable = !0, this.readable = !0;
                            var r = this;
                            this._parser.onend = function () {
                                r.emit("end")
                            }, this._parser.onerror = function (t) {
                                r.emit("error", t), r._parser.error = null
                            }, this._decoder = null, o.forEach((function (t) {
                                Object.defineProperty(r, "on" + t, {
                                    get: function () {
                                        return r._parser["on" + t]
                                    },
                                    set: function (e) {
                                        if (!e) return r.removeAllListeners(t), r._parser["on" + t] = e, e;
                                        r.on(t, e)
                                    },
                                    enumerable: !0,
                                    configurable: !1
                                })
                            }))
                        }(s.prototype = Object.create(e.prototype, {
                            constructor: {
                                value: s
                            }
                        })).write = function (t) {
                            if ("function" == typeof Buffer && "function" == typeof Buffer.isBuffer && Buffer.isBuffer(t)) {
                                if (!this._decoder) {
                                    var e = n("fXKp").StringDecoder;
                                    this._decoder = new e("utf8")
                                }
                                t = this._decoder.write(t)
                            }
                            return this._parser.write(t.toString()), this.emit("data", t), !0
                        }, s.prototype.end = function (t) {
                            return t && t.length && this.write(t), this._parser.end(), !0
                        }, s.prototype.on = function (t, n) {
                            var r = this;
                            return r._parser["on" + t] || -1 === o.indexOf(t) || (r._parser["on" + t] = function () {
                                var e = 1 === arguments.length ? [arguments[0]] : Array.apply(null, arguments);
                                e.splice(0, 0, t), r.emit.apply(r, e)
                            }), e.prototype.on.call(r, t, n)
                        };
                        var a = "http://www.w3.org/XML/1998/namespace",
                            u = {
                                xml: a,
                                xmlns: "http://www.w3.org/2000/xmlns/"
                            },
                            c = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
                            l = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/,
                            h = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,
                            p = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;

                        function d(t) {
                            return " " === t || "\n" === t || "\r" === t || "\t" === t
                        }

                        function f(t) {
                            return '"' === t || "'" === t
                        }

                        function g(t) {
                            return ">" === t || d(t)
                        }

                        function m(t, e) {
                            return t.test(e)
                        }

                        function y(t, e) {
                            return !m(t, e)
                        }
                        var b, w, v, _ = 0;
                        for (var E in t.STATE = {
                                BEGIN: _++,
                                BEGIN_WHITESPACE: _++,
                                TEXT: _++,
                                TEXT_ENTITY: _++,
                                OPEN_WAKA: _++,
                                SGML_DECL: _++,
                                SGML_DECL_QUOTED: _++,
                                DOCTYPE: _++,
                                DOCTYPE_QUOTED: _++,
                                DOCTYPE_DTD: _++,
                                DOCTYPE_DTD_QUOTED: _++,
                                COMMENT_STARTING: _++,
                                COMMENT: _++,
                                COMMENT_ENDING: _++,
                                COMMENT_ENDED: _++,
                                CDATA: _++,
                                CDATA_ENDING: _++,
                                CDATA_ENDING_2: _++,
                                PROC_INST: _++,
                                PROC_INST_BODY: _++,
                                PROC_INST_ENDING: _++,
                                OPEN_TAG: _++,
                                OPEN_TAG_SLASH: _++,
                                ATTRIB: _++,
                                ATTRIB_NAME: _++,
                                ATTRIB_NAME_SAW_WHITE: _++,
                                ATTRIB_VALUE: _++,
                                ATTRIB_VALUE_QUOTED: _++,
                                ATTRIB_VALUE_CLOSED: _++,
                                ATTRIB_VALUE_UNQUOTED: _++,
                                ATTRIB_VALUE_ENTITY_Q: _++,
                                ATTRIB_VALUE_ENTITY_U: _++,
                                CLOSE_TAG: _++,
                                CLOSE_TAG_SAW_WHITE: _++,
                                SCRIPT: _++,
                                SCRIPT_ENDING: _++
                            }, t.XML_ENTITIES = {
                                amp: "&",
                                gt: ">",
                                lt: "<",
                                quot: '"',
                                apos: "'"
                            }, t.ENTITIES = {
                                amp: "&",
                                gt: ">",
                                lt: "<",
                                quot: '"',
                                apos: "'",
                                AElig: 198,
                                Aacute: 193,
                                Acirc: 194,
                                Agrave: 192,
                                Aring: 197,
                                Atilde: 195,
                                Auml: 196,
                                Ccedil: 199,
                                ETH: 208,
                                Eacute: 201,
                                Ecirc: 202,
                                Egrave: 200,
                                Euml: 203,
                                Iacute: 205,
                                Icirc: 206,
                                Igrave: 204,
                                Iuml: 207,
                                Ntilde: 209,
                                Oacute: 211,
                                Ocirc: 212,
                                Ograve: 210,
                                Oslash: 216,
                                Otilde: 213,
                                Ouml: 214,
                                THORN: 222,
                                Uacute: 218,
                                Ucirc: 219,
                                Ugrave: 217,
                                Uuml: 220,
                                Yacute: 221,
                                aacute: 225,
                                acirc: 226,
                                aelig: 230,
                                agrave: 224,
                                aring: 229,
                                atilde: 227,
                                auml: 228,
                                ccedil: 231,
                                eacute: 233,
                                ecirc: 234,
                                egrave: 232,
                                eth: 240,
                                euml: 235,
                                iacute: 237,
                                icirc: 238,
                                igrave: 236,
                                iuml: 239,
                                ntilde: 241,
                                oacute: 243,
                                ocirc: 244,
                                ograve: 242,
                                oslash: 248,
                                otilde: 245,
                                ouml: 246,
                                szlig: 223,
                                thorn: 254,
                                uacute: 250,
                                ucirc: 251,
                                ugrave: 249,
                                uuml: 252,
                                yacute: 253,
                                yuml: 255,
                                copy: 169,
                                reg: 174,
                                nbsp: 160,
                                iexcl: 161,
                                cent: 162,
                                pound: 163,
                                curren: 164,
                                yen: 165,
                                brvbar: 166,
                                sect: 167,
                                uml: 168,
                                ordf: 170,
                                laquo: 171,
                                not: 172,
                                shy: 173,
                                macr: 175,
                                deg: 176,
                                plusmn: 177,
                                sup1: 185,
                                sup2: 178,
                                sup3: 179,
                                acute: 180,
                                micro: 181,
                                para: 182,
                                middot: 183,
                                cedil: 184,
                                ordm: 186,
                                raquo: 187,
                                frac14: 188,
                                frac12: 189,
                                frac34: 190,
                                iquest: 191,
                                times: 215,
                                divide: 247,
                                OElig: 338,
                                oelig: 339,
                                Scaron: 352,
                                scaron: 353,
                                Yuml: 376,
                                fnof: 402,
                                circ: 710,
                                tilde: 732,
                                Alpha: 913,
                                Beta: 914,
                                Gamma: 915,
                                Delta: 916,
                                Epsilon: 917,
                                Zeta: 918,
                                Eta: 919,
                                Theta: 920,
                                Iota: 921,
                                Kappa: 922,
                                Lambda: 923,
                                Mu: 924,
                                Nu: 925,
                                Xi: 926,
                                Omicron: 927,
                                Pi: 928,
                                Rho: 929,
                                Sigma: 931,
                                Tau: 932,
                                Upsilon: 933,
                                Phi: 934,
                                Chi: 935,
                                Psi: 936,
                                Omega: 937,
                                alpha: 945,
                                beta: 946,
                                gamma: 947,
                                delta: 948,
                                epsilon: 949,
                                zeta: 950,
                                eta: 951,
                                theta: 952,
                                iota: 953,
                                kappa: 954,
                                lambda: 955,
                                mu: 956,
                                nu: 957,
                                xi: 958,
                                omicron: 959,
                                pi: 960,
                                rho: 961,
                                sigmaf: 962,
                                sigma: 963,
                                tau: 964,
                                upsilon: 965,
                                phi: 966,
                                chi: 967,
                                psi: 968,
                                omega: 969,
                                thetasym: 977,
                                upsih: 978,
                                piv: 982,
                                ensp: 8194,
                                emsp: 8195,
                                thinsp: 8201,
                                zwnj: 8204,
                                zwj: 8205,
                                lrm: 8206,
                                rlm: 8207,
                                ndash: 8211,
                                mdash: 8212,
                                lsquo: 8216,
                                rsquo: 8217,
                                sbquo: 8218,
                                ldquo: 8220,
                                rdquo: 8221,
                                bdquo: 8222,
                                dagger: 8224,
                                Dagger: 8225,
                                bull: 8226,
                                hellip: 8230,
                                permil: 8240,
                                prime: 8242,
                                Prime: 8243,
                                lsaquo: 8249,
                                rsaquo: 8250,
                                oline: 8254,
                                frasl: 8260,
                                euro: 8364,
                                image: 8465,
                                weierp: 8472,
                                real: 8476,
                                trade: 8482,
                                alefsym: 8501,
                                larr: 8592,
                                uarr: 8593,
                                rarr: 8594,
                                darr: 8595,
                                harr: 8596,
                                crarr: 8629,
                                lArr: 8656,
                                uArr: 8657,
                                rArr: 8658,
                                dArr: 8659,
                                hArr: 8660,
                                forall: 8704,
                                part: 8706,
                                exist: 8707,
                                empty: 8709,
                                nabla: 8711,
                                isin: 8712,
                                notin: 8713,
                                ni: 8715,
                                prod: 8719,
                                sum: 8721,
                                minus: 8722,
                                lowast: 8727,
                                radic: 8730,
                                prop: 8733,
                                infin: 8734,
                                ang: 8736,
                                and: 8743,
                                or: 8744,
                                cap: 8745,
                                cup: 8746,
                                int: 8747,
                                there4: 8756,
                                sim: 8764,
                                cong: 8773,
                                asymp: 8776,
                                ne: 8800,
                                equiv: 8801,
                                le: 8804,
                                ge: 8805,
                                sub: 8834,
                                sup: 8835,
                                nsub: 8836,
                                sube: 8838,
                                supe: 8839,
                                oplus: 8853,
                                otimes: 8855,
                                perp: 8869,
                                sdot: 8901,
                                lceil: 8968,
                                rceil: 8969,
                                lfloor: 8970,
                                rfloor: 8971,
                                lang: 9001,
                                rang: 9002,
                                loz: 9674,
                                spades: 9824,
                                clubs: 9827,
                                hearts: 9829,
                                diams: 9830
                            }, Object.keys(t.ENTITIES).forEach((function (e) {
                                var n = t.ENTITIES[e],
                                    r = "number" == typeof n ? String.fromCharCode(n) : n;
                                t.ENTITIES[e] = r
                            })), t.STATE) t.STATE[t.STATE[E]] = E;

                        function T(t, e, n) {
                            t[e] && t[e](n)
                        }

                        function C(t, e, n) {
                            t.textNode && O(t), T(t, e, n)
                        }

                        function O(t) {
                            t.textNode = x(t.opt, t.textNode), t.textNode && T(t, "ontext", t.textNode), t.textNode = ""
                        }

                        function x(t, e) {
                            return t.trim && (e = e.trim()), t.normalize && (e = e.replace(/\s+/g, " ")), e
                        }

                        function S(t, e) {
                            return O(t), t.trackPosition && (e += "\nLine: " + t.line + "\nColumn: " + t.column + "\nChar: " + t.c), e = new Error(e), t.error = e, T(t, "onerror", e), t
                        }

                        function I(t) {
                            return t.sawRoot && !t.closedRoot && A(t, "Unclosed root tag"), t.state !== _.BEGIN && t.state !== _.BEGIN_WHITESPACE && t.state !== _.TEXT && S(t, "Unexpected end"), O(t), t.c = "", t.closed = !0, T(t, "onend"), i.call(t, t.strict, t.opt), t
                        }

                        function A(t, e) {
                            if ("object" != typeof t || !(t instanceof i)) throw new Error("bad call to strictFail");
                            t.strict && S(t, e)
                        }

                        function P(t) {
                            t.strict || (t.tagName = t.tagName[t.looseCase]());
                            var e = t.tags[t.tags.length - 1] || t,
                                n = t.tag = {
                                    name: t.tagName,
                                    attributes: {}
                                };
                            t.opt.xmlns && (n.ns = e.ns), t.attribList.length = 0, C(t, "onopentagstart", n)
                        }

                        function N(t, e) {
                            var n = t.indexOf(":") < 0 ? ["", t] : t.split(":"),
                                r = n[0],
                                i = n[1];
                            return e && "xmlns" === t && (r = "xmlns", i = ""), {
                                prefix: r,
                                local: i
                            }
                        }

                        function D(t) {
                            if (t.strict || (t.attribName = t.attribName[t.looseCase]()), -1 !== t.attribList.indexOf(t.attribName) || t.tag.attributes.hasOwnProperty(t.attribName)) t.attribName = t.attribValue = "";
                            else {
                                if (t.opt.xmlns) {
                                    var e = N(t.attribName, !0),
                                        n = e.local;
                                    if ("xmlns" === e.prefix)
                                        if ("xml" === n && t.attribValue !== a) A(t, "xml: prefix must be bound to " + a + "\nActual: " + t.attribValue);
                                        else if ("xmlns" === n && "http://www.w3.org/2000/xmlns/" !== t.attribValue) A(t, "xmlns: prefix must be bound to http://www.w3.org/2000/xmlns/\nActual: " + t.attribValue);
                                    else {
                                        var r = t.tag,
                                            i = t.tags[t.tags.length - 1] || t;
                                        r.ns === i.ns && (r.ns = Object.create(i.ns)), r.ns[n] = t.attribValue
                                    }
                                    t.attribList.push([t.attribName, t.attribValue])
                                } else t.tag.attributes[t.attribName] = t.attribValue, C(t, "onattribute", {
                                    name: t.attribName,
                                    value: t.attribValue
                                });
                                t.attribName = t.attribValue = ""
                            }
                        }

                        function j(t, e) {
                            if (t.opt.xmlns) {
                                var n = t.tag,
                                    r = N(t.tagName);
                                n.prefix = r.prefix, n.local = r.local, n.uri = n.ns[r.prefix] || "", n.prefix && !n.uri && (A(t, "Unbound namespace prefix: " + JSON.stringify(t.tagName)), n.uri = r.prefix), n.ns && (t.tags[t.tags.length - 1] || t).ns !== n.ns && Object.keys(n.ns).forEach((function (e) {
                                    C(t, "onopennamespace", {
                                        prefix: e,
                                        uri: n.ns[e]
                                    })
                                }));
                                for (var i = 0, o = t.attribList.length; i < o; i++) {
                                    var s = t.attribList[i],
                                        a = s[0],
                                        u = s[1],
                                        c = N(a, !0),
                                        l = c.prefix,
                                        h = "" === l ? "" : n.ns[l] || "",
                                        p = {
                                            name: a,
                                            value: u,
                                            prefix: l,
                                            local: c.local,
                                            uri: h
                                        };
                                    l && "xmlns" !== l && !h && (A(t, "Unbound namespace prefix: " + JSON.stringify(l)), p.uri = l), t.tag.attributes[a] = p, C(t, "onattribute", p)
                                }
                                t.attribList.length = 0
                            }
                            t.tag.isSelfClosing = !!e, t.sawRoot = !0, t.tags.push(t.tag), C(t, "onopentag", t.tag), e || (t.state = t.noscript || "script" !== t.tagName.toLowerCase() ? _.TEXT : _.SCRIPT, t.tag = null, t.tagName = ""), t.attribName = t.attribValue = "", t.attribList.length = 0
                        }

                        function R(t) {
                            if (!t.tagName) return A(t, "Weird empty close tag."), t.textNode += "</>", void(t.state = _.TEXT);
                            if (t.script) {
                                if ("script" !== t.tagName) return t.script += "</" + t.tagName + ">", t.tagName = "", void(t.state = _.SCRIPT);
                                C(t, "onscript", t.script), t.script = ""
                            }
                            var e = t.tags.length,
                                n = t.tagName;
                            t.strict || (n = n[t.looseCase]());
                            for (var r = n; e-- && t.tags[e].name !== r;) A(t, "Unexpected close tag");
                            if (e < 0) return A(t, "Unmatched closing tag: " + t.tagName), t.textNode += "</" + t.tagName + ">", void(t.state = _.TEXT);
                            t.tagName = n;
                            for (var i = t.tags.length; i-- > e;) {
                                var o = t.tag = t.tags.pop();
                                t.tagName = t.tag.name, C(t, "onclosetag", t.tagName);
                                var s = {};
                                for (var a in o.ns) s[a] = o.ns[a];
                                t.opt.xmlns && o.ns !== (t.tags[t.tags.length - 1] || t).ns && Object.keys(o.ns).forEach((function (e) {
                                    C(t, "onclosenamespace", {
                                        prefix: e,
                                        uri: o.ns[e]
                                    })
                                }))
                            }
                            0 === e && (t.closedRoot = !0), t.tagName = t.attribValue = t.attribName = "", t.attribList.length = 0, t.state = _.TEXT
                        }

                        function k(t, e) {
                            "<" === e ? (t.state = _.OPEN_WAKA, t.startTagPosition = t.position) : d(e) || (A(t, "Non-whitespace before first tag."), t.textNode = e, t.state = _.TEXT)
                        }

                        function L(t, e) {
                            var n = "";
                            return e < t.length && (n = t.charAt(e)), n
                        }
                        _ = t.STATE, String.fromCodePoint || (b = String.fromCharCode, w = Math.floor, v = function () {
                            var t = 16384,
                                e = [],
                                n = -1,
                                r = arguments.length;
                            if (!r) return "";
                            for (var i = ""; ++n < r;) {
                                var o = Number(arguments[n]);
                                if (!isFinite(o) || o < 0 || o > 1114111 || w(o) !== o) throw RangeError("Invalid code point: " + o);
                                o <= 65535 ? e.push(o) : e.push(55296 + ((o -= 65536) >> 10), o % 1024 + 56320), (n + 1 === r || e.length > t) && (i += b.apply(null, e), e.length = 0)
                            }
                            return i
                        }, Object.defineProperty ? Object.defineProperty(String, "fromCodePoint", {
                            value: v,
                            configurable: !0,
                            writable: !0
                        }) : String.fromCodePoint = v)
                    }(e)
                },
                NJ4a: function (t, e, n) {
                    "use strict";

                    function r(t) {
                        setTimeout(() => {
                            throw t
                        }, 0)
                    }
                    n.d(e, "a", (function () {
                        return r
                    }))
                },
                NPot: function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return m
                    }));
                    var r = n("fXoL"),
                        i = n("XNiG"),
                        o = n("tk/3"),
                        s = n("CDzl"),
                        a = n.n(s),
                        u = n("ofXK"),
                        c = n("tyNb");
                    let l = (() => {
                            class t {
                                constructor() {
                                    this.emitChangeSource = new i.a, this.changeEmitted$ = this.emitChangeSource.asObservable()
                                }
                                emitChange(t) {
                                    this.emitChangeSource.next(t)
                                }
                            }
                            return t.\u0275fac = function (e) {
                                return new(e || t)
                            }, t.\u0275prov = r.Db({
                                token: t,
                                factory: t.\u0275fac,
                                providedIn: "root"
                            }), t.ngInjectableDef = Object(r.Db)({
                                factory: function () {
                                    return new t
                                },
                                token: t,
                                providedIn: "root"
                            }), t
                        })(),
                        h = (() => {
                            class t {
                                constructor(t) {
                                    this.eventoService = t
                                }
                                saveLoginUnico(t) {
                                    window.sessionStorage.setItem("loginUser", t), this.eventoService.emitChange("loaded")
                                }
                                getLoginUnico() {
                                    return window.sessionStorage.getItem("loginUser")
                                }
                                saveUsuario(t) {
                                    window.sessionStorage.setItem("userToken", JSON.stringify(t))
                                }
                                getUsuario() {
                                    return JSON.parse(window.sessionStorage.getItem("userToken"))
                                }
                                saveCodUsuario(t) {
                                    window.sessionStorage.setItem("codUser", t)
                                }
                                getCodUsuario() {
                                    return window.sessionStorage.getItem("codUser")
                                }
                                saveTicket(t) {
                                    window.sessionStorage.setItem("ticketUser", t)
                                }
                                getTicket() {
                                    return window.sessionStorage.getItem("ticketUser")
                                }
                                remove() {
                                    window.sessionStorage.removeItem("userToken"), window.sessionStorage.removeItem("codUser"), window.sessionStorage.removeItem("ticketUser"), window.sessionStorage.removeItem("loginUser")
                                }
                            }
                            return t.\u0275fac = function (e) {
                                return new(e || t)(r.Pb(l))
                            }, t.\u0275prov = r.Db({
                                token: t,
                                factory: t.\u0275fac
                            }), t
                        })(),
                        p = (() => {
                            class t {
                                constructor(t) {
                                    this.http = t
                                }
                                doGetUrlXML(t) {
                                    return this.http.get(t, {
                                        responseType: "text"
                                    })
                                }
                                doGet(t) {
                                    return this.http.get(t)
                                }
                            }
                            return t.\u0275fac = function (e) {
                                return new(e || t)(r.Pb(o.a))
                            }, t.\u0275prov = r.Db({
                                token: t,
                                factory: t.\u0275fac
                            }), t
                        })(),
                        d = (() => {
                            class t {
                                constructor() {}
                                convertToJson(t) {
                                    let e;
                                    return a.a.parseString(t, {
                                        explicitArray: !1
                                    }, (t, n) => {
                                        if (t) throw new Error(t);
                                        e = n
                                    }), e
                                }
                                convertToXml(t) {
                                    return (new a.a.Builder).buildObject(t)
                                }
                            }
                            return t.\u0275fac = function (e) {
                                return new(e || t)
                            }, t.\u0275prov = r.Db({
                                token: t,
                                factory: t.\u0275fac
                            }), t
                        })(),
                        f = (() => {
                            class t {
                                constructor(t, e) {
                                    this.http = t, this.environment = e
                                }
                                generateJwt(t) {
                                    return this.http.post(this.environment.commons_url + "/security/jwt/generate", t)
                                }
                                getClaims(t) {
                                    return this.http.get(this.environment.commons_url + "/security/jwt/" + t)
                                }
                            }
                            return t.\u0275fac = function (e) {
                                return new(e || t)(r.Pb(o.a), r.Pb("env"))
                            }, t.\u0275prov = r.Db({
                                token: t,
                                factory: t.\u0275fac
                            }), t
                        })(),
                        g = (() => {
                            class t {
                                constructor(t, e, n, r, i) {
                                    this.xmlConvert = t, this.authStorage = e, this.http = n, this.jwtService = r, this.environment = i
                                }
                                verificaLogin() {
                                    return this.hasTicket() || this.openLogin(), this.validateLogin()
                                }
                                validateLogin() {
                                    return new Promise((t, e) => {
                                        setTimeout(() => {
                                            this.http.doGetUrlXML(this.getUrlValidate()).subscribe(n => this.validation(t, e, n), e)
                                        }, 3e3)
                                    })
                                }
                                openLogin() {
                                    window.open(this.getUrlLogin(), "_self")
                                }
                                validation(t, e, n) {
                                    let r = this.xmlConvert.convertToJson(n)["cas:serviceResponse"]["cas:authenticationSuccess"];
                                    if (r) {
                                        let t = r["cas:user"];
                                        this.authStorage.saveLoginUnico(t), this.registraUsuario(t)
                                    } else this.authStorage.remove(), this.openLogin();
                                    t()
                                }
                                registraUsuario(t) {
                                    this.buscaDadosUsuarioAutenticado(t).subscribe(t => {
                                        let e = Object.assign({}, t);
                                        e.foto = null, this.jwtService.generateJwt(e).subscribe(e => {
                                            t.jwt = e.data, this.authStorage.saveUsuario(t), this.openLogin()
                                        })
                                    }, t => {
                                        setTimeout(() => {
                                            this.logout()
                                        }, 1e4)
                                    })
                                }
                                logout() {
                                    this.authStorage.remove(), window.open(this.environment.cas_url + "/logout?service=" + this.environment.app_url, "_self")
                                }
                                getTicket() {
                                    return this.authStorage.getTicket()
                                }
                                getUrlValidate() {
                                    return this.environment.cas_url + "/serviceValidate?ticket=" + this.getTicket() + "&service=" + this.environment.app_url
                                }
                                getUrlLogin() {
                                    return this.environment.cas_url + "/login?locale=pt_BR&service=" + this.environment.app_url
                                }
                                hasTicket() {
                                    return this.isNotEmpty(this.getTicket())
                                }
                                isAuthenticated() {
                                    return this.isNotEmpty(this.getUserSessionObj())
                                }
                                isEmpty(t) {
                                    return null == t || null == t || "" == t || " " == t
                                }
                                isNotEmpty(t) {
                                    return !this.isEmpty(t)
                                }
                                getUserSession() {
                                    return this.authStorage.getLoginUnico()
                                }
                                getUserSessionObj() {
                                    return this.authStorage.getUsuario()
                                }
                                buscaDadosUsuarioAutenticado(t) {
                                    return this.http.doGet(this.environment.commons_url.concat("/usuario/autenticado/").concat(t))
                                }
                            }
                            return t.\u0275fac = function (e) {
                                return new(e || t)(r.Pb(d), r.Pb(h), r.Pb(p), r.Pb(f), r.Pb("env"))
                            }, t.\u0275prov = r.Db({
                                token: t,
                                factory: t.\u0275fac,
                                providedIn: "root"
                            }), t.ngInjectableDef = Object(r.Db)({
                                factory: function () {
                                    return new t(Object(r.Pb)(d), Object(r.Pb)(h), Object(r.Pb)(p), Object(r.Pb)(f), Object(r.Pb)("env"))
                                },
                                token: t,
                                providedIn: "root"
                            }), t
                        })(),
                        m = (() => {
                            class t {
                                static forRoot(e) {
                                    return {
                                        ngModule: t,
                                        providers: [g, {
                                            provide: "env",
                                            useValue: e
                                        }]
                                    }
                                }
                            }
                            return t.\u0275mod = r.Fb({
                                type: t
                            }), t.\u0275inj = r.Eb({
                                factory: function (e) {
                                    return new(e || t)
                                },
                                providers: [d, h, p, f],
                                imports: [[o.b, u.b, c.c]]
                            }), t
                        })()
                },
                OzLs: function (t, e, n) {
                    (function () {
                        var e, r, i = {}.hasOwnProperty;
                        r = n("kud4"), e = n("Bl63"), t.exports = function (t) {
                            function n(t, r, i) {
                                if (n.__super__.constructor.call(this, t), null == r) throw new Error("Missing DTD element name. " + this.debugInfo());
                                i || (i = "(#PCDATA)"), Array.isArray(i) && (i = "(" + i.join(",") + ")"), this.name = this.stringify.name(r), this.type = e.ElementDeclaration, this.value = this.stringify.dtdElementValue(i)
                            }
                            return function (t, e) {
                                for (var n in e) i.call(e, n) && (t[n] = e[n]);

                                function r() {
                                    this.constructor = t
                                }
                                r.prototype = e.prototype, t.prototype = new r, t.__super__ = e.prototype
                            }(n, t), n.prototype.toString = function (t) {
                                return this.options.writer.dtdElement(this, this.options.writer.filterOptions(t))
                            }, n
                        }(r)
                    }).call(this)
                },
                QVo3: function (t, e, n) {
                    (function () {
                        "use strict";
                        var t, r, i, o, s, a = {}.hasOwnProperty;
                        t = n("dEzR"), r = n("pn46").defaults, o = function (t) {
                            return "string" == typeof t && (t.indexOf("&") >= 0 || t.indexOf(">") >= 0 || t.indexOf("<") >= 0)
                        }, s = function (t) {
                            return "<![CDATA[" + i(t) + "]]>"
                        }, i = function (t) {
                            return t.replace("]]>", "]]]]><![CDATA[>")
                        }, e.Builder = function () {
                            function e(t) {
                                var e, n;
                                for (e in this.options = {}, n = r[.2]) a.call(n, e) && (this.options[e] = n[e]);
                                for (e in t) a.call(t, e) && (this.options[e] = t[e])
                            }
                            return e.prototype.buildObject = function (e) {
                                var n, i, u, c, l, h;
                                return n = this.options.attrkey, i = this.options.charkey, 1 === Object.keys(e).length && this.options.rootName === r[.2].rootName ? e = e[l = Object.keys(e)[0]] : l = this.options.rootName, h = this, u = function (t, e) {
                                    var r, c, l, p, d;
                                    if ("object" != typeof e) h.options.cdata && o(e) ? t.raw(s(e)) : t.txt(e);
                                    else if (Array.isArray(e)) {
                                        for (p in e)
                                            if (a.call(e, p))
                                                for (d in c = e[p]) l = c[d], t = u(t.ele(d), l).up()
                                    } else
                                        for (d in e)
                                            if (a.call(e, d))
                                                if (c = e[d], d === n) {
                                                    if ("object" == typeof c)
                                                        for (r in c) t = t.att(r, c[r])
                                                } else if (d === i) t = h.options.cdata && o(c) ? t.raw(s(c)) : t.txt(c);
                                    else if (Array.isArray(c))
                                        for (p in c) a.call(c, p) && (t = "string" == typeof (l = c[p]) ? h.options.cdata && o(l) ? t.ele(d).raw(s(l)).up() : t.ele(d, l).up() : u(t.ele(d), l).up());
                                    else "object" == typeof c ? t = u(t.ele(d), c).up() : "string" == typeof c && h.options.cdata && o(c) ? t = t.ele(d).raw(s(c)).up() : (null == c && (c = ""), t = t.ele(d, c.toString()).up());
                                    return t
                                }, c = t.create(l, this.options.xmldec, this.options.doctype, {
                                    headless: this.options.headless,
                                    allowSurrogateChars: this.options.allowSurrogateChars
                                }), u(c, e).end(this.options.renderOpts)
                            }, e
                        }()
                    }).call(this)
                },
                RfOz: function (t, e) {
                    (function () {
                        var e, n, r, i, o, s, a, u = [].slice,
                            c = {}.hasOwnProperty;
                        e = function () {
                            var t, e, n, r, i, s;
                            if (s = arguments[0], i = 2 <= arguments.length ? u.call(arguments, 1) : [], o(Object.assign)) Object.assign.apply(null, arguments);
                            else
                                for (t = 0, n = i.length; t < n; t++)
                                    if (null != (r = i[t]))
                                        for (e in r) c.call(r, e) && (s[e] = r[e]);
                            return s
                        }, o = function (t) {
                            return !!t && "[object Function]" === Object.prototype.toString.call(t)
                        }, s = function (t) {
                            var e;
                            return !!t && ("function" == (e = typeof t) || "object" === e)
                        }, r = function (t) {
                            return o(Array.isArray) ? Array.isArray(t) : "[object Array]" === Object.prototype.toString.call(t)
                        }, i = function (t) {
                            var e;
                            if (r(t)) return !t.length;
                            for (e in t)
                                if (c.call(t, e)) return !1;
                            return !0
                        }, a = function (t) {
                            var e, n;
                            return s(t) && (n = Object.getPrototypeOf(t)) && (e = n.constructor) && "function" == typeof e && e instanceof e && Function.prototype.toString.call(e) === Function.prototype.toString.call(Object)
                        }, n = function (t) {
                            return o(t.valueOf) ? t.valueOf() : t
                        }, t.exports.assign = e, t.exports.isFunction = o, t.exports.isObject = s, t.exports.isArray = r, t.exports.isEmpty = i, t.exports.isPlainObject = a, t.exports.getValue = n
                    }).call(this)
                },
                SeVD: function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return l
                    }));
                    var r = n("ngJS"),
                        i = n("NJ4a"),
                        o = n("Lhse"),
                        s = n("kJWO"),
                        a = n("I55L"),
                        u = n("c2HN"),
                        c = n("XoHu");
                    const l = t => {
                        if (t && "function" == typeof t[s.a]) return l = t, t => {
                            const e = l[s.a]();
                            if ("function" != typeof e.subscribe) throw new TypeError("Provided object does not correctly implement Symbol.observable");
                            return e.subscribe(t)
                        };
                        if (Object(a.a)(t)) return Object(r.a)(t);
                        if (Object(u.a)(t)) return n = t, t => (n.then(e => {
                            t.closed || (t.next(e), t.complete())
                        }, e => t.error(e)).then(null, i.a), t);
                        if (t && "function" == typeof t[o.a]) return e = t, t => {
                            const n = e[o.a]();
                            for (;;) {
                                let e;
                                try {
                                    e = n.next()
                                } catch (r) {
                                    return t.error(r), t
                                }
                                if (e.done) {
                                    t.complete();
                                    break
                                }
                                if (t.next(e.value), t.closed) break
                            }
                            return "function" == typeof n.return && t.add(() => {
                                n.return && n.return()
                            }), t
                        }; {
                            const e = Object(c.a)(t) ? "an invalid object" : `'${t}'`;
                            throw new TypeError(`You provided ${e} where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.`)
                        }
                        var e, n, l
                    }
                },
                SpAZ: function (t, e, n) {
                    "use strict";

                    function r(t) {
                        return t
                    }
                    n.d(e, "a", (function () {
                        return r
                    }))
                },
                U26E: function (t, e, n) {
                    (function () {
                        var e, r, i = {}.hasOwnProperty;
                        e = n("Bl63"), r = n("V4+3"), t.exports = function (t) {
                            function n(t, r) {
                                if (n.__super__.constructor.call(this, t), null == r) throw new Error("Missing CDATA text. " + this.debugInfo());
                                this.name = "#cdata-section", this.type = e.CData, this.value = this.stringify.cdata(r)
                            }
                            return function (t, e) {
                                for (var n in e) i.call(e, n) && (t[n] = e[n]);

                                function r() {
                                    this.constructor = t
                                }
                                r.prototype = e.prototype, t.prototype = new r, t.__super__ = e.prototype
                            }(n, t), n.prototype.clone = function () {
                                return Object.create(this)
                            }, n.prototype.toString = function (t) {
                                return this.options.writer.cdata(this, this.options.writer.filterOptions(t))
                            }, n
                        }(r)
                    }).call(this)
                },
                UNeu: function (t, e, n) {
                    (function () {
                        var e, r, i = {}.hasOwnProperty;
                        e = n("Bl63"), r = n("kud4"), t.exports = function (t) {
                            function n(t, r) {
                                if (n.__super__.constructor.call(this, t), null == r) throw new Error("Missing raw text. " + this.debugInfo());
                                this.type = e.Raw, this.value = this.stringify.raw(r)
                            }
                            return function (t, e) {
                                for (var n in e) i.call(e, n) && (t[n] = e[n]);

                                function r() {
                                    this.constructor = t
                                }
                                r.prototype = e.prototype, t.prototype = new r, t.__super__ = e.prototype
                            }(n, t), n.prototype.clone = function () {
                                return Object.create(this)
                            }, n.prototype.toString = function (t) {
                                return this.options.writer.raw(this, this.options.writer.filterOptions(t))
                            }, n
                        }(r)
                    }).call(this)
                },
                Uo1N: function (t, e, n) {
                    (function () {
                        var e, r, i, o = {}.hasOwnProperty;
                        i = n("RfOz").isObject, r = n("kud4"), e = n("Bl63"), t.exports = function (t) {
                            function n(t, r, o, s) {
                                var a;
                                n.__super__.constructor.call(this, t), i(r) && (r = (a = r).version, o = a.encoding, s = a.standalone), r || (r = "1.0"), this.type = e.Declaration, this.version = this.stringify.xmlVersion(r), null != o && (this.encoding = this.stringify.xmlEncoding(o)), null != s && (this.standalone = this.stringify.xmlStandalone(s))
                            }
                            return function (t, e) {
                                for (var n in e) o.call(e, n) && (t[n] = e[n]);

                                function r() {
                                    this.constructor = t
                                }
                                r.prototype = e.prototype, t.prototype = new r, t.__super__ = e.prototype
                            }(n, t), n.prototype.toString = function (t) {
                                return this.options.writer.declaration(this, this.options.writer.filterOptions(t))
                            }, n
                        }(r)
                    }).call(this)
                },
                "V4+3": function (t, e, n) {
                    (function () {
                        var e, r = {}.hasOwnProperty;
                        e = n("kud4"), t.exports = function (t) {
                            function e(t) {
                                e.__super__.constructor.call(this, t), this.value = ""
                            }
                            return function (t, e) {
                                for (var n in e) r.call(e, n) && (t[n] = e[n]);

                                function i() {
                                    this.constructor = t
                                }
                                i.prototype = e.prototype, t.prototype = new i, t.__super__ = e.prototype
                            }(e, t), Object.defineProperty(e.prototype, "data", {
                                get: function () {
                                    return this.value
                                },
                                set: function (t) {
                                    return this.value = t || ""
                                }
                            }), Object.defineProperty(e.prototype, "length", {
                                get: function () {
                                    return this.value.length
                                }
                            }), Object.defineProperty(e.prototype, "textContent", {
                                get: function () {
                                    return this.value
                                },
                                set: function (t) {
                                    return this.value = t || ""
                                }
                            }), e.prototype.clone = function () {
                                return Object.create(this)
                            }, e.prototype.substringData = function (t, e) {
                                throw new Error("This DOM method is not implemented." + this.debugInfo())
                            }, e.prototype.appendData = function (t) {
                                throw new Error("This DOM method is not implemented." + this.debugInfo())
                            }, e.prototype.insertData = function (t, e) {
                                throw new Error("This DOM method is not implemented." + this.debugInfo())
                            }, e.prototype.deleteData = function (t, e) {
                                throw new Error("This DOM method is not implemented." + this.debugInfo())
                            }, e.prototype.replaceData = function (t, e, n) {
                                throw new Error("This DOM method is not implemented." + this.debugInfo())
                            }, e.prototype.isEqualNode = function (t) {
                                return !!e.__super__.isEqualNode.apply(this, arguments).isEqualNode(t) && t.data === this.data
                            }, e
                        }(e)
                    }).call(this)
                },
                VN3C: function (t, e, n) {
                    (function () {
                        var e, r, i, o, s, a, u, c, l, h, p, d, f, g, m, y, b, w, v, _, E, T, C, O = {}.hasOwnProperty;
                        C = n("RfOz"), E = C.isObject, _ = C.isFunction, T = C.isPlainObject, v = C.getValue, e = n("Bl63"), d = n("rgrL"), f = n("uO6I"), o = n("U26E"), s = n("iTBR"), m = n("UNeu"), w = n("nS9B"), g = n("8BaB"), h = n("Uo1N"), p = n("1+OA"), a = n("GI8a"), c = n("FYWk"), u = n("OzLs"), l = n("tuH/"), i = n("IoDD"), b = n("WmE4"), y = n("HwjW"), r = n("CYXk"), t.exports = function () {
                            function t(t, n, r) {
                                var i;
                                this.name = "?xml", this.type = e.Document, t || (t = {}), i = {}, t.writer ? T(t.writer) && (i = t.writer, t.writer = new y) : t.writer = new y, this.options = t, this.writer = t.writer, this.writerOptions = this.writer.filterOptions(i), this.stringify = new b(t), this.onDataCallback = n || function () {}, this.onEndCallback = r || function () {}, this.currentNode = null, this.currentLevel = -1, this.openTags = {}, this.documentStarted = !1, this.documentCompleted = !1, this.root = null
                            }
                            return t.prototype.createChildNode = function (t) {
                                var n, r, i, o, s, a, u;
                                switch (t.type) {
                                    case e.CData:
                                        this.cdata(t.value);
                                        break;
                                    case e.Comment:
                                        this.comment(t.value);
                                        break;
                                    case e.Element:
                                        for (n in r = {}, a = t.attribs) O.call(a, n) && (r[n] = a[n].value);
                                        this.node(t.name, r);
                                        break;
                                    case e.Dummy:
                                        this.dummy();
                                        break;
                                    case e.Raw:
                                        this.raw(t.value);
                                        break;
                                    case e.Text:
                                        this.text(t.value);
                                        break;
                                    case e.ProcessingInstruction:
                                        this.instruction(t.target, t.value);
                                        break;
                                    default:
                                        throw new Error("This XML node type is not supported in a JS object: " + t.constructor.name)
                                }
                                for (o = 0, s = (u = t.children).length; o < s; o++) this.createChildNode(i = u[o]), i.type === e.Element && this.up();
                                return this
                            }, t.prototype.dummy = function () {
                                return this
                            }, t.prototype.node = function (t, e, n) {
                                var r;
                                if (null == t) throw new Error("Missing node name.");
                                if (this.root && -1 === this.currentLevel) throw new Error("Document can only have one root node. " + this.debugInfo(t));
                                return this.openCurrent(), t = v(t), null == e && (e = {}), e = v(e), E(e) || (n = (r = [e, n])[0], e = r[1]), this.currentNode = new f(this, t, e), this.currentNode.children = !1, this.currentLevel++, this.openTags[this.currentLevel] = this.currentNode, null != n && this.text(n), this
                            }, t.prototype.element = function (t, n, r) {
                                var i, o, s, a, u, c;
                                if (this.currentNode && this.currentNode.type === e.DocType) this.dtdElement.apply(this, arguments);
                                else if (Array.isArray(t) || E(t) || _(t))
                                    for (a = this.options.noValidation, this.options.noValidation = !0, (c = new d(this.options).element("TEMP_ROOT")).element(t), this.options.noValidation = a, o = 0, s = (u = c.children).length; o < s; o++) this.createChildNode(i = u[o]), i.type === e.Element && this.up();
                                else this.node(t, n, r);
                                return this
                            }, t.prototype.attribute = function (t, e) {
                                var n;
                                if (!this.currentNode || this.currentNode.children) throw new Error("att() can only be used immediately after an ele() call in callback mode. " + this.debugInfo(t));
                                if (null != t && (t = v(t)), E(t))
                                    for (n in t) O.call(t, n) && this.attribute(n, t[n]);
                                else _(e) && (e = e.apply()), this.options.keepNullAttributes && null == e ? this.currentNode.attribs[t] = new i(this, t, "") : null != e && (this.currentNode.attribs[t] = new i(this, t, e));
                                return this
                            }, t.prototype.text = function (t) {
                                var e;
                                return this.openCurrent(), e = new w(this, t), this.onData(this.writer.text(e, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this
                            }, t.prototype.cdata = function (t) {
                                var e;
                                return this.openCurrent(), e = new o(this, t), this.onData(this.writer.cdata(e, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this
                            }, t.prototype.comment = function (t) {
                                var e;
                                return this.openCurrent(), e = new s(this, t), this.onData(this.writer.comment(e, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this
                            }, t.prototype.raw = function (t) {
                                var e;
                                return this.openCurrent(), e = new m(this, t), this.onData(this.writer.raw(e, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this
                            }, t.prototype.instruction = function (t, e) {
                                var n, r, i, o;
                                if (this.openCurrent(), null != t && (t = v(t)), null != e && (e = v(e)), Array.isArray(t))
                                    for (n = 0, i = t.length; n < i; n++) this.instruction(r = t[n]);
                                else if (E(t))
                                    for (r in t) O.call(t, r) && this.instruction(r, t[r]);
                                else _(e) && (e = e.apply()), o = new g(this, t, e), this.onData(this.writer.processingInstruction(o, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1);
                                return this
                            }, t.prototype.declaration = function (t, e, n) {
                                var r;
                                if (this.openCurrent(), this.documentStarted) throw new Error("declaration() must be the first node.");
                                return r = new h(this, t, e, n), this.onData(this.writer.declaration(r, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this
                            }, t.prototype.doctype = function (t, e, n) {
                                if (this.openCurrent(), null == t) throw new Error("Missing root node name.");
                                if (this.root) throw new Error("dtd() must come before the root node.");
                                return this.currentNode = new p(this, e, n), this.currentNode.rootNodeName = t, this.currentNode.children = !1, this.currentLevel++, this.openTags[this.currentLevel] = this.currentNode, this
                            }, t.prototype.dtdElement = function (t, e) {
                                var n;
                                return this.openCurrent(), n = new u(this, t, e), this.onData(this.writer.dtdElement(n, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this
                            }, t.prototype.attList = function (t, e, n, r, i) {
                                var o;
                                return this.openCurrent(), o = new a(this, t, e, n, r, i), this.onData(this.writer.dtdAttList(o, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this
                            }, t.prototype.entity = function (t, e) {
                                var n;
                                return this.openCurrent(), n = new c(this, !1, t, e), this.onData(this.writer.dtdEntity(n, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this
                            }, t.prototype.pEntity = function (t, e) {
                                var n;
                                return this.openCurrent(), n = new c(this, !0, t, e), this.onData(this.writer.dtdEntity(n, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this
                            }, t.prototype.notation = function (t, e) {
                                var n;
                                return this.openCurrent(), n = new l(this, t, e), this.onData(this.writer.dtdNotation(n, this.writerOptions, this.currentLevel + 1), this.currentLevel + 1), this
                            }, t.prototype.up = function () {
                                if (this.currentLevel < 0) throw new Error("The document node has no parent.");
                                return this.currentNode ? (this.currentNode.children ? this.closeNode(this.currentNode) : this.openNode(this.currentNode), this.currentNode = null) : this.closeNode(this.openTags[this.currentLevel]), delete this.openTags[this.currentLevel], this.currentLevel--, this
                            }, t.prototype.end = function () {
                                for (; this.currentLevel >= 0;) this.up();
                                return this.onEnd()
                            }, t.prototype.openCurrent = function () {
                                if (this.currentNode) return this.currentNode.children = !0, this.openNode(this.currentNode)
                            }, t.prototype.openNode = function (t) {
                                var n, i, o;
                                if (!t.isOpen) {
                                    if (this.root || 0 !== this.currentLevel || t.type !== e.Element || (this.root = t), n = "", t.type === e.Element) {
                                        for (i in this.writerOptions.state = r.OpenTag, n = this.writer.indent(t, this.writerOptions, this.currentLevel) + "<" + t.name, o = t.attribs) O.call(o, i) && (n += this.writer.attribute(o[i], this.writerOptions, this.currentLevel));
                                        n += (t.children ? ">" : "/>") + this.writer.endline(t, this.writerOptions, this.currentLevel), this.writerOptions.state = r.InsideTag
                                    } else this.writerOptions.state = r.OpenTag, n = this.writer.indent(t, this.writerOptions, this.currentLevel) + "<!DOCTYPE " + t.rootNodeName, t.pubID && t.sysID ? n += ' PUBLIC "' + t.pubID + '" "' + t.sysID + '"' : t.sysID && (n += ' SYSTEM "' + t.sysID + '"'), t.children ? (n += " [", this.writerOptions.state = r.InsideTag) : (this.writerOptions.state = r.CloseTag, n += ">"), n += this.writer.endline(t, this.writerOptions, this.currentLevel);
                                    return this.onData(n, this.currentLevel), t.isOpen = !0
                                }
                            }, t.prototype.closeNode = function (t) {
                                var n;
                                if (!t.isClosed) return this.writerOptions.state = r.CloseTag, n = t.type === e.Element ? this.writer.indent(t, this.writerOptions, this.currentLevel) + "</" + t.name + ">" + this.writer.endline(t, this.writerOptions, this.currentLevel) : this.writer.indent(t, this.writerOptions, this.currentLevel) + "]>" + this.writer.endline(t, this.writerOptions, this.currentLevel), this.writerOptions.state = r.None, this.onData(n, this.currentLevel), t.isClosed = !0
                            }, t.prototype.onData = function (t, e) {
                                return this.documentStarted = !0, this.onDataCallback(t, e + 1)
                            }, t.prototype.onEnd = function () {
                                return this.documentCompleted = !0, this.onEndCallback()
                            }, t.prototype.debugInfo = function (t) {
                                return null == t ? "" : "node: <" + t + ">"
                            }, t.prototype.ele = function () {
                                return this.element.apply(this, arguments)
                            }, t.prototype.nod = function (t, e, n) {
                                return this.node(t, e, n)
                            }, t.prototype.txt = function (t) {
                                return this.text(t)
                            }, t.prototype.dat = function (t) {
                                return this.cdata(t)
                            }, t.prototype.com = function (t) {
                                return this.comment(t)
                            }, t.prototype.ins = function (t, e) {
                                return this.instruction(t, e)
                            }, t.prototype.dec = function (t, e, n) {
                                return this.declaration(t, e, n)
                            }, t.prototype.dtd = function (t, e, n) {
                                return this.doctype(t, e, n)
                            }, t.prototype.e = function (t, e, n) {
                                return this.element(t, e, n)
                            }, t.prototype.n = function (t, e, n) {
                                return this.node(t, e, n)
                            }, t.prototype.t = function (t) {
                                return this.text(t)
                            }, t.prototype.d = function (t) {
                                return this.cdata(t)
                            }, t.prototype.c = function (t) {
                                return this.comment(t)
                            }, t.prototype.r = function (t) {
                                return this.raw(t)
                            }, t.prototype.i = function (t, e) {
                                return this.instruction(t, e)
                            }, t.prototype.att = function () {
                                return this.currentNode && this.currentNode.type === e.DocType ? this.attList.apply(this, arguments) : this.attribute.apply(this, arguments)
                            }, t.prototype.a = function () {
                                return this.currentNode && this.currentNode.type === e.DocType ? this.attList.apply(this, arguments) : this.attribute.apply(this, arguments)
                            }, t.prototype.ent = function (t, e) {
                                return this.entity(t, e)
                            }, t.prototype.pent = function (t, e) {
                                return this.pEntity(t, e)
                            }, t.prototype.not = function (t, e) {
                                return this.notation(t, e)
                            }, t
                        }()
                    }).call(this)
                },
                WmE4: function (t, e) {
                    (function () {
                        var e = function (t, e) {
                                return function () {
                                    return t.apply(e, arguments)
                                }
                            },
                            n = {}.hasOwnProperty;
                        t.exports = function () {
                            function t(t) {
                                var r, i;
                                for (r in this.assertLegalName = e(this.assertLegalName, this), this.assertLegalChar = e(this.assertLegalChar, this), t || (t = {}), this.options = t, this.options.version || (this.options.version = "1.0"), i = t.stringify || {}) n.call(i, r) && (this[r] = i[r])
                            }
                            return t.prototype.name = function (t) {
                                return this.options.noValidation ? t : this.assertLegalName("" + t || "")
                            }, t.prototype.text = function (t) {
                                return this.options.noValidation ? t : this.assertLegalChar(this.textEscape("" + t || ""))
                            }, t.prototype.cdata = function (t) {
                                return this.options.noValidation ? t : (t = (t = "" + t || "").replace("]]>", "]]]]><![CDATA[>"), this.assertLegalChar(t))
                            }, t.prototype.comment = function (t) {
                                if (this.options.noValidation) return t;
                                if ((t = "" + t || "").match(/--/)) throw new Error("Comment text cannot contain double-hypen: " + t);
                                return this.assertLegalChar(t)
                            }, t.prototype.raw = function (t) {
                                return this.options.noValidation ? t : "" + t || ""
                            }, t.prototype.attValue = function (t) {
                                return this.options.noValidation ? t : this.assertLegalChar(this.attEscape(t = "" + t || ""))
                            }, t.prototype.insTarget = function (t) {
                                return this.options.noValidation ? t : this.assertLegalChar("" + t || "")
                            }, t.prototype.insValue = function (t) {
                                if (this.options.noValidation) return t;
                                if ((t = "" + t || "").match(/\?>/)) throw new Error("Invalid processing instruction value: " + t);
                                return this.assertLegalChar(t)
                            }, t.prototype.xmlVersion = function (t) {
                                if (this.options.noValidation) return t;
                                if (!(t = "" + t || "").match(/1\.[0-9]+/)) throw new Error("Invalid version number: " + t);
                                return t
                            }, t.prototype.xmlEncoding = function (t) {
                                if (this.options.noValidation) return t;
                                if (!(t = "" + t || "").match(/^[A-Za-z](?:[A-Za-z0-9._-])*$/)) throw new Error("Invalid encoding: " + t);
                                return this.assertLegalChar(t)
                            }, t.prototype.xmlStandalone = function (t) {
                                return this.options.noValidation ? t : t ? "yes" : "no"
                            }, t.prototype.dtdPubID = function (t) {
                                return this.options.noValidation ? t : this.assertLegalChar("" + t || "")
                            }, t.prototype.dtdSysID = function (t) {
                                return this.options.noValidation ? t : this.assertLegalChar("" + t || "")
                            }, t.prototype.dtdElementValue = function (t) {
                                return this.options.noValidation ? t : this.assertLegalChar("" + t || "")
                            }, t.prototype.dtdAttType = function (t) {
                                return this.options.noValidation ? t : this.assertLegalChar("" + t || "")
                            }, t.prototype.dtdAttDefault = function (t) {
                                return this.options.noValidation ? t : this.assertLegalChar("" + t || "")
                            }, t.prototype.dtdEntityValue = function (t) {
                                return this.options.noValidation ? t : this.assertLegalChar("" + t || "")
                            }, t.prototype.dtdNData = function (t) {
                                return this.options.noValidation ? t : this.assertLegalChar("" + t || "")
                            }, t.prototype.convertAttKey = "@", t.prototype.convertPIKey = "?", t.prototype.convertTextKey = "#text", t.prototype.convertCDataKey = "#cdata", t.prototype.convertCommentKey = "#comment", t.prototype.convertRawKey = "#raw", t.prototype.assertLegalChar = function (t) {
                                var e;
                                if (this.options.noValidation) return t;
                                if ("1.0" === this.options.version) {
                                    if (e = t.match(/[\0-\x08\x0B\f\x0E-\x1F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/)) throw new Error("Invalid character in string: " + t + " at index " + e.index)
                                } else if ("1.1" === this.options.version && (e = t.match(/[\0\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/))) throw new Error("Invalid character in string: " + t + " at index " + e.index);
                                return t
                            }, t.prototype.assertLegalName = function (t) {
                                if (this.options.noValidation) return t;
                                if (this.assertLegalChar(t), !t.match(/^([:A-Z_a-z\xC0-\xD6\xD8-\xF6\xF8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])([\x2D\.0-:A-Z_a-z\xB7\xC0-\xD6\xD8-\xF6\xF8-\u037D\u037F-\u1FFF\u200C\u200D\u203F\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]|[\uD800-\uDB7F][\uDC00-\uDFFF])*$/)) throw new Error("Invalid character in name");
                                return t
                            }, t.prototype.textEscape = function (t) {
                                return this.options.noValidation ? t : t.replace(this.options.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\r/g, "&#xD;")
                            }, t.prototype.attEscape = function (t) {
                                return this.options.noValidation ? t : t.replace(this.options.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;").replace(/\t/g, "&#x9;").replace(/\n/g, "&#xA;").replace(/\r/g, "&#xD;")
                            }, t
                        }()
                    }).call(this)
                },
                "XCq/": function (t, e) {
                    (function () {
                        t.exports = function () {
                            function t(t) {
                                this.nodes = t
                            }
                            return Object.defineProperty(t.prototype, "length", {
                                get: function () {
                                    return Object.keys(this.nodes).length || 0
                                }
                            }), t.prototype.clone = function () {
                                return this.nodes = null
                            }, t.prototype.getNamedItem = function (t) {
                                return this.nodes[t]
                            }, t.prototype.setNamedItem = function (t) {
                                var e;
                                return e = this.nodes[t.nodeName], this.nodes[t.nodeName] = t, e || null
                            }, t.prototype.removeNamedItem = function (t) {
                                var e;
                                return e = this.nodes[t], delete this.nodes[t], e || null
                            }, t.prototype.item = function (t) {
                                return this.nodes[Object.keys(this.nodes)[t]] || null
                            }, t.prototype.getNamedItemNS = function (t, e) {
                                throw new Error("This DOM method is not implemented.")
                            }, t.prototype.setNamedItemNS = function (t) {
                                throw new Error("This DOM method is not implemented.")
                            }, t.prototype.removeNamedItemNS = function (t, e) {
                                throw new Error("This DOM method is not implemented.")
                            }, t
                        }()
                    }).call(this)
                },
                XNiG: function (t, e, n) {
                    "use strict";
                    n.d(e, "b", (function () {
                        return c
                    })), n.d(e, "a", (function () {
                        return l
                    }));
                    var r = n("HDdC"),
                        i = n("7o/Q"),
                        o = n("quSY"),
                        s = n("9ppp");
                    class a extends o.a {
                        constructor(t, e) {
                            super(), this.subject = t, this.subscriber = e, this.closed = !1
                        }
                        unsubscribe() {
                            if (this.closed) return;
                            this.closed = !0;
                            const t = this.subject,
                                e = t.observers;
                            if (this.subject = null, !e || 0 === e.length || t.isStopped || t.closed) return;
                            const n = e.indexOf(this.subscriber); - 1 !== n && e.splice(n, 1)
                        }
                    }
                    var u = n("2QA8");
                    class c extends i.a {
                        constructor(t) {
                            super(t), this.destination = t
                        }
                    }
                    let l = (() => {
                        class t extends r.a {
                            constructor() {
                                super(), this.observers = [], this.closed = !1, this.isStopped = !1, this.hasError = !1, this.thrownError = null
                            } [u.a]() {
                                return new c(this)
                            }
                            lift(t) {
                                const e = new h(this, this);
                                return e.operator = t, e
                            }
                            next(t) {
                                if (this.closed) throw new s.a;
                                if (!this.isStopped) {
                                    const {
                                        observers: e
                                    } = this, n = e.length, r = e.slice();
                                    for (let i = 0; i < n; i++) r[i].next(t)
                                }
                            }
                            error(t) {
                                if (this.closed) throw new s.a;
                                this.hasError = !0, this.thrownError = t, this.isStopped = !0;
                                const {
                                    observers: e
                                } = this, n = e.length, r = e.slice();
                                for (let i = 0; i < n; i++) r[i].error(t);
                                this.observers.length = 0
                            }
                            complete() {
                                if (this.closed) throw new s.a;
                                this.isStopped = !0;
                                const {
                                    observers: t
                                } = this, e = t.length, n = t.slice();
                                for (let r = 0; r < e; r++) n[r].complete();
                                this.observers.length = 0
                            }
                            unsubscribe() {
                                this.isStopped = !0, this.closed = !0, this.observers = null
                            }
                            _trySubscribe(t) {
                                if (this.closed) throw new s.a;
                                return super._trySubscribe(t)
                            }
                            _subscribe(t) {
                                if (this.closed) throw new s.a;
                                return this.hasError ? (t.error(this.thrownError), o.a.EMPTY) : this.isStopped ? (t.complete(), o.a.EMPTY) : (this.observers.push(t), new a(this, t))
                            }
                            asObservable() {
                                const t = new r.a;
                                return t.source = this, t
                            }
                        }
                        return t.create = (t, e) => new h(t, e), t
                    })();
                    class h extends l {
                        constructor(t, e) {
                            super(), this.destination = t, this.source = e
                        }
                        next(t) {
                            const {
                                destination: e
                            } = this;
                            e && e.next && e.next(t)
                        }
                        error(t) {
                            const {
                                destination: e
                            } = this;
                            e && e.error && this.destination.error(t)
                        }
                        complete() {
                            const {
                                destination: t
                            } = this;
                            t && t.complete && this.destination.complete()
                        }
                        _subscribe(t) {
                            const {
                                source: e
                            } = this;
                            return e ? this.source.subscribe(t) : o.a.EMPTY
                        }
                    }
                },
                XoHu: function (t, e, n) {
                    "use strict";

                    function r(t) {
                        return null !== t && "object" == typeof t
                    }
                    n.d(e, "a", (function () {
                        return r
                    }))
                },
                b5cc: function (t, e) {
                    (function () {
                        "use strict";
                        e.stripBOM = function (t) {
                            return "\ufeff" === t[0] ? t.substring(1) : t
                        }
                    }).call(this)
                },
                b6Qw: function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return o
                    }));
                    var r = n("fXoL"),
                        i = n("ofXK");
                    let o = (() => {
                        class t {
                            constructor(t, e) {
                                this.document = t, this.platformId = e, this.documentIsAccessible = Object(i.n)(this.platformId)
                            }
                            check(t) {
                                return !!this.documentIsAccessible && (t = encodeURIComponent(t), this.getCookieRegExp(t).test(this.document.cookie))
                            }
                            get(t) {
                                if (this.documentIsAccessible && this.check(t)) {
                                    t = encodeURIComponent(t);
                                    const e = this.getCookieRegExp(t).exec(this.document.cookie);
                                    return this.safeDecodeURIComponent(e[1])
                                }
                                return ""
                            }
                            getAll() {
                                if (!this.documentIsAccessible) return {};
                                const t = {},
                                    e = this.document;
                                return e.cookie && "" !== e.cookie && e.cookie.split(";").forEach(e => {
                                    const [n, r] = e.split("=");
                                    t[this.safeDecodeURIComponent(n.replace(/^ /, ""))] = this.safeDecodeURIComponent(r)
                                }), t
                            }
                            set(t, e, n, r, i, o, s = "Lax") {
                                if (!this.documentIsAccessible) return;
                                let a = encodeURIComponent(t) + "=" + encodeURIComponent(e) + ";";
                                n && (a += "number" == typeof n ? "expires=" + new Date((new Date).getTime() + 1e3 * n * 60 * 60 * 24).toUTCString() + ";" : "expires=" + n.toUTCString() + ";"), r && (a += "path=" + r + ";"), i && (a += "domain=" + i + ";"), !1 === o && "None" === s && (o = !0, console.warn(`[ngx-cookie-service] Cookie ${t} was forced with secure flag because sameSite=None.More details : https://github.com/stevermeister/ngx-cookie-service/issues/86#issuecomment-597720130`)), o && (a += "secure;"), a += "sameSite=" + s + ";", this.document.cookie = a
                            }
                            delete(t, e, n, r, i = "Lax") {
                                this.documentIsAccessible && this.set(t, "", new Date("Thu, 01 Jan 1970 00:00:01 GMT"), e, n, r, i)
                            }
                            deleteAll(t, e, n, r = "Lax") {
                                if (!this.documentIsAccessible) return;
                                const i = this.getAll();
                                for (const o in i) i.hasOwnProperty(o) && this.delete(o, t, e, n, r)
                            }
                            getCookieRegExp(t) {
                                const e = t.replace(/([\[\]\{\}\(\)\|\=\;\+\?\,\.\*\^\$])/gi, "\\$1");
                                return new RegExp("(?:^" + e + "|;\\s*" + e + ")=(.*?)(?:;|$)", "g")
                            }
                            safeDecodeURIComponent(t) {
                                try {
                                    return decodeURIComponent(t)
                                } catch (e) {
                                    return t
                                }
                            }
                        }
                        return t.\u0275fac = function (e) {
                            return new(e || t)(r.Pb(i.c), r.Pb(r.B))
                        }, t.\u0275prov = Object(r.Db)({
                            factory: function () {
                                return new t(Object(r.Pb)(i.c), Object(r.Pb)(r.B))
                            },
                            token: t,
                            providedIn: "root"
                        }), t
                    })()
                },
                bHdf: function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return o
                    }));
                    var r = n("5+tZ"),
                        i = n("SpAZ");

                    function o(t = Number.POSITIVE_INFINITY) {
                        return Object(r.a)(i.a, t)
                    }
                },
                bOdf: function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return i
                    }));
                    var r = n("5+tZ");

                    function i(t, e) {
                        return Object(r.a)(t, e, 1)
                    }
                },
                c2HN: function (t, e, n) {
                    "use strict";

                    function r(t) {
                        return !!t && "function" != typeof t.subscribe && "function" == typeof t.then
                    }
                    n.d(e, "a", (function () {
                        return r
                    }))
                },
                dEzR: function (t, e, n) {
                    (function () {
                        var e, r, i, o, s, a, u, c, l, h;
                        h = n("RfOz"), c = h.assign, l = h.isFunction, i = n("Cm3p"), o = n("rgrL"), s = n("VN3C"), u = n("HwjW"), a = n("w3aC"), e = n("Bl63"), r = n("CYXk"), t.exports.create = function (t, e, n, r) {
                            var i, s;
                            if (null == t) throw new Error("Root element needs a name.");
                            return r = c({}, e, n, r), s = (i = new o(r)).element(t), r.headless || (i.declaration(r), null == r.pubID && null == r.sysID || i.dtd(r)), s
                        }, t.exports.begin = function (t, e, n) {
                            var r;
                            return l(t) && (e = (r = [t, e])[0], n = r[1], t = {}), e ? new s(t, e, n) : new o(t)
                        }, t.exports.stringWriter = function (t) {
                            return new u(t)
                        }, t.exports.streamWriter = function (t, e) {
                            return new a(t, e)
                        }, t.exports.implementation = new i, t.exports.nodeType = e, t.exports.writerState = r
                    }).call(this)
                },
                fXKp: function (t, e, n) {
                    "use strict";
                    var r = n("hwdV").Buffer,
                        i = r.isEncoding || function (t) {
                            switch ((t = "" + t) && t.toLowerCase()) {
                                case "hex":
                                case "utf8":
                                case "utf-8":
                                case "ascii":
                                case "binary":
                                case "base64":
                                case "ucs2":
                                case "ucs-2":
                                case "utf16le":
                                case "utf-16le":
                                case "raw":
                                    return !0;
                                default:
                                    return !1
                            }
                        };

                    function o(t) {
                        var e;
                        switch (this.encoding = function (t) {
                            var e = function (t) {
                                if (!t) return "utf8";
                                for (var e;;) switch (t) {
                                    case "utf8":
                                    case "utf-8":
                                        return "utf8";
                                    case "ucs2":
                                    case "ucs-2":
                                    case "utf16le":
                                    case "utf-16le":
                                        return "utf16le";
                                    case "latin1":
                                    case "binary":
                                        return "latin1";
                                    case "base64":
                                    case "ascii":
                                    case "hex":
                                        return t;
                                    default:
                                        if (e) return;
                                        t = ("" + t).toLowerCase(), e = !0
                                }
                            }(t);
                            if ("string" != typeof e && (r.isEncoding === i || !i(t))) throw new Error("Unknown encoding: " + t);
                            return e || t
                        }(t), this.encoding) {
                            case "utf16le":
                                this.text = u, this.end = c, e = 4;
                                break;
                            case "utf8":
                                this.fillLast = a, e = 4;
                                break;
                            case "base64":
                                this.text = l, this.end = h, e = 3;
                                break;
                            default:
                                return this.write = p, void(this.end = d)
                        }
                        this.lastNeed = 0, this.lastTotal = 0, this.lastChar = r.allocUnsafe(e)
                    }

                    function s(t) {
                        return t <= 127 ? 0 : t >> 5 == 6 ? 2 : t >> 4 == 14 ? 3 : t >> 3 == 30 ? 4 : t >> 6 == 2 ? -1 : -2
                    }

                    function a(t) {
                        var e = this.lastTotal - this.lastNeed,
                            n = function (t, e, n) {
                                if (128 != (192 & e[0])) return t.lastNeed = 0, "\ufffd";
                                if (t.lastNeed > 1 && e.length > 1) {
                                    if (128 != (192 & e[1])) return t.lastNeed = 1, "\ufffd";
                                    if (t.lastNeed > 2 && e.length > 2 && 128 != (192 & e[2])) return t.lastNeed = 2, "\ufffd"
                                }
                            }(this, t);
                        return void 0 !== n ? n : this.lastNeed <= t.length ? (t.copy(this.lastChar, e, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (t.copy(this.lastChar, e, 0, t.length), void(this.lastNeed -= t.length))
                    }

                    function u(t, e) {
                        if ((t.length - e) % 2 == 0) {
                            var n = t.toString("utf16le", e);
                            if (n) {
                                var r = n.charCodeAt(n.length - 1);
                                if (r >= 55296 && r <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = t[t.length - 2], this.lastChar[1] = t[t.length - 1], n.slice(0, -1)
                            }
                            return n
                        }
                        return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = t[t.length - 1], t.toString("utf16le", e, t.length - 1)
                    }

                    function c(t) {
                        var e = t && t.length ? this.write(t) : "";
                        return this.lastNeed ? e + this.lastChar.toString("utf16le", 0, this.lastTotal - this.lastNeed) : e
                    }

                    function l(t, e) {
                        var n = (t.length - e) % 3;
                        return 0 === n ? t.toString("base64", e) : (this.lastNeed = 3 - n, this.lastTotal = 3, 1 === n ? this.lastChar[0] = t[t.length - 1] : (this.lastChar[0] = t[t.length - 2], this.lastChar[1] = t[t.length - 1]), t.toString("base64", e, t.length - n))
                    }

                    function h(t) {
                        var e = t && t.length ? this.write(t) : "";
                        return this.lastNeed ? e + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : e
                    }

                    function p(t) {
                        return t.toString(this.encoding)
                    }

                    function d(t) {
                        return t && t.length ? this.write(t) : ""
                    }
                    e.StringDecoder = o, o.prototype.write = function (t) {
                        if (0 === t.length) return "";
                        var e, n;
                        if (this.lastNeed) {
                            if (void 0 === (e = this.fillLast(t))) return "";
                            n = this.lastNeed, this.lastNeed = 0
                        } else n = 0;
                        return n < t.length ? e ? e + this.text(t, n) : this.text(t, n) : e || ""
                    }, o.prototype.end = function (t) {
                        var e = t && t.length ? this.write(t) : "";
                        return this.lastNeed ? e + "\ufffd" : e
                    }, o.prototype.text = function (t, e) {
                        var n = function (t, e, n) {
                            var r = e.length - 1;
                            if (r < n) return 0;
                            var i = s(e[r]);
                            return i >= 0 ? (i > 0 && (t.lastNeed = i - 1), i) : --r < n || -2 === i ? 0 : (i = s(e[r])) >= 0 ? (i > 0 && (t.lastNeed = i - 2), i) : --r < n || -2 === i ? 0 : (i = s(e[r])) >= 0 ? (i > 0 && (2 === i ? i = 0 : t.lastNeed = i - 3), i) : 0
                        }(this, t, e);
                        if (!this.lastNeed) return t.toString("utf8", e);
                        this.lastTotal = n;
                        var r = t.length - (n - this.lastNeed);
                        return t.copy(this.lastChar, 0, r), t.toString("utf8", e, r)
                    }, o.prototype.fillLast = function (t) {
                        if (this.lastNeed <= t.length) return t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
                        t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t.length), this.lastNeed -= t.length
                    }
                },
                fXoL: function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return Ao
                    })), n.d(e, "b", (function () {
                        return ru
                    })), n.d(e, "c", (function () {
                        return Ka
                    })), n.d(e, "d", (function () {
                        return Qa
                    })), n.d(e, "e", (function () {
                        return Za
                    })), n.d(e, "f", (function () {
                        return Yu
                    })), n.d(e, "g", (function () {
                        return Mu
                    })), n.d(e, "h", (function () {
                        return lo
                    })), n.d(e, "i", (function () {
                        return fu
                    })), n.d(e, "j", (function () {
                        return Ds
                    })), n.d(e, "k", (function () {
                        return su
                    })), n.d(e, "l", (function () {
                        return js
                    })), n.d(e, "m", (function () {
                        return Nn
                    })), n.d(e, "n", (function () {
                        return Aa
                    })), n.d(e, "o", (function () {
                        return et
                    })), n.d(e, "p", (function () {
                        return w
                    })), n.d(e, "q", (function () {
                        return tt
                    })), n.d(e, "r", (function () {
                        return Io
                    })), n.d(e, "s", (function () {
                        return Ks
                    })), n.d(e, "t", (function () {
                        return Js
                    })), n.d(e, "u", (function () {
                        return ou
                    })), n.d(e, "v", (function () {
                        return gt
                    })), n.d(e, "w", (function () {
                        return Fu
                    })), n.d(e, "x", (function () {
                        return ft
                    })), n.d(e, "y", (function () {
                        return Du
                    })), n.d(e, "z", (function () {
                        return yu
                    })), n.d(e, "A", (function () {
                        return v
                    })), n.d(e, "B", (function () {
                        return nu
                    })), n.d(e, "C", (function () {
                        return eu
                    })), n.d(e, "D", (function () {
                        return Ms
                    })), n.d(e, "E", (function () {
                        return ks
                    })), n.d(e, "F", (function () {
                        return Ls
                    })), n.d(e, "G", (function () {
                        return Fs
                    })), n.d(e, "H", (function () {
                        return wr
                    })), n.d(e, "I", (function () {
                        return E
                    })), n.d(e, "J", (function () {
                        return Vu
                    })), n.d(e, "K", (function () {
                        return ra
                    })), n.d(e, "L", (function () {
                        return Ou
                    })), n.d(e, "M", (function () {
                        return po
                    })), n.d(e, "N", (function () {
                        return Bs
                    })), n.d(e, "O", (function () {
                        return oa
                    })), n.d(e, "P", (function () {
                        return Tt
                    })), n.d(e, "Q", (function () {
                        return ju
                    })), n.d(e, "R", (function () {
                        return Xn
                    })), n.d(e, "S", (function () {
                        return F
                    })), n.d(e, "T", (function () {
                        return Wn
                    })), n.d(e, "U", (function () {
                        return $u
                    })), n.d(e, "V", (function () {
                        return Iu
                    })), n.d(e, "W", (function () {
                        return iu
                    })), n.d(e, "X", (function () {
                        return fo
                    })), n.d(e, "Y", (function () {
                        return _a
                    })), n.d(e, "Z", (function () {
                        return yr
                    })), n.d(e, "ab", (function () {
                        return tr
                    })), n.d(e, "bb", (function () {
                        return Fn
                    })), n.d(e, "cb", (function () {
                        return Hn
                    })), n.d(e, "db", (function () {
                        return $n
                    })), n.d(e, "eb", (function () {
                        return zn
                    })), n.d(e, "fb", (function () {
                        return Vn
                    })), n.d(e, "gb", (function () {
                        return qn
                    })), n.d(e, "hb", (function () {
                        return ya
                    })), n.d(e, "ib", (function () {
                        return qu
                    })), n.d(e, "jb", (function () {
                        return ba
                    })), n.d(e, "kb", (function () {
                        return wa
                    })), n.d(e, "lb", (function () {
                        return Bn
                    })), n.d(e, "mb", (function () {
                        return G
                    })), n.d(e, "nb", (function () {
                        return Ro
                    })), n.d(e, "ob", (function () {
                        return Zo
                    })), n.d(e, "pb", (function () {
                        return Qo
                    })), n.d(e, "qb", (function () {
                        return ma
                    })), n.d(e, "rb", (function () {
                        return Jt
                    })), n.d(e, "sb", (function () {
                        return L
                    })), n.d(e, "tb", (function () {
                        return Un
                    })), n.d(e, "ub", (function () {
                        return ys
                    })), n.d(e, "vb", (function () {
                        return Yt
                    })), n.d(e, "wb", (function () {
                        return As
                    })), n.d(e, "xb", (function () {
                        return Fr
                    })), n.d(e, "yb", (function () {
                        return Uo
                    })), n.d(e, "zb", (function () {
                        return ss
                    })), n.d(e, "Ab", (function () {
                        return qa
                    })), n.d(e, "Bb", (function () {
                        return St
                    })), n.d(e, "Cb", (function () {
                        return Rt
                    })), n.d(e, "Db", (function () {
                        return x
                    })), n.d(e, "Eb", (function () {
                        return S
                    })), n.d(e, "Fb", (function () {
                        return Nt
                    })), n.d(e, "Gb", (function () {
                        return kt
                    })), n.d(e, "Hb", (function () {
                        return Ho
                    })), n.d(e, "Ib", (function () {
                        return Yo
                    })), n.d(e, "Jb", (function () {
                        return Xo
                    })), n.d(e, "Kb", (function () {
                        return Wo
                    })), n.d(e, "Lb", (function () {
                        return Go
                    })), n.d(e, "Mb", (function () {
                        return $o
                    })), n.d(e, "Nb", (function () {
                        return Sn
                    })), n.d(e, "Ob", (function () {
                        return gs
                    })), n.d(e, "Pb", (function () {
                        return lt
                    })), n.d(e, "Qb", (function () {
                        return Vo
                    })), n.d(e, "Rb", (function () {
                        return Xa
                    })), n.d(e, "Sb", (function () {
                        return Ko
                    })), n.d(e, "Tb", (function () {
                        return $a
                    })), n.d(e, "Ub", (function () {
                        return He
                    })), n.d(e, "Vb", (function () {
                        return Be
                    })), n.d(e, "Wb", (function () {
                        return es
                    })), n.d(e, "Xb", (function () {
                        return Sa
                    })), n.d(e, "Yb", (function () {
                        return Ia
                    })), n.d(e, "Zb", (function () {
                        return zo
                    })), n.d(e, "ac", (function () {
                        return ns
                    })), n.d(e, "bc", (function () {
                        return Ba
                    })), n.d(e, "cc", (function () {
                        return un
                    })), n.d(e, "dc", (function () {
                        return vr
                    })), n.d(e, "ec", (function () {
                        return Dt
                    })), n.d(e, "fc", (function () {
                        return Ha
                    })), n.d(e, "gc", (function () {
                        return Bo
                    })), n.d(e, "hc", (function () {
                        return hs
                    })), n.d(e, "ic", (function () {
                        return ps
                    })), n.d(e, "jc", (function () {
                        return ds
                    })), n.d(e, "kc", (function () {
                        return fs
                    })), n.d(e, "lc", (function () {
                        return Va
                    }));
                    var r = n("XNiG"),
                        i = n("quSY"),
                        o = n("HDdC"),
                        s = n("z+Ro"),
                        a = n("bHdf"),
                        u = n("yCtX"),
                        c = n("7o/Q");

                    function l() {
                        return function (t) {
                            return t.lift(new h(t))
                        }
                    }
                    class h {
                        constructor(t) {
                            this.connectable = t
                        }
                        call(t, e) {
                            const {
                                connectable: n
                            } = this;
                            n._refCount++;
                            const r = new p(t, n),
                                i = e.subscribe(r);
                            return r.closed || (r.connection = n.connect()), i
                        }
                    }
                    class p extends c.a {
                        constructor(t, e) {
                            super(t), this.connectable = e
                        }
                        _unsubscribe() {
                            const {
                                connectable: t
                            } = this;
                            if (!t) return void(this.connection = null);
                            this.connectable = null;
                            const e = t._refCount;
                            if (e <= 0) return void(this.connection = null);
                            if (t._refCount = e - 1, e > 1) return void(this.connection = null);
                            const {
                                connection: n
                            } = this, r = t._connection;
                            this.connection = null, !r || n && r !== n || r.unsubscribe()
                        }
                    }
                    class d extends o.a {
                        constructor(t, e) {
                            super(), this.source = t, this.subjectFactory = e, this._refCount = 0, this._isComplete = !1
                        }
                        _subscribe(t) {
                            return this.getSubject().subscribe(t)
                        }
                        getSubject() {
                            const t = this._subject;
                            return t && !t.isStopped || (this._subject = this.subjectFactory()), this._subject
                        }
                        connect() {
                            let t = this._connection;
                            return t || (this._isComplete = !1, t = this._connection = new i.a, t.add(this.source.subscribe(new g(this.getSubject(), this))), t.closed && (this._connection = null, t = i.a.EMPTY)), t
                        }
                        refCount() {
                            return l()(this)
                        }
                    }
                    const f = (() => {
                        const t = d.prototype;
                        return {
                            operator: {
                                value: null
                            },
                            _refCount: {
                                value: 0,
                                writable: !0
                            },
                            _subject: {
                                value: null,
                                writable: !0
                            },
                            _connection: {
                                value: null,
                                writable: !0
                            },
                            _subscribe: {
                                value: t._subscribe
                            },
                            _isComplete: {
                                value: t._isComplete,
                                writable: !0
                            },
                            getSubject: {
                                value: t.getSubject
                            },
                            connect: {
                                value: t.connect
                            },
                            refCount: {
                                value: t.refCount
                            }
                        }
                    })();
                    class g extends r.b {
                        constructor(t, e) {
                            super(t), this.connectable = e
                        }
                        _error(t) {
                            this._unsubscribe(), super._error(t)
                        }
                        _complete() {
                            this.connectable._isComplete = !0, this._unsubscribe(), super._complete()
                        }
                        _unsubscribe() {
                            const t = this.connectable;
                            if (t) {
                                this.connectable = null;
                                const e = t._connection;
                                t._refCount = 0, t._subject = null, t._connection = null, e && e.unsubscribe()
                            }
                        }
                    }

                    function m() {
                        return new r.a
                    }

                    function y(t) {
                        return {
                            toString: t
                        }.toString()
                    }

                    function b(t, e, n) {
                        return y(() => {
                            const r = function (t) {
                                return function (...e) {
                                    if (t) {
                                        const n = t(...e);
                                        for (const t in n) this[t] = n[t]
                                    }
                                }
                            }(e);

                            function i(...t) {
                                if (this instanceof i) return r.apply(this, t), this;
                                const e = new i(...t);
                                return n.annotation = e, n;

                                function n(t, n, r) {
                                    const i = t.hasOwnProperty("__parameters__") ? t.__parameters__ : Object.defineProperty(t, "__parameters__", {
                                        value: []
                                    }).__parameters__;
                                    for (; i.length <= r;) i.push(null);
                                    return (i[r] = i[r] || []).push(e), t
                                }
                            }
                            return n && (i.prototype = Object.create(n.prototype)), i.prototype.ngMetadataName = t, i.annotationCls = i, i
                        })
                    }
                    const w = b("Inject", t => ({
                            token: t
                        })),
                        v = b("Optional"),
                        _ = b("Self"),
                        E = b("SkipSelf");
                    var T = function (t) {
                        return t[t.Default = 0] = "Default", t[t.Host = 1] = "Host", t[t.Self = 2] = "Self", t[t.SkipSelf = 4] = "SkipSelf", t[t.Optional = 8] = "Optional", t
                    }({});

                    function C(t) {
                        for (let e in t)
                            if (t[e] === C) return e;
                        throw Error("Could not find renamed property on target object.")
                    }

                    function O(t, e) {
                        for (const n in e) e.hasOwnProperty(n) && !t.hasOwnProperty(n) && (t[n] = e[n])
                    }

                    function x(t) {
                        return {
                            token: t.token,
                            providedIn: t.providedIn || null,
                            factory: t.factory,
                            value: void 0
                        }
                    }

                    function S(t) {
                        return {
                            factory: t.factory,
                            providers: t.providers || [],
                            imports: t.imports || []
                        }
                    }

                    function I(t) {
                        return A(t, t[N]) || A(t, t[R])
                    }

                    function A(t, e) {
                        return e && e.token === t ? e : null
                    }

                    function P(t) {
                        return t && (t.hasOwnProperty(D) || t.hasOwnProperty(k)) ? t[D] : null
                    }
                    const N = C({
                            "\u0275prov": C
                        }),
                        D = C({
                            "\u0275inj": C
                        }),
                        j = C({
                            "\u0275provFallback": C
                        }),
                        R = C({
                            ngInjectableDef: C
                        }),
                        k = C({
                            ngInjectorDef: C
                        });

                    function L(t) {
                        if ("string" == typeof t) return t;
                        if (Array.isArray(t)) return "[" + t.map(L).join(", ") + "]";
                        if (null == t) return "" + t;
                        if (t.overriddenName) return "" + t.overriddenName;
                        if (t.name) return "" + t.name;
                        const e = t.toString();
                        if (null == e) return "" + e;
                        const n = e.indexOf("\n");
                        return -1 === n ? e : e.substring(0, n)
                    }

                    function M(t, e) {
                        return null == t || "" === t ? null === e ? "" : e : null == e || "" === e ? t : t + " " + e
                    }
                    const U = C({
                        __forward_ref__: C
                    });

                    function F(t) {
                        return t.__forward_ref__ = F, t.toString = function () {
                            return L(this())
                        }, t
                    }

                    function B(t) {
                        return H(t) ? t() : t
                    }

                    function H(t) {
                        return "function" == typeof t && t.hasOwnProperty(U) && t.__forward_ref__ === F
                    }
                    const V = "undefined" != typeof globalThis && globalThis,
                        z = "undefined" != typeof window && window,
                        q = "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self,
                        $ = "undefined" != typeof global && global,
                        G = V || $ || z || q,
                        Y = C({
                            "\u0275cmp": C
                        }),
                        W = C({
                            "\u0275dir": C
                        }),
                        X = C({
                            "\u0275pipe": C
                        }),
                        Q = C({
                            "\u0275mod": C
                        }),
                        Z = C({
                            "\u0275loc": C
                        }),
                        K = C({
                            "\u0275fac": C
                        }),
                        J = C({
                            __NG_ELEMENT_ID__: C
                        });
                    class tt {
                        constructor(t, e) {
                            this._desc = t, this.ngMetadataName = "InjectionToken", this.\u0275prov = void 0, "number" == typeof e ? this.__NG_ELEMENT_ID__ = e : void 0 !== e && (this.\u0275prov = x({
                                token: this,
                                providedIn: e.providedIn || "root",
                                factory: e.factory
                            }))
                        }
                        toString() {
                            return "InjectionToken " + this._desc
                        }
                    }
                    const et = new tt("INJECTOR", -1),
                        nt = {},
                        rt = /\n/gm,
                        it = C({
                            provide: String,
                            useValue: C
                        });
                    let ot, st = void 0;

                    function at(t) {
                        const e = st;
                        return st = t, e
                    }

                    function ut(t) {
                        const e = ot;
                        return ot = t, e
                    }

                    function ct(t, e = T.Default) {
                        if (void 0 === st) throw new Error("inject() must be called from an injection context");
                        return null === st ? ht(t, void 0, e) : st.get(t, e & T.Optional ? null : void 0, e)
                    }

                    function lt(t, e = T.Default) {
                        return (ot || ct)(B(t), e)
                    }

                    function ht(t, e, n) {
                        const r = I(t);
                        if (r && "root" == r.providedIn) return void 0 === r.value ? r.value = r.factory() : r.value;
                        if (n & T.Optional) return null;
                        if (void 0 !== e) return e;
                        throw new Error(`Injector: NOT_FOUND [${L(t)}]`)
                    }

                    function pt(t) {
                        const e = [];
                        for (let n = 0; n < t.length; n++) {
                            const r = B(t[n]);
                            if (Array.isArray(r)) {
                                if (0 === r.length) throw new Error("Arguments array must have arguments.");
                                let t = void 0,
                                    n = T.Default;
                                for (let e = 0; e < r.length; e++) {
                                    const i = r[e];
                                    i instanceof v || "Optional" === i.ngMetadataName || i === v ? n |= T.Optional : i instanceof E || "SkipSelf" === i.ngMetadataName || i === E ? n |= T.SkipSelf : i instanceof _ || "Self" === i.ngMetadataName || i === _ ? n |= T.Self : t = i instanceof w || i === w ? i.token : i
                                }
                                e.push(lt(t, n))
                            } else e.push(lt(r))
                        }
                        return e
                    }
                    class dt {
                        get(t, e = nt) {
                            if (e === nt) {
                                const e = new Error(`NullInjectorError: No provider for ${L(t)}!`);
                                throw e.name = "NullInjectorError", e
                            }
                            return e
                        }
                    }
                    class ft {}
                    class gt {}

                    function mt(t, e) {
                        t.forEach(t => Array.isArray(t) ? mt(t, e) : e(t))
                    }

                    function yt(t, e, n) {
                        e >= t.length ? t.push(n) : t.splice(e, 0, n)
                    }

                    function bt(t, e) {
                        return e >= t.length - 1 ? t.pop() : t.splice(e, 1)[0]
                    }

                    function wt(t, e, n) {
                        let r = _t(t, e);
                        return r >= 0 ? t[1 | r] = n : (r = ~r, function (t, e, n, r) {
                            let i = t.length;
                            if (i == e) t.push(n, r);
                            else if (1 === i) t.push(r, t[0]), t[0] = n;
                            else {
                                for (i--, t.push(t[i - 1], t[i]); i > e;) t[i] = t[i - 2], i--;
                                t[e] = n, t[e + 1] = r
                            }
                        }(t, r, e, n)), r
                    }

                    function vt(t, e) {
                        const n = _t(t, e);
                        if (n >= 0) return t[1 | n]
                    }

                    function _t(t, e) {
                        return function (t, e, n) {
                            let r = 0,
                                i = t.length >> 1;
                            for (; i !== r;) {
                                const n = r + (i - r >> 1),
                                    o = t[n << 1];
                                if (e === o) return n << 1;
                                o > e ? i = n : r = n + 1
                            }
                            return ~(i << 1)
                        }(t, e)
                    }
                    var Et = function (t) {
                            return t[t.OnPush = 0] = "OnPush", t[t.Default = 1] = "Default", t
                        }({}),
                        Tt = function (t) {
                            return t[t.Emulated = 0] = "Emulated", t[t.Native = 1] = "Native", t[t.None = 2] = "None", t[t.ShadowDom = 3] = "ShadowDom", t
                        }({});
                    const Ct = {},
                        Ot = [];
                    let xt = 0;

                    function St(t) {
                        return y(() => {
                            const e = {},
                                n = {
                                    type: t.type,
                                    providersResolver: null,
                                    decls: t.decls,
                                    vars: t.vars,
                                    factory: null,
                                    template: t.template || null,
                                    consts: t.consts || null,
                                    ngContentSelectors: t.ngContentSelectors,
                                    hostBindings: t.hostBindings || null,
                                    hostVars: t.hostVars || 0,
                                    hostAttrs: t.hostAttrs || null,
                                    contentQueries: t.contentQueries || null,
                                    declaredInputs: e,
                                    inputs: null,
                                    outputs: null,
                                    exportAs: t.exportAs || null,
                                    onPush: t.changeDetection === Et.OnPush,
                                    directiveDefs: null,
                                    pipeDefs: null,
                                    selectors: t.selectors || Ot,
                                    viewQuery: t.viewQuery || null,
                                    features: t.features || null,
                                    data: t.data || {},
                                    encapsulation: t.encapsulation || Tt.Emulated,
                                    id: "c",
                                    styles: t.styles || Ot,
                                    _: null,
                                    setInput: null,
                                    schemas: t.schemas || null,
                                    tView: null
                                },
                                r = t.directives,
                                i = t.features,
                                o = t.pipes;
                            return n.id += xt++, n.inputs = jt(t.inputs, e), n.outputs = jt(t.outputs), i && i.forEach(t => t(n)), n.directiveDefs = r ? () => ("function" == typeof r ? r() : r).map(It) : null, n.pipeDefs = o ? () => ("function" == typeof o ? o() : o).map(At) : null, n
                        })
                    }

                    function It(t) {
                        return Lt(t) || function (t) {
                            return t[W] || null
                        }(t)
                    }

                    function At(t) {
                        return function (t) {
                            return t[X] || null
                        }(t)
                    }
                    const Pt = {};

                    function Nt(t) {
                        const e = {
                            type: t.type,
                            bootstrap: t.bootstrap || Ot,
                            declarations: t.declarations || Ot,
                            imports: t.imports || Ot,
                            exports: t.exports || Ot,
                            transitiveCompileScopes: null,
                            schemas: t.schemas || null,
                            id: t.id || null
                        };
                        return null != t.id && y(() => {
                            Pt[t.id] = t.type
                        }), e
                    }

                    function Dt(t, e) {
                        return y(() => {
                            const n = Ut(t, !0);
                            n.declarations = e.declarations || Ot, n.imports = e.imports || Ot, n.exports = e.exports || Ot
                        })
                    }

                    function jt(t, e) {
                        if (null == t) return Ct;
                        const n = {};
                        for (const r in t)
                            if (t.hasOwnProperty(r)) {
                                let i = t[r],
                                    o = i;
                                Array.isArray(i) && (o = i[1], i = i[0]), n[i] = r, e && (e[i] = o)
                            } return n
                    }
                    const Rt = St;

                    function kt(t) {
                        return {
                            type: t.type,
                            name: t.name,
                            factory: null,
                            pure: !1 !== t.pure,
                            onDestroy: t.type.prototype.ngOnDestroy || null
                        }
                    }

                    function Lt(t) {
                        return t[Y] || null
                    }

                    function Mt(t, e) {
                        return t.hasOwnProperty(K) ? t[K] : null
                    }

                    function Ut(t, e) {
                        const n = t[Q] || null;
                        if (!n && !0 === e) throw new Error(`Type ${L(t)} does not have '\u0275mod' property.`);
                        return n
                    }

                    function Ft(t) {
                        return Array.isArray(t) && "object" == typeof t[1]
                    }

                    function Bt(t) {
                        return Array.isArray(t) && !0 === t[1]
                    }

                    function Ht(t) {
                        return 0 != (8 & t.flags)
                    }

                    function Vt(t) {
                        return 2 == (2 & t.flags)
                    }

                    function zt(t) {
                        return 1 == (1 & t.flags)
                    }

                    function qt(t) {
                        return null !== t.template
                    }

                    function $t(t) {
                        return 0 != (512 & t[2])
                    }
                    class Gt {
                        constructor(t, e, n) {
                            this.previousValue = t, this.currentValue = e, this.firstChange = n
                        }
                        isFirstChange() {
                            return this.firstChange
                        }
                    }

                    function Yt() {
                        return Wt
                    }

                    function Wt(t) {
                        return t.type.prototype.ngOnChanges && (t.setInput = Qt), Xt
                    }

                    function Xt() {
                        const t = Zt(this),
                            e = null == t ? void 0 : t.current;
                        if (e) {
                            const n = t.previous;
                            if (n === Ct) t.previous = e;
                            else
                                for (let t in e) n[t] = e[t];
                            t.current = null, this.ngOnChanges(e)
                        }
                    }

                    function Qt(t, e, n, r) {
                        const i = Zt(t) || function (t, e) {
                                return t.__ngSimpleChanges__ = e
                            }(t, {
                                previous: Ct,
                                current: null
                            }),
                            o = i.current || (i.current = {}),
                            s = i.previous,
                            a = this.declaredInputs[n],
                            u = s[a];
                        o[a] = new Gt(u && u.currentValue, e, s === Ct), t[r] = e
                    }

                    function Zt(t) {
                        return t.__ngSimpleChanges__ || null
                    }
                    Yt.ngInherit = !0;
                    let Kt = void 0;

                    function Jt(t) {
                        Kt = t
                    }

                    function te(t) {
                        return !!t.listen
                    }
                    const ee = {
                        createRenderer: (t, e) => void 0 !== Kt ? Kt : "undefined" != typeof document ? document : void 0
                    };

                    function ne(t) {
                        for (; Array.isArray(t);) t = t[0];
                        return t
                    }

                    function re(t, e) {
                        return ne(e[t + 20])
                    }

                    function ie(t, e) {
                        return ne(e[t.index])
                    }

                    function oe(t, e) {
                        return t.data[e + 20]
                    }

                    function se(t, e) {
                        const n = e[t];
                        return Ft(n) ? n : n[0]
                    }

                    function ae(t) {
                        const e = function (t) {
                            return t.__ngContext__ || null
                        }(t);
                        return e ? Array.isArray(e) ? e : e.lView : null
                    }

                    function ue(t) {
                        return 4 == (4 & t[2])
                    }

                    function ce(t) {
                        return 128 == (128 & t[2])
                    }

                    function le(t, e) {
                        return null === t || null == e ? null : t[e]
                    }

                    function he(t) {
                        t[18] = 0
                    }

                    function pe(t, e) {
                        t[5] += e;
                        let n = t,
                            r = t[3];
                        for (; null !== r && (1 === e && 1 === n[5] || -1 === e && 0 === n[5]);) r[5] += e, n = r, r = r[3]
                    }
                    const de = {
                        lFrame: je(null),
                        bindingsEnabled: !0,
                        checkNoChangesMode: !1
                    };

                    function fe() {
                        return de.bindingsEnabled
                    }

                    function ge() {
                        return de.lFrame.lView
                    }

                    function me() {
                        return de.lFrame.tView
                    }

                    function ye() {
                        return de.lFrame.previousOrParentTNode
                    }

                    function be(t, e) {
                        de.lFrame.previousOrParentTNode = t, de.lFrame.isParent = e
                    }

                    function we() {
                        return de.lFrame.isParent
                    }

                    function ve() {
                        de.lFrame.isParent = !1
                    }

                    function _e() {
                        return de.checkNoChangesMode
                    }

                    function Ee(t) {
                        de.checkNoChangesMode = t
                    }

                    function Te() {
                        return de.lFrame.bindingIndex
                    }

                    function Ce() {
                        return de.lFrame.bindingIndex++
                    }

                    function Oe(t) {
                        const e = de.lFrame,
                            n = e.bindingIndex;
                        return e.bindingIndex = e.bindingIndex + t, n
                    }

                    function xe(t, e) {
                        const n = de.lFrame;
                        n.bindingIndex = n.bindingRootIndex = t, Se(e)
                    }

                    function Se(t) {
                        de.lFrame.currentDirectiveIndex = t
                    }

                    function Ie() {
                        return de.lFrame.currentQueryIndex
                    }

                    function Ae(t) {
                        de.lFrame.currentQueryIndex = t
                    }

                    function Pe(t, e) {
                        const n = De();
                        de.lFrame = n, n.previousOrParentTNode = e, n.lView = t
                    }

                    function Ne(t, e) {
                        const n = De(),
                            r = t[1];
                        de.lFrame = n, n.previousOrParentTNode = e, n.lView = t, n.tView = r, n.contextLView = t, n.bindingIndex = r.bindingStartIndex
                    }

                    function De() {
                        const t = de.lFrame,
                            e = null === t ? null : t.child;
                        return null === e ? je(t) : e
                    }

                    function je(t) {
                        const e = {
                            previousOrParentTNode: null,
                            isParent: !0,
                            lView: null,
                            tView: null,
                            selectedIndex: 0,
                            contextLView: null,
                            elementDepthCount: 0,
                            currentNamespace: null,
                            currentDirectiveIndex: -1,
                            bindingRootIndex: -1,
                            bindingIndex: -1,
                            currentQueryIndex: 0,
                            parent: t,
                            child: null
                        };
                        return null !== t && (t.child = e), e
                    }

                    function Re() {
                        const t = de.lFrame;
                        return de.lFrame = t.parent, t.previousOrParentTNode = null, t.lView = null, t
                    }
                    const ke = Re;

                    function Le() {
                        const t = Re();
                        t.isParent = !0, t.tView = null, t.selectedIndex = 0, t.contextLView = null, t.elementDepthCount = 0, t.currentDirectiveIndex = -1, t.currentNamespace = null, t.bindingRootIndex = -1, t.bindingIndex = -1, t.currentQueryIndex = 0
                    }

                    function Me() {
                        return de.lFrame.selectedIndex
                    }

                    function Ue(t) {
                        de.lFrame.selectedIndex = t
                    }

                    function Fe() {
                        const t = de.lFrame;
                        return oe(t.tView, t.selectedIndex)
                    }

                    function Be() {
                        de.lFrame.currentNamespace = "http://www.w3.org/2000/svg"
                    }

                    function He() {
                        de.lFrame.currentNamespace = null
                    }

                    function Ve(t, e) {
                        for (let n = e.directiveStart, r = e.directiveEnd; n < r; n++) {
                            const e = t.data[n].type.prototype,
                                {
                                    ngAfterContentInit: r,
                                    ngAfterContentChecked: i,
                                    ngAfterViewInit: o,
                                    ngAfterViewChecked: s,
                                    ngOnDestroy: a
                                } = e;
                            r && (t.contentHooks || (t.contentHooks = [])).push(-n, r), i && ((t.contentHooks || (t.contentHooks = [])).push(n, i), (t.contentCheckHooks || (t.contentCheckHooks = [])).push(n, i)), o && (t.viewHooks || (t.viewHooks = [])).push(-n, o), s && ((t.viewHooks || (t.viewHooks = [])).push(n, s), (t.viewCheckHooks || (t.viewCheckHooks = [])).push(n, s)), null != a && (t.destroyHooks || (t.destroyHooks = [])).push(n, a)
                        }
                    }

                    function ze(t, e, n) {
                        Ge(t, e, 3, n)
                    }

                    function qe(t, e, n, r) {
                        (3 & t[2]) === n && Ge(t, e, n, r)
                    }

                    function $e(t, e) {
                        let n = t[2];
                        (3 & n) === e && (n &= 2047, n += 1, t[2] = n)
                    }

                    function Ge(t, e, n, r) {
                        const i = null != r ? r : -1;
                        let o = 0;
                        for (let s = void 0 !== r ? 65535 & t[18] : 0; s < e.length; s++)
                            if ("number" == typeof e[s + 1]) {
                                if (o = e[s], null != r && o >= r) break
                            } else e[s] < 0 && (t[18] += 65536), (o < i || -1 == i) && (Ye(t, n, e, s), t[18] = (4294901760 & t[18]) + s + 2), s++
                    }

                    function Ye(t, e, n, r) {
                        const i = n[r] < 0,
                            o = n[r + 1],
                            s = t[i ? -n[r] : n[r]];
                        i ? t[2] >> 11 < t[18] >> 16 && (3 & t[2]) === e && (t[2] += 2048, o.call(s)) : o.call(s)
                    }
                    class We {
                        constructor(t, e, n) {
                            this.factory = t, this.resolving = !1, this.canSeeViewProviders = e, this.injectImpl = n
                        }
                    }

                    function Xe(t, e, n) {
                        const r = te(t);
                        let i = 0;
                        for (; i < n.length;) {
                            const o = n[i];
                            if ("number" == typeof o) {
                                if (0 !== o) break;
                                i++;
                                const s = n[i++],
                                    a = n[i++],
                                    u = n[i++];
                                r ? t.setAttribute(e, a, u, s) : e.setAttributeNS(s, a, u)
                            } else {
                                const s = o,
                                    a = n[++i];
                                Ze(s) ? r && t.setProperty(e, s, a) : r ? t.setAttribute(e, s, a) : e.setAttribute(s, a), i++
                            }
                        }
                        return i
                    }

                    function Qe(t) {
                        return 3 === t || 4 === t || 6 === t
                    }

                    function Ze(t) {
                        return 64 === t.charCodeAt(0)
                    }

                    function Ke(t, e) {
                        if (null === e || 0 === e.length);
                        else if (null === t || 0 === t.length) t = e.slice();
                        else {
                            let n = -1;
                            for (let r = 0; r < e.length; r++) {
                                const i = e[r];
                                "number" == typeof i ? n = i : 0 === n || Je(t, n, i, null, -1 === n || 2 === n ? e[++r] : null)
                            }
                        }
                        return t
                    }

                    function Je(t, e, n, r, i) {
                        let o = 0,
                            s = t.length;
                        if (-1 === e) s = -1;
                        else
                            for (; o < t.length;) {
                                const n = t[o++];
                                if ("number" == typeof n) {
                                    if (n === e) {
                                        s = -1;
                                        break
                                    }
                                    if (n > e) {
                                        s = o - 1;
                                        break
                                    }
                                }
                            }
                        for (; o < t.length;) {
                            const e = t[o];
                            if ("number" == typeof e) break;
                            if (e === n) {
                                if (null === r) return void(null !== i && (t[o + 1] = i));
                                if (r === t[o + 1]) return void(t[o + 2] = i)
                            }
                            o++, null !== r && o++, null !== i && o++
                        } - 1 !== s && (t.splice(s, 0, e), o = s + 1), t.splice(o++, 0, n), null !== r && t.splice(o++, 0, r), null !== i && t.splice(o++, 0, i)
                    }

                    function tn(t) {
                        return -1 !== t
                    }

                    function en(t) {
                        return 32767 & t
                    }

                    function nn(t) {
                        return t >> 16
                    }

                    function rn(t, e) {
                        let n = nn(t),
                            r = e;
                        for (; n > 0;) r = r[15], n--;
                        return r
                    }

                    function on(t) {
                        return "string" == typeof t ? t : null == t ? "" : "" + t
                    }

                    function sn(t) {
                        return "function" == typeof t ? t.name || t.toString() : "object" == typeof t && null != t && "function" == typeof t.type ? t.type.name || t.type.toString() : on(t)
                    }
                    const an = (() => ("undefined" != typeof requestAnimationFrame && requestAnimationFrame || setTimeout).bind(G))();

                    function un(t) {
                        return {
                            name: "window",
                            target: t.ownerDocument.defaultView
                        }
                    }

                    function cn(t) {
                        return t instanceof Function ? t() : t
                    }
                    let ln = !0;

                    function hn(t) {
                        const e = ln;
                        return ln = t, e
                    }
                    let pn = 0;

                    function dn(t, e) {
                        const n = gn(t, e);
                        if (-1 !== n) return n;
                        const r = e[1];
                        r.firstCreatePass && (t.injectorIndex = e.length, fn(r.data, t), fn(e, null), fn(r.blueprint, null));
                        const i = mn(t, e),
                            o = t.injectorIndex;
                        if (tn(i)) {
                            const t = en(i),
                                n = rn(i, e),
                                r = n[1].data;
                            for (let i = 0; i < 8; i++) e[o + i] = n[t + i] | r[t + i]
                        }
                        return e[o + 8] = i, o
                    }

                    function fn(t, e) {
                        t.push(0, 0, 0, 0, 0, 0, 0, 0, e)
                    }

                    function gn(t, e) {
                        return -1 === t.injectorIndex || t.parent && t.parent.injectorIndex === t.injectorIndex || null == e[t.injectorIndex + 8] ? -1 : t.injectorIndex
                    }

                    function mn(t, e) {
                        if (t.parent && -1 !== t.parent.injectorIndex) return t.parent.injectorIndex;
                        let n = e[6],
                            r = 1;
                        for (; n && -1 === n.injectorIndex;) n = (e = e[15]) ? e[6] : null, r++;
                        return n ? n.injectorIndex | r << 16 : -1
                    }

                    function yn(t, e, n) {
                        ! function (t, e, n) {
                            let r;
                            "string" == typeof n ? r = n.charCodeAt(0) || 0 : n.hasOwnProperty(J) && (r = n[J]), null == r && (r = n[J] = pn++);
                            const i = 255 & r,
                                o = 1 << i,
                                s = 64 & i,
                                a = 32 & i,
                                u = e.data;
                            128 & i ? s ? a ? u[t + 7] |= o : u[t + 6] |= o : a ? u[t + 5] |= o : u[t + 4] |= o : s ? a ? u[t + 3] |= o : u[t + 2] |= o : a ? u[t + 1] |= o : u[t] |= o
                        }(t, e, n)
                    }

                    function bn(t, e, n, r = T.Default, i) {
                        if (null !== t) {
                            const i = function (t) {
                                if ("string" == typeof t) return t.charCodeAt(0) || 0;
                                const e = t.hasOwnProperty(J) ? t[J] : void 0;
                                return "number" == typeof e && e > 0 ? 255 & e : e
                            }(n);
                            if ("function" == typeof i) {
                                Pe(e, t);
                                try {
                                    const t = i();
                                    if (null != t || r & T.Optional) return t;
                                    throw new Error(`No provider for ${sn(n)}!`)
                                } finally {
                                    ke()
                                }
                            } else if ("number" == typeof i) {
                                if (-1 === i) return new On(t, e);
                                let o = null,
                                    s = gn(t, e),
                                    a = -1,
                                    u = r & T.Host ? e[16][6] : null;
                                for ((-1 === s || r & T.SkipSelf) && (a = -1 === s ? mn(t, e) : e[s + 8], Cn(r, !1) ? (o = e[1], s = en(a), e = rn(a, e)) : s = -1); - 1 !== s;) {
                                    a = e[s + 8];
                                    const t = e[1];
                                    if (Tn(i, s, t.data)) {
                                        const t = vn(s, e, n, o, r, u);
                                        if (t !== wn) return t
                                    }
                                    Cn(r, e[1].data[s + 8] === u) && Tn(i, s, e) ? (o = t, s = en(a), e = rn(a, e)) : s = -1
                                }
                            }
                        }
                        if (r & T.Optional && void 0 === i && (i = null), 0 == (r & (T.Self | T.Host))) {
                            const t = e[9],
                                o = ut(void 0);
                            try {
                                return t ? t.get(n, i, r & T.Optional) : ht(n, i, r & T.Optional)
                            } finally {
                                ut(o)
                            }
                        }
                        if (r & T.Optional) return i;
                        throw new Error(`NodeInjector: NOT_FOUND [${sn(n)}]`)
                    }
                    const wn = {};

                    function vn(t, e, n, r, i, o) {
                        const s = e[1],
                            a = s.data[t + 8],
                            u = _n(a, s, n, null == r ? Vt(a) && ln : r != s && 3 === a.type, i & T.Host && o === a);
                        return null !== u ? En(e, s, u, a) : wn
                    }

                    function _n(t, e, n, r, i) {
                        const o = t.providerIndexes,
                            s = e.data,
                            a = 1048575 & o,
                            u = t.directiveStart,
                            c = o >> 20,
                            l = i ? a + c : t.directiveEnd;
                        for (let h = r ? a : a + c; h < l; h++) {
                            const t = s[h];
                            if (h < u && n === t || h >= u && t.type === n) return h
                        }
                        if (i) {
                            const t = s[u];
                            if (t && qt(t) && t.type === n) return u
                        }
                        return null
                    }

                    function En(t, e, n, r) {
                        let i = t[n];
                        const o = e.data;
                        if (i instanceof We) {
                            const s = i;
                            if (s.resolving) throw new Error("Circular dep for " + sn(o[n]));
                            const a = hn(s.canSeeViewProviders);
                            let u;
                            s.resolving = !0, s.injectImpl && (u = ut(s.injectImpl)), Pe(t, r);
                            try {
                                i = t[n] = s.factory(void 0, o, t, r), e.firstCreatePass && n >= r.directiveStart && function (t, e, n) {
                                    const {
                                        ngOnChanges: r,
                                        ngOnInit: i,
                                        ngDoCheck: o
                                    } = e.type.prototype;
                                    if (r) {
                                        const r = Wt(e);
                                        (n.preOrderHooks || (n.preOrderHooks = [])).push(t, r), (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(t, r)
                                    }
                                    i && (n.preOrderHooks || (n.preOrderHooks = [])).push(0 - t, i), o && ((n.preOrderHooks || (n.preOrderHooks = [])).push(t, o), (n.preOrderCheckHooks || (n.preOrderCheckHooks = [])).push(t, o))
                                }(n, o[n], e)
                            } finally {
                                s.injectImpl && ut(u), hn(a), s.resolving = !1, ke()
                            }
                        }
                        return i
                    }

                    function Tn(t, e, n) {
                        const r = 64 & t,
                            i = 32 & t;
                        let o;
                        return o = 128 & t ? r ? i ? n[e + 7] : n[e + 6] : i ? n[e + 5] : n[e + 4] : r ? i ? n[e + 3] : n[e + 2] : i ? n[e + 1] : n[e], !!(o & 1 << t)
                    }

                    function Cn(t, e) {
                        return !(t & T.Self || t & T.Host && e)
                    }
                    class On {
                        constructor(t, e) {
                            this._tNode = t, this._lView = e
                        }
                        get(t, e) {
                            return bn(this._tNode, this._lView, t, void 0, e)
                        }
                    }

                    function xn(t) {
                        const e = t;
                        if (H(t)) return () => {
                            const t = xn(B(e));
                            return t ? t() : null
                        };
                        let n = Mt(e);
                        if (null === n) {
                            const t = P(e);
                            n = t && t.factory
                        }
                        return n || null
                    }

                    function Sn(t) {
                        return y(() => {
                            const e = t.prototype.constructor,
                                n = e[K] || xn(e),
                                r = Object.prototype;
                            let i = Object.getPrototypeOf(t.prototype).constructor;
                            for (; i && i !== r;) {
                                const t = i[K] || xn(i);
                                if (t && t !== n) return t;
                                i = Object.getPrototypeOf(i)
                            }
                            return t => new t
                        })
                    }

                    function In(t) {
                        return t.ngDebugContext
                    }

                    function An(t) {
                        return t.ngOriginalError
                    }

                    function Pn(t, ...e) {
                        t.error(...e)
                    }
                    class Nn {
                        constructor() {
                            this._console = console
                        }
                        handleError(t) {
                            const e = this._findOriginalError(t),
                                n = this._findContext(t),
                                r = function (t) {
                                    return t.ngErrorLogger || Pn
                                }(t);
                            r(this._console, "ERROR", t), e && r(this._console, "ORIGINAL ERROR", e), n && r(this._console, "ERROR CONTEXT", n)
                        }
                        _findContext(t) {
                            return t ? In(t) ? In(t) : this._findContext(An(t)) : null
                        }
                        _findOriginalError(t) {
                            let e = An(t);
                            for (; e && An(e);) e = An(e);
                            return e
                        }
                    }
                    class Dn {
                        constructor(t) {
                            this.changingThisBreaksApplicationSecurity = t
                        }
                        toString() {
                            return "SafeValue must use [property]=binding: " + this.changingThisBreaksApplicationSecurity + " (see http://g.co/ng/security#xss)"
                        }
                    }
                    class jn extends Dn {
                        getTypeName() {
                            return "HTML"
                        }
                    }
                    class Rn extends Dn {
                        getTypeName() {
                            return "Style"
                        }
                    }
                    class kn extends Dn {
                        getTypeName() {
                            return "Script"
                        }
                    }
                    class Ln extends Dn {
                        getTypeName() {
                            return "URL"
                        }
                    }
                    class Mn extends Dn {
                        getTypeName() {
                            return "ResourceURL"
                        }
                    }

                    function Un(t) {
                        return t instanceof Dn ? t.changingThisBreaksApplicationSecurity : t
                    }

                    function Fn(t, e) {
                        const n = Bn(t);
                        if (null != n && n !== e) {
                            if ("ResourceURL" === n && "URL" === e) return !0;
                            throw new Error(`Required a safe ${e}, got a ${n} (see http://g.co/ng/security#xss)`)
                        }
                        return n === e
                    }

                    function Bn(t) {
                        return t instanceof Dn && t.getTypeName() || null
                    }

                    function Hn(t) {
                        return new jn(t)
                    }

                    function Vn(t) {
                        return new Rn(t)
                    }

                    function zn(t) {
                        return new kn(t)
                    }

                    function qn(t) {
                        return new Ln(t)
                    }

                    function $n(t) {
                        return new Mn(t)
                    }
                    let Gn = !0,
                        Yn = !1;

                    function Wn() {
                        return Yn = !0, Gn
                    }

                    function Xn() {
                        if (Yn) throw new Error("Cannot enable prod mode after platform setup.");
                        Gn = !1
                    }
                    class Qn {
                        getInertBodyElement(t) {
                            t = "<body><remove></remove>" + t + "</body>";
                            try {
                                const e = (new window.DOMParser).parseFromString(t, "text/html").body;
                                return e.removeChild(e.firstChild), e
                            } catch (e) {
                                return null
                            }
                        }
                    }
                    class Zn {
                        constructor(t) {
                            if (this.defaultDoc = t, this.inertDocument = this.defaultDoc.implementation.createHTMLDocument("sanitization-inert"), null == this.inertDocument.body) {
                                const t = this.inertDocument.createElement("html");
                                this.inertDocument.appendChild(t);
                                const e = this.inertDocument.createElement("body");
                                t.appendChild(e)
                            }
                        }
                        getInertBodyElement(t) {
                            const e = this.inertDocument.createElement("template");
                            if ("content" in e) return e.innerHTML = t, e;
                            const n = this.inertDocument.createElement("body");
                            return n.innerHTML = t, this.defaultDoc.documentMode && this.stripCustomNsAttrs(n), n
                        }
                        stripCustomNsAttrs(t) {
                            const e = t.attributes;
                            for (let r = e.length - 1; 0 < r; r--) {
                                const n = e.item(r).name;
                                "xmlns:ns1" !== n && 0 !== n.indexOf("ns1:") || t.removeAttribute(n)
                            }
                            let n = t.firstChild;
                            for (; n;) n.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(n), n = n.nextSibling
                        }
                    }
                    const Kn = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,
                        Jn = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;

                    function tr(t) {
                        return (t = String(t)).match(Kn) || t.match(Jn) ? t : (Wn() && console.warn(`WARNING: sanitizing unsafe URL value ${t} (see http://g.co/ng/security#xss)`), "unsafe:" + t)
                    }

                    function er(t) {
                        const e = {};
                        for (const n of t.split(",")) e[n] = !0;
                        return e
                    }

                    function nr(...t) {
                        const e = {};
                        for (const n of t)
                            for (const t in n) n.hasOwnProperty(t) && (e[t] = !0);
                        return e
                    }
                    const rr = er("area,br,col,hr,img,wbr"),
                        ir = er("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
                        or = er("rp,rt"),
                        sr = nr(or, ir),
                        ar = nr(rr, nr(ir, er("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")), nr(or, er("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")), sr),
                        ur = er("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),
                        cr = er("srcset"),
                        lr = nr(ur, cr, er("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"), er("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext")),
                        hr = er("script,style,template");
                    class pr {
                        constructor() {
                            this.sanitizedSomething = !1, this.buf = []
                        }
                        sanitizeChildren(t) {
                            let e = t.firstChild,
                                n = !0;
                            for (; e;)
                                if (e.nodeType === Node.ELEMENT_NODE ? n = this.startElement(e) : e.nodeType === Node.TEXT_NODE ? this.chars(e.nodeValue) : this.sanitizedSomething = !0, n && e.firstChild) e = e.firstChild;
                                else
                                    for (; e;) {
                                        e.nodeType === Node.ELEMENT_NODE && this.endElement(e);
                                        let t = this.checkClobberedElement(e, e.nextSibling);
                                        if (t) {
                                            e = t;
                                            break
                                        }
                                        e = this.checkClobberedElement(e, e.parentNode)
                                    }
                            return this.buf.join("")
                        }
                        startElement(t) {
                            const e = t.nodeName.toLowerCase();
                            if (!ar.hasOwnProperty(e)) return this.sanitizedSomething = !0, !hr.hasOwnProperty(e);
                            this.buf.push("<"), this.buf.push(e);
                            const n = t.attributes;
                            for (let i = 0; i < n.length; i++) {
                                const t = n.item(i),
                                    e = t.name,
                                    o = e.toLowerCase();
                                if (!lr.hasOwnProperty(o)) {
                                    this.sanitizedSomething = !0;
                                    continue
                                }
                                let s = t.value;
                                ur[o] && (s = tr(s)), cr[o] && (r = s, s = (r = String(r)).split(",").map(t => tr(t.trim())).join(", ")), this.buf.push(" ", e, '="', gr(s), '"')
                            }
                            var r;
                            return this.buf.push(">"), !0
                        }
                        endElement(t) {
                            const e = t.nodeName.toLowerCase();
                            ar.hasOwnProperty(e) && !rr.hasOwnProperty(e) && (this.buf.push("</"), this.buf.push(e), this.buf.push(">"))
                        }
                        chars(t) {
                            this.buf.push(gr(t))
                        }
                        checkClobberedElement(t, e) {
                            if (e && (t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY) === Node.DOCUMENT_POSITION_CONTAINED_BY) throw new Error("Failed to sanitize html because the element is clobbered: " + t.outerHTML);
                            return e
                        }
                    }
                    const dr = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
                        fr = /([^\#-~ |!])/g;

                    function gr(t) {
                        return t.replace(/&/g, "&amp;").replace(dr, (function (t) {
                            return "&#" + (1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320) + 65536) + ";"
                        })).replace(fr, (function (t) {
                            return "&#" + t.charCodeAt(0) + ";"
                        })).replace(/</g, "&lt;").replace(/>/g, "&gt;")
                    }
                    let mr;

                    function yr(t, e) {
                        let n = null;
                        try {
                            mr = mr || function (t) {
                                return function () {
                                    try {
                                        return !!(new window.DOMParser).parseFromString("", "text/html")
                                    } catch (t) {
                                        return !1
                                    }
                                }() ? new Qn : new Zn(t)
                            }(t);
                            let r = e ? String(e) : "";
                            n = mr.getInertBodyElement(r);
                            let i = 5,
                                o = r;
                            do {
                                if (0 === i) throw new Error("Failed to sanitize html because the input is unstable");
                                i--, r = o, o = n.innerHTML, n = mr.getInertBodyElement(r)
                            } while (r !== o);
                            const s = new pr,
                                a = s.sanitizeChildren(br(n) || n);
                            return Wn() && s.sanitizedSomething && console.warn("WARNING: sanitizing HTML stripped some content, see http://g.co/ng/security#xss"), a
                        } finally {
                            if (n) {
                                const t = br(n) || n;
                                for (; t.firstChild;) t.removeChild(t.firstChild)
                            }
                        }
                    }

                    function br(t) {
                        return "content" in t && function (t) {
                            return t.nodeType === Node.ELEMENT_NODE && "TEMPLATE" === t.nodeName
                        }(t) ? t.content : null
                    }
                    var wr = function (t) {
                        return t[t.NONE = 0] = "NONE", t[t.HTML = 1] = "HTML", t[t.STYLE = 2] = "STYLE", t[t.SCRIPT = 3] = "SCRIPT", t[t.URL = 4] = "URL", t[t.RESOURCE_URL = 5] = "RESOURCE_URL", t
                    }({});

                    function vr(t) {
                        const e = function () {
                            const t = ge();
                            return t && t[12]
                        }();
                        return e ? e.sanitize(wr.URL, t) || "" : Fn(t, "URL") ? Un(t) : tr(on(t))
                    }

                    function _r(t, e) {
                        t.__ngContext__ = e
                    }

                    function Er(t) {
                        throw new Error("Multiple components match node with tagname " + t.tagName)
                    }

                    function Tr() {
                        throw new Error("Cannot mix multi providers and regular providers")
                    }

                    function Cr(t, e, n) {
                        let r = t.length;
                        for (;;) {
                            const i = t.indexOf(e, n);
                            if (-1 === i) return i;
                            if (0 === i || t.charCodeAt(i - 1) <= 32) {
                                const n = e.length;
                                if (i + n === r || t.charCodeAt(i + n) <= 32) return i
                            }
                            n = i + 1
                        }
                    }

                    function Or(t, e, n) {
                        let r = 0;
                        for (; r < t.length;) {
                            let i = t[r++];
                            if (n && "class" === i) {
                                if (i = t[r], -1 !== Cr(i.toLowerCase(), e, 0)) return !0
                            } else if (1 === i) {
                                for (; r < t.length && "string" == typeof (i = t[r++]);)
                                    if (i.toLowerCase() === e) return !0;
                                return !1
                            }
                        }
                        return !1
                    }

                    function xr(t) {
                        return 0 === t.type && "ng-template" !== t.tagName
                    }

                    function Sr(t, e, n) {
                        return e === (0 !== t.type || n ? t.tagName : "ng-template")
                    }

                    function Ir(t, e, n) {
                        let r = 4;
                        const i = t.attrs || [],
                            o = function (t) {
                                for (let e = 0; e < t.length; e++)
                                    if (Qe(t[e])) return e;
                                return t.length
                            }(i);
                        let s = !1;
                        for (let a = 0; a < e.length; a++) {
                            const u = e[a];
                            if ("number" != typeof u) {
                                if (!s)
                                    if (4 & r) {
                                        if (r = 2 | 1 & r, "" !== u && !Sr(t, u, n) || "" === u && 1 === e.length) {
                                            if (Ar(r)) return !1;
                                            s = !0
                                        }
                                    } else {
                                        const c = 8 & r ? u : e[++a];
                                        if (8 & r && null !== t.attrs) {
                                            if (!Or(t.attrs, c, n)) {
                                                if (Ar(r)) return !1;
                                                s = !0
                                            }
                                            continue
                                        }
                                        const l = Pr(8 & r ? "class" : u, i, xr(t), n);
                                        if (-1 === l) {
                                            if (Ar(r)) return !1;
                                            s = !0;
                                            continue
                                        }
                                        if ("" !== c) {
                                            let t;
                                            t = l > o ? "" : i[l + 1].toLowerCase();
                                            const e = 8 & r ? t : null;
                                            if (e && -1 !== Cr(e, c, 0) || 2 & r && c !== t) {
                                                if (Ar(r)) return !1;
                                                s = !0
                                            }
                                        }
                                    }
                            } else {
                                if (!s && !Ar(r) && !Ar(u)) return !1;
                                if (s && Ar(u)) continue;
                                s = !1, r = u | 1 & r
                            }
                        }
                        return Ar(r) || s
                    }

                    function Ar(t) {
                        return 0 == (1 & t)
                    }

                    function Pr(t, e, n, r) {
                        if (null === e) return -1;
                        let i = 0;
                        if (r || !n) {
                            let n = !1;
                            for (; i < e.length;) {
                                const r = e[i];
                                if (r === t) return i;
                                if (3 === r || 6 === r) n = !0;
                                else {
                                    if (1 === r || 2 === r) {
                                        let t = e[++i];
                                        for (;
                                            "string" == typeof t;) t = e[++i];
                                        continue
                                    }
                                    if (4 === r) break;
                                    if (0 === r) {
                                        i += 4;
                                        continue
                                    }
                                }
                                i += n ? 1 : 2
                            }
                            return -1
                        }
                        return function (t, e) {
                            let n = t.indexOf(4);
                            if (n > -1)
                                for (n++; n < t.length;) {
                                    const r = t[n];
                                    if ("number" == typeof r) return -1;
                                    if (r === e) return n;
                                    n++
                                }
                            return -1
                        }(e, t)
                    }

                    function Nr(t, e, n = !1) {
                        for (let r = 0; r < e.length; r++)
                            if (Ir(t, e[r], n)) return !0;
                        return !1
                    }

                    function Dr(t, e) {
                        return t ? ":not(" + e.trim() + ")" : e
                    }

                    function jr(t) {
                        let e = t[0],
                            n = 1,
                            r = 2,
                            i = "",
                            o = !1;
                        for (; n < t.length;) {
                            let s = t[n];
                            if ("string" == typeof s)
                                if (2 & r) {
                                    const e = t[++n];
                                    i += "[" + s + (e.length > 0 ? '="' + e + '"' : "") + "]"
                                } else 8 & r ? i += "." + s : 4 & r && (i += " " + s);
                            else "" === i || Ar(s) || (e += Dr(o, i), i = ""), r = s, o = o || !Ar(r);
                            n++
                        }
                        return "" !== i && (e += Dr(o, i)), e
                    }
                    const Rr = {};

                    function kr(t) {
                        const e = t[3];
                        return Bt(e) ? e[3] : e
                    }

                    function Lr(t) {
                        return Ur(t[13])
                    }

                    function Mr(t) {
                        return Ur(t[4])
                    }

                    function Ur(t) {
                        for (; null !== t && !Bt(t);) t = t[4];
                        return t
                    }

                    function Fr(t) {
                        Br(me(), ge(), Me() + t, _e())
                    }

                    function Br(t, e, n, r) {
                        if (!r)
                            if (3 == (3 & e[2])) {
                                const r = t.preOrderCheckHooks;
                                null !== r && ze(e, r, n)
                            } else {
                                const r = t.preOrderHooks;
                                null !== r && qe(e, r, 0, n)
                            } Ue(n)
                    }

                    function Hr(t, e) {
                        return t << 17 | e << 2
                    }

                    function Vr(t) {
                        return t >> 17 & 32767
                    }

                    function zr(t) {
                        return 2 | t
                    }

                    function qr(t) {
                        return (131068 & t) >> 2
                    }

                    function $r(t, e) {
                        return -131069 & t | e << 2
                    }

                    function Gr(t) {
                        return 1 | t
                    }

                    function Yr(t, e) {
                        const n = t.contentQueries;
                        if (null !== n)
                            for (let r = 0; r < n.length; r += 2) {
                                const i = n[r],
                                    o = n[r + 1];
                                if (-1 !== o) {
                                    const n = t.data[o];
                                    Ae(i), n.contentQueries(2, e[o], o)
                                }
                            }
                    }

                    function Wr(t, e, n) {
                        return te(e) ? e.createElement(t, n) : null === n ? e.createElement(t) : e.createElementNS(n, t)
                    }

                    function Xr(t, e, n, r, i, o, s, a, u, c) {
                        const l = e.blueprint.slice();
                        return l[0] = i, l[2] = 140 | r, he(l), l[3] = l[15] = t, l[8] = n, l[10] = s || t && t[10], l[11] = a || t && t[11], l[12] = u || t && t[12] || null, l[9] = c || t && t[9] || null, l[6] = o, l[16] = 2 == e.type ? t[16] : l, l
                    }

                    function Qr(t, e, n, r, i, o) {
                        const s = n + 20,
                            a = t.data[s] || function (t, e, n, r, i, o) {
                                const s = ye(),
                                    a = we(),
                                    u = a ? s : s && s.parent,
                                    c = t.data[n] = ai(0, u && u !== e ? u : null, r, n, i, o);
                                return null === t.firstChild && (t.firstChild = c), s && (!a || null != s.child || null === c.parent && 2 !== s.type ? a || (s.next = c) : s.child = c), c
                            }(t, e, s, r, i, o);
                        return be(a, !0), a
                    }

                    function Zr(t, e, n) {
                        Ne(e, e[6]);
                        try {
                            const r = t.viewQuery;
                            null !== r && Ai(1, r, n);
                            const i = t.template;
                            null !== i && ti(t, e, i, 1, n), t.firstCreatePass && (t.firstCreatePass = !1), t.staticContentQueries && Yr(t, e), t.staticViewQueries && Ai(2, t.viewQuery, n);
                            const o = t.components;
                            null !== o && function (t, e) {
                                for (let n = 0; n < e.length; n++) Ci(t, e[n])
                            }(e, o)
                        } catch (r) {
                            throw t.firstCreatePass && (t.incompleteFirstPass = !0), r
                        } finally {
                            e[2] &= -5, Le()
                        }
                    }

                    function Kr(t, e, n, r) {
                        const i = e[2];
                        if (256 == (256 & i)) return;
                        Ne(e, e[6]);
                        const o = _e();
                        try {
                            he(e), de.lFrame.bindingIndex = t.bindingStartIndex, null !== n && ti(t, e, n, 2, r);
                            const s = 3 == (3 & i);
                            if (!o)
                                if (s) {
                                    const n = t.preOrderCheckHooks;
                                    null !== n && ze(e, n, null)
                                } else {
                                    const n = t.preOrderHooks;
                                    null !== n && qe(e, n, 0, null), $e(e, 0)
                                } if (function (t) {
                                    for (let e = Lr(t); null !== e; e = Mr(e)) {
                                        if (!e[2]) continue;
                                        const t = e[9];
                                        for (let e = 0; e < t.length; e++) {
                                            const n = t[e],
                                                r = n[3];
                                            0 == (1024 & n[2]) && pe(r, 1), n[2] |= 1024
                                        }
                                    }
                                }(e), function (t) {
                                    for (let e = Lr(t); null !== e; e = Mr(e))
                                        for (let t = 10; t < e.length; t++) {
                                            const n = e[t],
                                                r = n[1];
                                            ce(n) && Kr(r, n, r.template, n[8])
                                        }
                                }(e), null !== t.contentQueries && Yr(t, e), !o)
                                if (s) {
                                    const n = t.contentCheckHooks;
                                    null !== n && ze(e, n)
                                } else {
                                    const n = t.contentHooks;
                                    null !== n && qe(e, n, 1), $e(e, 1)
                                }!
                            function (t, e) {
                                try {
                                    const n = t.expandoInstructions;
                                    if (null !== n) {
                                        let r = t.expandoStartIndex,
                                            i = -1,
                                            o = -1;
                                        for (let t = 0; t < n.length; t++) {
                                            const s = n[t];
                                            "number" == typeof s ? s <= 0 ? (o = 0 - s, Ue(o), r += 9 + n[++t], i = r) : r += s : (null !== s && (xe(r, i), s(2, e[i])), i++)
                                        }
                                    }
                                } finally {
                                    Ue(-1)
                                }
                            }(t, e);
                            const a = t.components;
                            null !== a && function (t, e) {
                                for (let n = 0; n < e.length; n++) Ti(t, e[n])
                            }(e, a);
                            const u = t.viewQuery;
                            if (null !== u && Ai(2, u, r), !o)
                                if (s) {
                                    const n = t.viewCheckHooks;
                                    null !== n && ze(e, n)
                                } else {
                                    const n = t.viewHooks;
                                    null !== n && qe(e, n, 2), $e(e, 2)
                                }! 0 === t.firstUpdatePass && (t.firstUpdatePass = !1), o || (e[2] &= -73), 1024 & e[2] && (e[2] &= -1025, pe(e[3], -1))
                        } finally {
                            Le()
                        }
                    }

                    function Jr(t, e, n, r) {
                        const i = e[10],
                            o = !_e(),
                            s = ue(e);
                        try {
                            o && !s && i.begin && i.begin(), s && Zr(t, e, r), Kr(t, e, n, r)
                        } finally {
                            o && !s && i.end && i.end()
                        }
                    }

                    function ti(t, e, n, r, i) {
                        const o = Me();
                        try {
                            Ue(-1), 2 & r && e.length > 20 && Br(t, e, 0, _e()), n(r, i)
                        } finally {
                            Ue(o)
                        }
                    }

                    function ei(t, e, n) {
                        if (Ht(e)) {
                            const r = e.directiveEnd;
                            for (let i = e.directiveStart; i < r; i++) {
                                const e = t.data[i];
                                e.contentQueries && e.contentQueries(1, n[i], i)
                            }
                        }
                    }

                    function ni(t, e, n) {
                        fe() && (function (t, e, n, r) {
                            const i = n.directiveStart,
                                o = n.directiveEnd;
                            t.firstCreatePass || dn(n, e), _r(r, e);
                            const s = n.initialInputs;
                            for (let a = i; a < o; a++) {
                                const r = t.data[a],
                                    o = qt(r);
                                o && wi(e, n, r);
                                const u = En(e, t, a, n);
                                _r(u, e), null !== s && vi(0, a - i, u, r, 0, s), o && (se(n.index, e)[8] = u)
                            }
                        }(t, e, n, ie(n, e)), 128 == (128 & n.flags) && function (t, e, n) {
                            const r = n.directiveStart,
                                i = n.directiveEnd,
                                o = t.expandoInstructions,
                                s = t.firstCreatePass,
                                a = n.index - 20,
                                u = de.lFrame.currentDirectiveIndex;
                            try {
                                Ue(a);
                                for (let n = r; n < i; n++) {
                                    const r = t.data[n],
                                        i = e[n];
                                    Se(n), null !== r.hostBindings || 0 !== r.hostVars || null !== r.hostAttrs ? di(r, i) : s && o.push(null)
                                }
                            } finally {
                                Ue(-1), Se(u)
                            }
                        }(t, e, n))
                    }

                    function ri(t, e, n = ie) {
                        const r = e.localNames;
                        if (null !== r) {
                            let i = e.index + 1;
                            for (let o = 0; o < r.length; o += 2) {
                                const s = r[o + 1],
                                    a = -1 === s ? n(e, t) : t[s];
                                t[i++] = a
                            }
                        }
                    }

                    function ii(t) {
                        const e = t.tView;
                        return null === e || e.incompleteFirstPass ? t.tView = oi(1, -1, t.template, t.decls, t.vars, t.directiveDefs, t.pipeDefs, t.viewQuery, t.schemas, t.consts) : e
                    }

                    function oi(t, e, n, r, i, o, s, a, u, c) {
                        const l = 20 + r,
                            h = l + i,
                            p = function (t, e) {
                                const n = [];
                                for (let r = 0; r < e; r++) n.push(r < t ? null : Rr);
                                return n
                            }(l, h);
                        return p[1] = {
                            type: t,
                            id: e,
                            blueprint: p,
                            template: n,
                            queries: null,
                            viewQuery: a,
                            node: null,
                            data: p.slice().fill(null, l),
                            bindingStartIndex: l,
                            expandoStartIndex: h,
                            expandoInstructions: null,
                            firstCreatePass: !0,
                            firstUpdatePass: !0,
                            staticViewQueries: !1,
                            staticContentQueries: !1,
                            preOrderHooks: null,
                            preOrderCheckHooks: null,
                            contentHooks: null,
                            contentCheckHooks: null,
                            viewHooks: null,
                            viewCheckHooks: null,
                            destroyHooks: null,
                            cleanup: null,
                            contentQueries: null,
                            components: null,
                            directiveRegistry: "function" == typeof o ? o() : o,
                            pipeRegistry: "function" == typeof s ? s() : s,
                            firstChild: null,
                            schemas: u,
                            consts: c,
                            incompleteFirstPass: !1
                        }
                    }

                    function si(t, e, n, r) {
                        const i = Ni(e);
                        i.push(n), t.firstCreatePass && function (t) {
                            return t.cleanup || (t.cleanup = [])
                        }(t).push(r, i.length - 1)
                    }

                    function ai(t, e, n, r, i, o) {
                        return {
                            type: n,
                            index: r,
                            injectorIndex: e ? e.injectorIndex : -1,
                            directiveStart: -1,
                            directiveEnd: -1,
                            directiveStylingLast: -1,
                            propertyBindings: null,
                            flags: 0,
                            providerIndexes: 0,
                            tagName: i,
                            attrs: o,
                            mergedAttrs: null,
                            localNames: null,
                            initialInputs: void 0,
                            inputs: null,
                            outputs: null,
                            tViews: null,
                            next: null,
                            projectionNext: null,
                            child: null,
                            parent: e,
                            projection: null,
                            styles: null,
                            stylesWithoutHost: null,
                            residualStyles: void 0,
                            classes: null,
                            classesWithoutHost: null,
                            residualClasses: void 0,
                            classBindings: 0,
                            styleBindings: 0
                        }
                    }

                    function ui(t, e, n) {
                        for (let r in t)
                            if (t.hasOwnProperty(r)) {
                                const i = t[r];
                                (n = null === n ? {} : n).hasOwnProperty(r) ? n[r].push(e, i) : n[r] = [e, i]
                            } return n
                    }

                    function ci(t, e, n, r, i, o, s, a) {
                        const u = ie(e, n);
                        let c, l = e.inputs;
                        var h;
                        !a && null != l && (c = l[r]) ? (ji(t, n, c, r, i), Vt(e) && function (t, e) {
                            const n = se(e, t);
                            16 & n[2] || (n[2] |= 64)
                        }(n, e.index)) : 3 === e.type && (r = "class" === (h = r) ? "className" : "for" === h ? "htmlFor" : "formaction" === h ? "formAction" : "innerHtml" === h ? "innerHTML" : "readonly" === h ? "readOnly" : "tabindex" === h ? "tabIndex" : h, i = null != s ? s(i, e.tagName || "", r) : i, te(o) ? o.setProperty(u, r, i) : Ze(r) || (u.setProperty ? u.setProperty(r, i) : u[r] = i))
                    }

                    function li(t, e, n, r) {
                        let i = !1;
                        if (fe()) {
                            const o = function (t, e, n) {
                                    const r = t.directiveRegistry;
                                    let i = null;
                                    if (r)
                                        for (let o = 0; o < r.length; o++) {
                                            const s = r[o];
                                            Nr(n, s.selectors, !1) && (i || (i = []), yn(dn(n, e), t, s.type), qt(s) ? (2 & n.flags && Er(n), gi(t, n), i.unshift(s)) : i.push(s))
                                        }
                                    return i
                                }(t, e, n),
                                s = null === r ? null : {
                                    "": -1
                                };
                            if (null !== o) {
                                let r = 0;
                                i = !0, yi(n, t.data.length, o.length);
                                for (let t = 0; t < o.length; t++) {
                                    const e = o[t];
                                    e.providersResolver && e.providersResolver(e)
                                }
                                fi(t, n, o.length);
                                let a = !1,
                                    u = !1;
                                for (let i = 0; i < o.length; i++) {
                                    const c = o[i];
                                    n.mergedAttrs = Ke(n.mergedAttrs, c.hostAttrs), bi(t, e, c), mi(t.data.length - 1, c, s), null !== c.contentQueries && (n.flags |= 8), null === c.hostBindings && null === c.hostAttrs && 0 === c.hostVars || (n.flags |= 128);
                                    const l = c.type.prototype;
                                    !a && (l.ngOnChanges || l.ngOnInit || l.ngDoCheck) && ((t.preOrderHooks || (t.preOrderHooks = [])).push(n.index - 20), a = !0), u || !l.ngOnChanges && !l.ngDoCheck || ((t.preOrderCheckHooks || (t.preOrderCheckHooks = [])).push(n.index - 20), u = !0), hi(t, c), r += c.hostVars
                                }! function (t, e) {
                                    const n = e.directiveEnd,
                                        r = t.data,
                                        i = e.attrs,
                                        o = [];
                                    let s = null,
                                        a = null;
                                    for (let u = e.directiveStart; u < n; u++) {
                                        const t = r[u],
                                            n = t.inputs,
                                            c = null === i || xr(e) ? null : _i(n, i);
                                        o.push(c), s = ui(n, u, s), a = ui(t.outputs, u, a)
                                    }
                                    null !== s && (s.hasOwnProperty("class") && (e.flags |= 16), s.hasOwnProperty("style") && (e.flags |= 32)), e.initialInputs = o, e.inputs = s, e.outputs = a
                                }(t, n), pi(t, e, r)
                            }
                            s && function (t, e, n) {
                                if (e) {
                                    const r = t.localNames = [];
                                    for (let t = 0; t < e.length; t += 2) {
                                        const i = n[e[t + 1]];
                                        if (null == i) throw new Error(`Export of name '${e[t+1]}' not found!`);
                                        r.push(e[t], i)
                                    }
                                }
                            }(n, r, s)
                        }
                        return n.mergedAttrs = Ke(n.mergedAttrs, n.attrs), i
                    }

                    function hi(t, e) {
                        const n = t.expandoInstructions;
                        n.push(e.hostBindings), 0 !== e.hostVars && n.push(e.hostVars)
                    }

                    function pi(t, e, n) {
                        for (let r = 0; r < n; r++) e.push(Rr), t.blueprint.push(Rr), t.data.push(null)
                    }

                    function di(t, e) {
                        null !== t.hostBindings && t.hostBindings(1, e)
                    }

                    function fi(t, e, n) {
                        const r = 20 - e.index,
                            i = t.data.length - (1048575 & e.providerIndexes);
                        (t.expandoInstructions || (t.expandoInstructions = [])).push(r, i, n)
                    }

                    function gi(t, e) {
                        e.flags |= 2, (t.components || (t.components = [])).push(e.index)
                    }

                    function mi(t, e, n) {
                        if (n) {
                            if (e.exportAs)
                                for (let r = 0; r < e.exportAs.length; r++) n[e.exportAs[r]] = t;
                            qt(e) && (n[""] = t)
                        }
                    }

                    function yi(t, e, n) {
                        t.flags |= 1, t.directiveStart = e, t.directiveEnd = e + n, t.providerIndexes = e
                    }

                    function bi(t, e, n) {
                        t.data.push(n);
                        const r = n.factory || (n.factory = Mt(n.type)),
                            i = new We(r, qt(n), null);
                        t.blueprint.push(i), e.push(i)
                    }

                    function wi(t, e, n) {
                        const r = ie(e, t),
                            i = ii(n),
                            o = t[10],
                            s = Oi(t, Xr(t, i, null, n.onPush ? 64 : 16, r, e, o, o.createRenderer(r, n)));
                        t[e.index] = s
                    }

                    function vi(t, e, n, r, i, o) {
                        const s = o[e];
                        if (null !== s) {
                            const t = r.setInput;
                            for (let e = 0; e < s.length;) {
                                const i = s[e++],
                                    o = s[e++],
                                    a = s[e++];
                                null !== t ? r.setInput(n, a, i, o) : n[o] = a
                            }
                        }
                    }

                    function _i(t, e) {
                        let n = null,
                            r = 0;
                        for (; r < e.length;) {
                            const i = e[r];
                            if (0 !== i)
                                if (5 !== i) {
                                    if ("number" == typeof i) break;
                                    t.hasOwnProperty(i) && (null === n && (n = []), n.push(i, t[i], e[r + 1])), r += 2
                                } else r += 2;
                            else r += 4
                        }
                        return n
                    }

                    function Ei(t, e, n, r) {
                        return new Array(t, !0, !1, e, null, 0, r, n, null, null)
                    }

                    function Ti(t, e) {
                        const n = se(e, t);
                        if (ce(n)) {
                            const t = n[1];
                            80 & n[2] ? Kr(t, n, t.template, n[8]) : n[5] > 0 && function t(e) {
                                for (let r = Lr(e); null !== r; r = Mr(r))
                                    for (let e = 10; e < r.length; e++) {
                                        const n = r[e];
                                        if (1024 & n[2]) {
                                            const t = n[1];
                                            Kr(t, n, t.template, n[8])
                                        } else n[5] > 0 && t(n)
                                    }
                                const n = e[1].components;
                                if (null !== n)
                                    for (let r = 0; r < n.length; r++) {
                                        const i = se(n[r], e);
                                        ce(i) && i[5] > 0 && t(i)
                                    }
                            }(n)
                        }
                    }

                    function Ci(t, e) {
                        const n = se(e, t),
                            r = n[1];
                        ! function (t, e) {
                            for (let n = e.length; n < t.blueprint.length; n++) e.push(t.blueprint[n])
                        }(r, n), Zr(r, n, n[8])
                    }

                    function Oi(t, e) {
                        return t[13] ? t[14][4] = e : t[13] = e, t[14] = e, e
                    }

                    function xi(t) {
                        for (; t;) {
                            t[2] |= 64;
                            const e = kr(t);
                            if ($t(t) && !e) return t;
                            t = e
                        }
                        return null
                    }

                    function Si(t, e, n) {
                        const r = e[10];
                        r.begin && r.begin();
                        try {
                            Kr(t, e, t.template, n)
                        } catch (i) {
                            throw Di(e, i), i
                        } finally {
                            r.end && r.end()
                        }
                    }

                    function Ii(t) {
                        ! function (t) {
                            for (let e = 0; e < t.components.length; e++) {
                                const n = t.components[e],
                                    r = ae(n),
                                    i = r[1];
                                Jr(i, r, i.template, n)
                            }
                        }(t[8])
                    }

                    function Ai(t, e, n) {
                        Ae(0), e(t, n)
                    }
                    const Pi = (() => Promise.resolve(null))();

                    function Ni(t) {
                        return t[7] || (t[7] = [])
                    }

                    function Di(t, e) {
                        const n = t[9],
                            r = n ? n.get(Nn, null) : null;
                        r && r.handleError(e)
                    }

                    function ji(t, e, n, r, i) {
                        for (let o = 0; o < n.length;) {
                            const s = n[o++],
                                a = n[o++],
                                u = e[s],
                                c = t.data[s];
                            null !== c.setInput ? c.setInput(u, i, r, a) : u[a] = i
                        }
                    }

                    function Ri(t, e, n) {
                        const r = re(e, t),
                            i = t[11];
                        te(i) ? i.setValue(r, n) : r.textContent = n
                    }

                    function ki(t, e) {
                        const n = e[3];
                        return -1 === t.index ? Bt(n) ? n : null : n
                    }

                    function Li(t, e) {
                        const n = ki(t, e);
                        return n ? Yi(e[11], n[7]) : null
                    }

                    function Mi(t, e, n, r, i) {
                        if (null != r) {
                            let o, s = !1;
                            Bt(r) ? o = r : Ft(r) && (s = !0, r = r[0]);
                            const a = ne(r);
                            0 === t && null !== n ? null == i ? $i(e, n, a) : qi(e, n, a, i || null) : 1 === t && null !== n ? qi(e, n, a, i || null) : 2 === t ? function (t, e, n) {
                                const r = Yi(t, e);
                                r && function (t, e, n, r) {
                                    te(t) ? t.removeChild(e, n, r) : e.removeChild(n)
                                }(t, r, e, n)
                            }(e, a, s) : 3 === t && e.destroyNode(a), null != o && function (t, e, n, r, i) {
                                const o = n[7];
                                o !== ne(n) && Mi(e, t, r, o, i);
                                for (let s = 10; s < n.length; s++) {
                                    const i = n[s];
                                    Zi(i[1], i, t, e, r, o)
                                }
                            }(e, t, o, n, i)
                        }
                    }

                    function Ui(t, e, n, r) {
                        const i = Li(t.node, e);
                        i && Zi(t, e, e[11], n ? 1 : 2, i, r)
                    }

                    function Fi(t, e) {
                        const n = t[9],
                            r = n.indexOf(e);
                        1024 & e[2] && pe(e[3], -1), n.splice(r, 1)
                    }

                    function Bi(t, e) {
                        if (t.length <= 10) return;
                        const n = 10 + e,
                            r = t[n];
                        if (r) {
                            const i = r[17];
                            null !== i && i !== t && Fi(i, r), e > 0 && (t[n - 1][4] = r[4]);
                            const o = bt(t, 10 + e);
                            Ui(r[1], r, !1, null);
                            const s = o[19];
                            null !== s && s.detachView(o[1]), r[3] = null, r[4] = null, r[2] &= -129
                        }
                        return r
                    }

                    function Hi(t, e) {
                        if (!(256 & e[2])) {
                            const n = e[11];
                            te(n) && n.destroyNode && Zi(t, e, n, 3, null, null),
                                function (t) {
                                    let e = t[13];
                                    if (!e) return zi(t[1], t);
                                    for (; e;) {
                                        let n = null;
                                        if (Ft(e)) n = e[13];
                                        else {
                                            const t = e[10];
                                            t && (n = t)
                                        }
                                        if (!n) {
                                            for (; e && !e[4] && e !== t;) Ft(e) && zi(e[1], e), e = Vi(e, t);
                                            null === e && (e = t), Ft(e) && zi(e[1], e), n = e && e[4]
                                        }
                                        e = n
                                    }
                                }(e)
                        }
                    }

                    function Vi(t, e) {
                        let n;
                        return Ft(t) && (n = t[6]) && 2 === n.type ? ki(n, t) : t[3] === e ? null : t[3]
                    }

                    function zi(t, e) {
                        if (!(256 & e[2])) {
                            e[2] &= -129, e[2] |= 256,
                                function (t, e) {
                                    let n;
                                    if (null != t && null != (n = t.destroyHooks))
                                        for (let r = 0; r < n.length; r += 2) {
                                            const t = e[n[r]];
                                            if (!(t instanceof We)) {
                                                const e = n[r + 1];
                                                if (Array.isArray(e))
                                                    for (let n = 0; n < e.length; n += 2) e[n + 1].call(t[e[n]]);
                                                else e.call(t)
                                            }
                                        }
                                }(t, e),
                                function (t, e) {
                                    const n = t.cleanup;
                                    if (null !== n) {
                                        const t = e[7];
                                        for (let r = 0; r < n.length - 1; r += 2)
                                            if ("string" == typeof n[r]) {
                                                const i = n[r + 1],
                                                    o = "function" == typeof i ? i(e) : ne(e[i]),
                                                    s = t[n[r + 2]],
                                                    a = n[r + 3];
                                                "boolean" == typeof a ? o.removeEventListener(n[r], s, a) : a >= 0 ? t[a]() : t[-a].unsubscribe(), r += 2
                                            } else n[r].call(t[n[r + 1]]);
                                        e[7] = null
                                    }
                                }(t, e);
                            const n = e[6];
                            n && 3 === n.type && te(e[11]) && e[11].destroy();
                            const r = e[17];
                            if (null !== r && Bt(e[3])) {
                                r !== e[3] && Fi(r, e);
                                const n = e[19];
                                null !== n && n.detachView(t)
                            }
                        }
                    }

                    function qi(t, e, n, r) {
                        te(t) ? t.insertBefore(e, n, r) : e.insertBefore(n, r, !0)
                    }

                    function $i(t, e, n) {
                        te(t) ? t.appendChild(e, n) : e.appendChild(n)
                    }

                    function Gi(t, e, n, r) {
                        null !== r ? qi(t, e, n, r) : $i(t, e, n)
                    }

                    function Yi(t, e) {
                        return te(t) ? t.parentNode(e) : e.parentNode
                    }

                    function Wi(t, e, n, r) {
                        const i = function (t, e, n) {
                            let r = e.parent;
                            for (; null != r && (4 === r.type || 5 === r.type);) r = (e = r).parent;
                            if (null == r) {
                                const t = n[6];
                                return 2 === t.type ? Li(t, n) : n[0]
                            }
                            if (e && 5 === e.type && 4 & e.flags) return ie(e, n).parentNode;
                            if (2 & r.flags) {
                                const e = t.data,
                                    n = e[e[r.index].directiveStart].encapsulation;
                                if (n !== Tt.ShadowDom && n !== Tt.Native) return null
                            }
                            return ie(r, n)
                        }(t, r, e);
                        if (null != i) {
                            const t = e[11],
                                o = function (t, e) {
                                    if (2 === t.type) {
                                        const n = ki(t, e);
                                        return null === n ? null : Xi(n.indexOf(e, 10) - 10, n)
                                    }
                                    return 4 === t.type || 5 === t.type ? ie(t, e) : null
                                }(r.parent || e[6], e);
                            if (Array.isArray(n))
                                for (let e = 0; e < n.length; e++) Gi(t, i, n[e], o);
                            else Gi(t, i, n, o)
                        }
                    }

                    function Xi(t, e) {
                        const n = 10 + t + 1;
                        if (n < e.length) {
                            const t = e[n],
                                r = t[1].firstChild;
                            if (null !== r) return function t(e, n) {
                                if (null !== n) {
                                    const r = n.type;
                                    if (3 === r) return ie(n, e);
                                    if (0 === r) return Xi(-1, e[n.index]);
                                    if (4 === r || 5 === r) {
                                        const r = n.child;
                                        if (null !== r) return t(e, r); {
                                            const t = e[n.index];
                                            return Bt(t) ? Xi(-1, t) : ne(t)
                                        }
                                    } {
                                        const r = e[16],
                                            i = r[6],
                                            o = kr(r),
                                            s = i.projection[n.projection];
                                        return null != s ? t(o, s) : t(e, n.next)
                                    }
                                }
                                return null
                            }(t, r)
                        }
                        return e[7]
                    }

                    function Qi(t, e, n, r, i, o, s) {
                        for (; null != n;) {
                            const a = r[n.index],
                                u = n.type;
                            s && 0 === e && (a && _r(ne(a), r), n.flags |= 4), 64 != (64 & n.flags) && (4 === u || 5 === u ? (Qi(t, e, n.child, r, i, o, !1), Mi(e, t, i, a, o)) : 1 === u ? Ki(t, e, r, n, i, o) : Mi(e, t, i, a, o)), n = s ? n.projectionNext : n.next
                        }
                    }

                    function Zi(t, e, n, r, i, o) {
                        Qi(n, r, t.node.child, e, i, o, !1)
                    }

                    function Ki(t, e, n, r, i, o) {
                        const s = n[16],
                            a = s[6].projection[r.projection];
                        if (Array.isArray(a))
                            for (let u = 0; u < a.length; u++) Mi(e, t, i, a[u], o);
                        else Qi(t, e, a, s[3], i, o, !0)
                    }

                    function Ji(t, e, n) {
                        te(t) ? t.setAttribute(e, "style", n) : e.style.cssText = n
                    }

                    function to(t, e, n) {
                        te(t) ? "" === n ? t.removeAttribute(e, "class") : t.setAttribute(e, "class", n) : e.className = n
                    }
                    class eo {
                        constructor(t, e) {
                            this._lView = t, this._cdRefInjectingView = e, this._appRef = null, this._viewContainerRef = null
                        }
                        get rootNodes() {
                            const t = this._lView;
                            return null == t[0] ? function t(e, n, r, i, o = !1) {
                                for (; null !== r;) {
                                    const s = n[r.index];
                                    if (null !== s && i.push(ne(s)), Bt(s))
                                        for (let e = 10; e < s.length; e++) {
                                            const n = s[e],
                                                r = n[1].firstChild;
                                            null !== r && t(n[1], n, r, i)
                                        }
                                    const a = r.type;
                                    if (4 === a || 5 === a) t(e, n, r.child, i);
                                    else if (1 === a) {
                                        const e = n[16],
                                            o = e[6].projection[r.projection];
                                        if (Array.isArray(o)) i.push(...o);
                                        else {
                                            const n = kr(e);
                                            t(n[1], n, o, i, !0)
                                        }
                                    }
                                    r = o ? r.projectionNext : r.next
                                }
                                return i
                            }(t[1], t, t[6].child, []) : []
                        }
                        get context() {
                            return this._lView[8]
                        }
                        get destroyed() {
                            return 256 == (256 & this._lView[2])
                        }
                        destroy() {
                            if (this._appRef) this._appRef.detachView(this);
                            else if (this._viewContainerRef) {
                                const t = this._viewContainerRef.indexOf(this);
                                t > -1 && this._viewContainerRef.detach(t), this._viewContainerRef = null
                            }
                            Hi(this._lView[1], this._lView)
                        }
                        onDestroy(t) {
                            si(this._lView[1], this._lView, null, t)
                        }
                        markForCheck() {
                            xi(this._cdRefInjectingView || this._lView)
                        }
                        detach() {
                            this._lView[2] &= -129
                        }
                        reattach() {
                            this._lView[2] |= 128
                        }
                        detectChanges() {
                            Si(this._lView[1], this._lView, this.context)
                        }
                        checkNoChanges() {
                            ! function (t, e, n) {
                                Ee(!0);
                                try {
                                    Si(t, e, n)
                                } finally {
                                    Ee(!1)
                                }
                            }(this._lView[1], this._lView, this.context)
                        }
                        attachToViewContainerRef(t) {
                            if (this._appRef) throw new Error("This view is already attached directly to the ApplicationRef!");
                            this._viewContainerRef = t
                        }
                        detachFromAppRef() {
                            var t;
                            this._appRef = null, Zi(this._lView[1], t = this._lView, t[11], 2, null, null)
                        }
                        attachToAppRef(t) {
                            if (this._viewContainerRef) throw new Error("This view is already attached to a ViewContainer!");
                            this._appRef = t
                        }
                    }
                    class no extends eo {
                        constructor(t) {
                            super(t), this._view = t
                        }
                        detectChanges() {
                            Ii(this._view)
                        }
                        checkNoChanges() {
                            ! function (t) {
                                Ee(!0);
                                try {
                                    Ii(t)
                                } finally {
                                    Ee(!1)
                                }
                            }(this._view)
                        }
                        get context() {
                            return null
                        }
                    }
                    let ro, io, oo;

                    function so(t, e, n) {
                        return ro || (ro = class extends t {}), new ro(ie(e, n))
                    }

                    function ao(t, e, n, r) {
                        return io || (io = class extends t {
                            constructor(t, e, n) {
                                super(), this._declarationView = t, this._declarationTContainer = e, this.elementRef = n
                            }
                            createEmbeddedView(t) {
                                const e = this._declarationTContainer.tViews,
                                    n = Xr(this._declarationView, e, t, 16, null, e.node);
                                n[17] = this._declarationView[this._declarationTContainer.index];
                                const r = this._declarationView[19];
                                return null !== r && (n[19] = r.createEmbeddedView(e)), Zr(e, n, t), new eo(n)
                            }
                        }), 0 === n.type ? new io(r, n, so(e, n, r)) : null
                    }

                    function uo(t, e, n, r) {
                        let i;
                        oo || (oo = class extends t {
                            constructor(t, e, n) {
                                super(), this._lContainer = t, this._hostTNode = e, this._hostView = n
                            }
                            get element() {
                                return so(e, this._hostTNode, this._hostView)
                            }
                            get injector() {
                                return new On(this._hostTNode, this._hostView)
                            }
                            get parentInjector() {
                                const t = mn(this._hostTNode, this._hostView),
                                    e = rn(t, this._hostView),
                                    n = function (t, e, n) {
                                        if (n.parent && -1 !== n.parent.injectorIndex) {
                                            const t = n.parent.injectorIndex;
                                            let e = n.parent;
                                            for (; null != e.parent && t == e.parent.injectorIndex;) e = e.parent;
                                            return e
                                        }
                                        let r = nn(t),
                                            i = e,
                                            o = e[6];
                                        for (; r > 1;) i = i[15], o = i[6], r--;
                                        return o
                                    }(t, this._hostView, this._hostTNode);
                                return tn(t) && null != n ? new On(n, e) : new On(null, this._hostView)
                            }
                            clear() {
                                for (; this.length > 0;) this.remove(this.length - 1)
                            }
                            get(t) {
                                return null !== this._lContainer[8] && this._lContainer[8][t] || null
                            }
                            get length() {
                                return this._lContainer.length - 10
                            }
                            createEmbeddedView(t, e, n) {
                                const r = t.createEmbeddedView(e || {});
                                return this.insert(r, n), r
                            }
                            createComponent(t, e, n, r, i) {
                                const o = n || this.parentInjector;
                                if (!i && null == t.ngModule && o) {
                                    const t = o.get(ft, null);
                                    t && (i = t)
                                }
                                const s = t.create(o, r, void 0, i);
                                return this.insert(s.hostView, e), s
                            }
                            insert(t, e) {
                                const n = t._lView,
                                    r = n[1];
                                if (t.destroyed) throw new Error("Cannot insert a destroyed View in a ViewContainer!");
                                if (this.allocateContainerIfNeeded(), Bt(n[3])) {
                                    const e = this.indexOf(t);
                                    if (-1 !== e) this.detach(e);
                                    else {
                                        const e = n[3],
                                            r = new oo(e, e[6], e[3]);
                                        r.detach(r.indexOf(t))
                                    }
                                }
                                const i = this._adjustIndex(e);
                                return function (t, e, n, r) {
                                    const i = 10 + r,
                                        o = n.length;
                                    r > 0 && (n[i - 1][4] = e), r < o - 10 ? (e[4] = n[i], yt(n, 10 + r, e)) : (n.push(e), e[4] = null), e[3] = n;
                                    const s = e[17];
                                    null !== s && n !== s && function (t, e) {
                                        const n = t[9];
                                        e[16] !== e[3][3][16] && (t[2] = !0), null === n ? t[9] = [e] : n.push(e)
                                    }(s, e);
                                    const a = e[19];
                                    null !== a && a.insertView(t), e[2] |= 128
                                }(r, n, this._lContainer, i), Ui(r, n, !0, Xi(i, this._lContainer)), t.attachToViewContainerRef(this), yt(this._lContainer[8], i, t), t
                            }
                            move(t, e) {
                                if (t.destroyed) throw new Error("Cannot move a destroyed View in a ViewContainer!");
                                return this.insert(t, e)
                            }
                            indexOf(t) {
                                const e = this._lContainer[8];
                                return null !== e ? e.indexOf(t) : -1
                            }
                            remove(t) {
                                this.allocateContainerIfNeeded();
                                const e = this._adjustIndex(t, -1);
                                ! function (t, e) {
                                    const n = Bi(t, e);
                                    n && Hi(n[1], n)
                                }(this._lContainer, e), bt(this._lContainer[8], e)
                            }
                            detach(t) {
                                this.allocateContainerIfNeeded();
                                const e = this._adjustIndex(t, -1),
                                    n = Bi(this._lContainer, e);
                                return n && null != bt(this._lContainer[8], e) ? new eo(n) : null
                            }
                            _adjustIndex(t, e = 0) {
                                return null == t ? this.length + e : t
                            }
                            allocateContainerIfNeeded() {
                                null === this._lContainer[8] && (this._lContainer[8] = [])
                            }
                        });
                        const o = r[n.index];
                        if (Bt(o)) i = o;
                        else {
                            let t;
                            if (4 === n.type) t = ne(o);
                            else if (t = r[11].createComment(""), $t(r)) {
                                const e = r[11],
                                    i = ie(n, r);
                                qi(e, Yi(e, i), t, function (t, e) {
                                    return te(t) ? t.nextSibling(e) : e.nextSibling
                                }(e, i))
                            } else Wi(r[1], r, t, n);
                            r[n.index] = i = Ei(o, r, t, n), Oi(r, i)
                        }
                        return new oo(i, n, r)
                    }

                    function co(t = !1) {
                        return function (t, e, n) {
                            if (!n && Vt(t)) {
                                const n = se(t.index, e);
                                return new eo(n, n)
                            }
                            return 3 === t.type || 0 === t.type || 4 === t.type || 5 === t.type ? new eo(e[16], e) : null
                        }(ye(), ge(), t)
                    }
                    let lo = (() => {
                        class t {}
                        return t.__NG_ELEMENT_ID__ = () => ho(), t
                    })();
                    const ho = co,
                        po = Function,
                        fo = new tt("Set Injector scope."),
                        go = {},
                        mo = {},
                        yo = [];
                    let bo = void 0;

                    function wo() {
                        return void 0 === bo && (bo = new dt), bo
                    }

                    function vo(t, e = null, n = null, r) {
                        return new _o(t, n, e || wo(), r)
                    }
                    class _o {
                        constructor(t, e, n, r = null) {
                            this.parent = n, this.records = new Map, this.injectorDefTypes = new Set, this.onDestroy = new Set, this._destroyed = !1;
                            const i = [];
                            e && mt(e, n => this.processProvider(n, t, e)), mt([t], t => this.processInjectorType(t, [], i)), this.records.set(et, Co(void 0, this));
                            const o = this.records.get(fo);
                            this.scope = null != o ? o.value : null, this.source = r || ("object" == typeof t ? null : L(t))
                        }
                        get destroyed() {
                            return this._destroyed
                        }
                        destroy() {
                            this.assertNotDestroyed(), this._destroyed = !0;
                            try {
                                this.onDestroy.forEach(t => t.ngOnDestroy())
                            } finally {
                                this.records.clear(), this.onDestroy.clear(), this.injectorDefTypes.clear()
                            }
                        }
                        get(t, e = nt, n = T.Default) {
                            this.assertNotDestroyed();
                            const r = at(this);
                            try {
                                if (!(n & T.SkipSelf)) {
                                    let e = this.records.get(t);
                                    if (void 0 === e) {
                                        const n = ("function" == typeof (i = t) || "object" == typeof i && i instanceof tt) && I(t);
                                        e = n && this.injectableDefInScope(n) ? Co(Eo(t), go) : null, this.records.set(t, e)
                                    }
                                    if (null != e) return this.hydrate(t, e)
                                }
                                return (n & T.Self ? wo() : this.parent).get(t, e = n & T.Optional && e === nt ? null : e)
                            } catch (o) {
                                if ("NullInjectorError" === o.name) {
                                    if ((o.ngTempTokenPath = o.ngTempTokenPath || []).unshift(L(t)), r) throw o;
                                    return function (t, e, n, r) {
                                        const i = t.ngTempTokenPath;
                                        throw e.__source && i.unshift(e.__source), t.message = function (t, e, n, r = null) {
                                            t = t && "\n" === t.charAt(0) && "\u0275" == t.charAt(1) ? t.substr(2) : t;
                                            let i = L(e);
                                            if (Array.isArray(e)) i = e.map(L).join(" -> ");
                                            else if ("object" == typeof e) {
                                                let t = [];
                                                for (let n in e)
                                                    if (e.hasOwnProperty(n)) {
                                                        let r = e[n];
                                                        t.push(n + ":" + ("string" == typeof r ? JSON.stringify(r) : L(r)))
                                                    } i = `{${t.join(", ")}}`
                                            }
                                            return `${n}${r?"("+r+")":""}[${i}]: ${t.replace(rt,"\n  ")}`
                                        }("\n" + t.message, i, n, r), t.ngTokenPath = i, t.ngTempTokenPath = null, t
                                    }(o, t, "R3InjectorError", this.source)
                                }
                                throw o
                            } finally {
                                at(r)
                            }
                            var i
                        }
                        _resolveInjectorDefTypes() {
                            this.injectorDefTypes.forEach(t => this.get(t))
                        }
                        toString() {
                            const t = [];
                            return this.records.forEach((e, n) => t.push(L(n))), `R3Injector[${t.join(", ")}]`
                        }
                        assertNotDestroyed() {
                            if (this._destroyed) throw new Error("Injector has already been destroyed.")
                        }
                        processInjectorType(t, e, n) {
                            if (!(t = B(t))) return !1;
                            let r = P(t);
                            const i = null == r && t.ngModule || void 0,
                                o = void 0 === i ? t : i,
                                s = -1 !== n.indexOf(o);
                            if (void 0 !== i && (r = P(i)), null == r) return !1;
                            if (null != r.imports && !s) {
                                let t;
                                n.push(o);
                                try {
                                    mt(r.imports, r => {
                                        this.processInjectorType(r, e, n) && (void 0 === t && (t = []), t.push(r))
                                    })
                                } finally {}
                                if (void 0 !== t)
                                    for (let e = 0; e < t.length; e++) {
                                        const {
                                            ngModule: n,
                                            providers: r
                                        } = t[e];
                                        mt(r, t => this.processProvider(t, n, r || yo))
                                    }
                            }
                            this.injectorDefTypes.add(o), this.records.set(o, Co(r.factory, go));
                            const a = r.providers;
                            if (null != a && !s) {
                                const e = t;
                                mt(a, t => this.processProvider(t, e, a))
                            }
                            return void 0 !== i && void 0 !== t.providers
                        }
                        processProvider(t, e, n) {
                            let r = xo(t = B(t)) ? t : B(t && t.provide);
                            const i = function (t, e, n) {
                                return Oo(t) ? Co(void 0, t.useValue) : Co(To(t, e, n), go)
                            }(t, e, n);
                            if (xo(t) || !0 !== t.multi) {
                                const t = this.records.get(r);
                                t && void 0 !== t.multi && Tr()
                            } else {
                                let e = this.records.get(r);
                                e ? void 0 === e.multi && Tr() : (e = Co(void 0, go, !0), e.factory = () => pt(e.multi), this.records.set(r, e)), r = t, e.multi.push(t)
                            }
                            this.records.set(r, i)
                        }
                        hydrate(t, e) {
                            var n;
                            return e.value === mo ? function (t) {
                                throw new Error("Cannot instantiate cyclic dependency! " + t)
                            }(L(t)) : e.value === go && (e.value = mo, e.value = e.factory()), "object" == typeof e.value && e.value && null !== (n = e.value) && "object" == typeof n && "function" == typeof n.ngOnDestroy && this.onDestroy.add(e.value), e.value
                        }
                        injectableDefInScope(t) {
                            return !!t.providedIn && ("string" == typeof t.providedIn ? "any" === t.providedIn || t.providedIn === this.scope : this.injectorDefTypes.has(t.providedIn))
                        }
                    }

                    function Eo(t) {
                        const e = I(t),
                            n = null !== e ? e.factory : Mt(t);
                        if (null !== n) return n;
                        const r = P(t);
                        if (null !== r) return r.factory;
                        if (t instanceof tt) throw new Error(`Token ${L(t)} is missing a \u0275prov definition.`);
                        if (t instanceof Function) return function (t) {
                            const e = t.length;
                            if (e > 0) {
                                const n = function (t, e) {
                                    const n = [];
                                    for (let r = 0; r < t; r++) n.push("?");
                                    return n
                                }(e);
                                throw new Error(`Can't resolve all parameters for ${L(t)}: (${n.join(", ")}).`)
                            }
                            const n = function (t) {
                                const e = t && (t[N] || t[R] || t[j] && t[j]());
                                if (e) {
                                    const n = function (t) {
                                        if (t.hasOwnProperty("name")) return t.name;
                                        const e = ("" + t).match(/^function\s*([^\s(]+)/);
                                        return null === e ? "" : e[1]
                                    }(t);
                                    return console.warn(`DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`), e
                                }
                                return null
                            }(t);
                            return null !== n ? () => n.factory(t) : () => new t
                        }(t);
                        throw new Error("unreachable")
                    }

                    function To(t, e, n) {
                        let r = void 0;
                        if (xo(t)) {
                            const e = B(t);
                            return Mt(e) || Eo(e)
                        }
                        if (Oo(t)) r = () => B(t.useValue);
                        else if ((i = t) && i.useFactory) r = () => t.useFactory(...pt(t.deps || []));
                        else if (function (t) {
                                return !(!t || !t.useExisting)
                            }(t)) r = () => lt(B(t.useExisting));
                        else {
                            const i = B(t && (t.useClass || t.provide));
                            if (i || function (t, e, n) {
                                    let r = "";
                                    throw t && e && (r = ` - only instances of Provider and Type are allowed, got: [${e.map(t=>t==n?"?"+n+"?":"...").join(", ")}]`), new Error(`Invalid provider for the NgModule '${L(t)}'` + r)
                                }(e, n, t), ! function (t) {
                                    return !!t.deps
                                }(t)) return Mt(i) || Eo(i);
                            r = () => new i(...pt(t.deps))
                        }
                        var i;
                        return r
                    }

                    function Co(t, e, n = !1) {
                        return {
                            factory: t,
                            value: e,
                            multi: n ? [] : void 0
                        }
                    }

                    function Oo(t) {
                        return null !== t && "object" == typeof t && it in t
                    }

                    function xo(t) {
                        return "function" == typeof t
                    }
                    const So = function (t, e, n) {
                        return function (t, e = null, n = null, r) {
                            const i = vo(t, e, n, r);
                            return i._resolveInjectorDefTypes(), i
                        }({
                            name: n
                        }, e, t, n)
                    };
                    let Io = (() => {
                        class t {
                            static create(t, e) {
                                return Array.isArray(t) ? So(t, e, "") : So(t.providers, t.parent, t.name || "")
                            }
                        }
                        return t.THROW_IF_NOT_FOUND = nt, t.NULL = new dt, t.\u0275prov = x({
                            token: t,
                            providedIn: "any",
                            factory: () => lt(et)
                        }), t.__NG_ELEMENT_ID__ = -1, t
                    })();
                    const Ao = new tt("AnalyzeForEntryComponents");

                    function Po(t, e, n) {
                        let r = n ? t.styles : null,
                            i = n ? t.classes : null,
                            o = 0;
                        if (null !== e)
                            for (let s = 0; s < e.length; s++) {
                                const t = e[s];
                                "number" == typeof t ? o = t : 1 == o ? i = M(i, t) : 2 == o && (r = M(r, t + ": " + e[++s] + ";"))
                            }
                        n ? t.styles = r : t.stylesWithoutHost = r, n ? t.classes = i : t.classesWithoutHost = i
                    }
                    let No = null;

                    function Do() {
                        if (!No) {
                            const t = G.Symbol;
                            if (t && t.iterator) No = t.iterator;
                            else {
                                const t = Object.getOwnPropertyNames(Map.prototype);
                                for (let e = 0; e < t.length; ++e) {
                                    const n = t[e];
                                    "entries" !== n && "size" !== n && Map.prototype[n] === Map.prototype.entries && (No = n)
                                }
                            }
                        }
                        return No
                    }
                    class jo {
                        constructor(t) {
                            this.wrapped = t
                        }
                        static wrap(t) {
                            return new jo(t)
                        }
                        static unwrap(t) {
                            return jo.isWrapped(t) ? t.wrapped : t
                        }
                        static isWrapped(t) {
                            return t instanceof jo
                        }
                    }

                    function Ro(t) {
                        return !!ko(t) && (Array.isArray(t) || !(t instanceof Map) && Do() in t)
                    }

                    function ko(t) {
                        return null !== t && ("function" == typeof t || "object" == typeof t)
                    }

                    function Lo(t, e, n) {
                        return !Object.is(t[e], n) && (t[e] = n, !0)
                    }

                    function Mo(t, e, n, r) {
                        const i = Lo(t, e, n);
                        return Lo(t, e + 1, r) || i
                    }

                    function Uo(t, e, n, r) {
                        const i = ge();
                        return Lo(i, Ce(), e) && (me(), function (t, e, n, r, i, o) {
                            const s = ie(t, e),
                                a = e[11];
                            if (null == r) te(a) ? a.removeAttribute(s, n, o) : s.removeAttribute(n);
                            else {
                                const e = null == i ? on(r) : i(r, t.tagName || "", n);
                                te(a) ? a.setAttribute(s, n, e, o) : o ? s.setAttributeNS(o, n, e) : s.setAttribute(n, e)
                            }
                        }(Fe(), i, t, e, n, r)), Uo
                    }

                    function Fo(t, e, n, r) {
                        return Lo(t, Ce(), n) ? e + on(n) + r : Rr
                    }

                    function Bo(t, e, n, r, i, o, s, a) {
                        const u = ge(),
                            c = me(),
                            l = t + 20,
                            h = c.firstCreatePass ? function (t, e, n, r, i, o, s, a, u) {
                                const c = e.consts,
                                    l = Qr(e, n[6], t, 0, s || null, le(c, a));
                                li(e, n, l, le(c, u)), Ve(e, l);
                                const h = l.tViews = oi(2, -1, r, i, o, e.directiveRegistry, e.pipeRegistry, null, e.schemas, c),
                                    p = ai(0, null, 2, -1, null, null);
                                return p.injectorIndex = l.injectorIndex, h.node = p, null !== e.queries && (e.queries.template(e, l), h.queries = e.queries.embeddedTView(l)), l
                            }(t, c, u, e, n, r, i, o, s) : c.data[l];
                        be(h, !1);
                        const p = u[11].createComment("");
                        Wi(c, u, p, h), _r(p, u), Oi(u, u[l] = Ei(p, u, p, h)), zt(h) && ni(c, u, h), null != s && ri(u, h, a)
                    }

                    function Ho(t, e = T.Default) {
                        const n = ge();
                        return null == n ? lt(t, e) : bn(ye(), n, B(t), e)
                    }

                    function Vo(t) {
                        return function (t, e) {
                            if ("class" === e) return t.classes;
                            if ("style" === e) return t.styles;
                            const n = t.attrs;
                            if (n) {
                                const t = n.length;
                                let r = 0;
                                for (; r < t;) {
                                    const i = n[r];
                                    if (Qe(i)) break;
                                    if (0 === i) r += 2;
                                    else if ("number" == typeof i)
                                        for (r++; r < t && "string" == typeof n[r];) r++;
                                    else {
                                        if (i === e) return n[r + 1];
                                        r += 2
                                    }
                                }
                            }
                            return null
                        }(ye(), t)
                    }

                    function zo(t, e, n) {
                        const r = ge();
                        return Lo(r, Ce(), e) && ci(me(), Fe(), r, t, e, r[11], n, !1), zo
                    }

                    function qo(t, e, n, r, i) {
                        const o = i ? "class" : "style";
                        ji(t, n, e.inputs[o], o, r)
                    }

                    function $o(t, e, n, r) {
                        const i = ge(),
                            o = me(),
                            s = 20 + t,
                            a = i[11],
                            u = i[s] = Wr(e, a, de.lFrame.currentNamespace),
                            c = o.firstCreatePass ? function (t, e, n, r, i, o, s) {
                                const a = e.consts,
                                    u = le(a, o),
                                    c = Qr(e, n[6], t, 3, i, u);
                                return li(e, n, c, le(a, s)), null !== c.attrs && Po(c, c.attrs, !1), null !== c.mergedAttrs && Po(c, c.mergedAttrs, !0), null !== e.queries && e.queries.elementStart(e, c), c
                            }(t, o, i, 0, e, n, r) : o.data[s];
                        be(c, !0);
                        const l = c.mergedAttrs;
                        null !== l && Xe(a, u, l);
                        const h = c.classes;
                        null !== h && to(a, u, h);
                        const p = c.styles;
                        null !== p && Ji(a, u, p), Wi(o, i, u, c), 0 === de.lFrame.elementDepthCount && _r(u, i), de.lFrame.elementDepthCount++, zt(c) && (ni(o, i, c), ei(o, c, i)), null !== r && ri(i, c)
                    }

                    function Go() {
                        let t = ye();
                        we() ? ve() : (t = t.parent, be(t, !1));
                        const e = t;
                        de.lFrame.elementDepthCount--;
                        const n = me();
                        n.firstCreatePass && (Ve(n, t), Ht(t) && n.queries.elementEnd(t)), null != e.classesWithoutHost && function (t) {
                            return 0 != (16 & t.flags)
                        }(e) && qo(n, e, ge(), e.classesWithoutHost, !0), null != e.stylesWithoutHost && function (t) {
                            return 0 != (32 & t.flags)
                        }(e) && qo(n, e, ge(), e.stylesWithoutHost, !1)
                    }

                    function Yo(t, e, n, r) {
                        $o(t, e, n, r), Go()
                    }

                    function Wo(t, e, n) {
                        const r = ge(),
                            i = me(),
                            o = t + 20,
                            s = i.firstCreatePass ? function (t, e, n, r, i) {
                                const o = e.consts,
                                    s = le(o, r),
                                    a = Qr(e, n[6], t, 4, "ng-container", s);
                                return null !== s && Po(a, s, !0), li(e, n, a, le(o, i)), null !== e.queries && e.queries.elementStart(e, a), a
                            }(t, i, r, e, n) : i.data[o];
                        be(s, !0);
                        const a = r[o] = r[11].createComment("");
                        Wi(i, r, a, s), _r(a, r), zt(s) && (ni(i, r, s), ei(i, s, r)), null != n && ri(r, s)
                    }

                    function Xo() {
                        let t = ye();
                        const e = me();
                        we() ? ve() : (t = t.parent, be(t, !1)), e.firstCreatePass && (Ve(e, t), Ht(t) && e.queries.elementEnd(t))
                    }

                    function Qo(t) {
                        return !!t && "function" == typeof t.then
                    }

                    function Zo(t) {
                        return !!t && "function" == typeof t.subscribe
                    }

                    function Ko(t, e, n = !1, r) {
                        const i = ge(),
                            o = me(),
                            s = ye();
                        return function (t, e, n, r, i, o, s = !1, a) {
                            const u = zt(r),
                                c = t.firstCreatePass && (t.cleanup || (t.cleanup = [])),
                                l = Ni(e);
                            let h = !0;
                            if (3 === r.type) {
                                const p = ie(r, e),
                                    d = a ? a(p) : Ct,
                                    f = d.target || p,
                                    g = l.length,
                                    m = a ? t => a(ne(t[r.index])).target : r.index;
                                if (te(n)) {
                                    let s = null;
                                    if (!a && u && (s = function (t, e, n, r) {
                                            const i = t.cleanup;
                                            if (null != i)
                                                for (let o = 0; o < i.length - 1; o += 2) {
                                                    const t = i[o];
                                                    if (t === n && i[o + 1] === r) {
                                                        const t = e[7],
                                                            n = i[o + 2];
                                                        return t.length > n ? t[n] : null
                                                    }
                                                    "string" == typeof t && (o += 2)
                                                }
                                            return null
                                        }(t, e, i, r.index)), null !== s)(s.__ngLastListenerFn__ || s).__ngNextListenerFn__ = o, s.__ngLastListenerFn__ = o, h = !1;
                                    else {
                                        o = ts(r, e, o, !1);
                                        const t = n.listen(d.name || f, i, o);
                                        l.push(o, t), c && c.push(i, m, g, g + 1)
                                    }
                                } else o = ts(r, e, o, !0), f.addEventListener(i, o, s), l.push(o), c && c.push(i, m, g, s)
                            }
                            const p = r.outputs;
                            let d;
                            if (h && null !== p && (d = p[i])) {
                                const t = d.length;
                                if (t)
                                    for (let n = 0; n < t; n += 2) {
                                        const t = e[d[n]][d[n + 1]].subscribe(o),
                                            s = l.length;
                                        l.push(o, t), c && c.push(i, r.index, s, -(s + 1))
                                    }
                            }
                        }(o, i, i[11], s, t, e, n, r), Ko
                    }

                    function Jo(t, e, n) {
                        try {
                            return !1 !== e(n)
                        } catch (r) {
                            return Di(t, r), !1
                        }
                    }

                    function ts(t, e, n, r) {
                        return function i(o) {
                            if (o === Function) return n;
                            const s = 2 & t.flags ? se(t.index, e) : e;
                            0 == (32 & e[2]) && xi(s);
                            let a = Jo(e, n, o),
                                u = i.__ngNextListenerFn__;
                            for (; u;) a = Jo(e, u, o) && a, u = u.__ngNextListenerFn__;
                            return r && !1 === a && (o.preventDefault(), o.returnValue = !1), a
                        }
                    }

                    function es(t = 1) {
                        return function (t) {
                            return (de.lFrame.contextLView = function (t, e) {
                                for (; t > 0;) e = e[15], t--;
                                return e
                            }(t, de.lFrame.contextLView))[8]
                        }(t)
                    }

                    function ns(t, e, n, r, i) {
                        const o = ge(),
                            s = Fo(o, e, n, r);
                        return s !== Rr && ci(me(), Fe(), o, t, s, o[11], i, !1), ns
                    }
                    const rs = [];

                    function is(t, e, n, r, i) {
                        const o = t[n + 1],
                            s = null === e;
                        let a = r ? Vr(o) : qr(o),
                            u = !1;
                        for (; 0 !== a && (!1 === u || s);) {
                            const n = t[a + 1];
                            os(t[a], e) && (u = !0, t[a + 1] = r ? Gr(n) : zr(n)), a = r ? Vr(n) : qr(n)
                        }
                        u && (t[n + 1] = r ? zr(o) : Gr(o))
                    }

                    function os(t, e) {
                        return null === t || null == e || (Array.isArray(t) ? t[1] : t) === e || !(!Array.isArray(t) || "string" != typeof e) && _t(t, e) >= 0
                    }

                    function ss(t, e) {
                        return function (t, e, n, r) {
                            const i = ge(),
                                o = me(),
                                s = Oe(2);
                            o.firstUpdatePass && function (t, e, n, r) {
                                const i = t.data;
                                if (null === i[n + 1]) {
                                    const r = i[Me() + 20],
                                        o = function (t, e) {
                                            return e >= t.expandoStartIndex
                                        }(t, n);
                                    (function (t, e) {
                                        return 0 != (16 & t.flags)
                                    })(r) && null === e && !o && (e = !1), e = function (t, e, n, r) {
                                            const i = function (t) {
                                                const e = de.lFrame.currentDirectiveIndex;
                                                return -1 === e ? null : t[e]
                                            }(t);
                                            let o = e.residualClasses;
                                            if (null === i) 0 === e.classBindings && (n = us(n = as(null, t, e, n, !0), e.attrs, !0), o = null);
                                            else {
                                                const r = e.directiveStylingLast;
                                                if (-1 === r || t[r] !== i)
                                                    if (n = as(i, t, e, n, !0), null === o) {
                                                        let n = function (t, e, n) {
                                                            const r = e.classBindings;
                                                            if (0 !== qr(r)) return t[Vr(r)]
                                                        }(t, e);
                                                        void 0 !== n && Array.isArray(n) && (n = as(null, t, e, n[1], !0), n = us(n, e.attrs, !0), function (t, e, n, r) {
                                                            t[Vr(e.classBindings)] = r
                                                        }(t, e, 0, n))
                                                    } else o = function (t, e, n) {
                                                        let r = void 0;
                                                        const i = e.directiveEnd;
                                                        for (let o = 1 + e.directiveStylingLast; o < i; o++) r = us(r, t[o].hostAttrs, !0);
                                                        return us(r, e.attrs, !0)
                                                    }(t, e)
                                            }
                                            return void 0 !== o && (e.residualClasses = o), n
                                        }(i, r, e),
                                        function (t, e, n, r, i, o) {
                                            let s = e.classBindings,
                                                a = Vr(s),
                                                u = qr(s);
                                            t[r] = n;
                                            let c, l = !1;
                                            if (Array.isArray(n)) {
                                                const t = n;
                                                c = t[1], (null === c || _t(t, c) > 0) && (l = !0)
                                            } else c = n;
                                            if (i)
                                                if (0 !== u) {
                                                    const e = Vr(t[a + 1]);
                                                    t[r + 1] = Hr(e, a), 0 !== e && (t[e + 1] = $r(t[e + 1], r)), t[a + 1] = 131071 & t[a + 1] | r << 17
                                                } else t[r + 1] = Hr(a, 0), 0 !== a && (t[a + 1] = $r(t[a + 1], r)), a = r;
                                            else t[r + 1] = Hr(u, 0), 0 === a ? a = r : t[u + 1] = $r(t[u + 1], r), u = r;
                                            l && (t[r + 1] = zr(t[r + 1])), is(t, c, r, !0), is(t, c, r, !1),
                                                function (t, e, n, r, i) {
                                                    const o = t.residualClasses;
                                                    null != o && "string" == typeof e && _t(o, e) >= 0 && (n[r + 1] = Gr(n[r + 1]))
                                                }(e, c, t, r), s = Hr(a, u), e.classBindings = s
                                        }(i, r, e, n, o)
                                }
                            }(o, t, s), e !== Rr && Lo(i, s, e) && function (t, e, n, r, i, o, s, a) {
                                if (3 !== e.type) return;
                                const u = t.data,
                                    c = u[a + 1];
                                ls(1 == (1 & c) ? cs(u, e, n, i, qr(c), !0) : void 0) || (ls(o) || function (t) {
                                    return 2 == (2 & t)
                                }(c) && (o = cs(u, null, n, i, a, !0)), function (t, e, n, r, i) {
                                    const o = te(t);
                                    i ? o ? t.addClass(n, r) : n.classList.add(r) : o ? t.removeClass(n, r) : n.classList.remove(r)
                                }(r, 0, re(Me(), n), i, o))
                            }(o, o.data[Me() + 20], i, i[11], t, i[s + 1] = function (t, e) {
                                return null == t || "object" == typeof t && (t = L(Un(t))), t
                            }(e), 0, s)
                        }(t, e), ss
                    }

                    function as(t, e, n, r, i) {
                        let o = null;
                        const s = n.directiveEnd;
                        let a = n.directiveStylingLast;
                        for (-1 === a ? a = n.directiveStart : a++; a < s && (o = e[a], r = us(r, o.hostAttrs, i), o !== t);) a++;
                        return null !== t && (n.directiveStylingLast = a), r
                    }

                    function us(t, e, n) {
                        const r = n ? 1 : 2;
                        let i = -1;
                        if (null !== e)
                            for (let o = 0; o < e.length; o++) {
                                const s = e[o];
                                "number" == typeof s ? i = s : i === r && (Array.isArray(t) || (t = void 0 === t ? [] : ["", t]), wt(t, s, !!n || e[++o]))
                            }
                        return void 0 === t ? null : t
                    }

                    function cs(t, e, n, r, i, o) {
                        const s = null === e;
                        let a = void 0;
                        for (; i > 0;) {
                            const e = t[i],
                                o = Array.isArray(e),
                                u = o ? e[1] : e,
                                c = null === u;
                            let l = n[i + 1];
                            l === Rr && (l = c ? rs : void 0);
                            let h = c ? vt(l, r) : u === r ? l : void 0;
                            if (o && !ls(h) && (h = vt(e, r)), ls(h) && (a = h, s)) return a;
                            const p = t[i + 1];
                            i = s ? Vr(p) : qr(p)
                        }
                        if (null !== e) {
                            let t = o ? e.residualClasses : e.residualStyles;
                            null != t && (a = vt(t, r))
                        }
                        return a
                    }

                    function ls(t) {
                        return void 0 !== t
                    }

                    function hs(t, e = "") {
                        const n = ge(),
                            r = me(),
                            i = t + 20,
                            o = r.firstCreatePass ? Qr(r, n[6], t, 3, null, null) : r.data[i],
                            s = n[i] = function (t, e) {
                                return te(e) ? e.createText(t) : e.createTextNode(t)
                            }(e, n[11]);
                        Wi(r, n, s, o), be(o, !1)
                    }

                    function ps(t) {
                        return ds("", t, ""), ps
                    }

                    function ds(t, e, n) {
                        const r = ge(),
                            i = Fo(r, t, e, n);
                        return i !== Rr && Ri(r, Me(), i), ds
                    }

                    function fs(t, e, n, r, i) {
                        const o = ge(),
                            s = function (t, e, n, r, i, o) {
                                const s = Mo(t, Te(), n, i);
                                return Oe(2), s ? e + on(n) + r + on(i) + o : Rr
                            }(o, t, e, n, r, i);
                        return s !== Rr && Ri(o, Me(), s), fs
                    }

                    function gs(t, e, n) {
                        const r = ge();
                        return Lo(r, Ce(), e) && ci(me(), Fe(), r, t, e, r[11], n, !0), gs
                    }

                    function ms(t, e) {
                        const n = ae(t)[1],
                            r = n.data.length - 1;
                        Ve(n, {
                            directiveStart: r,
                            directiveEnd: r + 1
                        })
                    }

                    function ys(t) {
                        let e = Object.getPrototypeOf(t.type.prototype).constructor,
                            n = !0;
                        const r = [t];
                        for (; e;) {
                            let i = void 0;
                            if (qt(t)) i = e.\u0275cmp || e.\u0275dir;
                            else {
                                if (e.\u0275cmp) throw new Error("Directives cannot inherit Components");
                                i = e.\u0275dir
                            }
                            if (i) {
                                if (n) {
                                    r.push(i);
                                    const e = t;
                                    e.inputs = bs(t.inputs), e.declaredInputs = bs(t.declaredInputs), e.outputs = bs(t.outputs);
                                    const n = i.hostBindings;
                                    n && _s(t, n);
                                    const o = i.viewQuery,
                                        s = i.contentQueries;
                                    if (o && ws(t, o), s && vs(t, s), O(t.inputs, i.inputs), O(t.declaredInputs, i.declaredInputs), O(t.outputs, i.outputs), qt(i) && i.data.animation) {
                                        const e = t.data;
                                        e.animation = (e.animation || []).concat(i.data.animation)
                                    }
                                }
                                const e = i.features;
                                if (e)
                                    for (let r = 0; r < e.length; r++) {
                                        const i = e[r];
                                        i && i.ngInherit && i(t), i === ys && (n = !1)
                                    }
                            }
                            e = Object.getPrototypeOf(e)
                        }! function (t) {
                            let e = 0,
                                n = null;
                            for (let r = t.length - 1; r >= 0; r--) {
                                const i = t[r];
                                i.hostVars = e += i.hostVars, i.hostAttrs = Ke(i.hostAttrs, n = Ke(n, i.hostAttrs))
                            }
                        }(r)
                    }

                    function bs(t) {
                        return t === Ct ? {} : t === Ot ? [] : t
                    }

                    function ws(t, e) {
                        const n = t.viewQuery;
                        t.viewQuery = n ? (t, r) => {
                            e(t, r), n(t, r)
                        } : e
                    }

                    function vs(t, e) {
                        const n = t.contentQueries;
                        t.contentQueries = n ? (t, r, i) => {
                            e(t, r, i), n(t, r, i)
                        } : e
                    }

                    function _s(t, e) {
                        const n = t.hostBindings;
                        t.hostBindings = n ? (t, r) => {
                            e(t, r), n(t, r)
                        } : e
                    }

                    function Es(t, e, n, r, i) {
                        if (t = B(t), Array.isArray(t))
                            for (let o = 0; o < t.length; o++) Es(t[o], e, n, r, i);
                        else {
                            const o = me(),
                                s = ge();
                            let a = xo(t) ? t : B(t.provide),
                                u = To(t);
                            const c = ye(),
                                l = 1048575 & c.providerIndexes,
                                h = c.directiveStart,
                                p = c.providerIndexes >> 20;
                            if (xo(t) || !t.multi) {
                                const r = new We(u, i, Ho),
                                    d = Os(a, e, i ? l : l + p, h); - 1 === d ? (yn(dn(c, s), o, a), Ts(o, t, e.length), e.push(a), c.directiveStart++, c.directiveEnd++, i && (c.providerIndexes += 1048576), n.push(r), s.push(r)) : (n[d] = r, s[d] = r)
                            } else {
                                const d = Os(a, e, l + p, h),
                                    f = Os(a, e, l, l + p),
                                    g = d >= 0 && n[d],
                                    m = f >= 0 && n[f];
                                if (i && !m || !i && !g) {
                                    yn(dn(c, s), o, a);
                                    const l = function (t, e, n, r, i) {
                                        const o = new We(t, n, Ho);
                                        return o.multi = [], o.index = e, o.componentProviders = 0, Cs(o, i, r && !n), o
                                    }(i ? Ss : xs, n.length, i, r, u);
                                    !i && m && (n[f].providerFactory = l), Ts(o, t, e.length, 0), e.push(a), c.directiveStart++, c.directiveEnd++, i && (c.providerIndexes += 1048576), n.push(l), s.push(l)
                                } else Ts(o, t, d > -1 ? d : f, Cs(n[i ? f : d], u, !i && r));
                                !i && r && m && n[f].componentProviders++
                            }
                        }
                    }

                    function Ts(t, e, n, r) {
                        const i = xo(e);
                        if (i || e.useClass) {
                            const o = (e.useClass || e).prototype.ngOnDestroy;
                            if (o) {
                                const s = t.destroyHooks || (t.destroyHooks = []);
                                if (!i && e.multi) {
                                    const t = s.indexOf(n); - 1 === t ? s.push(n, [r, o]) : s[t + 1].push(r, o)
                                } else s.push(n, o)
                            }
                        }
                    }

                    function Cs(t, e, n) {
                        return n && t.componentProviders++, t.multi.push(e) - 1
                    }

                    function Os(t, e, n, r) {
                        for (let i = n; i < r; i++)
                            if (e[i] === t) return i;
                        return -1
                    }

                    function xs(t, e, n, r) {
                        return Is(this.multi, [])
                    }

                    function Ss(t, e, n, r) {
                        const i = this.multi;
                        let o;
                        if (this.providerFactory) {
                            const t = this.providerFactory.componentProviders,
                                e = En(n, n[1], this.providerFactory.index, r);
                            o = e.slice(0, t), Is(i, o);
                            for (let n = t; n < e.length; n++) o.push(e[n])
                        } else o = [], Is(i, o);
                        return o
                    }

                    function Is(t, e) {
                        for (let n = 0; n < t.length; n++) e.push((0, t[n])());
                        return e
                    }

                    function As(t, e = []) {
                        return n => {
                            n.providersResolver = (n, r) => function (t, e, n) {
                                const r = me();
                                if (r.firstCreatePass) {
                                    const i = qt(t);
                                    Es(n, r.data, r.blueprint, i, !0), Es(e, r.data, r.blueprint, i, !1)
                                }
                            }(n, r ? r(t) : t, e)
                        }
                    }
                    class Ps {}
                    class Ns {
                        resolveComponentFactory(t) {
                            throw function (t) {
                                const e = Error(`No component factory found for ${L(t)}. Did you add it to @NgModule.entryComponents?`);
                                return e.ngComponent = t, e
                            }(t)
                        }
                    }
                    let Ds = (() => {
                            class t {}
                            return t.NULL = new Ns, t
                        })(),
                        js = (() => {
                            class t {
                                constructor(t) {
                                    this.nativeElement = t
                                }
                            }
                            return t.__NG_ELEMENT_ID__ = () => Rs(t), t
                        })();
                    const Rs = function (t) {
                        return so(t, ye(), ge())
                    };
                    class ks {}
                    var Ls = function (t) {
                        return t[t.Important = 1] = "Important", t[t.DashCase = 2] = "DashCase", t
                    }({});
                    let Ms = (() => {
                        class t {}
                        return t.__NG_ELEMENT_ID__ = () => Us(), t
                    })();
                    const Us = function () {
                        const t = ge(),
                            e = se(ye().index, t);
                        return function (t) {
                            const e = t[11];
                            if (te(e)) return e;
                            throw new Error("Cannot inject Renderer2 when the application uses Renderer3!")
                        }(Ft(e) ? e : t)
                    };
                    let Fs = (() => {
                        class t {}
                        return t.\u0275prov = x({
                            token: t,
                            providedIn: "root",
                            factory: () => null
                        }), t
                    })();
                    class Bs {
                        constructor(t) {
                            this.full = t, this.major = t.split(".")[0], this.minor = t.split(".")[1], this.patch = t.split(".").slice(2).join(".")
                        }
                    }
                    const Hs = new Bs("10.0.8");
                    class Vs {
                        constructor() {}
                        supports(t) {
                            return Ro(t)
                        }
                        create(t) {
                            return new qs(t)
                        }
                    }
                    const zs = (t, e) => e;
                    class qs {
                        constructor(t) {
                            this.length = 0, this._linkedRecords = null, this._unlinkedRecords = null, this._previousItHead = null, this._itHead = null, this._itTail = null, this._additionsHead = null, this._additionsTail = null, this._movesHead = null, this._movesTail = null, this._removalsHead = null, this._removalsTail = null, this._identityChangesHead = null, this._identityChangesTail = null, this._trackByFn = t || zs
                        }
                        forEachItem(t) {
                            let e;
                            for (e = this._itHead; null !== e; e = e._next) t(e)
                        }
                        forEachOperation(t) {
                            let e = this._itHead,
                                n = this._removalsHead,
                                r = 0,
                                i = null;
                            for (; e || n;) {
                                const o = !n || e && e.currentIndex < Ws(n, r, i) ? e : n,
                                    s = Ws(o, r, i),
                                    a = o.currentIndex;
                                if (o === n) r--, n = n._nextRemoved;
                                else if (e = e._next, null == o.previousIndex) r++;
                                else {
                                    i || (i = []);
                                    const t = s - r,
                                        e = a - r;
                                    if (t != e) {
                                        for (let n = 0; n < t; n++) {
                                            const r = n < i.length ? i[n] : i[n] = 0,
                                                o = r + n;
                                            e <= o && o < t && (i[n] = r + 1)
                                        }
                                        i[o.previousIndex] = e - t
                                    }
                                }
                                s !== a && t(o, s, a)
                            }
                        }
                        forEachPreviousItem(t) {
                            let e;
                            for (e = this._previousItHead; null !== e; e = e._nextPrevious) t(e)
                        }
                        forEachAddedItem(t) {
                            let e;
                            for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e)
                        }
                        forEachMovedItem(t) {
                            let e;
                            for (e = this._movesHead; null !== e; e = e._nextMoved) t(e)
                        }
                        forEachRemovedItem(t) {
                            let e;
                            for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e)
                        }
                        forEachIdentityChange(t) {
                            let e;
                            for (e = this._identityChangesHead; null !== e; e = e._nextIdentityChange) t(e)
                        }
                        diff(t) {
                            if (null == t && (t = []), !Ro(t)) throw new Error(`Error trying to diff '${L(t)}'. Only arrays and iterables are allowed`);
                            return this.check(t) ? this : null
                        }
                        onDestroy() {}
                        check(t) {
                            this._reset();
                            let e, n, r, i = this._itHead,
                                o = !1;
                            if (Array.isArray(t)) {
                                this.length = t.length;
                                for (let e = 0; e < this.length; e++) n = t[e], r = this._trackByFn(e, n), null !== i && Object.is(i.trackById, r) ? (o && (i = this._verifyReinsertion(i, n, r, e)), Object.is(i.item, n) || this._addIdentityChange(i, n)) : (i = this._mismatch(i, n, r, e), o = !0), i = i._next
                            } else e = 0,
                                function (t, e) {
                                    if (Array.isArray(t))
                                        for (let n = 0; n < t.length; n++) e(t[n]);
                                    else {
                                        const n = t[Do()]();
                                        let r;
                                        for (; !(r = n.next()).done;) e(r.value)
                                    }
                                }(t, t => {
                                    r = this._trackByFn(e, t), null !== i && Object.is(i.trackById, r) ? (o && (i = this._verifyReinsertion(i, t, r, e)), Object.is(i.item, t) || this._addIdentityChange(i, t)) : (i = this._mismatch(i, t, r, e), o = !0), i = i._next, e++
                                }), this.length = e;
                            return this._truncate(i), this.collection = t, this.isDirty
                        }
                        get isDirty() {
                            return null !== this._additionsHead || null !== this._movesHead || null !== this._removalsHead || null !== this._identityChangesHead
                        }
                        _reset() {
                            if (this.isDirty) {
                                let t, e;
                                for (t = this._previousItHead = this._itHead; null !== t; t = t._next) t._nextPrevious = t._next;
                                for (t = this._additionsHead; null !== t; t = t._nextAdded) t.previousIndex = t.currentIndex;
                                for (this._additionsHead = this._additionsTail = null, t = this._movesHead; null !== t; t = e) t.previousIndex = t.currentIndex, e = t._nextMoved;
                                this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null
                            }
                        }
                        _mismatch(t, e, n, r) {
                            let i;
                            return null === t ? i = this._itTail : (i = t._prev, this._remove(t)), null !== (t = null === this._linkedRecords ? null : this._linkedRecords.get(n, r)) ? (Object.is(t.item, e) || this._addIdentityChange(t, e), this._moveAfter(t, i, r)) : null !== (t = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null)) ? (Object.is(t.item, e) || this._addIdentityChange(t, e), this._reinsertAfter(t, i, r)) : t = this._addAfter(new $s(e, n), i, r), t
                        }
                        _verifyReinsertion(t, e, n, r) {
                            let i = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null);
                            return null !== i ? t = this._reinsertAfter(i, t._prev, r) : t.currentIndex != r && (t.currentIndex = r, this._addToMoves(t, r)), t
                        }
                        _truncate(t) {
                            for (; null !== t;) {
                                const e = t._next;
                                this._addToRemovals(this._unlink(t)), t = e
                            }
                            null !== this._unlinkedRecords && this._unlinkedRecords.clear(), null !== this._additionsTail && (this._additionsTail._nextAdded = null), null !== this._movesTail && (this._movesTail._nextMoved = null), null !== this._itTail && (this._itTail._next = null), null !== this._removalsTail && (this._removalsTail._nextRemoved = null), null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null)
                        }
                        _reinsertAfter(t, e, n) {
                            null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
                            const r = t._prevRemoved,
                                i = t._nextRemoved;
                            return null === r ? this._removalsHead = i : r._nextRemoved = i, null === i ? this._removalsTail = r : i._prevRemoved = r, this._insertAfter(t, e, n), this._addToMoves(t, n), t
                        }
                        _moveAfter(t, e, n) {
                            return this._unlink(t), this._insertAfter(t, e, n), this._addToMoves(t, n), t
                        }
                        _addAfter(t, e, n) {
                            return this._insertAfter(t, e, n), this._additionsTail = null === this._additionsTail ? this._additionsHead = t : this._additionsTail._nextAdded = t, t
                        }
                        _insertAfter(t, e, n) {
                            const r = null === e ? this._itHead : e._next;
                            return t._next = r, t._prev = e, null === r ? this._itTail = t : r._prev = t, null === e ? this._itHead = t : e._next = t, null === this._linkedRecords && (this._linkedRecords = new Ys), this._linkedRecords.put(t), t.currentIndex = n, t
                        }
                        _remove(t) {
                            return this._addToRemovals(this._unlink(t))
                        }
                        _unlink(t) {
                            null !== this._linkedRecords && this._linkedRecords.remove(t);
                            const e = t._prev,
                                n = t._next;
                            return null === e ? this._itHead = n : e._next = n, null === n ? this._itTail = e : n._prev = e, t
                        }
                        _addToMoves(t, e) {
                            return t.previousIndex === e || (this._movesTail = null === this._movesTail ? this._movesHead = t : this._movesTail._nextMoved = t), t
                        }
                        _addToRemovals(t) {
                            return null === this._unlinkedRecords && (this._unlinkedRecords = new Ys), this._unlinkedRecords.put(t), t.currentIndex = null, t._nextRemoved = null, null === this._removalsTail ? (this._removalsTail = this._removalsHead = t, t._prevRemoved = null) : (t._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = t), t
                        }
                        _addIdentityChange(t, e) {
                            return t.item = e, this._identityChangesTail = null === this._identityChangesTail ? this._identityChangesHead = t : this._identityChangesTail._nextIdentityChange = t, t
                        }
                    }
                    class $s {
                        constructor(t, e) {
                            this.item = t, this.trackById = e, this.currentIndex = null, this.previousIndex = null, this._nextPrevious = null, this._prev = null, this._next = null, this._prevDup = null, this._nextDup = null, this._prevRemoved = null, this._nextRemoved = null, this._nextAdded = null, this._nextMoved = null, this._nextIdentityChange = null
                        }
                    }
                    class Gs {
                        constructor() {
                            this._head = null, this._tail = null
                        }
                        add(t) {
                            null === this._head ? (this._head = this._tail = t, t._nextDup = null, t._prevDup = null) : (this._tail._nextDup = t, t._prevDup = this._tail, t._nextDup = null, this._tail = t)
                        }
                        get(t, e) {
                            let n;
                            for (n = this._head; null !== n; n = n._nextDup)
                                if ((null === e || e <= n.currentIndex) && Object.is(n.trackById, t)) return n;
                            return null
                        }
                        remove(t) {
                            const e = t._prevDup,
                                n = t._nextDup;
                            return null === e ? this._head = n : e._nextDup = n, null === n ? this._tail = e : n._prevDup = e, null === this._head
                        }
                    }
                    class Ys {
                        constructor() {
                            this.map = new Map
                        }
                        put(t) {
                            const e = t.trackById;
                            let n = this.map.get(e);
                            n || (n = new Gs, this.map.set(e, n)), n.add(t)
                        }
                        get(t, e) {
                            const n = this.map.get(t);
                            return n ? n.get(t, e) : null
                        }
                        remove(t) {
                            const e = t.trackById;
                            return this.map.get(e).remove(t) && this.map.delete(e), t
                        }
                        get isEmpty() {
                            return 0 === this.map.size
                        }
                        clear() {
                            this.map.clear()
                        }
                    }

                    function Ws(t, e, n) {
                        const r = t.previousIndex;
                        if (null === r) return r;
                        let i = 0;
                        return n && r < n.length && (i = n[r]), r + e + i
                    }
                    class Xs {
                        constructor() {}
                        supports(t) {
                            return t instanceof Map || ko(t)
                        }
                        create() {
                            return new Qs
                        }
                    }
                    class Qs {
                        constructor() {
                            this._records = new Map, this._mapHead = null, this._appendAfter = null, this._previousMapHead = null, this._changesHead = null, this._changesTail = null, this._additionsHead = null, this._additionsTail = null, this._removalsHead = null, this._removalsTail = null
                        }
                        get isDirty() {
                            return null !== this._additionsHead || null !== this._changesHead || null !== this._removalsHead
                        }
                        forEachItem(t) {
                            let e;
                            for (e = this._mapHead; null !== e; e = e._next) t(e)
                        }
                        forEachPreviousItem(t) {
                            let e;
                            for (e = this._previousMapHead; null !== e; e = e._nextPrevious) t(e)
                        }
                        forEachChangedItem(t) {
                            let e;
                            for (e = this._changesHead; null !== e; e = e._nextChanged) t(e)
                        }
                        forEachAddedItem(t) {
                            let e;
                            for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e)
                        }
                        forEachRemovedItem(t) {
                            let e;
                            for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e)
                        }
                        diff(t) {
                            if (t) {
                                if (!(t instanceof Map || ko(t))) throw new Error(`Error trying to diff '${L(t)}'. Only maps and objects are allowed`)
                            } else t = new Map;
                            return this.check(t) ? this : null
                        }
                        onDestroy() {}
                        check(t) {
                            this._reset();
                            let e = this._mapHead;
                            if (this._appendAfter = null, this._forEach(t, (t, n) => {
                                    if (e && e.key === n) this._maybeAddToChanges(e, t), this._appendAfter = e, e = e._next;
                                    else {
                                        const r = this._getOrCreateRecordForKey(n, t);
                                        e = this._insertBeforeOrAppend(e, r)
                                    }
                                }), e) {
                                e._prev && (e._prev._next = null), this._removalsHead = e;
                                for (let t = e; null !== t; t = t._nextRemoved) t === this._mapHead && (this._mapHead = null), this._records.delete(t.key), t._nextRemoved = t._next, t.previousValue = t.currentValue, t.currentValue = null, t._prev = null, t._next = null
                            }
                            return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty
                        }
                        _insertBeforeOrAppend(t, e) {
                            if (t) {
                                const n = t._prev;
                                return e._next = t, e._prev = n, t._prev = e, n && (n._next = e), t === this._mapHead && (this._mapHead = e), this._appendAfter = t, t
                            }
                            return this._appendAfter ? (this._appendAfter._next = e, e._prev = this._appendAfter) : this._mapHead = e, this._appendAfter = e, null
                        }
                        _getOrCreateRecordForKey(t, e) {
                            if (this._records.has(t)) {
                                const n = this._records.get(t);
                                this._maybeAddToChanges(n, e);
                                const r = n._prev,
                                    i = n._next;
                                return r && (r._next = i), i && (i._prev = r), n._next = null, n._prev = null, n
                            }
                            const n = new Zs(t);
                            return this._records.set(t, n), n.currentValue = e, this._addToAdditions(n), n
                        }
                        _reset() {
                            if (this.isDirty) {
                                let t;
                                for (this._previousMapHead = this._mapHead, t = this._previousMapHead; null !== t; t = t._next) t._nextPrevious = t._next;
                                for (t = this._changesHead; null !== t; t = t._nextChanged) t.previousValue = t.currentValue;
                                for (t = this._additionsHead; null != t; t = t._nextAdded) t.previousValue = t.currentValue;
                                this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, this._removalsHead = null
                            }
                        }
                        _maybeAddToChanges(t, e) {
                            Object.is(e, t.currentValue) || (t.previousValue = t.currentValue, t.currentValue = e, this._addToChanges(t))
                        }
                        _addToAdditions(t) {
                            null === this._additionsHead ? this._additionsHead = this._additionsTail = t : (this._additionsTail._nextAdded = t, this._additionsTail = t)
                        }
                        _addToChanges(t) {
                            null === this._changesHead ? this._changesHead = this._changesTail = t : (this._changesTail._nextChanged = t, this._changesTail = t)
                        }
                        _forEach(t, e) {
                            t instanceof Map ? t.forEach(e) : Object.keys(t).forEach(n => e(t[n], n))
                        }
                    }
                    class Zs {
                        constructor(t) {
                            this.key = t, this.previousValue = null, this.currentValue = null, this._nextPrevious = null, this._next = null, this._prev = null, this._nextAdded = null, this._nextRemoved = null, this._nextChanged = null
                        }
                    }
                    let Ks = (() => {
                            class t {
                                constructor(t) {
                                    this.factories = t
                                }
                                static create(e, n) {
                                    if (null != n) {
                                        const t = n.factories.slice();
                                        e = e.concat(t)
                                    }
                                    return new t(e)
                                }
                                static extend(e) {
                                    return {
                                        provide: t,
                                        useFactory: n => {
                                            if (!n) throw new Error("Cannot extend IterableDiffers without a parent injector");
                                            return t.create(e, n)
                                        },
                                        deps: [[t, new E, new v]]
                                    }
                                }
                                find(t) {
                                    const e = this.factories.find(e => e.supports(t));
                                    if (null != e) return e;
                                    throw new Error(`Cannot find a differ supporting object '${t}' of type '${n=t,n.name||typeof n}'`);
                                    var n
                                }
                            }
                            return t.\u0275prov = x({
                                token: t,
                                providedIn: "root",
                                factory: () => new t([new Vs])
                            }), t
                        })(),
                        Js = (() => {
                            class t {
                                constructor(t) {
                                    this.factories = t
                                }
                                static create(e, n) {
                                    if (n) {
                                        const t = n.factories.slice();
                                        e = e.concat(t)
                                    }
                                    return new t(e)
                                }
                                static extend(e) {
                                    return {
                                        provide: t,
                                        useFactory: n => {
                                            if (!n) throw new Error("Cannot extend KeyValueDiffers without a parent injector");
                                            return t.create(e, n)
                                        },
                                        deps: [[t, new E, new v]]
                                    }
                                }
                                find(t) {
                                    const e = this.factories.find(e => e.supports(t));
                                    if (e) return e;
                                    throw new Error(`Cannot find a differ supporting object '${t}'`)
                                }
                            }
                            return t.\u0275prov = x({
                                token: t,
                                providedIn: "root",
                                factory: () => new t([new Xs])
                            }), t
                        })();
                    const ta = [new Xs],
                        ea = new Ks([new Vs]),
                        na = new Js(ta);
                    let ra = (() => {
                        class t {}
                        return t.__NG_ELEMENT_ID__ = () => ia(t, js), t
                    })();
                    const ia = function (t, e) {
                        return ao(t, e, ye(), ge())
                    };
                    let oa = (() => {
                        class t {}
                        return t.__NG_ELEMENT_ID__ = () => sa(t, js), t
                    })();
                    const sa = function (t, e) {
                            return uo(t, e, ye(), ge())
                        },
                        aa = {};
                    class ua extends Ds {
                        constructor(t) {
                            super(), this.ngModule = t
                        }
                        resolveComponentFactory(t) {
                            const e = Lt(t);
                            return new ha(e, this.ngModule)
                        }
                    }

                    function ca(t) {
                        const e = [];
                        for (let n in t) t.hasOwnProperty(n) && e.push({
                            propName: t[n],
                            templateName: n
                        });
                        return e
                    }
                    const la = new tt("SCHEDULER_TOKEN", {
                        providedIn: "root",
                        factory: () => an
                    });
                    class ha extends Ps {
                        constructor(t, e) {
                            super(), this.componentDef = t, this.ngModule = e, this.componentType = t.type, this.selector = t.selectors.map(jr).join(","), this.ngContentSelectors = t.ngContentSelectors ? t.ngContentSelectors : [], this.isBoundToModule = !!e
                        }
                        get inputs() {
                            return ca(this.componentDef.inputs)
                        }
                        get outputs() {
                            return ca(this.componentDef.outputs)
                        }
                        create(t, e, n, r) {
                            const i = (r = r || this.ngModule) ? function (t, e) {
                                    return {
                                        get: (n, r, i) => {
                                            const o = t.get(n, aa, i);
                                            return o !== aa || r === aa ? o : e.get(n, r, i)
                                        }
                                    }
                                }(t, r.injector) : t,
                                o = i.get(ks, ee),
                                s = i.get(Fs, null),
                                a = o.createRenderer(null, this.componentDef),
                                u = this.componentDef.selectors[0][0] || "div",
                                c = n ? function (t, e, n) {
                                    if (te(t)) return t.selectRootElement(e, n === Tt.ShadowDom);
                                    let r = "string" == typeof e ? t.querySelector(e) : e;
                                    return r.textContent = "", r
                                }(a, n, this.componentDef.encapsulation) : Wr(u, o.createRenderer(null, this.componentDef), function (t) {
                                    const e = t.toLowerCase();
                                    return "svg" === e ? "http://www.w3.org/2000/svg" : "math" === e ? "http://www.w3.org/1998/MathML/" : null
                                }(u)),
                                l = this.componentDef.onPush ? 576 : 528,
                                h = {
                                    components: [],
                                    scheduler: an,
                                    clean: Pi,
                                    playerHandler: null,
                                    flags: 0
                                },
                                p = oi(0, -1, null, 1, 0, null, null, null, null, null),
                                d = Xr(null, p, h, l, null, null, o, a, s, i);
                            let f, g;
                            Ne(d, null);
                            try {
                                const t = function (t, e, n, r, i, o) {
                                    const s = n[1];
                                    n[20] = t;
                                    const a = Qr(s, null, 0, 3, null, null),
                                        u = a.mergedAttrs = e.hostAttrs;
                                    null !== u && (Po(a, u, !0), null !== t && (Xe(i, t, u), null !== a.classes && to(i, t, a.classes), null !== a.styles && Ji(i, t, a.styles)));
                                    const c = r.createRenderer(t, e),
                                        l = Xr(n, ii(e), null, e.onPush ? 64 : 16, n[20], a, r, c, void 0);
                                    return s.firstCreatePass && (yn(dn(a, n), s, e.type), gi(s, a), yi(a, n.length, 1)), Oi(n, l), n[20] = l
                                }(c, this.componentDef, d, o, a);
                                if (c)
                                    if (n) Xe(a, c, ["ng-version", Hs.full]);
                                    else {
                                        const {
                                            attrs: t,
                                            classes: e
                                        } = function (t) {
                                            const e = [],
                                                n = [];
                                            let r = 1,
                                                i = 2;
                                            for (; r < t.length;) {
                                                let o = t[r];
                                                if ("string" == typeof o) 2 === i ? "" !== o && e.push(o, t[++r]) : 8 === i && n.push(o);
                                                else {
                                                    if (!Ar(i)) break;
                                                    i = o
                                                }
                                                r++
                                            }
                                            return {
                                                attrs: e,
                                                classes: n
                                            }
                                        }(this.componentDef.selectors[0]);
                                        t && Xe(a, c, t), e && e.length > 0 && to(a, c, e.join(" "))
                                    } if (g = oe(p, 0), void 0 !== e) {
                                    const t = g.projection = [];
                                    for (let n = 0; n < this.ngContentSelectors.length; n++) {
                                        const r = e[n];
                                        t.push(null != r ? Array.from(r) : null)
                                    }
                                }
                                f = function (t, e, n, r, i) {
                                    const o = n[1],
                                        s = function (t, e, n) {
                                            const r = ye();
                                            t.firstCreatePass && (n.providersResolver && n.providersResolver(n), fi(t, r, 1), bi(t, e, n));
                                            const i = En(e, t, e.length - 1, r);
                                            _r(i, e);
                                            const o = ie(r, e);
                                            return o && _r(o, e), i
                                        }(o, n, e);
                                    r.components.push(s), t[8] = s, i && i.forEach(t => t(s, e)), e.contentQueries && e.contentQueries(1, s, n.length - 1);
                                    const a = ye();
                                    if (o.firstCreatePass && (null !== e.hostBindings || null !== e.hostAttrs)) {
                                        Ue(a.index - 20);
                                        const t = n[1];
                                        hi(t, e), pi(t, n, e.hostVars), di(e, s)
                                    }
                                    return s
                                }(t, this.componentDef, d, h, [ms]), Zr(p, d, null)
                            } finally {
                                Le()
                            }
                            const m = new pa(this.componentType, f, so(js, g, d), d, g);
                            return p.node.child = g, m
                        }
                    }
                    class pa extends class {} {
                        constructor(t, e, n, r, i) {
                            super(), this.location = n, this._rootLView = r, this._tNode = i, this.destroyCbs = [], this.instance = e, this.hostView = this.changeDetectorRef = new no(r),
                                function (t, e, n, r) {
                                    let i = t.node;
                                    null == i && (t.node = i = ai(0, null, 2, -1, null, null)), r[6] = i
                                }(r[1], 0, 0, r), this.componentType = t
                        }
                        get injector() {
                            return new On(this._tNode, this._rootLView)
                        }
                        destroy() {
                            this.destroyCbs && (this.destroyCbs.forEach(t => t()), this.destroyCbs = null, !this.hostView.destroyed && this.hostView.destroy())
                        }
                        onDestroy(t) {
                            this.destroyCbs && this.destroyCbs.push(t)
                        }
                    }
                    const da = void 0;
                    var fa = ["en", [["a", "p"], ["AM", "PM"], da], [["AM", "PM"], da, da], [["S", "M", "T", "W", "T", "F", "S"], ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]], da, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]], da, [["B", "A"], ["BC", "AD"], ["Before Christ", "Anno Domini"]], 0, [6, 0], ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"], ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"], ["{1}, {0}", da, "{1} 'at' {0}", da], [".", ",", ";", "%", "+", "-", "E", "\xd7", "\u2030", "\u221e", "NaN", ":"], ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"], "USD", "$", "US Dollar", {}, "ltr", function (t) {
                        let e = Math.floor(Math.abs(t)),
                            n = t.toString().replace(/^[^.]*\.?/, "").length;
                        return 1 === e && 0 === n ? 1 : 5
                    }];
                    let ga = {};

                    function ma(t, e, n) {
                        "string" != typeof e && (n = e, e = t[_a.LocaleId]), e = e.toLowerCase().replace(/_/g, "-"), ga[e] = t, n && (ga[e][_a.ExtraData] = n)
                    }

                    function ya(t) {
                        const e = function (t) {
                            return t.toLowerCase().replace(/_/g, "-")
                        }(t);
                        let n = va(e);
                        if (n) return n;
                        const r = e.split("-")[0];
                        if (n = va(r), n) return n;
                        if ("en" === r) return fa;
                        throw new Error(`Missing locale data for the locale "${t}".`)
                    }

                    function ba(t) {
                        return ya(t)[_a.CurrencyCode] || null
                    }

                    function wa(t) {
                        return ya(t)[_a.PluralCase]
                    }

                    function va(t) {
                        return t in ga || (ga[t] = G.ng && G.ng.common && G.ng.common.locales && G.ng.common.locales[t]), ga[t]
                    }
                    var _a = function (t) {
                        return t[t.LocaleId = 0] = "LocaleId", t[t.DayPeriodsFormat = 1] = "DayPeriodsFormat", t[t.DayPeriodsStandalone = 2] = "DayPeriodsStandalone", t[t.DaysFormat = 3] = "DaysFormat", t[t.DaysStandalone = 4] = "DaysStandalone", t[t.MonthsFormat = 5] = "MonthsFormat", t[t.MonthsStandalone = 6] = "MonthsStandalone", t[t.Eras = 7] = "Eras", t[t.FirstDayOfWeek = 8] = "FirstDayOfWeek", t[t.WeekendRange = 9] = "WeekendRange", t[t.DateFormat = 10] = "DateFormat", t[t.TimeFormat = 11] = "TimeFormat", t[t.DateTimeFormat = 12] = "DateTimeFormat", t[t.NumberSymbols = 13] = "NumberSymbols", t[t.NumberFormats = 14] = "NumberFormats", t[t.CurrencyCode = 15] = "CurrencyCode", t[t.CurrencySymbol = 16] = "CurrencySymbol", t[t.CurrencyName = 17] = "CurrencyName", t[t.Currencies = 18] = "Currencies", t[t.Directionality = 19] = "Directionality", t[t.PluralCase = 20] = "PluralCase", t[t.ExtraData = 21] = "ExtraData", t
                    }({});
                    let Ea = "en-US";

                    function Ta(t) {
                        var e, n;
                        n = "Expected localeId to be defined", null == (e = t) && function (t, e, n, r) {
                            throw new Error("ASSERTION ERROR: " + t + ` [Expected=> null != ${e} <=Actual]`)
                        }(n, e), "string" == typeof t && (Ea = t.toLowerCase().replace(/_/g, "-"))
                    }
                    const Ca = new Map;
                    class Oa extends ft {
                        constructor(t, e) {
                            super(), this._parent = e, this._bootstrapComponents = [], this.injector = this, this.destroyCbs = [], this.componentFactoryResolver = new ua(this);
                            const n = Ut(t),
                                r = t[Z] || null;
                            r && Ta(r), this._bootstrapComponents = cn(n.bootstrap), this._r3Injector = vo(t, e, [{
                                provide: ft,
                                useValue: this
                            }, {
                                provide: Ds,
                                useValue: this.componentFactoryResolver
                            }], L(t)), this._r3Injector._resolveInjectorDefTypes(), this.instance = this.get(t)
                        }
                        get(t, e = Io.THROW_IF_NOT_FOUND, n = T.Default) {
                            return t === Io || t === ft || t === et ? this : this._r3Injector.get(t, e, n)
                        }
                        destroy() {
                            const t = this._r3Injector;
                            !t.destroyed && t.destroy(), this.destroyCbs.forEach(t => t()), this.destroyCbs = null
                        }
                        onDestroy(t) {
                            this.destroyCbs.push(t)
                        }
                    }
                    class xa extends gt {
                        constructor(t) {
                            super(), this.moduleType = t, null !== Ut(t) && function t(e) {
                                if (null !== e.\u0275mod.id) {
                                    const t = e.\u0275mod.id;
                                    (function (t, e, n) {
                                        if (e && e !== n) throw new Error(`Duplicate module registered for ${t} - ${L(e)} vs ${L(e.name)}`)
                                    })(t, Ca.get(t), e), Ca.set(t, e)
                                }
                                let n = e.\u0275mod.imports;
                                n instanceof Function && (n = n()), n && n.forEach(e => t(e))
                            }(t)
                        }
                        create(t) {
                            return new Oa(this.moduleType, t)
                        }
                    }

                    function Sa(t, e) {
                        const n = me();
                        let r;
                        const i = t + 20;
                        n.firstCreatePass ? (r = function (t, e) {
                            if (e)
                                for (let n = e.length - 1; n >= 0; n--) {
                                    const r = e[n];
                                    if (t === r.name) return r
                                }
                            throw new Error(`The pipe '${t}' could not be found!`)
                        }(e, n.pipeRegistry), n.data[i] = r, r.onDestroy && (n.destroyHooks || (n.destroyHooks = [])).push(i, r.onDestroy)) : r = n.data[i];
                        const o = r.factory || (r.factory = Mt(r.type)),
                            s = ut(Ho),
                            a = hn(!1),
                            u = o();
                        return hn(a), ut(s),
                            function (t, e, n, r) {
                                const i = n + 20;
                                i >= t.data.length && (t.data[i] = null, t.blueprint[i] = null), e[i] = r
                            }(n, ge(), t, u), u
                    }

                    function Ia(t, e, n, r) {
                        const i = ge(),
                            o = function (t, e) {
                                return t[e + 20]
                            }(i, t);
                        return function (t, e) {
                            return jo.isWrapped(e) && (e = jo.unwrap(e), t[Te()] = Rr), e
                        }(i, function (t, e) {
                            return t[1].data[e + 20].pure
                        }(i, t) ? function (t, e, n, r, i, o, s) {
                            const a = e + n;
                            return Mo(t, a, i, o) ? function (t, e, n) {
                                return t[e] = n
                            }(t, a + 2, s ? r.call(s, i, o) : r(i, o)) : function (t, e) {
                                const n = t[e];
                                return n === Rr ? void 0 : n
                            }(t, a + 2)
                        }(i, function () {
                            const t = de.lFrame;
                            let e = t.bindingRootIndex;
                            return -1 === e && (e = t.bindingRootIndex = t.tView.bindingStartIndex), e
                        }(), e, o.transform, n, r, o) : o.transform(n, r))
                    }
                    const Aa = class extends r.a {
                        constructor(t = !1) {
                            super(), this.__isAsync = t
                        }
                        emit(t) {
                            super.next(t)
                        }
                        subscribe(t, e, n) {
                            let r, o = t => null,
                                s = () => null;
                            t && "object" == typeof t ? (r = this.__isAsync ? e => {
                                setTimeout(() => t.next(e))
                            } : e => {
                                t.next(e)
                            }, t.error && (o = this.__isAsync ? e => {
                                setTimeout(() => t.error(e))
                            } : e => {
                                t.error(e)
                            }), t.complete && (s = this.__isAsync ? () => {
                                setTimeout(() => t.complete())
                            } : () => {
                                t.complete()
                            })) : (r = this.__isAsync ? e => {
                                setTimeout(() => t(e))
                            } : e => {
                                t(e)
                            }, e && (o = this.__isAsync ? t => {
                                setTimeout(() => e(t))
                            } : t => {
                                e(t)
                            }), n && (s = this.__isAsync ? () => {
                                setTimeout(() => n())
                            } : () => {
                                n()
                            }));
                            const a = super.subscribe(r, o, s);
                            return t instanceof i.a && t.add(a), a
                        }
                    };

                    function Pa() {
                        return this._results[Do()]()
                    }
                    class Na {
                        constructor() {
                            this.dirty = !0, this._results = [], this.changes = new Aa, this.length = 0;
                            const t = Do(),
                                e = Na.prototype;
                            e[t] || (e[t] = Pa)
                        }
                        map(t) {
                            return this._results.map(t)
                        }
                        filter(t) {
                            return this._results.filter(t)
                        }
                        find(t) {
                            return this._results.find(t)
                        }
                        reduce(t, e) {
                            return this._results.reduce(t, e)
                        }
                        forEach(t) {
                            this._results.forEach(t)
                        }
                        some(t) {
                            return this._results.some(t)
                        }
                        toArray() {
                            return this._results.slice()
                        }
                        toString() {
                            return this._results.toString()
                        }
                        reset(t) {
                            this._results = function t(e, n) {
                                void 0 === n && (n = e);
                                for (let r = 0; r < e.length; r++) {
                                    let i = e[r];
                                    Array.isArray(i) ? (n === e && (n = e.slice(0, r)), t(i, n)) : n !== e && n.push(i)
                                }
                                return n
                            }(t), this.dirty = !1, this.length = this._results.length, this.last = this._results[this.length - 1], this.first = this._results[0]
                        }
                        notifyOnChanges() {
                            this.changes.emit(this)
                        }
                        setDirty() {
                            this.dirty = !0
                        }
                        destroy() {
                            this.changes.complete(), this.changes.unsubscribe()
                        }
                    }
                    class Da {
                        constructor(t) {
                            this.queryList = t, this.matches = null
                        }
                        clone() {
                            return new Da(this.queryList)
                        }
                        setDirty() {
                            this.queryList.setDirty()
                        }
                    }
                    class ja {
                        constructor(t = []) {
                            this.queries = t
                        }
                        createEmbeddedView(t) {
                            const e = t.queries;
                            if (null !== e) {
                                const n = null !== t.contentQueries ? t.contentQueries[0] : e.length,
                                    r = [];
                                for (let t = 0; t < n; t++) {
                                    const n = e.getByIndex(t);
                                    r.push(this.queries[n.indexInDeclarationView].clone())
                                }
                                return new ja(r)
                            }
                            return null
                        }
                        insertView(t) {
                            this.dirtyQueriesWithMatches(t)
                        }
                        detachView(t) {
                            this.dirtyQueriesWithMatches(t)
                        }
                        dirtyQueriesWithMatches(t) {
                            for (let e = 0; e < this.queries.length; e++) null !== Wa(t, e).matches && this.queries[e].setDirty()
                        }
                    }
                    class Ra {
                        constructor(t, e, n, r = null) {
                            this.predicate = t, this.descendants = e, this.isStatic = n, this.read = r
                        }
                    }
                    class ka {
                        constructor(t = []) {
                            this.queries = t
                        }
                        elementStart(t, e) {
                            for (let n = 0; n < this.queries.length; n++) this.queries[n].elementStart(t, e)
                        }
                        elementEnd(t) {
                            for (let e = 0; e < this.queries.length; e++) this.queries[e].elementEnd(t)
                        }
                        embeddedTView(t) {
                            let e = null;
                            for (let n = 0; n < this.length; n++) {
                                const r = null !== e ? e.length : 0,
                                    i = this.getByIndex(n).embeddedTView(t, r);
                                i && (i.indexInDeclarationView = n, null !== e ? e.push(i) : e = [i])
                            }
                            return null !== e ? new ka(e) : null
                        }
                        template(t, e) {
                            for (let n = 0; n < this.queries.length; n++) this.queries[n].template(t, e)
                        }
                        getByIndex(t) {
                            return this.queries[t]
                        }
                        get length() {
                            return this.queries.length
                        }
                        track(t) {
                            this.queries.push(t)
                        }
                    }
                    class La {
                        constructor(t, e = -1) {
                            this.metadata = t, this.matches = null, this.indexInDeclarationView = -1, this.crossesNgTemplate = !1, this._appliesToNextNode = !0, this._declarationNodeIndex = e
                        }
                        elementStart(t, e) {
                            this.isApplyingToNode(e) && this.matchTNode(t, e)
                        }
                        elementEnd(t) {
                            this._declarationNodeIndex === t.index && (this._appliesToNextNode = !1)
                        }
                        template(t, e) {
                            this.elementStart(t, e)
                        }
                        embeddedTView(t, e) {
                            return this.isApplyingToNode(t) ? (this.crossesNgTemplate = !0, this.addMatch(-t.index, e), new La(this.metadata)) : null
                        }
                        isApplyingToNode(t) {
                            if (this._appliesToNextNode && !1 === this.metadata.descendants) {
                                const e = this._declarationNodeIndex;
                                let n = t.parent;
                                for (; null !== n && 4 === n.type && n.index !== e;) n = n.parent;
                                return e === (null !== n ? n.index : -1)
                            }
                            return this._appliesToNextNode
                        }
                        matchTNode(t, e) {
                            if (Array.isArray(this.metadata.predicate)) {
                                const n = this.metadata.predicate;
                                for (let r = 0; r < n.length; r++) this.matchTNodeWithReadOption(t, e, Ma(e, n[r]))
                            } else {
                                const n = this.metadata.predicate;
                                n === ra ? 0 === e.type && this.matchTNodeWithReadOption(t, e, -1) : this.matchTNodeWithReadOption(t, e, _n(e, t, n, !1, !1))
                            }
                        }
                        matchTNodeWithReadOption(t, e, n) {
                            if (null !== n) {
                                const r = this.metadata.read;
                                if (null !== r)
                                    if (r === js || r === oa || r === ra && 0 === e.type) this.addMatch(e.index, -2);
                                    else {
                                        const n = _n(e, t, r, !1, !1);
                                        null !== n && this.addMatch(e.index, n)
                                    }
                                else this.addMatch(e.index, n)
                            }
                        }
                        addMatch(t, e) {
                            null === this.matches ? this.matches = [t, e] : this.matches.push(t, e)
                        }
                    }

                    function Ma(t, e) {
                        const n = t.localNames;
                        if (null !== n)
                            for (let r = 0; r < n.length; r += 2)
                                if (n[r] === e) return n[r + 1];
                        return null
                    }

                    function Ua(t, e, n, r) {
                        return -1 === n ? function (t, e) {
                            return 3 === t.type || 4 === t.type ? so(js, t, e) : 0 === t.type ? ao(ra, js, t, e) : null
                        }(e, t) : -2 === n ? function (t, e, n) {
                            return n === js ? so(js, e, t) : n === ra ? ao(ra, js, e, t) : n === oa ? uo(oa, js, e, t) : void 0
                        }(t, e, r) : En(t, t[1], n, e)
                    }

                    function Fa(t, e, n, r) {
                        const i = e[19].queries[r];
                        if (null === i.matches) {
                            const r = t.data,
                                o = n.matches,
                                s = [];
                            for (let t = 0; t < o.length; t += 2) {
                                const i = o[t];
                                s.push(i < 0 ? null : Ua(e, r[i], o[t + 1], n.metadata.read))
                            }
                            i.matches = s
                        }
                        return i.matches
                    }

                    function Ba(t) {
                        const e = ge(),
                            n = me(),
                            r = Ie();
                        Ae(r + 1);
                        const i = Wa(n, r);
                        if (t.dirty && ue(e) === i.metadata.isStatic) {
                            if (null === i.matches) t.reset([]);
                            else {
                                const o = i.crossesNgTemplate ? function t(e, n, r, i) {
                                    const o = e.queries.getByIndex(r),
                                        s = o.matches;
                                    if (null !== s) {
                                        const a = Fa(e, n, o, r);
                                        for (let e = 0; e < s.length; e += 2) {
                                            const r = s[e];
                                            if (r > 0) i.push(a[e / 2]);
                                            else {
                                                const o = s[e + 1],
                                                    a = n[-r];
                                                for (let e = 10; e < a.length; e++) {
                                                    const n = a[e];
                                                    n[17] === n[3] && t(n[1], n, o, i)
                                                }
                                                if (null !== a[9]) {
                                                    const e = a[9];
                                                    for (let n = 0; n < e.length; n++) {
                                                        const r = e[n];
                                                        t(r[1], r, o, i)
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    return i
                                }(n, e, r, []) : Fa(n, e, i, r);
                                t.reset(o), t.notifyOnChanges()
                            }
                            return !0
                        }
                        return !1
                    }

                    function Ha(t, e, n) {
                        za(me(), ge(), t, e, n, !0)
                    }

                    function Va(t, e, n) {
                        za(me(), ge(), t, e, n, !1)
                    }

                    function za(t, e, n, r, i, o) {
                        t.firstCreatePass && (Ya(t, new Ra(n, r, o, i), -1), o && (t.staticViewQueries = !0)), Ga(t, e)
                    }

                    function qa(t, e, n, r) {
                        ! function (t, e, n, r, i, o, s, a) {
                            t.firstCreatePass && (Ya(t, new Ra(n, r, !1, i), s.index), function (t, e) {
                                const n = t.contentQueries || (t.contentQueries = []);
                                e !== (t.contentQueries.length ? n[n.length - 1] : -1) && n.push(t.queries.length - 1, e)
                            }(t, a)), Ga(t, e)
                        }(me(), ge(), e, n, r, 0, ye(), t)
                    }

                    function $a() {
                        return t = ge(), e = Ie(), t[19].queries[e].queryList;
                        var t, e
                    }

                    function Ga(t, e) {
                        const n = new Na;
                        si(t, e, n, n.destroy), null === e[19] && (e[19] = new ja), e[19].queries.push(new Da(n))
                    }

                    function Ya(t, e, n) {
                        null === t.queries && (t.queries = new ka), t.queries.track(new La(e, n))
                    }

                    function Wa(t, e) {
                        return t.queries.getByIndex(e)
                    }

                    function Xa(t = T.Default) {
                        const e = co(!0);
                        if (null != e || t & T.Optional) return e;
                        throw new Error("No provider for ChangeDetectorRef!")
                    }
                    const Qa = new tt("Application Initializer");
                    let Za = (() => {
                        class t {
                            constructor(t) {
                                this.appInits = t, this.initialized = !1, this.done = !1, this.donePromise = new Promise((t, e) => {
                                    this.resolve = t, this.reject = e
                                })
                            }
                            runInitializers() {
                                if (this.initialized) return;
                                const t = [],
                                    e = () => {
                                        this.done = !0, this.resolve()
                                    };
                                if (this.appInits)
                                    for (let n = 0; n < this.appInits.length; n++) {
                                        const e = this.appInits[n]();
                                        Qo(e) && t.push(e)
                                    }
                                Promise.all(t).then(() => {
                                    e()
                                }).catch(t => {
                                    this.reject(t)
                                }), 0 === t.length && e(), this.initialized = !0
                            }
                        }
                        return t.\u0275fac = function (e) {
                            return new(e || t)(lt(Qa, 8))
                        }, t.\u0275prov = x({
                            token: t,
                            factory: t.\u0275fac
                        }), t
                    })();
                    const Ka = new tt("AppId"),
                        Ja = {
                            provide: Ka,
                            useFactory: function () {
                                return `${tu()}${tu()}${tu()}`
                            },
                            deps: []
                        };

                    function tu() {
                        return String.fromCharCode(97 + Math.floor(25 * Math.random()))
                    }
                    const eu = new tt("Platform Initializer"),
                        nu = new tt("Platform ID"),
                        ru = new tt("appBootstrapListener");
                    let iu = (() => {
                        class t {
                            log(t) {
                                console.log(t)
                            }
                            warn(t) {
                                console.warn(t)
                            }
                        }
                        return t.\u0275fac = function (e) {
                            return new(e || t)
                        }, t.\u0275prov = x({
                            token: t,
                            factory: t.\u0275fac
                        }), t
                    })();
                    const ou = new tt("LocaleId"),
                        su = new tt("DefaultCurrencyCode");
                    class au {
                        constructor(t, e) {
                            this.ngModuleFactory = t, this.componentFactories = e
                        }
                    }
                    const uu = function (t) {
                            return new xa(t)
                        },
                        cu = uu,
                        lu = function (t) {
                            return Promise.resolve(uu(t))
                        },
                        hu = function (t) {
                            const e = uu(t),
                                n = cn(Ut(t).declarations).reduce((t, e) => {
                                    const n = Lt(e);
                                    return n && t.push(new ha(n)), t
                                }, []);
                            return new au(e, n)
                        },
                        pu = hu,
                        du = function (t) {
                            return Promise.resolve(hu(t))
                        };
                    let fu = (() => {
                        class t {
                            constructor() {
                                this.compileModuleSync = cu, this.compileModuleAsync = lu, this.compileModuleAndAllComponentsSync = pu, this.compileModuleAndAllComponentsAsync = du
                            }
                            clearCache() {}
                            clearCacheFor(t) {}
                            getModuleId(t) {}
                        }
                        return t.\u0275fac = function (e) {
                            return new(e || t)
                        }, t.\u0275prov = x({
                            token: t,
                            factory: t.\u0275fac
                        }), t
                    })();
                    const gu = (() => Promise.resolve(0))();

                    function mu(t) {
                        "undefined" == typeof Zone ? gu.then(() => {
                            t && t.apply(null, null)
                        }) : Zone.current.scheduleMicroTask("scheduleMicrotask", t)
                    }
                    class yu {
                        constructor({
                            enableLongStackTrace: t = !1,
                            shouldCoalesceEventChangeDetection: e = !1
                        }) {
                            if (this.hasPendingMacrotasks = !1, this.hasPendingMicrotasks = !1, this.isStable = !0, this.onUnstable = new Aa(!1), this.onMicrotaskEmpty = new Aa(!1), this.onStable = new Aa(!1), this.onError = new Aa(!1), "undefined" == typeof Zone) throw new Error("In this configuration Angular requires Zone.js");
                            Zone.assertZonePatched(), this._nesting = 0, this._outer = this._inner = Zone.current, Zone.wtfZoneSpec && (this._inner = this._inner.fork(Zone.wtfZoneSpec)), Zone.TaskTrackingZoneSpec && (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec)), t && Zone.longStackTraceZoneSpec && (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)), this.shouldCoalesceEventChangeDetection = e, this.lastRequestAnimationFrameId = -1, this.nativeRequestAnimationFrame = function () {
                                    let t = G.requestAnimationFrame,
                                        e = G.cancelAnimationFrame;
                                    if ("undefined" != typeof Zone && t && e) {
                                        const n = t[Zone.__symbol__("OriginalDelegate")];
                                        n && (t = n);
                                        const r = e[Zone.__symbol__("OriginalDelegate")];
                                        r && (e = r)
                                    }
                                    return {
                                        nativeRequestAnimationFrame: t,
                                        nativeCancelAnimationFrame: e
                                    }
                                }().nativeRequestAnimationFrame,
                                function (t) {
                                    const e = !!t.shouldCoalesceEventChangeDetection && t.nativeRequestAnimationFrame && (() => {
                                        ! function (t) {
                                            -1 === t.lastRequestAnimationFrameId && (t.lastRequestAnimationFrameId = t.nativeRequestAnimationFrame.call(G, () => {
                                                t.fakeTopEventTask || (t.fakeTopEventTask = Zone.root.scheduleEventTask("fakeTopEventTask", () => {
                                                    t.lastRequestAnimationFrameId = -1, _u(t), vu(t)
                                                }, void 0, () => {}, () => {})), t.fakeTopEventTask.invoke()
                                            }), _u(t))
                                        }(t)
                                    });
                                    t._inner = t._inner.fork({
                                        name: "angular",
                                        properties: {
                                            isAngularZone: !0,
                                            maybeDelayChangeDetection: e
                                        },
                                        onInvokeTask: (n, r, i, o, s, a) => {
                                            try {
                                                return Eu(t), n.invokeTask(i, o, s, a)
                                            } finally {
                                                e && "eventTask" === o.type && e(), Tu(t)
                                            }
                                        },
                                        onInvoke: (e, n, r, i, o, s, a) => {
                                            try {
                                                return Eu(t), e.invoke(r, i, o, s, a)
                                            } finally {
                                                Tu(t)
                                            }
                                        },
                                        onHasTask: (e, n, r, i) => {
                                            e.hasTask(r, i), n === r && ("microTask" == i.change ? (t._hasPendingMicrotasks = i.microTask, _u(t), vu(t)) : "macroTask" == i.change && (t.hasPendingMacrotasks = i.macroTask))
                                        },
                                        onHandleError: (e, n, r, i) => (e.handleError(r, i), t.runOutsideAngular(() => t.onError.emit(i)), !1)
                                    })
                                }(this)
                        }
                        static isInAngularZone() {
                            return !0 === Zone.current.get("isAngularZone")
                        }
                        static assertInAngularZone() {
                            if (!yu.isInAngularZone()) throw new Error("Expected to be in Angular Zone, but it is not!")
                        }
                        static assertNotInAngularZone() {
                            if (yu.isInAngularZone()) throw new Error("Expected to not be in Angular Zone, but it is!")
                        }
                        run(t, e, n) {
                            return this._inner.run(t, e, n)
                        }
                        runTask(t, e, n, r) {
                            const i = this._inner,
                                o = i.scheduleEventTask("NgZoneEvent: " + r, t, wu, bu, bu);
                            try {
                                return i.runTask(o, e, n)
                            } finally {
                                i.cancelTask(o)
                            }
                        }
                        runGuarded(t, e, n) {
                            return this._inner.runGuarded(t, e, n)
                        }
                        runOutsideAngular(t) {
                            return this._outer.run(t)
                        }
                    }

                    function bu() {}
                    const wu = {};

                    function vu(t) {
                        if (0 == t._nesting && !t.hasPendingMicrotasks && !t.isStable) try {
                            t._nesting++, t.onMicrotaskEmpty.emit(null)
                        } finally {
                            if (t._nesting--, !t.hasPendingMicrotasks) try {
                                t.runOutsideAngular(() => t.onStable.emit(null))
                            } finally {
                                t.isStable = !0
                            }
                        }
                    }

                    function _u(t) {
                        t.hasPendingMicrotasks = !!(t._hasPendingMicrotasks || t.shouldCoalesceEventChangeDetection && -1 !== t.lastRequestAnimationFrameId)
                    }

                    function Eu(t) {
                        t._nesting++, t.isStable && (t.isStable = !1, t.onUnstable.emit(null))
                    }

                    function Tu(t) {
                        t._nesting--, vu(t)
                    }
                    class Cu {
                        constructor() {
                            this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, this.onUnstable = new Aa, this.onMicrotaskEmpty = new Aa, this.onStable = new Aa, this.onError = new Aa
                        }
                        run(t, e, n) {
                            return t.apply(e, n)
                        }
                        runGuarded(t, e, n) {
                            return t.apply(e, n)
                        }
                        runOutsideAngular(t) {
                            return t()
                        }
                        runTask(t, e, n, r) {
                            return t.apply(e, n)
                        }
                    }
                    let Ou = (() => {
                            class t {
                                constructor(t) {
                                    this._ngZone = t, this._pendingCount = 0, this._isZoneStable = !0, this._didWork = !1, this._callbacks = [], this.taskTrackingZone = null, this._watchAngularEvents(), t.run(() => {
                                        this.taskTrackingZone = "undefined" == typeof Zone ? null : Zone.current.get("TaskTrackingZone")
                                    })
                                }
                                _watchAngularEvents() {
                                    this._ngZone.onUnstable.subscribe({
                                        next: () => {
                                            this._didWork = !0, this._isZoneStable = !1
                                        }
                                    }), this._ngZone.runOutsideAngular(() => {
                                        this._ngZone.onStable.subscribe({
                                            next: () => {
                                                yu.assertNotInAngularZone(), mu(() => {
                                                    this._isZoneStable = !0, this._runCallbacksIfReady()
                                                })
                                            }
                                        })
                                    })
                                }
                                increasePendingRequestCount() {
                                    return this._pendingCount += 1, this._didWork = !0, this._pendingCount
                                }
                                decreasePendingRequestCount() {
                                    if (this._pendingCount -= 1, this._pendingCount < 0) throw new Error("pending async requests below zero");
                                    return this._runCallbacksIfReady(), this._pendingCount
                                }
                                isStable() {
                                    return this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks
                                }
                                _runCallbacksIfReady() {
                                    if (this.isStable()) mu(() => {
                                        for (; 0 !== this._callbacks.length;) {
                                            let t = this._callbacks.pop();
                                            clearTimeout(t.timeoutId), t.doneCb(this._didWork)
                                        }
                                        this._didWork = !1
                                    });
                                    else {
                                        let t = this.getPendingTasks();
                                        this._callbacks = this._callbacks.filter(e => !e.updateCb || !e.updateCb(t) || (clearTimeout(e.timeoutId), !1)), this._didWork = !0
                                    }
                                }
                                getPendingTasks() {
                                    return this.taskTrackingZone ? this.taskTrackingZone.macroTasks.map(t => ({
                                        source: t.source,
                                        creationLocation: t.creationLocation,
                                        data: t.data
                                    })) : []
                                }
                                addCallback(t, e, n) {
                                    let r = -1;
                                    e && e > 0 && (r = setTimeout(() => {
                                        this._callbacks = this._callbacks.filter(t => t.timeoutId !== r), t(this._didWork, this.getPendingTasks())
                                    }, e)), this._callbacks.push({
                                        doneCb: t,
                                        timeoutId: r,
                                        updateCb: n
                                    })
                                }
                                whenStable(t, e, n) {
                                    if (n && !this.taskTrackingZone) throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?');
                                    this.addCallback(t, e, n), this._runCallbacksIfReady()
                                }
                                getPendingRequestCount() {
                                    return this._pendingCount
                                }
                                findProviders(t, e, n) {
                                    return []
                                }
                            }
                            return t.\u0275fac = function (e) {
                                return new(e || t)(lt(yu))
                            }, t.\u0275prov = x({
                                token: t,
                                factory: t.\u0275fac
                            }), t
                        })(),
                        xu = (() => {
                            class t {
                                constructor() {
                                    this._applications = new Map, Pu.addToWindow(this)
                                }
                                registerApplication(t, e) {
                                    this._applications.set(t, e)
                                }
                                unregisterApplication(t) {
                                    this._applications.delete(t)
                                }
                                unregisterAllApplications() {
                                    this._applications.clear()
                                }
                                getTestability(t) {
                                    return this._applications.get(t) || null
                                }
                                getAllTestabilities() {
                                    return Array.from(this._applications.values())
                                }
                                getAllRootElements() {
                                    return Array.from(this._applications.keys())
                                }
                                findTestabilityInTree(t, e = !0) {
                                    return Pu.findTestabilityInTree(this, t, e)
                                }
                            }
                            return t.\u0275fac = function (e) {
                                return new(e || t)
                            }, t.\u0275prov = x({
                                token: t,
                                factory: t.\u0275fac
                            }), t
                        })();
                    class Su {
                        addToWindow(t) {}
                        findTestabilityInTree(t, e, n) {
                            return null
                        }
                    }

                    function Iu(t) {
                        Pu = t
                    }
                    let Au, Pu = new Su;
                    const Nu = new tt("AllowMultipleToken");
                    class Du {
                        constructor(t, e) {
                            this.name = t, this.token = e
                        }
                    }

                    function ju(t, e, n = []) {
                        const r = "Platform: " + e,
                            i = new tt(r);
                        return (e = []) => {
                            let o = Ru();
                            if (!o || o.injector.get(Nu, !1))
                                if (t) t(n.concat(e).concat({
                                    provide: i,
                                    useValue: !0
                                }));
                                else {
                                    const t = n.concat(e).concat({
                                        provide: i,
                                        useValue: !0
                                    }, {
                                        provide: fo,
                                        useValue: "platform"
                                    });
                                    ! function (t) {
                                        if (Au && !Au.destroyed && !Au.injector.get(Nu, !1)) throw new Error("There can be only one platform. Destroy the previous one to create a new one.");
                                        Au = t.get(ku);
                                        const e = t.get(eu, null);
                                        e && e.forEach(t => t())
                                    }(Io.create({
                                        providers: t,
                                        name: r
                                    }))
                                } return function (t) {
                                const e = Ru();
                                if (!e) throw new Error("No platform exists!");
                                if (!e.injector.get(t, null)) throw new Error("A platform with a different configuration has been created. Please destroy it first.");
                                return e
                            }(i)
                        }
                    }

                    function Ru() {
                        return Au && !Au.destroyed ? Au : null
                    }
                    let ku = (() => {
                        class t {
                            constructor(t) {
                                this._injector = t, this._modules = [], this._destroyListeners = [], this._destroyed = !1
                            }
                            bootstrapModuleFactory(t, e) {
                                const n = function (t, e) {
                                        let n;
                                        return n = "noop" === t ? new Cu : ("zone.js" === t ? void 0 : t) || new yu({
                                            enableLongStackTrace: Wn(),
                                            shouldCoalesceEventChangeDetection: e
                                        }), n
                                    }(e ? e.ngZone : void 0, e && e.ngZoneEventCoalescing || !1),
                                    r = [{
                                        provide: yu,
                                        useValue: n
                                    }];
                                return n.run(() => {
                                    const e = Io.create({
                                            providers: r,
                                            parent: this.injector,
                                            name: t.moduleType.name
                                        }),
                                        i = t.create(e),
                                        o = i.injector.get(Nn, null);
                                    if (!o) throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?");
                                    return i.onDestroy(() => Uu(this._modules, i)), n.runOutsideAngular(() => n.onError.subscribe({
                                            next: t => {
                                                o.handleError(t)
                                            }
                                        })),
                                        function (t, e, n) {
                                            try {
                                                const r = n();
                                                return Qo(r) ? r.catch(n => {
                                                    throw e.runOutsideAngular(() => t.handleError(n)), n
                                                }) : r
                                            } catch (r) {
                                                throw e.runOutsideAngular(() => t.handleError(r)), r
                                            }
                                        }(o, n, () => {
                                            const t = i.injector.get(Za);
                                            return t.runInitializers(), t.donePromise.then(() => (Ta(i.injector.get(ou, "en-US") || "en-US"), this._moduleDoBootstrap(i), i))
                                        })
                                })
                            }
                            bootstrapModule(t, e = []) {
                                const n = Lu({}, e);
                                return function (t, e, n) {
                                    const r = new xa(n);
                                    return Promise.resolve(r)
                                }(0, 0, t).then(t => this.bootstrapModuleFactory(t, n))
                            }
                            _moduleDoBootstrap(t) {
                                const e = t.injector.get(Mu);
                                if (t._bootstrapComponents.length > 0) t._bootstrapComponents.forEach(t => e.bootstrap(t));
                                else {
                                    if (!t.instance.ngDoBootstrap) throw new Error(`The module ${L(t.instance.constructor)} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.`);
                                    t.instance.ngDoBootstrap(e)
                                }
                                this._modules.push(t)
                            }
                            onDestroy(t) {
                                this._destroyListeners.push(t)
                            }
                            get injector() {
                                return this._injector
                            }
                            destroy() {
                                if (this._destroyed) throw new Error("The platform has already been destroyed!");
                                this._modules.slice().forEach(t => t.destroy()), this._destroyListeners.forEach(t => t()), this._destroyed = !0
                            }
                            get destroyed() {
                                return this._destroyed
                            }
                        }
                        return t.\u0275fac = function (e) {
                            return new(e || t)(lt(Io))
                        }, t.\u0275prov = x({
                            token: t,
                            factory: t.\u0275fac
                        }), t
                    })();

                    function Lu(t, e) {
                        return Array.isArray(e) ? e.reduce(Lu, t) : Object.assign(Object.assign({}, t), e)
                    }
                    let Mu = (() => {
                        class t {
                            constructor(t, e, n, r, i, c) {
                                this._zone = t, this._console = e, this._injector = n, this._exceptionHandler = r, this._componentFactoryResolver = i, this._initStatus = c, this._bootstrapListeners = [], this._views = [], this._runningTick = !1, this._enforceNoNewChanges = !1, this._stable = !0, this.componentTypes = [], this.components = [], this._enforceNoNewChanges = Wn(), this._zone.onMicrotaskEmpty.subscribe({
                                    next: () => {
                                        this._zone.run(() => {
                                            this.tick()
                                        })
                                    }
                                });
                                const h = new o.a(t => {
                                        this._stable = this._zone.isStable && !this._zone.hasPendingMacrotasks && !this._zone.hasPendingMicrotasks, this._zone.runOutsideAngular(() => {
                                            t.next(this._stable), t.complete()
                                        })
                                    }),
                                    p = new o.a(t => {
                                        let e;
                                        this._zone.runOutsideAngular(() => {
                                            e = this._zone.onStable.subscribe(() => {
                                                yu.assertNotInAngularZone(), mu(() => {
                                                    this._stable || this._zone.hasPendingMacrotasks || this._zone.hasPendingMicrotasks || (this._stable = !0, t.next(!0))
                                                })
                                            })
                                        });
                                        const n = this._zone.onUnstable.subscribe(() => {
                                            yu.assertInAngularZone(), this._stable && (this._stable = !1, this._zone.runOutsideAngular(() => {
                                                t.next(!1)
                                            }))
                                        });
                                        return () => {
                                            e.unsubscribe(), n.unsubscribe()
                                        }
                                    });
                                this.isStable = function (...t) {
                                    let e = Number.POSITIVE_INFINITY,
                                        n = null,
                                        r = t[t.length - 1];
                                    return Object(s.a)(r) ? (n = t.pop(), t.length > 1 && "number" == typeof t[t.length - 1] && (e = t.pop())) : "number" == typeof r && (e = t.pop()), null === n && 1 === t.length && t[0] instanceof o.a ? t[0] : Object(a.a)(e)(Object(u.a)(t, n))
                                }(h, p.pipe(t => {
                                    return l()((e = m, function (t) {
                                        let n;
                                        n = "function" == typeof e ? e : function () {
                                            return e
                                        };
                                        const r = Object.create(t, f);
                                        return r.source = t, r.subjectFactory = n, r
                                    })(t));
                                    var e
                                }))
                            }
                            bootstrap(t, e) {
                                if (!this._initStatus.done) throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.");
                                let n;
                                n = t instanceof Ps ? t : this._componentFactoryResolver.resolveComponentFactory(t), this.componentTypes.push(n.componentType);
                                const r = n.isBoundToModule ? void 0 : this._injector.get(ft),
                                    i = n.create(Io.NULL, [], e || n.selector, r);
                                i.onDestroy(() => {
                                    this._unloadComponent(i)
                                });
                                const o = i.injector.get(Ou, null);
                                return o && i.injector.get(xu).registerApplication(i.location.nativeElement, o), this._loadComponent(i), Wn() && this._console.log("Angular is running in development mode. Call enableProdMode() to enable production mode."), i
                            }
                            tick() {
                                if (this._runningTick) throw new Error("ApplicationRef.tick is called recursively");
                                try {
                                    this._runningTick = !0;
                                    for (let t of this._views) t.detectChanges();
                                    if (this._enforceNoNewChanges)
                                        for (let t of this._views) t.checkNoChanges()
                                } catch (t) {
                                    this._zone.runOutsideAngular(() => this._exceptionHandler.handleError(t))
                                } finally {
                                    this._runningTick = !1
                                }
                            }
                            attachView(t) {
                                const e = t;
                                this._views.push(e), e.attachToAppRef(this)
                            }
                            detachView(t) {
                                const e = t;
                                Uu(this._views, e), e.detachFromAppRef()
                            }
                            _loadComponent(t) {
                                this.attachView(t.hostView), this.tick(), this.components.push(t), this._injector.get(ru, []).concat(this._bootstrapListeners).forEach(e => e(t))
                            }
                            _unloadComponent(t) {
                                this.detachView(t.hostView), Uu(this.components, t)
                            }
                            ngOnDestroy() {
                                this._views.slice().forEach(t => t.destroy())
                            }
                            get viewCount() {
                                return this._views.length
                            }
                        }
                        return t.\u0275fac = function (e) {
                            return new(e || t)(lt(yu), lt(iu), lt(Io), lt(Nn), lt(Ds), lt(Za))
                        }, t.\u0275prov = x({
                            token: t,
                            factory: t.\u0275fac
                        }), t
                    })();

                    function Uu(t, e) {
                        const n = t.indexOf(e);
                        n > -1 && t.splice(n, 1)
                    }
                    class Fu {}
                    class Bu {}
                    const Hu = {
                        factoryPathPrefix: "",
                        factoryPathSuffix: ".ngfactory"
                    };
                    let Vu = (() => {
                        class t {
                            constructor(t, e) {
                                this._compiler = t, this._config = e || Hu
                            }
                            load(t) {
                                return this.loadAndCompile(t)
                            }
                            loadAndCompile(t) {
                                let [e, r] = t.split("#");
                                return void 0 === r && (r = "default"), n("zn8P")(e).then(t => t[r]).then(t => zu(t, e, r)).then(t => this._compiler.compileModuleAsync(t))
                            }
                            loadFactory(t) {
                                let [e, r] = t.split("#"), i = "NgFactory";
                                return void 0 === r && (r = "default", i = ""), n("zn8P")(this._config.factoryPathPrefix + e + this._config.factoryPathSuffix).then(t => t[r + i]).then(t => zu(t, e, r))
                            }
                        }
                        return t.\u0275fac = function (e) {
                            return new(e || t)(lt(fu), lt(Bu, 8))
                        }, t.\u0275prov = x({
                            token: t,
                            factory: t.\u0275fac
                        }), t
                    })();

                    function zu(t, e, n) {
                        if (!t) throw new Error(`Cannot find '${n}' in '${e}'`);
                        return t
                    }
                    const qu = function (t) {
                            return null
                        },
                        $u = ju(null, "core", [{
                            provide: nu,
                            useValue: "unknown"
                        }, {
                            provide: ku,
                            deps: [Io]
                        }, {
                            provide: xu,
                            deps: []
                        }, {
                            provide: iu,
                            deps: []
                        }]),
                        Gu = [{
                            provide: Mu,
                            useClass: Mu,
                            deps: [yu, iu, Io, Nn, Ds, Za]
                        }, {
                            provide: la,
                            deps: [yu],
                            useFactory: function (t) {
                                let e = [];
                                return t.onStable.subscribe(() => {
                                        for (; e.length;) e.pop()()
                                    }),
                                    function (t) {
                                        e.push(t)
                                    }
                            }
                        }, {
                            provide: Za,
                            useClass: Za,
                            deps: [[new v, Qa]]
                        }, {
                            provide: fu,
                            useClass: fu,
                            deps: []
                        }, Ja, {
                            provide: Ks,
                            useFactory: function () {
                                return ea
                            },
                            deps: []
                        }, {
                            provide: Js,
                            useFactory: function () {
                                return na
                            },
                            deps: []
                        }, {
                            provide: ou,
                            useFactory: function (t) {
                                return Ta(t = t || "undefined" != typeof $localize && $localize.locale || "en-US"), t
                            },
                            deps: [[new w(ou), new v, new E]]
                        }, {
                            provide: su,
                            useValue: "USD"
                        }];
                    let Yu = (() => {
                        class t {
                            constructor(t) {}
                        }
                        return t.\u0275mod = Nt({
                            type: t
                        }), t.\u0275inj = S({
                            factory: function (e) {
                                return new(e || t)(lt(Mu))
                            },
                            providers: Gu
                        }), t
                    })()
                },
                gRHU: function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return o
                    }));
                    var r = n("2fFW"),
                        i = n("NJ4a");
                    const o = {
                        closed: !0,
                        next(t) {},
                        error(t) {
                            if (r.a.useDeprecatedSynchronousErrorHandling) throw t;
                            Object(i.a)(t)
                        },
                        complete() {}
                    }
                },
                gTaY: function (t, e) {
                    (function () {
                        "use strict";
                        var t;
                        t = new RegExp(/(?!xmlns)^.*:/), e.normalize = function (t) {
                            return t.toLowerCase()
                        }, e.firstCharLowerCase = function (t) {
                            return t.charAt(0).toLowerCase() + t.slice(1)
                        }, e.stripPrefix = function (e) {
                            return e.replace(t, "")
                        }, e.parseNumbers = function (t) {
                            return isNaN(t) || (t = t % 1 == 0 ? parseInt(t, 10) : parseFloat(t)), t
                        }, e.parseBooleans = function (t) {
                            return /^(?:true|false)$/i.test(t) && (t = "true" === t.toLowerCase()), t
                        }
                    }).call(this)
                },
                hwdV: function (t, e, n) {
                    var r = n("tjlA"),
                        i = r.Buffer;

                    function o(t, e) {
                        for (var n in t) e[n] = t[n]
                    }

                    function s(t, e, n) {
                        return i(t, e, n)
                    }
                    i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? t.exports = r : (o(r, e), e.Buffer = s), o(i, s), s.from = function (t, e, n) {
                        if ("number" == typeof t) throw new TypeError("Argument must not be a number");
                        return i(t, e, n)
                    }, s.alloc = function (t, e, n) {
                        if ("number" != typeof t) throw new TypeError("Argument must be a number");
                        var r = i(t);
                        return void 0 !== e ? "string" == typeof n ? r.fill(e, n) : r.fill(e) : r.fill(0), r
                    }, s.allocUnsafe = function (t) {
                        if ("number" != typeof t) throw new TypeError("Argument must be a number");
                        return i(t)
                    }, s.allocUnsafeSlow = function (t) {
                        if ("number" != typeof t) throw new TypeError("Argument must be a number");
                        return r.SlowBuffer(t)
                    }
                },
                i6Br: function (t, e, n) {
                    (function () {
                        var e, r;
                        e = n("n6As"), r = n("G/lS"), t.exports = function () {
                            function t() {
                                this.defaultParams = {
                                    "canonical-form": !1,
                                    "cdata-sections": !1,
                                    comments: !1,
                                    "datatype-normalization": !1,
                                    "element-content-whitespace": !0,
                                    entities: !0,
                                    "error-handler": new e,
                                    infoset: !0,
                                    "validate-if-schema": !1,
                                    namespaces: !0,
                                    "namespace-declarations": !0,
                                    "normalize-characters": !1,
                                    "schema-location": "",
                                    "schema-type": "",
                                    "split-cdata-sections": !0,
                                    validate: !1,
                                    "well-formed": !0
                                }, this.params = Object.create(this.defaultParams)
                            }
                            return Object.defineProperty(t.prototype, "parameterNames", {
                                get: function () {
                                    return new r(Object.keys(this.defaultParams))
                                }
                            }), t.prototype.getParameter = function (t) {
                                return this.params.hasOwnProperty(t) ? this.params[t] : null
                            }, t.prototype.canSetParameter = function (t, e) {
                                return !0
                            }, t.prototype.setParameter = function (t, e) {
                                return null != e ? this.params[t] = e : delete this.params[t]
                            }, t
                        }()
                    }).call(this)
                },
                iTBR: function (t, e, n) {
                    (function () {
                        var e, r, i = {}.hasOwnProperty;
                        e = n("Bl63"), r = n("V4+3"), t.exports = function (t) {
                            function n(t, r) {
                                if (n.__super__.constructor.call(this, t), null == r) throw new Error("Missing comment text. " + this.debugInfo());
                                this.name = "#comment", this.type = e.Comment, this.value = this.stringify.comment(r)
                            }
                            return function (t, e) {
                                for (var n in e) i.call(e, n) && (t[n] = e[n]);

                                function r() {
                                    this.constructor = t
                                }
                                r.prototype = e.prototype, t.prototype = new r, t.__super__ = e.prototype
                            }(n, t), n.prototype.clone = function () {
                                return Object.create(this)
                            }, n.prototype.toString = function (t) {
                                return this.options.writer.comment(this, this.options.writer.filterOptions(t))
                            }, n
                        }(r)
                    }).call(this)
                },
                j0oL: function (t, e) {
                    function n(t) {
                        if (t) return function (t) {
                            for (var e in n.prototype) t[e] = n.prototype[e];
                            return t
                        }(t)
                    }
                    t.exports = n, n.prototype.on = n.prototype.addEventListener = function (t, e) {
                        return this._callbacks = this._callbacks || {}, (this._callbacks[t] = this._callbacks[t] || []).push(e), this
                    }, n.prototype.once = function (t, e) {
                        var n = this;

                        function r() {
                            n.off(t, r), e.apply(this, arguments)
                        }
                        return this._callbacks = this._callbacks || {}, r.fn = e, this.on(t, r), this
                    }, n.prototype.off = n.prototype.removeListener = n.prototype.removeAllListeners = n.prototype.removeEventListener = function (t, e) {
                        if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
                        var n, r = this._callbacks[t];
                        if (!r) return this;
                        if (1 == arguments.length) return delete this._callbacks[t], this;
                        for (var i = 0; i < r.length; i++)
                            if ((n = r[i]) === e || n.fn === e) {
                                r.splice(i, 1);
                                break
                            } return this
                    }, n.prototype.emit = function (t) {
                        this._callbacks = this._callbacks || {};
                        var e = [].slice.call(arguments, 1),
                            n = this._callbacks[t];
                        if (n)
                            for (var r = 0, i = (n = n.slice(0)).length; r < i; ++r) n[r].apply(this, e);
                        return this
                    }, n.prototype.listeners = function (t) {
                        return this._callbacks = this._callbacks || {}, this._callbacks[t] || []
                    }, n.prototype.hasListeners = function (t) {
                        return !!this.listeners(t).length
                    }
                },
                jZKg: function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return o
                    }));
                    var r = n("HDdC"),
                        i = n("quSY");

                    function o(t, e) {
                        return new r.a(n => {
                            const r = new i.a;
                            let o = 0;
                            return r.add(e.schedule((function () {
                                o !== t.length ? (n.next(t[o++]), n.closed || r.add(this.schedule())) : n.complete()
                            }))), r
                        })
                    }
                },
                kJWO: function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return r
                    }));
                    const r = (() => "function" == typeof Symbol && Symbol.observable || "@@observable")()
                },
                "kVK+": function (t, e) {
                    e.read = function (t, e, n, r, i) {
                        var o, s, a = 8 * i - r - 1,
                            u = (1 << a) - 1,
                            c = u >> 1,
                            l = -7,
                            h = n ? i - 1 : 0,
                            p = n ? -1 : 1,
                            d = t[e + h];
                        for (h += p, o = d & (1 << -l) - 1, d >>= -l, l += a; l > 0; o = 256 * o + t[e + h], h += p, l -= 8);
                        for (s = o & (1 << -l) - 1, o >>= -l, l += r; l > 0; s = 256 * s + t[e + h], h += p, l -= 8);
                        if (0 === o) o = 1 - c;
                        else {
                            if (o === u) return s ? NaN : 1 / 0 * (d ? -1 : 1);
                            s += Math.pow(2, r), o -= c
                        }
                        return (d ? -1 : 1) * s * Math.pow(2, o - r)
                    }, e.write = function (t, e, n, r, i, o) {
                        var s, a, u, c = 8 * o - i - 1,
                            l = (1 << c) - 1,
                            h = l >> 1,
                            p = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                            d = r ? 0 : o - 1,
                            f = r ? 1 : -1,
                            g = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
                        for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, s = l) : (s = Math.floor(Math.log(e) / Math.LN2), e * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), (e += s + h >= 1 ? p / u : p * Math.pow(2, 1 - h)) * u >= 2 && (s++, u /= 2), s + h >= l ? (a = 0, s = l) : s + h >= 1 ? (a = (e * u - 1) * Math.pow(2, i), s += h) : (a = e * Math.pow(2, h - 1) * Math.pow(2, i), s = 0)); i >= 8; t[n + d] = 255 & a, d += f, a /= 256, i -= 8);
                        for (s = s << i | a, c += i; c > 0; t[n + d] = 255 & s, d += f, s /= 256, c -= 8);
                        t[n + d - f] |= 128 * g
                    }
                },
                kud4: function (t, e, n) {
                    (function () {
                        var e, r, i, o, s, a, u, c, l, h, p, d, f, g, m, y, b, w = {}.hasOwnProperty;
                        b = n("RfOz"), y = b.isObject, m = b.isFunction, g = b.isEmpty, f = b.getValue, c = null, i = null, o = null, s = null, a = null, p = null, d = null, h = null, u = null, r = null, l = null, e = null, t.exports = function () {
                            function t(t) {
                                this.parent = t, this.parent && (this.options = this.parent.options, this.stringify = this.parent.stringify), this.value = null, this.children = [], this.baseURI = null, c || (c = n("uO6I"), i = n("U26E"), o = n("iTBR"), s = n("Uo1N"), a = n("1+OA"), p = n("UNeu"), d = n("nS9B"), h = n("8BaB"), u = n("Dh7r"), r = n("Bl63"), l = n("BMbm"), n("XCq/"), e = n("0dQ4"))
                            }
                            return Object.defineProperty(t.prototype, "nodeName", {
                                get: function () {
                                    return this.name
                                }
                            }), Object.defineProperty(t.prototype, "nodeType", {
                                get: function () {
                                    return this.type
                                }
                            }), Object.defineProperty(t.prototype, "nodeValue", {
                                get: function () {
                                    return this.value
                                }
                            }), Object.defineProperty(t.prototype, "parentNode", {
                                get: function () {
                                    return this.parent
                                }
                            }), Object.defineProperty(t.prototype, "childNodes", {
                                get: function () {
                                    return this.childNodeList && this.childNodeList.nodes || (this.childNodeList = new l(this.children)), this.childNodeList
                                }
                            }), Object.defineProperty(t.prototype, "firstChild", {
                                get: function () {
                                    return this.children[0] || null
                                }
                            }), Object.defineProperty(t.prototype, "lastChild", {
                                get: function () {
                                    return this.children[this.children.length - 1] || null
                                }
                            }), Object.defineProperty(t.prototype, "previousSibling", {
                                get: function () {
                                    var t;
                                    return t = this.parent.children.indexOf(this), this.parent.children[t - 1] || null
                                }
                            }), Object.defineProperty(t.prototype, "nextSibling", {
                                get: function () {
                                    var t;
                                    return t = this.parent.children.indexOf(this), this.parent.children[t + 1] || null
                                }
                            }), Object.defineProperty(t.prototype, "ownerDocument", {
                                get: function () {
                                    return this.document() || null
                                }
                            }), Object.defineProperty(t.prototype, "textContent", {
                                get: function () {
                                    var t, e, n, i, o;
                                    if (this.nodeType === r.Element || this.nodeType === r.DocumentFragment) {
                                        for (o = "", e = 0, n = (i = this.children).length; e < n; e++)(t = i[e]).textContent && (o += t.textContent);
                                        return o
                                    }
                                    return null
                                },
                                set: function (t) {
                                    throw new Error("This DOM method is not implemented." + this.debugInfo())
                                }
                            }), t.prototype.setParent = function (t) {
                                var e, n, r, i;
                                for (this.parent = t, t && (this.options = t.options, this.stringify = t.stringify), i = [], e = 0, n = (r = this.children).length; e < n; e++) i.push(r[e].setParent(this));
                                return i
                            }, t.prototype.element = function (t, e, n) {
                                var r, i, o, s, a, u, c, l, h, p;
                                if (a = null, null === e && null == n && (e = (l = [{}, null])[0], n = l[1]), null == e && (e = {}), e = f(e), y(e) || (n = (h = [e, n])[0], e = h[1]), null != t && (t = f(t)), Array.isArray(t))
                                    for (i = 0, u = t.length; i < u; i++) a = this.element(t[i]);
                                else if (m(t)) a = this.element(t.apply());
                                else if (y(t)) {
                                    for (s in t)
                                        if (w.call(t, s))
                                            if (m(p = t[s]) && (p = p.apply()), !this.options.ignoreDecorators && this.stringify.convertAttKey && 0 === s.indexOf(this.stringify.convertAttKey)) a = this.attribute(s.substr(this.stringify.convertAttKey.length), p);
                                            else if (!this.options.separateArrayItems && Array.isArray(p) && g(p)) a = this.dummy();
                                    else if (y(p) && g(p)) a = this.element(s);
                                    else if (this.options.keepNullNodes || null != p)
                                        if (!this.options.separateArrayItems && Array.isArray(p))
                                            for (o = 0, c = p.length; o < c; o++)(r = {})[s] = p[o], a = this.element(r);
                                        else y(p) ? !this.options.ignoreDecorators && this.stringify.convertTextKey && 0 === s.indexOf(this.stringify.convertTextKey) ? a = this.element(p) : (a = this.element(s)).element(p) : a = this.element(s, p);
                                    else a = this.dummy()
                                } else a = this.options.keepNullNodes || null !== n ? !this.options.ignoreDecorators && this.stringify.convertTextKey && 0 === t.indexOf(this.stringify.convertTextKey) ? this.text(n) : !this.options.ignoreDecorators && this.stringify.convertCDataKey && 0 === t.indexOf(this.stringify.convertCDataKey) ? this.cdata(n) : !this.options.ignoreDecorators && this.stringify.convertCommentKey && 0 === t.indexOf(this.stringify.convertCommentKey) ? this.comment(n) : !this.options.ignoreDecorators && this.stringify.convertRawKey && 0 === t.indexOf(this.stringify.convertRawKey) ? this.raw(n) : !this.options.ignoreDecorators && this.stringify.convertPIKey && 0 === t.indexOf(this.stringify.convertPIKey) ? this.instruction(t.substr(this.stringify.convertPIKey.length), n) : this.node(t, e, n) : this.dummy();
                                if (null == a) throw new Error("Could not create any elements with: " + t + ". " + this.debugInfo());
                                return a
                            }, t.prototype.insertBefore = function (t, e, n) {
                                var r, i, o, s, a;
                                if (null != t ? t.type : void 0) return s = e, (o = t).setParent(this), s ? (i = children.indexOf(s), a = children.splice(i), children.push(o), Array.prototype.push.apply(children, a)) : children.push(o), o;
                                if (this.isRoot) throw new Error("Cannot insert elements at root level. " + this.debugInfo(t));
                                return i = this.parent.children.indexOf(this), a = this.parent.children.splice(i), r = this.parent.element(t, e, n), Array.prototype.push.apply(this.parent.children, a), r
                            }, t.prototype.insertAfter = function (t, e, n) {
                                var r, i, o;
                                if (this.isRoot) throw new Error("Cannot insert elements at root level. " + this.debugInfo(t));
                                return i = this.parent.children.indexOf(this), o = this.parent.children.splice(i + 1), r = this.parent.element(t, e, n), Array.prototype.push.apply(this.parent.children, o), r
                            }, t.prototype.remove = function () {
                                var t;
                                if (this.isRoot) throw new Error("Cannot remove the root element. " + this.debugInfo());
                                return t = this.parent.children.indexOf(this), [].splice.apply(this.parent.children, [t, t - t + 1].concat([])), this.parent
                            }, t.prototype.node = function (t, e, n) {
                                var r, i;
                                return null != t && (t = f(t)), e || (e = {}), e = f(e), y(e) || (n = (i = [e, n])[0], e = i[1]), r = new c(this, t, e), null != n && r.text(n), this.children.push(r), r
                            }, t.prototype.text = function (t) {
                                var e;
                                return y(t) && this.element(t), e = new d(this, t), this.children.push(e), this
                            }, t.prototype.cdata = function (t) {
                                var e;
                                return e = new i(this, t), this.children.push(e), this
                            }, t.prototype.comment = function (t) {
                                var e;
                                return e = new o(this, t), this.children.push(e), this
                            }, t.prototype.commentBefore = function (t) {
                                var e, n;
                                return e = this.parent.children.indexOf(this), n = this.parent.children.splice(e), this.parent.comment(t), Array.prototype.push.apply(this.parent.children, n), this
                            }, t.prototype.commentAfter = function (t) {
                                var e, n;
                                return e = this.parent.children.indexOf(this), n = this.parent.children.splice(e + 1), this.parent.comment(t), Array.prototype.push.apply(this.parent.children, n), this
                            }, t.prototype.raw = function (t) {
                                var e;
                                return e = new p(this, t), this.children.push(e), this
                            }, t.prototype.dummy = function () {
                                return new u(this)
                            }, t.prototype.instruction = function (t, e) {
                                var n, r, i, o;
                                if (null != t && (t = f(t)), null != e && (e = f(e)), Array.isArray(t))
                                    for (i = 0, o = t.length; i < o; i++) this.instruction(n = t[i]);
                                else if (y(t))
                                    for (n in t) w.call(t, n) && this.instruction(n, t[n]);
                                else m(e) && (e = e.apply()), r = new h(this, t, e), this.children.push(r);
                                return this
                            }, t.prototype.instructionBefore = function (t, e) {
                                var n, r;
                                return n = this.parent.children.indexOf(this), r = this.parent.children.splice(n), this.parent.instruction(t, e), Array.prototype.push.apply(this.parent.children, r), this
                            }, t.prototype.instructionAfter = function (t, e) {
                                var n, r;
                                return n = this.parent.children.indexOf(this), r = this.parent.children.splice(n + 1), this.parent.instruction(t, e), Array.prototype.push.apply(this.parent.children, r), this
                            }, t.prototype.declaration = function (t, e, n) {
                                var i, o;
                                return i = this.document(), o = new s(i, t, e, n), 0 === i.children.length ? i.children.unshift(o) : i.children[0].type === r.Declaration ? i.children[0] = o : i.children.unshift(o), i.root() || i
                            }, t.prototype.dtd = function (t, e) {
                                var n, i, o, s, u, c, l, h, p;
                                for (n = this.document(), i = new a(n, t, e), o = s = 0, c = (h = n.children).length; s < c; o = ++s)
                                    if (h[o].type === r.DocType) return n.children[o] = i, i;
                                for (o = u = 0, l = (p = n.children).length; u < l; o = ++u)
                                    if (p[o].isRoot) return n.children.splice(o, 0, i), i;
                                return n.children.push(i), i
                            }, t.prototype.up = function () {
                                if (this.isRoot) throw new Error("The root node has no parent. Use doc() if you need to get the document object.");
                                return this.parent
                            }, t.prototype.root = function () {
                                var t;
                                for (t = this; t;) {
                                    if (t.type === r.Document) return t.rootObject;
                                    if (t.isRoot) return t;
                                    t = t.parent
                                }
                            }, t.prototype.document = function () {
                                var t;
                                for (t = this; t;) {
                                    if (t.type === r.Document) return t;
                                    t = t.parent
                                }
                            }, t.prototype.end = function (t) {
                                return this.document().end(t)
                            }, t.prototype.prev = function () {
                                var t;
                                if ((t = this.parent.children.indexOf(this)) < 1) throw new Error("Already at the first node. " + this.debugInfo());
                                return this.parent.children[t - 1]
                            }, t.prototype.next = function () {
                                var t;
                                if (-1 === (t = this.parent.children.indexOf(this)) || t === this.parent.children.length - 1) throw new Error("Already at the last node. " + this.debugInfo());
                                return this.parent.children[t + 1]
                            }, t.prototype.importDocument = function (t) {
                                var e;
                                return (e = t.root().clone()).parent = this, e.isRoot = !1, this.children.push(e), this
                            }, t.prototype.debugInfo = function (t) {
                                var e, n;
                                return null != (t = t || this.name) || (null != (e = this.parent) ? e.name : void 0) ? null == t ? "parent: <" + this.parent.name + ">" : (null != (n = this.parent) ? n.name : void 0) ? "node: <" + t + ">, parent: <" + this.parent.name + ">" : "node: <" + t + ">" : ""
                            }, t.prototype.ele = function (t, e, n) {
                                return this.element(t, e, n)
                            }, t.prototype.nod = function (t, e, n) {
                                return this.node(t, e, n)
                            }, t.prototype.txt = function (t) {
                                return this.text(t)
                            }, t.prototype.dat = function (t) {
                                return this.cdata(t)
                            }, t.prototype.com = function (t) {
                                return this.comment(t)
                            }, t.prototype.ins = function (t, e) {
                                return this.instruction(t, e)
                            }, t.prototype.doc = function () {
                                return this.document()
                            }, t.prototype.dec = function (t, e, n) {
                                return this.declaration(t, e, n)
                            }, t.prototype.e = function (t, e, n) {
                                return this.element(t, e, n)
                            }, t.prototype.n = function (t, e, n) {
                                return this.node(t, e, n)
                            }, t.prototype.t = function (t) {
                                return this.text(t)
                            }, t.prototype.d = function (t) {
                                return this.cdata(t)
                            }, t.prototype.c = function (t) {
                                return this.comment(t)
                            }, t.prototype.r = function (t) {
                                return this.raw(t)
                            }, t.prototype.i = function (t, e) {
                                return this.instruction(t, e)
                            }, t.prototype.u = function () {
                                return this.up()
                            }, t.prototype.importXMLBuilder = function (t) {
                                return this.importDocument(t)
                            }, t.prototype.replaceChild = function (t, e) {
                                throw new Error("This DOM method is not implemented." + this.debugInfo())
                            }, t.prototype.removeChild = function (t) {
                                throw new Error("This DOM method is not implemented." + this.debugInfo())
                            }, t.prototype.appendChild = function (t) {
                                throw new Error("This DOM method is not implemented." + this.debugInfo())
                            }, t.prototype.hasChildNodes = function () {
                                return 0 !== this.children.length
                            }, t.prototype.cloneNode = function (t) {
                                throw new Error("This DOM method is not implemented." + this.debugInfo())
                            }, t.prototype.normalize = function () {
                                throw new Error("This DOM method is not implemented." + this.debugInfo())
                            }, t.prototype.isSupported = function (t, e) {
                                return !0
                            }, t.prototype.hasAttributes = function () {
                                return 0 !== this.attribs.length
                            }, t.prototype.compareDocumentPosition = function (t) {
                                var n;
                                return this === t ? 0 : this.document() !== t.document() ? (n = e.Disconnected | e.ImplementationSpecific, Math.random() < .5 ? n |= e.Preceding : n |= e.Following, n) : this.isAncestor(t) ? e.Contains | e.Preceding : this.isDescendant(t) ? e.Contains | e.Following : this.isPreceding(t) ? e.Preceding : e.Following
                            }, t.prototype.isSameNode = function (t) {
                                throw new Error("This DOM method is not implemented." + this.debugInfo())
                            }, t.prototype.lookupPrefix = function (t) {
                                throw new Error("This DOM method is not implemented." + this.debugInfo())
                            }, t.prototype.isDefaultNamespace = function (t) {
                                throw new Error("This DOM method is not implemented." + this.debugInfo())
                            }, t.prototype.lookupNamespaceURI = function (t) {
                                throw new Error("This DOM method is not implemented." + this.debugInfo())
                            }, t.prototype.isEqualNode = function (t) {
                                var e, n, r;
                                if (t.nodeType !== this.nodeType) return !1;
                                if (t.children.length !== this.children.length) return !1;
                                for (e = n = 0, r = this.children.length - 1; 0 <= r ? n <= r : n >= r; e = 0 <= r ? ++n : --n)
                                    if (!this.children[e].isEqualNode(t.children[e])) return !1;
                                return !0
                            }, t.prototype.getFeature = function (t, e) {
                                throw new Error("This DOM method is not implemented." + this.debugInfo())
                            }, t.prototype.setUserData = function (t, e, n) {
                                throw new Error("This DOM method is not implemented." + this.debugInfo())
                            }, t.prototype.getUserData = function (t) {
                                throw new Error("This DOM method is not implemented." + this.debugInfo())
                            }, t.prototype.contains = function (t) {
                                return !!t && (t === this || this.isDescendant(t))
                            }, t.prototype.isDescendant = function (t) {
                                var e, n, r, i;
                                for (n = 0, r = (i = this.children).length; n < r; n++) {
                                    if (t === (e = i[n])) return !0;
                                    if (e.isDescendant(t)) return !0
                                }
                                return !1
                            }, t.prototype.isAncestor = function (t) {
                                return t.isDescendant(this)
                            }, t.prototype.isPreceding = function (t) {
                                var e, n;
                                return e = this.treePosition(t), n = this.treePosition(this), -1 !== e && -1 !== n && e < n
                            }, t.prototype.isFollowing = function (t) {
                                var e, n;
                                return e = this.treePosition(t), n = this.treePosition(this), -1 !== e && -1 !== n && e > n
                            }, t.prototype.treePosition = function (t) {
                                var e, n;
                                return n = 0, e = !1, this.foreachTreeNode(this.document(), (function (r) {
                                    if (n++, !e && r === t) return e = !0
                                })), e ? n : -1
                            }, t.prototype.foreachTreeNode = function (t, e) {
                                var n, r, i, o, s;
                                for (t || (t = this.document()), r = 0, i = (o = t.children).length; r < i; r++) {
                                    if (s = e(n = o[r])) return s;
                                    if (s = this.foreachTreeNode(n, e)) return s
                                }
                            }, t
                        }()
                    }).call(this)
                },
                lJxs: function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return i
                    }));
                    var r = n("7o/Q");

                    function i(t, e) {
                        return function (n) {
                            if ("function" != typeof t) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
                            return n.lift(new o(t, e))
                        }
                    }
                    class o {
                        constructor(t, e) {
                            this.project = t, this.thisArg = e
                        }
                        call(t, e) {
                            return e.subscribe(new s(t, this.project, this.thisArg))
                        }
                    }
                    class s extends r.a {
                        constructor(t, e, n) {
                            super(t), this.project = e, this.count = 0, this.thisArg = n || this
                        }
                        _next(t) {
                            let e;
                            try {
                                e = this.project.call(this.thisArg, t, this.count++)
                            } catch (n) {
                                return void this.destination.error(n)
                            }
                            this.destination.next(e)
                        }
                    }
                },
                n6As: function (t, e) {
                    (function () {
                        t.exports = function () {
                            function t() {}
                            return t.prototype.handleError = function (t) {
                                throw new Error(t)
                            }, t
                        }()
                    }).call(this)
                },
                n6bG: function (t, e, n) {
                    "use strict";

                    function r(t) {
                        return "function" == typeof t
                    }
                    n.d(e, "a", (function () {
                        return r
                    }))
                },
                nS9B: function (t, e, n) {
                    (function () {
                        var e, r, i = {}.hasOwnProperty;
                        e = n("Bl63"), r = n("V4+3"), t.exports = function (t) {
                            function n(t, r) {
                                if (n.__super__.constructor.call(this, t), null == r) throw new Error("Missing element text. " + this.debugInfo());
                                this.name = "#text", this.type = e.Text, this.value = this.stringify.text(r)
                            }
                            return function (t, e) {
                                for (var n in e) i.call(e, n) && (t[n] = e[n]);

                                function r() {
                                    this.constructor = t
                                }
                                r.prototype = e.prototype, t.prototype = new r, t.__super__ = e.prototype
                            }(n, t), Object.defineProperty(n.prototype, "isElementContentWhitespace", {
                                get: function () {
                                    throw new Error("This DOM method is not implemented." + this.debugInfo())
                                }
                            }), Object.defineProperty(n.prototype, "wholeText", {
                                get: function () {
                                    var t, e, n;
                                    for (n = "", e = this.previousSibling; e;) n = e.data + n, e = e.previousSibling;
                                    for (n += this.data, t = this.nextSibling; t;) n += t.data, t = t.nextSibling;
                                    return n
                                }
                            }), n.prototype.clone = function () {
                                return Object.create(this)
                            }, n.prototype.toString = function (t) {
                                return this.options.writer.text(this, this.options.writer.filterOptions(t))
                            }, n.prototype.splitText = function (t) {
                                throw new Error("This DOM method is not implemented." + this.debugInfo())
                            }, n.prototype.replaceWholeText = function (t) {
                                throw new Error("This DOM method is not implemented." + this.debugInfo())
                            }, n
                        }(r)
                    }).call(this)
                },
                ngJS: function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return r
                    }));
                    const r = t => e => {
                        for (let n = 0, r = t.length; n < r && !e.closed; n++) e.next(t[n]);
                        e.complete()
                    }
                },
                ofXK: function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return v
                    })), n.d(e, "b", (function () {
                        return z
                    })), n.d(e, "c", (function () {
                        return u
                    })), n.d(e, "d", (function () {
                        return V
                    })), n.d(e, "e", (function () {
                        return E
                    })), n.d(e, "f", (function () {
                        return h
                    })), n.d(e, "g", (function () {
                        return T
                    })), n.d(e, "h", (function () {
                        return b
                    })), n.d(e, "i", (function () {
                        return M
                    })), n.d(e, "j", (function () {
                        return F
                    })), n.d(e, "k", (function () {
                        return _
                    })), n.d(e, "l", (function () {
                        return c
                    })), n.d(e, "m", (function () {
                        return G
                    })), n.d(e, "n", (function () {
                        return $
                    })), n.d(e, "o", (function () {
                        return a
                    })), n.d(e, "p", (function () {
                        return q
                    })), n.d(e, "q", (function () {
                        return o
                    })), n.d(e, "r", (function () {
                        return k
                    })), n.d(e, "s", (function () {
                        return s
                    }));
                    var r = n("fXoL");
                    let i = null;

                    function o() {
                        return i
                    }

                    function s(t) {
                        i || (i = t)
                    }
                    class a {}
                    const u = new r.q("DocumentToken");
                    let c = (() => {
                        class t {}
                        return t.\u0275fac = function (e) {
                            return new(e || t)
                        }, t.\u0275prov = Object(r.Db)({
                            factory: l,
                            token: t,
                            providedIn: "platform"
                        }), t
                    })();

                    function l() {
                        return Object(r.Pb)(p)
                    }
                    const h = new r.q("Location Initialized");
                    let p = (() => {
                        class t extends c {
                            constructor(t) {
                                super(), this._doc = t, this._init()
                            }
                            _init() {
                                this.location = o().getLocation(), this._history = o().getHistory()
                            }
                            getBaseHrefFromDOM() {
                                return o().getBaseHref(this._doc)
                            }
                            onPopState(t) {
                                o().getGlobalEventTarget(this._doc, "window").addEventListener("popstate", t, !1)
                            }
                            onHashChange(t) {
                                o().getGlobalEventTarget(this._doc, "window").addEventListener("hashchange", t, !1)
                            }
                            get href() {
                                return this.location.href
                            }
                            get protocol() {
                                return this.location.protocol
                            }
                            get hostname() {
                                return this.location.hostname
                            }
                            get port() {
                                return this.location.port
                            }
                            get pathname() {
                                return this.location.pathname
                            }
                            get search() {
                                return this.location.search
                            }
                            get hash() {
                                return this.location.hash
                            }
                            set pathname(t) {
                                this.location.pathname = t
                            }
                            pushState(t, e, n) {
                                d() ? this._history.pushState(t, e, n) : this.location.hash = n
                            }
                            replaceState(t, e, n) {
                                d() ? this._history.replaceState(t, e, n) : this.location.hash = n
                            }
                            forward() {
                                this._history.forward()
                            }
                            back() {
                                this._history.back()
                            }
                            getState() {
                                return this._history.state
                            }
                        }
                        return t.\u0275fac = function (e) {
                            return new(e || t)(r.Pb(u))
                        }, t.\u0275prov = Object(r.Db)({
                            factory: f,
                            token: t,
                            providedIn: "platform"
                        }), t
                    })();

                    function d() {
                        return !!window.history.pushState
                    }

                    function f() {
                        return new p(Object(r.Pb)(u))
                    }

                    function g(t, e) {
                        if (0 == t.length) return e;
                        if (0 == e.length) return t;
                        let n = 0;
                        return t.endsWith("/") && n++, e.startsWith("/") && n++, 2 == n ? t + e.substring(1) : 1 == n ? t + e : t + "/" + e
                    }

                    function m(t) {
                        const e = t.match(/#|\?|$/),
                            n = e && e.index || t.length;
                        return t.slice(0, n - ("/" === t[n - 1] ? 1 : 0)) + t.slice(n)
                    }

                    function y(t) {
                        return t && "?" !== t[0] ? "?" + t : t
                    }
                    let b = (() => {
                        class t {}
                        return t.\u0275fac = function (e) {
                            return new(e || t)
                        }, t.\u0275prov = Object(r.Db)({
                            factory: w,
                            token: t,
                            providedIn: "root"
                        }), t
                    })();

                    function w(t) {
                        const e = Object(r.Pb)(u).location;
                        return new _(Object(r.Pb)(c), e && e.origin || "")
                    }
                    const v = new r.q("appBaseHref");
                    let _ = (() => {
                            class t extends b {
                                constructor(t, e) {
                                    if (super(), this._platformLocation = t, null == e && (e = this._platformLocation.getBaseHrefFromDOM()), null == e) throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");
                                    this._baseHref = e
                                }
                                onPopState(t) {
                                    this._platformLocation.onPopState(t), this._platformLocation.onHashChange(t)
                                }
                                getBaseHref() {
                                    return this._baseHref
                                }
                                prepareExternalUrl(t) {
                                    return g(this._baseHref, t)
                                }
                                path(t = !1) {
                                    const e = this._platformLocation.pathname + y(this._platformLocation.search),
                                        n = this._platformLocation.hash;
                                    return n && t ? `${e}${n}` : e
                                }
                                pushState(t, e, n, r) {
                                    const i = this.prepareExternalUrl(n + y(r));
                                    this._platformLocation.pushState(t, e, i)
                                }
                                replaceState(t, e, n, r) {
                                    const i = this.prepareExternalUrl(n + y(r));
                                    this._platformLocation.replaceState(t, e, i)
                                }
                                forward() {
                                    this._platformLocation.forward()
                                }
                                back() {
                                    this._platformLocation.back()
                                }
                            }
                            return t.\u0275fac = function (e) {
                                return new(e || t)(r.Pb(c), r.Pb(v, 8))
                            }, t.\u0275prov = r.Db({
                                token: t,
                                factory: t.\u0275fac
                            }), t
                        })(),
                        E = (() => {
                            class t extends b {
                                constructor(t, e) {
                                    super(), this._platformLocation = t, this._baseHref = "", null != e && (this._baseHref = e)
                                }
                                onPopState(t) {
                                    this._platformLocation.onPopState(t), this._platformLocation.onHashChange(t)
                                }
                                getBaseHref() {
                                    return this._baseHref
                                }
                                path(t = !1) {
                                    let e = this._platformLocation.hash;
                                    return null == e && (e = "#"), e.length > 0 ? e.substring(1) : e
                                }
                                prepareExternalUrl(t) {
                                    const e = g(this._baseHref, t);
                                    return e.length > 0 ? "#" + e : e
                                }
                                pushState(t, e, n, r) {
                                    let i = this.prepareExternalUrl(n + y(r));
                                    0 == i.length && (i = this._platformLocation.pathname), this._platformLocation.pushState(t, e, i)
                                }
                                replaceState(t, e, n, r) {
                                    let i = this.prepareExternalUrl(n + y(r));
                                    0 == i.length && (i = this._platformLocation.pathname), this._platformLocation.replaceState(t, e, i)
                                }
                                forward() {
                                    this._platformLocation.forward()
                                }
                                back() {
                                    this._platformLocation.back()
                                }
                            }
                            return t.\u0275fac = function (e) {
                                return new(e || t)(r.Pb(c), r.Pb(v, 8))
                            }, t.\u0275prov = r.Db({
                                token: t,
                                factory: t.\u0275fac
                            }), t
                        })(),
                        T = (() => {
                            class t {
                                constructor(t, e) {
                                    this._subject = new r.n, this._urlChangeListeners = [], this._platformStrategy = t;
                                    const n = this._platformStrategy.getBaseHref();
                                    this._platformLocation = e, this._baseHref = m(O(n)), this._platformStrategy.onPopState(t => {
                                        this._subject.emit({
                                            url: this.path(!0),
                                            pop: !0,
                                            state: t.state,
                                            type: t.type
                                        })
                                    })
                                }
                                path(t = !1) {
                                    return this.normalize(this._platformStrategy.path(t))
                                }
                                getState() {
                                    return this._platformLocation.getState()
                                }
                                isCurrentPathEqualTo(t, e = "") {
                                    return this.path() == this.normalize(t + y(e))
                                }
                                normalize(e) {
                                    return t.stripTrailingSlash(function (t, e) {
                                        return t && e.startsWith(t) ? e.substring(t.length) : e
                                    }(this._baseHref, O(e)))
                                }
                                prepareExternalUrl(t) {
                                    return t && "/" !== t[0] && (t = "/" + t), this._platformStrategy.prepareExternalUrl(t)
                                }
                                go(t, e = "", n = null) {
                                    this._platformStrategy.pushState(n, "", t, e), this._notifyUrlChangeListeners(this.prepareExternalUrl(t + y(e)), n)
                                }
                                replaceState(t, e = "", n = null) {
                                    this._platformStrategy.replaceState(n, "", t, e), this._notifyUrlChangeListeners(this.prepareExternalUrl(t + y(e)), n)
                                }
                                forward() {
                                    this._platformStrategy.forward()
                                }
                                back() {
                                    this._platformStrategy.back()
                                }
                                onUrlChange(t) {
                                    this._urlChangeListeners.push(t), this._urlChangeSubscription || (this._urlChangeSubscription = this.subscribe(t => {
                                        this._notifyUrlChangeListeners(t.url, t.state)
                                    }))
                                }
                                _notifyUrlChangeListeners(t = "", e) {
                                    this._urlChangeListeners.forEach(n => n(t, e))
                                }
                                subscribe(t, e, n) {
                                    return this._subject.subscribe({
                                        next: t,
                                        error: e,
                                        complete: n
                                    })
                                }
                            }
                            return t.\u0275fac = function (e) {
                                return new(e || t)(r.Pb(b), r.Pb(c))
                            }, t.normalizeQueryParams = y, t.joinWithSlash = g, t.stripTrailingSlash = m, t.\u0275prov = Object(r.Db)({
                                factory: C,
                                token: t,
                                providedIn: "root"
                            }), t
                        })();

                    function C() {
                        return new T(Object(r.Pb)(b), Object(r.Pb)(c))
                    }

                    function O(t) {
                        return t.replace(/\/index.html$/, "")
                    }
                    var x = function (t) {
                            return t[t.Decimal = 0] = "Decimal", t[t.Percent = 1] = "Percent", t[t.Currency = 2] = "Currency", t[t.Scientific = 3] = "Scientific", t
                        }({}),
                        S = function (t) {
                            return t[t.Zero = 0] = "Zero", t[t.One = 1] = "One", t[t.Two = 2] = "Two", t[t.Few = 3] = "Few", t[t.Many = 4] = "Many", t[t.Other = 5] = "Other", t
                        }({}),
                        I = function (t) {
                            return t[t.Decimal = 0] = "Decimal", t[t.Group = 1] = "Group", t[t.List = 2] = "List", t[t.PercentSign = 3] = "PercentSign", t[t.PlusSign = 4] = "PlusSign", t[t.MinusSign = 5] = "MinusSign", t[t.Exponential = 6] = "Exponential", t[t.SuperscriptingExponent = 7] = "SuperscriptingExponent", t[t.PerMille = 8] = "PerMille", t[t[1 / 0] = 9] = "Infinity", t[t.NaN = 10] = "NaN", t[t.TimeSeparator = 11] = "TimeSeparator", t[t.CurrencyDecimal = 12] = "CurrencyDecimal", t[t.CurrencyGroup = 13] = "CurrencyGroup", t
                        }({});

                    function A(t, e) {
                        const n = Object(r.hb)(t),
                            i = n[r.Y.NumberSymbols][e];
                        if (void 0 === i) {
                            if (e === I.CurrencyDecimal) return n[r.Y.NumberSymbols][I.Decimal];
                            if (e === I.CurrencyGroup) return n[r.Y.NumberSymbols][I.Group]
                        }
                        return i
                    }
                    const P = r.kb,
                        N = /^(\d+)?\.((\d+)(-(\d+))?)?$/;

                    function D(t) {
                        const e = parseInt(t);
                        if (isNaN(e)) throw new Error("Invalid integer literal when parsing " + t);
                        return e
                    }
                    class j {}
                    let R = (() => {
                        class t extends j {
                            constructor(t) {
                                super(), this.locale = t
                            }
                            getPluralCategory(t, e) {
                                switch (P(e || this.locale)(t)) {
                                    case S.Zero:
                                        return "zero";
                                    case S.One:
                                        return "one";
                                    case S.Two:
                                        return "two";
                                    case S.Few:
                                        return "few";
                                    case S.Many:
                                        return "many";
                                    default:
                                        return "other"
                                }
                            }
                        }
                        return t.\u0275fac = function (e) {
                            return new(e || t)(r.Pb(r.u))
                        }, t.\u0275prov = r.Db({
                            token: t,
                            factory: t.\u0275fac
                        }), t
                    })();

                    function k(t, e) {
                        e = encodeURIComponent(e);
                        for (const n of t.split(";")) {
                            const t = n.indexOf("="),
                                [r, i] = -1 == t ? [n, ""] : [n.slice(0, t), n.slice(t + 1)];
                            if (r.trim() === e) return decodeURIComponent(i)
                        }
                        return null
                    }
                    class L {
                        constructor(t, e, n, r) {
                            this.$implicit = t, this.ngForOf = e, this.index = n, this.count = r
                        }
                        get first() {
                            return 0 === this.index
                        }
                        get last() {
                            return this.index === this.count - 1
                        }
                        get even() {
                            return this.index % 2 == 0
                        }
                        get odd() {
                            return !this.even
                        }
                    }
                    let M = (() => {
                        class t {
                            constructor(t, e, n) {
                                this._viewContainer = t, this._template = e, this._differs = n, this._ngForOf = null, this._ngForOfDirty = !0, this._differ = null
                            }
                            set ngForOf(t) {
                                this._ngForOf = t, this._ngForOfDirty = !0
                            }
                            set ngForTrackBy(t) {
                                Object(r.T)() && null != t && "function" != typeof t && console && console.warn && console.warn(`trackBy must be a function, but received ${JSON.stringify(t)}. See https://angular.io/api/common/NgForOf#change-propagation for more information.`), this._trackByFn = t
                            }
                            get ngForTrackBy() {
                                return this._trackByFn
                            }
                            set ngForTemplate(t) {
                                t && (this._template = t)
                            }
                            ngDoCheck() {
                                if (this._ngForOfDirty) {
                                    this._ngForOfDirty = !1;
                                    const n = this._ngForOf;
                                    if (!this._differ && n) try {
                                        this._differ = this._differs.find(n).create(this.ngForTrackBy)
                                    } catch (e) {
                                        throw new Error(`Cannot find a differ supporting object '${n}' of type '${t=n,t.name||typeof t}'. NgFor only supports binding to Iterables such as Arrays.`)
                                    }
                                }
                                var t;
                                if (this._differ) {
                                    const t = this._differ.diff(this._ngForOf);
                                    t && this._applyChanges(t)
                                }
                            }
                            _applyChanges(t) {
                                const e = [];
                                t.forEachOperation((t, n, r) => {
                                    if (null == t.previousIndex) {
                                        const n = this._viewContainer.createEmbeddedView(this._template, new L(null, this._ngForOf, -1, -1), null === r ? void 0 : r),
                                            i = new U(t, n);
                                        e.push(i)
                                    } else if (null == r) this._viewContainer.remove(null === n ? void 0 : n);
                                    else if (null !== n) {
                                        const i = this._viewContainer.get(n);
                                        this._viewContainer.move(i, r);
                                        const o = new U(t, i);
                                        e.push(o)
                                    }
                                });
                                for (let n = 0; n < e.length; n++) this._perViewChange(e[n].view, e[n].record);
                                for (let n = 0, r = this._viewContainer.length; n < r; n++) {
                                    const t = this._viewContainer.get(n);
                                    t.context.index = n, t.context.count = r, t.context.ngForOf = this._ngForOf
                                }
                                t.forEachIdentityChange(t => {
                                    this._viewContainer.get(t.currentIndex).context.$implicit = t.item
                                })
                            }
                            _perViewChange(t, e) {
                                t.context.$implicit = e.item
                            }
                            static ngTemplateContextGuard(t, e) {
                                return !0
                            }
                        }
                        return t.\u0275fac = function (e) {
                            return new(e || t)(r.Hb(r.O), r.Hb(r.K), r.Hb(r.s))
                        }, t.\u0275dir = r.Cb({
                            type: t,
                            selectors: [["", "ngFor", "", "ngForOf", ""]],
                            inputs: {
                                ngForOf: "ngForOf",
                                ngForTrackBy: "ngForTrackBy",
                                ngForTemplate: "ngForTemplate"
                            }
                        }), t
                    })();
                    class U {
                        constructor(t, e) {
                            this.record = t, this.view = e
                        }
                    }
                    let F = (() => {
                        class t {
                            constructor(t, e) {
                                this._viewContainer = t, this._context = new B, this._thenTemplateRef = null, this._elseTemplateRef = null, this._thenViewRef = null, this._elseViewRef = null, this._thenTemplateRef = e
                            }
                            set ngIf(t) {
                                this._context.$implicit = this._context.ngIf = t, this._updateView()
                            }
                            set ngIfThen(t) {
                                H("ngIfThen", t), this._thenTemplateRef = t, this._thenViewRef = null, this._updateView()
                            }
                            set ngIfElse(t) {
                                H("ngIfElse", t), this._elseTemplateRef = t, this._elseViewRef = null, this._updateView()
                            }
                            _updateView() {
                                this._context.$implicit ? this._thenViewRef || (this._viewContainer.clear(), this._elseViewRef = null, this._thenTemplateRef && (this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context))) : this._elseViewRef || (this._viewContainer.clear(), this._thenViewRef = null, this._elseTemplateRef && (this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context)))
                            }
                            static ngTemplateContextGuard(t, e) {
                                return !0
                            }
                        }
                        return t.\u0275fac = function (e) {
                            return new(e || t)(r.Hb(r.O), r.Hb(r.K))
                        }, t.\u0275dir = r.Cb({
                            type: t,
                            selectors: [["", "ngIf", ""]],
                            inputs: {
                                ngIf: "ngIf",
                                ngIfThen: "ngIfThen",
                                ngIfElse: "ngIfElse"
                            }
                        }), t
                    })();
                    class B {
                        constructor() {
                            this.$implicit = null, this.ngIf = null
                        }
                    }

                    function H(t, e) {
                        if (e && !e.createEmbeddedView) throw new Error(`${t} must be a TemplateRef, but received '${Object(r.sb)(e)}'.`)
                    }
                    let V = (() => {
                            class t {
                                constructor(t) {
                                    this._locale = t
                                }
                                transform(e, n, i) {
                                    if (function (t) {
                                            return null == t || "" === t || t != t
                                        }(e)) return null;
                                    i = i || this._locale;
                                    try {
                                        return function (t, e, n) {
                                            return function (t, e, n, r, i, o, s = !1) {
                                                let a = "",
                                                    u = !1;
                                                if (isFinite(t)) {
                                                    let c = function (t) {
                                                        let e, n, r, i, o, s = Math.abs(t) + "",
                                                            a = 0;
                                                        for ((n = s.indexOf(".")) > -1 && (s = s.replace(".", "")), (r = s.search(/e/i)) > 0 ? (n < 0 && (n = r), n += +s.slice(r + 1), s = s.substring(0, r)) : n < 0 && (n = s.length), r = 0;
                                                            "0" === s.charAt(r); r++);
                                                        if (r === (o = s.length)) e = [0], n = 1;
                                                        else {
                                                            for (o--;
                                                                "0" === s.charAt(o);) o--;
                                                            for (n -= r, e = [], i = 0; r <= o; r++, i++) e[i] = Number(s.charAt(r))
                                                        }
                                                        return n > 22 && (e = e.splice(0, 21), a = n - 1, n = 1), {
                                                            digits: e,
                                                            exponent: a,
                                                            integerLen: n
                                                        }
                                                    }(t);
                                                    s && (c = function (t) {
                                                        if (0 === t.digits[0]) return t;
                                                        const e = t.digits.length - t.integerLen;
                                                        return t.exponent ? t.exponent += 2 : (0 === e ? t.digits.push(0, 0) : 1 === e && t.digits.push(0), t.integerLen += 2), t
                                                    }(c));
                                                    let l = e.minInt,
                                                        h = e.minFrac,
                                                        p = e.maxFrac;
                                                    if (o) {
                                                        const t = o.match(N);
                                                        if (null === t) throw new Error(o + " is not a valid digit info");
                                                        const e = t[1],
                                                            n = t[3],
                                                            r = t[5];
                                                        null != e && (l = D(e)), null != n && (h = D(n)), null != r ? p = D(r) : null != n && h > p && (p = h)
                                                    }! function (t, e, n) {
                                                        if (e > n) throw new Error(`The minimum number of digits after fraction (${e}) is higher than the maximum (${n}).`);
                                                        let r = t.digits,
                                                            i = r.length - t.integerLen;
                                                        const o = Math.min(Math.max(e, i), n);
                                                        let s = o + t.integerLen,
                                                            a = r[s];
                                                        if (s > 0) {
                                                            r.splice(Math.max(t.integerLen, s));
                                                            for (let t = s; t < r.length; t++) r[t] = 0
                                                        } else {
                                                            i = Math.max(0, i), t.integerLen = 1, r.length = Math.max(1, s = o + 1), r[0] = 0;
                                                            for (let t = 1; t < s; t++) r[t] = 0
                                                        }
                                                        if (a >= 5)
                                                            if (s - 1 < 0) {
                                                                for (let e = 0; e > s; e--) r.unshift(0), t.integerLen++;
                                                                r.unshift(1), t.integerLen++
                                                            } else r[s - 1]++;
                                                        for (; i < Math.max(0, o); i++) r.push(0);
                                                        let u = 0 !== o;
                                                        const c = e + t.integerLen,
                                                            l = r.reduceRight((function (t, e, n, r) {
                                                                return r[n] = (e += t) < 10 ? e : e - 10, u && (0 === r[n] && n >= c ? r.pop() : u = !1), e >= 10 ? 1 : 0
                                                            }), 0);
                                                        l && (r.unshift(l), t.integerLen++)
                                                    }(c, h, p);
                                                    let d = c.digits,
                                                        f = c.integerLen;
                                                    const g = c.exponent;
                                                    let m = [];
                                                    for (u = d.every(t => !t); f < l; f++) d.unshift(0);
                                                    for (; f < 0; f++) d.unshift(0);
                                                    f > 0 ? m = d.splice(f, d.length) : (m = d, d = [0]);
                                                    const y = [];
                                                    for (d.length >= e.lgSize && y.unshift(d.splice(-e.lgSize, d.length).join("")); d.length > e.gSize;) y.unshift(d.splice(-e.gSize, d.length).join(""));
                                                    d.length && y.unshift(d.join("")), a = y.join(A(n, r)), m.length && (a += A(n, i) + m.join("")), g && (a += A(n, I.Exponential) + "+" + g)
                                                } else a = A(n, I.Infinity);
                                                return a = t < 0 && !u ? e.negPre + a + e.negSuf : e.posPre + a + e.posSuf, a
                                            }(t, function (t, e = "-") {
                                                const n = {
                                                        minInt: 1,
                                                        minFrac: 0,
                                                        maxFrac: 0,
                                                        posPre: "",
                                                        posSuf: "",
                                                        negPre: "",
                                                        negSuf: "",
                                                        gSize: 0,
                                                        lgSize: 0
                                                    },
                                                    r = t.split(";"),
                                                    i = r[0],
                                                    o = r[1],
                                                    s = -1 !== i.indexOf(".") ? i.split(".") : [i.substring(0, i.lastIndexOf("0") + 1), i.substring(i.lastIndexOf("0") + 1)],
                                                    a = s[0],
                                                    u = s[1] || "";
                                                n.posPre = a.substr(0, a.indexOf("#"));
                                                for (let l = 0; l < u.length; l++) {
                                                    const t = u.charAt(l);
                                                    "0" === t ? n.minFrac = n.maxFrac = l + 1 : "#" === t ? n.maxFrac = l + 1 : n.posSuf += t
                                                }
                                                const c = a.split(",");
                                                if (n.gSize = c[1] ? c[1].length : 0, n.lgSize = c[2] || c[1] ? (c[2] || c[1]).length : 0, o) {
                                                    const t = i.length - n.posPre.length - n.posSuf.length,
                                                        e = o.indexOf("#");
                                                    n.negPre = o.substr(0, e).replace(/'/g, ""), n.negSuf = o.substr(e + t).replace(/'/g, "")
                                                } else n.negPre = e + n.posPre, n.negSuf = n.posSuf;
                                                return n
                                            }(function (t, e) {
                                                return Object(r.hb)(t)[r.Y.NumberFormats][e]
                                            }(e, x.Decimal), A(e, I.MinusSign)), e, I.Group, I.Decimal, n)
                                        }(function (t) {
                                            if ("string" == typeof t && !isNaN(Number(t) - parseFloat(t))) return Number(t);
                                            if ("number" != typeof t) throw new Error(t + " is not a number");
                                            return t
                                        }(e), i, n)
                                    } catch (o) {
                                        throw function (t, e) {
                                            return Error(`InvalidPipeArgument: '${e}' for pipe '${Object(r.sb)(t)}'`)
                                        }(t, o.message)
                                    }
                                }
                            }
                            return t.\u0275fac = function (e) {
                                return new(e || t)(r.Hb(r.u))
                            }, t.\u0275pipe = r.Gb({
                                name: "number",
                                type: t,
                                pure: !0
                            }), t
                        })(),
                        z = (() => {
                            class t {}
                            return t.\u0275mod = r.Fb({
                                type: t
                            }), t.\u0275inj = r.Eb({
                                factory: function (e) {
                                    return new(e || t)
                                },
                                providers: [{
                                    provide: j,
                                    useClass: R
                                }]
                            }), t
                        })();
                    const q = "browser";

                    function $(t) {
                        return t === q
                    }
                    let G = (() => {
                        class t {}
                        return t.\u0275prov = Object(r.Db)({
                            token: t,
                            providedIn: "root",
                            factory: () => new Y(Object(r.Pb)(u), window, Object(r.Pb)(r.m))
                        }), t
                    })();
                    class Y {
                        constructor(t, e, n) {
                            this.document = t, this.window = e, this.errorHandler = n, this.offset = () => [0, 0]
                        }
                        setOffset(t) {
                            this.offset = Array.isArray(t) ? () => t : t
                        }
                        getScrollPosition() {
                            return this.supportScrollRestoration() ? [this.window.scrollX, this.window.scrollY] : [0, 0]
                        }
                        scrollToPosition(t) {
                            this.supportScrollRestoration() && this.window.scrollTo(t[0], t[1])
                        }
                        scrollToAnchor(t) {
                            if (this.supportScrollRestoration()) {
                                t = this.window.CSS && this.window.CSS.escape ? this.window.CSS.escape(t) : t.replace(/(\"|\'\ |:|\.|\[|\]|,|=)/g, "\\$1");
                                try {
                                    const e = this.document.querySelector("#" + t);
                                    if (e) return void this.scrollToElement(e);
                                    const n = this.document.querySelector(`[name='${t}']`);
                                    if (n) return void this.scrollToElement(n)
                                } catch (e) {
                                    this.errorHandler.handleError(e)
                                }
                            }
                        }
                        setHistoryScrollRestoration(t) {
                            if (this.supportScrollRestoration()) {
                                const e = this.window.history;
                                e && e.scrollRestoration && (e.scrollRestoration = t)
                            }
                        }
                        scrollToElement(t) {
                            const e = t.getBoundingClientRect(),
                                n = e.left + this.window.pageXOffset,
                                r = e.top + this.window.pageYOffset,
                                i = this.offset();
                            this.window.scrollTo(n - i[0], r - i[1])
                        }
                        supportScrollRestoration() {
                            try {
                                return !!this.window && !!this.window.scrollTo
                            } catch (t) {
                                return !1
                            }
                        }
                    }
                },
                pLZG: function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return i
                    }));
                    var r = n("7o/Q");

                    function i(t, e) {
                        return function (n) {
                            return n.lift(new o(t, e))
                        }
                    }
                    class o {
                        constructor(t, e) {
                            this.predicate = t, this.thisArg = e
                        }
                        call(t, e) {
                            return e.subscribe(new s(t, this.predicate, this.thisArg))
                        }
                    }
                    class s extends r.a {
                        constructor(t, e, n) {
                            super(t), this.predicate = e, this.thisArg = n, this.count = 0
                        }
                        _next(t) {
                            let e;
                            try {
                                e = this.predicate.call(this.thisArg, t, this.count++)
                            } catch (n) {
                                return void this.destination.error(n)
                            }
                            e && this.destination.next(t)
                        }
                    }
                },
                "pLb+": function (t, e, n) {
                    (function () {
                        var e, r, i, o = {}.hasOwnProperty;
                        i = n("RfOz").assign, e = n("Bl63"), n("Uo1N"), n("1+OA"), n("U26E"), n("iTBR"), n("uO6I"), n("UNeu"), n("nS9B"), n("8BaB"), n("Dh7r"), n("GI8a"), n("OzLs"), n("FYWk"), n("tuH/"), r = n("CYXk"), t.exports = function () {
                            function t(t) {
                                var e, n, r;
                                for (e in t || (t = {}), this.options = t, n = t.writer || {}) o.call(n, e) && (r = n[e], this["_" + e] = this[e], this[e] = r)
                            }
                            return t.prototype.filterOptions = function (t) {
                                var e, n, o, s, a, u, c, l;
                                return t || (t = {}), t = i({}, this.options, t), (e = {
                                    writer: this
                                }).pretty = t.pretty || !1, e.allowEmpty = t.allowEmpty || !1, e.indent = null != (n = t.indent) ? n : "  ", e.newline = null != (o = t.newline) ? o : "\n", e.offset = null != (s = t.offset) ? s : 0, e.dontPrettyTextNodes = null != (a = null != (u = t.dontPrettyTextNodes) ? u : t.dontprettytextnodes) ? a : 0, e.spaceBeforeSlash = null != (c = null != (l = t.spaceBeforeSlash) ? l : t.spacebeforeslash) ? c : "", !0 === e.spaceBeforeSlash && (e.spaceBeforeSlash = " "), e.suppressPrettyCount = 0, e.user = {}, e.state = r.None, e
                            }, t.prototype.indent = function (t, e, n) {
                                var r;
                                return !e.pretty || e.suppressPrettyCount ? "" : e.pretty && (r = (n || 0) + e.offset + 1) > 0 ? new Array(r).join(e.indent) : ""
                            }, t.prototype.endline = function (t, e, n) {
                                return !e.pretty || e.suppressPrettyCount ? "" : e.newline
                            }, t.prototype.attribute = function (t, e, n) {
                                var r;
                                return this.openAttribute(t, e, n), r = " " + t.name + '="' + t.value + '"', this.closeAttribute(t, e, n), r
                            }, t.prototype.cdata = function (t, e, n) {
                                var i;
                                return this.openNode(t, e, n), e.state = r.OpenTag, i = this.indent(t, e, n) + "<![CDATA[", e.state = r.InsideTag, i += t.value, e.state = r.CloseTag, i += "]]>" + this.endline(t, e, n), e.state = r.None, this.closeNode(t, e, n), i
                            }, t.prototype.comment = function (t, e, n) {
                                var i;
                                return this.openNode(t, e, n), e.state = r.OpenTag, i = this.indent(t, e, n) + "\x3c!-- ", e.state = r.InsideTag, i += t.value, e.state = r.CloseTag, i += " --\x3e" + this.endline(t, e, n), e.state = r.None, this.closeNode(t, e, n), i
                            }, t.prototype.declaration = function (t, e, n) {
                                var i;
                                return this.openNode(t, e, n), e.state = r.OpenTag, i = this.indent(t, e, n) + "<?xml", e.state = r.InsideTag, i += ' version="' + t.version + '"', null != t.encoding && (i += ' encoding="' + t.encoding + '"'), null != t.standalone && (i += ' standalone="' + t.standalone + '"'), e.state = r.CloseTag, i += e.spaceBeforeSlash + "?>", i += this.endline(t, e, n), e.state = r.None, this.closeNode(t, e, n), i
                            }, t.prototype.docType = function (t, e, n) {
                                var i, o, s, a;
                                if (n || (n = 0), this.openNode(t, e, n), e.state = r.OpenTag, s = this.indent(t, e, n), s += "<!DOCTYPE " + t.root().name, t.pubID && t.sysID ? s += ' PUBLIC "' + t.pubID + '" "' + t.sysID + '"' : t.sysID && (s += ' SYSTEM "' + t.sysID + '"'), t.children.length > 0) {
                                    for (s += " [", s += this.endline(t, e, n), e.state = r.InsideTag, i = 0, o = (a = t.children).length; i < o; i++) s += this.writeChildNode(a[i], e, n + 1);
                                    e.state = r.CloseTag, s += "]"
                                }
                                return e.state = r.CloseTag, s += e.spaceBeforeSlash + ">", s += this.endline(t, e, n), e.state = r.None, this.closeNode(t, e, n), s
                            }, t.prototype.element = function (t, n, i) {
                                var s, a, u, c, l, h, p, d, f, g, m, y, b;
                                for (d in i || (i = 0), f = !1, g = "", this.openNode(t, n, i), n.state = r.OpenTag, g += this.indent(t, n, i) + "<" + t.name, m = t.attribs) o.call(m, d) && (g += this.attribute(m[d], n, i));
                                if (u = 0 === (a = t.children.length) ? null : t.children[0], 0 === a || t.children.every((function (t) {
                                        return (t.type === e.Text || t.type === e.Raw) && "" === t.value
                                    }))) n.allowEmpty ? (g += ">", n.state = r.CloseTag, g += "</" + t.name + ">" + this.endline(t, n, i)) : (n.state = r.CloseTag, g += n.spaceBeforeSlash + "/>" + this.endline(t, n, i));
                                else if (!n.pretty || 1 !== a || u.type !== e.Text && u.type !== e.Raw || null == u.value) {
                                    if (n.dontPrettyTextNodes)
                                        for (c = 0, h = (y = t.children).length; c < h; c++)
                                            if (((s = y[c]).type === e.Text || s.type === e.Raw) && null != s.value) {
                                                n.suppressPrettyCount++, f = !0;
                                                break
                                            } for (g += ">" + this.endline(t, n, i), n.state = r.InsideTag, l = 0, p = (b = t.children).length; l < p; l++) g += this.writeChildNode(s = b[l], n, i + 1);
                                    n.state = r.CloseTag, g += this.indent(t, n, i) + "</" + t.name + ">", f && n.suppressPrettyCount--, g += this.endline(t, n, i), n.state = r.None
                                } else g += ">", n.state = r.InsideTag, n.suppressPrettyCount++, f = !0, g += this.writeChildNode(u, n, i + 1), n.suppressPrettyCount--, f = !1, n.state = r.CloseTag, g += "</" + t.name + ">" + this.endline(t, n, i);
                                return this.closeNode(t, n, i), g
                            }, t.prototype.writeChildNode = function (t, n, r) {
                                switch (t.type) {
                                    case e.CData:
                                        return this.cdata(t, n, r);
                                    case e.Comment:
                                        return this.comment(t, n, r);
                                    case e.Element:
                                        return this.element(t, n, r);
                                    case e.Raw:
                                        return this.raw(t, n, r);
                                    case e.Text:
                                        return this.text(t, n, r);
                                    case e.ProcessingInstruction:
                                        return this.processingInstruction(t, n, r);
                                    case e.Dummy:
                                        return "";
                                    case e.Declaration:
                                        return this.declaration(t, n, r);
                                    case e.DocType:
                                        return this.docType(t, n, r);
                                    case e.AttributeDeclaration:
                                        return this.dtdAttList(t, n, r);
                                    case e.ElementDeclaration:
                                        return this.dtdElement(t, n, r);
                                    case e.EntityDeclaration:
                                        return this.dtdEntity(t, n, r);
                                    case e.NotationDeclaration:
                                        return this.dtdNotation(t, n, r);
                                    default:
                                        throw new Error("Unknown XML node type: " + t.constructor.name)
                                }
                            }, t.prototype.processingInstruction = function (t, e, n) {
                                var i;
                                return this.openNode(t, e, n), e.state = r.OpenTag, i = this.indent(t, e, n) + "<?", e.state = r.InsideTag, i += t.target, t.value && (i += " " + t.value), e.state = r.CloseTag, i += e.spaceBeforeSlash + "?>", i += this.endline(t, e, n), e.state = r.None, this.closeNode(t, e, n), i
                            }, t.prototype.raw = function (t, e, n) {
                                var i;
                                return this.openNode(t, e, n), e.state = r.OpenTag, i = this.indent(t, e, n), e.state = r.InsideTag, i += t.value, e.state = r.CloseTag, i += this.endline(t, e, n), e.state = r.None, this.closeNode(t, e, n), i
                            }, t.prototype.text = function (t, e, n) {
                                var i;
                                return this.openNode(t, e, n), e.state = r.OpenTag, i = this.indent(t, e, n), e.state = r.InsideTag, i += t.value, e.state = r.CloseTag, i += this.endline(t, e, n), e.state = r.None, this.closeNode(t, e, n), i
                            }, t.prototype.dtdAttList = function (t, e, n) {
                                var i;
                                return this.openNode(t, e, n), e.state = r.OpenTag, i = this.indent(t, e, n) + "<!ATTLIST", e.state = r.InsideTag, i += " " + t.elementName + " " + t.attributeName + " " + t.attributeType, "#DEFAULT" !== t.defaultValueType && (i += " " + t.defaultValueType), t.defaultValue && (i += ' "' + t.defaultValue + '"'), e.state = r.CloseTag, i += e.spaceBeforeSlash + ">" + this.endline(t, e, n), e.state = r.None, this.closeNode(t, e, n), i
                            }, t.prototype.dtdElement = function (t, e, n) {
                                var i;
                                return this.openNode(t, e, n), e.state = r.OpenTag, i = this.indent(t, e, n) + "<!ELEMENT", e.state = r.InsideTag, i += " " + t.name + " " + t.value, e.state = r.CloseTag, i += e.spaceBeforeSlash + ">" + this.endline(t, e, n), e.state = r.None, this.closeNode(t, e, n), i
                            }, t.prototype.dtdEntity = function (t, e, n) {
                                var i;
                                return this.openNode(t, e, n), e.state = r.OpenTag, i = this.indent(t, e, n) + "<!ENTITY", e.state = r.InsideTag, t.pe && (i += " %"), i += " " + t.name, t.value ? i += ' "' + t.value + '"' : (t.pubID && t.sysID ? i += ' PUBLIC "' + t.pubID + '" "' + t.sysID + '"' : t.sysID && (i += ' SYSTEM "' + t.sysID + '"'), t.nData && (i += " NDATA " + t.nData)), e.state = r.CloseTag, i += e.spaceBeforeSlash + ">" + this.endline(t, e, n), e.state = r.None, this.closeNode(t, e, n), i
                            }, t.prototype.dtdNotation = function (t, e, n) {
                                var i;
                                return this.openNode(t, e, n), e.state = r.OpenTag, i = this.indent(t, e, n) + "<!NOTATION", e.state = r.InsideTag, i += " " + t.name, t.pubID && t.sysID ? i += ' PUBLIC "' + t.pubID + '" "' + t.sysID + '"' : t.pubID ? i += ' PUBLIC "' + t.pubID + '"' : t.sysID && (i += ' SYSTEM "' + t.sysID + '"'), e.state = r.CloseTag, i += e.spaceBeforeSlash + ">" + this.endline(t, e, n), e.state = r.None, this.closeNode(t, e, n), i
                            }, t.prototype.openNode = function (t, e, n) {}, t.prototype.closeNode = function (t, e, n) {}, t.prototype.openAttribute = function (t, e, n) {}, t.prototype.closeAttribute = function (t, e, n) {}, t
                        }()
                    }).call(this)
                },
                pn46: function (t, e) {
                    (function () {
                        e.defaults = {
                            .1: {
                                explicitCharkey: !1,
                                trim: !0,
                                normalize: !0,
                                normalizeTags: !1,
                                attrkey: "@",
                                charkey: "#",
                                explicitArray: !1,
                                ignoreAttrs: !1,
                                mergeAttrs: !1,
                                explicitRoot: !1,
                                validator: null,
                                xmlns: !1,
                                explicitChildren: !1,
                                childkey: "@@",
                                charsAsChildren: !1,
                                includeWhiteChars: !1,
                                async: !1,
                                strict: !0,
                                attrNameProcessors: null,
                                attrValueProcessors: null,
                                tagNameProcessors: null,
                                valueProcessors: null,
                                emptyTag: ""
                            },
                            .2: {
                                explicitCharkey: !1,
                                trim: !1,
                                normalize: !1,
                                normalizeTags: !1,
                                attrkey: "$",
                                charkey: "_",
                                explicitArray: !0,
                                ignoreAttrs: !1,
                                mergeAttrs: !1,
                                explicitRoot: !0,
                                validator: null,
                                xmlns: !1,
                                explicitChildren: !1,
                                preserveChildrenOrder: !1,
                                childkey: "$$",
                                charsAsChildren: !1,
                                includeWhiteChars: !1,
                                async: !1,
                                strict: !0,
                                attrNameProcessors: null,
                                attrValueProcessors: null,
                                tagNameProcessors: null,
                                valueProcessors: null,
                                rootName: "root",
                                xmldec: {
                                    version: "1.0",
                                    encoding: "UTF-8",
                                    standalone: !0
                                },
                                doctype: null,
                                renderOpts: {
                                    pretty: !0,
                                    indent: "  ",
                                    newline: "\n"
                                },
                                headless: !1,
                                chunkSize: 1e4,
                                emptyTag: "",
                                cdata: !1
                            }
                        }
                    }).call(this)
                },
                quSY: function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return a
                    }));
                    var r = n("DH7j"),
                        i = n("XoHu"),
                        o = n("n6bG");
                    const s = (() => {
                        function t(t) {
                            return Error.call(this), this.message = t ? `${t.length} errors occurred during unsubscription:\n${t.map((t,e)=>`${e+1}) ${t.toString()}`).join("\n  ")}` : "", this.name = "UnsubscriptionError", this.errors = t, this
                        }
                        return t.prototype = Object.create(Error.prototype), t
                    })();
                    let a = (() => {
                        class t {
                            constructor(t) {
                                this.closed = !1, this._parentOrParents = null, this._subscriptions = null, t && (this._ctorUnsubscribe = !0, this._unsubscribe = t)
                            }
                            unsubscribe() {
                                let e;
                                if (this.closed) return;
                                let {
                                    _parentOrParents: n,
                                    _ctorUnsubscribe: a,
                                    _unsubscribe: c,
                                    _subscriptions: l
                                } = this;
                                if (this.closed = !0, this._parentOrParents = null, this._subscriptions = null, n instanceof t) n.remove(this);
                                else if (null !== n)
                                    for (let t = 0; t < n.length; ++t) n[t].remove(this);
                                if (Object(o.a)(c)) {
                                    a && (this._unsubscribe = void 0);
                                    try {
                                        c.call(this)
                                    } catch (h) {
                                        e = h instanceof s ? u(h.errors) : [h]
                                    }
                                }
                                if (Object(r.a)(l)) {
                                    let t = -1,
                                        n = l.length;
                                    for (; ++t < n;) {
                                        const n = l[t];
                                        if (Object(i.a)(n)) try {
                                            n.unsubscribe()
                                        } catch (h) {
                                            e = e || [], h instanceof s ? e = e.concat(u(h.errors)) : e.push(h)
                                        }
                                    }
                                }
                                if (e) throw new s(e)
                            }
                            add(e) {
                                let n = e;
                                if (!e) return t.EMPTY;
                                switch (typeof e) {
                                    case "function":
                                        n = new t(e);
                                    case "object":
                                        if (n === this || n.closed || "function" != typeof n.unsubscribe) return n;
                                        if (this.closed) return n.unsubscribe(), n;
                                        if (!(n instanceof t)) {
                                            const e = n;
                                            n = new t, n._subscriptions = [e]
                                        }
                                        break;
                                    default:
                                        throw new Error("unrecognized teardown " + e + " added to Subscription.")
                                }
                                let {
                                    _parentOrParents: r
                                } = n;
                                if (null === r) n._parentOrParents = this;
                                else if (r instanceof t) {
                                    if (r === this) return n;
                                    n._parentOrParents = [r, this]
                                } else {
                                    if (-1 !== r.indexOf(this)) return n;
                                    r.push(this)
                                }
                                const i = this._subscriptions;
                                return null === i ? this._subscriptions = [n] : i.push(n), n
                            }
                            remove(t) {
                                const e = this._subscriptions;
                                if (e) {
                                    const n = e.indexOf(t); - 1 !== n && e.splice(n, 1)
                                }
                            }
                        }
                        var e;
                        return t.EMPTY = ((e = new t).closed = !0, e), t
                    })();

                    function u(t) {
                        return t.reduce((t, e) => t.concat(e instanceof s ? e.errors : e), [])
                    }
                },
                qxDF: function (t, e, n) {
                    (function () {
                        "use strict";
                        var t, r, i, o, s, a, u, c, l = function (t, e) {
                                return function () {
                                    return t.apply(e, arguments)
                                }
                            },
                            h = {}.hasOwnProperty;
                        u = n("MXF5"), i = n("+qE3"), t = n("b5cc"), a = n("gTaY"), c = n("62BN").setImmediate, r = n("pn46").defaults, o = function (t) {
                            return "object" == typeof t && null != t && 0 === Object.keys(t).length
                        }, s = function (t, e, n) {
                            var r, i;
                            for (r = 0, i = t.length; r < i; r++) e = (0, t[r])(e, n);
                            return e
                        }, e.Parser = function (n) {
                            function i(t) {
                                var n, i;
                                if (this.parseStringPromise = l(this.parseStringPromise, this), this.parseString = l(this.parseString, this), this.reset = l(this.reset, this), this.assignOrPush = l(this.assignOrPush, this), this.processAsync = l(this.processAsync, this), !(this instanceof e.Parser)) return new e.Parser(t);
                                for (n in this.options = {}, i = r[.2]) h.call(i, n) && (this.options[n] = i[n]);
                                for (n in t) h.call(t, n) && (this.options[n] = t[n]);
                                this.options.xmlns && (this.options.xmlnskey = this.options.attrkey + "ns"), this.options.normalizeTags && (this.options.tagNameProcessors || (this.options.tagNameProcessors = []), this.options.tagNameProcessors.unshift(a.normalize)), this.reset()
                            }
                            return function (t, e) {
                                for (var n in e) h.call(e, n) && (t[n] = e[n]);

                                function r() {
                                    this.constructor = t
                                }
                                r.prototype = e.prototype, t.prototype = new r, t.__super__ = e.prototype
                            }(i, n), i.prototype.processAsync = function () {
                                var t, e;
                                try {
                                    return this.remaining.length <= this.options.chunkSize ? (t = this.remaining, this.remaining = "", this.saxParser = this.saxParser.write(t), this.saxParser.close()) : (t = this.remaining.substr(0, this.options.chunkSize), this.remaining = this.remaining.substr(this.options.chunkSize, this.remaining.length), this.saxParser = this.saxParser.write(t), c(this.processAsync))
                                } catch (n) {
                                    if (e = n, !this.saxParser.errThrown) return this.saxParser.errThrown = !0, this.emit(e)
                                }
                            }, i.prototype.assignOrPush = function (t, e, n) {
                                return e in t ? (t[e] instanceof Array || (t[e] = [t[e]]), t[e].push(n)) : t[e] = this.options.explicitArray ? [n] : n
                            }, i.prototype.reset = function () {
                                var t, e, n, r, i;
                                return this.removeAllListeners(), this.saxParser = u.parser(this.options.strict, {
                                    trim: !1,
                                    normalize: !1,
                                    xmlns: this.options.xmlns
                                }), this.saxParser.errThrown = !1, this.saxParser.onerror = (i = this, function (t) {
                                    if (i.saxParser.resume(), !i.saxParser.errThrown) return i.saxParser.errThrown = !0, i.emit("error", t)
                                }), this.saxParser.onend = function (t) {
                                    return function () {
                                        if (!t.saxParser.ended) return t.saxParser.ended = !0, t.emit("end", t.resultObject)
                                    }
                                }(this), this.saxParser.ended = !1, this.EXPLICIT_CHARKEY = this.options.explicitCharkey, this.resultObject = null, r = [], t = this.options.attrkey, e = this.options.charkey, this.saxParser.onopentag = function (n) {
                                    return function (i) {
                                        var o, a, u, c, l;
                                        if ((u = {})[e] = "", !n.options.ignoreAttrs)
                                            for (o in l = i.attributes) h.call(l, o) && (t in u || n.options.mergeAttrs || (u[t] = {}), a = n.options.attrValueProcessors ? s(n.options.attrValueProcessors, i.attributes[o], o) : i.attributes[o], c = n.options.attrNameProcessors ? s(n.options.attrNameProcessors, o) : o, n.options.mergeAttrs ? n.assignOrPush(u, c, a) : u[t][c] = a);
                                        return u["#name"] = n.options.tagNameProcessors ? s(n.options.tagNameProcessors, i.name) : i.name, n.options.xmlns && (u[n.options.xmlnskey] = {
                                            uri: i.uri,
                                            local: i.local
                                        }), r.push(u)
                                    }
                                }(this), this.saxParser.onclosetag = function (t) {
                                    return function () {
                                        var n, i, a, u, c, l, p, d, f, g;
                                        if (l = r.pop(), c = l["#name"], t.options.explicitChildren && t.options.preserveChildrenOrder || delete l["#name"], !0 === l.cdata && (n = l.cdata, delete l.cdata), f = r[r.length - 1], l[e].match(/^\s*$/) && !n ? (i = l[e], delete l[e]) : (t.options.trim && (l[e] = l[e].trim()), t.options.normalize && (l[e] = l[e].replace(/\s{2,}/g, " ").trim()), l[e] = t.options.valueProcessors ? s(t.options.valueProcessors, l[e], c) : l[e], 1 === Object.keys(l).length && e in l && !t.EXPLICIT_CHARKEY && (l = l[e])), o(l) && (l = "" !== t.options.emptyTag ? t.options.emptyTag : i), null != t.options.validator && (g = "/" + function () {
                                                var t, e, n;
                                                for (n = [], t = 0, e = r.length; t < e; t++) n.push((u = r[t])["#name"]);
                                                return n
                                            }().concat(c).join("/"), function () {
                                                try {
                                                    l = t.options.validator(g, f && f[c], l)
                                                } catch (e) {
                                                    return t.emit("error", e)
                                                }
                                            }()), t.options.explicitChildren && !t.options.mergeAttrs && "object" == typeof l)
                                            if (t.options.preserveChildrenOrder) {
                                                if (f) {
                                                    for (a in f[t.options.childkey] = f[t.options.childkey] || [], p = {}, l) h.call(l, a) && (p[a] = l[a]);
                                                    f[t.options.childkey].push(p), delete l["#name"], 1 === Object.keys(l).length && e in l && !t.EXPLICIT_CHARKEY && (l = l[e])
                                                }
                                            } else u = {}, t.options.attrkey in l && (u[t.options.attrkey] = l[t.options.attrkey], delete l[t.options.attrkey]), !t.options.charsAsChildren && t.options.charkey in l && (u[t.options.charkey] = l[t.options.charkey], delete l[t.options.charkey]), Object.getOwnPropertyNames(l).length > 0 && (u[t.options.childkey] = l), l = u;
                                        return r.length > 0 ? t.assignOrPush(f, c, l) : (t.options.explicitRoot && (d = l, (l = {})[c] = d), t.resultObject = l, t.saxParser.ended = !0, t.emit("end", t.resultObject))
                                    }
                                }(this), n = function (t) {
                                    return function (n) {
                                        var i, o;
                                        if (o = r[r.length - 1]) return o[e] += n, t.options.explicitChildren && t.options.preserveChildrenOrder && t.options.charsAsChildren && (t.options.includeWhiteChars || "" !== n.replace(/\\n/g, "").trim()) && (o[t.options.childkey] = o[t.options.childkey] || [], (i = {
                                            "#name": "__text__"
                                        })[e] = n, t.options.normalize && (i[e] = i[e].replace(/\s{2,}/g, " ").trim()), o[t.options.childkey].push(i)), o
                                    }
                                }(this), this.saxParser.ontext = n, this.saxParser.oncdata = function (t) {
                                    var e;
                                    if (e = n(t)) return e.cdata = !0
                                }
                            }, i.prototype.parseString = function (e, n) {
                                var r;
                                null != n && "function" == typeof n && (this.on("end", (function (t) {
                                    return this.reset(), n(null, t)
                                })), this.on("error", (function (t) {
                                    return this.reset(), n(t)
                                })));
                                try {
                                    return "" === (e = e.toString()).trim() ? (this.emit("end", null), !0) : (e = t.stripBOM(e), this.options.async ? (this.remaining = e, c(this.processAsync), this.saxParser) : this.saxParser.write(e).close())
                                } catch (i) {
                                    if (r = i, !this.saxParser.errThrown && !this.saxParser.ended) return this.emit("error", r), this.saxParser.errThrown = !0;
                                    if (this.saxParser.ended) throw r
                                }
                            }, i.prototype.parseStringPromise = function (t) {
                                return new Promise((e = this, function (n, r) {
                                    return e.parseString(t, (function (t, e) {
                                        return t ? r(t) : n(e)
                                    }))
                                }));
                                var e
                            }, i
                        }(i), e.parseString = function (t, n, r) {
                            var i, o;
                            return null != r ? ("function" == typeof r && (i = r), "object" == typeof n && (o = n)) : ("function" == typeof n && (i = n), o = {}), new e.Parser(o).parseString(t, i)
                        }, e.parseStringPromise = function (t, n) {
                            var r;
                            return "object" == typeof n && (r = n), new e.Parser(r).parseStringPromise(t)
                        }
                    }).call(this)
                },
                rgrL: function (t, e, n) {
                    (function () {
                        var e, r, i, o, s, a, u, c = {}.hasOwnProperty;
                        u = n("RfOz").isPlainObject, i = n("Cm3p"), r = n("i6Br"), o = n("kud4"), e = n("Bl63"), a = n("WmE4"), s = n("HwjW"), t.exports = function (t) {
                            function n(t) {
                                n.__super__.constructor.call(this, null), this.name = "#document", this.type = e.Document, this.documentURI = null, this.domConfig = new r, t || (t = {}), t.writer || (t.writer = new s), this.options = t, this.stringify = new a(t)
                            }
                            return function (t, e) {
                                for (var n in e) c.call(e, n) && (t[n] = e[n]);

                                function r() {
                                    this.constructor = t
                                }
                                r.prototype = e.prototype, t.prototype = new r, t.__super__ = e.prototype
                            }(n, t), Object.defineProperty(n.prototype, "implementation", {
                                value: new i
                            }), Object.defineProperty(n.prototype, "doctype", {
                                get: function () {
                                    var t, n, r, i;
                                    for (n = 0, r = (i = this.children).length; n < r; n++)
                                        if ((t = i[n]).type === e.DocType) return t;
                                    return null
                                }
                            }), Object.defineProperty(n.prototype, "documentElement", {
                                get: function () {
                                    return this.rootObject || null
                                }
                            }), Object.defineProperty(n.prototype, "inputEncoding", {
                                get: function () {
                                    return null
                                }
                            }), Object.defineProperty(n.prototype, "strictErrorChecking", {
                                get: function () {
                                    return !1
                                }
                            }), Object.defineProperty(n.prototype, "xmlEncoding", {
                                get: function () {
                                    return 0 !== this.children.length && this.children[0].type === e.Declaration ? this.children[0].encoding : null
                                }
                            }), Object.defineProperty(n.prototype, "xmlStandalone", {
                                get: function () {
                                    return 0 !== this.children.length && this.children[0].type === e.Declaration && "yes" === this.children[0].standalone
                                }
                            }), Object.defineProperty(n.prototype, "xmlVersion", {
                                get: function () {
                                    return 0 !== this.children.length && this.children[0].type === e.Declaration ? this.children[0].version : "1.0"
                                }
                            }), Object.defineProperty(n.prototype, "URL", {
                                get: function () {
                                    return this.documentURI
                                }
                            }), Object.defineProperty(n.prototype, "origin", {
                                get: function () {
                                    return null
                                }
                            }), Object.defineProperty(n.prototype, "compatMode", {
                                get: function () {
                                    return null
                                }
                            }), Object.defineProperty(n.prototype, "characterSet", {
                                get: function () {
                                    return null
                                }
                            }), Object.defineProperty(n.prototype, "contentType", {
                                get: function () {
                                    return null
                                }
                            }), n.prototype.end = function (t) {
                                var e;
                                return e = {}, t ? u(t) && (e = t, t = this.options.writer) : t = this.options.writer, t.document(this, t.filterOptions(e))
                            }, n.prototype.toString = function (t) {
                                return this.options.writer.document(this, this.options.writer.filterOptions(t))
                            }, n.prototype.createElement = function (t) {
                                throw new Error("This DOM method is not implemented." + this.debugInfo())
                            }, n.prototype.createDocumentFragment = function () {
                                throw new Error("This DOM method is not implemented." + this.debugInfo())
                            }, n.prototype.createTextNode = function (t) {
                                throw new Error("This DOM method is not implemented." + this.debugInfo())
                            }, n.prototype.createComment = function (t) {
                                throw new Error("This DOM method is not implemented." + this.debugInfo())
                            }, n.prototype.createCDATASection = function (t) {
                                throw new Error("This DOM method is not implemented." + this.debugInfo())
                            }, n.prototype.createProcessingInstruction = function (t, e) {
                                throw new Error("This DOM method is not implemented." + this.debugInfo())
                            }, n.prototype.createAttribute = function (t) {
                                throw new Error("This DOM method is not implemented." + this.debugInfo())
                            }, n.prototype.createEntityReference = function (t) {
                                throw new Error("This DOM method is not implemented." + this.debugInfo())
                            }, n.prototype.getElementsByTagName = function (t) {
                                throw new Error("This DOM method is not implemented." + this.debugInfo())
                            }, n.prototype.importNode = function (t, e) {
                                throw new Error("This DOM method is not implemented." + this.debugInfo())
                            }, n.prototype.createElementNS = function (t, e) {
                                throw new Error("This DOM method is not implemented." + this.debugInfo())
                            }, n.prototype.createAttributeNS = function (t, e) {
                                throw new Error("This DOM method is not implemented." + this.debugInfo())
                            }, n.prototype.getElementsByTagNameNS = function (t, e) {
                                throw new Error("This DOM method is not implemented." + this.debugInfo())
                            }, n.prototype.getElementById = function (t) {
                                throw new Error("This DOM method is not implemented." + this.debugInfo())
                            }, n.prototype.adoptNode = function (t) {
                                throw new Error("This DOM method is not implemented." + this.debugInfo())
                            }, n.prototype.normalizeDocument = function () {
                                throw new Error("This DOM method is not implemented." + this.debugInfo())
                            }, n.prototype.renameNode = function (t, e, n) {
                                throw new Error("This DOM method is not implemented." + this.debugInfo())
                            }, n.prototype.getElementsByClassName = function (t) {
                                throw new Error("This DOM method is not implemented." + this.debugInfo())
                            }, n.prototype.createEvent = function (t) {
                                throw new Error("This DOM method is not implemented." + this.debugInfo())
                            }, n.prototype.createRange = function () {
                                throw new Error("This DOM method is not implemented." + this.debugInfo())
                            }, n.prototype.createNodeIterator = function (t, e, n) {
                                throw new Error("This DOM method is not implemented." + this.debugInfo())
                            }, n.prototype.createTreeWalker = function (t, e, n) {
                                throw new Error("This DOM method is not implemented." + this.debugInfo())
                            }, n
                        }(o)
                    }).call(this)
                },
                tjlA: function (t, e, n) {
                    "use strict";
                    var r = n("H7XF"),
                        i = n("kVK+"),
                        o = n("49sm");

                    function s() {
                        return u.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
                    }

                    function a(t, e) {
                        if (s() < e) throw new RangeError("Invalid typed array length");
                        return u.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e)).__proto__ = u.prototype : (null === t && (t = new u(e)), t.length = e), t
                    }

                    function u(t, e, n) {
                        if (!(u.TYPED_ARRAY_SUPPORT || this instanceof u)) return new u(t, e, n);
                        if ("number" == typeof t) {
                            if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string");
                            return h(this, t)
                        }
                        return c(this, t, e, n)
                    }

                    function c(t, e, n, r) {
                        if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
                        return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? function (t, e, n, r) {
                            if (n < 0 || e.byteLength < n) throw new RangeError("'offset' is out of bounds");
                            if (e.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
                            return e = void 0 === n && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, n) : new Uint8Array(e, n, r), u.TYPED_ARRAY_SUPPORT ? (t = e).__proto__ = u.prototype : t = p(t, e), t
                        }(t, e, n, r) : "string" == typeof e ? function (t, e, n) {
                            if ("string" == typeof n && "" !== n || (n = "utf8"), !u.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
                            var r = 0 | f(e, n),
                                i = (t = a(t, r)).write(e, n);
                            return i !== r && (t = t.slice(0, i)), t
                        }(t, e, n) : function (t, e) {
                            if (u.isBuffer(e)) {
                                var n = 0 | d(e.length);
                                return 0 === (t = a(t, n)).length || e.copy(t, 0, 0, n), t
                            }
                            if (e) {
                                if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || (r = e.length) != r ? a(t, 0) : p(t, e);
                                if ("Buffer" === e.type && o(e.data)) return p(t, e.data)
                            }
                            var r;
                            throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                        }(t, e)
                    }

                    function l(t) {
                        if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
                        if (t < 0) throw new RangeError('"size" argument must not be negative')
                    }

                    function h(t, e) {
                        if (l(e), t = a(t, e < 0 ? 0 : 0 | d(e)), !u.TYPED_ARRAY_SUPPORT)
                            for (var n = 0; n < e; ++n) t[n] = 0;
                        return t
                    }

                    function p(t, e) {
                        var n = e.length < 0 ? 0 : 0 | d(e.length);
                        t = a(t, n);
                        for (var r = 0; r < n; r += 1) t[r] = 255 & e[r];
                        return t
                    }

                    function d(t) {
                        if (t >= s()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s().toString(16) + " bytes");
                        return 0 | t
                    }

                    function f(t, e) {
                        if (u.isBuffer(t)) return t.length;
                        if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
                        "string" != typeof t && (t = "" + t);
                        var n = t.length;
                        if (0 === n) return 0;
                        for (var r = !1;;) switch (e) {
                            case "ascii":
                            case "latin1":
                            case "binary":
                                return n;
                            case "utf8":
                            case "utf-8":
                            case void 0:
                                return F(t).length;
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return 2 * n;
                            case "hex":
                                return n >>> 1;
                            case "base64":
                                return B(t).length;
                            default:
                                if (r) return F(t).length;
                                e = ("" + e).toLowerCase(), r = !0
                        }
                    }

                    function g(t, e, n) {
                        var r = !1;
                        if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
                        if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
                        if ((n >>>= 0) <= (e >>>= 0)) return "";
                        for (t || (t = "utf8");;) switch (t) {
                            case "hex":
                                return A(this, e, n);
                            case "utf8":
                            case "utf-8":
                                return x(this, e, n);
                            case "ascii":
                                return S(this, e, n);
                            case "latin1":
                            case "binary":
                                return I(this, e, n);
                            case "base64":
                                return O(this, e, n);
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return P(this, e, n);
                            default:
                                if (r) throw new TypeError("Unknown encoding: " + t);
                                t = (t + "").toLowerCase(), r = !0
                        }
                    }

                    function m(t, e, n) {
                        var r = t[e];
                        t[e] = t[n], t[n] = r
                    }

                    function y(t, e, n, r, i) {
                        if (0 === t.length) return -1;
                        if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = i ? 0 : t.length - 1), n < 0 && (n = t.length + n), n >= t.length) {
                            if (i) return -1;
                            n = t.length - 1
                        } else if (n < 0) {
                            if (!i) return -1;
                            n = 0
                        }
                        if ("string" == typeof e && (e = u.from(e, r)), u.isBuffer(e)) return 0 === e.length ? -1 : b(t, e, n, r, i);
                        if ("number" == typeof e) return e &= 255, u.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, e, n) : Uint8Array.prototype.lastIndexOf.call(t, e, n) : b(t, [e], n, r, i);
                        throw new TypeError("val must be string, number or Buffer")
                    }

                    function b(t, e, n, r, i) {
                        var o, s = 1,
                            a = t.length,
                            u = e.length;
                        if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                            if (t.length < 2 || e.length < 2) return -1;
                            s = 2, a /= 2, u /= 2, n /= 2
                        }

                        function c(t, e) {
                            return 1 === s ? t[e] : t.readUInt16BE(e * s)
                        }
                        if (i) {
                            var l = -1;
                            for (o = n; o < a; o++)
                                if (c(t, o) === c(e, -1 === l ? 0 : o - l)) {
                                    if (-1 === l && (l = o), o - l + 1 === u) return l * s
                                } else -1 !== l && (o -= o - l), l = -1
                        } else
                            for (n + u > a && (n = a - u), o = n; o >= 0; o--) {
                                for (var h = !0, p = 0; p < u; p++)
                                    if (c(t, o + p) !== c(e, p)) {
                                        h = !1;
                                        break
                                    } if (h) return o
                            }
                        return -1
                    }

                    function w(t, e, n, r) {
                        n = Number(n) || 0;
                        var i = t.length - n;
                        r ? (r = Number(r)) > i && (r = i) : r = i;
                        var o = e.length;
                        if (o % 2 != 0) throw new TypeError("Invalid hex string");
                        r > o / 2 && (r = o / 2);
                        for (var s = 0; s < r; ++s) {
                            var a = parseInt(e.substr(2 * s, 2), 16);
                            if (isNaN(a)) return s;
                            t[n + s] = a
                        }
                        return s
                    }

                    function v(t, e, n, r) {
                        return H(F(e, t.length - n), t, n, r)
                    }

                    function _(t, e, n, r) {
                        return H(function (t) {
                            for (var e = [], n = 0; n < t.length; ++n) e.push(255 & t.charCodeAt(n));
                            return e
                        }(e), t, n, r)
                    }

                    function E(t, e, n, r) {
                        return _(t, e, n, r)
                    }

                    function T(t, e, n, r) {
                        return H(B(e), t, n, r)
                    }

                    function C(t, e, n, r) {
                        return H(function (t, e) {
                            for (var n, r, i = [], o = 0; o < t.length && !((e -= 2) < 0); ++o) r = (n = t.charCodeAt(o)) >> 8, i.push(n % 256), i.push(r);
                            return i
                        }(e, t.length - n), t, n, r)
                    }

                    function O(t, e, n) {
                        return r.fromByteArray(0 === e && n === t.length ? t : t.slice(e, n))
                    }

                    function x(t, e, n) {
                        n = Math.min(t.length, n);
                        for (var r = [], i = e; i < n;) {
                            var o, s, a, u, c = t[i],
                                l = null,
                                h = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
                            if (i + h <= n) switch (h) {
                                case 1:
                                    c < 128 && (l = c);
                                    break;
                                case 2:
                                    128 == (192 & (o = t[i + 1])) && (u = (31 & c) << 6 | 63 & o) > 127 && (l = u);
                                    break;
                                case 3:
                                    s = t[i + 2], 128 == (192 & (o = t[i + 1])) && 128 == (192 & s) && (u = (15 & c) << 12 | (63 & o) << 6 | 63 & s) > 2047 && (u < 55296 || u > 57343) && (l = u);
                                    break;
                                case 4:
                                    s = t[i + 2], a = t[i + 3], 128 == (192 & (o = t[i + 1])) && 128 == (192 & s) && 128 == (192 & a) && (u = (15 & c) << 18 | (63 & o) << 12 | (63 & s) << 6 | 63 & a) > 65535 && u < 1114112 && (l = u)
                            }
                            null === l ? (l = 65533, h = 1) : l > 65535 && (r.push((l -= 65536) >>> 10 & 1023 | 55296), l = 56320 | 1023 & l), r.push(l), i += h
                        }
                        return function (t) {
                            var e = t.length;
                            if (e <= 4096) return String.fromCharCode.apply(String, t);
                            for (var n = "", r = 0; r < e;) n += String.fromCharCode.apply(String, t.slice(r, r += 4096));
                            return n
                        }(r)
                    }

                    function S(t, e, n) {
                        var r = "";
                        n = Math.min(t.length, n);
                        for (var i = e; i < n; ++i) r += String.fromCharCode(127 & t[i]);
                        return r
                    }

                    function I(t, e, n) {
                        var r = "";
                        n = Math.min(t.length, n);
                        for (var i = e; i < n; ++i) r += String.fromCharCode(t[i]);
                        return r
                    }

                    function A(t, e, n) {
                        var r, i = t.length;
                        (!e || e < 0) && (e = 0), (!n || n < 0 || n > i) && (n = i);
                        for (var o = "", s = e; s < n; ++s) o += (r = t[s]) < 16 ? "0" + r.toString(16) : r.toString(16);
                        return o
                    }

                    function P(t, e, n) {
                        for (var r = t.slice(e, n), i = "", o = 0; o < r.length; o += 2) i += String.fromCharCode(r[o] + 256 * r[o + 1]);
                        return i
                    }

                    function N(t, e, n) {
                        if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
                        if (t + e > n) throw new RangeError("Trying to access beyond buffer length")
                    }

                    function D(t, e, n, r, i, o) {
                        if (!u.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
                        if (e > i || e < o) throw new RangeError('"value" argument is out of bounds');
                        if (n + r > t.length) throw new RangeError("Index out of range")
                    }

                    function j(t, e, n, r) {
                        e < 0 && (e = 65535 + e + 1);
                        for (var i = 0, o = Math.min(t.length - n, 2); i < o; ++i) t[n + i] = (e & 255 << 8 * (r ? i : 1 - i)) >>> 8 * (r ? i : 1 - i)
                    }

                    function R(t, e, n, r) {
                        e < 0 && (e = 4294967295 + e + 1);
                        for (var i = 0, o = Math.min(t.length - n, 4); i < o; ++i) t[n + i] = e >>> 8 * (r ? i : 3 - i) & 255
                    }

                    function k(t, e, n, r, i, o) {
                        if (n + r > t.length) throw new RangeError("Index out of range");
                        if (n < 0) throw new RangeError("Index out of range")
                    }

                    function L(t, e, n, r, o) {
                        return o || k(t, 0, n, 4), i.write(t, e, n, r, 23, 4), n + 4
                    }

                    function M(t, e, n, r, o) {
                        return o || k(t, 0, n, 8), i.write(t, e, n, r, 52, 8), n + 8
                    }
                    e.Buffer = u, e.SlowBuffer = function (t) {
                        return +t != t && (t = 0), u.alloc(+t)
                    }, e.INSPECT_MAX_BYTES = 50, u.TYPED_ARRAY_SUPPORT = void 0 !== global.TYPED_ARRAY_SUPPORT ? global.TYPED_ARRAY_SUPPORT : function () {
                        try {
                            var t = new Uint8Array(1);
                            return t.__proto__ = {
                                __proto__: Uint8Array.prototype,
                                foo: function () {
                                    return 42
                                }
                            }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength
                        } catch (e) {
                            return !1
                        }
                    }(), e.kMaxLength = s(), u.poolSize = 8192, u._augment = function (t) {
                        return t.__proto__ = u.prototype, t
                    }, u.from = function (t, e, n) {
                        return c(null, t, e, n)
                    }, u.TYPED_ARRAY_SUPPORT && (u.prototype.__proto__ = Uint8Array.prototype, u.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && u[Symbol.species] === u && Object.defineProperty(u, Symbol.species, {
                        value: null,
                        configurable: !0
                    })), u.alloc = function (t, e, n) {
                        return function (t, e, n, r) {
                            return l(e), e <= 0 ? a(null, e) : void 0 !== n ? "string" == typeof r ? a(null, e).fill(n, r) : a(null, e).fill(n) : a(null, e)
                        }(0, t, e, n)
                    }, u.allocUnsafe = function (t) {
                        return h(null, t)
                    }, u.allocUnsafeSlow = function (t) {
                        return h(null, t)
                    }, u.isBuffer = function (t) {
                        return !(null == t || !t._isBuffer)
                    }, u.compare = function (t, e) {
                        if (!u.isBuffer(t) || !u.isBuffer(e)) throw new TypeError("Arguments must be Buffers");
                        if (t === e) return 0;
                        for (var n = t.length, r = e.length, i = 0, o = Math.min(n, r); i < o; ++i)
                            if (t[i] !== e[i]) {
                                n = t[i], r = e[i];
                                break
                            } return n < r ? -1 : r < n ? 1 : 0
                    }, u.isEncoding = function (t) {
                        switch (String(t).toLowerCase()) {
                            case "hex":
                            case "utf8":
                            case "utf-8":
                            case "ascii":
                            case "latin1":
                            case "binary":
                            case "base64":
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return !0;
                            default:
                                return !1
                        }
                    }, u.concat = function (t, e) {
                        if (!o(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                        if (0 === t.length) return u.alloc(0);
                        var n;
                        if (void 0 === e)
                            for (e = 0, n = 0; n < t.length; ++n) e += t[n].length;
                        var r = u.allocUnsafe(e),
                            i = 0;
                        for (n = 0; n < t.length; ++n) {
                            var s = t[n];
                            if (!u.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
                            s.copy(r, i), i += s.length
                        }
                        return r
                    }, u.byteLength = f, u.prototype._isBuffer = !0, u.prototype.swap16 = function () {
                        var t = this.length;
                        if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                        for (var e = 0; e < t; e += 2) m(this, e, e + 1);
                        return this
                    }, u.prototype.swap32 = function () {
                        var t = this.length;
                        if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                        for (var e = 0; e < t; e += 4) m(this, e, e + 3), m(this, e + 1, e + 2);
                        return this
                    }, u.prototype.swap64 = function () {
                        var t = this.length;
                        if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                        for (var e = 0; e < t; e += 8) m(this, e, e + 7), m(this, e + 1, e + 6), m(this, e + 2, e + 5), m(this, e + 3, e + 4);
                        return this
                    }, u.prototype.toString = function () {
                        var t = 0 | this.length;
                        return 0 === t ? "" : 0 === arguments.length ? x(this, 0, t) : g.apply(this, arguments)
                    }, u.prototype.equals = function (t) {
                        if (!u.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                        return this === t || 0 === u.compare(this, t)
                    }, u.prototype.inspect = function () {
                        var t = "",
                            n = e.INSPECT_MAX_BYTES;
                        return this.length > 0 && (t = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (t += " ... ")), "<Buffer " + t + ">"
                    }, u.prototype.compare = function (t, e, n, r, i) {
                        if (!u.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                        if (void 0 === e && (e = 0), void 0 === n && (n = t ? t.length : 0), void 0 === r && (r = 0), void 0 === i && (i = this.length), e < 0 || n > t.length || r < 0 || i > this.length) throw new RangeError("out of range index");
                        if (r >= i && e >= n) return 0;
                        if (r >= i) return -1;
                        if (e >= n) return 1;
                        if (this === t) return 0;
                        for (var o = (i >>>= 0) - (r >>>= 0), s = (n >>>= 0) - (e >>>= 0), a = Math.min(o, s), c = this.slice(r, i), l = t.slice(e, n), h = 0; h < a; ++h)
                            if (c[h] !== l[h]) {
                                o = c[h], s = l[h];
                                break
                            } return o < s ? -1 : s < o ? 1 : 0
                    }, u.prototype.includes = function (t, e, n) {
                        return -1 !== this.indexOf(t, e, n)
                    }, u.prototype.indexOf = function (t, e, n) {
                        return y(this, t, e, n, !0)
                    }, u.prototype.lastIndexOf = function (t, e, n) {
                        return y(this, t, e, n, !1)
                    }, u.prototype.write = function (t, e, n, r) {
                        if (void 0 === e) r = "utf8", n = this.length, e = 0;
                        else if (void 0 === n && "string" == typeof e) r = e, n = this.length, e = 0;
                        else {
                            if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                            e |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
                        }
                        var i = this.length - e;
                        if ((void 0 === n || n > i) && (n = i), t.length > 0 && (n < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                        r || (r = "utf8");
                        for (var o = !1;;) switch (r) {
                            case "hex":
                                return w(this, t, e, n);
                            case "utf8":
                            case "utf-8":
                                return v(this, t, e, n);
                            case "ascii":
                                return _(this, t, e, n);
                            case "latin1":
                            case "binary":
                                return E(this, t, e, n);
                            case "base64":
                                return T(this, t, e, n);
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return C(this, t, e, n);
                            default:
                                if (o) throw new TypeError("Unknown encoding: " + r);
                                r = ("" + r).toLowerCase(), o = !0
                        }
                    }, u.prototype.toJSON = function () {
                        return {
                            type: "Buffer",
                            data: Array.prototype.slice.call(this._arr || this, 0)
                        }
                    }, u.prototype.slice = function (t, e) {
                        var n, r = this.length;
                        if ((t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), (e = void 0 === e ? r : ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), e < t && (e = t), u.TYPED_ARRAY_SUPPORT)(n = this.subarray(t, e)).__proto__ = u.prototype;
                        else {
                            var i = e - t;
                            n = new u(i, void 0);
                            for (var o = 0; o < i; ++o) n[o] = this[o + t]
                        }
                        return n
                    }, u.prototype.readUIntLE = function (t, e, n) {
                        t |= 0, e |= 0, n || N(t, e, this.length);
                        for (var r = this[t], i = 1, o = 0; ++o < e && (i *= 256);) r += this[t + o] * i;
                        return r
                    }, u.prototype.readUIntBE = function (t, e, n) {
                        t |= 0, e |= 0, n || N(t, e, this.length);
                        for (var r = this[t + --e], i = 1; e > 0 && (i *= 256);) r += this[t + --e] * i;
                        return r
                    }, u.prototype.readUInt8 = function (t, e) {
                        return e || N(t, 1, this.length), this[t]
                    }, u.prototype.readUInt16LE = function (t, e) {
                        return e || N(t, 2, this.length), this[t] | this[t + 1] << 8
                    }, u.prototype.readUInt16BE = function (t, e) {
                        return e || N(t, 2, this.length), this[t] << 8 | this[t + 1]
                    }, u.prototype.readUInt32LE = function (t, e) {
                        return e || N(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
                    }, u.prototype.readUInt32BE = function (t, e) {
                        return e || N(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
                    }, u.prototype.readIntLE = function (t, e, n) {
                        t |= 0, e |= 0, n || N(t, e, this.length);
                        for (var r = this[t], i = 1, o = 0; ++o < e && (i *= 256);) r += this[t + o] * i;
                        return r >= (i *= 128) && (r -= Math.pow(2, 8 * e)), r
                    }, u.prototype.readIntBE = function (t, e, n) {
                        t |= 0, e |= 0, n || N(t, e, this.length);
                        for (var r = e, i = 1, o = this[t + --r]; r > 0 && (i *= 256);) o += this[t + --r] * i;
                        return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)), o
                    }, u.prototype.readInt8 = function (t, e) {
                        return e || N(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
                    }, u.prototype.readInt16LE = function (t, e) {
                        e || N(t, 2, this.length);
                        var n = this[t] | this[t + 1] << 8;
                        return 32768 & n ? 4294901760 | n : n
                    }, u.prototype.readInt16BE = function (t, e) {
                        e || N(t, 2, this.length);
                        var n = this[t + 1] | this[t] << 8;
                        return 32768 & n ? 4294901760 | n : n
                    }, u.prototype.readInt32LE = function (t, e) {
                        return e || N(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
                    }, u.prototype.readInt32BE = function (t, e) {
                        return e || N(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
                    }, u.prototype.readFloatLE = function (t, e) {
                        return e || N(t, 4, this.length), i.read(this, t, !0, 23, 4)
                    }, u.prototype.readFloatBE = function (t, e) {
                        return e || N(t, 4, this.length), i.read(this, t, !1, 23, 4)
                    }, u.prototype.readDoubleLE = function (t, e) {
                        return e || N(t, 8, this.length), i.read(this, t, !0, 52, 8)
                    }, u.prototype.readDoubleBE = function (t, e) {
                        return e || N(t, 8, this.length), i.read(this, t, !1, 52, 8)
                    }, u.prototype.writeUIntLE = function (t, e, n, r) {
                        t = +t, e |= 0, n |= 0, r || D(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
                        var i = 1,
                            o = 0;
                        for (this[e] = 255 & t; ++o < n && (i *= 256);) this[e + o] = t / i & 255;
                        return e + n
                    }, u.prototype.writeUIntBE = function (t, e, n, r) {
                        t = +t, e |= 0, n |= 0, r || D(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
                        var i = n - 1,
                            o = 1;
                        for (this[e + i] = 255 & t; --i >= 0 && (o *= 256);) this[e + i] = t / o & 255;
                        return e + n
                    }, u.prototype.writeUInt8 = function (t, e, n) {
                        return t = +t, e |= 0, n || D(this, t, e, 1, 255, 0), u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[e] = 255 & t, e + 1
                    }, u.prototype.writeUInt16LE = function (t, e, n) {
                        return t = +t, e |= 0, n || D(this, t, e, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : j(this, t, e, !0), e + 2
                    }, u.prototype.writeUInt16BE = function (t, e, n) {
                        return t = +t, e |= 0, n || D(this, t, e, 2, 65535, 0), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : j(this, t, e, !1), e + 2
                    }, u.prototype.writeUInt32LE = function (t, e, n) {
                        return t = +t, e |= 0, n || D(this, t, e, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : R(this, t, e, !0), e + 4
                    }, u.prototype.writeUInt32BE = function (t, e, n) {
                        return t = +t, e |= 0, n || D(this, t, e, 4, 4294967295, 0), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : R(this, t, e, !1), e + 4
                    }, u.prototype.writeIntLE = function (t, e, n, r) {
                        if (t = +t, e |= 0, !r) {
                            var i = Math.pow(2, 8 * n - 1);
                            D(this, t, e, n, i - 1, -i)
                        }
                        var o = 0,
                            s = 1,
                            a = 0;
                        for (this[e] = 255 & t; ++o < n && (s *= 256);) t < 0 && 0 === a && 0 !== this[e + o - 1] && (a = 1), this[e + o] = (t / s >> 0) - a & 255;
                        return e + n
                    }, u.prototype.writeIntBE = function (t, e, n, r) {
                        if (t = +t, e |= 0, !r) {
                            var i = Math.pow(2, 8 * n - 1);
                            D(this, t, e, n, i - 1, -i)
                        }
                        var o = n - 1,
                            s = 1,
                            a = 0;
                        for (this[e + o] = 255 & t; --o >= 0 && (s *= 256);) t < 0 && 0 === a && 0 !== this[e + o + 1] && (a = 1), this[e + o] = (t / s >> 0) - a & 255;
                        return e + n
                    }, u.prototype.writeInt8 = function (t, e, n) {
                        return t = +t, e |= 0, n || D(this, t, e, 1, 127, -128), u.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
                    }, u.prototype.writeInt16LE = function (t, e, n) {
                        return t = +t, e |= 0, n || D(this, t, e, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : j(this, t, e, !0), e + 2
                    }, u.prototype.writeInt16BE = function (t, e, n) {
                        return t = +t, e |= 0, n || D(this, t, e, 2, 32767, -32768), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : j(this, t, e, !1), e + 2
                    }, u.prototype.writeInt32LE = function (t, e, n) {
                        return t = +t, e |= 0, n || D(this, t, e, 4, 2147483647, -2147483648), u.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : R(this, t, e, !0), e + 4
                    }, u.prototype.writeInt32BE = function (t, e, n) {
                        return t = +t, e |= 0, n || D(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), u.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : R(this, t, e, !1), e + 4
                    }, u.prototype.writeFloatLE = function (t, e, n) {
                        return L(this, t, e, !0, n)
                    }, u.prototype.writeFloatBE = function (t, e, n) {
                        return L(this, t, e, !1, n)
                    }, u.prototype.writeDoubleLE = function (t, e, n) {
                        return M(this, t, e, !0, n)
                    }, u.prototype.writeDoubleBE = function (t, e, n) {
                        return M(this, t, e, !1, n)
                    }, u.prototype.copy = function (t, e, n, r) {
                        if (n || (n = 0), r || 0 === r || (r = this.length), e >= t.length && (e = t.length), e || (e = 0), r > 0 && r < n && (r = n), r === n) return 0;
                        if (0 === t.length || 0 === this.length) return 0;
                        if (e < 0) throw new RangeError("targetStart out of bounds");
                        if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
                        if (r < 0) throw new RangeError("sourceEnd out of bounds");
                        r > this.length && (r = this.length), t.length - e < r - n && (r = t.length - e + n);
                        var i, o = r - n;
                        if (this === t && n < e && e < r)
                            for (i = o - 1; i >= 0; --i) t[i + e] = this[i + n];
                        else if (o < 1e3 || !u.TYPED_ARRAY_SUPPORT)
                            for (i = 0; i < o; ++i) t[i + e] = this[i + n];
                        else Uint8Array.prototype.set.call(t, this.subarray(n, n + o), e);
                        return o
                    }, u.prototype.fill = function (t, e, n, r) {
                        if ("string" == typeof t) {
                            if ("string" == typeof e ? (r = e, e = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === t.length) {
                                var i = t.charCodeAt(0);
                                i < 256 && (t = i)
                            }
                            if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
                            if ("string" == typeof r && !u.isEncoding(r)) throw new TypeError("Unknown encoding: " + r)
                        } else "number" == typeof t && (t &= 255);
                        if (e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index");
                        if (n <= e) return this;
                        var o;
                        if (e >>>= 0, n = void 0 === n ? this.length : n >>> 0, t || (t = 0), "number" == typeof t)
                            for (o = e; o < n; ++o) this[o] = t;
                        else {
                            var s = u.isBuffer(t) ? t : F(new u(t, r).toString()),
                                a = s.length;
                            for (o = 0; o < n - e; ++o) this[o + e] = s[o % a]
                        }
                        return this
                    };
                    var U = /[^+\/0-9A-Za-z-_]/g;

                    function F(t, e) {
                        var n;
                        e = e || 1 / 0;
                        for (var r = t.length, i = null, o = [], s = 0; s < r; ++s) {
                            if ((n = t.charCodeAt(s)) > 55295 && n < 57344) {
                                if (!i) {
                                    if (n > 56319) {
                                        (e -= 3) > -1 && o.push(239, 191, 189);
                                        continue
                                    }
                                    if (s + 1 === r) {
                                        (e -= 3) > -1 && o.push(239, 191, 189);
                                        continue
                                    }
                                    i = n;
                                    continue
                                }
                                if (n < 56320) {
                                    (e -= 3) > -1 && o.push(239, 191, 189), i = n;
                                    continue
                                }
                                n = 65536 + (i - 55296 << 10 | n - 56320)
                            } else i && (e -= 3) > -1 && o.push(239, 191, 189);
                            if (i = null, n < 128) {
                                if ((e -= 1) < 0) break;
                                o.push(n)
                            } else if (n < 2048) {
                                if ((e -= 2) < 0) break;
                                o.push(n >> 6 | 192, 63 & n | 128)
                            } else if (n < 65536) {
                                if ((e -= 3) < 0) break;
                                o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                            } else {
                                if (!(n < 1114112)) throw new Error("Invalid code point");
                                if ((e -= 4) < 0) break;
                                o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                            }
                        }
                        return o
                    }

                    function B(t) {
                        return r.toByteArray(function (t) {
                            if ((t = function (t) {
                                    return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
                                }(t).replace(U, "")).length < 2) return "";
                            for (; t.length % 4 != 0;) t += "=";
                            return t
                        }(t))
                    }

                    function H(t, e, n, r) {
                        for (var i = 0; i < r && !(i + n >= e.length || i >= t.length); ++i) e[i + n] = t[i];
                        return i
                    }
                },
                "tk/3": function (t, e, n) {
                    "use strict";
                    n.d(e, "a", (function () {
                        return x
                    })), n.d(e, "b", (function () {
                        return H
                    })), n.d(e, "c", (function () {
                        return g
                    }));
                    var r = n("fXoL"),
                        i = n("LRne"),
                        o = n("HDdC"),
                        s = n("bOdf"),
                        a = n("pLZG"),
                        u = n("lJxs"),
                        c = n("ofXK");
                    class l {}
                    class h {}
                    class p {
                        constructor(t) {
                            this.normalizedNames = new Map, this.lazyUpdate = null, t ? this.lazyInit = "string" == typeof t ? () => {
                                this.headers = new Map, t.split("\n").forEach(t => {
                                    const e = t.indexOf(":");
                                    if (e > 0) {
                                        const n = t.slice(0, e),
                                            r = n.toLowerCase(),
                                            i = t.slice(e + 1).trim();
                                        this.maybeSetNormalizedName(n, r), this.headers.has(r) ? this.headers.get(r).push(i) : this.headers.set(r, [i])
                                    }
                                })
                            } : () => {
                                this.headers = new Map, Object.keys(t).forEach(e => {
                                    let n = t[e];
                                    const r = e.toLowerCase();
                                    "string" == typeof n && (n = [n]), n.length > 0 && (this.headers.set(r, n), this.maybeSetNormalizedName(e, r))
                                })
                            } : this.headers = new Map
                        }
                        has(t) {
                            return this.init(), this.headers.has(t.toLowerCase())
                        }
                        get(t) {
                            this.init();
                            const e = this.headers.get(t.toLowerCase());
                            return e && e.length > 0 ? e[0] : null
                        }
                        keys() {
                            return this.init(), Array.from(this.normalizedNames.values())
                        }
                        getAll(t) {
                            return this.init(), this.headers.get(t.toLowerCase()) || null
                        }
                        append(t, e) {
                            return this.clone({
                                name: t,
                                value: e,
                                op: "a"
                            })
                        }
                        set(t, e) {
                            return this.clone({
                                name: t,
                                value: e,
                                op: "s"
                            })
                        }
                        delete(t, e) {
                            return this.clone({
                                name: t,
                                value: e,
                                op: "d"
                            })
                        }
                        maybeSetNormalizedName(t, e) {
                            this.normalizedNames.has(e) || this.normalizedNames.set(e, t)
                        }
                        init() {
                            this.lazyInit && (this.lazyInit instanceof p ? this.copyFrom(this.lazyInit) : this.lazyInit(), this.lazyInit = null, this.lazyUpdate && (this.lazyUpdate.forEach(t => this.applyUpdate(t)), this.lazyUpdate = null))
                        }
                        copyFrom(t) {
                            t.init(), Array.from(t.headers.keys()).forEach(e => {
                                this.headers.set(e, t.headers.get(e)), this.normalizedNames.set(e, t.normalizedNames.get(e))
                            })
                        }
                        clone(t) {
                            const e = new p;
                            return e.lazyInit = this.lazyInit && this.lazyInit instanceof p ? this.lazyInit : this, e.lazyUpdate = (this.lazyUpdate || []).concat([t]), e
                        }
                        applyUpdate(t) {
                            const e = t.name.toLowerCase();
                            switch (t.op) {
                                case "a":
                                case "s":
                                    let n = t.value;
                                    if ("string" == typeof n && (n = [n]), 0 === n.length) return;
                                    this.maybeSetNormalizedName(t.name, e);
                                    const r = ("a" === t.op ? this.headers.get(e) : void 0) || [];
                                    r.push(...n), this.headers.set(e, r);
                                    break;
                                case "d":
                                    const i = t.value;
                                    if (i) {
                                        let t = this.headers.get(e);
                                        if (!t) return;
                                        t = t.filter(t => -1 === i.indexOf(t)), 0 === t.length ? (this.headers.delete(e), this.normalizedNames.delete(e)) : this.headers.set(e, t)
                                    } else this.headers.delete(e), this.normalizedNames.delete(e)
                            }
                        }
                        forEach(t) {
                            this.init(), Array.from(this.normalizedNames.keys()).forEach(e => t(this.normalizedNames.get(e), this.headers.get(e)))
                        }
                    }
                    class d {
                        encodeKey(t) {
                            return f(t)
                        }
                        encodeValue(t) {
                            return f(t)
                        }
                        decodeKey(t) {
                            return decodeURIComponent(t)
                        }
                        decodeValue(t) {
                            return decodeURIComponent(t)
                        }
                    }

                    function f(t) {
                        return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/gi, "$").replace(/%2C/gi, ",").replace(/%3B/gi, ";").replace(/%2B/gi, "+").replace(/%3D/gi, "=").replace(/%3F/gi, "?").replace(/%2F/gi, "/")
                    }
                    class g {
                        constructor(t = {}) {
                            if (this.updates = null, this.cloneFrom = null, this.encoder = t.encoder || new d, t.fromString) {
                                if (t.fromObject) throw new Error("Cannot specify both fromString and fromObject.");
                                this.map = function (t, e) {
                                    const n = new Map;
                                    return t.length > 0 && t.split("&").forEach(t => {
                                        const r = t.indexOf("="),
                                            [i, o] = -1 == r ? [e.decodeKey(t), ""] : [e.decodeKey(t.slice(0, r)), e.decodeValue(t.slice(r + 1))],
                                            s = n.get(i) || [];
                                        s.push(o), n.set(i, s)
                                    }), n
                                }(t.fromString, this.encoder)
                            } else t.fromObject ? (this.map = new Map, Object.keys(t.fromObject).forEach(e => {
                                const n = t.fromObject[e];
                                this.map.set(e, Array.isArray(n) ? n : [n])
                            })) : this.map = null
                        }
                        has(t) {
                            return this.init(), this.map.has(t)
                        }
                        get(t) {
                            this.init();
                            const e = this.map.get(t);
                            return e ? e[0] : null
                        }
                        getAll(t) {
                            return this.init(), this.map.get(t) || null
                        }
                        keys() {
                            return this.init(), Array.from(this.map.keys())
                        }
                        append(t, e) {
                            return this.clone({
                                param: t,
                                value: e,
                                op: "a"
                            })
                        }
                        set(t, e) {
                            return this.clone({
                                param: t,
                                value: e,
                                op: "s"
                            })
                        }
                        delete(t, e) {
                            return this.clone({
                                param: t,
                                value: e,
                                op: "d"
                            })
                        }
                        toString() {
                            return this.init(), this.keys().map(t => {
                                const e = this.encoder.encodeKey(t);
                                return this.map.get(t).map(t => e + "=" + this.encoder.encodeValue(t)).join("&")
                            }).filter(t => "" !== t).join("&")
                        }
                        clone(t) {
                            const e = new g({
                                encoder: this.encoder
                            });
                            return e.cloneFrom = this.cloneFrom || this, e.updates = (this.updates || []).concat([t]), e
                        }
                        init() {
                            null === this.map && (this.map = new Map), null !== this.cloneFrom && (this.cloneFrom.init(), this.cloneFrom.keys().forEach(t => this.map.set(t, this.cloneFrom.map.get(t))), this.updates.forEach(t => {
                                switch (t.op) {
                                    case "a":
                                    case "s":
                                        const e = ("a" === t.op ? this.map.get(t.param) : void 0) || [];
                                        e.push(t.value), this.map.set(t.param, e);
                                        break;
                                    case "d":
                                        if (void 0 === t.value) {
                                            this.map.delete(t.param);
                                            break
                                        } {
                                            let e = this.map.get(t.param) || [];
                                            const n = e.indexOf(t.value); - 1 !== n && e.splice(n, 1), e.length > 0 ? this.map.set(t.param, e) : this.map.delete(t.param)
                                        }
                                }
                            }), this.cloneFrom = this.updates = null)
                        }
                    }

                    function m(t) {
                        return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer
                    }

                    function y(t) {
                        return "undefined" != typeof Blob && t instanceof Blob
                    }

                    function b(t) {
                        return "undefined" != typeof FormData && t instanceof FormData
                    }
                    class w {
                        constructor(t, e, n, r) {
                            let i;
                            if (this.url = e, this.body = null, this.reportProgress = !1, this.withCredentials = !1, this.responseType = "json", this.method = t.toUpperCase(), function (t) {
                                    switch (t) {
                                        case "DELETE":
                                        case "GET":
                                        case "HEAD":
                                        case "OPTIONS":
                                        case "JSONP":
                                            return !1;
                                        default:
                                            return !0
                                    }
                                }(this.method) || r ? (this.body = void 0 !== n ? n : null, i = r) : i = n, i && (this.reportProgress = !!i.reportProgress, this.withCredentials = !!i.withCredentials, i.responseType && (this.responseType = i.responseType), i.headers && (this.headers = i.headers), i.params && (this.params = i.params)), this.headers || (this.headers = new p), this.params) {
                                const t = this.params.toString();
                                if (0 === t.length) this.urlWithParams = e;
                                else {
                                    const n = e.indexOf("?");
                                    this.urlWithParams = e + (-1 === n ? "?" : n < e.length - 1 ? "&" : "") + t
                                }
                            } else this.params = new g, this.urlWithParams = e
                        }
                        serializeBody() {
                            return null === this.body ? null : m(this.body) || y(this.body) || b(this.body) || "string" == typeof this.body ? this.body : this.body instanceof g ? this.body.toString() : "object" == typeof this.body || "boolean" == typeof this.body || Array.isArray(this.body) ? JSON.stringify(this.body) : this.body.toString()
                        }
                        detectContentTypeHeader() {
                            return null === this.body || b(this.body) ? null : y(this.body) ? this.body.type || null : m(this.body) ? null : "string" == typeof this.body ? "text/plain" : this.body instanceof g ? "application/x-www-form-urlencoded;charset=UTF-8" : "object" == typeof this.body || "number" == typeof this.body || Array.isArray(this.body) ? "application/json" : null
                        }
                        clone(t = {}) {
                            const e = t.method || this.method,
                                n = t.url || this.url,
                                r = t.responseType || this.responseType,
                                i = void 0 !== t.body ? t.body : this.body,
                                o = void 0 !== t.withCredentials ? t.withCredentials : this.withCredentials,
                                s = void 0 !== t.reportProgress ? t.reportProgress : this.reportProgress;
                            let a = t.headers || this.headers,
                                u = t.params || this.params;
                            return void 0 !== t.setHeaders && (a = Object.keys(t.setHeaders).reduce((e, n) => e.set(n, t.setHeaders[n]), a)), t.setParams && (u = Object.keys(t.setParams).reduce((e, n) => e.set(n, t.setParams[n]), u)), new w(e, n, i, {
                                params: u,
                                headers: a,
                                reportProgress: s,
                                responseType: r,
                                withCredentials: o
                            })
                        }
                    }
                    var v = function (t) {
                        return t[t.Sent = 0] = "Sent", t[t.UploadProgress = 1] = "UploadProgress", t[t.ResponseHeader = 2] = "ResponseHeader", t[t.DownloadProgress = 3] = "DownloadProgress", t[t.Response = 4] = "Response", t[t.User = 5] = "User", t
                    }({});
                    class _ {
                        constructor(t, e = 200, n = "OK") {
                            this.headers = t.headers || new p, this.status = void 0 !== t.status ? t.status : e, this.statusText = t.statusText || n, this.url = t.url || null, this.ok = this.status >= 200 && this.status < 300
                        }
                    }
                    class E extends _ {
                        constructor(t = {}) {
                            super(t), this.type = v.ResponseHeader
                        }
                        clone(t = {}) {
                            return new E({
                                headers: t.headers || this.headers,
                                status: void 0 !== t.status ? t.status : this.status,
                                statusText: t.statusText || this.statusText,
                                url: t.url || this.url || void 0
                            })
                        }
                    }
                    class T extends _ {
                        constructor(t = {}) {
                            super(t), this.type = v.Response, this.body = void 0 !== t.body ? t.body : null
                        }
                        clone(t = {}) {
                            return new T({
                                body: void 0 !== t.body ? t.body : this.body,
                                headers: t.headers || this.headers,
                                status: void 0 !== t.status ? t.status : this.status,
                                statusText: t.statusText || this.statusText,
                                url: t.url || this.url || void 0
                            })
                        }
                    }
                    class C extends _ {
                        constructor(t) {
                            super(t, 0, "Unknown Error"), this.name = "HttpErrorResponse", this.ok = !1, this.message = this.status >= 200 && this.status < 300 ? "Http failure during parsing for " + (t.url || "(unknown url)") : `Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`, this.error = t.error || null
                        }
                    }

                    function O(t, e) {
                        return {
                            body: e,
                            headers: t.headers,
                            observe: t.observe,
                            params: t.params,
                            reportProgress: t.reportProgress,
                            responseType: t.responseType,
                            withCredentials: t.withCredentials
                        }
                    }
                    let x = (() => {
                        class t {
                            constructor(t) {
                                this.handler = t
                            }
                            request(t, e, n = {}) {
                                let r;
                                if (t instanceof w) r = t;
                                else {
                                    let i = void 0;
                                    i = n.headers instanceof p ? n.headers : new p(n.headers);
                                    let o = void 0;
                                    n.params && (o = n.params instanceof g ? n.params : new g({
                                        fromObject: n.params
                                    })), r = new w(t, e, void 0 !== n.body ? n.body : null, {
                                        headers: i,
                                        params: o,
                                        reportProgress: n.reportProgress,
                                        responseType: n.responseType || "json",
                                        withCredentials: n.withCredentials
                                    })
                                }
                                const o = Object(i.a)(r).pipe(Object(s.a)(t => this.handler.handle(t)));
                                if (t instanceof w || "events" === n.observe) return o;
                                const c = o.pipe(Object(a.a)(t => t instanceof T));
                                switch (n.observe || "body") {
                                    case "body":
                                        switch (r.responseType) {
                                            case "arraybuffer":
                                                return c.pipe(Object(u.a)(t => {
                                                    if (null !== t.body && !(t.body instanceof ArrayBuffer)) throw new Error("Response is not an ArrayBuffer.");
                                                    return t.body
                                                }));
                                            case "blob":
                                                return c.pipe(Object(u.a)(t => {
                                                    if (null !== t.body && !(t.body instanceof Blob)) throw new Error("Response is not a Blob.");
                                                    return t.body
                                                }));
                                            case "text":
                                                return c.pipe(Object(u.a)(t => {
                                                    if (null !== t.body && "string" != typeof t.body) throw new Error("Response is not a string.");
                                                    return t.body
                                                }));
                                            case "json":
                                            default:
                                                return c.pipe(Object(u.a)(t => t.body))
                                        }
                                        case "response":
                                            return c;
                                        default:
                                            throw new Error(`Unreachable: unhandled observe type ${n.observe}}`)
                                }
                            }
                            delete(t, e = {}) {
                                return this.request("DELETE", t, e)
                            }
                            get(t, e = {}) {
                                return this.request("GET", t, e)
                            }
                            head(t, e = {}) {
                                return this.request("HEAD", t, e)
                            }
                            jsonp(t, e) {
                                return this.request("JSONP", t, {
                                    params: (new g).append(e, "JSONP_CALLBACK"),
                                    observe: "body",
                                    responseType: "json"
                                })
                            }
                            options(t, e = {}) {
                                return this.request("OPTIONS", t, e)
                            }
                            patch(t, e, n = {}) {
                                return this.request("PATCH", t, O(n, e))
                            }
                            post(t, e, n = {}) {
                                return this.request("POST", t, O(n, e))
                            }
                            put(t, e, n = {}) {
                                return this.request("PUT", t, O(n, e))
                            }
                        }
                        return t.\u0275fac = function (e) {
                            return new(e || t)(r.Pb(l))
                        }, t.\u0275prov = r.Db({
                            token: t,
                            factory: t.\u0275fac
                        }), t
                    })();
                    class S {
                        constructor(t, e) {
                            this.next = t, this.interceptor = e
                        }
                        handle(t) {
                            return this.interceptor.intercept(t, this.next)
                        }
                    }
                    const I = new r.q("HTTP_INTERCEPTORS");
                    let A = (() => {
                        class t {
                            intercept(t, e) {
                                return e.handle(t)
                            }
                        }
                        return t.\u0275fac = function (e) {
                            return new(e || t)
                        }, t.\u0275prov = r.Db({
                            token: t,
                            factory: t.\u0275fac
                        }), t
                    })();
                    const P = /^\)\]\}',?\n/;
                    class N {}
                    let D = (() => {
                            class t {
                                constructor() {}
                                build() {
                                    return new XMLHttpRequest
                                }
                            }
                            return t.\u0275fac = function (e) {
                                return new(e || t)
                            }, t.\u0275prov = r.Db({
                                token: t,
                                factory: t.\u0275fac
                            }), t
                        })(),
                        j = (() => {
                            class t {
                                constructor(t) {
                                    this.xhrFactory = t
                                }
                                handle(t) {
                                    if ("JSONP" === t.method) throw new Error("Attempted to construct Jsonp request without JsonpClientModule installed.");
                                    return new o.a(e => {
                                        const n = this.xhrFactory.build();
                                        if (n.open(t.method, t.urlWithParams), t.withCredentials && (n.withCredentials = !0), t.headers.forEach((t, e) => n.setRequestHeader(t, e.join(","))), t.headers.has("Accept") || n.setRequestHeader("Accept", "application/json, text/plain, */*"), !t.headers.has("Content-Type")) {
                                            const e = t.detectContentTypeHeader();
                                            null !== e && n.setRequestHeader("Content-Type", e)
                                        }
                                        if (t.responseType) {
                                            const e = t.responseType.toLowerCase();
                                            n.responseType = "json" !== e ? e : "text"
                                        }
                                        const r = t.serializeBody();
                                        let i = null;
                                        const o = () => {
                                                if (null !== i) return i;
                                                const e = 1223 === n.status ? 204 : n.status,
                                                    r = n.statusText || "OK",
                                                    o = new p(n.getAllResponseHeaders()),
                                                    s = function (t) {
                                                        return "responseURL" in t && t.responseURL ? t.responseURL : /^X-Request-URL:/m.test(t.getAllResponseHeaders()) ? t.getResponseHeader("X-Request-URL") : null
                                                    }(n) || t.url;
                                                return i = new E({
                                                    headers: o,
                                                    status: e,
                                                    statusText: r,
                                                    url: s
                                                }), i
                                            },
                                            s = () => {
                                                let {
                                                    headers: r,
                                                    status: i,
                                                    statusText: s,
                                                    url: a
                                                } = o(), u = null;
                                                204 !== i && (u = void 0 === n.response ? n.responseText : n.response), 0 === i && (i = u ? 200 : 0);
                                                let c = i >= 200 && i < 300;
                                                if ("json" === t.responseType && "string" == typeof u) {
                                                    const t = u;
                                                    u = u.replace(P, "");
                                                    try {
                                                        u = "" !== u ? JSON.parse(u) : null
                                                    } catch (l) {
                                                        u = t, c && (c = !1, u = {
                                                            error: l,
                                                            text: u
                                                        })
                                                    }
                                                }
                                                c ? (e.next(new T({
                                                    body: u,
                                                    headers: r,
                                                    status: i,
                                                    statusText: s,
                                                    url: a || void 0
                                                })), e.complete()) : e.error(new C({
                                                    error: u,
                                                    headers: r,
                                                    status: i,
                                                    statusText: s,
                                                    url: a || void 0
                                                }))
                                            },
                                            a = t => {
                                                const {
                                                    url: r
                                                } = o(), i = new C({
                                                    error: t,
                                                    status: n.status || 0,
                                                    statusText: n.statusText || "Unknown Error",
                                                    url: r || void 0
                                                });
                                                e.error(i)
                                            };
                                        let u = !1;
                                        const c = r => {
                                                u || (e.next(o()), u = !0);
                                                let i = {
                                                    type: v.DownloadProgress,
                                                    loaded: r.loaded
                                                };
                                                r.lengthComputable && (i.total = r.total), "text" === t.responseType && n.responseText && (i.partialText = n.responseText), e.next(i)
                                            },
                                            l = t => {
                                                let n = {
                                                    type: v.UploadProgress,
                                                    loaded: t.loaded
                                                };
                                                t.lengthComputable && (n.total = t.total), e.next(n)
                                            };
                                        return n.addEventListener("load", s), n.addEventListener("error", a), t.reportProgress && (n.addEventListener("progress", c), null !== r && n.upload && n.upload.addEventListener("progress", l)), n.send(r), e.next({
                                            type: v.Sent
                                        }), () => {
                                            n.removeEventListener("error", a), n.removeEventListener("load", s), t.reportProgress && (n.removeEventListener("progress", c), null !== r && n.upload && n.upload.removeEventListener("progress", l)), n.readyState !== n.DONE && n.abort()
                                        }
                                    })
                                }
                            }
                            return t.\u0275fac = function (e) {
                                return new(e || t)(r.Pb(N))
                            }, t.\u0275prov = r.Db({
                                token: t,
                                factory: t.\u0275fac
                            }), t
                        })();
                    const R = new r.q("XSRF_COOKIE_NAME"),
                        k = new r.q("XSRF_HEADER_NAME");
                    class L {}
                    let M = (() => {
                            class t {
                                constructor(t, e, n) {
                                    this.doc = t, this.platform = e, this.cookieName = n, this.lastCookieString = "", this.lastToken = null, this.parseCount = 0
                                }
                                getToken() {
                                    if ("server" === this.platform) return null;
                                    const t = this.doc.cookie || "";
                                    return t !== this.lastCookieString && (this.parseCount++, this.lastToken = Object(c.r)(t, this.cookieName), this.lastCookieString = t), this.lastToken
                                }
                            }
                            return t.\u0275fac = function (e) {
                                return new(e || t)(r.Pb(c.c), r.Pb(r.B), r.Pb(R))
                            }, t.\u0275prov = r.Db({
                                token: t,
                                factory: t.\u0275fac
                            }), t
                        })(),
                        U = (() => {
                            class t {
                                constructor(t, e) {
                                    this.tokenService = t, this.headerName = e
                                }
                                intercept(t, e) {
                                    const n = t.url.toLowerCase();
                                    if ("GET" === t.method || "HEAD" === t.method || n.startsWith("http://") || n.startsWith("https://")) return e.handle(t);
                                    const r = this.tokenService.getToken();
                                    return null === r || t.headers.has(this.headerName) || (t = t.clone({
                                        headers: t.headers.set(this.headerName, r)
                                    })), e.handle(t)
                                }
                            }
                            return t.\u0275fac = function (e) {
                                return new(e || t)(r.Pb(L), r.Pb(k))
                            }, t.\u0275prov = r.Db({
                                token: t,
                                factory: t.\u0275fac
                            }), t
                        })(),
                        F = (() => {
                            class t {
                                constructor(t, e) {
                                    this.backend = t, this.injector = e, this.chain = null
                                }
                                handle(t) {
                                    if (null === this.chain) {
                                        const t = this.injector.get(I, []);
                                        this.chain = t.reduceRight((t, e) => new S(t, e), this.backend)
                                    }
                                    return this.chain.handle(t)
                                }
                            }
                            return t.\u0275fac = function (e) {
                                return new(e || t)(r.Pb(h), r.Pb(r.r))
                            }, t.\u0275prov = r.Db({
                                token: t,
                                factory: t.\u0275fac
                            }), t
                        })(),
                        B = (() => {
                            class t {
                                static disable() {
                                    return {
                                        ngModule: t,
                                        providers: [{
                                            provide: U,
                                            useClass: A
                                        }]
                                    }
                                }
                                static withOptions(e = {}) {
                                    return {
                                        ngModule: t,
                                        providers: [e.cookieName ? {
                                            provide: R,
                                            useValue: e.cookieName
                                        } : [], e.headerName ? {
                                            provide: k,
                                            useValue: e.headerName
                                        } : []]
                                    }
                                }
                            }
                            return t.\u0275mod = r.Fb({
                                type: t
                            }), t.\u0275inj = r.Eb({
                                factory: function (e) {
                                    return new(e || t)
                                },
                                providers: [U, {
                                    provide: I,
                                    useExisting: U,
                                    multi: !0
                                }, {
                                    provide: L,
                                    useClass: M
                                }, {
                                    provide: R,
                                    useValue: "XSRF-TOKEN"
                                }, {
                                    provide: k,
                                    useValue: "X-XSRF-TOKEN"
                                }]
                            }), t
                        })(),
                        H = (() => {
                            class t {}
                            return t.\u0275mod = r.Fb({
                                type: t
                            }), t.\u0275inj = r.Eb({
                                factory: function (e) {
                                    return new(e || t)
                                },
                                providers: [x, {
                                    provide: l,
                                    useClass: F
                                }, j, {
                                    provide: h,
                                    useExisting: j
                                }, D, {
                                    provide: N,
                                    useExisting: D
                                }],
                                imports: [[B.withOptions({
                                    cookieName: "XSRF-TOKEN",
                                    headerName: "X-XSRF-TOKEN"
                                })]]
                            }), t
                        })()
                },
                "tuH/": function (t, e, n) {
                    (function () {
                        var e, r, i = {}.hasOwnProperty;
                        r = n("kud4"), e = n("Bl63"), t.exports = function (t) {
                            function n(t, r, i) {
                                if (n.__super__.constructor.call(this, t), null == r) throw new Error("Missing DTD notation name. " + this.debugInfo(r));
                                if (!i.pubID && !i.sysID) throw new Error("Public or system identifiers are required for an external entity. " + this.debugInfo(r));
                                this.name = this.stringify.name(r), this.type = e.NotationDeclaration, null != i.pubID && (this.pubID = this.stringify.dtdPubID(i.pubID)), null != i.sysID && (this.sysID = this.stringify.dtdSysID(i.sysID))
                            }
                            return function (t, e) {
                                for (var n in e) i.call(e, n) && (t[n] = e[n]);

                                function r() {
                                    this.constructor = t
                                }
                                r.prototype = e.prototype, t.prototype = new r, t.__super__ = e.prototype
                            }(n, t), Object.defineProperty(n.prototype, "publicId", {
                                get: function () {
                                    return this.pubID
                                }
                            }), Object.defineProperty(n.prototype, "systemId", {
                                get: function () {
                                    return this.sysID
                                }
                            }), n.prototype.toString = function (t) {
                                return this.options.writer.dtdNotation(this, this.options.writer.filterOptions(t))
                            }, n
                        }(r)
                    }).call(this)
                },
                tyNb: function (t, e, n) {
                        "use strict";
                        n.d(e, "a", (function () {
                            return Pn
                        })), n.d(e, "b", (function () {
                            return Nn
                        })), n.d(e, "c", (function () {
                            return zn
                        })), n.d(e, "d", (function () {
                            return jn
                        }));
                        var r = n("ofXK"),
                            i = n("fXoL"),
                            o = n("LRne"),
                            s = n("Cfvw"),
                            a = n("2Vo4"),
                            u = n("HDdC");
                        const c = (() => {
                            function t() {
                                return Error.call(this), this.message = "no elements in sequence", this.name = "EmptyError", this
                            }
                            return t.prototype = Object.create(Error.prototype), t
                        })();
                        var l = n("z+Ro"),
                            h = n("DH7j"),
                            p = n("7o/Q");
                        class d extends p.a {
                            notifyNext(t, e, n, r, i) {
                                this.destination.next(e)
                            }
                            notifyError(t, e) {
                                this.destination.error(t)
                            }
                            notifyComplete(t) {
                                this.destination.complete()
                            }
                        }
                        class f extends p.a {
                            constructor(t, e, n) {
                                super(), this.parent = t, this.outerValue = e, this.outerIndex = n, this.index = 0
                            }
                            _next(t) {
                                this.parent.notifyNext(this.outerValue, t, this.outerIndex, this.index++, this)
                            }
                            _error(t) {
                                this.parent.notifyError(t, this), this.unsubscribe()
                            }
                            _complete() {
                                this.parent.notifyComplete(this), this.unsubscribe()
                            }
                        }
                        var g = n("SeVD");

                        function m(t, e, n, r, i = new f(t, n, r)) {
                            if (!i.closed) return e instanceof u.a ? e.subscribe(i) : Object(g.a)(e)(i)
                        }
                        var y = n("yCtX");
                        const b = {};
                        class w {
                            constructor(t) {
                                this.resultSelector = t
                            }
                            call(t, e) {
                                return e.subscribe(new v(t, this.resultSelector))
                            }
                        }
                        class v extends d {
                            constructor(t, e) {
                                super(t), this.resultSelector = e, this.active = 0, this.values = [], this.observables = []
                            }
                            _next(t) {
                                this.values.push(b), this.observables.push(t)
                            }
                            _complete() {
                                const t = this.observables,
                                    e = t.length;
                                if (0 === e) this.destination.complete();
                                else {
                                    this.active = e, this.toRespond = e;
                                    for (let n = 0; n < e; n++) this.add(m(this, t[n], void 0, n))
                                }
                            }
                            notifyComplete(t) {
                                0 == (this.active -= 1) && this.destination.complete()
                            }
                            notifyNext(t, e, n) {
                                const r = this.values,
                                    i = this.toRespond ? r[n] === b ? --this.toRespond : this.toRespond : 0;
                                r[n] = e, 0 === i && (this.resultSelector ? this._tryResultSelector(r) : this.destination.next(r.slice()))
                            }
                            _tryResultSelector(t) {
                                let e;
                                try {
                                    e = this.resultSelector.apply(this, t)
                                } catch (n) {
                                    return void this.destination.error(n)
                                }
                                this.destination.next(e)
                            }
                        }
                        const _ = new u.a(t => t.complete());

                        function E(t) {
                            return t ? function (t) {
                                return new u.a(e => t.schedule(() => e.complete()))
                            }(t) : _
                        }

                        function T(t) {
                            return new u.a(e => {
                                let n;
                                try {
                                    n = t()
                                } catch (r) {
                                    return void e.error(r)
                                }
                                return (n ? Object(s.a)(n) : E()).subscribe(e)
                            })
                        }
                        var C = n("XNiG"),
                            O = n("lJxs"),
                            x = n("bHdf");

                        function S() {
                            return Object(x.a)(1)
                        }
                        var I = n("pLZG");
                        const A = (() => {
                            function t() {
                                return Error.call(this), this.message = "argument out of range", this.name = "ArgumentOutOfRangeError", this
                            }
                            return t.prototype = Object.create(Error.prototype), t
                        })();

                        function P(t) {
                            return function (e) {
                                return 0 === t ? E() : e.lift(new N(t))
                            }
                        }
                        class N {
                            constructor(t) {
                                if (this.total = t, this.total < 0) throw new A
                            }
                            call(t, e) {
                                return e.subscribe(new D(t, this.total))
                            }
                        }
                        class D extends p.a {
                            constructor(t, e) {
                                super(t), this.total = e, this.ring = new Array, this.count = 0
                            }
                            _next(t) {
                                const e = this.ring,
                                    n = this.total,
                                    r = this.count++;
                                e.length < n ? e.push(t) : e[r % n] = t
                            }
                            _complete() {
                                const t = this.destination;
                                let e = this.count;
                                if (e > 0) {
                                    const n = this.count >= this.total ? this.total : this.count,
                                        r = this.ring;
                                    for (let i = 0; i < n; i++) {
                                        const i = e++ % n;
                                        t.next(r[i])
                                    }
                                }
                                t.complete()
                            }
                        }

                        function j(t = L) {
                            return e => e.lift(new R(t))
                        }
                        class R {
                            constructor(t) {
                                this.errorFactory = t
                            }
                            call(t, e) {
                                return e.subscribe(new k(t, this.errorFactory))
                            }
                        }
                        class k extends p.a {
                            constructor(t, e) {
                                super(t), this.errorFactory = e, this.hasValue = !1
                            }
                            _next(t) {
                                this.hasValue = !0, this.destination.next(t)
                            }
                            _complete() {
                                if (this.hasValue) return this.destination.complete(); {
                                    let e;
                                    try {
                                        e = this.errorFactory()
                                    } catch (t) {
                                        e = t
                                    }
                                    this.destination.error(e)
                                }
                            }
                        }

                        function L() {
                            return new c
                        }

                        function M(t = null) {
                            return e => e.lift(new U(t))
                        }
                        class U {
                            constructor(t) {
                                this.defaultValue = t
                            }
                            call(t, e) {
                                return e.subscribe(new F(t, this.defaultValue))
                            }
                        }
                        class F extends p.a {
                            constructor(t, e) {
                                super(t), this.defaultValue = e, this.isEmpty = !0
                            }
                            _next(t) {
                                this.isEmpty = !1, this.destination.next(t)
                            }
                            _complete() {
                                this.isEmpty && this.destination.next(this.defaultValue), this.destination.complete()
                            }
                        }
                        var B = n("SpAZ"),
                            H = n("zx2A");

                        function V(t) {
                            return function (e) {
                                const n = new z(t),
                                    r = e.lift(n);
                                return n.caught = r
                            }
                        }
                        class z {
                            constructor(t) {
                                this.selector = t
                            }
                            call(t, e) {
                                return e.subscribe(new q(t, this.selector, this.caught))
                            }
                        }
                        class q extends H.b {
                            constructor(t, e, n) {
                                super(t), this.selector = e, this.caught = n
                            }
                            error(t) {
                                if (!this.isStopped) {
                                    let n;
                                    try {
                                        n = this.selector(t, this.caught)
                                    } catch (e) {
                                        return void super.error(e)
                                    }
                                    this._unsubscribeAndRecycle();
                                    const r = new H.a(this);
                                    this.add(r);
                                    const i = Object(H.c)(n, r);
                                    i !== r && this.add(i)
                                }
                            }
                        }

                        function $(t) {
                            return e => 0 === t ? E() : e.lift(new G(t))
                        }
                        class G {
                            constructor(t) {
                                if (this.total = t, this.total < 0) throw new A
                            }
                            call(t, e) {
                                return e.subscribe(new Y(t, this.total))
                            }
                        }
                        class Y extends p.a {
                            constructor(t, e) {
                                super(t), this.total = e, this.count = 0
                            }
                            _next(t) {
                                const e = this.total,
                                    n = ++this.count;
                                n <= e && (this.destination.next(t), n === e && (this.destination.complete(), this.unsubscribe()))
                            }
                        }

                        function W(t, e) {
                            const n = arguments.length >= 2;
                            return r => r.pipe(t ? Object(I.a)((e, n) => t(e, n, r)) : B.a, $(1), n ? M(e) : j(() => new c))
                        }
                        var X = n("5+tZ");

                        function Q() {}
                        var Z = n("n6bG");

                        function K(t, e, n) {
                            return function (r) {
                                return r.lift(new J(t, e, n))
                            }
                        }
                        class J {
                            constructor(t, e, n) {
                                this.nextOrObserver = t, this.error = e, this.complete = n
                            }
                            call(t, e) {
                                return e.subscribe(new tt(t, this.nextOrObserver, this.error, this.complete))
                            }
                        }
                        class tt extends p.a {
                            constructor(t, e, n, r) {
                                super(t), this._tapNext = Q, this._tapError = Q, this._tapComplete = Q, this._tapError = n || Q, this._tapComplete = r || Q, Object(Z.a)(e) ? (this._context = this, this._tapNext = e) : e && (this._context = e, this._tapNext = e.next || Q, this._tapError = e.error || Q, this._tapComplete = e.complete || Q)
                            }
                            _next(t) {
                                try {
                                    this._tapNext.call(this._context, t)
                                } catch (e) {
                                    return void this.destination.error(e)
                                }
                                this.destination.next(t)
                            }
                            _error(t) {
                                try {
                                    this._tapError.call(this._context, t)
                                } catch (t) {
                                    return void this.destination.error(t)
                                }
                                this.destination.error(t)
                            }
                            _complete() {
                                try {
                                    this._tapComplete.call(this._context)
                                } catch (t) {
                                    return void this.destination.error(t)
                                }
                                return this.destination.complete()
                            }
                        }
                        class et {
                            constructor(t, e, n) {
                                this.predicate = t, this.thisArg = e, this.source = n
                            }
                            call(t, e) {
                                return e.subscribe(new nt(t, this.predicate, this.thisArg, this.source))
                            }
                        }
                        class nt extends p.a {
                            constructor(t, e, n, r) {
                                super(t), this.predicate = e, this.thisArg = n, this.source = r, this.index = 0, this.thisArg = n || this
                            }
                            notifyComplete(t) {
                                this.destination.next(t), this.destination.complete()
                            }
                            _next(t) {
                                let e = !1;
                                try {
                                    e = this.predicate.call(this.thisArg, t, this.index++, this.source)
                                } catch (n) {
                                    return void this.destination.error(n)
                                }
                                e || this.notifyComplete(!1)
                            }
                            _complete() {
                                this.notifyComplete(!0)
                            }
                        }

                        function rt(t, e) {
                            return "function" == typeof e ? n => n.pipe(rt((n, r) => Object(s.a)(t(n, r)).pipe(Object(O.a)((t, i) => e(n, t, r, i))))) : e => e.lift(new it(t))
                        }
                        class it {
                            constructor(t) {
                                this.project = t
                            }
                            call(t, e) {
                                return e.subscribe(new ot(t, this.project))
                            }
                        }
                        class ot extends H.b {
                            constructor(t, e) {
                                super(t), this.project = e, this.index = 0
                            }
                            _next(t) {
                                let e;
                                const n = this.index++;
                                try {
                                    e = this.project(t, n)
                                } catch (r) {
                                    return void this.destination.error(r)
                                }
                                this._innerSub(e)
                            }
                            _innerSub(t) {
                                const e = this.innerSubscription;
                                e && e.unsubscribe();
                                const n = new H.a(this),
                                    r = this.destination;
                                r.add(n), this.innerSubscription = Object(H.c)(t, n), this.innerSubscription !== n && r.add(this.innerSubscription)
                            }
                            _complete() {
                                const {
                                    innerSubscription: t
                                } = this;
                                t && !t.closed || super._complete(), this.unsubscribe()
                            }
                            _unsubscribe() {
                                this.innerSubscription = void 0
                            }
                            notifyComplete() {
                                this.innerSubscription = void 0, this.isStopped && super._complete()
                            }
                            notifyNext(t) {
                                this.destination.next(t)
                            }
                        }

                        function st(...t) {
                            return S()(Object(o.a)(...t))
                        }
                        class at {
                            constructor(t, e, n = !1) {
                                this.accumulator = t, this.seed = e, this.hasSeed = n
                            }
                            call(t, e) {
                                return e.subscribe(new ut(t, this.accumulator, this.seed, this.hasSeed))
                            }
                        }
                        class ut extends p.a {
                            constructor(t, e, n, r) {
                                super(t), this.accumulator = e, this._seed = n, this.hasSeed = r, this.index = 0
                            }
                            get seed() {
                                return this._seed
                            }
                            set seed(t) {
                                this.hasSeed = !0, this._seed = t
                            }
                            _next(t) {
                                if (this.hasSeed) return this._tryNext(t);
                                this.seed = t, this.destination.next(t)
                            }
                            _tryNext(t) {
                                const e = this.index++;
                                let n;
                                try {
                                    n = this.accumulator(this.seed, t, e)
                                } catch (r) {
                                    this.destination.error(r)
                                }
                                this.seed = n, this.destination.next(n)
                            }
                        }
                        var ct = n("bOdf"),
                            lt = n("quSY");
                        class ht {
                            constructor(t) {
                                this.callback = t
                            }
                            call(t, e) {
                                return e.subscribe(new pt(t, this.callback))
                            }
                        }
                        class pt extends p.a {
                            constructor(t, e) {
                                super(t), this.add(new lt.a(e))
                            }
                        }
                        class dt {
                            constructor(t, e) {
                                this.id = t, this.url = e
                            }
                        }
                        class ft extends dt {
                            constructor(t, e, n = "imperative", r = null) {
                                super(t, e), this.navigationTrigger = n, this.restoredState = r
                            }
                            toString() {
                                return `NavigationStart(id: ${this.id}, url: '${this.url}')`
                            }
                        }
                        class gt extends dt {
                            constructor(t, e, n) {
                                super(t, e), this.urlAfterRedirects = n
                            }
                            toString() {
                                return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`
                            }
                        }
                        class mt extends dt {
                            constructor(t, e, n) {
                                super(t, e), this.reason = n
                            }
                            toString() {
                                return `NavigationCancel(id: ${this.id}, url: '${this.url}')`
                            }
                        }
                        class yt extends dt {
                            constructor(t, e, n) {
                                super(t, e), this.error = n
                            }
                            toString() {
                                return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`
                            }
                        }
                        class bt extends dt {
                            constructor(t, e, n, r) {
                                super(t, e), this.urlAfterRedirects = n, this.state = r
                            }
                            toString() {
                                return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
                            }
                        }
                        class wt extends dt {
                            constructor(t, e, n, r) {
                                super(t, e), this.urlAfterRedirects = n, this.state = r
                            }
                            toString() {
                                return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
                            }
                        }
                        class vt extends dt {
                            constructor(t, e, n, r, i) {
                                super(t, e), this.urlAfterRedirects = n, this.state = r, this.shouldActivate = i
                            }
                            toString() {
                                return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`
                            }
                        }
                        class _t extends dt {
                            constructor(t, e, n, r) {
                                super(t, e), this.urlAfterRedirects = n, this.state = r
                            }
                            toString() {
                                return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
                            }
                        }
                        class Et extends dt {
                            constructor(t, e, n, r) {
                                super(t, e), this.urlAfterRedirects = n, this.state = r
                            }
                            toString() {
                                return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
                            }
                        }
                        class Tt {
                            constructor(t) {
                                this.route = t
                            }
                            toString() {
                                return `RouteConfigLoadStart(path: ${this.route.path})`
                            }
                        }
                        class Ct {
                            constructor(t) {
                                this.route = t
                            }
                            toString() {
                                return `RouteConfigLoadEnd(path: ${this.route.path})`
                            }
                        }
                        class Ot {
                            constructor(t) {
                                this.snapshot = t
                            }
                            toString() {
                                return `ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`
                            }
                        }
                        class xt {
                            constructor(t) {
                                this.snapshot = t
                            }
                            toString() {
                                return `ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`
                            }
                        }
                        class St {
                            constructor(t) {
                                this.snapshot = t
                            }
                            toString() {
                                return `ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`
                            }
                        }
                        class It {
                            constructor(t) {
                                this.snapshot = t
                            }
                            toString() {
                                return `ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`
                            }
                        }
                        class At {
                            constructor(t, e, n) {
                                this.routerEvent = t, this.position = e, this.anchor = n
                            }
                            toString() {
                                return `Scroll(anchor: '${this.anchor}', position: '${this.position?`${this.position[0]}, ${this.position[1]}`:null}')`
                            }
                        }
                        class Pt {
                            constructor(t) {
                                this.params = t || {}
                            }
                            has(t) {
                                return Object.prototype.hasOwnProperty.call(this.params, t)
                            }
                            get(t) {
                                if (this.has(t)) {
                                    const e = this.params[t];
                                    return Array.isArray(e) ? e[0] : e
                                }
                                return null
                            }
                            getAll(t) {
                                if (this.has(t)) {
                                    const e = this.params[t];
                                    return Array.isArray(e) ? e : [e]
                                }
                                return []
                            }
                            get keys() {
                                return Object.keys(this.params)
                            }
                        }

                        function Nt(t) {
                            return new Pt(t)
                        }

                        function Dt(t) {
                            const e = Error("NavigationCancelingError: " + t);
                            return e.ngNavigationCancelingError = !0, e
                        }

                        function jt(t, e, n) {
                            const r = n.path.split("/");
                            if (r.length > t.length) return null;
                            if ("full" === n.pathMatch && (e.hasChildren() || r.length < t.length)) return null;
                            const i = {};
                            for (let o = 0; o < r.length; o++) {
                                const e = r[o],
                                    n = t[o];
                                if (e.startsWith(":")) i[e.substring(1)] = n;
                                else if (e !== n.path) return null
                            }
                            return {
                                consumed: t.slice(0, r.length),
                                posParams: i
                            }
                        }

                        function Rt(t, e) {
                            const n = Object.keys(t),
                                r = Object.keys(e);
                            if (!n || !r || n.length != r.length) return !1;
                            let i;
                            for (let o = 0; o < n.length; o++)
                                if (i = n[o], !kt(t[i], e[i])) return !1;
                            return !0
                        }

                        function kt(t, e) {
                            return Array.isArray(t) && Array.isArray(e) ? t.length == e.length && t.every(t => e.indexOf(t) > -1) : t === e
                        }

                        function Lt(t) {
                            return Array.prototype.concat.apply([], t)
                        }

                        function Mt(t) {
                            return t.length > 0 ? t[t.length - 1] : null
                        }

                        function Ut(t, e) {
                            for (const n in t) t.hasOwnProperty(n) && e(t[n], n)
                        }

                        function Ft(t) {
                            return Object(i.ob)(t) ? t : Object(i.pb)(t) ? Object(s.a)(Promise.resolve(t)) : Object(o.a)(t)
                        }

                        function Bt(t, e, n) {
                            return n ? function (t, e) {
                                return Rt(t, e)
                            }(t.queryParams, e.queryParams) && function t(e, n) {
                                if (!qt(e.segments, n.segments)) return !1;
                                if (e.numberOfChildren !== n.numberOfChildren) return !1;
                                for (const r in n.children) {
                                    if (!e.children[r]) return !1;
                                    if (!t(e.children[r], n.children[r])) return !1
                                }
                                return !0
                            }(t.root, e.root) : function (t, e) {
                                return Object.keys(e).length <= Object.keys(t).length && Object.keys(e).every(n => kt(t[n], e[n]))
                            }(t.queryParams, e.queryParams) && function t(e, n) {
                                return function e(n, r, i) {
                                    if (n.segments.length > i.length) return !!qt(n.segments.slice(0, i.length), i) && !r.hasChildren();
                                    if (n.segments.length === i.length) {
                                        if (!qt(n.segments, i)) return !1;
                                        for (const e in r.children) {
                                            if (!n.children[e]) return !1;
                                            if (!t(n.children[e], r.children[e])) return !1
                                        }
                                        return !0
                                    } {
                                        const t = i.slice(0, n.segments.length),
                                            o = i.slice(n.segments.length);
                                        return !!qt(n.segments, t) && !!n.children.primary && e(n.children.primary, r, o)
                                    }
                                }(e, n, n.segments)
                            }(t.root, e.root)
                        }
                        class Ht {
                            constructor(t, e, n) {
                                this.root = t, this.queryParams = e, this.fragment = n
                            }
                            get queryParamMap() {
                                return this._queryParamMap || (this._queryParamMap = Nt(this.queryParams)), this._queryParamMap
                            }
                            toString() {
                                return Wt.serialize(this)
                            }
                        }
                        class Vt {
                            constructor(t, e) {
                                this.segments = t, this.children = e, this.parent = null, Ut(e, (t, e) => t.parent = this)
                            }
                            hasChildren() {
                                return this.numberOfChildren > 0
                            }
                            get numberOfChildren() {
                                return Object.keys(this.children).length
                            }
                            toString() {
                                return Xt(this)
                            }
                        }
                        class zt {
                            constructor(t, e) {
                                this.path = t, this.parameters = e
                            }
                            get parameterMap() {
                                return this._parameterMap || (this._parameterMap = Nt(this.parameters)), this._parameterMap
                            }
                            toString() {
                                return ee(this)
                            }
                        }

                        function qt(t, e) {
                            return t.length === e.length && t.every((t, n) => t.path === e[n].path)
                        }

                        function $t(t, e) {
                            let n = [];
                            return Ut(t.children, (t, r) => {
                                "primary" === r && (n = n.concat(e(t, r)))
                            }), Ut(t.children, (t, r) => {
                                "primary" !== r && (n = n.concat(e(t, r)))
                            }), n
                        }
                        class Gt {}
                        class Yt {
                            parse(t) {
                                const e = new se(t);
                                return new Ht(e.parseRootSegment(), e.parseQueryParams(), e.parseFragment())
                            }
                            serialize(t) {
                                    return `${"/"+function t(e,n){if(!e.hasChildren())return Xt(e);if(n){const n=e.children.primary?t(e.children.primary,!1):"",r=[];return Ut(e.children,(e,n)=>{"primary"!==n&&r.push(`${n}:${t(e,!1)}`)}),r.length>0?`
                                    $ {
                                        n
                                    }($ {
                                        r.join("//")
                                    })
                                    `:n}{const n=$t(e,(n,r)=>"primary"===r?[t(e.children.primary,!1)]:[`
                                    $ {
                                        r
                                    }: $ {
                                        t(n, !1)
                                    }
                                    `]);return`
                                    $ {
                                        Xt(e)
                                    }
                                    /(${n.join("/ / ")})`}}(t.root,!0)}${function(t){const e=Object.keys(t).map(e=>{const n=t[e];return Array.isArray(n)?n.map(t=>`${Zt(e)}=${Zt(t)}`).join(" & "):`${Zt(e)}=${Zt(n)}`});return e.length?" ? "+e.join(" & "):"
                                    "}(t.queryParams)}${"
                                    string "==typeof t.fragment?"
                                    # "+encodeURI(t.fragment):"
                                    "}`}}const Wt=new Yt;function Xt(t){return t.segments.map(t=>ee(t)).join(" / ")}function Qt(t){return encodeURIComponent(t).replace(/%40/g,"
                                    @ ").replace(/%3A/gi,": ").replace(/%24/g,"
                                    $ ").replace(/%2C/gi,", ")}function Zt(t){return Qt(t).replace(/%3B/gi,";
                                    ")}function Kt(t){return Qt(t).replace(/\(/g," % 28 ").replace(/\)/g," % 29 ").replace(/%26/gi," & ")}function Jt(t){return decodeURIComponent(t)}function te(t){return Jt(t.replace(/\+/g," % 20 "))}function ee(t){return`${Kt(t.path)}${e=t.parameters,Object.keys(e).map(t=>`;${Kt(t)}=${Kt(e[t])}`).join("
                                    ")}`;var e}const ne=/^[^\/()?;=#]+/;function re(t){const e=t.match(ne);return e?e[0]:"
                                    "}const ie=/^[^=?&#]+/,oe=/^[^?&#]+/;class se{constructor(t){this.url=t,this.remaining=t}parseRootSegment(){return this.consumeOptional(" / "),"
                                    "===this.remaining||this.peekStartsWith(" ? ")||this.peekStartsWith("
                                    # ")?new Vt([],{}):new Vt([],this.parseChildren())}parseQueryParams(){const t={};if(this.consumeOptional(" ? "))do{this.parseQueryParam(t)}while(this.consumeOptional(" & "));return t}parseFragment(){return this.consumeOptional("
                                    # ")?decodeURIComponent(this.remaining):null}parseChildren(){if("
                                    "===this.remaining)return{};this.consumeOptional(" / ");const t=[];for(this.peekStartsWith("(")||t.push(this.parseSegment());this.peekStartsWith(" / ")&&!this.peekStartsWith(" //")&&!this.peekStartsWith("/(");)this.capture("/"),t.push(this.parseSegment());let e={};this.peekStartsWith("/(")&&(this.capture("/"),e=this.parseParens(!0));let n={};return this.peekStartsWith("(")&&(n=this.parseParens(!1)),(t.length>0||Object.keys(e).length>0)&&(n.primary=new Vt(t,e)),n}parseSegment(){const t=re(this.remaining);if(""===t&&this.peekStartsWith(";"))throw new Error(`Empty path url segment cannot have parameters: '${this.remaining}'.`);return this.capture(t),new zt(Jt(t),this.parseMatrixParams())}parseMatrixParams(){const t={};for(;this.consumeOptional(";");)this.parseParam(t);return t}parseParam(t){const e=re(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){const t=re(this.remaining);t&&(n=t,this.capture(n))}t[Jt(e)]=Jt(n)}parseQueryParam(t){const e=function(t){const e=t.match(ie);return e?e[0]:""}(this.remaining);if(!e)return;this.capture(e);let n="";if(this.consumeOptional("=")){const t=function(t){const e=t.match(oe);return e?e[0]:""}(this.remaining);t&&(n=t,this.capture(n))}const r=te(e),i=te(n);if(t.hasOwnProperty(r)){let e=t[r];Array.isArray(e)||(e=[e],t[r]=e),e.push(i)}else t[r]=i}parseParens(t){const e={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){const n=re(this.remaining),r=this.remaining[n.length];if("/"!==r&&")"!==r&&";"!==r)throw new Error(`Cannot parse url '${this.url}'`);let i=void 0;n.indexOf(":")>-1?(i=n.substr(0,n.indexOf(":")),this.capture(i),this.capture(":")):t&&(i="primary");const o=this.parseChildren();e[i]=1===Object.keys(o).length?o.primary:new Vt([],o),this.consumeOptional("//")}return e}peekStartsWith(t){return this.remaining.startsWith(t)}consumeOptional(t){return!!this.peekStartsWith(t)&&(this.remaining=this.remaining.substring(t.length),!0)}capture(t){if(!this.consumeOptional(t))throw new Error(`Expected "${t}".`)}}class ae{constructor(t){this._root=t}get root(){return this._root.value}parent(t){const e=this.pathFromRoot(t);return e.length>1?e[e.length-2]:null}children(t){const e=ue(t,this._root);return e?e.children.map(t=>t.value):[]}firstChild(t){const e=ue(t,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(t){const e=ce(t,this._root);return e.length<2?[]:e[e.length-2].children.map(t=>t.value).filter(e=>e!==t)}pathFromRoot(t){return ce(t,this._root).map(t=>t.value)}}function ue(t,e){if(t===e.value)return e;for(const n of e.children){const e=ue(t,n);if(e)return e}return null}function ce(t,e){if(t===e.value)return[e];for(const n of e.children){const r=ce(t,n);if(r.length)return r.unshift(e),r}return[]}class le{constructor(t,e){this.value=t,this.children=e}toString(){return`TreeNode(${this.value})`}}function he(t){const e={};return t&&t.children.forEach(t=>e[t.value.outlet]=t),e}class pe extends ae{constructor(t,e){super(t),this.snapshot=e,be(this,t)}toString(){return this.snapshot.toString()}}function de(t,e){const n=function(t,e){const n=new me([],{},{},"",{},"primary",e,null,t.root,-1,{});return new ye("",new le(n,[]))}(t,e),r=new a.a([new zt("",{})]),i=new a.a({}),o=new a.a({}),s=new a.a({}),u=new a.a(""),c=new fe(r,i,s,u,o,"primary",e,n.root);return c.snapshot=n.root,new pe(new le(c,[]),n)}class fe{constructor(t,e,n,r,i,o,s,a){this.url=t,this.params=e,this.queryParams=n,this.fragment=r,this.data=i,this.outlet=o,this.component=s,this._futureSnapshot=a}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=this.params.pipe(Object(O.a)(t=>Nt(t)))),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=this.queryParams.pipe(Object(O.a)(t=>Nt(t)))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}}function ge(t,e="emptyOnly"){const n=t.pathFromRoot;let r=0;if("always"!==e)for(r=n.length-1;r>=1;){const t=n[r],e=n[r-1];if(t.routeConfig&&""===t.routeConfig.path)r--;else{if(e.component)break;r--}}return function(t){return t.reduce((t,e)=>({params:Object.assign(Object.assign({},t.params),e.params),data:Object.assign(Object.assign({},t.data),e.data),resolve:Object.assign(Object.assign({},t.resolve),e._resolvedData)}),{params:{},data:{},resolve:{}})}(n.slice(r))}class me{constructor(t,e,n,r,i,o,s,a,u,c,l){this.url=t,this.params=e,this.queryParams=n,this.fragment=r,this.data=i,this.outlet=o,this.component=s,this.routeConfig=a,this._urlSegment=u,this._lastPathIndex=c,this._resolve=l}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap||(this._paramMap=Nt(this.params)),this._paramMap}get queryParamMap(){return this._queryParamMap||(this._queryParamMap=Nt(this.queryParams)),this._queryParamMap}toString(){return`Route(url:'${this.url.map(t=>t.toString()).join("/")}', path:'${this.routeConfig?this.routeConfig.path:""}')`}}class ye extends ae{constructor(t,e){super(e),this.url=t,be(this,e)}toString(){return we(this._root)}}function be(t,e){e.value._routerState=t,e.children.forEach(e=>be(t,e))}function we(t){const e=t.children.length>0?` { ${t.children.map(we).join(", ")} } `:"";return`${t.value}${e}`}function ve(t){if(t.snapshot){const e=t.snapshot,n=t._futureSnapshot;t.snapshot=n,Rt(e.queryParams,n.queryParams)||t.queryParams.next(n.queryParams),e.fragment!==n.fragment&&t.fragment.next(n.fragment),Rt(e.params,n.params)||t.params.next(n.params),function(t,e){if(t.length!==e.length)return!1;for(let n=0;n<t.length;++n)if(!Rt(t[n],e[n]))return!1;return!0}(e.url,n.url)||t.url.next(n.url),Rt(e.data,n.data)||t.data.next(n.data)}else t.snapshot=t._futureSnapshot,t.data.next(t._futureSnapshot.data)}function _e(t,e){var n,r;return Rt(t.params,e.params)&&qt(n=t.url,r=e.url)&&n.every((t,e)=>Rt(t.parameters,r[e].parameters))&&!(!t.parent!=!e.parent)&&(!t.parent||_e(t.parent,e.parent))}function Ee(t){return"object"==typeof t&&null!=t&&!t.outlets&&!t.segmentPath}function Te(t,e,n,r,i){let o={};return r&&Ut(r,(t,e)=>{o[e]=Array.isArray(t)?t.map(t=>""+t):""+t}),new Ht(n.root===t?e:function t(e,n,r){const i={};return Ut(e.children,(e,o)=>{i[o]=e===n?r:t(e,n,r)}),new Vt(e.segments,i)}(n.root,t,e),o,i)}class Ce{constructor(t,e,n){if(this.isAbsolute=t,this.numberOfDoubleDots=e,this.commands=n,t&&n.length>0&&Ee(n[0]))throw new Error("Root segment cannot have matrix parameters");const r=n.find(t=>"object"==typeof t&&null!=t&&t.outlets);if(r&&r!==Mt(n))throw new Error("{outlets:{}} has to be the last command")}toRoot(){return this.isAbsolute&&1===this.commands.length&&"/"==this.commands[0]}}class Oe{constructor(t,e,n){this.segmentGroup=t,this.processChildren=e,this.index=n}}function xe(t){return"object"==typeof t&&null!=t&&t.outlets?t.outlets.primary:""+t}function Se(t,e,n){if(t||(t=new Vt([],{})),0===t.segments.length&&t.hasChildren())return Ie(t,e,n);const r=function(t,e,n){let r=0,i=e;const o={match:!1,pathIndex:0,commandIndex:0};for(;i<t.segments.length;){if(r>=n.length)return o;const e=t.segments[i],s=xe(n[r]),a=r<n.length-1?n[r+1]:null;if(i>0&&void 0===s)break;if(s&&a&&"object"==typeof a&&void 0===a.outlets){if(!De(s,a,e))return o;r+=2}else{if(!De(s,{},e))return o;r++}i++}return{match:!0,pathIndex:i,commandIndex:r}}(t,e,n),i=n.slice(r.commandIndex);if(r.match&&r.pathIndex<t.segments.length){const e=new Vt(t.segments.slice(0,r.pathIndex),{});return e.children.primary=new Vt(t.segments.slice(r.pathIndex),t.children),Ie(e,0,i)}return r.match&&0===i.length?new Vt(t.segments,{}):r.match&&!t.hasChildren()?Ae(t,e,n):r.match?Ie(t,0,i):Ae(t,e,n)}function Ie(t,e,n){if(0===n.length)return new Vt(t.segments,{});{const r=function(t){return"object"==typeof t[0]&&null!==t[0]&&t[0].outlets?t[0].outlets:{primary:t}}(n),i={};return Ut(r,(n,r)=>{null!==n&&(i[r]=Se(t.children[r],e,n))}),Ut(t.children,(t,e)=>{void 0===r[e]&&(i[e]=t)}),new Vt(t.segments,i)}}function Ae(t,e,n){const r=t.segments.slice(0,e);let i=0;for(;i<n.length;){if("object"==typeof n[i]&&null!==n[i]&&void 0!==n[i].outlets){const t=Pe(n[i].outlets);return new Vt(r,t)}if(0===i&&Ee(n[0])){r.push(new zt(t.segments[e].path,n[0])),i++;continue}const o=xe(n[i]),s=i<n.length-1?n[i+1]:null;o&&s&&Ee(s)?(r.push(new zt(o,Ne(s))),i+=2):(r.push(new zt(o,{})),i++)}return new Vt(r,{})}function Pe(t){const e={};return Ut(t,(t,n)=>{null!==t&&(e[n]=Ae(new Vt([],{}),0,t))}),e}function Ne(t){const e={};return Ut(t,(t,n)=>e[n]=""+t),e}function De(t,e,n){return t==n.path&&Rt(e,n.parameters)}class je{constructor(t,e,n,r){this.routeReuseStrategy=t,this.futureState=e,this.currState=n,this.forwardEvent=r}activate(t){const e=this.futureState._root,n=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,n,t),ve(this.futureState.root),this.activateChildRoutes(e,n,t)}deactivateChildRoutes(t,e,n){const r=he(e);t.children.forEach(t=>{const e=t.value.outlet;this.deactivateRoutes(t,r[e],n),delete r[e]}),Ut(r,(t,e)=>{this.deactivateRouteAndItsChildren(t,n)})}deactivateRoutes(t,e,n){const r=t.value,i=e?e.value:null;if(r===i)if(r.component){const i=n.getContext(r.outlet);i&&this.deactivateChildRoutes(t,e,i.children)}else this.deactivateChildRoutes(t,e,n);else i&&this.deactivateRouteAndItsChildren(e,n)}deactivateRouteAndItsChildren(t,e){this.routeReuseStrategy.shouldDetach(t.value.snapshot)?this.detachAndStoreRouteSubtree(t,e):this.deactivateRouteAndOutlet(t,e)}detachAndStoreRouteSubtree(t,e){const n=e.getContext(t.value.outlet);if(n&&n.outlet){const e=n.outlet.detach(),r=n.children.onOutletDeactivated();this.routeReuseStrategy.store(t.value.snapshot,{componentRef:e,route:t,contexts:r})}}deactivateRouteAndOutlet(t,e){const n=e.getContext(t.value.outlet);if(n){const r=he(t),i=t.value.component?n.children:e;Ut(r,(t,e)=>this.deactivateRouteAndItsChildren(t,i)),n.outlet&&(n.outlet.deactivate(),n.children.onOutletDeactivated())}}activateChildRoutes(t,e,n){const r=he(e);t.children.forEach(t=>{this.activateRoutes(t,r[t.value.outlet],n),this.forwardEvent(new It(t.value.snapshot))}),t.children.length&&this.forwardEvent(new xt(t.value.snapshot))}activateRoutes(t,e,n){const r=t.value,i=e?e.value:null;if(ve(r),r===i)if(r.component){const i=n.getOrCreateContext(r.outlet);this.activateChildRoutes(t,e,i.children)}else this.activateChildRoutes(t,e,n);else if(r.component){const e=n.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){const t=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),e.children.onOutletReAttached(t.contexts),e.attachRef=t.componentRef,e.route=t.route.value,e.outlet&&e.outlet.attach(t.componentRef,t.route.value),Re(t.route)}else{const n=function(t){for(let e=t.parent;e;e=e.parent){const t=e.routeConfig;if(t&&t._loadedConfig)return t._loadedConfig;if(t&&t.component)return null}return null}(r.snapshot),i=n?n.module.componentFactoryResolver:null;e.attachRef=null,e.route=r,e.resolver=i,e.outlet&&e.outlet.activateWith(r,i),this.activateChildRoutes(t,null,e.children)}}else this.activateChildRoutes(t,null,n)}}function Re(t){ve(t.value),t.children.forEach(Re)}class ke{constructor(t,e){this.routes=t,this.module=e}}function Le(t){return"function"==typeof t}function Me(t){return t instanceof Ht}class Ue{constructor(t){this.segmentGroup=t||null}}class Fe{constructor(t){this.urlTree=t}}function Be(t){return new u.a(e=>e.error(new Ue(t)))}function He(t){return new u.a(e=>e.error(new Fe(t)))}function Ve(t){return new u.a(e=>e.error(new Error(`Only absolute redirects can have named outlets. redirectTo: '${t}'`)))}class ze{constructor(t,e,n,r,o){this.configLoader=e,this.urlSerializer=n,this.urlTree=r,this.config=o,this.allowRedirects=!0,this.ngModule=t.get(i.x)}apply(){return this.expandSegmentGroup(this.ngModule,this.config,this.urlTree.root,"primary").pipe(Object(O.a)(t=>this.createUrlTree(t,this.urlTree.queryParams,this.urlTree.fragment))).pipe(V(t=>{if(t instanceof Fe)return this.allowRedirects=!1,this.match(t.urlTree);if(t instanceof Ue)throw this.noMatchError(t);throw t}))}match(t){return this.expandSegmentGroup(this.ngModule,this.config,t.root,"primary").pipe(Object(O.a)(e=>this.createUrlTree(e,t.queryParams,t.fragment))).pipe(V(t=>{if(t instanceof Ue)throw this.noMatchError(t);throw t}))}noMatchError(t){return new Error(`Cannot match any routes. URL Segment: '${t.segmentGroup}'`)}createUrlTree(t,e,n){const r=t.segments.length>0?new Vt([],{primary:t}):t;return new Ht(r,e,n)}expandSegmentGroup(t,e,n,r){return 0===n.segments.length&&n.hasChildren()?this.expandChildren(t,e,n).pipe(Object(O.a)(t=>new Vt([],t))):this.expandSegment(t,n,e,n.segments,r,!0)}expandChildren(t,e,n){return function(t,e){if(0===Object.keys(t).length)return Object(o.a)({});const n=[],r=[],i={};return Ut(t,(t,o)=>{const s=e(o,t).pipe(Object(O.a)(t=>i[o]=t));"primary"===o?n.push(s):r.push(s)}),o.a.apply(null,n.concat(r)).pipe(S(),function(t,e){const n=arguments.length>=2;return r=>r.pipe(t?Object(I.a)((e,n)=>t(e,n,r)):B.a,P(1),n?M(e):j(()=>new c))}(),Object(O.a)(()=>i))}(n.children,(n,r)=>this.expandSegmentGroup(t,e,r,n))}expandSegment(t,e,n,r,i,s){return Object(o.a)(...n).pipe(Object(O.a)(a=>this.expandSegmentAgainstRoute(t,e,n,a,r,i,s).pipe(V(t=>{if(t instanceof Ue)return Object(o.a)(null);throw t}))),S(),W(t=>!!t),V((t,n)=>{if(t instanceof c||"EmptyError"===t.name){if(this.noLeftoversInUrl(e,r,i))return Object(o.a)(new Vt([],{}));throw new Ue(e)}throw t}))}noLeftoversInUrl(t,e,n){return 0===e.length&&!t.children[n]}expandSegmentAgainstRoute(t,e,n,r,i,o,s){return Ye(r)!==o?Be(e):void 0===r.redirectTo?this.matchSegmentAgainstRoute(t,e,r,i):s&&this.allowRedirects?this.expandSegmentAgainstRouteUsingRedirect(t,e,n,r,i,o):Be(e)}expandSegmentAgainstRouteUsingRedirect(t,e,n,r,i,o){return"**"===r.path?this.expandWildCardWithParamsAgainstRouteUsingRedirect(t,n,r,o):this.expandRegularSegmentAgainstRouteUsingRedirect(t,e,n,r,i,o)}expandWildCardWithParamsAgainstRouteUsingRedirect(t,e,n,r){const i=this.applyRedirectCommands([],n.redirectTo,{});return n.redirectTo.startsWith("/")?He(i):this.lineralizeSegments(n,i).pipe(Object(X.a)(n=>{const i=new Vt(n,{});return this.expandSegment(t,i,e,n,r,!1)}))}expandRegularSegmentAgainstRouteUsingRedirect(t,e,n,r,i,o){const{matched:s,consumedSegments:a,lastChild:u,positionalParamSegments:c}=qe(e,r,i);if(!s)return Be(e);const l=this.applyRedirectCommands(a,r.redirectTo,c);return r.redirectTo.startsWith("/")?He(l):this.lineralizeSegments(r,l).pipe(Object(X.a)(r=>this.expandSegment(t,e,n,r.concat(i.slice(u)),o,!1)))}matchSegmentAgainstRoute(t,e,n,r){if("**"===n.path)return n.loadChildren?this.configLoader.load(t.injector,n).pipe(Object(O.a)(t=>(n._loadedConfig=t,new Vt(r,{})))):Object(o.a)(new Vt(r,{}));const{matched:i,consumedSegments:s,lastChild:a}=qe(e,n,r);if(!i)return Be(e);const u=r.slice(a);return this.getChildConfig(t,n,r).pipe(Object(X.a)(t=>{const n=t.module,r=t.routes,{segmentGroup:i,slicedSegments:a}=function(t,e,n,r){return n.length>0&&function(t,e,n){return n.some(n=>Ge(t,e,n)&&"primary"!==Ye(n))}(t,n,r)?{segmentGroup:$e(new Vt(e,function(t,e){const n={};n.primary=e;for(const r of t)""===r.path&&"primary"!==Ye(r)&&(n[Ye(r)]=new Vt([],{}));return n}(r,new Vt(n,t.children)))),slicedSegments:[]}:0===n.length&&function(t,e,n){return n.some(n=>Ge(t,e,n))}(t,n,r)?{segmentGroup:$e(new Vt(t.segments,function(t,e,n,r){const i={};for(const o of n)Ge(t,e,o)&&!r[Ye(o)]&&(i[Ye(o)]=new Vt([],{}));return Object.assign(Object.assign({},r),i)}(t,n,r,t.children))),slicedSegments:n}:{segmentGroup:t,slicedSegments:n}}(e,s,u,r);return 0===a.length&&i.hasChildren()?this.expandChildren(n,r,i).pipe(Object(O.a)(t=>new Vt(s,t))):0===r.length&&0===a.length?Object(o.a)(new Vt(s,{})):this.expandSegment(n,i,r,a,"primary",!0).pipe(Object(O.a)(t=>new Vt(s.concat(t.segments),t.children)))}))}getChildConfig(t,e,n){return e.children?Object(o.a)(new ke(e.children,t)):e.loadChildren?void 0!==e._loadedConfig?Object(o.a)(e._loadedConfig):this.runCanLoadGuards(t.injector,e,n).pipe(Object(X.a)(n=>n?this.configLoader.load(t.injector,e).pipe(Object(O.a)(t=>(e._loadedConfig=t,t))):function(t){return new u.a(e=>e.error(Dt(`Cannot load children because the guard of the route "path: '${t.path}'" returned false`)))}(e))):Object(o.a)(new ke([],t))}runCanLoadGuards(t,e,n){const r=e.canLoad;return r&&0!==r.length?Object(s.a)(r).pipe(Object(O.a)(r=>{const i=t.get(r);let o;if(function(t){return t&&Le(t.canLoad)}(i))o=i.canLoad(e,n);else{if(!Le(i))throw new Error("Invalid CanLoad guard");o=i(e,n)}return Ft(o)})).pipe(S(),K(t=>{if(!Me(t))return;const e=Dt(`Redirecting to "${this.urlSerializer.serialize(t)}"`);throw e.url=t,e}),(i=t=>!0===t,t=>t.lift(new et(i,void 0,t)))):Object(o.a)(!0);var i}lineralizeSegments(t,e){let n=[],r=e.root;for(;;){if(n=n.concat(r.segments),0===r.numberOfChildren)return Object(o.a)(n);if(r.numberOfChildren>1||!r.children.primary)return Ve(t.redirectTo);r=r.children.primary}}applyRedirectCommands(t,e,n){return this.applyRedirectCreatreUrlTree(e,this.urlSerializer.parse(e),t,n)}applyRedirectCreatreUrlTree(t,e,n,r){const i=this.createSegmentGroup(t,e.root,n,r);return new Ht(i,this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(t,e){const n={};return Ut(t,(t,r)=>{if("string"==typeof t&&t.startsWith(":")){const i=t.substring(1);n[r]=e[i]}else n[r]=t}),n}createSegmentGroup(t,e,n,r){const i=this.createSegments(t,e.segments,n,r);let o={};return Ut(e.children,(e,i)=>{o[i]=this.createSegmentGroup(t,e,n,r)}),new Vt(i,o)}createSegments(t,e,n,r){return e.map(e=>e.path.startsWith(":")?this.findPosParam(t,e,r):this.findOrReturn(e,n))}findPosParam(t,e,n){const r=n[e.path.substring(1)];if(!r)throw new Error(`Cannot redirect to '${t}'. Cannot find '${e.path}'.`);return r}findOrReturn(t,e){let n=0;for(const r of e){if(r.path===t.path)return e.splice(n),r;n++}return t}}function qe(t,e,n){if(""===e.path)return"full"===e.pathMatch&&(t.hasChildren()||n.length>0)?{matched:!1,consumedSegments:[],lastChild:0,positionalParamSegments:{}}:{matched:!0,consumedSegments:[],lastChild:0,positionalParamSegments:{}};const r=(e.matcher||jt)(n,t,e);return r?{matched:!0,consumedSegments:r.consumed,lastChild:r.consumed.length,positionalParamSegments:r.posParams}:{matched:!1,consumedSegments:[],lastChild:0,positionalParamSegments:{}}}function $e(t){if(1===t.numberOfChildren&&t.children.primary){const e=t.children.primary;return new Vt(t.segments.concat(e.segments),e.children)}return t}function Ge(t,e,n){return(!(t.hasChildren()||e.length>0)||"full"!==n.pathMatch)&&""===n.path&&void 0!==n.redirectTo}function Ye(t){return t.outlet||"primary"}class We{constructor(t){this.path=t,this.route=this.path[this.path.length-1]}}class Xe{constructor(t,e){this.component=t,this.route=e}}function Qe(t,e,n){const r=t._root;return function t(e,n,r,i,o={canDeactivateChecks:[],canActivateChecks:[]}){const s=he(n);return e.children.forEach(e=>{!function(e,n,r,i,o={canDeactivateChecks:[],canActivateChecks:[]}){const s=e.value,a=n?n.value:null,u=r?r.getContext(e.value.outlet):null;if(a&&s.routeConfig===a.routeConfig){const c=function(t,e,n){if("function"==typeof n)return n(t,e);switch(n){case"pathParamsChange":return!qt(t.url,e.url);case"pathParamsOrQueryParamsChange":return!qt(t.url,e.url)||!Rt(t.queryParams,e.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!_e(t,e)||!Rt(t.queryParams,e.queryParams);case"paramsChange":default:return!_e(t,e)}}(a,s,s.routeConfig.runGuardsAndResolvers);c?o.canActivateChecks.push(new We(i)):(s.data=a.data,s._resolvedData=a._resolvedData),t(e,n,s.component?u?u.children:null:r,i,o),c&&o.canDeactivateChecks.push(new Xe(u&&u.outlet&&u.outlet.component||null,a))}else a&&Ke(n,u,o),o.canActivateChecks.push(new We(i)),t(e,null,s.component?u?u.children:null:r,i,o)}(e,s[e.value.outlet],r,i.concat([e.value]),o),delete s[e.value.outlet]}),Ut(s,(t,e)=>Ke(t,r.getContext(e),o)),o}(r,e?e._root:null,n,[r.value])}function Ze(t,e,n){const r=function(t){if(!t)return null;for(let e=t.parent;e;e=e.parent){const t=e.routeConfig;if(t&&t._loadedConfig)return t._loadedConfig}return null}(e);return(r?r.module.injector:n).get(t)}function Ke(t,e,n){const r=he(t),i=t.value;Ut(r,(t,r)=>{Ke(t,i.component?e?e.children.getContext(r):null:e,n)}),n.canDeactivateChecks.push(new Xe(i.component&&e&&e.outlet&&e.outlet.isActivated?e.outlet.component:null,i))}const Je=Symbol("INITIAL_VALUE");function tn(){return rt(t=>function(...t){let e=void 0,n=void 0;return Object(l.a)(t[t.length-1])&&(n=t.pop()),"function"==typeof t[t.length-1]&&(e=t.pop()),1===t.length&&Object(h.a)(t[0])&&(t=t[0]),Object(y.a)(t,n).lift(new w(e))}(...t.map(t=>t.pipe($(1),function(...t){const e=t[t.length-1];return Object(l.a)(e)?(t.pop(),n=>st(t,n,e)):e=>st(t,e)}(Je)))).pipe(function(t,e){let n=!1;return arguments.length>=2&&(n=!0),function(r){return r.lift(new at(t,e,n))}}((t,e)=>{let n=!1;return e.reduce((t,r,i)=>{if(t!==Je)return t;if(r===Je&&(n=!0),!n){if(!1===r)return r;if(i===e.length-1||Me(r))return r}return t},t)},Je),Object(I.a)(t=>t!==Je),Object(O.a)(t=>Me(t)?t:!0===t),$(1)))}function en(t,e){return null!==t&&e&&e(new St(t)),Object(o.a)(!0)}function nn(t,e){return null!==t&&e&&e(new Ot(t)),Object(o.a)(!0)}function rn(t,e,n){const r=e.routeConfig?e.routeConfig.canActivate:null;if(!r||0===r.length)return Object(o.a)(!0);const i=r.map(r=>T(()=>{const i=Ze(r,e,n);let o;if(function(t){return t&&Le(t.canActivate)}(i))o=Ft(i.canActivate(e,t));else{if(!Le(i))throw new Error("Invalid CanActivate guard");o=Ft(i(e,t))}return o.pipe(W())}));return Object(o.a)(i).pipe(tn())}function on(t,e,n){const r=e[e.length-1],i=e.slice(0,e.length-1).reverse().map(t=>function(t){const e=t.routeConfig?t.routeConfig.canActivateChild:null;return e&&0!==e.length?{node:t,guards:e}:null}(t)).filter(t=>null!==t).map(e=>T(()=>{const i=e.guards.map(i=>{const o=Ze(i,e.node,n);let s;if(function(t){return t&&Le(t.canActivateChild)}(o))s=Ft(o.canActivateChild(r,t));else{if(!Le(o))throw new Error("Invalid CanActivateChild guard");s=Ft(o(r,t))}return s.pipe(W())});return Object(o.a)(i).pipe(tn())}));return Object(o.a)(i).pipe(tn())}class sn{}class an{constructor(t,e,n,r,i,o){this.rootComponentType=t,this.config=e,this.urlTree=n,this.url=r,this.paramsInheritanceStrategy=i,this.relativeLinkResolution=o}recognize(){try{const t=ln(this.urlTree.root,[],[],this.config,this.relativeLinkResolution).segmentGroup,e=this.processSegmentGroup(this.config,t,"primary"),n=new me([],Object.freeze({}),Object.freeze(Object.assign({},this.urlTree.queryParams)),this.urlTree.fragment,{},"primary",this.rootComponentType,null,this.urlTree.root,-1,{}),r=new le(n,e),i=new ye(this.url,r);return this.inheritParamsAndData(i._root),Object(o.a)(i)}catch(t){return new u.a(e=>e.error(t))}}inheritParamsAndData(t){const e=t.value,n=ge(e,this.paramsInheritanceStrategy);e.params=Object.freeze(n.params),e.data=Object.freeze(n.data),t.children.forEach(t=>this.inheritParamsAndData(t))}processSegmentGroup(t,e,n){return 0===e.segments.length&&e.hasChildren()?this.processChildren(t,e):this.processSegment(t,e,e.segments,n)}processChildren(t,e){const n=$t(e,(e,n)=>this.processSegmentGroup(t,e,n));return function(t){const e={};t.forEach(t=>{const n=e[t.value.outlet];if(n){const e=n.url.map(t=>t.toString()).join("/"),r=t.value.url.map(t=>t.toString()).join("/");throw new Error(`Two segments cannot have the same outlet name: '${e}' and '${r}'.`)}e[t.value.outlet]=t.value})}(n),n.sort((t,e)=>"primary"===t.value.outlet?-1:"primary"===e.value.outlet?1:t.value.outlet.localeCompare(e.value.outlet)),n}processSegment(t,e,n,r){for(const o of t)try{return this.processSegmentAgainstRoute(o,e,n,r)}catch(i){if(!(i instanceof sn))throw i}if(this.noLeftoversInUrl(e,n,r))return[];throw new sn}noLeftoversInUrl(t,e,n){return 0===e.length&&!t.children[n]}processSegmentAgainstRoute(t,e,n,r){if(t.redirectTo)throw new sn;if((t.outlet||"primary")!==r)throw new sn;let i,o=[],s=[];if("**"===t.path){const o=n.length>0?Mt(n).parameters:{};i=new me(n,o,Object.freeze(Object.assign({},this.urlTree.queryParams)),this.urlTree.fragment,dn(t),r,t.component,t,un(e),cn(e)+n.length,fn(t))}else{const a=function(t,e,n){if(""===e.path){if("full"===e.pathMatch&&(t.hasChildren()||n.length>0))throw new sn;return{consumedSegments:[],lastChild:0,parameters:{}}}const r=(e.matcher||jt)(n,t,e);if(!r)throw new sn;const i={};Ut(r.posParams,(t,e)=>{i[e]=t.path});const o=r.consumed.length>0?Object.assign(Object.assign({},i),r.consumed[r.consumed.length-1].parameters):i;return{consumedSegments:r.consumed,lastChild:r.consumed.length,parameters:o}}(e,t,n);o=a.consumedSegments,s=n.slice(a.lastChild),i=new me(o,a.parameters,Object.freeze(Object.assign({},this.urlTree.queryParams)),this.urlTree.fragment,dn(t),r,t.component,t,un(e),cn(e)+o.length,fn(t))}const a=function(t){return t.children?t.children:t.loadChildren?t._loadedConfig.routes:[]}(t),{segmentGroup:u,slicedSegments:c}=ln(e,o,s,a,this.relativeLinkResolution);if(0===c.length&&u.hasChildren()){const t=this.processChildren(a,u);return[new le(i,t)]}if(0===a.length&&0===c.length)return[new le(i,[])];const l=this.processSegment(a,u,c,"primary");return[new le(i,l)]}}function un(t){let e=t;for(;e._sourceSegment;)e=e._sourceSegment;return e}function cn(t){let e=t,n=e._segmentIndexShift?e._segmentIndexShift:0;for(;e._sourceSegment;)e=e._sourceSegment,n+=e._segmentIndexShift?e._segmentIndexShift:0;return n-1}function ln(t,e,n,r,i){if(n.length>0&&function(t,e,n){return n.some(n=>hn(t,e,n)&&"primary"!==pn(n))}(t,n,r)){const i=new Vt(e,function(t,e,n,r){const i={};i.primary=r,r._sourceSegment=t,r._segmentIndexShift=e.length;for(const o of n)if(""===o.path&&"primary"!==pn(o)){const n=new Vt([],{});n._sourceSegment=t,n._segmentIndexShift=e.length,i[pn(o)]=n}return i}(t,e,r,new Vt(n,t.children)));return i._sourceSegment=t,i._segmentIndexShift=e.length,{segmentGroup:i,slicedSegments:[]}}if(0===n.length&&function(t,e,n){return n.some(n=>hn(t,e,n))}(t,n,r)){const o=new Vt(t.segments,function(t,e,n,r,i,o){const s={};for(const a of r)if(hn(t,n,a)&&!i[pn(a)]){const n=new Vt([],{});n._sourceSegment=t,n._segmentIndexShift="legacy"===o?t.segments.length:e.length,s[pn(a)]=n}return Object.assign(Object.assign({},i),s)}(t,e,n,r,t.children,i));return o._sourceSegment=t,o._segmentIndexShift=e.length,{segmentGroup:o,slicedSegments:n}}const o=new Vt(t.segments,t.children);return o._sourceSegment=t,o._segmentIndexShift=e.length,{segmentGroup:o,slicedSegments:n}}function hn(t,e,n){return(!(t.hasChildren()||e.length>0)||"full"!==n.pathMatch)&&""===n.path&&void 0===n.redirectTo}function pn(t){return t.outlet||"primary"}function dn(t){return t.data||{}}function fn(t){return t.resolve||{}}function gn(t){return function(e){return e.pipe(rt(e=>{const n=t(e);return n?Object(s.a)(n).pipe(Object(O.a)(()=>e)):Object(s.a)([e])}))}}class mn{shouldDetach(t){return!1}store(t,e){}shouldAttach(t){return!1}retrieve(t){return null}shouldReuseRoute(t,e){return t.routeConfig===e.routeConfig}}let yn=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Bb({type:t,selectors:[["ng-component"]],decls:1,vars:0,template:function(t,e){1&t&&i.Ib(0,"router-outlet")},directives:function(){return[jn]},encapsulation:2}),t})();function bn(t,e=""){for(let n=0;n<t.length;n++){const r=t[n];wn(r,vn(e,r))}}function wn(t,e){if(!t)throw new Error(`\n      Invalid configuration of route '${e}': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    `);if(Array.isArray(t))throw new Error(`Invalid configuration of route '${e}': Array cannot be specified`);if(!t.component&&!t.children&&!t.loadChildren&&t.outlet&&"primary"!==t.outlet)throw new Error(`Invalid configuration of route '${e}': a componentless route without children or loadChildren cannot have a named outlet set`);if(t.redirectTo&&t.children)throw new Error(`Invalid configuration of route '${e}': redirectTo and children cannot be used together`);if(t.redirectTo&&t.loadChildren)throw new Error(`Invalid configuration of route '${e}': redirectTo and loadChildren cannot be used together`);if(t.children&&t.loadChildren)throw new Error(`Invalid configuration of route '${e}': children and loadChildren cannot be used together`);if(t.redirectTo&&t.component)throw new Error(`Invalid configuration of route '${e}': redirectTo and component cannot be used together`);if(t.path&&t.matcher)throw new Error(`Invalid configuration of route '${e}': path and matcher cannot be used together`);if(void 0===t.redirectTo&&!t.component&&!t.children&&!t.loadChildren)throw new Error(`Invalid configuration of route '${e}'. One of the following must be provided: component, redirectTo, children or loadChildren`);if(void 0===t.path&&void 0===t.matcher)throw new Error(`Invalid configuration of route '${e}': routes must have either a path or a matcher specified`);if("string"==typeof t.path&&"/"===t.path.charAt(0))throw new Error(`Invalid configuration of route '${e}': path cannot start with a slash`);if(""===t.path&&void 0!==t.redirectTo&&void 0===t.pathMatch)throw new Error(`Invalid configuration of route '{path: "${e}", redirectTo: "${t.redirectTo}"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.`);if(void 0!==t.pathMatch&&"full"!==t.pathMatch&&"prefix"!==t.pathMatch)throw new Error(`Invalid configuration of route '${e}': pathMatch can only be set to 'prefix' or 'full'`);t.children&&bn(t.children,e)}function vn(t,e){return e?t||e.path?t&&!e.path?t+"/":!t&&e.path?e.path:`${t}/${e.path}`:"":t}function _n(t){const e=t.children&&t.children.map(_n),n=e?Object.assign(Object.assign({},t),{children:e}):Object.assign({},t);return!n.component&&(e||n.loadChildren)&&n.outlet&&"primary"!==n.outlet&&(n.component=yn),n}const En=new i.q("ROUTES");class Tn{constructor(t,e,n,r){this.loader=t,this.compiler=e,this.onLoadStartListener=n,this.onLoadEndListener=r}load(t,e){return this.onLoadStartListener&&this.onLoadStartListener(e),this.loadModuleFactory(e.loadChildren).pipe(Object(O.a)(n=>{this.onLoadEndListener&&this.onLoadEndListener(e);const r=n.create(t);return new ke(Lt(r.injector.get(En)).map(_n),r)}))}loadModuleFactory(t){return"string"==typeof t?Object(s.a)(this.loader.load(t)):Ft(t()).pipe(Object(X.a)(t=>t instanceof i.v?Object(o.a)(t):Object(s.a)(this.compiler.compileModuleAsync(t))))}}class Cn{constructor(){this.outlet=null,this.route=null,this.resolver=null,this.children=new On,this.attachRef=null}}class On{constructor(){this.contexts=new Map}onChildOutletCreated(t,e){const n=this.getOrCreateContext(t);n.outlet=e,this.contexts.set(t,n)}onChildOutletDestroyed(t){const e=this.getContext(t);e&&(e.outlet=null)}onOutletDeactivated(){const t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let e=this.getContext(t);return e||(e=new Cn,this.contexts.set(t,e)),e}getContext(t){return this.contexts.get(t)||null}}class xn{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,e){return t}}function Sn(t){throw t}function In(t,e,n){return e.parse("/")}function An(t,e){return Object(o.a)(null)}let Pn=(()=>{class t{constructor(t,e,n,r,o,s,u,c){this.rootComponentType=t,this.urlSerializer=e,this.rootContexts=n,this.location=r,this.config=c,this.lastSuccessfulNavigation=null,this.currentNavigation=null,this.navigationId=0,this.isNgZoneEnabled=!1,this.events=new C.a,this.errorHandler=Sn,this.malformedUriErrorHandler=In,this.navigated=!1,this.lastSuccessfulId=-1,this.hooks={beforePreactivation:An,afterPreactivation:An},this.urlHandlingStrategy=new xn,this.routeReuseStrategy=new mn,this.onSameUrlNavigation="ignore",this.paramsInheritanceStrategy="emptyOnly",this.urlUpdateStrategy="deferred",this.relativeLinkResolution="legacy",this.ngModule=o.get(i.x),this.console=o.get(i.W);const l=o.get(i.z);this.isNgZoneEnabled=l instanceof i.z,this.resetConfig(c),this.currentUrlTree=new Ht(new Vt([],{}),{},null),this.rawUrlTree=this.currentUrlTree,this.browserUrlTree=this.currentUrlTree,this.configLoader=new Tn(s,u,t=>this.triggerEvent(new Tt(t)),t=>this.triggerEvent(new Ct(t))),this.routerState=de(this.currentUrlTree,this.rootComponentType),this.transitions=new a.a({id:0,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,extractedUrl:this.urlHandlingStrategy.extract(this.currentUrlTree),urlAfterRedirects:this.urlHandlingStrategy.extract(this.currentUrlTree),rawUrl:this.currentUrlTree,extras:{},resolve:null,reject:null,promise:Promise.resolve(!0),source:"imperative",restoredState:null,currentSnapshot:this.routerState.snapshot,targetSnapshot:null,currentRouterState:this.routerState,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null}),this.navigations=this.setupNavigations(this.transitions),this.processNavigations()}setupNavigations(t){const e=this.events;return t.pipe(Object(I.a)(t=>0!==t.id),Object(O.a)(t=>Object.assign(Object.assign({},t),{extractedUrl:this.urlHandlingStrategy.extract(t.rawUrl)})),rt(t=>{let n=!1,r=!1;return Object(o.a)(t).pipe(K(t=>{this.currentNavigation={id:t.id,initialUrl:t.currentRawUrl,extractedUrl:t.extractedUrl,trigger:t.source,extras:t.extras,previousNavigation:this.lastSuccessfulNavigation?Object.assign(Object.assign({},this.lastSuccessfulNavigation),{previousNavigation:null}):null}}),rt(t=>{const n=!this.navigated||t.extractedUrl.toString()!==this.browserUrlTree.toString();if(("reload"===this.onSameUrlNavigation||n)&&this.urlHandlingStrategy.shouldProcessUrl(t.rawUrl))return Object(o.a)(t).pipe(rt(t=>{const n=this.transitions.getValue();return e.next(new ft(t.id,this.serializeUrl(t.extractedUrl),t.source,t.restoredState)),n!==this.transitions.getValue()?_:[t]}),rt(t=>Promise.resolve(t)),(r=this.ngModule.injector,i=this.configLoader,s=this.urlSerializer,a=this.config,function(t){return t.pipe(rt(t=>function(t,e,n,r,i){return new ze(t,e,n,r,i).apply()}(r,i,s,t.extractedUrl,a).pipe(Object(O.a)(e=>Object.assign(Object.assign({},t),{urlAfterRedirects:e})))))}),K(t=>{this.currentNavigation=Object.assign(Object.assign({},this.currentNavigation),{finalUrl:t.urlAfterRedirects})}),function(t,e,n,r,i){return function(o){return o.pipe(Object(X.a)(o=>function(t,e,n,r,i="emptyOnly",o="legacy"){return new an(t,e,n,r,i,o).recognize()}(t,e,o.urlAfterRedirects,n(o.urlAfterRedirects),r,i).pipe(Object(O.a)(t=>Object.assign(Object.assign({},o),{targetSnapshot:t})))))}}(this.rootComponentType,this.config,t=>this.serializeUrl(t),this.paramsInheritanceStrategy,this.relativeLinkResolution),K(t=>{"eager"===this.urlUpdateStrategy&&(t.extras.skipLocationChange||this.setBrowserUrl(t.urlAfterRedirects,!!t.extras.replaceUrl,t.id,t.extras.state),this.browserUrlTree=t.urlAfterRedirects)}),K(t=>{const n=new bt(t.id,this.serializeUrl(t.extractedUrl),this.serializeUrl(t.urlAfterRedirects),t.targetSnapshot);e.next(n)}));var r,i,s,a;if(n&&this.rawUrlTree&&this.urlHandlingStrategy.shouldProcessUrl(this.rawUrlTree)){const{id:n,extractedUrl:r,source:i,restoredState:s,extras:a}=t,u=new ft(n,this.serializeUrl(r),i,s);e.next(u);const c=de(r,this.rootComponentType).snapshot;return Object(o.a)(Object.assign(Object.assign({},t),{targetSnapshot:c,urlAfterRedirects:r,extras:Object.assign(Object.assign({},a),{skipLocationChange:!1,replaceUrl:!1})}))}return this.rawUrlTree=t.rawUrl,this.browserUrlTree=t.urlAfterRedirects,t.resolve(null),_}),gn(t=>{const{targetSnapshot:e,id:n,extractedUrl:r,rawUrl:i,extras:{skipLocationChange:o,replaceUrl:s}}=t;return this.hooks.beforePreactivation(e,{navigationId:n,appliedUrlTree:r,rawUrlTree:i,skipLocationChange:!!o,replaceUrl:!!s})}),K(t=>{const e=new wt(t.id,this.serializeUrl(t.extractedUrl),this.serializeUrl(t.urlAfterRedirects),t.targetSnapshot);this.triggerEvent(e)}),Object(O.a)(t=>Object.assign(Object.assign({},t),{guards:Qe(t.targetSnapshot,t.currentSnapshot,this.rootContexts)})),function(t,e){return function(n){return n.pipe(Object(X.a)(n=>{const{targetSnapshot:r,currentSnapshot:i,guards:{canActivateChecks:a,canDeactivateChecks:u}}=n;return 0===u.length&&0===a.length?Object(o.a)(Object.assign(Object.assign({},n),{guardsResult:!0})):function(t,e,n,r){return Object(s.a)(t).pipe(Object(X.a)(t=>function(t,e,n,r,i){const s=e&&e.routeConfig?e.routeConfig.canDeactivate:null;if(!s||0===s.length)return Object(o.a)(!0);const a=s.map(o=>{const s=Ze(o,e,i);let a;if(function(t){return t&&Le(t.canDeactivate)}(s))a=Ft(s.canDeactivate(t,e,n,r));else{if(!Le(s))throw new Error("Invalid CanDeactivate guard");a=Ft(s(t,e,n,r))}return a.pipe(W())});return Object(o.a)(a).pipe(tn())}(t.component,t.route,n,e,r)),W(t=>!0!==t,!0))}(u,r,i,t).pipe(Object(X.a)(n=>n&&"boolean"==typeof n?function(t,e,n,r){return Object(s.a)(e).pipe(Object(ct.a)(e=>Object(s.a)([nn(e.route.parent,r),en(e.route,r),on(t,e.path,n),rn(t,e.route,n)]).pipe(S(),W(t=>!0!==t,!0))),W(t=>!0!==t,!0))}(r,a,t,e):Object(o.a)(n)),Object(O.a)(t=>Object.assign(Object.assign({},n),{guardsResult:t})))}))}}(this.ngModule.injector,t=>this.triggerEvent(t)),K(t=>{if(Me(t.guardsResult)){const e=Dt(`Redirecting to "${this.serializeUrl(t.guardsResult)}"`);throw e.url=t.guardsResult,e}}),K(t=>{const e=new vt(t.id,this.serializeUrl(t.extractedUrl),this.serializeUrl(t.urlAfterRedirects),t.targetSnapshot,!!t.guardsResult);this.triggerEvent(e)}),Object(I.a)(t=>{if(!t.guardsResult){this.resetUrlToCurrentUrlTree();const n=new mt(t.id,this.serializeUrl(t.extractedUrl),"");return e.next(n),t.resolve(!1),!1}return!0}),gn(t=>{if(t.guards.canActivateChecks.length)return Object(o.a)(t).pipe(K(t=>{const e=new _t(t.id,this.serializeUrl(t.extractedUrl),this.serializeUrl(t.urlAfterRedirects),t.targetSnapshot);this.triggerEvent(e)}),rt(t=>{let n=!1;return Object(o.a)(t).pipe((r=this.paramsInheritanceStrategy,i=this.ngModule.injector,function(t){return t.pipe(Object(X.a)(t=>{const{targetSnapshot:e,guards:{canActivateChecks:n}}=t;if(!n.length)return Object(o.a)(t);let a=0;return Object(s.a)(n).pipe(Object(ct.a)(t=>function(t,e,n,r){return function(t,e,n,r){const i=Object.keys(t);if(0===i.length)return Object(o.a)({});const a={};return Object(s.a)(i).pipe(Object(X.a)(i=>function(t,e,n,r){const i=Ze(t,e,r);return Ft(i.resolve?i.resolve(e,n):i(e,n))}(t[i],e,n,r).pipe(K(t=>{a[i]=t}))),P(1),Object(X.a)(()=>Object.keys(a).length===i.length?Object(o.a)(a):_))}(t._resolve,t,e,r).pipe(Object(O.a)(e=>(t._resolvedData=e,t.data=Object.assign(Object.assign({},t.data),ge(t,n).resolve),null)))}(t.route,e,r,i)),K(()=>a++),P(1),Object(X.a)(e=>a===n.length?Object(o.a)(t):_))}))}),K({next:()=>n=!0,complete:()=>{if(!n){const n=new mt(t.id,this.serializeUrl(t.extractedUrl),"At least one route resolver didn't emit any value.");e.next(n),t.resolve(!1)}}}));var r,i}),K(t=>{const e=new Et(t.id,this.serializeUrl(t.extractedUrl),this.serializeUrl(t.urlAfterRedirects),t.targetSnapshot);this.triggerEvent(e)}))}),gn(t=>{const{targetSnapshot:e,id:n,extractedUrl:r,rawUrl:i,extras:{skipLocationChange:o,replaceUrl:s}}=t;return this.hooks.afterPreactivation(e,{navigationId:n,appliedUrlTree:r,rawUrlTree:i,skipLocationChange:!!o,replaceUrl:!!s})}),Object(O.a)(t=>{const e=function(t,e,n){const r=function t(e,n,r){if(r&&e.shouldReuseRoute(n.value,r.value.snapshot)){const i=r.value;i._futureSnapshot=n.value;const o=function(e,n,r){return n.children.map(n=>{for(const i of r.children)if(e.shouldReuseRoute(i.value.snapshot,n.value))return t(e,n,i);return t(e,n)})}(e,n,r);return new le(i,o)}{const r=e.retrieve(n.value);if(r){const t=r.route;return function t(e,n){if(e.value.routeConfig!==n.value.routeConfig)throw new Error("Cannot reattach ActivatedRouteSnapshot created from a different route");if(e.children.length!==n.children.length)throw new Error("Cannot reattach ActivatedRouteSnapshot with a different number of children");n.value._futureSnapshot=e.value;for(let r=0;r<e.children.length;++r)t(e.children[r],n.children[r])}(n,t),t}{const r=new fe(new a.a((i=n.value).url),new a.a(i.params),new a.a(i.queryParams),new a.a(i.fragment),new a.a(i.data),i.outlet,i.component,i),o=n.children.map(n=>t(e,n));return new le(r,o)}}var i}(t,e._root,n?n._root:void 0);return new pe(r,e)}(this.routeReuseStrategy,t.targetSnapshot,t.currentRouterState);return Object.assign(Object.assign({},t),{targetRouterState:e})}),K(t=>{this.currentUrlTree=t.urlAfterRedirects,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t.rawUrl),this.routerState=t.targetRouterState,"deferred"===this.urlUpdateStrategy&&(t.extras.skipLocationChange||this.setBrowserUrl(this.rawUrlTree,!!t.extras.replaceUrl,t.id,t.extras.state),this.browserUrlTree=t.urlAfterRedirects)}),(u=this.rootContexts,c=this.routeReuseStrategy,l=t=>this.triggerEvent(t),Object(O.a)(t=>(new je(c,t.targetRouterState,t.currentRouterState,l).activate(u),t))),K({next(){n=!0},complete(){n=!0}}),(i=()=>{if(!n&&!r){this.resetUrlToCurrentUrlTree();const n=new mt(t.id,this.serializeUrl(t.extractedUrl),`Navigation ID ${t.id} is not equal to the current navigation id ${this.navigationId}`);e.next(n),t.resolve(!1)}this.currentNavigation=null},t=>t.lift(new ht(i))),V(n=>{if(r=!0,(i=n)&&i.ngNavigationCancelingError){const r=Me(n.url);r||(this.navigated=!0,this.resetStateAndUrl(t.currentRouterState,t.currentUrlTree,t.rawUrl));const i=new mt(t.id,this.serializeUrl(t.extractedUrl),n.message);e.next(i),r?setTimeout(()=>{const e=this.urlHandlingStrategy.merge(n.url,this.rawUrlTree);return this.scheduleNavigation(e,"imperative",null,{skipLocationChange:t.extras.skipLocationChange,replaceUrl:"eager"===this.urlUpdateStrategy},{resolve:t.resolve,reject:t.reject,promise:t.promise})},0):t.resolve(!1)}else{this.resetStateAndUrl(t.currentRouterState,t.currentUrlTree,t.rawUrl);const r=new yt(t.id,this.serializeUrl(t.extractedUrl),n);e.next(r);try{t.resolve(this.errorHandler(n))}catch(o){t.reject(o)}}var i;return _}));var i,u,c,l}))}resetRootComponentType(t){this.rootComponentType=t,this.routerState.root.component=this.rootComponentType}getTransition(){const t=this.transitions.value;return t.urlAfterRedirects=this.browserUrlTree,t}setTransition(t){this.transitions.next(Object.assign(Object.assign({},this.getTransition()),t))}initialNavigation(){this.setUpLocationChangeListener(),0===this.navigationId&&this.navigateByUrl(this.location.path(!0),{replaceUrl:!0})}setUpLocationChangeListener(){this.locationSubscription||(this.locationSubscription=this.location.subscribe(t=>{let e=this.parseUrl(t.url);const n="popstate"===t.type?"popstate":"hashchange",r=t.state&&t.state.navigationId?t.state:null;setTimeout(()=>{this.scheduleNavigation(e,n,r,{replaceUrl:!0})},0)}))}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return this.currentNavigation}triggerEvent(t){this.events.next(t)}resetConfig(t){bn(t),this.config=t.map(_n),this.navigated=!1,this.lastSuccessfulId=-1}ngOnDestroy(){this.dispose()}dispose(){this.locationSubscription&&(this.locationSubscription.unsubscribe(),this.locationSubscription=null)}createUrlTree(t,e={}){const{relativeTo:n,queryParams:r,fragment:o,preserveQueryParams:s,queryParamsHandling:a,preserveFragment:u}=e;Object(i.T)()&&s&&console&&console.warn&&console.warn("preserveQueryParams is deprecated, use queryParamsHandling instead.");const c=n||this.routerState.root,l=u?this.currentUrlTree.fragment:o;let h=null;if(a)switch(a){case"merge":h=Object.assign(Object.assign({},this.currentUrlTree.queryParams),r);break;case"preserve":h=this.currentUrlTree.queryParams;break;default:h=r||null}else h=s?this.currentUrlTree.queryParams:r||null;return null!==h&&(h=this.removeEmptyProps(h)),function(t,e,n,r,i){if(0===n.length)return Te(e.root,e.root,e,r,i);const o=function(t){if("string"==typeof t[0]&&1===t.length&&"/"===t[0])return new Ce(!0,0,t);let e=0,n=!1;const r=t.reduce((t,r,i)=>{if("object"==typeof r&&null!=r){if(r.outlets){const e={};return Ut(r.outlets,(t,n)=>{e[n]="string"==typeof t?t.split("/"):t}),[...t,{outlets:e}]}if(r.segmentPath)return[...t,r.segmentPath]}return"string"!=typeof r?[...t,r]:0===i?(r.split("/").forEach((r,i)=>{0==i&&"."===r||(0==i&&""===r?n=!0:".."===r?e++:""!=r&&t.push(r))}),t):[...t,r]},[]);return new Ce(n,e,r)}(n);if(o.toRoot())return Te(e.root,new Vt([],{}),e,r,i);const s=function(t,e,n){if(t.isAbsolute)return new Oe(e.root,!0,0);if(-1===n.snapshot._lastPathIndex){const t=n.snapshot._urlSegment;return new Oe(t,t===e.root,0)}const r=Ee(t.commands[0])?0:1;return function(t,e,n){let r=t,i=e,o=n;for(;o>i;){if(o-=i,r=r.parent,!r)throw new Error("Invalid number of '../'");i=r.segments.length}return new Oe(r,!1,i-o)}(n.snapshot._urlSegment,n.snapshot._lastPathIndex+r,t.numberOfDoubleDots)}(o,e,t),a=s.processChildren?Ie(s.segmentGroup,s.index,o.commands):Se(s.segmentGroup,s.index,o.commands);return Te(s.segmentGroup,a,e,r,i)}(c,this.currentUrlTree,t,h,l)}navigateByUrl(t,e={skipLocationChange:!1}){Object(i.T)()&&this.isNgZoneEnabled&&!i.z.isInAngularZone()&&this.console.warn("Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?");const n=Me(t)?t:this.parseUrl(t),r=this.urlHandlingStrategy.merge(n,this.rawUrlTree);return this.scheduleNavigation(r,"imperative",null,e)}navigate(t,e={skipLocationChange:!1}){return function(t){for(let e=0;e<t.length;e++){const n=t[e];if(null==n)throw new Error(`The requested path contains ${n} segment at index ${e}`)}}(t),this.navigateByUrl(this.createUrlTree(t,e),e)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){let e;try{e=this.urlSerializer.parse(t)}catch(n){e=this.malformedUriErrorHandler(n,this.urlSerializer,t)}return e}isActive(t,e){if(Me(t))return Bt(this.currentUrlTree,t,e);const n=this.parseUrl(t);return Bt(this.currentUrlTree,n,e)}removeEmptyProps(t){return Object.keys(t).reduce((e,n)=>{const r=t[n];return null!=r&&(e[n]=r),e},{})}processNavigations(){this.navigations.subscribe(t=>{this.navigated=!0,this.lastSuccessfulId=t.id,this.events.next(new gt(t.id,this.serializeUrl(t.extractedUrl),this.serializeUrl(this.currentUrlTree))),this.lastSuccessfulNavigation=this.currentNavigation,this.currentNavigation=null,t.resolve(!0)},t=>{this.console.warn("Unhandled Navigation Error: ")})}scheduleNavigation(t,e,n,r,i){const o=this.getTransition();if(o&&"imperative"!==e&&"imperative"===o.source&&o.rawUrl.toString()===t.toString())return Promise.resolve(!0);if(o&&"hashchange"==e&&"popstate"===o.source&&o.rawUrl.toString()===t.toString())return Promise.resolve(!0);if(o&&"popstate"==e&&"hashchange"===o.source&&o.rawUrl.toString()===t.toString())return Promise.resolve(!0);let s,a,u;i?(s=i.resolve,a=i.reject,u=i.promise):u=new Promise((t,e)=>{s=t,a=e});const c=++this.navigationId;return this.setTransition({id:c,source:e,restoredState:n,currentUrlTree:this.currentUrlTree,currentRawUrl:this.rawUrlTree,rawUrl:t,extras:r,resolve:s,reject:a,promise:u,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),u.catch(t=>Promise.reject(t))}setBrowserUrl(t,e,n,r){const i=this.urlSerializer.serialize(t);r=r||{},this.location.isCurrentPathEqualTo(i)||e?this.location.replaceState(i,"",Object.assign(Object.assign({},r),{navigationId:n})):this.location.go(i,"",Object.assign(Object.assign({},r),{navigationId:n}))}resetStateAndUrl(t,e,n){this.routerState=t,this.currentUrlTree=e,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,n),this.resetUrlToCurrentUrlTree()}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree),"",{navigationId:this.lastSuccessfulId})}}return t.\u0275fac=function(e){return new(e||t)(i.Pb(i.M),i.Pb(Gt),i.Pb(On),i.Pb(r.g),i.Pb(i.r),i.Pb(i.w),i.Pb(i.i),i.Pb(void 0))},t.\u0275prov=i.Db({token:t,factory:t.\u0275fac}),t})(),Nn=(()=>{class t{constructor(t,e,n){this.router=t,this.route=e,this.locationStrategy=n,this.commands=[],this.subscription=t.events.subscribe(t=>{t instanceof gt&&this.updateTargetUrlAndHref()})}set routerLink(t){this.commands=null!=t?Array.isArray(t)?t:[t]:[]}set preserveQueryParams(t){Object(i.T)()&&console&&console.warn&&console.warn("preserveQueryParams is deprecated, use queryParamsHandling instead."),this.preserve=t}ngOnChanges(t){this.updateTargetUrlAndHref()}ngOnDestroy(){this.subscription.unsubscribe()}onClick(t,e,n,r){if(0!==t||e||n||r)return!0;if("string"==typeof this.target&&"_self"!=this.target)return!0;const i={skipLocationChange:Dn(this.skipLocationChange),replaceUrl:Dn(this.replaceUrl),state:this.state};return this.router.navigateByUrl(this.urlTree,i),!1}updateTargetUrlAndHref(){this.href=this.locationStrategy.prepareExternalUrl(this.router.serializeUrl(this.urlTree))}get urlTree(){return this.router.createUrlTree(this.commands,{relativeTo:this.route,queryParams:this.queryParams,fragment:this.fragment,preserveQueryParams:Dn(this.preserve),queryParamsHandling:this.queryParamsHandling,preserveFragment:Dn(this.preserveFragment)})}}return t.\u0275fac=function(e){return new(e||t)(i.Hb(Pn),i.Hb(fe),i.Hb(r.h))},t.\u0275dir=i.Cb({type:t,selectors:[["a","routerLink",""],["area","routerLink",""]],hostVars:2,hostBindings:function(t,e){1&t&&i.Sb("click",(function(t){return e.onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)})),2&t&&(i.Ob("href",e.href,i.dc),i.yb("target",e.target))},inputs:{routerLink:"routerLink",preserveQueryParams:"preserveQueryParams",target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",preserveFragment:"preserveFragment",skipLocationChange:"skipLocationChange",replaceUrl:"replaceUrl",state:"state"},features:[i.vb]}),t})();function Dn(t){return""===t||!!t}let jn=(()=>{class t{constructor(t,e,n,r,o){this.parentContexts=t,this.location=e,this.resolver=n,this.changeDetector=o,this.activated=null,this._activatedRoute=null,this.activateEvents=new i.n,this.deactivateEvents=new i.n,this.name=r||"primary",t.onChildOutletCreated(this.name,this)}ngOnDestroy(){this.parentContexts.onChildOutletDestroyed(this.name)}ngOnInit(){if(!this.activated){const t=this.parentContexts.getContext(this.name);t&&t.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.resolver||null))}}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new Error("Outlet is not activated");return this.activated.instance}get activatedRoute(){if(!this.activated)throw new Error("Outlet is not activated");return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new Error("Outlet is not activated");this.location.detach();const t=this.activated;return this.activated=null,this._activatedRoute=null,t}attach(t,e){this.activated=t,this._activatedRoute=e,this.location.insert(t.hostView)}deactivate(){if(this.activated){const t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,e){if(this.isActivated)throw new Error("Cannot activate an already activated outlet");this._activatedRoute=t;const n=(e=e||this.resolver).resolveComponentFactory(t._futureSnapshot.routeConfig.component),r=this.parentContexts.getOrCreateContext(this.name).children,i=new Rn(t,r,this.location.injector);this.activated=this.location.createComponent(n,this.location.length,i),this.changeDetector.markForCheck(),this.activateEvents.emit(this.activated.instance)}}return t.\u0275fac=function(e){return new(e||t)(i.Hb(On),i.Hb(i.O),i.Hb(i.j),i.Qb("name"),i.Hb(i.h))},t.\u0275dir=i.Cb({type:t,selectors:[["router-outlet"]],outputs:{activateEvents:"activate",deactivateEvents:"deactivate"},exportAs:["outlet"]}),t})();class Rn{constructor(t,e,n){this.route=t,this.childContexts=e,this.parent=n}get(t,e){return t===fe?this.route:t===On?this.childContexts:this.parent.get(t,e)}}class kn{}class Ln{preload(t,e){return Object(o.a)(null)}}let Mn=(()=>{class t{constructor(t,e,n,r,i){this.router=t,this.injector=r,this.preloadingStrategy=i,this.loader=new Tn(e,n,e=>t.triggerEvent(new Tt(e)),e=>t.triggerEvent(new Ct(e)))}setUpPreloading(){this.subscription=this.router.events.pipe(Object(I.a)(t=>t instanceof gt),Object(ct.a)(()=>this.preload())).subscribe(()=>{})}preload(){const t=this.injector.get(i.x);return this.processRoutes(t,this.router.config)}ngOnDestroy(){this.subscription.unsubscribe()}processRoutes(t,e){const n=[];for(const r of e)if(r.loadChildren&&!r.canLoad&&r._loadedConfig){const t=r._loadedConfig;n.push(this.processRoutes(t.module,t.routes))}else r.loadChildren&&!r.canLoad?n.push(this.preloadConfig(t,r)):r.children&&n.push(this.processRoutes(t,r.children));return Object(s.a)(n).pipe(Object(x.a)(),Object(O.a)(t=>{}))}preloadConfig(t,e){return this.preloadingStrategy.preload(e,()=>this.loader.load(t.injector,e).pipe(Object(X.a)(t=>(e._loadedConfig=t,this.processRoutes(t.module,t.routes)))))}}return t.\u0275fac=function(e){return new(e||t)(i.Pb(Pn),i.Pb(i.w),i.Pb(i.i),i.Pb(i.r),i.Pb(kn))},t.\u0275prov=i.Db({token:t,factory:t.\u0275fac}),t})(),Un=(()=>{class t{constructor(t,e,n={}){this.router=t,this.viewportScroller=e,this.options=n,this.lastId=0,this.lastSource="imperative",this.restoredId=0,this.store={},n.scrollPositionRestoration=n.scrollPositionRestoration||"disabled",n.anchorScrolling=n.anchorScrolling||"disabled"}init(){"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.router.events.subscribe(t=>{t instanceof ft?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=t.navigationTrigger,this.restoredId=t.restoredState?t.restoredState.navigationId:0):t instanceof gt&&(this.lastId=t.id,this.scheduleScrollEvent(t,this.router.parseUrl(t.urlAfterRedirects).fragment))})}consumeScrollEvents(){return this.router.events.subscribe(t=>{t instanceof At&&(t.position?"top"===this.options.scrollPositionRestoration?this.viewportScroller.scrollToPosition([0,0]):"enabled"===this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition(t.position):t.anchor&&"enabled"===this.options.anchorScrolling?this.viewportScroller.scrollToAnchor(t.anchor):"disabled"!==this.options.scrollPositionRestoration&&this.viewportScroller.scrollToPosition([0,0]))})}scheduleScrollEvent(t,e){this.router.triggerEvent(new At(t,"popstate"===this.lastSource?this.store[this.restoredId]:null,e))}ngOnDestroy(){this.routerEventsSubscription&&this.routerEventsSubscription.unsubscribe(),this.scrollEventsSubscription&&this.scrollEventsSubscription.unsubscribe()}}return t.\u0275fac=function(e){return new(e||t)(i.Pb(Pn),i.Pb(r.m),i.Pb(void 0))},t.\u0275prov=i.Db({token:t,factory:t.\u0275fac}),t})();const Fn=new i.q("ROUTER_CONFIGURATION"),Bn=new i.q("ROUTER_FORROOT_GUARD"),Hn=[r.g,{provide:Gt,useClass:Yt},{provide:Pn,useFactory:function(t,e,n,i,o,s,a,u={},c,l){const h=new Pn(null,t,e,n,i,o,s,Lt(a));if(c&&(h.urlHandlingStrategy=c),l&&(h.routeReuseStrategy=l),u.errorHandler&&(h.errorHandler=u.errorHandler),u.malformedUriErrorHandler&&(h.malformedUriErrorHandler=u.malformedUriErrorHandler),u.enableTracing){const t=Object(r.q)();h.events.subscribe(e=>{t.logGroup("Router Event: "+e.constructor.name),t.log(e.toString()),t.log(e),t.logGroupEnd()})}return u.onSameUrlNavigation&&(h.onSameUrlNavigation=u.onSameUrlNavigation),u.paramsInheritanceStrategy&&(h.paramsInheritanceStrategy=u.paramsInheritanceStrategy),u.urlUpdateStrategy&&(h.urlUpdateStrategy=u.urlUpdateStrategy),u.relativeLinkResolution&&(h.relativeLinkResolution=u.relativeLinkResolution),h},deps:[Gt,On,r.g,i.r,i.w,i.i,En,Fn,[class{},new i.A],[class{},new i.A]]},On,{provide:fe,useFactory:function(t){return t.routerState.root},deps:[Pn]},{provide:i.w,useClass:i.J},Mn,Ln,class{preload(t,e){return e().pipe(V(()=>Object(o.a)(null)))}},{provide:Fn,useValue:{enableTracing:!1}}];function Vn(){return new i.y("Router",Pn)}let zn=(()=>{class t{constructor(t,e){}static forRoot(e,n){return{ngModule:t,providers:[Hn,Yn(e),{provide:Bn,useFactory:Gn,deps:[[Pn,new i.A,new i.I]]},{provide:Fn,useValue:n||{}},{provide:r.h,useFactory:$n,deps:[r.l,[new i.p(r.a),new i.A],Fn]},{provide:Un,useFactory:qn,deps:[Pn,r.m,Fn]},{provide:kn,useExisting:n&&n.preloadingStrategy?n.preloadingStrategy:Ln},{provide:i.y,multi:!0,useFactory:Vn},[Wn,{provide:i.d,multi:!0,useFactory:Xn,deps:[Wn]},{provide:Zn,useFactory:Qn,deps:[Wn]},{provide:i.b,multi:!0,useExisting:Zn}]]}}static forChild(e){return{ngModule:t,providers:[Yn(e)]}}}return t.\u0275mod=i.Fb({type:t}),t.\u0275inj=i.Eb({factory:function(e){return new(e||t)(i.Pb(Bn,8),i.Pb(Pn,8))}}),t})();function qn(t,e,n){return n.scrollOffset&&e.setOffset(n.scrollOffset),new Un(t,e,n)}function $n(t,e,n={}){return n.useHash?new r.e(t,e):new r.k(t,e)}function Gn(t){if(t)throw new Error("RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead.");return"guarded"}function Yn(t){return[{provide:i.a,multi:!0,useValue:t},{provide:En,multi:!0,useValue:t}]}let Wn=(()=>{class t{constructor(t){this.injector=t,this.initNavigation=!1,this.resultOfPreactivationDone=new C.a}appInitializer(){return this.injector.get(r.f,Promise.resolve(null)).then(()=>{let t=null;const e=new Promise(e=>t=e),n=this.injector.get(Pn),r=this.injector.get(Fn);if(this.isLegacyDisabled(r)||this.isLegacyEnabled(r))t(!0);else if("disabled"===r.initialNavigation)n.setUpLocationChangeListener(),t(!0);else{if("enabled"!==r.initialNavigation)throw new Error(`Invalid initialNavigation options: '${r.initialNavigation}'`);n.hooks.afterPreactivation=()=>this.initNavigation?Object(o.a)(null):(this.initNavigation=!0,t(!0),this.resultOfPreactivationDone),n.initialNavigation()}return e})}bootstrapListener(t){const e=this.injector.get(Fn),n=this.injector.get(Mn),r=this.injector.get(Un),o=this.injector.get(Pn),s=this.injector.get(i.g);t===s.components[0]&&(this.isLegacyEnabled(e)?o.initialNavigation():this.isLegacyDisabled(e)&&o.setUpLocationChangeListener(),n.setUpPreloading(),r.init(),o.resetRootComponentType(s.componentTypes[0]),this.resultOfPreactivationDone.next(null),this.resultOfPreactivationDone.complete())}isLegacyEnabled(t){return"legacy_enabled"===t.initialNavigation||!0===t.initialNavigation||void 0===t.initialNavigation}isLegacyDisabled(t){return"legacy_disabled"===t.initialNavigation||!1===t.initialNavigation}}return t.\u0275fac=function(e){return new(e||t)(i.Pb(i.r))},t.\u0275prov=i.Db({token:t,factory:t.\u0275fac}),t})();function Xn(t){return t.appInitializer.bind(t)}function Qn(t){return t.bootstrapListener.bind(t)}const Zn=new i.q("Router Initializer")},uO6I:function(t,e,n){(function(){var e,r,i,o,s,a,u,c,l={}.hasOwnProperty;c=n("RfOz"),u=c.isObject,a=c.isFunction,s=c.getValue,o=n("kud4"),e=n("Bl63"),r=n("IoDD"),i=n("XCq/"),t.exports=function(t){function n(t,r,i){var o,s,a,u;if(n.__super__.constructor.call(this,t),null==r)throw new Error("Missing element name. "+this.debugInfo());if(this.name=this.stringify.name(r),this.type=e.Element,this.attribs={},this.schemaTypeInfo=null,null!=i&&this.attribute(i),t.type===e.Document&&(this.isRoot=!0,this.documentObject=t,t.rootObject=this,t.children))for(s=0,a=(u=t.children).length;s<a;s++)if((o=u[s]).type===e.DocType){o.name=this.name;break}}return function(t,e){for(var n in e)l.call(e,n)&&(t[n]=e[n]);function r(){this.constructor=t}r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype}(n,t),Object.defineProperty(n.prototype,"tagName",{get:function(){return this.name}}),Object.defineProperty(n.prototype,"namespaceURI",{get:function(){return""}}),Object.defineProperty(n.prototype,"prefix",{get:function(){return""}}),Object.defineProperty(n.prototype,"localName",{get:function(){return this.name}}),Object.defineProperty(n.prototype,"id",{get:function(){throw new Error("This DOM method is not implemented."+this.debugInfo())}}),Object.defineProperty(n.prototype,"className",{get:function(){throw new Error("This DOM method is not implemented."+this.debugInfo())}}),Object.defineProperty(n.prototype,"classList",{get:function(){throw new Error("This DOM method is not implemented."+this.debugInfo())}}),Object.defineProperty(n.prototype,"attributes",{get:function(){return this.attributeMap&&this.attributeMap.nodes||(this.attributeMap=new i(this.attribs)),this.attributeMap}}),n.prototype.clone=function(){var t,e,n;for(t in(e=Object.create(this)).isRoot&&(e.documentObject=null),e.attribs={},n=this.attribs)l.call(n,t)&&(e.attribs[t]=n[t].clone());return e.children=[],this.children.forEach((function(t){var n;return(n=t.clone()).parent=e,e.children.push(n)})),e},n.prototype.attribute=function(t,e){var n;if(null!=t&&(t=s(t)),u(t))for(n in t)l.call(t,n)&&this.attribute(n,t[n]);else a(e)&&(e=e.apply()),this.options.keepNullAttributes&&null==e?this.attribs[t]=new r(this,t,""):null!=e&&(this.attribs[t]=new r(this,t,e));return this},n.prototype.removeAttribute=function(t){var e,n;if(null==t)throw new Error("Missing attribute name. "+this.debugInfo());if(t=s(t),Array.isArray(t))for(e=0,n=t.length;e<n;e++)delete this.attribs[t[e]];else delete this.attribs[t];return this},n.prototype.toString=function(t){return this.options.writer.element(this,this.options.writer.filterOptions(t))},n.prototype.att=function(t,e){return this.attribute(t,e)},n.prototype.a=function(t,e){return this.attribute(t,e)},n.prototype.getAttribute=function(t){return this.attribs.hasOwnProperty(t)?this.attribs[t].value:null},n.prototype.setAttribute=function(t,e){throw new Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.getAttributeNode=function(t){return this.attribs.hasOwnProperty(t)?this.attribs[t]:null},n.prototype.setAttributeNode=function(t){throw new Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.removeAttributeNode=function(t){throw new Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.getElementsByTagName=function(t){throw new Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.getAttributeNS=function(t,e){throw new Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.setAttributeNS=function(t,e,n){throw new Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.removeAttributeNS=function(t,e){throw new Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.getAttributeNodeNS=function(t,e){throw new Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.setAttributeNodeNS=function(t){throw new Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.getElementsByTagNameNS=function(t,e){throw new Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.hasAttribute=function(t){return this.attribs.hasOwnProperty(t)},n.prototype.hasAttributeNS=function(t,e){throw new Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.setIdAttribute=function(t,e){return this.attribs.hasOwnProperty(t)?this.attribs[t].isId:e},n.prototype.setIdAttributeNS=function(t,e,n){throw new Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.setIdAttributeNode=function(t,e){throw new Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.getElementsByTagName=function(t){throw new Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.getElementsByTagNameNS=function(t,e){throw new Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.getElementsByClassName=function(t){throw new Error("This DOM method is not implemented."+this.debugInfo())},n.prototype.isEqualNode=function(t){var e,r,i;if(!n.__super__.isEqualNode.apply(this,arguments).isEqualNode(t))return!1;if(t.namespaceURI!==this.namespaceURI)return!1;if(t.prefix!==this.prefix)return!1;if(t.localName!==this.localName)return!1;if(t.attribs.length!==this.attribs.length)return!1;for(e=r=0,i=this.attribs.length-1;0<=i?r<=i:r>=i;e=0<=i?++r:--r)if(!this.attribs[e].isEqualNode(t.attribs[e]))return!1;return!0},n}(o)}).call(this)},w3aC:function(t,e,n){(function(){var e,r,i,o={}.hasOwnProperty;e=n("Bl63"),i=n("pLb+"),r=n("CYXk"),t.exports=function(t){function n(t,e){this.stream=t,n.__super__.constructor.call(this,e)}return function(t,e){for(var n in e)o.call(e,n)&&(t[n]=e[n]);function r(){this.constructor=t}r.prototype=e.prototype,t.prototype=new r,t.__super__=e.prototype}(n,t),n.prototype.endline=function(t,e,i){return t.isLastRootNode&&e.state===r.CloseTag?"":n.__super__.endline.call(this,t,e,i)},n.prototype.document=function(t,e){var n,r,i,o,s,a,u,c;for(n=r=0,o=(a=t.children).length;r<o;n=++r)a[n].isLastRootNode=n===t.children.length-1;for(e=this.filterOptions(e),c=[],i=0,s=(u=t.children).length;i<s;i++)c.push(this.writeChildNode(u[i],e,0));return c},n.prototype.attribute=function(t,e,r){return this.stream.write(n.__super__.attribute.call(this,t,e,r))},n.prototype.cdata=function(t,e,r){return this.stream.write(n.__super__.cdata.call(this,t,e,r))},n.prototype.comment=function(t,e,r){return this.stream.write(n.__super__.comment.call(this,t,e,r))},n.prototype.declaration=function(t,e,r){return this.stream.write(n.__super__.declaration.call(this,t,e,r))},n.prototype.docType=function(t,e,n){var i,o,s;if(n||(n=0),this.openNode(t,e,n),e.state=r.OpenTag,this.stream.write(this.indent(t,e,n)),this.stream.write("<!DOCTYPE "+t.root().name),t.pubID&&t.sysID?this.stream.write(' PUBLIC "'+t.pubID+'" "'+t.sysID+'"'):t.sysID&&this.stream.write(' SYSTEM "'+t.sysID+'"'),t.children.length>0){for(this.stream.write(" ["),this.stream.write(this.endline(t,e,n)),e.state=r.InsideTag,i=0,o=(s=t.children).length;i<o;i++)this.writeChildNode(s[i],e,n+1);e.state=r.CloseTag,this.stream.write("]")}return e.state=r.CloseTag,this.stream.write(e.spaceBeforeSlash+">"),this.stream.write(this.endline(t,e,n)),e.state=r.None,this.closeNode(t,e,n)},n.prototype.element=function(t,n,i){var s,a,u,c,l,h,p;for(l in i||(i=0),this.openNode(t,n,i),n.state=r.OpenTag,this.stream.write(this.indent(t,n,i)+"<"+t.name),h=t.attribs)o.call(h,l)&&this.attribute(h[l],n,i);if(a=0===(s=t.children.length)?null:t.children[0],0===s||t.children.every((function(t){return(t.type===e.Text||t.type===e.Raw)&&""===t.value})))n.allowEmpty?(this.stream.write(">"),n.state=r.CloseTag,this.stream.write("</"+t.name+">")):(n.state=r.CloseTag,this.stream.write(n.spaceBeforeSlash+"/>"));else if(!n.pretty||1!==s||a.type!==e.Text&&a.type!==e.Raw||null==a.value){for(this.stream.write(">"+this.endline(t,n,i)),n.state=r.InsideTag,u=0,c=(p=t.children).length;u<c;u++)this.writeChildNode(p[u],n,i+1);n.state=r.CloseTag,this.stream.write(this.indent(t,n,i)+"</"+t.name+">")}else this.stream.write(">"),n.state=r.InsideTag,n.suppressPrettyCount++,this.writeChildNode(a,n,i+1),n.suppressPrettyCount--,n.state=r.CloseTag,this.stream.write("</"+t.name+">");return this.stream.write(this.endline(t,n,i)),n.state=r.None,this.closeNode(t,n,i)},n.prototype.processingInstruction=function(t,e,r){return this.stream.write(n.__super__.processingInstruction.call(this,t,e,r))},n.prototype.raw=function(t,e,r){return this.stream.write(n.__super__.raw.call(this,t,e,r))},n.prototype.text=function(t,e,r){return this.stream.write(n.__super__.text.call(this,t,e,r))},n.prototype.dtdAttList=function(t,e,r){return this.stream.write(n.__super__.dtdAttList.call(this,t,e,r))},n.prototype.dtdElement=function(t,e,r){return this.stream.write(n.__super__.dtdElement.call(this,t,e,r))},n.prototype.dtdEntity=function(t,e,r){return this.stream.write(n.__super__.dtdEntity.call(this,t,e,r))},n.prototype.dtdNotation=function(t,e,r){return this.stream.write(n.__super__.dtdNotation.call(this,t,e,r))},n}(i)}).call(this)},yCtX:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n("HDdC"),i=n("ngJS"),o=n("jZKg");function s(t,e){return e?Object(o.a)(t,e):new r.a(Object(i.a)(t))}},"z+Ro":function(t,e,n){"use strict";function r(t){return t&&"function"==typeof t.schedule}n.d(e,"a",(function(){return r}))},zUnb:function(t,e,n){"use strict";n.r(e);var r=n("fXoL"),i=n("AytR"),o=n("ofXK");class s extends o.o{constructor(){super()}supportsDOMEvents(){return!0}}class a extends s{static makeCurrent(){Object(o.s)(new a)}getProperty(t,e){return t[e]}log(t){window.console&&window.console.log&&window.console.log(t)}logGroup(t){window.console&&window.console.group&&window.console.group(t)}logGroupEnd(){window.console&&window.console.groupEnd&&window.console.groupEnd()}onAndCancel(t,e,n){return t.addEventListener(e,n,!1),()=>{t.removeEventListener(e,n,!1)}}dispatchEvent(t,e){t.dispatchEvent(e)}remove(t){return t.parentNode&&t.parentNode.removeChild(t),t}getValue(t){return t.value}createElement(t,e){return(e=e||this.getDefaultDocument()).createElement(t)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(t){return t.nodeType===Node.ELEMENT_NODE}isShadowRoot(t){return t instanceof DocumentFragment}getGlobalEventTarget(t,e){return"window"===e?window:"document"===e?t:"body"===e?t.body:null}getHistory(){return window.history}getLocation(){return window.location}getBaseHref(t){const e=c||(c=document.querySelector("base"),c)?c.getAttribute("href"):null;return null==e?null:(n=e,u||(u=document.createElement("a")),u.setAttribute("href",n),"/"===u.pathname.charAt(0)?u.pathname:"/"+u.pathname);var n}resetBaseElement(){c=null}getUserAgent(){return window.navigator.userAgent}performanceNow(){return window.performance&&window.performance.now?window.performance.now():(new Date).getTime()}supportsCookies(){return!0}getCookie(t){return Object(o.r)(document.cookie,t)}}let u,c=null;const l=new r.q("TRANSITION_ID"),h=[{provide:r.d,useFactory:function(t,e,n){return()=>{n.get(r.e).donePromise.then(()=>{const n=Object(o.q)();Array.prototype.slice.apply(e.querySelectorAll("style[ng-transition]")).filter(e=>e.getAttribute("ng-transition")===t).forEach(t=>n.remove(t))})}},deps:[l,o.c,r.r],multi:!0}];class p{static init(){Object(r.V)(new p)}addToWindow(t){r.mb.getAngularTestability=(e,n=!0)=>{const r=t.findTestabilityInTree(e,n);if(null==r)throw new Error("Could not find testability for element.");return r},r.mb.getAllAngularTestabilities=()=>t.getAllTestabilities(),r.mb.getAllAngularRootElements=()=>t.getAllRootElements(),r.mb.frameworkStabilizers||(r.mb.frameworkStabilizers=[]),r.mb.frameworkStabilizers.push(t=>{const e=r.mb.getAllAngularTestabilities();let n=e.length,i=!1;const o=function(e){i=i||e,n--,0==n&&t(i)};e.forEach((function(t){t.whenStable(o)}))})}findTestabilityInTree(t,e,n){if(null==e)return null;const r=t.getTestability(e);return null!=r?r:n?Object(o.q)().isShadowRoot(e)?this.findTestabilityInTree(t,e.host,!0):this.findTestabilityInTree(t,e.parentElement,!0):null}}const d=new r.q("EventManagerPlugins");let f=(()=>{class t{constructor(t,e){this._zone=e,this._eventNameToPlugin=new Map,t.forEach(t=>t.manager=this),this._plugins=t.slice().reverse()}addEventListener(t,e,n){return this._findPluginFor(e).addEventListener(t,e,n)}addGlobalEventListener(t,e,n){return this._findPluginFor(e).addGlobalEventListener(t,e,n)}getZone(){return this._zone}_findPluginFor(t){const e=this._eventNameToPlugin.get(t);if(e)return e;const n=this._plugins;for(let r=0;r<n.length;r++){const e=n[r];if(e.supports(t))return this._eventNameToPlugin.set(t,e),e}throw new Error("No event manager plugin found for event "+t)}}return t.\u0275fac=function(e){return new(e||t)(r.Pb(d),r.Pb(r.z))},t.\u0275prov=r.Db({token:t,factory:t.\u0275fac}),t})();class g{constructor(t){this._doc=t}addGlobalEventListener(t,e,n){const r=Object(o.q)().getGlobalEventTarget(this._doc,t);if(!r)throw new Error(`Unsupported event target ${r} for event ${e}`);return this.addEventListener(r,e,n)}}let m=(()=>{class t{constructor(){this._stylesSet=new Set}addStyles(t){const e=new Set;t.forEach(t=>{this._stylesSet.has(t)||(this._stylesSet.add(t),e.add(t))}),this.onStylesAdded(e)}onStylesAdded(t){}getAllStyles(){return Array.from(this._stylesSet)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=r.Db({token:t,factory:t.\u0275fac}),t})(),y=(()=>{class t extends m{constructor(t){super(),this._doc=t,this._hostNodes=new Set,this._styleNodes=new Set,this._hostNodes.add(t.head)}_addStylesToHost(t,e){t.forEach(t=>{const n=this._doc.createElement("style");n.textContent=t,this._styleNodes.add(e.appendChild(n))})}addHost(t){this._addStylesToHost(this._stylesSet,t),this._hostNodes.add(t)}removeHost(t){this._hostNodes.delete(t)}onStylesAdded(t){this._hostNodes.forEach(e=>this._addStylesToHost(t,e))}ngOnDestroy(){this._styleNodes.forEach(t=>Object(o.q)().remove(t))}}return t.\u0275fac=function(e){return new(e||t)(r.Pb(o.c))},t.\u0275prov=r.Db({token:t,factory:t.\u0275fac}),t})();const b={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},w=/%COMP%/g;function v(t,e,n){for(let r=0;r<e.length;r++){let i=e[r];Array.isArray(i)?v(t,i,n):(i=i.replace(w,t),n.push(i))}return n}function _(t){return e=>{if("__ngUnwrap__"===e)return t;!1===t(e)&&(e.preventDefault(),e.returnValue=!1)}}let E=(()=>{class t{constructor(t,e,n){this.eventManager=t,this.sharedStylesHost=e,this.appId=n,this.rendererByCompId=new Map,this.defaultRenderer=new T(t)}createRenderer(t,e){if(!t||!e)return this.defaultRenderer;switch(e.encapsulation){case r.P.Emulated:{let n=this.rendererByCompId.get(e.id);return n||(n=new C(this.eventManager,this.sharedStylesHost,e,this.appId),this.rendererByCompId.set(e.id,n)),n.applyToHost(t),n}case r.P.Native:case r.P.ShadowDom:return new O(this.eventManager,this.sharedStylesHost,t,e);default:if(!this.rendererByCompId.has(e.id)){const t=v(e.id,e.styles,[]);this.sharedStylesHost.addStyles(t),this.rendererByCompId.set(e.id,this.defaultRenderer)}return this.defaultRenderer}}begin(){}end(){}}return t.\u0275fac=function(e){return new(e||t)(r.Pb(f),r.Pb(y),r.Pb(r.c))},t.\u0275prov=r.Db({token:t,factory:t.\u0275fac}),t})();class T{constructor(t){this.eventManager=t,this.data=Object.create(null)}destroy(){}createElement(t,e){return e?document.createElementNS(b[e]||e,t):document.createElement(t)}createComment(t){return document.createComment(t)}createText(t){return document.createTextNode(t)}appendChild(t,e){t.appendChild(e)}insertBefore(t,e,n){t&&t.insertBefore(e,n)}removeChild(t,e){t&&t.removeChild(e)}selectRootElement(t,e){let n="string"==typeof t?document.querySelector(t):t;if(!n)throw new Error(`The selector "${t}" did not match any elements`);return e||(n.textContent=""),n}parentNode(t){return t.parentNode}nextSibling(t){return t.nextSibling}setAttribute(t,e,n,r){if(r){e=r+":"+e;const i=b[r];i?t.setAttributeNS(i,e,n):t.setAttribute(e,n)}else t.setAttribute(e,n)}removeAttribute(t,e,n){if(n){const r=b[n];r?t.removeAttributeNS(r,e):t.removeAttribute(`${n}:${e}`)}else t.removeAttribute(e)}addClass(t,e){t.classList.add(e)}removeClass(t,e){t.classList.remove(e)}setStyle(t,e,n,i){i&r.F.DashCase?t.style.setProperty(e,n,i&r.F.Important?"important":""):t.style[e]=n}removeStyle(t,e,n){n&r.F.DashCase?t.style.removeProperty(e):t.style[e]=""}setProperty(t,e,n){t[e]=n}setValue(t,e){t.nodeValue=e}listen(t,e,n){return"string"==typeof t?this.eventManager.addGlobalEventListener(t,e,_(n)):this.eventManager.addEventListener(t,e,_(n))}}class C extends T{constructor(t,e,n,r){super(t),this.component=n;const i=v(r+"-"+n.id,n.styles,[]);e.addStyles(i),this.contentAttr="_ngcontent-%COMP%".replace(w,r+"-"+n.id),this.hostAttr=function(t){return"_nghost-%COMP%".replace(w,t)}(r+"-"+n.id)}applyToHost(t){super.setAttribute(t,this.hostAttr,"")}createElement(t,e){const n=super.createElement(t,e);return super.setAttribute(n,this.contentAttr,""),n}}class O extends T{constructor(t,e,n,i){super(t),this.sharedStylesHost=e,this.hostEl=n,this.component=i,this.shadowRoot=i.encapsulation===r.P.ShadowDom?n.attachShadow({mode:"open"}):n.createShadowRoot(),this.sharedStylesHost.addHost(this.shadowRoot);const o=v(i.id,i.styles,[]);for(let r=0;r<o.length;r++){const t=document.createElement("style");t.textContent=o[r],this.shadowRoot.appendChild(t)}}nodeOrShadowRoot(t){return t===this.hostEl?this.shadowRoot:t}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild(t,e){return super.appendChild(this.nodeOrShadowRoot(t),e)}insertBefore(t,e,n){return super.insertBefore(this.nodeOrShadowRoot(t),e,n)}removeChild(t,e){return super.removeChild(this.nodeOrShadowRoot(t),e)}parentNode(t){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(t)))}}let x=(()=>{class t extends g{constructor(t){super(t)}supports(t){return!0}addEventListener(t,e,n){return t.addEventListener(e,n,!1),()=>this.removeEventListener(t,e,n)}removeEventListener(t,e,n){return t.removeEventListener(e,n)}}return t.\u0275fac=function(e){return new(e||t)(r.Pb(o.c))},t.\u0275prov=r.Db({token:t,factory:t.\u0275fac}),t})();const S=["alt","control","meta","shift"],I={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},A={A:"1",B:"2",C:"3",D:"4",E:"5",F:"6",G:"7",H:"8",I:"9",J:"*",K:"+",M:"-",N:".",O:"/","`":"0","\x90":"NumLock"},P={alt:t=>t.altKey,control:t=>t.ctrlKey,meta:t=>t.metaKey,shift:t=>t.shiftKey};let N=(()=>{class t extends g{constructor(t){super(t)}supports(e){return null!=t.parseEventName(e)}addEventListener(e,n,r){const i=t.parseEventName(n),s=t.eventCallback(i.fullKey,r,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>Object(o.q)().onAndCancel(e,i.domEventName,s))}static parseEventName(e){const n=e.toLowerCase().split("."),r=n.shift();if(0===n.length||"keydown"!==r&&"keyup"!==r)return null;const i=t._normalizeKey(n.pop());let o="";if(S.forEach(t=>{const e=n.indexOf(t);e>-1&&(n.splice(e,1),o+=t+".")}),o+=i,0!=n.length||0===i.length)return null;const s={};return s.domEventName=r,s.fullKey=o,s}static getEventFullKey(t){let e="",n=function(t){let e=t.key;if(null==e){if(e=t.keyIdentifier,null==e)return"Unidentified";e.startsWith("U+")&&(e=String.fromCharCode(parseInt(e.substring(2),16)),3===t.location&&A.hasOwnProperty(e)&&(e=A[e]))}return I[e]||e}(t);return n=n.toLowerCase()," "===n?n="space":"."===n&&(n="dot"),S.forEach(r=>{r!=n&&(0,P[r])(t)&&(e+=r+".")}),e+=n,e}static eventCallback(e,n,r){return i=>{t.getEventFullKey(i)===e&&r.runGuarded(()=>n(i))}}static _normalizeKey(t){switch(t){case"esc":return"escape";default:return t}}}return t.\u0275fac=function(e){return new(e||t)(r.Pb(o.c))},t.\u0275prov=r.Db({token:t,factory:t.\u0275fac}),t})();const D=[{provide:r.B,useValue:o.p},{provide:r.C,useValue:function(){a.makeCurrent(),p.init()},multi:!0},{provide:o.c,useFactory:function(){return Object(r.rb)(document),document},deps:[]}],j=Object(r.Q)(r.U,"browser",D),R=[[],{provide:r.X,useValue:"root"},{provide:r.m,useFactory:function(){return new r.m},deps:[]},{provide:d,useClass:x,multi:!0,deps:[o.c,r.z,r.B]},{provide:d,useClass:N,multi:!0,deps:[o.c]},[],{provide:E,useClass:E,deps:[f,y,r.c]},{provide:r.E,useExisting:E},{provide:m,useExisting:y},{provide:y,useClass:y,deps:[o.c]},{provide:r.L,useClass:r.L,deps:[r.z]},{provide:f,useClass:f,deps:[d,r.z]},[]];let k=(()=>{class t{constructor(t){if(t)throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")}static withServerTransition(e){return{ngModule:t,providers:[{provide:r.c,useValue:e.appId},{provide:l,useExisting:r.c},h]}}}return t.\u0275mod=r.Fb({type:t}),t.\u0275inj=r.Eb({factory:function(e){return new(e||t)(r.Pb(t,12))},providers:R,imports:[o.b,r.f]}),t})();"undefined"!=typeof window&&window;var L=n("b6Qw"),M=n("BEho"),U=n("tyNb");function F(t,e){1&t&&(r.Mb(0,"li",9),r.Mb(1,"a",31),r.Ib(2,"i",32),r.hc(3,"Sign in "),r.Lb(),r.Lb())}function B(t,e){1&t&&(r.Mb(0,"li",9),r.Mb(1,"a",33),r.Ib(2,"i",32),r.hc(3,"Profile "),r.Lb(),r.Lb())}let H=(()=>{class t{constructor(t,e){this.cookieService=t,this.apiLinkService=e,this.title="angular-starter",this.version="Angular version 10.0.8",this.isLogged=!1}ngOnInit(){this.apiLinkService.isLogged.subscribe(t=>{this.isLogged=t,console.log("apiResults"),console.log(t)})}}return t.\u0275fac=function(e){return new(e||t)(r.Hb(L.a),r.Hb(M.a))},t.\u0275cmp=r.Bb({type:t,selectors:[["app-root"]],decls:52,vars:2,consts:[[1,"app"],[1,"navbar","navbar-expand-md","fixed-top","navbar-dark",2,"background-color","#83d47a"],["routerLink","/",1,"navbar-brand"],["src","./assets/params/images/logo/logo_club.png","width","60","height","60","alt","club_logo"],[1,"mr-1",2,"color","white"],["type","button","data-toggle","collapse","data-target","#navbarsExampleDefault","aria-controls","navbarsExampleDefault","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarsExampleDefault",1,"collapse","navbar-collapse"],[1,"navbar-nav","ml-auto"],[1,"nav-item","active"],["routerLink","/",1,"nav-link"],[1,"fas","fa-home","mr-1"],["routerLink","/games",1,"nav-link"],[1,"fas","fa-gamepad","mr-1"],["routerLink","/links",1,"nav-link"],[1,"fas","fa-link","mr-1"],["routerLink","/about",1,"nav-link"],[1,"far","fa-question-circle"],["class","nav-item active",4,"ngIf"],[1,"container-fluid"],[1,"footer"],[1,"container"],["colspan","4"],["href","https://www.linkedin.com/company/37796301/admin/",1,"social-media-logo"],[1,"fab","fa-linkedin-in","fa-2x"],["href","https://www.facebook.com/ClubInfoINSAT",1,"social-media-logo"],[1,"fab","fa-facebook-f","fa-2x"],[1,"social-media-logo"],["href","https://discord.gg/9G8cWyK",1,"fab","fa-discord","fa-2x"],["href","https://github.com/orgs/ClubInfoInsaT/",1,"social-media-logo"],[1,"fab","fa-github","fa-2x"],["routerLink","/signin",1,"nav-link"],[1,"fas","fa-user","mr-1"],["routerLink","/profile",1,"nav-link"]],template:function(t,e){1&t&&(r.Mb(0,"div",0),r.Mb(1,"header"),r.Mb(2,"nav",1),r.Mb(3,"a",2),r.Ib(4,"img",3),r.Mb(5,"span",4),r.hc(6,"Club Info'"),r.Lb(),r.Lb(),r.Mb(7,"button",5),r.Ib(8,"span",6),r.Lb(),r.Mb(9,"div",7),r.Mb(10,"ul",8),r.Mb(11,"li",9),r.Mb(12,"a",10),r.Ib(13,"i",11),r.hc(14,"Home "),r.Lb(),r.Lb(),r.Mb(15,"li",9),r.Mb(16,"a",12),r.Ib(17,"i",13),r.hc(18,"Games "),r.Lb(),r.Lb(),r.Mb(19,"li",9),r.Mb(20,"a",14),r.Ib(21,"i",15),r.hc(22,"Links "),r.Lb(),r.Lb(),r.Mb(23,"li",9),r.Mb(24,"a",16),r.Ib(25,"i",17),r.hc(26," About Us "),r.Lb(),r.Lb(),r.gc(27,F,4,0,"li",18),r.gc(28,B,4,0,"li",18),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Mb(29,"main"),r.Mb(30,"div",19),r.Ib(31,"router-outlet"),r.Lb(),r.Lb(),r.Mb(32,"div",20),r.Mb(33,"div",21),r.Mb(34,"table"),r.Mb(35,"tr"),r.Mb(36,"th",22),r.Mb(37,"p"),r.hc(38,"club.info@amicale-insat.fr"),r.Lb(),r.Lb(),r.Lb(),r.Mb(39,"tr"),r.Mb(40,"td"),r.Mb(41,"a",23),r.Ib(42,"i",24),r.Lb(),r.Lb(),r.Mb(43,"td"),r.Mb(44,"a",25),r.Ib(45,"i",26),r.Lb(),r.Lb(),r.Mb(46,"td"),r.Mb(47,"a",27),r.Ib(48,"i",28),r.Lb(),r.Lb(),r.Mb(49,"td"),r.Mb(50,"a",29),r.Ib(51,"i",30),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb()),2&t&&(r.xb(27),r.Zb("ngIf",!e.isLogged),r.xb(1),r.Zb("ngIf",e.isLogged))},directives:[U.b,o.j,U.d],styles:['@font-face{font-family:quantico;src:url(quantico-bold-webfont.woff) format("woff"),url(quantico-bolditalic-webfont.woff) format("woff"),url(quantico-regular-webfont.woff) format("woff")}.app[_ngcontent-%COMP%]   footer[_ngcontent-%COMP%], .app[_ngcontent-%COMP%]   main[_ngcontent-%COMP%]{padding-left:1rem}.footer[_ngcontent-%COMP%]{background:#42a3a7;padding:2em}.app[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;text-align:center;flex-grow:0;background-image:url(https://www.fg-a.com/wallpapers/white-marble-4-2018.jpg);background-repeat:no-repeat;background-size:cover}.container[_ngcontent-%COMP%]{display:flex;justify-content:center}.container[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding-left:5px;padding-right:5px}.container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-family:quantico;font-weight:700;font-style:italic}.container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .social-media-logo[_ngcontent-%COMP%]{color:#ffebcd}']}),t})();const V=[{path:"",component:(()=>{class t{constructor(){this.name=i.a.application.name,this.angular=i.a.application.angular,this.bootstrap=i.a.application.bootstrap,this.fontawesome=i.a.application.fontawesome}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Bb({type:t,selectors:[["app-home"]],decls:32,vars:0,consts:[["id","home-div"],["id","home-text-div"],["id","home-list-div"],[1,"home-list"],[1,"not-last-element"],["href","https://discord.gg/9G8cWyK"],["href","https://www.etud.insa-toulouse.fr/~clubinfo/games/course-du-ppa"]],template:function(t,e){1&t&&(r.Mb(0,"div",0),r.Mb(1,"div",1),r.Mb(2,"h1"),r.hc(3," Venez au Club Info' tous les jeudis (\xe0 partir du 17 Septembre) apr\xe8s 14h (salle pr\xe9cis\xe9e dans les jours \xe0 venir)! "),r.Lb(),r.Lb(),r.Mb(4,"div",2),r.Mb(5,"div",3),r.Mb(6,"h5"),r.hc(7,"Events et News"),r.Lb(),r.Mb(8,"ul"),r.Mb(9,"li",4),r.Mb(10,"a",5),r.hc(11,"Notre nouveau Discord"),r.Lb(),r.Lb(),r.Mb(12,"li",4),r.Mb(13,"a",6),r.hc(14,"Dernier jeu cr\xe9\xe9 pour l'int\xe9 2020!"),r.Lb(),r.Lb(),r.Mb(15,"li",4),r.Mb(16,"a",6),r.hc(17," Concours sur la course du PPA jusqu'au 20 Septembre ! "),r.Lb(),r.Lb(),r.Mb(18,"li"),r.hc(19,"Le Club Info' reprend Jeudi 17 Apr\xe8s-midi (salle pr\xe9cis\xe9e dans les jours \xe0 venir)!"),r.Lb(),r.Lb(),r.Lb(),r.Mb(20,"div",3),r.Mb(21,"h5"),r.hc(22,"Projets en cours"),r.Lb(),r.Mb(23,"ul"),r.Mb(24,"li",4),r.hc(25,"Cr\xe9ation du site du club"),r.Lb(),r.Mb(26,"li",4),r.hc(27,"Pr\xe9paration de Tutos Cybers\xe9curit\xe9"),r.Lb(),r.Mb(28,"li",4),r.hc(29,"Mis en place du tuturat Git"),r.Lb(),r.Mb(30,"li"),r.hc(31,"Cr\xe9ation de jeux pour le site"),r.Lb(),r.Lb(),r.Lb(),r.Lb(),r.Lb())},styles:['@font-face{font-family:amatic;src:url(amaticsc-bold-webfont.woff) format("woff"),url(amaticsc-regular-webfont.woff) format("woff"),}@font-face{font-family:quantico;src:url(quantico-bold-webfont.woff) format("woff"),}#home-div[_ngcontent-%COMP%]{width:100%;min-height:77.1vh;display:inline-flex;justify-content:space-around}@media (max-width:800px){#home-div[_ngcontent-%COMP%]{display:inline-block;text-align:center;padding-top:5px;width:100%;height:100%}}@media (max-width:800px){#home-list-div[_ngcontent-%COMP%]{min-height:100px;display:inline-flex;flex-direction:column;justify-content:center;width:inherit}}@media (min-width:800px){#home-list-div[_ngcontent-%COMP%]{width:600px;text-align:center;min-height:100px;display:inline-flex;flex-direction:column;justify-content:center}}#home-text-div[_ngcontent-%COMP%]{font-family:amatic;font-family:quantico;text-align:center;font-weight:700;color:#161618;margin-left:30px;margin-right:10px;justify-content:center;min-height:100px;display:inline-flex;align-items:center}.home-list[_ngcontent-%COMP%]{font-family:cursive;color:#161618;margin:5px;border:2px solid rgba(0,0,0,.342);border-radius:20px;padding-top:10px;padding-bottom:5px}ul[_ngcontent-%COMP%]{list-style:none;padding-right:38px}.not-last-element[_ngcontent-%COMP%]{border-bottom:2px solid rgba(0,0,0,.171)}a[_ngcontent-%COMP%]{color:#161618;text-decoration:none}']}),t})()},{path:"about",loadChildren:()=>n.e(5).then(n.bind(null,"2ztE")).then(t=>t.AboutModule)},{path:"signin",loadChildren:()=>n.e(8).then(n.bind(null,"VOt3")).then(t=>t.SigninModule)},{path:"links",loadChildren:()=>n.e(6).then(n.bind(null,"iD3w")).then(t=>t.LinksModule)},{path:"games",loadChildren:()=>n.e(4).then(n.bind(null,"ms/E")).then(t=>t.GamesModule)},{path:"profile",loadChildren:()=>n.e(7).then(n.bind(null,"0rBZ")).then(t=>t.ProfileModule)},{path:"**",component:(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Bb({type:t,selectors:[["app-not-found"]],decls:2,vars:0,template:function(t,e){1&t&&(r.Mb(0,"p"),r.hc(1,"not-found works!"),r.Lb())},styles:[""]}),t})()}];let z=(()=>{class t{}return t.\u0275mod=r.Fb({type:t}),t.\u0275inj=r.Eb({factory:function(e){return new(e||t)},imports:[[U.c.forRoot(V)],U.c]}),t})();var q=n("3Pt+"),$=n("tk/3"),G=n("NPot");let Y=(()=>{class t{}return t.\u0275mod=r.Fb({type:t,bootstrap:[H]}),t.\u0275inj=r.Eb({factory:function(e){return new(e||t)},providers:[M.a,L.a],imports:[[G.a,k,z,q.a,$.b]]}),t})();i.a.production&&Object(r.R)(),j().bootstrapModule(Y).catch(t=>console.error(t))},zn8P:function(t,e){function n(t){return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}))}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="zn8P"},zx2A:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return u}));var r=n("7o/Q"),i=n("HDdC"),o=n("SeVD");class s extends r.a{constructor(t){super(),this.parent=t}_next(t){this.parent.notifyNext(t)}_error(t){this.parent.notifyError(t),this.unsubscribe()}_complete(){this.parent.notifyComplete(),this.unsubscribe()}}class a extends r.a{notifyNext(t){this.destination.next(t)}notifyError(t){this.destination.error(t)}notifyComplete(){this.destination.complete()}}function u(t,e){if(!e.closed)return t instanceof i.a?t.subscribe(e):Object(o.a)(t)(e)}}},[[0,0]]]);
