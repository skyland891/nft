import React from 'react';
import { Navigate } from 'react-router-dom';

const AuthProtected = ({ children, isAuthenticated }) => {

    if (!isAuthenticated()) {
        return <Navigate to="/registration" />
    }

    return children;
};

export default AuthProtected;