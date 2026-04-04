import { Form, Input, Button, Spin } from "antd";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useUpdateStory } from "../hooks/useUpdateStory";

const EditStory = () => {
  const [form] = Form.useForm();
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useQuery({
    queryKey: ["story", id],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:3000/stories/${id}`);
      return res.data;
    },
  });

  useEffect(() => {
    if (data) {
      form.setFieldsValue(data);
    }
  }, [data]);

  const updateMutation = useUpdateStory(id!);

  const onFinish = (values: any) => {
    updateMutation.mutate(values, {
      onSuccess: () => {
        toast.success("Cập nhật thành công");
        navigate("/");
      },
      onError: () => {
        toast.error("Có lỗi xảy ra");
      },
    });
  };

  if (isLoading) return <Spin />;

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      disabled={updateMutation.isPending}
    >
      <Form.Item
        name="title"
        label="Tên truyện"
        rules={[{ required: true, message: "Không được để trống title" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="author"
        label="Tác giả"
        rules={[{ required: true, message: "Không được để trống author" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item name="image" label="Ảnh">
        <Input />
      </Form.Item>

      <Form.Item name="description" label="Mô tả">
        <Input.TextArea />
      </Form.Item>

      <Button type="primary" htmlType="submit" loading={updateMutation.isPending}>
        Cập nhật
      </Button>
    </Form>
  );
};

export default EditStory;