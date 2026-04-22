import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"

export const Preguntas = () => {
    const faqs = [
        {
            question: "¿Cuáles son las edades de ingreso?",
            answer: "Recibimos niños desde los 45 días hasta los 5 años, organizados en salas según su edad y etapa de desarrollo."
        },
        {
            question: "¿Qué horarios maneja el jardín?",
            answer: "Contamos con turnos mañana y tarde, con posibilidad de jornada completa. En la entrevista inicial te asesoramos sobre la opción que mejor se adapta a tu familia."
        },
        {
            question: "¿Cómo es el proceso de inscripción?",
            answer: "Comenzamos con una entrevista inicial donde la familia nos comparte los primeros datos significativos del niño. A partir de ahí coordinamos el período de adaptación de manera gradual y acompañada."
        },
        {
            question: "¿Cómo es el proceso de inscripción?",
            answer: "Comenzamos con una entrevista inicial donde la familia nos comparte los primeros datos significativos del niño. A partir de ahí coordinamos el período de adaptación de manera gradual y acompañada."
        },
        {
            question: "¿Cómo me entero de lo que pasa en el jardín día a día?",
            answer: "A través del cuaderno de comunicaciones que viaja diariamente con el niño, mails con presentaciones de proyectos, carteles en la entrada y reuniones generales donde también se entrega la carpeta con las producciones grafoplásticas."
        }
        ,
        {
            question: "¿Cómo sé cómo va mi hijo en su desarrollo?",
            answer: "Entregamos informes de seguimiento en las áreas intelectual, socioafectiva y psicomotriz. También realizamos entrevistas individuales, ya sea a pedido del jardín o de la familia, para aclarar dudas e intercambiar información."
        },
        {
            question: "¿Las familias pueden participar en actividades del jardín?",
            answer: "¡Sí! Organizamos talleres con abuelos, tíos, papás, mamás, hermanos y exalumnos, además de clases abiertas y el Expoarte, donde las familias pueden ver de cerca las producciones de sus hijos."
        }
    ]
    const [openIndex, setOpenIndex] = useState(null)

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }
    return (
        <>
            <section id="preguntas" className="min-h-screen text-center flex flex-col items-center justify-center gap-8 px-4 py-12 md:py-16">
                <div className="flex flex-col items-center justify-center gap-1">
                    <h2 className="text-4xl font-semibold">Preguntas Frecuentes</h2>
                    <div className="bg-primary h-1 w-28 rounded-full"></div>
                </div>
                <div className="flex flex-col items-center gap-3 w-full ">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-[#F3F3F3] md:w-2/5 w-full max-w-3xl m-2 rounded-2xl overflow-hidden cursor-pointer"
                            onClick={() => toggle(index)}
                        >
                            {/* Header / summary */}
                            <div className="flex items-center justify-between p-4">
                                <span className="text-lg md:text-2xl text-secondary text-left">{faq.question}</span>
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
