import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function TablaReservation() {

    const [reservation, setReservation] = useState([]);

    async function cargarReservation() {
        const options = {method: 'GET'};
    fetch('http://localhost:8080/api/Reservation/all', options)
        .then(response => response.json())
        .then(response => setReservation(response))
        .catch(err => console.error(err));    

    };
    useEffect(()=>{
        cargarReservation();
    },[])

    let contador=0;

    return (
        <Container>
            <Row>
                <Col><h2>Lista Reservation</h2></Col>
            </Row>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Id Reservation</th>
                        <th>StartDate</th>
                        <th>DevolutionDate</th>
                        <th>Id Cliente</th>
                        <th>Ver Detalle</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reservation.map((reservation)=>(
                           <tr key={reservation.id}>
                            <td>{++contador}</td>
                            <td>{reservation.id}</td>
                            <td>{reservation.startDate}</td>
                            <td>{reservation.devolutionDate}</td>
                            <td>{reservation.id_cliente}</td>
                            <td><Link>Ver Detalle</Link></td>
                            <td><Button variant="danger">Eliminar</Button></td>
                           </tr> 
                        ))
                    }
                </tbody>

            </Table>
        </Container>
    )
} export { TablaReservation }