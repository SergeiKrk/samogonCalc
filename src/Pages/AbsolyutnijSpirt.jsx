import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/styles.css'
import HeaderBlock from '../Components/Header/HeaderBlock'
import Footer from '../Components/Footer/Footer'
import Dialogs from '../Components/Dialogs/Dialogs'

const AbsolyutnijSpirt = (props) => {
    return (
        <div>
            <HeaderBlock HeaderBlock={{
                Img: 'https://samogoncalc.ru/img/kalkulyator-absolyutnogo-spirta.png',
                Title: 'Калькулятор разбавления самогона водой',
                Description: 'Необходимо смешать самогон с водой? Я помогу смешать в нужных пропорциях'
            }} />
            -
            Калькулятор разбавления самогона водой
            -
            <Dialogs/>
            <Footer/>
        </div>
    );
}

export default AbsolyutnijSpirt;