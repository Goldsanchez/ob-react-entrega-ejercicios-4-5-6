import {useState, useEffect} from 'react'

const ClockFunction = () => {
    const datos = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Martín',
        apellidos: 'San José',
    }
 
    const tick = () => {
        setData((prevState =>{
            let edad = prevState.edad + 1
            return {...prevState, fecha: new Date(), edad,}
        }))
    }

    const [data, setData] = useState(datos)

    useEffect(() => {
        

        const interval = setInterval(() => {
          
            tick()

        }, 1000);

        return () => clearInterval(interval);
      }, []);

    return <div>
        <h2>Hora Actual: {data.fecha.toLocaleTimeString()}</h2>
        <h3>{data.nombre} {data.apellidos}</h3>
        <h1>Edad: {data.edad}</h1>
    </div>
}

export default ClockFunction;