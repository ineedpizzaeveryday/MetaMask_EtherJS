import React, {useState, useEffect} from 'react';
import {ethers} from 'ethers';
import "./css/datatoken.css";
import Lottery_Setup from "./js/Lottery_Setup";




const LotterySection = () => {

    return (
        <>

            <div className="container__data-token">
                <Lottery_Setup />

            </div>
            <div className="section__line"></div>
        </>
    );
};

export default LotterySection;