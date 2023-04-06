import React, { FormEvent, useState } from 'react';
import { useNavigate } from "react-router-dom";

import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation();

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
      toast.error(t("Invalid code :("))
    }

  }

  const handleResendCode = (): void => {
    toast(t("Code resent to email provided :)"))
  }

  const navigationToBack = () => {
    navigate("/register/user")
  }

  return (
    <Card>
      <Title>{t("Account validation")}</Title>

      <SubTitle>{t("Validation sent to your mobile")}</SubTitle>

      <Text>
      {t("We sent a message")}
      </Text>

      <Phone>{phone}</Phone>

      <Form onSubmit={handleSubmit}>
        <LineForm>
          <CodeValidation
            label={t("Enter the code")}
            value={otp}
            onChange={setOtp}
          />

          <ButtonLink type="button" onClick={handleResendCode}>{t("Didn't receive")}</ButtonLink>
        </LineForm>

        <LineForm>
          <Button type="submit">{t("Confirm")}</Button>

          <ButtonLink type="button" onClick={navigationToBack}>{t("Back")}</ButtonLink>
        </LineForm>
      </Form>
    </Card>
  );
}
