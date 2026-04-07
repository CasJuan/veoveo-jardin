import { NavHashLink } from "react-router-hash-link";
import { Menu } from "lucide-react";
import imgLogo from "../img/veoveo.svg";
import { NavBarRespon } from "./NavBarRespon";
import { useState } from "react";

export const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="w-full top-0 left-0 flex flex-row justify-around items-center gap-2 bg-neutral fixed z-[100]">
        <NavHashLink smooth to="/#" className="cursor-pointer text-base" scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}> <h1 className="text-5xl m-2 p-2 flex flex-row items-center justify-center gap-2"> <img src={imgLogo} alt="Veo-Veo" className="w-10 h-10" /> Veo-Veo </h1> </NavHashLink>
        <ul className="hidden md:flex flex-row justify-center items-center gap-4">
          <NavHashLink smooth to="/#objetivos" className="cursor-pointer text-base" scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}><li className="cursor-pointer text-base">Objetivos</li></NavHashLink>
          <NavHashLink smooth to="/#comunicacion" className="cursor-pointer text-base" scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}><li className="cursor-pointer text-base">Nosotros</li></NavHashLink>
          <NavHashLink smooth to="/#preguntas" className="cursor-pointer text-base" scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}><li className="cursor-pointer text-base">Preguntas</li></NavHashLink>
          <NavHashLink smooth to="/#inscripcion" className="cursor-pointer text-base" scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}><li className="cursor-pointer text-base">Inscripcion</li></NavHashLink>
        </ul>
        <button className="hidden md:block bg-primary text-brown px-3 py-2 rounded-2xl cursor-pointer">Agendar Entrevista</button>
        <div className="md:hidden">
          <Menu
          onClick={() => setOpen(!open)}
          className="text-4xl" />
        </div>
      </div>
      <NavBarRespon open={open} setOpen={setOpen} />
    </>
  );
};
