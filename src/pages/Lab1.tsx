import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { Layout, Form, Input, Button, Table, Modal, Select } from "antd";
import { useState } from "react";

const { Header, Content, Footer } = Layout;

function App() {
  const [open, setOpen] = useState(false);

  const onFinish = (values: any) => {
    console.log(values);
  };


  const data = [
    {
      key: 1,
      name: "Nguyen Van A",
      email: "a@gmail.com",
      role: "Admin",
    },
    {
      key: 2,
      name: "Tran Van B",
      email: "b@gmail.com",
      role: "User",
    },
  ];

  const columns = [
    { title: "Name", dataIndex: "name" },
    { title: "Email", dataIndex: "email" },
    { title: "Role", dataIndex: "role" },
  ];

  return (
    <>

      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="#" className="text-xl font-semibold">
            <strong>WEB2091 App</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="#">Trang chủ</Link>
            <Link to="#">Danh sách</Link>
            <Link to="#">Thêm mới</Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="#">Đăng nhập</Link>
            <Link to="#">Đăng ký</Link>
          </div>
        </div>
      </nav>


      <div className="max-w-6xl mx-auto mt-10 px-4">
        <h1 className="text-4xl font-bold mb-4 text-center">
          Chào mừng đến với WEB2091
        </h1>

        <Layout>
          <Header style={{ color: "white" }}>Header</Header>

          <Content style={{ padding: 20 }}>
            

            <h2 className="text-xl font-bold mb-2">Form Đăng Ký</h2>

            <Form
              layout="vertical"
              style={{ maxWidth: 400 }}
              onFinish={onFinish}
            >
              <Form.Item label="Name" name="name">
                <Input />
              </Form.Item>

              <Form.Item label="Email" name="email">
                <Input />
              </Form.Item>

              <Form.Item label="Password" name="password">
                <Input.Password />
              </Form.Item>

              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form>

            <br />

   
            <h2 className="text-xl font-bold mb-2">Danh sách User</h2>

            <Button
              type="primary"
              style={{ marginBottom: 10 }}
              onClick={() => setOpen(true)}
            >
              Thêm User
            </Button>

            <Table columns={columns} dataSource={data} />

         
            <Modal
              title="Thêm User"
              open={open}
              footer={null}
              onCancel={() => setOpen(false)}
            >
              <Form layout="vertical" onFinish={onFinish}>
                <Form.Item label="Name" name="name">
                  <Input />
                </Form.Item>

                <Form.Item label="Email" name="email">
                  <Input />
                </Form.Item>

                <Form.Item label="Role" name="role">
                  <Select
                    options={[
                      { label: "Admin", value: "Admin" },
                      { label: "User", value: "User" },
                    ]}
                  />
                </Form.Item>

                <Button type="primary" htmlType="submit">
                  Add
                </Button>
              </Form>
            </Modal>
          </Content>

          <Footer style={{ textAlign: "center" }}>Footer</Footer>
        </Layout>
      </div>

      <Toaster />
    </>
  );
}

export default App;