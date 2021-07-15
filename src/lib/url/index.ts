/** オリジンとパスからURLを作成する。パスがルートの場合、末尾の/を省略する */
export function buildUrlFromOriginAndPath(path: string, origin: string): string {
  return path === '/' ? origin : `${origin}${path}`;
}

/** サポート言語とパスからURLを作成する。言語がデフォルトの場合、言語部分を省略する */
export function buildLocalizedUrlFromLocale(
  path: string,
  locale: string,
  origin: string,
  defaultLocale: string,
): string {
  return locale === defaultLocale
    ? buildUrlFromOriginAndPath(path, origin)
    : `${origin}/${locale}${path === '/' ? '' : path}`;
}
