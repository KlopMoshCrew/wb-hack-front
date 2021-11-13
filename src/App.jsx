import React from 'react';
import { Line } from 'react-chartjs-2';
import './App.css'
import {
    Navbar,
    Container,
    Form,
    FormControl,
    Offcanvas,
    OffcanvasTitle,
    Nav,
    Button,
    NavDropdown
} from "react-bootstrap";


function App() {
    const data = {
        labels: ['Янв', 'Февр', 'Март', 'Апр', 'Май', 'Июнь'],
        datasets: [
            {
                label: 'Продажа плова',
                data: [12, 19, 3, 5, 2, 3],
                fill: false,
                borderColor: '#ffffff',
                pointRadius: 5,
                pointBorderColor: '#ffffff',
                tension: 0.1,
            },
            {
                label: 'Line Dataset',
                data: [10, 15, 8, 15, 25, 15],
                fill: false,
                borderColor: 'rgb(54, 162, 235)',
                pointRadius: 5,
                pointBorderColor: '#ffffff',
                tension: 0.1,
            }
        ],
    };

    const options = {
        plugins:{legend:{display: false}},
        layout: {padding: {bottom: 100}},
        scales: {
            y: {
                ticks: {
                    color: "white",
                    font: {
                        size: 18
                    }
                },
                grid: {
                    color: "#ffffff"
                }
            },
            x: {
                ticks: {
                    color: "white",
                    font: {
                        size: 18
                    }
                },
            }
        }
    };


    return (
    <div className="App">
        <Navbar bg="light" expand={false}>
            <Container fluid>
                <Navbar.Brand href="#">
                   Logo WB
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">WB Partners</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="#action1">Главная страница</Nav.Link>
                            <Nav.Link href="#action2">Контакты</Nav.Link>
                            <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form className="d-flex">
                            <FormControl
                                type="search"
                                placeholder="Поиск по категориям товаров"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Найти</Button>
                        </Form>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
        <h2>Сравнение цен узбекского плова</h2>
        <Line data={data} options={options} />
    </div>
  )
}

export default App