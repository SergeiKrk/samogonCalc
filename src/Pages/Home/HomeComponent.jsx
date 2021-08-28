import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../css/styles.css'
import HeaderBlockHome from '../../Components/Header/HeaderBlockHome'
import Footer from '../../Components/Footer/Footer'
import CalcBlock from '../../Components/CalcBlock/CalcBlock'

const HomeComponent = (props) => {

    return (
        <CalcBlock calcsData={props.calcsData} />
    );
}

export default HomeComponent;