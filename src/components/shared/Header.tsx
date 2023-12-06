import { K2D } from 'next/font/google';
import { LuMenu } from 'react-icons/lu';

const k2d = K2D({ subsets: ['latin'], weight: ['700'] });

type Props = {
  openMenu: () => void;
};

export default function Header({ openMenu }: Props) {
  return (
    <header className="flex bg-primaryPurple px-3 py-2 text-white">
      <button
        type="button"
        onClick={openMenu}
        className="text-2xl"
        aria-label="Abrir menu lateral"
      >
        <LuMenu />
      </button>

      <h1 className={`text-2xl ${k2d.className} w-full text-center mr-6`}>
          Taskban
      </h1>
    </header>
  );
}
