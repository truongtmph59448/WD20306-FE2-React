import { Form, Input, Button, Spin } from "antd";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import toast from "react-hot-toast";

const EditStory = () => {
  const [form] = Form.useForm();
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["story", id],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:3001/stories/${id}`);
      return res.data;
    },
  });

  useEffect(() => {
    if (data) {
      form.setFieldsValue(data);
    }
  }, [data]);

  const mutation = useMutation({
    mutationFn: async (values: any) => {
      return axios.put(`http://localhost:3001/stories/${id}`, values);
    },
    onSuccess: () => {
      toast.success("Cập nhật thành công");
      queryClient.invalidateQueries({ queryKey: ["stories"] });
      navigate("/");
    },
    onError: () => {
      toast.error("Có lỗi xảy ra");
    },
  });

  const onFinish = (values: any) => {
    mutation.mutate(values);
  };

  if (isLoading) return <Spin />;

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={onFinish}
      disabled={mutation.isPending}
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

      <Button type="primary" htmlType="submit" loading={mutation.isPending}>
        Cập nhật
      </Button>
    </Form>
  );
};

export default EditStory;