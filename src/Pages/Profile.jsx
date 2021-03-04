import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/styles.css'
import HeaderBlock from '../Components/Header/HeaderBlock'
import Footer from '../Components/Footer/Footer'
import myProfileImg from '../assets/img/portfolio/submarine.png'
import Dialogs from '../Components/Dialogs/Dialogs'

const Profile = (props) => {
    return (
        <div>
            <HeaderBlock HeaderBlock={{
                Img: `${myProfileImg}`,
                Title: 'Полное погружение в самогон',
                Description: 'Разработчик сего ресурса'
            }}/>
            -
            Калькулятор разбавления самогона водой
            -
            <Dialogs/>
            <Footer/>
        </div>
    );
}

export default Profile;