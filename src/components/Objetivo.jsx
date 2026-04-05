import { Card } from "./Card"
// Example: use an icon from a library already in your dependencies (lucide-react is installed)
import { Palette,Heart,ImagePlus } from 'lucide-react'

export const Objetivo = () => {
    return (
        <>
            <section className="h-1/4 text-center flex flex-col items-center justify-center gap-5">
            <div >
                <h1 className="text-4xl">Nuestros Pilares</h1>
                <div className="bg-primary h-1 w-28 rounded-full"></div>
            </div>
                <div className="flex flex-row justify-center items-center gap-5">
                    <Card icon={<Palette color="#705D00"/>} title="Educacion Activa" desc="Aprendizaje basado en la curiosidad y la experimentación directa con el entorno." />
                    <Card icon={<Heart color="#705D00"/>} title="Inteligencia Emocional" desc="Acompañamos el desarrollo socio-afectivo con empatía y respeto por cada proceso." />
                    <Card icon={<ImagePlus color="#705D00" />} title="Espacios Creativos" desc="Ambientes preparados para estimular la imaginación y la libre expresión." />
                </div>
            </section>
        </>
    )
}
