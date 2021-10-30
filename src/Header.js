import React from 'react';
import WalletSetup from "./js/WalletSetup";
import "./css/header.css"


const Header = () => {
    return (
        <div className="container__header">
            <div className="logo__top"><img src="logo.png" /></div>

            <WalletSetup />
        </div>
    );
};

export default Header;