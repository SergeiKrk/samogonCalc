import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css'
import HomeHeader from '../Components/Header/HomeHeader';
import Footer from '../Components/Footer/Footer';
import NavbarMenu from '../Components/Header/NavbarMenu';
import CalcBlock from '../Components/CalcBlock/CalcBlock';

const Home = () => {
  return (
    <div>
      <NavbarMenu/>
      <HomeHeader/>
      <body id="page-top">
        <CalcBlock/>
        <Footer />
      </body>
    </div>
  );
}

export default Home;