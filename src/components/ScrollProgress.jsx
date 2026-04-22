import { motion, useScroll, useSpring } from "motion/react"

export const ScrollProgress = () => {
    const { scrollYProgress } = useScroll()
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    })

    return (
        <div className="fixed top-[64px] left-0 right-0 h-1.5 bg-neutral/80 backdrop-blur-sm z-100 overflow-hidden">
            <motion.div
                className="h-full bg-primary origin-left w-full"
                style={{ scaleX }}
            />
            <div className="absolute top-0 left-0 w-full h-full flex justify-between pointer-events-none px-[1px]">
                {[...Array(5)].map((_, i) => (
                    <div key={i} className="h-full w-[2px] bg-white/40" />
                ))}
            </div>
        </div>
    )
}
