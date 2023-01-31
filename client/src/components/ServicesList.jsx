import { useEffect, useState } from "react";
import { Card, CardContent, Typography } from '@mui/material';

export default function ServiceList() {

    const [services, setServices] = useState([]);

    const loadServices = async () => {

        const response = await fetch('http://localhost:4000/service/record/31');
        const data = await response.json();
        setServices(data);
    }

    useEffect(() => {
        loadServices();
    }, [])

    return(
        <>
            <h1>Services List</h1>
            {
                services.map((service) => (
                    <Card style={{
                        marginBottom: ".7rem",
                        backgroundColor: 'lightblue'
                    }}>
                        <CardContent>
                            <Typography>Id del servicio: {service.service_id}</Typography>
                            <Typography>Horas: {service.hours}</Typography>
                            <Typography>Estatus calificación: {service.status_rating}</Typography>
                            <Typography>Nombre: {service.name}</Typography>
                            <Typography>Descripción: {service.description}</Typography>
                            <Typography>Total del pago: {service.total_payment}</Typography>
                            <Typography>Fecha de pago: {service.pay_date}</Typography>
                        </CardContent>
                    </Card>
                ))
            }   
        </>
    )

}