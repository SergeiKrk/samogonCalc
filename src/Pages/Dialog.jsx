import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import HeaderBlockHome from '../Components/Header/HeaderBlockHome'
import Footer from '../Components/Footer/Footer'
import Dialogs from "../Components/Dialogs/Dialogs";

const Dialog = (props) => {

    /*let dialogsData = [
        {id: 1, userName: 'Tolya'},
        {id: 2, userName: 'Gosha'},
        {id: 3, userName: 'Kolya'},
        {id: 4, userName: 'Sasha'},
        {id: 5, userName: 'Pasha'}
    ]

    let massageData = [
        {id:1, userAva:'https://samogoncalc.ru/img/Ava.jpg', userName:'Admin Tolya', massage:'Ba-Ra-Ga-Be-De!'},
        {id:2, userAva:'https://samogoncalc.ru/img/Yura.jpg', userName:'Yura', massage:'Bambarbiya, Kergudu.'},
        {id:3, userAva:'https://samogoncalc.ru/img/Gosha.jpg', userName:'Gosha', massage:'Where is Grandma?'}
    ]*/

    return (
        <>
            <HeaderBlockHome HeaderBlockHome={{
                Img: 'https://samogoncalc.ru/img/Ava.jpg',
                Title: 'Мои беседы'
            }}/>
            <Dialogs dialogsData={props.dialogsData} massageData={props.massageData}/>
            <Footer/>
        </>
    );
}

export default Dialog;