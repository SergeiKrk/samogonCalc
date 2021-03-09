import React from 'react'
import { FaCalculator } from "react-icons/fa";
import ShareButtonBlock from "./ShareButtonBlock";

const HeaderBlock = (props) => {
    return (
        <div>
            <header className="masthead bg-primary text-white text-center">
                <div className="container d-flex align-items-center flex-column">
                    <img
                        src={props.HeaderBlock.Img}
                        className="masthead-avatar mb-5"
                        alt={props.HeaderBlock.Title}
                    />
                    <h1 className="masthead-heading text-uppercase mb-0">{props.HeaderBlock.Title}</h1>
                    <div className="divider-custom divider-light">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><ShareButtonBlock /></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <p className="masthead-subheading font-weight-light mb-0">{props.HeaderBlock.Description}</p>
                </div>
            </header>
        </div>
    )
}

export default HeaderBlock;