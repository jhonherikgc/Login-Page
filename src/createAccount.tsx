import React, { useEffect, useState } from 'react';
import './styles/createAccount.css';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import Button from '@mui/material/Button';
import Lottie from 'lottie-react';

const CreateAccount: React.FC = () => {
  const [anim, setAnim] = useState<any | null>(null);

  useEffect(() => {
    // carrega o JSON da animação em runtime (evita problemas de import/tsconfig)
    const load = async () => {
      try {
        const url = new URL('./assets/Login Character Animation.json', import.meta.url).href;
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Fetch failed: ${res.status}`);
        const json = await res.json();
        setAnim(json);
      } catch (err) {
        console.error('Erro carregando Lottie JSON:', err);
        setAnim(null);
      }
    };
    load();
  }, []);

  return (
    <div className="createAccount-page">
      {/* Lottie fixada à esquerda */}
      <div className="animation-container" aria-hidden="true">
        {anim ? <Lottie animationData={anim} loop /> : null}
      </div>

      <div className="flex-container">
        <div className="container-maior">
          <div className="signUp-container">
            <h1 className="createAccount-title">Inicie sessão</h1>

            <input type="text" className="firstName-input" placeholder="Primeiro nome" />
            <input type="text" className="lastName-input" placeholder="Último nome" />
            <input type="text" className="email-input" placeholder="Email" />
            <input type="password" className="password-input" placeholder="Senha" />

            <div className="actions-row">
              <div className="remember-me">
                <input type="checkbox" id="rememberMe" />
                <label htmlFor="rememberMe">Lembrar-me</label>
              </div>

              <div className="forgot-password">Esqueceu a senha?</div>
            </div>

            <div className="login-google">
              <Button
                variant="outlined"
                className="google-login-button"
                startIcon={<GoogleIcon className="google-icon" />}
                onClick={() => console.log('Entrar com Google')}
                aria-label="Entrar com Google"
              >
                Entrar com Google
              </Button>
            </div>

            <div className="button-row">
              <input type="submit" className="login-button" value="Log in" />
              <input type="button" className="create-account-button" value="Criar conta" />
            </div>

            <div className="social-login-row" aria-hidden={false}>
              <span className="social-login-text">Ou crie conta com</span>
              <div className="social-icons" role="group" aria-label="Social sign up">
                <GoogleIcon
                  className="social-icon google-icon"
                  onClick={() => console.log('Entrar com Google')}
                  role="button"
                  tabIndex={0}
                  aria-label="Entrar com Google"
                />
                <FacebookIcon
                  className="social-icon facebook-icon"
                  onClick={() => console.log('Entrar com Facebook')}
                  role="button"
                  tabIndex={0}
                  aria-label="Entrar com Facebook"
                />
                <LinkedInIcon
                  className="social-icon linkedin-icon"
                  onClick={() => console.log('Entrar com LinkedIn')}
                  role="button"
                  tabIndex={0}
                  aria-label="Entrar com LinkedIn"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;

