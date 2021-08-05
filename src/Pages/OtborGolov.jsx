import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/styles.css'
import HeaderBlock from '../Components/Header/HeaderBlock'
import Footer from '../Components/Footer/Footer'
import OtborGolovCalc from "../Components/Calcs/OtborGolovCalc/OtborGolovCalc";

const OtborGolov = (props) => {
  return (
    <div>
      <HeaderBlock
        Href='kalkulyator-otbor-golov'
        Img='https://samogoncalc.ru/img/kalkulyator-otbor-golov.png'
        Title='Калькулятор отбор голов'
        Description='Рассчитает объем чистого спирта в полученном дистилляте и объем вредных «голов» в спирте первой перегонки.'
      />
        <OtborGolovCalc
            newInitVol={props.valInitVol}
            newInitFortr={props.valInitFortr}
            newNecessFortr={props.valNecessFortr}
            calculateHeadsData={props.calculateHeadsData}
            updateAllDataHeads={props.updateAllDataHeads}
            addCalculateHeads={props.addCalculateHeads} />
        <Footer />
    </div>
  );
}

export default OtborGolov;