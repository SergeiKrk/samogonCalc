import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/styles.css'
import HeaderBlock from '../Components/Header/HeaderBlock'
import Footer from '../Components/Footer/Footer'

const DrobnayaPeregonka = () => {
  return (
    <div>
      <HeaderBlock HeaderBlock={{
        Href: 'kalkulyator-drobnoj-peregonki',
        Img: 'https://samogoncalc.ru/img/kalkulyator-drobnoj-peregonki.png',
        Title: 'Калькулятор дробной перегонки спирта-сырца',
        Description: 'Хотите начать дробную перегонку? Я помогу отобрать головы и хвосты!'
      }}/>
        -
        DrobnayaPeregonka
        -
        <Footer />
    </div>
  );
}

export default DrobnayaPeregonka;