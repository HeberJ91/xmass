import { useState } from 'react'

import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="xmas">
        <h1>Merry Christmas</h1>
        <div class="tree">
          <div class="ball">
            <div class="ball-1"></div>
            <div class="ball-2"></div>
            <div class="ball-3"></div>
            <div class="ball-4"></div>
            <div class="ball-5"></div>
            <div class="ball-6"></div>
            <div class="ball-7"></div>
            <div class="ball-8"></div>
            <div class="ball-9"></div>
          </div>
          <div class="tree-1"></div>
          <div class="tree-2"></div>
          <div class="tree-3"></div>
          <div class="tree-4"></div>
          <div class="tree-5"></div>
          <div class="tree-6"></div>
          <div class="tree-7"></div>
          <div class="tree-8"></div>
        </div>
        <div class="trunk"></div>
      </div>
    </>
  )
}

export default App
