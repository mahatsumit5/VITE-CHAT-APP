export const serverUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000"
    : "https://messenger-ezhi.onrender.com";
