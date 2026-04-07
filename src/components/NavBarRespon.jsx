import { AnimatePresence, motion } from "motion/react";
import { NavHashLink } from "react-router-hash-link";



export const NavBarRespon = ({ open, setOpen }) => {
    
    const animation = {
        initial: { opacity: 0, y: -100 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -100 },
        transition: { duration: 0.3 },
    };



    return (
        <AnimatePresence mode="wait">
            {
                open && (
                    <motion.div {...animation} className="fixed top-0 left-0 w-full h-dvh z-[90] pt-24 px-4">
                        <div className="text-xl font-semibold uppercase bg-primary text-white py-6 rounded-3xl">
                            <ul className="flex flex-col justify-center items-center gap-10">
                                <NavHashLink onClick={() => setOpen(false)} smooth to="/#objetivos" className="cursor-pointer text-base" scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}><li className="cursor-pointer text-base">Objetivos</li></NavHashLink>
                                <NavHashLink onClick={() => setOpen(false)} smooth to="/#comunicacion" className="cursor-pointer text-base" scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}><li className="cursor-pointer text-base">Nosotros</li></NavHashLink>
                                <NavHashLink onClick={() => setOpen(false)} smooth to="/#preguntas" className="cursor-pointer text-base" scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}><li className="cursor-pointer text-base">Preguntas</li></NavHashLink>
                                <NavHashLink onClick={() => setOpen(false)} smooth to="/#inscripcion" className="cursor-pointer text-base" scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: 'start' })}><li className="cursor-pointer text-base">Inscripcion</li></NavHashLink>
                            </ul>
                        </div>
                    </motion.div>
                )
            }
        </AnimatePresence>
    )
}
