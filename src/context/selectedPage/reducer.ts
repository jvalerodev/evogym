import { Page, PageAction } from '@/types/typings';

const reducer = (state: Page, action: PageAction) => {
  switch (action.type) {
    case 'SET_SELECTED_PAGE':
      return {
        ...state,
        selectedPage: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
