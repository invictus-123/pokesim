import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const App = () => <main><h1>PokeSim</h1><p>Foundation ready.</p></main>;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
