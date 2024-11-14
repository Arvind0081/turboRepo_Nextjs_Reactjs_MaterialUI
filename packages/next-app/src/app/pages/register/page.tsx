import React from 'react';
import { Navigation } from "@/components/common/navigation";
import { Register } from "@/components/register/register";
import {Footer} from "@/components/common/footer";

const RegisterPage = () => {
  
   

    return (
        <>
        <Navigation />
            <Register/>
            <Footer />
        </>
    );
};

export default RegisterPage;