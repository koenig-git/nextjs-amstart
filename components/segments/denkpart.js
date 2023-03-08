import { Navigation, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const paragraphStyle = "mb-4 mt-3 text-lg";















const dpData = [
    {"name": "Raúl Krauthausen", "src": "images/testimonies/krauthausen.png", "quote": ['„Ein großer Teil der Bevölkerung erwirbt im Laufe ihres Lebens eine chronische Erkrankung oder Behinderung und dies kann zunächst viele Fragen, Unsicherheiten und Ängste aufwerfen.', 'Das Angebot von aMStart ist deshalb so wichtig, weil der Kontakt zu Betroffenen, die sich in einer ähnlichen Situation befinden, entscheidend für die Bewältigung der neuen Lebenssituation ist.', 'Ich freue mich, in beratender Funktion einen kleinen Teil zu dem Projekt beigetragen zu haben und wünsche dem Team viel Erfolg.“'], "info": "Aktivist für Inklusion und Barrierefreiheit"},
    {"name": "Malu Dreyer", "src": "images/testimonies/malu-dreyer.png", "quote": ['„Die Diagnose MS ist für die Betroffenen und ihre Angehörigen zunächst oftmals ein Schock, den es zu verarbeiten gilt. In dieser besonderen Lebenssituation ist es wichtig, sich mit anderen Betroffenen austauschen zu können. Denn die Erfahrungen anderer bieten Orientierung und machen Mut. Sie zeigen, wie ein gutes Leben mit MS möglich ist. Ich danke dem Team von aMStart ganz herzlich für ihre wichtige Arbeit und wünsche aMStart weiterhin viel Erfolg!“'], "info": "Ministerpräsidentin von Rheinland-Pfalz"},
    {"name": "Mona, Neudiagnostiziert", "src": "images/testimonies/mona.png", "quote": ['„Ich will mich gerade so wenig wie möglich mit der Diagnose auseinandersetzen und mich auch nicht über die MS identifizieren. Trotzdem hatte ich einige Fragezeichen im Kopf nach der Diagnose und bin überrascht wie wertvoll es war im persönlichen Einzelgespräch mit einer anderen jungen Person zu sprechen und Kraft zu tanken.“'], "info": "22 Jahre, Diagnose seit 5 Monaten"},
    {"name": "Dr. Eva Koch", "src": "images/testimonies/koch.png", "quote": ['„Die Gemeinnützige Hertie-Stiftung möchte mit ihrem Programm mitMiSsion neue Ideen und Ansätze unterstützen – daher freuen wir uns sehr, das überaus engagierte und spannende Projekt aMStart mit einer Förderung zu begleiten.“'], "info": "Leiterin der MS-Projekte, Gemeinnützige Hertie-Stiftung"},
    {"name": "Philipp, MS Patient", "src": "images/testimonies/philipp.png", "quote": ['„Ich bin nie einer Selbsthilfegruppe beigetreten. Das Gruppenformat und die scheinbaren Verpflichtungen dahinter haben mich bisher immer ein bisschen abgeschreckt. Über aMStart habe ich eine sehr einfache Alternative gefunden mich trotzdem der Diagnose zu stellen und einen sicheren und persönlichen Rahmen zu finden.“'], "info": "25 Jahre, Diagnose seit 4 Jahren"},
    {"name": "Prof. Dr. Tjalf Ziemssen", "src": "images/testimonies/ziemssen.png", "quote": ['„aMStart unterstützt zeitgemäß Mitmenschen mit Multipler Sklerose in unserer digitalen Gesellschaft und wird damit integraler Teil des von uns Ärzten in Dresden angestrebten ganzheitlichen MS Managements 360° durch aktive Selbsthilfe.“'], "info": "Direktor Zentrum für klinische Neurowissenschaften, Neurologische Universitätsklinik Carl Gustav Carus"},
    {"name": "Anja, Angehörige", "src": "images/testimonies/anja.png", "quote": ['„Die Diagnose MS bei meinem Partner wirft bei mir viele Fragen auf. Die Möglichkeit, mich mit einer Person auszutauschen, die sich mit den gleichen Fragen bereits auseinandergesetzt hat oder immer noch auseinandersetzt, gibt mir viel Kraft und Orientierung.“'], "info": "32 Jahre, Diagnose seit 2 Monaten"},
    {"name": "Alexandra Leyer", "src": "images/testimonies/alexandra.png", "quote": ['„Was gibt es Schöneres als verstanden und gesehen zu werden? Ich unterstütze aMStart, weil es Menschen mit MS die Möglichkeit bietet, Hilfe in Anspruch zu nehmen, gehört zu werden, aber auch zu helfen, um gemeinsam zu wachsen. Die Idee hinter aMStart ist für mich elementar, um zu erkennen, welche Ressourcen wir in uns tragen, damit Schicksalsschläge aus eigener Kraft bewältigt werden können.'], "info": "Gesundheitsinfluencerin @wunderflecken, Autorin, Co-Therapeutin"},
]



//TODO: GPs sind keine 'Beispiele' 
//TODO: Spacing zwischen slides

export default function Denkpart () {
    return (

        <div className="p-12 lg:p-18 xl:p-24 bg-white">

            <Swiper
            style={{
              "--swiper-navigation-color": "#000",
              "--swiper-navigation-size": "20px",
            }}
            modules={[Navigation, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            >

            {dpData.map((dp) => (
                <SwiperSlide className='!h-auto'>
                <div className='bg-yellow px-10 bg-clip-content !h-full'>
                    <div className='flex p-10 justify-between space-x-6 !h-full'>
                    <div className='w-1/2'>
                        <img src={dp.src} className="rounded-full m-auto object-contain max-h-[400px]"/>
                    </div>
                    <div className='w-1/2 space-y-3 text-left h-full'>
                        <h3 className="text-2xl font-extrabold">{dp.name}</h3>
                        <p className='text-lg font-extrabold'>{dp.info}</p>
                        {dp.quote.map((p) => (
                            <p className='text-lg leading-tight'>{p}</p>
                        ))}
                        
                    </div>                  
                    </div>
                </div>
                </SwiperSlide>
            ))}
            </Swiper>

        </div>

    )
}





