import type { serverImage } from "./server-image";

export interface Author {
    id: number;
    attributes: {
        name: string;
        portrait: {
            data: serverImage;
        }
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
    };
}