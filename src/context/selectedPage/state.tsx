import { useReducer } from 'react';
import SelectedPageContext from './context';
import SelectedPageReducer from './reducer';
import { SelectedPage, Page } from '@/types/typings';

type Props = {
  children: JSX.Element;
};

const INITIAL_STATE: Page = {
  selectedPage: SelectedPage.Home
};

const SelectedPageState = ({ children }: Props) => {
  const [state, dispatch] = useReducer(SelectedPageReducer, INITIAL_STATE);

  const setSelectedPage = (page: SelectedPage) => {
    dispatch({
      type: 'SET_SELECTED_PAGE',
      payload: page
    });
  };

  return (
    <SelectedPageContext.Provider
      value={{
        selectedPage: state.selectedPage,
        setSelectedPage
      }}
    >
      {children}
    </SelectedPageContext.Provider>
  );
};

export default SelectedPageState;
