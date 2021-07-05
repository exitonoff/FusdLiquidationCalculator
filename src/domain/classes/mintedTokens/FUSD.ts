import IMintedToken from "../../interfaces/IMintedToken";

class FUSD implements IMintedToken {
    readonly name = "Fantom USD"
    readonly ticker = "fUSD"
    readonly address = "0xad84341756bf337f5a0164515b1f6f993d194e1f"
    readonly mintValue = 1
    price = 0

    constructor() {
        this.updatePrice();
    }

    updatePrice(): number {
        this.price = 1;
        return this.price;
    }
}

export default FUSD;