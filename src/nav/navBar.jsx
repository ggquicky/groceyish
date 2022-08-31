import { Menuitems } from "./MenuItems";

export default function Navbar() {
  console.log(Menuitems);
  return (
    <nav>
      {Menuitems.map((item, index) => {
        return (
          <a key={index} href={item.url}>
            {item.title}
          </a>
        );
      })}
    </nav>
  );
}
