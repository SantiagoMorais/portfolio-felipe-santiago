import { IResumesQuery } from "@/core/interfaces/resumes-query";
import { getDataFromApi } from "@/db/functions/get-data-from-api";
import { GET_RESUMES_QUERY } from "@/db/queries/get-resume-query";

import { HeaderContent } from "./header-content";

export const Header = async () => {
  const { resumes } = await getDataFromApi<IResumesQuery>({
    query: GET_RESUMES_QUERY,
  });

  return <HeaderContent resumes={resumes} />;
};
