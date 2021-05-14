import React, { useState, useEffect } from 'react'
import { Descriptions } from 'antd'
import store from './store'



const Header = () => {
  const [header, setHeader] = useState(store.getState().header)
  useEffect(() => {
    setHeader(store.getState().header)
  })
  return (
    <Descriptions title="头部信息" bordered>
      <Descriptions.Item label="魔数" span={2}>
        {header.magic.join(' ')}
      </Descriptions.Item>
      <Descriptions.Item label=""></Descriptions.Item>
      <Descriptions.Item label="平台位数">{header.class}</Descriptions.Item>
      <Descriptions.Item label="数据编码方式">{header.i_data}</Descriptions.Item>
      <Descriptions.Item label="ELF头部版本">{header.e_version}</Descriptions.Item>
      <Descriptions.Item label="硬件平台">{header.abi}</Descriptions.Item>
      <Descriptions.Item label="ELF文件类型">{header.type}</Descriptions.Item>
      <Descriptions.Item label="目标平台架构">{header.machine_type}</Descriptions.Item>
      <Descriptions.Item label="对象文件版本">{header.object_file_version}</Descriptions.Item>
      <Descriptions.Item label="处理器特定标识">{header.processor_flag}</Descriptions.Item>
      <Descriptions.Item label="该头部的长度">{header.header_size}</Descriptions.Item>
      <Descriptions.Item label="入口地址">{header.entrypoint}</Descriptions.Item>
      <Descriptions.Item label="程序头表偏移量">{header.program_header_offset}</Descriptions.Item>
      <Descriptions.Item label="程序头大小">{header.program_header_size}</Descriptions.Item>
      <Descriptions.Item label="段的数量">{header.numberof_segments}</Descriptions.Item>
      <Descriptions.Item label="文件在程序头表中的偏移">{header.program_header_offset}</Descriptions.Item>
      <Descriptions.Item label=""></Descriptions.Item>
    </Descriptions>
  )
}

export default Header
