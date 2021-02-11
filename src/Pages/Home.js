import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css'
import HomeHeader from '../Components/HomeHeader';
import Footer from '../Components/Footer';
import NavbarMenu from '../Components/NavbarMenu';
import CalcBlock from '../Components/CalcBlock';

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