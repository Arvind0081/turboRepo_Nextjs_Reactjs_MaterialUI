'use client'
import React from 'react';
import { useRouter } from "next/navigation";
import { CustomButton } from '../../../../ui-library/src/components/index';
import { GoogleOAuthProvider } from "@react-oauth/google"
import { GoogleLogin } from '@react-oauth/google';
import Cookies from 'js-cookie';

const googleClientId= process.env.NEXT_PUBLIC_GOOGLE_CLIENTID;
const url= process.env.NEXT_PUBLIC_PROTECTED_URL;
const LoginButton=()=>{

    const router= useRouter();

    const handleLogin=()=>{
            router.push(`${url}/dashboard`);
          };

          const responseMessage = (response:any) => {
            const googletoken=response.credential;
            Cookies.set('token', googletoken, { expires: 1, path: '' });  // Store in cookie for 1 days
            router.push(`${url}/dashboard`);
        };
        const errorMessage = (error:void) => {
            console.log(error);
        };

    return(
        <>
        <GoogleOAuthProvider clientId={googleClientId??''}>
        <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
        </GoogleOAuthProvider>
        <CustomButton label="Login" onClick={handleLogin}/>
        </>
    )
}

export default LoginButton;