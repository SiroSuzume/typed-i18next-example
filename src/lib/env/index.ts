/** サポートするロケール */
export const supportedLocales = (process.env.NEXT_PUBLIC_SUPPORTED_LOCALES_SEPARATE_BY_COMMA ?? 'ja').split(',');
/** デフォルトのロケール */
export const defaultLocale = process.env.NEXT_PUBLIC_DEFAULT_LOCALE ?? 'ja';
/** オリジン */
export const defaultOrigin = process.env.NEXT_PUBLIC_FRONTEND_ORIGIN ?? 'http://localhost:3000';
/** APIサーバーオリジン */
export const defaultApiOrigin = process.env.NEXT_PUBLIC_API_ORIGIN ?? 'http://localhost:4000';
/** サーバーサイド用APIサーバーオリジン */
export const defaultApiOriginAtServerSide = process.env.SERVER_SIDE_API_ORIGIN ?? 'http://backend:4000';
