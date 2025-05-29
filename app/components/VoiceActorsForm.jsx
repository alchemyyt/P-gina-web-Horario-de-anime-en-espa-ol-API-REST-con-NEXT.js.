"use client";
import { useState } from "react";

const VoiceActorsForm = ({ onChange }) => {
  const [actors, setActors] = useState([]);
  const [current, setCurrent] = useState({
    voiceActorName: "",
    wikiUrl: "",
    character: "",
  });

  const handleInputChange = (field, value) => {
    setCurrent({ ...current, [field]: value });
  };

  const addActor = () => {
    if (!current.voiceActorName || !current.wikiUrl || !current.character) {
      alert("Por favor completa todos los campos.");
      return;
    }

    const updated = [...actors, current];
    setActors(updated);
    setCurrent({ voiceActorName: "", wikiUrl: "", character: "" });
    onChange(updated);
  };

  const removeActor = (index) => {
    const updated = actors.filter((_, i) => i !== index);
    setActors(updated);
    onChange(updated);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-1 p-2 border rounded">
        <input
          type="text"
          placeholder="Nombre del actor"
          value={current.voiceActorName}
          onChange={(e) => handleInputChange("voiceActorName", e.target.value)}
          className="w-full"
        />
        <input
          type="text"
          placeholder="Wiki URL"
          value={current.wikiUrl}
          onChange={(e) => handleInputChange("wikiUrl", e.target.value)}
          className="w-full"
        />
        <input
          type="text"
          placeholder="Personaje"
          value={current.character}
          onChange={(e) => handleInputChange("character", e.target.value)}
          className="w-full"
        />
        <button
          type="button"
          onClick={addActor}
          className="bg-green-600 text-white px-2 py-1 mt-2 rounded"
        >
          Agregar actor
        </button>
      </div>
      <input type="hidden" name="voiceActors" value={JSON.stringify(actors)} />
      {actors.length > 0 && (
        <div className="mt-4">
          <h3 className="font-bold">Actores añadidos:</h3>
          <ul className="list-disc ml-5">
            {actors.map((actor, index) => (
              <li key={index}>
                {actor.voiceActorName} como {actor.character} (
                <a
                  href={actor.wikiUrl}
                  target="_blank"
                  className="text-blue-500 underline"
                >
                  Wiki
                </a>
                )
                <button
                  type="button"
                  onClick={() => removeActor(index)}
                  className="text-red-600 ml-2"
                >
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default VoiceActorsForm;
