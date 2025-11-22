import axios from "axios";

const api = axios.create({
  baseURL: "/api"
});

export function fetchNodes() { return api.get("/nodes"); }
export function fetchLogs() { return api.get("/logs"); }
export function analyze(payload) { return api.post("/analyze", payload); }

export default api;
