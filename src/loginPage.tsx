import React from 'react';
import './styles/loginPage.css';

const LoginPage: React.FC = () => {
  return (
    <div className="login-page">
      {/* container flexbox centralizado sobre o background */}
      <div className="flex-container">
        <div className="container-maior">
          <div className="login-container">
            <h1 className="login-title">Inicie sessão</h1>

            <input type="text" className="usuario-input" placeholder="Usuário" />
            <input type="password" className="password-input" placeholder="Senha" />

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

