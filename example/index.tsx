import 'antd/dist/antd.css'
import * as React from 'react'
import { render } from 'react-dom'
import JSONTree from '../src'

const data = {
  array: [11111, 2, 3],
  boolean: true,
  color: '#82b92c',
  null: null,
  number: 123,
  object: {
    a: 'b',
    c: 'd',
    e: 'f'
  },
  string: 'Hello World'
}
const App = () => (
  <div>
    <JSONTree data={data} />
  </div>
)

render(<App />, document.querySelector('#app'))
