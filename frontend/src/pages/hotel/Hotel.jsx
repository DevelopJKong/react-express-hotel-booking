import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import "./hotel.css";
const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Slider = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.426);
  z-index: 999;
  display: flex;
`;

const SliderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SliderImg = styled.img`
  width: 80%;
  height: 80vh;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
`;

const BookBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 0;
  border: none;
  padding: 10px 20px;
  background-color: #0071c2;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;

const Title = styled.h3`
  font-size: 24px;
`;

const Address = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Distance = styled.span`
  color:#0071c2；
  font-weight: 500;
`;

const PriceHighlight = styled.span`
  color: #008009;
  font-weight: 500;
`;

const HotelImg = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ImgWrapper = styled.div`
  width: 33%;
`;

const Img = styled.img`
  width: 100%;
  object-fit: cover;
  height: 300px;
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
`;

const DetailsTexts = styled.div`
  flex: 3;
`;

const DetailsPrice = styled.div`
  flex: 1;
  background-color: #ebf3ff;
  padding: 20px;
  flex-direction: column;
  gap: 20px;

  & > h3 {
    font-size: 18px;
    color: #555;
  }

  & > span {
    font-size: 14px;
  }

  & > h4 {
    margin-top: 20px;
    font-weight: 300;
  }

  & > button {
    border: none;
    padding: 10px 20px;
    background-color: #0071c2;
    color: white;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 20px;
  }
`;

const HotelTitle = styled.h3`
  font-size: 14px;
  margin-top: 20px;
`;

const HotelDesc = styled.p`
  font-size: 12px;
`;

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const handleMove = (direction) => {
    let newSliderNumber;

    if (direction === "left") {
      newSliderNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSliderNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSliderNumber);
  };

  const photo = [
    {
      src: "https://source.unsplash.com/random/1",
    },
    {
      src: "https://source.unsplash.com/random/2",
    },
    {
      src: "https://source.unsplash.com/random/3",
    },
    {
      src: "https://source.unsplash.com/random/4",
    },
    {
      src: "https://source.unsplash.com/random/5",
    },
    {
      src: "https://source.unsplash.com/random/6",
    },
  ];

  const handleOpen = (index) => {
    setSlideNumber(index);
    document.body.style.overflow = "hidden";
    setOpen(true);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      {open && (
        <Slider>
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="close"
            onClick={() => {
              document.body.style.overflow = "unset";
              setOpen(false);
            }}
          />
          <SliderWrapper>
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("left")}
            />
            <SliderImg src={photo[slideNumber].src} />
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("right")}
            />
          </SliderWrapper>
        </Slider>
      )}
      <Container>
        <Wrapper>
          <BookBtn>Reserve or Book Now!</BookBtn>
          <Title>Grand Hotel</Title>
          <Address>
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New York</span>
          </Address>
          <Distance>Excellent location 500m from center</Distance>
          <PriceHighlight>
            Book a stay over $114 at this property and get a free airport taxi
          </PriceHighlight>
          <HotelImg>
            {photo.map((photo, index) => {
              return (
                <ImgWrapper key={index}>
                  <Img onClick={() => handleOpen(index)} src={photo.src} />
                </ImgWrapper>
              );
            })}
          </HotelImg>
          <Details>
            <DetailsTexts>
              <HotelTitle>Stay in the heart of Krakow</HotelTitle>
              <HotelDesc>
                Located a 5-minute walk from St. Florian's Gate in Krakow, Tower
                Street Apartments has accommodations with air conditioning and
                free WiFi. The units come with hardwood floors and feature a
                fully equipped kitchenette with a microwave, a flat-screen TV,
                and a private bathroom with shower and a hairdryer. A fridge is
                also offered, as well as an electric tea pot and a coffee
                machine. Popular points of interest near the apartment include
                Cloth Hall, Main Market Square and Town Hall Tower. The nearest
                airport is John Paul II International Kraków–Balice, 16.1 km
                from Tower Street Apartments, and the property offers a paid
                airport shuttle service.
              </HotelDesc>
            </DetailsTexts>
            <DetailsPrice>
              <h3>Perfect for 9-night stay</h3>
              <span>
                Located in the real heart of Krakow, this property has an
                excellent location score of 9.8
              </span>
              <h4>
                <b>$945</b>
              </h4>
              <button>Reserve of Book Now!</button>
            </DetailsPrice>
          </Details>
        </Wrapper>
      </Container>
      <MailList />
      <Footer />
    </div>
  );
};

export default Hotel;
