import { useContext } from 'react';
import SelectedPageContext from '@/context/selectedPage/context';

const useSelectedPage = () => {
  return useContext(SelectedPageContext);
};

export default useSelectedPage;
