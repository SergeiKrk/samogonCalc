import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/styles.css'
import HeaderBlock from '../Components/Header/HeaderBlock'
import Footer from '../Components/Footer/Footer'
import razbavSam from '../assets/img/kalkulyator-razbavleniya-samogona-vodoj.png'

const RazbavleniyaSamogona = (props) => {
  return (
    <div>
      <HeaderBlock HeaderBlock={{Img: `${razbavSam}`, Title: 'Калькулятор разбавления самогона водой', Description: 'Необходимо смешать самогон с водой? Я помогу смешать в нужных пропорциях'}}/>
        -
        Калькулятор абсолютного спирта
        -
        <Footer />
    </div>
  );
}

export default RazbavleniyaSamogona;