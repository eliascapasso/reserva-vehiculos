import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { SingleCard } from './layouts';
import { LoginForm, ResetPasswordForm, ChangePasswordForm, CreateAccountForm } from './components';

export default function () {
  return (
    <Switch>
      <Route exact path='/login' >
        <SingleCard title="Iniciar Sesión">
          <LoginForm />
        </SingleCard>
      </Route>
      <Route exact path='/create-account' >
        <SingleCard title="Crear una Cuenta">
          <CreateAccountForm />
        </SingleCard>
      </Route>
      <Route exact path='/reset-password' >
        <SingleCard
          title="Resetear Contraseña"
          description="Ingrese la dirección de correo electrónico que utilizó para registrarse y le enviaremos un enlace para restablecer su contraseña por correo electrónico."
        >
          <ResetPasswordForm />
        </SingleCard>
      </Route>
      <Route exact path='/change-password/:recoveryCode' >
        <SingleCard title="Cambiar Contraseña">
          <ChangePasswordForm />
        </SingleCard>
      </Route>
      <Redirect to={'/login'} />
    </Switch>
  );
}
