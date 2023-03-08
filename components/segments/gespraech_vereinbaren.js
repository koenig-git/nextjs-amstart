const paragraphStyle = "mb-4 mt-3 text-lg";

export default function Gespraech_Vereinbaren() {
    return (

    <div className="bg-green-primary p-12 lg:p-18 xl:p-24">
        <h2 className="text-center text-white mb-6 text-3xl font-extrabold">Vereinbare ein Gespräch:</h2>

        <div className="flex space-x-8 text-lg">
            <div className="w-1/2 flex flex-col justify-between space-y-6">
                <div className="bg-white flex flex-row items-center h-1/2">
                    <img src="/images/steps-terminauswahl.png" className="w-2/5"/>
                    <div className="p-10 w-3/5">
                        <h3 className="font-extrabold text-lg">Zeit</h3>
                        <p>Wähle eine Gesprächszeit.</p>
                    </div>
                </div>        
                <div className="bg-white flex flex-row items-center h-1/2">
                    <img src="/images/steps-gespraech.png" className="w-2/5"/>
                    <div className="p-10 w-3/5">
                        <h3 className="font-extrabold text-lg">Videocall</h3>
                        <p>Führe ein 1:1 Gespräch durch</p>
                    </div>
                </div>        
            </div>

            <div className="w-1/2 h-auto">
                <div className="bg-white h-full flex items-center justify-center relative">
                    <img src="images/meeting-background.png" className="object-fit"/>
                    <div className="rounded bg-green-secondary hover:bg-green-secondary-hover text-center p-4 max-w-[500px] w-2/3 absolute">
                        <a href="/" className="text-white">Hier Gespräch vereinbaren</a>
                    </div>
                </div>     
            </div>

        </div>
       

    </div>    
)}