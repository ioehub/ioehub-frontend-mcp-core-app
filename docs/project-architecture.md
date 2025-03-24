# IoEHub 프로젝트 아키텍처

## 프로젝트 개요

IoEHub는 IoT 장치와 AI 서비스를 연결하는 통합 플랫폼입니다. 마이크로서비스 아키텍처(MSA)를 활용하여 다양한 기능을 모듈화된 앱으로 개발하고 있습니다.

## 마이크로서비스 구조

IoEHub 플랫폼은 다음과 같은 마이크로서비스 앱들로 구성됩니다:

1. **shell-app**: 사용자 인터페이스의 메인 쉘 (헤더, 푸터, 메인 네비게이션)
2. **mcp-core-app**: Multi-Control Panel 핵심 기능 담당
3. **device-management-app**: IoT 장치 관리 및 모니터링
4. **ai-service-app**: AI 모델 및 서비스 통합
5. **auth-app**: 인증 및 권한 관리

## 기술 스택

모든 프론트엔드 마이크로서비스는 다음 기술을 공통적으로 사용합니다:

- **React**: UI 컴포넌트 개발
- **TypeScript**: 정적 타입 지원
- **TailwindCSS**: 스타일링
- **React Router**: 라우팅 관리

## 공통 패턴 및 규칙

1. **파일 구조**:
   - `src/components/`: 공통 UI 컴포넌트
   - `src/pages/`: 페이지 컴포넌트
   - `src/services/`: API 서비스 및 통신 로직
   - `src/utils/`: 유틸리티 함수
   - `src/hooks/`: 커스텀 React 훅
   - `src/types/`: TypeScript 타입 정의

2. **명명 규칙**:
   - 컴포넌트: PascalCase (예: `Header.tsx`, `UserProfile.tsx`)
   - 함수/변수: camelCase (예: `fetchUserData`, `isLoggedIn`)
   - 상수: UPPER_SNAKE_CASE (예: `API_ENDPOINT`, `MAX_RETRIES`)

3. **컴포넌트 패턴**:
   - 함수형 컴포넌트 사용
   - 관심사 분리를 위해 각 컴포넌트는 단일 책임 원칙 준수
   - Prop 타입 명시적 정의

4. **앱 간 통신**:
   - REST API를 통한 서비스 간 통신
   - 이벤트 버스를 통한 비동기 통신 (필요 시)

## 미디어 및 스타일 관리

1. **이미지 및 아이콘**:
   - SVG 우선 사용
   - 아이콘은 주로 Lucide React 또는 커스텀 SVG 컴포넌트 활용

2. **반응형 디자인**:
   - TailwindCSS 브레이크포인트 활용
   - Mobile-first 접근 방식

## 배포 및 환경

- 개발 환경: localhost
- 테스트 환경: 내부 테스트 서버
- 프로덕션 환경: 클라우드 호스팅

이 문서는 IoEHub 프로젝트의 높은 수준의 아키텍처 개요를 제공합니다. 각 마이크로서비스 앱의 세부 사항은 해당 앱의 문서를 참조하세요.
