import ICollateral from "./ICollateral";
import IMintedToken from "./IMintedToken";

interface IDebt {
    mintedToken: IMintedToken
    
    mintedAmount: number
    collateral: ICollateral
}

export default IDebt;