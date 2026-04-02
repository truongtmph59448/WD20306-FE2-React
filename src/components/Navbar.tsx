import { Table, Button, Popconfirm } from "antd";
import {useQuery, useMutation, useQueryClient} from "@tanstack/react-query";
import { useNavigate} from 'react-router-dom'
import axios from "axios";

function Navbar() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { data, isLoading, isError} = useQuery({
    queryKey: ["courses"],
    queryFn: () =>
      axios.get("http://localhost:3000/courses").then((res) => res.data),
  });
  const deleteMutation= useMutation({
    mutationFn: (id: number) => axios.delete(`http://localhost:3000/courses/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["courses"] });
    },
    onError: () => {
      console.error("Lỗi khi xóa khóa học")
    },
  });
  if (isLoading) return <div>Đang tải...</div>
  if (isError) return <div>Lỗi...</div>

  const columns = [
 {
    title: '📚 Tiêu đề',
    dataIndex: 'title',
    key: 'title',
 },
  {
    title: '⏱️ Thời lượng',
    dataIndex: 'duration',
    key: 'duration',
  },
  {
    title: '🖼️ Hình ảnh',
    dataIndex: 'thumbnail',
    key: 'thumbnail',
    render: (thumbnail: string) => (
      <img src={thumbnail} alt="thumbnail" style={{width: 80, height: 60, objectFit: 'cover', borderRadius: '8px'}} />
    )
  },
  {
    title: '🏷️ Danh mục',
    dataIndex: 'category',
    key: 'category',
  },
  {
    title: '⚙️ Hành động',
    key: 'action',
    render: (_: any, record: any) => (
      <div className="flex gap-2">
        <Popconfirm
          title="Xóa khóa học"
          description="Bạn có chắc chắn muốn xóa khóa học này không?"
          okText="Có"
          cancelText="Không"
          onConfirm={() => deleteMutation.mutate(record.id)}
          >
            <Button danger className="font-semibold!">Xóa</Button>
          </Popconfirm>

          <Button
           type="primary"
           className="font-semibold!"
           onClick={() => navigate(`/edit/${record.id}`)}
           >
            Sửa
          </Button>
      </div>
    ),
  },
  ];
  
  return (
    <div className="py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">📚 Danh sách khóa học</h1>
        <p className="text-gray-600">Quản lý tất cả các khóa học của bạn tại đây</p>
      </div>

      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        {isLoading && (
          <div className="flex items-center justify-center py-12">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
              <p className="mt-4 text-gray-600">Đang tải dữ liệu...</p>
            </div>
          </div>
        )}
        
        {isError && (
          <div className="flex items-center justify-center py-12">
            <div className="text-center text-red-600">
              <p className="text-2xl">❌</p>
              <p className="mt-2">Lỗi khi tải dữ liệu</p>
            </div>
          </div>
        )}

        {!isLoading && !isError && (
          <Table 
            columns={columns} 
            dataSource={data}
            rowKey="id"
            pagination={{
              pageSize: 10,
              showSizeChanger: true,
              showTotal: (total) => `Tổng ${total} khóa học`
            }}
            className="border-0!"
          />
        )}
      </div>
    </div>
  );
}

export default Navbar;
