/** @jsx jsx */
import { css, jsx } from '@emotion/react';

const loadingStyle = css`
  padding: 1rem 0;
`;

const Loading = () => {
  return (
    <div css={loadingStyle}>
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
