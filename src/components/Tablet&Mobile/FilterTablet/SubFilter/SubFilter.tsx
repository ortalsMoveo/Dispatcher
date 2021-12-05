import React, { Dispatch, useState, useEffect } from "react";
import { FilterValue } from "../../../../FiltersData";
import FilterCategory from "../../../FilterCategory/FilterCategory";
import { SeparateLine } from "../FilterTabletStyle";
import DatePicker from "react-datepicker";
import moment from "moment";
import { Dates } from "./style";

export interface SubFilter {
  list: FilterValue[];
  currFilter: string;
  updateFiltersState: (val: string, id: string) => void;
  setFilterStartDate: Dispatch<React.SetStateAction<any>>;

  clearFilterDate: boolean;
  setClearFilterDate: Dispatch<React.SetStateAction<boolean>>;
}

const SubFilter = ({
  list,
  currFilter,
  updateFiltersState,
  setFilterStartDate,
  clearFilterDate,
  setClearFilterDate,
}: SubFilter) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const [validStartDate, setValidStartDate] = useState(false);

  const onChange = (dates: any) => {
    const [start, end] = dates;
    if (start) {
      updateFiltersState("from", moment(start).format("YYYY-MM-DD"));
      setValidStartDate(true);
    }
    if (end) {
      updateFiltersState("to", moment(end).format("YYYY-MM-DD"));
      setValidStartDate(false);
    }
    //  else {
    //   updateFiltersState("to", "");
    // }
    setStartDate(start);
    setEndDate(end);
  };

  useEffect(() => {
    if (clearFilterDate) {
      setStartDate(new Date());
      setEndDate(null);
      updateFiltersState("from", "");
      updateFiltersState("to", "");
      setClearFilterDate(false);
    } else {
      return;
    }
  }, [clearFilterDate]);

  return (
    <div>
      {currFilter === "Dates" ? (
        <Dates>
          <DatePicker
            dateFormat={"yyyy/MM/dd"}
            selected={startDate}
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            inline
          />
        </Dates>
      ) : (
        list.map((item, i) => (
          <div key={i}>
            <div
              onClick={() =>
                item.name === "Dates"
                  ? updateFiltersState(
                      item.name,
                      validStartDate
                        ? moment(startDate).format("D/MM")
                        : moment(endDate).format("DD/MM")
                    )
                  : updateFiltersState(
                      item.name,
                      item.id ? item.id! : item.name
                    )
              }
            >
              <FilterCategory categoryName={item.name} />
              <SeparateLine></SeparateLine>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default SubFilter;
