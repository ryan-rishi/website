import React from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import Link from '../components/link';
import Layout from '../components/layout';
import Head from '../components/head';
import { getAllPosts } from '../lib/posts';
import { H2 } from '../components/headings';

dayjs.extend(utc);

export default function BlogIndex({ allPosts }) {
  return (
    <Layout>
      <Head
        title="Blog"
      />
      {allPosts.map(post => (
        <div
          className="mb-8 lg:mb-16 xl:mb-32"
          data-test-blog-post
          key={post.slug}
        >
          <H2 className="post-title">
            <Link
              href={`/blog/${post.slug}`}
              invert
            >
              {post.title}
            </Link>
          </H2>
          <p className="py-4 text-gray-700" data-test-blog-post-date>{dayjs.utc(post.date).format('MMMM D, YYYY')}</p>

          <div className="flex flex-col">
            <p>{post.description}</p>
            <Link className="flex justify-end italic uppercase font-bold" href={`/blog/${post.slug}`} invert>Read more &raquo;</Link>
          </div>
        </div>
      ))}
    </Layout>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'description', 'image', 'tags']);

  return {
    props: { allPosts }
  };
}
