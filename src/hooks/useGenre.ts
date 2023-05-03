import useGenres from "./useGenres";

export default function useGenre(id?: number) {
  const { data } = useGenres();

  return data?.results.find((d) => d.id === id);
}
