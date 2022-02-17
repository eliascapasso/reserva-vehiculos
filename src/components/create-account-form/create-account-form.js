import React, { useState, useRef, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Form, {
  Item,
  Label,
  ButtonItem,
  ButtonOptions,
  RequiredRule,
  CustomRule,
  EmailRule
} from 'devextreme-react/form';
import notify from 'devextreme/ui/notify';
import LoadIndicator from 'devextreme-react/load-indicator';
import { createAccount } from '../../api/auth';
import './create-account-form.scss';

export default function (props) {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const formData = useRef({});

  const onSubmit = useCallback(async (e) => {
    e.preventDefault();
    const { email, password } = formData.current;
    setLoading(true);

    const result = await createAccount(email, password);
    setLoading(false);

    if (result.isOk) {
      history.push('/login');
    } else {
      notify(result.message, 'error', 2000);
    }
  }, [history]);

  const confirmPassword = useCallback(
    ({ value }) => value === formData.current.password,
    []
  );

  return (
    <form className={'create-account-form'} onSubmit={onSubmit}>
      <Form formData={formData.current} disabled={loading}>
        <Item
          dataField={'email'}
          editorType={'dxTextBox'}
          editorOptions={emailEditorOptions}
        >
          <RequiredRule message="El Email es requerido" />
          <EmailRule message="Email inválido" />
          <Label visible={false} />
        </Item>
        <Item
          dataField={'password'}
          editorType={'dxTextBox'}
          editorOptions={passwordEditorOptions}
        >
          <RequiredRule message="La contraseña es requerida" />
          <Label visible={false} />
        </Item>
        <Item
          dataField={'confirmedPassword'}
          editorType={'dxTextBox'}
          editorOptions={confirmedPasswordEditorOptions}
        >
          <RequiredRule message="La contraseña es requerida" />
          <CustomRule
            message={'Las contraseñas no coinciden'}
            validationCallback={confirmPassword}
          />
          <Label visible={false} />
        </Item>
        <Item>
          {/* <div className='policy-info'>
            By creating an account, you agree to the <Link to="#">Terms of Service</Link> and <Link to="#">Privacy Policy</Link>
          </div> */}
        </Item>
        <ButtonItem>
          <ButtonOptions
            width={'100%'}
            type={'default'}
            useSubmitBehavior={true}
          >
            <span className="dx-button-text">
              {
                loading
                  ? <LoadIndicator width={'24px'} height={'24px'} visible={true} />
                  : 'Crear nueva cuenta'
              }
            </span>
          </ButtonOptions>
        </ButtonItem>
        <Item>
          <div className={'login-link'}>
            ¿Tiene una cuenta? <Link to={'/login'}>Iniciar Sesión</Link>
          </div>
        </Item>
      </Form>
    </form>
  );
}

const emailEditorOptions = { stylingMode: 'filled', placeholder: 'Email', mode: 'email' };
const passwordEditorOptions = { stylingMode: 'filled', placeholder: 'Contraseña', mode: 'password' };
const confirmedPasswordEditorOptions = { stylingMode: 'filled', placeholder: 'Confirmar Contraseña', mode: 'password' };
