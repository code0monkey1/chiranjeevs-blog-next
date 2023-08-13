import { AxiosResponse } from 'axios';
import { GetServerSideProps } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { URL } from '../../config';
console.log('🚀 ~ file: [slug].tsx:5 ~ URL:', URL);

import count from 'countapi-js';
import {
  EmailIcon,
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  RedditShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'next-share';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Script from 'next/script';
import qs from 'qs';
import React from 'react';
import { fetchArticleBySlug } from '../../api/index';
import Author from '../../components/Author';

import { IArticle, ICollectionResponse } from '../../types';
import { serializeMarkdown } from '../../utils';
type TPropTypes = {
  article: IArticle;
  notFound?: boolean;
};

const Article = ({ article, notFound = false }: TPropTypes) => {
  const router = useRouter();
  console.log(`🥰 Article ${article.attributes.Title} loaded`);
  count.visits().then((result) => {
    console.log(` 💔  ${article.attributes.Title} Count : ${result.value} `);
  });

  if (notFound) {
    setTimeout(() => {
      router.back();
    }, 1000);

    return (
      <>
        <h1 className="text-2xl my-12 text-center ">
          Blank Page , Redirecting Back to Home Page
        </h1>
      </>
    );
  }

  const shareUrl = `${process.env.URL}/article/${article.attributes.Slug}`;

  console.log('🚀 ~ file: [slug].tsx:54 ~ Article ~ shareUrl:', shareUrl);

  const body = article.attributes.body;
  console.log('🚀 ~ file: [slug].tsx:49 ~ Slug ~ body:', body);
  return (
    <>
      <Script src="https://sendfox.com/js/form.js" />
      <Head>
        <title>{article.attributes.Title}</title>
      </Head>
      <div className="grid lg:grid-cols-3 gap-12 my-12 ">
        <div className="col-span-2">
          <h1 className="text-4xl  font-extrabold py-2 px-6 border-y-2 text-gray-600 my-4">
            {article.attributes.Title}
          </h1>
          <Author article={article} />
          <div className="text-lg text-gray-600 leading-8 px-4 single-article">
            <Image
              unoptimized={true}
              height={100}
              width={100}
              className="w-full my-12 mb-6 h-auto rounded-lg "
              alt={article.attributes.Title}
              src={article.attributes.Image.data[0].attributes.url}
            />

            <MDXRemote
              {...(article.attributes.body as MDXRemoteSerializeResult)}
            />
          </div>
        </div>

        <div className=" col-span-1">
          <div className="sticky top-0">
            <hr className="my-4 py-1 border-gray-200" />
            <span className=" inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <span className="text-gray-500 mr-2">Share : </span>

              <a className="text-gray-500">
                <FacebookShareButton url={shareUrl}>
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                  </svg>
                </FacebookShareButton>
              </a>
              <a className="ml-3 text-gray-500">
                <TwitterShareButton url={shareUrl}>
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                  </svg>
                </TwitterShareButton>
              </a>

              <a className="ml-3 text-gray-500">
                <LinkedinShareButton url={shareUrl}>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="0"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="none"
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                    ></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </LinkedinShareButton>
              </a>

              <a className="ml-3 text-gray-500">
                <EmailShareButton url={shareUrl}>
                  <EmailIcon
                    style={{ width: 35, height: 22, borderRadius: '8rem' }}
                  />
                </EmailShareButton>
              </a>
            </span>
            <hr className="my-2 border-gray-200" />
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const queryString = qs.stringify({
    populate: ['Image', 'author.avatar'],
    filters: {
      Slug: {
        $eq: query.slug,
      },
    },
  });

  const { data: articles }: AxiosResponse<ICollectionResponse<IArticle[]>> =
    await fetchArticleBySlug(queryString);

  if (articles.data.length === 0) {
    return {
      props: {
        notFound: true,
      },
    };
  }

  return {
    props: {
      article: await serializeMarkdown(articles.data[0]),
    },
  };
};

export default Article;
