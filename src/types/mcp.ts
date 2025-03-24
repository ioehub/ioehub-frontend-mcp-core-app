export interface MCP {
  id: string;
  name: string;
  location: string;
  status: 'connected' | 'disconnected';
  type: 'production' | 'logistics' | 'office' | 'other';
}

export type MCPStatus = 'connected' | 'disconnected';

export interface MCPFormData {
  name: string;
  location: string;
  type: string;
}
