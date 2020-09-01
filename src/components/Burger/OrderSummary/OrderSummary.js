import React from "react";

import Aux from "../../../hoc/_Aux";
import Button from "../../UI/Button/Button";

const OrderSummary = (props) => {
    const ingredients = Object.keys(props.ingredients).map((igKey) => {
        return (
            <li key={igKey}>
                <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
                {props.ingredients[igKey]}
            </li>
        );
    });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with following ingredients:</p>
            <ul>{ingredients}</ul>
            <p>Price: {props.price}$</p>

            <p>Continue to checkout?</p>

            <Button btnType="Danger" clicked={props.cancel}>
                Cancel
            </Button>
            <Button btnType="Success" clicked={props.continue}>
                Continue
            </Button>
        </Aux>
    );
};

export default OrderSummary;
