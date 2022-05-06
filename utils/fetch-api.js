import axios from 'axios';
import propsForSaleJSON from '../data/properties/list/for-sale.json';
import propsForRentJSON from '../data/properties/list/for-rent.json';

const baseUrl = 'https://bayut.p.rapidapi.com';
const isDev = process.env.NODE_ENV === 'development';

const headers = {
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
    'X-RapidAPI-Key': 'c6475d3a99msh3841d49343627f9p1b1dfbjsn091c7fa8140b',
};

// const options = {
//     method: 'GET',
//     url: 'https://bayut.p.rapidapi.com/agencies/list',
//     params: { query: 'patriot', hitsPerPage: '25', page: '0', lang: 'en' },
//     headers,
// };

export const fetchApi = async (path, params = {}) => {
    const url = `${baseUrl}${path}`;

    if (isDev) return fetchDevData(path, params);

    return (await axios.get(url, { headers, params })).data;
};

const fetchDevData = async (path, params) => {
    // const url = `${dataDir}${path}/${params.purpose}.json`;

    if (params.purpose === 'for-sale') {
        return propsForSaleJSON;
    }
    if (params.purpose === 'for-rent') {
        return propsForRentJSON;
    }

    return {};
};
