import 'bootstrap/dist/css/bootstrap.min.css'
import '../css/styles.css'
import HeaderBlock from '../Components/Header/HeaderBlock'
import Footer from '../Components/Footer/Footer'
import razbavSam from '../assets/img/kalkulyator-razbavleniya-samogona-vodoj.png'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

const RazbavleniyaSamogona = (props) => {
  return (
    <div>
      <HeaderBlock HeaderBlock={{Href: 'kalkulyator-razbavleniya-samogona-vodoj', Img: `${razbavSam}`, Title: 'Калькулятор разбавления самогона водой', Description: 'Необходимо смешать самогон с водой? Я помогу смешать в нужных пропорциях'}}/>

        <br/>
        <div className="container">
            <p>
                Чтобы разбавить дистиллят до нужной крепости, воспользуйтесь калькулятором разбавления самогона водой. В онлайн режиме он поможет подобрать пропорции воды и самогона. Нужно лишь вписать в программу 3 параметра: первоначальный объем, крепость самогона и требуемую крепость. Калькулятор мгновенно произведет нужные расчеты и выдаст результат. Например: у вас есть 5 литров сортировки крепостью 62%, вам нужно разбавить ее до 40%. Заполнив 3 поля в онлайн калькуляторы, мы видим результат: необходимо долить 2,75 литров воды. Важный момент — результаты будут правильными, если температура всех жидкостей 20°С.
            </p>
            <CardGroup>
                <Card border="dark">
                    <Card.Body>
                        <Card.Title>Данные для разбавления</Card.Title>
                        <Card.Text>
                            <Form.Group>
                                <Form.Row>
                                    <Form.Label column="sm" lg={6}>
                                        Объем разбавляемого спирта (самогона):
                                    </Form.Label>
                                    <Col>
                                        <Form.Control type="text" placeholder="начальный объем, литров" />
                                    </Col>
                                </Form.Row>
                                <br />
                                <Form.Row>
                                    <Form.Label column="sm" lg={6}>
                                        Крепость разбавляемого спирта (самогона):
                                    </Form.Label>
                                    <Col>
                                        <Form.Control type="text" placeholder="крепость, градусов" />
                                    </Col>
                                </Form.Row>
                                <br />
                                <Form.Row>
                                    <Form.Label column="sm" lg={6}>
                                        Крепость, которую хотите получить:
                                    </Form.Label>
                                    <Col>
                                        <Form.Control type="text" placeholder="требуемая крепость" />
                                    </Col>
                                </Form.Row>
                            </Form.Group>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button variant="primary">Рассчитать</Button>
                    </Card.Footer>
                </Card>
                <Card border="dark" bg="primary" text="white" className="text-center">
                    <blockquote className="blockquote mb-0 card-body">
                        <p>
                            Необходимо долить воды:<br/>
                            25 л.<br/>
                            Результаты рассчета актуальны, если температура получаемой жидкости равна 20°С
                        </p>
                    </blockquote>
                </Card>
            </CardGroup>
            <br/>
        </div>
      <Footer />
    </div>
  );
}

export default RazbavleniyaSamogona;