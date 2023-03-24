import useData from "./useData";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

export default function () {
  return useData<Platform>("/platforms/lists/parents");
}
