import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/styles.css'
import HeaderBlock from '../Components/Header/HeaderBlock'
import Footer from '../Components/Footer/Footer'
import CalcBlock from '../Components/CalcBlock/CalcBlock'

const Home = () => {
  return (
    <>
      <HeaderBlock/>
      <CalcBlock/>
      <Footer />
    </>
  );
}

export default Home;