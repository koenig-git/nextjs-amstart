import '../styles/global.css';
import "../styles/style.scss";
import "../styles/typography.scss";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
  }