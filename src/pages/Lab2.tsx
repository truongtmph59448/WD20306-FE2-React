import { Table } from "antd";

const columns = [
    {title: 'ID', dataIndex: 'id'},
    {title: 'Name', dataIndex: 'name'},
    {title: 'Age', dataIndex: 'age'},
    {title: 'Major', dataIndex: 'major'},
];

const data = [
    {key: '1', id: 1, name: 'Truong', age: 20, major: 'FE1'},
    {key: '2', id: 2, name: 'Hai', age: 21, major: 'FE2'},
];

export default function Lab2() {
    return <Table columns={columns} dataSource={data} />;
}