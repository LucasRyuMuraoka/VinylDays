import { toast } from "react-toastify";
import React, { useState } from "react";
import { Toast } from "../../components/toast/Toast";
import { useDinamicPageTitle } from "../../hooks/UseDinamicPageTitle";
import { logoSvg, elipse01, elipse02, loginImageUnDrawn } from "../../assets/images";
import { Container, Left, Logo, TitleContainer, Title, SubTitle, FirstElipse, SecondElipse, Form, EmailContainer, Input, PasswordContainer, BtnSubmit, Right, RightImage } from "./styles";
import { useNavigate } from "react-router-dom";
import { LoginService } from "../../service/login.service";
import { appTimeout } from "../../service/sleep.service";

const loginService = new LoginService();

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isBlocked, setIsBlocked] = useState(false);

	useDinamicPageTitle("Vinyl Days - Login Page");

  const handleSubmit = async (e) => {
    e.preventDefault();
		setIsBlocked(true);
		
		const alert = toast.loading("Please wait...");

		const requestBody = {
			email,
			password
		}

    loginService.login(requestBody).then(async data => {
			if(!sessionStorage.getItem("JWT")) {
				sessionStorage.setItem("JWT", data);
			}

			await appTimeout(2000);

			toast.update(alert, {
				render: "Logged! Await auto redirect...",
				type: "success",
				isLoading: false,
				position: "top-right",
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: false,
				draggable: true,
				progress: undefined,
				theme: "colored",
			});

			await appTimeout(2000);
			navigate("/admin");

		}).catch(async error => {
			console.clear();
			await appTimeout(2000);

			toast.update(alert, {
				render: error,
				type: "error",
				isLoading: false,
				position: "top-right",
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: false,
				draggable: true,
				progress: undefined,
				theme: "colored",
			});
		});

		await appTimeout(2000);
		setIsBlocked(false);
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

            <BtnSubmit type="submit" disabled={ isBlocked }>{ isBlocked ? "Await..." : "Sign In" }</BtnSubmit>
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
