import { NavHashLink } from "react-router-hash-link";
import { Menu } from "lucide-react";
import imgLogo from "../img/veoveo.svg";
import { NavBarRespon } from "./NavBarRespon";
import { useState } from "react";

export const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="w-full top-0 left-0 bg-neutral fixed z-100 h-16">
        <div className="w-full max-w-6xl mx-auto flex flex-row items-center justify-between px-4 md:px-6 py-2">
          <NavHashLink smooth to="/#" className="cursor-pointer" scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
            <h1 className="text-3xl md:text-5xl m-0 p-0 flex flex-row items-center justify-center gap-2">
              <img src={imgLogo} alt="Veo-Veo" className="w-8 h-8 md:w-10 md:h-10" /> Veo-Veo
            </h1>
          </NavHashLink>
          <ul className="hidden md:flex flex-row justify-center items-center gap-6">
            <NavHashLink smooth to="/#objetivos" className="cursor-pointer text-base" scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}><li className="cursor-pointer text-base">Objetivos</li></NavHashLink>
            <NavHashLink smooth to="/#comunicacion" className="cursor-pointer text-base" scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}><li className="cursor-pointer text-base">Nosotros</li></NavHashLink>
            <NavHashLink smooth to="/#preguntas" className="cursor-pointer text-base" scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}><li className="cursor-pointer text-base">Preguntas</li></NavHashLink>
            <NavHashLink smooth to="/#inscripcion" className="cursor-pointer text-base" scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}><li className="cursor-pointer text-base">Inscripcion</li></NavHashLink>
          </ul>
          <button className="hidden md:block bg-primary text-brown px-3 py-2 rounded-2xl cursor-pointer">Agendar Entrevista</button>
          <div className="md:hidden">
            <Menu
              onClick={() => setOpen(!open)}
              className="text-4xl"
            />
          </div>
        </div>
      </div>
      <NavBarRespon open={open} setOpen={setOpen} />
    </>
  );
};
