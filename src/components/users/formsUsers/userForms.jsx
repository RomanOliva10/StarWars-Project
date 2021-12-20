import React, { Fragment, useRef } from 'react';

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
    const sign = useRef(null);

    const overlayForm = () => {

        if(window.matchMedia("(min-width: 601px)").matches){
            referenciaOverlay.current.classList.toggle('active-right');
        }else{
            
            let sin = sign.current.children[0];
            let sup = sign.current.children[1];

            sin.classList.toggle('hidden');
            sup.classList.toggle('hidden');

        }

        
    }

    return (
        <Fragment>
            <Nav/>
            <div className="container-user-form">

                <div className="container-img-form" ref={referenciaOverlay}>
                    <img src={imgLogin} alt="" />
                </div>


                <div ref={sign} className='container-ref'> 
                    
                    <SignIn id="sign-in" change={overlayForm} />
                    <SignUp id="sign-up" change={overlayForm} />
                    
                </div>
                

            </div>

        </Fragment>
    );
}