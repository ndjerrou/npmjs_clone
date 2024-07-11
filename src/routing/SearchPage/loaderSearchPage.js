import { getClosedPackages } from '../../api/queries/getClosedPackages';

export const loaderSearchPage = async ({ request }) => {
  const { searchParams } = new URL(request.url);

  const packageName = searchParams.get('package');

  const {
    data: { objects },
  } = await getClosedPackages(packageName);

  return {
    results: objects,
  };
};
