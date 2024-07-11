import { getMetadataPackages } from '../../api/queries/getMetadataPackages';

export async function loaderHomePage() {
  const metaDataPackages = await getMetadataPackages();

  return {
    metaDataPackages,
  };
}
