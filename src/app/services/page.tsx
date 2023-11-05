import React from "react";
import MainPicture from "../components/MainPicture/MainPicture";
import Banner from "../components/Banner/Banner";

const service = () => {
  return (
    <section>
      <MainPicture url="https://images.unsplash.com/photo-1534258885201-dede7bddf3cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGNsYXNzaWMlMjBjYXIlMjBlbmdpbmV8ZW58MHwwfDB8fHwy&auto=format&fit=crop&w=500&q=60" />
      <Banner header="Services" />
    </section>
  );
};

export default service;
