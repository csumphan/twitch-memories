import axios from 'axios';
import { TWITCH_API, CLIENT_ID } from "../constants";

export const getClips = (params = {}, headers = {}) => {
    return axios({
        method: 'get',
        url: `${TWITCH_API}/clips`,
        headers: {
            'Client-ID': CLIENT_ID,
            ...headers,
        },
        params,
    })
}