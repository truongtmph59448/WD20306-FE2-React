import { Card, Row, Col, Divider, Typography, Space, Button } from "antd";
import { FileTextOutlined, FolderOutlined } from "@ant-design/icons";

const ContextArchitecturePage = () => {
  return (
    <div style={{ padding: "50px 20px" }}>
      <Row gutter={[24, 24]}>
        <Col xs={24}>
          <Typography.Title level={2}>📚 Tách Context (Architecture)</Typography.Title>
        </Col>
      </Row>

      <Row gutter={[24, 24]}>
        {/* UserContext */}
        <Col xs={24} md={12}>
          <Card
            title={
              <Space>
                <FileTextOutlined />
                <span>UserContext.tsx</span>
              </Space>
            }
            bordered={false}
            style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
          >
            <Typography.Title level={5}>📍 Vị trí:</Typography.Title>
            <code style={{ display: "block", marginBottom: "16px" }}>
              src/context/UserContext.tsx
            </code>

            <Typography.Title level={5}>✨ Chức năng:</Typography.Title>
            <ul>
              <li>Quản lý thông tin người dùng</li>
              <li>Lưu name, avatar</li>
              <li>setUser() để cập nhật</li>
            </ul>

            <Divider />

            <Typography.Title level={5}>📝 Exports:</Typography.Title>
            <ul style={{ fontSize: "13px" }}>
              <li>
                <code>UserContext</code> - Context object
              </li>
              <li>
                <code>UserProvider</code> - Provider component
              </li>
              <li>
                <code>useUser()</code> - Custom hook
              </li>
              <li>
                <code>User</code> - Type definition
              </li>
            </ul>

            <Divider />

            <Typography.Title level={5}>💡 Sử dụng:</Typography.Title>
            <pre
              style={{
                backgroundColor: "#f5f5f5",
                padding: "12px",
                borderRadius: "4px",
                fontSize: "12px",
                overflow: "auto",
              }}
            >
              {`const { user, setUser } = useUser();

setUser({
  name: "Alice",
  avatar: "url"
});`}
            </pre>
          </Card>
        </Col>

        {/* ThemeContext */}
        <Col xs={24} md={12}>
          <Card
            title={
              <Space>
                <FileTextOutlined />
                <span>ThemeContext.tsx</span>
              </Space>
            }
            bordered={false}
            style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
          >
            <Typography.Title level={5}>📍 Vị trí:</Typography.Title>
            <code style={{ display: "block", marginBottom: "16px" }}>
              src/context/ThemeContext.tsx
            </code>

            <Typography.Title level={5}>✨ Chức năng:</Typography.Title>
            <ul>
              <li>Quản lý chế độ Dark/Light</li>
              <li>Tích hợp Ant Design theme</li>
              <li>Toggle theme dễ dàng</li>
            </ul>

            <Divider />

            <Typography.Title level={5}>📝 Exports:</Typography.Title>
            <ul style={{ fontSize: "13px" }}>
              <li>
                <code>ThemeContext</code> - Context object
              </li>
              <li>
                <code>ThemeProvider</code> - Provider component
              </li>
              <li>
                <code>useTheme()</code> - Custom hook
              </li>
              <li>
                <code>ThemeMode</code> - Type (light|dark)
              </li>
            </ul>

            <Divider />

            <Typography.Title level={5}>💡 Sử dụng:</Typography.Title>
            <pre
              style={{
                backgroundColor: "#f5f5f5",
                padding: "12px",
                borderRadius: "4px",
                fontSize: "12px",
                overflow: "auto",
              }}
            >
              {`const { themeMode, toggleTheme } = useTheme();

<Switch 
  checked={themeMode === "dark"}
  onChange={toggleTheme}
/>`}
            </pre>
          </Card>
        </Col>
      </Row>

      <Row gutter={[24, 24]} style={{ marginTop: "24px" }}>
        {/* App Structure */}
        <Col xs={24}>
          <Card
            title={
              <Space>
                <FolderOutlined />
                <span>App.tsx - Cấu trúc</span>
              </Space>
            }
            bordered={false}
            style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
          >
            <pre
              style={{
                backgroundColor: "#f5f5f5",
                padding: "16px",
                borderRadius: "4px",
                overflow: "auto",
              }}
            >
              {`<App>
  <UserProvider>
    <ThemeProvider>
      <Header />      {/* Sử dụng useUser() + useTheme() */}
      <Content />
      <Navbar />
    </ThemeProvider>
  </UserProvider>
</App>

// Các pages có thể sử dụng:
//  - Lab2: LoginPage (useUser)
//  - Lab3: LogoutPage (useUser)
//  - Lab4: ThemePage (useTheme)
//  - Lab5: Architecture docs (bạn đang xem)`}
            </pre>
          </Card>
        </Col>
      </Row>

      <Row gutter={[24, 24]} style={{ marginTop: "24px" }}>
        <Col xs={24}>
          <Card
            type="inner"
            title="✅ Kiểm tra kết quả"
            bordered={false}
          >
            <Space direction="vertical" style={{ width: "100%" }} size="large">
              <div>
                <Typography.Title level={5}>Bài 2 - Login:</Typography.Title>
                <Button block onClick={() => window.location.href = "/lab2"}>
                  → Đi tới Lab2 (Thử login)
                </Button>
              </div>
              <div>
                <Typography.Title level={5}>Bài 3 - Logout:</Typography.Title>
                <Button block onClick={() => window.location.href = "/lab3"}>
                  → Đi tới Lab3 (Thử logout)
                </Button>
              </div>
              <div>
                <Typography.Title level={5}>Bài 4 - Theme:</Typography.Title>
                <Button block onClick={() => window.location.href = "/lab4"}>
                  → Đi tới Lab4 (Thử toggle theme)
                </Button>
              </div>
            </Space>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ContextArchitecturePage;