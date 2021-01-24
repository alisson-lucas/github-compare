import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.github.com',
    client_id: 'Iv1.2b6cbdd1ae3fb7b8',
    client_secret: 'ff34a20b5c8ae125140ec73952541a8a4b5b6b8a'
})

export default api;