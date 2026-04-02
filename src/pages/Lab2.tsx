import { Table } from "antd";
import { Tag } from "antd";
import { Button, Space } from "antd";
const columns1= [
    {title: 'ID', dataIndex: 'id'},
    {title: 'Name', dataIndex: 'name'},
    {title: 'Age', dataIndex: 'age'},
    {title: 'Major', dataIndex: 'major'},
];

const data1 = [
    {key: '1', id: 1, name: 'Truong', age: 20, major: 'FE1'},
    {key: '2', id: 2, name: 'Hai', age: 21, major: 'FE2'},
];

const columns2 = [
  { title: "ID", dataIndex: "id" },
  { title: "Name", dataIndex: "name" },
  { title: "Email", dataIndex: "email" },
  {
  title: "Status",
  dataIndex: "status",
  render: (status: string) => (
    <Tag color={status === "active" ? "green" : "red"}>
      {status}
    </Tag>
  ),
},
{
  title: "Action",
  render: () => (
    <Space>
      <Button type="primary">Edit</Button>
      <Button danger>Delete</Button>
    </Space>
  ),
},
];

const data2 = [
  { key: "1", id: 101, name: "Truong", email: "Truong@gmail.com", status: "active" },
  { key: "2", id: 102, name: "Minh", email: "Minh@gmail.com", status: "inactive" },
];
const columns = [
  { title: "ID", dataIndex: "id" },
  { title: "Tên sản phẩm", dataIndex: "name" },
  { title: "Gía", dataIndex: "price" },
  { title: "Danh mục", dataIndex: "category" },
];

const data = [
  { key: "1", id: 1, name: "Laptop", price: "10,000,000 VNĐ", category: "Đồ điện tử" },
  { key: "2", id: 2, name: "Phone", price: "7,000,000 VNĐ", category: "Đồ điện tử" },
];

export default function Lab() {
  return (
    <>
      <h2>Bài 1</h2>
      <Table columns={columns1} dataSource={data1} />

      <h2>Bài 3</h2>
      <Table columns={columns2} dataSource={data2} />

      <h2>Bài 2</h2>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ pageSize: 3 }}
      />
    </>
  );
}