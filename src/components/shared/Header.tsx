import { k2d } from '@/fonts';
import { LuMenu } from 'react-icons/lu';

type Props = {
  openMenu: () => void;
};

export function Header({ openMenu }: Props) {
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
