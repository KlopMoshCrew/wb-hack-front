import React from 'react';
import axios from 'axios';

import { Bar } from 'react-chartjs-2';

class FunnelSeries extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.id,
            options: {
                scales: {
                    xAxes: [{
                        stacked: true
                    }],
                    yAxes: [{
                        stacked: true
                    }]
                }
            },
            data: {
                labels: [],
                datasets: []
            }
        };
    }

    componentDidMount() {
        var self = this;
        if (!this.state.id) {
            return
        }
        axios.get('http://127.0.0.1:1337/funnel/series?id=' + this.state.id + '&from=2021-08-04&to=2021-10-10')
            .then((res) => { this.setState({ data: res.data }); console.log(res); console.log(this.state.data) })

    }
    
    componentDidUpdate() {
        this.render()
    }

    render() {
        return <Bar data={this.state.data} options={this.state.options} />
    }
}


export { FunnelSeries };