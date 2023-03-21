import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: (import.meta as any).env.VITE_RAWG_API_KEY,
  },
});
