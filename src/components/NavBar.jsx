import imgLogo from "../img/veoveo.svg";

export const NavBar = () => {
  return (
    <>
        <div className="w-full flex flex-row justify-around items-center gap-2 bg-neutral fixed">
            <h1 className="text-5xl m-2 p-2 flex flex-row items-center justify-center gap-2"> <img src={imgLogo} alt="Veo-Veo" className="w-10 h-10" /> Veo-Veo </h1>
            <ul className="flex flex-row justify-center items-center gap-4">
                <li className="cursor-pointer">Objetivos</li>
                <li className="cursor-pointer">Comunicación</li>
                <li className="cursor-pointer">Fotogaleria</li>
                <li className="cursor-pointer">Actividades</li>
                <li className="cursor-pointer">Contacto</li>
            </ul>
            <button className="bg-primary text-brown px-3 py-2 rounded-2xl cursor-pointer">Agendar Entrevista</button>
        </div>
    </>
  )
}
