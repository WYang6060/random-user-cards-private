/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { Fragment, useContext } from 'react';
import UsersContext from '../../contexts/UsersContext';
import handleUsers from '../../hooks/handleUsers';
import { wrapperStyle, labelStyle, contentStyle } from './Search';

const radioStyle = css`
  display: inline-block;
  margin: auto;
  flex: 1;
`;

export const resultStyle = css`
  padding: 0.5rem;
  flex: 1;
  text-align: right;
  color: darkcyan;
`;

const Sort = () => {
  const { handleChangeOption } = handleUsers();
  const { filteredUserList, sortBy, ascending, setAscending } =
    useContext(UsersContext);

  return (
    <Fragment>
      <div css={wrapperStyle}>
        <label css={labelStyle}>Sort By</label>
        <select
          css={contentStyle}
          value={sortBy}
          onChange={(e) => handleChangeOption(e.target.value)}
        >
          <option value="firstName">First Name</option>
          <option value="lastName">Last Name</option>
          <option value="email">Email</option>
          <option value="phone">Phone</option>
          <option value="city">City</option>
          <option value="state">State</option>
        </select>
      </div>
      <div css={wrapperStyle}>
        <label css={labelStyle}>Sort Order</label>
        <div css={radioStyle}>
          <input
            type="radio"
            id="ascending"
            checked={ascending}
            onChange={() => setAscending(true)}
          />
          <label css={labelStyle} htmlFor="ascending">
            Ascending
          </label>
        </div>
        <div css={radioStyle}>
          <input
            type="radio"
            id="descending"
            checked={!ascending}
            onChange={() => setAscending(false)}
          />
          <label css={labelStyle} htmlFor="descending">
            Descending
          </label>
        </div>
        <label css={resultStyle}>
          {`[ ${filteredUserList.length} Results ]`}
        </label>
      </div>
    </Fragment>
  );
};

export default Sort;
