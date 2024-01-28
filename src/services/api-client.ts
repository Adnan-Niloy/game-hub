import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "11ec7885d1ff46469d1d3acfb7b8aa8d",
  },
});
