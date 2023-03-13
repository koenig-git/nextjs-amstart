import Layout from "../components/layout"

export default function Kontakt () {
    return (
    <Layout currentHref={"/mitwirken"}>
    <div className="p-12 lg:p-18 xl:p-24 bg-white">
        <div className="flex space-x-3 text-lg leading-6">


            <div className="w-1/2">
                <h1 className="mb-6 font-extrabold text-3xl">Werde Denkpartner*in</h1>
                <p>Du findest gut, was wir tun, hast Ideen, und möchtest uns ideell mit Deinem Know-How unterstützen? Wir freuen uns von Dir zu hören!</p><br/>
                E-Mail:&nbsp;
                <a href='mailto:kontakt@amstart.net'
                className="underline font-extrabold text-green-secondary hover:text-green-secondary-hover" 
                >kontakt@amstart.net
                </a>
                <div className="rounded max-w-[300px] mt-10 p-3 text-center bg-green-secondary">
                    <a href="mailto:kontakt@amstart.net"
                    className="font-bold text-white">Schreib uns
                    </a>
                </div>
            </div>

            <div className="w-1/2 space-y-3">
                <h1 className="mb-6 font-extrabold text-3xl">Werde Gesprächspartner*in</h1>
                <p>Du hast mindestens 2 Jahre eigene Erfahrung mit der Diagnose MS oder Erfahrung als Angehörige*r? Du bist zwischen 20 und 40 Jahre jung? Du würdest gerne Deine Erfahrungen mit mit anderen jungen Erwachsenen teilen und bist noch dazu ein*e gute*r Zuhörer*in? Dann sei mit uns als Gesprächspartner*in aMStart.</p>
                <p>Aktuell suchen wir vor allem Angehörige von Patient*innen. Wenn du selbst mit MS diagnostiziert bist, setzen wir Dich gerne auf unsere Warteliste.</p>
                <p>In der Zwischenzeit freuen wir uns zusätzlich über jede Unterstützung als Botschafter*in von aMStart, um noch mehr Neudiagnostizierte und deren Angehörige zu erreichen. Dazu senden wir Dir gerne unser Infomaterial kostenfrei per Post zu. Wir freuen uns von Dir zu hören!</p>
                <br/>
                E-Mail:&nbsp;
                <a href='mailto:kontakt@amstart.net'
                className="underline font-extrabold text-green-secondary hover:text-green-secondary-hover" 
                >kontakt@amstart.net
                </a>
                <div className="rounded max-w-[300px] mt-10 p-3 text-center bg-green-secondary">
                    <a href="mailto:kontakt@amstart.net"
                    className="font-bold text-white ">Schreib uns
                    </a>
                </div>
            </div>
        </div>
    </div>
    </Layout>
)}
