import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/styles.css'
import HeaderBlock from '../Components/Header/HeaderBlock'
import Footer from '../Components/Footer/Footer'
import vodka from '../assets/img/kalkulyator-vodki-iz-spirta.png'

const Vodka = () => {
  return (
    <div>
      <HeaderBlock HeaderBlock={{Href: 'kalkulyator-vodki-iz-spirta', Img: `${vodka}`, Title: 'Калькулятор водки из спирта', Description: 'Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла.'}}/>
        -
        Vodka
        -
        <Footer />
    </div>
  );
}

export default Vodka;