import React from 'react';
import './reserve.scss';
import Button from 'devextreme-react/button';
import DateBox from 'devextreme-react/date-box';
import { Link } from 'react-router-dom';

export class ReservePage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2 className={'content-block'}>Alta de Reserva</h2>
        <div className={'content-block'}>
          <div className={'dx-card responsive-paddings'}>

            <p className={'text-vehicle'}><b>Reservar a:</b> Sandra Perez</p>
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
            <div className={'logos-container'}>
              <img
                alt={''}
                src={'https://cdn.motor1.com/images/mgl/wYyJG/s3/critica-renault-sandero-r-s-2020.jpg'}
                className={'image-vehicle'}
              />
            </div>
            <p className={'text-vehicle'}><b>Estado:</b> OK</p>
            <p className={'text-vehicle'}><b>Patente:</b> AC 123 AA</p>
            <br />
            <div className='link-foto'>
            <Link to={`/inspection`}>FICHA DE INSPECCION</Link> &nbsp;
            </div> 
            <br /><br />
            <p className={'text-vehicle'}><b>Kilometraje:</b> 108.000</p>
            <br />
            <div className='link-foto'>
            <Link to={`/reserve/camera`}>TOMAR FOTO</Link>
            </div>
            <br />
            <div className='link-foto'>
            <Link to={`/home`}>CANCELAR</Link> &nbsp;
            </div> 
            <br />
            <Button
              width={'100%'}
              text="CONFIRMAR RESERVA"
              type="default"
              stylingMode="contained"
            />
          </div>
        </div >
      </React.Fragment >
    );
  }
}