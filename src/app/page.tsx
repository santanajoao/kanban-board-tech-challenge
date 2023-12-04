import { LuMenu } from 'react-icons/lu';
import { K2D } from 'next/font/google';

const k2d = K2D({ subsets: ['latin'], weight: ['700'] });

export default function Home() {
  return (
    <div className="">
      <header className="flex bg-primaryPurple px-3 py-2 text-white">
        <button type="button" className="text-2xl">
          <LuMenu />
        </button>

        <h1 className={`text-2xl ${k2d.className} w-full text-center mr-6`}>Taskban</h1>
      </header>

      <main>
        main
      </main>
    </div>
  );
}
