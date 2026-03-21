import { Toaster } from "react-hot-toast";
import { Link, Routes, Route } from "react-router-dom"; 
import { Button } from "antd";
import { Layout } from "antd";
import Lab4 from "./pages/Lab4";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <>
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="#" className="text-xl font-semibold">
            <strong>WEB2091 App</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="#">Trang chủ</Link>
            <Link to="/list">Danh sách</Link>
            <Link to="/lab4">Thêm mới</Link>
          </div>
          <div className="hidden md:flex items-center space-x-6">
  <Link to="#" className="hover:text-gray-200">
    Đăng nhập
  </Link>
  <Link to="#" className="hover:text-gray-200">
    Đăng ký
  </Link>
</div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Chào mừng đến với WEB2091
        </h1>

        <Button type="primary">Click me</Button>

        <Layout>
          <Header style={{ color: "white" }}>Header</Header>
          <Content style={{ padding: 20 }}>Content</Content>
          <Footer>Footer</Footer>
        </Layout>


        <Routes>
          <Route path="/lab4" element={<Lab4 />} />
        </Routes>
      </div>

      <Toaster />
    </>
  );
}

export default App;