
import React from 'react';

import { Navigation } from "@/components/common/navigation";
import { Login } from "@/components/login/login";
import {Footer} from "@/components/common/footer";

const LoginPage = () => {
  
   

    return (
        <>
        <Navigation />
        <Login />
            <Footer />
        </>
    );
};

export default LoginPage;