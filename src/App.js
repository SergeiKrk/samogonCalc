import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className="App">
      <Header />
      <body id="page-top">
        page
        <Footer />
      </body>
    </div>
  );
}

export default App;
