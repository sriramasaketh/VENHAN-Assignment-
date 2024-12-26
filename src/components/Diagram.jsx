import React from 'react'
import ReactFlow, {Controls, Background} from 'react-flow-renderer'
import {useDiagram} from '../context/DiagramContext'

const Diagram = () => {
  const {nodes, edges} = useDiagram()

  return (
    <div style={{height: '80vh', border: '1px solid #ddd'}}>
      <ReactFlow nodes={nodes} edges={edges} fitView>
        <Controls />
        <Background color='#aaa' gap={16} />
      </ReactFlow>
    </div>
  )
}

export default Diagram
