import { Avatar } from "antd";
import { useUser } from "../context/UserContext";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const { user } = useUser();
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        gap: 10,
        padding: 20,
        background: theme === "dark" ? "#333" : "#eee",
        color: theme === "dark" ? "#fff" : "#000",
      }}
    >
      {user ? (
        <>
          <Avatar src={user.avatar} />
          <span>{user.name}</span>
        </>
      ) : (
        <span>Chưa đăng nhập</span>
      )}
    </div>
  );
};

export default Header;