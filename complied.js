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
    
                    v0.common = (function() {
    
                        /**
                         * Namespace common.
                         * @memberof google.ads.googleads.v0
                         * @namespace
                         */
                        var common = {};
    
                        common.Value = (function() {
    
                            /**
                             * Properties of a Value.
                             * @memberof google.ads.googleads.v0.common
                             * @interface IValue
                             * @property {boolean|null} [booleanValue] Value booleanValue
                             * @property {number|Long|null} [int64Value] Value int64Value
                             * @property {number|null} [floatValue] Value floatValue
                             * @property {number|null} [doubleValue] Value doubleValue
                             * @property {string|null} [stringValue] Value stringValue
                             */
    
                            /**
                             * Constructs a new Value.
                             * @memberof google.ads.googleads.v0.common
                             * @classdesc Represents a Value.
                             * @implements IValue
                             * @constructor
                             * @param {google.ads.googleads.v0.common.IValue=} [properties] Properties to set
                             */
                            function Value(properties) {
                                if (properties)
                                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                        if (properties[keys[i]] != null)
                                            this[keys[i]] = properties[keys[i]];
                            }
    
                            /**
                             * Value booleanValue.
                             * @member {boolean} booleanValue
                             * @memberof google.ads.googleads.v0.common.Value
                             * @instance
                             */
                            Value.prototype.booleanValue = false;
    
                            /**
                             * Value int64Value.
                             * @member {number|Long} int64Value
                             * @memberof google.ads.googleads.v0.common.Value
                             * @instance
                             */
                            Value.prototype.int64Value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                            /**
                             * Value floatValue.
                             * @member {number} floatValue
                             * @memberof google.ads.googleads.v0.common.Value
                             * @instance
                             */
                            Value.prototype.floatValue = 0;
    
                            /**
                             * Value doubleValue.
                             * @member {number} doubleValue
                             * @memberof google.ads.googleads.v0.common.Value
                             * @instance
                             */
                            Value.prototype.doubleValue = 0;
    
                            /**
                             * Value stringValue.
                             * @member {string} stringValue
                             * @memberof google.ads.googleads.v0.common.Value
                             * @instance
                             */
                            Value.prototype.stringValue = "";
    
                            // OneOf field names bound to virtual getters and setters
                            var $oneOfFields;
    
                            /**
                             * Value value.
                             * @member {"booleanValue"|"int64Value"|"floatValue"|"doubleValue"|"stringValue"|undefined} value
                             * @memberof google.ads.googleads.v0.common.Value
                             * @instance
                             */
                            Object.defineProperty(Value.prototype, "value", {
                                get: $util.oneOfGetter($oneOfFields = ["booleanValue", "int64Value", "floatValue", "doubleValue", "stringValue"]),
                                set: $util.oneOfSetter($oneOfFields)
                            });
    
                            /**
                             * Creates a new Value instance using the specified properties.
                             * @function create
                             * @memberof google.ads.googleads.v0.common.Value
                             * @static
                             * @param {google.ads.googleads.v0.common.IValue=} [properties] Properties to set
                             * @returns {google.ads.googleads.v0.common.Value} Value instance
                             */
                            Value.create = function create(properties) {
                                return new Value(properties);
                            };
    
                            /**
                             * Encodes the specified Value message. Does not implicitly {@link google.ads.googleads.v0.common.Value.verify|verify} messages.
                             * @function encode
                             * @memberof google.ads.googleads.v0.common.Value
                             * @static
                             * @param {google.ads.googleads.v0.common.IValue} message Value message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            Value.encode = function encode(message, writer) {
                                if (!writer)
                                    writer = $Writer.create();
                                if (message.booleanValue != null && message.hasOwnProperty("booleanValue"))
                                    writer.uint32(/* id 1, wireType 0 =*/8).bool(message.booleanValue);
                                if (message.int64Value != null && message.hasOwnProperty("int64Value"))
                                    writer.uint32(/* id 2, wireType 0 =*/16).int64(message.int64Value);
                                if (message.floatValue != null && message.hasOwnProperty("floatValue"))
                                    writer.uint32(/* id 3, wireType 5 =*/29).float(message.floatValue);
                                if (message.doubleValue != null && message.hasOwnProperty("doubleValue"))
                                    writer.uint32(/* id 4, wireType 1 =*/33).double(message.doubleValue);
                                if (message.stringValue != null && message.hasOwnProperty("stringValue"))
                                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.stringValue);
                                return writer;
                            };
    
                            /**
                             * Encodes the specified Value message, length delimited. Does not implicitly {@link google.ads.googleads.v0.common.Value.verify|verify} messages.
                             * @function encodeDelimited
                             * @memberof google.ads.googleads.v0.common.Value
                             * @static
                             * @param {google.ads.googleads.v0.common.IValue} message Value message or plain object to encode
                             * @param {$protobuf.Writer} [writer] Writer to encode to
                             * @returns {$protobuf.Writer} Writer
                             */
                            Value.encodeDelimited = function encodeDelimited(message, writer) {
                                return this.encode(message, writer).ldelim();
                            };
    
                            /**
                             * Decodes a Value message from the specified reader or buffer.
                             * @function decode
                             * @memberof google.ads.googleads.v0.common.Value
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @param {number} [length] Message length if known beforehand
                             * @returns {google.ads.googleads.v0.common.Value} Value
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            Value.decode = function decode(reader, length) {
                                if (!(reader instanceof $Reader))
                                    reader = $Reader.create(reader);
                                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.ads.googleads.v0.common.Value();
                                while (reader.pos < end) {
                                    var tag = reader.uint32();
                                    switch (tag >>> 3) {
                                    case 1:
                                        message.booleanValue = reader.bool();
                                        break;
                                    case 2:
                                        message.int64Value = reader.int64();
                                        break;
                                    case 3:
                                        message.floatValue = reader.float();
                                        break;
                                    case 4:
                                        message.doubleValue = reader.double();
                                        break;
                                    case 5:
                                        message.stringValue = reader.string();
                                        break;
                                    default:
                                        reader.skipType(tag & 7);
                                        break;
                                    }
                                }
                                return message;
                            };
    
                            /**
                             * Decodes a Value message from the specified reader or buffer, length delimited.
                             * @function decodeDelimited
                             * @memberof google.ads.googleads.v0.common.Value
                             * @static
                             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                             * @returns {google.ads.googleads.v0.common.Value} Value
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            Value.decodeDelimited = function decodeDelimited(reader) {
                                if (!(reader instanceof $Reader))
                                    reader = new $Reader(reader);
                                return this.decode(reader, reader.uint32());
                            };
    
                            /**
                             * Verifies a Value message.
                             * @function verify
                             * @memberof google.ads.googleads.v0.common.Value
                             * @static
                             * @param {Object.<string,*>} message Plain object to verify
                             * @returns {string|null} `null` if valid, otherwise the reason why it is not
                             */
                            Value.verify = function verify(message) {
                                if (typeof message !== "object" || message === null)
                                    return "object expected";
                                var properties = {};
                                if (message.booleanValue != null && message.hasOwnProperty("booleanValue")) {
                                    properties.value = 1;
                                    if (typeof message.booleanValue !== "boolean")
                                        return "booleanValue: boolean expected";
                                }
                                if (message.int64Value != null && message.hasOwnProperty("int64Value")) {
                                    if (properties.value === 1)
                                        return "value: multiple values";
                                    properties.value = 1;
                                    if (!$util.isInteger(message.int64Value) && !(message.int64Value && $util.isInteger(message.int64Value.low) && $util.isInteger(message.int64Value.high)))
                                        return "int64Value: integer|Long expected";
                                }
                                if (message.floatValue != null && message.hasOwnProperty("floatValue")) {
                                    if (properties.value === 1)
                                        return "value: multiple values";
                                    properties.value = 1;
                                    if (typeof message.floatValue !== "number")
                                        return "floatValue: number expected";
                                }
                                if (message.doubleValue != null && message.hasOwnProperty("doubleValue")) {
                                    if (properties.value === 1)
                                        return "value: multiple values";
                                    properties.value = 1;
                                    if (typeof message.doubleValue !== "number")
                                        return "doubleValue: number expected";
                                }
                                if (message.stringValue != null && message.hasOwnProperty("stringValue")) {
                                    if (properties.value === 1)
                                        return "value: multiple values";
                                    properties.value = 1;
                                    if (!$util.isString(message.stringValue))
                                        return "stringValue: string expected";
                                }
                                return null;
                            };
    
                            /**
                             * Creates a Value message from a plain object. Also converts values to their respective internal types.
                             * @function fromObject
                             * @memberof google.ads.googleads.v0.common.Value
                             * @static
                             * @param {Object.<string,*>} object Plain object
                             * @returns {google.ads.googleads.v0.common.Value} Value
                             */
                            Value.fromObject = function fromObject(object) {
                                if (object instanceof $root.google.ads.googleads.v0.common.Value)
                                    return object;
                                var message = new $root.google.ads.googleads.v0.common.Value();
                                if (object.booleanValue != null)
                                    message.booleanValue = Boolean(object.booleanValue);
                                if (object.int64Value != null)
                                    if ($util.Long)
                                        (message.int64Value = $util.Long.fromValue(object.int64Value)).unsigned = false;
                                    else if (typeof object.int64Value === "string")
                                        message.int64Value = parseInt(object.int64Value, 10);
                                    else if (typeof object.int64Value === "number")
                                        message.int64Value = object.int64Value;
                                    else if (typeof object.int64Value === "object")
                                        message.int64Value = new $util.LongBits(object.int64Value.low >>> 0, object.int64Value.high >>> 0).toNumber();
                                if (object.floatValue != null)
                                    message.floatValue = Number(object.floatValue);
                                if (object.doubleValue != null)
                                    message.doubleValue = Number(object.doubleValue);
                                if (object.stringValue != null)
                                    message.stringValue = String(object.stringValue);
                                return message;
                            };
    
                            /**
                             * Creates a plain object from a Value message. Also converts values to other types if specified.
                             * @function toObject
                             * @memberof google.ads.googleads.v0.common.Value
                             * @static
                             * @param {google.ads.googleads.v0.common.Value} message Value
                             * @param {$protobuf.IConversionOptions} [options] Conversion options
                             * @returns {Object.<string,*>} Plain object
                             */
                            Value.toObject = function toObject(message, options) {
                                if (!options)
                                    options = {};
                                var object = {};
                                if (message.booleanValue != null && message.hasOwnProperty("booleanValue")) {
                                    object.booleanValue = message.booleanValue;
                                    if (options.oneofs)
                                        object.value = "booleanValue";
                                }
                                if (message.int64Value != null && message.hasOwnProperty("int64Value")) {
                                    if (typeof message.int64Value === "number")
                                        object.int64Value = options.longs === String ? String(message.int64Value) : message.int64Value;
                                    else
                                        object.int64Value = options.longs === String ? $util.Long.prototype.toString.call(message.int64Value) : options.longs === Number ? new $util.LongBits(message.int64Value.low >>> 0, message.int64Value.high >>> 0).toNumber() : message.int64Value;
                                    if (options.oneofs)
                                        object.value = "int64Value";
                                }
                                if (message.floatValue != null && message.hasOwnProperty("floatValue")) {
                                    object.floatValue = options.json && !isFinite(message.floatValue) ? String(message.floatValue) : message.floatValue;
                                    if (options.oneofs)
                                        object.value = "floatValue";
                                }
                                if (message.doubleValue != null && message.hasOwnProperty("doubleValue")) {
                                    object.doubleValue = options.json && !isFinite(message.doubleValue) ? String(message.doubleValue) : message.doubleValue;
                                    if (options.oneofs)
                                        object.value = "doubleValue";
                                }
                                if (message.stringValue != null && message.hasOwnProperty("stringValue")) {
                                    object.stringValue = message.stringValue;
                                    if (options.oneofs)
                                        object.value = "stringValue";
                                }
                                return object;
                            };
    
                            /**
                             * Converts this Value to JSON.
                             * @function toJSON
                             * @memberof google.ads.googleads.v0.common.Value
                             * @instance
                             * @returns {Object.<string,*>} JSON object
                             */
                            Value.prototype.toJSON = function toJSON() {
                                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                            };
    
                            return Value;
                        })();
    
                        return common;
                    })();
    
                    return v0;
                })();
    
                return googleads;
            })();
    
            return ads;
        })();
    
        return google;
    })();

    return $root;
});
