import React, {useState} from 'react'
import {useDiagram} from '../context/DiagramContext'

const Sidebar = () => {
  const {addNode} = useDiagram()
  const [nodeLabel, setNodeLabel] = useState('')

  const handleAddNode = () => {
    const newNode = {
      id: String(Math.random()),
      type: 'default',
      position: {x: Math.random() * 400, y: Math.random() * 400},
      data: {label: nodeLabel},
    }
    addNode(newNode)
    setNodeLabel('')
  }

  return (
    <div style={{padding: '10px', border: '1px solid #ddd'}}>
      <h3>Sidebar</h3>
      <div>
        <input
          type='text'
          value={nodeLabel}
          onChange={e => setNodeLabel(e.target.value)}
          placeholder='Node Label'
        />
        <button onClick={handleAddNode}>Add Node</button>
      </div>
    </div>
  )
}

export default Sidebar
