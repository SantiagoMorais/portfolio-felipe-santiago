export interface IPostCardProps {
  postData: {
    id: string;
    title: string;
    subtitle?: string;
    image: {
      url: string;
    };
    author: {
      name: string;
    };
  };
}
