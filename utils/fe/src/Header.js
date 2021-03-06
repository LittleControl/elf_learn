import React, { useState, useEffect } from 'react'
import { Descriptions, Card, Divider, Row, Col } from 'antd'
import store from './store'



const Header = () => {
  const [header, setHeader] = useState(store.getState().header)
  useEffect(() => {
    setHeader(store.getState().header)
  })
  return (
    <>
      <Descriptions title="头部信息" bordered>
        <Descriptions.Item label="魔数" span={2}>
          {header.magic.join(' ')}
        </Descriptions.Item>
        <Descriptions.Item label=""></Descriptions.Item>
        <Descriptions.Item label="平台位数">{header.class}</Descriptions.Item>
        <Descriptions.Item label="数据编码方式">
          {header.i_data === 'ELF_DATA.LSB'
            ? header.i_data + '(小端模式)'
            : header.i_data + '(大端模式)'
          }
        </Descriptions.Item>
        <Descriptions.Item label="ELF头部版本">{header.e_version}</Descriptions.Item>
        <Descriptions.Item label="硬件平台">{header.abi}</Descriptions.Item>
        <Descriptions.Item label="ELF文件类型">
          {header.type === 'E_TYPE.RELOCATABLE'
            ? header.type + '(可重定位文件)'
            : header.type === 'E_TYPE.EXECUTABLE'
              ? header.type + '（可执行文件）'
              : header.type === 'E_TYPE.DYNAMIC'
                ? header.type + '(共享目标文件)'
                : header.type + '(核心转存文件)'
          }
        </Descriptions.Item>
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
      <Divider orientation="left">数据结构定义</Divider>
      <Row>
        <Col span={12}>
          <Card>
            <p>
              <code>{'typedef struct'}</code><br />
              <code>{'{'}</code><br />
              <code>&nbsp;&nbsp;unsigned char e_ident[EI_NIDENT];</code><br />
              <code>&nbsp;&nbsp;Elf64_Half    e_type;</code><br />
              <code>&nbsp;&nbsp;Elf64_Half    e_machine;</code><br />
              <code>&nbsp;&nbsp;Elf64_Addr    e_entry;</code><br />
              <code>&nbsp;&nbsp;Elf64_Off e_phoff;</code><br />
              <code>&nbsp;&nbsp;Elf64_Off e_shoff;</code><br />
              <code>&nbsp;&nbsp;Elf64_Word    e_flags;</code><br />
              <code>&nbsp;&nbsp;Elf64_Half    e_ehsize;</code><br />
              <code>&nbsp;&nbsp;Elf64_Half    e_phentsize;</code><br />
              <code>&nbsp;&nbsp;Elf64_Half    e_phnum;</code><br />
              <code>&nbsp;&nbsp;Elf64_Half    e_shentsize;</code><br />
              <code>&nbsp;&nbsp;Elf64_Half    e_shnum;</code><br />
              <code>&nbsp;&nbsp;Elf64_Half    e_shstrndx;</code><br />
              <code>{'} Elf64_Ehdr;'}</code>
            </p>

          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
      </Row>


    </>
  )
}

export default Header
