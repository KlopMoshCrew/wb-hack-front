import React from "react";
import axios from "axios";
import Plot from 'react-plotly.js';

class SallersFunnel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            "begin_checkout": 0,
            "add_to_cart": 0,
            "purchase": 0,
            "view_item_list": 0,
            "remove_from_cart": 0,
            "view_item": 0
        }
    }

    getData() {
        axios.get(`http://82.148.28.184:1337/funnel/total?id=${this.props.ecom_id}&from=${this.props.from}&to=${this.props.to}`)
            .then((res) => {this.setState(res.data)})
    }

    componentDidMount() {
        this.getData()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (JSON.stringify(prevProps) !== JSON.stringify(this.props) ||
            JSON.stringify(prevState) !== JSON.stringify(this.state)
        ) {
            this.getData()
        }
    }

    render() {
        // HELLO PIDR
        return (
            <Plot
                data={[
                {
                    type: 'funnel',
                    y: ["Просмотр в поисковой выдаче",
                        "Просмотр карточки товара",
                        "Добавление в корзину",
                        "Оформление заказа",
                        "Выкуп"],
                    x: [
                        this.state.view_item_list,
                        this.state.view_item,
                        this.state.add_to_cart,
                        this.state.begin_checkout,
                        this.state.purchase],
                    hoverinfo: 'x+percent previous+percent initial'}
                ]}
                layout={ {width: 1000, height: 500, title: 'Продуктовая воронка зв период '} }
            />
        )
    }
}

export { SallersFunnel }