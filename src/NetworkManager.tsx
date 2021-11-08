import axios from "axios";
import { FILTER_OPTIONS } from "./FiltersData";

const AUTH_TOKEN = "f76e11a97195498aacb569b7fba4ebdc";

interface GetRequest {
    url: string;
    filterType: FILTER_OPTIONS;
    filters?: string[];
}
export const getRequest = ({url, filterType, filters=[]}: GetRequest) => {
    const config = {
        headers: {
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${AUTH_TOKEN}`,
        },
        params: {
            filterType,
            filters, 
        }
    }
    return axios.get(url, config)
    .then(response => console.log(response))
    .catch(error => console.log(error));
}
    
