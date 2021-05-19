import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/styles.css'
import HeaderBlockProfile from '../Components/Header/HeaderBlockProfile'
import Footer from '../Components/Footer/Footer'
import DisqusBlock from "../Components/Header/DisqusBlock";
import React from "react";

const Profile = (props) => {
  return (
      <div>
        <HeaderBlockProfile
            Img='https://samogoncalc.ru/img/Ava.jpg'
            Title='Админ Евгений'
            Description='Я тут админ!'
        />
        <DisqusBlock />
        <Footer />
      </div>
  );
}

export default Profile;