import axios, { Method } from 'axios';

type RequestParams = {
    method?: Method;
    url: string;
    data?: object;
    params?: object;
}

const BASE_URL = 'http://localhost:3000';



export function makeRequest({ method, url, data, params }:RequestParams){
    return axios(
        {method,
        url:`${BASE_URL}${url}`,
        data,
        params
        }

    );
}//arrow function abaixo:
/*export const makeRequest = ({ method, url, data, params }:RequestParams) => {
    return axios ({
            method,
            url:`${BASE_URL}${url}`,
            data,
            params
        });
}*/