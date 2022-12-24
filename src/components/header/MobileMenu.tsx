import { XMarkIcon } from '@heroicons/react/24/solid';
import Link from './Link';

type Props = {
  setIsMenuToggled: (value: boolean) => void;
};

const MobileMenu = ({ setIsMenuToggled }: Props) => {
  return (
    <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl md:hidden">
      {/* CLOSE ICON */}
      <div className="flex justify-end p-12">
        <button onClick={() => setIsMenuToggled(false)}>
          <XMarkIcon className="h-6 w-6 text-gray-400" />
        </button>
      </div>

      {/* MENU ITEMS */}
      <div className="ml-[33%] flex flex-col gap-10 text-2xl">
        <Link page="Home" />

        <Link page="Benefits" />

        <Link page="Our Classes" />

        <Link page="Contact Us" />
      </div>
    </div>
  );
};

export default MobileMenu;
