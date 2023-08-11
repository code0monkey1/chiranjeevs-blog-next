import { serialize } from 'next-mdx-remote/serialize';
import RSS from 'rss';
import { URL } from '../config';
import { IArticle } from '../types';
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return date;
};

export const makeCategory = (slug: string): string => {
  if (typeof slug === 'string') {
    return slug.split('-').join(' ');
  }
  return '';
};

export const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const debounce = (fn: (query: string) => void, timeout = 300) => {
  let timer: NodeJS.Timeout;
  const debounced = (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(args);
    }, timeout);
  };
  return debounced;
};

export const serializeMarkdown = async (item: IArticle) => {
  const body = await serialize(item.attributes.body as string);
  return {
    ...item,
    attributes: {
      ...item.attributes,
      body,
    },
  };
};

export const generateRSSFeed = async () => {
  const site_url = URL!;

  const feedOptions = {
    title: 'Blog posts | RSS Feed',
    description: 'Welcome to this blog posts!',
    site_url: site_url,
    feed_url: `${site_url}/rss.xml`,
    image_url: `${site_url}/logo.png`,
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, Chiranjeev`,
  };

  const feed = new RSS(feedOptions);
};
