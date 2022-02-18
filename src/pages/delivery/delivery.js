import React from 'react';
import './delivery.scss';
import Button from 'devextreme-react/button';
import DateBox from 'devextreme-react/date-box';
import { Link } from 'react-router-dom';

export class DeliveryPage extends React.Component {
    render() {
    return (
        <React.Fragment>
        <h2 className={'content-block'}>Entrega de Unidad</h2>
        <div className={'content-block'}>
          <div className={'dx-card responsive-paddings'}>

            <p className={'text-vehicle'}><b>Reservar de:</b> Sandra Perez</p>
            <p className={'text-vehicle'}><b>Origen:</b> Destino 1</p>
            <p className={'text-vehicle'}><b>Destino:</b> Destino 2</p>
            <p className={'text-vehicle'}><b>Fecha desde:</b> </p>
            <DateBox defaultValue={new Date()}
              pickerType="rollers" />
            <p className={'text-vehicle'}><b>Fecha Hasta:</b> </p>
            <DateBox defaultValue={new Date()}
              pickerType="rollers" />
            <p className={'text-vehicle'}><b>Duracion: 2 dias</b> </p>
            <br />
            <div className='centrar'>
            <Link to={`/inspection`}>FICHA DE INSPECCION</Link> &nbsp;
            </div>           
            <br /><br />
            <Button
              width={'100%'}
              text="REGISTRO FOTOGRAFICO"
              type="default"
              stylingMode="contained"
            />            
            <p className={'text-vehicle'}><b>Estado:</b> OK</p>           
            <br />            
            <br />
            <p className={'text-vehicle'}><b>Kilometraje Inicial:</b> 108.000</p>
            <p className={'text-vehicle'}><b>Kilometraje Entrega:</b> 120.000</p>
            <br />
            <div className='centrar'>
            <Link to={`/home`}>CANCELAR</Link> &nbsp;
            </div> 
             <br />
             <br />
            <Button
              width={'100%'}
              text="CONFIRMAR ENTREGA"
              type="default"
              stylingMode="contained"
            />
            
          </div>
        </div >
      </React.Fragment >
    )
}
}