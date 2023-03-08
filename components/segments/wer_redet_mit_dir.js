import { Navigation, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const paragraphStyle = "mb-4 mt-3 text-lg";


const gpData = [
    {"name": "Lotte", "src": "images/portraits/lotte.png", "quote": '„Der Austausch mit Menschen mit der gleichen Diagnose ist heilsam. Akzeptieren und Emotionen ausdrücken – das hat für mich den Unterschied gemacht.“', "info": "Studierende, 25 Diagnose seit 2017"},
    {"name": "Chris", "src": "images/portraits/christian.png", "quote": '„Von anderen jungen Erwachsenen zu hören, dass es sich mit MS gut leben lässt, kann Kraft geben.“', "info": "Berufstätig, 36, Diagnose seit 2012"},
    {"name": "Mine", "src": "images/portraits/jasmin.png", "quote": '„Zuhören scheint so simpel. Eine Person zu finden, die mit meiner Situation mitfühlen kann, ist aber gar nicht so einfach. Dafür engagier‘ ich mich.“', "info": "Berufstätig, 28, Diagnose seit 2018"},
    {"name": "Alexandra", "src": "images/portraits/alexandra.png", "quote": '„Erst als ich anfing Frieden mit meiner MS zu schließen, fühlte ich mich wieder frei und vollständig. Dabei möchte ich anderen helfen.“', "info": "Berufstätig, 32, Diagnose seit 2012"},
    {"name": "Sonja", "src": "images/portraits/sonja.png", "quote": '„Mir hat der Austausch mit anderen MS Patient*innen so viel Kraft gegeben - das möchte ich nun weitergeben.“', "info": "Berufstätig, 33 Diagnose seit 2012"}
]



//TODO: GPs sind keine 'Beispiele' 
//TODO: Spacing zwischen slides

export default function Wer_Redet () {
    return (

        <div className="p-12 lg:p-18 xl:p-24 bg-white">
            <h2 className="mb-6 font-extrabold text-3xl">Wer redet mir dir?</h2>
            <p className={paragraphStyle}>Unsere Gesprächspartner*innen sind Menschen mit MS und Angehörige. Wir achten auf Deine Bedürfnisse, hören Dir zu, verstehen Dich und teilen auf Deinen Wunsch eigene Erfahrungen.</p>
            <p className={paragraphStyle}>Medizinischen oder rechtlichen Rat leisten wir nicht. Alle unsere Gesprächspartner*innen durchlaufen Auswahl- und Schulungsformate, die wir mit Psycholog*innen entwickelt haben.</p>
            <p className={paragraphStyle}>Hier findest du Beispiele unserer bundesweiten Gesprächspartner*innen.</p>


            <Swiper
            style={{
              "--swiper-navigation-color": "#000",
              "--swiper-navigation-size": "20px",
            }}
            breakpoints={{
                1024: {slidesPerView:2}
            }}
            modules={[Navigation, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            >

            {gpData.map((gp) => (
                <SwiperSlide className='!h-auto'>
                <div className='bg-yellow px-10 bg-clip-content !h-full'>
                    <div className='flex justify-between items-end space-x-6 !h-full'>
                    <div className='w-1/2'>
                        <img src={gp.src}/>
                    </div>
                    <div className='w-1/2 py-6 pr-6 space-y-3 text-left h-full'>
                        <h3 className="text-2xl font-extrabold">{gp.name}</h3>
                        <p className='text-lg leading-tight'>{gp.quote}</p>
                        <p className='text-base'>{gp.info}</p>
                    </div>                  
                    </div>
                </div>
                </SwiperSlide>
            ))}
            </Swiper>
            
            <div className="rounded m-auto max-w-[400px] mt-10 p-4 text-center bg-green-primary">
            <a href="mailto:kontakt@amstart.net"
            className="font-bold text-white">Jetzt Gespräch vereinbaren
            </a>
            </div>
            

        </div>




    )
}





