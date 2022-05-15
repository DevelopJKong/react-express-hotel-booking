import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin-top: 50px;
  background-color: #003580;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 50px 0;
`;

const Title = styled.h3``;

const Desc = styled.span``;

const InputContainer = styled.div`
  & > input {
    width: 300px;
    height: 30px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    margin-right:10px;
  }

  & > button {
    height: 50px;
    background-color: #0071c2;
    color: white;
    font-weight: 500;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const MailList = () => {
  return (
    <Container>
      <Title>Save time, save money!</Title>
      <Desc>Sign up and we'll send</Desc>
      <InputContainer>
        <input type="text" placeholder="Your Email" />
        <button>Subscribe</button>
      </InputContainer>
    </Container>
  );
};

export default MailList;
