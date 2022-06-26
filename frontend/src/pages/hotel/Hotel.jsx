import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import Reserve from "../../components/reserve/Reserve";
import { AuthContext } from "../../context/AuthContext";
import { SearchContext } from "../../context/SearchContext";
import useFetch from "../../hooks/useFetch";
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
  const location = useLocation();
  const navigate = useNavigate();
  const id = location.pathname.split("/")[2];

  const { data, loading, error } = useFetch(`/hotels/${id}`);
  const { user } = useContext(AuthContext);

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal,setOpenModal] = useState(false);

  const handleMove = (direction) => {
    let newSliderNumber;

    if (direction === "left") {
      newSliderNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSliderNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSliderNumber);
  };

  const { date, options } = useContext(SearchContext);

  const MILLSECONDS_PER_DAY = 1000 * 60 * 60 * 24;
  function dayDifference(date1, date2) {
    const timeDiff = Math.abs(date2?.getTime() - date1?.getTime());
    const diffDays = Math.ceil(timeDiff / MILLSECONDS_PER_DAY);
    return diffDays;
  }

  const days = dayDifference(date[0]?.endDate, date[0]?.startDate);
  if(!days) {
    navigate("/");
  }

  const handleOpen = (index) => {
    setSlideNumber(index);
    document.body.style.overflow = "hidden";
    setOpen(true);
  };

  const handleClick = () => {
    if(user) {
      setOpenModal(true);
    } else {
      navigate("/");
    }

  }


  return (
    <div>
      <Navbar />
      <Header type="list" />
      <>
        {loading
          ? "Loading..."
          : open && (
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
                  <SliderImg src={data.photos[slideNumber]} />
                  <FontAwesomeIcon
                    icon={faCircleArrowRight}
                    className="arrow"
                    onClick={() => handleMove("right")}
                  />
                </SliderWrapper>
              </Slider>
            )}
        {loading ? (
          "Loading..."
        ) : (
          <>
            <Container>
              <Wrapper>
                <BookBtn onClick={handleClick} >Reserve or Book Now!</BookBtn>
                <Title>Grand Hotel</Title>
                <Address>
                  <FontAwesomeIcon icon={faLocationDot} />
                  <span>{data.address}</span>
                </Address>
                <Distance>
                  Excellent location {data.distance}m from center
                </Distance>
                <PriceHighlight>
                  Book a stay over ${data.cheapestPrice} at this property and
                  get a free airport taxi
                </PriceHighlight>
                <HotelImg>
                  {data.photos?.map((photo, index) => {
                    return (
                      <ImgWrapper key={index}>
                        <Img onClick={() => handleOpen(index)} src={photo} />
                      </ImgWrapper>
                    );
                  })}
                </HotelImg>
                <Details>
                  <DetailsTexts>
                    <HotelTitle>{data.title}</HotelTitle>
                    <HotelDesc>{data.desc}</HotelDesc>
                  </DetailsTexts>
                  <DetailsPrice>
                    <h3>Perfect for {days}-night stay</h3>
                    <span>
                      Located in the real heart of Krakow, this property has an
                      excellent location score of 9.8
                    </span>
                    <h4>
                      <b>${days * data.cheapestPrice * options.room}</b> ({days}
                      nights)
                    </h4>
                    <button>Reserve of Book Now!</button>
                  </DetailsPrice>
                </Details>
              </Wrapper>
            </Container>
            <MailList />
            <Footer />
          </>
        )}
      </>
      {openModal && <Reserve setOpen={setOpenModal} />}
    </div>
  );
};

export default Hotel;
