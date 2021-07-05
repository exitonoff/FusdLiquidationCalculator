import axios from "axios";
import IQueryParams from "../../../interfaces/IQueryParams";
import IQueryResult from "../../../interfaces/IQueryResult";

class CoingeckClient<T as IQueryParams, IQueryResult> {
    static readonly BASE_URL = "https://api.coingecko.com/api/v3"

    get(endpointUrl: string, queryParams: IQueryParams): number {//IQueryResult {
        const qs = queryParams.generateQueryString();
        return 0;
    }
}