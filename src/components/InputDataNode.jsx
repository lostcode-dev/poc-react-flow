import React, { memo } from 'react';
import { Handle, Position, useNodeId } from 'reactflow';
import { FaFile } from "react-icons/fa";

function InputDataNode() {
    const nodeId = useNodeId();

    return (
        <>
            <Handle style={{ top: 52.5, background: '#555', width: '15px', height: '15px', borderRadius: '20%' }} type="target" position={Position.Left} />
            <div className='node border-solid border-2 rounded-lg bg-white'>
                <div className='border-solid border-b-2 py-1 px-4' >
                    <FaFile style={{ display: 'inline' }} /> <span className='ml-2'>Entrada de Dados { nodeId }</span>
                </div>
                <div className='border-solid border-b-2 py-1 px-4'>Input</div>
                <div className='border-solid border-b-2 py-1 px-4'>Ouput</div>
            </div>
            <Handle style={{ top: 87.5, background: '#555', width: '15px', height: '15px', borderRadius: '20%' }} type="source" position={Position.Right} />
        </>
    );
}

export default memo(InputDataNode);
