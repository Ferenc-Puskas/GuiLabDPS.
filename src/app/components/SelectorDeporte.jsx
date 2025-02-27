const SelectorDeporte = ({ setDeporteSeleccionado }) => {
    const deportes = ['futbol', 'baloncesto', 'tenis'];

    return (
        <div className="mb-3">
            <label htmlFor="deporteSelect" className="form-label">Selecciona un deporte</label>
            <select
                id="deporteSelect"
                className="form-select"
                onChange={(e) => setDeporteSeleccionado(e.target.value)}
            >
                {deportes.map((deporte) => (
                    <option key={deporte} value={deporte}>
                        {deporte.charAt(0).toUpperCase() + deporte.slice(1)}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectorDeporte;  