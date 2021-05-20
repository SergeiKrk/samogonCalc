import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import HeaderBlockProfile from '../Components/Header/HeaderBlockProfile'
import Footer from '../Components/Footer/Footer'
import DisqusBlock from "../Components/Header/DisqusBlock"
import NewPost from "../Components/Profile/NewPost";
import Post from "../Components/Profile/Post";

const Profile = (props) => {
  return (
      <>
        <HeaderBlockProfile
            Img='https://samogoncalc.ru/img/Ava.jpg'
            Title='Админ Евгений'
            Description='Я тут админ!'
        />
          <div className="container text-left">

              <NewPost />
              <Post MyMassagePost="My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post My first post " userName="Админ Евгений"/>
              <Post MyMassagePost="My two post" userName="Админ Евгений"/>

              post 1
              post 2
          </div>

        <DisqusBlock />
        <Footer />
      </>
  );
}

export default Profile;