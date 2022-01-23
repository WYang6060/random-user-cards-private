/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import handleUsers from '../../hooks/handleUsers';

export const wrapperStyle = css`
  padding: 1rem 0;
  display: flex;
`;

export const labelStyle = css`
  padding: 0.5rem;
`;

export const contentStyle = css`
  border-radius: 5px;
  padding: 0 0.5rem;
  margin: 0 0.5rem;
  flex: 1;
`;

const Search = () => {
  const { handleChangeKeyword } = handleUsers();

  return (
    <div css={wrapperStyle}>
      <label css={labelStyle}>Search</label>
      <input
        css={contentStyle}
        type="search"
        onChange={(e) => handleChangeKeyword(e.target.value)}
      />
    </div>
  );
};

export default Search;
