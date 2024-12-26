import React, {useState} from 'react'
import {useDiagram} from '../context/DiagramContext'

const NodeEditor = ({node, onClose}) => {
  const {updateNode} = useDiagram()
  const [label, setLabel] = useState(node.data.label)

  const handleSave = () => {
    updateNode({...node, data: {...node.data, label}})
    onClose()
  }

  return (
    <div>
      <h3>Edit Node</h3>
      <input
        type='text'
        value={label}
        onChange={e => setLabel(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  )
}

export default NodeEditor
