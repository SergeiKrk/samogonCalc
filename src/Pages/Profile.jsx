import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import HeaderBlockProfile from '../Components/Profile/ProfileInfo/ProfileInfo'
import Footer from '../Components/Footer/Footer'
import DisqusBlock from "../Components/Header/DisqusBlock"
import NewPost from "../Components/Profile/NewPost/NewPost";
import Post from "../Components/Profile/MyPosts/Post";
import MyPosts from "../Components/Profile/MyPosts/MyPosts";
import ProfileInfo from "../Components/Profile/ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
      <>
        <ProfileInfo
            Img='https://samogoncalc.ru/img/Ava.jpg'
            Title='Админ Евгений'
            Description='Я тут админ!'
        />
          <div className="container text-left">

              <NewPost />
              <MyPosts />
          </div>

        <DisqusBlock />
        <Footer />
      </>
  );
}

export default Profile;