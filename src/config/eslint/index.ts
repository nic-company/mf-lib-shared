/**
 * ESLint 설정 Export
 * 
 * - base: 모든 TypeScript/JavaScript 프로젝트에 공통으로 적용
 * - react: React(Vite) 앱 전용 설정 (base 확장)
 * - next: Next.js 앱 전용 설정 (base 확장)
 * 
 * @example
 * // React(Vite) 앱
 * import reactConfig from '@nic/mf-lib-shared/config/eslint/react'
 * 
 * // Next.js 앱
 * import nextConfig from '@nic/mf-lib-shared/config/eslint/next'
 * 
 * // TypeScript/JavaScript 패키지
 * import baseConfig from '@nic/mf-lib-shared/config/eslint/base'
 */

export { default as base } from "./base";
export { default as react } from "./react";
export { default as next } from "./next";

// 하위 호환성을 위해 react를 default로 export
export { default } from "./react";
