export interface CardProps {
  source: {
    id: null;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface GraphProps {
  title: string;
  data: string;
  noDataToDisplay: {
    logoPath: string;
    text: string;
  };
}
