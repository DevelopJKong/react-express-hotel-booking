import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

const Item = styled.div`
  flex: 1;
  gap: 10px;
  display: flex;
  flex-direction: column;
`;

const Img = styled.img`
  width: 100%;
  min-height:400px;
`;

const Name = styled.span`
  font-weight: bold;
`;

const City = styled.span`
  font-weight: 300;
`;

const Price = styled.span`
  font-weight: 500;
`;

const Rating = styled.div`
  button {
    background-color: #003580;
    color:white;
    border:none;
    padding:3px;
    margin-right: 10px;
    font-weight: bold;
  }
  span {
      font-size: 14px;
  }
`;

const FeaturedProperties = () => {
  return (
    <Container>
      <Item>
        <Img src="https://source.unsplash.com/random/20" />
        <Name>Aparthotel Stare Miasto</Name>
        <City>Madrid</City>
        <Price>Starting from $120</Price>
        <Rating>
          <button>8.9</button>
          <span>Excellent</span>
        </Rating>
      </Item>
      <Item>
        <Img src="https://source.unsplash.com/random/21" />
        <Name>Aparthotel Stare Miasto</Name>
        <City>Madrid</City>
        <Price>Starting from $120</Price>
        <Rating>
          <button>8.9</button>
          <span>Excellent</span>
        </Rating>
      </Item>
      <Item>
        <Img src="https://source.unsplash.com/random/22" />
        <Name>Aparthotel Stare Miasto</Name>
        <City>Madrid</City>
        <Price>Starting from $120</Price>
        <Rating>
          <button>8.9</button>
          <span>Excellent</span>
        </Rating>
      </Item>
      <Item>
        <Img src="https://source.unsplash.com/random/23" />
        <Name>Aparthotel Stare Miasto</Name>
        <City>Madrid</City>
        <Price>Starting from $120</Price>
        <Rating>
          <button>8.9</button>
          <span>Excellent</span>
        </Rating>
      </Item>

    </Container>
  );
};

export default FeaturedProperties;
