import React from 'react';
import './home.scss';
import Button from 'devextreme-react/button';
import notify from 'devextreme/ui/notify';
import { SelectBox } from 'devextreme-react/select-box';
import DateBox from 'devextreme-react/date-box';
import List from 'devextreme-react/list';
import vehicleInfo from './vehicleInfo.js';
import { vehicles } from './data.js';

const searchModeItems = ['Destino1', 'Destino2'];

function WarningBanner(props) {
  if (!props.warn) {
    notify("3 vehiculos encontrados");
    return (
      <div className="option">
        <div>Resultado:</div>
        <List
          dataSource={vehicles}
          height="100%"
          itemRender={vehicleInfo} />
      </div>
    );
  }

  return (
    <div className="option">
      <div>Sin resultados</div>
    </div>
  );
}

export class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showWarning: true }
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    this.setState(prevState => ({
      showWarning: !prevState.showWarning
    }));
  }

  render() {
    return (
      <React.Fragment>
        <h2 className={'content-block'}>Inicio</h2>
        <div className={'content-block'}>
          <div className={'dx-card responsive-paddings'}>
            <div className={'logos-container'}>
              <img
                alt={''}
                src={`https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/images/employees/06.png`}
                className={'image-profile'}
              />
              <h5 className={'name-profile'}>Sandra Perez</h5>
              <p className={'name-profile'}>Audiotoria</p>
              <p className={'name-profile'}>Legajo: 9999</p>

              <div className="options">
                <div className="caption">Busqueda</div>
                <div className="option">
                  <div>Introduce tu destino</div>
                  <SelectBox items={searchModeItems}
                    value={'contains'} />
                </div>
                <div className="option">
                  <div>Desde</div>
                  <DateBox defaultValue={new Date()}
                    pickerType="rollers" />
                </div>
                <div className="option">
                  <div>Hasta</div>
                  <DateBox defaultValue={new Date()}
                    pickerType="rollers" />
                </div>
                <br />
                <Button
                  width={150}
                  text="Buscar"
                  type="default"
                  stylingMode="contained"
                  onClick={this.handleToggleClick}
                />

                <br />

                <WarningBanner warn={this.state.showWarning} />
              </div>
            </div>
          </div>
        </div >
      </React.Fragment >
    );
  }
}