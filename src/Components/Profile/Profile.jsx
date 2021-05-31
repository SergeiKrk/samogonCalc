import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import NewPost from "./NewPost/NewPost"
import MyPosts from "./MyPosts/MyPosts"
import {updateNewPostText} from "../../redux/state";

const Profile = (props) => {

    return (
        <div className="container text-left">
            <NewPost addPost={props.addPost} updateNewPostText={updateNewPostText} newPostText={props.newPostText} />
            <MyPosts postsData={props.postsData} />
        </div>
    );
}

export default Profile;