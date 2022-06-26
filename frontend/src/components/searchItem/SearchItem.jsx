import { Link } from "react-router-dom";
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

const SearchItem = ({ item }) => {
  console.log(item);
  console.log("hello");
  return (
    <Container>
      <Img src={item.photos[0]} alt="random" />
      <Desc>
        <Title>{item.name}</Title>
        <Distance>{item.distance}m from center</Distance>
        <TaxiOp>Free airport taxi</TaxiOp>
        <Subtitle>Studio Apartment with Air conditioning</Subtitle>
        <Features>{item.desc}</Features>
        <CancelOp>Free cancellation</CancelOp>
        <CancelOpSubtitle>
          You can cancel later, so lock in this great price today!
        </CancelOpSubtitle>
      </Desc>
      <Detail>
        {item.rating && (
          <Rating>
            <span>Excellent</span>
            <button>{item.rating}</button>
          </Rating>
        )}
        <DetailTexts>
          <Price>${item.cheapestPrice}</Price>
          <TaxOp>Includes taxes and fees</TaxOp>
          <Link to={`/hotels/${item._id}`}>
            <CheckBtn>See Available</CheckBtn>
          </Link>
        </DetailTexts>
      </Detail>
    </Container>
  );
};

export default SearchItem;
