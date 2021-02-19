import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css'
import HeaderBlock from '../Components/Header/HeaderBlock';
import Footer from '../Components/Footer/Footer';
import NavbarMenu from '../Components/Header/NavbarMenu';
import CalcBlock from '../Components/CalcBlock/CalcBlock';

const Home = () => {
  return (
    <div>
      <NavbarMenu/>
      <HeaderBlock/>
      <body id="page-top">
        <CalcBlock/>
        <Footer />
      </body>
    </div>
  );
}

export default Home;