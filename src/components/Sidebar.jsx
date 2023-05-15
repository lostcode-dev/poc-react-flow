import React from 'react';
import { FaBookOpen, FaUsers, FaFile, FaFileWord, FaCode, FaVolumeUp, FaArrowRight } from "react-icons/fa";

export default ({ disabled }) => {
    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };

    return (
        <aside className="bg-slate-100 px-2 py-2" style={{ minWidth: '300px' }}>
            <h2 className="font-bold text-gray-800 mb-4">Opções</h2>
            <button style={{ display: 'flex', alignItems: 'center' }} className="w-full font-bold mb-4 rounded-lg px-8 py-4 text-gray-600 bg-white" onDragStart={(event) => onDragStart(event, 'smartMenuNode')} draggable>
                <FaBookOpen style={{ display: 'inline' }} /> <span className='ml-2'>Menu Inteligente</span>
            </button>
            <button disabled={disabled} style={{ display: 'flex', alignItems: 'center' }} className="w-full font-bold mb-4 rounded-lg px-8 py-4 text-gray-600 bg-white" onDragStart={(event) => onDragStart(event, 'teamNode')} draggable>
                <FaUsers style={{ display: 'inline' }} /> <span className='ml-2'>Equipe</span>
            </button>
            <button disabled={disabled} style={{ display: 'flex', alignItems: 'center' }} className="w-full font-bold mb-4 rounded-lg px-8 py-4 text-gray-600 bg-white" onDragStart={(event) => onDragStart(event, 'rpaNode')} draggable>
                <FaFile style={{ display: 'inline' }} /> <span className='ml-2'>Rpa</span>
            </button>
            <button disabled={disabled} style={{ display: 'flex', alignItems: 'center' }} className="w-full font-bold mb-4 rounded-lg px-8 py-4 text-gray-600 bg-white" onDragStart={(event) => onDragStart(event, 'serviceNoteNode')} draggable>
                <FaFileWord style={{ display: 'inline' }} /> <span className='ml-2'>Nota de Atendimento</span>
            </button>
            <button disabled={disabled} style={{ display: 'flex', alignItems: 'center' }} className="w-full font-bold mb-4 rounded-lg px-8 py-4 text-gray-600 bg-white" onDragStart={(event) => onDragStart(event, 'scriptNode')} draggable>
                <FaCode style={{ display: 'inline' }} /> <span className='ml-2'>Script</span>
            </button>
            <button disabled={disabled} style={{ display: 'flex', alignItems: 'center' }} className="w-full font-bold mb-4 rounded-lg px-8 py-4 text-gray-600 bg-white" onDragStart={(event) => onDragStart(event, 'audioMessageNode')} draggable>
                <FaVolumeUp style={{ display: 'inline' }} /> <span className='ml-2'>Mensagem de Áudio</span>
            </button>
            <button style={{ display: 'flex', alignItems: 'center' }} className="w-full font-bold mb-4 rounded-lg px-8 py-4 text-gray-600 bg-white" onDragStart={(event) => onDragStart(event, 'inputDataNode')} draggable>
                <FaArrowRight style={{ display: 'inline' }} /> <span className='ml-2'>Entrada de dados</span>
            </button>
        </aside>
    );
};
