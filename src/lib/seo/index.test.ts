import { buildLanguageAlternate, buildLanguageAlternates } from '.';

describe('@/lib/seo/language-alternates', () => {
  describe('buildLanguageAlternate', () => {
    it('指定のパス, 言語を含むLanguageAlternateを生成', () => {
      const languageAlternate = buildLanguageAlternate('/horse-names', 'en', 'http://localhost:3000', 'ja');
      expect(languageAlternate).toEqual({
        href: `http://localhost:3000/en/horse-names`,
        hrefLang: 'en',
      });
    });
    it('デフォルトのロケールと一致する場合、hrefからロケールの情報を省く', () => {
      const languageAlternate = buildLanguageAlternate('/horse-names', 'ja', 'http://localhost:3000', 'ja');
      expect(languageAlternate).toEqual({
        href: `http://localhost:3000/horse-names`,
        hrefLang: 'ja',
      });
    });
  });
  describe('buildLanguageAlternates', () => {
    it('en, ja, x-defaultのLanguageAlternate配列を生成', () => {
      const languageAlternates = buildLanguageAlternates('/horse-names', ['en', 'ja'], 'http://localhost:3000', 'ja');
      expect(languageAlternates).toHaveLength(3);
      expect(languageAlternates).toEqual([
        {
          href: `http://localhost:3000/en/horse-names`,
          hrefLang: 'en',
        },
        {
          href: `http://localhost:3000/horse-names`,
          hrefLang: 'ja',
        },
        {
          href: `http://localhost:3000/horse-names`,
          hrefLang: 'x-default',
        },
      ]);
    });
  });
});
