import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/styles.css'
import HomeHeader from '../Components/HomeHeader';
import Footer from '../Components/Footer';
import NavbarMenu from '../Components/NavbarMenu';

const Home = () => {
  return (
    <div>
      <NavbarMenu/>
      <HomeHeader/>
      <body id="page-top">
        page
        <Footer />
      </body>
    </div>
  );
}

export default Home;