import { useEffect } from "react";
import Home from "./pages/Home";

const App = () => {
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) document.documentElement.classList.add("dark");
  }, []);

  return (
    <div className="mx-auto max-w-7xl">
      <Home />
    </div>
  );
};

export default App;
