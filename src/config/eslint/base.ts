import type { Linter } from 'eslint';
import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

/**
 * 모든 앱/패키지에 공통으로 적용되는 기본 ESLint 설정
 * TypeScript, JavaScript 프로젝트에 사용
 */
const baseConfig: Linter.Config[] = [
	js.configs.recommended,
	...tseslint.configs.recommended,
	{
		files: ['**/*.{js,ts,jsx,tsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
		},
		rules: {
			'@typescript-eslint/no-explicit-any': 'off',
			semi: ['error', 'always'],
			'@typescript-eslint/no-empty-object-type': 'off',
			'@typescript-eslint/no-unused-vars': 'warn',
		},
	},
	eslintConfigPrettier,
];

export default baseConfig;
