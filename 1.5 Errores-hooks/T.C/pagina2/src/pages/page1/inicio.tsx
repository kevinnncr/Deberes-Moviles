import React from 'react';
import {  Table  } from 'antd';
import type { TableProps } from 'antd';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  
  
];

const data: DataType[] = [
  {
    key: '1',
    name: 'Kevin ',
    age: 20,
    address: 'Perro loma',
  },
  {
    key: '2',
    name: 'Belu',
    age: 42,
    address: 'Lejos',
  },
  {
    key: '3',
    name: 'Julio Jaramillo',
    age: 32,
    address: 'Not Found',
  },
];

const Inicio: React.FC = () => <Table columns={columns} dataSource={data} />;

export default Inicio;