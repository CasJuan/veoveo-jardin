import { ArrowRight } from "lucide-react";
import imgHero from "../img/veoveo.svg";

export const Hero = () => {
  return (
    <>
      <section className="h-screen text-center flex flex-row items-center justify-center gap-8 ">
        <div className=" flex flex-col items-start justify-center gap-8 h-3/6 ">
          <div className="bg-primary rounded-xl h-14 w-30 flex items-center justify-center">Desde 1990</div>
          <h1 className="text-7xl font-bold">Jardín Veo-Veo</h1>
          <p className="text-lg text-secondary text-start text-wrap">Un espacio diseñado para la curiosidad, donde cada niño descubre el mundo a su propio ritmo <br/>a través de la exploración y el juego consciente.</p>
          <div className="flex items-center justify-center flex-row gap-3 "> 
            <button className="bg-primary text-[#715E00] px-3 py-2 rounded-2xl cursor-pointer">Agendar Entrevista</button>
            <button className="bg-tertiary text-[#715E00] px-3 py-2 rounded-2xl cursor-pointer flex flex-row gap-2">Ver Propuesta <ArrowRight /> </button>
          </div>
        </div>
        <div className="bg-primary h-3/6 w-80 rounded-lg shadow-2xl hover:scale-105 transition-all duration-300 transform-fill ">
          <img src={imgHero} alt="Veo-Veo" className="w-full h-full object-fill" />
        </div>
      </section>
    </>
  );
};
