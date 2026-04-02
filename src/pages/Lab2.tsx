import { Button, Card, Input, Space, Row, Col } from "antd";
import { useState } from "react";
import { useUser } from "../context/UserContext";

const LoginPage = () => {
  const { setUser } = useUser();
  const [name, setName] = useState("John Doe");
  const [avatar, setAvatar] = useState("https://i.pravatar.cc/150?img=1");

  const handleLogin = () => {
    if (name.trim()) {
      setUser({
        name,
        avatar: avatar || `https://i.pravatar.cc/150?u=${name}`,
      });
      alert("✅ Đăng nhập thành công!");
    }
  };

  const mockLogins = [
    { name: "Alice", avatar: "https://i.pravatar.cc/150?img=2" },
    { name: "Bob", avatar: "https://i.pravatar.cc/150?img=3" },
    { name: "Charlie", avatar: "https://i.pravatar.cc/150?img=4" },
  ];

  const handleMockLogin = (mockName: string, mockAvatar: string) => {
    setUser({ name: mockName, avatar: mockAvatar });
    alert(`✅ Đăng nhập thành công với tài khoản ${mockName}!`);
  };

  return (
    <div style={{ padding: "50px 20px", minHeight: "80vh" }}>
      <Row gutter={[24, 24]} justify="center">
        <Col xs={24} sm={20} md={12} lg={8}>
          <Card
            title="🔐 Login Giả Lập"
            bordered={false}
            style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
          >
            <Space direction="vertical" style={{ width: "100%" }} size="large">
              <div>
                <label style={{ display: "block", marginBottom: "8px" }}>
                  Tên người dùng:
                </label>
                <Input
                  placeholder="Nhập tên"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  onPressEnter={handleLogin}
                />
              </div>

              <div>
                <label style={{ display: "block", marginBottom: "8px" }}>
                  Avatar URL:
                </label>
                <Input
                  placeholder="Nhập URL avatar"
                  value={avatar}
                  onChange={(e) => setAvatar(e.target.value)}
                  onPressEnter={handleLogin}
                />
              </div>

              <Button type="primary" block size="large" onClick={handleLogin}>
                Đăng Nhập
              </Button>

              <div style={{ textAlign: "center", fontSize: "12px", color: "#999" }}>
                Hoặc sử dụng tài khoản mẫu
              </div>

              {mockLogins.map((mock) => (
                <Button
                  key={mock.name}
                  block
                  onClick={() => handleMockLogin(mock.name, mock.avatar)}
                  style={{ marginTop: "8px" }}
                >
                  👤 Đăng nhập với {mock.name}
                </Button>
              ))}
            </Space>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default LoginPage;