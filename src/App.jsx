import { useState, useEffect } from 'react';
import './App.css';
import { useConversionMoneda } from './hooks/useConversionMoneda';

/*
 Examen Recuperatorio: Módulo V - React
 Fecha: 26/11/2023
 Universidad: USIP

 Participante: Oscar Aldo Sumi Zamorano
 Correo Electrónico: oscar.sumi@gmail.com
*/

export default function App() {
  const [monedas, setMonedas] = useState([]);
  const [moneda1, setMoneda1] = useState('BOB');
  const [moneda2, setMoneda2] = useState('BRL');
  const [monto, setMonto] = useState(0);
  const [result, setResult] = useState(0);
  const { listaMonedas, convertirDivisa } = useConversionMoneda();

  useEffect(() => {
    const data = listaMonedas();
    setMonedas(data);
  }, []);

  useEffect(() => {
    setMonto('')
    setResult('')
  }, [moneda1, moneda2])

  const handleConvert = () => {
    if (moneda1 !== moneda2) {
      const resp = convertirDivisa(monto, moneda1, moneda2);
      setResult(resp);
    }
    else
    {
      alert('Las Monedas de origen y destino debes ser diferentes');
    }
  };

  return (
    <div className="background">
      <div className="container">
        <div className="selects-container">
          <select
            value={moneda1}
            name="moneda-1"
            id="moneda-1"
            onChange={(e) => setMoneda1(e.target.value)}
          >
            {monedas.map((moneda) => (
              <option key={moneda.sigla} value={moneda.sigla}>{moneda.nombre}</option>
            ))}
          </select>
          <select
            value={moneda2}
            name="moneda-2"
            id="moneda-2"
            onChange={(e) => setMoneda2(e.target.value)}
          >
            {monedas.map((moneda) => (
              <option key={moneda.sigla} value={moneda.sigla}>{moneda.nombre}</option>
            ))}
          </select>
        </div>
        <div className="inputs-container">
          <input
            className=""
            type="text"
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
          />
          <p className=""> {moneda2}: {result}</p>
        </div>
        <div>
          <button onClick={handleConvert}>Convertir</button>
        </div>
      </div>
    </div>
    // <p>{JSON.stringify(monedas)}</p>
  );
}
