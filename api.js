import axios from 'axios';

const api = axios.create({
    baseUrl: 'https://apiceet.herokuapp.com/'
});

export default api;
