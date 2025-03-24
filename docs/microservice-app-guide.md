# 새 마이크로서비스 앱 개발 가이드

## 개요

이 문서는 IoEHub 플랫폼에서 새로운 마이크로서비스 앱을 개발할 때 따라야 할 가이드라인을 제공합니다. 기존 shell-app의 패턴과 일관성을 유지하면서 새로운 기능을 효율적으로 구현할 수 있도록 안내합니다.

## 새 마이크로서비스 생성 프로세스

### 1. 프로젝트 설정

새 마이크로서비스 앱을 위한 기본 설정:

```bash
# 디렉토리 생성
mkdir -p c:\vang\project\2025\ioehub\frontend\[app-name]

# 프로젝트 초기화
cd c:\vang\project\2025\ioehub\frontend\[app-name]
npm init -y

# 기본 패키지 설치
npm install react react-dom react-router-dom typescript tailwindcss
npm install --save-dev @types/react @types/react-dom vite
```

### 2. 기본 파일 구조

일관된 파일 구조를 위해 다음 디렉토리 구조를 사용합니다:

```
[app-name]/
├── docs/                  # 앱 특화 문서
├── public/                # 정적 자산
├── src/
│   ├── components/        # 공통 컴포넌트
│   │   ├── ui/            # 기본 UI 컴포넌트
│   │   └── features/      # 특화된 기능 컴포넌트
│   ├── pages/             # 페이지 컴포넌트
│   ├── services/          # API 서비스
│   ├── hooks/             # 커스텀 React 훅
│   ├── utils/             # 유틸리티 함수
│   ├── types/             # TypeScript 타입 정의
│   ├── styles/            # 글로벌 스타일 (필요 시)
│   ├── App.tsx            # 앱 컴포넌트
│   └── main.tsx           # 진입점
├── .gitignore
├── package.json
├── README.md
├── tailwind.config.js     # TailwindCSS 설정
└── tsconfig.json          # TypeScript 설정
```

### 3. 핵심 설정 파일

#### package.json

shell-app의 package.json을 참조하여 기본 스크립트와 의존성을 설정합니다:

```json
{
  "name": "[app-name]",
  "version": "0.1.0",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.16.0",
    "lucide-react": "^0.274.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.15",
    "@types/react-dom": "^18.2.7",
    "@vitejs/plugin-react": "^4.0.3",
    "autoprefixer": "^10.4.15",
    "postcss": "^8.4.29",
    "tailwindcss": "^3.3.3",
    "typescript": "^5.0.2",
    "vite": "^4.4.5"
  }
}
```

#### tailwind.config.js

shell-app와 일관된 스타일을 위한 TailwindCSS 설정:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        // 여기에 추가 커스텀 색상
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        // 여기에 추가 폰트 패밀리
      },
    },
  },
  plugins: [],
}
```

#### tsconfig.json

TypeScript 설정:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### 4. 기본 앱 구조 설정

#### src/main.tsx

앱의 진입점:

```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './styles/globals.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

#### src/App.tsx

라우팅 및 레이아웃 설정:

```tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import { Suspense } from 'react'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow">
          <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              {/* 앱 특화 라우트 추가 */}
            </Routes>
          </Suspense>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
```

#### src/styles/globals.css

TailwindCSS 설정 및 글로벌 스타일:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  body {
    @apply bg-gray-50 text-gray-900;
  }
}

@layer components {
  .btn {
    @apply px-4 py-2 rounded font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors;
  }
  
  .btn-primary {
    @apply btn bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500;
  }
  
  .btn-secondary {
    @apply btn bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 focus:ring-primary-500;
  }
  
  .card {
    @apply bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow;
  }
}
```

## 공통 컴포넌트 활용

### 1. Header & Footer

Shell-app의 Header와 Footer 컴포넌트를 참조하되, 앱 특화 메뉴 항목을 조정합니다:

```tsx
// src/components/Header.tsx
import { Link } from 'react-router-dom'
import { Search, Menu } from 'lucide-react'

