import Item from "./Item";
import style from "./ListItems.module.css";

const ListItems = () => {
  let lists = [
    {
      id: "Sushi",
      name: "Sushi",
      info: "Finest fish and veggies",
      price: 22.99,
      count: 0,
    },
    {
        id: "Sndwitch",
        name: "Sndwitch",
        info: "Finest fish and veggies",
        price: 17.99,
        count: 0,
      },
      {
        id: "Pizza",
        name: "Pizza",
        info: "Cheassseeeee...!",
        price: 19.99,
        count: 0,
      }
  ];
  return (
    <div className={style.listItems}>
      {lists.map((item) => (
        <Item
          key={item.id}
          name={item.name}
          info={item.info}
          price={item.price}
          count={item.count}
        />
      ))}
    </div>
  );
};

export default ListItems;
