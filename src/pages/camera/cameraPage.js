import React from 'react';
import Button from 'devextreme-react/button';
import CameraComponent from '../../components/camera/CameraComponent';

export class CameraPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2 className={'content-block'}>Registro Fotografico</h2>
        <div className={'content-block'}>
          <div className={'dx-card responsive-paddings'}>
            <CameraComponent />
          </div>
        </div >
      </React.Fragment >
    );
  }
}