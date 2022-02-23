import axios from 'axios';

import {PLAID_CLIENT_ID, PLAID_SECRET} from '@env';
import ApiConfig from 'src/config/api-config';

export const createLinkToken = async (userId: string) => {
  const payload = {
    client_id: PLAID_CLIENT_ID,
    secret: PLAID_SECRET,
    client_name: 'Plaid app',
    country_codes: ['US'],
    language: 'en',
    user: {
      client_user_id: userId,
    },
    products: ['auth'],
  };

  try {
    const response = await axios.post(
      `${ApiConfig.PLAID}/link/token/create`,
      payload,
    );
    return response.data.link_token;
  } catch (error) {
    console.log(error);
    return '';
  }
};

export const getExistingLinkToken = async (linkToken: string) => {
  const payload = {
    client_id: PLAID_CLIENT_ID,
    secret: PLAID_SECRET,
    link_token: linkToken,
  };

  try {
    const res = await axios.post(`${ApiConfig.PLAID}/link/token/get`, payload);
    return res.data.link_token;
  } catch (error) {
    return '';
  }
};
