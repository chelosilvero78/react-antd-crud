import React, { useState, useEffect, useRef } from 'react'
import ReactAntCrud from './ReactAntCrud'
import Counter from './utils/CounterUseRef'
// import ReactAntCrud from './lib/index'
// import ReactAntCrud from 'react-ant-crud'
import './App.css'

import * as sample from './sample'

import { Layout } from 'antd'
const { Header, Content } = Layout


function useInterval(callback, delay) {
  const savedCallback = useRef()

  // Remember the latest callback.(recordar la ultima devolucion de llamada)
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

function App() {
  const makeTimeString = (dateObj) => new Intl.DateTimeFormat('default', {
    hour: 'numeric',
    minute: 'numeric',
    //second: 'numeric'
  }).format(dateObj)


  let [clock, setClock] = useState(makeTimeString(new Date()))

  useInterval(() => {
    const newDate = new Date()
    setClock(makeTimeString(newDate))
  }, 60000)

  return (
    <Layout className="App">
      <Header style={{ background: '#eee', paddingLeft: 18, fontWeight: 600,fontWeight:'bold',color:"teal"}}>{clock}</Header>
      <Content>
        <ReactAntCrud {...sample} />
        <Counter/>
      </Content>
    </Layout>
  )
}

export default App
