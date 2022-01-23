import { RANDOM_USER_API } from '../constants/constants';

async function fetchUsers(cnt: number) {
  const res = await fetch(`${RANDOM_USER_API}/?results=${cnt}`);
  return await res.json();
}

export default fetchUsers;
