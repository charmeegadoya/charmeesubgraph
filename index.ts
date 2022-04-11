/* eslint import/newline-after-import: "off" */
import JSBI from 'jsbi';
export declare type BigintIsh = JSBI | bigint | string;
export  enum ChainId {
    MAINNET = 56,
    BSCTESTNET = 97
}
export  enum TradeType {
    EXACT_INPUT = 0,
    EXACT_OUTPUT = 1
}
export  enum Rounding {
    ROUND_DOWN = 0,
    ROUND_HALF_UP = 1,
    ROUND_UP = 2
}
export  const FACTORY_ADDRESS = "0xeA60B9B18e8A98fe90aD31940e94b88e66E51C16";
export  const INIT_CODE_HASH = "0xa2ce3d0e514cdb57c22b91f662b1e55744b9fb8b679c71ea97804d118ac25a2d";
export declare const MINIMUM_LIQUIDITY: JSBI;
export declare const ZERO: JSBI;
export declare const ONE: JSBI;
export declare const TWO: JSBI;
export declare const THREE: JSBI;
export declare const FIVE: JSBI;
export declare const TEN: JSBI;
export declare const _100: JSBI;
export declare const _997: JSBI;
export declare const _1000: JSBI;
export  enum SolidityType {
    uint8 = "uint8",
    uint256 = "uint256"
}
export declare const SOLIDITY_TYPE_MAXIMA: {
    uint8: JSBI;
    uint256: JSBI;
};
