import React from 'react';
import axios from 'axios';
import {
    Table
} from "react-bootstrap";
import { Multiselect } from 'multiselect-react-dropdown';

class GetRequest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            Id: null,
            // options: [{name: 'Srigar', id: 1},{name: 'Sam', id: 2}],
            items: []
        };

    }


    componentDidMount() {
        // Simple GET request using axios
        axios.get('http://192.168.1.8:1337/items?page=1')
            .then((res) => { this.setState(
                { items: res.data }
                ) } )
    }

    render() {
        const { Id } = this.state;
        const { resBrand } = this.state;
        const { resVariant } = this.state;
        return (
            <div  style={{ alignItems: "center" }}>
                <h5  style={{color: "black"}}>Табличка</h5>
                <div  style={{color: "black"}}>
                <Multiselect
                    selectionLimit={1}
                    options={this.state.items} // Options to display in the dropdown
                    selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
                    onSelect={this.onSelect} // Function will trigger on select event
                    onRemove={this.onRemove} // Function will trigger on remove event
                    displayValue="name" // Property name to display in the dropdown options
                /> 
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>Бренд</th>
                            <th>Характеристики</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.items && this.state.items.map((item) => (
                            <tr key={item.id}>
                                <th>{ item.name }</th>
                                <th>{ item.variant }</th>
                            </tr>
                            ))
                        }
                        </tbody>
                    </Table> 
                </div>
            </div>
        );
    }
}

export { GetRequest };