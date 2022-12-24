import { SelectedPage } from '@/types/typings';
import { createContext } from 'react';

type SelectedPageProps = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const SelectedPageContext = createContext({} as SelectedPageProps);

export default SelectedPageContext;
