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
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
`;

const Img = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const TitleContainer = styled.div``;

const Title = styled.h3`
  font-size: 18px;
  text-transform: capitalize;
`;
const Text = styled.p`
  font-size: 14px;
  font-weight: 300;
`;

const PropertyList = () => {
  const { data, loading, error } = useFetch("/hotels/countByType");

  const images = [
    "https://source.unsplash.com/random/10",
    "https://source.unsplash.com/random/11",
    "https://source.unsplash.com/random/12",
    "https://source.unsplash.com/random/13",
    "https://source.unsplash.com/random/14",
  ];

  return (
    <Container>
      {loading ? (
        "loading...."
      ) : (
        <>
          {data &&
            images.map((item, index) => (
              <Item key={index}>
                <Img src={item} />
                <TitleContainer>
                  <Title>{data[index]?.type}</Title>
                  <Text>
                    {data[index]?.count} | {data[index]?.type}
                  </Text>
                </TitleContainer>
              </Item>
            ))}
        </>
      )}
    </Container>
  );
};

export default PropertyList;
