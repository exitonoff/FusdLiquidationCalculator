interface IToken {
    name: string
    ticker: string
    address: string
    price: number

    updatePrice(): number
}

export default IToken;