import { Table, Image, Spin, Button, Popconfirm, message } from "antd";
import { useNavigate } from "react-router-dom";
import { useCRUDStory } from "../hooks/useCRUDStory";

const StoryList = () => {
  const navigate = useNavigate();
  const { list, isLoading, isError, remove } = useCRUDStory();

  const formatDate = (date: string) => {
    if (!date) return "";
    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Ảnh",
      dataIndex: "image",
      render: (url: string) => <Image src={url} width={60} />,
    },
    {
      title: "Tên truyện",
      dataIndex: "title",
    },
    {
      title: "Tác giả",
      dataIndex: "author",
    },
    {
      title: "Mô tả",
      dataIndex: "description",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      render: (date: string) => formatDate(date),
    },
    {
      title: "Action",
      render: (_: any, record: any) => (
        <>
          <Button
            type="primary"
            style={{ marginRight: 8 }}
            onClick={() => navigate(`/edit/${record.id}`)}
          >
            Sửa
          </Button>

          <Popconfirm
            title="Bạn chắc chắn muốn xóa?"
            onConfirm={() => remove.mutate(record.id, {
              onSuccess: () => message.success("Xóa thành công"),
              onError: () => message.error("Xóa thất bại"),
            })}
          >
            <Button danger loading={remove.isPending}>
              Xóa
            </Button>
          </Popconfirm>
        </>
      ),
    },
  ];

  if (isLoading) return <Spin />;
  if (isError) return <p>Lỗi khi tải dữ liệu</p>;

  return (
    <Table
      columns={columns}
      dataSource={list}
      rowKey="id"
      pagination={{ pageSize: 5 }}
    />
  );
};

export default StoryList;