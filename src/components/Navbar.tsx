import { Button } from "antd";
import { Link } from "react-router-dom";
import { useAuthStore } from "../stores/useAuthStore";

export function Navbar() {
  const { user, setUser, logout } = useAuthStore();

  const handleLogin = () => {
    setUser({
      user: {
        email: "admin@gmail.com",
      },
      token: "fake-token",
    });
  };

  return (
    <nav className="bg-blue-600 text-white shadow">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold">
          <strong>WEB2091 App</strong>
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <Link to="/">Trang chủ</Link>
          <Link to="/list">Danh sách</Link>
          <Link to="/add">Thêm mới</Link>
        </div>

        <div className="hidden md:flex items-center space-x-6">
          {user ? (
            <>
              <span>Email: {user.user?.email}</span>
              <span>Đã đăng nhập</span>
              <Button danger onClick={logout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button onClick={handleLogin}>Login</Button>
              <Link to="/register">Đăng ký</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}