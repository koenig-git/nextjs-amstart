import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <h1>Wir sind mit Dir aMStart.</h1>
      <h2>Tausch Dich hier 1:1 mit jungen Erwachsenen aus, die Erfahrungen mit der Diagnose Multiple Sklerose gemacht haben. <a href="#beschreibung">Erfahre mehr...</a></h2>
    </Layout>
  );
}