import React, {createContext, useContext, useState} from 'react'

const DiagramContext = createContext()

export const DiagramProvider = ({children}) => {
  const [nodes, setNodes] = useState([])
  const [edges, setEdges] = useState([])

  const addNode = newNode => setNodes(prev => [...prev, newNode])
  const updateNode = updatedNode =>
    setNodes(prev =>
      prev.map(node => (node.id === updatedNode.id ? updatedNode : node)),
    )
  const deleteNode = nodeId =>
    setNodes(prev => prev.filter(node => node.id !== nodeId))

  const addEdge = newEdge => setEdges(prev => [...prev, newEdge])
  const deleteEdge = edgeId =>
    setEdges(prev => prev.filter(edge => edge.id !== edgeId))

  return (
    <DiagramContext.Provider
      value={{
        nodes,
        edges,
        addNode,
        updateNode,
        deleteNode,
        addEdge,
        deleteEdge,
      }}
    >
      {children}
    </DiagramContext.Provider>
  )
}

export const useDiagram = () => useContext(DiagramContext)
