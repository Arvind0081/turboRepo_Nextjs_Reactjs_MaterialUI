import React from "react";
import Link from "next/link";
import Button from '@/components/login/loginButton';

export const Login = (props:any) => {
  return (
    <header id="login">
      <div className="login">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
               
<Button />

<p>If you don't have an account <Link href="/register"><span>Click Here</span></Link> to Sign Up</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
