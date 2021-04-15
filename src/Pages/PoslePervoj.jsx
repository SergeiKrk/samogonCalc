import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/styles.css'
import HeaderBlock from '../Components/Header/HeaderBlock'
import Footer from '../Components/Footer/Footer'

const PoslePervoj = () => {
  return (
    <div>
      <HeaderBlock HeaderBlock={{
        Href: 'razbavlenie-samogona-vodoj-posle-pervoj-peregonki',
        Img: 'https://samogoncalc.ru/img/razbavlenie-samogona-vodoj-posle-pervoj-peregonki.png',
        Title: 'Калькулятор разбавления самогона водой (после первого перегона)',
        Description: 'Необходимо смешать самогон с водой? Я помогу смешать в нужных пропорциях!'
      }}/>
        -
        PoslePervoj
        -
        <Footer />
    </div>
  );
}

export default PoslePervoj;