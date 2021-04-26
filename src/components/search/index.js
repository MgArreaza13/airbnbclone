import React, { useState } from "react";
import { SearchContainer } from "./styles";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";
import { People } from "@material-ui/icons";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router";

function Search() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const history = useHistory()

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.setEndDate);
  };

  return (
    <SearchContainer>
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />

      <h2>
        Number of guests
        <People />
      </h2>

      <input type="number" min={0} defaultValue={2} />

      <Button onClick={(e) => {history.push("/search")}}>Search Airbnb</Button>
    </SearchContainer>
  );
}

export default Search;
