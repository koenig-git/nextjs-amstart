import Head from 'next/head';
import Image from 'next/image';
import Header from './header';
// import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'aMStart';
export const siteTitle = 'aMStart - jung, digital, unabhängig'; //TODO: SEO

export default function Layout({ children, home }) {
  return (
    <>
      <Header/>
      <main>{children}</main>
    </>
  );
}