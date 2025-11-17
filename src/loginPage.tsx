import React from 'react';
import Particles from './components/background/Particles';
import './styles/loginPage.css';

const LoginPage: React.FC = () => {
  return (
    <div className="login-page">
      {/* container agora ocupa toda a tela e fica fixo para evitar scrolls */}
      <div style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0 }}>
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
    </div>
  );
};

export default LoginPage;

