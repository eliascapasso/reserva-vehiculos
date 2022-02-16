import React, { useState } from 'react';
import './profile.scss';
import Form from 'devextreme-react/form';

export default () => {
  const [notes, setNotes] = useState(
    'Sandra es CPN y ha sido nuestra controladora desde 2008. Le encanta interactuar con el personal, así que si no la conoce, asegúrese de saludarla.'
  );
  const employee = {
    ID: 7,
    Nombre: 'Sandra',
    Apellido: 'Perez',
    Rol: 'Administrador',
    Foto: 'images/employees/06.png',
    FechaNacimiento: new Date('1974/11/15'),
    FechaEntrada: new Date('2020/03/12'),
    Notas: notes,
    Direccion: 'Domingo Silva 1258'
  };

  return (
    <React.Fragment>
      <h2 className={'content-block'}>Perfil</h2>

      <div className={'content-block dx-card responsive-paddings'}>
        <div className={'form-avatar'}>
          <img
            alt={''}
            src={`https://js.devexpress.com/Demos/WidgetsGallery/JSDemos/${
              employee.Foto
            }`}
          />
        </div>
        <span>{notes}</span>
      </div>

      <div className={'content-block dx-card responsive-paddings'}>
        <Form
          id={'form'}
          defaultFormData={employee}
          onFieldDataChanged={e => e.dataField === 'Notes' && setNotes(e.value)}
          labelLocation={'top'}
          colCountByScreen={colCountByScreen}
        />
      </div>
    </React.Fragment>
  );
};

const colCountByScreen = {
  xs: 1,
  sm: 2,
  md: 3,
  lg: 4
};
