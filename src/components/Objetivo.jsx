import { Palette, ImagePlus, Users, Gamepad2, Earth, Flower2  } from 'lucide-react'
import { motion } from "motion/react"
import { Card } from "./Card"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

export const Objetivo = () => {
  return (
    <section id="objetivos" className="min-h-screen text-center flex flex-col items-center justify-center gap-5 px-4 py-12 md:py-16">

      <motion.div
        className="flex flex-col items-center justify-center gap-1"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h1 className="text-4xl">Nuestros Objetivos</h1>
        <div className="bg-primary h-1 w-28 rounded-full"></div>
      </motion.div>

      <motion.div
        className="flex flex-row justify-center items-center flex-wrap gap-5 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.1 }}
      >
        <motion.div variants={fadeUp} transition={{ duration: 0.5, ease: "easeOut" }}>
          <Card icon={<Palette color="#705D00" />} title="Educacion Activa" desc="Los niños descubren por sí mismos, obtienen respuestas a sus inquietudes y construyen su conocimiento a través de la acción directa con el entorno." />
        </motion.div>
        <motion.div variants={fadeUp} transition={{ duration: 0.5, ease: "easeOut" }}>
          <Card icon={<Gamepad2 color="#705D00" />} title="El juego como aprendizaje" desc="El juego y los proyectos son los ejes de nuestra propuesta. A través de ellos, los niños relacionan lo nuevo con lo que ya saben, dándole sentido real a lo que aprenden." />
        </motion.div>
        <motion.div variants={fadeUp} transition={{ duration: 0.5, ease: "easeOut" }}>
          <Card icon={<ImagePlus color="#705D00" />} title="El error como oportunidad" desc="Primamos procesos sobre resultados. Los errores enriquecen el aprendizaje y la evaluación acompaña cada etapa del camino, no solo el resultado final." />
        </motion.div>
        <motion.div variants={fadeUp} transition={{ duration: 0.5, ease: "easeOut" }}>
          <Card icon={<Flower2 color="#705D00" />} title="Autonomía" desc="Estimulamos que los niños propongan, debatan, planifiquen, revisen y actúen con autonomía en todas las áreas: lengua, ciencias, artes, expresión corporal y más." />
        </motion.div>
        <motion.div variants={fadeUp} transition={{ duration: 0.5, ease: "easeOut" }}>
          <Card icon={<Earth color="#705D00" />} title="Diversidad como riqueza" desc="No buscamos una educación homogénea. La diversidad enriquece a la comunidad: cada niño integra sus intereses individuales en un proyecto colectivo." />
        </motion.div>
        <motion.div variants={fadeUp} transition={{ duration: 0.5, ease: "easeOut" }}>
          <Card icon={<Users color="#705D00" />} title="Docentes que acompañan" desc="Nuestros docentes organizan intereses, enriquecen perspectivas con preguntas oportunas y no anticipan respuestas ni descubrimientos. Son guías, no protagonistas." />
        </motion.div>
      </motion.div>
    </section>
  )
}
