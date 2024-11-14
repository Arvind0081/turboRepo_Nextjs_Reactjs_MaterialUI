import React from "react";
import Link from "next/link";

export const Register = () => {
  return (
    <header id="login">
      <div className="login">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
               
<p>If you already have an account <Link href="/login"><span>Click Here</span></Link> to Sign In</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
