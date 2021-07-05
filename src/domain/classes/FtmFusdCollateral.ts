import ICollateral from "../interfaces/ICollateral";
import wFTM from "./WFtm";

class FtmFusdCollateral implements ICollateral {
    tokenAmount: number
    tokenValueOnBorrow: number
    collateralizationPercentage: number
    liquidationCost: number
    maxDeptAmount: number
    readonly token = wFTM

    constructor(tokenAmount: number, tokenValueOnBorrow: number) {
        this.tokenAmount = tokenAmount;
        this.tokenValueOnBorrow = tokenValueOnBorrow;
        this.collateralizationPercentage = 300;
        this.liquidationCost = 0;
        this.maxDeptAmount = tokenAmount * tokenValueOnBorrow / (this.collateralizationPercentage / 100); 
    }
    
    updateMaxDebtAmount(): number {
        const ftmPrice = this.token.updatePrice();
        
        this.maxDeptAmount = this.tokenAmount * ftmPrice / (this.collateralizationPercentage / 100);

        return this.maxDeptAmount;
    }
}

export default FtmFusdCollateral;