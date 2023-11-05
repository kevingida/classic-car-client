import React from "react";
import Style from "./MainPicture.module.css";

type props = {
  url: String;
};

function MainPicture({ url }: props) {
  return (
    <section
      className={Style.picture}
      style={{ backgroundImage: `url(${url})` }}
    />
  );
}

export default MainPicture;
