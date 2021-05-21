import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from '../Components/Footer/Footer'
import NewPost from "../Components/Profile/NewPost/NewPost"
import MyPosts from "../Components/Profile/MyPosts/MyPosts"
import ProfileInfo from "../Components/Profile/ProfileInfo/ProfileInfo"

const Profile = (props) => {
    let profileinfoData = [
        {id: 1, img: 'https://samogoncalc.ru/img/Ava.jpg', title: 'Админ Евгений', description: 'Я тут админ!'}
    ]

    let profileinfoElement = profileinfoData.map(
        profileinfo => <ProfileInfo Img={profileinfo.img} Title={profileinfo.title}
                                    Description={profileinfo.description}/>)

    return (
        <>
            {profileinfoElement}
            <div className="container text-left">
                <NewPost/>
                <MyPosts/>
            </div>
            <Footer/>
        </>
    );
}

export default Profile;