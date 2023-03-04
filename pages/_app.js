import '../styles/global.css';
import "../styles/style.scss";
import "../styles/typography.scss";
import "../styles/react-notion.css";
// import "prismjs/themes/prism-tomorrow.css";

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
  }