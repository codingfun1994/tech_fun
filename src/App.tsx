import { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import "./App.scss";
import ThemeToggle from "./components/themeToggle/ThemeToggle";

const App = () => {
  const [isLightTheme, setIsLightTheme] = useState(false);

  const toggleTheme = () => {
    setIsLightTheme((prev) => !prev);
  };

  useEffect(() => {
    document.body.classList.toggle("light-theme", isLightTheme);
  }, [isLightTheme]);

  return (
    <div className="app-root">
       <ThemeToggle isLight={isLightTheme} onToggle={toggleTheme} />
      <Home />
    </div>
  );
};

export default App;
