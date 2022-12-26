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

export type Benefit = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
};

export type Class = {
  name: string;
  description: string;
  image: string;
};
