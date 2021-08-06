import React from 'react'
import reportWebVitals from './reportWebVitals'
import store from "./redux/state";
import ReactDOM from 'react-dom'
import App from './App'

let rerenderEntireDom = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={store.getState()}
                addCalculateDilute={store.addCalculateDilute.bind(store)}
                addCalculateHeads={store.addCalculateHeads.bind(store)}
                addCalculateFractional={store.addCalculateFractional.bind(store)}
                updateAllDataDilute={store.updateAllDataDilute.bind(store)}
                updateAllDataHeads={store.updateAllDataHeads.bind(store)}
                updateAllDataFractional={store.updateAllDataFractional.bind(store)}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireDom(store.getState());

store.subscribe(rerenderEntireDom);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();