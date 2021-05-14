import React, { useState, useEffect } from 'react'
import { Row, Col, Typography, Input, Card } from 'antd'
import store from './store'
import Header from './Header'
import Segments from './Segments'
import Sections from './Sections'
import { postFileName } from './store/actionCreators'
import './App.css'

const { Title } = Typography
const { Search } = Input

const tabList = [
  { key: 'header', tab: 'header', },
  { key: 'segments', tab: 'segments', },
  { key: 'sections', tab: 'sections', },
]

const contentList = {
  header: <Header />,
  segments: <Segments />,
  sections: <Sections />,
}

const App = () => {
  const [key, setKey] = useState('header')
  const [file, setFile] = useState(store.getState().file)
  const onTabChange = (key) => {
    setKey(key)
  }
  const onSearch = value => {
    if (value) {
      const action = postFileName(value)
      store.dispatch(action)
        .then(() => {
          setFile(value)
        })
    }
  }
  return (
    <>
      <Row>
        <Col span={8}></Col>
        <Col span={8}>
          <Title>ELF文件分析工具</Title>
          <Search
            placeholder="要分析的文件路径"
            allowClear
            enterButton="点击分析"
            size="large"
            onSearch={onSearch}
          />
        </Col>
        <Col span={8}></Col>
      </Row>
      {file
        ? <Row>
          <Card
            style={{ width: '100%' }}
            title={file}
            tabList={tabList}
            activeTabKey={key}
            onTabChange={key => {
              onTabChange(key)
            }}
          >
            {contentList[key]}
          </Card>
        </Row>
        : ''
      }

    </>
  )
}

export default App
