import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from '../Components/Footer/Footer'
import ProfileInfo from "../Components/Profile/ProfileInfo/ProfileInfo"
import Profile from "../Components/Profile/Profile";
import {updateNewPostText} from "../redux/state";

const ProfilePage = (props) => {

    let profileinfoElement = props.state.profileinfoData.map(profileinfo => <ProfileInfo Img={profileinfo.img} Title={profileinfo.title} Description={profileinfo.description}/>
    )

    return (
        <>
            {profileinfoElement}
            <Profile  postsData={props.state.postsData} newPostText={props.state.newPostText} addPost={props.addPost} updateNewPostText={updateNewPostText}/>
            <Footer/>
        </>
    );
}

export default ProfilePage;