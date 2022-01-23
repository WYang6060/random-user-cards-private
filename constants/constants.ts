// api url
export const RANDOM_USER_API: string = 'https://randomuser.me/api';

// number of fetched user list
export const FETCH_USER_CNT = 100;

// sorting
export const SORT_BY_FIRST_NAME: string = 'firstName';

// user type
export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  photo: string;
  city: string;
  state: string;
};

// user type for searching without ID and photo
export type FilterUserKey = keyof Omit<User, 'id' | 'photo'>;
