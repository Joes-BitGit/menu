import axios from "axios";

// CONFIG
const baseURL = "http://localhost:9000/api/v1/menu";

export default axios.create({ baseURL });
