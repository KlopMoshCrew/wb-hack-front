import React, { useState, useEffect } from 'react';
import axios from "axios";
import {Bar, Line} from 'react-chartjs-2';
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
    NavDropdown,
    Table
} from "react-bootstrap";
import icon from './img/icon.png'
import {GetRequest} from "./components/GetRequest";
import {FunnelSeries} from "./components/FunnelSeries";


const footerStyle = {
    backgroundColor: "#481173",
    fontSize: "20px",
    color: "white",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%"
};

const phantomStyle = {
    display: "block",
    padding: "20px",
    height: "60px",
    width: "100%"
};

function Footer({ children }) {
    return (
        <div>
            <div style={phantomStyle} />
            <div style={footerStyle}>{children}</div>
        </div>
    );
}


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

    const DATA_COUNT = 7;
    const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

    const actions = [
        {
            name: 'Randomize',
            handler(chart) {
                chart.data.datasets.forEach(dataset => {
                    dataset.data = Utils.numbers({count: chart.data.labels.length, min: -100, max: 100});
                });
                chart.update();
            }
        },
    ];



    const dataBar = {
        labels: ["Organic", "Sponsored", "Organic", "Sponsored"],
        previousDate: {
            label: "08/10/2019 - 09/30/2019",
            dataSet: [10000, 150000, 10000, 150000]
        },
        currentDate: {
            label: "10/01/2019 - 11/20/2019",
            dataSet: [10000, 225000, 10000, 225000]
        }
    };

    const optionsBar = {
        scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true
            }]
        }
    };

    // fetch('http://192.168.1.8:1337/items?limit=10&page=1')
    //     .then(response => response.json())
    //     .then(res => console.log(res));

    return (
    <div className="App">
        <div>
        <Navbar bg="light" expand={false}>
            <Container fluid >
                <Navbar.Brand href="#">
                   <img src={icon} width={100} height={100} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="start"
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

        </div>
        <div className="Dynamic-line">
            <h2>Сравнение цен узбекского плова</h2>
            <SallersFunnel ecom_id={"8360E6D158AEBD26BBBE835C38F88748"} from={"2021-01-01"} to={"2021-12-01"}/>
        </div>

        <div>
            <FunnelSeries />
        </div>
        <Footer>
            <span>Клоп в трубе © 2021</span>
        </Footer>
    </div>
  )
}

export default App
