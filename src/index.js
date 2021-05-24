import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from './redux/state'

/*let dialogsData = [
    {id: 1, userName: 'Tolya'},
    {id: 2, userName: 'Gosha'},
    {id: 3, userName: 'Kolya'},
    {id: 4, userName: 'Sasha'},
    {id: 5, userName: 'Pasha'}
]

let massageData = [
    {id:1, userAva:'https://samogoncalc.ru/img/Ava.jpg', userName:'Admin Tolya', massage:'Ba-Ra-Ga-Be-De!'},
    {id:2, userAva:'https://samogoncalc.ru/img/Yura.jpg', userName:'Yura', massage:'Bambarbiya, Kergudu.'},
    {id:3, userAva:'https://samogoncalc.ru/img/Gosha.jpg', userName:'Gosha', massage:'Where is Grandma?'}
]

let profileinfoData = [
    {id: 1, img: 'https://samogoncalc.ru/img/Ava.jpg', title: 'Админ Евгений', description: 'Я тут админ!'}
]

let postsData = [
    {id: 1, userName: 'Админ Евгений', MyMassagePost: 'My first post My first post My first post My first post'},
    {id: 2, userName: 'Админ Евгений', MyMassagePost: 'My twwfwv mfav;mda;flvm adfm;advmdav  adflmvfavmkfvfv'},
    {id: 3, userName: 'Админ Евгений', MyMassagePost: 'My fadfvad fadvda afvadva'},
]*/

ReactDOM.render(
  <React.StrictMode>
    <App  appState={state} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
