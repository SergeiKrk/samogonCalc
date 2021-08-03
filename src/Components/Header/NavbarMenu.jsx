import React from 'react'
import {
    Container,
    Navbar,
    Nav,
    NavDropdown
} from 'react-bootstrap'

const NavbarMenu = () => {
    return (
        <>
            <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container><Navbar.Brand href="/">SamagonCalc</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <NavDropdown title="Все калькуляторы" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/kalkulyator-razbavleniya-samogona-vodoj">Калькулятор
                                    разбавления самогона водой</NavDropdown.Item>
                                <NavDropdown.Item href="/kalkulyator-otbor-golov">Калькулятор отбор
                                    голов</NavDropdown.Item>
                                <NavDropdown.Item href="/kalkulyator-drobnoj-peregonki">Калькулятор дробной
                                    перегонки</NavDropdown.Item>
                                <NavDropdown.Item href="/razbavlenie-samogona-vodoj-posle-pervoj-peregonki">Калькулятор
                                    разбавления самогона (после I перегона)</NavDropdown.Item>
                                <NavDropdown.Item href="/razbavlenie-samogona-vodoj-posle-vtorogo-peregona">Калькулятор
                                    разбавления самогона (после II перегона)</NavDropdown.Item>
                                <NavDropdown.Item href="/kalkulyator-absolyutnogo-spirta">Калькулятор абсолютного
                                    спирта</NavDropdown.Item>
                                <NavDropdown.Item href="/kalkulyator-smeshivaniya-spirtov">Калькулятор смешивания
                                    спиртов</NavDropdown.Item>
                                <NavDropdown.Item href="/kalkulyator-sebestoimosti-samogona">Калькулятор себестоимости
                                    самогона</NavDropdown.Item>
                                <NavDropdown.Item href="/kalkulyator-saharnoj-bragi">Калькулятор сахарной
                                    браги</NavDropdown.Item>
                                <NavDropdown.Item href="/kalkulyator-vodki-iz-spirta">Калькулятор водки из
                                    спирта</NavDropdown.Item>
                                <NavDropdown.Item href="/kalkulyator-spirta-ot-temperatury">Калькулятор спирта от
                                    температуры</NavDropdown.Item>
                                <NavDropdown.Item href="/kalkulyator-zameny-sahara-glyukozoj">Калькулятор замены сахара
                                    глюкозой</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="/about">О проекте</Nav.Link>
                        </Nav>
                    </Navbar.Collapse></Container>
            </Navbar>
        </>
    );
}

export default NavbarMenu;