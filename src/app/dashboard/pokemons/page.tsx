import { Metadata } from "next";

import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());
  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  // throw new Error("Esto es un error forzado desde el servidor");
  return pokemons;
};

export const metadata: Metadata = {
  title: "Pokemons",
  description: "Usando apis externas",
};

export default async function Page() {
  const pokemons = await getPokemons(151);
  return (
    <div className="flex flex-col p-4">
      <span className="text-3xl my-4">
        Listado de Pokemons <span>estaticos</span>
      </span>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
