export const componentsRoutesId = {
  aboutUs: "Sobre",
  portfolio: "Portfolio",
  contacts: "Perguntas",
};

export interface IRoutes {
  title: string;
  path: string;
}

export const navBarRoutes: IRoutes[] = [
  {
    title: componentsRoutesId.aboutUs,
    path: `#${componentsRoutesId.aboutUs}`,
  },
  {
    title: componentsRoutesId.portfolio,
    path: `#${componentsRoutesId.portfolio}`,
  },
  {
    title: componentsRoutesId.contacts,
    path: `#${componentsRoutesId.contacts}`,
  },
];

export const routes = {
  about: "#",
  portfolio: "#",
  contacts: "#",
};
