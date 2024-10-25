import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from "./components/Header"
import Main from "./components/Main"
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/footer";
import './App.css'


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
      <Main money={money} onDecreaseMoney={onDecreaseMoney} />
      <section className="relative">
        <NewsLetter />
        <Footer />
      </section>
      <ToastContainer position="top-center" />
    </>
  )
}

export default App;
