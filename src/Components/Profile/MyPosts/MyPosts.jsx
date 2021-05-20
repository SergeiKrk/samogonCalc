import React from "react"
import Post from "./Post";

const MyPosts = (props) => {
    return (
        <>
            <h2>Все мои посты</h2>

            <Post MyMassagePost="My first post My first post My first post My first post" userName="Админ Евгений"/>
            <Post MyMassagePost="My two post" userName="Админ Евгений"/>
        </>
    );
}

export default MyPosts;