import React from 'react'
import { Table } from 'antd';

const columns = [
  {
    title: '节名(索引值)',
    dataIndex: 'sh_name',
    key: 'sh_name',
    render: text => <a>{text}</a>,
  },
  {
    title: '类型',
    dataIndex: 'sh_type',
    key: 'sh_type',
  },
  {
    title: '标识',
    dataIndex: 'sh_flags',
    key: 'sh_flags',
  },
  {
    title: '首字节地址',
    dataIndex: 'sh_addr',
    key: 'sh_addr'
  },
  {
    title: '文件偏移',
    dataIndex: 'sh_offset',
    key: 'sh_offset'
  },
  {
    title: '字节数',
    dataIndex: 'sh_size',
    key: 'sh_size'
  },
  {
    title: '节头表索引',
    dataIndex: 'sh_link',
    key: 'sh_link'
  },
  {
    title: '额外信息',
    dataIndex: 'sh_info',
    key: 'sh_info'
  },
  {
    title: '对齐限制',
    dataIndex: 'sh_addralign',
    key: 'sh_addralign'
  },
  {
    title: '表项字节大小',
    dataIndex: 'sh_entsize',
    key: 'sh_entsize'
  },
]

const data = [
  {
    key: 's1',
    sh_name: '',
    sh_type: 'NULL',
    sh_flags: '',
    sh_addr: '0000000000000000',
    sh_offset: '00000000',
    sh_size: '0000000000000000',
    sh_link: '0',
    sh_info: '0',
    sh_addralign: '0',
    sh_entsize: '0000000000000000',
  },
  {
    key: 's2',
    sh_name: '.interp',
    sh_type: 'PROGBITS',
    sh_flags: '',
    sh_addr: '0000000000000000',
    sh_offset: '00000000',
    sh_size: '0000000000000000',
    sh_link: '0',
    sh_info: '0',
    sh_addralign: '0',
    sh_entsize: '0000000000000000',
  },
]

const Sections = () => {
  return (
    <Table columns={columns} dataSource={data} />
  )
}

export default Sections
