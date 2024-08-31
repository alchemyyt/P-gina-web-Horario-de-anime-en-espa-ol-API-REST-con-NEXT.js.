
import AnimeCard from "./components/AnimeCard";
export default async function Home() {
  return (
    <main className="flex flex-col lg:flex-row lg:max-w-full ">
      <AnimeCard day="es/schedule/wednesday" dia="Miercoles"/>
      <AnimeCard day="es/schedule/wednesday" dia="Miercoles"/>
      <AnimeCard day="es/schedule/wednesday" dia="Miercoles"/>
      <AnimeCard day="es/schedule/wednesday" dia="Miercoles"/>
      <AnimeCard day="es/schedule/wednesday" dia="Miercoles"/>
      <AnimeCard day="es/schedule/wednesday" dia="Miercoles"/>
      <AnimeCard day="es/schedule/wednesday" dia="Miercoles"/>
    </main>
  );
}
