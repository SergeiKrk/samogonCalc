import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/styles.css'
import HeaderBlock from '../Components/Header/HeaderBlock'
import Footer from '../Components/Footer/Footer'
import drobPeregon from '../assets/img/kalkulyator-drobnoj-peregonki.png'

const DrobnayaPeregonka = () => {
  return (
    <div>
      <HeaderBlock HeaderBlock={{Href: 'kalkulyator-drobnoj-peregonki', Img: `${drobPeregon}`, Title: 'Калькулятор дробной перегонки спирта-сырца', Description: 'Хотите начать дробную перегонку? Я помогу отобрать головы и хвосты!'}}/>
        -
        DrobnayaPeregonka
        -
        <Footer />
    </div>
  );
}

export default DrobnayaPeregonka;