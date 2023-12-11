import { Board, Calendar, Timeline } from '@/components/icons';
import { LiaThListSolid } from 'react-icons/lia';
import { k2d } from '@/fonts';
import Link from 'next/link';

const navItems = [
  { Icon: Board, text: 'Quadro', href: '/' },
  { Icon: LiaThListSolid, text: 'Lista', href: '/list' },
  { Icon: Timeline, text: 'Timeline', href: '/timeline' },
  { Icon: Calendar, text: 'Calendário', href: '/calendar' },
];

export default function NavBar() {
  return (
    <aside className="flex flex-col h-full bg-white px-2 py-3">
      <span className={`text-3xl ${k2d.className} mt-16 text-center text-primaryPurple`}>
        Taskban
      </span>

      <nav className="mt-16">
        <ul className="space-y-6">
          {navItems.map(({ text, Icon, href }) => (
            <li key={text}>
              <Link
                href={href}
                className="flex gap-x-5 py-2 px-14 w-full"
              >
                <Icon className="text-primaryPurple text-2xl" />

                <span>{text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
