import Items from "./Items";

export default function Categories() {
  const Allcategories = ["All", "Vegetables", "Fruits", "Coffe & teas", "Meat"];

  return (
    <div>
      <div>
        <span>Explore Categories</span>
        <div>
          {Allcategories.map(function (element, index) {
            return (
              <a key={index} href="/">
                {element}
              </a>
            );
          })}
        </div>
      </div>
      <div>
        <Items />
      </div>
    </div>
  );
}
