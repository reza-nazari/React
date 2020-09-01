import React, { Component } from "react";
import axios from "../../../axios-order";

import Button from "../../../components/UI/Button/Button";
import classses from "./ContactData.module.css";
import Spinner from "../../../components/UI/Spinner/Spinner";

class ContactData extends Component {
    state = {
        name: "",
        email: "",
        address: {
            street: "",
            postalCode: "",
        },
        loading: false,
    };

    orderHandler = (event) => {
        event.preventDefault();

        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            customer: {
                name: "reza",
                address: {
                    street: "TestStreet1",
                    zipCode: "4531",
                    country: "Iran",
                },
                email: "test@test.com",
                deliveryMethods: "fastest",
            },
        };
        console.log(order);
        axios
            .post("/order.json", order)
            .then((response) => {
                this.setState({ loading: false });
                this.props.history.push("/");
            })
            .catch((err) => {
                this.setState({ loading: false });
            });
    };

    render() {
        let form = (
            <form>
                <input
                    className={classses.Input}
                    type="text"
                    name="name"
                    placeholder="Your name"
                />
                <input
                    className={classses.Input}
                    type="email"
                    name="email"
                    placeholder="Your mail"
                />
                <input
                    className={classses.Input}
                    type="text"
                    name="street"
                    placeholder="Your Street"
                />
                <input
                    className={classses.Input}
                    type="text"
                    name="postal"
                    placeholder="Postal Code"
                />
                <Button btnType="Success" clicked={this.orderHandler}>
                    Order
                </Button>
            </form>
        );

        if (this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div className={classses.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;
