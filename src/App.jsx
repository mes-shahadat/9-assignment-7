import Header from "./components/Header"
import Main from "./components/Main"
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css'
import NewsLetter from "./components/NewsLetter";

function App() {

  const [money, setMoney] = useState(0);

  const onClaim = () => {

    setMoney(money + 6_00_000);
    toast.success("Credit Added to your Account");
  }

  const onDecreaseMoney = (price) => {
    setMoney(money - price)
  }

  return (
    <>

      <Header money={money} onClaim={onClaim} />
      <ToastContainer position="top-center" />
      <Main money={money} onDecreaseMoney={onDecreaseMoney}/>
      <NewsLetter/>
      <h1 style={{ height: "100vh" }}></h1>
    </>
  )
}

export default App
