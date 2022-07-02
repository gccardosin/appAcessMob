import axios from 'axios';

const api = axios.create({
    baseUrl: 'https://api-missoes-urbanas.herokuapp.com'
});

export default api;