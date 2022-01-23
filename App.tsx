/** @jsx jsx */
import { Fragment, useContext, useEffect } from 'react';
import './style.css';
import { jsx } from '@emotion/react';
import SearchSortGroup from './components/searchSortGroup/SearchSortGroup';
import UserCardGroup from './components/userCardGroup/UserCardGroup';
import handleUsers from './hooks/handleUsers';
import NavBar from './components/shared/NavBar';
import Loading from './components/shared/Loading';
import Error from './components/shared/Error';
import { FETCH_USER_CNT } from './constants/constants';
import UsersContext from './contexts/UsersContext';

export default function App() {
  const { fetchUserList } = handleUsers();
  const { isLoading, error } = useContext(UsersContext);

  useEffect(() => {
    fetchUserList(FETCH_USER_CNT);
  }, [fetchUserList]);

  return (
    <div className="App">
      <NavBar />
      {isLoading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <Fragment>
          <SearchSortGroup />
          <UserCardGroup />
        </Fragment>
      )}
    </div>
  );
}
