import Link from "next/link";
import Layout from "../../components/layout";
import Segment from "../../components/segment";
import { NotionRenderer } from "react-notion-x";
import { Collection } from "react-notion-x/build/third-party/collection";

import { formatDate, getBlockTitle, getPageProperty } from 'notion-utils'

const SLUG_ID = "3x=Q";
const DATE_ID = "S)s,";

const NOTION_BLOG_ID = 'a77b23577e1d47a9b06cba6e0202369d';
// const NOTION_BLOG_ID = '1099525da7e5405c961706de56622ccd';

import { NotionAPI } from 'notion-client';
const notion = new NotionAPI();


export const getAllPosts = async () => {
	return await fetch(
    `https://notion-api.splitbee.io/v1/table/${NOTION_BLOG_ID}`
  ).then((res) => res.json());
}

//TODO: Export so getAllPosts is no longer needed

export async function getStaticProps() {
  //getRecordMap
  const recordMap = await notion.getPage(NOTION_BLOG_ID);

  //getTableOfPages 
    let posts = [];
    for (var [id, block] of Object.entries(recordMap.block)) {
      let blockProperties = block.value.properties;
      if (block.value.type == 'page' && SLUG_ID in blockProperties) {
        console.log(id);
        posts.push({
          'pid': id,
          'title': blockProperties.title[0][0],
          'slug': blockProperties[SLUG_ID][0][0],
          'date': ((DATE_ID in blockProperties) ? blockProperties[DATE_ID][0][1][0][1].start_date : '')
        })
      }
    }

  return {
    props: {
      posts, recordMap
    },
  };
}

function HomePage({ posts, recordMap }) {
  return (
    <Layout>
      {/* {posts.map((post) => (
        <Link href="blog/[slug]" as={`blog/${post.slug}`}>
          <div>{post.title}</div>
        </Link>
      ))} */}
    
   
    <Segment color="white">
      <h1 className="text-4xl font-bold">Blog</h1>
      <div className="text-2xl text-gray-600">Here is some content</div>
      
      <NotionRenderer recordMap={recordMap} components={{Collection}}/>


      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-4">
        {posts.map(post => (
          <div key={post.slug}>
          <Link href="blog/[slug]" as={`blog/${post.slug}`}>
            <div className="rounded h-72 bg-green-light">   
              
              <div className="rounded h-2/3 bg-green-secondary justify-items-center">
                <div>IMG</div>
              </div>
              
              <div className="h-1/3 p-2">
                <div className="font-bold">{post.title}</div>
                <div>Lorem Ipsum dolor sit amet. Eliumqam est.</div>
              </div>
              
            </div>
          </Link>
          </div>
        ))}
      </div>
    </Segment>




    </Layout>
  );
}

export default HomePage