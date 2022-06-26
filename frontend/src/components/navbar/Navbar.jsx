import styled from "styled-components";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Container = styled.div`
  height: 50px;
  background-color: #003580;
  display: flex;
  justify-content: center;

  a {
    text-decoration: none;
    color: inherit;
  }
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
  const { user } = useContext(AuthContext);

  return (
    <Container>
      <Nav>
        <Link to="/">
          <Logo>Cafe Small House Booking</Logo>
        </Link>
        {user ? (
          user.username
        ) : (
          <NavItems>
            <Btn>Register</Btn>
            <Btn>Login</Btn>
          </NavItems>
        )}
      </Nav>
    </Container>
  );
};

export default Navbar;
