import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import { AuroraBackground } from "@/app/components/content/aurora-background";
import { ContentContainer } from "@/components/content-container";
import { Button } from "@/components/ui/button";
import { IPostsData } from "@/core/interfaces/get-posts-query";
import { IPostsFilters } from "@/core/interfaces/posts-filters-query";
import { getDataFromApi } from "@/db/functions/get-data-from-api";
import { getPosts } from "@/db/functions/get-posts";
import { GET_FILTERS_QUERY } from "@/db/queries/get-filters-query";
import { GET_POSTS_QUERY } from "@/db/queries/get-posts-query";
import { socialLinks } from "@/utils/social-media-links";

import { Banner } from "./banner";
import { SearchPostsMethods } from "./search-posts-methods";

export const BlogContent = async () => {
  const data = await getPosts<IPostsData>({
    first: 10,
    query: GET_POSTS_QUERY,
  });

  console.log(data.postsConnection.edges);

  const filters = await getDataFromApi<IPostsFilters>({
    query: GET_FILTERS_QUERY,
  });

  return (
    <ContentContainer>
      <Banner />
      <SearchPostsMethods initialData={data} filters={filters} />
      <AuroraBackground>
        <div className="relative z-10 flex flex-col items-center justify-center gap-6 px-8 text-center">
          <h2 className="text-foreground text-xl font-semibold md:text-3xl">
            Felipe Santiago - Desenvolvedor Web
          </h2>
          <p className="text-muted-foreground max-w-100">
            Entre em contato comigo pelas minhas redes. <br />
            Vamos conversar!
          </p>
          <ul className="flex gap-2">
            {socialLinks.map(({ icon, url, title }) => (
              <li key={title}>
                <Button asChild variant="outline">
                  <Link href={url} target="_blank">
                    <FontAwesomeIcon icon={icon} />
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </AuroraBackground>
    </ContentContainer>
  );
};
