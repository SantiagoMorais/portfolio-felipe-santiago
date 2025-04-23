export interface IResumesContent {
  title: string;
  id: string;
  document: {
    url: string;
  };
}

export interface IResumesQuery {
  resumes: Array<IResumesContent>;
}
