# Prettier 설정 가이드

모노레포에서 공유되는 Prettier 설정입니다.

## 사용 방법

### 설정 파일 생성

각 앱/패키지 루트에 `prettier.config.js` 생성:

```javascript
// prettier.config.js
import sharedConfig from "@nic/mf-lib-shared/config/prettier";

/**
 * @type {import('prettier').Config}
 */
export default {
  ...sharedConfig,
  // 필요시 이 앱에만 적용할 추가 설정
  // printWidth: 100,
};
```

### package.json 스크립트 추가

```json
{
  "scripts": {
    "format": "prettier --check .",
    "format:fix": "prettier --write ."
  },
  "devDependencies": {
    "prettier": "^3.4.2"
  }
}
```

### .prettierignore 파일 생성

```
# Dependencies
node_modules

# Build outputs
dist
build

# Lock files
pnpm-lock.yaml
package-lock.json
```

---

## 현재 설정 값

| 옵션                     | 값       | 설명                         |
| ------------------------ | -------- | ---------------------------- |
| `printWidth`             | `120`    | 한 줄의 최대 길이            |
| `tabWidth`               | `2`      | 들여쓰기 너비                |
| `useTabs`                | `true`   | 탭 사용 여부                 |
| `semi`                   | `true`   | 세미콜론 사용                |
| `singleQuote`            | `true`   | 작은따옴표 사용 (JavaScript) |
| `jsxSingleQuote`         | `false`  | JSX는 큰따옴표 사용          |
| `trailingComma`          | `"all"`  | 후행 쉼표 모두 추가          |
| `bracketSameLine`        | `false`  | JSX 태그의 > 를 다음 줄에    |
| `bracketSpacing`         | `true`   | 객체 리터럴 중괄호에 공백    |
| `singleAttributePerLine` | `true`   | HTML/JSX 속성 한 줄에 하나씩 |
| `endOfLine`              | `"auto"` | 줄바꿈 방식 자동 감지        |

---

## 커스터마이징

각 앱에서 특정 설정을 오버라이드할 수 있습니다:

```javascript
import sharedConfig from "@nic/mf-lib-shared/config/prettier";

export default {
  ...sharedConfig,
  // 이 앱만 printWidth를 100으로 변경
  printWidth: 100,
  // 이 앱만 탭 대신 스페이스 사용
  useTabs: false,
};
```

---

## 통합

### VSCode 설정

`.vscode/settings.json`:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true
}
```

### ESLint와 함께 사용

ESLint와 Prettier가 충돌하지 않도록 이미 설정되어 있습니다.
