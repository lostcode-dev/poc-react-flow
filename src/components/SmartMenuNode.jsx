import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';
import { FaBookOpen } from "react-icons/fa";


function SmartMenuNode() {
    return (
        <>
            <div className='border-solid border-2 rounded-lg bg-white'>
                <div className='border-solid border-b-2 py-1 px-4' >
                    <FaBookOpen style={{ display: 'inline' }} /> <span className='ml-2'>Menu Inteligente</span>
                </div>
                <div className='border-solid border-b-2 py-1 px-4'>#0</div>
                <div className='border-solid border-b-2 py-1 px-4'>#1</div>
                <div className='border-solid border-b-2 py-1 px-4'>#2</div>
                <div className='border-solid border-b-2 py-1 px-4'>#3</div>
                <div className='border-solid border-b-2 py-1 px-4'>#4</div>
                <div className='border-solid border-b-2 py-1 px-4'>#5</div>
                <div className='border-solid border-b-2 py-1 px-4'>#6</div>
                <div className='border-solid border-b-2 py-1 px-4'>#7</div>
                <div className='border-solid border-b-2 py-1 px-4'>#8</div>  
                <div className='py-1 px-4'>#9</div>                
            </div>
            <Handle id="a" style={{ top: 52.5, background: '#555', width: '15px', height: '15px', borderRadius: '20%' }} type="source" position={Position.Right} />
            <Handle id="b" style={{ top: 87.5, background: '#555', width: '15px', height: '15px', borderRadius: '20%' }} type="source" position={Position.Right} />
            <Handle id="c" style={{ top: 122, background: '#555', width: '15px', height: '15px', borderRadius: '20%' }} type="source" position={Position.Right} />
            <Handle id="d" style={{ top: 155, background: '#555', width: '15px', height: '15px', borderRadius: '20%' }} type="source" position={Position.Right} />
            <Handle id="e" style={{ top: 190, background: '#555', width: '15px', height: '15px', borderRadius: '20%' }} type="source" position={Position.Right} />
            <Handle id="f" style={{ top: 225, background: '#555', width: '15px', height: '15px', borderRadius: '20%' }} type="source" position={Position.Right} />
            <Handle id="g" style={{ top: 260, background: '#555', width: '15px', height: '15px', borderRadius: '20%' }} type="source" position={Position.Right} />
            <Handle id="h" style={{ top: 295, background: '#555', width: '15px', height: '15px', borderRadius: '20%' }} type="source" position={Position.Right} />
            <Handle id="i" style={{ top: 325, background: '#555', width: '15px', height: '15px', borderRadius: '20%' }} type="source" position={Position.Right} />
            <Handle id="j" style={{ top: 357.5, background: '#555', width: '15px', height: '15px', borderRadius: '20%' }} type="source" position={Position.Right} />
        </>
    );
}

export default memo(SmartMenuNode);
