/** 使用可能なネームスペースの一覧 */
export const nameSpaces = ['seo', 'common', 'horse-names'] as const;
/** 使用可能なネームスペースの一覧型 */
export type NameSpace = typeof nameSpaces[number];
