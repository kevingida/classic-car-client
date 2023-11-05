import React from "react";
import MainPicture from "../components/MainPicture/MainPicture";
import Banner from "../components/Banner/Banner";

const about = () => {
  return (
    <section>
      <MainPicture url="https://images.unsplash.com/photo-1508950331646-9c182111fbc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80" />
      <Banner header="About Us" />
    </section>
  );
};

export default about;
