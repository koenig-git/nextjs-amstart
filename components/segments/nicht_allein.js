const paragraphStyle = "mb-4 mt-3 text-lg";

export default function Nicht_Allein() {
    return (

    <div className="p-12 lg:p-18 xl:p-24">
        <div className="flex flex-row justify-between space-x-10">
            <div className="w-1/2 flex flex-col justify-between">
                <h2 className="mb-3 text-3xl font-extrabold">Du bist nicht allein!</h2>
                <p className={paragraphStyle}>
                Jährlich erhalten über 17 000 Menschen in Deutschland die Diagnose Multiple Sklerose¹. Die meisten davon sind junge Erwachsene zwischen 20 und 40 Jahren².
                </p>
                <p className={paragraphStyle}>
                    Gerade am Anfang kann ein erstes Gespräch mit einer diagnoseerfahrenen Person in ähnlicher junger Lebenssituation helfen. Wir vereinfachen die Suche und stellen genau solche Gespräche her.
                </p>
                <p className={paragraphStyle}>
                    Hier kannst Du Dich 1:1 mit jungen Erwachsenen austauschen, die bereits Erfahrungen mit der Diagnose MS gemacht haben – selbst oder als Angehörige*r.
                </p>
                <p className={paragraphStyle}>
                    Im persönlichen und vertraulichen Gespräch schenken wir Dir unser offenes Ohr – ganz einfach, digital und 1:1.
                </p>                
                <p className={paragraphStyle}>
                    Wir sind mit Dir aMStart.
                </p>                    
                <div className="rounded bg-green-primary text-center p-4 max-w-[350px]">
                <a href="/" className="font-bold text-white">Jetzt Gespräch vereinbaren</a>
                </div>
            </div>

            <div className="w-1/2 flex flex-col justify-between">
                <div className="bg-white h-1/3 flex flex-row items-center">
                    <img src="/images/description-persoenlich.png" className="w-2/5"/>
                    <div className="p-10 w-3/5">
                        <h3 className="font-bold text-lg">Persönlich</h3>
                        <p>... 1:1 statt Stuhlkreis</p>
                    </div>
                </div>

                <div className="bg-white h-1/3 my-6 flex flex-row items-center">
                    <img src="/images/description-digital.png" className="w-2/5"/>
                    <div className="p-10 w-3/5">
                        <h3 className="font-bold text-lg">Digital</h3>
                        <p>… egal, wo Du gerade bist.</p>
                    </div>
                </div>

                <div className="bg-white h-1/3 flex flex-row items-center">
                    <img src="/images/description-unabhaengig.png" className="w-2/5"/>
                    <div className="p-10 w-3/5">
                        <h3 className="font-bold text-lg">Unabhängig</h3>
                        <p>… von Patient*innen für Patient*innen.</p>
                    </div>
                </div>                                
            </div>

        </div>
    </div>    
)}