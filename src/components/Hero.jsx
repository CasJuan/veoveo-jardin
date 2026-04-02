import heroImg from "../img/Escuela-infantil-Veo-Veo_en-el-barrio-de-Almagro-fachada.png";

export const Hero = () => {
  return (
    <>
      <section
        className="h-screen text-center flex flex-col items-center justify-center gap-5 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
          <h1 className="text-5xl text-white">Jardin Veo-Veo</h1>
          <p className="text-lg text-white">Nuestro compromiso es con una educación activa, en donde los niños puedan descubrir por sí mismos, obtener respuestas a inquietudes y construir su conocimiento e inteligencia a través de la acción.</p>
      </section>
    </>
  );
};
