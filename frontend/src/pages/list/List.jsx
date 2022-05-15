import { useState } from "react";
import { useLocation } from "react-router";
import { format } from "date-fns";
import styled from "styled-components";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  gap: 20px;
`;

const Search = styled.div`
  flex: 1;
  background-color: #febb02;
  padding: 10px;
  border-radius: 10px;
  position: sticky;
  top: 10px;
  height: max-content;
  & > button {
    padding: 10px;
    background-color: #0071c2;
    color: white;
    border: none;
    width: 100%;
    font-weight: 500;
    cursor: pointer;
  }
`;

const Title = styled.h3`
  font-size: 20px;
  color: #555;
  margin-bottom: 10px;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  & > label {
    font-size: 12px;
  }

  & > input {
    height: 30px;
    border: none;
    padding: 5px;
  }

  & > span {
    height: 30px;
    padding: 5px;
    background-color: white;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;
const Options = styled.div`
  padding: 10px;
`;

const OptionItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  color: #555;
  font-size: 12px;
`;

const OptionText = styled.span``;

const OptionInput = styled.input`
  width: 50px;
`;

const Result = styled.div`
  flex: 3;
`;

const List = () => {
  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <Container>
        <Wrapper>
          <Search>
            <Title>Search</Title>
            <Item>
              <label>Destination</label>
              <input placeholder={destination} text="text" />
            </Item>
            <Item>
              <label>Check-in Destination</label>
              <span onClick={() => setOpenDate((prev) => !prev)}>{`${format(
                date[0].startDate,
                "MM/dd/yyyy"
              )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </Item>
            <Item>
              <label>Options</label>
              <Options>
                <OptionItem>
                  <OptionText>
                    Min price <small>per night</small>
                  </OptionText>
                  <OptionInput type="number"></OptionInput>
                </OptionItem>
                <OptionItem>
                  <OptionText>
                    Max price <small>per night</small>
                  </OptionText>
                  <OptionInput type="number" />
                </OptionItem>
                <OptionItem>
                  <OptionText>Adult</OptionText>
                  <OptionInput
                    type="number"
                    min={1}
                    placeholder={options.adult}
                  />
                </OptionItem>
                <OptionItem>
                  <OptionText>Children</OptionText>
                  <OptionInput
                    type="number"
                    min={0}
                    placeholder={options.children}
                  />
                </OptionItem>
                <OptionItem>
                  <OptionText>Room</OptionText>
                  <OptionInput
                    type="number"
                    min={0}
                    placeholder={options.room}
                  />
                </OptionItem>
              </Options>
            </Item>
            <button>Search</button>
          </Search>
          <Result>
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </Result>
        </Wrapper>
      </Container>
    </div>
  );
};

export default List;