export default function Header() {
  return (
    <header className="w-full px-4 py-3 border-b flex items-center bg-white shadow-sm sticky top-0 z-50">
      {/* 로고 (앱 특화 로고/이름으로 수정) */}
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold text-blue-600">[App Name]</span>
        </Link>
      </div>
      
      {/* 검색창 */}
      <div className="relative mx-4 flex-grow max-w-md">
        <input
          type="text"
          placeholder="Search..."
          className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
      </div>
      
      {/* 앱 특화 네비게이션 링크 */}
      <nav className="hidden md:flex items-center space-x-4">
        {/* 앱 특화 메뉴 항목 */}
      </nav>
      
      {/* 모바일 메뉴 */}
      <button className="md:hidden ml-auto">
        <Menu size={24} />
      </button>
    </header>
  )
}
```

### 2. 페이지 템플릿

기본 페이지 구조:

```tsx
// src/pages/HomePage.tsx
import PageTitle from '../components/ui/PageTitle'

export default function HomePage() {
  return (
    <main>
      <PageTitle 
        title="[App Name]" 
        description="[App Description]" 
      />
      
      {/* 앱 특화 섹션 */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* 앱 컨텐츠 */}
        </div>
      </section>
    </main>
  )
}
```

## API 통합

### 1. 서비스 레이어

API 통신을 위한 서비스 레이어 패턴:

```tsx
// src/services/api.ts
const API_BASE_URL = 'https://api.ioehub.com/v1';

interface ApiOptions {
  method?: string;
  headers?: Record<string, string>;
  body?: any;
  params?: Record<string, string>;
}

export async function fetchApi<T>(endpoint: string, options: ApiOptions = {}): Promise<T> {
  const { method = 'GET', headers = {}, body, params } = options;
  
  // URL 파라미터 처리
  const queryParams = params 
    ? `?${new URLSearchParams(params).toString()}` 
    : '';
    
  const url = `${API_BASE_URL}${endpoint}${queryParams}`;
  
  const requestOptions: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
  };
  
  const response = await fetch(url, requestOptions);
  
  if (!response.ok) {
    throw new Error(`API Error: ${response.status} - ${await response.text()}`);
  }
  
  return await response.json();
}
```

### 2. 특화 서비스

앱 특화 API 클라이언트:

```tsx
// src/services/[feature]Service.ts
import { fetchApi } from './api';

export interface Item {
  id: string;
  name: string;
  // 추가 필드
}

export async function getItems(): Promise<Item[]> {
  return fetchApi<Item[]>('/items');
}

export async function getItemById(id: string): Promise<Item> {
  return fetchApi<Item>(`/items/${id}`);
}

export async function createItem(data: Omit<Item, 'id'>): Promise<Item> {
  return fetchApi<Item>('/items', {
    method: 'POST',
    body: data,
  });
}

// 추가 CRUD 함수
```

## 상태 관리

### 커스텀 훅 패턴

데이터 로딩 및 상태 관리를 위한 커스텀 훅:

```tsx
// src/hooks/useData.ts
import { useState, useEffect } from 'react';

interface UseDataOptions<T> {
  initialData?: T;
  fetchFn: () => Promise<T>;
  onSuccess?: (data: T) => void;
  onError?: (error: Error) => void;
}

