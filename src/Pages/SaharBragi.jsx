import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/styles.css'
import HeaderBlock from '../Components/Header/HeaderBlock'
import Footer from '../Components/Footer/Footer'
import saharBragi from '../assets/img/kalkulyator-saharnoj-bragi.png'

const SaharBragi = () => {
  return (
    <div>
      <HeaderBlock HeaderBlock={{Href: 'kalkulyator-saharnoj-bragi', Img: `${saharBragi}`, Title: 'Калькулятор сахарной браги', Description: 'Вычисляет крепость браги и оптимальные пропорции сахара и воды для браги.'}}/>
        -
        SaharBragi
        -
        <Footer />
    </div>
  );
}

export default SaharBragi;