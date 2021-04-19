import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/styles.css'
import HeaderBlock from '../Components/Header/HeaderBlock'
import Footer from '../Components/Footer/Footer'

const PosleVtoroj = (props) => {
  return (
    <div>
      <HeaderBlock
        Href='razbavlenie-samogona-vodoj-posle-vtorogo-peregona'
        Img='https://samogoncalc.ru/img/razbavlenie-samogona-vodoj-posle-vtorogo-peregona.png'
        Title='Калькулятор разбавления самогона водой (после второго перегона)'
        Description='Необходимо смешать самогон с водой? Я помогу смешать в нужных пропорциях!'
      />
        -
        PosleVtoroj
        -
        <Footer />
    </div>
  );
}

export default PosleVtoroj;