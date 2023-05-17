import React, { memo, useCallback, useState } from 'react';
import { Handle, Position, useNodeId, useReactFlow, useStoreApi } from 'reactflow';
import { FaPlay } from "react-icons/fa";
import { useUpdateNodeInternals } from 'reactflow';

function InputDataNode() {
    const [count, setCount] = useState(1);
    const updateNodeInternals = useUpdateNodeInternals();
    const nodeId = useNodeId();
    const reactFlowInstance = useReactFlow();

    console.log(reactFlowInstance.getNodes());
    console.log(reactFlowInstance.getEdges());

    const store = useStoreApi();

    const onClick = useCallback(() => {
      const { nodeInternals } = store.getState();
      const nodesLength = Array.from(nodeInternals.values()).length || 0;
      store.setState([])
    }, []);

    return (
        <>
            <div onClick={onClick} className='node border-solid border-2 rounded-lg bg-white'>
                <div className='border-solid border-b-2 py-1 px-4' >
                    <FaPlay style={{ display: 'inline' }} /> <span className='ml-2'>Início { nodeId } </span>
                </div>
                <div className='border-solid border-b-2 py-1 px-4'>Ouput</div>
            </div>
            <Handle style={{ background: '#555', width: '15px', height: '15px', borderRadius: '20%' }} type="source" position={Position.Right} />
        </>
    );
}

export default memo(InputDataNode);
