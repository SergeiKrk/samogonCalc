import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/styles.css'
import HeaderBlock from '../Components/Header/HeaderBlock'
import Footer from '../Components/Footer/Footer'
import CalcBlock from '../Components/CalcBlock/CalcBlock'
import logo from '../assets/img/kalkulyator-samogonshchika.png'

const Home = (props) => {
  return (
    <>
      <HeaderBlock HeaderBlock={{Img: `${logo}`, Title: 'Калькулятор самогонщика', Description: 'Калькулятор винокура и самогонщика: онлайн расчет всех важных параметров'}}/>
      <CalcBlock/>
      <Footer />
    </>
  );
}

export default Home;