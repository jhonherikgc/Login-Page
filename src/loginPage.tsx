import React from 'react';
import Particles from './components/background/Particles';
import './styles/loginPage.css';

const LoginPage: React.FC = () => {
  return (
    <div className="login-page">
      {/* background de partículas ocupa toda a tela */}
      <div className="particles-container">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

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

