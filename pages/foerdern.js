import Layout from "../components/layout";

const quellen = [
    {"text": "Atlas of MS (2020). Germany. Epidemiology. Online verfügbar unter:", "url": "https://www.atlasofms.org/chart/germany/epidemiology/number-of-people-newly-diagnosed-with-ms"},
    {"text": "DMSG Bundesverband (2021). In welchem Alter erkrankt man? Online verfügbar unter:", "url": "https://alt.dmsg.de/multiple-sklerose-infos/faq/in-welchem-alter-erkrankt-man/"},

]

export default function Foerdern() {
    return (
        <Layout>
            <div className="p-12 lg:p-18 xl:p-24 bg-white">
                <div className="w-2/3 space-y-5 text-lg">
                    <h1 className="mb-6 font-extrabold text-3xl">Werde Förder*in</h1>
                    <p>Mit Deiner finanziellen Unterstützung können wir noch professioneller junge Erwachsene zum kritischen Zeitpunkt der Diagnose auffangen.</p>
                    <p>Hier kannst Du uns unterstützen:</p>
                    <div className="flex space-x-3"> 
                        <div className="w-1/2">
                            <a 
                               title="Jetzt spenden für „aMStart - Starthilfe beim Umgang mit der Diagnose MS für junge Menschen auf betterplace.org!" 
                               target="_blank" 
                               href="https://www.betterplace.org/de/projects/117123-amstart-starthilfe-beim-umgang-mit-der-diagnose-ms-fuer-junge-menschen?utm_campaign=donate_btn&amp;utm_content=project%23117123&amp;utm_medium=external_banner&amp;utm_source=projects"
                            >
                            <img 
                               alt="Jetzt Spenden! Das Spendenformular wird von betterplace.org bereit gestellt." 
                               src="https://betterplace-assets.betterplace.org/static-images/projects/donation-button-de.png" 
                            />
                            </a>
                        </div>

                        {/* <div className="w-1/2">
                            <div className="donate-button">
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 188 49"><path fill="#0070E0" d="M164.01 11.446l-4.012 25.207a.643.643 0 0 0 .642.746h4.748a.701.701 0 0 0 .698-.589l4.012-25.207a.643.643 0 0 0-.642-.746h-4.748a.692.692 0 0 0-.698.589zm-5.07 7.356h-4.505a.699.699 0 0 0-.697.588l-.149.928s-3.499-3.794-9.694-1.23c-3.554 1.468-5.26 4.501-5.986 6.723 0 0-2.304 6.753 2.907 10.47 0 0 4.832 3.575 10.273-.22l-.094.592a.644.644 0 0 0 .37.686c.085.04.178.06.272.06h4.508a.692.692 0 0 0 .698-.589l2.742-17.262a.632.632 0 0 0-.149-.521.643.643 0 0 0-.496-.226zm-6.629 9.54a5.005 5.005 0 0 1-1.715 3.095 5.073 5.073 0 0 1-3.345 1.203 4.602 4.602 0 0 1-1.416-.206c-1.945-.62-3.055-2.474-2.736-4.484a5.01 5.01 0 0 1 1.717-3.093 5.08 5.08 0 0 1 3.343-1.207 4.6 4.6 0 0 1 1.416.208c1.957.616 3.062 2.473 2.741 4.485h-.005zm-24.056.477c2.443 0 4.806-.868 6.662-2.446a10.147 10.147 0 0 0 3.456-6.158c.789-4.993-3.14-9.351-8.71-9.351h-8.973a.699.699 0 0 0-.697.589L115.98 36.66a.644.644 0 0 0 .37.686c.086.04.178.06.272.06h4.751a.699.699 0 0 0 .697-.589l1.178-7.402a.692.692 0 0 1 .698-.59l4.309-.006zm3.974-8.831c-.293 1.846-1.731 3.205-4.482 3.205h-3.517l1.068-6.713h3.454c2.844.005 3.77 1.67 3.477 3.513v-.005z"/><path fill="#003087" d="M110.567 19.23l-5.434 9.105-2.758-9.038a.694.694 0 0 0-.672-.495h-4.904a.526.526 0 0 0-.527.446.515.515 0 0 0 .025.247l4.942 15.224-4.47 7.174a.516.516 0 0 0 .18.728.527.527 0 0 0 .269.07h5.282a.876.876 0 0 0 .751-.42l13.804-22.667a.512.512 0 0 0 .011-.53.524.524 0 0 0-.463-.263h-5.28a.877.877 0 0 0-.756.419zm-16.548-.428H89.51a.7.7 0 0 0-.698.59l-.146.927s-3.502-3.794-9.697-1.23c-3.553 1.468-5.26 4.501-5.983 6.723 0 0-2.306 6.753 2.904 10.47 0 0 4.833 3.575 10.274-.22l-.094.592a.642.642 0 0 0 .37.686c.085.04.178.06.272.06h4.508a.701.701 0 0 0 .697-.589l2.743-17.262a.642.642 0 0 0-.37-.687.655.655 0 0 0-.272-.06zm-6.63 9.542a5.011 5.011 0 0 1-1.716 3.091 5.082 5.082 0 0 1-3.343 1.206 4.605 4.605 0 0 1-1.414-.206c-1.944-.62-3.053-2.474-2.734-4.485a5.011 5.011 0 0 1 1.723-3.098 5.082 5.082 0 0 1 3.353-1.201c.48-.005.959.065 1.417.208 1.937.616 3.04 2.472 2.72 4.485h-.005zm-24.055.476a10.284 10.284 0 0 0 6.656-2.449 10.144 10.144 0 0 0 3.452-6.156c.79-4.992-3.14-9.35-8.708-9.35H55.76a.7.7 0 0 0-.698.588l-4 25.2a.642.642 0 0 0 .37.687c.085.039.178.06.272.06h4.748a.7.7 0 0 0 .698-.59l1.176-7.402a.692.692 0 0 1 .698-.589h4.31zm3.974-8.832c-.293 1.846-1.73 3.205-4.481 3.205H59.31l1.066-6.713h3.454c2.845.005 3.77 1.671 3.478 3.513v-.005z"/><path fill="#001C64" d="M32.639 12.16c.107-5.566-4.484-9.836-10.797-9.836H8.784a1.277 1.277 0 0 0-1.262 1.078L2.29 36.095a1.038 1.038 0 0 0 1.025 1.2h7.736l-1.209 7.57a1.038 1.038 0 0 0 1.025 1.2h6.302c.304 0 .575-.109.807-.306.23-.198.268-.471.316-.772l1.85-10.884c.047-.3.2-.69.431-.888.231-.198.433-.306.738-.306h3.856c6.183 0 11.428-4.395 12.387-10.507.679-4.338-1.181-8.286-4.915-10.243z"/><path fill="#0070E0" d="M12.725 25.238l-1.927 12.218-1.21 7.664a1.038 1.038 0 0 0 1.026 1.199h6.67a1.276 1.276 0 0 0 1.26-1.078l1.758-11.139a1.277 1.277 0 0 1 1.261-1.078h3.926c6.183 0 11.428-4.51 12.388-10.622.68-4.338-1.504-8.286-5.238-10.243-.01.462-.05.923-.121 1.38-.959 6.11-6.206 10.621-12.387 10.621h-6.145a1.278 1.278 0 0 0-1.261 1.079"/><path fill="#003087" d="M10.797 37.456h-7.76a1.037 1.037 0 0 1-1.024-1.2L7.245 3.078A1.277 1.277 0 0 1 8.506 2h13.336c6.313 0 10.904 4.594 10.797 10.159-1.571-.824-3.417-1.295-5.439-1.295H16.082a1.277 1.277 0 0 0-1.262 1.078l-2.094 13.296-1.93 12.218z"/></svg>
                            </div>
                            
                            <script src="https://www.paypalobjects.com/donate/sdk/donate-sdk.js" charset="UTF-8"></script>
                            <script>
                            PayPal.Donation.Button({{
                            env:'production',
                            hosted_button_id:'3DDWJ7B8RELV4',
                            image: {
                            src:'https://www.paypalobjects.com/de_DE/DE/i/btn/btn_donate_LG.gif',
                            alt:'Spenden mit dem PayPal-Button',
                            title:'PayPal - The safer, easier way to pay online!',
                            },
                            }}).render('#donate-button');
                            </script>
                        </div> */}



                    </div>
                    <p>Selbstverständlich stellen wir dir gerne eine Spendenbescheinigung aus, wenn du uns deine Adresse hinterlässt.</p>
                </div>
            </div>
        </Layout>
    )}



//  <div id="paypal-donate-button-container"></div>
//     <script>
//     PayPal.Donation.Button({
//         env: 'sandbox',
//         hosted_button_id: 'YOUR_SANDBOX_HOSTED_BUTTON_ID',
//         // business: 'YOUR_EMAIL_OR_PAYERID',
//         image: {
//             src: 'https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif',
//             title: 'PayPal - The safer, easier way to pay online!',
//             alt: 'Donate with PayPal button'
//         },
//         onComplete: function (params) {
//             // Your onComplete handler
//         },
//     }).render('#paypal-donate-button-container');
//     </script>

