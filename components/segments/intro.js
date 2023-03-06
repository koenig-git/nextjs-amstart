import Segment from "../segment";

export default function Intro() {
    return (

    <div className="p-12 lg:p-18 xl:p-24 bg-white">
        <div className="flex flex-row justify-between">
            <div className="w-1/2">
                <img src="images/intro-illu.png" className="max-h-[380px]"/>
            </div>
            <div className="w-1/2 py-4 flex flex-col justify-between">
                <h1 className="text-[56px] font-extrabold">Wir sind mit Dir aMStart.</h1>
                <p className="mb-8 mt-3 text-lg">Tausch Dich hier 1:1 mit jungen Erwachsenen aus, die Erfahrungen mit der Diagnose Multiple Sklerose gemacht haben.&nbsp;
                <a href="/" className="font-bold underline text-green-secondary">Erfahre mehr...</a>
                </p>
                <div className="rounded bg-green-primary text-center p-4 max-w-[350px]">
                <a href="/" className="font-bold text-white">Jetzt Gespräch vereinbaren</a>
                </div>
            </div>
        </div>
    </div>    
)}