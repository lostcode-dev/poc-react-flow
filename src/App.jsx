import React, { useState, useRef, useCallback } from 'react';
import ReactFlow, {
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  ReactFlowProvider
} from 'reactflow';

import 'reactflow/dist/style.css';

import Sidebar from './components/Sidebar.jsx';
import SmartMenuNode from './components/SmartMenuNode.jsx';
import TeamNode from './components/TeamNode.jsx';
import RpaNode from './components/RpaNode.jsx';
import ServiceNoteNode from './components/ServiceNoteNode.jsx';
import ScriptNode from './components/ScriptNode.jsx';
import AudioMessageNode from './components/AudioMessageNode.jsx';
import InputDataNode from './components/InputDataNode.jsx';


const nodeTypes = {
  smartMenuNode: SmartMenuNode,
  teamNode: TeamNode,
  rpaNode: RpaNode,
  serviceNoteNode: ServiceNoteNode,
  scriptNode: ScriptNode,
  audioMessageNode: AudioMessageNode,
  inputDataNode: InputDataNode 
};

const initialNodes = [
  { id: '1', type: 'smartMenuNode', position: { x: 150, y: 200 }, data: { label: '1' } },
  { id: '2', type: 'teamNode', position: { x: 500, y: 200 }, data: { label: '1' } },
  { id: '3', type: 'teamNode', position: { x: 500, y: 400 }, data: { label: '1' } },
  { id: '4', type: 'serviceNoteNode', position: { x: 700, y: 300 }, data: { label: '1' } },
];

const initialEdges = [
  {
    id: 'e1a-2',
    source: '1',
    target: '2',
    sourceHandle: 'a',
    animated: true,
    style: { stroke: '#000' },
  },
  {
    id: 'e1a-3',
    source: '1',
    target: '3',
    sourceHandle: 'j',
    animated: true,
    style: { stroke: '#000' },
  },
  {
    id: 'e2a-4',
    source: '2',
    target: '4',
    animated: true,
    style: { stroke: '#000' },
  },
  {
    id: 'e3a-4',
    source: '3',
    target: '4',
    animated: true,
    style: { stroke: '#000' },
  },
];


let id = 0;
const getId = () => `dndnode_${id++}`;

export default function App() {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData('application/reactflow');

      // check if the dropped element is valid
      if (typeof type === 'undefined' || !type) {
        return;
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });

      const newNode = {
        id: getId(),
        type,
        position,
        data: { label: `${type} node` },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );

  const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex' }}>
      <ReactFlowProvider>
        <Sidebar />
        <div style={{ width: '100%', height: '100%', display: 'flex' }} className="reactflow-wrapper" ref={reactFlowWrapper}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            nodeTypes={nodeTypes}
            onInit={setReactFlowInstance}
            onDrop={onDrop}
            onDragOver={onDragOver}
          >
            <Background variant="dots" gap={12} size={1} />
          </ReactFlow>
        </div>
      </ReactFlowProvider>

    </div>
  );
}