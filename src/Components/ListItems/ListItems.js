import Item from "./Item";
import style from "./ListItems.module.css";

let lists = [
    {
      id: "i1",
      name: "Sushi",
      info: "Finest fish and veggies",
      price: 22.99,
      count: 0,
    },
    {
        id: "i2",
        name: "Sndwitch",
        info: "Finest fish and veggies",
        price: 17.99,
        count: 0,
      },
      {
        id: "i3",
        name: "Pizza",
        info: "Cheassseeeee...!",
        price: 19.99,
        count: 0,
      }
  ];


const ListItems = () => {

  return (
    <div className={style.listItems}>
      {lists.map((item,idx) => (
        <Item
          key={idx}
          name={item.name}
          info={item.info}
          price={item.price}
          count={item.count}
          id={item.id}
        />
      ))}
    </div>
  );
};

export default ListItems;
