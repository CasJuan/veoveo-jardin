import { Card } from "./Card"
import { BadgeCheck } from "lucide-react"

export const Comunicaciones = () => {
  return (
    <>
        <section className="h-screen text-center flex flex-col items-center justify-center gap-5">

          <div className="flex flex-col items-start justify-center gap-4">
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

        </section>
    </>
  )
}
