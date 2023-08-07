/* eslint-disable @next/next/link-passhref */

import Link from 'next/link';
import React from 'react';
import { IArticle } from '../types';
import Author from './Author';

interface IPropType {
  article: IArticle;
}
const BlogCard = ({ article }: IPropType) => {
  console.log('BlogCard slug', `/article/${article.attributes.Slug}`);
  return (
    <div>
      <Link href={`/article/${article.attributes.Slug}`}>
        <h1 className="px-4 my-4 text-4xl border-l-8 text-gray-600  font-bold hover:decoration-2 hover:underline hover:cursor-pointer hover:decoration-primary">
          {article.attributes.Title}
        </h1>
      </Link>
      <Author article={article} />
      <div className="text-gray-500  flex items-center mx-4 my-4 ">
        {article.attributes.shortDescription.slice(0, 250)}
        {article.attributes.shortDescription.length > 250 ? '...' : ''}
      </div>
    </div>
  );
};

export default BlogCard;
