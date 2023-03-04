import Link from "next/link";
import Layout from "../../components/layout";

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
      {posts.map((post) => (
        <Link href="blog/[slug]" as={`blog/${post.slug}`}>
          <div>{post.title}</div>
        </Link>
      ))}
    </Layout>
  );
}

export default HomePage