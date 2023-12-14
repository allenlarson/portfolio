import Link from 'next/link';

interface MobileMenuProps {
  url: string;
  title: string;
}

const MobileMenu = ({ url, title }: MobileMenuProps) => {
  return (
    <Link
      href={url}
      className="py-2 px-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
  //   return (
  //     <ul className="flex flex-col py-4 items-center">
  //       {menu.map(item => (
  //         <li key={item.title}>
  //           <NavMenu url={item.url} title={item.title} />
  //         </li>
  //       ))}
  //     </ul>
  //   );
};

export default MobileMenu;
