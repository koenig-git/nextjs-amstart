import Layout from "../components/layout";

const quellen = [
    {"text": "Atlas of MS (2020). Germany. Epidemiology. Online verfügbar unter:", "url": "https://www.atlasofms.org/chart/germany/epidemiology/number-of-people-newly-diagnosed-with-ms"},
    {"text": "DMSG Bundesverband (2021). In welchem Alter erkrankt man? Online verfügbar unter:", "url": "https://alt.dmsg.de/multiple-sklerose-infos/faq/in-welchem-alter-erkrankt-man/"},

]

export default function Quellen() {
    return (
        <Layout>
            <div className="p-12 lg:p-18 xl:p-24 bg-white">
                <div className="w-2/3">
                <h1 className="mb-6 font-extrabold text-3xl">Quellen</h1>
                <ol className="list-decimal list-inside"> 
                    {quellen.map((item) => (
                        <li className="mt-3 text-lg xl:text-2xl">
                            {item.text}
                            <br/>
                            <a 
                                href={item.url} 
                                className="break-words font-extrabold underline text-green-secondary hover:text-green-secondary-hover"
                                key={item.url}>
                                {item.url}
                            </a>
                        </li>
                        ))}
                </ol>
                </div>
            </div>
        </Layout>
    )
}