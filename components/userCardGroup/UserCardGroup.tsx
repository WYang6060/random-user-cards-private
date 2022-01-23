/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import UserCard from './UserCard';
import { User } from '../../constants/constants';
import { Fragment, useContext } from 'react';
import UsersContext from '../../contexts/UsersContext';
import styled from '@emotion/styled';

const userCardGroupStyle = css`
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  margin: 2rem 0;
`;

const NoResult = styled.p`
  text-align: center;
  padding: 1rem 0;
`;

const UserCardGroup = () => {
  const { filteredUserList } = useContext(UsersContext);

  return (
    <Fragment>
      {filteredUserList.length ? (
        <div css={userCardGroupStyle}>
          {filteredUserList.map((user: User) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      ) : (
        <NoResult>No results</NoResult>
      )}
    </Fragment>
  );
};

export default UserCardGroup;
