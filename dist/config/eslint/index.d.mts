import { Linter } from 'eslint';

/**
 * 모든 앱/패키지에 공통으로 적용되는 기본 ESLint 설정
 * TypeScript, JavaScript 프로젝트에 사용
 */
declare const baseConfig: Linter.Config[];

/**
 * React 앱 전용 ESLint 설정
 * base 설정을 확장하고 React 관련 규칙 추가
 */
declare const reactConfig: Linter.Config[];

/**
 * Next.js 앱 전용 ESLint 설정
 * base 설정을 확장하고 React + Next.js 관련 규칙 추가
 */
declare const nextConfig: Linter.Config[];

export { baseConfig as base, reactConfig as default, nextConfig as next, reactConfig as react };
