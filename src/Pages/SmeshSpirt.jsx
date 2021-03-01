import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/styles.css'
import HeaderBlock from '../Components/Header/HeaderBlock'
import Footer from '../Components/Footer/Footer'
import smeshSpirt from '../assets/img/kalkulyator-smeshivaniya-spirtov.png'

const SmeshSpirt = () => {
  return (
    <div>
      <HeaderBlock HeaderBlock={{Href: 'kalkulyator-smeshivaniya-spirtov', Img: `${smeshSpirt}`, Title: 'Калькулятор смешивания спиртов', Description: 'Смешиваете две разных крепости? Узнайте сейчас какой градус будет на выходе!'}}/>
        -
        SmeshSpirt
        -
        <Footer />
    </div>
  );
}

export default SmeshSpirt;