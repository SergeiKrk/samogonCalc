import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/styles.css'
import HeaderBlock from '../Components/Header/HeaderBlock'
import Footer from '../Components/Footer/Footer'
import RazbavleniyaSamogonaCalc from "../Components/Calcs/RazbavleniyaSamogonaCalc"

const SaharBragi = (props) => {
  return (
    <div>
      <HeaderBlock HeaderBlock={{
          Href: 'kalkulyator-saharnoj-bragi',
          Img: 'https://samogoncalc.ru/img/kalkulyator-saharnoj-bragi.png',
          Title: 'Калькулятор сахарной браги',
          Description: 'Вычисляет крепость браги и оптимальные пропорции сахара и воды для браги.'
      }}/>
        -
        SaharBragi
        -
      <RazbavleniyaSamogonaCalc />
        <Footer />
    </div>
  );
}

export default SaharBragi;