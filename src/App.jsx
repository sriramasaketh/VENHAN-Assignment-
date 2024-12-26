import React, {useEffect} from 'react'
import {DiagramProvider, useDiagram} from './context/DiagramContext'
import Diagram from './components/Diagram'
import Sidebar from './components/Sidebar'
import sampleMetadata from './data/sampleMetadata.json'
import './App.css'

const App = () => {
  const {addNode, addEdge} = useDiagram()

  useEffect(() => {
   
    sampleMetadata.nodes.forEach(node => addNode(node))
    sampleMetadata.edges.forEach(edge => addEdge(edge))
  }, [addNode, addEdge])

  return (
    <DiagramProvider>
      <div style={{display: 'flex', gap: '10px'}}>
        <Sidebar />
        <Diagram />
      </div>
    </DiagramProvider>
  )
}

export default App
