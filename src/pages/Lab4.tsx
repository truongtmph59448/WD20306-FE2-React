import { Card, Row, Col, Switch, Space, Typography, Divider } from "antd";
import { BgColorsOutlined } from "@ant-design/icons";
import { useTheme } from "../context/ThemeContext";

const ThemePage = () => {
  const { themeMode, toggleTheme } = useTheme();

  return (
    <div style={{ padding: "50px 20px", minHeight: "80vh" }}>
      <Row gutter={[24, 24]} justify="center">
        <Col xs={24} sm={22} md={16} lg={12}>
          <Card
            title={
              <Space>
                <BgColorsOutlined style={{ fontSize: "20px" }} />
                <span>🎨 Theme Toggle (Nâng cao)</span>
              </Space>
            }
            bordered={false}
            style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
          >
            <Space direction="vertical" style={{ width: "100%" }} size="large">
              <div>
                <Typography.Title level={4}>
                  Chế độ hiện tại: {themeMode === "dark" ? "🌙 Dark" : "☀️ Light"}
                </Typography.Title>

                <Divider />

                <Space align="center">
                  <span>Dark Mode:</span>
                  <Switch
                    checked={themeMode === "dark"}
                    onChange={toggleTheme}
                    checkedChildren="🌙"
                    unCheckedChildren="☀️"
                  />
                </Space>
              </div>

              <Divider />

              <div>
                <Typography.Title level={5}>✨ Tính năng:</Typography.Title>
                <ul>
                  <li>✓ Toggle Dark / Light mode</li>
                  <li>✓ Tích hợp Ant Design theme</li>
                  <li>✓ Tất cả component tự động thay đổi màu</li>
                  <li>✓ Trang sẽ giữ theme khi reload (có thể thêm localStorage)</li>
                </ul>
              </div>

              <Divider />

              <div>
                <Typography.Title level={5}>📝 Code Example:</Typography.Title>
                <Card
                  type="inner"
                  style={{
                    backgroundColor: themeMode === "dark" ? "#262626" : "#f5f5f5",
                    overflow: "auto",
                  }}
                >
                  <pre style={{ margin: 0, fontSize: "12px" }}>
{`const { themeMode, toggleTheme } = useTheme();

// Toggle theme
<Switch 
  checked={themeMode === "dark"}
  onChange={toggleTheme}
/>

// Thay đổi style dựa vào theme
const bgColor = themeMode === "dark" ? "#262626" : "#fff";`}
                  </pre>
                </Card>
              </div>
            </Space>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ThemePage;