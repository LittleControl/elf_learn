import React from 'react'
import { Table } from 'antd';

const columns = [
  {
    title: '类型',
    dataIndex: 'type',
    key: 'type',
    render: text => <a>{text}</a>,
  },
  {
    title: '偏移',
    dataIndex: 'offset',
    key: 'offset',
  },
  {
    title: '虚拟地址',
    dataIndex: 'virtAddr',
    key: 'virtAddr',
  },
  {
    title: '物理地址',
    dataIndex: 'physAddr',
    key: 'physAddr'
  },
  {
    title: '文件大小',
    dataIndex: 'fileSize',
    key: 'fileSize'
  },
  {
    title: '内存大小',
    dataIndex: 'memSize',
    key: 'memSize'
  },
  {
    title: '标记',
    dataIndex: 'flags',
    key: 'flags'
  },
  {
    title: '对齐',
    dataIndex: 'align',
    key: 'align'
  }
]

const data = [
  {
    key: '1',
    type: 'PHDR',
    offset: '0x0000000000000040',
    virtAddr: '0x0000000000000040',
    physAddr: '0x0000000000000040',
    fileSize: '0x0000000000000268',
    memSize: '0x0000000000000268',
    flags: 'R',
    align: '0x8'
  },
  {
    key: '2',
    type: 'INTERP',
    offset: '0x0000000000000040',
    virtAddr: '0x0000000000000040',
    physAddr: '0x0000000000000040',
    fileSize: '0x0000000000000268',
    memSize: '0x0000000000000268',
    flags: 'R',
    align: '0x8'
  }
]

const Segments = () => {
  return (
    <Table columns={columns} dataSource={data} />
  )
}

export default Segments