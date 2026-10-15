import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SrcmPage } from "./SrcmPage";
import "./styles.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SrcmPage />
  </StrictMode>,
);
