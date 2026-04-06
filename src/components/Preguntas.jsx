import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"

export const Preguntas = () => {
    const faqs = [
  {
    question: "¿Cuáles son las edades de ingreso?",
    answer: "Recibimos niños y niñas desde los 45 días hasta los 5 años cumplidos, divididos en salas por edades: Lactantes, Deambuladores, Sala de 2, 3, 4 y 5 años."
  },
  {
    question: "¿Qué horarios maneja el jardín?",
    answer: "Contamos con turno mañana (8:00 a 12:00), turno tarde (13:00 a 17:00) y jornada extendida opcional para las familias que lo requieran."
  },
  {
    question: "¿Cómo es el proceso de inscripción?",
    answer: "El primer paso es agendar una entrevista pedagógica para conocer nuestro proyecto. Luego se completa la reserva de vacante con la documentación requerida."
  },
  {
    question: "¿Cuentan con servicio de comedor?",
    answer: "Sí, disponemos de cocina propia con menús supervisados por nutricionistas, adaptados a las necesidades de cada etapa de crecimiento."
  }
]
const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }
    return (
        <>
            <section id="preguntas" className="h-screen text-center flex flex-col items-center justify-center gap-8 ">
                <div className="flex flex-col items-center justify-center gap-1">
                    <h2 className="text-4xl font-semibold">Preguntas Frecuentes</h2>
                    <div className="bg-primary h-1 w-28 rounded-full"></div>
                </div>
                <div className="flex flex-col items-center gap-3 w-full">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-[#F3F3F3] w-2/5 rounded-2xl overflow-hidden cursor-pointer"
                            onClick={() => toggle(index)}
                        >
                            {/* Header / summary */}
                            <div className="flex items-center justify-between p-4">
                                <span className="text-2xl text-secondary">{faq.question}</span>
                                <motion.span
                                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-secondary text-xl ml-2 shrink-0"
                                >
                                    ▼
                                </motion.span>
                            </div>
                            <AnimatePresence initial={false}>
                                {openIndex === index && (
                                    <motion.div
                                        key="content"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.35, ease: "easeInOut" }}
                                        style={{ overflow: "hidden" }}
                                    >
                                        <p className="text-brown text-lg px-4 pb-4">{faq.answer}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}
