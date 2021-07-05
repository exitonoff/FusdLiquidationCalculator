import FtmFusdCollateral from "./domain/classes/FtmFusdCollateral";
import FusdDebt from "./domain/classes/FusdDebt";

const collateral = new FtmFusdCollateral(1000, 0.22);
const debtPosition = new FusdDebt(collateral, 50);

console.log(debtPosition.mintedAmount);