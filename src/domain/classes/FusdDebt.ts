import FtmFusdCollateral from "./FtmFusdCollateral";
import FUSD from "./mintedTokens/FUSD";
import IDebt from "../interfaces/IDebt";

class FusdDebt implements IDebt {
    static readonly FUSD = new FUSD()
    
    collateral: FtmFusdCollateral
    mintedAmount: number
    readonly mintedToken = FusdDebt.FUSD

    constructor(collateral: FtmFusdCollateral, mintedAmount: number) {
        this.collateral = collateral;
        this.mintedAmount = mintedAmount;
    }
}

export default FusdDebt;