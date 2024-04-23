import type { Author } from "./author";
import type { serverImage } from "./server-image";

export interface Book {
    id: number;
    attributes: {
        title: string;
        authors: {
            data: Author | Author[];
        }
        cover: {
            data: serverImage;
        }
        active: boolean;
        description: string;
        slug: string;
        createdAt: string;
        updatedAt: string;
    };
}