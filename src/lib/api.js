import axios from 'axios';

export const regUser = (registration) => axios.post('https://cz0j43s8r4.execute-api.us-east-1.amazonaws.com/dev/users/register', registration)