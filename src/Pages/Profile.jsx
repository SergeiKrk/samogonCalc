import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/styles.css'
import HeaderBlock from '../Components/Header/HeaderBlock'
import Footer from '../Components/Footer/Footer'
import myProfileImg from '../assets/img/portfolio/submarine.png'
import Dialogs from '../Components/Dialogs/Dialogs'
import Profiles from "./Profiles";

const Profile = () => {
    return (
        <>
            <HeaderBlock HeaderBlock={{
                Img: `${myProfileImg}`,
                Title: 'Калькулятор разбавления самогона водой',
                Description: 'Необходимо смешать самогон с водой? Я помогу смешать в нужных пропорциях'
            }}/>
            <Profiles />
            <Footer />
        </>
    );
}

export default Profile;