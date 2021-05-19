import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/styles.css'
import HeaderBlock from '../Components/Header/HeaderBlock'
import Footer from '../Components/Footer/Footer'
import DisqusBlock from "../Components/Header/DisqusBlock";
import React from "react";

const Profile = (props) => {
  return (
      <div>
        <HeaderBlock
            Href='kalkulyator-drobnoj-peregonki'
            Img='https://samogoncalc.ru/img/kalkulyator-drobnoj-peregonki.png'
            Title='Админ Евгений'
            Description='Я тут админ!'
        />
        <DisqusBlock />
        <Footer />
      </div>
  );
}

export default Profile;