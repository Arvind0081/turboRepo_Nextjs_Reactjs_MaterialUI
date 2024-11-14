import Link from "next/link";
import React from "react";

export const Navigation = () => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <Link className="navbar-brand page-scroll" href="/">
            Next React Material-UI
          </Link>{" "}
        </div>

        <div
          // className="collapse navbar-collapse"
          // id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link href="/features" className="page-scroll">
                Features
              </Link>
            </li>
            <li>
              <Link href="/about" className="page-scroll">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="page-scroll">
                Services
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="page-scroll">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/testimonials" className="page-scroll">
                Testimonials
              </Link>
            </li>
            <li>
              <Link href="/team" className="page-scroll">
                Team
              </Link>
            </li>
            <li>
              <Link href="/contact" className="page-scroll">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/login" className="page-scroll">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
