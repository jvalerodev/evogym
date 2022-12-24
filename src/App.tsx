import { useEffect, useState } from 'react';
import useSelectedPage from '@/hooks/useSelectedPage';
import Header from '@/components/header';
import Home from '@/components/home';
import Benefits from '@/components/benefits';
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
  }, [setSelectedPage]);

  return (
    <div className="app bg-gray-20">
      <Header isTopOfPage={isTopOfPage} />

      <Home />

      <Benefits />
    </div>
  );
};

export default App;
