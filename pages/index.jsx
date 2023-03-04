import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Segment from '../components/segment';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <Segment color='green-secondary'>
        <h1 className="text-3xl font-bold underline">Wir sind mit Dir aMStart.</h1>
        <h2>Tausch Dich hier 1:1 mit jungen Erwachsenen aus, die Erfahrungen mit der Diagnose Multiple Sklerose gemacht haben. Lorem Ipsum dolor sit amet. Eliqum eriat est. Dixit meanerit.<a href="#beschreibung">Erfahre mehr...</a></h2>
      </Segment>

      <Segment color='green-light'>
        <h1 className="text-3xl font-bold underline">Wir sind mit Dir aMStart.</h1>
        <h2>Tausch Dich hier 1:1 mit jungen Erwachsenen aus, die Erfahrungen mit der Diagnose Multiple Sklerose gemacht haben. Lorem Ipsum dolor sit amet. Eliqum eriat est. Dixit meanerit.<a href="#beschreibung">Erfahre mehr...</a></h2>
      </Segment>
      
    </Layout>
  );
}