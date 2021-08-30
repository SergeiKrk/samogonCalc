import React from 'react'
import reportWebVitals from './reportWebVitals'
import store from "./redux/redux-store";
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from "react-redux";

let rerenderEntireDom = () => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireDom(store.getState());

store.subscribe(() => {
    let state = store.getState();
    rerenderEntireDom(state);
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();