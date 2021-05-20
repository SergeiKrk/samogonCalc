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
    let profileinfoData = [
        {id:1, img:'https://samogoncalc.ru/img/Ava.jpg', title:'Админ Евгений', description:'Я тут админ!'}
    ]
  return (
      <>
        <ProfileInfo
            Img={profileinfoData[0].img}
            Title={profileinfoData[0].title}
            Description={profileinfoData[0].description}
        />
          <div className="container text-left">
              <NewPost />
              <MyPosts />
          </div>
        <Footer />
      </>
  );
}

export default Profile;