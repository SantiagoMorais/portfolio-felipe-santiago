export const componentsRoutesId = {
  portfolio: {
    title: "Portfolio",
    path: "/",
  },
  aboutUs: {
    title: "Sobre",
    path: "/sobre",
  },
  blog: {
    title: "Blog",
    path: "/blog",
  },
};

export interface IRoutes {
  title: string;
  path: string;
}

export const navBarRoutes: IRoutes[] = [
  {
    title: componentsRoutesId.portfolio.title,
    path: `/`,
  },
  {
    title: componentsRoutesId.aboutUs.title,
    path: componentsRoutesId.aboutUs.path,
  },
  {
    title: componentsRoutesId.blog.title,
    path: componentsRoutesId.blog.path,
  },
];
