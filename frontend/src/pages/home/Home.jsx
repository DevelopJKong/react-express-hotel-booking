import Featured from "../../components/featured/Featured";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import styled from "styled-components";
import PropertyList from "../../components/propertyList/PropertyList";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";

const Container = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const Title = styled.h1`
  width: 1024px;
  font-size: 20px;
`;

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Container>
        <Featured />
        <Title>Browse by property type</Title>
        <PropertyList />
        <Title>Home guests love</Title>
        <FeaturedProperties />
        <MailList />
      </Container>
      <Footer/>
    </>
  );
};

export default Home;
