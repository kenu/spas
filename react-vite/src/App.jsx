import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import HiThere from './ch01/HiThere.jsx'
import ListArea from './ch01/ListArea.jsx'
import ColorTest from './ch02/ColorTest.jsx'
import ContextTest from './ch02/ContextTest.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
        <section>
          <h3>Hello World</h3>
        </section>
        <HiThere />
        <ListArea />
        <ColorTest />
        <ContextTest />
      </header>
    </div>
  )
}

export default App
