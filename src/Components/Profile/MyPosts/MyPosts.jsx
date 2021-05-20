import React from "react"
import Post from "./Post";

const MyPosts = (props) => {
    let postsData = [
        {id:1, userName:'Админ Евгений', MyMassagePost:'My first post My first post My first post My first post'},
        {id:2, userName:'Админ Евгений', MyMassagePost:'My twwfwv mfav;mda;flvm adfm;advmdav  adflmvfavmkfvfv'},
        {id:3, userName:'Админ Евгений', MyMassagePost:'My fadfvad fadvda afvadva'},
    ]
    return (
        <>
            <h2>Мои посты</h2>

            <Post userName={postsData[0].userName} MyMassagePost={postsData[0].MyMassagePost}/>
            <Post userName={postsData[1].userName} MyMassagePost={postsData[1].MyMassagePost}/>
            <Post userName={postsData[2].userName} MyMassagePost={postsData[2].MyMassagePost}/>
        </>
    );
}

export default MyPosts;