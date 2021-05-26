import React from "react"
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postElement = props.postsData.map(post => <Post userName={post.userName} MyMassagePost={post.MyMassagePost} likeCount={post.likeCount}/>)

    return (
        <>
            <h2>Мои посты</h2>
            {postElement}
        </>
    );
}

export default MyPosts;