import React from 'react'
import ReactDom from 'react-dom'

const Greetings = () => {
  return (
    <h1>Hello World</h1>
  )
}

ReactDom.render(<Greetings/>, document.getElementById('root'))