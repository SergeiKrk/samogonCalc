import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/styles.css'
import HeaderBlock from '../Components/Header/HeaderBlock'
import Footer from '../Components/Footer/Footer'
import Dialogs from '../Components/Dialogs/Dialogs'

const Profile = (props) => {
    return (
        <div>
            <HeaderBlock
                Img='https://samogoncalc.ru/img/submarine.png'
                Title='Анатолий Самогонов'
                Description='Капитан третьего ранга'
            />
            -

            -
            <Dialogs/>
            <Footer/>
        </div>
    );
}

export default Profile;