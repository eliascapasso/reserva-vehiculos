import React from 'react';
import ScrollView from 'devextreme-react/scroll-view';
import './single-card.scss';

export default ({ title, description, children }) => (
  <ScrollView height={'100%'} width={'100%'} className={'with-footer single-card'}>
    <div className={'dx-card content'}>
      <div className={'header'}>
        <div className={'title'}>{title}</div>
        <div className={'description'}>{description}</div>
        <div className='logo'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Musimundo_isologo_apaisado.svg/2560px-Musimundo_isologo_apaisado.svg.png' /></div>
      </div>
      {children}
    </div>
  </ScrollView>
);
