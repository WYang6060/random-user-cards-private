/** @jsx jsx */
import { FilterUserKey, User } from '../../constants/constants';
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';
import { faSave, faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment, useState } from 'react';
import { CardLeftButton, iconStyle } from './UserCard';

const modalBackdrop = css`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: #AAA;
  opacity: 0.5;
  z-index: 100;
`;

const Modal = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 0.5rem;
  z-index: 101;
  min-width: 320px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(rgb(65, 109, 255) 31%, #FFF 0%);
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);
  padding: 2rem;
`;

const CardRightButton = styled.button`
  position: absolute;
  right: 0.5rem;
  top: 1rem;
  border: none;
  color: #FFF;
  background-color: transparent;
`;

const UserPhoto = styled.img`
  width: 128px;
  height: 128px;
  border-radius: 50%;
	border: solid 5px white;
  border-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.5);
  margin: 3rem auto;
  margin-top: 1.5rem;
`;

interface IInfoProps {
  name: string;
  value: string;
  onChange: (key: string, newVal: string) => void;
}

const EditInfo = (props: IInfoProps) => {
  const wrapperStyle = css`
    margin: 0.5rem;
  `;

  const labelStyle = css`
    text-transform: capitalize;
    text-align: left;
    display: block;
    margin-left: 0.5rem;
    margin-bottom: 0.2rem;
  `;

  const inputStyle = css`
    display: block;
    border-radius: 12px;
    text-align: center;
    padding: 0.5rem 1rem;
    font-size: 14px;
    width: 100%;
    box-sizing: border-box;
  `;

  return (
    <div css={wrapperStyle}>
      <label css={labelStyle}>{props.name}: </label>
      <input
        type="text"
        css={inputStyle}
        value={props.value}
        onChange={(e) => props.onChange(props.name, e.target.value)}
      />
    </div>
  );
};

interface IProps {
  user: User;
  handleSave: (user: User) => void;
  handleCancel: () => void;
}

const EditModal = (props: IProps) => {
  const { firstName, lastName } = props.user;
  const { id, photo, ...info } = props.user;
  const [userInfo, setUserInfo] = useState(props.user);

  const handleChange = (key: string, value: string) => {
    setUserInfo({ ...userInfo, [key]: value });
  };

  return (
    <Fragment>
      <div css={modalBackdrop} />
      <Modal>
        <CardLeftButton onClick={() => props.handleSave(userInfo)}>
          <FontAwesomeIcon css={iconStyle} icon={faSave} />
        </CardLeftButton>
        <CardRightButton onClick={() => props.handleCancel()}>
          <FontAwesomeIcon css={iconStyle} icon={faWindowClose} />
        </CardRightButton>
        <UserPhoto src={photo} alt={`${firstName} ${lastName}`} />
        {(Object.keys(info) as Array<FilterUserKey>).map(
          (key: FilterUserKey) => (
            <EditInfo
              key={key}
              name={key}
              value={userInfo[key]}
              onChange={handleChange}
            />
          )
        )}
      </Modal>
    </Fragment>
  );
};

export default EditModal;
