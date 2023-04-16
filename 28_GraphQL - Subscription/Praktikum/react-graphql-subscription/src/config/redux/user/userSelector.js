import { useSelector } from 'react-redux';

export const useUserListSelector = () => {
  return useSelector((state) => state.user.users);
};
