import React, { useState } from 'react';

import { Phone, Text } from './styles';

import {
  Card, LineForm, SubTitle, Button, ButtonLink,
} from '../../../stylesheets/global';

import Title from '../../../components/Title';
import CodeValidation from '../../../components/CodeVerification';

export default function Validation() {
  const [otp, setOtp] = useState('');

  return (
    <Card>
      <Title>Validação da conta</Title>

      <SubTitle>Validação enviada para seu celular</SubTitle>

      <Text>
        Enviamos uma mensagem SMS com o codigo de confirmação para o celular abaixo:
      </Text>

      <Phone>(51) 9 8551-0441</Phone>

      <LineForm>
        <CodeValidation
          label="Informe o código de verificação"
          value={otp}
          onChange={setOtp}
        />

        <ButtonLink>Não recebeu o código? Clique para reenviar</ButtonLink>
      </LineForm>

      <LineForm>
        <Button type="button">Confirmar</Button>

        <ButtonLink>Voltar</ButtonLink>
      </LineForm>
    </Card>
  );
}
