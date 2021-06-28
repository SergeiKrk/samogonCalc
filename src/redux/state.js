let rerenderEntireDom = () => {
    console.log('State is changed')
}

let state = {
    profilePage: {
        profileinfoData: [
            {id: 1, img: 'https://samogoncalc.ru/img/Ava.jpg', title: 'Админ Евгений', description: 'Я тут админ!'}
        ],
        postsData: [
            {
                id: 1, userName: 'Админ Евгений', MyMassagePost: 'My first post My first post My first post My first' +
                    ' post ncxkjznvzkj njnvjnzkjn ndkjfvzkjnkjn nkjnfvkjnzkjvnfkj kjnafdkjnVKJNFKJ kjnkjnafvkjnfdkjn' +
                    ' kjnfvv dsvnl ndfk nfdkjn dfnvjdnfkn  kfdnvkldnflk dsklvnk', likeCount: 10
            },
            {
                id: 2,
                userName: 'Админ Евгений',
                MyMassagePost: 'My twwfwv mfav;mda;flvm adfm;advmdav  adflmvfavmkfvfv',
                likeCount: 1
            },
            {id: 3, userName: 'Админ Евгений', MyMassagePost: 'My fadfvad fadvda afvadva', likeCount: 2},
        ],
        newPostText: ''
    },
    dialogPage: {
        dialogsData: [
            {id: 1, userName: 'Tolya'},
            {id: 2, userName: 'Gosha'},
            {id: 3, userName: 'Kolya'},
            {id: 4, userName: 'Sasha'},
            {id: 5, userName: 'Pasha'}
        ],
        massageData: [
            {id: 1, userAva: 'https://samogoncalc.ru/img/Ava.jpg', userName: 'Admin Tolya', massage: 'Ba-Ra-Ga-Be-De!'},
            {id: 2, userAva: 'https://samogoncalc.ru/img/Yura.jpg', userName: 'Yura', massage: 'Bambarbiya, Kergudu.'},
            {id: 3, userAva: 'https://samogoncalc.ru/img/Gosha.jpg', userName: 'Gosha', massage: 'Where is Grandma?'}
        ]
    }
}

export const addPost = () => {

    let textNewPost = {
        id: 4,
        userName: 'Админ Евгений',
        MyMassagePost: state.profilePage.newPostText,
        likeCount: 0
    };
    state.profilePage.postsData.push(textNewPost);
    state.profilePage.newPostText = "";
    rerenderEntireDom();
}
export const updateNewPostText = (newPostText) => {

    state.profilePage.newPostText = newPostText;
    rerenderEntireDom();
}
export const subscribe = (observer) => {
    rerenderEntireDom = observer;
}

// 0f4ed1c


export default state;