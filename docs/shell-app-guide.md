# Shell App 개발 가이드

## 개요

Shell App은 IoEHub 플랫폼의 메인 UI 쉘을 제공하는 마이크로서비스입니다. 이 앱은 사용자 인터페이스의 공통 요소(헤더, 푸터, 메인 네비게이션)와 랜딩 페이지를 담당합니다.

## 주요 기능

- 플랫폼 공통 UI 쉘 제공
- 랜딩 페이지 및 마케팅 콘텐츠
- 사용자 온보딩 경험
- 다른 마이크로서비스 앱으로의 네비게이션

## 컴포넌트 구조

### 주요 컴포넌트

#### Header.tsx
- 전역 네비게이션 바
- 검색 기능
- 사용자 계정 메뉴
- 주요 섹션 링크 (모델, 데이터셋, 스페이스 등)

```tsx
// 핵심 구현 패턴
export default function Header() {
  return (
    <header className="w-full px-4 py-3 border-b flex items-center bg-white shadow-sm sticky top-0 z-50">
      {/* 로고 */}
      <div className="flex items-center">
        {/* 로고 및 네비게이션 구현 */}
      </div>
      
      {/* 검색창 */}
      <div className="relative mx-4 flex-grow max-w-md">
        {/* 검색 입력 구현 */}
      </div>
      
      {/* 네비게이션 링크 */}
      <nav className="hidden md:flex items-center space-x-4">
        {/* 주요 네비게이션 링크 */}
      </nav>
      
      {/* 사용자 메뉴 */}
      <div className="flex items-center ml-auto">
        {/* 로그인/가입 버튼 또는 사용자 메뉴 */}
      </div>
    </header>
  );
}
```

#### HeroSection.tsx
- 메인 마케팅 메시지
- 주요 행동 유도 버튼
- 특징 소개 그리드

```tsx
// 핵심 구현 패턴
export default function HeroSection() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* 배경 그라데이션 */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-90"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* 헤드라인 및 설명 */}
        <div className="text-center mb-12">
          {/* 타이틀 및 서브타이틀 */}
        </div>
        
        {/* 행동 유도 버튼 */}
        <div className="flex justify-center space-x-4 mb-16">
          {/* CTA 버튼들 */}
        </div>
        
        {/* 특징 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 특징 카드들 */}
        </div>
      </div>
    </section>
  );
}
```

#### TrendingSection.tsx
- 인기 모델, 데이터셋, 스페이스 표시
- 카드 기반 그리드 레이아웃
- 각 항목의 메타 정보 표시

```tsx
// 핵심 구현 패턴
export default function TrendingSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* 섹션 제목 */}
        <div className="flex items-center mb-10">
          {/* 제목 및 부제목 */}
        </div>

        {/* 3열 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* 모델 카드 영역 */}
          <div className="col-span-1">
            {/* 모델 카드 컴포넌트들 */}
          </div>

          {/* 스페이스 카드 영역 */}
          <div className="col-span-1">
            {/* 스페이스 카드 컴포넌트들 */}
          </div>

          {/* 데이터셋 카드 영역 */}
          <div className="col-span-1">
            {/* 데이터셋 카드 컴포넌트들 */}
          </div>
        </div>
      </div>
    </section>
  );
}
```

#### MarketplaceSection.tsx
- IoT 디바이스 상품 전시
- 카테고리별 아이콘 및 색상 코딩
- 제품 상세 정보 및 액션 버튼

```tsx
// 핵심 구현 패턴
export default function MarketplaceSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* 섹션 제목 */}
        <div className="flex items-center justify-between mb-10">
          {/* 제목 및 설명 */}
        </div>
        
        {/* 제품 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* 제품 카드 컴포넌트들 */}
        </div>
        
        {/* 추가 액션 */}
        <div className="mt-12 text-center">
          {/* 요청 버튼 등 */}
        </div>
      </div>
    </section>
  );
}
```

#### ProjectDashboard.tsx
- 사용자 프로젝트 관리 인터페이스
- 탭 기반 대시보드 레이아웃
- 디바이스, 모델, 로그 관리

