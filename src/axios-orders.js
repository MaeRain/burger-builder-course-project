import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-c830a.firebaseio.com/'
});

export default instance;