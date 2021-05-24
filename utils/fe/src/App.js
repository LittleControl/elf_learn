import React, { useState, useEffect } from 'react'
import { Row, Col, Typography, Input, Card } from 'antd'
import store from './store'
import Header from './Header'
import Segments from './Segments'
import Sections from './Sections'
import { postFileName, getSections, getSegments } from './store/actionCreators'
import './App.css'

const { Title } = Typography
const { Search } = Input

const tabList = [
  { key: 'Header', tab: 'Header', },
  { key: 'Segments', tab: 'Segments', },
  { key: 'Sections', tab: 'Sections', },
]

const contentList = {
  Header: <Header />,
  Segments: <Segments />,
  Sections: <Sections />,
}

const App = () => {
  const [key, setKey] = useState('Header')
  const [file, setFile] = useState(store.getState().file)
  const onTabChange = (key) => {
    if (key === 'Header') {
      setKey(key)
    }
    if (key === 'Segments') {
      if (store.getState().segments[0]) {
        setKey(key)
      } else {
        const action = getSegments()
        store.dispatch(action)
          .then(() => {
            setKey(key)
          })
      }
    }
    if (key === 'Sections') {
      if (store.getState().sections[0]) {
        setKey(key)
      } else {
        const action = getSections()
        store.dispatch(action)
          .then(() => {
            setKey(key)
          })
      }
    }
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
      <br />
      <Row>
        <Col span={8}></Col>
        <Col span={8}>
          <Title style={{ textAlign: 'center' }}>ELF文件分析工具</Title>
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
