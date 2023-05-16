import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';
import { FaPlay } from "react-icons/fa";

function InputDataNode() {
    return (
        <>
            <div onClick={() => console.log('teste')} className='node border-solid border-2 rounded-lg bg-white'>
                <div className='border-solid border-b-2 py-1 px-4' >
                    <FaPlay style={{ display: 'inline' }} /> <span className='ml-2'>Início</span>
                </div>
                <div className='border-solid border-b-2 py-1 px-4'>Ouput</div>
            </div>
            <Handle style={{ background: '#555', width: '15px', height: '15px', borderRadius: '20%' }} type="source" position={Position.Right} />
        </>
    );
}

export default memo(InputDataNode);
