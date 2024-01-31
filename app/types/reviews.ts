export interface Review {
  slug: string;
  title: string;
  date: string;
  image: string;
  body: string | Promise<string>;
}

export interface ReviewPageProps {
  params: { slug: string };
}
