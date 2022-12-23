import { useEffect, useState } from 'react';
import Header from '@/components/header';
import { SelectedPage } from '@/types/typings';

const App = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

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
    <div className="app bg-gray-20">
      <Header
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </div>
  );
};

export default App;
