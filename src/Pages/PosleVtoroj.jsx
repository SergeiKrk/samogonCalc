import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/styles.css'
import HeaderBlock from '../Components/Header/HeaderBlock'
import Footer from '../Components/Footer/Footer'
import razbavlVtor from '../assets/img/razbavlenie-samogona-vodoj-posle-vtorogo-peregona.png'

const PosleVtoroj = () => {
  return (
    <div>
      <HeaderBlock HeaderBlock={{Href: 'razbavlenie-samogona-vodoj-posle-vtorogo-peregona', Img: `${razbavlVtor}`, Title: 'Калькулятор разбавления самогона водой (после второго перегона)', Description: 'Необходимо смешать самогон с водой? Я помогу смешать в нужных пропорциях!'}}/>
        -
        PosleVtoroj
        -
        <Footer />
    </div>
  );
}

export default PosleVtoroj;