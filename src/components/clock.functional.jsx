//tarea pasar de c.clase a c.funcion

import React,{ useState, useEffect } from 'react';

const ClockFunctional = () => {

    const valoresIniciales = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Martín',
        apellidos: 'San José',
    }

    const [usuario, setUsuario] = useState(valoresIniciales);

    useEffect(() => {
    const intervalAge = setInterval(() => {
        actualizarUsuario();
    }, 1000);
    return () => {
        clearInterval(intervalAge);
    };
    });
    
    const actualizarUsuario = () => {
        return setUsuario({
            fecha: usuario.fecha,
            edad: usuario.edad + 1,
            nombre: usuario.nombre,
            apellidos: usuario.apellidos,
        });
    }
    
    return (
        <div>
        <h2>
            Hora Actual:
            {usuario.fecha.toLocaleTimeString()}
        </h2>
        <h3>
            {usuario.nombre} {usuario.apellidos}
        </h3>
        <h1>Edad: {usuario.edad}</h1>
        </div>
    );
}

export default ClockFunctional;
