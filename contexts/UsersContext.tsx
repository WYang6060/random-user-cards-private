import React, { useState, useMemo } from 'react';
import { User, SORT_BY_FIRST_NAME } from '../constants/constants';

const UsersContext = React.createContext();

export const UsersProvider = ({ children, initUsers = [] }) => {
  const [userList, setUserList] = useState<User[]>(initUsers);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error>(null);
  const [filteredUserList, setFilteredUserList] = useState<User[]>(initUsers);
  const [keyword, setKeyword] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>(SORT_BY_FIRST_NAME);
  const [ascending, setAscending] = useState<boolean>(true);

  const value = useMemo(
    () => ({
      userList,
      setUserList,
      isLoading,
      setIsLoading,
      error,
      setError,
      filteredUserList,
      setFilteredUserList,
      keyword,
      setKeyword,
      sortBy,
      setSortBy,
      ascending,
      setAscending,
    }),
    [
      userList,
      setUserList,
      isLoading,
      setIsLoading,
      error,
      setError,
      filteredUserList,
      setFilteredUserList,
      keyword,
      setKeyword,
      sortBy,
      setSortBy,
      ascending,
      setAscending,
    ]
  );

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
};

export default UsersContext;
