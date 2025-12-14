import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/loginPage.css';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import Button from '@mui/material/Button';
import Lottie from 'lottie-react';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import { Helmet } from 'react-helmet-async';

const LoginPage: React.FC = () => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // aqui você pode tratar autenticação / validação
    console.log('Formulário de login enviado');
  };

  return (
    <div className="login-page">
      <Helmet>
      <title>Faça Login</title>
      </Helmet>

      {/* Lottie fixada à esquerda */}
      <div className="animation-container" aria-hidden="true">
        {anim ? <Lottie animationData={anim} loop /> : null}
      </div>

      <div className="flex-container">
        <div className="container-maior">
          <div className="login-container">
            <h1 className="login-title">Bem-vindo (a) de volta!</h1>
            <h2 className='login-subtitle'>Coloque suas credenciais</h2>

            <form onSubmit={handleSubmit} className="login-form">
              <p className='email-label'>E-mail</p>
              <input type="text" className="email-input" placeholder="E-mail" />
              <PersonIcon className="person-icon" />
              
              <p className='password-label'>Senha</p>
              <input type="password" className="password-input" placeholder="Senha" />
              <LockIcon className="lock-icon" />

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
                <button type="submit" className="login-button">Entrar</button>
                <Link
                  to="/create-account"
                  className="create-account-button"
                  role="button"
                  aria-label="Criar conta"
                >
                  Criar conta
                </Link>
              </div>
            </form>

            <div className="social-login-row" aria-hidden={false}>
              <span className="social-login-text">Ou entre com</span>
              <div className="social-icons" role="group" aria-label="Social sign up">
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

export default LoginPage;

