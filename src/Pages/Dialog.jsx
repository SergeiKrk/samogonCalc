import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import HeaderBlockHome from '../Components/Header/HeaderBlockHome'
import Footer from '../Components/Footer/Footer'
import Dialogs from "../Components/Dialogs/Dialogs";

const Dialog = (props) => {

    return (
        <>
            <HeaderBlockHome HeaderBlockHome={{
                Img: 'https://samogoncalc.ru/img/Ava.jpg',
                Title: 'Мои беседы'
            }}/>
            <Dialogs dialogsData={props.state.dialogsData} massageData={props.state.massageData}/>
            <Footer/>
        </>
    );
}

export default Dialog;