```tsx
// 핵심 구현 패턴
export default function ProjectDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [activeProject, setActiveProject] = useState("1");
  
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        {/* 프로젝트 제목 및 액션 */}
        <div className="flex items-center justify-between mb-8">
          {/* 프로젝트 정보 및 버튼 */}
        </div>
        
        {/* 2열 그리드 */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* 프로젝트 목록 사이드바 */}
          <div className="lg:col-span-1">
            <ProjectList 
              projects={projects} 
              activeProject={activeProject} 
              setActiveProject={setActiveProject} 
            />
          </div>
          
          {/* 메인 콘텐츠 영역 */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow">
              <TabInterface activeTab={activeTab} setActiveTab={setActiveTab} />
              
              <div className="p-6">
                {/* 각 탭 컨텐츠 */}
                {activeTab === "dashboard" && <DashboardTab />}
                {activeTab === "devices" && <DevicesTab />}
                {activeTab === "models" && <ModelsTab />}
                {activeTab === "logs" && <LogsTab />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

#### Footer.tsx
- 사이트 메인 푸터
- 링크 그룹 및 회사 정보
- 소셜 미디어 링크

```tsx
// 핵심 구현 패턴
export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t pt-12 pb-8">
      <div className="container mx-auto px-4">
        {/* 링크 그룹 그리드 */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* 회사 정보 및 로고 */}
          <div className="col-span-2">
            {/* 로고 및 설명 */}
          </div>
          
          {/* 리소스 링크 */}
          <div>
            {/* 리소스 링크 목록 */}
          </div>
          
          {/* 회사 링크 */}
          <div>
            {/* 회사 관련 링크 목록 */}
          </div>
          
          {/* 지원 링크 */}
          <div>
            {/* 지원 관련 링크 목록 */}
          </div>
        </div>
        
        {/* 저작권 및 법적 링크 */}
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          {/* 저작권 및 법적 정보 */}
        </div>
      </div>
    </footer>
  );
}
```

### 페이지 컴포넌트

#### HomePage.tsx
- 랜딩 페이지 메인 컴포넌트
- 여러 섹션 컴포넌트 조합

```tsx
export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeatureSection />
      <TrendingSection />
      <MarketplaceSection />
      <section className="text-center py-12 bg-gray-100">
        {/* CTA 섹션 */}
      </section>
    </main>
  );
}
```

#### DashboardPage.tsx
- 프로젝트 대시보드 페이지
- ProjectDashboard 컴포넌트 렌더링

```tsx
export default function DashboardPage() {
  return (
    <main>
      <ProjectDashboard />
    </main>
  );
}
```

## 라우팅 구조

App.tsx에서는 다음과 같은 라우팅 구조를 정의합니다:

```tsx
export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            {/* 추가 라우트 */}
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
```

## 공통 디자인 패턴

### 컨테이너 패턴
대부분의 섹션에서 컨테이너 패턴을 사용하여 콘텐츠 너비를 제한합니다:
```tsx
<div className="container mx-auto px-4">
  {/* 콘텐츠 */}
</div>
```

### 카드 패턴
정보 표시에 일관된 카드 패턴을 사용합니다:
```tsx
<div className="border border-gray-200 hover:border-gray-300 hover:shadow-md rounded-lg p-4 transition-all">
  {/* 카드 콘텐츠 */}
</div>
```

### 그리드 패턴
반응형 그리드를 사용하여 다양한 화면 크기에 대응합니다:
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
  {/* 그리드 아이템 */}
</div>
```

### 탭 인터페이스 패턴
콘텐츠 분리를 위한 탭 인터페이스:
```tsx
<div className="border-b border-gray-200">
  <nav className="flex -mb-px">
    {tabs.map(tab => (
      <button
        key={tab.id}
        onClick={() => setActiveTab(tab.id)}
        className={`py-4 px-6 ${
          activeTab === tab.id 
            ? "border-b-2 border-blue-500 text-blue-600" 
            : "text-gray-500 hover:text-gray-700"
        }`}
      >
        {tab.label}
      </button>
    ))}
  </nav>
</div>
```

## 반응형 전략

- 모바일 우선 접근 방식
- 브레이크포인트:
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px
  
- 주요 반응형 패턴:
  - 단일 열 → 다중 열 그리드
  - 햄버거 메뉴 → 확장 네비게이션
  - 스택된 요소 → 인라인 요소

## 성능 최적화

- 컴포넌트 분리를 통한 불필요한 리렌더링 방지
- 지연 로딩 적용 (추후 구현)
- 이미지 최적화 (추후 구현)

## 접근성 고려사항

- 시맨틱 HTML 요소 사용
- 적절한 ARIA 속성 추가 (추후 개선)
- 키보드 탐색 지원
- 충분한 색상 대비

## 참조 자료

- [프로젝트 아키텍처 문서](./project-architecture.md)
- [Hugging Face 참조 가이드](./huggingface-reference.md)

## 향후 개발 방향

1. 인증 및 사용자 관리 기능 통합
2. 다크 모드 지원
3. 현지화 및 다국어 지원
4. 성능 최적화
5. 접근성 개선
6. 모바일 앱 대응
