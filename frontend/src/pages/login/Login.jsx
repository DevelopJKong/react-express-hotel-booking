import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import styled from "styled-components";
import {
  AuthContext,
  LOGIN_FAILURE,
  LOGIN_START,
  LOGIN_SUCCESS,
} from "../../context/AuthContext";

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("https://source.unsplash.com/random");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Title = styled.h3`
  font-size: 24px;
  text-align: center;
  color: #0071c2;
`;

const Input = styled.input`
  height: 30px;
  padding: 10px;
`;

const Btn = styled.button`
  border: none;
  padding: 10px 20px;
  background-color: #0071c2;
  color: white;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
`;

const Error = styled.span`
  border-radius: 2.2222rem;
  height: 30px;
  line-height: 30px;
  background-color: rgba(0, 0, 0, 0.1);
  text-align: center;
  color: red;
  cursor: not-allowed;
  font-size: 12px;
`;

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const { user, loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setCredentials((prev) => ({
      ...prev,
      [id]: value, //정확히 어떤 뜻이지? 왜 이렇게 배열로 감싸준거지?
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: LOGIN_START });
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
      navigate("/");
    } catch (error) {
      dispatch({ type: LOGIN_FAILURE, payload: error.response.data });
    }
  };
  return (
    <Container>
      <Wrapper>
        <Title>Login</Title>
        <Input
          type="text"
          name="username"
          placeholder="username"
          id="username"
          onChange={handleChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
        />
        <Btn disable={loading} onClick={handleClick}>Login</Btn>
        {error && <Error>{error.message}</Error>}
      </Wrapper>
    </Container>
  );
};

export default Login;
