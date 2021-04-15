import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/styles.css'
import HeaderBlock from '../Components/Header/HeaderBlock'
import Footer from '../Components/Footer/Footer'

const Vodka = (props) => {
  return (
    <div>
      <HeaderBlock HeaderBlock={{
        Href: 'kalkulyator-vodki-iz-spirta',
        Img: 'https://samogoncalc.ru/img/kalkulyator-vodki-iz-spirta.png',
        Title: 'Калькулятор водки из спирта',
        Description: 'Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла.'
      }}/>
        -
        Vodka
        -
        <Footer />
    </div>
  );
}

export default Vodka;