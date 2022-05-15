import styled from "styled-components";

const Container = styled.div`
  border: 1px solid lightgray;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 20px;
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
`;

const Desc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 2;
`;

const Detail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h3`
  font-size: 20px;
  color: #0071c2;
`;

const Distance = styled.span`
  font-size: 12px;
`;

const TaxiOp = styled.span`
  font-size: 12px;
  background-color: #008009;
  color: white;
  width: max-content;
  padding: 3px;
  border-radius: 5px;
`;

const Subtitle = styled.span`
  font-size: 12px;
  font-weight: bold;
`;

const Features = styled.span`
  font-size: 12px;
`;

const CancelOp = styled.span`
  font-size: 12px;
  color: #008009;
  font-weight: bold;
`;

const CancelOpSubtitle = styled.span``;

const Rating = styled.div`
  display: flex;
  justify-content: space-between;

  & > span {
    font-weight: 500;
  }
  & > button {
    background-color: #003580;
    color: white;
    padding: 5px;
    font-weight: bold;
    border: none;
  }
`;

const DetailTexts = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Price = styled.span`
  font-size: 24px;
`;

const TaxOp = styled.span`
  font-size: 12px;
  color: gray;
`;

const CheckBtn = styled.button`
  background-color: #0071c2;
  color: white;
  font-weight: bold;
  padding: 10px 5px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
`;

const SearchItem = () => {
  return (
    <Container>
      <Img src="https://source.unsplash.com/random/1" alt="random" />
      <Desc>
        <Title>Tower Street Apartments</Title>
        <Distance>500m from center</Distance>
        <TaxiOp>Free airport taxi</TaxiOp>
        <Subtitle>Studio Apartment with Air conditioning</Subtitle>
        <Features>Entire studio . 1 bathroom 21m 1 full bed</Features>
        <CancelOp>Free cancellation</CancelOp>
        <CancelOpSubtitle>
          You can cancel later, so lock in this great price today!
        </CancelOpSubtitle>
      </Desc>
      <Detail>
        <Rating>
          <span>Excellent</span>
          <button>8.9</button>
        </Rating>
        <DetailTexts>
          <Price>$123</Price>
          <TaxOp>$123</TaxOp>
          <CheckBtn>See Available</CheckBtn>
        </DetailTexts>
      </Detail>
    </Container>
  );
};

export default SearchItem;
