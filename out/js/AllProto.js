/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.GameLoginReq = (function() {

    /**
     * Properties of a GameLoginReq.
     * @exports IGameLoginReq
     * @interface IGameLoginReq
     * @property {string|null} [account] GameLoginReq account
     * @property {string|null} [password] GameLoginReq password
     */

    /**
     * Constructs a new GameLoginReq.
     * @exports GameLoginReq
     * @classdesc Represents a GameLoginReq.
     * @implements IGameLoginReq
     * @constructor
     * @param {IGameLoginReq=} [properties] Properties to set
     */
    function GameLoginReq(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GameLoginReq account.
     * @member {string} account
     * @memberof GameLoginReq
     * @instance
     */
    GameLoginReq.prototype.account = "";

    /**
     * GameLoginReq password.
     * @member {string} password
     * @memberof GameLoginReq
     * @instance
     */
    GameLoginReq.prototype.password = "";

    /**
     * Creates a new GameLoginReq instance using the specified properties.
     * @function create
     * @memberof GameLoginReq
     * @static
     * @param {IGameLoginReq=} [properties] Properties to set
     * @returns {GameLoginReq} GameLoginReq instance
     */
    GameLoginReq.create = function create(properties) {
        return new GameLoginReq(properties);
    };

    /**
     * Encodes the specified GameLoginReq message. Does not implicitly {@link GameLoginReq.verify|verify} messages.
     * @function encode
     * @memberof GameLoginReq
     * @static
     * @param {IGameLoginReq} message GameLoginReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GameLoginReq.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.account != null && Object.hasOwnProperty.call(message, "account"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.account);
        if (message.password != null && Object.hasOwnProperty.call(message, "password"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
        return writer;
    };

    /**
     * Encodes the specified GameLoginReq message, length delimited. Does not implicitly {@link GameLoginReq.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GameLoginReq
     * @static
     * @param {IGameLoginReq} message GameLoginReq message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GameLoginReq.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GameLoginReq message from the specified reader or buffer.
     * @function decode
     * @memberof GameLoginReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GameLoginReq} GameLoginReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GameLoginReq.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameLoginReq();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.account = reader.string();
                break;
            case 2:
                message.password = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GameLoginReq message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GameLoginReq
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GameLoginReq} GameLoginReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GameLoginReq.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GameLoginReq message.
     * @function verify
     * @memberof GameLoginReq
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GameLoginReq.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.account != null && message.hasOwnProperty("account"))
            if (!$util.isString(message.account))
                return "account: string expected";
        if (message.password != null && message.hasOwnProperty("password"))
            if (!$util.isString(message.password))
                return "password: string expected";
        return null;
    };

    /**
     * Creates a GameLoginReq message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GameLoginReq
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GameLoginReq} GameLoginReq
     */
    GameLoginReq.fromObject = function fromObject(object) {
        if (object instanceof $root.GameLoginReq)
            return object;
        var message = new $root.GameLoginReq();
        if (object.account != null)
            message.account = String(object.account);
        if (object.password != null)
            message.password = String(object.password);
        return message;
    };

    /**
     * Creates a plain object from a GameLoginReq message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GameLoginReq
     * @static
     * @param {GameLoginReq} message GameLoginReq
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GameLoginReq.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.account = "";
            object.password = "";
        }
        if (message.account != null && message.hasOwnProperty("account"))
            object.account = message.account;
        if (message.password != null && message.hasOwnProperty("password"))
            object.password = message.password;
        return object;
    };

    /**
     * Converts this GameLoginReq to JSON.
     * @function toJSON
     * @memberof GameLoginReq
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GameLoginReq.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GameLoginReq;
})();

$root.GameLoginResp = (function() {

    /**
     * Properties of a GameLoginResp.
     * @exports IGameLoginResp
     * @interface IGameLoginResp
     * @property {number|null} [result] GameLoginResp result
     */

    /**
     * Constructs a new GameLoginResp.
     * @exports GameLoginResp
     * @classdesc Represents a GameLoginResp.
     * @implements IGameLoginResp
     * @constructor
     * @param {IGameLoginResp=} [properties] Properties to set
     */
    function GameLoginResp(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GameLoginResp result.
     * @member {number} result
     * @memberof GameLoginResp
     * @instance
     */
    GameLoginResp.prototype.result = 0;

    /**
     * Creates a new GameLoginResp instance using the specified properties.
     * @function create
     * @memberof GameLoginResp
     * @static
     * @param {IGameLoginResp=} [properties] Properties to set
     * @returns {GameLoginResp} GameLoginResp instance
     */
    GameLoginResp.create = function create(properties) {
        return new GameLoginResp(properties);
    };

    /**
     * Encodes the specified GameLoginResp message. Does not implicitly {@link GameLoginResp.verify|verify} messages.
     * @function encode
     * @memberof GameLoginResp
     * @static
     * @param {IGameLoginResp} message GameLoginResp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GameLoginResp.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.result != null && Object.hasOwnProperty.call(message, "result"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.result);
        return writer;
    };

    /**
     * Encodes the specified GameLoginResp message, length delimited. Does not implicitly {@link GameLoginResp.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GameLoginResp
     * @static
     * @param {IGameLoginResp} message GameLoginResp message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GameLoginResp.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GameLoginResp message from the specified reader or buffer.
     * @function decode
     * @memberof GameLoginResp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GameLoginResp} GameLoginResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GameLoginResp.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameLoginResp();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.result = reader.int32();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GameLoginResp message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GameLoginResp
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GameLoginResp} GameLoginResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GameLoginResp.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GameLoginResp message.
     * @function verify
     * @memberof GameLoginResp
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GameLoginResp.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.result != null && message.hasOwnProperty("result"))
            if (!$util.isInteger(message.result))
                return "result: integer expected";
        return null;
    };

    /**
     * Creates a GameLoginResp message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GameLoginResp
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GameLoginResp} GameLoginResp
     */
    GameLoginResp.fromObject = function fromObject(object) {
        if (object instanceof $root.GameLoginResp)
            return object;
        var message = new $root.GameLoginResp();
        if (object.result != null)
            message.result = object.result | 0;
        return message;
    };

    /**
     * Creates a plain object from a GameLoginResp message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GameLoginResp
     * @static
     * @param {GameLoginResp} message GameLoginResp
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GameLoginResp.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.result = 0;
        if (message.result != null && message.hasOwnProperty("result"))
            object.result = message.result;
        return object;
    };

    /**
     * Converts this GameLoginResp to JSON.
     * @function toJSON
     * @memberof GameLoginResp
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GameLoginResp.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return GameLoginResp;
})();

module.exports = $root;
