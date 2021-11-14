import { Container, Sort } from "./FilterStyle";
import FilterIcon from "../../../assets/filter.svg";
import DropIcon from "../../../assets/dropdown.svg";
import React, { Dispatch } from "react";

export interface FilterProps {
  currState?: boolean;
  setfilterState: Dispatch<boolean>;
}
const Filter = ({ setfilterState }: FilterProps) => {
  return (
    <Container>
      <Sort>
        Sort By
        <img src={DropIcon} />
      </Sort>
      <img
        src={FilterIcon}
        onClick={() => setfilterState(true)}
        alt="Filter Icon"
      />
    </Container>
  );
};

export default Filter;
