import React, { useState, useRef, useCallback } from 'react';
import ReactFlow, {
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  ReactFlowProvider,
  Panel,
  useReactFlow
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
import StartNode from './components/StartNode.jsx';


const nodeTypes = {
  smartMenuNode: SmartMenuNode,
  teamNode: TeamNode,
  rpaNode: RpaNode,
  serviceNoteNode: ServiceNoteNode,
  scriptNode: ScriptNode,
  audioMessageNode: AudioMessageNode,
  inputDataNode: InputDataNode,
  startNode: StartNode
};


const initialNodes = [
  {
    id: '1',
    type: 'startNode',
    position: { x: 0, y: 0 },
    className: 'noHaveEdges',
  },
];

const initialEdges = [];


let id = initialNodes.length;
const getId = () => `${++id}`;
const flowKey = 'example-flow';

function Flow(props) {
  const reactFlowWrapper = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const [firstNode, setFirstNode] = useState(1);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const { setViewport } = useReactFlow();

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
      const type = event.dataTransfer.getData('application/reactflow');

      if (typeof type === 'undefined' || !type) {
        return;
      }

      const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left,
        y: event.clientY - reactFlowBounds.top,
      });

      const id = getId();
      const newNode = {
        id,
        type,
        position,
        className: 'noHaveEdges',
      };

      if (id == 1) {
        props.parentCallback(false);
        setFirstNode(newNode);
      }

      setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
  );

  const onSave = useCallback(() => {
    const haveNodeWithoutEdge = reactFlowInstance.getNodes().filter((node) => node.className.includes('noHaveEdges'));

    if (reactFlowInstance && !haveNodeWithoutEdge.length) {
      const flow = { ...reactFlowInstance.toObject(), firstNode };
      localStorage.setItem(flowKey, JSON.stringify(flow));
      console.log(JSON.stringify(flow))
    } else {
      alert("Não é permitido salvar com Nó sem ligação.");
    }
  }, [reactFlowInstance]);

  const onRestore = useCallback(() => {
    const restoreFlow = async () => {
      const flow = JSON.parse(localStorage.getItem(flowKey));
      console.log(JSON.parse(localStorage.getItem(flowKey)));
      if (flow) {
        const { x = 0, y = 0, zoom = 1 } = flow.viewport;
        setNodes(flow.nodes || []);
        setEdges(flow.edges || []);
        setViewport({ x, y, zoom });
      }
    };

    restoreFlow();
  }, [setNodes, setViewport]);

  const onConnect = useCallback((params) => {
    const getNodes = reactFlowInstance.getNodes();
    let flowNodes = getNodes.map(node => {
      if(node.id === params.source ||
         node.id === params.target) {
        node.className = '';
      }
      return node
    })

    setNodes(flowNodes || []);

    params.animated = true
    params.style = { stroke: '#000' }
    setEdges((eds) => addEdge(params, eds))
  }, [setNodes, reactFlowInstance]);

  return (

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
        <Panel position="top-right">
          <button onClick={onSave}>Salvar</button>
          <button onClick={onRestore}>Restaurar</button>
        </Panel>
        <Background variant="dots" gap={12} size={1} />
      </ReactFlow>
    </div>

  );
}

function FlowWithProvider(props) {
  const [disabled, setDisabled] = useState(!id);

  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex' }}>
      <ReactFlowProvider>
        <Sidebar
          disabled={disabled}
        />
        <Flow
          parentCallback={setDisabled}
          {...props}
        />
      </ReactFlowProvider>
    </div>
  );
}

export default FlowWithProvider;

