import * as $protobuf from "protobufjs";
/** Namespace google. */
export namespace google {

    /** Namespace ads. */
    namespace ads {

        /** Namespace googleads. */
        namespace googleads {

            /** Namespace v0. */
            namespace v0 {

                /** Namespace common. */
                namespace common {

                    /** Properties of a Value. */
                    interface IValue {

                        /** Value booleanValue */
                        booleanValue?: (boolean|null);

                        /** Value int64Value */
                        int64Value?: (number|Long|null);

                        /** Value floatValue */
                        floatValue?: (number|null);

                        /** Value doubleValue */
                        doubleValue?: (number|null);

                        /** Value stringValue */
                        stringValue?: (string|null);
                    }

                    /** Represents a Value. */
                    class Value implements IValue {

                        /**
                         * Constructs a new Value.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.ads.googleads.v0.common.IValue);

                        /** Value booleanValue. */
                        public booleanValue: boolean;

                        /** Value int64Value. */
                        public int64Value: (number|Long);

                        /** Value floatValue. */
                        public floatValue: number;

                        /** Value doubleValue. */
                        public doubleValue: number;

                        /** Value stringValue. */
                        public stringValue: string;

                        /** Value value. */
                        public value?: ("booleanValue"|"int64Value"|"floatValue"|"doubleValue"|"stringValue");

                        /**
                         * Creates a new Value instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Value instance
                         */
                        public static create(properties?: google.ads.googleads.v0.common.IValue): google.ads.googleads.v0.common.Value;

                        /**
                         * Encodes the specified Value message. Does not implicitly {@link google.ads.googleads.v0.common.Value.verify|verify} messages.
                         * @param message Value message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.ads.googleads.v0.common.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Value message, length delimited. Does not implicitly {@link google.ads.googleads.v0.common.Value.verify|verify} messages.
                         * @param message Value message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.ads.googleads.v0.common.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Value message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Value
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.ads.googleads.v0.common.Value;

                        /**
                         * Decodes a Value message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Value
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.ads.googleads.v0.common.Value;

                        /**
                         * Verifies a Value message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Value message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Value
                         */
                        public static fromObject(object: { [k: string]: any }): google.ads.googleads.v0.common.Value;

                        /**
                         * Creates a plain object from a Value message. Also converts values to other types if specified.
                         * @param message Value
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.ads.googleads.v0.common.Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Value to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }
            }
        }
    }
}
