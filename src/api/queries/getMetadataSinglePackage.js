import axios from 'axios';

const URL = 'https://registry.npmjs.com';

export const getMetadataSinglePackage = async packageName => {
  const { data } = await axios(`${URL}/${packageName}`);

  return {
    result: data,
  };
};
