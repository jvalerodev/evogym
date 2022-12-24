import { useEffect, useState } from 'react';
import Header from '@/components/header';
import SelectedPageState from '@/context/selectedPage/state';
import useSelectedPage from '@/hooks/useSelectedPage';
import { SelectedPage } from '@/types/typings';

const App = () => {
  const { setSelectedPage } = useSelectedPage();
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      } else {
        setIsTopOfPage(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <SelectedPageState>
      <div className="app bg-gray-20">
        <Header isTopOfPage={isTopOfPage} />
      </div>
    </SelectedPageState>
  );
};

export default App;
