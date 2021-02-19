import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/styles.css'
import HomeHeaderBlock from '../Components/Header/HomeHeaderBlock'
import Footer from '../Components/Footer/Footer'
import CalcBlock from '../Components/CalcBlock/CalcBlock'

const Home = () => {
  return (
    <div>
      <HomeHeaderBlock/>
      <body id="page-top">
        <CalcBlock/>
        <Footer />
      </body>
    </div>
  );
}

export default Home;