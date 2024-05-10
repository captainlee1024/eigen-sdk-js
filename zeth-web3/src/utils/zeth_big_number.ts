import { BaseBigNumber } from "@maticnetwork/maticjs";
import BN from "bn.js";
import Web3 from "web3";

export class ZethBigNumber extends BaseBigNumber {
    private bn_: BN;

    constructor(value) {
        super();
        this.bn_ = new BN(value);

        // this.bn_.toString()
    }

    static isBN(value) {
        if (value instanceof ZethBigNumber) {
            return true;
        }
        return BN.isBN(value);
    }

    toString(base?) {
        return this.bn_.toString(base);
    }

    toNumber() {
        return this.bn_.toNumber();
    }

    toBuffer(base?) {
        return this.bn_.toBuffer();
    }

    // static from(value) {
    //     return new ZethBigNumber(value);
    // }

    add(value: BaseBigNumber) {
        const bn = this.bn_.add(
            new BN(value.toString())
        );
        return new ZethBigNumber(bn);
    }

    sub(value: BaseBigNumber) {
        const bn = this.bn_.sub(
            new BN(value.toString())
        );
        return new ZethBigNumber(bn);
    }

    mul(value: BaseBigNumber) {
        const bn = this.bn_.mul(
            new BN(value.toString())
        );
        return new ZethBigNumber(bn);
    }

    div(value: BaseBigNumber) {
        const bn = this.bn_.div(
            new BN(value.toString())
        );
        return new ZethBigNumber(bn);
    }

    lte(value: BaseBigNumber) {
        return this.bn_.lte(
            new BN(value.toString())
        );
    }

    lt(value: BaseBigNumber) {
        return this.bn_.lt(
            new BN(value.toString())
        );
    }

    gte(value: BaseBigNumber) {
        return this.bn_.gte(
            new BN(value.toString())
        );
    }

    gt(value: BaseBigNumber) {
        return this.bn_.gt(
            new BN(value.toString())
        );
    }

    eq(value: BaseBigNumber) {
        return this.bn_.eq(
            new BN(value.toString())
        );
    }
}