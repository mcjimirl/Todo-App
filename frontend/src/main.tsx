import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import TodoMain from "./TodoMain.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TodoMain />
  </StrictMode>
);
