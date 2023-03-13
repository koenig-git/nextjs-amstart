import Link from "next/link";
import Layout from "../../components/layout";
import { getAllPosts } from "../../lib/notion-call";

// available colors: blue orange green pink brown red yellow default purple gray
const TAG_MAP = {
  "WISSEN": "notion-item-blue",
  "ERFAHRUNGSBERICHT": "notion-item-green",
  "TEAM": "notion-item-purple",

}


export async function getStaticProps() {
  const posts = await getAllPosts();

  return {
    props: {
      posts
    },
  };
}

function HomePage({ posts }) {
  return (
    <Layout currentHref={"/blog"}>   
    <div className="p-12 lg:p-18 xl:p-24 bg-white">
      <h1 className="text-4xl mb-3 font-bold">Unser Kompass zur MS</h1>
      <div className="text-xl text-gray-600">Der Umgang mit Multipler Sklerose ist nicht leicht. Hier findest Du die besten Tipps und Erfahrungsberichte von Expert*innen, Ärzt*innen und aus der Community:</div>
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

    </div>




    </Layout>
  );
}

export default HomePage