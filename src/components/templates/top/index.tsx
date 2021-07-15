export type TopTemplateProps = {
  /** タイトル */
  title?: string;
};

/** トップページテンプレート */
export const TopTemplate = ({ title = 'foo' }: TopTemplateProps): JSX.Element => (
  <>
    <div>{title}</div>
  </>
);
