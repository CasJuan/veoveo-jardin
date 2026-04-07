import { ArrowRight } from "lucide-react";
import * as motion from "motion/react-client"
import imgHero from "../img/veoveo.svg";

// Variantes reutilizables
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

const fadeLeft = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0 }
}

export const Hero = () => {
  return (
    <section className="h-screen text-center flex flex-col md:flex-row items-center justify-center gap-8">
      <motion.div
        className="flex flex-col items-start justify-center gap-8 h-3/6 w-3/6"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.15 }}
      >
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-primary text-brown text-sm rounded-xl h-auto w-30 flex items-center justify-center"
        >
          Desde 1990
        </motion.div>

        {/* Título */}
        <motion.h1
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-7xl font-bold"
        >
          Jardín Veo-Veo
        </motion.h1>

        {/* Párrafo */}
        <motion.p
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-lg text-secondary text-start text-wrap"
        >
          Un espacio diseñado para la curiosidad, donde cada niño descubre el mundo a su propio ritmo <br />
          a través de la exploración y el juego consciente.
        </motion.p>

        {/* Botones */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-center justify-center flex-row gap-3"
        >
          <button className="bg-primary text-brown px-3 py-2 rounded-2xl cursor-pointer">
            Agendar Entrevista
          </button>
          <button className="bg-tertiary text-black px-3 py-2 rounded-2xl cursor-pointer flex flex-row gap-2">
            Ver Propuesta <ArrowRight />
          </button>
        </motion.div>
      </motion.div>

      {/* Imagen — entra desde la derecha */}
      <motion.div
        className="bg-primary h-3/6 w-80 rounded-lg shadow-2xl"
        variants={fadeLeft}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
        whileHover={{ scale: 1.1, rotate: 1 }}
        whileTap={{ scale: 0.9 }}
      >
        <img src={imgHero} alt="Veo-Veo" className="w-full h-full object-fill" />
      </motion.div>

    </section>
  )
}
