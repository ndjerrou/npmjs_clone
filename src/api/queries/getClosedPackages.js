import axios from 'axios';

const URL = 'https://registry.npmjs.com';

// /-/v1/search
export const getClosedPackages = async packageName => {
  return axios(`${URL}/-/v1/search`, {
    params: {
      text: packageName,
    },
  });
};
