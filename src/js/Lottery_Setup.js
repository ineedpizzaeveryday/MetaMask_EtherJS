import React, { useRef, useState, useEffect} from 'react';
import {ethers} from 'ethers';
import Modal from 'react-modal';


const Lottery_Setup = () => {

    const [okbalance, setOkbalance] = useState (1);
    const [oktx, setoktx] = useState (null);




    const startPayment = async ({ setError, setTxs, ether, addr }) => {
        try {
            if (!window.ethereum)
                throw new Error("No crypto wallet found. Please install it.");

            await window.ethereum.send("eth_requestAccounts");
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            ethers.utils.getAddress(addr);
            const tx = await signer.sendTransaction({
                to: addr,
                value: ethers.utils.parseEther(ether)
            });
            console.log({ ether, addr });
            console.log("tx", tx);
            setTxs([tx]);
        } catch (err) {
            setError(err.message);
        }
    };

    function App() {
        const [error, setError] = useState();
        const [txs, setTxs] = useState([]);

        const handleSubmit = async (e) => {
            e.preventDefault();
            const data = new FormData(e.target);
            setError();
            await startPayment({
                setError,
                setTxs,
                ether: data.get("ether"),
                addr: data.get("addr")
            });
        };


    }


// buy action




    if (oktx) {


}

if (okbalance !== null) {

}

    return (
        <>
            <button>here will be that button</button>
            <div id="main">

            </div>
        </>
    )

}


export default Lottery_Setup;