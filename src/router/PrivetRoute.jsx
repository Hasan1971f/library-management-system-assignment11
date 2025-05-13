import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import Loading from '../Components/Loading';
import { AuthContext } from '../Provider/AuthProvider';

const PrivetRoute = ({ children }) => {
    const { loading, user } = useContext(AuthContext);

    if (loading) {
        return <Loading></Loading>
    }
    if (user && user?.email) {
        return children;
    }

    return <Navigate to={'/login'}></Navigate>
};

export default PrivetRoute;


// 
