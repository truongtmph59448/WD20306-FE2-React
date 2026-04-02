import { Button } from "antd";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={{ padding: 20 }}>
      <Button onClick={toggleTheme}>
        Theme: {theme === "light" ? "Light" : "Dark"}
      </Button>
    </div>
  );
};

export default ThemeToggle;