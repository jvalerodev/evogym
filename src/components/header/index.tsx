import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Link from './Link';
import useMediaQuery from '@/hooks/useMediaQuery';
import Logo from '@/assets/Logo.png';
import ActionButton from '@/shared/ActionButton';
import { SelectedPage } from '@/types/typings';

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Header = ({ selectedPage, setSelectedPage }: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  const isAboveMediumScreen = useMediaQuery('(min-width: 1060px)');

  return (
    <header>
      <nav className="fixed top-0 z-30 flex w-full items-center justify-between py-6">
        <div className="mx-auto flex w-5/6 items-center justify-between">
          <div className="flex w-full items-center justify-between gap-16">
            {/* LEFT SIDE */}
            <img src={Logo} alt="Logo" />

            {/* RIGHT SIDE */}
            {/* {isAboveMediumScreen ? ( */}
            <div className="hidden w-full items-center justify-between md:flex">
              <div className="flex items-center justify-between gap-8 text-sm">
                <Link
                  page="Home"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Benefits"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Our Classes"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                <Link
                  page="Contact Us"
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>

              <div className="flex items-center justify-between gap-8">
                <p>Sign In</p>
                <ActionButton setSelectedPage={setSelectedPage}>
                  Become a Member
                </ActionButton>
              </div>
            </div>
            {/*) : (*/}
            <button
              className="block rounded-full bg-secondary-500 p-2 md:hidden"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              {isMenuToggled ? (
                <XMarkIcon className="h-6 w-6 text-white" />
              ) : (
                <Bars3Icon className="h-6 w-6 text-white" />
              )}
            </button>
            {/* )} */}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
