import React from "react";
import style from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";
const PizzaList = ({ pizzaList }) => {
  return (
    <div className={style.container}>
      <h1>THE BEST PIZZA IN TOWN</h1>
      <p className={style.desc}>
        In 1999, CHT Fouder opened its doors with one goal in mind: Better Pizza. We
        knew that with better ingredients we would create better pizzas. That
        goal and the promise of “Better ingredients. Better pizza.” remain true
        to this day.
      </p>

      <div className={style.wrapper}>
        {pizzaList.map((pizza) => (
          <PizzaCard key={pizza._id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
