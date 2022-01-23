import { useCallback, useContext, useEffect, useState } from 'react';
import fetchUsers from '../apis/users';
import { User, FilterUserKey } from '../constants/constants';
import UsersContext from '../contexts/UsersContext';
import debounce from 'lodash.debounce';

const handleUsers = () => {
  const {
    userList,
    setUserList,
    setIsLoading,
    setError,
    setFilteredUserList,
    keyword,
    setKeyword,
    sortBy,
    setSortBy,
    ascending,
    setAscending,
  } = useContext(UsersContext);

  // fetch new user list from the https://randomuser.me
  const fetchUserList = useCallback(
    async (cnt: number) => {
      setIsLoading(true);
      setError(null);

      const { results, error } = await fetchUsers(cnt);
      if (results) {
        const newUserList: User[] = results.map((user: any) => {
          return {
            id: user.login.uuid,
            firstName: user.name.first,
            lastName: user.name.last,
            email: user.email,
            phone: user.phone,
            photo: user.picture.large,
            city: user.location.city,
            state: user.location.state,
          };
        });

        setUserList(newUserList);
      } else {
        setError(error);
      }

      setIsLoading(false);
    },
    [setUserList, setIsLoading, setError]
  );

  // update search keyword
  const handleChangeKeyword = useCallback(
    debounce((st: string) => {
      setKeyword(st.toLocaleLowerCase());
    }, 200),
    []
  );

  // update sort by option
  const handleChangeOption = useCallback((opt) => setSortBy(opt), []);

  // filter user list
  useEffect(() => {
    console.log(keyword);
    setFilteredUserList(
      userList
        .filter((user: User) => {
          const { id, photo, ...info } = user;
          const filterUserKeyArr = Object.keys(info) as Array<FilterUserKey>;
          return filterUserKeyArr.some((key: FilterUserKey) =>
            user[key].toLocaleLowerCase().includes(keyword)
          );
        })
        .sort((user1: User, user2: User) => {
          const val1: string = user1[sortBy].toLocaleLowerCase();
          const val2: string = user2[sortBy].toLocaleLowerCase();
          return ascending ? (val1 < val2 ? -1 : 1) : val1 < val2 ? 1 : -1;
        })
    );
  }, [userList, keyword, sortBy, ascending]);

  return {
    fetchUserList,
    handleChangeKeyword,
    sortBy,
    handleChangeOption,
  };
};

export default handleUsers;
