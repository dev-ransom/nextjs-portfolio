import NavLink from "../Navbar/components/NavLinks";

interface Link {
  path: string;
  title: string;
}

const MenuOverLay = ({ links }: { links: Link[] }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverLay;
