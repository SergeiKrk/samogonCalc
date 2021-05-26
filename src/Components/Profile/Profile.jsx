import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import NewPost from "./NewPost/NewPost"
import MyPosts from "./MyPosts/MyPosts"

const Profile = (props) => {

    return (
        <div className="container text-left">
            <NewPost addPost={props.addPost} />
            <MyPosts postsData={props.postsData} />
        </div>
    );
}

export default Profile;