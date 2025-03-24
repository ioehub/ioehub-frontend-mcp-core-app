import React from 'react';
import { MCP } from '../types/mcp';

interface MCPCardProps {
  mcp: MCP;
}

const MCPCard: React.FC<MCPCardProps> = ({ mcp }) => {
  const { name, location, status, type } = mcp;
  
  const getStatusColor = (status: string) => {
    return status === 'connected' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
  };
  
  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'production': return '생산';
      case 'logistics': return '물류';
      case 'office': return '사무실';
      default: return '기타';
    }
  };
  
  return (
    <div className="card hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(status)}`}>
          {status === 'connected' ? '연결됨' : '연결 끊김'}
        </span>
      </div>
      
      <div className="space-y-2 text-gray-600">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span>{location}</span>
        </div>
        
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
          <span>{getTypeLabel(type)}</span>
        </div>
      </div>
      
      <div className="mt-6 flex justify-end">
        <button className="btn-secondary text-sm mr-2">상세 정보</button>
        <button className={`text-sm ${status === 'connected' ? 'bg-red-600 hover:bg-red-700 text-white' : 'bg-green-600 hover:bg-green-700 text-white'} py-2 px-4 rounded`}>
          {status === 'connected' ? '연결 해제' : '연결하기'}
        </button>
      </div>
    </div>
  );
};

export default MCPCard;
