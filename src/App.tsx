import { BrowserRouter } from "react-router-dom";
import { Toaster } from "./components/ui";
import { Router } from "./router";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Router />
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
