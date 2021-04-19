import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/styles.css'
import HeaderBlock from '../Components/Header/HeaderBlock'
import Footer from '../Components/Footer/Footer'

const OtborGolov = (props) => {
  return (
    <div>
      <HeaderBlock
        Href='kalkulyator-otbor-golov'
        Img='https://samogoncalc.ru/img/kalkulyator-otbor-golov.png'
        Title='Калькулятор отбор голов'
        Description='Рассчитает объем чистого спирта в полученном и объем вредных «голов» в спирте первой перегонки.'
      />
        -
        Калькулятор отбор голов
        -
        <Footer />
    </div>
  );
}

export default OtborGolov;