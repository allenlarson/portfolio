import Link from 'next/link';

interface NavMenuProps {
  url: string;
  title: string;
}

const NavMenu = ({ url, title }: NavMenuProps) => {
  return (
    <Link
      href={url}
      className="py-2 px-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
};

export default NavMenu;
