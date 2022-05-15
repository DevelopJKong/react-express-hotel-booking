import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1024px;
  font-size: 12px;
  margin:auto;
`;

const Lists = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  color: #003580;
  cursor: pointer;
`;

const Text = styled.div``;

const Footer = () => {
  return (
    <Container>
      <Lists>
        <List>
          <ListItem>Countries</ListItem>
          <ListItem>Regions</ListItem>
          <ListItem>Cities</ListItem>
          <ListItem>Districts</ListItem>
          <ListItem>Airports</ListItem>
          <ListItem>Hotels</ListItem>
        </List>
        <List>
          <ListItem>Countries</ListItem>
          <ListItem>Regions</ListItem>
          <ListItem>Cities</ListItem>
          <ListItem>Districts</ListItem>
          <ListItem>Airports</ListItem>
          <ListItem>Hotels</ListItem>
        </List>
        <List>
          <ListItem>Countries</ListItem>
          <ListItem>Regions</ListItem>
          <ListItem>Cities</ListItem>
          <ListItem>Districts</ListItem>
          <ListItem>Airports</ListItem>
          <ListItem>Hotels</ListItem>
        </List>
        <List>
          <ListItem>Countries</ListItem>
          <ListItem>Regions</ListItem>
          <ListItem>Cities</ListItem>
          <ListItem>Districts</ListItem>
          <ListItem>Airports</ListItem>
          <ListItem>Hotels</ListItem>
        </List>
      </Lists>
      <Text>&copy; Cafe Small House</Text>
    </Container>
  );
};

export default Footer;
