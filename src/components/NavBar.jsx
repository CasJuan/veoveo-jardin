import { NavHashLink } from "react-router-hash-link";
import imgLogo from "../img/veoveo.svg";

export const NavBar = () => {
  return (
    <>
      <div className="w-full flex flex-row justify-around items-center gap-2 bg-neutral fixed">
        <NavHashLink smooth to="/#" className="cursor-pointer text-base" activeStyle={{ color: 'red' }} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}> <h1 className="text-5xl m-2 p-2 flex flex-row items-center justify-center gap-2"> <img src={imgLogo} alt="Veo-Veo" className="w-10 h-10" /> Veo-Veo </h1> </NavHashLink>
        <ul className="flex flex-row justify-center items-center gap-4">
          <NavHashLink smooth to="/#objetivos" className="cursor-pointer text-base" activeStyle={{ color: 'red' }} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}><li className="cursor-pointer text-base">Objetivos</li></NavHashLink>
          <NavHashLink smooth to="/#comunicacion" className="cursor-pointer text-base" activeStyle={{ color: 'red' }} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}><li className="cursor-pointer text-base">Nosotros</li></NavHashLink>
          <NavHashLink smooth to="/#preguntas" className="cursor-pointer text-base" activeStyle={{ color: 'red' }} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}><li className="cursor-pointer text-base">Preguntas</li></NavHashLink>
          <NavHashLink smooth to="/#inscripcion" className="cursor-pointer text-base" activeStyle={{ color: 'red' }} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}><li className="cursor-pointer text-base">Inscripcion</li></NavHashLink>
        </ul>
        <button className="bg-primary text-black px-3 py-2 rounded-2xl cursor-pointer">Agendar Entrevista</button>
      </div>
    </>
  )
}
