import React from "react";

import BuildControl from "./BuildControl/BuildControl";
import classes from "./BuildControls.module.css";

const controls = [
    { label: "Salad", type: "salad" },
    { label: "Bacon", type: "bacon" },
    { label: "Meat", type: "meat" },
    { label: "Cheese", type: "cheese" },
];

const BuildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>
            Current Price: <strong> {props.price.toFixed(2)} </strong>
        </p>
        {controls.map((ctrl) => (
            <BuildControl
                label={ctrl.label}
                key={ctrl.label}
                type={ctrl.type}
                removed={() => props.removed(ctrl.type)}
                added={() => props.added(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
            />
        ))}

        <button
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.purchasing}
        >
            ORDER NOW
        </button>
    </div>
);

export default BuildControls;
