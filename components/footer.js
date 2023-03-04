import styles from "./footer.module.scss";

const footerData = {
    "links": [
      {"title": "Kontakt", "url": "/kontakt.html"},
      {"title": "Newsletter", "url": "/newsletter.html"},
      {"title": "Notfallhilfe", "url": "/notfaelle.html"},
      {"title": "Datenschutzerklärung", "url": "/datenschutz.html"},
      {"title": "Impressum", "url": "/impressum.html"},
      {"title": "Quellen", "url": "/quellen.html"}
    ],
    "socialLinks": [
      {"iconName": "social-instagram.svg", "title": "Instagram", "url": "https://www.instagram.com/gemeinsam_amstart/"},
      {"iconName": "social-linkedin.svg", "title": "LinkedIn", "url": "https://www.linkedin.com/company/gemeinsamamstart/"},
      {"iconName": "social-facebook.svg", "title": "Facebook", "url": "https://www.facebook.com/gemeinsamamstart"},
      {"iconName": "social-spotify.svg", "title": "Spotify", "url": "https://open.spotify.com/show/3ri3cgAd3EKeCtNgFnv6yl"}
    ]
}

export default function Footer () {
    return (
        <div className="section section--green-light">
        <div className="footer grid-container">
            <div className={styles["footer-left"]}>
            <div className={styles["footer-logo-wrapper"]}>
                <img
                className={styles["footer-logo"]}
                src="/svgs/amstart-logo.svg"
                alt="aMStart Logo"
                />
                <div className={styles["footer-logo-slogan"]}>
                mit Dir.
                </div>
            </div>
            </div>
            <div className={styles["footer-right"]}>
            <div className={styles["footer-links"]}>
                {footerData.links.map((item) => (
                    <a 
                        href={item.url}
                        className={styles["footer-link"]}>
                        {item.title}
                    </a>
                ))}
            </div>
            <div className={styles["footer-social-links"]}>
                {footerData.socialLinks.map((item) => (
                    <a 
                        href={item.url}
                        className={styles["footer-social-link"]}
                        target="_blank">
                        <img
                            className={styles["footer-social-icon"]}
                            src={`/icons/${item.iconName}`}
                            alt={item.title}
                        />
                    </a>
                ))}
            </div>
            </div>
        </div>
        </div>
    )
}