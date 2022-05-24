import axios from 'axios';
import { LoginUser, RegisterUser } from '../models';

const authAPi = {
  register: async (registerUser: RegisterUser) => {
    try {
      await axios.post('/users/auth/signup', registerUser);
    } catch (err) {
      return 0;
    }
    return 1;
  },
  login: async (loginUser: LoginUser) => {
    try {
      const res = await axios.post('/users/auth/signin', loginUser);
      if (res && res.data) {
        return res.data;
      }
    } catch (err) {
      return 0;
    }
    return 1;
  },
  refreshToken: async () => {
    try {
      const res = await axios.post('/api/auth/refresh-token', {
        withCredentials: true,
      });
      return res.data;
    } catch (err) {
      console.log(err);
    }
    return 0;
  },
};

export default authAPi;
