import { MDXRemoteSerializeResult } from 'next-mdx-remote';

export interface ICategory {
    id: number;
    attributes: ICategoryAttribute;
}

export interface ICategoryAttribute {
    Title: string;
    Slug: string;
}

export interface IPagination {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
}

export interface IResourceMeta {
    pagination: IPagination;
}

export type ICollectionResponse<T> ={
    data: T;
    meta: IResourceMeta;
}

export interface IImagesData {
    data: IImage[];
}

export interface IImage{
    id: number,
    attributes: {
                url: string;
                formats: {
                    small: {
                        url: string;
                    };
                };
            };
}

export interface IAuthor {
    data: {
        attributes: {
            firstname: string;
            lastname: string;
            avatar: {
                data: {
                    attributes: {
                        formats: {
                            thumbnail: {
                                url: string;
                            };
                        };
                    };
                };
            };
        };
    };
}

export interface IArticlesAttribute {
    Title: string;
    Body: string | MDXRemoteSerializeResult;
    Slug: string;
    Image: IImagesData;
    createdAt: string;
    author: IAuthor;
    shortDescription: string;
}

export interface IArticle {
    id: number;
    attributes: IArticlesAttribute;
}

export type TDirection = 1 | -1;

export interface IQueryOptions {
    filters: any;
    sort: any;
    populate: any;
    pagination: {
        page: number;
        pageSize: number;
    };
}