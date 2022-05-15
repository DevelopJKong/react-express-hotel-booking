import styled from "styled-components";

const Container = styled.div`
  height: 50px;
  background-color: #003580;
  display: flex;
  justify-content: center;
`;

const Nav = styled.div`
  width: 100%;
  max-width: 1024px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.span`
  font-weight: 500;
`;

const NavItems = styled.div``;

const Btn = styled.button`
  margin-left: 20px;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  color: #003580;
`;

const Navbar = () => {
  return (
    <Container>
      <Nav>
        <Logo>Cafe Small House Booking</Logo>
        <NavItems>
          <Btn>Register</Btn>
          <Btn>Login</Btn>
        </NavItems>
      </Nav>
    </Container>
  );
};

export default Navbar;
