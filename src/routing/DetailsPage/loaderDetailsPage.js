import { getMetadataSinglePackage } from '../../api/queries/getMetadataSinglePackage';

export const loaderDetailsPage = async ({ params }) => {
  const { result } = await getMetadataSinglePackage(params.packageName);

  return {
    result,
  };
};
