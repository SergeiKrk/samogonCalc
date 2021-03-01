import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/styles.css'
import HeaderBlock from '../Components/Header/HeaderBlock'
import Footer from '../Components/Footer/Footer'
import sebestoim from '../assets/img/kalkulyator-sebestoimosti-samogona.png'

const SebestoimSamogona = () => {
  return (
    <div>
      <HeaderBlock HeaderBlock={{Href: 'kalkulyator-sebestoimosti-samogona', Img: `${sebestoim}`, Title: 'Калькулятор себестоимости самогона', Description: 'Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла Бла бла бла.'}}/>
        -
        SebestoimSamogona
        -
        <Footer />
    </div>
  );
}

export default SebestoimSamogona;