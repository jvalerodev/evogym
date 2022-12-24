import AnchorLink from 'react-anchor-link-smooth-scroll';
import useSelectedPage from '@/hooks/useSelectedPage';
import { SelectedPage } from '@/types/typings';

type Props = {
  page: string;
};

const Link = ({ page }: Props) => {
  const { selectedPage, setSelectedPage } = useSelectedPage();

  const lowerCasePage = page.replace(/ /g, '').toLowerCase() as SelectedPage;

  return (
    <AnchorLink
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
      className={`${
        selectedPage === lowerCasePage ? 'text-primary-500' : ''
      } transition duration-500 hover:text-primary-300`}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
