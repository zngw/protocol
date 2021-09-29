import * as $protobuf from "protobufjs";
/** Properties of a GameLoginReq. */
export interface IGameLoginReq {

    /** GameLoginReq account */
    account?: (string|null);

    /** GameLoginReq password */
    password?: (string|null);
}

/** Represents a GameLoginReq. */
export class GameLoginReq implements IGameLoginReq {

    /**
     * Constructs a new GameLoginReq.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGameLoginReq);

    /** GameLoginReq account. */
    public account: string;

    /** GameLoginReq password. */
    public password: string;

    /**
     * Creates a new GameLoginReq instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GameLoginReq instance
     */
    public static create(properties?: IGameLoginReq): GameLoginReq;

    /**
     * Encodes the specified GameLoginReq message. Does not implicitly {@link GameLoginReq.verify|verify} messages.
     * @param message GameLoginReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGameLoginReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GameLoginReq message, length delimited. Does not implicitly {@link GameLoginReq.verify|verify} messages.
     * @param message GameLoginReq message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGameLoginReq, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GameLoginReq message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GameLoginReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameLoginReq;

    /**
     * Decodes a GameLoginReq message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GameLoginReq
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GameLoginReq;

    /**
     * Verifies a GameLoginReq message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GameLoginReq message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GameLoginReq
     */
    public static fromObject(object: { [k: string]: any }): GameLoginReq;

    /**
     * Creates a plain object from a GameLoginReq message. Also converts values to other types if specified.
     * @param message GameLoginReq
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GameLoginReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GameLoginReq to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a GameLoginResp. */
export interface IGameLoginResp {

    /** GameLoginResp result */
    result?: (number|null);
}

/** Represents a GameLoginResp. */
export class GameLoginResp implements IGameLoginResp {

    /**
     * Constructs a new GameLoginResp.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGameLoginResp);

    /** GameLoginResp result. */
    public result: number;

    /**
     * Creates a new GameLoginResp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GameLoginResp instance
     */
    public static create(properties?: IGameLoginResp): GameLoginResp;

    /**
     * Encodes the specified GameLoginResp message. Does not implicitly {@link GameLoginResp.verify|verify} messages.
     * @param message GameLoginResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGameLoginResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GameLoginResp message, length delimited. Does not implicitly {@link GameLoginResp.verify|verify} messages.
     * @param message GameLoginResp message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGameLoginResp, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GameLoginResp message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GameLoginResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameLoginResp;

    /**
     * Decodes a GameLoginResp message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GameLoginResp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GameLoginResp;

    /**
     * Verifies a GameLoginResp message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GameLoginResp message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GameLoginResp
     */
    public static fromObject(object: { [k: string]: any }): GameLoginResp;

    /**
     * Creates a plain object from a GameLoginResp message. Also converts values to other types if specified.
     * @param message GameLoginResp
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GameLoginResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GameLoginResp to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
