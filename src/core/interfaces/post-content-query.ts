export interface IPostContentQuery {
  post: {
    createdAt: string;
    updatedAt: string;
    id: string;
    title: string;
    subtitle?: string;
    image: {
      url: string;
    };
    date: string;
    videoUrl?: string;
    text: {
      html: string;
    };
    author: {
      name: string;
      description: string;
      avatar: {
        url: string;
      };
      linkedin?: string;
      github?: string;
    };
  };
}
