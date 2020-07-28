import React from 'react';
import Logo from '../Menu/Logo.png';
import './Menu.css';
import Button from '../Button';

///import ButtonLink from './components/Buttonlink';


 function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Teste Logo"/>
                </a>
        
        <Button className="ButtonLink" href="/">
        Teste de botão

        </Button>
        </nav>
    );

}

export default Menu;