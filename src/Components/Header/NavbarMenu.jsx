import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

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
                    Калькулятор разбавления самогона водой
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/kalkulyator-otbor-golov">
                  <NavDropdown.Item>Калькулятор отбор голов</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/kalkulyator-drobnoj-peregonki">
                  <NavDropdown.Item>
                    ⭐️ Калькулятор дробной перегонки
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/razbavlenie-samogona-vodoj-posle-pervoj-peregonki">
                  <NavDropdown.Item>
                    Калькулятор разбавления самогона (после I перегона)
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/razbavlenie-samogona-vodoj-posle-vtorogo-peregona">
                  <NavDropdown.Item>
                    Калькулятор разбавления самогона (после II перегона)
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/kalkulyator-absolyutnogo-spirta">
                  <NavDropdown.Item>
                    Калькулятор абсолютного спирта
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/kalkulyator-smeshivaniya-spirtov">
                  <NavDropdown.Item>
                    Калькулятор смешивания спиртов
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/kalkulyator-sebestoimosti-samogona">
                  <NavDropdown.Item>
                    💰 Калькулятор себестоимости самогона
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/primernaya-stoimost-samogona">
                  <NavDropdown.Item>
                    💰 Калькулятор примерной стоимости самогона
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/kalkulyator-saharnoj-bragi">
                  <NavDropdown.Item>
                    Калькулятор сахарной браги
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/kalkulyator-vodki-iz-spirta">
                  <NavDropdown.Item>
                    Калькулятор водки из спирта
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/kalkulyator-spirta-ot-temperatury">
                  <NavDropdown.Item>
                    Калькулятор спирта от температуры
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/kalkulyator-zameny-sahara-glyukozoj">
                  <NavDropdown.Item>
                    Калькулятор замены сахара глюкозой
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
