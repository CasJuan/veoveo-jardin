import { Card } from "./Card"

export const Comunicaciones = () => {
  return (
    <>
        <section className="h-screen text-center flex flex-col items-center justify-center gap-5 bg-cover bg-center bg-no-repeat">
            <h3>Comunicación</h3>
            <p>El contacto auténtico y real entre el jardín y la familia, otorga al niño confianza, familiaridad y seguridad. Para garantizar esta interacción se proponen vías de información y participación que proporcionan un intercambio sobre las vivencias de los niños y los acontecimientos cotidianos.</p>
            <div>
                <div>
                    <Card icon="💬" title="TITULO PROP" desc="MENSAJEEE" />
                </div>
            </div>
        </section>
    </>
  )
}
