import QueryParams from "../../interfaces/IQueryParams";

interface Params {
    tokenId: string
    vs_currencies: string[]
}

class GetPriceParams implements QueryParams {
    params: Map<string, unknown>

    constructor(tokenId: string, currencies: string[]) {
        this.params = new Map<string, unknown>();

        this.params.set("tokenId", tokenId);
        this.params.set("vs_currencies", currencies);
    }

    generateQueryString(): string {
        const esc = encodeURIComponent;

        let qs = "";

        for (const param in this.params) {
            let parameter = param[1];

            if (Array.isArray(parameter)) {
                parameter = parameter.join(",");
            }
            qs += esc(`${param[0]}=${param[1]}&`);
        }

        qs = qs.slice(0, -1);

        return qs;
    }
}

export default GetPriceParams;