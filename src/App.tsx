import { useState } from 'react';
import Header from '@/components/header';
import { SelectedPage } from '@/types/typings';

const App = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  return (
    <div className="app bg-gray-20">
      <Header selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
};

export default App;
