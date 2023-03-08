import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Segment from '../components/segment';
import Denkpart from '../components/segments/denkpart';
import Gespraech_Vereinbaren from '../components/segments/gespraech_vereinbaren';
import Intro from '../components/segments/intro';
import Nicht_Allein from '../components/segments/nicht_allein';
import Wer_Redet from '../components/segments/wer_redet_mit_dir';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Intro/>

      <Nicht_Allein/>
      
      <Wer_Redet/>

      <Gespraech_Vereinbaren />

      <Denkpart />

    </Layout>
  );
}