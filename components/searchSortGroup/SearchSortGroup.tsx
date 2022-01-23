/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import Sort from '../searchSortGroup/Sort';
import Search from './Search';

const groupStyle = css`
  max-width: 640px;
  margin: auto;
`;

const SearchSortGroup = () => {
  return (
    <div css={groupStyle}>
      <Search />
      <Sort />
    </div>
  );
};

export default SearchSortGroup;
