import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/styles.css'
import HeaderBlock from '../Components/Header/HeaderBlock'
import Footer from '../Components/Footer/Footer'
import razbavlPerv from '../assets/img/razbavlenie-samogona-vodoj-posle-pervoj-peregonki.png'

const PoslePervoj = () => {
  return (
    <div>
      <HeaderBlock HeaderBlock={{Href: 'razbavlenie-samogona-vodoj-posle-pervoj-peregonki', Img: `${razbavlPerv}`, Title: 'Калькулятор разбавления самогона водой (после первого перегона)', Description: 'Необходимо смешать самогон с водой? Я помогу смешать в нужных пропорциях!'}}/>
        -
        PoslePervoj
        -
        <Footer />
    </div>
  );
}

export default PoslePervoj;