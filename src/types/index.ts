export type CategoryType = {
  image: string;
  id: number;
  title: string;
};

export type PostType = {
  id: number;
  title: string;
  date: string;
  image: string;
  content: string;
  recommend: boolean;
  trending: boolean;
  popular: boolean;
  category: string;
  categoryId: number;
};