export function useData<T>({
  initialData,
  fetchFn,
  onSuccess,
  onError,
}: UseDataOptions<T>) {
  const [data, setData] = useState<T | undefined>(initialData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  async function fetchData() {
    setIsLoading(true);
    setError(null);
    
    try {
      const result = await fetchFn();
      setData(result);
      if (onSuccess) onSuccess(result);
    } catch (err) {
      const error = err instanceof Error ? err : new Error(String(err));
      setError(error);
      if (onError) onError(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    isLoading,
    error,
    refetch: fetchData,
  };
}
```

## 컴포넌트 패턴

### 1. 컨테이너/프레젠테이션 패턴

관심사를 분리하는 효과적인 패턴:

```tsx
// 프레젠테이션 컴포넌트: src/components/features/ItemList.tsx
interface ItemListProps {
  items: Item[];
  isLoading: boolean;
  onItemClick: (id: string) => void;
}

export function ItemList({ items, isLoading, onItemClick }: ItemListProps) {
  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map(item => (
        <div 
          key={item.id} 
          className="card p-4 cursor-pointer" 
          onClick={() => onItemClick(item.id)}
        >
          <h3 className="font-medium">{item.name}</h3>
          {/* 추가 아이템 정보 */}
        </div>
      ))}
    </div>
  );
}

// 컨테이너 컴포넌트: src/components/features/ItemListContainer.tsx
import { useNavigate } from 'react-router-dom';
import { useData } from '../../hooks/useData';
import { getItems } from '../../services/itemService';
import { ItemList } from './ItemList';

export function ItemListContainer() {
  const navigate = useNavigate();
  const { data, isLoading, error } = useData({
    fetchFn: getItems,
    initialData: [],
  });
  
  function handleItemClick(id: string) {
    navigate(`/items/${id}`);
  }
  
  if (error) {
    return <div className="text-red-500">Error: {error.message}</div>;
  }
  
  return (
    <ItemList
      items={data || []}
      isLoading={isLoading}
      onItemClick={handleItemClick}
    />
  );
}
```

### 2. 컴포넌트 합성 패턴

재사용 가능한 구성 요소:

```tsx
// src/components/ui/Card.tsx
interface CardProps {
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  onClick?: () => void;
}

export function Card({ title, children, footer, onClick }: CardProps) {
  return (
    <div 
      className={`card ${onClick ? 'cursor-pointer' : ''}`}
      onClick={onClick}
    >
      {title && (
        <div className="px-4 py-3 border-b">
          <h3 className="font-medium">{title}</h3>
        </div>
      )}
      
      <div className="p-4">
        {children}
      </div>
      
      {footer && (
        <div className="px-4 py-3 bg-gray-50 border-t">
          {footer}
        </div>
      )}
    </div>
  );
}

// 사용 예:
<Card 
  title="Item Details"
  footer={<button className="btn-primary">Save</button>}
>
  <p>Item content here...</p>
</Card>
```

## 테스트 전략

새 앱에서 테스트 설정:

```bash
# 테스트 라이브러리 설치
npm install --save-dev vitest @testing-library/react @testing-library/jest-dom
```

테스트 파일 구조:
```
src/
├── components/
│   ├── Header.tsx
│   ├── __tests__/
│   │   └── Header.test.tsx
```

테스트 예시:
```tsx
// src/components/__tests__/Header.test.tsx
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header';

describe('Header', () => {
  it('renders the app name', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    
    expect(screen.getByText(/App Name/i)).toBeInTheDocument();
  });
  
  it('renders the search input', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
    
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
  });
});
```

## 빌드 및 배포

### 로컬 개발

```bash
# 개발 서버 실행
npm run dev
```

### 프로덕션 빌드

```bash
# 프로덕션용 빌드
npm run build

# 빌드 프리뷰
npm run preview
```

## 소통 전략

### 마이크로서비스 간 통신 방법

1. **직접 API 호출**
   - 다른 마이크로서비스의 공개 API를 직접 호출
   - 명시적인 의존성과 버전 관리 필요

2. **이벤트 기반 통신**
   - 코어 이벤트 버스를 통한 이벤트 발행/구독
   - 느슨한 결합을 통한 서비스 독립성 보장

3. **공유 데이터 저장소**
   - 각 서비스가 필요한 데이터에만 접근
   - 데이터 스키마 변경 시 버전 관리 철저

### API 버전 관리

- URI 경로에 버전 포함: `/api/v1/resources`
- 명시적인 API 버전 문서화
- 하위 호환성 보장

## 문서화

각 마이크로서비스 앱은 다음 문서를 포함해야 합니다:

1. **README.md**: 설치 및 실행 방법
2. **docs/app-guide.md**: 앱 특화 기능 및 구현 세부 정보
3. **docs/api-reference.md**: API 엔드포인트 및 응답 형식
4. **docs/component-library.md**: 재사용 가능한 컴포넌트 목록

## 참조 자료

- [프로젝트 아키텍처 문서](./project-architecture.md)
- [Shell App 개발 가이드](./shell-app-guide.md)
- [Hugging Face 참조 가이드](./huggingface-reference.md)

## 체크리스트

새 마이크로서비스 앱 개발 시 체크 항목:

- [ ] 파일 구조 설정
- [ ] 기본 라우팅 및 페이지 구성
- [ ] 공통 UI 컴포넌트 구현
- [ ] API 서비스 레이어 설정
- [ ] 테스트 구조 설정
- [ ] 문서화
- [ ] 빌드 및 배포 파이프라인 설정

## 추가 지원

새 마이크로서비스 개발 시 문제가 발생하면 IoEHub 개발 팀에 문의하세요.
