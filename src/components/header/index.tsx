import { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';
import Link from './Link';
import Logo from '@/assets/Logo.png';
import ActionButton from '@/shared/ActionButton';
import MobileMenu from './MobileMenu';

type Props = {
  isTopOfPage: boolean;
};

const Header = ({ isTopOfPage }: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  const navbarBackground = isTopOfPage ? '' : 'bg-primary-100 drop-shadow';

  return (
    <header>
      <nav>
        <div
          className={`${navbarBackground} fixed top-0 z-30 flex w-full items-center justify-between py-6`}
        >
          <div className="mx-auto flex w-5/6 items-center justify-between">
            <div className="flex w-full items-center justify-between gap-16">
              {/* LEFT SIDE */}
              <img src={Logo} alt="Logo" />

              {/* RIGHT SIDE */}
              <div className="hidden w-full items-center justify-between md:flex">
                <div className="flex items-center justify-between gap-8 text-sm">
                  <Link page="Home" />

                  <Link page="Benefits" />

                  <Link page="Our Classes" />

                  <Link page="Contact Us" />
                </div>

                <div className="flex items-center justify-between gap-8">
                  <p className="cursor-pointer transition duration-500 hover:text-primary-300">
                    Sign In
                  </p>

                  <ActionButton>Become a Member</ActionButton>
                </div>
              </div>

              <button
                className="block rounded-full bg-secondary-500 p-2 md:hidden"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE MENU MODAL */}
        {isMenuToggled && <MobileMenu setIsMenuToggled={setIsMenuToggled} />}
      </nav>
    </header>
  );
};

export default Header;
