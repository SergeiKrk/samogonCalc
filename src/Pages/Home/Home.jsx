import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../css/styles.css'
import HeaderBlockHome from '../../Components/Header/HeaderBlockHome'
import Footer from '../../Components/Footer/Footer'
import HomeContainer from "./HomeContainer";

const Home = (props) => {

    return (
        <>
            <HeaderBlockHome HeaderBlockHome={{
                Img: 'https://samogoncalc.ru/img/kalkulyator-samogonshchika.png',
                Title: 'Калькулятор самогонщика',
                Description: 'Калькулятор винокура и самогонщика: онлайн расчет всех важных параметров'
            }}/>
            <HomeContainer  store={props.store} />
            <Footer/>
        </>
    );
}

export default Home;