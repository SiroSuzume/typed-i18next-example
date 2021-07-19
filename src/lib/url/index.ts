/**
 * サポート言語とパスからURLを作成する。
 * ロケールがデフォルトの場合、ロケールを省略する。
 * パスが/の場合も省略する。
 */
export function buildLocalizedUrlFromLocale(
  path: string,
  locale: string,
  origin: string,
  defaultLocale: string,
): string {
  return `${origin}${locale === defaultLocale ? '' : `/${locale}`}${path === '/' ? '' : path}`;
}
