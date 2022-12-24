import AnchorLink from 'react-anchor-link-smooth-scroll';
import useSelectedPage from '@/hooks/useSelectedPage';
import { SelectedPage } from '@/types/typings';

type Props = {
  children: React.ReactNode;
};

const ActionButton = ({ children }: Props) => {
  const { setSelectedPage } = useSelectedPage();

  return (
    <AnchorLink
      href={`#${SelectedPage.ContactUs}`}
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
