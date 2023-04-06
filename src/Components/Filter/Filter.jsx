import React, { useEffect } from "react";
import data from "../../data/data.json";
import { useSelector, useDispatch } from "react-redux";
import { addFilter, removeFilter } from "../../store/filterSlice";
import { mainData } from "../../store/dataSlice";

const Filter = (props) => {
  const dispatch = useDispatch();
  const size = useSelector((state) => state.filterSlice);

  const filterArray = data.map((x) => x.sizes).flat();
  const filterMain = new Set(filterArray); // removes duplicates

  useEffect(() => {
    // filters by size
    const filteredData = data.filter((item) =>
      size.some((size) => item.sizes.includes(size))
    );
    // if no size is selected to return the whole data
    filteredData.length > 0
      ? dispatch(mainData(filteredData))
      : dispatch(mainData(data));
  }, [size, dispatch]);

  const filterHandler = (e) => {
    if (!e.target.classList.contains("selected")) {
      e.target.classList.add("selected"); // mark as selected
      dispatch(addFilter(e.target.innerHTML));
    } else {
      e.target.classList.remove("selected");
      const index = size.indexOf(e.target.innerHTML);
      dispatch(removeFilter(index));
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
