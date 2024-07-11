import axios from 'axios';

const PACKAGES = ['react', 'typescript'];
const URL = 'https://registry.npmjs.com';

export const getMetadataPackages = async () => {
  const promises = PACKAGES.map(p => axios(`${URL}/${p}`));

  const data = await Promise.all(promises);

  return { data };
};
