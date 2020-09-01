import React from "react";

import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import classes from "./Burger.module.css";

const Burger = (props) => {
    let transformerdIngredient = Object.keys(props.ingredients)
        .map((igKey) => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);

    if (transformerdIngredient.length === 0) {
        transformerdIngredient = (
            <p className={classes.ingredient}>Please start ingredient!</p>
        );
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformerdIngredient}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default Burger;
