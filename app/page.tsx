
import AnimeCard from "./components/AnimeCard";
export default async function Home() {
  return (
    <main className="flex flex-col lg:flex-row overflow-x-scroll lg:w-min lg:m-auto">
      <AnimeCard day="es/schedule/monday" dia="Lunes"/>
      <AnimeCard day="es/schedule/tuesday" dia="Martes"/>
      <AnimeCard day="es/schedule/wednesday" dia="Miercoles"/>
      <AnimeCard day="es/schedule/thursday" dia="Jueves"/>
      <AnimeCard day="es/schedule/friday" dia="Viernes"/>
      <AnimeCard day="es/schedule/saturday" dia="Sabado"/>
      <AnimeCard day="es/schedule/sunday" dia="Domingo"/>
    </main>
  );
}
