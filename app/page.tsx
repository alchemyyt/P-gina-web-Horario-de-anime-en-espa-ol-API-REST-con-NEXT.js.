import AnimeCard from "./components/AnimeCard";
export default async function Home() {
  return (
    <main className="flex flex-col max-w-full ">
      <h1 className="font-bold text-2xl mt-6 text-center">
        Horario de anime en español
      </h1>
      <p className="text-center mx-4">
        ¡No te pierdas ni un solo episodio de tus animes favoritos! 😎 En{" "}
        <strong>horario-de-anime-en-español.lat</strong> puedes consultar
        fácilmente qué día y en qué plataforma se estrenan los animes en{" "}
        <strong>español latino</strong> de la temporada 📅. ¡Todo lo que
        necesitas saber para organizar tu semana de anime! 🖥️🎥 Con nuestra
        guía, estarás al día con los últimos lanzamientos y no perderás ni un
        minuto de acción 🔥. ¿Prefieres usar tu teléfono? ¡No hay problema! 📱
        Descarga nuestra app para <strong>Android</strong> y consulta el horario
        de tus animes desde donde estés. ¡Comienza ahora y disfruta de tu
        maratón de animes! ⏳ (¡Es totalmente gratis! 🎉)
      </p>

      <div className="lg:flex lg:flex-row overflow-x-scroll  lg:m-auto lg:w-full ">
        <AnimeCard endPoint="es/schedule/monday" title="Lunes" />
        <AnimeCard endPoint="es/schedule/tuesday" title="Martes" />
        <AnimeCard endPoint="es/schedule/wednesday" title="Miercoles" />
        <AnimeCard endPoint="es/schedule/thursday" title="Jueves" />
        <AnimeCard endPoint="es/schedule/friday" title="Viernes" />
        <AnimeCard endPoint="es/schedule/saturday" title="Sabado" />
        <AnimeCard endPoint="es/schedule/sunday" title="Domingo" />
      </div>
      <p className="text-center m-4">
        ¡Gracias por visitar <strong>horario-de-anime-en-español.lat</strong>!
        😊 Esperamos que encuentres toda la información que necesitas para no
        perderte ni un solo estreno de tus animes favoritos. 🎬 Si tienes alguna
        pregunta o sugerencia, no dudes en <strong>contactarnos</strong>. ¡Nos
        vemos en el próximo episodio! 😄👋
      </p>
    </main>
  );
}
