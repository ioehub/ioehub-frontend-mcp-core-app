import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MCPListPage from './pages/MCPListPage';
import MCPRegisterPage from './pages/MCPRegisterPage';

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto py-8">
          <h1 className="text-3xl font-bold mb-8 text-center">MCP 코어 앱</h1>
          <Routes>
            <Route path="/" element={<MCPListPage />} />
            <Route path="/register" element={<MCPRegisterPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
