const Cancha = ({ indice, disponible, manejarReserva, deporte }) => {
    return (
        <div className="col-2 mb-3">
            <button
                onClick={() => manejarReserva(indice)}
                className={`btn ${disponible ? 'btn-primary' : 'btn-warning'}`}
                disabled={!disponible}
            >
                Cancha {indice + 1} ({deporte.charAt(0).toUpperCase() + deporte.slice(1)})
            </button>
        </div>
    );
};

export default Cancha;  