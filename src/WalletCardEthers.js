import React, {useState, useEffect} from 'react'
import {ethers} from 'ethers'
import './WalletCard.css'


const Web3 = require("web3");
const providerIsNew = "https://floral-billowing-glade.bsc.quiknode.pro/29ea12cb502ef5492fc8c5800415e29b801c933b/"
const Web3Client = new Web3(new Web3.providers.HttpProvider(providerIsNew));


const minABI = [
	// balanceOf
	{
		constant: true,
		inputs: [{ name: "_owner", type: "address" }],
		name: "balanceOf",
		outputs: [{ name: "balance", type: "uint256" }],
		type: "function",
	},
];

const tokenAddress = "0xb6d48fcef36e19681ee29896b19c1b6cbd1eab1b";
const walletAddress = "0xf4e538fe3fe2cb3e9c6cceb44c0b52992e3b8a58";

const contract = new Web3Client.eth.Contract(minABI, tokenAddress);
async function getBalance() {
	const result = await contract.methods.balanceOf(walletAddress).call(); // 29803630997051883414242659
	const format = Web3Client.utils.fromWei(result); // 29803630.997051883414242659
console.log(format);
}


const costam = contract.methods.balanceOf(walletAddress);
console.log(costam, "<><<<<<");


getBalance();

const WalletCardEthers = () => {

	const [errorMessage, setErrorMessage] = useState(null);
	const [defaultAccount, setDefaultAccount] = useState(null);
	const [userBalance, setUserBalance] = useState(null);
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
			const result = await contract.methods.balanceOf(defaultAccount).call(); // 29803630997051883414242659
			const format = Web3Client.utils.fromWei(result); // 29803630.997051883414242659
			return format;
		}

		const welldone = getBalanceOf();

		console.log(welldone, "$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");

	getBalance(defaultAccount)
	.then(state => {
		setUserBalance(getBalance(state));
	})
	}
}, [defaultAccount]);

	console.log(defaultAccount, "to jest konto");
	console.log(getBalance(), "wywołanie funkcji w consoli");

	return (
		<div className='walletCard'>
		<h4> Connection to MetaMask using ethers.js </h4>
			<button onClick={connectWalletHandler}>{connButtonText}</button>
			<div className='accountDisplay'>
				<h3>Address: {defaultAccount}</h3>
			</div>
			<div className='balanceDisplay'>
				<h3>Balance: {userBalance}</h3>
			</div>
			{errorMessage}
		</div>
	);
}

export default WalletCardEthers;