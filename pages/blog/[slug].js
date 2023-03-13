import { NotionRenderer } from "react-notion-x";
import { Collection } from 'react-notion-x/build/third-party/collection'
import Layout from "../../components/layout";
import { NotionAPI } from 'notion-client';
const notion = new NotionAPI();

import { getAllPosts } from "../../lib/notion-call";

export async function getStaticProps({ params: { slug } }) {
  // Get all posts again
  const posts = await getAllPosts();
  // console.log(posts)

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
  <Layout currentHref={"/blog"}>
    <div className="p-10 lg:p-12 xl:p-16 bg-white">
      <div className="max-w-3xl m-auto b">
        <img src={post?.cover} className="object-scale-down w-full mb-3" />
        <h1 className="text-2xl md:text-3xl font-bold">{post?.title}</h1>
        <br />
        <NotionRenderer
          recordMap={recordMap}
          components={{ Collection }}
        />
        <div className="mt-3 rounded bg-yellow flex p-3">
          <div className="w-[12%] flex justify-center items-center">
            <span className="text-4xl" role="img" aria-label="💬">💬</span>
          </div>
          <div className="w-[88%]">Diagnose MS? Du bist nicht allein! Tausch dich hier <span className="underline">kostenlos</span> 
            &nbsp;mit diagnoseerfahrenen, geschulten MS-Betroffenen zu [Thema XY] aus. Du bist nur wenige Klicks entfernt:&nbsp;
            <a className="font-bold text-green-secondary hover:text-green-secondary-hover" href="https://www.amstart.net/#termin">www.amstart.net/#termin</a>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);


export async function getStaticPaths() {
  const posts = await getAllPosts();
  return {
    paths: posts.map((row) => `/blog/${row.slug}`),
    fallback: true,
  };
}