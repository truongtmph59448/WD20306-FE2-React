import { Table } from "antd";

const columns = [
    {title: 'Name', dataIndex: 'name'},
    {title: 'Age', dataIndex: 'age'},
    {title: 'Major', dataIndex: 'major'},
];

const data = [
    {key: '1', name: 'Truong', age: 20, major: 'FE1'},
    {key: '2', name: 'Hai', age: 21, major: 'FE2'},
];

export default function Lab2() {
    return <Table columns={columns} dataSource={data} />;
}