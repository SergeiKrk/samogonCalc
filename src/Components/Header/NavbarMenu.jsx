import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FaCalculator } from "react-icons/fa";

const NavbarMenu = () => {
  return (
    <>
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>SamagonCalc</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown
                title="Все калькуляторы"
                id="collasible-nav-dropdown"
              >
                <LinkContainer to="/kalkulyator-razbavleniya-samogona-vodoj">
                  <NavDropdown.Item>
                    <FaCalculator /> Разбавления самогона водой
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/kalkulyator-otbor-golov">
                  <NavDropdown.Item>
                    <FaCalculator /> Калькулятор отбор голов
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/kalkulyator-drobnoj-peregonki">
                  <NavDropdown.Item>⭐️ Дробная перегонка</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/razbavlenie-samogona-vodoj-posle-pervoj-peregonki">
                  <NavDropdown.Item>
                    <FaCalculator /> Разбавление самогона (после I перегона)
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/razbavlenie-samogona-vodoj-posle-vtorogo-peregona">
                  <NavDropdown.Item>
                    <FaCalculator /> Разбавление самогона (после II перегона)
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/kalkulyator-absolyutnogo-spirta">
                  <NavDropdown.Item>
                    <FaCalculator /> Расчет абсолютного спирта
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/kalkulyator-smeshivaniya-spirtov">
                  <NavDropdown.Item>
                    <FaCalculator /> Смешивание спиртов
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/kalkulyator-sebestoimosti-samogona">
                  <NavDropdown.Item>💰 Себестоимости самогона</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/primernaya-stoimost-samogona">
                  <NavDropdown.Item>
                    💰 Примерной расчет стоимости самогона
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/kalkulyator-saharnoj-bragi">
                  <NavDropdown.Item>
                    <FaCalculator /> Расчет сахарной браги
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/kalkulyator-vodki-iz-spirta">
                  <NavDropdown.Item>
                    <FaCalculator /> Калькулятор водки 40° из спирта
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/kalkulyator-spirta-ot-temperatury">
                  <NavDropdown.Item>
                    <FaCalculator /> Расчет спирта от температуры
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/kalkulyator-zameny-sahara-glyukozoj">
                  <NavDropdown.Item>
                    <FaCalculator /> Замена сахара декстрозой
                  </NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </Nav>
            <Nav>
              <LinkContainer to="/about">
                <Nav.Link>О проекте</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarMenu;
