import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css'
import HeaderBlock from '../Components/Header/HeaderBlock';
import Footer from '../Components/Footer/Footer';
import NavbarMenu from '../Components/Header/NavbarMenu';
import CalcBlock from '../Components/CalcBlock/CalcBlock';

const Home = () => {
  return (
    <div>
      <HeaderBlock/>
        <CalcBlock/>
        <Footer />
    </div>
  );
}

export default Home;