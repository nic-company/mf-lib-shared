# ESLint 설정 가이드

모노레포에서 공유되는 ESLint 설정입니다.

## 사용 가능한 설정

### 1. `base` - 기본 TypeScript/JavaScript 설정

프레임워크 없이 TypeScript나 JavaScript만 사용하는 패키지에 적합합니다.

```javascript
// eslint.config.js
import { base } from '@nic/mf-lib-shared/config/eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  ...base,
])
```

**포함된 규칙:**
- JavaScript 기본 규칙
- TypeScript 규칙
- 공통 코드 스타일 규칙 (세미콜론, unused-vars 등)

---

### 2. `react` - React 앱 전용 설정

React를 사용하는 앱에 적합합니다. `base` 설정을 확장하고 React 관련 규칙을 추가합니다.

```javascript
// eslint.config.js
import { react } from '@nic/mf-lib-shared/config/eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  ...react,
])
```

**포함된 규칙:**
- `base` 설정의 모든 규칙
- React Plugin
- React Hooks 규칙
- React Refresh (Vite) 규칙
- JSX 관련 규칙

---

## 커스텀 규칙 추가

각 앱에서 추가 규칙이 필요한 경우:

```javascript
import { react } from '@nic/mf-lib-shared/config/eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  ...react,
  {
    rules: {
      // 이 앱에만 적용할 커스텀 규칙
      'no-console': 'warn',
      'max-len': ['error', { code: 100 }],
    }
  }
])
```

---

## 향후 확장 (Vue, Svelte 등)

다른 프레임워크를 사용하는 경우, 동일한 패턴으로 설정을 추가할 수 있습니다:

```typescript
// vue.ts (예시)
import baseConfig from "./base";
import vue from "eslint-plugin-vue";

export default {
  ...baseConfig,
  plugins: {
    vue,
  },
  // Vue 전용 규칙...
};
```

사용:
```javascript
import { vue } from '@nic/mf-lib-shared/config/eslint'
```
