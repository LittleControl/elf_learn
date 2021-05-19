import React, { useEffect, useState } from 'react'
import { Table, Drawer } from 'antd'
import store from './store'

const Segments = () => {
  const [flags, setFlags] = useState(false)
  const showFlags = () => {
    setFlags(true)
  }
  const closeFlags = () => {
    setFlags(false)
  }
  const flagRender = (value, row, index) => {
    const obj = {
      children: <a onClick={showFlags} >{value}</a>,
      props: {}
    }
    return obj
  }
  const columns = [
    {
      title: 'No.',
      dataIndex: 'index_v',
      key: 'index_v'
    },
    {
      title: '类型',
      dataIndex: 'type',
      key: 'type',
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
      key: 'flags',
      render: flagRender,
    },
    {
      title: '对齐',
      dataIndex: 'align',
      key: 'align'
    }
  ]
  const flagColumns = [
    { title: '名称', dataIndex: 'f_name', key: 'f_name' },
    { title: '值', dataIndex: 'f_value', key: 'f_value' },
    { title: '含义', dataIndex: 'f_mean', key: 'f_mean' },
  ]
  const flagData = [
    { key: 'f001', f_name: 'PF_X', f_value: '0x1', f_mean: '可执行' },
    { key: 'f002', f_name: 'PF_W', f_value: '0x2', f_mean: '只写' },
    { key: 'f003', f_name: 'PF_R', f_value: '0x4', f_mean: '只读' },
    { key: 'f004', f_name: 'PF_MASKOS', f_value: '0x0ff00000', f_mean: '与特定系统有关' },
    { key: 'f005', f_name: 'PF_MASKPROC', f_value: '0xf0000000', f_mean: '与特定处理器有关' },
  ]
  const flagPerColumns = [
    { title: '标识位', dataIndex: 'fp_flag', key: 'fp_flag' },
    { title: '值', dataIndex: 'fp_value', key: 'fp_value' },
    { title: '所需权限', dataIndex: 'fp_per', key: 'fp_per' },
    { title: '实际权限', dataIndex: 'fp_tper', key: 'fp_tper' },
  ]
  const flagPerData = [
    { key: 'fp001', fp_flag: 'none', fp_value: 0, fp_per: '无任何权限', fp_tper: '无任何权限' },
    { key: 'fp002', fp_flag: 'PF_X', fp_value: 1, fp_per: '可执行', fp_tper: '可读，可执行' },
    { key: 'fp003', fp_flag: 'PF_W', fp_value: 2, fp_per: '可写', fp_tper: '可读，可写，可支持;' },
    { key: 'fp004', fp_flag: 'PF_W + PF_X', fp_value: 3, fp_per: '可写，可执行', fp_tper: '可读，可写，可执行' },
    { key: 'fp005', fp_flag: 'PF_R', fp_value: 4, fp_per: '可读', fp_tper: '可读，可执行' },
    { key: 'fp006', fp_flag: 'PF_R + PF_X', fp_value: 5, fp_per: '可读可执行', fp_tper: '可读，可执行' },
    { key: 'fp007', fp_flag: 'PF_R + PF_W', fp_value: 6, fp_per: '可读，可行', fp_tper: '可读，可写，可执行' },
    { key: 'fp008', fp_flag: 'PF_R + PF_W + PF_X', fp_value: 7, fp_per: '可读，可写，可执行', fp_tper: '可读，可写，可执行' },
  ]
  const [segments, setSegments] = useState(store.getState().segments)
  useEffect(() => {
    setSegments(store.getState().segments)
  }, [])
  return (
    <>
      <Table columns={columns} dataSource={segments} />
      <Drawer
        title="关于段标记的一些说明"
        width="400"
        placement="left"
        closable={false}
        onClose={closeFlags}
        visible={flags}
      >
        <p>当为可加载段创建内存镜像时，系统会按照 p_flags 的指示给段赋予一定的权限。</p>
        <Table
          columns={flagColumns}
          dataSource={flagData}
          size="small"
          pagination={{
            hideOnSinglePage: true
          }}
        />
        <p>如果权限值为 0，表示无任何权限。实际的读写权限还要依赖于内存管理器,在不同的操作系统上，内存管理单元的做法可能会不同。在有些组合方式下，系统给出的权限会比所指定的权限大，但可写权限 PF_W 外，如果 p_flags 中没有指定 PF_W 的话，系统一定不会给出写权限。下表给出了在一些权限组合的情况下系统实际应赋予的权限。</p>
        <Table
          columns={flagPerColumns}
          dataSource={flagPerData}
          size="small"
          pagination={{
            hideOnSinglePage: true
          }}
        />
      </Drawer>
    </>
  )
}

export default Segments