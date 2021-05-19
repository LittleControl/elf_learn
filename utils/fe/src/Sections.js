import React, { useState, useEffect } from 'react'
import { Table, Collapse } from 'antd'
import store from './store'

const { Panel } = Collapse

const Sections = () => {
  const [sections, setSections] = useState(store.getState().sections)
  const [redSpan, setRedSpan] = useState(null)
  useEffect(() => {
    setSections(store.getState().sections)
  }, [])
  const sh_strtab = store.getState().sh_strtab
  const strtab_index = [0, 1]
  const strtab = []
  strtab.push(['0'])
  let temp = []
  for (let i = 1; i < sh_strtab.length; i++) {
    if (sh_strtab[i] !== 0) {
      temp.push(sh_strtab[i])
    } else {
      strtab_index.push(i + 1)
      strtab.push(temp)
      temp = []
    }
  }
  console.log(sh_strtab)
  console.log(strtab_index)
  console.log(strtab)

  const hlStrtab = (e) => {
    const name_idx = e.target.innerHTML
    const left = name_idx.indexOf('(')
    const f_index = name_idx.slice(left + 1, -1) * 1
    const index = strtab_index.indexOf(f_index)
    const item = document.getElementById(index)
    if (redSpan) {
      redSpan.style.color = ''
    }
    setRedSpan(item)
    item.style.color = 'red'
  }

  const columns = [
    {
      title: 'No.',
      dataIndex: 'index_v',
      key: 'index_v'
    },
    {
      title: '节名(索引值)',
      dataIndex: 'sh_name_and_index',
      key: 'sh_name_and_index',
      render: text => <a onMouseEnter={hlStrtab} >{text}</a>,
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
  return (
    <>
      <Table
        columns={columns}
        dataSource={sections}
        pagination={{
          hideOnSinglePage: true,
          pageSize: 6
        }}
      />
      <Collapse defaultActiveKey={['strtab001']}>
        <Panel header="节名字符串表" key="strtab001">
          {strtab.map((value, index) => (
            <span key={index + '' + value} id={index} >{value.join(' ')}{' '}</span>
          ))}
        </Panel>
      </Collapse>
    </>
  )
}

export default Sections
