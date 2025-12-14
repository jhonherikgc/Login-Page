import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import './styles/createAccount.css';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import Button from '@mui/material/Button';
import Lottie from 'lottie-react';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Criar conta enviado');
  };

  return (
    <div className="createAccount-page">
      <Helmet>
      <title>Crie sua conta</title>
      </Helmet>
      {/* Lottie fixada à esquerda */}
      <div className="animation-container" aria-hidden="true">
        {anim ? <Lottie animationData={anim} loop /> : null}
      </div>

      <div className="flex-container">
        <div className="container-maior">
          <div className="signUp-container">
            <h1 className="signUp-title">Crie sua conta</h1>
            <h2 className="signUp-subtitle">Insira seus dados para criar uma conta</h2>

            <form onSubmit={handleSubmit} className="login-form">
              <label className="firstName-form" htmlFor="firstName">Primeiro nome</label>
              <input id="firstName" type="text" name="firstName" className="firstName-input" placeholder="Primeiro nome" />

              <label className="lastName-form" htmlFor="lastName">Último nome</label>
              <input id="lastName" type="text" name="lastName" className="lastName-input" placeholder="Último nome" />

              <label className="email-form" htmlFor="email">E-mail</label>
              <input id="email" type="email" name="email" className="create-email-input" placeholder="E-mail" />
              <PersonIcon className="person-icon" />

              <label className="password-form" htmlFor="password">Senha</label>
              <input id="password" type="password" name="password" className="create-password-input" placeholder="Senha" />
              <LockIcon className="lock-icon" />

              <div className="create-actions-row">
                <div className="rememberMe">
                  <input type="checkbox" id="newsletter" />
                  <label htmlFor="newsletter">Quero receber novidades</label>
                </div>

                {/* Mantive Link para voltar ao login (comportamento original) */}
                <Link to="/login" className="forgot-password">Já tem conta?</Link>
              </div>
              
              <div className="create-button-row">
                {/* Botão de criar conta  que leva de volta para /login */}
                <Link to="/login" className="create-account-button" role="button" aria-label="Voltar para login">Criar Conta</Link>
              </div>

              <div className="create-google">
                <Button
                  variant="contained"
                  className="google-login-button"
                  startIcon={<GoogleIcon />}
                  onClick={() => console.log('Criar com Google')}
                  aria-label="Criar com Google"
                >
                  Criar com Google
                </Button>
              </div>

            </form>

            <div className="create-social-login-row">
              <span className="social-login-text">Ou crie conta com</span>
              <div className="create-social-icons" role="group" aria-label="Social sign up">
                <FacebookIcon className="create-social-icon facebook-icon" onClick={() => console.log('Criar com Facebook')} role="button" tabIndex={0} aria-label="Criar com Facebook" />
                <LinkedInIcon className="create-social-icon linkedin-icon" onClick={() => console.log('Criar com LinkedIn')} role="button" tabIndex={0} aria-label="Criar com LinkedIn" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;

