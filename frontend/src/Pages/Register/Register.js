import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import RegisterForm from '../../components/RegisterForm/RegisterForm';
import './register.css';

const Register = () => {
  return (
    <div>
      <Header />
      <div className="register-page">
        <div className="register-container">
          <RegisterForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
