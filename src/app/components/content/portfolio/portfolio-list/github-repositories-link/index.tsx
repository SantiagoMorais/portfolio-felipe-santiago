import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Button } from "@/components/ui/button";
import { env } from "@/env";

export const GithubRepositoriesLink = () => (
  <Button>
    <a
      href={env.GITHUB_REPOSITORIES_URL}
      target="_blank"
      className="flex items-center gap-2 capitalize"
    >
      <FontAwesomeIcon icon={faGithub} />
      Veja mais projetos
    </a>
  </Button>
);
