"use client";
import { useState, useEffect } from 'react';
import Cancha from '../components/Cancha';
import SelectorDeporte from '../components/SelectorDeporte';
import ResumenReserva from '../components/ResumenReserva';

const PlanoDeportivo = () => {  
    const [deporteSeleccionado, setDeporteSeleccionado] = useState('futbol');  
    const [reservas, setReservas] = useState([]);  
    const [duracion, setDuracion] = useState(1);  
    
    const precios = {  
      futbol: 20,  
      baloncesto: 25,  
      tenis: 15,  
    };  
  
    const [canchas, setCanchas] = useState({  
      futbol: [],  
      baloncesto: [],  
      tenis: [],  
    });  
  
    useEffect(() => {  
      setCanchas({  
        futbol: Array(5).fill().map((_, index) => ({ disponible: true, id: index })),  
        baloncesto: Array(5).fill().map((_, index) => ({ disponible: true, id: index })),  
        tenis: Array(3).fill().map((_, index) => ({ disponible: true, id: index })),  
      });  
    }, []);  
  
    const manejarReserva = (indice) => {  
      const nuevoEstado = [...canchas[deporteSeleccionado]];  
      if (nuevoEstado[indice].disponible) {  
        nuevoEstado[indice].disponible = false;  
        setCanchas(prevCanchas => ({  
          ...prevCanchas,  
          [deporteSeleccionado]: nuevoEstado,  
        }));  
        setReservas([...reservas, { deporte: deporteSeleccionado, indice, duracion }]);  
      }  
    };  
  
    const totalReserva = reservas.reduce((total, reserva) => {  
      return total + precios[reserva.deporte] * reserva.duracion;  
    }, 0);  

    useEffect(() => {  
        setReservas([]);
      }, [deporteSeleccionado]);
  
    return (  
      <div className="container">  
        <h1 className="text-center">Reserva de Canchas Deportivas</h1>  
        <SelectorDeporte setDeporteSeleccionado={setDeporteSeleccionado} />  
        <div className="mb-3">  
          <label htmlFor="duracion" className="form-label">Duración de la Reserva (horas)</label>  
          <input   
            type="number"   
            min="1"   
            max="5"   
            value={duracion}   
            onChange={(e) => setDuracion(Number(e.target.value))}  
            className="form-control"   
            id="duracion"   
          />  
        </div>  
        <div className="row mt-4">  
          {canchas[deporteSeleccionado].map((cancha, index) => (  
            <Cancha   
              key={index}   
              indice={index}   
              disponible={cancha.disponible}   
              manejarReserva={manejarReserva}   
              deporte={deporteSeleccionado}   
            />  
          ))}  
        </div>  
        <ResumenReserva reservas={reservas} totalReserva={totalReserva} />  
      </div>  
    );  
  };  
  
  export default PlanoDeportivo;  