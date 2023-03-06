import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Segment from '../components/segment';
import Intro from '../components/segments/intro';
import Nicht_Allein from '../components/segments/nicht_allein';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Intro/>

      <Nicht_Allein/>
      
      <Segment color="green-secondary" />

    </Layout>
  );
}