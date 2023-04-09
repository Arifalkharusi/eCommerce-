import React from "react";
import Listings from "../Listings/Listings";
import Filter from "../Filter/Filter";
import { useSelector } from "react-redux";

const Home = (props) => {
  const { items } = useSelector((state) => state.dataSlice);

  return (
    <>
      <Filter />
      <h3>{items.length} Product(s) found</h3>
      <div className="listings">
        {items.map((x, i) => (
          <Listings data={x} key={x.id} i={i} />
        ))}
      </div>
    </>
  );
};

export default Home;
