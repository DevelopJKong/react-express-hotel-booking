import styled from "styled-components";
import useFetch from "../../hooks/useFetch";

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
  min-height: 400px;
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
    color: white;
    border: none;
    padding: 3px;
    margin-right: 10px;
    font-weight: bold;
  }
  span {
    font-size: 14px;
  }
`;

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("/hotels?featured=true&limit=4");

  return (
    <Container>
      {loading ? (
        "Loading..."
      ) : (
        <>
          {data.map((item) => (
            <Item>
              <Img src={item.photos[0]} />
              <Name>{item.name}</Name>
              <City>{item.city}</City>
              <Price>Starting from ${item.cheapestPrice}</Price>
              {item.rating && (
                <Rating>
                  <button>{item.rating}</button>
                  <span>Excellent</span>
                </Rating>
              )}
            </Item>
          ))}
        </>
      )}
    </Container>
  );
};

export default FeaturedProperties;
