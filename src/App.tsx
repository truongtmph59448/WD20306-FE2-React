import { Toaster } from "react-hot-toast";
import { Link, Routes, Route } from "react-router-dom";
import { Button, Layout } from "antd";
import Lab4 from "./pages/Lab4";
import Lab5 from "./pages/Lab5";
import Lab6 from "./pages/Lab6";
import Login from "./components/Login";
import Register from "./components/Register";
import { useAuthStore } from "./stores/useAuthStore";
import { useTheme } from "./context/ThemeContext";

const { Header, Content, Footer } = Layout;

function App() {
  const { user, logout } = useAuthStore();
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      {/* NAVBAR */}
      <nav
        className="shadow"
        style={{
          background: theme === "dark" ? "#111" : "#2563eb",
          color: "#fff",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="text-xl font-semibold">
            <strong>WEB2091 App</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/">Trang chủ</Link>
            <Link to="/list">Danh sách</Link>
            <Link to="/lab4">Thêm mới</Link>
          </div>

          {/* RIGHT SIDE */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Theme */}
            <Button onClick={toggleTheme}>
              {theme === "light" ? "Light" : "Dark"}
            </Button>

            {/* Auth */}
            {user ? (
              <>
                <span>{user.user?.email}</span>
                <span>Đã đăng nhập</span>
                <Button danger onClick={logout}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">Đăng nhập</Link>
                <Link to="/register">Đăng ký</Link>
              </>
            )}
          </div>
        </div>
      </nav>

      {/* CONTENT */}
      <div
        className="max-w-6xl mx-auto mt-10 px-4 text-center"
        style={{
          background: theme === "dark" ? "#222" : "#fff",
          color: theme === "dark" ? "#fff" : "#000",
          minHeight: "100vh",
        }}
      >
        <h1 className="text-4xl font-bold mb-4">
          Chào mừng đến với WEB2091
        </h1>

        <Layout>
          <Header style={{ color: "white" }}>Header</Header>

          <Content style={{ padding: 20 }}>
            <Routes>
              <Route path="/" element={<Lab5 />} />
              <Route path="/list" element={<Lab5 />} />
              <Route path="/lab4" element={<Lab4 />} />
              <Route path="/edit/:id" element={<Lab6 />} />

              {/* AUTH */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </Content>

          <Footer>Footer</Footer>
        </Layout>
      </div>

      <Toaster />
    </>
  );
}

export default App;