import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import HeaderBlockHome from '../Components/Header/HeaderBlockHome'
import Footer from '../Components/Footer/Footer'
import Dialogs from "../Components/Dialogs/Dialogs";

const DialogsPage = (props) => {
    return (
        <>
            <HeaderBlockHome HeaderBlockHome={{
                Img: 'https://samogoncalc.ru/img/submarine.png',
                Title: 'Мои беседы'
            }}/>
            <Dialogs />
            <Footer/>
        </>
    );
}

export default DialogsPage;