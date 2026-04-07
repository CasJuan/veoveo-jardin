import { Palette, Heart, ImagePlus, HandHeart, Users, Milestone } from 'lucide-react'
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
          <Card icon={<Palette color="#705D00" />} title="Educacion Activa" desc="Aprendizaje basado en la curiosidad y la experimentación directa con el entorno." />
        </motion.div>
        <motion.div variants={fadeUp} transition={{ duration: 0.5, ease: "easeOut" }}>
          <Card icon={<Heart color="#705D00" />} title="Inteligencia Emocional" desc="Acompañamos el desarrollo socio-afectivo con empatía y respeto por cada proceso." />
        </motion.div>
        <motion.div variants={fadeUp} transition={{ duration: 0.5, ease: "easeOut" }}>
          <Card icon={<ImagePlus color="#705D00" />} title="Espacios Creativos" desc="Ambientes preparados para estimular la imaginación y la libre expresión." />
        </motion.div>
        <motion.div variants={fadeUp} transition={{ duration: 0.5, ease: "easeOut" }}>
          <Card icon={<HandHeart color="#705D00" />} title="Comunidad" desc="Talleres con participación de familias y miembros de la comunidad." />
        </motion.div>
        <motion.div variants={fadeUp} transition={{ duration: 0.5, ease: "easeOut" }}>
          <Card icon={<Users color="#705D00" />} title="Reuniones" desc="Encuentros de padres y reuniones generales para compartir avances y metodologías." />
        </motion.div>
        <motion.div variants={fadeUp} transition={{ duration: 0.5, ease: "easeOut" }}>
          <Card icon={<Milestone color="#705D00" />} title="Seguimiento" desc="Informes del desarrollo intelectual, social y psicomotor del niño." />
        </motion.div>
      </motion.div>
    </section>
  )
}
