import { Globe, CircleFadingPlus, Map, Phone, Mail } from "lucide-react"

export const Footer = () => {
  return (
    <>
      <footer className="flex flex-row items-center justify-between gap-8 mb-7">

        <div className="flex flex-col gap-4 items-center justify-center w-1/3 ml-5">
          <h3 className="text-lg font-semibold">Jardín Veo Veo</h3>
          <p className="text-sm text-[#71717A]">Desde 1990 brindando una educación de calidad basada en el amor, el respeto y la creatividad.</p>
          <ul className=" flex flex-row items-center justify-center gap-5">
            <li className="bg-[#EEEEEE] rounded-full h-10 w-10 flex items-center justify-center"><Globe color="#52525B" /></li>
            <li className="bg-[#EEEEEE] rounded-full h-10 w-10 flex items-center justify-center"><CircleFadingPlus color="#52525B" /></li>
          </ul>
        </div>

        <div className="bg-gray-100 h-24 w-1 rounded-full"></div>

        <div className="flex flex-col gap-4 items-center justify-center  w-1/3">
          <h3 className="text-lg font-semibold">Contacto</h3>
          <ul className=" flex flex-col items-start justify-center gap-2">
            <li className=" gap-5 flex items-center justify-center text-sm text-[#71717A]"><Map color="#705D00" />Av. del Sol 1234, Ciudad</li>
            <li className=" gap-5 flex items-center justify-center text-sm text-[#71717A]"><Phone color="#705D00" />+54 11 4444-5555</li>
            <li className=" gap-5 flex items-center justify-center text-sm text-[#71717A]"><Mail color="#705D00" />hola@jardinveoveo.edu</li>
          </ul>
        </div>

        <div className="bg-gray-100 h-24 w-1 rounded-full"></div>

        <div className="flex flex-col gap-4 items-center justify-center w-1/3">
          <h3 className="text-lg font-semibold">Links</h3>
          <ul className="flex flex-col items-center justify-center">
            <li className="text-[#71717A] text-base cursor-pointer">Objetivos</li>
            <li className="text-[#71717A] text-base cursor-pointer">Comunicacion</li>
            <li className="text-[#71717A] text-base cursor-pointer">Fotogaleria</li>
            <li className="text-[#71717A] text-base cursor-pointer">Actividade</li>
          </ul>
        </div>

      </footer>
    </>
  )
}
