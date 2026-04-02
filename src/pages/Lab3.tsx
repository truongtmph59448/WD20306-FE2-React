import { Routes, Route } from "react-router-dom";
import { Form, Input, Button, InputNumber } from "antd";

function Login() {
  const onFinish = (values: any) => {
    console.log("Login:", values);
  };

  return (
    <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 400 }}>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Nhập email" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Nhập password" }]}
      >
        <Input.Password />
      </Form.Item>

      <Button type="primary" htmlType="submit">
        Đăng nhập
      </Button>
    </Form>
  );
}

function Register() {
  const onFinish = (values: any) => {
    console.log("Register:", values);
  };

  return (
    <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 500 }}>
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Nhập tên" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          { required: true, message: "Nhập email" },
          { type: "email", message: "Email không hợp lệ" },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Phone" name="phone">
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          { required: true, message: "Nhập password" },
          { min: 6, message: "Ít nhất 6 ký tự" },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Confirm Password"
        name="confirmPassword"
        dependencies={["password"]}
        rules={[
          { required: true, message: "Xác nhận password" },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject("Password không trùng");
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Button type="primary" htmlType="submit">
        Đăng ký
      </Button>
    </Form>
  );
}

function Product() {
  const onFinish = (values: any) => {
    console.log("Product:", values);
  };

  return (
    <Form layout="vertical" onFinish={onFinish} style={{ maxWidth: 500 }}>
      <Form.Item
        label="Tên sản phẩm"
        name="name"
        rules={[{ required: true, message: "Nhập tên sản phẩm" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Giá"
        name="price"
        rules={[{ required: true, message: "Nhập giá" }]}
      >
        <InputNumber style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item
        label="Số lượng"
        name="quantity"
        rules={[{ required: true, message: "Nhập số lượng" }]}
      >
        <InputNumber style={{ width: "100%" }} />
      </Form.Item>

      <Form.Item label="Mô tả" name="description">
        <Input.TextArea rows={4} />
      </Form.Item>

      <Button type="primary" htmlType="submit">
        Thêm sản phẩm
      </Button>
    </Form>
  );
}

export default function Lab3() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="product" element={<Product />} />
    </Routes>
  );
}