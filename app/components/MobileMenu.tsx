import Link from 'next/link';

interface MobileMenuProps {
  url: string;
  title: string;
  isOpen?: () => void;
}

const MobileMenu = ({ url, title, isOpen }: MobileMenuProps) => {
  return (
    <Link
      onClick={isOpen}
      href={url}
      className="py-6 px-4 text-slate-200 text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
};

export default MobileMenu;
