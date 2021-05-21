import React from "react"
import Post from "./Post";

const MyPosts = (props) => {
    let postsData = [
        {id: 1, userName: 'Админ Евгений', MyMassagePost: 'My first post My first post My first post My first post'},
        {id: 2, userName: 'Админ Евгений', MyMassagePost: 'My twwfwv mfav;mda;flvm adfm;advmdav  adflmvfavmkfvfv'},
        {id: 3, userName: 'Админ Евгений', MyMassagePost: 'My fadfvad fadvda afvadva'},
    ]

    let postElement = postsData.map(post => <Post userName={post.userName} MyMassagePost={post.MyMassagePost}/>)

    return (
        <>
            <h2>Мои посты</h2>

            {postElement}
        </>
    );
}

export default MyPosts;