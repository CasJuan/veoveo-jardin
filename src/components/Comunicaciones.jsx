import { useState } from "react"
import { BadgeCheck, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import ninos1 from "../img/ninos1.png"
import ninos2 from "../img/ninos2.png"
import ninos3 from "../img/ninos3.png"
import ninos4 from "../img/ninos4.png"
import ninos5 from "../img/ninos5.png"
import ninos6 from "../img/ninos6.png"
import ninos7 from "../img/ninos7.png"
import ninos8 from "../img/ninos8.png"
import ninos9 from "../img/ninos9.png"
import jardin1 from "../img/jardin1.png"


export const Comunicaciones = () => {
  const tarjetas = [
    [jardin1, ninos1, ninos2, ninos3],
    [ninos4, ninos5, ninos6, ninos7],
    [ninos8, ninos9, jardin1, ninos2],
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(1) // 1 = siguiente, -1 = anterior

  const handleNext = () => {
    setDirection(1)
    setActiveIndex((current) => (current + 1) % tarjetas.length)
  }

  const handlePrev = () => {
    setDirection(-1)
    setActiveIndex((current) => (current - 1 + tarjetas.length) % tarjetas.length)
  }

  const variants = {
    enter: (dir) => ({ opacity: 0, x: dir > 0 ? 80 : -80 }),
    visible: { opacity: 1, x: 0 },
    exit: (dir) => ({ opacity: 0, x: dir > 0 ? -80 : 80 }),
  }

  return (
    <section id="comunicacion" className="min-h-screen text-center flex flex-col md:flex-row items-center justify-center gap-8 px-4 py-12 md:py-16">

      {/* Texto izquierda */}
      <motion.div
        className="flex flex-col items-center md:items-start justify-center gap-4 md:w-1/3 w-full"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-2xl font-bold">Nuestro Jardín es su Segundo Hogar</h2>
        <p className="text-secondary text-lg text-start">
          Desde 1990, hemos cultivado un espacio donde la calidez y la excelencia educativa se encuentran.
          Nuestras instalaciones están diseñadas para brindar seguridad y estímulo en cada rincón.
        </p>
        <div className="flex flex-col items-start justify-center gap-3">
          {[
            "Grupos reducidos para atención personalizada",
            "Equipo docente altamente calificado",
            "Seguimiento psicopedagógico permanente",
          ].map((item) => (
            <motion.div
              key={item}
              className="flex flex-row items-center gap-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <BadgeCheck color="#FDD835" />
              <p className="text-start text-sm">{item}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <div className="md:w-2/5 w-full max-w-xl flex flex-col gap-4 items-center">
        <div className="rounded-4xl bg-gray-100 shadow-2xl overflow-hidden w-full relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="grid grid-cols-2 gap-3 h-[min(72vh,520px)] p-3"
            >
              {tarjetas[activeIndex].map((src, imageIndex) => (
                <motion.div
                  key={imageIndex}
                  className="overflow-hidden rounded-xl bg-slate-100 shadow-xl"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: imageIndex * 0.07 }}
                >
                  <img
                    src={src}
                    alt={`Imagen del jardín ${activeIndex + 1}-${imageIndex + 1}`}
                    className="h-full w-full min-h-48 object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex flex-row items-center gap-4">
          <motion.button
            onClick={handlePrev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="rounded-full bg-gray-100 border border-gray-200 p-3 cursor-pointer"
          >
            <ChevronLeft size={18} color="rgb(0,86,164)" />
          </motion.button>
          <div className="flex flex-row gap-2">
            {tarjetas.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => {
                  setDirection(i > activeIndex ? 1 : -1)
                  setActiveIndex(i)
                }}
                animate={{
                  width: i === activeIndex ? 24 : 8,
                  backgroundColor: i === activeIndex ? "rgb(0,86,164)" : "rgb(209,213,219)"
                }}
                transition={{ duration: 0.3 }}
                className="h-2 rounded-full cursor-pointer border-none"
              />
            ))}
          </div>
          <motion.button
            onClick={handleNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="rounded-full bg-primary p-3 cursor-pointer border-none"
          >
            <ChevronRight size={18} color="white" />
          </motion.button>

        </div>
      </div>

    </section>
  )
}
