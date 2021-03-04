import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/styles.css'
import HeaderBlock from '../Components/Header/HeaderBlock'
import Footer from '../Components/Footer/Footer'
import absSpirt from '../assets/img/kalkulyator-absolyutnogo-spirta.png'
import Dialogs from '../Components/Dialogs/Dialogs'

const AbsolyutnijSpirt = (props) => {
    return (
        <div>
            <HeaderBlock HeaderBlock={{
                Img: `${absSpirt}`,
                Title: 'Калькулятор разбавления самогона водой',
                Description: 'Необходимо смешать самогон с водой? Я помогу смешать в нужных пропорциях'
            }}/>
            -
            Калькулятор разбавления самогона водой
            -
            <Dialogs/>
            <Footer/>
        </div>
    );
}

export default AbsolyutnijSpirt;