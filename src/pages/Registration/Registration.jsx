import React, { useState, useEffect } from 'react';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import {authService} from '../../services/authService';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const Registration = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [isAuth, setIsAuth] = useState(false);

  const navigate = useNavigate();

  const handleNext = (values) => {
    setFormData(values);
    setStep(2);
  };

  const handleSubmit = async (values) => {
    try {
        const completeData = { ...formData, ...values };
        await authService.registration(completeData);
        setIsAuth(true);  
    } catch(error) {
        console.error(error);
    }
  };

  useEffect(() => {
    if (isAuth) {
      navigate('/employee-profile');
    }
  }, [isAuth]);

  return (
    <div>
      {step === 1 ? (
        <FirstStep onNext={handleNext} />
      ) : (
        <SecondStep onSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default Registration;