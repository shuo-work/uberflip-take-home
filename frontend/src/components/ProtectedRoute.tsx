import React from 'react';
import { Navigate } from "react-router-dom";

import useAuth from "../hooks/useAuth";

const ProtectedRoute = ({ children }: any) => {
    const { auth }: any = useAuth();
    if (!auth || !auth.accessToken) {
        return <Navigate to="/login" />
    }

    return children
}

export default ProtectedRoute;