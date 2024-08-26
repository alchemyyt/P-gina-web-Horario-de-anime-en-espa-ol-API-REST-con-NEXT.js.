import Image from 'next/image';
export default async function Home() {
  const submit=(e:any) => {
    e.preventDefault();
    const formData={
      name:e.target.name.value
    }
    console.log({formData})
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Formulario del API REST de Anime En Español</h1>
      <form action="" className="bg-red-400 p-1 text-center">
        <label className=""> 
          <div className="">Imagenes</div>
          <input type="text" name="verticalImage" placeholder="Vertical" />
          <input type="text" name="horizontalImage" placeholder="Horizontal" />
        </label>
        <label className=""> 
          <div className="">Titulos</div>
          <input type="text" name="originalTitle" placeholder="Japones" />
          <input type="text" name="enTitle" placeholder="Ingles" />
          <input type="text" name="esTitle" placeholder="Español" />
        </label>
        <label className=""> 
          <div className="">Sipnopsis</div>
          <input type="text" name="synopsis" placeholder="Sipnopsis" className='w-full h-24' />
        </label>
        <label className=""> 
          <div className="">Esta en emision?</div>
          <input type="checkbox" name="airing" />
        </label>
        <label className=""> 
          <div className="">Temporada</div>
          <input type="text" name="season" placeholder="Temporada" />
        </label>
        <label className=""> 
          <div className="">Duracion de episodios</div>
          <input type="text" name="duration" placeholder="Duracion" />
        </label>
        <label className=""> 
          <div className="">Año de emision</div>
          <input type="number" name="year" placeholder="Año" />
        </label>
        <label className=""> 
          <div className="">Datos de emision</div>
          <input type="text" name="day" placeholder="Dia" />
          mx
          <input type="time" name="mx" placeholder="hora de salida en mexico" />
          co
          <input type="time" name="co" placeholder="hora de salida en mexico" />
          ve
          <input type="time" name="ve" placeholder="hora de salida en mexico" />
          ar
          <input type="time" name="ar" placeholder="hora de salida en mexico" />
          es
          <input type="time" name="es" placeholder="hora de salida en mexico" />
        </label>
        <label className=""> 
          <div className="">Generos</div>
          <input type="text" name="genres" placeholder="Generos json " className='w-full h-24'/>
        </label>
        <label className=""> 
          <div className="">Studios</div>
          <input type="text" name="studios" placeholder="Studios json" className='w-full h-24'/>
        </label>
        <label className=""> 
          <div className="">Servicios de stream</div>
          <input type="text" name="streamingServices" placeholder="Servicios de stream json" className='w-full h-24'/>
        </label>
        <label className=""> 
          <div className="">Wiki url</div>
          <input type="text" name="doblajeWikiUrl" placeholder="wiki url" />
        </label>
        <label className=""> 
          <div className="">Actores de voz</div>
          <input type="text" name="voiceActors" placeholder="actores de voz json" className='w-full h-24'/>
        </label>
        <input type="submit" />
      </form>
    </main>
  );
}
{/*const jsonString =
  '[{"genreName": "genreName", "genreUrl": "genreUrl"}, {"genreName": "genreName", "genreUrl": "genreUrl"}]';
const arrayDeObjetos = JSON.parse(jsonString);
console.log(arrayDeObjetos); */}
