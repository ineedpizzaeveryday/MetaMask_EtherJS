//import logo from './logo.svg';
import './App.css';         //
import './css/reset.css';   // CSS
import './css/main.css';    //
import './css/lottery_section_css.css'


import Header from './Header';              // COMPONENTS
import DataToken from "./DataToken"         //  --
import LotterySection from "./Lottery_section";
import Form from "./Form";

function App() {

  return (
     <>
       <div className="container__app">
<Header />
           <Form />


       </div>
       </>
  );
}

export default App;
