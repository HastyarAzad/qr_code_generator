import Styles from "./Navbar.module.css";
import React from "react";

const Navbar = ({ handleActivePage, selected_tab }) => {
  return (
    <div className={Styles.navbar}>
      <div className={Styles.tabs}>
        <button
          className={
            selected_tab === "products"
              ? `${Styles.selected_tab}  ${Styles.button}`
              : Styles.button
          }
          onClick={() => {
            handleActivePage("products");
          }}
        >
          Products
        </button>
        <button
          className={
            selected_tab === "codes"
              ? `${Styles.selected_tab}  ${Styles.button}`
              : Styles.button
          }
          onClick={() => {
            handleActivePage("codes");
          }}
        >
          QR codes
        </button>
      </div>
      {/* <div className={Styles.title}>
        <span>Kashakeel</span>
      </div> */}
    </div>
  );
};

export default Navbar;
