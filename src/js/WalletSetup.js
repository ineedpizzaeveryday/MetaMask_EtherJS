import React, {useState, useEffect} from 'react'
import {ethers} from 'ethers'


const Web3 = require("web3");
const providerIsNew = "https://floral-billowing-glade.bsc.quiknode.pro/29ea12cb502ef5492fc8c5800415e29b801c933b/"
const Web3Client = new Web3(new Web3.providers.HttpProvider(providerIsNew));

//provider by QuickNode


const minABI = [
    // construct of balance
    {
        constant: true,
        inputs: [{ name: "_owner", type: "address" }],
        name: "balanceOf",
        outputs: [{ name: "balance", type: "uint256" }],
        type: "function",
    },
];


const WalletSetup = () => {

    const [errorMessage, setErrorMessage] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [userBalance, setUserBalance] = useState("0,00");
    const [connButtonText, setConnButtonText] = useState('Connect Wallet');
    const [provider, setProvider] = useState(null);


    const connectWalletHandler = () => {
        if (window.ethereum && defaultAccount == null) {
            setProvider(new ethers.providers.Web3Provider(window.ethereum));


            window.ethereum.request({ method: 'eth_requestAccounts'})
                .then(result => {
                    setConnButtonText('Wallet Connected');
                    setDefaultAccount(result[0]);


                })
                .catch(error => {
                    setErrorMessage(error.message);
                });

        } else if (!window.ethereum){
            console.log('Need to install MetaMask');
            setErrorMessage('Please install MetaMask browser extension to interact');
        }
    }


    useEffect(() => {

        if(defaultAccount){
            const tokenAddress = "0xfac3a1ed2480da8f5c34576c0da13f245239717d";
            const contract = new Web3Client.eth.Contract(minABI, tokenAddress);

            async function getBalanceOf() {
                const result = await contract.methods.balanceOf(defaultAccount).call(); // importing value;
                const format = Web3Client.utils.fromWei(result); // 18 decimals according to contract
                const num = parseFloat(format);
                const rounded = num.toFixed(2);    // changing value to 2 numbers;


                Web3Client.eth.getBalance(defaultAccount,(err, bal)=> {    /// setting ballance as promise
                    setUserBalance(rounded);


                })

                function calculate() {
                    var num = parseFloat(format);
                    var rounded = num.toFixed(2);

                    console.log(rounded);
                }

                calculate();
            }


            const welldone = getBalanceOf();


        }
    }, [defaultAccount]);


    const shortcutf = () => {                      //// short long wallet Address into short version

        if (defaultAccount === null) {
            return;
        } else {
            const shortcut = defaultAccount.slice(0, 5);
            const shortcutEnd = defaultAccount.slice(37,42);
            const finalCut = shortcut + "..." + shortcutEnd;  // build a popular construction of address

            return finalCut;
        }

    }

    console.log(shortcutf());

    return (
        <div className='walletCard'>
            <button onClick={connectWalletHandler}>{connButtonText}</button>
            <div className='accountDisplay'>
                <h3>Address: {shortcutf()}</h3>
            </div>
            <div className='balanceDisplay'>
                <h3>Balance: {userBalance} FAN</h3>
            </div>
            {errorMessage}
        </div>
    );
}

export default WalletSetup;