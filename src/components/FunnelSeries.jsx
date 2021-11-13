import React from 'react';


import {Bar} from 'react-chartjs-2';

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
                labels: ['2021-09-01', '2021-09-02', '2021-09-03', '2021-09-04', '2021-09-05'],
                datasets: [
                  // These two will be in the same stack.
                  {
                    stack: "stack1",
                    label: 'Оформление заказа',
                    backgroundColor: 'rgb(255, 99, 132)',
                    data: [1, 2, 3, 4, 5]
                  },
                  {
                    stack: "stack1",
                    label: 'Добавление в корзину',
                    backgroundColor: 'rgb(54, 162, 235)',
                    data: [5, 4, 3, 2, 1]   
                  },
                  {
                    stack: "stack1",
                    label: 'Выкуп',
                    backgroundColor: 'rgb(54, 162, 0)',
                    data: [5, 4, 3, 2, 1]   
                  }
                ]
              }
        };
    }

    componentDidMount() {
        if (!this.state.id) {
            return
        }
        // axios.get('http://192.168.1.8:1337/funnel/series?id='+ this.state.id +'&from=2021-08-04&to=2021-10-10')
        //     .then((res) => { this.setState({ items: res.data }) } )
    }

    render() {
        return  <Bar  data={this.state.data} options={this.state.options} />
    }
}


export { FunnelSeries };