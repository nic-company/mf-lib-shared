import type { Linter } from "eslint";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import baseConfig from "./base";

/**
 * React 앱 전용 ESLint 설정
 * base 설정을 확장하고 React 관련 규칙 추가
 */
const reactConfig: Linter.Config[] = [
  ...baseConfig,
  reactHooks.configs.flat.recommended,
  reactRefresh.configs.vite,
  {
    files: ["**/*.{ts,tsx,jsx}"],
    plugins: {
      react,
    },
    rules: {
      "jsx-quotes": ["error", "prefer-double"],
      "react/jsx-max-props-per-line": ["error", { maximum: 1 }],
      "react-hooks/exhaustive-deps": "off",
      "react-hooks/incompatible-library": "off",
      "react-hooks/set-state-in-effect": "off",
      "react/no-unescaped-entities": "off",
      "import/no-anonymous-default-export": [
        "warn",
        {
          // export default 할 때 익명 사용 금지 (new 함수만 허용함)
          allowArray: false,
          allowArrowFunction: false,
          allowAnonymousClass: false,
          allowAnonymousFunction: false,
          allowCallExpression: true, // The true value here is for backward compatibility
          allowNew: true,
          allowLiteral: false,
          allowObject: false,
        },
      ],
    },
  },
];

export default reactConfig;
