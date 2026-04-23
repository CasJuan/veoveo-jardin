import { NavHashLink } from "react-router-hash-link";

import { Globe, CircleFadingPlus, Map, Phone, Mail } from "lucide-react"
import instagram from "../img/instagram-svgrepo-com.svg";
import whatsapp from "../img/whatsapp-svgrepo-com.svg";

export const Footer = () => {
  return (
    <>
      <footer className="flex flex-col md:flex-row items-center justify-between gap-8 mb-7">

        <div className="flex flex-col gap-4 items-center justify-center md:w-1/3 w-full ml-5">
          <h3 className="text-lg font-semibold">Jardín Veo Veo</h3>
          <p className="text-sm text-[#71717A]">Desde 1990 brindando una educación de calidad basada en el amor, el respeto y la creatividad.</p>
          <ul className=" flex flex-row items-center justify-center gap-5">
            <li className="bg-[#EEEEEE] rounded-full h-10 w-10 flex items-center justify-center"><a href="https://www.instagram.com/veoveo.jardin/" target="_blank"><img className="w-5 h-5 " src={instagram} /></a></li>
            <li className="bg-[#EEEEEE] rounded-full h-10 w-10 flex items-center justify-center"><a href="https:/wa.me/1156093612?text=Hola, buenos días. Me gustaría coordinar una reunión presencial para conocer las instalaciones del jardín. Muchas gracias." target="_blank"><img className="w-5 h-5 " src={whatsapp} /></a></li>
          </ul>
        </div>

        <div className="hidden md:block bg-gray-100 h-24 w-1 rounded-full"></div>

        <div className="flex flex-col gap-4 items-center justify-center  w-1/3">
          <h3 className="text-lg font-semibold">Contacto</h3>
          <ul className=" flex flex-col items-start justify-center gap-2">
            <li className=" gap-5 flex items-center justify-center text-sm text-[#71717A]"> <Map color="#705D00" /> <a href="https://www.google.com/maps/place/Escuela+Infantil+Veo+Veo/@-34.6031663,-58.4339136,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcca6fb69da86f:0x7a517e23e8184e70!8m2!3d-34.6031663!4d-58.4313387!16s%2Fg%2F1tl_mxh4?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D" target="_blank">Panamá 942</a></li>
            <li className=" gap-5 flex items-center justify-center text-sm text-[#71717A]"><Phone color="#705D00" />4866-2050</li>
            <li className=" gap-5 flex items-center justify-center text-sm text-[#71717A]"><Mail color="#705D00" /> <a href="mailto:veoveojardin@gmail.com">veoveojardin@gmail.com</a></li>
          </ul>
        </div>

        <div className="hidden md:block bg-gray-100 h-24 w-1 rounded-full"></div>

        <div className="flex flex-col gap-4 items-center justify-center w-1/3">
          <h3 className="text-lg font-semibold">Links</h3>
          <ul className="flex flex-col items-center justify-center">
            <NavHashLink smooth to="/#objetivos" className="cursor-pointer text-base" activeStyle={{ color: 'red' }} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}><li className="text-[#71717A] text-sm cursor-pointer">Objetivos</li></NavHashLink>
            <NavHashLink smooth to="/#comunicacion" className="cursor-pointer text-base" activeStyle={{ color: 'red' }} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}><li className="text-[#71717A] text-sm cursor-pointer">Comunicacion</li></NavHashLink>
            <NavHashLink smooth to="/#preguntas" className="cursor-pointer text-base" activeStyle={{ color: 'red' }} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}><li className="text-[#71717A] text-sm cursor-pointer">Fotogaleria</li></NavHashLink>
            <NavHashLink smooth to="/#inscripcion" className="cursor-pointer text-base" activeStyle={{ color: 'red' }} scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}><li className="text-[#71717A] text-sm cursor-pointer">Actividade</li></NavHashLink>
          </ul>
        </div>

      </footer>
    </>
  )
}
