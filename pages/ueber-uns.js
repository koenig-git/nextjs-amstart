// import Swiper core and required modules
import { Navigation, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Layout from '../components/layout';


export default () => {
  return (
    <Layout currentHref={"/ueber-uns"}>
    {/* Section 1 */}
    <div className="p-12 lg:p-18 xl:p-24 bg-white">
      <div className="flex space-x-3 items-center text-lg leading-6">
        < div className="w-1/2">
            <h1 className="mb-6 font-extrabold text-3xl">Unser Selbstverständnis.</h1>
            <p>Wir wollen Selbsthilfe neu denken - jung, digital und unabhängig. Wir handeln bedarfsorientiert und wollen uns dabei an eine Gruppe Menschen richten, die bisher nicht von bestehenden Angeboten abgeholt wurde: junge Erwachsene und deren Angehörige.</p><br/>
            <p>Auch wenn Menschen mit Multiple Sklerose so unterschiedlich sind wie die tausenden Gesichter der Krankheit, haben die meisten eine Sache gemeinsam: Zum Zeitpunkt der Diagnose sind ganz viele Fragen und Emotionen sehr präsent. Klassische Selbsthilfeformate in analogen Gruppen werden jedoch kaum von jungen Erwachsenen wahrgenommen. Im Austausch mit anderen jungen Erwachsenen war schnell klar: Wir brauchen persönliche, digitale und niedrigschwellige Räume für Emotionen, Fragen und Erfahrungswerte zum Zeitpunkt der Diagnose. Wir hätten uns selbst so ein Angebot gewünscht und möchten genau dies jetzt schaffen.</p>

            <div className="rounded max-w-[400px] mt-10 p-4 text-center bg-green-primary">
                <a href="mailto:kontakt@amstart.net"
                className="font-bold text-white">Jetzt Gespräch vereinbaren
                </a>
            </div>
        </div>

        <div className='w-1/2 text-center h-[450px]'>
            <Swiper
            style={{
              "--swiper-navigation-color": "#000",
              "--swiper-navigation-size": "20px",
            }}
            modules={[Navigation, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            >

            
            <SwiperSlide>
              <div className='px-8 bg-green-light bg-clip-content '>
                <div className='flex justify-between items-center p-10 space-x-3'>
                  <div className='w-2/5'>
                    <img src="images/portraits/jasmin.png"/>
                  </div>
                  <div className='text-left font-extrabold w-3/5'>
                    <h3 className="text-2xl">Jasmin</h3>
                    <br/>
                    <h4>Gründerin & CEO</h4>
                  </div>
                  
                </div>
                <p className='px-10 pb-10 text-left'>Jasmin hat einen Hintergrund in gesellschaftlichen Innovationen und ist selbstständige Beraterin in der internationalen Entwicklungszusammenarbeit. Sie hat außerdem als Organisationsentwicklerin in der DMSG gearbeitet und ist als Initiatorin für alle strategischen Überlegungen und das Partnermanagement aMStart.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='px-8 bg-green-light bg-clip-content '>
                <div className='flex justify-between items-center p-10 space-x-3'>
                  <div className='text-left font-extrabold w-3/5'>
                    <h3 className="text-2xl">Sonja</h3>
                    <br/>
                    <h4>Community Managerin & Co-CEO</h4>
                  </div>
                  
                  <div className='w-2/5'>
                    <img src="images/portraits/sonja.png"/>
                  </div>
                </div>
                <p className='px-10 pb-5 text-left'>Sonja hat langjährige Berufserfahrung im Projektmanagement innerhalb der internationalen Entwicklungszusammenarbeit. Außerdem hat sie als ärztlich zertifizierte Fastenleiterin (dfa) eine Leidenschaft für Gesundheitsthemen. Sie ist als Community Managerin für Gesprächspartner*innen aMStart und kümmert sich außerdem um das Controlling.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='px-8 bg-green-light bg-clip-content '>
                <div className='flex justify-between items-center p-10 space-x-3'>
                  <div className='w-2/5'>
                    <img src="images/portraits/moritz.png"/>
                  </div>
                  <div className='text-left font-extrabold w-3/5'>
                    <h3 className="text-2xl">Moritz</h3>
                    <br/>
                    <h4>Webdeveloper</h4>
                  </div>
                  

                </div>
                <p className='px-10 pb-10 text-left'>Als erfahrener Webdeveloper entwickelt Moritz die Webseite hinter aMStart. Zusätzlich zu seiner langjährigen Erfahrung im Bereich Webdevelopment hat er einen akademischen Hintergrund in städtischer Entwicklung und Transformation.</p>
              </div>
            </SwiperSlide>
          </Swiper>

        </div>
        </div>
    </div>
    
    {/* Section 2 */}
    <div className="p-12 lg:p-18 xl:p-24 bg-green-light">
      <div className="flex space-x-3 items-center text-lg leading-6">
      <div className='w-1/2 text-center h-[450px]'>
            <Swiper
            style={{
              "--swiper-navigation-color": "#000",
              "--swiper-navigation-size": "20px",
            }}
            modules={[Navigation, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            >

            
            <SwiperSlide>
              <div className='px-8 bg-white bg-clip-content '>
                <div className='flex justify-between items-center p-10 space-x-3'>
                  <div className='w-2/5'>
                    <img src="images/portraits/christopher.png"/>
                  </div>
                  <div className='text-left font-extrabold w-3/5'>
                    <h3 className="text-2xl">Christopher</h3>
                    <br/>
                    <h4>Techie</h4>
                  </div>
                  
                </div>
                <p className='px-10 pb-10 text-left'>Christopher ist Data Scientist mit einem wirtschaftswissenschaftlichen Hintergrund. Er hat eine Leidenschaft für Ideen mit gesellschaftlicher Wirkung und engagiert sich in zahlreichen Projekten dazu. Er ist als Techie aMStart und entwickelt unter anderem unsere automatisierte Kalenderkoordinierung.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='px-8 bg-white bg-clip-content '>
                <div className='flex justify-between items-center p-10 space-x-3'>
                  <div className='text-left font-extrabold w-3/5'>
                    <h3 className="text-2xl">Kaiya</h3>
                    <br/>
                    <h4>Kommunikationsmanagerin</h4>
                  </div>
                  
                  <div className='w-2/5'>
                    <img src="images/portraits/kaiya.png"/>
                  </div>
                </div>
                <p className='px-10 pb-5 text-left'>Kaiya ist Kulturanthropologin und hat in der Vergangenheit in einem gemeinnützigen Bildungsverein mit 1:1 Ansatz gearbeitet. Sie hat eine Leidenschaft für Texte und ist der kreative Kopf hinter unserem Marketing und unserer PR. Kaiya ist als Kommunikationsmanagerin aMStart.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='px-8 bg-white bg-clip-content '>
                <div className='flex justify-between items-center p-10 space-x-3'>
                  <div className='w-2/5'>
                    <img src="images/portraits/alexandra.png"/>
                  </div>
                  <div className='text-left font-extrabold w-3/5'>
                    <h3 className="text-2xl">Alexandra</h3>
                    <br/>
                    <h4>Social Media Expertin</h4>
                  </div>
                  

                </div>
                <p className='px-10 pb-10 text-left'>Alexandra ist eine der bekanntesten Gesundheitsinfluencerinnen zu Multiple Sklerose und ist als Social Media Expertin aMStart. Sie hat außerdem einen beruflichen Hintergrund als Co-Therapeutin in einer psychosomatischen Klinik, ist Autorin, Meditationslehrerin, Podcasterin und Bloggerin.</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="w-1/2">
            <h1 className="mb-6 font-extrabold text-3xl">Unser Angebot.</h1>
            
            <p>aMStart stellt einen digitalen 1:1 Austausch zwischen jungen, erwachsenen Menschen mit MS und geschulten Erwachsenen her, die schon länger mit einer MS-Diagnose leben. Auch Angehörige können sich bei uns melden.</p><br/>
            <p>Über unsere Webseite können junge Erwachsene ganz einfach einen Termin vereinbaren und im persönlichen 1:1 Videocall in Austausch treten, Fragen stellen, Emotionen teilen und einen Ort des gegenseitigen Verständnisses finden.</p><br/>
            <p>Damit denken wir Gesundheitsversorgung aus der Sicht der Patient*innen und tragen dazu bei, unterrepräsentierte Stimmen, Geschichten und Erfahrungen hervorzuheben und zu entstigmatisieren.</p>

            <div className="rounded max-w-[400px] mt-10 p-4 text-center bg-green-primary">
                <a href="mailto:kontakt@amstart.net"
                className="font-bold text-white">Jetzt Gespräch vereinbaren
                </a>
            </div>
        </div>

        
        </div>
    </div>

    {/* Section 3 */}
    <div className="p-12 lg:p-18 xl:p-24 bg-white">
      <div className="flex space-x-3 items-center text-lg leading-6">
        < div className="w-1/2">
            <h1 className="mb-6 font-extrabold text-3xl">Was wir können.</h1>
            <p>Wir sind davon überzeugt, dass jede Person individuelle Resilienzstärken besitzt, die sich voneinander unterscheiden können. Wir geben Dir keinen rechtlichen oder medizinischen Rat oder nehmen Dir Entscheidungen ab. Stattdessen schaffen wir bewusst einen sicheren Raum des Zuhörens, fangen Emotionen auf und informieren Dich bei Wunsch über unsere eigenen Erfahrungen. Unsere Basis ist dabei eine intensive Reflektion der eigenen Diagnoseerfahrung, gemeinsame Werte und Verschwiegenheit, sowie Schulungen zu Kommunikationsmethoden. Dabei unterstützen uns Psycholog*innen und medizinische Fachexpert*innen.</p><br/>
            <p>Bei aMStart findest Du in einem digitalen Einzelgespräch ein bisschen Starthilfe: Wir nehmen Dich mit an Bord in eine neue Lebenssituation.</p>

            <div className="rounded max-w-[400px] mt-10 p-4 text-center bg-green-primary">
                <a href="mailto:kontakt@amstart.net"
                className="font-bold text-white">Jetzt Gespräch vereinbaren
                </a>
            </div>
        </div>

        <div className='w-1/2 text-center h-[450px]'>
            <Swiper
            style={{
              "--swiper-navigation-color": "#000",
              "--swiper-navigation-size": "20px",
            }}
            modules={[Navigation, A11y]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            >

            
            <SwiperSlide>
              <div className='px-8 bg-green-light bg-clip-content '>
                <div className='flex justify-between items-center p-10 space-x-3'>
                  <div className='w-2/5'>
                    <img src="images/portraits/pauline.png"/>
                  </div>
                  <div className='text-left font-extrabold w-3/5'>
                    <h3 className="text-2xl">Pauline</h3>
                    <br/>
                    <h4>Designerin</h4>
                  </div>
                  
                </div>
                <p className='px-10 pb-10 text-left'>Pauline ist studierte Medizininformatikerin und absolviert momentan ihren Master in Digital Health am Hasso-Plattner-Institut in Potsdam. Sie ist als Designerin aMStart und entwickelt unter anderem unser Kommunikationsmaterial.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='px-8 bg-green-light bg-clip-content '>
                <div className='flex justify-between items-center p-10 space-x-3'>
                  <div className='text-left font-extrabold w-3/5'>
                    <h3 className="text-2xl">Raphael</h3>
                    <br/>
                    <h4>Psychologe</h4>
                  </div>
                  
                  <div className='w-2/5'>
                    <img src="images/portraits/raphael.png"/>
                  </div>
                </div>
                <p className='px-10 pb-5 text-left'>Raphael hat langjährige Erfahrung als Referent in der Bundesverwaltung, als Dozent und in NGOs. Als ausgebildeter Psychologe ist er bei der Entwicklung und Durchführung der Schulungsformate für Gesprächspartner*innen aMStart und unterstützt bei der Evaluation.</p>
              </div>
            </SwiperSlide>
          </Swiper>

        </div>
        </div>
    </div>
    </Layout>
  );
};

// export default function Foerdern() {
//     return (
//         <Layout>
//             <div className="p-12 lg:p-18 xl:p-24 bg-white">
//                 <div className="w-2/3 space-y-5 text-lg">
//                     <h1 className="mb-6 font-extrabold text-3xl">Werde Förder*in</h1>
//                     <p>Mit Deiner finanziellen Unterstützung können wir noch professioneller junge Erwachsene zum kritischen Zeitpunkt der Diagnose auffangen.</p>
//                     <p>Hier kannst Du uns unterstützen:</p>
//                     <div className="flex space-x-3"> 
//                         <div className="w-1/2">
//                             <a 
//                                title="Jetzt spenden für „aMStart - Starthilfe beim Umgang mit der Diagnose MS für junge Menschen auf betterplace.org!" 
//                                target="_blank" 
//                                href="https://www.betterplace.org/de/projects/117123-amstart-starthilfe-beim-umgang-mit-der-diagnose-ms-fuer-junge-menschen?utm_campaign=donate_btn&amp;utm_content=project%23117123&amp;utm_medium=external_banner&amp;utm_source=projects"
//                             >
//                             <img 
//                                alt="Jetzt Spenden! Das Spendenformular wird von betterplace.org bereit gestellt." 
//                                src="https://betterplace-assets.betterplace.org/static-images/projects/donation-button-de.png" 
//                             />
//                             </a>
//                         </div>

//                         {/* <div className="w-1/2">
//                             <div className="donate-button">
//                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 188 49"><path fill="#0070E0" d="M164.01 11.446l-4.012 25.207a.643.643 0 0 0 .642.746h4.748a.701.701 0 0 0 .698-.589l4.012-25.207a.643.643 0 0 0-.642-.746h-4.748a.692.692 0 0 0-.698.589zm-5.07 7.356h-4.505a.699.699 0 0 0-.697.588l-.149.928s-3.499-3.794-9.694-1.23c-3.554 1.468-5.26 4.501-5.986 6.723 0 0-2.304 6.753 2.907 10.47 0 0 4.832 3.575 10.273-.22l-.094.592a.644.644 0 0 0 .37.686c.085.04.178.06.272.06h4.508a.692.692 0 0 0 .698-.589l2.742-17.262a.632.632 0 0 0-.149-.521.643.643 0 0 0-.496-.226zm-6.629 9.54a5.005 5.005 0 0 1-1.715 3.095 5.073 5.073 0 0 1-3.345 1.203 4.602 4.602 0 0 1-1.416-.206c-1.945-.62-3.055-2.474-2.736-4.484a5.01 5.01 0 0 1 1.717-3.093 5.08 5.08 0 0 1 3.343-1.207 4.6 4.6 0 0 1 1.416.208c1.957.616 3.062 2.473 2.741 4.485h-.005zm-24.056.477c2.443 0 4.806-.868 6.662-2.446a10.147 10.147 0 0 0 3.456-6.158c.789-4.993-3.14-9.351-8.71-9.351h-8.973a.699.699 0 0 0-.697.589L115.98 36.66a.644.644 0 0 0 .37.686c.086.04.178.06.272.06h4.751a.699.699 0 0 0 .697-.589l1.178-7.402a.692.692 0 0 1 .698-.59l4.309-.006zm3.974-8.831c-.293 1.846-1.731 3.205-4.482 3.205h-3.517l1.068-6.713h3.454c2.844.005 3.77 1.67 3.477 3.513v-.005z"/><path fill="#003087" d="M110.567 19.23l-5.434 9.105-2.758-9.038a.694.694 0 0 0-.672-.495h-4.904a.526.526 0 0 0-.527.446.515.515 0 0 0 .025.247l4.942 15.224-4.47 7.174a.516.516 0 0 0 .18.728.527.527 0 0 0 .269.07h5.282a.876.876 0 0 0 .751-.42l13.804-22.667a.512.512 0 0 0 .011-.53.524.524 0 0 0-.463-.263h-5.28a.877.877 0 0 0-.756.419zm-16.548-.428H89.51a.7.7 0 0 0-.698.59l-.146.927s-3.502-3.794-9.697-1.23c-3.553 1.468-5.26 4.501-5.983 6.723 0 0-2.306 6.753 2.904 10.47 0 0 4.833 3.575 10.274-.22l-.094.592a.642.642 0 0 0 .37.686c.085.04.178.06.272.06h4.508a.701.701 0 0 0 .697-.589l2.743-17.262a.642.642 0 0 0-.37-.687.655.655 0 0 0-.272-.06zm-6.63 9.542a5.011 5.011 0 0 1-1.716 3.091 5.082 5.082 0 0 1-3.343 1.206 4.605 4.605 0 0 1-1.414-.206c-1.944-.62-3.053-2.474-2.734-4.485a5.011 5.011 0 0 1 1.723-3.098 5.082 5.082 0 0 1 3.353-1.201c.48-.005.959.065 1.417.208 1.937.616 3.04 2.472 2.72 4.485h-.005zm-24.055.476a10.284 10.284 0 0 0 6.656-2.449 10.144 10.144 0 0 0 3.452-6.156c.79-4.992-3.14-9.35-8.708-9.35H55.76a.7.7 0 0 0-.698.588l-4 25.2a.642.642 0 0 0 .37.687c.085.039.178.06.272.06h4.748a.7.7 0 0 0 .698-.59l1.176-7.402a.692.692 0 0 1 .698-.589h4.31zm3.974-8.832c-.293 1.846-1.73 3.205-4.481 3.205H59.31l1.066-6.713h3.454c2.845.005 3.77 1.671 3.478 3.513v-.005z"/><path fill="#001C64" d="M32.639 12.16c.107-5.566-4.484-9.836-10.797-9.836H8.784a1.277 1.277 0 0 0-1.262 1.078L2.29 36.095a1.038 1.038 0 0 0 1.025 1.2h7.736l-1.209 7.57a1.038 1.038 0 0 0 1.025 1.2h6.302c.304 0 .575-.109.807-.306.23-.198.268-.471.316-.772l1.85-10.884c.047-.3.2-.69.431-.888.231-.198.433-.306.738-.306h3.856c6.183 0 11.428-4.395 12.387-10.507.679-4.338-1.181-8.286-4.915-10.243z"/><path fill="#0070E0" d="M12.725 25.238l-1.927 12.218-1.21 7.664a1.038 1.038 0 0 0 1.026 1.199h6.67a1.276 1.276 0 0 0 1.26-1.078l1.758-11.139a1.277 1.277 0 0 1 1.261-1.078h3.926c6.183 0 11.428-4.51 12.388-10.622.68-4.338-1.504-8.286-5.238-10.243-.01.462-.05.923-.121 1.38-.959 6.11-6.206 10.621-12.387 10.621h-6.145a1.278 1.278 0 0 0-1.261 1.079"/><path fill="#003087" d="M10.797 37.456h-7.76a1.037 1.037 0 0 1-1.024-1.2L7.245 3.078A1.277 1.277 0 0 1 8.506 2h13.336c6.313 0 10.904 4.594 10.797 10.159-1.571-.824-3.417-1.295-5.439-1.295H16.082a1.277 1.277 0 0 0-1.262 1.078l-2.094 13.296-1.93 12.218z"/></svg>
//                             </div>
                            
//                             <script src="https://www.paypalobjects.com/donate/sdk/donate-sdk.js" charset="UTF-8"></script>
//                             <script>
//                             PayPal.Donation.Button({{
//                             env:'production',
//                             hosted_button_id:'3DDWJ7B8RELV4',
//                             image: {
//                             src:'https://www.paypalobjects.com/de_DE/DE/i/btn/btn_donate_LG.gif',
//                             alt:'Spenden mit dem PayPal-Button',
//                             title:'PayPal - The safer, easier way to pay online!',
//                             },
//                             }}).render('#donate-button');
//                             </script>
//                         </div> */}



//                     </div>
//                     <p>Selbstverständlich stellen wir dir gerne eine Spendenbescheinigung aus, wenn du uns deine Adresse hinterlässt.</p>
//                 </div>
//             </div>
//         </Layout>
//     )}



// //  <div id="paypal-donate-button-container"></div>
// //     <script>
// //     PayPal.Donation.Button({
// //         env: 'sandbox',
// //         hosted_button_id: 'YOUR_SANDBOX_HOSTED_BUTTON_ID',
// //         // business: 'YOUR_EMAIL_OR_PAYERID',
// //         image: {
// //             src: 'https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif',
// //             title: 'PayPal - The safer, easier way to pay online!',
// //             alt: 'Donate with PayPal button'
// //         },
// //         onComplete: function (params) {
// //             // Your onComplete handler
// //         },
// //     }).render('#paypal-donate-button-container');
// //     </script>

