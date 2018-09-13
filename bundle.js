/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.google = (function() {
    
        /**
         * Namespace google.
         * @exports google
         * @namespace
         */
        var google = {};
    
        google.protobuf = (function() {
    
            /**
             * Namespace protobuf.
             * @memberof google
             * @namespace
             */
            var protobuf = {};
    
            protobuf.DoubleValue = (function() {
    
                /**
                 * Properties of a DoubleValue.
                 * @memberof google.protobuf
                 * @interface IDoubleValue
                 * @property {number|null} [value] DoubleValue value
                 */
    
                /**
                 * Constructs a new DoubleValue.
                 * @memberof google.protobuf
                 * @classdesc Represents a DoubleValue.
                 * @implements IDoubleValue
                 * @constructor
                 * @param {google.protobuf.IDoubleValue=} [properties] Properties to set
                 */
                function DoubleValue(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * DoubleValue value.
                 * @member {number} value
                 * @memberof google.protobuf.DoubleValue
                 * @instance
                 */
                DoubleValue.prototype.value = 0;
    
                /**
                 * Creates a new DoubleValue instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.DoubleValue
                 * @static
                 * @param {google.protobuf.IDoubleValue=} [properties] Properties to set
                 * @returns {google.protobuf.DoubleValue} DoubleValue instance
                 */
                DoubleValue.create = function create(properties) {
                    return new DoubleValue(properties);
                };
    
                /**
                 * Encodes the specified DoubleValue message. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.DoubleValue
                 * @static
                 * @param {google.protobuf.IDoubleValue} message DoubleValue message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DoubleValue.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.value != null && message.hasOwnProperty("value"))
                        writer.uint32(/* id 1, wireType 1 =*/9).double(message.value);
                    return writer;
                };
    
                /**
                 * Encodes the specified DoubleValue message, length delimited. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.DoubleValue
                 * @static
                 * @param {google.protobuf.IDoubleValue} message DoubleValue message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DoubleValue.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a DoubleValue message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.DoubleValue
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.DoubleValue} DoubleValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DoubleValue.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DoubleValue();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.value = reader.double();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a DoubleValue message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.DoubleValue
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.DoubleValue} DoubleValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DoubleValue.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a DoubleValue message.
                 * @function verify
                 * @memberof google.protobuf.DoubleValue
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                DoubleValue.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.value != null && message.hasOwnProperty("value"))
                        if (typeof message.value !== "number")
                            return "value: number expected";
                    return null;
                };
    
                /**
                 * Creates a DoubleValue message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.DoubleValue
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.DoubleValue} DoubleValue
                 */
                DoubleValue.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.DoubleValue)
                        return object;
                    var message = new $root.google.protobuf.DoubleValue();
                    if (object.value != null)
                        message.value = Number(object.value);
                    return message;
                };
    
                /**
                 * Creates a plain object from a DoubleValue message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.DoubleValue
                 * @static
                 * @param {google.protobuf.DoubleValue} message DoubleValue
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DoubleValue.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.value = 0;
                    if (message.value != null && message.hasOwnProperty("value"))
                        object.value = options.json && !isFinite(message.value) ? String(message.value) : message.value;
                    return object;
                };
    
                /**
                 * Converts this DoubleValue to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.DoubleValue
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                DoubleValue.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return DoubleValue;
            })();
    
            protobuf.FloatValue = (function() {
    
                /**
                 * Properties of a FloatValue.
                 * @memberof google.protobuf
                 * @interface IFloatValue
                 * @property {number|null} [value] FloatValue value
                 */
    
                /**
                 * Constructs a new FloatValue.
                 * @memberof google.protobuf
                 * @classdesc Represents a FloatValue.
                 * @implements IFloatValue
                 * @constructor
                 * @param {google.protobuf.IFloatValue=} [properties] Properties to set
                 */
                function FloatValue(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FloatValue value.
                 * @member {number} value
                 * @memberof google.protobuf.FloatValue
                 * @instance
                 */
                FloatValue.prototype.value = 0;
    
                /**
                 * Creates a new FloatValue instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FloatValue
                 * @static
                 * @param {google.protobuf.IFloatValue=} [properties] Properties to set
                 * @returns {google.protobuf.FloatValue} FloatValue instance
                 */
                FloatValue.create = function create(properties) {
                    return new FloatValue(properties);
                };
    
                /**
                 * Encodes the specified FloatValue message. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FloatValue
                 * @static
                 * @param {google.protobuf.IFloatValue} message FloatValue message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FloatValue.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.value != null && message.hasOwnProperty("value"))
                        writer.uint32(/* id 1, wireType 5 =*/13).float(message.value);
                    return writer;
                };
    
                /**
                 * Encodes the specified FloatValue message, length delimited. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FloatValue
                 * @static
                 * @param {google.protobuf.IFloatValue} message FloatValue message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FloatValue.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FloatValue message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FloatValue
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FloatValue} FloatValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FloatValue.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FloatValue();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.value = reader.float();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a FloatValue message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FloatValue
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FloatValue} FloatValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FloatValue.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FloatValue message.
                 * @function verify
                 * @memberof google.protobuf.FloatValue
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FloatValue.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.value != null && message.hasOwnProperty("value"))
                        if (typeof message.value !== "number")
                            return "value: number expected";
                    return null;
                };
    
                /**
                 * Creates a FloatValue message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FloatValue
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FloatValue} FloatValue
                 */
                FloatValue.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FloatValue)
                        return object;
                    var message = new $root.google.protobuf.FloatValue();
                    if (object.value != null)
                        message.value = Number(object.value);
                    return message;
                };
    
                /**
                 * Creates a plain object from a FloatValue message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FloatValue
                 * @static
                 * @param {google.protobuf.FloatValue} message FloatValue
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FloatValue.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.value = 0;
                    if (message.value != null && message.hasOwnProperty("value"))
                        object.value = options.json && !isFinite(message.value) ? String(message.value) : message.value;
                    return object;
                };
    
                /**
                 * Converts this FloatValue to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FloatValue
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FloatValue.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return FloatValue;
            })();
    
            protobuf.Int64Value = (function() {
    
                /**
                 * Properties of an Int64Value.
                 * @memberof google.protobuf
                 * @interface IInt64Value
                 * @property {number|Long|null} [value] Int64Value value
                 */
    
                /**
                 * Constructs a new Int64Value.
                 * @memberof google.protobuf
                 * @classdesc Represents an Int64Value.
                 * @implements IInt64Value
                 * @constructor
                 * @param {google.protobuf.IInt64Value=} [properties] Properties to set
                 */
                function Int64Value(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Int64Value value.
                 * @member {number|Long} value
                 * @memberof google.protobuf.Int64Value
                 * @instance
                 */
                Int64Value.prototype.value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                /**
                 * Creates a new Int64Value instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.Int64Value
                 * @static
                 * @param {google.protobuf.IInt64Value=} [properties] Properties to set
                 * @returns {google.protobuf.Int64Value} Int64Value instance
                 */
                Int64Value.create = function create(properties) {
                    return new Int64Value(properties);
                };
    
                /**
                 * Encodes the specified Int64Value message. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.Int64Value
                 * @static
                 * @param {google.protobuf.IInt64Value} message Int64Value message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Int64Value.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.value != null && message.hasOwnProperty("value"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.value);
                    return writer;
                };
    
                /**
                 * Encodes the specified Int64Value message, length delimited. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.Int64Value
                 * @static
                 * @param {google.protobuf.IInt64Value} message Int64Value message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Int64Value.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an Int64Value message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.Int64Value
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.Int64Value} Int64Value
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Int64Value.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Int64Value();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.value = reader.int64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an Int64Value message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.Int64Value
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.Int64Value} Int64Value
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Int64Value.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an Int64Value message.
                 * @function verify
                 * @memberof google.protobuf.Int64Value
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Int64Value.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.value != null && message.hasOwnProperty("value"))
                        if (!$util.isInteger(message.value) && !(message.value && $util.isInteger(message.value.low) && $util.isInteger(message.value.high)))
                            return "value: integer|Long expected";
                    return null;
                };
    
                /**
                 * Creates an Int64Value message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.Int64Value
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.Int64Value} Int64Value
                 */
                Int64Value.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.Int64Value)
                        return object;
                    var message = new $root.google.protobuf.Int64Value();
                    if (object.value != null)
                        if ($util.Long)
                            (message.value = $util.Long.fromValue(object.value)).unsigned = false;
                        else if (typeof object.value === "string")
                            message.value = parseInt(object.value, 10);
                        else if (typeof object.value === "number")
                            message.value = object.value;
                        else if (typeof object.value === "object")
                            message.value = new $util.LongBits(object.value.low >>> 0, object.value.high >>> 0).toNumber();
                    return message;
                };
    
                /**
                 * Creates a plain object from an Int64Value message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.Int64Value
                 * @static
                 * @param {google.protobuf.Int64Value} message Int64Value
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Int64Value.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.value = options.longs === String ? "0" : 0;
                    if (message.value != null && message.hasOwnProperty("value"))
                        if (typeof message.value === "number")
                            object.value = options.longs === String ? String(message.value) : message.value;
                        else
                            object.value = options.longs === String ? $util.Long.prototype.toString.call(message.value) : options.longs === Number ? new $util.LongBits(message.value.low >>> 0, message.value.high >>> 0).toNumber() : message.value;
                    return object;
                };
    
                /**
                 * Converts this Int64Value to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.Int64Value
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Int64Value.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return Int64Value;
            })();
    
            protobuf.UInt64Value = (function() {
    
                /**
                 * Properties of a UInt64Value.
                 * @memberof google.protobuf
                 * @interface IUInt64Value
                 * @property {number|Long|null} [value] UInt64Value value
                 */
    
                /**
                 * Constructs a new UInt64Value.
                 * @memberof google.protobuf
                 * @classdesc Represents a UInt64Value.
                 * @implements IUInt64Value
                 * @constructor
                 * @param {google.protobuf.IUInt64Value=} [properties] Properties to set
                 */
                function UInt64Value(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * UInt64Value value.
                 * @member {number|Long} value
                 * @memberof google.protobuf.UInt64Value
                 * @instance
                 */
                UInt64Value.prototype.value = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
                /**
                 * Creates a new UInt64Value instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.UInt64Value
                 * @static
                 * @param {google.protobuf.IUInt64Value=} [properties] Properties to set
                 * @returns {google.protobuf.UInt64Value} UInt64Value instance
                 */
                UInt64Value.create = function create(properties) {
                    return new UInt64Value(properties);
                };
    
                /**
                 * Encodes the specified UInt64Value message. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.UInt64Value
                 * @static
                 * @param {google.protobuf.IUInt64Value} message UInt64Value message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UInt64Value.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.value != null && message.hasOwnProperty("value"))
                        writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.value);
                    return writer;
                };
    
                /**
                 * Encodes the specified UInt64Value message, length delimited. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.UInt64Value
                 * @static
                 * @param {google.protobuf.IUInt64Value} message UInt64Value message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UInt64Value.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a UInt64Value message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.UInt64Value
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.UInt64Value} UInt64Value
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UInt64Value.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UInt64Value();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.value = reader.uint64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a UInt64Value message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.UInt64Value
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.UInt64Value} UInt64Value
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UInt64Value.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a UInt64Value message.
                 * @function verify
                 * @memberof google.protobuf.UInt64Value
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                UInt64Value.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.value != null && message.hasOwnProperty("value"))
                        if (!$util.isInteger(message.value) && !(message.value && $util.isInteger(message.value.low) && $util.isInteger(message.value.high)))
                            return "value: integer|Long expected";
                    return null;
                };
    
                /**
                 * Creates a UInt64Value message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.UInt64Value
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.UInt64Value} UInt64Value
                 */
                UInt64Value.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.UInt64Value)
                        return object;
                    var message = new $root.google.protobuf.UInt64Value();
                    if (object.value != null)
                        if ($util.Long)
                            (message.value = $util.Long.fromValue(object.value)).unsigned = true;
                        else if (typeof object.value === "string")
                            message.value = parseInt(object.value, 10);
                        else if (typeof object.value === "number")
                            message.value = object.value;
                        else if (typeof object.value === "object")
                            message.value = new $util.LongBits(object.value.low >>> 0, object.value.high >>> 0).toNumber(true);
                    return message;
                };
    
                /**
                 * Creates a plain object from a UInt64Value message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.UInt64Value
                 * @static
                 * @param {google.protobuf.UInt64Value} message UInt64Value
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UInt64Value.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.value = options.longs === String ? "0" : 0;
                    if (message.value != null && message.hasOwnProperty("value"))
                        if (typeof message.value === "number")
                            object.value = options.longs === String ? String(message.value) : message.value;
                        else
                            object.value = options.longs === String ? $util.Long.prototype.toString.call(message.value) : options.longs === Number ? new $util.LongBits(message.value.low >>> 0, message.value.high >>> 0).toNumber(true) : message.value;
                    return object;
                };
    
                /**
                 * Converts this UInt64Value to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.UInt64Value
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UInt64Value.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return UInt64Value;
            })();
    
            protobuf.Int32Value = (function() {
    
                /**
                 * Properties of an Int32Value.
                 * @memberof google.protobuf
                 * @interface IInt32Value
                 * @property {number|null} [value] Int32Value value
                 */
    
                /**
                 * Constructs a new Int32Value.
                 * @memberof google.protobuf
                 * @classdesc Represents an Int32Value.
                 * @implements IInt32Value
                 * @constructor
                 * @param {google.protobuf.IInt32Value=} [properties] Properties to set
                 */
                function Int32Value(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Int32Value value.
                 * @member {number} value
                 * @memberof google.protobuf.Int32Value
                 * @instance
                 */
                Int32Value.prototype.value = 0;
    
                /**
                 * Creates a new Int32Value instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.Int32Value
                 * @static
                 * @param {google.protobuf.IInt32Value=} [properties] Properties to set
                 * @returns {google.protobuf.Int32Value} Int32Value instance
                 */
                Int32Value.create = function create(properties) {
                    return new Int32Value(properties);
                };
    
                /**
                 * Encodes the specified Int32Value message. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.Int32Value
                 * @static
                 * @param {google.protobuf.IInt32Value} message Int32Value message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Int32Value.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.value != null && message.hasOwnProperty("value"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.value);
                    return writer;
                };
    
                /**
                 * Encodes the specified Int32Value message, length delimited. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.Int32Value
                 * @static
                 * @param {google.protobuf.IInt32Value} message Int32Value message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Int32Value.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an Int32Value message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.Int32Value
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.Int32Value} Int32Value
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Int32Value.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Int32Value();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.value = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an Int32Value message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.Int32Value
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.Int32Value} Int32Value
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Int32Value.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an Int32Value message.
                 * @function verify
                 * @memberof google.protobuf.Int32Value
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Int32Value.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.value != null && message.hasOwnProperty("value"))
                        if (!$util.isInteger(message.value))
                            return "value: integer expected";
                    return null;
                };
    
                /**
                 * Creates an Int32Value message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.Int32Value
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.Int32Value} Int32Value
                 */
                Int32Value.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.Int32Value)
                        return object;
                    var message = new $root.google.protobuf.Int32Value();
                    if (object.value != null)
                        message.value = object.value | 0;
                    return message;
                };
    
                /**
                 * Creates a plain object from an Int32Value message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.Int32Value
                 * @static
                 * @param {google.protobuf.Int32Value} message Int32Value
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Int32Value.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.value = 0;
                    if (message.value != null && message.hasOwnProperty("value"))
                        object.value = message.value;
                    return object;
                };
    
                /**
                 * Converts this Int32Value to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.Int32Value
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Int32Value.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return Int32Value;
            })();
    
            protobuf.UInt32Value = (function() {
    
                /**
                 * Properties of a UInt32Value.
                 * @memberof google.protobuf
                 * @interface IUInt32Value
                 * @property {number|null} [value] UInt32Value value
                 */
    
                /**
                 * Constructs a new UInt32Value.
                 * @memberof google.protobuf
                 * @classdesc Represents a UInt32Value.
                 * @implements IUInt32Value
                 * @constructor
                 * @param {google.protobuf.IUInt32Value=} [properties] Properties to set
                 */
                function UInt32Value(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * UInt32Value value.
                 * @member {number} value
                 * @memberof google.protobuf.UInt32Value
                 * @instance
                 */
                UInt32Value.prototype.value = 0;
    
                /**
                 * Creates a new UInt32Value instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.UInt32Value
                 * @static
                 * @param {google.protobuf.IUInt32Value=} [properties] Properties to set
                 * @returns {google.protobuf.UInt32Value} UInt32Value instance
                 */
                UInt32Value.create = function create(properties) {
                    return new UInt32Value(properties);
                };
    
                /**
                 * Encodes the specified UInt32Value message. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.UInt32Value
                 * @static
                 * @param {google.protobuf.IUInt32Value} message UInt32Value message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UInt32Value.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.value != null && message.hasOwnProperty("value"))
                        writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.value);
                    return writer;
                };
    
                /**
                 * Encodes the specified UInt32Value message, length delimited. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.UInt32Value
                 * @static
                 * @param {google.protobuf.IUInt32Value} message UInt32Value message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UInt32Value.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a UInt32Value message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.UInt32Value
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.UInt32Value} UInt32Value
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UInt32Value.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UInt32Value();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.value = reader.uint32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a UInt32Value message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.UInt32Value
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.UInt32Value} UInt32Value
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UInt32Value.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a UInt32Value message.
                 * @function verify
                 * @memberof google.protobuf.UInt32Value
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                UInt32Value.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.value != null && message.hasOwnProperty("value"))
                        if (!$util.isInteger(message.value))
                            return "value: integer expected";
                    return null;
                };
    
                /**
                 * Creates a UInt32Value message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.UInt32Value
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.UInt32Value} UInt32Value
                 */
                UInt32Value.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.UInt32Value)
                        return object;
                    var message = new $root.google.protobuf.UInt32Value();
                    if (object.value != null)
                        message.value = object.value >>> 0;
                    return message;
                };
    
                /**
                 * Creates a plain object from a UInt32Value message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.UInt32Value
                 * @static
                 * @param {google.protobuf.UInt32Value} message UInt32Value
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UInt32Value.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.value = 0;
                    if (message.value != null && message.hasOwnProperty("value"))
                        object.value = message.value;
                    return object;
                };
    
                /**
                 * Converts this UInt32Value to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.UInt32Value
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UInt32Value.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return UInt32Value;
            })();
    
            protobuf.BoolValue = (function() {
    
                /**
                 * Properties of a BoolValue.
                 * @memberof google.protobuf
                 * @interface IBoolValue
                 * @property {boolean|null} [value] BoolValue value
                 */
    
                /**
                 * Constructs a new BoolValue.
                 * @memberof google.protobuf
                 * @classdesc Represents a BoolValue.
                 * @implements IBoolValue
                 * @constructor
                 * @param {google.protobuf.IBoolValue=} [properties] Properties to set
                 */
                function BoolValue(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * BoolValue value.
                 * @member {boolean} value
                 * @memberof google.protobuf.BoolValue
                 * @instance
                 */
                BoolValue.prototype.value = false;
    
                /**
                 * Creates a new BoolValue instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.BoolValue
                 * @static
                 * @param {google.protobuf.IBoolValue=} [properties] Properties to set
                 * @returns {google.protobuf.BoolValue} BoolValue instance
                 */
                BoolValue.create = function create(properties) {
                    return new BoolValue(properties);
                };
    
                /**
                 * Encodes the specified BoolValue message. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.BoolValue
                 * @static
                 * @param {google.protobuf.IBoolValue} message BoolValue message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                BoolValue.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.value != null && message.hasOwnProperty("value"))
                        writer.uint32(/* id 1, wireType 0 =*/8).bool(message.value);
                    return writer;
                };
    
                /**
                 * Encodes the specified BoolValue message, length delimited. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.BoolValue
                 * @static
                 * @param {google.protobuf.IBoolValue} message BoolValue message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                BoolValue.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a BoolValue message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.BoolValue
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.BoolValue} BoolValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                BoolValue.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.BoolValue();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.value = reader.bool();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a BoolValue message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.BoolValue
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.BoolValue} BoolValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                BoolValue.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a BoolValue message.
                 * @function verify
                 * @memberof google.protobuf.BoolValue
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                BoolValue.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.value != null && message.hasOwnProperty("value"))
                        if (typeof message.value !== "boolean")
                            return "value: boolean expected";
                    return null;
                };
    
                /**
                 * Creates a BoolValue message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.BoolValue
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.BoolValue} BoolValue
                 */
                BoolValue.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.BoolValue)
                        return object;
                    var message = new $root.google.protobuf.BoolValue();
                    if (object.value != null)
                        message.value = Boolean(object.value);
                    return message;
                };
    
                /**
                 * Creates a plain object from a BoolValue message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.BoolValue
                 * @static
                 * @param {google.protobuf.BoolValue} message BoolValue
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                BoolValue.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.value = false;
                    if (message.value != null && message.hasOwnProperty("value"))
                        object.value = message.value;
                    return object;
                };
    
                /**
                 * Converts this BoolValue to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.BoolValue
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                BoolValue.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return BoolValue;
            })();
    
            protobuf.StringValue = (function() {
    
                /**
                 * Properties of a StringValue.
                 * @memberof google.protobuf
                 * @interface IStringValue
                 * @property {string|null} [value] StringValue value
                 */
    
                /**
                 * Constructs a new StringValue.
                 * @memberof google.protobuf
                 * @classdesc Represents a StringValue.
                 * @implements IStringValue
                 * @constructor
                 * @param {google.protobuf.IStringValue=} [properties] Properties to set
                 */
                function StringValue(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * StringValue value.
                 * @member {string} value
                 * @memberof google.protobuf.StringValue
                 * @instance
                 */
                StringValue.prototype.value = "";
    
                /**
                 * Creates a new StringValue instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.StringValue
                 * @static
                 * @param {google.protobuf.IStringValue=} [properties] Properties to set
                 * @returns {google.protobuf.StringValue} StringValue instance
                 */
                StringValue.create = function create(properties) {
                    return new StringValue(properties);
                };
    
                /**
                 * Encodes the specified StringValue message. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.StringValue
                 * @static
                 * @param {google.protobuf.IStringValue} message StringValue message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                StringValue.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.value != null && message.hasOwnProperty("value"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.value);
                    return writer;
                };
    
                /**
                 * Encodes the specified StringValue message, length delimited. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.StringValue
                 * @static
                 * @param {google.protobuf.IStringValue} message StringValue message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                StringValue.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a StringValue message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.StringValue
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.StringValue} StringValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                StringValue.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.StringValue();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.value = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a StringValue message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.StringValue
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.StringValue} StringValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                StringValue.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a StringValue message.
                 * @function verify
                 * @memberof google.protobuf.StringValue
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                StringValue.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.value != null && message.hasOwnProperty("value"))
                        if (!$util.isString(message.value))
                            return "value: string expected";
                    return null;
                };
    
                /**
                 * Creates a StringValue message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.StringValue
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.StringValue} StringValue
                 */
                StringValue.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.StringValue)
                        return object;
                    var message = new $root.google.protobuf.StringValue();
                    if (object.value != null)
                        message.value = String(object.value);
                    return message;
                };
    
                /**
                 * Creates a plain object from a StringValue message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.StringValue
                 * @static
                 * @param {google.protobuf.StringValue} message StringValue
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                StringValue.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.value = "";
                    if (message.value != null && message.hasOwnProperty("value"))
                        object.value = message.value;
                    return object;
                };
    
                /**
                 * Converts this StringValue to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.StringValue
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                StringValue.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return StringValue;
            })();
    
            protobuf.BytesValue = (function() {
    
                /**
                 * Properties of a BytesValue.
                 * @memberof google.protobuf
                 * @interface IBytesValue
                 * @property {Uint8Array|null} [value] BytesValue value
                 */
    
                /**
                 * Constructs a new BytesValue.
                 * @memberof google.protobuf
                 * @classdesc Represents a BytesValue.
                 * @implements IBytesValue
                 * @constructor
                 * @param {google.protobuf.IBytesValue=} [properties] Properties to set
                 */
                function BytesValue(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * BytesValue value.
                 * @member {Uint8Array} value
                 * @memberof google.protobuf.BytesValue
                 * @instance
                 */
                BytesValue.prototype.value = $util.newBuffer([]);
    
                /**
                 * Creates a new BytesValue instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.BytesValue
                 * @static
                 * @param {google.protobuf.IBytesValue=} [properties] Properties to set
                 * @returns {google.protobuf.BytesValue} BytesValue instance
                 */
                BytesValue.create = function create(properties) {
                    return new BytesValue(properties);
                };
    
                /**
                 * Encodes the specified BytesValue message. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.BytesValue
                 * @static
                 * @param {google.protobuf.IBytesValue} message BytesValue message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                BytesValue.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.value != null && message.hasOwnProperty("value"))
                        writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.value);
                    return writer;
                };
    
                /**
                 * Encodes the specified BytesValue message, length delimited. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.BytesValue
                 * @static
                 * @param {google.protobuf.IBytesValue} message BytesValue message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                BytesValue.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a BytesValue message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.BytesValue
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.BytesValue} BytesValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                BytesValue.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.BytesValue();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.value = reader.bytes();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a BytesValue message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.BytesValue
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.BytesValue} BytesValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                BytesValue.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a BytesValue message.
                 * @function verify
                 * @memberof google.protobuf.BytesValue
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                BytesValue.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.value != null && message.hasOwnProperty("value"))
                        if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                            return "value: buffer expected";
                    return null;
                };
    
                /**
                 * Creates a BytesValue message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.BytesValue
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.BytesValue} BytesValue
                 */
                BytesValue.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.BytesValue)
                        return object;
                    var message = new $root.google.protobuf.BytesValue();
                    if (object.value != null)
                        if (typeof object.value === "string")
                            $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                        else if (object.value.length)
                            message.value = object.value;
                    return message;
                };
    
                /**
                 * Creates a plain object from a BytesValue message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.BytesValue
                 * @static
                 * @param {google.protobuf.BytesValue} message BytesValue
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                BytesValue.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        if (options.bytes === String)
                            object.value = "";
                        else {
                            object.value = [];
                            if (options.bytes !== Array)
                                object.value = $util.newBuffer(object.value);
                        }
                    if (message.value != null && message.hasOwnProperty("value"))
                        object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
                    return object;
                };
    
                /**
                 * Converts this BytesValue to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.BytesValue
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                BytesValue.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return BytesValue;
            })();
    
            protobuf.FileDescriptorSet = (function() {
    
                /**
                 * Properties of a FileDescriptorSet.
                 * @memberof google.protobuf
                 * @interface IFileDescriptorSet
                 * @property {Array.<google.protobuf.IFileDescriptorProto>|null} [file] FileDescriptorSet file
                 */
    
                /**
                 * Constructs a new FileDescriptorSet.
                 * @memberof google.protobuf
                 * @classdesc Represents a FileDescriptorSet.
                 * @implements IFileDescriptorSet
                 * @constructor
                 * @param {google.protobuf.IFileDescriptorSet=} [properties] Properties to set
                 */
                function FileDescriptorSet(properties) {
                    this.file = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FileDescriptorSet file.
                 * @member {Array.<google.protobuf.IFileDescriptorProto>} file
                 * @memberof google.protobuf.FileDescriptorSet
                 * @instance
                 */
                FileDescriptorSet.prototype.file = $util.emptyArray;
    
                /**
                 * Creates a new FileDescriptorSet instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {google.protobuf.IFileDescriptorSet=} [properties] Properties to set
                 * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet instance
                 */
                FileDescriptorSet.create = function create(properties) {
                    return new FileDescriptorSet(properties);
                };
    
                /**
                 * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {google.protobuf.IFileDescriptorSet} message FileDescriptorSet message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileDescriptorSet.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.file != null && message.file.length)
                        for (var i = 0; i < message.file.length; ++i)
                            $root.google.protobuf.FileDescriptorProto.encode(message.file[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {google.protobuf.IFileDescriptorSet} message FileDescriptorSet message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileDescriptorSet.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FileDescriptorSet message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileDescriptorSet.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileDescriptorSet();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.file && message.file.length))
                                message.file = [];
                            message.file.push($root.google.protobuf.FileDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileDescriptorSet.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FileDescriptorSet message.
                 * @function verify
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FileDescriptorSet.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.file != null && message.hasOwnProperty("file")) {
                        if (!Array.isArray(message.file))
                            return "file: array expected";
                        for (var i = 0; i < message.file.length; ++i) {
                            var error = $root.google.protobuf.FileDescriptorProto.verify(message.file[i]);
                            if (error)
                                return "file." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FileDescriptorSet} FileDescriptorSet
                 */
                FileDescriptorSet.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FileDescriptorSet)
                        return object;
                    var message = new $root.google.protobuf.FileDescriptorSet();
                    if (object.file) {
                        if (!Array.isArray(object.file))
                            throw TypeError(".google.protobuf.FileDescriptorSet.file: array expected");
                        message.file = [];
                        for (var i = 0; i < object.file.length; ++i) {
                            if (typeof object.file[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorSet.file: object expected");
                            message.file[i] = $root.google.protobuf.FileDescriptorProto.fromObject(object.file[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FileDescriptorSet
                 * @static
                 * @param {google.protobuf.FileDescriptorSet} message FileDescriptorSet
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FileDescriptorSet.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.file = [];
                    if (message.file && message.file.length) {
                        object.file = [];
                        for (var j = 0; j < message.file.length; ++j)
                            object.file[j] = $root.google.protobuf.FileDescriptorProto.toObject(message.file[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this FileDescriptorSet to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FileDescriptorSet
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FileDescriptorSet.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return FileDescriptorSet;
            })();
    
            protobuf.FileDescriptorProto = (function() {
    
                /**
                 * Properties of a FileDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IFileDescriptorProto
                 * @property {string|null} [name] FileDescriptorProto name
                 * @property {string|null} ["package"] FileDescriptorProto package
                 * @property {Array.<string>|null} [dependency] FileDescriptorProto dependency
                 * @property {Array.<number>|null} [publicDependency] FileDescriptorProto publicDependency
                 * @property {Array.<number>|null} [weakDependency] FileDescriptorProto weakDependency
                 * @property {Array.<google.protobuf.IDescriptorProto>|null} [messageType] FileDescriptorProto messageType
                 * @property {Array.<google.protobuf.IEnumDescriptorProto>|null} [enumType] FileDescriptorProto enumType
                 * @property {Array.<google.protobuf.IServiceDescriptorProto>|null} [service] FileDescriptorProto service
                 * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [extension] FileDescriptorProto extension
                 * @property {google.protobuf.IFileOptions|null} [options] FileDescriptorProto options
                 * @property {google.protobuf.ISourceCodeInfo|null} [sourceCodeInfo] FileDescriptorProto sourceCodeInfo
                 * @property {string|null} [syntax] FileDescriptorProto syntax
                 */
    
                /**
                 * Constructs a new FileDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a FileDescriptorProto.
                 * @implements IFileDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IFileDescriptorProto=} [properties] Properties to set
                 */
                function FileDescriptorProto(properties) {
                    this.dependency = [];
                    this.publicDependency = [];
                    this.weakDependency = [];
                    this.messageType = [];
                    this.enumType = [];
                    this.service = [];
                    this.extension = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FileDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.name = "";
    
                /**
                 * FileDescriptorProto package.
                 * @member {string} package
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype["package"] = "";
    
                /**
                 * FileDescriptorProto dependency.
                 * @member {Array.<string>} dependency
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.dependency = $util.emptyArray;
    
                /**
                 * FileDescriptorProto publicDependency.
                 * @member {Array.<number>} publicDependency
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.publicDependency = $util.emptyArray;
    
                /**
                 * FileDescriptorProto weakDependency.
                 * @member {Array.<number>} weakDependency
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.weakDependency = $util.emptyArray;
    
                /**
                 * FileDescriptorProto messageType.
                 * @member {Array.<google.protobuf.IDescriptorProto>} messageType
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.messageType = $util.emptyArray;
    
                /**
                 * FileDescriptorProto enumType.
                 * @member {Array.<google.protobuf.IEnumDescriptorProto>} enumType
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.enumType = $util.emptyArray;
    
                /**
                 * FileDescriptorProto service.
                 * @member {Array.<google.protobuf.IServiceDescriptorProto>} service
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.service = $util.emptyArray;
    
                /**
                 * FileDescriptorProto extension.
                 * @member {Array.<google.protobuf.IFieldDescriptorProto>} extension
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.extension = $util.emptyArray;
    
                /**
                 * FileDescriptorProto options.
                 * @member {google.protobuf.IFileOptions|null|undefined} options
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.options = null;
    
                /**
                 * FileDescriptorProto sourceCodeInfo.
                 * @member {google.protobuf.ISourceCodeInfo|null|undefined} sourceCodeInfo
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.sourceCodeInfo = null;
    
                /**
                 * FileDescriptorProto syntax.
                 * @member {string} syntax
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 */
                FileDescriptorProto.prototype.syntax = "";
    
                /**
                 * Creates a new FileDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {google.protobuf.IFileDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto instance
                 */
                FileDescriptorProto.create = function create(properties) {
                    return new FileDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {google.protobuf.IFileDescriptorProto} message FileDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message["package"] != null && message.hasOwnProperty("package"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message["package"]);
                    if (message.dependency != null && message.dependency.length)
                        for (var i = 0; i < message.dependency.length; ++i)
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.dependency[i]);
                    if (message.messageType != null && message.messageType.length)
                        for (var i = 0; i < message.messageType.length; ++i)
                            $root.google.protobuf.DescriptorProto.encode(message.messageType[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.enumType != null && message.enumType.length)
                        for (var i = 0; i < message.enumType.length; ++i)
                            $root.google.protobuf.EnumDescriptorProto.encode(message.enumType[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.service != null && message.service.length)
                        for (var i = 0; i < message.service.length; ++i)
                            $root.google.protobuf.ServiceDescriptorProto.encode(message.service[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    if (message.extension != null && message.extension.length)
                        for (var i = 0; i < message.extension.length; ++i)
                            $root.google.protobuf.FieldDescriptorProto.encode(message.extension[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                    if (message.options != null && message.hasOwnProperty("options"))
                        $root.google.protobuf.FileOptions.encode(message.options, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    if (message.sourceCodeInfo != null && message.hasOwnProperty("sourceCodeInfo"))
                        $root.google.protobuf.SourceCodeInfo.encode(message.sourceCodeInfo, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                    if (message.publicDependency != null && message.publicDependency.length)
                        for (var i = 0; i < message.publicDependency.length; ++i)
                            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.publicDependency[i]);
                    if (message.weakDependency != null && message.weakDependency.length)
                        for (var i = 0; i < message.weakDependency.length; ++i)
                            writer.uint32(/* id 11, wireType 0 =*/88).int32(message.weakDependency[i]);
                    if (message.syntax != null && message.hasOwnProperty("syntax"))
                        writer.uint32(/* id 12, wireType 2 =*/98).string(message.syntax);
                    return writer;
                };
    
                /**
                 * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {google.protobuf.IFileDescriptorProto} message FileDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FileDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            message["package"] = reader.string();
                            break;
                        case 3:
                            if (!(message.dependency && message.dependency.length))
                                message.dependency = [];
                            message.dependency.push(reader.string());
                            break;
                        case 10:
                            if (!(message.publicDependency && message.publicDependency.length))
                                message.publicDependency = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.publicDependency.push(reader.int32());
                            } else
                                message.publicDependency.push(reader.int32());
                            break;
                        case 11:
                            if (!(message.weakDependency && message.weakDependency.length))
                                message.weakDependency = [];
                            if ((tag & 7) === 2) {
                                var end2 = reader.uint32() + reader.pos;
                                while (reader.pos < end2)
                                    message.weakDependency.push(reader.int32());
                            } else
                                message.weakDependency.push(reader.int32());
                            break;
                        case 4:
                            if (!(message.messageType && message.messageType.length))
                                message.messageType = [];
                            message.messageType.push($root.google.protobuf.DescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 5:
                            if (!(message.enumType && message.enumType.length))
                                message.enumType = [];
                            message.enumType.push($root.google.protobuf.EnumDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 6:
                            if (!(message.service && message.service.length))
                                message.service = [];
                            message.service.push($root.google.protobuf.ServiceDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 7:
                            if (!(message.extension && message.extension.length))
                                message.extension = [];
                            message.extension.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 8:
                            message.options = $root.google.protobuf.FileOptions.decode(reader, reader.uint32());
                            break;
                        case 9:
                            message.sourceCodeInfo = $root.google.protobuf.SourceCodeInfo.decode(reader, reader.uint32());
                            break;
                        case 12:
                            message.syntax = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FileDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FileDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message["package"] != null && message.hasOwnProperty("package"))
                        if (!$util.isString(message["package"]))
                            return "package: string expected";
                    if (message.dependency != null && message.hasOwnProperty("dependency")) {
                        if (!Array.isArray(message.dependency))
                            return "dependency: array expected";
                        for (var i = 0; i < message.dependency.length; ++i)
                            if (!$util.isString(message.dependency[i]))
                                return "dependency: string[] expected";
                    }
                    if (message.publicDependency != null && message.hasOwnProperty("publicDependency")) {
                        if (!Array.isArray(message.publicDependency))
                            return "publicDependency: array expected";
                        for (var i = 0; i < message.publicDependency.length; ++i)
                            if (!$util.isInteger(message.publicDependency[i]))
                                return "publicDependency: integer[] expected";
                    }
                    if (message.weakDependency != null && message.hasOwnProperty("weakDependency")) {
                        if (!Array.isArray(message.weakDependency))
                            return "weakDependency: array expected";
                        for (var i = 0; i < message.weakDependency.length; ++i)
                            if (!$util.isInteger(message.weakDependency[i]))
                                return "weakDependency: integer[] expected";
                    }
                    if (message.messageType != null && message.hasOwnProperty("messageType")) {
                        if (!Array.isArray(message.messageType))
                            return "messageType: array expected";
                        for (var i = 0; i < message.messageType.length; ++i) {
                            var error = $root.google.protobuf.DescriptorProto.verify(message.messageType[i]);
                            if (error)
                                return "messageType." + error;
                        }
                    }
                    if (message.enumType != null && message.hasOwnProperty("enumType")) {
                        if (!Array.isArray(message.enumType))
                            return "enumType: array expected";
                        for (var i = 0; i < message.enumType.length; ++i) {
                            var error = $root.google.protobuf.EnumDescriptorProto.verify(message.enumType[i]);
                            if (error)
                                return "enumType." + error;
                        }
                    }
                    if (message.service != null && message.hasOwnProperty("service")) {
                        if (!Array.isArray(message.service))
                            return "service: array expected";
                        for (var i = 0; i < message.service.length; ++i) {
                            var error = $root.google.protobuf.ServiceDescriptorProto.verify(message.service[i]);
                            if (error)
                                return "service." + error;
                        }
                    }
                    if (message.extension != null && message.hasOwnProperty("extension")) {
                        if (!Array.isArray(message.extension))
                            return "extension: array expected";
                        for (var i = 0; i < message.extension.length; ++i) {
                            var error = $root.google.protobuf.FieldDescriptorProto.verify(message.extension[i]);
                            if (error)
                                return "extension." + error;
                        }
                    }
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.FileOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    if (message.sourceCodeInfo != null && message.hasOwnProperty("sourceCodeInfo")) {
                        var error = $root.google.protobuf.SourceCodeInfo.verify(message.sourceCodeInfo);
                        if (error)
                            return "sourceCodeInfo." + error;
                    }
                    if (message.syntax != null && message.hasOwnProperty("syntax"))
                        if (!$util.isString(message.syntax))
                            return "syntax: string expected";
                    return null;
                };
    
                /**
                 * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FileDescriptorProto} FileDescriptorProto
                 */
                FileDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FileDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.FileDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object["package"] != null)
                        message["package"] = String(object["package"]);
                    if (object.dependency) {
                        if (!Array.isArray(object.dependency))
                            throw TypeError(".google.protobuf.FileDescriptorProto.dependency: array expected");
                        message.dependency = [];
                        for (var i = 0; i < object.dependency.length; ++i)
                            message.dependency[i] = String(object.dependency[i]);
                    }
                    if (object.publicDependency) {
                        if (!Array.isArray(object.publicDependency))
                            throw TypeError(".google.protobuf.FileDescriptorProto.publicDependency: array expected");
                        message.publicDependency = [];
                        for (var i = 0; i < object.publicDependency.length; ++i)
                            message.publicDependency[i] = object.publicDependency[i] | 0;
                    }
                    if (object.weakDependency) {
                        if (!Array.isArray(object.weakDependency))
                            throw TypeError(".google.protobuf.FileDescriptorProto.weakDependency: array expected");
                        message.weakDependency = [];
                        for (var i = 0; i < object.weakDependency.length; ++i)
                            message.weakDependency[i] = object.weakDependency[i] | 0;
                    }
                    if (object.messageType) {
                        if (!Array.isArray(object.messageType))
                            throw TypeError(".google.protobuf.FileDescriptorProto.messageType: array expected");
                        message.messageType = [];
                        for (var i = 0; i < object.messageType.length; ++i) {
                            if (typeof object.messageType[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorProto.messageType: object expected");
                            message.messageType[i] = $root.google.protobuf.DescriptorProto.fromObject(object.messageType[i]);
                        }
                    }
                    if (object.enumType) {
                        if (!Array.isArray(object.enumType))
                            throw TypeError(".google.protobuf.FileDescriptorProto.enumType: array expected");
                        message.enumType = [];
                        for (var i = 0; i < object.enumType.length; ++i) {
                            if (typeof object.enumType[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorProto.enumType: object expected");
                            message.enumType[i] = $root.google.protobuf.EnumDescriptorProto.fromObject(object.enumType[i]);
                        }
                    }
                    if (object.service) {
                        if (!Array.isArray(object.service))
                            throw TypeError(".google.protobuf.FileDescriptorProto.service: array expected");
                        message.service = [];
                        for (var i = 0; i < object.service.length; ++i) {
                            if (typeof object.service[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorProto.service: object expected");
                            message.service[i] = $root.google.protobuf.ServiceDescriptorProto.fromObject(object.service[i]);
                        }
                    }
                    if (object.extension) {
                        if (!Array.isArray(object.extension))
                            throw TypeError(".google.protobuf.FileDescriptorProto.extension: array expected");
                        message.extension = [];
                        for (var i = 0; i < object.extension.length; ++i) {
                            if (typeof object.extension[i] !== "object")
                                throw TypeError(".google.protobuf.FileDescriptorProto.extension: object expected");
                            message.extension[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.extension[i]);
                        }
                    }
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.FileOptions.fromObject(object.options);
                    }
                    if (object.sourceCodeInfo != null) {
                        if (typeof object.sourceCodeInfo !== "object")
                            throw TypeError(".google.protobuf.FileDescriptorProto.sourceCodeInfo: object expected");
                        message.sourceCodeInfo = $root.google.protobuf.SourceCodeInfo.fromObject(object.sourceCodeInfo);
                    }
                    if (object.syntax != null)
                        message.syntax = String(object.syntax);
                    return message;
                };
    
                /**
                 * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FileDescriptorProto
                 * @static
                 * @param {google.protobuf.FileDescriptorProto} message FileDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FileDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.dependency = [];
                        object.messageType = [];
                        object.enumType = [];
                        object.service = [];
                        object.extension = [];
                        object.publicDependency = [];
                        object.weakDependency = [];
                    }
                    if (options.defaults) {
                        object.name = "";
                        object["package"] = "";
                        object.options = null;
                        object.sourceCodeInfo = null;
                        object.syntax = "";
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message["package"] != null && message.hasOwnProperty("package"))
                        object["package"] = message["package"];
                    if (message.dependency && message.dependency.length) {
                        object.dependency = [];
                        for (var j = 0; j < message.dependency.length; ++j)
                            object.dependency[j] = message.dependency[j];
                    }
                    if (message.messageType && message.messageType.length) {
                        object.messageType = [];
                        for (var j = 0; j < message.messageType.length; ++j)
                            object.messageType[j] = $root.google.protobuf.DescriptorProto.toObject(message.messageType[j], options);
                    }
                    if (message.enumType && message.enumType.length) {
                        object.enumType = [];
                        for (var j = 0; j < message.enumType.length; ++j)
                            object.enumType[j] = $root.google.protobuf.EnumDescriptorProto.toObject(message.enumType[j], options);
                    }
                    if (message.service && message.service.length) {
                        object.service = [];
                        for (var j = 0; j < message.service.length; ++j)
                            object.service[j] = $root.google.protobuf.ServiceDescriptorProto.toObject(message.service[j], options);
                    }
                    if (message.extension && message.extension.length) {
                        object.extension = [];
                        for (var j = 0; j < message.extension.length; ++j)
                            object.extension[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.extension[j], options);
                    }
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.FileOptions.toObject(message.options, options);
                    if (message.sourceCodeInfo != null && message.hasOwnProperty("sourceCodeInfo"))
                        object.sourceCodeInfo = $root.google.protobuf.SourceCodeInfo.toObject(message.sourceCodeInfo, options);
                    if (message.publicDependency && message.publicDependency.length) {
                        object.publicDependency = [];
                        for (var j = 0; j < message.publicDependency.length; ++j)
                            object.publicDependency[j] = message.publicDependency[j];
                    }
                    if (message.weakDependency && message.weakDependency.length) {
                        object.weakDependency = [];
                        for (var j = 0; j < message.weakDependency.length; ++j)
                            object.weakDependency[j] = message.weakDependency[j];
                    }
                    if (message.syntax != null && message.hasOwnProperty("syntax"))
                        object.syntax = message.syntax;
                    return object;
                };
    
                /**
                 * Converts this FileDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FileDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FileDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return FileDescriptorProto;
            })();
    
            protobuf.DescriptorProto = (function() {
    
                /**
                 * Properties of a DescriptorProto.
                 * @memberof google.protobuf
                 * @interface IDescriptorProto
                 * @property {string|null} [name] DescriptorProto name
                 * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [field] DescriptorProto field
                 * @property {Array.<google.protobuf.IFieldDescriptorProto>|null} [extension] DescriptorProto extension
                 * @property {Array.<google.protobuf.IDescriptorProto>|null} [nestedType] DescriptorProto nestedType
                 * @property {Array.<google.protobuf.IEnumDescriptorProto>|null} [enumType] DescriptorProto enumType
                 * @property {Array.<google.protobuf.DescriptorProto.IExtensionRange>|null} [extensionRange] DescriptorProto extensionRange
                 * @property {Array.<google.protobuf.IOneofDescriptorProto>|null} [oneofDecl] DescriptorProto oneofDecl
                 * @property {google.protobuf.IMessageOptions|null} [options] DescriptorProto options
                 * @property {Array.<google.protobuf.DescriptorProto.IReservedRange>|null} [reservedRange] DescriptorProto reservedRange
                 * @property {Array.<string>|null} [reservedName] DescriptorProto reservedName
                 */
    
                /**
                 * Constructs a new DescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a DescriptorProto.
                 * @implements IDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IDescriptorProto=} [properties] Properties to set
                 */
                function DescriptorProto(properties) {
                    this.field = [];
                    this.extension = [];
                    this.nestedType = [];
                    this.enumType = [];
                    this.extensionRange = [];
                    this.oneofDecl = [];
                    this.reservedRange = [];
                    this.reservedName = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * DescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.name = "";
    
                /**
                 * DescriptorProto field.
                 * @member {Array.<google.protobuf.IFieldDescriptorProto>} field
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.field = $util.emptyArray;
    
                /**
                 * DescriptorProto extension.
                 * @member {Array.<google.protobuf.IFieldDescriptorProto>} extension
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.extension = $util.emptyArray;
    
                /**
                 * DescriptorProto nestedType.
                 * @member {Array.<google.protobuf.IDescriptorProto>} nestedType
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.nestedType = $util.emptyArray;
    
                /**
                 * DescriptorProto enumType.
                 * @member {Array.<google.protobuf.IEnumDescriptorProto>} enumType
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.enumType = $util.emptyArray;
    
                /**
                 * DescriptorProto extensionRange.
                 * @member {Array.<google.protobuf.DescriptorProto.IExtensionRange>} extensionRange
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.extensionRange = $util.emptyArray;
    
                /**
                 * DescriptorProto oneofDecl.
                 * @member {Array.<google.protobuf.IOneofDescriptorProto>} oneofDecl
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.oneofDecl = $util.emptyArray;
    
                /**
                 * DescriptorProto options.
                 * @member {google.protobuf.IMessageOptions|null|undefined} options
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.options = null;
    
                /**
                 * DescriptorProto reservedRange.
                 * @member {Array.<google.protobuf.DescriptorProto.IReservedRange>} reservedRange
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.reservedRange = $util.emptyArray;
    
                /**
                 * DescriptorProto reservedName.
                 * @member {Array.<string>} reservedName
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 */
                DescriptorProto.prototype.reservedName = $util.emptyArray;
    
                /**
                 * Creates a new DescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {google.protobuf.IDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.DescriptorProto} DescriptorProto instance
                 */
                DescriptorProto.create = function create(properties) {
                    return new DescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {google.protobuf.IDescriptorProto} message DescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.field != null && message.field.length)
                        for (var i = 0; i < message.field.length; ++i)
                            $root.google.protobuf.FieldDescriptorProto.encode(message.field[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.nestedType != null && message.nestedType.length)
                        for (var i = 0; i < message.nestedType.length; ++i)
                            $root.google.protobuf.DescriptorProto.encode(message.nestedType[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.enumType != null && message.enumType.length)
                        for (var i = 0; i < message.enumType.length; ++i)
                            $root.google.protobuf.EnumDescriptorProto.encode(message.enumType[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.extensionRange != null && message.extensionRange.length)
                        for (var i = 0; i < message.extensionRange.length; ++i)
                            $root.google.protobuf.DescriptorProto.ExtensionRange.encode(message.extensionRange[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    if (message.extension != null && message.extension.length)
                        for (var i = 0; i < message.extension.length; ++i)
                            $root.google.protobuf.FieldDescriptorProto.encode(message.extension[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                    if (message.options != null && message.hasOwnProperty("options"))
                        $root.google.protobuf.MessageOptions.encode(message.options, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                    if (message.oneofDecl != null && message.oneofDecl.length)
                        for (var i = 0; i < message.oneofDecl.length; ++i)
                            $root.google.protobuf.OneofDescriptorProto.encode(message.oneofDecl[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    if (message.reservedRange != null && message.reservedRange.length)
                        for (var i = 0; i < message.reservedRange.length; ++i)
                            $root.google.protobuf.DescriptorProto.ReservedRange.encode(message.reservedRange[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                    if (message.reservedName != null && message.reservedName.length)
                        for (var i = 0; i < message.reservedName.length; ++i)
                            writer.uint32(/* id 10, wireType 2 =*/82).string(message.reservedName[i]);
                    return writer;
                };
    
                /**
                 * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {google.protobuf.IDescriptorProto} message DescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a DescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.DescriptorProto} DescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            if (!(message.field && message.field.length))
                                message.field = [];
                            message.field.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 6:
                            if (!(message.extension && message.extension.length))
                                message.extension = [];
                            message.extension.push($root.google.protobuf.FieldDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 3:
                            if (!(message.nestedType && message.nestedType.length))
                                message.nestedType = [];
                            message.nestedType.push($root.google.protobuf.DescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 4:
                            if (!(message.enumType && message.enumType.length))
                                message.enumType = [];
                            message.enumType.push($root.google.protobuf.EnumDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 5:
                            if (!(message.extensionRange && message.extensionRange.length))
                                message.extensionRange = [];
                            message.extensionRange.push($root.google.protobuf.DescriptorProto.ExtensionRange.decode(reader, reader.uint32()));
                            break;
                        case 8:
                            if (!(message.oneofDecl && message.oneofDecl.length))
                                message.oneofDecl = [];
                            message.oneofDecl.push($root.google.protobuf.OneofDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 7:
                            message.options = $root.google.protobuf.MessageOptions.decode(reader, reader.uint32());
                            break;
                        case 9:
                            if (!(message.reservedRange && message.reservedRange.length))
                                message.reservedRange = [];
                            message.reservedRange.push($root.google.protobuf.DescriptorProto.ReservedRange.decode(reader, reader.uint32()));
                            break;
                        case 10:
                            if (!(message.reservedName && message.reservedName.length))
                                message.reservedName = [];
                            message.reservedName.push(reader.string());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.DescriptorProto} DescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a DescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                DescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.field != null && message.hasOwnProperty("field")) {
                        if (!Array.isArray(message.field))
                            return "field: array expected";
                        for (var i = 0; i < message.field.length; ++i) {
                            var error = $root.google.protobuf.FieldDescriptorProto.verify(message.field[i]);
                            if (error)
                                return "field." + error;
                        }
                    }
                    if (message.extension != null && message.hasOwnProperty("extension")) {
                        if (!Array.isArray(message.extension))
                            return "extension: array expected";
                        for (var i = 0; i < message.extension.length; ++i) {
                            var error = $root.google.protobuf.FieldDescriptorProto.verify(message.extension[i]);
                            if (error)
                                return "extension." + error;
                        }
                    }
                    if (message.nestedType != null && message.hasOwnProperty("nestedType")) {
                        if (!Array.isArray(message.nestedType))
                            return "nestedType: array expected";
                        for (var i = 0; i < message.nestedType.length; ++i) {
                            var error = $root.google.protobuf.DescriptorProto.verify(message.nestedType[i]);
                            if (error)
                                return "nestedType." + error;
                        }
                    }
                    if (message.enumType != null && message.hasOwnProperty("enumType")) {
                        if (!Array.isArray(message.enumType))
                            return "enumType: array expected";
                        for (var i = 0; i < message.enumType.length; ++i) {
                            var error = $root.google.protobuf.EnumDescriptorProto.verify(message.enumType[i]);
                            if (error)
                                return "enumType." + error;
                        }
                    }
                    if (message.extensionRange != null && message.hasOwnProperty("extensionRange")) {
                        if (!Array.isArray(message.extensionRange))
                            return "extensionRange: array expected";
                        for (var i = 0; i < message.extensionRange.length; ++i) {
                            var error = $root.google.protobuf.DescriptorProto.ExtensionRange.verify(message.extensionRange[i]);
                            if (error)
                                return "extensionRange." + error;
                        }
                    }
                    if (message.oneofDecl != null && message.hasOwnProperty("oneofDecl")) {
                        if (!Array.isArray(message.oneofDecl))
                            return "oneofDecl: array expected";
                        for (var i = 0; i < message.oneofDecl.length; ++i) {
                            var error = $root.google.protobuf.OneofDescriptorProto.verify(message.oneofDecl[i]);
                            if (error)
                                return "oneofDecl." + error;
                        }
                    }
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.MessageOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    if (message.reservedRange != null && message.hasOwnProperty("reservedRange")) {
                        if (!Array.isArray(message.reservedRange))
                            return "reservedRange: array expected";
                        for (var i = 0; i < message.reservedRange.length; ++i) {
                            var error = $root.google.protobuf.DescriptorProto.ReservedRange.verify(message.reservedRange[i]);
                            if (error)
                                return "reservedRange." + error;
                        }
                    }
                    if (message.reservedName != null && message.hasOwnProperty("reservedName")) {
                        if (!Array.isArray(message.reservedName))
                            return "reservedName: array expected";
                        for (var i = 0; i < message.reservedName.length; ++i)
                            if (!$util.isString(message.reservedName[i]))
                                return "reservedName: string[] expected";
                    }
                    return null;
                };
    
                /**
                 * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.DescriptorProto} DescriptorProto
                 */
                DescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.DescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.DescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.field) {
                        if (!Array.isArray(object.field))
                            throw TypeError(".google.protobuf.DescriptorProto.field: array expected");
                        message.field = [];
                        for (var i = 0; i < object.field.length; ++i) {
                            if (typeof object.field[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.field: object expected");
                            message.field[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.field[i]);
                        }
                    }
                    if (object.extension) {
                        if (!Array.isArray(object.extension))
                            throw TypeError(".google.protobuf.DescriptorProto.extension: array expected");
                        message.extension = [];
                        for (var i = 0; i < object.extension.length; ++i) {
                            if (typeof object.extension[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.extension: object expected");
                            message.extension[i] = $root.google.protobuf.FieldDescriptorProto.fromObject(object.extension[i]);
                        }
                    }
                    if (object.nestedType) {
                        if (!Array.isArray(object.nestedType))
                            throw TypeError(".google.protobuf.DescriptorProto.nestedType: array expected");
                        message.nestedType = [];
                        for (var i = 0; i < object.nestedType.length; ++i) {
                            if (typeof object.nestedType[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.nestedType: object expected");
                            message.nestedType[i] = $root.google.protobuf.DescriptorProto.fromObject(object.nestedType[i]);
                        }
                    }
                    if (object.enumType) {
                        if (!Array.isArray(object.enumType))
                            throw TypeError(".google.protobuf.DescriptorProto.enumType: array expected");
                        message.enumType = [];
                        for (var i = 0; i < object.enumType.length; ++i) {
                            if (typeof object.enumType[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.enumType: object expected");
                            message.enumType[i] = $root.google.protobuf.EnumDescriptorProto.fromObject(object.enumType[i]);
                        }
                    }
                    if (object.extensionRange) {
                        if (!Array.isArray(object.extensionRange))
                            throw TypeError(".google.protobuf.DescriptorProto.extensionRange: array expected");
                        message.extensionRange = [];
                        for (var i = 0; i < object.extensionRange.length; ++i) {
                            if (typeof object.extensionRange[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.extensionRange: object expected");
                            message.extensionRange[i] = $root.google.protobuf.DescriptorProto.ExtensionRange.fromObject(object.extensionRange[i]);
                        }
                    }
                    if (object.oneofDecl) {
                        if (!Array.isArray(object.oneofDecl))
                            throw TypeError(".google.protobuf.DescriptorProto.oneofDecl: array expected");
                        message.oneofDecl = [];
                        for (var i = 0; i < object.oneofDecl.length; ++i) {
                            if (typeof object.oneofDecl[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.oneofDecl: object expected");
                            message.oneofDecl[i] = $root.google.protobuf.OneofDescriptorProto.fromObject(object.oneofDecl[i]);
                        }
                    }
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.DescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.MessageOptions.fromObject(object.options);
                    }
                    if (object.reservedRange) {
                        if (!Array.isArray(object.reservedRange))
                            throw TypeError(".google.protobuf.DescriptorProto.reservedRange: array expected");
                        message.reservedRange = [];
                        for (var i = 0; i < object.reservedRange.length; ++i) {
                            if (typeof object.reservedRange[i] !== "object")
                                throw TypeError(".google.protobuf.DescriptorProto.reservedRange: object expected");
                            message.reservedRange[i] = $root.google.protobuf.DescriptorProto.ReservedRange.fromObject(object.reservedRange[i]);
                        }
                    }
                    if (object.reservedName) {
                        if (!Array.isArray(object.reservedName))
                            throw TypeError(".google.protobuf.DescriptorProto.reservedName: array expected");
                        message.reservedName = [];
                        for (var i = 0; i < object.reservedName.length; ++i)
                            message.reservedName[i] = String(object.reservedName[i]);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.DescriptorProto
                 * @static
                 * @param {google.protobuf.DescriptorProto} message DescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults) {
                        object.field = [];
                        object.nestedType = [];
                        object.enumType = [];
                        object.extensionRange = [];
                        object.extension = [];
                        object.oneofDecl = [];
                        object.reservedRange = [];
                        object.reservedName = [];
                    }
                    if (options.defaults) {
                        object.name = "";
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.field && message.field.length) {
                        object.field = [];
                        for (var j = 0; j < message.field.length; ++j)
                            object.field[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.field[j], options);
                    }
                    if (message.nestedType && message.nestedType.length) {
                        object.nestedType = [];
                        for (var j = 0; j < message.nestedType.length; ++j)
                            object.nestedType[j] = $root.google.protobuf.DescriptorProto.toObject(message.nestedType[j], options);
                    }
                    if (message.enumType && message.enumType.length) {
                        object.enumType = [];
                        for (var j = 0; j < message.enumType.length; ++j)
                            object.enumType[j] = $root.google.protobuf.EnumDescriptorProto.toObject(message.enumType[j], options);
                    }
                    if (message.extensionRange && message.extensionRange.length) {
                        object.extensionRange = [];
                        for (var j = 0; j < message.extensionRange.length; ++j)
                            object.extensionRange[j] = $root.google.protobuf.DescriptorProto.ExtensionRange.toObject(message.extensionRange[j], options);
                    }
                    if (message.extension && message.extension.length) {
                        object.extension = [];
                        for (var j = 0; j < message.extension.length; ++j)
                            object.extension[j] = $root.google.protobuf.FieldDescriptorProto.toObject(message.extension[j], options);
                    }
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.MessageOptions.toObject(message.options, options);
                    if (message.oneofDecl && message.oneofDecl.length) {
                        object.oneofDecl = [];
                        for (var j = 0; j < message.oneofDecl.length; ++j)
                            object.oneofDecl[j] = $root.google.protobuf.OneofDescriptorProto.toObject(message.oneofDecl[j], options);
                    }
                    if (message.reservedRange && message.reservedRange.length) {
                        object.reservedRange = [];
                        for (var j = 0; j < message.reservedRange.length; ++j)
                            object.reservedRange[j] = $root.google.protobuf.DescriptorProto.ReservedRange.toObject(message.reservedRange[j], options);
                    }
                    if (message.reservedName && message.reservedName.length) {
                        object.reservedName = [];
                        for (var j = 0; j < message.reservedName.length; ++j)
                            object.reservedName[j] = message.reservedName[j];
                    }
                    return object;
                };
    
                /**
                 * Converts this DescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.DescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                DescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                DescriptorProto.ExtensionRange = (function() {
    
                    /**
                     * Properties of an ExtensionRange.
                     * @memberof google.protobuf.DescriptorProto
                     * @interface IExtensionRange
                     * @property {number|null} [start] ExtensionRange start
                     * @property {number|null} [end] ExtensionRange end
                     */
    
                    /**
                     * Constructs a new ExtensionRange.
                     * @memberof google.protobuf.DescriptorProto
                     * @classdesc Represents an ExtensionRange.
                     * @implements IExtensionRange
                     * @constructor
                     * @param {google.protobuf.DescriptorProto.IExtensionRange=} [properties] Properties to set
                     */
                    function ExtensionRange(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * ExtensionRange start.
                     * @member {number} start
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @instance
                     */
                    ExtensionRange.prototype.start = 0;
    
                    /**
                     * ExtensionRange end.
                     * @member {number} end
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @instance
                     */
                    ExtensionRange.prototype.end = 0;
    
                    /**
                     * Creates a new ExtensionRange instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IExtensionRange=} [properties] Properties to set
                     * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange instance
                     */
                    ExtensionRange.create = function create(properties) {
                        return new ExtensionRange(properties);
                    };
    
                    /**
                     * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IExtensionRange} message ExtensionRange message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ExtensionRange.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.start != null && message.hasOwnProperty("start"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                        if (message.end != null && message.hasOwnProperty("end"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IExtensionRange} message ExtensionRange message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ExtensionRange.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes an ExtensionRange message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ExtensionRange.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto.ExtensionRange();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.start = reader.int32();
                                break;
                            case 2:
                                message.end = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ExtensionRange.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies an ExtensionRange message.
                     * @function verify
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ExtensionRange.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.start != null && message.hasOwnProperty("start"))
                            if (!$util.isInteger(message.start))
                                return "start: integer expected";
                        if (message.end != null && message.hasOwnProperty("end"))
                            if (!$util.isInteger(message.end))
                                return "end: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.DescriptorProto.ExtensionRange} ExtensionRange
                     */
                    ExtensionRange.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.protobuf.DescriptorProto.ExtensionRange)
                            return object;
                        var message = new $root.google.protobuf.DescriptorProto.ExtensionRange();
                        if (object.start != null)
                            message.start = object.start | 0;
                        if (object.end != null)
                            message.end = object.end | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.ExtensionRange} message ExtensionRange
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ExtensionRange.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.start = 0;
                            object.end = 0;
                        }
                        if (message.start != null && message.hasOwnProperty("start"))
                            object.start = message.start;
                        if (message.end != null && message.hasOwnProperty("end"))
                            object.end = message.end;
                        return object;
                    };
    
                    /**
                     * Converts this ExtensionRange to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.DescriptorProto.ExtensionRange
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ExtensionRange.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return ExtensionRange;
                })();
    
                DescriptorProto.ReservedRange = (function() {
    
                    /**
                     * Properties of a ReservedRange.
                     * @memberof google.protobuf.DescriptorProto
                     * @interface IReservedRange
                     * @property {number|null} [start] ReservedRange start
                     * @property {number|null} [end] ReservedRange end
                     */
    
                    /**
                     * Constructs a new ReservedRange.
                     * @memberof google.protobuf.DescriptorProto
                     * @classdesc Represents a ReservedRange.
                     * @implements IReservedRange
                     * @constructor
                     * @param {google.protobuf.DescriptorProto.IReservedRange=} [properties] Properties to set
                     */
                    function ReservedRange(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * ReservedRange start.
                     * @member {number} start
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @instance
                     */
                    ReservedRange.prototype.start = 0;
    
                    /**
                     * ReservedRange end.
                     * @member {number} end
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @instance
                     */
                    ReservedRange.prototype.end = 0;
    
                    /**
                     * Creates a new ReservedRange instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IReservedRange=} [properties] Properties to set
                     * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange instance
                     */
                    ReservedRange.create = function create(properties) {
                        return new ReservedRange(properties);
                    };
    
                    /**
                     * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IReservedRange} message ReservedRange message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ReservedRange.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.start != null && message.hasOwnProperty("start"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.start);
                        if (message.end != null && message.hasOwnProperty("end"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.end);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.IReservedRange} message ReservedRange message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ReservedRange.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a ReservedRange message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ReservedRange.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DescriptorProto.ReservedRange();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.start = reader.int32();
                                break;
                            case 2:
                                message.end = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ReservedRange.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a ReservedRange message.
                     * @function verify
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ReservedRange.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.start != null && message.hasOwnProperty("start"))
                            if (!$util.isInteger(message.start))
                                return "start: integer expected";
                        if (message.end != null && message.hasOwnProperty("end"))
                            if (!$util.isInteger(message.end))
                                return "end: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.DescriptorProto.ReservedRange} ReservedRange
                     */
                    ReservedRange.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.protobuf.DescriptorProto.ReservedRange)
                            return object;
                        var message = new $root.google.protobuf.DescriptorProto.ReservedRange();
                        if (object.start != null)
                            message.start = object.start | 0;
                        if (object.end != null)
                            message.end = object.end | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @static
                     * @param {google.protobuf.DescriptorProto.ReservedRange} message ReservedRange
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ReservedRange.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.start = 0;
                            object.end = 0;
                        }
                        if (message.start != null && message.hasOwnProperty("start"))
                            object.start = message.start;
                        if (message.end != null && message.hasOwnProperty("end"))
                            object.end = message.end;
                        return object;
                    };
    
                    /**
                     * Converts this ReservedRange to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.DescriptorProto.ReservedRange
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ReservedRange.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return ReservedRange;
                })();
    
                return DescriptorProto;
            })();
    
            protobuf.FieldDescriptorProto = (function() {
    
                /**
                 * Properties of a FieldDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IFieldDescriptorProto
                 * @property {string|null} [name] FieldDescriptorProto name
                 * @property {number|null} [number] FieldDescriptorProto number
                 * @property {google.protobuf.FieldDescriptorProto.Label|null} [label] FieldDescriptorProto label
                 * @property {google.protobuf.FieldDescriptorProto.Type|null} [type] FieldDescriptorProto type
                 * @property {string|null} [typeName] FieldDescriptorProto typeName
                 * @property {string|null} [extendee] FieldDescriptorProto extendee
                 * @property {string|null} [defaultValue] FieldDescriptorProto defaultValue
                 * @property {number|null} [oneofIndex] FieldDescriptorProto oneofIndex
                 * @property {string|null} [jsonName] FieldDescriptorProto jsonName
                 * @property {google.protobuf.IFieldOptions|null} [options] FieldDescriptorProto options
                 */
    
                /**
                 * Constructs a new FieldDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a FieldDescriptorProto.
                 * @implements IFieldDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IFieldDescriptorProto=} [properties] Properties to set
                 */
                function FieldDescriptorProto(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FieldDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.name = "";
    
                /**
                 * FieldDescriptorProto number.
                 * @member {number} number
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.number = 0;
    
                /**
                 * FieldDescriptorProto label.
                 * @member {google.protobuf.FieldDescriptorProto.Label} label
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.label = 1;
    
                /**
                 * FieldDescriptorProto type.
                 * @member {google.protobuf.FieldDescriptorProto.Type} type
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.type = 1;
    
                /**
                 * FieldDescriptorProto typeName.
                 * @member {string} typeName
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.typeName = "";
    
                /**
                 * FieldDescriptorProto extendee.
                 * @member {string} extendee
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.extendee = "";
    
                /**
                 * FieldDescriptorProto defaultValue.
                 * @member {string} defaultValue
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.defaultValue = "";
    
                /**
                 * FieldDescriptorProto oneofIndex.
                 * @member {number} oneofIndex
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.oneofIndex = 0;
    
                /**
                 * FieldDescriptorProto jsonName.
                 * @member {string} jsonName
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.jsonName = "";
    
                /**
                 * FieldDescriptorProto options.
                 * @member {google.protobuf.IFieldOptions|null|undefined} options
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 */
                FieldDescriptorProto.prototype.options = null;
    
                /**
                 * Creates a new FieldDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {google.protobuf.IFieldDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto instance
                 */
                FieldDescriptorProto.create = function create(properties) {
                    return new FieldDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {google.protobuf.IFieldDescriptorProto} message FieldDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.extendee != null && message.hasOwnProperty("extendee"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.extendee);
                    if (message.number != null && message.hasOwnProperty("number"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.number);
                    if (message.label != null && message.hasOwnProperty("label"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.label);
                    if (message.type != null && message.hasOwnProperty("type"))
                        writer.uint32(/* id 5, wireType 0 =*/40).int32(message.type);
                    if (message.typeName != null && message.hasOwnProperty("typeName"))
                        writer.uint32(/* id 6, wireType 2 =*/50).string(message.typeName);
                    if (message.defaultValue != null && message.hasOwnProperty("defaultValue"))
                        writer.uint32(/* id 7, wireType 2 =*/58).string(message.defaultValue);
                    if (message.options != null && message.hasOwnProperty("options"))
                        $root.google.protobuf.FieldOptions.encode(message.options, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    if (message.oneofIndex != null && message.hasOwnProperty("oneofIndex"))
                        writer.uint32(/* id 9, wireType 0 =*/72).int32(message.oneofIndex);
                    if (message.jsonName != null && message.hasOwnProperty("jsonName"))
                        writer.uint32(/* id 10, wireType 2 =*/82).string(message.jsonName);
                    return writer;
                };
    
                /**
                 * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {google.protobuf.IFieldDescriptorProto} message FieldDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FieldDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FieldDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 3:
                            message.number = reader.int32();
                            break;
                        case 4:
                            message.label = reader.int32();
                            break;
                        case 5:
                            message.type = reader.int32();
                            break;
                        case 6:
                            message.typeName = reader.string();
                            break;
                        case 2:
                            message.extendee = reader.string();
                            break;
                        case 7:
                            message.defaultValue = reader.string();
                            break;
                        case 9:
                            message.oneofIndex = reader.int32();
                            break;
                        case 10:
                            message.jsonName = reader.string();
                            break;
                        case 8:
                            message.options = $root.google.protobuf.FieldOptions.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FieldDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FieldDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.number != null && message.hasOwnProperty("number"))
                        if (!$util.isInteger(message.number))
                            return "number: integer expected";
                    if (message.label != null && message.hasOwnProperty("label"))
                        switch (message.label) {
                        default:
                            return "label: enum value expected";
                        case 1:
                        case 2:
                        case 3:
                            break;
                        }
                    if (message.type != null && message.hasOwnProperty("type"))
                        switch (message.type) {
                        default:
                            return "type: enum value expected";
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                        case 6:
                        case 7:
                        case 8:
                        case 9:
                        case 10:
                        case 11:
                        case 12:
                        case 13:
                        case 14:
                        case 15:
                        case 16:
                        case 17:
                        case 18:
                            break;
                        }
                    if (message.typeName != null && message.hasOwnProperty("typeName"))
                        if (!$util.isString(message.typeName))
                            return "typeName: string expected";
                    if (message.extendee != null && message.hasOwnProperty("extendee"))
                        if (!$util.isString(message.extendee))
                            return "extendee: string expected";
                    if (message.defaultValue != null && message.hasOwnProperty("defaultValue"))
                        if (!$util.isString(message.defaultValue))
                            return "defaultValue: string expected";
                    if (message.oneofIndex != null && message.hasOwnProperty("oneofIndex"))
                        if (!$util.isInteger(message.oneofIndex))
                            return "oneofIndex: integer expected";
                    if (message.jsonName != null && message.hasOwnProperty("jsonName"))
                        if (!$util.isString(message.jsonName))
                            return "jsonName: string expected";
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.FieldOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FieldDescriptorProto} FieldDescriptorProto
                 */
                FieldDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FieldDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.FieldDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.number != null)
                        message.number = object.number | 0;
                    switch (object.label) {
                    case "LABEL_OPTIONAL":
                    case 1:
                        message.label = 1;
                        break;
                    case "LABEL_REQUIRED":
                    case 2:
                        message.label = 2;
                        break;
                    case "LABEL_REPEATED":
                    case 3:
                        message.label = 3;
                        break;
                    }
                    switch (object.type) {
                    case "TYPE_DOUBLE":
                    case 1:
                        message.type = 1;
                        break;
                    case "TYPE_FLOAT":
                    case 2:
                        message.type = 2;
                        break;
                    case "TYPE_INT64":
                    case 3:
                        message.type = 3;
                        break;
                    case "TYPE_UINT64":
                    case 4:
                        message.type = 4;
                        break;
                    case "TYPE_INT32":
                    case 5:
                        message.type = 5;
                        break;
                    case "TYPE_FIXED64":
                    case 6:
                        message.type = 6;
                        break;
                    case "TYPE_FIXED32":
                    case 7:
                        message.type = 7;
                        break;
                    case "TYPE_BOOL":
                    case 8:
                        message.type = 8;
                        break;
                    case "TYPE_STRING":
                    case 9:
                        message.type = 9;
                        break;
                    case "TYPE_GROUP":
                    case 10:
                        message.type = 10;
                        break;
                    case "TYPE_MESSAGE":
                    case 11:
                        message.type = 11;
                        break;
                    case "TYPE_BYTES":
                    case 12:
                        message.type = 12;
                        break;
                    case "TYPE_UINT32":
                    case 13:
                        message.type = 13;
                        break;
                    case "TYPE_ENUM":
                    case 14:
                        message.type = 14;
                        break;
                    case "TYPE_SFIXED32":
                    case 15:
                        message.type = 15;
                        break;
                    case "TYPE_SFIXED64":
                    case 16:
                        message.type = 16;
                        break;
                    case "TYPE_SINT32":
                    case 17:
                        message.type = 17;
                        break;
                    case "TYPE_SINT64":
                    case 18:
                        message.type = 18;
                        break;
                    }
                    if (object.typeName != null)
                        message.typeName = String(object.typeName);
                    if (object.extendee != null)
                        message.extendee = String(object.extendee);
                    if (object.defaultValue != null)
                        message.defaultValue = String(object.defaultValue);
                    if (object.oneofIndex != null)
                        message.oneofIndex = object.oneofIndex | 0;
                    if (object.jsonName != null)
                        message.jsonName = String(object.jsonName);
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.FieldDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.FieldOptions.fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @static
                 * @param {google.protobuf.FieldDescriptorProto} message FieldDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FieldDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.extendee = "";
                        object.number = 0;
                        object.label = options.enums === String ? "LABEL_OPTIONAL" : 1;
                        object.type = options.enums === String ? "TYPE_DOUBLE" : 1;
                        object.typeName = "";
                        object.defaultValue = "";
                        object.options = null;
                        object.oneofIndex = 0;
                        object.jsonName = "";
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.extendee != null && message.hasOwnProperty("extendee"))
                        object.extendee = message.extendee;
                    if (message.number != null && message.hasOwnProperty("number"))
                        object.number = message.number;
                    if (message.label != null && message.hasOwnProperty("label"))
                        object.label = options.enums === String ? $root.google.protobuf.FieldDescriptorProto.Label[message.label] : message.label;
                    if (message.type != null && message.hasOwnProperty("type"))
                        object.type = options.enums === String ? $root.google.protobuf.FieldDescriptorProto.Type[message.type] : message.type;
                    if (message.typeName != null && message.hasOwnProperty("typeName"))
                        object.typeName = message.typeName;
                    if (message.defaultValue != null && message.hasOwnProperty("defaultValue"))
                        object.defaultValue = message.defaultValue;
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.FieldOptions.toObject(message.options, options);
                    if (message.oneofIndex != null && message.hasOwnProperty("oneofIndex"))
                        object.oneofIndex = message.oneofIndex;
                    if (message.jsonName != null && message.hasOwnProperty("jsonName"))
                        object.jsonName = message.jsonName;
                    return object;
                };
    
                /**
                 * Converts this FieldDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FieldDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FieldDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * Type enum.
                 * @name google.protobuf.FieldDescriptorProto.Type
                 * @enum {string}
                 * @property {number} TYPE_DOUBLE=1 TYPE_DOUBLE value
                 * @property {number} TYPE_FLOAT=2 TYPE_FLOAT value
                 * @property {number} TYPE_INT64=3 TYPE_INT64 value
                 * @property {number} TYPE_UINT64=4 TYPE_UINT64 value
                 * @property {number} TYPE_INT32=5 TYPE_INT32 value
                 * @property {number} TYPE_FIXED64=6 TYPE_FIXED64 value
                 * @property {number} TYPE_FIXED32=7 TYPE_FIXED32 value
                 * @property {number} TYPE_BOOL=8 TYPE_BOOL value
                 * @property {number} TYPE_STRING=9 TYPE_STRING value
                 * @property {number} TYPE_GROUP=10 TYPE_GROUP value
                 * @property {number} TYPE_MESSAGE=11 TYPE_MESSAGE value
                 * @property {number} TYPE_BYTES=12 TYPE_BYTES value
                 * @property {number} TYPE_UINT32=13 TYPE_UINT32 value
                 * @property {number} TYPE_ENUM=14 TYPE_ENUM value
                 * @property {number} TYPE_SFIXED32=15 TYPE_SFIXED32 value
                 * @property {number} TYPE_SFIXED64=16 TYPE_SFIXED64 value
                 * @property {number} TYPE_SINT32=17 TYPE_SINT32 value
                 * @property {number} TYPE_SINT64=18 TYPE_SINT64 value
                 */
                FieldDescriptorProto.Type = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[1] = "TYPE_DOUBLE"] = 1;
                    values[valuesById[2] = "TYPE_FLOAT"] = 2;
                    values[valuesById[3] = "TYPE_INT64"] = 3;
                    values[valuesById[4] = "TYPE_UINT64"] = 4;
                    values[valuesById[5] = "TYPE_INT32"] = 5;
                    values[valuesById[6] = "TYPE_FIXED64"] = 6;
                    values[valuesById[7] = "TYPE_FIXED32"] = 7;
                    values[valuesById[8] = "TYPE_BOOL"] = 8;
                    values[valuesById[9] = "TYPE_STRING"] = 9;
                    values[valuesById[10] = "TYPE_GROUP"] = 10;
                    values[valuesById[11] = "TYPE_MESSAGE"] = 11;
                    values[valuesById[12] = "TYPE_BYTES"] = 12;
                    values[valuesById[13] = "TYPE_UINT32"] = 13;
                    values[valuesById[14] = "TYPE_ENUM"] = 14;
                    values[valuesById[15] = "TYPE_SFIXED32"] = 15;
                    values[valuesById[16] = "TYPE_SFIXED64"] = 16;
                    values[valuesById[17] = "TYPE_SINT32"] = 17;
                    values[valuesById[18] = "TYPE_SINT64"] = 18;
                    return values;
                })();
    
                /**
                 * Label enum.
                 * @name google.protobuf.FieldDescriptorProto.Label
                 * @enum {string}
                 * @property {number} LABEL_OPTIONAL=1 LABEL_OPTIONAL value
                 * @property {number} LABEL_REQUIRED=2 LABEL_REQUIRED value
                 * @property {number} LABEL_REPEATED=3 LABEL_REPEATED value
                 */
                FieldDescriptorProto.Label = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[1] = "LABEL_OPTIONAL"] = 1;
                    values[valuesById[2] = "LABEL_REQUIRED"] = 2;
                    values[valuesById[3] = "LABEL_REPEATED"] = 3;
                    return values;
                })();
    
                return FieldDescriptorProto;
            })();
    
            protobuf.OneofDescriptorProto = (function() {
    
                /**
                 * Properties of an OneofDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IOneofDescriptorProto
                 * @property {string|null} [name] OneofDescriptorProto name
                 * @property {google.protobuf.IOneofOptions|null} [options] OneofDescriptorProto options
                 */
    
                /**
                 * Constructs a new OneofDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents an OneofDescriptorProto.
                 * @implements IOneofDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IOneofDescriptorProto=} [properties] Properties to set
                 */
                function OneofDescriptorProto(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * OneofDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @instance
                 */
                OneofDescriptorProto.prototype.name = "";
    
                /**
                 * OneofDescriptorProto options.
                 * @member {google.protobuf.IOneofOptions|null|undefined} options
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @instance
                 */
                OneofDescriptorProto.prototype.options = null;
    
                /**
                 * Creates a new OneofDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {google.protobuf.IOneofDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto instance
                 */
                OneofDescriptorProto.create = function create(properties) {
                    return new OneofDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {google.protobuf.IOneofDescriptorProto} message OneofDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OneofDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.options != null && message.hasOwnProperty("options"))
                        $root.google.protobuf.OneofOptions.encode(message.options, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {google.protobuf.IOneofDescriptorProto} message OneofDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OneofDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an OneofDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OneofDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.OneofDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            message.options = $root.google.protobuf.OneofOptions.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OneofDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an OneofDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                OneofDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.OneofOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.OneofDescriptorProto} OneofDescriptorProto
                 */
                OneofDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.OneofDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.OneofDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.OneofDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.OneofOptions.fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @static
                 * @param {google.protobuf.OneofDescriptorProto} message OneofDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                OneofDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.OneofOptions.toObject(message.options, options);
                    return object;
                };
    
                /**
                 * Converts this OneofDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.OneofDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                OneofDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return OneofDescriptorProto;
            })();
    
            protobuf.EnumDescriptorProto = (function() {
    
                /**
                 * Properties of an EnumDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IEnumDescriptorProto
                 * @property {string|null} [name] EnumDescriptorProto name
                 * @property {Array.<google.protobuf.IEnumValueDescriptorProto>|null} [value] EnumDescriptorProto value
                 * @property {google.protobuf.IEnumOptions|null} [options] EnumDescriptorProto options
                 */
    
                /**
                 * Constructs a new EnumDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents an EnumDescriptorProto.
                 * @implements IEnumDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IEnumDescriptorProto=} [properties] Properties to set
                 */
                function EnumDescriptorProto(properties) {
                    this.value = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * EnumDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @instance
                 */
                EnumDescriptorProto.prototype.name = "";
    
                /**
                 * EnumDescriptorProto value.
                 * @member {Array.<google.protobuf.IEnumValueDescriptorProto>} value
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @instance
                 */
                EnumDescriptorProto.prototype.value = $util.emptyArray;
    
                /**
                 * EnumDescriptorProto options.
                 * @member {google.protobuf.IEnumOptions|null|undefined} options
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @instance
                 */
                EnumDescriptorProto.prototype.options = null;
    
                /**
                 * Creates a new EnumDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto instance
                 */
                EnumDescriptorProto.create = function create(properties) {
                    return new EnumDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumDescriptorProto} message EnumDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.value != null && message.value.length)
                        for (var i = 0; i < message.value.length; ++i)
                            $root.google.protobuf.EnumValueDescriptorProto.encode(message.value[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.options != null && message.hasOwnProperty("options"))
                        $root.google.protobuf.EnumOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumDescriptorProto} message EnumDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an EnumDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            if (!(message.value && message.value.length))
                                message.value = [];
                            message.value.push($root.google.protobuf.EnumValueDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 3:
                            message.options = $root.google.protobuf.EnumOptions.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an EnumDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EnumDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.value != null && message.hasOwnProperty("value")) {
                        if (!Array.isArray(message.value))
                            return "value: array expected";
                        for (var i = 0; i < message.value.length; ++i) {
                            var error = $root.google.protobuf.EnumValueDescriptorProto.verify(message.value[i]);
                            if (error)
                                return "value." + error;
                        }
                    }
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.EnumOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumDescriptorProto} EnumDescriptorProto
                 */
                EnumDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.EnumDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.EnumDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.value) {
                        if (!Array.isArray(object.value))
                            throw TypeError(".google.protobuf.EnumDescriptorProto.value: array expected");
                        message.value = [];
                        for (var i = 0; i < object.value.length; ++i) {
                            if (typeof object.value[i] !== "object")
                                throw TypeError(".google.protobuf.EnumDescriptorProto.value: object expected");
                            message.value[i] = $root.google.protobuf.EnumValueDescriptorProto.fromObject(object.value[i]);
                        }
                    }
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.EnumDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.EnumOptions.fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @static
                 * @param {google.protobuf.EnumDescriptorProto} message EnumDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.value = [];
                    if (options.defaults) {
                        object.name = "";
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.value && message.value.length) {
                        object.value = [];
                        for (var j = 0; j < message.value.length; ++j)
                            object.value[j] = $root.google.protobuf.EnumValueDescriptorProto.toObject(message.value[j], options);
                    }
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.EnumOptions.toObject(message.options, options);
                    return object;
                };
    
                /**
                 * Converts this EnumDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.EnumDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EnumDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return EnumDescriptorProto;
            })();
    
            protobuf.EnumValueDescriptorProto = (function() {
    
                /**
                 * Properties of an EnumValueDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IEnumValueDescriptorProto
                 * @property {string|null} [name] EnumValueDescriptorProto name
                 * @property {number|null} [number] EnumValueDescriptorProto number
                 * @property {google.protobuf.IEnumValueOptions|null} [options] EnumValueDescriptorProto options
                 */
    
                /**
                 * Constructs a new EnumValueDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents an EnumValueDescriptorProto.
                 * @implements IEnumValueDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IEnumValueDescriptorProto=} [properties] Properties to set
                 */
                function EnumValueDescriptorProto(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * EnumValueDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @instance
                 */
                EnumValueDescriptorProto.prototype.name = "";
    
                /**
                 * EnumValueDescriptorProto number.
                 * @member {number} number
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @instance
                 */
                EnumValueDescriptorProto.prototype.number = 0;
    
                /**
                 * EnumValueDescriptorProto options.
                 * @member {google.protobuf.IEnumValueOptions|null|undefined} options
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @instance
                 */
                EnumValueDescriptorProto.prototype.options = null;
    
                /**
                 * Creates a new EnumValueDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumValueDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto instance
                 */
                EnumValueDescriptorProto.create = function create(properties) {
                    return new EnumValueDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumValueDescriptorProto} message EnumValueDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumValueDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.number != null && message.hasOwnProperty("number"))
                        writer.uint32(/* id 2, wireType 0 =*/16).int32(message.number);
                    if (message.options != null && message.hasOwnProperty("options"))
                        $root.google.protobuf.EnumValueOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {google.protobuf.IEnumValueDescriptorProto} message EnumValueDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumValueDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumValueDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumValueDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            message.number = reader.int32();
                            break;
                        case 3:
                            message.options = $root.google.protobuf.EnumValueOptions.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumValueDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an EnumValueDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EnumValueDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.number != null && message.hasOwnProperty("number"))
                        if (!$util.isInteger(message.number))
                            return "number: integer expected";
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.EnumValueOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumValueDescriptorProto} EnumValueDescriptorProto
                 */
                EnumValueDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.EnumValueDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.EnumValueDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.number != null)
                        message.number = object.number | 0;
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.EnumValueDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.EnumValueOptions.fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @static
                 * @param {google.protobuf.EnumValueDescriptorProto} message EnumValueDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumValueDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.number = 0;
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.number != null && message.hasOwnProperty("number"))
                        object.number = message.number;
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.EnumValueOptions.toObject(message.options, options);
                    return object;
                };
    
                /**
                 * Converts this EnumValueDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.EnumValueDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EnumValueDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return EnumValueDescriptorProto;
            })();
    
            protobuf.ServiceDescriptorProto = (function() {
    
                /**
                 * Properties of a ServiceDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IServiceDescriptorProto
                 * @property {string|null} [name] ServiceDescriptorProto name
                 * @property {Array.<google.protobuf.IMethodDescriptorProto>|null} [method] ServiceDescriptorProto method
                 * @property {google.protobuf.IServiceOptions|null} [options] ServiceDescriptorProto options
                 */
    
                /**
                 * Constructs a new ServiceDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a ServiceDescriptorProto.
                 * @implements IServiceDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IServiceDescriptorProto=} [properties] Properties to set
                 */
                function ServiceDescriptorProto(properties) {
                    this.method = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * ServiceDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @instance
                 */
                ServiceDescriptorProto.prototype.name = "";
    
                /**
                 * ServiceDescriptorProto method.
                 * @member {Array.<google.protobuf.IMethodDescriptorProto>} method
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @instance
                 */
                ServiceDescriptorProto.prototype.method = $util.emptyArray;
    
                /**
                 * ServiceDescriptorProto options.
                 * @member {google.protobuf.IServiceOptions|null|undefined} options
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @instance
                 */
                ServiceDescriptorProto.prototype.options = null;
    
                /**
                 * Creates a new ServiceDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {google.protobuf.IServiceDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto instance
                 */
                ServiceDescriptorProto.create = function create(properties) {
                    return new ServiceDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {google.protobuf.IServiceDescriptorProto} message ServiceDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ServiceDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.method != null && message.method.length)
                        for (var i = 0; i < message.method.length; ++i)
                            $root.google.protobuf.MethodDescriptorProto.encode(message.method[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.options != null && message.hasOwnProperty("options"))
                        $root.google.protobuf.ServiceOptions.encode(message.options, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {google.protobuf.IServiceDescriptorProto} message ServiceDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ServiceDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ServiceDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ServiceDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            if (!(message.method && message.method.length))
                                message.method = [];
                            message.method.push($root.google.protobuf.MethodDescriptorProto.decode(reader, reader.uint32()));
                            break;
                        case 3:
                            message.options = $root.google.protobuf.ServiceOptions.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ServiceDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a ServiceDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ServiceDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.method != null && message.hasOwnProperty("method")) {
                        if (!Array.isArray(message.method))
                            return "method: array expected";
                        for (var i = 0; i < message.method.length; ++i) {
                            var error = $root.google.protobuf.MethodDescriptorProto.verify(message.method[i]);
                            if (error)
                                return "method." + error;
                        }
                    }
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.ServiceOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.ServiceDescriptorProto} ServiceDescriptorProto
                 */
                ServiceDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.ServiceDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.ServiceDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.method) {
                        if (!Array.isArray(object.method))
                            throw TypeError(".google.protobuf.ServiceDescriptorProto.method: array expected");
                        message.method = [];
                        for (var i = 0; i < object.method.length; ++i) {
                            if (typeof object.method[i] !== "object")
                                throw TypeError(".google.protobuf.ServiceDescriptorProto.method: object expected");
                            message.method[i] = $root.google.protobuf.MethodDescriptorProto.fromObject(object.method[i]);
                        }
                    }
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.ServiceDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.ServiceOptions.fromObject(object.options);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @static
                 * @param {google.protobuf.ServiceDescriptorProto} message ServiceDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ServiceDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.method = [];
                    if (options.defaults) {
                        object.name = "";
                        object.options = null;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.method && message.method.length) {
                        object.method = [];
                        for (var j = 0; j < message.method.length; ++j)
                            object.method[j] = $root.google.protobuf.MethodDescriptorProto.toObject(message.method[j], options);
                    }
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.ServiceOptions.toObject(message.options, options);
                    return object;
                };
    
                /**
                 * Converts this ServiceDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.ServiceDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ServiceDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return ServiceDescriptorProto;
            })();
    
            protobuf.MethodDescriptorProto = (function() {
    
                /**
                 * Properties of a MethodDescriptorProto.
                 * @memberof google.protobuf
                 * @interface IMethodDescriptorProto
                 * @property {string|null} [name] MethodDescriptorProto name
                 * @property {string|null} [inputType] MethodDescriptorProto inputType
                 * @property {string|null} [outputType] MethodDescriptorProto outputType
                 * @property {google.protobuf.IMethodOptions|null} [options] MethodDescriptorProto options
                 * @property {boolean|null} [clientStreaming] MethodDescriptorProto clientStreaming
                 * @property {boolean|null} [serverStreaming] MethodDescriptorProto serverStreaming
                 */
    
                /**
                 * Constructs a new MethodDescriptorProto.
                 * @memberof google.protobuf
                 * @classdesc Represents a MethodDescriptorProto.
                 * @implements IMethodDescriptorProto
                 * @constructor
                 * @param {google.protobuf.IMethodDescriptorProto=} [properties] Properties to set
                 */
                function MethodDescriptorProto(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * MethodDescriptorProto name.
                 * @member {string} name
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.name = "";
    
                /**
                 * MethodDescriptorProto inputType.
                 * @member {string} inputType
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.inputType = "";
    
                /**
                 * MethodDescriptorProto outputType.
                 * @member {string} outputType
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.outputType = "";
    
                /**
                 * MethodDescriptorProto options.
                 * @member {google.protobuf.IMethodOptions|null|undefined} options
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.options = null;
    
                /**
                 * MethodDescriptorProto clientStreaming.
                 * @member {boolean} clientStreaming
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.clientStreaming = false;
    
                /**
                 * MethodDescriptorProto serverStreaming.
                 * @member {boolean} serverStreaming
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 */
                MethodDescriptorProto.prototype.serverStreaming = false;
    
                /**
                 * Creates a new MethodDescriptorProto instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {google.protobuf.IMethodDescriptorProto=} [properties] Properties to set
                 * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto instance
                 */
                MethodDescriptorProto.create = function create(properties) {
                    return new MethodDescriptorProto(properties);
                };
    
                /**
                 * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {google.protobuf.IMethodDescriptorProto} message MethodDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MethodDescriptorProto.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.hasOwnProperty("name"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
                    if (message.inputType != null && message.hasOwnProperty("inputType"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.inputType);
                    if (message.outputType != null && message.hasOwnProperty("outputType"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.outputType);
                    if (message.options != null && message.hasOwnProperty("options"))
                        $root.google.protobuf.MethodOptions.encode(message.options, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    if (message.clientStreaming != null && message.hasOwnProperty("clientStreaming"))
                        writer.uint32(/* id 5, wireType 0 =*/40).bool(message.clientStreaming);
                    if (message.serverStreaming != null && message.hasOwnProperty("serverStreaming"))
                        writer.uint32(/* id 6, wireType 0 =*/48).bool(message.serverStreaming);
                    return writer;
                };
    
                /**
                 * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {google.protobuf.IMethodDescriptorProto} message MethodDescriptorProto message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MethodDescriptorProto.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a MethodDescriptorProto message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MethodDescriptorProto.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MethodDescriptorProto();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.name = reader.string();
                            break;
                        case 2:
                            message.inputType = reader.string();
                            break;
                        case 3:
                            message.outputType = reader.string();
                            break;
                        case 4:
                            message.options = $root.google.protobuf.MethodOptions.decode(reader, reader.uint32());
                            break;
                        case 5:
                            message.clientStreaming = reader.bool();
                            break;
                        case 6:
                            message.serverStreaming = reader.bool();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MethodDescriptorProto.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a MethodDescriptorProto message.
                 * @function verify
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MethodDescriptorProto.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name"))
                        if (!$util.isString(message.name))
                            return "name: string expected";
                    if (message.inputType != null && message.hasOwnProperty("inputType"))
                        if (!$util.isString(message.inputType))
                            return "inputType: string expected";
                    if (message.outputType != null && message.hasOwnProperty("outputType"))
                        if (!$util.isString(message.outputType))
                            return "outputType: string expected";
                    if (message.options != null && message.hasOwnProperty("options")) {
                        var error = $root.google.protobuf.MethodOptions.verify(message.options);
                        if (error)
                            return "options." + error;
                    }
                    if (message.clientStreaming != null && message.hasOwnProperty("clientStreaming"))
                        if (typeof message.clientStreaming !== "boolean")
                            return "clientStreaming: boolean expected";
                    if (message.serverStreaming != null && message.hasOwnProperty("serverStreaming"))
                        if (typeof message.serverStreaming !== "boolean")
                            return "serverStreaming: boolean expected";
                    return null;
                };
    
                /**
                 * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.MethodDescriptorProto} MethodDescriptorProto
                 */
                MethodDescriptorProto.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.MethodDescriptorProto)
                        return object;
                    var message = new $root.google.protobuf.MethodDescriptorProto();
                    if (object.name != null)
                        message.name = String(object.name);
                    if (object.inputType != null)
                        message.inputType = String(object.inputType);
                    if (object.outputType != null)
                        message.outputType = String(object.outputType);
                    if (object.options != null) {
                        if (typeof object.options !== "object")
                            throw TypeError(".google.protobuf.MethodDescriptorProto.options: object expected");
                        message.options = $root.google.protobuf.MethodOptions.fromObject(object.options);
                    }
                    if (object.clientStreaming != null)
                        message.clientStreaming = Boolean(object.clientStreaming);
                    if (object.serverStreaming != null)
                        message.serverStreaming = Boolean(object.serverStreaming);
                    return message;
                };
    
                /**
                 * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @static
                 * @param {google.protobuf.MethodDescriptorProto} message MethodDescriptorProto
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MethodDescriptorProto.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.name = "";
                        object.inputType = "";
                        object.outputType = "";
                        object.options = null;
                        object.clientStreaming = false;
                        object.serverStreaming = false;
                    }
                    if (message.name != null && message.hasOwnProperty("name"))
                        object.name = message.name;
                    if (message.inputType != null && message.hasOwnProperty("inputType"))
                        object.inputType = message.inputType;
                    if (message.outputType != null && message.hasOwnProperty("outputType"))
                        object.outputType = message.outputType;
                    if (message.options != null && message.hasOwnProperty("options"))
                        object.options = $root.google.protobuf.MethodOptions.toObject(message.options, options);
                    if (message.clientStreaming != null && message.hasOwnProperty("clientStreaming"))
                        object.clientStreaming = message.clientStreaming;
                    if (message.serverStreaming != null && message.hasOwnProperty("serverStreaming"))
                        object.serverStreaming = message.serverStreaming;
                    return object;
                };
    
                /**
                 * Converts this MethodDescriptorProto to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.MethodDescriptorProto
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MethodDescriptorProto.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return MethodDescriptorProto;
            })();
    
            protobuf.FileOptions = (function() {
    
                /**
                 * Properties of a FileOptions.
                 * @memberof google.protobuf
                 * @interface IFileOptions
                 * @property {string|null} [javaPackage] FileOptions javaPackage
                 * @property {string|null} [javaOuterClassname] FileOptions javaOuterClassname
                 * @property {boolean|null} [javaMultipleFiles] FileOptions javaMultipleFiles
                 * @property {boolean|null} [javaGenerateEqualsAndHash] FileOptions javaGenerateEqualsAndHash
                 * @property {boolean|null} [javaStringCheckUtf8] FileOptions javaStringCheckUtf8
                 * @property {google.protobuf.FileOptions.OptimizeMode|null} [optimizeFor] FileOptions optimizeFor
                 * @property {string|null} [goPackage] FileOptions goPackage
                 * @property {boolean|null} [ccGenericServices] FileOptions ccGenericServices
                 * @property {boolean|null} [javaGenericServices] FileOptions javaGenericServices
                 * @property {boolean|null} [pyGenericServices] FileOptions pyGenericServices
                 * @property {boolean|null} [deprecated] FileOptions deprecated
                 * @property {boolean|null} [ccEnableArenas] FileOptions ccEnableArenas
                 * @property {string|null} [objcClassPrefix] FileOptions objcClassPrefix
                 * @property {string|null} [csharpNamespace] FileOptions csharpNamespace
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] FileOptions uninterpretedOption
                 */
    
                /**
                 * Constructs a new FileOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a FileOptions.
                 * @implements IFileOptions
                 * @constructor
                 * @param {google.protobuf.IFileOptions=} [properties] Properties to set
                 */
                function FileOptions(properties) {
                    this.uninterpretedOption = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FileOptions javaPackage.
                 * @member {string} javaPackage
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.javaPackage = "";
    
                /**
                 * FileOptions javaOuterClassname.
                 * @member {string} javaOuterClassname
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.javaOuterClassname = "";
    
                /**
                 * FileOptions javaMultipleFiles.
                 * @member {boolean} javaMultipleFiles
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.javaMultipleFiles = false;
    
                /**
                 * FileOptions javaGenerateEqualsAndHash.
                 * @member {boolean} javaGenerateEqualsAndHash
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.javaGenerateEqualsAndHash = false;
    
                /**
                 * FileOptions javaStringCheckUtf8.
                 * @member {boolean} javaStringCheckUtf8
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.javaStringCheckUtf8 = false;
    
                /**
                 * FileOptions optimizeFor.
                 * @member {google.protobuf.FileOptions.OptimizeMode} optimizeFor
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.optimizeFor = 1;
    
                /**
                 * FileOptions goPackage.
                 * @member {string} goPackage
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.goPackage = "";
    
                /**
                 * FileOptions ccGenericServices.
                 * @member {boolean} ccGenericServices
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.ccGenericServices = false;
    
                /**
                 * FileOptions javaGenericServices.
                 * @member {boolean} javaGenericServices
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.javaGenericServices = false;
    
                /**
                 * FileOptions pyGenericServices.
                 * @member {boolean} pyGenericServices
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.pyGenericServices = false;
    
                /**
                 * FileOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.deprecated = false;
    
                /**
                 * FileOptions ccEnableArenas.
                 * @member {boolean} ccEnableArenas
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.ccEnableArenas = false;
    
                /**
                 * FileOptions objcClassPrefix.
                 * @member {string} objcClassPrefix
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.objcClassPrefix = "";
    
                /**
                 * FileOptions csharpNamespace.
                 * @member {string} csharpNamespace
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.csharpNamespace = "";
    
                /**
                 * FileOptions uninterpretedOption.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 */
                FileOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                /**
                 * Creates a new FileOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {google.protobuf.IFileOptions=} [properties] Properties to set
                 * @returns {google.protobuf.FileOptions} FileOptions instance
                 */
                FileOptions.create = function create(properties) {
                    return new FileOptions(properties);
                };
    
                /**
                 * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {google.protobuf.IFileOptions} message FileOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.javaPackage != null && message.hasOwnProperty("javaPackage"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.javaPackage);
                    if (message.javaOuterClassname != null && message.hasOwnProperty("javaOuterClassname"))
                        writer.uint32(/* id 8, wireType 2 =*/66).string(message.javaOuterClassname);
                    if (message.optimizeFor != null && message.hasOwnProperty("optimizeFor"))
                        writer.uint32(/* id 9, wireType 0 =*/72).int32(message.optimizeFor);
                    if (message.javaMultipleFiles != null && message.hasOwnProperty("javaMultipleFiles"))
                        writer.uint32(/* id 10, wireType 0 =*/80).bool(message.javaMultipleFiles);
                    if (message.goPackage != null && message.hasOwnProperty("goPackage"))
                        writer.uint32(/* id 11, wireType 2 =*/90).string(message.goPackage);
                    if (message.ccGenericServices != null && message.hasOwnProperty("ccGenericServices"))
                        writer.uint32(/* id 16, wireType 0 =*/128).bool(message.ccGenericServices);
                    if (message.javaGenericServices != null && message.hasOwnProperty("javaGenericServices"))
                        writer.uint32(/* id 17, wireType 0 =*/136).bool(message.javaGenericServices);
                    if (message.pyGenericServices != null && message.hasOwnProperty("pyGenericServices"))
                        writer.uint32(/* id 18, wireType 0 =*/144).bool(message.pyGenericServices);
                    if (message.javaGenerateEqualsAndHash != null && message.hasOwnProperty("javaGenerateEqualsAndHash"))
                        writer.uint32(/* id 20, wireType 0 =*/160).bool(message.javaGenerateEqualsAndHash);
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        writer.uint32(/* id 23, wireType 0 =*/184).bool(message.deprecated);
                    if (message.javaStringCheckUtf8 != null && message.hasOwnProperty("javaStringCheckUtf8"))
                        writer.uint32(/* id 27, wireType 0 =*/216).bool(message.javaStringCheckUtf8);
                    if (message.ccEnableArenas != null && message.hasOwnProperty("ccEnableArenas"))
                        writer.uint32(/* id 31, wireType 0 =*/248).bool(message.ccEnableArenas);
                    if (message.objcClassPrefix != null && message.hasOwnProperty("objcClassPrefix"))
                        writer.uint32(/* id 36, wireType 2 =*/290).string(message.objcClassPrefix);
                    if (message.csharpNamespace != null && message.hasOwnProperty("csharpNamespace"))
                        writer.uint32(/* id 37, wireType 2 =*/298).string(message.csharpNamespace);
                    if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                        for (var i = 0; i < message.uninterpretedOption.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {google.protobuf.IFileOptions} message FileOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FileOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FileOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FileOptions} FileOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FileOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.javaPackage = reader.string();
                            break;
                        case 8:
                            message.javaOuterClassname = reader.string();
                            break;
                        case 10:
                            message.javaMultipleFiles = reader.bool();
                            break;
                        case 20:
                            message.javaGenerateEqualsAndHash = reader.bool();
                            break;
                        case 27:
                            message.javaStringCheckUtf8 = reader.bool();
                            break;
                        case 9:
                            message.optimizeFor = reader.int32();
                            break;
                        case 11:
                            message.goPackage = reader.string();
                            break;
                        case 16:
                            message.ccGenericServices = reader.bool();
                            break;
                        case 17:
                            message.javaGenericServices = reader.bool();
                            break;
                        case 18:
                            message.pyGenericServices = reader.bool();
                            break;
                        case 23:
                            message.deprecated = reader.bool();
                            break;
                        case 31:
                            message.ccEnableArenas = reader.bool();
                            break;
                        case 36:
                            message.objcClassPrefix = reader.string();
                            break;
                        case 37:
                            message.csharpNamespace = reader.string();
                            break;
                        case 999:
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a FileOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FileOptions} FileOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FileOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FileOptions message.
                 * @function verify
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FileOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.javaPackage != null && message.hasOwnProperty("javaPackage"))
                        if (!$util.isString(message.javaPackage))
                            return "javaPackage: string expected";
                    if (message.javaOuterClassname != null && message.hasOwnProperty("javaOuterClassname"))
                        if (!$util.isString(message.javaOuterClassname))
                            return "javaOuterClassname: string expected";
                    if (message.javaMultipleFiles != null && message.hasOwnProperty("javaMultipleFiles"))
                        if (typeof message.javaMultipleFiles !== "boolean")
                            return "javaMultipleFiles: boolean expected";
                    if (message.javaGenerateEqualsAndHash != null && message.hasOwnProperty("javaGenerateEqualsAndHash"))
                        if (typeof message.javaGenerateEqualsAndHash !== "boolean")
                            return "javaGenerateEqualsAndHash: boolean expected";
                    if (message.javaStringCheckUtf8 != null && message.hasOwnProperty("javaStringCheckUtf8"))
                        if (typeof message.javaStringCheckUtf8 !== "boolean")
                            return "javaStringCheckUtf8: boolean expected";
                    if (message.optimizeFor != null && message.hasOwnProperty("optimizeFor"))
                        switch (message.optimizeFor) {
                        default:
                            return "optimizeFor: enum value expected";
                        case 1:
                        case 2:
                        case 3:
                            break;
                        }
                    if (message.goPackage != null && message.hasOwnProperty("goPackage"))
                        if (!$util.isString(message.goPackage))
                            return "goPackage: string expected";
                    if (message.ccGenericServices != null && message.hasOwnProperty("ccGenericServices"))
                        if (typeof message.ccGenericServices !== "boolean")
                            return "ccGenericServices: boolean expected";
                    if (message.javaGenericServices != null && message.hasOwnProperty("javaGenericServices"))
                        if (typeof message.javaGenericServices !== "boolean")
                            return "javaGenericServices: boolean expected";
                    if (message.pyGenericServices != null && message.hasOwnProperty("pyGenericServices"))
                        if (typeof message.pyGenericServices !== "boolean")
                            return "pyGenericServices: boolean expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.ccEnableArenas != null && message.hasOwnProperty("ccEnableArenas"))
                        if (typeof message.ccEnableArenas !== "boolean")
                            return "ccEnableArenas: boolean expected";
                    if (message.objcClassPrefix != null && message.hasOwnProperty("objcClassPrefix"))
                        if (!$util.isString(message.objcClassPrefix))
                            return "objcClassPrefix: string expected";
                    if (message.csharpNamespace != null && message.hasOwnProperty("csharpNamespace"))
                        if (!$util.isString(message.csharpNamespace))
                            return "csharpNamespace: string expected";
                    if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FileOptions} FileOptions
                 */
                FileOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FileOptions)
                        return object;
                    var message = new $root.google.protobuf.FileOptions();
                    if (object.javaPackage != null)
                        message.javaPackage = String(object.javaPackage);
                    if (object.javaOuterClassname != null)
                        message.javaOuterClassname = String(object.javaOuterClassname);
                    if (object.javaMultipleFiles != null)
                        message.javaMultipleFiles = Boolean(object.javaMultipleFiles);
                    if (object.javaGenerateEqualsAndHash != null)
                        message.javaGenerateEqualsAndHash = Boolean(object.javaGenerateEqualsAndHash);
                    if (object.javaStringCheckUtf8 != null)
                        message.javaStringCheckUtf8 = Boolean(object.javaStringCheckUtf8);
                    switch (object.optimizeFor) {
                    case "SPEED":
                    case 1:
                        message.optimizeFor = 1;
                        break;
                    case "CODE_SIZE":
                    case 2:
                        message.optimizeFor = 2;
                        break;
                    case "LITE_RUNTIME":
                    case 3:
                        message.optimizeFor = 3;
                        break;
                    }
                    if (object.goPackage != null)
                        message.goPackage = String(object.goPackage);
                    if (object.ccGenericServices != null)
                        message.ccGenericServices = Boolean(object.ccGenericServices);
                    if (object.javaGenericServices != null)
                        message.javaGenericServices = Boolean(object.javaGenericServices);
                    if (object.pyGenericServices != null)
                        message.pyGenericServices = Boolean(object.pyGenericServices);
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.ccEnableArenas != null)
                        message.ccEnableArenas = Boolean(object.ccEnableArenas);
                    if (object.objcClassPrefix != null)
                        message.objcClassPrefix = String(object.objcClassPrefix);
                    if (object.csharpNamespace != null)
                        message.csharpNamespace = String(object.csharpNamespace);
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.FileOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.FileOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FileOptions
                 * @static
                 * @param {google.protobuf.FileOptions} message FileOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FileOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpretedOption = [];
                    if (options.defaults) {
                        object.javaPackage = "";
                        object.javaOuterClassname = "";
                        object.optimizeFor = options.enums === String ? "SPEED" : 1;
                        object.javaMultipleFiles = false;
                        object.goPackage = "";
                        object.ccGenericServices = false;
                        object.javaGenericServices = false;
                        object.pyGenericServices = false;
                        object.javaGenerateEqualsAndHash = false;
                        object.deprecated = false;
                        object.javaStringCheckUtf8 = false;
                        object.ccEnableArenas = false;
                        object.objcClassPrefix = "";
                        object.csharpNamespace = "";
                    }
                    if (message.javaPackage != null && message.hasOwnProperty("javaPackage"))
                        object.javaPackage = message.javaPackage;
                    if (message.javaOuterClassname != null && message.hasOwnProperty("javaOuterClassname"))
                        object.javaOuterClassname = message.javaOuterClassname;
                    if (message.optimizeFor != null && message.hasOwnProperty("optimizeFor"))
                        object.optimizeFor = options.enums === String ? $root.google.protobuf.FileOptions.OptimizeMode[message.optimizeFor] : message.optimizeFor;
                    if (message.javaMultipleFiles != null && message.hasOwnProperty("javaMultipleFiles"))
                        object.javaMultipleFiles = message.javaMultipleFiles;
                    if (message.goPackage != null && message.hasOwnProperty("goPackage"))
                        object.goPackage = message.goPackage;
                    if (message.ccGenericServices != null && message.hasOwnProperty("ccGenericServices"))
                        object.ccGenericServices = message.ccGenericServices;
                    if (message.javaGenericServices != null && message.hasOwnProperty("javaGenericServices"))
                        object.javaGenericServices = message.javaGenericServices;
                    if (message.pyGenericServices != null && message.hasOwnProperty("pyGenericServices"))
                        object.pyGenericServices = message.pyGenericServices;
                    if (message.javaGenerateEqualsAndHash != null && message.hasOwnProperty("javaGenerateEqualsAndHash"))
                        object.javaGenerateEqualsAndHash = message.javaGenerateEqualsAndHash;
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.javaStringCheckUtf8 != null && message.hasOwnProperty("javaStringCheckUtf8"))
                        object.javaStringCheckUtf8 = message.javaStringCheckUtf8;
                    if (message.ccEnableArenas != null && message.hasOwnProperty("ccEnableArenas"))
                        object.ccEnableArenas = message.ccEnableArenas;
                    if (message.objcClassPrefix != null && message.hasOwnProperty("objcClassPrefix"))
                        object.objcClassPrefix = message.objcClassPrefix;
                    if (message.csharpNamespace != null && message.hasOwnProperty("csharpNamespace"))
                        object.csharpNamespace = message.csharpNamespace;
                    if (message.uninterpretedOption && message.uninterpretedOption.length) {
                        object.uninterpretedOption = [];
                        for (var j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this FileOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FileOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FileOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * OptimizeMode enum.
                 * @name google.protobuf.FileOptions.OptimizeMode
                 * @enum {string}
                 * @property {number} SPEED=1 SPEED value
                 * @property {number} CODE_SIZE=2 CODE_SIZE value
                 * @property {number} LITE_RUNTIME=3 LITE_RUNTIME value
                 */
                FileOptions.OptimizeMode = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[1] = "SPEED"] = 1;
                    values[valuesById[2] = "CODE_SIZE"] = 2;
                    values[valuesById[3] = "LITE_RUNTIME"] = 3;
                    return values;
                })();
    
                return FileOptions;
            })();
    
            protobuf.MessageOptions = (function() {
    
                /**
                 * Properties of a MessageOptions.
                 * @memberof google.protobuf
                 * @interface IMessageOptions
                 * @property {boolean|null} [messageSetWireFormat] MessageOptions messageSetWireFormat
                 * @property {boolean|null} [noStandardDescriptorAccessor] MessageOptions noStandardDescriptorAccessor
                 * @property {boolean|null} [deprecated] MessageOptions deprecated
                 * @property {boolean|null} [mapEntry] MessageOptions mapEntry
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] MessageOptions uninterpretedOption
                 */
    
                /**
                 * Constructs a new MessageOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a MessageOptions.
                 * @implements IMessageOptions
                 * @constructor
                 * @param {google.protobuf.IMessageOptions=} [properties] Properties to set
                 */
                function MessageOptions(properties) {
                    this.uninterpretedOption = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * MessageOptions messageSetWireFormat.
                 * @member {boolean} messageSetWireFormat
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.messageSetWireFormat = false;
    
                /**
                 * MessageOptions noStandardDescriptorAccessor.
                 * @member {boolean} noStandardDescriptorAccessor
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.noStandardDescriptorAccessor = false;
    
                /**
                 * MessageOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.deprecated = false;
    
                /**
                 * MessageOptions mapEntry.
                 * @member {boolean} mapEntry
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.mapEntry = false;
    
                /**
                 * MessageOptions uninterpretedOption.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 */
                MessageOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                /**
                 * Creates a new MessageOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {google.protobuf.IMessageOptions=} [properties] Properties to set
                 * @returns {google.protobuf.MessageOptions} MessageOptions instance
                 */
                MessageOptions.create = function create(properties) {
                    return new MessageOptions(properties);
                };
    
                /**
                 * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {google.protobuf.IMessageOptions} message MessageOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MessageOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.messageSetWireFormat != null && message.hasOwnProperty("messageSetWireFormat"))
                        writer.uint32(/* id 1, wireType 0 =*/8).bool(message.messageSetWireFormat);
                    if (message.noStandardDescriptorAccessor != null && message.hasOwnProperty("noStandardDescriptorAccessor"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.noStandardDescriptorAccessor);
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                    if (message.mapEntry != null && message.hasOwnProperty("mapEntry"))
                        writer.uint32(/* id 7, wireType 0 =*/56).bool(message.mapEntry);
                    if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                        for (var i = 0; i < message.uninterpretedOption.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {google.protobuf.IMessageOptions} message MessageOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MessageOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a MessageOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.MessageOptions} MessageOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MessageOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MessageOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.messageSetWireFormat = reader.bool();
                            break;
                        case 2:
                            message.noStandardDescriptorAccessor = reader.bool();
                            break;
                        case 3:
                            message.deprecated = reader.bool();
                            break;
                        case 7:
                            message.mapEntry = reader.bool();
                            break;
                        case 999:
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.MessageOptions} MessageOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MessageOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a MessageOptions message.
                 * @function verify
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MessageOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.messageSetWireFormat != null && message.hasOwnProperty("messageSetWireFormat"))
                        if (typeof message.messageSetWireFormat !== "boolean")
                            return "messageSetWireFormat: boolean expected";
                    if (message.noStandardDescriptorAccessor != null && message.hasOwnProperty("noStandardDescriptorAccessor"))
                        if (typeof message.noStandardDescriptorAccessor !== "boolean")
                            return "noStandardDescriptorAccessor: boolean expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.mapEntry != null && message.hasOwnProperty("mapEntry"))
                        if (typeof message.mapEntry !== "boolean")
                            return "mapEntry: boolean expected";
                    if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.MessageOptions} MessageOptions
                 */
                MessageOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.MessageOptions)
                        return object;
                    var message = new $root.google.protobuf.MessageOptions();
                    if (object.messageSetWireFormat != null)
                        message.messageSetWireFormat = Boolean(object.messageSetWireFormat);
                    if (object.noStandardDescriptorAccessor != null)
                        message.noStandardDescriptorAccessor = Boolean(object.noStandardDescriptorAccessor);
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.mapEntry != null)
                        message.mapEntry = Boolean(object.mapEntry);
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.MessageOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.MessageOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.MessageOptions
                 * @static
                 * @param {google.protobuf.MessageOptions} message MessageOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MessageOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpretedOption = [];
                    if (options.defaults) {
                        object.messageSetWireFormat = false;
                        object.noStandardDescriptorAccessor = false;
                        object.deprecated = false;
                        object.mapEntry = false;
                    }
                    if (message.messageSetWireFormat != null && message.hasOwnProperty("messageSetWireFormat"))
                        object.messageSetWireFormat = message.messageSetWireFormat;
                    if (message.noStandardDescriptorAccessor != null && message.hasOwnProperty("noStandardDescriptorAccessor"))
                        object.noStandardDescriptorAccessor = message.noStandardDescriptorAccessor;
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.mapEntry != null && message.hasOwnProperty("mapEntry"))
                        object.mapEntry = message.mapEntry;
                    if (message.uninterpretedOption && message.uninterpretedOption.length) {
                        object.uninterpretedOption = [];
                        for (var j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this MessageOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.MessageOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MessageOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return MessageOptions;
            })();
    
            protobuf.FieldOptions = (function() {
    
                /**
                 * Properties of a FieldOptions.
                 * @memberof google.protobuf
                 * @interface IFieldOptions
                 * @property {google.protobuf.FieldOptions.CType|null} [ctype] FieldOptions ctype
                 * @property {boolean|null} [packed] FieldOptions packed
                 * @property {google.protobuf.FieldOptions.JSType|null} [jstype] FieldOptions jstype
                 * @property {boolean|null} [lazy] FieldOptions lazy
                 * @property {boolean|null} [deprecated] FieldOptions deprecated
                 * @property {boolean|null} [weak] FieldOptions weak
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] FieldOptions uninterpretedOption
                 */
    
                /**
                 * Constructs a new FieldOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a FieldOptions.
                 * @implements IFieldOptions
                 * @constructor
                 * @param {google.protobuf.IFieldOptions=} [properties] Properties to set
                 */
                function FieldOptions(properties) {
                    this.uninterpretedOption = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FieldOptions ctype.
                 * @member {google.protobuf.FieldOptions.CType} ctype
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.ctype = 0;
    
                /**
                 * FieldOptions packed.
                 * @member {boolean} packed
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.packed = false;
    
                /**
                 * FieldOptions jstype.
                 * @member {google.protobuf.FieldOptions.JSType} jstype
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.jstype = 0;
    
                /**
                 * FieldOptions lazy.
                 * @member {boolean} lazy
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.lazy = false;
    
                /**
                 * FieldOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.deprecated = false;
    
                /**
                 * FieldOptions weak.
                 * @member {boolean} weak
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.weak = false;
    
                /**
                 * FieldOptions uninterpretedOption.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 */
                FieldOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                /**
                 * Creates a new FieldOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {google.protobuf.IFieldOptions=} [properties] Properties to set
                 * @returns {google.protobuf.FieldOptions} FieldOptions instance
                 */
                FieldOptions.create = function create(properties) {
                    return new FieldOptions(properties);
                };
    
                /**
                 * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {google.protobuf.IFieldOptions} message FieldOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.ctype != null && message.hasOwnProperty("ctype"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ctype);
                    if (message.packed != null && message.hasOwnProperty("packed"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.packed);
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                    if (message.lazy != null && message.hasOwnProperty("lazy"))
                        writer.uint32(/* id 5, wireType 0 =*/40).bool(message.lazy);
                    if (message.jstype != null && message.hasOwnProperty("jstype"))
                        writer.uint32(/* id 6, wireType 0 =*/48).int32(message.jstype);
                    if (message.weak != null && message.hasOwnProperty("weak"))
                        writer.uint32(/* id 10, wireType 0 =*/80).bool(message.weak);
                    if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                        for (var i = 0; i < message.uninterpretedOption.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {google.protobuf.IFieldOptions} message FieldOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FieldOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FieldOptions} FieldOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FieldOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.ctype = reader.int32();
                            break;
                        case 2:
                            message.packed = reader.bool();
                            break;
                        case 6:
                            message.jstype = reader.int32();
                            break;
                        case 5:
                            message.lazy = reader.bool();
                            break;
                        case 3:
                            message.deprecated = reader.bool();
                            break;
                        case 10:
                            message.weak = reader.bool();
                            break;
                        case 999:
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FieldOptions} FieldOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FieldOptions message.
                 * @function verify
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FieldOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.ctype != null && message.hasOwnProperty("ctype"))
                        switch (message.ctype) {
                        default:
                            return "ctype: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    if (message.packed != null && message.hasOwnProperty("packed"))
                        if (typeof message.packed !== "boolean")
                            return "packed: boolean expected";
                    if (message.jstype != null && message.hasOwnProperty("jstype"))
                        switch (message.jstype) {
                        default:
                            return "jstype: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    if (message.lazy != null && message.hasOwnProperty("lazy"))
                        if (typeof message.lazy !== "boolean")
                            return "lazy: boolean expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.weak != null && message.hasOwnProperty("weak"))
                        if (typeof message.weak !== "boolean")
                            return "weak: boolean expected";
                    if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FieldOptions} FieldOptions
                 */
                FieldOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FieldOptions)
                        return object;
                    var message = new $root.google.protobuf.FieldOptions();
                    switch (object.ctype) {
                    case "STRING":
                    case 0:
                        message.ctype = 0;
                        break;
                    case "CORD":
                    case 1:
                        message.ctype = 1;
                        break;
                    case "STRING_PIECE":
                    case 2:
                        message.ctype = 2;
                        break;
                    }
                    if (object.packed != null)
                        message.packed = Boolean(object.packed);
                    switch (object.jstype) {
                    case "JS_NORMAL":
                    case 0:
                        message.jstype = 0;
                        break;
                    case "JS_STRING":
                    case 1:
                        message.jstype = 1;
                        break;
                    case "JS_NUMBER":
                    case 2:
                        message.jstype = 2;
                        break;
                    }
                    if (object.lazy != null)
                        message.lazy = Boolean(object.lazy);
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.weak != null)
                        message.weak = Boolean(object.weak);
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.FieldOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.FieldOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FieldOptions
                 * @static
                 * @param {google.protobuf.FieldOptions} message FieldOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FieldOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpretedOption = [];
                    if (options.defaults) {
                        object.ctype = options.enums === String ? "STRING" : 0;
                        object.packed = false;
                        object.deprecated = false;
                        object.lazy = false;
                        object.jstype = options.enums === String ? "JS_NORMAL" : 0;
                        object.weak = false;
                    }
                    if (message.ctype != null && message.hasOwnProperty("ctype"))
                        object.ctype = options.enums === String ? $root.google.protobuf.FieldOptions.CType[message.ctype] : message.ctype;
                    if (message.packed != null && message.hasOwnProperty("packed"))
                        object.packed = message.packed;
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.lazy != null && message.hasOwnProperty("lazy"))
                        object.lazy = message.lazy;
                    if (message.jstype != null && message.hasOwnProperty("jstype"))
                        object.jstype = options.enums === String ? $root.google.protobuf.FieldOptions.JSType[message.jstype] : message.jstype;
                    if (message.weak != null && message.hasOwnProperty("weak"))
                        object.weak = message.weak;
                    if (message.uninterpretedOption && message.uninterpretedOption.length) {
                        object.uninterpretedOption = [];
                        for (var j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this FieldOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FieldOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FieldOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                /**
                 * CType enum.
                 * @name google.protobuf.FieldOptions.CType
                 * @enum {string}
                 * @property {number} STRING=0 STRING value
                 * @property {number} CORD=1 CORD value
                 * @property {number} STRING_PIECE=2 STRING_PIECE value
                 */
                FieldOptions.CType = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "STRING"] = 0;
                    values[valuesById[1] = "CORD"] = 1;
                    values[valuesById[2] = "STRING_PIECE"] = 2;
                    return values;
                })();
    
                /**
                 * JSType enum.
                 * @name google.protobuf.FieldOptions.JSType
                 * @enum {string}
                 * @property {number} JS_NORMAL=0 JS_NORMAL value
                 * @property {number} JS_STRING=1 JS_STRING value
                 * @property {number} JS_NUMBER=2 JS_NUMBER value
                 */
                FieldOptions.JSType = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "JS_NORMAL"] = 0;
                    values[valuesById[1] = "JS_STRING"] = 1;
                    values[valuesById[2] = "JS_NUMBER"] = 2;
                    return values;
                })();
    
                return FieldOptions;
            })();
    
            protobuf.OneofOptions = (function() {
    
                /**
                 * Properties of an OneofOptions.
                 * @memberof google.protobuf
                 * @interface IOneofOptions
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] OneofOptions uninterpretedOption
                 */
    
                /**
                 * Constructs a new OneofOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents an OneofOptions.
                 * @implements IOneofOptions
                 * @constructor
                 * @param {google.protobuf.IOneofOptions=} [properties] Properties to set
                 */
                function OneofOptions(properties) {
                    this.uninterpretedOption = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * OneofOptions uninterpretedOption.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
                 * @memberof google.protobuf.OneofOptions
                 * @instance
                 */
                OneofOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                /**
                 * Creates a new OneofOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {google.protobuf.IOneofOptions=} [properties] Properties to set
                 * @returns {google.protobuf.OneofOptions} OneofOptions instance
                 */
                OneofOptions.create = function create(properties) {
                    return new OneofOptions(properties);
                };
    
                /**
                 * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {google.protobuf.IOneofOptions} message OneofOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OneofOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                        for (var i = 0; i < message.uninterpretedOption.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {google.protobuf.IOneofOptions} message OneofOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                OneofOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an OneofOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.OneofOptions} OneofOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OneofOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.OneofOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 999:
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.OneofOptions} OneofOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                OneofOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an OneofOptions message.
                 * @function verify
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                OneofOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.OneofOptions} OneofOptions
                 */
                OneofOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.OneofOptions)
                        return object;
                    var message = new $root.google.protobuf.OneofOptions();
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.OneofOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.OneofOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.OneofOptions
                 * @static
                 * @param {google.protobuf.OneofOptions} message OneofOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                OneofOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpretedOption = [];
                    if (message.uninterpretedOption && message.uninterpretedOption.length) {
                        object.uninterpretedOption = [];
                        for (var j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this OneofOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.OneofOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                OneofOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return OneofOptions;
            })();
    
            protobuf.EnumOptions = (function() {
    
                /**
                 * Properties of an EnumOptions.
                 * @memberof google.protobuf
                 * @interface IEnumOptions
                 * @property {boolean|null} [allowAlias] EnumOptions allowAlias
                 * @property {boolean|null} [deprecated] EnumOptions deprecated
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] EnumOptions uninterpretedOption
                 */
    
                /**
                 * Constructs a new EnumOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents an EnumOptions.
                 * @implements IEnumOptions
                 * @constructor
                 * @param {google.protobuf.IEnumOptions=} [properties] Properties to set
                 */
                function EnumOptions(properties) {
                    this.uninterpretedOption = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * EnumOptions allowAlias.
                 * @member {boolean} allowAlias
                 * @memberof google.protobuf.EnumOptions
                 * @instance
                 */
                EnumOptions.prototype.allowAlias = false;
    
                /**
                 * EnumOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.EnumOptions
                 * @instance
                 */
                EnumOptions.prototype.deprecated = false;
    
                /**
                 * EnumOptions uninterpretedOption.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
                 * @memberof google.protobuf.EnumOptions
                 * @instance
                 */
                EnumOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                /**
                 * Creates a new EnumOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {google.protobuf.IEnumOptions=} [properties] Properties to set
                 * @returns {google.protobuf.EnumOptions} EnumOptions instance
                 */
                EnumOptions.create = function create(properties) {
                    return new EnumOptions(properties);
                };
    
                /**
                 * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {google.protobuf.IEnumOptions} message EnumOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.allowAlias != null && message.hasOwnProperty("allowAlias"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.allowAlias);
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deprecated);
                    if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                        for (var i = 0; i < message.uninterpretedOption.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {google.protobuf.IEnumOptions} message EnumOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an EnumOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.EnumOptions} EnumOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 2:
                            message.allowAlias = reader.bool();
                            break;
                        case 3:
                            message.deprecated = reader.bool();
                            break;
                        case 999:
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.EnumOptions} EnumOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an EnumOptions message.
                 * @function verify
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EnumOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.allowAlias != null && message.hasOwnProperty("allowAlias"))
                        if (typeof message.allowAlias !== "boolean")
                            return "allowAlias: boolean expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumOptions} EnumOptions
                 */
                EnumOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.EnumOptions)
                        return object;
                    var message = new $root.google.protobuf.EnumOptions();
                    if (object.allowAlias != null)
                        message.allowAlias = Boolean(object.allowAlias);
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.EnumOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.EnumOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.EnumOptions
                 * @static
                 * @param {google.protobuf.EnumOptions} message EnumOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpretedOption = [];
                    if (options.defaults) {
                        object.allowAlias = false;
                        object.deprecated = false;
                    }
                    if (message.allowAlias != null && message.hasOwnProperty("allowAlias"))
                        object.allowAlias = message.allowAlias;
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.uninterpretedOption && message.uninterpretedOption.length) {
                        object.uninterpretedOption = [];
                        for (var j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this EnumOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.EnumOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EnumOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return EnumOptions;
            })();
    
            protobuf.EnumValueOptions = (function() {
    
                /**
                 * Properties of an EnumValueOptions.
                 * @memberof google.protobuf
                 * @interface IEnumValueOptions
                 * @property {boolean|null} [deprecated] EnumValueOptions deprecated
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] EnumValueOptions uninterpretedOption
                 */
    
                /**
                 * Constructs a new EnumValueOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents an EnumValueOptions.
                 * @implements IEnumValueOptions
                 * @constructor
                 * @param {google.protobuf.IEnumValueOptions=} [properties] Properties to set
                 */
                function EnumValueOptions(properties) {
                    this.uninterpretedOption = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * EnumValueOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.EnumValueOptions
                 * @instance
                 */
                EnumValueOptions.prototype.deprecated = false;
    
                /**
                 * EnumValueOptions uninterpretedOption.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
                 * @memberof google.protobuf.EnumValueOptions
                 * @instance
                 */
                EnumValueOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                /**
                 * Creates a new EnumValueOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {google.protobuf.IEnumValueOptions=} [properties] Properties to set
                 * @returns {google.protobuf.EnumValueOptions} EnumValueOptions instance
                 */
                EnumValueOptions.create = function create(properties) {
                    return new EnumValueOptions(properties);
                };
    
                /**
                 * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {google.protobuf.IEnumValueOptions} message EnumValueOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumValueOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        writer.uint32(/* id 1, wireType 0 =*/8).bool(message.deprecated);
                    if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                        for (var i = 0; i < message.uninterpretedOption.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {google.protobuf.IEnumValueOptions} message EnumValueOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                EnumValueOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an EnumValueOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumValueOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.EnumValueOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.deprecated = reader.bool();
                            break;
                        case 999:
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                EnumValueOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an EnumValueOptions message.
                 * @function verify
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                EnumValueOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.EnumValueOptions} EnumValueOptions
                 */
                EnumValueOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.EnumValueOptions)
                        return object;
                    var message = new $root.google.protobuf.EnumValueOptions();
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.EnumValueOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.EnumValueOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.EnumValueOptions
                 * @static
                 * @param {google.protobuf.EnumValueOptions} message EnumValueOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                EnumValueOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpretedOption = [];
                    if (options.defaults)
                        object.deprecated = false;
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.uninterpretedOption && message.uninterpretedOption.length) {
                        object.uninterpretedOption = [];
                        for (var j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this EnumValueOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.EnumValueOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                EnumValueOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return EnumValueOptions;
            })();
    
            protobuf.ServiceOptions = (function() {
    
                /**
                 * Properties of a ServiceOptions.
                 * @memberof google.protobuf
                 * @interface IServiceOptions
                 * @property {boolean|null} [deprecated] ServiceOptions deprecated
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] ServiceOptions uninterpretedOption
                 */
    
                /**
                 * Constructs a new ServiceOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a ServiceOptions.
                 * @implements IServiceOptions
                 * @constructor
                 * @param {google.protobuf.IServiceOptions=} [properties] Properties to set
                 */
                function ServiceOptions(properties) {
                    this.uninterpretedOption = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * ServiceOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.ServiceOptions
                 * @instance
                 */
                ServiceOptions.prototype.deprecated = false;
    
                /**
                 * ServiceOptions uninterpretedOption.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
                 * @memberof google.protobuf.ServiceOptions
                 * @instance
                 */
                ServiceOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                /**
                 * Creates a new ServiceOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {google.protobuf.IServiceOptions=} [properties] Properties to set
                 * @returns {google.protobuf.ServiceOptions} ServiceOptions instance
                 */
                ServiceOptions.create = function create(properties) {
                    return new ServiceOptions(properties);
                };
    
                /**
                 * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {google.protobuf.IServiceOptions} message ServiceOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ServiceOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        writer.uint32(/* id 33, wireType 0 =*/264).bool(message.deprecated);
                    if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                        for (var i = 0; i < message.uninterpretedOption.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {google.protobuf.IServiceOptions} message ServiceOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                ServiceOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a ServiceOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.ServiceOptions} ServiceOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ServiceOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.ServiceOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 33:
                            message.deprecated = reader.bool();
                            break;
                        case 999:
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.ServiceOptions} ServiceOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                ServiceOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a ServiceOptions message.
                 * @function verify
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                ServiceOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.ServiceOptions} ServiceOptions
                 */
                ServiceOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.ServiceOptions)
                        return object;
                    var message = new $root.google.protobuf.ServiceOptions();
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.ServiceOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.ServiceOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.ServiceOptions
                 * @static
                 * @param {google.protobuf.ServiceOptions} message ServiceOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                ServiceOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpretedOption = [];
                    if (options.defaults)
                        object.deprecated = false;
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.uninterpretedOption && message.uninterpretedOption.length) {
                        object.uninterpretedOption = [];
                        for (var j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this ServiceOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.ServiceOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                ServiceOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return ServiceOptions;
            })();
    
            protobuf.MethodOptions = (function() {
    
                /**
                 * Properties of a MethodOptions.
                 * @memberof google.protobuf
                 * @interface IMethodOptions
                 * @property {boolean|null} [deprecated] MethodOptions deprecated
                 * @property {Array.<google.protobuf.IUninterpretedOption>|null} [uninterpretedOption] MethodOptions uninterpretedOption
                 * @property {google.api.IHttpRule|null} [".google.api.http"] MethodOptions .google.api.http
                 */
    
                /**
                 * Constructs a new MethodOptions.
                 * @memberof google.protobuf
                 * @classdesc Represents a MethodOptions.
                 * @implements IMethodOptions
                 * @constructor
                 * @param {google.protobuf.IMethodOptions=} [properties] Properties to set
                 */
                function MethodOptions(properties) {
                    this.uninterpretedOption = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * MethodOptions deprecated.
                 * @member {boolean} deprecated
                 * @memberof google.protobuf.MethodOptions
                 * @instance
                 */
                MethodOptions.prototype.deprecated = false;
    
                /**
                 * MethodOptions uninterpretedOption.
                 * @member {Array.<google.protobuf.IUninterpretedOption>} uninterpretedOption
                 * @memberof google.protobuf.MethodOptions
                 * @instance
                 */
                MethodOptions.prototype.uninterpretedOption = $util.emptyArray;
    
                /**
                 * MethodOptions .google.api.http.
                 * @member {google.api.IHttpRule|null|undefined} .google.api.http
                 * @memberof google.protobuf.MethodOptions
                 * @instance
                 */
                MethodOptions.prototype[".google.api.http"] = null;
    
                /**
                 * Creates a new MethodOptions instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {google.protobuf.IMethodOptions=} [properties] Properties to set
                 * @returns {google.protobuf.MethodOptions} MethodOptions instance
                 */
                MethodOptions.create = function create(properties) {
                    return new MethodOptions(properties);
                };
    
                /**
                 * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {google.protobuf.IMethodOptions} message MethodOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MethodOptions.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        writer.uint32(/* id 33, wireType 0 =*/264).bool(message.deprecated);
                    if (message.uninterpretedOption != null && message.uninterpretedOption.length)
                        for (var i = 0; i < message.uninterpretedOption.length; ++i)
                            $root.google.protobuf.UninterpretedOption.encode(message.uninterpretedOption[i], writer.uint32(/* id 999, wireType 2 =*/7994).fork()).ldelim();
                    if (message[".google.api.http"] != null && message.hasOwnProperty(".google.api.http"))
                        $root.google.api.HttpRule.encode(message[".google.api.http"], writer.uint32(/* id 72295728, wireType 2 =*/578365826).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {google.protobuf.IMethodOptions} message MethodOptions message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                MethodOptions.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a MethodOptions message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.MethodOptions} MethodOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MethodOptions.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.MethodOptions();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 33:
                            message.deprecated = reader.bool();
                            break;
                        case 999:
                            if (!(message.uninterpretedOption && message.uninterpretedOption.length))
                                message.uninterpretedOption = [];
                            message.uninterpretedOption.push($root.google.protobuf.UninterpretedOption.decode(reader, reader.uint32()));
                            break;
                        case 72295728:
                            message[".google.api.http"] = $root.google.api.HttpRule.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.MethodOptions} MethodOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                MethodOptions.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a MethodOptions message.
                 * @function verify
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                MethodOptions.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        if (typeof message.deprecated !== "boolean")
                            return "deprecated: boolean expected";
                    if (message.uninterpretedOption != null && message.hasOwnProperty("uninterpretedOption")) {
                        if (!Array.isArray(message.uninterpretedOption))
                            return "uninterpretedOption: array expected";
                        for (var i = 0; i < message.uninterpretedOption.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.verify(message.uninterpretedOption[i]);
                            if (error)
                                return "uninterpretedOption." + error;
                        }
                    }
                    if (message[".google.api.http"] != null && message.hasOwnProperty(".google.api.http")) {
                        var error = $root.google.api.HttpRule.verify(message[".google.api.http"]);
                        if (error)
                            return ".google.api.http." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.MethodOptions} MethodOptions
                 */
                MethodOptions.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.MethodOptions)
                        return object;
                    var message = new $root.google.protobuf.MethodOptions();
                    if (object.deprecated != null)
                        message.deprecated = Boolean(object.deprecated);
                    if (object.uninterpretedOption) {
                        if (!Array.isArray(object.uninterpretedOption))
                            throw TypeError(".google.protobuf.MethodOptions.uninterpretedOption: array expected");
                        message.uninterpretedOption = [];
                        for (var i = 0; i < object.uninterpretedOption.length; ++i) {
                            if (typeof object.uninterpretedOption[i] !== "object")
                                throw TypeError(".google.protobuf.MethodOptions.uninterpretedOption: object expected");
                            message.uninterpretedOption[i] = $root.google.protobuf.UninterpretedOption.fromObject(object.uninterpretedOption[i]);
                        }
                    }
                    if (object[".google.api.http"] != null) {
                        if (typeof object[".google.api.http"] !== "object")
                            throw TypeError(".google.protobuf.MethodOptions..google.api.http: object expected");
                        message[".google.api.http"] = $root.google.api.HttpRule.fromObject(object[".google.api.http"]);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.MethodOptions
                 * @static
                 * @param {google.protobuf.MethodOptions} message MethodOptions
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                MethodOptions.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.uninterpretedOption = [];
                    if (options.defaults) {
                        object.deprecated = false;
                        object[".google.api.http"] = null;
                    }
                    if (message.deprecated != null && message.hasOwnProperty("deprecated"))
                        object.deprecated = message.deprecated;
                    if (message.uninterpretedOption && message.uninterpretedOption.length) {
                        object.uninterpretedOption = [];
                        for (var j = 0; j < message.uninterpretedOption.length; ++j)
                            object.uninterpretedOption[j] = $root.google.protobuf.UninterpretedOption.toObject(message.uninterpretedOption[j], options);
                    }
                    if (message[".google.api.http"] != null && message.hasOwnProperty(".google.api.http"))
                        object[".google.api.http"] = $root.google.api.HttpRule.toObject(message[".google.api.http"], options);
                    return object;
                };
    
                /**
                 * Converts this MethodOptions to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.MethodOptions
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                MethodOptions.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return MethodOptions;
            })();
    
            protobuf.UninterpretedOption = (function() {
    
                /**
                 * Properties of an UninterpretedOption.
                 * @memberof google.protobuf
                 * @interface IUninterpretedOption
                 * @property {Array.<google.protobuf.UninterpretedOption.INamePart>|null} [name] UninterpretedOption name
                 * @property {string|null} [identifierValue] UninterpretedOption identifierValue
                 * @property {number|Long|null} [positiveIntValue] UninterpretedOption positiveIntValue
                 * @property {number|Long|null} [negativeIntValue] UninterpretedOption negativeIntValue
                 * @property {number|null} [doubleValue] UninterpretedOption doubleValue
                 * @property {Uint8Array|null} [stringValue] UninterpretedOption stringValue
                 * @property {string|null} [aggregateValue] UninterpretedOption aggregateValue
                 */
    
                /**
                 * Constructs a new UninterpretedOption.
                 * @memberof google.protobuf
                 * @classdesc Represents an UninterpretedOption.
                 * @implements IUninterpretedOption
                 * @constructor
                 * @param {google.protobuf.IUninterpretedOption=} [properties] Properties to set
                 */
                function UninterpretedOption(properties) {
                    this.name = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * UninterpretedOption name.
                 * @member {Array.<google.protobuf.UninterpretedOption.INamePart>} name
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.name = $util.emptyArray;
    
                /**
                 * UninterpretedOption identifierValue.
                 * @member {string} identifierValue
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.identifierValue = "";
    
                /**
                 * UninterpretedOption positiveIntValue.
                 * @member {number|Long} positiveIntValue
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.positiveIntValue = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
                /**
                 * UninterpretedOption negativeIntValue.
                 * @member {number|Long} negativeIntValue
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.negativeIntValue = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                /**
                 * UninterpretedOption doubleValue.
                 * @member {number} doubleValue
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.doubleValue = 0;
    
                /**
                 * UninterpretedOption stringValue.
                 * @member {Uint8Array} stringValue
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.stringValue = $util.newBuffer([]);
    
                /**
                 * UninterpretedOption aggregateValue.
                 * @member {string} aggregateValue
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 */
                UninterpretedOption.prototype.aggregateValue = "";
    
                /**
                 * Creates a new UninterpretedOption instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {google.protobuf.IUninterpretedOption=} [properties] Properties to set
                 * @returns {google.protobuf.UninterpretedOption} UninterpretedOption instance
                 */
                UninterpretedOption.create = function create(properties) {
                    return new UninterpretedOption(properties);
                };
    
                /**
                 * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {google.protobuf.IUninterpretedOption} message UninterpretedOption message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UninterpretedOption.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.name != null && message.name.length)
                        for (var i = 0; i < message.name.length; ++i)
                            $root.google.protobuf.UninterpretedOption.NamePart.encode(message.name[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                    if (message.identifierValue != null && message.hasOwnProperty("identifierValue"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.identifierValue);
                    if (message.positiveIntValue != null && message.hasOwnProperty("positiveIntValue"))
                        writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.positiveIntValue);
                    if (message.negativeIntValue != null && message.hasOwnProperty("negativeIntValue"))
                        writer.uint32(/* id 5, wireType 0 =*/40).int64(message.negativeIntValue);
                    if (message.doubleValue != null && message.hasOwnProperty("doubleValue"))
                        writer.uint32(/* id 6, wireType 1 =*/49).double(message.doubleValue);
                    if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                        writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.stringValue);
                    if (message.aggregateValue != null && message.hasOwnProperty("aggregateValue"))
                        writer.uint32(/* id 8, wireType 2 =*/66).string(message.aggregateValue);
                    return writer;
                };
    
                /**
                 * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {google.protobuf.IUninterpretedOption} message UninterpretedOption message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UninterpretedOption.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an UninterpretedOption message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UninterpretedOption.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UninterpretedOption();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 2:
                            if (!(message.name && message.name.length))
                                message.name = [];
                            message.name.push($root.google.protobuf.UninterpretedOption.NamePart.decode(reader, reader.uint32()));
                            break;
                        case 3:
                            message.identifierValue = reader.string();
                            break;
                        case 4:
                            message.positiveIntValue = reader.uint64();
                            break;
                        case 5:
                            message.negativeIntValue = reader.int64();
                            break;
                        case 6:
                            message.doubleValue = reader.double();
                            break;
                        case 7:
                            message.stringValue = reader.bytes();
                            break;
                        case 8:
                            message.aggregateValue = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UninterpretedOption.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an UninterpretedOption message.
                 * @function verify
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                UninterpretedOption.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.name != null && message.hasOwnProperty("name")) {
                        if (!Array.isArray(message.name))
                            return "name: array expected";
                        for (var i = 0; i < message.name.length; ++i) {
                            var error = $root.google.protobuf.UninterpretedOption.NamePart.verify(message.name[i]);
                            if (error)
                                return "name." + error;
                        }
                    }
                    if (message.identifierValue != null && message.hasOwnProperty("identifierValue"))
                        if (!$util.isString(message.identifierValue))
                            return "identifierValue: string expected";
                    if (message.positiveIntValue != null && message.hasOwnProperty("positiveIntValue"))
                        if (!$util.isInteger(message.positiveIntValue) && !(message.positiveIntValue && $util.isInteger(message.positiveIntValue.low) && $util.isInteger(message.positiveIntValue.high)))
                            return "positiveIntValue: integer|Long expected";
                    if (message.negativeIntValue != null && message.hasOwnProperty("negativeIntValue"))
                        if (!$util.isInteger(message.negativeIntValue) && !(message.negativeIntValue && $util.isInteger(message.negativeIntValue.low) && $util.isInteger(message.negativeIntValue.high)))
                            return "negativeIntValue: integer|Long expected";
                    if (message.doubleValue != null && message.hasOwnProperty("doubleValue"))
                        if (typeof message.doubleValue !== "number")
                            return "doubleValue: number expected";
                    if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                        if (!(message.stringValue && typeof message.stringValue.length === "number" || $util.isString(message.stringValue)))
                            return "stringValue: buffer expected";
                    if (message.aggregateValue != null && message.hasOwnProperty("aggregateValue"))
                        if (!$util.isString(message.aggregateValue))
                            return "aggregateValue: string expected";
                    return null;
                };
    
                /**
                 * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.UninterpretedOption} UninterpretedOption
                 */
                UninterpretedOption.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.UninterpretedOption)
                        return object;
                    var message = new $root.google.protobuf.UninterpretedOption();
                    if (object.name) {
                        if (!Array.isArray(object.name))
                            throw TypeError(".google.protobuf.UninterpretedOption.name: array expected");
                        message.name = [];
                        for (var i = 0; i < object.name.length; ++i) {
                            if (typeof object.name[i] !== "object")
                                throw TypeError(".google.protobuf.UninterpretedOption.name: object expected");
                            message.name[i] = $root.google.protobuf.UninterpretedOption.NamePart.fromObject(object.name[i]);
                        }
                    }
                    if (object.identifierValue != null)
                        message.identifierValue = String(object.identifierValue);
                    if (object.positiveIntValue != null)
                        if ($util.Long)
                            (message.positiveIntValue = $util.Long.fromValue(object.positiveIntValue)).unsigned = true;
                        else if (typeof object.positiveIntValue === "string")
                            message.positiveIntValue = parseInt(object.positiveIntValue, 10);
                        else if (typeof object.positiveIntValue === "number")
                            message.positiveIntValue = object.positiveIntValue;
                        else if (typeof object.positiveIntValue === "object")
                            message.positiveIntValue = new $util.LongBits(object.positiveIntValue.low >>> 0, object.positiveIntValue.high >>> 0).toNumber(true);
                    if (object.negativeIntValue != null)
                        if ($util.Long)
                            (message.negativeIntValue = $util.Long.fromValue(object.negativeIntValue)).unsigned = false;
                        else if (typeof object.negativeIntValue === "string")
                            message.negativeIntValue = parseInt(object.negativeIntValue, 10);
                        else if (typeof object.negativeIntValue === "number")
                            message.negativeIntValue = object.negativeIntValue;
                        else if (typeof object.negativeIntValue === "object")
                            message.negativeIntValue = new $util.LongBits(object.negativeIntValue.low >>> 0, object.negativeIntValue.high >>> 0).toNumber();
                    if (object.doubleValue != null)
                        message.doubleValue = Number(object.doubleValue);
                    if (object.stringValue != null)
                        if (typeof object.stringValue === "string")
                            $util.base64.decode(object.stringValue, message.stringValue = $util.newBuffer($util.base64.length(object.stringValue)), 0);
                        else if (object.stringValue.length)
                            message.stringValue = object.stringValue;
                    if (object.aggregateValue != null)
                        message.aggregateValue = String(object.aggregateValue);
                    return message;
                };
    
                /**
                 * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.UninterpretedOption
                 * @static
                 * @param {google.protobuf.UninterpretedOption} message UninterpretedOption
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UninterpretedOption.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.name = [];
                    if (options.defaults) {
                        object.identifierValue = "";
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.positiveIntValue = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.positiveIntValue = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.negativeIntValue = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.negativeIntValue = options.longs === String ? "0" : 0;
                        object.doubleValue = 0;
                        if (options.bytes === String)
                            object.stringValue = "";
                        else {
                            object.stringValue = [];
                            if (options.bytes !== Array)
                                object.stringValue = $util.newBuffer(object.stringValue);
                        }
                        object.aggregateValue = "";
                    }
                    if (message.name && message.name.length) {
                        object.name = [];
                        for (var j = 0; j < message.name.length; ++j)
                            object.name[j] = $root.google.protobuf.UninterpretedOption.NamePart.toObject(message.name[j], options);
                    }
                    if (message.identifierValue != null && message.hasOwnProperty("identifierValue"))
                        object.identifierValue = message.identifierValue;
                    if (message.positiveIntValue != null && message.hasOwnProperty("positiveIntValue"))
                        if (typeof message.positiveIntValue === "number")
                            object.positiveIntValue = options.longs === String ? String(message.positiveIntValue) : message.positiveIntValue;
                        else
                            object.positiveIntValue = options.longs === String ? $util.Long.prototype.toString.call(message.positiveIntValue) : options.longs === Number ? new $util.LongBits(message.positiveIntValue.low >>> 0, message.positiveIntValue.high >>> 0).toNumber(true) : message.positiveIntValue;
                    if (message.negativeIntValue != null && message.hasOwnProperty("negativeIntValue"))
                        if (typeof message.negativeIntValue === "number")
                            object.negativeIntValue = options.longs === String ? String(message.negativeIntValue) : message.negativeIntValue;
                        else
                            object.negativeIntValue = options.longs === String ? $util.Long.prototype.toString.call(message.negativeIntValue) : options.longs === Number ? new $util.LongBits(message.negativeIntValue.low >>> 0, message.negativeIntValue.high >>> 0).toNumber() : message.negativeIntValue;
                    if (message.doubleValue != null && message.hasOwnProperty("doubleValue"))
                        object.doubleValue = options.json && !isFinite(message.doubleValue) ? String(message.doubleValue) : message.doubleValue;
                    if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                        object.stringValue = options.bytes === String ? $util.base64.encode(message.stringValue, 0, message.stringValue.length) : options.bytes === Array ? Array.prototype.slice.call(message.stringValue) : message.stringValue;
                    if (message.aggregateValue != null && message.hasOwnProperty("aggregateValue"))
                        object.aggregateValue = message.aggregateValue;
                    return object;
                };
    
                /**
                 * Converts this UninterpretedOption to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.UninterpretedOption
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UninterpretedOption.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                UninterpretedOption.NamePart = (function() {
    
                    /**
                     * Properties of a NamePart.
                     * @memberof google.protobuf.UninterpretedOption
                     * @interface INamePart
                     * @property {string} namePart NamePart namePart
                     * @property {boolean} isExtension NamePart isExtension
                     */
    
                    /**
                     * Constructs a new NamePart.
                     * @memberof google.protobuf.UninterpretedOption
                     * @classdesc Represents a NamePart.
                     * @implements INamePart
                     * @constructor
                     * @param {google.protobuf.UninterpretedOption.INamePart=} [properties] Properties to set
                     */
                    function NamePart(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * NamePart namePart.
                     * @member {string} namePart
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @instance
                     */
                    NamePart.prototype.namePart = "";
    
                    /**
                     * NamePart isExtension.
                     * @member {boolean} isExtension
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @instance
                     */
                    NamePart.prototype.isExtension = false;
    
                    /**
                     * Creates a new NamePart instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {google.protobuf.UninterpretedOption.INamePart=} [properties] Properties to set
                     * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart instance
                     */
                    NamePart.create = function create(properties) {
                        return new NamePart(properties);
                    };
    
                    /**
                     * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {google.protobuf.UninterpretedOption.INamePart} message NamePart message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    NamePart.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.namePart);
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isExtension);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {google.protobuf.UninterpretedOption.INamePart} message NamePart message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    NamePart.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a NamePart message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    NamePart.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UninterpretedOption.NamePart();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.namePart = reader.string();
                                break;
                            case 2:
                                message.isExtension = reader.bool();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        if (!message.hasOwnProperty("namePart"))
                            throw $util.ProtocolError("missing required 'namePart'", { instance: message });
                        if (!message.hasOwnProperty("isExtension"))
                            throw $util.ProtocolError("missing required 'isExtension'", { instance: message });
                        return message;
                    };
    
                    /**
                     * Decodes a NamePart message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    NamePart.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a NamePart message.
                     * @function verify
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    NamePart.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (!$util.isString(message.namePart))
                            return "namePart: string expected";
                        if (typeof message.isExtension !== "boolean")
                            return "isExtension: boolean expected";
                        return null;
                    };
    
                    /**
                     * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.UninterpretedOption.NamePart} NamePart
                     */
                    NamePart.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.protobuf.UninterpretedOption.NamePart)
                            return object;
                        var message = new $root.google.protobuf.UninterpretedOption.NamePart();
                        if (object.namePart != null)
                            message.namePart = String(object.namePart);
                        if (object.isExtension != null)
                            message.isExtension = Boolean(object.isExtension);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @static
                     * @param {google.protobuf.UninterpretedOption.NamePart} message NamePart
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    NamePart.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.namePart = "";
                            object.isExtension = false;
                        }
                        if (message.namePart != null && message.hasOwnProperty("namePart"))
                            object.namePart = message.namePart;
                        if (message.isExtension != null && message.hasOwnProperty("isExtension"))
                            object.isExtension = message.isExtension;
                        return object;
                    };
    
                    /**
                     * Converts this NamePart to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.UninterpretedOption.NamePart
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    NamePart.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return NamePart;
                })();
    
                return UninterpretedOption;
            })();
    
            protobuf.SourceCodeInfo = (function() {
    
                /**
                 * Properties of a SourceCodeInfo.
                 * @memberof google.protobuf
                 * @interface ISourceCodeInfo
                 * @property {Array.<google.protobuf.SourceCodeInfo.ILocation>|null} [location] SourceCodeInfo location
                 */
    
                /**
                 * Constructs a new SourceCodeInfo.
                 * @memberof google.protobuf
                 * @classdesc Represents a SourceCodeInfo.
                 * @implements ISourceCodeInfo
                 * @constructor
                 * @param {google.protobuf.ISourceCodeInfo=} [properties] Properties to set
                 */
                function SourceCodeInfo(properties) {
                    this.location = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * SourceCodeInfo location.
                 * @member {Array.<google.protobuf.SourceCodeInfo.ILocation>} location
                 * @memberof google.protobuf.SourceCodeInfo
                 * @instance
                 */
                SourceCodeInfo.prototype.location = $util.emptyArray;
    
                /**
                 * Creates a new SourceCodeInfo instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {google.protobuf.ISourceCodeInfo=} [properties] Properties to set
                 * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo instance
                 */
                SourceCodeInfo.create = function create(properties) {
                    return new SourceCodeInfo(properties);
                };
    
                /**
                 * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {google.protobuf.ISourceCodeInfo} message SourceCodeInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SourceCodeInfo.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.location != null && message.location.length)
                        for (var i = 0; i < message.location.length; ++i)
                            $root.google.protobuf.SourceCodeInfo.Location.encode(message.location[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {google.protobuf.ISourceCodeInfo} message SourceCodeInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SourceCodeInfo.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a SourceCodeInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SourceCodeInfo.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.SourceCodeInfo();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.location && message.location.length))
                                message.location = [];
                            message.location.push($root.google.protobuf.SourceCodeInfo.Location.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SourceCodeInfo.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a SourceCodeInfo message.
                 * @function verify
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SourceCodeInfo.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.location != null && message.hasOwnProperty("location")) {
                        if (!Array.isArray(message.location))
                            return "location: array expected";
                        for (var i = 0; i < message.location.length; ++i) {
                            var error = $root.google.protobuf.SourceCodeInfo.Location.verify(message.location[i]);
                            if (error)
                                return "location." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.SourceCodeInfo} SourceCodeInfo
                 */
                SourceCodeInfo.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.SourceCodeInfo)
                        return object;
                    var message = new $root.google.protobuf.SourceCodeInfo();
                    if (object.location) {
                        if (!Array.isArray(object.location))
                            throw TypeError(".google.protobuf.SourceCodeInfo.location: array expected");
                        message.location = [];
                        for (var i = 0; i < object.location.length; ++i) {
                            if (typeof object.location[i] !== "object")
                                throw TypeError(".google.protobuf.SourceCodeInfo.location: object expected");
                            message.location[i] = $root.google.protobuf.SourceCodeInfo.Location.fromObject(object.location[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.SourceCodeInfo
                 * @static
                 * @param {google.protobuf.SourceCodeInfo} message SourceCodeInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SourceCodeInfo.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.location = [];
                    if (message.location && message.location.length) {
                        object.location = [];
                        for (var j = 0; j < message.location.length; ++j)
                            object.location[j] = $root.google.protobuf.SourceCodeInfo.Location.toObject(message.location[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this SourceCodeInfo to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.SourceCodeInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SourceCodeInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                SourceCodeInfo.Location = (function() {
    
                    /**
                     * Properties of a Location.
                     * @memberof google.protobuf.SourceCodeInfo
                     * @interface ILocation
                     * @property {Array.<number>|null} [path] Location path
                     * @property {Array.<number>|null} [span] Location span
                     * @property {string|null} [leadingComments] Location leadingComments
                     * @property {string|null} [trailingComments] Location trailingComments
                     * @property {Array.<string>|null} [leadingDetachedComments] Location leadingDetachedComments
                     */
    
                    /**
                     * Constructs a new Location.
                     * @memberof google.protobuf.SourceCodeInfo
                     * @classdesc Represents a Location.
                     * @implements ILocation
                     * @constructor
                     * @param {google.protobuf.SourceCodeInfo.ILocation=} [properties] Properties to set
                     */
                    function Location(properties) {
                        this.path = [];
                        this.span = [];
                        this.leadingDetachedComments = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * Location path.
                     * @member {Array.<number>} path
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     */
                    Location.prototype.path = $util.emptyArray;
    
                    /**
                     * Location span.
                     * @member {Array.<number>} span
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     */
                    Location.prototype.span = $util.emptyArray;
    
                    /**
                     * Location leadingComments.
                     * @member {string} leadingComments
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     */
                    Location.prototype.leadingComments = "";
    
                    /**
                     * Location trailingComments.
                     * @member {string} trailingComments
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     */
                    Location.prototype.trailingComments = "";
    
                    /**
                     * Location leadingDetachedComments.
                     * @member {Array.<string>} leadingDetachedComments
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     */
                    Location.prototype.leadingDetachedComments = $util.emptyArray;
    
                    /**
                     * Creates a new Location instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {google.protobuf.SourceCodeInfo.ILocation=} [properties] Properties to set
                     * @returns {google.protobuf.SourceCodeInfo.Location} Location instance
                     */
                    Location.create = function create(properties) {
                        return new Location(properties);
                    };
    
                    /**
                     * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {google.protobuf.SourceCodeInfo.ILocation} message Location message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Location.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.path != null && message.path.length) {
                            writer.uint32(/* id 1, wireType 2 =*/10).fork();
                            for (var i = 0; i < message.path.length; ++i)
                                writer.int32(message.path[i]);
                            writer.ldelim();
                        }
                        if (message.span != null && message.span.length) {
                            writer.uint32(/* id 2, wireType 2 =*/18).fork();
                            for (var i = 0; i < message.span.length; ++i)
                                writer.int32(message.span[i]);
                            writer.ldelim();
                        }
                        if (message.leadingComments != null && message.hasOwnProperty("leadingComments"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.leadingComments);
                        if (message.trailingComments != null && message.hasOwnProperty("trailingComments"))
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.trailingComments);
                        if (message.leadingDetachedComments != null && message.leadingDetachedComments.length)
                            for (var i = 0; i < message.leadingDetachedComments.length; ++i)
                                writer.uint32(/* id 6, wireType 2 =*/50).string(message.leadingDetachedComments[i]);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {google.protobuf.SourceCodeInfo.ILocation} message Location message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Location.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a Location message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.SourceCodeInfo.Location} Location
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Location.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.SourceCodeInfo.Location();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.path && message.path.length))
                                    message.path = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.path.push(reader.int32());
                                } else
                                    message.path.push(reader.int32());
                                break;
                            case 2:
                                if (!(message.span && message.span.length))
                                    message.span = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.span.push(reader.int32());
                                } else
                                    message.span.push(reader.int32());
                                break;
                            case 3:
                                message.leadingComments = reader.string();
                                break;
                            case 4:
                                message.trailingComments = reader.string();
                                break;
                            case 6:
                                if (!(message.leadingDetachedComments && message.leadingDetachedComments.length))
                                    message.leadingDetachedComments = [];
                                message.leadingDetachedComments.push(reader.string());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a Location message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.SourceCodeInfo.Location} Location
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Location.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a Location message.
                     * @function verify
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Location.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.path != null && message.hasOwnProperty("path")) {
                            if (!Array.isArray(message.path))
                                return "path: array expected";
                            for (var i = 0; i < message.path.length; ++i)
                                if (!$util.isInteger(message.path[i]))
                                    return "path: integer[] expected";
                        }
                        if (message.span != null && message.hasOwnProperty("span")) {
                            if (!Array.isArray(message.span))
                                return "span: array expected";
                            for (var i = 0; i < message.span.length; ++i)
                                if (!$util.isInteger(message.span[i]))
                                    return "span: integer[] expected";
                        }
                        if (message.leadingComments != null && message.hasOwnProperty("leadingComments"))
                            if (!$util.isString(message.leadingComments))
                                return "leadingComments: string expected";
                        if (message.trailingComments != null && message.hasOwnProperty("trailingComments"))
                            if (!$util.isString(message.trailingComments))
                                return "trailingComments: string expected";
                        if (message.leadingDetachedComments != null && message.hasOwnProperty("leadingDetachedComments")) {
                            if (!Array.isArray(message.leadingDetachedComments))
                                return "leadingDetachedComments: array expected";
                            for (var i = 0; i < message.leadingDetachedComments.length; ++i)
                                if (!$util.isString(message.leadingDetachedComments[i]))
                                    return "leadingDetachedComments: string[] expected";
                        }
                        return null;
                    };
    
                    /**
                     * Creates a Location message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.SourceCodeInfo.Location} Location
                     */
                    Location.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.protobuf.SourceCodeInfo.Location)
                            return object;
                        var message = new $root.google.protobuf.SourceCodeInfo.Location();
                        if (object.path) {
                            if (!Array.isArray(object.path))
                                throw TypeError(".google.protobuf.SourceCodeInfo.Location.path: array expected");
                            message.path = [];
                            for (var i = 0; i < object.path.length; ++i)
                                message.path[i] = object.path[i] | 0;
                        }
                        if (object.span) {
                            if (!Array.isArray(object.span))
                                throw TypeError(".google.protobuf.SourceCodeInfo.Location.span: array expected");
                            message.span = [];
                            for (var i = 0; i < object.span.length; ++i)
                                message.span[i] = object.span[i] | 0;
                        }
                        if (object.leadingComments != null)
                            message.leadingComments = String(object.leadingComments);
                        if (object.trailingComments != null)
                            message.trailingComments = String(object.trailingComments);
                        if (object.leadingDetachedComments) {
                            if (!Array.isArray(object.leadingDetachedComments))
                                throw TypeError(".google.protobuf.SourceCodeInfo.Location.leadingDetachedComments: array expected");
                            message.leadingDetachedComments = [];
                            for (var i = 0; i < object.leadingDetachedComments.length; ++i)
                                message.leadingDetachedComments[i] = String(object.leadingDetachedComments[i]);
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a Location message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @static
                     * @param {google.protobuf.SourceCodeInfo.Location} message Location
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Location.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults) {
                            object.path = [];
                            object.span = [];
                            object.leadingDetachedComments = [];
                        }
                        if (options.defaults) {
                            object.leadingComments = "";
                            object.trailingComments = "";
                        }
                        if (message.path && message.path.length) {
                            object.path = [];
                            for (var j = 0; j < message.path.length; ++j)
                                object.path[j] = message.path[j];
                        }
                        if (message.span && message.span.length) {
                            object.span = [];
                            for (var j = 0; j < message.span.length; ++j)
                                object.span[j] = message.span[j];
                        }
                        if (message.leadingComments != null && message.hasOwnProperty("leadingComments"))
                            object.leadingComments = message.leadingComments;
                        if (message.trailingComments != null && message.hasOwnProperty("trailingComments"))
                            object.trailingComments = message.trailingComments;
                        if (message.leadingDetachedComments && message.leadingDetachedComments.length) {
                            object.leadingDetachedComments = [];
                            for (var j = 0; j < message.leadingDetachedComments.length; ++j)
                                object.leadingDetachedComments[j] = message.leadingDetachedComments[j];
                        }
                        return object;
                    };
    
                    /**
                     * Converts this Location to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.SourceCodeInfo.Location
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Location.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return Location;
                })();
    
                return SourceCodeInfo;
            })();
    
            protobuf.GeneratedCodeInfo = (function() {
    
                /**
                 * Properties of a GeneratedCodeInfo.
                 * @memberof google.protobuf
                 * @interface IGeneratedCodeInfo
                 * @property {Array.<google.protobuf.GeneratedCodeInfo.IAnnotation>|null} [annotation] GeneratedCodeInfo annotation
                 */
    
                /**
                 * Constructs a new GeneratedCodeInfo.
                 * @memberof google.protobuf
                 * @classdesc Represents a GeneratedCodeInfo.
                 * @implements IGeneratedCodeInfo
                 * @constructor
                 * @param {google.protobuf.IGeneratedCodeInfo=} [properties] Properties to set
                 */
                function GeneratedCodeInfo(properties) {
                    this.annotation = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * GeneratedCodeInfo annotation.
                 * @member {Array.<google.protobuf.GeneratedCodeInfo.IAnnotation>} annotation
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @instance
                 */
                GeneratedCodeInfo.prototype.annotation = $util.emptyArray;
    
                /**
                 * Creates a new GeneratedCodeInfo instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {google.protobuf.IGeneratedCodeInfo=} [properties] Properties to set
                 * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo instance
                 */
                GeneratedCodeInfo.create = function create(properties) {
                    return new GeneratedCodeInfo(properties);
                };
    
                /**
                 * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {google.protobuf.IGeneratedCodeInfo} message GeneratedCodeInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GeneratedCodeInfo.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.annotation != null && message.annotation.length)
                        for (var i = 0; i < message.annotation.length; ++i)
                            $root.google.protobuf.GeneratedCodeInfo.Annotation.encode(message.annotation[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {google.protobuf.IGeneratedCodeInfo} message GeneratedCodeInfo message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                GeneratedCodeInfo.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GeneratedCodeInfo.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.GeneratedCodeInfo();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.annotation && message.annotation.length))
                                message.annotation = [];
                            message.annotation.push($root.google.protobuf.GeneratedCodeInfo.Annotation.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                GeneratedCodeInfo.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a GeneratedCodeInfo message.
                 * @function verify
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                GeneratedCodeInfo.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.annotation != null && message.hasOwnProperty("annotation")) {
                        if (!Array.isArray(message.annotation))
                            return "annotation: array expected";
                        for (var i = 0; i < message.annotation.length; ++i) {
                            var error = $root.google.protobuf.GeneratedCodeInfo.Annotation.verify(message.annotation[i]);
                            if (error)
                                return "annotation." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.GeneratedCodeInfo} GeneratedCodeInfo
                 */
                GeneratedCodeInfo.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.GeneratedCodeInfo)
                        return object;
                    var message = new $root.google.protobuf.GeneratedCodeInfo();
                    if (object.annotation) {
                        if (!Array.isArray(object.annotation))
                            throw TypeError(".google.protobuf.GeneratedCodeInfo.annotation: array expected");
                        message.annotation = [];
                        for (var i = 0; i < object.annotation.length; ++i) {
                            if (typeof object.annotation[i] !== "object")
                                throw TypeError(".google.protobuf.GeneratedCodeInfo.annotation: object expected");
                            message.annotation[i] = $root.google.protobuf.GeneratedCodeInfo.Annotation.fromObject(object.annotation[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @static
                 * @param {google.protobuf.GeneratedCodeInfo} message GeneratedCodeInfo
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                GeneratedCodeInfo.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.annotation = [];
                    if (message.annotation && message.annotation.length) {
                        object.annotation = [];
                        for (var j = 0; j < message.annotation.length; ++j)
                            object.annotation[j] = $root.google.protobuf.GeneratedCodeInfo.Annotation.toObject(message.annotation[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this GeneratedCodeInfo to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.GeneratedCodeInfo
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                GeneratedCodeInfo.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                GeneratedCodeInfo.Annotation = (function() {
    
                    /**
                     * Properties of an Annotation.
                     * @memberof google.protobuf.GeneratedCodeInfo
                     * @interface IAnnotation
                     * @property {Array.<number>|null} [path] Annotation path
                     * @property {string|null} [sourceFile] Annotation sourceFile
                     * @property {number|null} [begin] Annotation begin
                     * @property {number|null} [end] Annotation end
                     */
    
                    /**
                     * Constructs a new Annotation.
                     * @memberof google.protobuf.GeneratedCodeInfo
                     * @classdesc Represents an Annotation.
                     * @implements IAnnotation
                     * @constructor
                     * @param {google.protobuf.GeneratedCodeInfo.IAnnotation=} [properties] Properties to set
                     */
                    function Annotation(properties) {
                        this.path = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * Annotation path.
                     * @member {Array.<number>} path
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @instance
                     */
                    Annotation.prototype.path = $util.emptyArray;
    
                    /**
                     * Annotation sourceFile.
                     * @member {string} sourceFile
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @instance
                     */
                    Annotation.prototype.sourceFile = "";
    
                    /**
                     * Annotation begin.
                     * @member {number} begin
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @instance
                     */
                    Annotation.prototype.begin = 0;
    
                    /**
                     * Annotation end.
                     * @member {number} end
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @instance
                     */
                    Annotation.prototype.end = 0;
    
                    /**
                     * Creates a new Annotation instance using the specified properties.
                     * @function create
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {google.protobuf.GeneratedCodeInfo.IAnnotation=} [properties] Properties to set
                     * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation instance
                     */
                    Annotation.create = function create(properties) {
                        return new Annotation(properties);
                    };
    
                    /**
                     * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                     * @function encode
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {google.protobuf.GeneratedCodeInfo.IAnnotation} message Annotation message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Annotation.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.path != null && message.path.length) {
                            writer.uint32(/* id 1, wireType 2 =*/10).fork();
                            for (var i = 0; i < message.path.length; ++i)
                                writer.int32(message.path[i]);
                            writer.ldelim();
                        }
                        if (message.sourceFile != null && message.hasOwnProperty("sourceFile"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.sourceFile);
                        if (message.begin != null && message.hasOwnProperty("begin"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.begin);
                        if (message.end != null && message.hasOwnProperty("end"))
                            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.end);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {google.protobuf.GeneratedCodeInfo.IAnnotation} message Annotation message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Annotation.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes an Annotation message from the specified reader or buffer.
                     * @function decode
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Annotation.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.GeneratedCodeInfo.Annotation();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.path && message.path.length))
                                    message.path = [];
                                if ((tag & 7) === 2) {
                                    var end2 = reader.uint32() + reader.pos;
                                    while (reader.pos < end2)
                                        message.path.push(reader.int32());
                                } else
                                    message.path.push(reader.int32());
                                break;
                            case 2:
                                message.sourceFile = reader.string();
                                break;
                            case 3:
                                message.begin = reader.int32();
                                break;
                            case 4:
                                message.end = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes an Annotation message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Annotation.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies an Annotation message.
                     * @function verify
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Annotation.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.path != null && message.hasOwnProperty("path")) {
                            if (!Array.isArray(message.path))
                                return "path: array expected";
                            for (var i = 0; i < message.path.length; ++i)
                                if (!$util.isInteger(message.path[i]))
                                    return "path: integer[] expected";
                        }
                        if (message.sourceFile != null && message.hasOwnProperty("sourceFile"))
                            if (!$util.isString(message.sourceFile))
                                return "sourceFile: string expected";
                        if (message.begin != null && message.hasOwnProperty("begin"))
                            if (!$util.isInteger(message.begin))
                                return "begin: integer expected";
                        if (message.end != null && message.hasOwnProperty("end"))
                            if (!$util.isInteger(message.end))
                                return "end: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {google.protobuf.GeneratedCodeInfo.Annotation} Annotation
                     */
                    Annotation.fromObject = function fromObject(object) {
                        if (object instanceof $root.google.protobuf.GeneratedCodeInfo.Annotation)
                            return object;
                        var message = new $root.google.protobuf.GeneratedCodeInfo.Annotation();
                        if (object.path) {
                            if (!Array.isArray(object.path))
                                throw TypeError(".google.protobuf.GeneratedCodeInfo.Annotation.path: array expected");
                            message.path = [];
                            for (var i = 0; i < object.path.length; ++i)
                                message.path[i] = object.path[i] | 0;
                        }
                        if (object.sourceFile != null)
                            message.sourceFile = String(object.sourceFile);
                        if (object.begin != null)
                            message.begin = object.begin | 0;
                        if (object.end != null)
                            message.end = object.end | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @static
                     * @param {google.protobuf.GeneratedCodeInfo.Annotation} message Annotation
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Annotation.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.path = [];
                        if (options.defaults) {
                            object.sourceFile = "";
                            object.begin = 0;
                            object.end = 0;
                        }
                        if (message.path && message.path.length) {
                            object.path = [];
                            for (var j = 0; j < message.path.length; ++j)
                                object.path[j] = message.path[j];
                        }
                        if (message.sourceFile != null && message.hasOwnProperty("sourceFile"))
                            object.sourceFile = message.sourceFile;
                        if (message.begin != null && message.hasOwnProperty("begin"))
                            object.begin = message.begin;
                        if (message.end != null && message.hasOwnProperty("end"))
                            object.end = message.end;
                        return object;
                    };
    
                    /**
                     * Converts this Annotation to JSON.
                     * @function toJSON
                     * @memberof google.protobuf.GeneratedCodeInfo.Annotation
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Annotation.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return Annotation;
                })();
    
                return GeneratedCodeInfo;
            })();
    
            protobuf.FieldMask = (function() {
    
                /**
                 * Properties of a FieldMask.
                 * @memberof google.protobuf
                 * @interface IFieldMask
                 * @property {Array.<string>|null} [paths] FieldMask paths
                 */
    
                /**
                 * Constructs a new FieldMask.
                 * @memberof google.protobuf
                 * @classdesc Represents a FieldMask.
                 * @implements IFieldMask
                 * @constructor
                 * @param {google.protobuf.IFieldMask=} [properties] Properties to set
                 */
                function FieldMask(properties) {
                    this.paths = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FieldMask paths.
                 * @member {Array.<string>} paths
                 * @memberof google.protobuf.FieldMask
                 * @instance
                 */
                FieldMask.prototype.paths = $util.emptyArray;
    
                /**
                 * Creates a new FieldMask instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FieldMask
                 * @static
                 * @param {google.protobuf.IFieldMask=} [properties] Properties to set
                 * @returns {google.protobuf.FieldMask} FieldMask instance
                 */
                FieldMask.create = function create(properties) {
                    return new FieldMask(properties);
                };
    
                /**
                 * Encodes the specified FieldMask message. Does not implicitly {@link google.protobuf.FieldMask.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FieldMask
                 * @static
                 * @param {google.protobuf.IFieldMask} message FieldMask message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldMask.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.paths != null && message.paths.length)
                        for (var i = 0; i < message.paths.length; ++i)
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.paths[i]);
                    return writer;
                };
    
                /**
                 * Encodes the specified FieldMask message, length delimited. Does not implicitly {@link google.protobuf.FieldMask.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FieldMask
                 * @static
                 * @param {google.protobuf.IFieldMask} message FieldMask message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FieldMask.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FieldMask message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FieldMask
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FieldMask} FieldMask
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldMask.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FieldMask();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.paths && message.paths.length))
                                message.paths = [];
                            message.paths.push(reader.string());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a FieldMask message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FieldMask
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FieldMask} FieldMask
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FieldMask.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FieldMask message.
                 * @function verify
                 * @memberof google.protobuf.FieldMask
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FieldMask.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.paths != null && message.hasOwnProperty("paths")) {
                        if (!Array.isArray(message.paths))
                            return "paths: array expected";
                        for (var i = 0; i < message.paths.length; ++i)
                            if (!$util.isString(message.paths[i]))
                                return "paths: string[] expected";
                    }
                    return null;
                };
    
                /**
                 * Creates a FieldMask message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FieldMask
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FieldMask} FieldMask
                 */
                FieldMask.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FieldMask)
                        return object;
                    var message = new $root.google.protobuf.FieldMask();
                    if (object.paths) {
                        if (!Array.isArray(object.paths))
                            throw TypeError(".google.protobuf.FieldMask.paths: array expected");
                        message.paths = [];
                        for (var i = 0; i < object.paths.length; ++i)
                            message.paths[i] = String(object.paths[i]);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a FieldMask message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FieldMask
                 * @static
                 * @param {google.protobuf.FieldMask} message FieldMask
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FieldMask.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.paths = [];
                    if (message.paths && message.paths.length) {
                        object.paths = [];
                        for (var j = 0; j < message.paths.length; ++j)
                            object.paths[j] = message.paths[j];
                    }
                    return object;
                };
    
                /**
                 * Converts this FieldMask to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FieldMask
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FieldMask.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return FieldMask;
            })();
    
            return protobuf;
        })();
    
        google.ads = (function() {
    
            /**
             * Namespace ads.
             * @memberof google
             * @namespace
             */
            var ads = {};
    
            ads.googleads = (function() {
    
                /**
                 * Namespace googleads.
                 * @memberof google.ads
                 * @namespace
                 */
                var googleads = {};
    
                googleads.v0 = (function() {
    
                    /**
                     * Namespace v0.
                     * @memberof google.ads.googleads
                     * @namespace
                     */
                    var v0 = {};
    
                    v0.services = (function() {
    
                        /**
                         * Namespace services.
                         * @memberof google.ads.googleads.v0
                         * @namespace
                         */
                        var services = {};
    
                        services.AdGroupAdService = (function() {
    
                            /**
                             * Constructs a new AdGroupAdService service.
                             * @memberof google.ads.googleads.v0.services
                             * @classdesc Represents an AdGroupAdService
                             * @extends $protobuf.rpc.Service
                             * @constructor
                             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                             */
                            function AdGroupAdService(rpcImpl, requestDelimited, responseDelimited) {
                                $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
                            }
    
                            (AdGroupAdService.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = AdGroupAdService;
    
                            /**
                             * Creates new AdGroupAdService service using the specified rpc implementation.
                             * @function create
                             * @memberof google.ads.googleads.v0.services.AdGroupAdService
                             * @static
                             * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
                             * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
                             * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
                             * @returns {AdGroupAdService} RPC service. Useful where requests and/or responses are streamed.
                             */
                            AdGroupAdService.create = function create(rpcImpl, requestDelimited, responseDelimited) {
                                return new this(rpcImpl, requestDelimited, responseDelimited);
                            };
    
                            /**
                             * Callback as used by {@link google.ads.googleads.v0.services.AdGroupAdService#getAdGroupAd}.
                             * @memberof google.ads.googleads.v0.services.AdGroupAdService
                             * @typedef GetAdGroupAdCallback
                             * @type {function}
                             * @param {Error|null} error Error, if any
                             * @param {google.ads.googleads.v0.resources.AdGroupAd} [response] AdGroupAd
                             */
    
                            /**
                             * Calls GetAdGroupAd.
                             * @function getAdGroupAd
                             * @memberof google.ads.googleads.v0.services.AdGroupAdService
                             * @instance
                             * @param {google.ads.googleads.v0.services.IGetAdGroupAdRequest} request GetAdGroupAdRequest message or plain object
                             * @param {google.ads.googleads.v0.services.AdGroupAdService.GetAdGroupAdCallback} callback Node-style callback called with the error, if any, and AdGroupAd
                             * @returns {undefined}
                             * @variation 1
                             */
                            Object.defineProperty(AdGroupAdService.prototype.getAdGroupAd = function getAdGroupAd(request, callback) {
                                return this.rpcCall(getAdGroupAd, $root.google.ads.googleads.v0.services.GetAdGroupAdRequest, $root.google.ads.googleads.v0.resources.AdGroupAd, request, callback);
                            }, "name", { value: "GetAdGroupAd" });
    
                            /**
                             * Calls GetAdGroupAd.
                             * @function getAdGroupAd
                             * @memberof google.ads.googleads.v0.services.AdGroupAdService
                             * @instance
                             * @param {google.ads.googleads.v0.services.IGetAdGroupAdRequest} request GetAdGroupAdRequest message or plain object
                             * @returns {Promise<google.ads.googleads.v0.resources.AdGroupAd>} Promise
                             * @variation 2
                             */
    
                            /**
                             * Callback as used by {@link google.ads.googleads.v0.services.AdGroupAdService#mutateAdGroupAds}.
                             * @memberof google.ads.googleads.v0.services.AdGroupAdService
                             * @typedef MutateAdGroupAdsCallback
                             * @type {function}
                             * @param {Error|null} error Error, if any
                             * @param {google.ads.googleads.v0.services.MutateAdGroupAdsResponse} [response] MutateAdGroupAdsResponse
                             */
    
                            /**
                             * Calls MutateAdGroupAds.
                             * @function mutateAdGroupAds
                             * @memberof google.ads.googleads.v0.services.AdGroupAdService
                             * @instance
                             * @param {google.ads.googleads.v0.services.IMutateAdGroupAdsRequest} request MutateAdGroupAdsRequest message or plain object
                             * @param {google.ads.googleads.v0.services.AdGroupAdService.MutateAdGroupAdsCallback} callback Node-style callback called with the error, if any, and MutateAdGroupAdsResponse
                             * @returns {undefined}
                             * @variation 1
                             */
                            Object.defineProperty(AdGroupAdService.prototype.mutateAdGroupAds = function mutateAdGroupAds(request, callback) {
                                return this.rpcCall(mutateAdGroupAds, $root.google.ads.googleads.v0.services.MutateAdGroupAdsRequest, $root.google.ads.googleads.v0.services.MutateAdGroupAdsResponse, request, callback);
                            }, "name", { value: "MutateAdGroupAds" });
    
                            /**
                             * Calls MutateAdGroupAds.
                             * @function mutateAdGroupAds
                             * @memberof google.ads.googleads.v0.services.AdGroupAdService
                             * @instance
                             * @param {google.ads.googleads.v0.services.IMutateAdGroupAdsRequest} request MutateAdGroupAdsRequest message or plain object
                             * @returns {Promise<google.ads.googleads.v0.services.MutateAdGroupAdsResponse>} Promise
                             * @variation 2
                             */
    
                            return AdGroupAdService;
                        })();
    
                        services.GetAdGroupAdRequest = (function() {
    
                            /**
                             * Properties of a GetAdGroupAdRequest.
                             * @memberof google.ads.googleads.v0.services
                             * @interface IGetAdGroupAdRequest
                             * @property {string|null} [resourceName] GetAdGroupAdRequest resourceName
                             */
    
                            /**
                             * Constructs a new GetAdGroupAdRequest.
                             * @memberof google.ads.googleads.v0.services
                             * @classdesc Represents a GetAdGroupAdRequest.
                             * @implements IGetAdGroupAdRequest
                             * @constructor
                             * @param {google.ads.googleads.v0.services.IGetAdGroupAdRequest=} [properties] Properties to set
                             */
                            function GetAdGroupAdRequest(properties) {
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }
    
                            /**
                             * GetAdGroupAdRequest resourceName.
                             * @member {string} resourceName
                             * @memberof google.ads.googleads.v0.services.GetAdGroupAdRequest
                             * @instance
                             */
                            GetAdGroupAdRequest.prototype.resourceName = "";
    
                            /**
                             * Creates a new GetAdGroupAdRequest instance using the specified properties.
                             * @function create
                             * @memberof google.ads.googleads.v0.services.GetAdGroupAdRequest
                             * @static
                             * @param {google.ads.googleads.v0.services.IGetAdGroupAdRequest=} [properties] Properties to set
                             * @returns {google.ads.googleads.v0.services.GetAdGroupAdRequest} GetAdGroupAdRequest instance
                             */
                            GetAdGroupAdRequest.create = function create(properties) {
                                return new GetAdGroupAdRequest(properties);
                            };
    
                            /**
                             * Encodes the specified GetAdGroupAdRequest message. Does not implicitly {@link google.ads.googleads.v0.services.GetAdGroupAdRequest.verify|verify} messages.
                             * @function encode
                             * @memberof google.ads.googleads.v0.services.GetAdGroupAdRequest
                             * @static
                             * @param {google.ads.googleads.v0.services.IGetAdGroupAdRequest} message GetAdGroupAdRequest message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            GetAdGroupAdRequest.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                if (message.resourceName != null && message.hasOwnProperty("resourceName"))
                                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.resourceName);
                                return writer;
                            };
    
                            /**
                             * Encodes the specified GetAdGroupAdRequest message, length delimited. Does not implicitly {@link google.ads.googleads.v0.services.GetAdGroupAdRequest.verify|verify} messages.
                             * @function encodeDelimited
                             * @memberof google.ads.googleads.v0.services.GetAdGroupAdRequest
                             * @static
                             * @param {google.ads.googleads.v0.services.IGetAdGroupAdRequest} message GetAdGroupAdRequest message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            GetAdGroupAdRequest.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };
    
                            /**
                             * Decodes a GetAdGroupAdRequest message from the specified reader or buffer.
                             * @function decode
                             * @memberof google.ads.googleads.v0.services.GetAdGroupAdRequest
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @param {number} [length] Message length if known beforehand
                             * @returns {google.ads.googleads.v0.services.GetAdGroupAdRequest} GetAdGroupAdRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            GetAdGroupAdRequest.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.ads.googleads.v0.services.GetAdGroupAdRequest();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    case 1:
                                        message.resourceName = reader.string();
                                        break;
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };
    
                            /**
                             * Decodes a GetAdGroupAdRequest message from the specified reader or buffer, length delimited.
                             * @function decodeDelimited
                             * @memberof google.ads.googleads.v0.services.GetAdGroupAdRequest
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @returns {google.ads.googleads.v0.services.GetAdGroupAdRequest} GetAdGroupAdRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            GetAdGroupAdRequest.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };
    
                            /**
                             * Verifies a GetAdGroupAdRequest message.
                             * @function verify
                             * @memberof google.ads.googleads.v0.services.GetAdGroupAdRequest
                             * @static
                             * @param {Object.<string,*>} message Plain object to verify
                             * @returns {string|null} `null` if valid, otherwise the reason why it is not
                             */
                            GetAdGroupAdRequest.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                if (message.resourceName != null && message.hasOwnProperty("resourceName"))
                                    if (!$util.isString(message.resourceName))
                                        return "resourceName: string expected";
                                return null;
                            };
    
                            /**
                             * Creates a GetAdGroupAdRequest message from a plain object. Also converts values to their respective internal types.
                             * @function fromObject
                             * @memberof google.ads.googleads.v0.services.GetAdGroupAdRequest
                             * @static
                             * @param {Object.<string,*>} object Plain object
                             * @returns {google.ads.googleads.v0.services.GetAdGroupAdRequest} GetAdGroupAdRequest
                             */
                            GetAdGroupAdRequest.fromObject = function fromObject(object) {
                                if (object instanceof $root.google.ads.googleads.v0.services.GetAdGroupAdRequest)
                                    return object;
                                var message = new $root.google.ads.googleads.v0.services.GetAdGroupAdRequest();
                                if (object.resourceName != null)
                                    message.resourceName = String(object.resourceName);
                                return message;
                            };
    
                            /**
                             * Creates a plain object from a GetAdGroupAdRequest message. Also converts values to other types if specified.
                             * @function toObject
                             * @memberof google.ads.googleads.v0.services.GetAdGroupAdRequest
                             * @static
                             * @param {google.ads.googleads.v0.services.GetAdGroupAdRequest} message GetAdGroupAdRequest
                             * @param {$protobuf.IConversionOptions} [options] Conversion options
                             * @returns {Object.<string,*>} Plain object
                             */
                            GetAdGroupAdRequest.toObject = function toObject(message, options) {
                                if (!options)
                                    options = {};
                                var object = {};
                                if (options.defaults)
                                    object.resourceName = "";
                                if (message.resourceName != null && message.hasOwnProperty("resourceName"))
                                    object.resourceName = message.resourceName;
                                return object;
                            };
    
                            /**
                             * Converts this GetAdGroupAdRequest to JSON.
                             * @function toJSON
                             * @memberof google.ads.googleads.v0.services.GetAdGroupAdRequest
                             * @instance
                             * @returns {Object.<string,*>} JSON object
                             */
                            GetAdGroupAdRequest.prototype.toJSON = function toJSON() {
                                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                            };
    
                            return GetAdGroupAdRequest;
                        })();
    
                        services.MutateAdGroupAdsRequest = (function() {
    
                            /**
                             * Properties of a MutateAdGroupAdsRequest.
                             * @memberof google.ads.googleads.v0.services
                             * @interface IMutateAdGroupAdsRequest
                             * @property {string|null} [customerId] MutateAdGroupAdsRequest customerId
                             * @property {Array.<google.ads.googleads.v0.services.IAdGroupAdOperation>|null} [operations] MutateAdGroupAdsRequest operations
                             */
    
                            /**
                             * Constructs a new MutateAdGroupAdsRequest.
                             * @memberof google.ads.googleads.v0.services
                             * @classdesc Represents a MutateAdGroupAdsRequest.
                             * @implements IMutateAdGroupAdsRequest
                             * @constructor
                             * @param {google.ads.googleads.v0.services.IMutateAdGroupAdsRequest=} [properties] Properties to set
                             */
                            function MutateAdGroupAdsRequest(properties) {
                                this.operations = [];
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }
    
                            /**
                             * MutateAdGroupAdsRequest customerId.
                             * @member {string} customerId
                             * @memberof google.ads.googleads.v0.services.MutateAdGroupAdsRequest
                             * @instance
                             */
                            MutateAdGroupAdsRequest.prototype.customerId = "";
    
                            /**
                             * MutateAdGroupAdsRequest operations.
                             * @member {Array.<google.ads.googleads.v0.services.IAdGroupAdOperation>} operations
                             * @memberof google.ads.googleads.v0.services.MutateAdGroupAdsRequest
                             * @instance
                             */
                            MutateAdGroupAdsRequest.prototype.operations = $util.emptyArray;
    
                            /**
                             * Creates a new MutateAdGroupAdsRequest instance using the specified properties.
                             * @function create
                             * @memberof google.ads.googleads.v0.services.MutateAdGroupAdsRequest
                             * @static
                             * @param {google.ads.googleads.v0.services.IMutateAdGroupAdsRequest=} [properties] Properties to set
                             * @returns {google.ads.googleads.v0.services.MutateAdGroupAdsRequest} MutateAdGroupAdsRequest instance
                             */
                            MutateAdGroupAdsRequest.create = function create(properties) {
                                return new MutateAdGroupAdsRequest(properties);
                            };
    
                            /**
                             * Encodes the specified MutateAdGroupAdsRequest message. Does not implicitly {@link google.ads.googleads.v0.services.MutateAdGroupAdsRequest.verify|verify} messages.
                             * @function encode
                             * @memberof google.ads.googleads.v0.services.MutateAdGroupAdsRequest
                             * @static
                             * @param {google.ads.googleads.v0.services.IMutateAdGroupAdsRequest} message MutateAdGroupAdsRequest message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            MutateAdGroupAdsRequest.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                if (message.customerId != null && message.hasOwnProperty("customerId"))
                                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.customerId);
                                if (message.operations != null && message.operations.length)
                                    for (var i = 0; i < message.operations.length; ++i)
                                        $root.google.ads.googleads.v0.services.AdGroupAdOperation.encode(message.operations[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                                return writer;
                            };
    
                            /**
                             * Encodes the specified MutateAdGroupAdsRequest message, length delimited. Does not implicitly {@link google.ads.googleads.v0.services.MutateAdGroupAdsRequest.verify|verify} messages.
                             * @function encodeDelimited
                             * @memberof google.ads.googleads.v0.services.MutateAdGroupAdsRequest
                             * @static
                             * @param {google.ads.googleads.v0.services.IMutateAdGroupAdsRequest} message MutateAdGroupAdsRequest message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            MutateAdGroupAdsRequest.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };
    
                            /**
                             * Decodes a MutateAdGroupAdsRequest message from the specified reader or buffer.
                             * @function decode
                             * @memberof google.ads.googleads.v0.services.MutateAdGroupAdsRequest
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @param {number} [length] Message length if known beforehand
                             * @returns {google.ads.googleads.v0.services.MutateAdGroupAdsRequest} MutateAdGroupAdsRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            MutateAdGroupAdsRequest.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.ads.googleads.v0.services.MutateAdGroupAdsRequest();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    case 1:
                                        message.customerId = reader.string();
                                        break;
                                    case 2:
                                        if (!(message.operations && message.operations.length))
                                            message.operations = [];
                                        message.operations.push($root.google.ads.googleads.v0.services.AdGroupAdOperation.decode(reader, reader.uint32()));
                                        break;
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };
    
                            /**
                             * Decodes a MutateAdGroupAdsRequest message from the specified reader or buffer, length delimited.
                             * @function decodeDelimited
                             * @memberof google.ads.googleads.v0.services.MutateAdGroupAdsRequest
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @returns {google.ads.googleads.v0.services.MutateAdGroupAdsRequest} MutateAdGroupAdsRequest
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            MutateAdGroupAdsRequest.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };
    
                            /**
                             * Verifies a MutateAdGroupAdsRequest message.
                             * @function verify
                             * @memberof google.ads.googleads.v0.services.MutateAdGroupAdsRequest
                             * @static
                             * @param {Object.<string,*>} message Plain object to verify
                             * @returns {string|null} `null` if valid, otherwise the reason why it is not
                             */
                            MutateAdGroupAdsRequest.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                if (message.customerId != null && message.hasOwnProperty("customerId"))
                                    if (!$util.isString(message.customerId))
                                        return "customerId: string expected";
                                if (message.operations != null && message.hasOwnProperty("operations")) {
                                    if (!Array.isArray(message.operations))
                                        return "operations: array expected";
                                    for (var i = 0; i < message.operations.length; ++i) {
                                        var error = $root.google.ads.googleads.v0.services.AdGroupAdOperation.verify(message.operations[i]);
                                        if (error)
                                            return "operations." + error;
                                    }
                                }
                                return null;
                            };
    
                            /**
                             * Creates a MutateAdGroupAdsRequest message from a plain object. Also converts values to their respective internal types.
                             * @function fromObject
                             * @memberof google.ads.googleads.v0.services.MutateAdGroupAdsRequest
                             * @static
                             * @param {Object.<string,*>} object Plain object
                             * @returns {google.ads.googleads.v0.services.MutateAdGroupAdsRequest} MutateAdGroupAdsRequest
                             */
                            MutateAdGroupAdsRequest.fromObject = function fromObject(object) {
                                if (object instanceof $root.google.ads.googleads.v0.services.MutateAdGroupAdsRequest)
                                    return object;
                                var message = new $root.google.ads.googleads.v0.services.MutateAdGroupAdsRequest();
                                if (object.customerId != null)
                                    message.customerId = String(object.customerId);
                                if (object.operations) {
                                    if (!Array.isArray(object.operations))
                                        throw TypeError(".google.ads.googleads.v0.services.MutateAdGroupAdsRequest.operations: array expected");
                                    message.operations = [];
                                    for (var i = 0; i < object.operations.length; ++i) {
                                        if (typeof object.operations[i] !== "object")
                                            throw TypeError(".google.ads.googleads.v0.services.MutateAdGroupAdsRequest.operations: object expected");
                                        message.operations[i] = $root.google.ads.googleads.v0.services.AdGroupAdOperation.fromObject(object.operations[i]);
                                    }
                                }
                                return message;
                            };
    
                            /**
                             * Creates a plain object from a MutateAdGroupAdsRequest message. Also converts values to other types if specified.
                             * @function toObject
                             * @memberof google.ads.googleads.v0.services.MutateAdGroupAdsRequest
                             * @static
                             * @param {google.ads.googleads.v0.services.MutateAdGroupAdsRequest} message MutateAdGroupAdsRequest
                             * @param {$protobuf.IConversionOptions} [options] Conversion options
                             * @returns {Object.<string,*>} Plain object
                             */
                            MutateAdGroupAdsRequest.toObject = function toObject(message, options) {
                                if (!options)
                                    options = {};
                                var object = {};
                                if (options.arrays || options.defaults)
                                    object.operations = [];
                                if (options.defaults)
                                    object.customerId = "";
                                if (message.customerId != null && message.hasOwnProperty("customerId"))
                                    object.customerId = message.customerId;
                                if (message.operations && message.operations.length) {
                                    object.operations = [];
                                    for (var j = 0; j < message.operations.length; ++j)
                                        object.operations[j] = $root.google.ads.googleads.v0.services.AdGroupAdOperation.toObject(message.operations[j], options);
                                }
                                return object;
                            };
    
                            /**
                             * Converts this MutateAdGroupAdsRequest to JSON.
                             * @function toJSON
                             * @memberof google.ads.googleads.v0.services.MutateAdGroupAdsRequest
                             * @instance
                             * @returns {Object.<string,*>} JSON object
                             */
                            MutateAdGroupAdsRequest.prototype.toJSON = function toJSON() {
                                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                            };
    
                            return MutateAdGroupAdsRequest;
                        })();
    
                        services.AdGroupAdOperation = (function() {
    
                            /**
                             * Properties of an AdGroupAdOperation.
                             * @memberof google.ads.googleads.v0.services
                             * @interface IAdGroupAdOperation
                             * @property {google.protobuf.IFieldMask|null} [updateMask] AdGroupAdOperation updateMask
                             * @property {google.ads.googleads.v0.resources.IAdGroupAd|null} [create] AdGroupAdOperation create
                             * @property {google.ads.googleads.v0.resources.IAdGroupAd|null} [update] AdGroupAdOperation update
                             * @property {string|null} [remove] AdGroupAdOperation remove
                             */
    
                            /**
                             * Constructs a new AdGroupAdOperation.
                             * @memberof google.ads.googleads.v0.services
                             * @classdesc Represents an AdGroupAdOperation.
                             * @implements IAdGroupAdOperation
                             * @constructor
                             * @param {google.ads.googleads.v0.services.IAdGroupAdOperation=} [properties] Properties to set
                             */
                            function AdGroupAdOperation(properties) {
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }
    
                            /**
                             * AdGroupAdOperation updateMask.
                             * @member {google.protobuf.IFieldMask|null|undefined} updateMask
                             * @memberof google.ads.googleads.v0.services.AdGroupAdOperation
                             * @instance
                             */
                            AdGroupAdOperation.prototype.updateMask = null;
    
                            /**
                             * AdGroupAdOperation create.
                             * @member {google.ads.googleads.v0.resources.IAdGroupAd|null|undefined} create
                             * @memberof google.ads.googleads.v0.services.AdGroupAdOperation
                             * @instance
                             */
                            AdGroupAdOperation.prototype.create = null;
    
                            /**
                             * AdGroupAdOperation update.
                             * @member {google.ads.googleads.v0.resources.IAdGroupAd|null|undefined} update
                             * @memberof google.ads.googleads.v0.services.AdGroupAdOperation
                             * @instance
                             */
                            AdGroupAdOperation.prototype.update = null;
    
                            /**
                             * AdGroupAdOperation remove.
                             * @member {string} remove
                             * @memberof google.ads.googleads.v0.services.AdGroupAdOperation
                             * @instance
                             */
                            AdGroupAdOperation.prototype.remove = "";
    
                            // OneOf field names bound to virtual getters and setters
                            var $oneOfFields;
    
                            /**
                             * AdGroupAdOperation operation.
                             * @member {"create"|"update"|"remove"|undefined} operation
                             * @memberof google.ads.googleads.v0.services.AdGroupAdOperation
                             * @instance
                             */
                            Object.defineProperty(AdGroupAdOperation.prototype, "operation", {
                                get: $util.oneOfGetter($oneOfFields = ["create", "update", "remove"]),
                                set: $util.oneOfSetter($oneOfFields)
                            });
    
                            /**
                             * Creates a new AdGroupAdOperation instance using the specified properties.
                             * @function create
                             * @memberof google.ads.googleads.v0.services.AdGroupAdOperation
                             * @static
                             * @param {google.ads.googleads.v0.services.IAdGroupAdOperation=} [properties] Properties to set
                             * @returns {google.ads.googleads.v0.services.AdGroupAdOperation} AdGroupAdOperation instance
                             */
                            AdGroupAdOperation.create = function create(properties) {
                                return new AdGroupAdOperation(properties);
                            };
    
                            /**
                             * Encodes the specified AdGroupAdOperation message. Does not implicitly {@link google.ads.googleads.v0.services.AdGroupAdOperation.verify|verify} messages.
                             * @function encode
                             * @memberof google.ads.googleads.v0.services.AdGroupAdOperation
                             * @static
                             * @param {google.ads.googleads.v0.services.IAdGroupAdOperation} message AdGroupAdOperation message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            AdGroupAdOperation.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                if (message.create != null && message.hasOwnProperty("create"))
                                    $root.google.ads.googleads.v0.resources.AdGroupAd.encode(message.create, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                                if (message.update != null && message.hasOwnProperty("update"))
                                    $root.google.ads.googleads.v0.resources.AdGroupAd.encode(message.update, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                                if (message.remove != null && message.hasOwnProperty("remove"))
                                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.remove);
                                if (message.updateMask != null && message.hasOwnProperty("updateMask"))
                                    $root.google.protobuf.FieldMask.encode(message.updateMask, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                                return writer;
                            };
    
                            /**
                             * Encodes the specified AdGroupAdOperation message, length delimited. Does not implicitly {@link google.ads.googleads.v0.services.AdGroupAdOperation.verify|verify} messages.
                             * @function encodeDelimited
                             * @memberof google.ads.googleads.v0.services.AdGroupAdOperation
                             * @static
                             * @param {google.ads.googleads.v0.services.IAdGroupAdOperation} message AdGroupAdOperation message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            AdGroupAdOperation.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };
    
                            /**
                             * Decodes an AdGroupAdOperation message from the specified reader or buffer.
                             * @function decode
                             * @memberof google.ads.googleads.v0.services.AdGroupAdOperation
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @param {number} [length] Message length if known beforehand
                             * @returns {google.ads.googleads.v0.services.AdGroupAdOperation} AdGroupAdOperation
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            AdGroupAdOperation.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.ads.googleads.v0.services.AdGroupAdOperation();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    case 4:
                                        message.updateMask = $root.google.protobuf.FieldMask.decode(reader, reader.uint32());
                                        break;
                                    case 1:
                                        message.create = $root.google.ads.googleads.v0.resources.AdGroupAd.decode(reader, reader.uint32());
                                        break;
                                    case 2:
                                        message.update = $root.google.ads.googleads.v0.resources.AdGroupAd.decode(reader, reader.uint32());
                                        break;
                                    case 3:
                                        message.remove = reader.string();
                                        break;
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };
    
                            /**
                             * Decodes an AdGroupAdOperation message from the specified reader or buffer, length delimited.
                             * @function decodeDelimited
                             * @memberof google.ads.googleads.v0.services.AdGroupAdOperation
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @returns {google.ads.googleads.v0.services.AdGroupAdOperation} AdGroupAdOperation
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            AdGroupAdOperation.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };
    
                            /**
                             * Verifies an AdGroupAdOperation message.
                             * @function verify
                             * @memberof google.ads.googleads.v0.services.AdGroupAdOperation
                             * @static
                             * @param {Object.<string,*>} message Plain object to verify
                             * @returns {string|null} `null` if valid, otherwise the reason why it is not
                             */
                            AdGroupAdOperation.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                var properties = {};
                                if (message.updateMask != null && message.hasOwnProperty("updateMask")) {
                                    var error = $root.google.protobuf.FieldMask.verify(message.updateMask);
                                    if (error)
                                        return "updateMask." + error;
                                }
                                if (message.create != null && message.hasOwnProperty("create")) {
                                    properties.operation = 1;
                                    {
                                        var error = $root.google.ads.googleads.v0.resources.AdGroupAd.verify(message.create);
                                        if (error)
                                            return "create." + error;
                                    }
                                }
                                if (message.update != null && message.hasOwnProperty("update")) {
                                    if (properties.operation === 1)
                                        return "operation: multiple values";
                                    properties.operation = 1;
                                    {
                                        var error = $root.google.ads.googleads.v0.resources.AdGroupAd.verify(message.update);
                                        if (error)
                                            return "update." + error;
                                    }
                                }
                                if (message.remove != null && message.hasOwnProperty("remove")) {
                                    if (properties.operation === 1)
                                        return "operation: multiple values";
                                    properties.operation = 1;
                                    if (!$util.isString(message.remove))
                                        return "remove: string expected";
                                }
                                return null;
                            };
    
                            /**
                             * Creates an AdGroupAdOperation message from a plain object. Also converts values to their respective internal types.
                             * @function fromObject
                             * @memberof google.ads.googleads.v0.services.AdGroupAdOperation
                             * @static
                             * @param {Object.<string,*>} object Plain object
                             * @returns {google.ads.googleads.v0.services.AdGroupAdOperation} AdGroupAdOperation
                             */
                            AdGroupAdOperation.fromObject = function fromObject(object) {
                                if (object instanceof $root.google.ads.googleads.v0.services.AdGroupAdOperation)
                                    return object;
                                var message = new $root.google.ads.googleads.v0.services.AdGroupAdOperation();
                                if (object.updateMask != null) {
                                    if (typeof object.updateMask !== "object")
                                        throw TypeError(".google.ads.googleads.v0.services.AdGroupAdOperation.updateMask: object expected");
                                    message.updateMask = $root.google.protobuf.FieldMask.fromObject(object.updateMask);
                                }
                                if (object.create != null) {
                                    if (typeof object.create !== "object")
                                        throw TypeError(".google.ads.googleads.v0.services.AdGroupAdOperation.create: object expected");
                                    message.create = $root.google.ads.googleads.v0.resources.AdGroupAd.fromObject(object.create);
                                }
                                if (object.update != null) {
                                    if (typeof object.update !== "object")
                                        throw TypeError(".google.ads.googleads.v0.services.AdGroupAdOperation.update: object expected");
                                    message.update = $root.google.ads.googleads.v0.resources.AdGroupAd.fromObject(object.update);
                                }
                                if (object.remove != null)
                                    message.remove = String(object.remove);
                                return message;
                            };
    
                            /**
                             * Creates a plain object from an AdGroupAdOperation message. Also converts values to other types if specified.
                             * @function toObject
                             * @memberof google.ads.googleads.v0.services.AdGroupAdOperation
                             * @static
                             * @param {google.ads.googleads.v0.services.AdGroupAdOperation} message AdGroupAdOperation
                             * @param {$protobuf.IConversionOptions} [options] Conversion options
                             * @returns {Object.<string,*>} Plain object
                             */
                            AdGroupAdOperation.toObject = function toObject(message, options) {
                                if (!options)
                                    options = {};
                                var object = {};
                                if (options.defaults)
                                    object.updateMask = null;
                                if (message.create != null && message.hasOwnProperty("create")) {
                                    object.create = $root.google.ads.googleads.v0.resources.AdGroupAd.toObject(message.create, options);
                                    if (options.oneofs)
                                        object.operation = "create";
                                }
                                if (message.update != null && message.hasOwnProperty("update")) {
                                    object.update = $root.google.ads.googleads.v0.resources.AdGroupAd.toObject(message.update, options);
                                    if (options.oneofs)
                                        object.operation = "update";
                                }
                                if (message.remove != null && message.hasOwnProperty("remove")) {
                                    object.remove = message.remove;
                                    if (options.oneofs)
                                        object.operation = "remove";
                                }
                                if (message.updateMask != null && message.hasOwnProperty("updateMask"))
                                    object.updateMask = $root.google.protobuf.FieldMask.toObject(message.updateMask, options);
                                return object;
                            };
    
                            /**
                             * Converts this AdGroupAdOperation to JSON.
                             * @function toJSON
                             * @memberof google.ads.googleads.v0.services.AdGroupAdOperation
                             * @instance
                             * @returns {Object.<string,*>} JSON object
                             */
                            AdGroupAdOperation.prototype.toJSON = function toJSON() {
                                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                            };
    
                            return AdGroupAdOperation;
                        })();
    
                        services.MutateAdGroupAdsResponse = (function() {
    
                            /**
                             * Properties of a MutateAdGroupAdsResponse.
                             * @memberof google.ads.googleads.v0.services
                             * @interface IMutateAdGroupAdsResponse
                             * @property {Array.<google.ads.googleads.v0.services.IMutateAdGroupAdResult>|null} [results] MutateAdGroupAdsResponse results
                             */
    
                            /**
                             * Constructs a new MutateAdGroupAdsResponse.
                             * @memberof google.ads.googleads.v0.services
                             * @classdesc Represents a MutateAdGroupAdsResponse.
                             * @implements IMutateAdGroupAdsResponse
                             * @constructor
                             * @param {google.ads.googleads.v0.services.IMutateAdGroupAdsResponse=} [properties] Properties to set
                             */
                            function MutateAdGroupAdsResponse(properties) {
                                this.results = [];
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }
    
                            /**
                             * MutateAdGroupAdsResponse results.
                             * @member {Array.<google.ads.googleads.v0.services.IMutateAdGroupAdResult>} results
                             * @memberof google.ads.googleads.v0.services.MutateAdGroupAdsResponse
                             * @instance
                             */
                            MutateAdGroupAdsResponse.prototype.results = $util.emptyArray;
    
                            /**
                             * Creates a new MutateAdGroupAdsResponse instance using the specified properties.
                             * @function create
                             * @memberof google.ads.googleads.v0.services.MutateAdGroupAdsResponse
                             * @static
                             * @param {google.ads.googleads.v0.services.IMutateAdGroupAdsResponse=} [properties] Properties to set
                             * @returns {google.ads.googleads.v0.services.MutateAdGroupAdsResponse} MutateAdGroupAdsResponse instance
                             */
                            MutateAdGroupAdsResponse.create = function create(properties) {
                                return new MutateAdGroupAdsResponse(properties);
                            };
    
                            /**
                             * Encodes the specified MutateAdGroupAdsResponse message. Does not implicitly {@link google.ads.googleads.v0.services.MutateAdGroupAdsResponse.verify|verify} messages.
                             * @function encode
                             * @memberof google.ads.googleads.v0.services.MutateAdGroupAdsResponse
                             * @static
                             * @param {google.ads.googleads.v0.services.IMutateAdGroupAdsResponse} message MutateAdGroupAdsResponse message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            MutateAdGroupAdsResponse.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                if (message.results != null && message.results.length)
                                    for (var i = 0; i < message.results.length; ++i)
                                        $root.google.ads.googleads.v0.services.MutateAdGroupAdResult.encode(message.results[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                                return writer;
                            };
    
                            /**
                             * Encodes the specified MutateAdGroupAdsResponse message, length delimited. Does not implicitly {@link google.ads.googleads.v0.services.MutateAdGroupAdsResponse.verify|verify} messages.
                             * @function encodeDelimited
                             * @memberof google.ads.googleads.v0.services.MutateAdGroupAdsResponse
                             * @static
                             * @param {google.ads.googleads.v0.services.IMutateAdGroupAdsResponse} message MutateAdGroupAdsResponse message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            MutateAdGroupAdsResponse.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };
    
                            /**
                             * Decodes a MutateAdGroupAdsResponse message from the specified reader or buffer.
                             * @function decode
                             * @memberof google.ads.googleads.v0.services.MutateAdGroupAdsResponse
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @param {number} [length] Message length if known beforehand
                             * @returns {google.ads.googleads.v0.services.MutateAdGroupAdsResponse} MutateAdGroupAdsResponse
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            MutateAdGroupAdsResponse.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.ads.googleads.v0.services.MutateAdGroupAdsResponse();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    case 2:
                                        if (!(message.results && message.results.length))
                                            message.results = [];
                                        message.results.push($root.google.ads.googleads.v0.services.MutateAdGroupAdResult.decode(reader, reader.uint32()));
                                        break;
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };
    
                            /**
                             * Decodes a MutateAdGroupAdsResponse message from the specified reader or buffer, length delimited.
                             * @function decodeDelimited
                             * @memberof google.ads.googleads.v0.services.MutateAdGroupAdsResponse
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @returns {google.ads.googleads.v0.services.MutateAdGroupAdsResponse} MutateAdGroupAdsResponse
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            MutateAdGroupAdsResponse.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };
    
                            /**
                             * Verifies a MutateAdGroupAdsResponse message.
                             * @function verify
                             * @memberof google.ads.googleads.v0.services.MutateAdGroupAdsResponse
                             * @static
                             * @param {Object.<string,*>} message Plain object to verify
                             * @returns {string|null} `null` if valid, otherwise the reason why it is not
                             */
                            MutateAdGroupAdsResponse.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                if (message.results != null && message.hasOwnProperty("results")) {
                                    if (!Array.isArray(message.results))
                                        return "results: array expected";
                                    for (var i = 0; i < message.results.length; ++i) {
                                        var error = $root.google.ads.googleads.v0.services.MutateAdGroupAdResult.verify(message.results[i]);
                                        if (error)
                                            return "results." + error;
                                    }
                                }
                                return null;
                            };
    
                            /**
                             * Creates a MutateAdGroupAdsResponse message from a plain object. Also converts values to their respective internal types.
                             * @function fromObject
                             * @memberof google.ads.googleads.v0.services.MutateAdGroupAdsResponse
                             * @static
                             * @param {Object.<string,*>} object Plain object
                             * @returns {google.ads.googleads.v0.services.MutateAdGroupAdsResponse} MutateAdGroupAdsResponse
                             */
                            MutateAdGroupAdsResponse.fromObject = function fromObject(object) {
                                if (object instanceof $root.google.ads.googleads.v0.services.MutateAdGroupAdsResponse)
                                    return object;
                                var message = new $root.google.ads.googleads.v0.services.MutateAdGroupAdsResponse();
                                if (object.results) {
                                    if (!Array.isArray(object.results))
                                        throw TypeError(".google.ads.googleads.v0.services.MutateAdGroupAdsResponse.results: array expected");
                                    message.results = [];
                                    for (var i = 0; i < object.results.length; ++i) {
                                        if (typeof object.results[i] !== "object")
                                            throw TypeError(".google.ads.googleads.v0.services.MutateAdGroupAdsResponse.results: object expected");
                                        message.results[i] = $root.google.ads.googleads.v0.services.MutateAdGroupAdResult.fromObject(object.results[i]);
                                    }
                                }
                                return message;
                            };
    
                            /**
                             * Creates a plain object from a MutateAdGroupAdsResponse message. Also converts values to other types if specified.
                             * @function toObject
                             * @memberof google.ads.googleads.v0.services.MutateAdGroupAdsResponse
                             * @static
                             * @param {google.ads.googleads.v0.services.MutateAdGroupAdsResponse} message MutateAdGroupAdsResponse
                             * @param {$protobuf.IConversionOptions} [options] Conversion options
                             * @returns {Object.<string,*>} Plain object
                             */
                            MutateAdGroupAdsResponse.toObject = function toObject(message, options) {
                                if (!options)
                                    options = {};
                                var object = {};
                                if (options.arrays || options.defaults)
                                    object.results = [];
                                if (message.results && message.results.length) {
                                    object.results = [];
                                    for (var j = 0; j < message.results.length; ++j)
                                        object.results[j] = $root.google.ads.googleads.v0.services.MutateAdGroupAdResult.toObject(message.results[j], options);
                                }
                                return object;
                            };
    
                            /**
                             * Converts this MutateAdGroupAdsResponse to JSON.
                             * @function toJSON
                             * @memberof google.ads.googleads.v0.services.MutateAdGroupAdsResponse
                             * @instance
                             * @returns {Object.<string,*>} JSON object
                             */
                            MutateAdGroupAdsResponse.prototype.toJSON = function toJSON() {
                                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                            };
    
                            return MutateAdGroupAdsResponse;
                        })();
    
                        services.MutateAdGroupAdResult = (function() {
    
                            /**
                             * Properties of a MutateAdGroupAdResult.
                             * @memberof google.ads.googleads.v0.services
                             * @interface IMutateAdGroupAdResult
                             * @property {string|null} [resourceName] MutateAdGroupAdResult resourceName
                             */
    
                            /**
                             * Constructs a new MutateAdGroupAdResult.
                             * @memberof google.ads.googleads.v0.services
                             * @classdesc Represents a MutateAdGroupAdResult.
                             * @implements IMutateAdGroupAdResult
                             * @constructor
                             * @param {google.ads.googleads.v0.services.IMutateAdGroupAdResult=} [properties] Properties to set
                             */
                            function MutateAdGroupAdResult(properties) {
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }
    
                            /**
                             * MutateAdGroupAdResult resourceName.
                             * @member {string} resourceName
                             * @memberof google.ads.googleads.v0.services.MutateAdGroupAdResult
                             * @instance
                             */
                            MutateAdGroupAdResult.prototype.resourceName = "";
    
                            /**
                             * Creates a new MutateAdGroupAdResult instance using the specified properties.
                             * @function create
                             * @memberof google.ads.googleads.v0.services.MutateAdGroupAdResult
                             * @static
                             * @param {google.ads.googleads.v0.services.IMutateAdGroupAdResult=} [properties] Properties to set
                             * @returns {google.ads.googleads.v0.services.MutateAdGroupAdResult} MutateAdGroupAdResult instance
                             */
                            MutateAdGroupAdResult.create = function create(properties) {
                                return new MutateAdGroupAdResult(properties);
                            };
    
                            /**
                             * Encodes the specified MutateAdGroupAdResult message. Does not implicitly {@link google.ads.googleads.v0.services.MutateAdGroupAdResult.verify|verify} messages.
                             * @function encode
                             * @memberof google.ads.googleads.v0.services.MutateAdGroupAdResult
                             * @static
                             * @param {google.ads.googleads.v0.services.IMutateAdGroupAdResult} message MutateAdGroupAdResult message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            MutateAdGroupAdResult.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                if (message.resourceName != null && message.hasOwnProperty("resourceName"))
                                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.resourceName);
                                return writer;
                            };
    
                            /**
                             * Encodes the specified MutateAdGroupAdResult message, length delimited. Does not implicitly {@link google.ads.googleads.v0.services.MutateAdGroupAdResult.verify|verify} messages.
                             * @function encodeDelimited
                             * @memberof google.ads.googleads.v0.services.MutateAdGroupAdResult
                             * @static
                             * @param {google.ads.googleads.v0.services.IMutateAdGroupAdResult} message MutateAdGroupAdResult message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            MutateAdGroupAdResult.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };
    
                            /**
                             * Decodes a MutateAdGroupAdResult message from the specified reader or buffer.
                             * @function decode
                             * @memberof google.ads.googleads.v0.services.MutateAdGroupAdResult
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @param {number} [length] Message length if known beforehand
                             * @returns {google.ads.googleads.v0.services.MutateAdGroupAdResult} MutateAdGroupAdResult
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            MutateAdGroupAdResult.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.ads.googleads.v0.services.MutateAdGroupAdResult();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    case 1:
                                        message.resourceName = reader.string();
                                        break;
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };
    
                            /**
                             * Decodes a MutateAdGroupAdResult message from the specified reader or buffer, length delimited.
                             * @function decodeDelimited
                             * @memberof google.ads.googleads.v0.services.MutateAdGroupAdResult
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @returns {google.ads.googleads.v0.services.MutateAdGroupAdResult} MutateAdGroupAdResult
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            MutateAdGroupAdResult.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };
    
                            /**
                             * Verifies a MutateAdGroupAdResult message.
                             * @function verify
                             * @memberof google.ads.googleads.v0.services.MutateAdGroupAdResult
                             * @static
                             * @param {Object.<string,*>} message Plain object to verify
                             * @returns {string|null} `null` if valid, otherwise the reason why it is not
                             */
                            MutateAdGroupAdResult.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                if (message.resourceName != null && message.hasOwnProperty("resourceName"))
                                    if (!$util.isString(message.resourceName))
                                        return "resourceName: string expected";
                                return null;
                            };
    
                            /**
                             * Creates a MutateAdGroupAdResult message from a plain object. Also converts values to their respective internal types.
                             * @function fromObject
                             * @memberof google.ads.googleads.v0.services.MutateAdGroupAdResult
                             * @static
                             * @param {Object.<string,*>} object Plain object
                             * @returns {google.ads.googleads.v0.services.MutateAdGroupAdResult} MutateAdGroupAdResult
                             */
                            MutateAdGroupAdResult.fromObject = function fromObject(object) {
                                if (object instanceof $root.google.ads.googleads.v0.services.MutateAdGroupAdResult)
                                    return object;
                                var message = new $root.google.ads.googleads.v0.services.MutateAdGroupAdResult();
                                if (object.resourceName != null)
                                    message.resourceName = String(object.resourceName);
                                return message;
                            };
    
                            /**
                             * Creates a plain object from a MutateAdGroupAdResult message. Also converts values to other types if specified.
                             * @function toObject
                             * @memberof google.ads.googleads.v0.services.MutateAdGroupAdResult
                             * @static
                             * @param {google.ads.googleads.v0.services.MutateAdGroupAdResult} message MutateAdGroupAdResult
                             * @param {$protobuf.IConversionOptions} [options] Conversion options
                             * @returns {Object.<string,*>} Plain object
                             */
                            MutateAdGroupAdResult.toObject = function toObject(message, options) {
                                if (!options)
                                    options = {};
                                var object = {};
                                if (options.defaults)
                                    object.resourceName = "";
                                if (message.resourceName != null && message.hasOwnProperty("resourceName"))
                                    object.resourceName = message.resourceName;
                                return object;
                            };
    
                            /**
                             * Converts this MutateAdGroupAdResult to JSON.
                             * @function toJSON
                             * @memberof google.ads.googleads.v0.services.MutateAdGroupAdResult
                             * @instance
                             * @returns {Object.<string,*>} JSON object
                             */
                            MutateAdGroupAdResult.prototype.toJSON = function toJSON() {
                                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                            };
    
                            return MutateAdGroupAdResult;
                        })();
    
                        return services;
                    })();
    
                    v0.resources = (function() {
    
                        /**
                         * Namespace resources.
                         * @memberof google.ads.googleads.v0
                         * @namespace
                         */
                        var resources = {};
    
                        resources.AdGroupAd = (function() {
    
                            /**
                             * Properties of an AdGroupAd.
                             * @memberof google.ads.googleads.v0.resources
                             * @interface IAdGroupAd
                             * @property {string|null} [resourceName] AdGroupAd resourceName
                             * @property {google.ads.googleads.v0.enums.AdGroupAdStatusEnum.AdGroupAdStatus|null} [status] AdGroupAd status
                             * @property {google.protobuf.IStringValue|null} [adGroup] AdGroupAd adGroup
                             * @property {google.ads.googleads.v0.common.IAd|null} [ad] AdGroupAd ad
                             */
    
                            /**
                             * Constructs a new AdGroupAd.
                             * @memberof google.ads.googleads.v0.resources
                             * @classdesc Represents an AdGroupAd.
                             * @implements IAdGroupAd
                             * @constructor
                             * @param {google.ads.googleads.v0.resources.IAdGroupAd=} [properties] Properties to set
                             */
                            function AdGroupAd(properties) {
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }
    
                            /**
                             * AdGroupAd resourceName.
                             * @member {string} resourceName
                             * @memberof google.ads.googleads.v0.resources.AdGroupAd
                             * @instance
                             */
                            AdGroupAd.prototype.resourceName = "";
    
                            /**
                             * AdGroupAd status.
                             * @member {google.ads.googleads.v0.enums.AdGroupAdStatusEnum.AdGroupAdStatus} status
                             * @memberof google.ads.googleads.v0.resources.AdGroupAd
                             * @instance
                             */
                            AdGroupAd.prototype.status = 0;
    
                            /**
                             * AdGroupAd adGroup.
                             * @member {google.protobuf.IStringValue|null|undefined} adGroup
                             * @memberof google.ads.googleads.v0.resources.AdGroupAd
                             * @instance
                             */
                            AdGroupAd.prototype.adGroup = null;
    
                            /**
                             * AdGroupAd ad.
                             * @member {google.ads.googleads.v0.common.IAd|null|undefined} ad
                             * @memberof google.ads.googleads.v0.resources.AdGroupAd
                             * @instance
                             */
                            AdGroupAd.prototype.ad = null;
    
                            /**
                             * Creates a new AdGroupAd instance using the specified properties.
                             * @function create
                             * @memberof google.ads.googleads.v0.resources.AdGroupAd
                             * @static
                             * @param {google.ads.googleads.v0.resources.IAdGroupAd=} [properties] Properties to set
                             * @returns {google.ads.googleads.v0.resources.AdGroupAd} AdGroupAd instance
                             */
                            AdGroupAd.create = function create(properties) {
                                return new AdGroupAd(properties);
                            };
    
                            /**
                             * Encodes the specified AdGroupAd message. Does not implicitly {@link google.ads.googleads.v0.resources.AdGroupAd.verify|verify} messages.
                             * @function encode
                             * @memberof google.ads.googleads.v0.resources.AdGroupAd
                             * @static
                             * @param {google.ads.googleads.v0.resources.IAdGroupAd} message AdGroupAd message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            AdGroupAd.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                if (message.resourceName != null && message.hasOwnProperty("resourceName"))
                                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.resourceName);
                                if (message.status != null && message.hasOwnProperty("status"))
                                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.status);
                                if (message.adGroup != null && message.hasOwnProperty("adGroup"))
                                    $root.google.protobuf.StringValue.encode(message.adGroup, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                                if (message.ad != null && message.hasOwnProperty("ad"))
                                    $root.google.ads.googleads.v0.common.Ad.encode(message.ad, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                                return writer;
                            };
    
                            /**
                             * Encodes the specified AdGroupAd message, length delimited. Does not implicitly {@link google.ads.googleads.v0.resources.AdGroupAd.verify|verify} messages.
                             * @function encodeDelimited
                             * @memberof google.ads.googleads.v0.resources.AdGroupAd
                             * @static
                             * @param {google.ads.googleads.v0.resources.IAdGroupAd} message AdGroupAd message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            AdGroupAd.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };
    
                            /**
                             * Decodes an AdGroupAd message from the specified reader or buffer.
                             * @function decode
                             * @memberof google.ads.googleads.v0.resources.AdGroupAd
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @param {number} [length] Message length if known beforehand
                             * @returns {google.ads.googleads.v0.resources.AdGroupAd} AdGroupAd
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            AdGroupAd.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.ads.googleads.v0.resources.AdGroupAd();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    case 1:
                                        message.resourceName = reader.string();
                                        break;
                                    case 3:
                                        message.status = reader.int32();
                                        break;
                                    case 4:
                                        message.adGroup = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                                        break;
                                    case 5:
                                        message.ad = $root.google.ads.googleads.v0.common.Ad.decode(reader, reader.uint32());
                                        break;
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };
    
                            /**
                             * Decodes an AdGroupAd message from the specified reader or buffer, length delimited.
                             * @function decodeDelimited
                             * @memberof google.ads.googleads.v0.resources.AdGroupAd
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @returns {google.ads.googleads.v0.resources.AdGroupAd} AdGroupAd
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            AdGroupAd.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };
    
                            /**
                             * Verifies an AdGroupAd message.
                             * @function verify
                             * @memberof google.ads.googleads.v0.resources.AdGroupAd
                             * @static
                             * @param {Object.<string,*>} message Plain object to verify
                             * @returns {string|null} `null` if valid, otherwise the reason why it is not
                             */
                            AdGroupAd.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                if (message.resourceName != null && message.hasOwnProperty("resourceName"))
                                    if (!$util.isString(message.resourceName))
                                        return "resourceName: string expected";
                                if (message.status != null && message.hasOwnProperty("status"))
                                    switch (message.status) {
                                    default:
                                        return "status: enum value expected";
                                    case 0:
                                    case 1:
                                    case 2:
                                    case 3:
                                    case 4:
                                        break;
                                    }
                                if (message.adGroup != null && message.hasOwnProperty("adGroup")) {
                                    var error = $root.google.protobuf.StringValue.verify(message.adGroup);
                                    if (error)
                                        return "adGroup." + error;
                                }
                                if (message.ad != null && message.hasOwnProperty("ad")) {
                                    var error = $root.google.ads.googleads.v0.common.Ad.verify(message.ad);
                                    if (error)
                                        return "ad." + error;
                                }
                                return null;
                            };
    
                            /**
                             * Creates an AdGroupAd message from a plain object. Also converts values to their respective internal types.
                             * @function fromObject
                             * @memberof google.ads.googleads.v0.resources.AdGroupAd
                             * @static
                             * @param {Object.<string,*>} object Plain object
                             * @returns {google.ads.googleads.v0.resources.AdGroupAd} AdGroupAd
                             */
                            AdGroupAd.fromObject = function fromObject(object) {
                                if (object instanceof $root.google.ads.googleads.v0.resources.AdGroupAd)
                                    return object;
                                var message = new $root.google.ads.googleads.v0.resources.AdGroupAd();
                                if (object.resourceName != null)
                                    message.resourceName = String(object.resourceName);
                                switch (object.status) {
                                case "UNSPECIFIED":
                                case 0:
                                    message.status = 0;
                                    break;
                                case "UNKNOWN":
                                case 1:
                                    message.status = 1;
                                    break;
                                case "ENABLED":
                                case 2:
                                    message.status = 2;
                                    break;
                                case "PAUSED":
                                case 3:
                                    message.status = 3;
                                    break;
                                case "REMOVED":
                                case 4:
                                    message.status = 4;
                                    break;
                                }
                                if (object.adGroup != null) {
                                    if (typeof object.adGroup !== "object")
                                        throw TypeError(".google.ads.googleads.v0.resources.AdGroupAd.adGroup: object expected");
                                    message.adGroup = $root.google.protobuf.StringValue.fromObject(object.adGroup);
                                }
                                if (object.ad != null) {
                                    if (typeof object.ad !== "object")
                                        throw TypeError(".google.ads.googleads.v0.resources.AdGroupAd.ad: object expected");
                                    message.ad = $root.google.ads.googleads.v0.common.Ad.fromObject(object.ad);
                                }
                                return message;
                            };
    
                            /**
                             * Creates a plain object from an AdGroupAd message. Also converts values to other types if specified.
                             * @function toObject
                             * @memberof google.ads.googleads.v0.resources.AdGroupAd
                             * @static
                             * @param {google.ads.googleads.v0.resources.AdGroupAd} message AdGroupAd
                             * @param {$protobuf.IConversionOptions} [options] Conversion options
                             * @returns {Object.<string,*>} Plain object
                             */
                            AdGroupAd.toObject = function toObject(message, options) {
                                if (!options)
                                    options = {};
                                var object = {};
                                if (options.defaults) {
                                    object.resourceName = "";
                                    object.status = options.enums === String ? "UNSPECIFIED" : 0;
                                    object.adGroup = null;
                                    object.ad = null;
                                }
                                if (message.resourceName != null && message.hasOwnProperty("resourceName"))
                                    object.resourceName = message.resourceName;
                                if (message.status != null && message.hasOwnProperty("status"))
                                    object.status = options.enums === String ? $root.google.ads.googleads.v0.enums.AdGroupAdStatusEnum.AdGroupAdStatus[message.status] : message.status;
                                if (message.adGroup != null && message.hasOwnProperty("adGroup"))
                                    object.adGroup = $root.google.protobuf.StringValue.toObject(message.adGroup, options);
                                if (message.ad != null && message.hasOwnProperty("ad"))
                                    object.ad = $root.google.ads.googleads.v0.common.Ad.toObject(message.ad, options);
                                return object;
                            };
    
                            /**
                             * Converts this AdGroupAd to JSON.
                             * @function toJSON
                             * @memberof google.ads.googleads.v0.resources.AdGroupAd
                             * @instance
                             * @returns {Object.<string,*>} JSON object
                             */
                            AdGroupAd.prototype.toJSON = function toJSON() {
                                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                            };
    
                            return AdGroupAd;
                        })();
    
                        return resources;
                    })();
    
                    v0.common = (function() {
    
                        /**
                         * Namespace common.
                         * @memberof google.ads.googleads.v0
                         * @namespace
                         */
                        var common = {};
    
                        common.Ad = (function() {
    
                            /**
                             * Properties of an Ad.
                             * @memberof google.ads.googleads.v0.common
                             * @interface IAd
                             * @property {google.protobuf.IInt64Value|null} [id] Ad id
                             * @property {Array.<google.protobuf.IStringValue>|null} [finalUrls] Ad finalUrls
                             * @property {Array.<google.protobuf.IStringValue>|null} [finalMobileUrls] Ad finalMobileUrls
                             * @property {google.protobuf.IStringValue|null} [trackingUrlTemplate] Ad trackingUrlTemplate
                             * @property {Array.<google.ads.googleads.v0.common.ICustomParameter>|null} [urlCustomParameters] Ad urlCustomParameters
                             * @property {google.protobuf.IStringValue|null} [displayUrl] Ad displayUrl
                             * @property {google.ads.googleads.v0.enums.AdTypeEnum.AdType|null} [type] Ad type
                             * @property {google.ads.googleads.v0.common.ITextAdInfo|null} [textAd] Ad textAd
                             * @property {google.ads.googleads.v0.common.IExpandedTextAdInfo|null} [expandedTextAd] Ad expandedTextAd
                             * @property {google.ads.googleads.v0.common.IDynamicSearchAdInfo|null} [dynamicSearchAd] Ad dynamicSearchAd
                             * @property {google.ads.googleads.v0.common.IResponsiveDisplayAdInfo|null} [responsiveDisplayAd] Ad responsiveDisplayAd
                             * @property {google.ads.googleads.v0.common.ICallOnlyAdInfo|null} [callOnlyAd] Ad callOnlyAd
                             * @property {google.ads.googleads.v0.common.IExpandedDynamicSearchAdInfo|null} [expandedDynamicSearchAd] Ad expandedDynamicSearchAd
                             * @property {google.ads.googleads.v0.common.IHotelAdInfo|null} [hotelAd] Ad hotelAd
                             */
    
                            /**
                             * Constructs a new Ad.
                             * @memberof google.ads.googleads.v0.common
                             * @classdesc Represents an Ad.
                             * @implements IAd
                             * @constructor
                             * @param {google.ads.googleads.v0.common.IAd=} [properties] Properties to set
                             */
                            function Ad(properties) {
                                this.finalUrls = [];
                                this.finalMobileUrls = [];
                                this.urlCustomParameters = [];
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }
    
                            /**
                             * Ad id.
                             * @member {google.protobuf.IInt64Value|null|undefined} id
                             * @memberof google.ads.googleads.v0.common.Ad
                             * @instance
                             */
                            Ad.prototype.id = null;
    
                            /**
                             * Ad finalUrls.
                             * @member {Array.<google.protobuf.IStringValue>} finalUrls
                             * @memberof google.ads.googleads.v0.common.Ad
                             * @instance
                             */
                            Ad.prototype.finalUrls = $util.emptyArray;
    
                            /**
                             * Ad finalMobileUrls.
                             * @member {Array.<google.protobuf.IStringValue>} finalMobileUrls
                             * @memberof google.ads.googleads.v0.common.Ad
                             * @instance
                             */
                            Ad.prototype.finalMobileUrls = $util.emptyArray;
    
                            /**
                             * Ad trackingUrlTemplate.
                             * @member {google.protobuf.IStringValue|null|undefined} trackingUrlTemplate
                             * @memberof google.ads.googleads.v0.common.Ad
                             * @instance
                             */
                            Ad.prototype.trackingUrlTemplate = null;
    
                            /**
                             * Ad urlCustomParameters.
                             * @member {Array.<google.ads.googleads.v0.common.ICustomParameter>} urlCustomParameters
                             * @memberof google.ads.googleads.v0.common.Ad
                             * @instance
                             */
                            Ad.prototype.urlCustomParameters = $util.emptyArray;
    
                            /**
                             * Ad displayUrl.
                             * @member {google.protobuf.IStringValue|null|undefined} displayUrl
                             * @memberof google.ads.googleads.v0.common.Ad
                             * @instance
                             */
                            Ad.prototype.displayUrl = null;
    
                            /**
                             * Ad type.
                             * @member {google.ads.googleads.v0.enums.AdTypeEnum.AdType} type
                             * @memberof google.ads.googleads.v0.common.Ad
                             * @instance
                             */
                            Ad.prototype.type = 0;
    
                            /**
                             * Ad textAd.
                             * @member {google.ads.googleads.v0.common.ITextAdInfo|null|undefined} textAd
                             * @memberof google.ads.googleads.v0.common.Ad
                             * @instance
                             */
                            Ad.prototype.textAd = null;
    
                            /**
                             * Ad expandedTextAd.
                             * @member {google.ads.googleads.v0.common.IExpandedTextAdInfo|null|undefined} expandedTextAd
                             * @memberof google.ads.googleads.v0.common.Ad
                             * @instance
                             */
                            Ad.prototype.expandedTextAd = null;
    
                            /**
                             * Ad dynamicSearchAd.
                             * @member {google.ads.googleads.v0.common.IDynamicSearchAdInfo|null|undefined} dynamicSearchAd
                             * @memberof google.ads.googleads.v0.common.Ad
                             * @instance
                             */
                            Ad.prototype.dynamicSearchAd = null;
    
                            /**
                             * Ad responsiveDisplayAd.
                             * @member {google.ads.googleads.v0.common.IResponsiveDisplayAdInfo|null|undefined} responsiveDisplayAd
                             * @memberof google.ads.googleads.v0.common.Ad
                             * @instance
                             */
                            Ad.prototype.responsiveDisplayAd = null;
    
                            /**
                             * Ad callOnlyAd.
                             * @member {google.ads.googleads.v0.common.ICallOnlyAdInfo|null|undefined} callOnlyAd
                             * @memberof google.ads.googleads.v0.common.Ad
                             * @instance
                             */
                            Ad.prototype.callOnlyAd = null;
    
                            /**
                             * Ad expandedDynamicSearchAd.
                             * @member {google.ads.googleads.v0.common.IExpandedDynamicSearchAdInfo|null|undefined} expandedDynamicSearchAd
                             * @memberof google.ads.googleads.v0.common.Ad
                             * @instance
                             */
                            Ad.prototype.expandedDynamicSearchAd = null;
    
                            /**
                             * Ad hotelAd.
                             * @member {google.ads.googleads.v0.common.IHotelAdInfo|null|undefined} hotelAd
                             * @memberof google.ads.googleads.v0.common.Ad
                             * @instance
                             */
                            Ad.prototype.hotelAd = null;
    
                            // OneOf field names bound to virtual getters and setters
                            var $oneOfFields;
    
                            /**
                             * Ad adData.
                             * @member {"textAd"|"expandedTextAd"|"dynamicSearchAd"|"responsiveDisplayAd"|"callOnlyAd"|"expandedDynamicSearchAd"|"hotelAd"|undefined} adData
                             * @memberof google.ads.googleads.v0.common.Ad
                             * @instance
                             */
                            Object.defineProperty(Ad.prototype, "adData", {
                                get: $util.oneOfGetter($oneOfFields = ["textAd", "expandedTextAd", "dynamicSearchAd", "responsiveDisplayAd", "callOnlyAd", "expandedDynamicSearchAd", "hotelAd"]),
                                set: $util.oneOfSetter($oneOfFields)
                            });
    
                            /**
                             * Creates a new Ad instance using the specified properties.
                             * @function create
                             * @memberof google.ads.googleads.v0.common.Ad
                             * @static
                             * @param {google.ads.googleads.v0.common.IAd=} [properties] Properties to set
                             * @returns {google.ads.googleads.v0.common.Ad} Ad instance
                             */
                            Ad.create = function create(properties) {
                                return new Ad(properties);
                            };
    
                            /**
                             * Encodes the specified Ad message. Does not implicitly {@link google.ads.googleads.v0.common.Ad.verify|verify} messages.
                             * @function encode
                             * @memberof google.ads.googleads.v0.common.Ad
                             * @static
                             * @param {google.ads.googleads.v0.common.IAd} message Ad message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            Ad.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                if (message.id != null && message.hasOwnProperty("id"))
                                    $root.google.protobuf.Int64Value.encode(message.id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                                if (message.finalUrls != null && message.finalUrls.length)
                                    for (var i = 0; i < message.finalUrls.length; ++i)
                                        $root.google.protobuf.StringValue.encode(message.finalUrls[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                                if (message.displayUrl != null && message.hasOwnProperty("displayUrl"))
                                    $root.google.protobuf.StringValue.encode(message.displayUrl, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                                if (message.type != null && message.hasOwnProperty("type"))
                                    writer.uint32(/* id 5, wireType 0 =*/40).int32(message.type);
                                if (message.textAd != null && message.hasOwnProperty("textAd"))
                                    $root.google.ads.googleads.v0.common.TextAdInfo.encode(message.textAd, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                                if (message.expandedTextAd != null && message.hasOwnProperty("expandedTextAd"))
                                    $root.google.ads.googleads.v0.common.ExpandedTextAdInfo.encode(message.expandedTextAd, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                                if (message.dynamicSearchAd != null && message.hasOwnProperty("dynamicSearchAd"))
                                    $root.google.ads.googleads.v0.common.DynamicSearchAdInfo.encode(message.dynamicSearchAd, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                                if (message.responsiveDisplayAd != null && message.hasOwnProperty("responsiveDisplayAd"))
                                    $root.google.ads.googleads.v0.common.ResponsiveDisplayAdInfo.encode(message.responsiveDisplayAd, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
                                if (message.urlCustomParameters != null && message.urlCustomParameters.length)
                                    for (var i = 0; i < message.urlCustomParameters.length; ++i)
                                        $root.google.ads.googleads.v0.common.CustomParameter.encode(message.urlCustomParameters[i], writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
                                if (message.trackingUrlTemplate != null && message.hasOwnProperty("trackingUrlTemplate"))
                                    $root.google.protobuf.StringValue.encode(message.trackingUrlTemplate, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
                                if (message.callOnlyAd != null && message.hasOwnProperty("callOnlyAd"))
                                    $root.google.ads.googleads.v0.common.CallOnlyAdInfo.encode(message.callOnlyAd, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
                                if (message.expandedDynamicSearchAd != null && message.hasOwnProperty("expandedDynamicSearchAd"))
                                    $root.google.ads.googleads.v0.common.ExpandedDynamicSearchAdInfo.encode(message.expandedDynamicSearchAd, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
                                if (message.hotelAd != null && message.hasOwnProperty("hotelAd"))
                                    $root.google.ads.googleads.v0.common.HotelAdInfo.encode(message.hotelAd, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
                                if (message.finalMobileUrls != null && message.finalMobileUrls.length)
                                    for (var i = 0; i < message.finalMobileUrls.length; ++i)
                                        $root.google.protobuf.StringValue.encode(message.finalMobileUrls[i], writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
                                return writer;
                            };
    
                            /**
                             * Encodes the specified Ad message, length delimited. Does not implicitly {@link google.ads.googleads.v0.common.Ad.verify|verify} messages.
                             * @function encodeDelimited
                             * @memberof google.ads.googleads.v0.common.Ad
                             * @static
                             * @param {google.ads.googleads.v0.common.IAd} message Ad message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            Ad.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };
    
                            /**
                             * Decodes an Ad message from the specified reader or buffer.
                             * @function decode
                             * @memberof google.ads.googleads.v0.common.Ad
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @param {number} [length] Message length if known beforehand
                             * @returns {google.ads.googleads.v0.common.Ad} Ad
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            Ad.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.ads.googleads.v0.common.Ad();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    case 1:
                                        message.id = $root.google.protobuf.Int64Value.decode(reader, reader.uint32());
                                        break;
                                    case 2:
                                        if (!(message.finalUrls && message.finalUrls.length))
                                            message.finalUrls = [];
                                        message.finalUrls.push($root.google.protobuf.StringValue.decode(reader, reader.uint32()));
                                        break;
                                    case 16:
                                        if (!(message.finalMobileUrls && message.finalMobileUrls.length))
                                            message.finalMobileUrls = [];
                                        message.finalMobileUrls.push($root.google.protobuf.StringValue.decode(reader, reader.uint32()));
                                        break;
                                    case 12:
                                        message.trackingUrlTemplate = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                                        break;
                                    case 10:
                                        if (!(message.urlCustomParameters && message.urlCustomParameters.length))
                                            message.urlCustomParameters = [];
                                        message.urlCustomParameters.push($root.google.ads.googleads.v0.common.CustomParameter.decode(reader, reader.uint32()));
                                        break;
                                    case 4:
                                        message.displayUrl = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                                        break;
                                    case 5:
                                        message.type = reader.int32();
                                        break;
                                    case 6:
                                        message.textAd = $root.google.ads.googleads.v0.common.TextAdInfo.decode(reader, reader.uint32());
                                        break;
                                    case 7:
                                        message.expandedTextAd = $root.google.ads.googleads.v0.common.ExpandedTextAdInfo.decode(reader, reader.uint32());
                                        break;
                                    case 8:
                                        message.dynamicSearchAd = $root.google.ads.googleads.v0.common.DynamicSearchAdInfo.decode(reader, reader.uint32());
                                        break;
                                    case 9:
                                        message.responsiveDisplayAd = $root.google.ads.googleads.v0.common.ResponsiveDisplayAdInfo.decode(reader, reader.uint32());
                                        break;
                                    case 13:
                                        message.callOnlyAd = $root.google.ads.googleads.v0.common.CallOnlyAdInfo.decode(reader, reader.uint32());
                                        break;
                                    case 14:
                                        message.expandedDynamicSearchAd = $root.google.ads.googleads.v0.common.ExpandedDynamicSearchAdInfo.decode(reader, reader.uint32());
                                        break;
                                    case 15:
                                        message.hotelAd = $root.google.ads.googleads.v0.common.HotelAdInfo.decode(reader, reader.uint32());
                                        break;
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };
    
                            /**
                             * Decodes an Ad message from the specified reader or buffer, length delimited.
                             * @function decodeDelimited
                             * @memberof google.ads.googleads.v0.common.Ad
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @returns {google.ads.googleads.v0.common.Ad} Ad
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            Ad.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };
    
                            /**
                             * Verifies an Ad message.
                             * @function verify
                             * @memberof google.ads.googleads.v0.common.Ad
                             * @static
                             * @param {Object.<string,*>} message Plain object to verify
                             * @returns {string|null} `null` if valid, otherwise the reason why it is not
                             */
                            Ad.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                var properties = {};
                                if (message.id != null && message.hasOwnProperty("id")) {
                                    var error = $root.google.protobuf.Int64Value.verify(message.id);
                                    if (error)
                                        return "id." + error;
                                }
                                if (message.finalUrls != null && message.hasOwnProperty("finalUrls")) {
                                    if (!Array.isArray(message.finalUrls))
                                        return "finalUrls: array expected";
                                    for (var i = 0; i < message.finalUrls.length; ++i) {
                                        var error = $root.google.protobuf.StringValue.verify(message.finalUrls[i]);
                                        if (error)
                                            return "finalUrls." + error;
                                    }
                                }
                                if (message.finalMobileUrls != null && message.hasOwnProperty("finalMobileUrls")) {
                                    if (!Array.isArray(message.finalMobileUrls))
                                        return "finalMobileUrls: array expected";
                                    for (var i = 0; i < message.finalMobileUrls.length; ++i) {
                                        var error = $root.google.protobuf.StringValue.verify(message.finalMobileUrls[i]);
                                        if (error)
                                            return "finalMobileUrls." + error;
                                    }
                                }
                                if (message.trackingUrlTemplate != null && message.hasOwnProperty("trackingUrlTemplate")) {
                                    var error = $root.google.protobuf.StringValue.verify(message.trackingUrlTemplate);
                                    if (error)
                                        return "trackingUrlTemplate." + error;
                                }
                                if (message.urlCustomParameters != null && message.hasOwnProperty("urlCustomParameters")) {
                                    if (!Array.isArray(message.urlCustomParameters))
                                        return "urlCustomParameters: array expected";
                                    for (var i = 0; i < message.urlCustomParameters.length; ++i) {
                                        var error = $root.google.ads.googleads.v0.common.CustomParameter.verify(message.urlCustomParameters[i]);
                                        if (error)
                                            return "urlCustomParameters." + error;
                                    }
                                }
                                if (message.displayUrl != null && message.hasOwnProperty("displayUrl")) {
                                    var error = $root.google.protobuf.StringValue.verify(message.displayUrl);
                                    if (error)
                                        return "displayUrl." + error;
                                }
                                if (message.type != null && message.hasOwnProperty("type"))
                                    switch (message.type) {
                                    default:
                                        return "type: enum value expected";
                                    case 0:
                                    case 1:
                                    case 2:
                                    case 3:
                                    case 4:
                                    case 5:
                                    case 6:
                                    case 7:
                                    case 8:
                                        break;
                                    }
                                if (message.textAd != null && message.hasOwnProperty("textAd")) {
                                    properties.adData = 1;
                                    {
                                        var error = $root.google.ads.googleads.v0.common.TextAdInfo.verify(message.textAd);
                                        if (error)
                                            return "textAd." + error;
                                    }
                                }
                                if (message.expandedTextAd != null && message.hasOwnProperty("expandedTextAd")) {
                                    if (properties.adData === 1)
                                        return "adData: multiple values";
                                    properties.adData = 1;
                                    {
                                        var error = $root.google.ads.googleads.v0.common.ExpandedTextAdInfo.verify(message.expandedTextAd);
                                        if (error)
                                            return "expandedTextAd." + error;
                                    }
                                }
                                if (message.dynamicSearchAd != null && message.hasOwnProperty("dynamicSearchAd")) {
                                    if (properties.adData === 1)
                                        return "adData: multiple values";
                                    properties.adData = 1;
                                    {
                                        var error = $root.google.ads.googleads.v0.common.DynamicSearchAdInfo.verify(message.dynamicSearchAd);
                                        if (error)
                                            return "dynamicSearchAd." + error;
                                    }
                                }
                                if (message.responsiveDisplayAd != null && message.hasOwnProperty("responsiveDisplayAd")) {
                                    if (properties.adData === 1)
                                        return "adData: multiple values";
                                    properties.adData = 1;
                                    {
                                        var error = $root.google.ads.googleads.v0.common.ResponsiveDisplayAdInfo.verify(message.responsiveDisplayAd);
                                        if (error)
                                            return "responsiveDisplayAd." + error;
                                    }
                                }
                                if (message.callOnlyAd != null && message.hasOwnProperty("callOnlyAd")) {
                                    if (properties.adData === 1)
                                        return "adData: multiple values";
                                    properties.adData = 1;
                                    {
                                        var error = $root.google.ads.googleads.v0.common.CallOnlyAdInfo.verify(message.callOnlyAd);
                                        if (error)
                                            return "callOnlyAd." + error;
                                    }
                                }
                                if (message.expandedDynamicSearchAd != null && message.hasOwnProperty("expandedDynamicSearchAd")) {
                                    if (properties.adData === 1)
                                        return "adData: multiple values";
                                    properties.adData = 1;
                                    {
                                        var error = $root.google.ads.googleads.v0.common.ExpandedDynamicSearchAdInfo.verify(message.expandedDynamicSearchAd);
                                        if (error)
                                            return "expandedDynamicSearchAd." + error;
                                    }
                                }
                                if (message.hotelAd != null && message.hasOwnProperty("hotelAd")) {
                                    if (properties.adData === 1)
                                        return "adData: multiple values";
                                    properties.adData = 1;
                                    {
                                        var error = $root.google.ads.googleads.v0.common.HotelAdInfo.verify(message.hotelAd);
                                        if (error)
                                            return "hotelAd." + error;
                                    }
                                }
                                return null;
                            };
    
                            /**
                             * Creates an Ad message from a plain object. Also converts values to their respective internal types.
                             * @function fromObject
                             * @memberof google.ads.googleads.v0.common.Ad
                             * @static
                             * @param {Object.<string,*>} object Plain object
                             * @returns {google.ads.googleads.v0.common.Ad} Ad
                             */
                            Ad.fromObject = function fromObject(object) {
                                if (object instanceof $root.google.ads.googleads.v0.common.Ad)
                                    return object;
                                var message = new $root.google.ads.googleads.v0.common.Ad();
                                if (object.id != null) {
                                    if (typeof object.id !== "object")
                                        throw TypeError(".google.ads.googleads.v0.common.Ad.id: object expected");
                                    message.id = $root.google.protobuf.Int64Value.fromObject(object.id);
                                }
                                if (object.finalUrls) {
                                    if (!Array.isArray(object.finalUrls))
                                        throw TypeError(".google.ads.googleads.v0.common.Ad.finalUrls: array expected");
                                    message.finalUrls = [];
                                    for (var i = 0; i < object.finalUrls.length; ++i) {
                                        if (typeof object.finalUrls[i] !== "object")
                                            throw TypeError(".google.ads.googleads.v0.common.Ad.finalUrls: object expected");
                                        message.finalUrls[i] = $root.google.protobuf.StringValue.fromObject(object.finalUrls[i]);
                                    }
                                }
                                if (object.finalMobileUrls) {
                                    if (!Array.isArray(object.finalMobileUrls))
                                        throw TypeError(".google.ads.googleads.v0.common.Ad.finalMobileUrls: array expected");
                                    message.finalMobileUrls = [];
                                    for (var i = 0; i < object.finalMobileUrls.length; ++i) {
                                        if (typeof object.finalMobileUrls[i] !== "object")
                                            throw TypeError(".google.ads.googleads.v0.common.Ad.finalMobileUrls: object expected");
                                        message.finalMobileUrls[i] = $root.google.protobuf.StringValue.fromObject(object.finalMobileUrls[i]);
                                    }
                                }
                                if (object.trackingUrlTemplate != null) {
                                    if (typeof object.trackingUrlTemplate !== "object")
                                        throw TypeError(".google.ads.googleads.v0.common.Ad.trackingUrlTemplate: object expected");
                                    message.trackingUrlTemplate = $root.google.protobuf.StringValue.fromObject(object.trackingUrlTemplate);
                                }
                                if (object.urlCustomParameters) {
                                    if (!Array.isArray(object.urlCustomParameters))
                                        throw TypeError(".google.ads.googleads.v0.common.Ad.urlCustomParameters: array expected");
                                    message.urlCustomParameters = [];
                                    for (var i = 0; i < object.urlCustomParameters.length; ++i) {
                                        if (typeof object.urlCustomParameters[i] !== "object")
                                            throw TypeError(".google.ads.googleads.v0.common.Ad.urlCustomParameters: object expected");
                                        message.urlCustomParameters[i] = $root.google.ads.googleads.v0.common.CustomParameter.fromObject(object.urlCustomParameters[i]);
                                    }
                                }
                                if (object.displayUrl != null) {
                                    if (typeof object.displayUrl !== "object")
                                        throw TypeError(".google.ads.googleads.v0.common.Ad.displayUrl: object expected");
                                    message.displayUrl = $root.google.protobuf.StringValue.fromObject(object.displayUrl);
                                }
                                switch (object.type) {
                                case "UNSPECIFIED":
                                case 0:
                                    message.type = 0;
                                    break;
                                case "UNKNOWN":
                                case 1:
                                    message.type = 1;
                                    break;
                                case "TEXT_AD":
                                case 2:
                                    message.type = 2;
                                    break;
                                case "EXPANDED_TEXT_AD":
                                case 3:
                                    message.type = 3;
                                    break;
                                case "DYNAMIC_SEARCH_AD":
                                case 4:
                                    message.type = 4;
                                    break;
                                case "RESPONSIVE_DISPLAY_AD":
                                case 5:
                                    message.type = 5;
                                    break;
                                case "CALL_ONLY_AD":
                                case 6:
                                    message.type = 6;
                                    break;
                                case "EXPANDED_DYNAMIC_SEARCH_AD":
                                case 7:
                                    message.type = 7;
                                    break;
                                case "HOTEL_AD":
                                case 8:
                                    message.type = 8;
                                    break;
                                }
                                if (object.textAd != null) {
                                    if (typeof object.textAd !== "object")
                                        throw TypeError(".google.ads.googleads.v0.common.Ad.textAd: object expected");
                                    message.textAd = $root.google.ads.googleads.v0.common.TextAdInfo.fromObject(object.textAd);
                                }
                                if (object.expandedTextAd != null) {
                                    if (typeof object.expandedTextAd !== "object")
                                        throw TypeError(".google.ads.googleads.v0.common.Ad.expandedTextAd: object expected");
                                    message.expandedTextAd = $root.google.ads.googleads.v0.common.ExpandedTextAdInfo.fromObject(object.expandedTextAd);
                                }
                                if (object.dynamicSearchAd != null) {
                                    if (typeof object.dynamicSearchAd !== "object")
                                        throw TypeError(".google.ads.googleads.v0.common.Ad.dynamicSearchAd: object expected");
                                    message.dynamicSearchAd = $root.google.ads.googleads.v0.common.DynamicSearchAdInfo.fromObject(object.dynamicSearchAd);
                                }
                                if (object.responsiveDisplayAd != null) {
                                    if (typeof object.responsiveDisplayAd !== "object")
                                        throw TypeError(".google.ads.googleads.v0.common.Ad.responsiveDisplayAd: object expected");
                                    message.responsiveDisplayAd = $root.google.ads.googleads.v0.common.ResponsiveDisplayAdInfo.fromObject(object.responsiveDisplayAd);
                                }
                                if (object.callOnlyAd != null) {
                                    if (typeof object.callOnlyAd !== "object")
                                        throw TypeError(".google.ads.googleads.v0.common.Ad.callOnlyAd: object expected");
                                    message.callOnlyAd = $root.google.ads.googleads.v0.common.CallOnlyAdInfo.fromObject(object.callOnlyAd);
                                }
                                if (object.expandedDynamicSearchAd != null) {
                                    if (typeof object.expandedDynamicSearchAd !== "object")
                                        throw TypeError(".google.ads.googleads.v0.common.Ad.expandedDynamicSearchAd: object expected");
                                    message.expandedDynamicSearchAd = $root.google.ads.googleads.v0.common.ExpandedDynamicSearchAdInfo.fromObject(object.expandedDynamicSearchAd);
                                }
                                if (object.hotelAd != null) {
                                    if (typeof object.hotelAd !== "object")
                                        throw TypeError(".google.ads.googleads.v0.common.Ad.hotelAd: object expected");
                                    message.hotelAd = $root.google.ads.googleads.v0.common.HotelAdInfo.fromObject(object.hotelAd);
                                }
                                return message;
                            };
    
                            /**
                             * Creates a plain object from an Ad message. Also converts values to other types if specified.
                             * @function toObject
                             * @memberof google.ads.googleads.v0.common.Ad
                             * @static
                             * @param {google.ads.googleads.v0.common.Ad} message Ad
                             * @param {$protobuf.IConversionOptions} [options] Conversion options
                             * @returns {Object.<string,*>} Plain object
                             */
                            Ad.toObject = function toObject(message, options) {
                                if (!options)
                                    options = {};
                                var object = {};
                                if (options.arrays || options.defaults) {
                                    object.finalUrls = [];
                                    object.urlCustomParameters = [];
                                    object.finalMobileUrls = [];
                                }
                                if (options.defaults) {
                                    object.id = null;
                                    object.displayUrl = null;
                                    object.type = options.enums === String ? "UNSPECIFIED" : 0;
                                    object.trackingUrlTemplate = null;
                                }
                                if (message.id != null && message.hasOwnProperty("id"))
                                    object.id = $root.google.protobuf.Int64Value.toObject(message.id, options);
                                if (message.finalUrls && message.finalUrls.length) {
                                    object.finalUrls = [];
                                    for (var j = 0; j < message.finalUrls.length; ++j)
                                        object.finalUrls[j] = $root.google.protobuf.StringValue.toObject(message.finalUrls[j], options);
                                }
                                if (message.displayUrl != null && message.hasOwnProperty("displayUrl"))
                                    object.displayUrl = $root.google.protobuf.StringValue.toObject(message.displayUrl, options);
                                if (message.type != null && message.hasOwnProperty("type"))
                                    object.type = options.enums === String ? $root.google.ads.googleads.v0.enums.AdTypeEnum.AdType[message.type] : message.type;
                                if (message.textAd != null && message.hasOwnProperty("textAd")) {
                                    object.textAd = $root.google.ads.googleads.v0.common.TextAdInfo.toObject(message.textAd, options);
                                    if (options.oneofs)
                                        object.adData = "textAd";
                                }
                                if (message.expandedTextAd != null && message.hasOwnProperty("expandedTextAd")) {
                                    object.expandedTextAd = $root.google.ads.googleads.v0.common.ExpandedTextAdInfo.toObject(message.expandedTextAd, options);
                                    if (options.oneofs)
                                        object.adData = "expandedTextAd";
                                }
                                if (message.dynamicSearchAd != null && message.hasOwnProperty("dynamicSearchAd")) {
                                    object.dynamicSearchAd = $root.google.ads.googleads.v0.common.DynamicSearchAdInfo.toObject(message.dynamicSearchAd, options);
                                    if (options.oneofs)
                                        object.adData = "dynamicSearchAd";
                                }
                                if (message.responsiveDisplayAd != null && message.hasOwnProperty("responsiveDisplayAd")) {
                                    object.responsiveDisplayAd = $root.google.ads.googleads.v0.common.ResponsiveDisplayAdInfo.toObject(message.responsiveDisplayAd, options);
                                    if (options.oneofs)
                                        object.adData = "responsiveDisplayAd";
                                }
                                if (message.urlCustomParameters && message.urlCustomParameters.length) {
                                    object.urlCustomParameters = [];
                                    for (var j = 0; j < message.urlCustomParameters.length; ++j)
                                        object.urlCustomParameters[j] = $root.google.ads.googleads.v0.common.CustomParameter.toObject(message.urlCustomParameters[j], options);
                                }
                                if (message.trackingUrlTemplate != null && message.hasOwnProperty("trackingUrlTemplate"))
                                    object.trackingUrlTemplate = $root.google.protobuf.StringValue.toObject(message.trackingUrlTemplate, options);
                                if (message.callOnlyAd != null && message.hasOwnProperty("callOnlyAd")) {
                                    object.callOnlyAd = $root.google.ads.googleads.v0.common.CallOnlyAdInfo.toObject(message.callOnlyAd, options);
                                    if (options.oneofs)
                                        object.adData = "callOnlyAd";
                                }
                                if (message.expandedDynamicSearchAd != null && message.hasOwnProperty("expandedDynamicSearchAd")) {
                                    object.expandedDynamicSearchAd = $root.google.ads.googleads.v0.common.ExpandedDynamicSearchAdInfo.toObject(message.expandedDynamicSearchAd, options);
                                    if (options.oneofs)
                                        object.adData = "expandedDynamicSearchAd";
                                }
                                if (message.hotelAd != null && message.hasOwnProperty("hotelAd")) {
                                    object.hotelAd = $root.google.ads.googleads.v0.common.HotelAdInfo.toObject(message.hotelAd, options);
                                    if (options.oneofs)
                                        object.adData = "hotelAd";
                                }
                                if (message.finalMobileUrls && message.finalMobileUrls.length) {
                                    object.finalMobileUrls = [];
                                    for (var j = 0; j < message.finalMobileUrls.length; ++j)
                                        object.finalMobileUrls[j] = $root.google.protobuf.StringValue.toObject(message.finalMobileUrls[j], options);
                                }
                                return object;
                            };
    
                            /**
                             * Converts this Ad to JSON.
                             * @function toJSON
                             * @memberof google.ads.googleads.v0.common.Ad
                             * @instance
                             * @returns {Object.<string,*>} JSON object
                             */
                            Ad.prototype.toJSON = function toJSON() {
                                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                            };
    
                            return Ad;
                        })();
    
                        common.TextAdInfo = (function() {
    
                            /**
                             * Properties of a TextAdInfo.
                             * @memberof google.ads.googleads.v0.common
                             * @interface ITextAdInfo
                             * @property {google.protobuf.IStringValue|null} [headline] TextAdInfo headline
                             * @property {google.protobuf.IStringValue|null} [description1] TextAdInfo description1
                             * @property {google.protobuf.IStringValue|null} [description2] TextAdInfo description2
                             */
    
                            /**
                             * Constructs a new TextAdInfo.
                             * @memberof google.ads.googleads.v0.common
                             * @classdesc Represents a TextAdInfo.
                             * @implements ITextAdInfo
                             * @constructor
                             * @param {google.ads.googleads.v0.common.ITextAdInfo=} [properties] Properties to set
                             */
                            function TextAdInfo(properties) {
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }
    
                            /**
                             * TextAdInfo headline.
                             * @member {google.protobuf.IStringValue|null|undefined} headline
                             * @memberof google.ads.googleads.v0.common.TextAdInfo
                             * @instance
                             */
                            TextAdInfo.prototype.headline = null;
    
                            /**
                             * TextAdInfo description1.
                             * @member {google.protobuf.IStringValue|null|undefined} description1
                             * @memberof google.ads.googleads.v0.common.TextAdInfo
                             * @instance
                             */
                            TextAdInfo.prototype.description1 = null;
    
                            /**
                             * TextAdInfo description2.
                             * @member {google.protobuf.IStringValue|null|undefined} description2
                             * @memberof google.ads.googleads.v0.common.TextAdInfo
                             * @instance
                             */
                            TextAdInfo.prototype.description2 = null;
    
                            /**
                             * Creates a new TextAdInfo instance using the specified properties.
                             * @function create
                             * @memberof google.ads.googleads.v0.common.TextAdInfo
                             * @static
                             * @param {google.ads.googleads.v0.common.ITextAdInfo=} [properties] Properties to set
                             * @returns {google.ads.googleads.v0.common.TextAdInfo} TextAdInfo instance
                             */
                            TextAdInfo.create = function create(properties) {
                                return new TextAdInfo(properties);
                            };
    
                            /**
                             * Encodes the specified TextAdInfo message. Does not implicitly {@link google.ads.googleads.v0.common.TextAdInfo.verify|verify} messages.
                             * @function encode
                             * @memberof google.ads.googleads.v0.common.TextAdInfo
                             * @static
                             * @param {google.ads.googleads.v0.common.ITextAdInfo} message TextAdInfo message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            TextAdInfo.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                if (message.headline != null && message.hasOwnProperty("headline"))
                                    $root.google.protobuf.StringValue.encode(message.headline, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                                if (message.description1 != null && message.hasOwnProperty("description1"))
                                    $root.google.protobuf.StringValue.encode(message.description1, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                                if (message.description2 != null && message.hasOwnProperty("description2"))
                                    $root.google.protobuf.StringValue.encode(message.description2, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                                return writer;
                            };
    
                            /**
                             * Encodes the specified TextAdInfo message, length delimited. Does not implicitly {@link google.ads.googleads.v0.common.TextAdInfo.verify|verify} messages.
                             * @function encodeDelimited
                             * @memberof google.ads.googleads.v0.common.TextAdInfo
                             * @static
                             * @param {google.ads.googleads.v0.common.ITextAdInfo} message TextAdInfo message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            TextAdInfo.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };
    
                            /**
                             * Decodes a TextAdInfo message from the specified reader or buffer.
                             * @function decode
                             * @memberof google.ads.googleads.v0.common.TextAdInfo
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @param {number} [length] Message length if known beforehand
                             * @returns {google.ads.googleads.v0.common.TextAdInfo} TextAdInfo
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            TextAdInfo.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.ads.googleads.v0.common.TextAdInfo();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    case 1:
                                        message.headline = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                                        break;
                                    case 2:
                                        message.description1 = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                                        break;
                                    case 3:
                                        message.description2 = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                                        break;
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };
    
                            /**
                             * Decodes a TextAdInfo message from the specified reader or buffer, length delimited.
                             * @function decodeDelimited
                             * @memberof google.ads.googleads.v0.common.TextAdInfo
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @returns {google.ads.googleads.v0.common.TextAdInfo} TextAdInfo
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            TextAdInfo.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };
    
                            /**
                             * Verifies a TextAdInfo message.
                             * @function verify
                             * @memberof google.ads.googleads.v0.common.TextAdInfo
                             * @static
                             * @param {Object.<string,*>} message Plain object to verify
                             * @returns {string|null} `null` if valid, otherwise the reason why it is not
                             */
                            TextAdInfo.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                if (message.headline != null && message.hasOwnProperty("headline")) {
                                    var error = $root.google.protobuf.StringValue.verify(message.headline);
                                    if (error)
                                        return "headline." + error;
                                }
                                if (message.description1 != null && message.hasOwnProperty("description1")) {
                                    var error = $root.google.protobuf.StringValue.verify(message.description1);
                                    if (error)
                                        return "description1." + error;
                                }
                                if (message.description2 != null && message.hasOwnProperty("description2")) {
                                    var error = $root.google.protobuf.StringValue.verify(message.description2);
                                    if (error)
                                        return "description2." + error;
                                }
                                return null;
                            };
    
                            /**
                             * Creates a TextAdInfo message from a plain object. Also converts values to their respective internal types.
                             * @function fromObject
                             * @memberof google.ads.googleads.v0.common.TextAdInfo
                             * @static
                             * @param {Object.<string,*>} object Plain object
                             * @returns {google.ads.googleads.v0.common.TextAdInfo} TextAdInfo
                             */
                            TextAdInfo.fromObject = function fromObject(object) {
                                if (object instanceof $root.google.ads.googleads.v0.common.TextAdInfo)
                                    return object;
                                var message = new $root.google.ads.googleads.v0.common.TextAdInfo();
                                if (object.headline != null) {
                                    if (typeof object.headline !== "object")
                                        throw TypeError(".google.ads.googleads.v0.common.TextAdInfo.headline: object expected");
                                    message.headline = $root.google.protobuf.StringValue.fromObject(object.headline);
                                }
                                if (object.description1 != null) {
                                    if (typeof object.description1 !== "object")
                                        throw TypeError(".google.ads.googleads.v0.common.TextAdInfo.description1: object expected");
                                    message.description1 = $root.google.protobuf.StringValue.fromObject(object.description1);
                                }
                                if (object.description2 != null) {
                                    if (typeof object.description2 !== "object")
                                        throw TypeError(".google.ads.googleads.v0.common.TextAdInfo.description2: object expected");
                                    message.description2 = $root.google.protobuf.StringValue.fromObject(object.description2);
                                }
                                return message;
                            };
    
                            /**
                             * Creates a plain object from a TextAdInfo message. Also converts values to other types if specified.
                             * @function toObject
                             * @memberof google.ads.googleads.v0.common.TextAdInfo
                             * @static
                             * @param {google.ads.googleads.v0.common.TextAdInfo} message TextAdInfo
                             * @param {$protobuf.IConversionOptions} [options] Conversion options
                             * @returns {Object.<string,*>} Plain object
                             */
                            TextAdInfo.toObject = function toObject(message, options) {
                                if (!options)
                                    options = {};
                                var object = {};
                                if (options.defaults) {
                                    object.headline = null;
                                    object.description1 = null;
                                    object.description2 = null;
                                }
                                if (message.headline != null && message.hasOwnProperty("headline"))
                                    object.headline = $root.google.protobuf.StringValue.toObject(message.headline, options);
                                if (message.description1 != null && message.hasOwnProperty("description1"))
                                    object.description1 = $root.google.protobuf.StringValue.toObject(message.description1, options);
                                if (message.description2 != null && message.hasOwnProperty("description2"))
                                    object.description2 = $root.google.protobuf.StringValue.toObject(message.description2, options);
                                return object;
                            };
    
                            /**
                             * Converts this TextAdInfo to JSON.
                             * @function toJSON
                             * @memberof google.ads.googleads.v0.common.TextAdInfo
                             * @instance
                             * @returns {Object.<string,*>} JSON object
                             */
                            TextAdInfo.prototype.toJSON = function toJSON() {
                                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                            };
    
                            return TextAdInfo;
                        })();
    
                        common.ExpandedTextAdInfo = (function() {
    
                            /**
                             * Properties of an ExpandedTextAdInfo.
                             * @memberof google.ads.googleads.v0.common
                             * @interface IExpandedTextAdInfo
                             * @property {google.protobuf.IStringValue|null} [headlinePart1] ExpandedTextAdInfo headlinePart1
                             * @property {google.protobuf.IStringValue|null} [headlinePart2] ExpandedTextAdInfo headlinePart2
                             * @property {google.protobuf.IStringValue|null} [description] ExpandedTextAdInfo description
                             * @property {google.protobuf.IStringValue|null} [path1] ExpandedTextAdInfo path1
                             * @property {google.protobuf.IStringValue|null} [path2] ExpandedTextAdInfo path2
                             */
    
                            /**
                             * Constructs a new ExpandedTextAdInfo.
                             * @memberof google.ads.googleads.v0.common
                             * @classdesc Represents an ExpandedTextAdInfo.
                             * @implements IExpandedTextAdInfo
                             * @constructor
                             * @param {google.ads.googleads.v0.common.IExpandedTextAdInfo=} [properties] Properties to set
                             */
                            function ExpandedTextAdInfo(properties) {
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }
    
                            /**
                             * ExpandedTextAdInfo headlinePart1.
                             * @member {google.protobuf.IStringValue|null|undefined} headlinePart1
                             * @memberof google.ads.googleads.v0.common.ExpandedTextAdInfo
                             * @instance
                             */
                            ExpandedTextAdInfo.prototype.headlinePart1 = null;
    
                            /**
                             * ExpandedTextAdInfo headlinePart2.
                             * @member {google.protobuf.IStringValue|null|undefined} headlinePart2
                             * @memberof google.ads.googleads.v0.common.ExpandedTextAdInfo
                             * @instance
                             */
                            ExpandedTextAdInfo.prototype.headlinePart2 = null;
    
                            /**
                             * ExpandedTextAdInfo description.
                             * @member {google.protobuf.IStringValue|null|undefined} description
                             * @memberof google.ads.googleads.v0.common.ExpandedTextAdInfo
                             * @instance
                             */
                            ExpandedTextAdInfo.prototype.description = null;
    
                            /**
                             * ExpandedTextAdInfo path1.
                             * @member {google.protobuf.IStringValue|null|undefined} path1
                             * @memberof google.ads.googleads.v0.common.ExpandedTextAdInfo
                             * @instance
                             */
                            ExpandedTextAdInfo.prototype.path1 = null;
    
                            /**
                             * ExpandedTextAdInfo path2.
                             * @member {google.protobuf.IStringValue|null|undefined} path2
                             * @memberof google.ads.googleads.v0.common.ExpandedTextAdInfo
                             * @instance
                             */
                            ExpandedTextAdInfo.prototype.path2 = null;
    
                            /**
                             * Creates a new ExpandedTextAdInfo instance using the specified properties.
                             * @function create
                             * @memberof google.ads.googleads.v0.common.ExpandedTextAdInfo
                             * @static
                             * @param {google.ads.googleads.v0.common.IExpandedTextAdInfo=} [properties] Properties to set
                             * @returns {google.ads.googleads.v0.common.ExpandedTextAdInfo} ExpandedTextAdInfo instance
                             */
                            ExpandedTextAdInfo.create = function create(properties) {
                                return new ExpandedTextAdInfo(properties);
                            };
    
                            /**
                             * Encodes the specified ExpandedTextAdInfo message. Does not implicitly {@link google.ads.googleads.v0.common.ExpandedTextAdInfo.verify|verify} messages.
                             * @function encode
                             * @memberof google.ads.googleads.v0.common.ExpandedTextAdInfo
                             * @static
                             * @param {google.ads.googleads.v0.common.IExpandedTextAdInfo} message ExpandedTextAdInfo message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            ExpandedTextAdInfo.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                if (message.headlinePart1 != null && message.hasOwnProperty("headlinePart1"))
                                    $root.google.protobuf.StringValue.encode(message.headlinePart1, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                                if (message.headlinePart2 != null && message.hasOwnProperty("headlinePart2"))
                                    $root.google.protobuf.StringValue.encode(message.headlinePart2, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                                if (message.description != null && message.hasOwnProperty("description"))
                                    $root.google.protobuf.StringValue.encode(message.description, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                                if (message.path1 != null && message.hasOwnProperty("path1"))
                                    $root.google.protobuf.StringValue.encode(message.path1, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                                if (message.path2 != null && message.hasOwnProperty("path2"))
                                    $root.google.protobuf.StringValue.encode(message.path2, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                                return writer;
                            };
    
                            /**
                             * Encodes the specified ExpandedTextAdInfo message, length delimited. Does not implicitly {@link google.ads.googleads.v0.common.ExpandedTextAdInfo.verify|verify} messages.
                             * @function encodeDelimited
                             * @memberof google.ads.googleads.v0.common.ExpandedTextAdInfo
                             * @static
                             * @param {google.ads.googleads.v0.common.IExpandedTextAdInfo} message ExpandedTextAdInfo message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            ExpandedTextAdInfo.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };
    
                            /**
                             * Decodes an ExpandedTextAdInfo message from the specified reader or buffer.
                             * @function decode
                             * @memberof google.ads.googleads.v0.common.ExpandedTextAdInfo
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @param {number} [length] Message length if known beforehand
                             * @returns {google.ads.googleads.v0.common.ExpandedTextAdInfo} ExpandedTextAdInfo
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            ExpandedTextAdInfo.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.ads.googleads.v0.common.ExpandedTextAdInfo();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    case 1:
                                        message.headlinePart1 = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                                        break;
                                    case 2:
                                        message.headlinePart2 = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                                        break;
                                    case 3:
                                        message.description = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                                        break;
                                    case 4:
                                        message.path1 = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                                        break;
                                    case 5:
                                        message.path2 = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                                        break;
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };
    
                            /**
                             * Decodes an ExpandedTextAdInfo message from the specified reader or buffer, length delimited.
                             * @function decodeDelimited
                             * @memberof google.ads.googleads.v0.common.ExpandedTextAdInfo
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @returns {google.ads.googleads.v0.common.ExpandedTextAdInfo} ExpandedTextAdInfo
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            ExpandedTextAdInfo.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };
    
                            /**
                             * Verifies an ExpandedTextAdInfo message.
                             * @function verify
                             * @memberof google.ads.googleads.v0.common.ExpandedTextAdInfo
                             * @static
                             * @param {Object.<string,*>} message Plain object to verify
                             * @returns {string|null} `null` if valid, otherwise the reason why it is not
                             */
                            ExpandedTextAdInfo.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                if (message.headlinePart1 != null && message.hasOwnProperty("headlinePart1")) {
                                    var error = $root.google.protobuf.StringValue.verify(message.headlinePart1);
                                    if (error)
                                        return "headlinePart1." + error;
                                }
                                if (message.headlinePart2 != null && message.hasOwnProperty("headlinePart2")) {
                                    var error = $root.google.protobuf.StringValue.verify(message.headlinePart2);
                                    if (error)
                                        return "headlinePart2." + error;
                                }
                                if (message.description != null && message.hasOwnProperty("description")) {
                                    var error = $root.google.protobuf.StringValue.verify(message.description);
                                    if (error)
                                        return "description." + error;
                                }
                                if (message.path1 != null && message.hasOwnProperty("path1")) {
                                    var error = $root.google.protobuf.StringValue.verify(message.path1);
                                    if (error)
                                        return "path1." + error;
                                }
                                if (message.path2 != null && message.hasOwnProperty("path2")) {
                                    var error = $root.google.protobuf.StringValue.verify(message.path2);
                                    if (error)
                                        return "path2." + error;
                                }
                                return null;
                            };
    
                            /**
                             * Creates an ExpandedTextAdInfo message from a plain object. Also converts values to their respective internal types.
                             * @function fromObject
                             * @memberof google.ads.googleads.v0.common.ExpandedTextAdInfo
                             * @static
                             * @param {Object.<string,*>} object Plain object
                             * @returns {google.ads.googleads.v0.common.ExpandedTextAdInfo} ExpandedTextAdInfo
                             */
                            ExpandedTextAdInfo.fromObject = function fromObject(object) {
                                if (object instanceof $root.google.ads.googleads.v0.common.ExpandedTextAdInfo)
                                    return object;
                                var message = new $root.google.ads.googleads.v0.common.ExpandedTextAdInfo();
                                if (object.headlinePart1 != null) {
                                    if (typeof object.headlinePart1 !== "object")
                                        throw TypeError(".google.ads.googleads.v0.common.ExpandedTextAdInfo.headlinePart1: object expected");
                                    message.headlinePart1 = $root.google.protobuf.StringValue.fromObject(object.headlinePart1);
                                }
                                if (object.headlinePart2 != null) {
                                    if (typeof object.headlinePart2 !== "object")
                                        throw TypeError(".google.ads.googleads.v0.common.ExpandedTextAdInfo.headlinePart2: object expected");
                                    message.headlinePart2 = $root.google.protobuf.StringValue.fromObject(object.headlinePart2);
                                }
                                if (object.description != null) {
                                    if (typeof object.description !== "object")
                                        throw TypeError(".google.ads.googleads.v0.common.ExpandedTextAdInfo.description: object expected");
                                    message.description = $root.google.protobuf.StringValue.fromObject(object.description);
                                }
                                if (object.path1 != null) {
                                    if (typeof object.path1 !== "object")
                                        throw TypeError(".google.ads.googleads.v0.common.ExpandedTextAdInfo.path1: object expected");
                                    message.path1 = $root.google.protobuf.StringValue.fromObject(object.path1);
                                }
                                if (object.path2 != null) {
                                    if (typeof object.path2 !== "object")
                                        throw TypeError(".google.ads.googleads.v0.common.ExpandedTextAdInfo.path2: object expected");
                                    message.path2 = $root.google.protobuf.StringValue.fromObject(object.path2);
                                }
                                return message;
                            };
    
                            /**
                             * Creates a plain object from an ExpandedTextAdInfo message. Also converts values to other types if specified.
                             * @function toObject
                             * @memberof google.ads.googleads.v0.common.ExpandedTextAdInfo
                             * @static
                             * @param {google.ads.googleads.v0.common.ExpandedTextAdInfo} message ExpandedTextAdInfo
                             * @param {$protobuf.IConversionOptions} [options] Conversion options
                             * @returns {Object.<string,*>} Plain object
                             */
                            ExpandedTextAdInfo.toObject = function toObject(message, options) {
                                if (!options)
                                    options = {};
                                var object = {};
                                if (options.defaults) {
                                    object.headlinePart1 = null;
                                    object.headlinePart2 = null;
                                    object.description = null;
                                    object.path1 = null;
                                    object.path2 = null;
                                }
                                if (message.headlinePart1 != null && message.hasOwnProperty("headlinePart1"))
                                    object.headlinePart1 = $root.google.protobuf.StringValue.toObject(message.headlinePart1, options);
                                if (message.headlinePart2 != null && message.hasOwnProperty("headlinePart2"))
                                    object.headlinePart2 = $root.google.protobuf.StringValue.toObject(message.headlinePart2, options);
                                if (message.description != null && message.hasOwnProperty("description"))
                                    object.description = $root.google.protobuf.StringValue.toObject(message.description, options);
                                if (message.path1 != null && message.hasOwnProperty("path1"))
                                    object.path1 = $root.google.protobuf.StringValue.toObject(message.path1, options);
                                if (message.path2 != null && message.hasOwnProperty("path2"))
                                    object.path2 = $root.google.protobuf.StringValue.toObject(message.path2, options);
                                return object;
                            };
    
                            /**
                             * Converts this ExpandedTextAdInfo to JSON.
                             * @function toJSON
                             * @memberof google.ads.googleads.v0.common.ExpandedTextAdInfo
                             * @instance
                             * @returns {Object.<string,*>} JSON object
                             */
                            ExpandedTextAdInfo.prototype.toJSON = function toJSON() {
                                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                            };
    
                            return ExpandedTextAdInfo;
                        })();
    
                        common.DynamicSearchAdInfo = (function() {
    
                            /**
                             * Properties of a DynamicSearchAdInfo.
                             * @memberof google.ads.googleads.v0.common
                             * @interface IDynamicSearchAdInfo
                             * @property {google.protobuf.IStringValue|null} [description1] DynamicSearchAdInfo description1
                             * @property {google.protobuf.IStringValue|null} [description2] DynamicSearchAdInfo description2
                             */
    
                            /**
                             * Constructs a new DynamicSearchAdInfo.
                             * @memberof google.ads.googleads.v0.common
                             * @classdesc Represents a DynamicSearchAdInfo.
                             * @implements IDynamicSearchAdInfo
                             * @constructor
                             * @param {google.ads.googleads.v0.common.IDynamicSearchAdInfo=} [properties] Properties to set
                             */
                            function DynamicSearchAdInfo(properties) {
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }
    
                            /**
                             * DynamicSearchAdInfo description1.
                             * @member {google.protobuf.IStringValue|null|undefined} description1
                             * @memberof google.ads.googleads.v0.common.DynamicSearchAdInfo
                             * @instance
                             */
                            DynamicSearchAdInfo.prototype.description1 = null;
    
                            /**
                             * DynamicSearchAdInfo description2.
                             * @member {google.protobuf.IStringValue|null|undefined} description2
                             * @memberof google.ads.googleads.v0.common.DynamicSearchAdInfo
                             * @instance
                             */
                            DynamicSearchAdInfo.prototype.description2 = null;
    
                            /**
                             * Creates a new DynamicSearchAdInfo instance using the specified properties.
                             * @function create
                             * @memberof google.ads.googleads.v0.common.DynamicSearchAdInfo
                             * @static
                             * @param {google.ads.googleads.v0.common.IDynamicSearchAdInfo=} [properties] Properties to set
                             * @returns {google.ads.googleads.v0.common.DynamicSearchAdInfo} DynamicSearchAdInfo instance
                             */
                            DynamicSearchAdInfo.create = function create(properties) {
                                return new DynamicSearchAdInfo(properties);
                            };
    
                            /**
                             * Encodes the specified DynamicSearchAdInfo message. Does not implicitly {@link google.ads.googleads.v0.common.DynamicSearchAdInfo.verify|verify} messages.
                             * @function encode
                             * @memberof google.ads.googleads.v0.common.DynamicSearchAdInfo
                             * @static
                             * @param {google.ads.googleads.v0.common.IDynamicSearchAdInfo} message DynamicSearchAdInfo message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            DynamicSearchAdInfo.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                if (message.description1 != null && message.hasOwnProperty("description1"))
                                    $root.google.protobuf.StringValue.encode(message.description1, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                                if (message.description2 != null && message.hasOwnProperty("description2"))
                                    $root.google.protobuf.StringValue.encode(message.description2, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                                return writer;
                            };
    
                            /**
                             * Encodes the specified DynamicSearchAdInfo message, length delimited. Does not implicitly {@link google.ads.googleads.v0.common.DynamicSearchAdInfo.verify|verify} messages.
                             * @function encodeDelimited
                             * @memberof google.ads.googleads.v0.common.DynamicSearchAdInfo
                             * @static
                             * @param {google.ads.googleads.v0.common.IDynamicSearchAdInfo} message DynamicSearchAdInfo message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            DynamicSearchAdInfo.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };
    
                            /**
                             * Decodes a DynamicSearchAdInfo message from the specified reader or buffer.
                             * @function decode
                             * @memberof google.ads.googleads.v0.common.DynamicSearchAdInfo
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @param {number} [length] Message length if known beforehand
                             * @returns {google.ads.googleads.v0.common.DynamicSearchAdInfo} DynamicSearchAdInfo
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            DynamicSearchAdInfo.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.ads.googleads.v0.common.DynamicSearchAdInfo();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    case 1:
                                        message.description1 = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                                        break;
                                    case 2:
                                        message.description2 = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                                        break;
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };
    
                            /**
                             * Decodes a DynamicSearchAdInfo message from the specified reader or buffer, length delimited.
                             * @function decodeDelimited
                             * @memberof google.ads.googleads.v0.common.DynamicSearchAdInfo
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @returns {google.ads.googleads.v0.common.DynamicSearchAdInfo} DynamicSearchAdInfo
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            DynamicSearchAdInfo.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };
    
                            /**
                             * Verifies a DynamicSearchAdInfo message.
                             * @function verify
                             * @memberof google.ads.googleads.v0.common.DynamicSearchAdInfo
                             * @static
                             * @param {Object.<string,*>} message Plain object to verify
                             * @returns {string|null} `null` if valid, otherwise the reason why it is not
                             */
                            DynamicSearchAdInfo.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                if (message.description1 != null && message.hasOwnProperty("description1")) {
                                    var error = $root.google.protobuf.StringValue.verify(message.description1);
                                    if (error)
                                        return "description1." + error;
                                }
                                if (message.description2 != null && message.hasOwnProperty("description2")) {
                                    var error = $root.google.protobuf.StringValue.verify(message.description2);
                                    if (error)
                                        return "description2." + error;
                                }
                                return null;
                            };
    
                            /**
                             * Creates a DynamicSearchAdInfo message from a plain object. Also converts values to their respective internal types.
                             * @function fromObject
                             * @memberof google.ads.googleads.v0.common.DynamicSearchAdInfo
                             * @static
                             * @param {Object.<string,*>} object Plain object
                             * @returns {google.ads.googleads.v0.common.DynamicSearchAdInfo} DynamicSearchAdInfo
                             */
                            DynamicSearchAdInfo.fromObject = function fromObject(object) {
                                if (object instanceof $root.google.ads.googleads.v0.common.DynamicSearchAdInfo)
                                    return object;
                                var message = new $root.google.ads.googleads.v0.common.DynamicSearchAdInfo();
                                if (object.description1 != null) {
                                    if (typeof object.description1 !== "object")
                                        throw TypeError(".google.ads.googleads.v0.common.DynamicSearchAdInfo.description1: object expected");
                                    message.description1 = $root.google.protobuf.StringValue.fromObject(object.description1);
                                }
                                if (object.description2 != null) {
                                    if (typeof object.description2 !== "object")
                                        throw TypeError(".google.ads.googleads.v0.common.DynamicSearchAdInfo.description2: object expected");
                                    message.description2 = $root.google.protobuf.StringValue.fromObject(object.description2);
                                }
                                return message;
                            };
    
                            /**
                             * Creates a plain object from a DynamicSearchAdInfo message. Also converts values to other types if specified.
                             * @function toObject
                             * @memberof google.ads.googleads.v0.common.DynamicSearchAdInfo
                             * @static
                             * @param {google.ads.googleads.v0.common.DynamicSearchAdInfo} message DynamicSearchAdInfo
                             * @param {$protobuf.IConversionOptions} [options] Conversion options
                             * @returns {Object.<string,*>} Plain object
                             */
                            DynamicSearchAdInfo.toObject = function toObject(message, options) {
                                if (!options)
                                    options = {};
                                var object = {};
                                if (options.defaults) {
                                    object.description1 = null;
                                    object.description2 = null;
                                }
                                if (message.description1 != null && message.hasOwnProperty("description1"))
                                    object.description1 = $root.google.protobuf.StringValue.toObject(message.description1, options);
                                if (message.description2 != null && message.hasOwnProperty("description2"))
                                    object.description2 = $root.google.protobuf.StringValue.toObject(message.description2, options);
                                return object;
                            };
    
                            /**
                             * Converts this DynamicSearchAdInfo to JSON.
                             * @function toJSON
                             * @memberof google.ads.googleads.v0.common.DynamicSearchAdInfo
                             * @instance
                             * @returns {Object.<string,*>} JSON object
                             */
                            DynamicSearchAdInfo.prototype.toJSON = function toJSON() {
                                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                            };
    
                            return DynamicSearchAdInfo;
                        })();
    
                        common.ResponsiveDisplayAdInfo = (function() {
    
                            /**
                             * Properties of a ResponsiveDisplayAdInfo.
                             * @memberof google.ads.googleads.v0.common
                             * @interface IResponsiveDisplayAdInfo
                             * @property {google.protobuf.IStringValue|null} [shortHeadline] ResponsiveDisplayAdInfo shortHeadline
                             * @property {google.protobuf.IStringValue|null} [longHeadline] ResponsiveDisplayAdInfo longHeadline
                             * @property {google.protobuf.IStringValue|null} [description] ResponsiveDisplayAdInfo description
                             * @property {google.protobuf.IStringValue|null} [businessName] ResponsiveDisplayAdInfo businessName
                             */
    
                            /**
                             * Constructs a new ResponsiveDisplayAdInfo.
                             * @memberof google.ads.googleads.v0.common
                             * @classdesc Represents a ResponsiveDisplayAdInfo.
                             * @implements IResponsiveDisplayAdInfo
                             * @constructor
                             * @param {google.ads.googleads.v0.common.IResponsiveDisplayAdInfo=} [properties] Properties to set
                             */
                            function ResponsiveDisplayAdInfo(properties) {
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }
    
                            /**
                             * ResponsiveDisplayAdInfo shortHeadline.
                             * @member {google.protobuf.IStringValue|null|undefined} shortHeadline
                             * @memberof google.ads.googleads.v0.common.ResponsiveDisplayAdInfo
                             * @instance
                             */
                            ResponsiveDisplayAdInfo.prototype.shortHeadline = null;
    
                            /**
                             * ResponsiveDisplayAdInfo longHeadline.
                             * @member {google.protobuf.IStringValue|null|undefined} longHeadline
                             * @memberof google.ads.googleads.v0.common.ResponsiveDisplayAdInfo
                             * @instance
                             */
                            ResponsiveDisplayAdInfo.prototype.longHeadline = null;
    
                            /**
                             * ResponsiveDisplayAdInfo description.
                             * @member {google.protobuf.IStringValue|null|undefined} description
                             * @memberof google.ads.googleads.v0.common.ResponsiveDisplayAdInfo
                             * @instance
                             */
                            ResponsiveDisplayAdInfo.prototype.description = null;
    
                            /**
                             * ResponsiveDisplayAdInfo businessName.
                             * @member {google.protobuf.IStringValue|null|undefined} businessName
                             * @memberof google.ads.googleads.v0.common.ResponsiveDisplayAdInfo
                             * @instance
                             */
                            ResponsiveDisplayAdInfo.prototype.businessName = null;
    
                            /**
                             * Creates a new ResponsiveDisplayAdInfo instance using the specified properties.
                             * @function create
                             * @memberof google.ads.googleads.v0.common.ResponsiveDisplayAdInfo
                             * @static
                             * @param {google.ads.googleads.v0.common.IResponsiveDisplayAdInfo=} [properties] Properties to set
                             * @returns {google.ads.googleads.v0.common.ResponsiveDisplayAdInfo} ResponsiveDisplayAdInfo instance
                             */
                            ResponsiveDisplayAdInfo.create = function create(properties) {
                                return new ResponsiveDisplayAdInfo(properties);
                            };
    
                            /**
                             * Encodes the specified ResponsiveDisplayAdInfo message. Does not implicitly {@link google.ads.googleads.v0.common.ResponsiveDisplayAdInfo.verify|verify} messages.
                             * @function encode
                             * @memberof google.ads.googleads.v0.common.ResponsiveDisplayAdInfo
                             * @static
                             * @param {google.ads.googleads.v0.common.IResponsiveDisplayAdInfo} message ResponsiveDisplayAdInfo message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            ResponsiveDisplayAdInfo.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                if (message.shortHeadline != null && message.hasOwnProperty("shortHeadline"))
                                    $root.google.protobuf.StringValue.encode(message.shortHeadline, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                                if (message.longHeadline != null && message.hasOwnProperty("longHeadline"))
                                    $root.google.protobuf.StringValue.encode(message.longHeadline, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                                if (message.description != null && message.hasOwnProperty("description"))
                                    $root.google.protobuf.StringValue.encode(message.description, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                                if (message.businessName != null && message.hasOwnProperty("businessName"))
                                    $root.google.protobuf.StringValue.encode(message.businessName, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                                return writer;
                            };
    
                            /**
                             * Encodes the specified ResponsiveDisplayAdInfo message, length delimited. Does not implicitly {@link google.ads.googleads.v0.common.ResponsiveDisplayAdInfo.verify|verify} messages.
                             * @function encodeDelimited
                             * @memberof google.ads.googleads.v0.common.ResponsiveDisplayAdInfo
                             * @static
                             * @param {google.ads.googleads.v0.common.IResponsiveDisplayAdInfo} message ResponsiveDisplayAdInfo message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            ResponsiveDisplayAdInfo.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };
    
                            /**
                             * Decodes a ResponsiveDisplayAdInfo message from the specified reader or buffer.
                             * @function decode
                             * @memberof google.ads.googleads.v0.common.ResponsiveDisplayAdInfo
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @param {number} [length] Message length if known beforehand
                             * @returns {google.ads.googleads.v0.common.ResponsiveDisplayAdInfo} ResponsiveDisplayAdInfo
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            ResponsiveDisplayAdInfo.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.ads.googleads.v0.common.ResponsiveDisplayAdInfo();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    case 1:
                                        message.shortHeadline = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                                        break;
                                    case 2:
                                        message.longHeadline = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                                        break;
                                    case 3:
                                        message.description = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                                        break;
                                    case 4:
                                        message.businessName = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                                        break;
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };
    
                            /**
                             * Decodes a ResponsiveDisplayAdInfo message from the specified reader or buffer, length delimited.
                             * @function decodeDelimited
                             * @memberof google.ads.googleads.v0.common.ResponsiveDisplayAdInfo
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @returns {google.ads.googleads.v0.common.ResponsiveDisplayAdInfo} ResponsiveDisplayAdInfo
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            ResponsiveDisplayAdInfo.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };
    
                            /**
                             * Verifies a ResponsiveDisplayAdInfo message.
                             * @function verify
                             * @memberof google.ads.googleads.v0.common.ResponsiveDisplayAdInfo
                             * @static
                             * @param {Object.<string,*>} message Plain object to verify
                             * @returns {string|null} `null` if valid, otherwise the reason why it is not
                             */
                            ResponsiveDisplayAdInfo.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                if (message.shortHeadline != null && message.hasOwnProperty("shortHeadline")) {
                                    var error = $root.google.protobuf.StringValue.verify(message.shortHeadline);
                                    if (error)
                                        return "shortHeadline." + error;
                                }
                                if (message.longHeadline != null && message.hasOwnProperty("longHeadline")) {
                                    var error = $root.google.protobuf.StringValue.verify(message.longHeadline);
                                    if (error)
                                        return "longHeadline." + error;
                                }
                                if (message.description != null && message.hasOwnProperty("description")) {
                                    var error = $root.google.protobuf.StringValue.verify(message.description);
                                    if (error)
                                        return "description." + error;
                                }
                                if (message.businessName != null && message.hasOwnProperty("businessName")) {
                                    var error = $root.google.protobuf.StringValue.verify(message.businessName);
                                    if (error)
                                        return "businessName." + error;
                                }
                                return null;
                            };
    
                            /**
                             * Creates a ResponsiveDisplayAdInfo message from a plain object. Also converts values to their respective internal types.
                             * @function fromObject
                             * @memberof google.ads.googleads.v0.common.ResponsiveDisplayAdInfo
                             * @static
                             * @param {Object.<string,*>} object Plain object
                             * @returns {google.ads.googleads.v0.common.ResponsiveDisplayAdInfo} ResponsiveDisplayAdInfo
                             */
                            ResponsiveDisplayAdInfo.fromObject = function fromObject(object) {
                                if (object instanceof $root.google.ads.googleads.v0.common.ResponsiveDisplayAdInfo)
                                    return object;
                                var message = new $root.google.ads.googleads.v0.common.ResponsiveDisplayAdInfo();
                                if (object.shortHeadline != null) {
                                    if (typeof object.shortHeadline !== "object")
                                        throw TypeError(".google.ads.googleads.v0.common.ResponsiveDisplayAdInfo.shortHeadline: object expected");
                                    message.shortHeadline = $root.google.protobuf.StringValue.fromObject(object.shortHeadline);
                                }
                                if (object.longHeadline != null) {
                                    if (typeof object.longHeadline !== "object")
                                        throw TypeError(".google.ads.googleads.v0.common.ResponsiveDisplayAdInfo.longHeadline: object expected");
                                    message.longHeadline = $root.google.protobuf.StringValue.fromObject(object.longHeadline);
                                }
                                if (object.description != null) {
                                    if (typeof object.description !== "object")
                                        throw TypeError(".google.ads.googleads.v0.common.ResponsiveDisplayAdInfo.description: object expected");
                                    message.description = $root.google.protobuf.StringValue.fromObject(object.description);
                                }
                                if (object.businessName != null) {
                                    if (typeof object.businessName !== "object")
                                        throw TypeError(".google.ads.googleads.v0.common.ResponsiveDisplayAdInfo.businessName: object expected");
                                    message.businessName = $root.google.protobuf.StringValue.fromObject(object.businessName);
                                }
                                return message;
                            };
    
                            /**
                             * Creates a plain object from a ResponsiveDisplayAdInfo message. Also converts values to other types if specified.
                             * @function toObject
                             * @memberof google.ads.googleads.v0.common.ResponsiveDisplayAdInfo
                             * @static
                             * @param {google.ads.googleads.v0.common.ResponsiveDisplayAdInfo} message ResponsiveDisplayAdInfo
                             * @param {$protobuf.IConversionOptions} [options] Conversion options
                             * @returns {Object.<string,*>} Plain object
                             */
                            ResponsiveDisplayAdInfo.toObject = function toObject(message, options) {
                                if (!options)
                                    options = {};
                                var object = {};
                                if (options.defaults) {
                                    object.shortHeadline = null;
                                    object.longHeadline = null;
                                    object.description = null;
                                    object.businessName = null;
                                }
                                if (message.shortHeadline != null && message.hasOwnProperty("shortHeadline"))
                                    object.shortHeadline = $root.google.protobuf.StringValue.toObject(message.shortHeadline, options);
                                if (message.longHeadline != null && message.hasOwnProperty("longHeadline"))
                                    object.longHeadline = $root.google.protobuf.StringValue.toObject(message.longHeadline, options);
                                if (message.description != null && message.hasOwnProperty("description"))
                                    object.description = $root.google.protobuf.StringValue.toObject(message.description, options);
                                if (message.businessName != null && message.hasOwnProperty("businessName"))
                                    object.businessName = $root.google.protobuf.StringValue.toObject(message.businessName, options);
                                return object;
                            };
    
                            /**
                             * Converts this ResponsiveDisplayAdInfo to JSON.
                             * @function toJSON
                             * @memberof google.ads.googleads.v0.common.ResponsiveDisplayAdInfo
                             * @instance
                             * @returns {Object.<string,*>} JSON object
                             */
                            ResponsiveDisplayAdInfo.prototype.toJSON = function toJSON() {
                                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                            };
    
                            return ResponsiveDisplayAdInfo;
                        })();
    
                        common.CallOnlyAdInfo = (function() {
    
                            /**
                             * Properties of a CallOnlyAdInfo.
                             * @memberof google.ads.googleads.v0.common
                             * @interface ICallOnlyAdInfo
                             * @property {google.protobuf.IStringValue|null} [countryCode] CallOnlyAdInfo countryCode
                             * @property {google.protobuf.IStringValue|null} [phoneNumber] CallOnlyAdInfo phoneNumber
                             * @property {google.protobuf.IStringValue|null} [businessName] CallOnlyAdInfo businessName
                             * @property {google.protobuf.IStringValue|null} [description1] CallOnlyAdInfo description1
                             * @property {google.protobuf.IStringValue|null} [description2] CallOnlyAdInfo description2
                             * @property {google.protobuf.IBoolValue|null} [callTracked] CallOnlyAdInfo callTracked
                             * @property {google.protobuf.IBoolValue|null} [disableCallConversion] CallOnlyAdInfo disableCallConversion
                             * @property {google.protobuf.IStringValue|null} [phoneNumberVerificationUrl] CallOnlyAdInfo phoneNumberVerificationUrl
                             */
    
                            /**
                             * Constructs a new CallOnlyAdInfo.
                             * @memberof google.ads.googleads.v0.common
                             * @classdesc Represents a CallOnlyAdInfo.
                             * @implements ICallOnlyAdInfo
                             * @constructor
                             * @param {google.ads.googleads.v0.common.ICallOnlyAdInfo=} [properties] Properties to set
                             */
                            function CallOnlyAdInfo(properties) {
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }
    
                            /**
                             * CallOnlyAdInfo countryCode.
                             * @member {google.protobuf.IStringValue|null|undefined} countryCode
                             * @memberof google.ads.googleads.v0.common.CallOnlyAdInfo
                             * @instance
                             */
                            CallOnlyAdInfo.prototype.countryCode = null;
    
                            /**
                             * CallOnlyAdInfo phoneNumber.
                             * @member {google.protobuf.IStringValue|null|undefined} phoneNumber
                             * @memberof google.ads.googleads.v0.common.CallOnlyAdInfo
                             * @instance
                             */
                            CallOnlyAdInfo.prototype.phoneNumber = null;
    
                            /**
                             * CallOnlyAdInfo businessName.
                             * @member {google.protobuf.IStringValue|null|undefined} businessName
                             * @memberof google.ads.googleads.v0.common.CallOnlyAdInfo
                             * @instance
                             */
                            CallOnlyAdInfo.prototype.businessName = null;
    
                            /**
                             * CallOnlyAdInfo description1.
                             * @member {google.protobuf.IStringValue|null|undefined} description1
                             * @memberof google.ads.googleads.v0.common.CallOnlyAdInfo
                             * @instance
                             */
                            CallOnlyAdInfo.prototype.description1 = null;
    
                            /**
                             * CallOnlyAdInfo description2.
                             * @member {google.protobuf.IStringValue|null|undefined} description2
                             * @memberof google.ads.googleads.v0.common.CallOnlyAdInfo
                             * @instance
                             */
                            CallOnlyAdInfo.prototype.description2 = null;
    
                            /**
                             * CallOnlyAdInfo callTracked.
                             * @member {google.protobuf.IBoolValue|null|undefined} callTracked
                             * @memberof google.ads.googleads.v0.common.CallOnlyAdInfo
                             * @instance
                             */
                            CallOnlyAdInfo.prototype.callTracked = null;
    
                            /**
                             * CallOnlyAdInfo disableCallConversion.
                             * @member {google.protobuf.IBoolValue|null|undefined} disableCallConversion
                             * @memberof google.ads.googleads.v0.common.CallOnlyAdInfo
                             * @instance
                             */
                            CallOnlyAdInfo.prototype.disableCallConversion = null;
    
                            /**
                             * CallOnlyAdInfo phoneNumberVerificationUrl.
                             * @member {google.protobuf.IStringValue|null|undefined} phoneNumberVerificationUrl
                             * @memberof google.ads.googleads.v0.common.CallOnlyAdInfo
                             * @instance
                             */
                            CallOnlyAdInfo.prototype.phoneNumberVerificationUrl = null;
    
                            /**
                             * Creates a new CallOnlyAdInfo instance using the specified properties.
                             * @function create
                             * @memberof google.ads.googleads.v0.common.CallOnlyAdInfo
                             * @static
                             * @param {google.ads.googleads.v0.common.ICallOnlyAdInfo=} [properties] Properties to set
                             * @returns {google.ads.googleads.v0.common.CallOnlyAdInfo} CallOnlyAdInfo instance
                             */
                            CallOnlyAdInfo.create = function create(properties) {
                                return new CallOnlyAdInfo(properties);
                            };
    
                            /**
                             * Encodes the specified CallOnlyAdInfo message. Does not implicitly {@link google.ads.googleads.v0.common.CallOnlyAdInfo.verify|verify} messages.
                             * @function encode
                             * @memberof google.ads.googleads.v0.common.CallOnlyAdInfo
                             * @static
                             * @param {google.ads.googleads.v0.common.ICallOnlyAdInfo} message CallOnlyAdInfo message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            CallOnlyAdInfo.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                if (message.countryCode != null && message.hasOwnProperty("countryCode"))
                                    $root.google.protobuf.StringValue.encode(message.countryCode, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                                if (message.phoneNumber != null && message.hasOwnProperty("phoneNumber"))
                                    $root.google.protobuf.StringValue.encode(message.phoneNumber, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                                if (message.businessName != null && message.hasOwnProperty("businessName"))
                                    $root.google.protobuf.StringValue.encode(message.businessName, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                                if (message.description1 != null && message.hasOwnProperty("description1"))
                                    $root.google.protobuf.StringValue.encode(message.description1, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                                if (message.description2 != null && message.hasOwnProperty("description2"))
                                    $root.google.protobuf.StringValue.encode(message.description2, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                                if (message.callTracked != null && message.hasOwnProperty("callTracked"))
                                    $root.google.protobuf.BoolValue.encode(message.callTracked, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                                if (message.disableCallConversion != null && message.hasOwnProperty("disableCallConversion"))
                                    $root.google.protobuf.BoolValue.encode(message.disableCallConversion, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
                                if (message.phoneNumberVerificationUrl != null && message.hasOwnProperty("phoneNumberVerificationUrl"))
                                    $root.google.protobuf.StringValue.encode(message.phoneNumberVerificationUrl, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                                return writer;
                            };
    
                            /**
                             * Encodes the specified CallOnlyAdInfo message, length delimited. Does not implicitly {@link google.ads.googleads.v0.common.CallOnlyAdInfo.verify|verify} messages.
                             * @function encodeDelimited
                             * @memberof google.ads.googleads.v0.common.CallOnlyAdInfo
                             * @static
                             * @param {google.ads.googleads.v0.common.ICallOnlyAdInfo} message CallOnlyAdInfo message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            CallOnlyAdInfo.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };
    
                            /**
                             * Decodes a CallOnlyAdInfo message from the specified reader or buffer.
                             * @function decode
                             * @memberof google.ads.googleads.v0.common.CallOnlyAdInfo
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @param {number} [length] Message length if known beforehand
                             * @returns {google.ads.googleads.v0.common.CallOnlyAdInfo} CallOnlyAdInfo
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            CallOnlyAdInfo.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.ads.googleads.v0.common.CallOnlyAdInfo();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    case 1:
                                        message.countryCode = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                                        break;
                                    case 2:
                                        message.phoneNumber = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                                        break;
                                    case 3:
                                        message.businessName = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                                        break;
                                    case 4:
                                        message.description1 = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                                        break;
                                    case 5:
                                        message.description2 = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                                        break;
                                    case 6:
                                        message.callTracked = $root.google.protobuf.BoolValue.decode(reader, reader.uint32());
                                        break;
                                    case 7:
                                        message.disableCallConversion = $root.google.protobuf.BoolValue.decode(reader, reader.uint32());
                                        break;
                                    case 8:
                                        message.phoneNumberVerificationUrl = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                                        break;
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };
    
                            /**
                             * Decodes a CallOnlyAdInfo message from the specified reader or buffer, length delimited.
                             * @function decodeDelimited
                             * @memberof google.ads.googleads.v0.common.CallOnlyAdInfo
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @returns {google.ads.googleads.v0.common.CallOnlyAdInfo} CallOnlyAdInfo
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            CallOnlyAdInfo.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };
    
                            /**
                             * Verifies a CallOnlyAdInfo message.
                             * @function verify
                             * @memberof google.ads.googleads.v0.common.CallOnlyAdInfo
                             * @static
                             * @param {Object.<string,*>} message Plain object to verify
                             * @returns {string|null} `null` if valid, otherwise the reason why it is not
                             */
                            CallOnlyAdInfo.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                if (message.countryCode != null && message.hasOwnProperty("countryCode")) {
                                    var error = $root.google.protobuf.StringValue.verify(message.countryCode);
                                    if (error)
                                        return "countryCode." + error;
                                }
                                if (message.phoneNumber != null && message.hasOwnProperty("phoneNumber")) {
                                    var error = $root.google.protobuf.StringValue.verify(message.phoneNumber);
                                    if (error)
                                        return "phoneNumber." + error;
                                }
                                if (message.businessName != null && message.hasOwnProperty("businessName")) {
                                    var error = $root.google.protobuf.StringValue.verify(message.businessName);
                                    if (error)
                                        return "businessName." + error;
                                }
                                if (message.description1 != null && message.hasOwnProperty("description1")) {
                                    var error = $root.google.protobuf.StringValue.verify(message.description1);
                                    if (error)
                                        return "description1." + error;
                                }
                                if (message.description2 != null && message.hasOwnProperty("description2")) {
                                    var error = $root.google.protobuf.StringValue.verify(message.description2);
                                    if (error)
                                        return "description2." + error;
                                }
                                if (message.callTracked != null && message.hasOwnProperty("callTracked")) {
                                    var error = $root.google.protobuf.BoolValue.verify(message.callTracked);
                                    if (error)
                                        return "callTracked." + error;
                                }
                                if (message.disableCallConversion != null && message.hasOwnProperty("disableCallConversion")) {
                                    var error = $root.google.protobuf.BoolValue.verify(message.disableCallConversion);
                                    if (error)
                                        return "disableCallConversion." + error;
                                }
                                if (message.phoneNumberVerificationUrl != null && message.hasOwnProperty("phoneNumberVerificationUrl")) {
                                    var error = $root.google.protobuf.StringValue.verify(message.phoneNumberVerificationUrl);
                                    if (error)
                                        return "phoneNumberVerificationUrl." + error;
                                }
                                return null;
                            };
    
                            /**
                             * Creates a CallOnlyAdInfo message from a plain object. Also converts values to their respective internal types.
                             * @function fromObject
                             * @memberof google.ads.googleads.v0.common.CallOnlyAdInfo
                             * @static
                             * @param {Object.<string,*>} object Plain object
                             * @returns {google.ads.googleads.v0.common.CallOnlyAdInfo} CallOnlyAdInfo
                             */
                            CallOnlyAdInfo.fromObject = function fromObject(object) {
                                if (object instanceof $root.google.ads.googleads.v0.common.CallOnlyAdInfo)
                                    return object;
                                var message = new $root.google.ads.googleads.v0.common.CallOnlyAdInfo();
                                if (object.countryCode != null) {
                                    if (typeof object.countryCode !== "object")
                                        throw TypeError(".google.ads.googleads.v0.common.CallOnlyAdInfo.countryCode: object expected");
                                    message.countryCode = $root.google.protobuf.StringValue.fromObject(object.countryCode);
                                }
                                if (object.phoneNumber != null) {
                                    if (typeof object.phoneNumber !== "object")
                                        throw TypeError(".google.ads.googleads.v0.common.CallOnlyAdInfo.phoneNumber: object expected");
                                    message.phoneNumber = $root.google.protobuf.StringValue.fromObject(object.phoneNumber);
                                }
                                if (object.businessName != null) {
                                    if (typeof object.businessName !== "object")
                                        throw TypeError(".google.ads.googleads.v0.common.CallOnlyAdInfo.businessName: object expected");
                                    message.businessName = $root.google.protobuf.StringValue.fromObject(object.businessName);
                                }
                                if (object.description1 != null) {
                                    if (typeof object.description1 !== "object")
                                        throw TypeError(".google.ads.googleads.v0.common.CallOnlyAdInfo.description1: object expected");
                                    message.description1 = $root.google.protobuf.StringValue.fromObject(object.description1);
                                }
                                if (object.description2 != null) {
                                    if (typeof object.description2 !== "object")
                                        throw TypeError(".google.ads.googleads.v0.common.CallOnlyAdInfo.description2: object expected");
                                    message.description2 = $root.google.protobuf.StringValue.fromObject(object.description2);
                                }
                                if (object.callTracked != null) {
                                    if (typeof object.callTracked !== "object")
                                        throw TypeError(".google.ads.googleads.v0.common.CallOnlyAdInfo.callTracked: object expected");
                                    message.callTracked = $root.google.protobuf.BoolValue.fromObject(object.callTracked);
                                }
                                if (object.disableCallConversion != null) {
                                    if (typeof object.disableCallConversion !== "object")
                                        throw TypeError(".google.ads.googleads.v0.common.CallOnlyAdInfo.disableCallConversion: object expected");
                                    message.disableCallConversion = $root.google.protobuf.BoolValue.fromObject(object.disableCallConversion);
                                }
                                if (object.phoneNumberVerificationUrl != null) {
                                    if (typeof object.phoneNumberVerificationUrl !== "object")
                                        throw TypeError(".google.ads.googleads.v0.common.CallOnlyAdInfo.phoneNumberVerificationUrl: object expected");
                                    message.phoneNumberVerificationUrl = $root.google.protobuf.StringValue.fromObject(object.phoneNumberVerificationUrl);
                                }
                                return message;
                            };
    
                            /**
                             * Creates a plain object from a CallOnlyAdInfo message. Also converts values to other types if specified.
                             * @function toObject
                             * @memberof google.ads.googleads.v0.common.CallOnlyAdInfo
                             * @static
                             * @param {google.ads.googleads.v0.common.CallOnlyAdInfo} message CallOnlyAdInfo
                             * @param {$protobuf.IConversionOptions} [options] Conversion options
                             * @returns {Object.<string,*>} Plain object
                             */
                            CallOnlyAdInfo.toObject = function toObject(message, options) {
                                if (!options)
                                    options = {};
                                var object = {};
                                if (options.defaults) {
                                    object.countryCode = null;
                                    object.phoneNumber = null;
                                    object.businessName = null;
                                    object.description1 = null;
                                    object.description2 = null;
                                    object.callTracked = null;
                                    object.disableCallConversion = null;
                                    object.phoneNumberVerificationUrl = null;
                                }
                                if (message.countryCode != null && message.hasOwnProperty("countryCode"))
                                    object.countryCode = $root.google.protobuf.StringValue.toObject(message.countryCode, options);
                                if (message.phoneNumber != null && message.hasOwnProperty("phoneNumber"))
                                    object.phoneNumber = $root.google.protobuf.StringValue.toObject(message.phoneNumber, options);
                                if (message.businessName != null && message.hasOwnProperty("businessName"))
                                    object.businessName = $root.google.protobuf.StringValue.toObject(message.businessName, options);
                                if (message.description1 != null && message.hasOwnProperty("description1"))
                                    object.description1 = $root.google.protobuf.StringValue.toObject(message.description1, options);
                                if (message.description2 != null && message.hasOwnProperty("description2"))
                                    object.description2 = $root.google.protobuf.StringValue.toObject(message.description2, options);
                                if (message.callTracked != null && message.hasOwnProperty("callTracked"))
                                    object.callTracked = $root.google.protobuf.BoolValue.toObject(message.callTracked, options);
                                if (message.disableCallConversion != null && message.hasOwnProperty("disableCallConversion"))
                                    object.disableCallConversion = $root.google.protobuf.BoolValue.toObject(message.disableCallConversion, options);
                                if (message.phoneNumberVerificationUrl != null && message.hasOwnProperty("phoneNumberVerificationUrl"))
                                    object.phoneNumberVerificationUrl = $root.google.protobuf.StringValue.toObject(message.phoneNumberVerificationUrl, options);
                                return object;
                            };
    
                            /**
                             * Converts this CallOnlyAdInfo to JSON.
                             * @function toJSON
                             * @memberof google.ads.googleads.v0.common.CallOnlyAdInfo
                             * @instance
                             * @returns {Object.<string,*>} JSON object
                             */
                            CallOnlyAdInfo.prototype.toJSON = function toJSON() {
                                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                            };
    
                            return CallOnlyAdInfo;
                        })();
    
                        common.ExpandedDynamicSearchAdInfo = (function() {
    
                            /**
                             * Properties of an ExpandedDynamicSearchAdInfo.
                             * @memberof google.ads.googleads.v0.common
                             * @interface IExpandedDynamicSearchAdInfo
                             * @property {google.protobuf.IStringValue|null} [description] ExpandedDynamicSearchAdInfo description
                             */
    
                            /**
                             * Constructs a new ExpandedDynamicSearchAdInfo.
                             * @memberof google.ads.googleads.v0.common
                             * @classdesc Represents an ExpandedDynamicSearchAdInfo.
                             * @implements IExpandedDynamicSearchAdInfo
                             * @constructor
                             * @param {google.ads.googleads.v0.common.IExpandedDynamicSearchAdInfo=} [properties] Properties to set
                             */
                            function ExpandedDynamicSearchAdInfo(properties) {
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }
    
                            /**
                             * ExpandedDynamicSearchAdInfo description.
                             * @member {google.protobuf.IStringValue|null|undefined} description
                             * @memberof google.ads.googleads.v0.common.ExpandedDynamicSearchAdInfo
                             * @instance
                             */
                            ExpandedDynamicSearchAdInfo.prototype.description = null;
    
                            /**
                             * Creates a new ExpandedDynamicSearchAdInfo instance using the specified properties.
                             * @function create
                             * @memberof google.ads.googleads.v0.common.ExpandedDynamicSearchAdInfo
                             * @static
                             * @param {google.ads.googleads.v0.common.IExpandedDynamicSearchAdInfo=} [properties] Properties to set
                             * @returns {google.ads.googleads.v0.common.ExpandedDynamicSearchAdInfo} ExpandedDynamicSearchAdInfo instance
                             */
                            ExpandedDynamicSearchAdInfo.create = function create(properties) {
                                return new ExpandedDynamicSearchAdInfo(properties);
                            };
    
                            /**
                             * Encodes the specified ExpandedDynamicSearchAdInfo message. Does not implicitly {@link google.ads.googleads.v0.common.ExpandedDynamicSearchAdInfo.verify|verify} messages.
                             * @function encode
                             * @memberof google.ads.googleads.v0.common.ExpandedDynamicSearchAdInfo
                             * @static
                             * @param {google.ads.googleads.v0.common.IExpandedDynamicSearchAdInfo} message ExpandedDynamicSearchAdInfo message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            ExpandedDynamicSearchAdInfo.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                if (message.description != null && message.hasOwnProperty("description"))
                                    $root.google.protobuf.StringValue.encode(message.description, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                                return writer;
                            };
    
                            /**
                             * Encodes the specified ExpandedDynamicSearchAdInfo message, length delimited. Does not implicitly {@link google.ads.googleads.v0.common.ExpandedDynamicSearchAdInfo.verify|verify} messages.
                             * @function encodeDelimited
                             * @memberof google.ads.googleads.v0.common.ExpandedDynamicSearchAdInfo
                             * @static
                             * @param {google.ads.googleads.v0.common.IExpandedDynamicSearchAdInfo} message ExpandedDynamicSearchAdInfo message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            ExpandedDynamicSearchAdInfo.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };
    
                            /**
                             * Decodes an ExpandedDynamicSearchAdInfo message from the specified reader or buffer.
                             * @function decode
                             * @memberof google.ads.googleads.v0.common.ExpandedDynamicSearchAdInfo
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @param {number} [length] Message length if known beforehand
                             * @returns {google.ads.googleads.v0.common.ExpandedDynamicSearchAdInfo} ExpandedDynamicSearchAdInfo
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            ExpandedDynamicSearchAdInfo.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.ads.googleads.v0.common.ExpandedDynamicSearchAdInfo();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    case 1:
                                        message.description = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                                        break;
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };
    
                            /**
                             * Decodes an ExpandedDynamicSearchAdInfo message from the specified reader or buffer, length delimited.
                             * @function decodeDelimited
                             * @memberof google.ads.googleads.v0.common.ExpandedDynamicSearchAdInfo
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @returns {google.ads.googleads.v0.common.ExpandedDynamicSearchAdInfo} ExpandedDynamicSearchAdInfo
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            ExpandedDynamicSearchAdInfo.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };
    
                            /**
                             * Verifies an ExpandedDynamicSearchAdInfo message.
                             * @function verify
                             * @memberof google.ads.googleads.v0.common.ExpandedDynamicSearchAdInfo
                             * @static
                             * @param {Object.<string,*>} message Plain object to verify
                             * @returns {string|null} `null` if valid, otherwise the reason why it is not
                             */
                            ExpandedDynamicSearchAdInfo.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                if (message.description != null && message.hasOwnProperty("description")) {
                                    var error = $root.google.protobuf.StringValue.verify(message.description);
                                    if (error)
                                        return "description." + error;
                                }
                                return null;
                            };
    
                            /**
                             * Creates an ExpandedDynamicSearchAdInfo message from a plain object. Also converts values to their respective internal types.
                             * @function fromObject
                             * @memberof google.ads.googleads.v0.common.ExpandedDynamicSearchAdInfo
                             * @static
                             * @param {Object.<string,*>} object Plain object
                             * @returns {google.ads.googleads.v0.common.ExpandedDynamicSearchAdInfo} ExpandedDynamicSearchAdInfo
                             */
                            ExpandedDynamicSearchAdInfo.fromObject = function fromObject(object) {
                                if (object instanceof $root.google.ads.googleads.v0.common.ExpandedDynamicSearchAdInfo)
                                    return object;
                                var message = new $root.google.ads.googleads.v0.common.ExpandedDynamicSearchAdInfo();
                                if (object.description != null) {
                                    if (typeof object.description !== "object")
                                        throw TypeError(".google.ads.googleads.v0.common.ExpandedDynamicSearchAdInfo.description: object expected");
                                    message.description = $root.google.protobuf.StringValue.fromObject(object.description);
                                }
                                return message;
                            };
    
                            /**
                             * Creates a plain object from an ExpandedDynamicSearchAdInfo message. Also converts values to other types if specified.
                             * @function toObject
                             * @memberof google.ads.googleads.v0.common.ExpandedDynamicSearchAdInfo
                             * @static
                             * @param {google.ads.googleads.v0.common.ExpandedDynamicSearchAdInfo} message ExpandedDynamicSearchAdInfo
                             * @param {$protobuf.IConversionOptions} [options] Conversion options
                             * @returns {Object.<string,*>} Plain object
                             */
                            ExpandedDynamicSearchAdInfo.toObject = function toObject(message, options) {
                                if (!options)
                                    options = {};
                                var object = {};
                                if (options.defaults)
                                    object.description = null;
                                if (message.description != null && message.hasOwnProperty("description"))
                                    object.description = $root.google.protobuf.StringValue.toObject(message.description, options);
                                return object;
                            };
    
                            /**
                             * Converts this ExpandedDynamicSearchAdInfo to JSON.
                             * @function toJSON
                             * @memberof google.ads.googleads.v0.common.ExpandedDynamicSearchAdInfo
                             * @instance
                             * @returns {Object.<string,*>} JSON object
                             */
                            ExpandedDynamicSearchAdInfo.prototype.toJSON = function toJSON() {
                                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                            };
    
                            return ExpandedDynamicSearchAdInfo;
                        })();
    
                        common.HotelAdInfo = (function() {
    
                            /**
                             * Properties of a HotelAdInfo.
                             * @memberof google.ads.googleads.v0.common
                             * @interface IHotelAdInfo
                             */
    
                            /**
                             * Constructs a new HotelAdInfo.
                             * @memberof google.ads.googleads.v0.common
                             * @classdesc Represents a HotelAdInfo.
                             * @implements IHotelAdInfo
                             * @constructor
                             * @param {google.ads.googleads.v0.common.IHotelAdInfo=} [properties] Properties to set
                             */
                            function HotelAdInfo(properties) {
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }
    
                            /**
                             * Creates a new HotelAdInfo instance using the specified properties.
                             * @function create
                             * @memberof google.ads.googleads.v0.common.HotelAdInfo
                             * @static
                             * @param {google.ads.googleads.v0.common.IHotelAdInfo=} [properties] Properties to set
                             * @returns {google.ads.googleads.v0.common.HotelAdInfo} HotelAdInfo instance
                             */
                            HotelAdInfo.create = function create(properties) {
                                return new HotelAdInfo(properties);
                            };
    
                            /**
                             * Encodes the specified HotelAdInfo message. Does not implicitly {@link google.ads.googleads.v0.common.HotelAdInfo.verify|verify} messages.
                             * @function encode
                             * @memberof google.ads.googleads.v0.common.HotelAdInfo
                             * @static
                             * @param {google.ads.googleads.v0.common.IHotelAdInfo} message HotelAdInfo message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            HotelAdInfo.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                return writer;
                            };
    
                            /**
                             * Encodes the specified HotelAdInfo message, length delimited. Does not implicitly {@link google.ads.googleads.v0.common.HotelAdInfo.verify|verify} messages.
                             * @function encodeDelimited
                             * @memberof google.ads.googleads.v0.common.HotelAdInfo
                             * @static
                             * @param {google.ads.googleads.v0.common.IHotelAdInfo} message HotelAdInfo message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            HotelAdInfo.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };
    
                            /**
                             * Decodes a HotelAdInfo message from the specified reader or buffer.
                             * @function decode
                             * @memberof google.ads.googleads.v0.common.HotelAdInfo
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @param {number} [length] Message length if known beforehand
                             * @returns {google.ads.googleads.v0.common.HotelAdInfo} HotelAdInfo
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            HotelAdInfo.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.ads.googleads.v0.common.HotelAdInfo();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };
    
                            /**
                             * Decodes a HotelAdInfo message from the specified reader or buffer, length delimited.
                             * @function decodeDelimited
                             * @memberof google.ads.googleads.v0.common.HotelAdInfo
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @returns {google.ads.googleads.v0.common.HotelAdInfo} HotelAdInfo
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            HotelAdInfo.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };
    
                            /**
                             * Verifies a HotelAdInfo message.
                             * @function verify
                             * @memberof google.ads.googleads.v0.common.HotelAdInfo
                             * @static
                             * @param {Object.<string,*>} message Plain object to verify
                             * @returns {string|null} `null` if valid, otherwise the reason why it is not
                             */
                            HotelAdInfo.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                return null;
                            };
    
                            /**
                             * Creates a HotelAdInfo message from a plain object. Also converts values to their respective internal types.
                             * @function fromObject
                             * @memberof google.ads.googleads.v0.common.HotelAdInfo
                             * @static
                             * @param {Object.<string,*>} object Plain object
                             * @returns {google.ads.googleads.v0.common.HotelAdInfo} HotelAdInfo
                             */
                            HotelAdInfo.fromObject = function fromObject(object) {
                                if (object instanceof $root.google.ads.googleads.v0.common.HotelAdInfo)
                                    return object;
                                return new $root.google.ads.googleads.v0.common.HotelAdInfo();
                            };
    
                            /**
                             * Creates a plain object from a HotelAdInfo message. Also converts values to other types if specified.
                             * @function toObject
                             * @memberof google.ads.googleads.v0.common.HotelAdInfo
                             * @static
                             * @param {google.ads.googleads.v0.common.HotelAdInfo} message HotelAdInfo
                             * @param {$protobuf.IConversionOptions} [options] Conversion options
                             * @returns {Object.<string,*>} Plain object
                             */
                            HotelAdInfo.toObject = function toObject() {
                                return {};
                            };
    
                            /**
                             * Converts this HotelAdInfo to JSON.
                             * @function toJSON
                             * @memberof google.ads.googleads.v0.common.HotelAdInfo
                             * @instance
                             * @returns {Object.<string,*>} JSON object
                             */
                            HotelAdInfo.prototype.toJSON = function toJSON() {
                                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                            };
    
                            return HotelAdInfo;
                        })();
    
                        common.CustomParameter = (function() {
    
                            /**
                             * Properties of a CustomParameter.
                             * @memberof google.ads.googleads.v0.common
                             * @interface ICustomParameter
                             * @property {google.protobuf.IStringValue|null} [key] CustomParameter key
                             * @property {google.protobuf.IStringValue|null} [value] CustomParameter value
                             */
    
                            /**
                             * Constructs a new CustomParameter.
                             * @memberof google.ads.googleads.v0.common
                             * @classdesc Represents a CustomParameter.
                             * @implements ICustomParameter
                             * @constructor
                             * @param {google.ads.googleads.v0.common.ICustomParameter=} [properties] Properties to set
                             */
                            function CustomParameter(properties) {
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }
    
                            /**
                             * CustomParameter key.
                             * @member {google.protobuf.IStringValue|null|undefined} key
                             * @memberof google.ads.googleads.v0.common.CustomParameter
                             * @instance
                             */
                            CustomParameter.prototype.key = null;
    
                            /**
                             * CustomParameter value.
                             * @member {google.protobuf.IStringValue|null|undefined} value
                             * @memberof google.ads.googleads.v0.common.CustomParameter
                             * @instance
                             */
                            CustomParameter.prototype.value = null;
    
                            /**
                             * Creates a new CustomParameter instance using the specified properties.
                             * @function create
                             * @memberof google.ads.googleads.v0.common.CustomParameter
                             * @static
                             * @param {google.ads.googleads.v0.common.ICustomParameter=} [properties] Properties to set
                             * @returns {google.ads.googleads.v0.common.CustomParameter} CustomParameter instance
                             */
                            CustomParameter.create = function create(properties) {
                                return new CustomParameter(properties);
                            };
    
                            /**
                             * Encodes the specified CustomParameter message. Does not implicitly {@link google.ads.googleads.v0.common.CustomParameter.verify|verify} messages.
                             * @function encode
                             * @memberof google.ads.googleads.v0.common.CustomParameter
                             * @static
                             * @param {google.ads.googleads.v0.common.ICustomParameter} message CustomParameter message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            CustomParameter.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                if (message.key != null && message.hasOwnProperty("key"))
                                    $root.google.protobuf.StringValue.encode(message.key, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                                if (message.value != null && message.hasOwnProperty("value"))
                                    $root.google.protobuf.StringValue.encode(message.value, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                                return writer;
                            };
    
                            /**
                             * Encodes the specified CustomParameter message, length delimited. Does not implicitly {@link google.ads.googleads.v0.common.CustomParameter.verify|verify} messages.
                             * @function encodeDelimited
                             * @memberof google.ads.googleads.v0.common.CustomParameter
                             * @static
                             * @param {google.ads.googleads.v0.common.ICustomParameter} message CustomParameter message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            CustomParameter.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };
    
                            /**
                             * Decodes a CustomParameter message from the specified reader or buffer.
                             * @function decode
                             * @memberof google.ads.googleads.v0.common.CustomParameter
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @param {number} [length] Message length if known beforehand
                             * @returns {google.ads.googleads.v0.common.CustomParameter} CustomParameter
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            CustomParameter.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.ads.googleads.v0.common.CustomParameter();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    case 1:
                                        message.key = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                                        break;
                                    case 2:
                                        message.value = $root.google.protobuf.StringValue.decode(reader, reader.uint32());
                                        break;
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };
    
                            /**
                             * Decodes a CustomParameter message from the specified reader or buffer, length delimited.
                             * @function decodeDelimited
                             * @memberof google.ads.googleads.v0.common.CustomParameter
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @returns {google.ads.googleads.v0.common.CustomParameter} CustomParameter
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            CustomParameter.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };
    
                            /**
                             * Verifies a CustomParameter message.
                             * @function verify
                             * @memberof google.ads.googleads.v0.common.CustomParameter
                             * @static
                             * @param {Object.<string,*>} message Plain object to verify
                             * @returns {string|null} `null` if valid, otherwise the reason why it is not
                             */
                            CustomParameter.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                if (message.key != null && message.hasOwnProperty("key")) {
                                    var error = $root.google.protobuf.StringValue.verify(message.key);
                                    if (error)
                                        return "key." + error;
                                }
                                if (message.value != null && message.hasOwnProperty("value")) {
                                    var error = $root.google.protobuf.StringValue.verify(message.value);
                                    if (error)
                                        return "value." + error;
                                }
                                return null;
                            };
    
                            /**
                             * Creates a CustomParameter message from a plain object. Also converts values to their respective internal types.
                             * @function fromObject
                             * @memberof google.ads.googleads.v0.common.CustomParameter
                             * @static
                             * @param {Object.<string,*>} object Plain object
                             * @returns {google.ads.googleads.v0.common.CustomParameter} CustomParameter
                             */
                            CustomParameter.fromObject = function fromObject(object) {
                                if (object instanceof $root.google.ads.googleads.v0.common.CustomParameter)
                                    return object;
                                var message = new $root.google.ads.googleads.v0.common.CustomParameter();
                                if (object.key != null) {
                                    if (typeof object.key !== "object")
                                        throw TypeError(".google.ads.googleads.v0.common.CustomParameter.key: object expected");
                                    message.key = $root.google.protobuf.StringValue.fromObject(object.key);
                                }
                                if (object.value != null) {
                                    if (typeof object.value !== "object")
                                        throw TypeError(".google.ads.googleads.v0.common.CustomParameter.value: object expected");
                                    message.value = $root.google.protobuf.StringValue.fromObject(object.value);
                                }
                                return message;
                            };
    
                            /**
                             * Creates a plain object from a CustomParameter message. Also converts values to other types if specified.
                             * @function toObject
                             * @memberof google.ads.googleads.v0.common.CustomParameter
                             * @static
                             * @param {google.ads.googleads.v0.common.CustomParameter} message CustomParameter
                             * @param {$protobuf.IConversionOptions} [options] Conversion options
                             * @returns {Object.<string,*>} Plain object
                             */
                            CustomParameter.toObject = function toObject(message, options) {
                                if (!options)
                                    options = {};
                                var object = {};
                                if (options.defaults) {
                                    object.key = null;
                                    object.value = null;
                                }
                                if (message.key != null && message.hasOwnProperty("key"))
                                    object.key = $root.google.protobuf.StringValue.toObject(message.key, options);
                                if (message.value != null && message.hasOwnProperty("value"))
                                    object.value = $root.google.protobuf.StringValue.toObject(message.value, options);
                                return object;
                            };
    
                            /**
                             * Converts this CustomParameter to JSON.
                             * @function toJSON
                             * @memberof google.ads.googleads.v0.common.CustomParameter
                             * @instance
                             * @returns {Object.<string,*>} JSON object
                             */
                            CustomParameter.prototype.toJSON = function toJSON() {
                                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                            };
    
                            return CustomParameter;
                        })();
    
                        return common;
                    })();
    
                    v0.enums = (function() {
    
                        /**
                         * Namespace enums.
                         * @memberof google.ads.googleads.v0
                         * @namespace
                         */
                        var enums = {};
    
                        enums.AdTypeEnum = (function() {
    
                            /**
                             * Properties of an AdTypeEnum.
                             * @memberof google.ads.googleads.v0.enums
                             * @interface IAdTypeEnum
                             */
    
                            /**
                             * Constructs a new AdTypeEnum.
                             * @memberof google.ads.googleads.v0.enums
                             * @classdesc Represents an AdTypeEnum.
                             * @implements IAdTypeEnum
                             * @constructor
                             * @param {google.ads.googleads.v0.enums.IAdTypeEnum=} [properties] Properties to set
                             */
                            function AdTypeEnum(properties) {
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }
    
                            /**
                             * Creates a new AdTypeEnum instance using the specified properties.
                             * @function create
                             * @memberof google.ads.googleads.v0.enums.AdTypeEnum
                             * @static
                             * @param {google.ads.googleads.v0.enums.IAdTypeEnum=} [properties] Properties to set
                             * @returns {google.ads.googleads.v0.enums.AdTypeEnum} AdTypeEnum instance
                             */
                            AdTypeEnum.create = function create(properties) {
                                return new AdTypeEnum(properties);
                            };
    
                            /**
                             * Encodes the specified AdTypeEnum message. Does not implicitly {@link google.ads.googleads.v0.enums.AdTypeEnum.verify|verify} messages.
                             * @function encode
                             * @memberof google.ads.googleads.v0.enums.AdTypeEnum
                             * @static
                             * @param {google.ads.googleads.v0.enums.IAdTypeEnum} message AdTypeEnum message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            AdTypeEnum.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                return writer;
                            };
    
                            /**
                             * Encodes the specified AdTypeEnum message, length delimited. Does not implicitly {@link google.ads.googleads.v0.enums.AdTypeEnum.verify|verify} messages.
                             * @function encodeDelimited
                             * @memberof google.ads.googleads.v0.enums.AdTypeEnum
                             * @static
                             * @param {google.ads.googleads.v0.enums.IAdTypeEnum} message AdTypeEnum message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            AdTypeEnum.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };
    
                            /**
                             * Decodes an AdTypeEnum message from the specified reader or buffer.
                             * @function decode
                             * @memberof google.ads.googleads.v0.enums.AdTypeEnum
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @param {number} [length] Message length if known beforehand
                             * @returns {google.ads.googleads.v0.enums.AdTypeEnum} AdTypeEnum
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            AdTypeEnum.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.ads.googleads.v0.enums.AdTypeEnum();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };
    
                            /**
                             * Decodes an AdTypeEnum message from the specified reader or buffer, length delimited.
                             * @function decodeDelimited
                             * @memberof google.ads.googleads.v0.enums.AdTypeEnum
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @returns {google.ads.googleads.v0.enums.AdTypeEnum} AdTypeEnum
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            AdTypeEnum.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };
    
                            /**
                             * Verifies an AdTypeEnum message.
                             * @function verify
                             * @memberof google.ads.googleads.v0.enums.AdTypeEnum
                             * @static
                             * @param {Object.<string,*>} message Plain object to verify
                             * @returns {string|null} `null` if valid, otherwise the reason why it is not
                             */
                            AdTypeEnum.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                return null;
                            };
    
                            /**
                             * Creates an AdTypeEnum message from a plain object. Also converts values to their respective internal types.
                             * @function fromObject
                             * @memberof google.ads.googleads.v0.enums.AdTypeEnum
                             * @static
                             * @param {Object.<string,*>} object Plain object
                             * @returns {google.ads.googleads.v0.enums.AdTypeEnum} AdTypeEnum
                             */
                            AdTypeEnum.fromObject = function fromObject(object) {
                                if (object instanceof $root.google.ads.googleads.v0.enums.AdTypeEnum)
                                    return object;
                                return new $root.google.ads.googleads.v0.enums.AdTypeEnum();
                            };
    
                            /**
                             * Creates a plain object from an AdTypeEnum message. Also converts values to other types if specified.
                             * @function toObject
                             * @memberof google.ads.googleads.v0.enums.AdTypeEnum
                             * @static
                             * @param {google.ads.googleads.v0.enums.AdTypeEnum} message AdTypeEnum
                             * @param {$protobuf.IConversionOptions} [options] Conversion options
                             * @returns {Object.<string,*>} Plain object
                             */
                            AdTypeEnum.toObject = function toObject() {
                                return {};
                            };
    
                            /**
                             * Converts this AdTypeEnum to JSON.
                             * @function toJSON
                             * @memberof google.ads.googleads.v0.enums.AdTypeEnum
                             * @instance
                             * @returns {Object.<string,*>} JSON object
                             */
                            AdTypeEnum.prototype.toJSON = function toJSON() {
                                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                            };
    
                            /**
                             * AdType enum.
                             * @name google.ads.googleads.v0.enums.AdTypeEnum.AdType
                             * @enum {string}
                             * @property {number} UNSPECIFIED=0 UNSPECIFIED value
                             * @property {number} UNKNOWN=1 UNKNOWN value
                             * @property {number} TEXT_AD=2 TEXT_AD value
                             * @property {number} EXPANDED_TEXT_AD=3 EXPANDED_TEXT_AD value
                             * @property {number} DYNAMIC_SEARCH_AD=4 DYNAMIC_SEARCH_AD value
                             * @property {number} RESPONSIVE_DISPLAY_AD=5 RESPONSIVE_DISPLAY_AD value
                             * @property {number} CALL_ONLY_AD=6 CALL_ONLY_AD value
                             * @property {number} EXPANDED_DYNAMIC_SEARCH_AD=7 EXPANDED_DYNAMIC_SEARCH_AD value
                             * @property {number} HOTEL_AD=8 HOTEL_AD value
                             */
                            AdTypeEnum.AdType = (function() {
                                var valuesById = {}, values = Object.create(valuesById);
                                values[valuesById[0] = "UNSPECIFIED"] = 0;
                                values[valuesById[1] = "UNKNOWN"] = 1;
                                values[valuesById[2] = "TEXT_AD"] = 2;
                                values[valuesById[3] = "EXPANDED_TEXT_AD"] = 3;
                                values[valuesById[4] = "DYNAMIC_SEARCH_AD"] = 4;
                                values[valuesById[5] = "RESPONSIVE_DISPLAY_AD"] = 5;
                                values[valuesById[6] = "CALL_ONLY_AD"] = 6;
                                values[valuesById[7] = "EXPANDED_DYNAMIC_SEARCH_AD"] = 7;
                                values[valuesById[8] = "HOTEL_AD"] = 8;
                                return values;
                            })();
    
                            return AdTypeEnum;
                        })();
    
                        enums.AdGroupAdStatusEnum = (function() {
    
                            /**
                             * Properties of an AdGroupAdStatusEnum.
                             * @memberof google.ads.googleads.v0.enums
                             * @interface IAdGroupAdStatusEnum
                             */
    
                            /**
                             * Constructs a new AdGroupAdStatusEnum.
                             * @memberof google.ads.googleads.v0.enums
                             * @classdesc Represents an AdGroupAdStatusEnum.
                             * @implements IAdGroupAdStatusEnum
                             * @constructor
                             * @param {google.ads.googleads.v0.enums.IAdGroupAdStatusEnum=} [properties] Properties to set
                             */
                            function AdGroupAdStatusEnum(properties) {
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }
    
                            /**
                             * Creates a new AdGroupAdStatusEnum instance using the specified properties.
                             * @function create
                             * @memberof google.ads.googleads.v0.enums.AdGroupAdStatusEnum
                             * @static
                             * @param {google.ads.googleads.v0.enums.IAdGroupAdStatusEnum=} [properties] Properties to set
                             * @returns {google.ads.googleads.v0.enums.AdGroupAdStatusEnum} AdGroupAdStatusEnum instance
                             */
                            AdGroupAdStatusEnum.create = function create(properties) {
                                return new AdGroupAdStatusEnum(properties);
                            };
    
                            /**
                             * Encodes the specified AdGroupAdStatusEnum message. Does not implicitly {@link google.ads.googleads.v0.enums.AdGroupAdStatusEnum.verify|verify} messages.
                             * @function encode
                             * @memberof google.ads.googleads.v0.enums.AdGroupAdStatusEnum
                             * @static
                             * @param {google.ads.googleads.v0.enums.IAdGroupAdStatusEnum} message AdGroupAdStatusEnum message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            AdGroupAdStatusEnum.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                return writer;
                            };
    
                            /**
                             * Encodes the specified AdGroupAdStatusEnum message, length delimited. Does not implicitly {@link google.ads.googleads.v0.enums.AdGroupAdStatusEnum.verify|verify} messages.
                             * @function encodeDelimited
                             * @memberof google.ads.googleads.v0.enums.AdGroupAdStatusEnum
                             * @static
                             * @param {google.ads.googleads.v0.enums.IAdGroupAdStatusEnum} message AdGroupAdStatusEnum message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            AdGroupAdStatusEnum.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };
    
                            /**
                             * Decodes an AdGroupAdStatusEnum message from the specified reader or buffer.
                             * @function decode
                             * @memberof google.ads.googleads.v0.enums.AdGroupAdStatusEnum
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @param {number} [length] Message length if known beforehand
                             * @returns {google.ads.googleads.v0.enums.AdGroupAdStatusEnum} AdGroupAdStatusEnum
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            AdGroupAdStatusEnum.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.ads.googleads.v0.enums.AdGroupAdStatusEnum();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };
    
                            /**
                             * Decodes an AdGroupAdStatusEnum message from the specified reader or buffer, length delimited.
                             * @function decodeDelimited
                             * @memberof google.ads.googleads.v0.enums.AdGroupAdStatusEnum
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @returns {google.ads.googleads.v0.enums.AdGroupAdStatusEnum} AdGroupAdStatusEnum
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            AdGroupAdStatusEnum.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };
    
                            /**
                             * Verifies an AdGroupAdStatusEnum message.
                             * @function verify
                             * @memberof google.ads.googleads.v0.enums.AdGroupAdStatusEnum
                             * @static
                             * @param {Object.<string,*>} message Plain object to verify
                             * @returns {string|null} `null` if valid, otherwise the reason why it is not
                             */
                            AdGroupAdStatusEnum.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                return null;
                            };
    
                            /**
                             * Creates an AdGroupAdStatusEnum message from a plain object. Also converts values to their respective internal types.
                             * @function fromObject
                             * @memberof google.ads.googleads.v0.enums.AdGroupAdStatusEnum
                             * @static
                             * @param {Object.<string,*>} object Plain object
                             * @returns {google.ads.googleads.v0.enums.AdGroupAdStatusEnum} AdGroupAdStatusEnum
                             */
                            AdGroupAdStatusEnum.fromObject = function fromObject(object) {
                                if (object instanceof $root.google.ads.googleads.v0.enums.AdGroupAdStatusEnum)
                                    return object;
                                return new $root.google.ads.googleads.v0.enums.AdGroupAdStatusEnum();
                            };
    
                            /**
                             * Creates a plain object from an AdGroupAdStatusEnum message. Also converts values to other types if specified.
                             * @function toObject
                             * @memberof google.ads.googleads.v0.enums.AdGroupAdStatusEnum
                             * @static
                             * @param {google.ads.googleads.v0.enums.AdGroupAdStatusEnum} message AdGroupAdStatusEnum
                             * @param {$protobuf.IConversionOptions} [options] Conversion options
                             * @returns {Object.<string,*>} Plain object
                             */
                            AdGroupAdStatusEnum.toObject = function toObject() {
                                return {};
                            };
    
                            /**
                             * Converts this AdGroupAdStatusEnum to JSON.
                             * @function toJSON
                             * @memberof google.ads.googleads.v0.enums.AdGroupAdStatusEnum
                             * @instance
                             * @returns {Object.<string,*>} JSON object
                             */
                            AdGroupAdStatusEnum.prototype.toJSON = function toJSON() {
                                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                            };
    
                            /**
                             * AdGroupAdStatus enum.
                             * @name google.ads.googleads.v0.enums.AdGroupAdStatusEnum.AdGroupAdStatus
                             * @enum {string}
                             * @property {number} UNSPECIFIED=0 UNSPECIFIED value
                             * @property {number} UNKNOWN=1 UNKNOWN value
                             * @property {number} ENABLED=2 ENABLED value
                             * @property {number} PAUSED=3 PAUSED value
                             * @property {number} REMOVED=4 REMOVED value
                             */
                            AdGroupAdStatusEnum.AdGroupAdStatus = (function() {
                                var valuesById = {}, values = Object.create(valuesById);
                                values[valuesById[0] = "UNSPECIFIED"] = 0;
                                values[valuesById[1] = "UNKNOWN"] = 1;
                                values[valuesById[2] = "ENABLED"] = 2;
                                values[valuesById[3] = "PAUSED"] = 3;
                                values[valuesById[4] = "REMOVED"] = 4;
                                return values;
                            })();
    
                            return AdGroupAdStatusEnum;
                        })();
    
                        return enums;
                    })();
    
                    return v0;
                })();
    
                return googleads;
            })();
    
            return ads;
        })();
    
        google.api = (function() {
    
            /**
             * Namespace api.
             * @memberof google
             * @namespace
             */
            var api = {};
    
            api.Http = (function() {
    
                /**
                 * Properties of a Http.
                 * @memberof google.api
                 * @interface IHttp
                 * @property {Array.<google.api.IHttpRule>|null} [rules] Http rules
                 * @property {boolean|null} [fullyDecodeReservedExpansion] Http fullyDecodeReservedExpansion
                 */
    
                /**
                 * Constructs a new Http.
                 * @memberof google.api
                 * @classdesc Represents a Http.
                 * @implements IHttp
                 * @constructor
                 * @param {google.api.IHttp=} [properties] Properties to set
                 */
                function Http(properties) {
                    this.rules = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Http rules.
                 * @member {Array.<google.api.IHttpRule>} rules
                 * @memberof google.api.Http
                 * @instance
                 */
                Http.prototype.rules = $util.emptyArray;
    
                /**
                 * Http fullyDecodeReservedExpansion.
                 * @member {boolean} fullyDecodeReservedExpansion
                 * @memberof google.api.Http
                 * @instance
                 */
                Http.prototype.fullyDecodeReservedExpansion = false;
    
                /**
                 * Creates a new Http instance using the specified properties.
                 * @function create
                 * @memberof google.api.Http
                 * @static
                 * @param {google.api.IHttp=} [properties] Properties to set
                 * @returns {google.api.Http} Http instance
                 */
                Http.create = function create(properties) {
                    return new Http(properties);
                };
    
                /**
                 * Encodes the specified Http message. Does not implicitly {@link google.api.Http.verify|verify} messages.
                 * @function encode
                 * @memberof google.api.Http
                 * @static
                 * @param {google.api.IHttp} message Http message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Http.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.rules != null && message.rules.length)
                        for (var i = 0; i < message.rules.length; ++i)
                            $root.google.api.HttpRule.encode(message.rules[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    if (message.fullyDecodeReservedExpansion != null && message.hasOwnProperty("fullyDecodeReservedExpansion"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.fullyDecodeReservedExpansion);
                    return writer;
                };
    
                /**
                 * Encodes the specified Http message, length delimited. Does not implicitly {@link google.api.Http.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.api.Http
                 * @static
                 * @param {google.api.IHttp} message Http message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Http.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a Http message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.api.Http
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.api.Http} Http
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Http.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.api.Http();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.rules && message.rules.length))
                                message.rules = [];
                            message.rules.push($root.google.api.HttpRule.decode(reader, reader.uint32()));
                            break;
                        case 2:
                            message.fullyDecodeReservedExpansion = reader.bool();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a Http message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.api.Http
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.api.Http} Http
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Http.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a Http message.
                 * @function verify
                 * @memberof google.api.Http
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Http.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.rules != null && message.hasOwnProperty("rules")) {
                        if (!Array.isArray(message.rules))
                            return "rules: array expected";
                        for (var i = 0; i < message.rules.length; ++i) {
                            var error = $root.google.api.HttpRule.verify(message.rules[i]);
                            if (error)
                                return "rules." + error;
                        }
                    }
                    if (message.fullyDecodeReservedExpansion != null && message.hasOwnProperty("fullyDecodeReservedExpansion"))
                        if (typeof message.fullyDecodeReservedExpansion !== "boolean")
                            return "fullyDecodeReservedExpansion: boolean expected";
                    return null;
                };
    
                /**
                 * Creates a Http message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.api.Http
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.api.Http} Http
                 */
                Http.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.api.Http)
                        return object;
                    var message = new $root.google.api.Http();
                    if (object.rules) {
                        if (!Array.isArray(object.rules))
                            throw TypeError(".google.api.Http.rules: array expected");
                        message.rules = [];
                        for (var i = 0; i < object.rules.length; ++i) {
                            if (typeof object.rules[i] !== "object")
                                throw TypeError(".google.api.Http.rules: object expected");
                            message.rules[i] = $root.google.api.HttpRule.fromObject(object.rules[i]);
                        }
                    }
                    if (object.fullyDecodeReservedExpansion != null)
                        message.fullyDecodeReservedExpansion = Boolean(object.fullyDecodeReservedExpansion);
                    return message;
                };
    
                /**
                 * Creates a plain object from a Http message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.api.Http
                 * @static
                 * @param {google.api.Http} message Http
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Http.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.rules = [];
                    if (options.defaults)
                        object.fullyDecodeReservedExpansion = false;
                    if (message.rules && message.rules.length) {
                        object.rules = [];
                        for (var j = 0; j < message.rules.length; ++j)
                            object.rules[j] = $root.google.api.HttpRule.toObject(message.rules[j], options);
                    }
                    if (message.fullyDecodeReservedExpansion != null && message.hasOwnProperty("fullyDecodeReservedExpansion"))
                        object.fullyDecodeReservedExpansion = message.fullyDecodeReservedExpansion;
                    return object;
                };
    
                /**
                 * Converts this Http to JSON.
                 * @function toJSON
                 * @memberof google.api.Http
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Http.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return Http;
            })();
    
            api.HttpRule = (function() {
    
                /**
                 * Properties of a HttpRule.
                 * @memberof google.api
                 * @interface IHttpRule
                 * @property {string|null} [selector] HttpRule selector
                 * @property {string|null} [get] HttpRule get
                 * @property {string|null} [put] HttpRule put
                 * @property {string|null} [post] HttpRule post
                 * @property {string|null} ["delete"] HttpRule delete
                 * @property {string|null} [patch] HttpRule patch
                 * @property {google.api.ICustomHttpPattern|null} [custom] HttpRule custom
                 * @property {string|null} [body] HttpRule body
                 * @property {string|null} [responseBody] HttpRule responseBody
                 * @property {Array.<google.api.IHttpRule>|null} [additionalBindings] HttpRule additionalBindings
                 */
    
                /**
                 * Constructs a new HttpRule.
                 * @memberof google.api
                 * @classdesc Represents a HttpRule.
                 * @implements IHttpRule
                 * @constructor
                 * @param {google.api.IHttpRule=} [properties] Properties to set
                 */
                function HttpRule(properties) {
                    this.additionalBindings = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * HttpRule selector.
                 * @member {string} selector
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype.selector = "";
    
                /**
                 * HttpRule get.
                 * @member {string} get
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype.get = "";
    
                /**
                 * HttpRule put.
                 * @member {string} put
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype.put = "";
    
                /**
                 * HttpRule post.
                 * @member {string} post
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype.post = "";
    
                /**
                 * HttpRule delete.
                 * @member {string} delete
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype["delete"] = "";
    
                /**
                 * HttpRule patch.
                 * @member {string} patch
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype.patch = "";
    
                /**
                 * HttpRule custom.
                 * @member {google.api.ICustomHttpPattern|null|undefined} custom
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype.custom = null;
    
                /**
                 * HttpRule body.
                 * @member {string} body
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype.body = "";
    
                /**
                 * HttpRule responseBody.
                 * @member {string} responseBody
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype.responseBody = "";
    
                /**
                 * HttpRule additionalBindings.
                 * @member {Array.<google.api.IHttpRule>} additionalBindings
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                HttpRule.prototype.additionalBindings = $util.emptyArray;
    
                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;
    
                /**
                 * HttpRule pattern.
                 * @member {"get"|"put"|"post"|"delete"|"patch"|"custom"|undefined} pattern
                 * @memberof google.api.HttpRule
                 * @instance
                 */
                Object.defineProperty(HttpRule.prototype, "pattern", {
                    get: $util.oneOfGetter($oneOfFields = ["get", "put", "post", "delete", "patch", "custom"]),
                    set: $util.oneOfSetter($oneOfFields)
                });
    
                /**
                 * Creates a new HttpRule instance using the specified properties.
                 * @function create
                 * @memberof google.api.HttpRule
                 * @static
                 * @param {google.api.IHttpRule=} [properties] Properties to set
                 * @returns {google.api.HttpRule} HttpRule instance
                 */
                HttpRule.create = function create(properties) {
                    return new HttpRule(properties);
                };
    
                /**
                 * Encodes the specified HttpRule message. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
                 * @function encode
                 * @memberof google.api.HttpRule
                 * @static
                 * @param {google.api.IHttpRule} message HttpRule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HttpRule.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.selector != null && message.hasOwnProperty("selector"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.selector);
                    if (message.get != null && message.hasOwnProperty("get"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.get);
                    if (message.put != null && message.hasOwnProperty("put"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.put);
                    if (message.post != null && message.hasOwnProperty("post"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.post);
                    if (message["delete"] != null && message.hasOwnProperty("delete"))
                        writer.uint32(/* id 5, wireType 2 =*/42).string(message["delete"]);
                    if (message.patch != null && message.hasOwnProperty("patch"))
                        writer.uint32(/* id 6, wireType 2 =*/50).string(message.patch);
                    if (message.body != null && message.hasOwnProperty("body"))
                        writer.uint32(/* id 7, wireType 2 =*/58).string(message.body);
                    if (message.custom != null && message.hasOwnProperty("custom"))
                        $root.google.api.CustomHttpPattern.encode(message.custom, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                    if (message.additionalBindings != null && message.additionalBindings.length)
                        for (var i = 0; i < message.additionalBindings.length; ++i)
                            $root.google.api.HttpRule.encode(message.additionalBindings[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
                    if (message.responseBody != null && message.hasOwnProperty("responseBody"))
                        writer.uint32(/* id 12, wireType 2 =*/98).string(message.responseBody);
                    return writer;
                };
    
                /**
                 * Encodes the specified HttpRule message, length delimited. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.api.HttpRule
                 * @static
                 * @param {google.api.IHttpRule} message HttpRule message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                HttpRule.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a HttpRule message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.api.HttpRule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.api.HttpRule} HttpRule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HttpRule.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.api.HttpRule();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.selector = reader.string();
                            break;
                        case 2:
                            message.get = reader.string();
                            break;
                        case 3:
                            message.put = reader.string();
                            break;
                        case 4:
                            message.post = reader.string();
                            break;
                        case 5:
                            message["delete"] = reader.string();
                            break;
                        case 6:
                            message.patch = reader.string();
                            break;
                        case 8:
                            message.custom = $root.google.api.CustomHttpPattern.decode(reader, reader.uint32());
                            break;
                        case 7:
                            message.body = reader.string();
                            break;
                        case 12:
                            message.responseBody = reader.string();
                            break;
                        case 11:
                            if (!(message.additionalBindings && message.additionalBindings.length))
                                message.additionalBindings = [];
                            message.additionalBindings.push($root.google.api.HttpRule.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a HttpRule message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.api.HttpRule
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.api.HttpRule} HttpRule
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                HttpRule.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a HttpRule message.
                 * @function verify
                 * @memberof google.api.HttpRule
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                HttpRule.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.selector != null && message.hasOwnProperty("selector"))
                        if (!$util.isString(message.selector))
                            return "selector: string expected";
                    if (message.get != null && message.hasOwnProperty("get")) {
                        properties.pattern = 1;
                        if (!$util.isString(message.get))
                            return "get: string expected";
                    }
                    if (message.put != null && message.hasOwnProperty("put")) {
                        if (properties.pattern === 1)
                            return "pattern: multiple values";
                        properties.pattern = 1;
                        if (!$util.isString(message.put))
                            return "put: string expected";
                    }
                    if (message.post != null && message.hasOwnProperty("post")) {
                        if (properties.pattern === 1)
                            return "pattern: multiple values";
                        properties.pattern = 1;
                        if (!$util.isString(message.post))
                            return "post: string expected";
                    }
                    if (message["delete"] != null && message.hasOwnProperty("delete")) {
                        if (properties.pattern === 1)
                            return "pattern: multiple values";
                        properties.pattern = 1;
                        if (!$util.isString(message["delete"]))
                            return "delete: string expected";
                    }
                    if (message.patch != null && message.hasOwnProperty("patch")) {
                        if (properties.pattern === 1)
                            return "pattern: multiple values";
                        properties.pattern = 1;
                        if (!$util.isString(message.patch))
                            return "patch: string expected";
                    }
                    if (message.custom != null && message.hasOwnProperty("custom")) {
                        if (properties.pattern === 1)
                            return "pattern: multiple values";
                        properties.pattern = 1;
                        {
                            var error = $root.google.api.CustomHttpPattern.verify(message.custom);
                            if (error)
                                return "custom." + error;
                        }
                    }
                    if (message.body != null && message.hasOwnProperty("body"))
                        if (!$util.isString(message.body))
                            return "body: string expected";
                    if (message.responseBody != null && message.hasOwnProperty("responseBody"))
                        if (!$util.isString(message.responseBody))
                            return "responseBody: string expected";
                    if (message.additionalBindings != null && message.hasOwnProperty("additionalBindings")) {
                        if (!Array.isArray(message.additionalBindings))
                            return "additionalBindings: array expected";
                        for (var i = 0; i < message.additionalBindings.length; ++i) {
                            var error = $root.google.api.HttpRule.verify(message.additionalBindings[i]);
                            if (error)
                                return "additionalBindings." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a HttpRule message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.api.HttpRule
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.api.HttpRule} HttpRule
                 */
                HttpRule.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.api.HttpRule)
                        return object;
                    var message = new $root.google.api.HttpRule();
                    if (object.selector != null)
                        message.selector = String(object.selector);
                    if (object.get != null)
                        message.get = String(object.get);
                    if (object.put != null)
                        message.put = String(object.put);
                    if (object.post != null)
                        message.post = String(object.post);
                    if (object["delete"] != null)
                        message["delete"] = String(object["delete"]);
                    if (object.patch != null)
                        message.patch = String(object.patch);
                    if (object.custom != null) {
                        if (typeof object.custom !== "object")
                            throw TypeError(".google.api.HttpRule.custom: object expected");
                        message.custom = $root.google.api.CustomHttpPattern.fromObject(object.custom);
                    }
                    if (object.body != null)
                        message.body = String(object.body);
                    if (object.responseBody != null)
                        message.responseBody = String(object.responseBody);
                    if (object.additionalBindings) {
                        if (!Array.isArray(object.additionalBindings))
                            throw TypeError(".google.api.HttpRule.additionalBindings: array expected");
                        message.additionalBindings = [];
                        for (var i = 0; i < object.additionalBindings.length; ++i) {
                            if (typeof object.additionalBindings[i] !== "object")
                                throw TypeError(".google.api.HttpRule.additionalBindings: object expected");
                            message.additionalBindings[i] = $root.google.api.HttpRule.fromObject(object.additionalBindings[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a HttpRule message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.api.HttpRule
                 * @static
                 * @param {google.api.HttpRule} message HttpRule
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                HttpRule.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.additionalBindings = [];
                    if (options.defaults) {
                        object.selector = "";
                        object.body = "";
                        object.responseBody = "";
                    }
                    if (message.selector != null && message.hasOwnProperty("selector"))
                        object.selector = message.selector;
                    if (message.get != null && message.hasOwnProperty("get")) {
                        object.get = message.get;
                        if (options.oneofs)
                            object.pattern = "get";
                    }
                    if (message.put != null && message.hasOwnProperty("put")) {
                        object.put = message.put;
                        if (options.oneofs)
                            object.pattern = "put";
                    }
                    if (message.post != null && message.hasOwnProperty("post")) {
                        object.post = message.post;
                        if (options.oneofs)
                            object.pattern = "post";
                    }
                    if (message["delete"] != null && message.hasOwnProperty("delete")) {
                        object["delete"] = message["delete"];
                        if (options.oneofs)
                            object.pattern = "delete";
                    }
                    if (message.patch != null && message.hasOwnProperty("patch")) {
                        object.patch = message.patch;
                        if (options.oneofs)
                            object.pattern = "patch";
                    }
                    if (message.body != null && message.hasOwnProperty("body"))
                        object.body = message.body;
                    if (message.custom != null && message.hasOwnProperty("custom")) {
                        object.custom = $root.google.api.CustomHttpPattern.toObject(message.custom, options);
                        if (options.oneofs)
                            object.pattern = "custom";
                    }
                    if (message.additionalBindings && message.additionalBindings.length) {
                        object.additionalBindings = [];
                        for (var j = 0; j < message.additionalBindings.length; ++j)
                            object.additionalBindings[j] = $root.google.api.HttpRule.toObject(message.additionalBindings[j], options);
                    }
                    if (message.responseBody != null && message.hasOwnProperty("responseBody"))
                        object.responseBody = message.responseBody;
                    return object;
                };
    
                /**
                 * Converts this HttpRule to JSON.
                 * @function toJSON
                 * @memberof google.api.HttpRule
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                HttpRule.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return HttpRule;
            })();
    
            api.CustomHttpPattern = (function() {
    
                /**
                 * Properties of a CustomHttpPattern.
                 * @memberof google.api
                 * @interface ICustomHttpPattern
                 * @property {string|null} [kind] CustomHttpPattern kind
                 * @property {string|null} [path] CustomHttpPattern path
                 */
    
                /**
                 * Constructs a new CustomHttpPattern.
                 * @memberof google.api
                 * @classdesc Represents a CustomHttpPattern.
                 * @implements ICustomHttpPattern
                 * @constructor
                 * @param {google.api.ICustomHttpPattern=} [properties] Properties to set
                 */
                function CustomHttpPattern(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * CustomHttpPattern kind.
                 * @member {string} kind
                 * @memberof google.api.CustomHttpPattern
                 * @instance
                 */
                CustomHttpPattern.prototype.kind = "";
    
                /**
                 * CustomHttpPattern path.
                 * @member {string} path
                 * @memberof google.api.CustomHttpPattern
                 * @instance
                 */
                CustomHttpPattern.prototype.path = "";
    
                /**
                 * Creates a new CustomHttpPattern instance using the specified properties.
                 * @function create
                 * @memberof google.api.CustomHttpPattern
                 * @static
                 * @param {google.api.ICustomHttpPattern=} [properties] Properties to set
                 * @returns {google.api.CustomHttpPattern} CustomHttpPattern instance
                 */
                CustomHttpPattern.create = function create(properties) {
                    return new CustomHttpPattern(properties);
                };
    
                /**
                 * Encodes the specified CustomHttpPattern message. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
                 * @function encode
                 * @memberof google.api.CustomHttpPattern
                 * @static
                 * @param {google.api.ICustomHttpPattern} message CustomHttpPattern message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CustomHttpPattern.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.kind != null && message.hasOwnProperty("kind"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.kind);
                    if (message.path != null && message.hasOwnProperty("path"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.path);
                    return writer;
                };
    
                /**
                 * Encodes the specified CustomHttpPattern message, length delimited. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.api.CustomHttpPattern
                 * @static
                 * @param {google.api.ICustomHttpPattern} message CustomHttpPattern message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CustomHttpPattern.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a CustomHttpPattern message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.api.CustomHttpPattern
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.api.CustomHttpPattern} CustomHttpPattern
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CustomHttpPattern.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.api.CustomHttpPattern();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.kind = reader.string();
                            break;
                        case 2:
                            message.path = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a CustomHttpPattern message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.api.CustomHttpPattern
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.api.CustomHttpPattern} CustomHttpPattern
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CustomHttpPattern.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a CustomHttpPattern message.
                 * @function verify
                 * @memberof google.api.CustomHttpPattern
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CustomHttpPattern.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.kind != null && message.hasOwnProperty("kind"))
                        if (!$util.isString(message.kind))
                            return "kind: string expected";
                    if (message.path != null && message.hasOwnProperty("path"))
                        if (!$util.isString(message.path))
                            return "path: string expected";
                    return null;
                };
    
                /**
                 * Creates a CustomHttpPattern message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.api.CustomHttpPattern
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.api.CustomHttpPattern} CustomHttpPattern
                 */
                CustomHttpPattern.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.api.CustomHttpPattern)
                        return object;
                    var message = new $root.google.api.CustomHttpPattern();
                    if (object.kind != null)
                        message.kind = String(object.kind);
                    if (object.path != null)
                        message.path = String(object.path);
                    return message;
                };
    
                /**
                 * Creates a plain object from a CustomHttpPattern message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.api.CustomHttpPattern
                 * @static
                 * @param {google.api.CustomHttpPattern} message CustomHttpPattern
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CustomHttpPattern.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.kind = "";
                        object.path = "";
                    }
                    if (message.kind != null && message.hasOwnProperty("kind"))
                        object.kind = message.kind;
                    if (message.path != null && message.hasOwnProperty("path"))
                        object.path = message.path;
                    return object;
                };
    
                /**
                 * Converts this CustomHttpPattern to JSON.
                 * @function toJSON
                 * @memberof google.api.CustomHttpPattern
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CustomHttpPattern.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return CustomHttpPattern;
            })();
    
            return api;
        })();
    
        return google;
    })();

    return $root;
});
