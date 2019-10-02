import axios from 'axios';
import { TWITCH_API, CLIENT_ID } from "../constants";

export const getGame = (params = {}, headers = {}) => {
    return axios({
        method: 'get',
        url: `${TWITCH_API}/games`,
        headers: {
            'Client-ID': CLIENT_ID,
            ...headers,
        },
        params,
    })
}