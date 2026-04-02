import { Button, Card, Row, Col, Result } from "antd";
import { LogoutOutlined, UserOutlined } from "@ant-design/icons";
import { useUser } from "../context/UserContext";

const LogoutPage = () => {
  const { user, setUser } = useUser();

  const handleLogout = () => {
    setUser(null);
    alert("✅ Đăng xuất thành công!");
  };

  return (
    <div style={{ padding: "50px 20px", minHeight: "80vh" }}>
      {user ? (
        <Row gutter={[24, 24]} justify="center">
          <Col xs={24} sm={20} md={12} lg={8}>
            <Card
              bordered={false}
              style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}
            >
              <Result
                status="success"
                title="✅ Bạn đã đăng nhập"
                subTitle={`Xin chào ${user.name}`}
                style={{ paddingBottom: "24px" }}
              />

              <div style={{ textAlign: "center", marginBottom: "24px" }}>
                <div style={{ fontSize: "64px", marginBottom: "16px" }}>
                  {user.avatar ? (
                    <img
                      src={user.avatar}
                      alt="avatar"
                      style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "50%",
                        objectFit: "cover",
                      }}
                    />
                  ) : (
                    <UserOutlined style={{ fontSize: "64px" }} />
                  )}
                </div>
                <h2>{user.name}</h2>
              </div>

              <Button
                type="primary"
                danger
                size="large"
                block
                icon={<LogoutOutlined />}
                onClick={handleLogout}
              >
                🚪 Đăng Xuất
              </Button>
            </Card>
          </Col>
        </Row>
      ) : (
        <Row gutter={[24, 24]} justify="center">
          <Col xs={24} sm={20} md={12} lg={8}>
            <Result
              status="warning"
              title="Chưa đăng nhập"
              subTitle="Vui lòng đăng nhập để xem trang này"
            />
          </Col>
        </Row>
      )}
    </div>
  );
};

export default LogoutPage;