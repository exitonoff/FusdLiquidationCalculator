import IToken from "../interfaces/IToken";

class Token implements IToken {
    name: string
    ticker: string
    address: string
    price: number
    
    constructor(name: string, ticker: string, address: string) {
        this.name = name;
        this.ticker = ticker;
        this.address = address;
        this.price = 0;
    }
    
    updatePrice(): number {
        throw new Error("Method not implemented.");
    }
}

export default Token;