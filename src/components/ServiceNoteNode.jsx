import React, { memo } from 'react';
import { Handle, Position, useNodeId } from 'reactflow';
import { FaFileWord } from "react-icons/fa";

function ServiceNoteNode() {
  const nodeId = useNodeId();

  return (
    <>
    <Handle style={{ top: 52.5, background: '#555', width: '15px', height: '15px', borderRadius: '20%' }} type="target" position={Position.Left} />
    <div className='node border-solid border-2 rounded-lg bg-white'>
        <div className='border-solid border-b-2 py-1 px-4' >
            <FaFileWord style={{ display: 'inline' }} /> <span className='ml-2'>Nota de Atendimento { nodeId }</span>
        </div>
        <div className='border-solid border-b-2 py-1 px-4'>Input</div>
    </div>
</>
  );
}

export default memo(ServiceNoteNode);
