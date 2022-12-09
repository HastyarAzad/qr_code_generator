import Navbar from "../components/navbar/Navbar";
import Styles from "./Main.module.css";
import React, { useState } from "react";
import Product from "./product/Product";
import QrCode from "./qrCode/QrCode";
const Main = () => {
  const [selected_tab, setSelected_tab] = useState("codes");
  function handleActivePage(tab) {
    setSelected_tab(tab);
  }

  let page = null;

  switch (selected_tab) {
    case "products":
      page = <Product />;
      break;
    case "codes":
      page = <QrCode />;
      break;
    default:
      page = <Product />;
      break;
  }

  return (
    <>
      <div className={Styles.navbar}>
        <Navbar
          handleActivePage={handleActivePage}
          selected_tab={selected_tab}
        />
      </div>
      <div className={Styles.page}>{page}</div>
    </>
  );
};

export default Main;
