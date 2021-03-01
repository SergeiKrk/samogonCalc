import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/styles.css'
import HeaderBlock from '../Components/Header/HeaderBlock'
import Footer from '../Components/Footer/Footer'
import vspirtTemperatury from '../assets/img/kalkulyator-spirta-ot-temperatury.png'

const SpirtaTemper = () => {
  return (
    <div>
      <HeaderBlock HeaderBlock={{Href: 'kalkulyator-spirta-ot-temperatury', Img: `${vspirtTemperatury}`, Title: 'Калькулятор спирта от температуры', Description: 'Рассчитает реальную крепость самогона при температуре больше или меньше 20 °C.'}}/>
        -
        SpirtaTemper
        -
        <Footer />
    </div>
  );
}

export default SpirtaTemper;