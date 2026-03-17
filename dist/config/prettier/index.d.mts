import { Config } from 'prettier';

/**
 * 모노레포 공통 Prettier 설정
 * 모든 앱/패키지에서 일관된 코드 포맷팅 적용
 *
 * @type {import('prettier').Config}
 */

declare const prettierConfig: Config;

export { prettierConfig as default };
