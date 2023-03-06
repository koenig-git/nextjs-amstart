import Segment from "./segment";
import Link from "next/link";
import Image from "next/image";

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
        <Segment color='green-light'>
            <footer className="flex justify-between">
                <div className="flex-0 px-[50px] w-1/2">
                    <Link href="/">
                    <Image
                    src="/svgs/amstart-logo.svg"
                    width={200}
                    height={70} 
                    alt="aMStart Logo"
                    className="w-[450px]"    
                    />
                    </Link>
                    <div className="font-extrabold text-white text-7xl">
                        mit Dir.
                    </div>
                </div>
                
                <div className='w-1/2 pl-[150px]'>
                    <div className="flex flex-wrap justify-end">
                    {footerData.links.map((item) => (
                        <a 
                            href={item.url} 
                            className="mx-[21px] mb-[21px] text-lg xl:text-2xl font-bold"
                            key={item.menuSlug}
                        >
                            {item.title}
                        </a>
                    ))}
                    </div>
                    <div className="flex mt-9 justify-end text-xl">
                    {footerData.socialLinks.map((item) =>
                        <a
                            href={item.url}
                            className="mx-[21px] text-lg xl:text-2xl font-bold"
                            key={item.iconName}
                        >
                            <img
                            src={`/icons/${item.iconName}`}
                            alt={item.title}
                            />
                        </a>
                    )}
                    </div>
                </div>


            </footer>
        </Segment>
    )
}