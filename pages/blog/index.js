import Link from "next/link";
import Layout from "../../components/layout";
import Segment from "../../components/segment";

const NOTION_BLOG_ID = 'a77b23577e1d47a9b06cba6e0202369d';
// const NOTION_BLOG_ID = '1099525da7e5405c961706de56622ccd';


export const getAllPosts = async () => {
	return await fetch(
    `https://notion-api.splitbee.io/v1/table/${NOTION_BLOG_ID}`
  ).then((res) => res.json());
}

export async function getStaticProps() {
  const posts = await getAllPosts()

  return {
    props: {
      posts
    },
  };
}

function HomePage({ posts }) {
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
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-4">
        {posts.map(post => (
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
        ))}
      </div>
    </Segment>




    </Layout>
  );
}

export default HomePage