import React from 'react'
import reportWebVitals from './reportWebVitals'
import state, {subscribe} from "./redux/state";
import ReactDOM from 'react-dom'
import App from './App'

let rerenderEntireDom = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App  state={state} calcsData={state.calcPage.calcsData}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireDom(state);

subscribe(rerenderEntireDom);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();