import { NotionRenderer } from "react-notion-x";
import { Collection } from 'react-notion-x/build/third-party/collection'
import Layout from "../../components/layout";
import Segment from "../../components/segment";


import { NotionAPI } from 'notion-client';

const notion = new NotionAPI();

import { getAllPosts } from './'

export async function getStaticProps({ params: { slug } }) {
  // Get all posts again
  const posts = await getAllPosts();

  // Find the current blogpost by slug
  const post = posts.find((t) => t.slug === slug);

  const recordMap = await notion.getPage(post.id);

  return {
      props: {
        post,
        recordMap
      }
    }
};


export default ({ post, recordMap }) => (
  <Layout>
    <Segment color="white">
        <div className="max-w-4xl m-auto b">
          <h1 className="text-2xl md:text-3xl font-bold">{post.title}</h1>
          <br/>
          <NotionRenderer recordMap={recordMap} components={{Collection}}/>
        </div>
    </Segment>  
  </Layout>
);


export async function getStaticPaths() {
  const posts = await getAllPosts();
  return {
    paths: posts.map((row) => `/blog/${row.slug}`),
    fallback: true,
  };
}