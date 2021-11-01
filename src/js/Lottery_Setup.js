import React, { useRef, useState, useEffect} from 'react';
import {ethers} from 'ethers';




const Lottery_Setup = () => {

    const [okbalance, setOkbalance] = useState (1);
    const [oktx, setoktx] = useState (null);


    function handleWinningCode () {
        for (let i = 0; i === 4; i++ ) {
            const min = 1;
            const max = 9;
            let wincodevalue = min + Math.random() * (max - min);

            return wincodevalue;



        }
    }

handleWinningCode();

    if (oktx) {


}

if (okbalance !== null) {

}


    return (
        <>
            <button>Buy Ticket</button>
            <div id="main">

            <h1>{handleWinningCode()}</h1>
            </div>
        </>
    )

}


export default Lottery_Setup;