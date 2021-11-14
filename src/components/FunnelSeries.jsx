import React from 'react';
import axios from 'axios';

import { Bar } from 'react-chartjs-2';
import { Multiselect } from 'multiselect-react-dropdown';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

import {
    formatDate,
    parseDate,
} from 'react-day-picker/moment';

import {SallersFunnel} from "./SallersFunnel";

class FunnelSeries extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
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
            },
            from: null,
            to: null,
        };

        this.onSelect = this.onSelect.bind(this);
        this.onFromChange = this.onFromChange.bind(this);
        this.onToChange = this.onToChange.bind(this);
    }

    componentDidMount() {
        axios.get('http://82.148.28.184:1337/items?page=1')
            .then((res) => { this.setState({ items: res.data }) })


    }

    onFromChange(day) {
        this.setState({ from: day })
    };

    onToChange(day) {
        this.setState({ to: day })
    };


    onSelect(selectedList, selectedItem) {
        this.setState({ id: selectedItem.id })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (JSON.stringify(prevProps.data) !== JSON.stringify(this.props.data) ||
            JSON.stringify(prevState.data) !== JSON.stringify(this.state.data)
        ) {
            return;
        }

        if (!this.state.id || !this.state.from || !this.state.to) {
            return;
        }

        axios.get('http://82.148.28.184:1337/funnel/series?id=' + this.state.id + '&from=' + formatDate(this.state.from, 'YYYY-MM-DD') + '&to=' + formatDate(this.state.to, 'YYYY-MM-DD'))
            .then((res) => { this.setState({ data: res.data }) })
    }

    render() {
        console.log("render")
        console.log(this.state.data)
        return (
            <div>
                <Multiselect
                    selectionLimit={1}
                    options={this.state.items} // Options to display in the dropdown
                    onSelect={this.onSelect} // Function will trigger on select event
                    displayValue="name" // Property name to display in the dropdown options
                />
                <DayPickerInput
                    formatDate={formatDate}
                    parseDate={parseDate}
                    placeholder={`08/28/2021`}
                    onDayChange={this.onFromChange}
                />
                <DayPickerInput
                    formatDate={formatDate}
                    parseDate={parseDate}
                    placeholder={`11/14/2021`}
                    onDayChange={this.onToChange}
                />
                <Bar data={this.state.data} options={this.state.options} />
                <SallersFunnel ecom_id={this.state.id} from={formatDate(this.state.from, 'YYYY-MM-DD')} to={formatDate(this.state.to, 'YYYY-MM-DD')}/>
            </div>
        )
    }
}


export { FunnelSeries };