/** @jsx jsx */
import { css, jsx } from '@emotion/react';

const navBarStyle = css`
  padding: 1rem 0;
`;

const NavBar = () => {
  return (
    <div css={navBarStyle}>
      <h1>Random User Cards</h1>
    </div>
  );
};

export default NavBar;
