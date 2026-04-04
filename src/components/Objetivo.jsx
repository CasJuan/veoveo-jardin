import { Card } from "./Card"

export const Objetivo = () => {
    return (
        <>
            <section className="h-1/4 text-center flex flex-col items-center justify-center gap-5">
                <h1 className="text-4xl underline decoration-primary">Nuestros Pilares</h1>
                <div className="flex flex-row justify-center items-center gap-5">
                    <Card icon="💬" title="Educacion Activa" desc="Aprendizaje basado en la curiosidad y la experimentación directa con el entorno." />
                    <Card icon="💬" title="Inteligencia Emocional" desc="Acompañamos el desarrollo socio-afectivo con empatía y respeto por cada proceso." />
                    <Card icon="💬" title="Espacios Creativos" desc="Ambientes preparados para estimular la imaginación y la libre expresión." />
                </div>
            </section>
        </>
    )
}
