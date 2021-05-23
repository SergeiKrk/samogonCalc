import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css'
import Footer from '../Components/Footer/Footer';
import CalcBlock from '../Components/CalcBlock/CalcBlock';

const Home = (props) => {
    return (
        <div>
            <CalcBlock/>
            <Footer/>
        </div>
    );
}

export default Home;