import { Layout, Avatar, Button, Dropdown, Space } from "antd";
import { UserOutlined, LogoutOutlined, BgColorsOutlined } from "@ant-design/icons";
import { useUser } from "../context/UserContext";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const { user, setUser } = useUser();
  const { themeMode, toggleTheme } = useTheme();

  const handleLogout = () => {
    setUser(null);
  };

  const userMenuItems = [
    {
      key: "profile",
      label: "Profile",
      icon: <UserOutlined />,
    },
    {
      key: "logout",
      label: "Logout",
      icon: <LogoutOutlined />,
      onClick: handleLogout,
    },
  ];

  return (
    <Layout.Header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingInline: "50px",
        backgroundColor: themeMode === "dark" ? "#141414" : "#fff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h1 style={{ margin: 0, fontSize: "24px", fontWeight: "bold" }}>WEB2091</h1>

      <Space size="large">
        <Button
          type="text"
          icon={<BgColorsOutlined />}
          onClick={toggleTheme}
          title={`Switch to ${themeMode === "light" ? "dark" : "light"} mode`}
        >
          {themeMode === "light" ? "🌙" : "☀️"}
        </Button>

        {user ? (
          <Dropdown menu={{ items: userMenuItems }} trigger={["click"]}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
              }}
            >
              <Avatar
                size="large"
                src={user.avatar}
                icon={!user.avatar && <UserOutlined />}
              />
              <span>{user.name}</span>
            </div>
          </Dropdown>
        ) : (
          <span style={{ color: "#999" }}>Not logged in</span>
        )}
      </Space>
    </Layout.Header>
  );
};

export default Header;
