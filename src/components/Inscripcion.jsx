import { motion } from "motion/react"
import jardin1 from "../img/jardin1.png"
import jardin2 from "../img/jardin2.png"
import jardin3 from "../img/jardin3.png"
import jardin4 from "../img/jardin4.png"

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
                className="relative min-h-[78vh] md:min-h-screen flex items-center justify-center px-4 py-10 md:py-20 overflow-hidden"
            >
                <img
                    src={jardin1}
                    className="pointer-events-none absolute top-14 left-4 h-20 w-20 sm:h-24 sm:w-24 md:top-[12%] md:left-4 lg:left-[18%] md:h-28 md:w-28 lg:h-40 lg:w-40 rounded-2xl object-cover shadow-xl opacity-70 md:opacity-80 z-0 -rotate-6"
                />
                <img
                    src={jardin2}
                    className="pointer-events-none absolute top-14 right-4 h-20 w-20 sm:h-24 sm:w-24 md:top-[14%] md:right-4 lg:right-[18%] md:h-24 md:w-24 lg:h-36 lg:w-36 rounded-2xl object-cover shadow-xl opacity-70 md:opacity-90 z-0 rotate-6"
                />
                <img
                    src={jardin3}
                    className="pointer-events-none absolute bottom-14 left-4 h-20 w-20 sm:h-24 sm:w-24 md:bottom-[12%] md:left-4 lg:left-[14%] md:h-24 md:w-24 lg:h-36 lg:w-36 rounded-2xl object-cover shadow-xl opacity-70 md:opacity-90 z-0 rotate-6"
                />

                <img
                    src={jardin4}
                    className="pointer-events-none absolute bottom-14 right-4 h-20 w-20 sm:h-24 sm:w-24 md:bottom-[10%] md:right-4 lg:right-[16%] md:h-28 md:w-28 lg:h-44 lg:w-44 rounded-2xl object-cover shadow-xl opacity-70 md:opacity-90 z-0 -rotate-6"
                />
                <div className="relative z-10 bg-linear-to-br from-primary to-[#FFB300] rounded-2xl min-h-[340px] md:min-h-[420px] w-full max-w-3xl flex flex-col items-center justify-center gap-5 shadow-2xl p-6 md:p-10">
                    <h2 className="text-4xl md:text-6xl text-brown font-semibold text-center leading-tight">
                        ¿Querés conocer nuestra <br /> casa de aprendizaje?
                    </h2>
                    <p className="text-lg md:text-lg text-brown text-center max-w-2xl">
                        Inscribí a tu hijo en el ciclo lectivo 2024. Quedan pocas vacantes disponibles para las salas de 2 y 3 años.
                    </p>
                    <button className="bg-brown text-neutral rounded-2xl w-auto h-11 px-5 m-3 text-base cursor-pointer flex items-center justify-center">
                        Inscribite ahora
                    </button>
                </div>
            </motion.div>
        </div>
    )
}