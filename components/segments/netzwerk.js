
const logoData = [
    {"name": "Aufeinander Achten", "image": "aufeinander-achten.png"}, 
    {"name": "Engagement Preis", "image": "engagement.png"},
    {"name": "Hertie", "image": "hertie.png"}, 
    {"name": "Hilfswerft", "image": "hilfswerft.png"}, 
    {"name": "Inklupreneur", "image": "inklupreneur.png"}
];

const knownData = [
    {"name": "FluxFM", "image": "FluxFM.png", "link": ""},
    {"name": "MS im Fokus", "image": "MS_im_Fokus.jpg", "link": "https://ms-im-fokus.podigee.io/24-neue-episode"},
    {"name": "Patientenpodcast Zentrum für klinische Neurowissenschaften", "image": "Zentrum_fuer_klinische_Neurowissenschaften.png", "link": "https://www.youtube.com/watch?v=NFNbpl8h7hc&t=4442s"},
    {"name": "MS Perspektive", "image": "MS_Perspektive.png", "link": "https://ms-perspektive.de/interview-mit-sonja-von-amstart-net/"},
    {"name": "Mutige Stimmen Podcast", "image": "Mutige_Stimmen_Podcast.jpg", "link": "https://www.youtube.com/watch?v=LsD0ZeEarZg&t=773s"},
    {"name": "Lebensnerv - FORUM PSYCHOSOMATIK", "image": "LebensnervStiftung.jpeg", "link": "http://www.lebensnerv.de/index.php/forum-psychosomatik"},
    {"name": "Zeit Online - Was jetzt", "image": "Zeit_Online.png", "link": "https://open.spotify.com/episode/44rlwLC61zzTYlSsbWljlI?si=ord3CIfwR0GtUBHaMjGpGg&utm_source=whatsapp&nd=1"},
    {"name": "Digitaltag 2022", "image": "Digitaltag2022.png", "link": "https://digitaltag.eu/bewerbung/publikumspreis/amstart"},
    // {"name": "", "image": "", "link": ""},    
];


export default function Netzwerk () {
    return (
        <div className="p-12 lg:p-18 xl:p-24 bg-white">
            <div className="flex">
            <div className="w-3/5 space-y-6">
                <h2 className="text-3xl font-extrabold">Unser Netzwerk</h2>
                <p>aMStart wird gefördert von der Gemeinnützigen Hertie-Stiftung. Darüber hinaus sind wir sehr dankbar über die großartige Unterstützung, die wir von unseren Denkpartner*innen erhalten.</p>
                <p>Auch Du kannst mit Deiner Unterstützung dazu beitragen, dass keine Person mehr alleine ist, wenn sie mit einer chronischen Erkrankung konfrontiert wird: Sei es als Multiplikator*in, Denkpartner*in oder finanzielle Unterstützer*in. Gemeinsam können wir Selbsthilfe neu denken!</p>
            </div>
            <div className="w-2/5 flex flex-wrap space-x-3 justify-center items-center">
                {logoData.map((logo) => (
                    <div className="w-[160px] h-auto">
                    <img
                     src={`/images/partner-logos/${logo.image}`}
                     />
                     </div>
                ))}
            </div>
            </div>
            <h2 className="text-3xl font-extrabold mb-10">Bekannt aus:</h2>
            <div className="w-1/2 m-auto">
                <div className="flex space-x-4 justify-center items-center">
                {knownData.map((logo) => (
                    <div className="w-[60px] h-auto">
                    <img
                     alt={logo.name}
                     src={`/images/known-logos/${logo.image}`}
                     href={logo.link}
                     className="grayscale"
                     />
                     </div>
                ))}
                </div>
            <div className="rounded w-2/3 m-auto mt-10 p-4 text-center bg-green-secondary hover:bg-green-secondary-hover">
                <a href="mailto:kontakt@amstart.net"
                className="font-bold text-white ">Fördern
                </a>
            </div>

            </div>
        </div>
    )
}