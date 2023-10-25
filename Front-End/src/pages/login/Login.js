import { toast } from "react-toastify";
import React, { useState } from "react";
import { Toast } from "../../components/toast/Toast";
import { useDinamicPageTitle } from "../../hooks/UseDinamicPageTitle";
import { logoSvg, elipse01, elipse02, loginImageUnDrawn } from "../../assets/images";
import { Container, Left, Logo, TitleContainer, Title, SubTitle, FirstElipse, SecondElipse, Form, EmailContainer, Input, PasswordContainer, BtnSubmit, Right, RightImage } from "./styles";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  useDinamicPageTitle("Vinyl Days - Login Page");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({email, password});

    toast.success('Logado!!!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

    setEmail("");
    setPassword("");
  }

  return (
    <>
    <Container>
      <Left>
        <Logo
          src={ logoSvg }
          alt="Vinyl Days Logo"
        />

        <TitleContainer>
          <Title>Login</Title>
          <SubTitle>Login with your account.</SubTitle>

          <FirstElipse
            src={ elipse01 }
            alt="First Elipse"
          />

          <SecondElipse
            src={ elipse02 }
            alt="Secound Elipse"
          />
        </TitleContainer>

          <Form onSubmit={ handleSubmit }>
            <EmailContainer>
              <label>E-mail</label>
              <Input
                type="email"
                placeholder="example@example.com"
                value={ email }
                onChange = { (e) => setEmail(e.target.value) }
                required={ true }
              />
            </EmailContainer>

            <PasswordContainer>
              <label>Password</label>
              <Input
                type="password"
                placeholder="example1234#"
                value={ password }
                onChange={ (e) => setPassword(e.target.value) }
                required={ true }
              />
            </PasswordContainer>

            <BtnSubmit type="submit">Sign In</BtnSubmit>
          </Form>
      </Left>

      <Right>
        <RightImage
          src={ loginImageUnDrawn }
          alt="Login"
        />
      </Right>
    </Container>

    <Toast />
    </>
  );
}

export { Login };