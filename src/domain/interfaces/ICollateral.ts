import IToken from "./IToken";

interface ICollateral {
    token: IToken
    tokenAmount: number
    tokenValueOnBorrow: number
    collateralizationPercentage: number
    liquidationCost: number
    maxDeptAmount: number

    updateMaxDebtAmount(): number
}

export default ICollateral;