import React from "react";
import MainPicture from "../components/MainPicture/MainPicture";
import Banner from "../components/Banner/Banner";

const contact = () => {
  return (
    <section>
      <MainPicture url="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" />
      <Banner header="Contact" />
    </section>
  );
};

export default contact;
