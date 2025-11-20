import React from 'react';
import './styles/loginPage.css';
import GoogleIcon from '@mui/icons-material/Google';
import Button from '@mui/material/Button';

const LoginPage: React.FC = () => {
  return (
    <div className="login-page">
      {/* container flexbox centralizado sobre o background */}
      <div className="flex-container">
        <div className="container-maior">
          <div className="login-container">
            <h1 className="login-title">Inicie sessão</h1>
            <div className="separator" />

            <input type="text" className="firstName-input" placeholder="Primeiro nome" />
            <input type="text" className="lastName-input" placeholder="Último nome" />
            <input type="text" className="email-input" placeholder="Email" />
            <input type="password" className="password-input" placeholder="Senha" />

            {/* alinhamento: remember-me à esquerda e forgot-password à direita */}
            <div className="actions-row">
              <div className="remember-me">
                <input type="checkbox" id="rememberMe" />
                <label htmlFor="rememberMe">Lembrar-me</label>
              </div>

              <div className="forgot-password">
                Esqueceu a senha?
              </div>
            </div>
            
            {/* botão de login com Google (acessível e interativo) */}
            <div className="login-google">
              <Button
                variant="outlined"
                className="google-login-button"
                startIcon={<GoogleIcon className="google-icon" />}
                onClick={() => {
                  // coloque aqui a chamada para OAuth / redirect
                  console.log('Entrar com Google');
                }}
                aria-label="Entrar com Google"
              >
                Entrar com Google
              </Button>
            </div>
            <div className="button-row">
              <input type="submit" className="login-button" value="Log in" />
              <input type="button" className="create-account-button" value="Criar conta" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

