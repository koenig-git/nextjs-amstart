import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Header ({home, sname}) {
    return (
        <header className={styles.header}>
        {home ? (
        <>
            <Image
            priority
            src="/images/amstart-logo.svg"
            className={utilStyles.borderCircle}
            height={144}
            width={144}
            alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{sname}</h1>
        </>
        ) : (
        <>
            <Link href="/">
            <Image
                priority
                src="/images/amstart-logo.svg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
            />
            </Link>
            <h2 className={utilStyles.headingLg}>
            <Link href="/" className={utilStyles.colorInherit}>
                {sname}
            </Link>
            </h2>
        </>
        )}
        </header>
    )

}

