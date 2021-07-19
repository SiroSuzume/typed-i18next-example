import { buildLocalizedUrlFromLocale } from '.';

describe('@/lib/url', () => {
  describe('buildLocalizedUrlFromLocale', () => {
    it('言語に対応したURLを生成', () => {
      const url = buildLocalizedUrlFromLocale('/horse-names', 'en', 'http://localhost:3000', 'ja');
      expect(url).toBe('http://localhost:3000/en/horse-names');
    });
    it('パスがルートパスのとき、末尾の/を省略', () => {
      const url = buildLocalizedUrlFromLocale('/', 'en', 'http://localhost:3000', 'ja');
      expect(url).toBe('http://localhost:3000/en');
    });
    it('指定した言語がデフォルトの言語の場合、URL内の言語部分を省略', () => {
      const url = buildLocalizedUrlFromLocale('/horse-names', 'ja', 'http://localhost:3000', 'ja');
      expect(url).toBe(`http://localhost:3000/horse-names`);
    });
  });
});
