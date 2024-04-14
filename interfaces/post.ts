import type { Author } from "./author";
import type { serverImage } from "./server-image";

export interface Post {
  id: number;
  attributes: {
    title: string;
    active: boolean;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    text: any[];
    description: string;
    slug: string;
    cover: {
      data: serverImage;
    };
    author: {
      data: Author;
    }
  };
}
