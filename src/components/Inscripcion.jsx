import { motion } from "motion/react"

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
}

export const Inscripcion = () => {
    return (
        <div id="inscripcion">
            <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="h-screen text-center flex flex-col items-center justify-center gap-8 "
            >
            <div className="bg-linear-to-br from-primary to-[#FFB300] rounded-2xl h-1/2 w-3/4 flex flex-col items-center justify-center gap-5 shadow-2xl">
                <h2 className="text-6xl text-brown font-semibold ">¿Querés conocer nuestra casa de aprendizaje?</h2>
                <p className="text-lg text-brown">Inscribí a tu hijo en el ciclo lectivo 2024. Quedan pocas vacantes disponibles para las salas de 2 y 3 años.</p>
                <button className="bg-brown text-neutral rounded-2xl w-auto h-10 p-3 m-3 text-sm cursor-pointer flex flex-col items-center justify-center">Inscribi a tu hijo ahora</button>
            </div>
        </motion.div>
        </div>
    )
}