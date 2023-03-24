import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

export default function useGames(gameQuery: GameQuery) {
  return useData<Game>("/games", [gameQuery], {
    params: {
      genres: gameQuery.genre?.id,
      platforms: gameQuery.platform?.id,
    },
  });
}
