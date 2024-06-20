import React, { useState, useEffect } from 'react';
import { Fragment } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
// import 'bootstrap/dist/css/bootstrap.min.css';

export default function PrimaryLayout({children}) {
    const [scroll, setScroll] = useState(0);
    useEffect(() => {
        window.addEventListener('scroll', () => {
          setScroll(window.scrollY);
        });
        return () => {
          window.removeEventListener('scroll', () => {
            setScroll(window.scrollY);
          });
        };
      }, [scroll]);

    return (
        <Fragment>
            <Header scroll={scroll}/>
                {children}
            <Footer/>
        </Fragment>
    )
}