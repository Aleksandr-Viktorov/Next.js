export interface Review {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  image: string;
  body?: string | Promise<string>;
}

export interface ReviewPageProps {
  params: ReviewPageParams;
}

export interface ReviewPageParams {
  slug: string;
}

export interface CmsItem {
  id: number;
  attributes: ReviewAttributesDto;
}

export interface ReviewAttributesDto {
  slug: string;
  title: string;
  subtitle: string;
  publishedAt: string;
  image: { data: ImageDataDto };
}

export interface ImageDataDto {
  id: number;
  attributes: { url: string };
}
