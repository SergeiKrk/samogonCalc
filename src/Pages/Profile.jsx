import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from '../Components/Footer/Footer'
import NewPost from "../Components/Profile/NewPost/NewPost"
import MyPosts from "../Components/Profile/MyPosts/MyPosts"
import ProfileInfo from "../Components/Profile/ProfileInfo/ProfileInfo"

const Profile = (props) => {
    /*let profileinfoData = [
        {id: 1, img: 'https://samogoncalc.ru/img/Ava.jpg', title: 'Админ Евгений', description: 'Я тут админ!'}
    ]

    let postsData = [
        {id: 1, userName: 'Админ Евгений', MyMassagePost: 'My first post My first post My first post My first post'},
        {id: 2, userName: 'Админ Евгений', MyMassagePost: 'My twwfwv mfav;mda;flvm adfm;advmdav  adflmvfavmkfvfv'},
        {id: 3, userName: 'Админ Евгений', MyMassagePost: 'My fadfvad fadvda afvadva'},
    ]*/

    let profileinfoElement = props.profileinfoData.map(profileinfo => <ProfileInfo Img={profileinfo.img} Title={profileinfo.title} Description={profileinfo.description}/>
    )

    return (
        <>
            {profileinfoElement}
            <div className="container text-left">
                <NewPost/>
                <MyPosts postsData={props.postsData}/>
            </div>
            <Footer/>
        </>
    );
}

export default Profile;