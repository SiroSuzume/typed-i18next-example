import Head from 'next/head';

export type PreloadImagesProps = {
  /** preloadするURL一覧 */
  urls: string[];
};

/** 初回表示時に使用する画像をpreloadするためのコンポーネント */
export const PreloadImages = ({ urls }: PreloadImagesProps): JSX.Element => {
  // 予めURLの重複、空行を排除する
  const hrefList = Array.from(new Set(urls)).filter((url) => url);
  return (
    <Head>
      {hrefList.map((href) => (
        <link key={href} rel="preload" href={href} as="image" />
      ))}
    </Head>
  );
};
