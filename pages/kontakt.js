import Layout from "../components/layout"

export default function Kontakt () {
    return (
    <Layout>
    <div className="p-12 lg:p-18 xl:p-24 bg-white">
        <div className="max-w-fit text-lg">
            <h1 className="mb-6 font-extrabold text-3xl">Kontakt</h1>
            E-Mail:&nbsp;
            <a href='mailto:kontakt@amstart.net'
               className="underline font-extrabold text-green-secondary hover:text-green-secondary-hover" 
            >kontakt@amstart.net
            </a>
            <div className="rounded w-auto mt-10 p-3 text-center bg-green-secondary">
                <a href="mailto:kontakt@amstart.net"
                className="font-bold text-white ">Schreib uns
                </a>
            </div>
        </div>
    </div>
    </Layout>
)}
