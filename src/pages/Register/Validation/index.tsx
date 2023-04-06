import React, { FormEvent, useState } from 'react';
import { useNavigate } from "react-router-dom";

import { useSelector } from 'react-redux'
import type { RootState } from '../../../store'

import { Phone, Text } from './styles';

import {
  Card, LineForm, SubTitle, Button, ButtonLink, Form,
} from '../../../stylesheets/global';

import Title from '../../../components/Title';
import CodeValidation from '../../../components/CodeVerification';

import api from '../../../services/api';

import { toast } from 'react-toastify';

export default function Validation() {
  const navigate = useNavigate();

  const phone = useSelector((state: RootState) => state.user.register.phone)

  const [otp, setOtp] = useState('');

  const handleSubmit = async (event: FormEvent): Promise<void> => {
    event.preventDefault();

    try {
      await api.post("/validation", {
        code: otp,
      });
  
      navigate("/register/company");
    } catch (error) {
      toast.error("Codigo invalido :(")
    }

  }

  const handleResendCode = (): void => {
    toast("Codigo reenviado para o email informado :)")
  }

  const navigationToBack = () => {
    navigate("/register/user")
  }

  return (
    <Card>
      <Title>Validação da conta</Title>

      <SubTitle>Validação enviada para seu celular</SubTitle>

      <Text>
        Enviamos uma mensagem SMS com o codigo de confirmação para o celular abaixo:
      </Text>

      <Phone>{phone}</Phone>

      <Form onSubmit={handleSubmit}>
        <LineForm>
          <CodeValidation
            label="Informe o código de verificação"
            value={otp}
            onChange={setOtp}
          />

          <ButtonLink type="button" onClick={handleResendCode}>Não recebeu o código? Clique para reenviar</ButtonLink>
        </LineForm>

        <LineForm>
          <Button type="submit">Confirmar</Button>

          <ButtonLink type="button" onClick={navigationToBack}>Voltar</ButtonLink>
        </LineForm>
      </Form>
    </Card>
  );
}
