import styled from "styled-components";

const Container = styled.div`
  width:100%;
  max-width:1024px;
  display: flex;
  justify-content: space-between;
  gap:20px;
`;

const Item = styled.div`
  flex:1;
  border-radius: 10px;
  overflow:hidden;
  cursor:pointer;
`;

const Img = styled.img`
  width:100%;
  height:150px;
  object-fit:cover;

`;

const TitleContainer = styled.div``;

const Title = styled.h3`
  font-size:18px;
`;
const Text = styled.p`
  font-size:14px;
  font-weight: 300;
`;

const PropertyList = () => {
  return (
    <Container>
      <Item>
        <Img src="https://source.unsplash.com/random/10"/>
        <TitleContainer>
          <Title>Appartments</Title>
          <Text>2331 hotels</Text>
        </TitleContainer>
      </Item>
      <Item>
        <Img src="https://source.unsplash.com/random/11"/>
        <TitleContainer>
          <Title>Appartments</Title>
          <Text>2331 hotels</Text>
        </TitleContainer>
      </Item>
      <Item>
        <Img src="https://source.unsplash.com/random/12"/>
        <TitleContainer>
          <Title>Appartments</Title>
          <Text>2331 hotels</Text>
        </TitleContainer>
      </Item>
      <Item>
        <Img src="https://source.unsplash.com/random/13"/>
        <TitleContainer>
          <Title>Appartments</Title>
          <Text>2331 hotels</Text>
        </TitleContainer>
      </Item>
      <Item>
        <Img src="https://source.unsplash.com/random/14"/>
        <TitleContainer>
          <Title>Appartments</Title>
          <Text>2331 hotels</Text>
        </TitleContainer>
      </Item>
    </Container>
  );
};

export default PropertyList;
