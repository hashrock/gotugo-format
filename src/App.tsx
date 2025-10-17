import { useState, type ChangeEvent } from 'react'
import './App.css'
import { parseLine, serialize } from './lib/gotugo'

function App() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    setInput(value)

    // Process each line
    const lines = value.split('\n')
    const results = lines.map(line => {
      if (line.trim() === '') return ''
      const date = parseLine(line)
      return date ? serialize(date) : line
    })
    
    setOutput(results.join('\n'))
  }

  return (
    <div className="container">
      <h1>Gotugo Format</h1>
      <p>下記の日程でご都合いかがでしょうか</p>
      
      <div className="editor-container">
        <div className="editor-section">
          <h2>入力</h2>
          <textarea
            value={input}
            onChange={handleInputChange}
            placeholder="例: 2019年11月17日&#10;11月17日&#10;11/17"
            rows={10}
          />
        </div>
        
        <div className="editor-section">
          <h2>出力</h2>
          <textarea
            value={output}
            readOnly
            rows={10}
          />
        </div>
      </div>
      
      <div className="examples">
        <h3>対応フォーマット:</h3>
        <ul>
          <li>2019年11月17日 → 11月17日（日）</li>
          <li>11月17日 → 11月17日（日）</li>
          <li>11/17 → 11月17日（日）</li>
        </ul>
      </div>
    </div>
  )
}

export default App
