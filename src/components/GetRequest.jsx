import React from 'react';
import axios from 'axios';
import {
    Table
} from "react-bootstrap";

class GetRequest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            Id: null
        };

    }


    componentDidMount() {
        // Simple GET request using axios
        axios.get('http://192.168.1.8:1337/items?limit=10&page=1')
            .then((res) => { this.setState({Id: res.data[0].id}); console.log(res) } )

        axios.get('http://192.168.1.8:1337/items?limit=10&page=1')
            .then((resBrand) => { this.setState({resBrand: resBrand.data[0].brand}); console.log(resBrand) } )

        axios.get('http://192.168.1.8:1337/items?limit=10&page=1')
            .then((resVariant) => { this.setState({resVariant: resVariant.data[0].variant}); console.log(resVariant) } )
    }

    render() {
        const { Id } = this.state;
        const { resBrand } = this.state;
        const { resVariant } = this.state;
        return (
            <div className="card text-center m-3">
                <h5 className="card-header" style={{color: "black"}}>Табличка</h5>
                <div className="card-body" style={{color: "black"}}>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Id</th>
                            <th>Brand</th>
                            <th>Variant</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>{Id}</td>
                            <td>{resBrand}</td>
                            <td>{resVariant}</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>{Id}</td>
                            <td>{resBrand}</td>
                            <td>{resVariant}</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>{Id}</td>
                            <td>{resBrand}</td>
                            <td>{resVariant}</td>
                        </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        );
    }
}

export { GetRequest };