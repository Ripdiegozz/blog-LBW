import type { serverImage } from "./server-image";

export interface Gallery {
  id: number;
  attributes: {
    title: string;
    text: any[];
    active: boolean;
    slug: string;
    description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    images: {
      data: serverImage[];
    };
  };
}
