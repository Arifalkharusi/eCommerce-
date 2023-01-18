import React, { useState } from "react";
import data from "../data/data.json";

const Filter = (props) => {
  const [selectedSizes, setSelectedSizes] = useState([]);
  const filterArray = []; // stores all the sizes

  data.forEach((x) => {
    filterArray.push(...x.sizes);
  });

  const filterMain = new Set(filterArray); // removes duplicates

  const filterHandler = (e) => {
    const filterData = () => {
      setSelectedSizes((prev) => [...prev]); // update the selected sizes
      // filters tby size
      const filteredData = data.filter((item) =>
        selectedSizes.some((size) => item.sizes.includes(size))
      );
      // if no size is selected to return the whole data
      filteredData.length > 0
        ? props.onFilter(filteredData)
        : props.onFilter(data);
    };

    if (!e.target.classList.contains("selected")) {
      e.target.classList.add("selected"); // mark as selected
      selectedSizes.push(e.target.innerHTML);
      filterData();
    } else {
      e.target.classList.remove("selected");
      const index = selectedSizes.indexOf(e.target.innerHTML);
      selectedSizes.splice(index, 1);
      filterData();
    }
  };

  return (
    <div className="filter">
      <h1>Sizes:</h1>
      {Array.from(filterMain).map((x) => (
        <div className="size" onClick={filterHandler} key={x}>
          {x}
        </div>
      ))}
    </div>
  );
};

export default Filter;
