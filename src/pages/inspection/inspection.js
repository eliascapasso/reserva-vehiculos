import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'devextreme-react/button';

export class InspectionPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h2 className={'content-block'}>Ficha de Inspeccion</h2>
                <div className={'content-block'}>
                    <div className={'dx-card responsive-paddings'}>

                        <p className={'text-vehicle'}><b>Kilometraje :</b> <input type="text"></input></p>
                        <p className={'text-vehicle'}> <input type="checkbox"></input><b>&nbsp;Cubiertas</b></p>
                        <p className={'text-vehicle'}> <input type="checkbox"></input><b>&nbsp;Luces</b></p>
                        <p className={'text-vehicle'}> <input type="checkbox"></input><b>&nbsp;Sin choque</b></p>
                        <p className={'text-vehicle'}> <input type="checkbox"></input><b>&nbsp;Aceite</b></p>
                        <p className={'text-vehicle'}> <input type="checkbox"></input><b>&nbsp;Agua</b></p>
                        <br />

                        <p className={'text-vehicle'}> <b>Observaciones</b></p>
                        <p className={'text-vehicle'}> <textarea></textarea></p>


                        <br />
                        <div className='centrar'>
                            <Link to={`/home`}>CANCELAR</Link> &nbsp;
                        </div>
                        <br />
                        
                        <Button
                            width={'100%'}
                            text="CONFIRMAR"
                            type="default"
                            stylingMode="contained"
                        />

                    </div>
                </div >
            </React.Fragment >
        )
    }
}

