/** @jsx jsx */
import { css, jsx } from '@emotion/react';

const errorStyle = css`
  padding: 1rem 0;
`;

const Error = () => {
  return (
    <div css={errorStyle}>
      <p>Unexpected error occurred.</p>
    </div>
  );
};

export default Error;
