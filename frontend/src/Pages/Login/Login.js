import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import LoginForm from '../../components/LoginForm/LoginForm';
import './login.css';
const Login = () => {
  return (
    <div>
      <Header />
      <div className="login-page">
        <div className="login-container">
          <LoginForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Login;
