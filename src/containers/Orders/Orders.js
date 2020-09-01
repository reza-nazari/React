import React, { Component } from "react";
import axios from "../../axios-order";
import WithErrorHandler from "../../hoc/withErrorHandler/WithErrorHandler";
import Order from "../../components/Order/Order";

class Orders extends Component {
    state = {
        loading: false,
        orders: [],
    };
    
    componentDidMount() {
        axios
            .get("/order.json")
            .then((res) => {
                const fetchOrders = [];
                for (let key in res.data) {
                    fetchOrders.push({
                        ...res.data[key],
                        id: key,
                    });
                }
                this.setState({ loading: false, orders: fetchOrders });
            })
            .catch((err) => this.setState({ loading: false }));
    }

    render() {
        return (
            <div>
                {this.state.orders.map((order) => (
                    <Order
                        key={order.id}
                        ingredients={order.ingredients}
                        price={order.price}
                    />
                ))}
            </div>
        );
    }
}

export default WithErrorHandler(Orders, axios);
