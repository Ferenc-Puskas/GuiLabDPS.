const ResumenReserva = ({ reservas, totalReserva }) => {  
    return (  
      <div className="mt-4">  
        <h5>Resumen de la Reserva</h5>  
        <ul className="list-group">  
          {reservas.length === 0 ? (  
            <li className="list-group-item">No hay reservas realizadas.</li>  
          ) : (  
            reservas.map((reserva, index) => (  
              <li key={index} className="list-group-item">  
                {`Deporte: ${reserva.deporte.charAt(0).toUpperCase() + reserva.deporte.slice(1)} - Cancha ${reserva.indice + 1}, Duración: ${reserva.duracion} horas`}  
              </li>  
            ))  
          )}  
        </ul>  
        {reservas.length > 0 && (  
          <h6 className="mt-3">Total a Pagar: ${totalReserva}</h6>  
        )}  
      </div>  
    );  
  };  
  
  export default ResumenReserva;  