import axios from './axios';

const url = 'users';

export const getUsers = async () => {
    const response = await axios.get(url);
    const data = response.data;
    return data;
};
