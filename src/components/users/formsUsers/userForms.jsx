import React, { Fragment, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import {Link} from "react-router-dom";

//Estilos
import './userForms.css';
// Img Overlay 
import imgLogin from './img/star-wars-poster.jpg'
//Components
import SignIn from './signIn/signIn';
import SignUp from './signUp/signUp';
import Nav from '../../layout/nav/Nav';


export default function UserForms() {

    const referenciaOverlay = useRef(null);
    const signin = useRef(null)
    const signup = useRef(null)

    const overlayForm = () => {

        if(window.matchMedia("(min-width: 601px)").matches){
            referenciaOverlay.current.classList.toggle('active-right');
        }else{
            console.log(signin);
            /* signin.classList.toggle('disabled');
            signin.classList.toggle('disabled'); */
        }

        
    }

    return (
        <Fragment>
            <Nav/>
            <div className="container-user-form">

                <div className="container-img-form" ref={referenciaOverlay}>
                    <img src={imgLogin} alt="" />
                </div>

                <SignIn id="sign-in" change={overlayForm}/>
                
                <SignUp id="sign-up" change={overlayForm} />

            </div>

        </Fragment>
    );
}