import CartContext from "../../store/CartContext";
import { useContext } from "react";
import Button from "../UI/Button";
import style from "./Item.module.css";

const Item = (props) => {
    const ctx = useContext(CartContext)

    const onOrderValueChange = (event) => {
       return(console.log(event.target.value)) 
    }

    const onAddBtn = (event) => {
        ctx.addItem({
            id: props.id,
            name: props.name,
            info: props.info,
            price: props.price,
            count: props.count,
        });
    }

    // console.log(totalOrder)

  return (
    <div className={style.main_item_box}>
         <div className={style.item_box_left}>
            <h3>{props.name}</h3>
            <p>{props.info}</p>
            <p id={style.price}>${props.price}</p>
         </div>
         <div className={style.item_box_right}>
            <div className={style.input}>
              <label><h3>Amount</h3></label>
              <input type='number' onChange={onOrderValueChange} defaultValue={props.count} min={0} max={10} />
            </div>
            <div className={style.add_button}>
                <Button onClick={onAddBtn}> + Add</Button>
            </div>
         </div>
    </div>
  );
};

export default Item;
