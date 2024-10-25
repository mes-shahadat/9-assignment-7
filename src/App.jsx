import Header from "./components/Header"
import Main from "./components/Main"
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css'

function App() {

  const [money, setMoney] = useState(0);

  const onClaim = () => {

    setMoney(money + 6_00_000);
    toast.success("Credit Added to your Account");
  }

  return (
    <>

      <Header money={money} onClaim={onClaim} />
    </>
  )
}

export default App
