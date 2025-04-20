import { sunIcon, moonIcon } from "@/assets";
import { ThemeToggleProps } from "./themeToggle.types";
import "./ThemeToggle.scss";

const ThemeToggle = ({ isLight, onToggle }: ThemeToggleProps) => {
  return (
    <img
      className="theme-toggle-icon"
      src={isLight ? moonIcon : sunIcon}
      alt={isLight ? "Light mode" : "Dark mode"}
      onClick={onToggle}
    />
  );
};

export default ThemeToggle;
