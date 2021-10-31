import React from 'react';
import WalletSetup from "./js/WalletSetup";
import "./css/header.css"
import "./css/basics.css"


const Header = () => {
    return (
        <>
        <div className="container__header">
            <div className="logo__top"><img src="logo_fan.png" /></div>

            <WalletSetup />

        </div>
        <div className="section__line"></div>
            </>
    );
};

export default Header;