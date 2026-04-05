import { Card } from "./Card"
import { BadgeCheck } from "lucide-react"
import ninos1 from "../img/ninos1.png"
import ninos2 from "../img/ninos2.png"
import ninos3 from "../img/ninos3.png"
import ninos4 from "../img/ninos4.png"

export const Comunicaciones = () => {
  return (
    <>
        <section className="h-screen text-center flex flex-row items-center justify-center gap-5">
          <div className="flex flex-col items-start justify-center gap-4 w-1/3 ml-5">
            <h2 className="text-2xl font-bold">Nuestro Jardín es su Segundo Hogar</h2>
            <p className="text-secondary text-lg ">Desde 1990, hemos cultivado un espacio donde lacalidez y la excelencia educativa se encuentran. <br/> Nuestras instalaciones están diseñadas para brindar seguridad y estímulo en cada rincón.</p>
            <div className="flex flex-col items-start justify-center gap-2">
              <div className="flex flex-row items-center justify-center gap-2">
                <BadgeCheck color="#FDD835"/>
                <p>Grupos reducidos para atención personalizada</p>
              </div>
              <div className="flex flex-row items-center justify-center gap-2">
                <BadgeCheck color="#FDD835" />
                <p>Equipo docente altamente calificado</p>
              </div>
              <div className="flex flex-row items-center justify-center gap-2">
                <BadgeCheck color="#FDD835"/>
                <p>Seguimiento psicopedagógico permanente</p>
              </div>
            </div>
          </div>
          <div className="grid w-2/3 grid-cols-4 grid-rows-2 gap-3 md:gap-4 aspect-5/4 max-h-[min(72vh,520px)] mr-5">
            <img
              src={ninos1}
              alt="Niños en el jardín"
              className="col-span-2 row-span-2 h-full min-h-0 w-full rounded-xl object-cover shadow-2xl"
            />
            <img
              src={ninos2}
              alt="Actividades en el jardín"
              className="col-start-3 row-start-1 h-full min-h-0 w-full rounded-xl object-cover shadow-2xl"
            />
            <img
              src={ninos3}
              alt="Espacios del jardín"
              className="col-start-4 row-start-1 h-full min-h-0 w-full rounded-xl object-cover shadow-2xl"
            />
            <img
              src={ninos4}
              alt="Comunidad educativa"
              className="col-span-2 col-start-3 row-start-2 h-full min-h-0 w-full rounded-xl object-cover shadow-2xl"
            />
          </div>
        </section>
    </>
  )
}
