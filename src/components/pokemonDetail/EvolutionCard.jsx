import React, { useEffect, useState } from "react";
import { getPokemonByUrl } from "../../services/pokemons";

const EvolutionCard = ({ evolution }) => {
  const [evolutionInfo, setEvolutionInfo] = useState(null);

  useEffect(() => {
    getPokemonByUrl(evolution.url)
      .then((data) => setEvolutionInfo(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <article   className="  mb-8  grid grid-cols-1 sm:grid-cols-3  justify-center">
      
      
     
        <h2>{evolutionInfo?.name}</h2>
        <div className="  h-[200px] aspect-square">
          <img
            className="h-full w-full object-contain"
            src={evolutionInfo?.image_secundary}
            alt=""
          />
        </div>
     
      
    </article>
  );
};

export default EvolutionCard;
