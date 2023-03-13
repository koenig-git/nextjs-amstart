import Link from "next/link";
import Layout from "../../components/layout";
import Segment from "../../components/segment";
import { NotionRenderer } from "react-notion-x";
import { Collection } from "react-notion-x/build/third-party/collection";

import { formatDate, getBlockTitle, getPageProperty } from 'notion-utils'

// const SLUG_ID = "3x=Q";
// const DATE_ID = "S)s,";
const SLUG_ID = "I`Q{";
const LENGTH_ID = "zE]A";
const READER_TAG = "CXv[";

// const NOTION_BLOG_ID = 'a77b23577e1d47a9b06cba6e0202369d';
// const NOTION_BLOG_ID = '1099525da7e5405c961706de56622ccd';
const NOTION_BLOG_ID = '0fce51353967410995e7f7f4f27d4d77';


// available colors: blue orange green pink brown red yellow default purple gray
const TAG_MAP = {
  "WISSEN": "notion-item-blue",
  "ERFAHRUNGSBERICHT": "notion-item-green",
  "TEAM": "notion-item-purple",

}




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
        // console.log(block.value.properties)
        posts.push({
          'id': id,
          'title': blockProperties.title[0][0],
          'slug': blockProperties[SLUG_ID][0][0],
          // 'date': ((DATE_ID in blockProperties) ? blockProperties[DATE_ID][0][1][0][1].start_date : ''),
          'cover': ((block.value.format.page_cover) ? block.value.format.page_cover : ''),
          'length': blockProperties[LENGTH_ID][0][0],
          'textArt': blockProperties[READER_TAG][0][0].split(",")
        })
      }
    }

    // console.log(posts)

  return {
    props: {
      posts, recordMap
    },
  };
}

function HomePage({ posts, recordMap }) {
  return (
    <Layout>   
    <Segment color="white">
      <h1 className="text-4xl font-bold">Blog</h1>
      <div className="text-2xl text-gray-600">Here is some content</div>
      <br></br>
      
      {/* <NotionRenderer recordMap={recordMap} components={{Collection}}/> */}

      <div className="notion-collection">
        <div className="notion-gallery">
            <div className="notion-gallery-view">
                <div className="notion-gallery-grid notion-gallery-grid-size-large">
                {posts.map(post => ( 
                  <div key={post.slug}>
                  <Link href="blog/[slug]" as={`blog/${post.slug}`}
                    className="notion-collection-card"
                  >
                      <div className="notion-collection-card-cover">
                        <img
                              className="object-cover object-center"
                              src={post.cover}
                              alt="“Bin ich behindert mit der Diagnose MS?”" loading="lazy"
                              decoding="async" 
                        />
                      </div>
                      <div className="notion-collection-card-body">
                          <div className="notion-collection-card-property">
                            <span className="notion-property notion-property-title">
                              <span className="notion-page-link">
                                <span className="text-lg font-bold truncate">
                                  {post.title}
                                </span>
                                </span>
                            </span>
                          </div>
                          <div className="notion-collection-card-property">
                            <span className="notion-property notion-property-multi_select">
                              {post.textArt.map(tag => (
                                  <div className={`notion-property-multi_select-item ${TAG_MAP[tag]}`} key={tag}>{tag}</div>
                              ))}   
                              
                            </span>
                          </div>
                          <div className="notion-collection-card-property">
                            <span className="notion-property notion-property-text">{post.length}</span>
                          </div>
                          {/* <div className="notion-collection-card-property">
                            <span className="notion-property notion-property-multi_select">
                              <div className="notion-property-multi_select-item">behinderung</div>
                              <div className="notion-property-multi_select-item notion-item-default">inklusion</div>
                            </span>
                          </div> */}
                          {/* <div className="notion-collection-card-property">
                            <span className="notion-property notion-property-text">
                              <em>“</em><b><em>Man ist nicht behindert, man wird behindert</em></b><em>”, 
                                meint Dr. Sigrid Arnade - Aktivistin, Journalistin und Sprecherin der
                                “Selbstvertretung”. Ist eine Behinderung automatisch gegeben mit
                                der Diagnose Multiple Sklerose? Und was bedeutet das überhaupt?
                              </em>
                            </span>
                          </div> */}
                      </div>
                  </Link>
                  </div>          
                ))}  
                </div>
            </div>
        </div>
      </div>

      {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-4">
        {posts.map(post => (
          <div key={post.slug} className="">
          <Link href="blog/[slug]" as={`blog/${post.slug}`}>
            <div className="rounded h-72 bg-green-light hover:bg-green">   
              
              <div className="rounded-t h-2/3 bg-green-secondary justify-items-center">
                <img src={post.cover} className="object-fill"/>
              </div>
              
              <div className="h-1/3 p-2">
                <div className="font-bold">{post.title}</div>
                <div>Lorem Ipsum dolor sit amet. Eliumqam est.</div>
              </div>
              
            </div>
          </Link>
          </div>
        ))}
      </div> */}
    </Segment>




    </Layout>
  );
}

export default HomePage