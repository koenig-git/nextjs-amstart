import styles from "./header.module.scss";
import Image from 'next/image';

const links = [
    {"title": "Über uns", "menuSlug": "ueber-uns", "url": "/ueber-uns.html"},
    {"title": "Mitwirken", "menuSlug": "mitwirken", "url": "/mitwirken.html"},
    {"title": "Fördern", "menuSlug": "foerdern", "url": "/foerdern.html"},
    {"title": "Blog", "menuSlug": "blog", "url": "/blog.html"},
    {"title": "Kontakt", "menuSlug": "kontakt", "url": "/kontakt.html"}
]


export default function Header () {
    return (
        <div className={styles.header}>
        <div className={styles["header-outer"]}>
            <div className={`${styles["grid-container"]} ${"grid-container"}`}>
            <div className={styles["header-desktop-content"]}>
                <div className={styles["header-desktop-left"]}>
                <a href="/" className={styles["header-desktop-logo-wrapper"]}>
                    <Image
                    className={styles["header-desktop-logo"]}
                    src="/svgs/amstart-logo.svg"
                    height={32}
                    width={32}
                    alt="aMStart Logo"
                    />
                </a>
                </div>
                <div className={styles["header-desktop-right"]}>
                <div className={styles["header-desktop-links"]}>
                    {links.map((item) => (
                        <a 
                            href={item.url} 
                            className={styles["header-desktop-link"]}>
                            {item.title}
                        </a>
                    ))}
                    {/* TODO: check menSlug & copy to mobile version */}
        {/*             {%- for link in globalData.headerData.links -%}
                    <a href="{{linkPrefix}}{{ link.url }}" 
                       className={styles["header-desktop-link{% if link.menuSlug == menuSlug %} is-active{% endif %}"]}>
                       {{ link.title }}</a>
                    {%- endfor -%} */}
                </div>
                </div>
            </div>

            <div className={styles["header-mobile-content"]}>
                <div className={styles["header-mobile-left"]}>
                <a href="/" className={styles["header-mobile-logo-wrapper"]}>
                    <img
                    className={styles["header-mobile-logo"]}
                    src="/svgs/amstart-logo.svg"
                    alt="aMStart Logo"
                    />
                </a>
                </div>
                <div className={styles["header-mobile-right"]}>
                <div className={styles["header-mobile-right"]}>
                    <div className={styles["header-mobile-menu-button"]}>
                    <div className={`${styles["header-mobile-menu-button-label"]} ${styles["header-mobile-menu-button-label--menu"]}`}>Menü</div>
                    <div className={`${styles["header-mobile-menu-button-label"]} ${styles["header-mobile-menu-button-label--close"]}`}>Schließen</div>
                    <div className={styles["header-mobile-burger-wrapper"]}>
                        <img
                        className={styles["header-mobile-burger"]}
                        src="/icons/menu.svg"
                        alt="aMStart Logo"
                        />
                    </div>
                    <div className={styles["header-mobile-close-wrapper"]}>
                        <img
                        className={styles["header-mobile-close"]}
                        src="/icons/close.svg"
                        alt="aMStart Logo"
                        />
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className={styles["header-mobile-menu"]}>
            <div className={styles["header-mobile-menu-links"]}>
        {/*        {%- for link in globalData.headerData.links -%}
                <a href="{{linkPrefix}}{{ link.url }}" className={styles["header-mobile-menu-link{% if link.menuSlug == menuSlug %} is-active{% endif %}"><span className="header-mobile-menu-link-label"]}>{{ link.title }}</span></a>
                {%- endfor -%} */}
            </div>
            </div>
        </div>
        </div>
    )
}