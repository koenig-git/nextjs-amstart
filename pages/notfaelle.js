import Layout from "../components/layout";

const quellen = [
    {"text": "Atlas of MS (2020). Germany. Epidemiology. Online verfügbar unter:", "url": "https://www.atlasofms.org/chart/germany/epidemiology/number-of-people-newly-diagnosed-with-ms"},
    {"text": "DMSG Bundesverband (2021). In welchem Alter erkrankt man? Online verfügbar unter:", "url": "https://alt.dmsg.de/multiple-sklerose-infos/faq/in-welchem-alter-erkrankt-man/"},

]

export default function Notfaelle() {
    return (
        <Layout>
            <div className="p-12 lg:p-18 xl:p-24 bg-white">
                <div className="w-2/3 text-lg space-y-3">
                    <h1 className="mb-6 font-extrabold text-3xl">Notfälle</h1>
                    <p>Solltest Du Dich in einer akuten Krise mit lebensmüden Gedanken befinden, wähle bitte die 112.</p>
                    <p>Die Telefonseelsorge ist ebenfalls 24 Stunden für Dich da: <br/>
                        <a href='https://www.telefonseelsorge.de' 
                        className="break-words font-extrabold underline text-green-secondary hover:text-green-secondary-hover"
                        >telefonseelsorge.de
                        </a> <br/>
                        <strong>Telefon: 0800 111 0 111</strong>
                    </p>
                </div>
            </div>
        </Layout>
    )
}