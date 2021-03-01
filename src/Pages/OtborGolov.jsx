import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/styles.css'
import HeaderBlock from '../Components/Header/HeaderBlock'
import Footer from '../Components/Footer/Footer'
import otborGolov from '../assets/img/kalkulyator-otbor-golov.png'

const OtborGolov = (props) => {
  return (
    <div>
      <HeaderBlock HeaderBlock={{Href: 'kalkulyator-otbor-golov', Img: `${otborGolov}`, Title: 'Калькулятор отбор голов', Description: 'Рассчитает объем чистого спирта в полученном и объем вредных «голов» в спирте первой перегонки.'}}/>
        -
        Калькулятор отбор голов
        -
        <Footer />
    </div>
  );
}

export default OtborGolov;