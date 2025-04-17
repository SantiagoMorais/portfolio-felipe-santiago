import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Button } from "@/components/ui/button";
import { env } from "@/env";

export const PortfolioDescription = () => (
  <article className="flex flex-col items-center gap-4">
    <h3 className="text-center text-3xl font-semibold md:text-4xl">
      Veja meus projetos
    </h3>
    <p className="text-muted-foreground text-center text-base md:max-w-3/4">
      Crio eccomerces, sites e blogs pessoais até projetos complexos para
      grandes empresas. Tenho todas as soluções que precisar. Este portfólio é
      uma amostra do meu trabalho. Desenvolvido com Next.js, TypeScript,
      Tailwind CSS e GraphQL.
    </p>
    <div className="flex flex-col md:flex-row">
      <Button variant="link" className="flex-1">
        <a
          className="text-lg"
          target="_blank"
          href={env.GITHUB_REPOSITORIES_URL}
        >
          <FontAwesomeIcon icon={faGithub} className="mr-2" />
          Todos os Respositórios
        </a>
      </Button>
      <Button variant="link" className="flex-1">
        <a className="text-lg" target="_blank" href={env.GITHUB_PROFILE_URL}>
          <FontAwesomeIcon icon={faGithub} className="mr-2" />
          Meu Github
        </a>
      </Button>
    </div>
  </article>
);
