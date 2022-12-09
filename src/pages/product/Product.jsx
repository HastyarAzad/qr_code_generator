import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Styles from "./Product.module.scss";

const Product = () => {
  const [name, setName] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  function handleSubmit() {
    console.log("name", name);
    console.log("startDate", startDate);
    console.log("endDate", endDate);
    setName("");
    setStartDate(new Date());
    setEndDate(new Date());
  }

  return (
    <>
      <h1>Insert a Product</h1>
      <div className={`${Styles.form__group} ${Styles.field}`}>
        <input
          type="input"
          className={Styles.form__field}
          placeholder="Name"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="name" className={Styles.form__label}>
          Name
        </label>
      </div>
      <div className={`${Styles.form__group} ${Styles.field}`}>
        <DatePicker
          id="startDate"
          className={Styles.form__field}
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          dateFormat="dd/MM/yyyy"
        />
        <label htmlFor="startDate" className={Styles.form__label}>
          Start Date
        </label>
      </div>
      <div className={`${Styles.form__group} ${Styles.field}`}>
        <DatePicker
          id="endDate"
          className={Styles.form__field}
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          dateFormat="dd/MM/yyyy"
        />
        <label htmlFor="endDate" className={Styles.form__label}>
          End Date
        </label>
      </div>
      <div className={`${Styles.form__group} ${Styles.field}`}>
        <button className={Styles.submitButton} onClick={handleSubmit}>submit</button>
      </div>
    </>
  );
};

export default Product;
