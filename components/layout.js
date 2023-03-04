import Head from 'next/head';
import Image from 'next/image';
import Header from './header';
import Footer from './footer';
// import styles from './layout.module.css';
import Link from 'next/link';

const name = 'aMStart';
export const siteTitle = 'aMStart - jung, digital, unabhängig'; //TODO: SEO

export default function Layout({ children}) {
  return (
    <>
      <Header/>
      <main>
          {children}
      </main>
      {/* <Footer/> */}
    </>
  );
}