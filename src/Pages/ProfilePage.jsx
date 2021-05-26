import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from '../Components/Footer/Footer'
import ProfileInfo from "../Components/Profile/ProfileInfo/ProfileInfo"
import Profile from "../Components/Profile/Profile";

const ProfilePage = (props) => {

    let profileinfoElement = props.state.profileinfoData.map(profileinfo => <ProfileInfo Img={profileinfo.img} Title={profileinfo.title} Description={profileinfo.description}/>
    )

    return (
        <>
            {profileinfoElement}
            <Profile  postsData={props.state.postsData} addPost={props.addPost}/>
            <Footer/>
        </>
    );
}

export default ProfilePage;