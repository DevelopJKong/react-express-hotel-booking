import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { DateRange } from "react-date-range";
import { useState } from "react";
import { useNavigate } from "react-router";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import styled from "styled-components";
import { useContext } from "react";
import { NEW_SEARCH, SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";

const Container = styled.div`
  background-color: #003580;
  color: white;
  display: flex;
  justify-content: center;
  position: relative;
`;

const HeaderBar = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 20px 0px 100px 0px;
`;

const List = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 50px;
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Title = styled.h3``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Btn = styled.button`
  background-color: #0071c2;
  color: white;
  font-weight: 500;
  border: none;
  padding: 10px;
  cursor: pointer;
`;

const Search = styled.div`
  height: 30px;
  background-color: white;
  border: 3px solid #febb02;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px 0px;
  border-radius: 5px;
  position: absolute;
  bottom: -25px;
  width: 100%;
  max-width: 1024px;
`;

const SearchItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
`;

const SearchText = styled.span`
  color: lightgray;
  cursor: pointer;
`;

const SearchBtn = styled.button`
  background-color: #0071c2;
  color: white;
  font-weight: 500;
  border: none;
  height: 35px;
  border-radius: 10px;
  margin-left: 5px;
`;

const Icon = styled(FontAwesomeIcon)`
  color: lightgray;
`;

const Options = styled.div`
  z-index: 2;
  position: absolute;
  top: 50px;
  background-color: white;
  color: gray;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.4);
`;

const OptionItem = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  margin: 10px;
`;

const OptionText = styled.span``;

const OptionCount = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  color: black;
`;

const OptionCountBtn = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid #0071c2;
  color: #0071c2;
  cursor: pointer;
  background-color: white;
  &:disabled {
    cursor: not-allowed;
  }
`;

const OptionCounterNum = styled.div``;

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const { dispatch } = useContext(SearchContext);

  const handleSearch = () => {
    dispatch({ type: NEW_SEARCH, payload:{destination,date,options} });
    navigate("/hotels", { state: { destination, date, options } });
  };

  return (
    <Container>
      <HeaderBar className={type === "list" ? "listMode" : ""}>
        <List>
          <ListItem className="active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </ListItem>
          <ListItem>
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </ListItem>
          <ListItem>
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </ListItem>
          <ListItem>
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </ListItem>
          <ListItem>
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </ListItem>
        </List>

        {type !== "list" && (
          <>
            <Title>A lifetime of discounts? It's Genius.</Title>
            <Desc>
              Get rewarded for your travels – unlock instant savings of 10% or
              more with a free Lamabooking account
            </Desc>
           {!user && <Btn>Sign in / Register</Btn>}
            <Search>
              <SearchItem>
                <Icon icon={faBed} />
                <SearchInput
                  text="text"
                  placeholder="Where are you going?"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </SearchItem>
              <SearchItem>
                <Icon icon={faCalendarDays} />
                <SearchText onClick={() => setOpenDate(!openDate)}>
                  {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                    date[0].endDate,
                    "MM/dd/yyyy"
                  )}`}
                </SearchText>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </SearchItem>
              <SearchItem>
                <Icon icon={faPerson} />
                <SearchText
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >
                  {`${options.adult} adult , ${options.children} children , ${options.room} room`}
                </SearchText>
                {openOptions && (
                  <Options>
                    <OptionItem>
                      <OptionText>Adult</OptionText>
                      <OptionCount>
                        <OptionCountBtn
                          disabled={options.adult <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </OptionCountBtn>
                        <OptionCounterNum>{options.adult}</OptionCounterNum>
                        <OptionCountBtn
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </OptionCountBtn>
                      </OptionCount>
                    </OptionItem>
                    <OptionItem>
                      <OptionText>Children</OptionText>
                      <OptionCount>
                        <OptionCountBtn
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </OptionCountBtn>
                        <OptionCounterNum>{options.children}</OptionCounterNum>
                        <OptionCountBtn
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </OptionCountBtn>
                      </OptionCount>
                    </OptionItem>
                    <OptionItem>
                      <OptionText>Room</OptionText>
                      <OptionCount>
                        <OptionCountBtn
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </OptionCountBtn>
                        <OptionCounterNum>{options.room}</OptionCounterNum>
                        <OptionCountBtn
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </OptionCountBtn>
                      </OptionCount>
                    </OptionItem>
                  </Options>
                )}
                <SearchBtn onClick={handleSearch}>Search</SearchBtn>
              </SearchItem>
            </Search>
          </>
        )}
      </HeaderBar>
    </Container>
  );
};

export default Header;
