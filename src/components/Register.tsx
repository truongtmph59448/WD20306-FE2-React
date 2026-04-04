import { Form, Input, Button, message } from "antd";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useAuthStore } from "../stores/useAuthStore";

const Register = () => {
  const { setUser } = useAuthStore();

  const { mutate, isPending } = useMutation({
    mutationFn: async (values: any) => {
      return await axios.post("http://localhost:3000/register", values);
    },

    onSuccess: async (_, variables) => {
      message.success("Đăng ký thành công!");

      const loginRes = await axios.post("http://localhost:3000/login", {
        email: variables.email,
        password: variables.password,
      });

      setUser({
        user: loginRes.data.user,
        token: loginRes.data.accessToken,
      });
    },

    onError: () => {
      message.error("Đăng ký thất bại!");
    },
  });

  return (
    <Form
      layout="vertical"
      onFinish={mutate}
      style={{ maxWidth: 400, margin: "50px auto" }}
    >
      <Form.Item name="username" label="Username" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name="email" label="Email" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name="password" label="Password" rules={[{ required: true }]}>
        <Input.Password />
      </Form.Item>

      <Button type="primary" htmlType="submit" loading={isPending} block>
        Đăng ký
      </Button>
    </Form>
  );
};

export default Register;