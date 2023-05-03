import usePlatforms from "./usePlatforms";

export default function usePlatform(id?: number) {
  const { data } = usePlatforms();

  return data?.results.find((d) => d.id === id);
}
