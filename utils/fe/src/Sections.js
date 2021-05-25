import React, { useState, useEffect } from 'react'
import { Table, Collapse, Button, Space, Modal, Descriptions } from 'antd'
import store from './store'
import {
  getSymbols,
  getText,
  getData,
  getRodata,
  getDynamic,
  getDynstr,
  getDynsym,
  getGot,
  getPlt,
} from './store/actionCreators'

const { Panel } = Collapse

const Sections = () => {
  const [sections, setSections] = useState(store.getState().sections)
  const [redSpan, setRedSpan] = useState(null)
  const [symbols, setSymbols] = useState(store.getState().symbols)
  const [text, setText] = useState(store.getState().text)
  const [e_data, setEData] = useState(store.getState().e_data)
  const [rodata, setRodata] = useState(store.getState().rodata)
  const [dynamic, setDynamic] = useState(store.getState().dynamic)
  const [dynstr, setDynstr] = useState(store.getState().dynstr)
  const [dynsym, setDynsym] = useState(store.getState().dynsym)
  const [got, setGot] = useState(store.getState().got)
  const [plt, setPlt] = useState(store.getState().plt)
  const [isSymbolVisible, setIsSymbolVisible] = useState(false)
  const [isTextVisible, setIsTextVisible] = useState(false)
  const [isRodataVisible, setIsRodataVisible] = useState(false)
  const [isDataVisible, setIsDataVisible] = useState(false)
  const [isDynamicVisible, setIsDynamicVisible] = useState(false)
  const [isDynstrVisible, setIsDynstrVisible] = useState(false)
  const [isDynsymVisible, setIsDynsymVisible] = useState(false)
  const [isGotVisible, setIsGotVisible] = useState(false)
  const [isPltVisible, setIsPltVisible] = useState(false)
  const e_type = store.getState().header.type
  useEffect(() => {
    setSections(store.getState().sections)
    setSymbols(store.getState().symbols)
    setText(store.getState().text)
    setEData(store.getState().data)
    setRodata(store.getState().rodata)
    setDynamic(store.getState().dynamic)
    setDynstr(store.getState().dynstr)
    setDynsym(store.getState().dynsym)
    setPlt(store.getState().plt)
    setGot(store.getState().got)

  }, [
    isSymbolVisible,
    isTextVisible,
    isDataVisible,
    isRodataVisible,
    isDynamicVisible,
    isDynstrVisible,
    isDynsymVisible,
    isPltVisible,
    isGotVisible,
  ])
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

  const handleGetSymbols = () => {
    const action = getSymbols()
    store.dispatch(action)
      .then(() => {
        setIsSymbolVisible(true)
      })
  }
  const handleGetText = () => {
    const action = getText()
    store.dispatch(action)
      .then(() => {
        setIsTextVisible(true)
      })
  }
  const handleGetData = () => {
    const action = getData()
    store.dispatch(action)
      .then(() => {
        setIsDataVisible(true)
      })
  }
  const handleGetRodata = () => {
    const action = getRodata()
    store.dispatch(action)
      .then(() => {
        setIsRodataVisible(true)
      })
  }
  const handleGetDynamic = () => {
    const action = getDynamic()
    store.dispatch(action)
      .then(() => {
        setIsDynamicVisible(true)
      })
  }
  const handleGetDynstr = () => {
    const action = getDynstr()
    store.dispatch(action)
      .then(() => {
        setIsDynstrVisible(true)
      })
  }
  const handleGetDynsym = () => {
    const action = getDynsym()
    store.dispatch(action)
      .then(() => {
        setIsDynsymVisible(true)
      })
  }
  const handleGetPlt = () => {
    const action = getPlt()
    store.dispatch(action)
      .then(() => {
        setIsPltVisible(true)
      })
  }
  const handleGetGot = () => {
    const action = getGot()
    store.dispatch(action)
      .then(() => {
        setIsGotVisible(true)
      })
  }
  const handleOk = () => {
    setIsSymbolVisible(false)
    setIsTextVisible(false)
    setIsDataVisible(false)
    setIsRodataVisible(false)
    setIsDynamicVisible(false)
    setIsDynstrVisible(false)
    setIsDynsymVisible(false)
    setIsGotVisible(false)
    setIsPltVisible(false)
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
  const symColumns = [
    {
      title: 'No.',
      dataIndex: 'sym_index',
      key: 'sym_index'
    },
    {
      title: 'name',
      dataIndex: 'sym_name',
      key: 'sym_name',
    },
    {
      title: 'value',
      dataIndex: 'sym_value',
      key: 'sym_value',
    },
    {
      title: 'size',
      dataIndex: 'sym_size',
      key: 'sym_size',
    },
    {
      title: 'type',
      dataIndex: 'sym_type',
      key: 'sym_type',
    },
    {
      title: 'binding',
      dataIndex: 'sym_bind',
      key: 'sym_bind',
    },
    {
      title: 'visibility',
      dataIndex: 'sym_vis',
      key: 'sym_vis',
    },
    {
      title: 'shndx',
      dataIndex: 'sym_ndx',
      key: 'sym_ndx',
    },
  ]
  return (
    <>
      <Space>
        <Button type="primary" onClick={handleGetSymbols}>Symbols</Button>
        {
          e_type === 'E_TYPE.DYNAMIC'
            ?
            <Space>
              <Button type="primary" onClick={handleGetDynsym}>.dynsym</Button>
              <Button type="primary" onClick={handleGetDynstr}>.dynstr</Button>
              <Button type="primary" onClick={handleGetDynamic}>.dynamic</Button>
            </Space>
            : e_type === 'E_TYPE.EXECUTABLE'
              ?
              <Space>
                <Button type="primary" onClick={handleGetGot}>.got</Button>
                <Button type="primary" onClick={handleGetPlt}>.plt</Button>
              </Space>
              :
              <Space>
                <Button type="primary" onClick={handleGetText}>.text</Button>
                <Button type="primary" onClick={handleGetData}>.data</Button>
                <Button type="primary" onClick={handleGetRodata}>.rodata</Button>
              </Space>
        }
      </Space>
      <br /><br />
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
      <Modal title="Symbols"
        visible={isSymbolVisible}
        onOk={handleOk}
        onCancel={handleOk}
        width={1400}
      >
        <Table
          columns={symColumns}
          dataSource={symbols}
        />
      </Modal>
      <Modal title=".text"
        visible={isTextVisible}
        onOk={handleOk}
        onCancel={handleOk}
        width={1400}
      >
        <p>Flags: {text.flags}</p>
        <p>Flags_list: {text.flags_list}</p>
        <p>Content: {text.content}</p>
        <p>Content_Hex: {text.content_hex}</p>
        <p>Content_Str: {text.content_str}</p>
      </Modal>
      <Modal title=".data"
        visible={isDataVisible}
        onOk={handleOk}
        onCancel={handleOk}
        width={1400}
      >
        {
          e_data
            ? <div>
              <p>Flags: {e_data.flags}</p>
              <p>Flags_list: {e_data.flags_list}</p>
              <p>Content: {e_data.content}</p>
              <p>Content_Hex: {e_data.content_hex}</p>
              <p>Content_Str: {e_data.content_str}</p>
            </div>
            : ''
        }
      </Modal>
      <Modal title=".rodata"
        visible={isRodataVisible}
        onOk={handleOk}
        onCancel={handleOk}
        width={1400}
      >
        <p>Flags: {rodata.flags}</p>
        <p>Flags_list: {rodata.flags_list}</p>
        <p>Content: {rodata.content}</p>
        <p>Content_Hex: {rodata.content_hex}</p>
        <p>Content_Str: {rodata.content_str}</p>
      </Modal>
      <Modal title=".dynamic"
        visible={isDynamicVisible}
        onOk={handleOk}
        onCancel={handleOk}
        width={1400}
      >
        <p>Flags: {dynamic.flags}</p>
        <p>Flags_list: {dynamic.flags_list}</p>
        <p>Content: {dynamic.content}</p>
        <p>Content_Hex: {dynamic.content_hex}</p>
        <p>Content_Str: {dynamic.content_str}</p>
      </Modal>
      <Modal title=".dynstr"
        visible={isDynstrVisible}
        onOk={handleOk}
        onCancel={handleOk}
        width={1400}
      >
        <p>Flags: {dynstr.flags}</p>
        <p>Flags_list: {dynstr.flags_list}</p>
        <p>Content: {dynstr.content}</p>
        <p>Content_Hex: {dynstr.content_hex}</p>
        <p>Content_Str: {dynstr.content_str}</p>
      </Modal>
      <Modal title=".dynsym"
        visible={isDynsymVisible}
        onOk={handleOk}
        onCancel={handleOk}
        width={1400}
      >
        <p>Flags: {dynsym.flags}</p>
        <p>Flags_list: {dynsym.flags_list}</p>
        <p>Content: {dynsym.content}</p>
        <p>Content_Hex: {dynsym.content_hex}</p>
        <p>Content_Str: {dynsym.content_str}</p>
      </Modal>
      <Modal title=".plt"
        visible={isPltVisible}
        onOk={handleOk}
        onCancel={handleOk}
        width={1400}
      >
        <p>Flags: {plt.flags}</p>
        <p>Flags_list: {plt.flags_list}</p>
        <p>Content: {plt.content}</p>
        <p>Content_Hex: {plt.content_hex}</p>
        <p>Content_Str: {plt.content_str}</p>
      </Modal>
      <Modal title=".got"
        visible={isGotVisible}
        onOk={handleOk}
        onCancel={handleOk}
        width={1400}
      >
        <p>Flags: {got.flags}</p>
        <p>Flags_list: {got.flags_list}</p>
        <p>Content: {got.content}</p>
        <p>Content_Hex: {got.content_hex}</p>
        <p>Content_Str: {got.content_str}</p>
      </Modal>
    </>
  )
}

export default Sections
