/* eslint-disable @next/next/link-passhref */
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IArticle } from '../types';
interface IPropType {
    article: IArticle;
}
const BlogCardWithImage = ({ article }: IPropType) => {
    return (
        <div className="bg-gradient-to-r from-green-400 to-green-300 rounded-md flex items-center h-64 justify-around m-2">
          <Link href={`/article/${article.attributes.Slug}`} > 

                <span className="text-2xl w-2/3 text-white p-6 after:content-[''] font-bold after:content-end after:bg-white after:block after:w-20 after:h-1 
                after:m-6  
                after:rounded-md after:mt-2 cursor-pointer px-6">
                    {article.attributes.Title.slice(0,45)+`${article.attributes.Title.length>45?"...":''}`}
                </span>
            </Link>
            <Image alt='book' src="/brain.svg" width={140} height={140} />
        </div>
    );
};

export default BlogCardWithImage;