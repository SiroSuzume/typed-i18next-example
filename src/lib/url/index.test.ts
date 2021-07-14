import { buildLocalizedUrlFromLocale, buildUrlFromOriginAndPath } from '.';

describe('@/lib/url', () => {
  describe('buildUrlFromOriginAndPath', () => {
    it('指定のパスを含むURLを生成', () => {
      const url = buildUrlFromOriginAndPath('/horse-names', 'http://localhost:3000');
      expect(url).toBe(`http://localhost:3000/horse-names`);
    });
    it('ルートパスの場合、末尾の/を省略', () => {
      const url = buildUrlFromOriginAndPath('/', 'http://localhost:3000');
      expect(url).toBe('http://localhost:3000');
    });
  });
  describe('buildLocalizedUrlFromLocale', () => {
    it('言語に対応したURLを生成', () => {
      const url = buildLocalizedUrlFromLocale('/horse-names', 'en', 'http://localhost:3000', 'ja');
      expect(url).toBe('http://localhost:3000/en/horse-names');
    });
    it('指定した言語がデフォルトの言語の場合、URL内の言語部分を省略', () => {
      const url = buildLocalizedUrlFromLocale('/horse-names', 'ja', 'http://localhost:3000', 'ja');
      expect(url).toBe(`http://localhost:3000/horse-names`);
    });
  });
});
