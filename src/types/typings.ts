export enum SelectedPage {
  Home = 'home',
  Benefits = 'benefits',
  OurClasses = 'ourclasses',
  ContactUs = 'contactus'
}

export type Page = {
  selectedPage: SelectedPage;
};

export type PageAction = {
  type: 'SET_SELECTED_PAGE';
  payload: SelectedPage;
};
