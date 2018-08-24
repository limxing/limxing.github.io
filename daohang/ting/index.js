/**
 * NFSS Project
 *
 * @copyright Copyright (c) 2013 ~ 2014 Beijing CmsTop Technology Co.,Ltd. (http://www.9466.com)
 */
(function (window) {

    var DOT_RE = /\/\.\//g
    var DOUBLE_DOT_RE = /\/[^/]+\/\.\.\//
    var SUFFIX_RE = /[?#]|\.\w+$|\/$/
    var ABSOLUTE_RE = /^\/\/.|:\//
    var ROOT_DIR_RE = /^.*?\/\/.*?\//
    var IS_JSCSS_RE = /\.(?:js|css)(?:[?#]|$)/i
    var DIRNAME_RE = /[^?#]*\//
    var cwd = dirname(window.location.href)
    var cachedModules = {}, alias = {}, base = cwd
    var toString = ({}).toString

    function isFunction(obj) {
        return toString.call(obj) === '[object Function]'
    }

    function dirname(path) {
        return path.match(DIRNAME_RE)[0]
    }

    function realpath(path) {
        // /a/b/./c/./d ==> /a/b/c/d
        path = path.replace(DOT_RE, "/")

        // a/b/c/../../d  ==>  a/b/../d  ==>  a/d
        while (path.match(DOUBLE_DOT_RE)) {
            path = path.replace(DOUBLE_DOT_RE, "/")
        }

        return path
    }

    function parseAlias(id) {
        return alias && (typeof alias[id] == 'string') ? alias[id] : id
    }

    function normalize(path) {
        var last = path.length - 1
        // If the uri ends with `#`, just return it without '#'
        if (path.charAt(last) === "#") {
            return path.substring(0, last)
        }
        return SUFFIX_RE.test(path) ? path : (path + '.js');
    }

    function addBase(id, refUri) {
        var ret
        var first = id.charAt(0)

        // Absolute
        if (ABSOLUTE_RE.test(id)) {
            ret = id
        }
        // Relative
        else if (first === ".") {
            ret = (refUri ? dirname(refUri) : cwd) + id
        }
        // Root
        else if (first === "/") {
            var m = cwd.match(ROOT_DIR_RE)
            ret = m ? m[0] + id.substring(1) : id
        }
        // Top-level
        else {
            ret = (base || '') + id
        }

        return realpath(ret)
    }

    function resolve(id, ref) {
        if (!id) return ""

        id = parseAlias(id)
        id = normalize(id)
        return addBase(id, ref)
    }

    function Module(id, factory) {
        this.id = id;
        this.uri = resolve(id);
        this.factory = factory;
        this.exports = null;
        this.status = 0;
        cachedModules[this.uri] = this;
    }

    Module.prototype.exec = function () {
        var mod = this;
        if (mod.status > 0) {
            return mod.exports;
        }

        mod.status = 1;

        var uri = mod.uri;

        function require(id) {
            var id = require.resolve(id);
            if (IS_JSCSS_RE.test(id)) {
                var m = cachedModules[id];
                return m && m.exec();
            } else {
                return id;
            }
        }

        require.resolve = function (id) {
            return resolve(id, uri);
        };

        var factory = mod.factory;

        var exports = isFunction(factory)
            ? factory(require, mod.exports = {}, mod)
            : factory;

        mod.exports = exports === undefined ? mod.exports : exports;
        mod.status = 2;

        return mod.exports;
    }

    function define(id, factory) {
        if (arguments.length === 1) {
            factory = id;
            id = '.';
        }
        return new Module(id, factory);
    }

    define.config = function (config) {
        if (config.alias) {
            alias = config.alias;
        }
        if (config.base) {
            base = addBase(config.base.slice(-1) === '/' ? config.base : (config.base + '/'));
        }
    }
    define.cmd = define.amd = {}

    window.define = define

})(this);;
define.config({"alias":{"jquery":"assets\/lib\/jquery\/1.11\/jquery.js"},"base":".\/assets\/"})