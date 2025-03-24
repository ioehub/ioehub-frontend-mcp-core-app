import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const MCPRegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    type: 'production',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // TODO: API를 통해 실제 MCP 등록 처리
    console.log('등록할 MCP 데이터:', formData);
    
    // 등록 후 목록 페이지로 이동
    alert('MCP가 성공적으로 등록되었습니다!');
    navigate('/');
  };
  
  return (
    <div>
      <div className="flex items-center mb-6">
        <Link to="/" className="mr-4 text-blue-600 hover:text-blue-800">
          &larr; 목록으로 돌아가기
        </Link>
        <h2 className="text-2xl font-semibold">새 MCP 등록</h2>
      </div>
      
      <div className="card max-w-2xl mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              MCP 이름 *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="location" className="block text-gray-700 font-medium mb-2">
              위치 *
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="type" className="block text-gray-700 font-medium mb-2">
              MCP 유형 *
            </label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="production">생산</option>
              <option value="logistics">물류</option>
              <option value="office">사무실</option>
              <option value="other">기타</option>
            </select>
          </div>
          
          <div className="flex justify-end space-x-4">
            <Link to="/" className="btn-secondary">
              취소
            </Link>
            <button type="submit" className="btn-primary">
              등록하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MCPRegisterPage;
