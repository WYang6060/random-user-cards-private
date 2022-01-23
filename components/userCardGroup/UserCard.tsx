/** @jsx jsx */
import { User } from '../../constants/constants';
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';
import { Fragment, useContext, useState } from 'react';
import EditModal from '../userCardGroup/EditModal';
import UsersContext from '../../contexts/UsersContext';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const userCardStyle = css`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 0.5rem;
  background: linear-gradient(rgb(65, 109, 255) 33%, #FFF 0%);
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);
  padding-bottom: 1rem;
`;

export const CardLeftButton = styled.button`
  position: absolute;
  left: 0.5rem;
  top: 1rem;
  border: none;
  color: #FFF;
  background-color: transparent;
`;

export const iconStyle = css`
  width: 24px;
  height: 24px;
`;

const UserName = styled.h2`
  font-size: 1.25rem;
  text-align: center;
  color: #FFF;
  padding-top: 3px;
`;

export const UserPhoto = styled.img`
  width: 128px;
  height: 128px;
  border-radius: 50%;
	border: solid 5px white;
  border-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);
  margin: auto;
  margin-bottom: 1rem;
`;

const UserInfo = styled.p`
  text-align: center;
  margin: 0 auto 1rem auto;
  color: #696969;
`;

interface IProps {
  user: User;
}

const UserCard = (props: IProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const { userList, setUserList } = useContext(UsersContext);
  const { firstName, lastName, email, phone, photo, city, state } = props.user;

  const fullName: string = `${firstName} ${lastName}`;

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = (user: User) => {
    const newUserList = userList.filter((u: User) => u.id !== user.id);
    setUserList([...newUserList, user]);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <Fragment>
      <div css={userCardStyle}>
        <CardLeftButton onClick={() => handleEdit()}>
          <FontAwesomeIcon css={iconStyle} icon={faUserEdit} />
        </CardLeftButton>
        <UserName>{fullName}</UserName>
        <UserPhoto src={photo} alt={fullName} />
        <UserInfo key="email">{email}</UserInfo>
        <UserInfo key="phone">{phone}</UserInfo>
        <UserInfo key="city-state">
          {city}, {state}
        </UserInfo>
      </div>

      {isEditing && (
        <EditModal
          {...props}
          handleSave={handleSave}
          handleCancel={handleCancel}
        />
      )}
    </Fragment>
  );
};

export default UserCard;
