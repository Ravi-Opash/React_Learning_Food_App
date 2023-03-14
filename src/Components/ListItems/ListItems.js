import { useEffect, useState } from "react";
import Item from "./Item";
import style from "./ListItems.module.css";

const ListItems = () => {
  const [lists, setLists] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [isfetchError, setFetchError] = useState(null)


  useEffect(() => {
    const fetchMeals = async () => {
      const res = await fetch(
        "https://react-http-89c52-default-rtdb.firebaseio.com/meals.json"
      );

      if(!res.ok){
        throw new Error('Something went wormg...!')
      }

      const resData = await res.json();

      const meals = [];

      for(const key in resData){
        meals.push({
          id: key,
          name: resData[key].name,
          info: resData[key].info,
          price: resData[key].price,
          count: resData[key].count,
        })
      }
      
      setLists(meals);
      setLoading(false);
    };


   
    fetchMeals().catch(error => {
      setLoading(false);
      setFetchError(error.message);
      console.log('dd');

    });
  }, []);

  const htmlCode = lists.map((item, idx) => (
    <Item
      key={idx}
      name={item.name}
      info={item.info}
      price={item.price}
      count={item.count}
      id={item.id}
    />
  ))

  return (
    <div className={style.listItems}>
      {isLoading && <p id={style.loading}>Loading...!</p>}
      {!isLoading && <p id={style.loading}>{isfetchError}</p>}
      {!isLoading && !isfetchError && htmlCode}

    </div>
  );
};

export default ListItems;
