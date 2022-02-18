import React from 'react';
import Button from 'devextreme-react/button';
import { Link } from 'react-router-dom';

export default function vehicleInfo(item) {

  return (
    <div className="vehicle">
      <img src={item.ImageSrc} />
      <p>Patente: {item.patente}</p>
      <p>Estado: {item.estado}</p>
      <p>KM: {item.km}</p>
      <p>Lugar: {item.lugar}</p>
      <div className="but">
        <Link to={`/reserve`}>RESERVAR</Link>
      </div>
      <hr />
    </div>
  );
}