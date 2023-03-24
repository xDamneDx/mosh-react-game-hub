import useData from "./useData";
import { Platform } from "./useGames";

export default function () {
  return useData<Platform>("/platforms/lists/parents");
}
