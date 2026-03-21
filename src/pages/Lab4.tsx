import { Form, Input, Button, Checkbox } from "antd";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

interface Category {
  title: string;
  description?: string;
  active?: boolean;
}

export default function Lab4() {
  const [form] = Form.useForm();

  const mutation = useMutation({
    mutationFn: async (data: Category) => {
      const res = await axios.post(
        "http://localhost:3001/stories",
        data
      );
      return res.data;
    },

    onSuccess: () => {
      toast.success("Thêm danh mục thành công");
      form.resetFields();
    },

    onError: () => {
      toast.error("Có lỗi xảy ra");
    },
  });

  const onFinish = (values: Category) => {
    mutation.mutate(values);
  };

  return (
    <Form
      layout="vertical"
      onFinish={onFinish}
      form={form}
      style={{ maxWidth: 500, margin: "0 auto" }}
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[{ required: true, message: "Không được để trống!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Description" name="description">
        <Input.TextArea rows={4} />
      </Form.Item>

      <Form.Item name="active" valuePropName="checked">
        <Checkbox>Active</Checkbox>
      </Form.Item>

      <Button
        type="primary"
        htmlType="submit"
        loading={mutation.isPending}
      >
        Submit
      </Button>
    </Form>
  );
}