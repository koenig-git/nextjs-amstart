// import styles from "./header.module.scss";
import Image from 'next/image';
import Link from 'next/link';

const links = [
    {"title": "Über uns", "menuSlug": "ueber-uns", "url": "/ueber-uns"},
    {"title": "Mitwirken", "menuSlug": "mitwirken", "url": "/mitwirken"},
    {"title": "Fördern", "menuSlug": "foerdern", "url": "/foerdern"},
    {"title": "Blog", "menuSlug": "blog", "url": "/blog"},
    {"title": "Kontakt", "menuSlug": "kontakt", "url": "/kontakt"}
]


export default function Header () {
    return (
        <nav className="bg-green-light sticky top-0 z-50">  {/* TODO: Handle white space overscrolling */}
            <div className="flex items-center justify-between px-12 lg:px-18 xl:px-24 h-24.5 lg:h-25">
                <div className="flex-0">
                    <Link href="/">
                    <Image
                    src="/svgs/amstart-logo.svg"
                    width={200}
                    height={70} 
                    alt="aMStart Logo"
                    className="w-50 h-15"    
                    />
                    </Link>
                </div>
                <div className='flex-0'>
                    {links.map((item) => (
                        <a 
                            href={item.url} 
                            className="ml-6 lg:ml-12 text-lg xl:text-2xl font-bold"
                            key={item.menuSlug}>
                            {item.title}
                        </a>
                    ))}
                </div>
            </div>
        </nav>

        
    )
}