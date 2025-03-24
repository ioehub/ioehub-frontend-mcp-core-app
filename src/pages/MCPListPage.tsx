import React from 'react';
import { Link } from 'react-router-dom';
import MCPCard from '../components/MCPCard';
import { MCP } from '../types/mcp';

const MCPListPage: React.FC = () => {
  // 샘플 MCP 데이터 (실제로는 API에서 가져올 예정)
  const mcpList: MCP[] = [
    { id: '1', name: '생산라인 MCP', location: '공장 A', status: 'connected', type: 'production' },
    { id: '2', name: '물류 MCP', location: '창고 B', status: 'disconnected', type: 'logistics' },
    { id: '3', name: '사무실 MCP', location: '본사 3층', status: 'connected', type: 'office' },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">MCP 목록</h2>
        <Link to="/register" className="btn-primary">
          + 새 MCP 등록
        </Link>
      </div>
      
      {mcpList.length === 0 ? (
        <div className="card text-center py-12">
          <p className="text-gray-500 mb-4">등록된 MCP가 없습니다.</p>
          <Link to="/register" className="btn-primary">
            첫 번째 MCP 등록하기
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mcpList.map((mcp) => (
            <MCPCard key={mcp.id} mcp={mcp} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MCPListPage;
