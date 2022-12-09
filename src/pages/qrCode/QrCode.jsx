import Styles from "./QrCode.module.scss";
import { useState } from "react";
import QRCodeSVG from "qrcode.react";
import QRCodeCanvas from "qrcode.react";
// import QRCode from "qrcode.react";

const QrCode = () => {
  const [options, setOptions] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [selectedOption, setSelectedOption] = useState(1);
  const [qrCodeValue, setQrCodeValue] = useState(options[0]);

  function handleGenerate() {
    console.log("selectedOption", selectedOption);
    setQrCodeValue(selectedOption);

  }

  function handlePrint() {
    console.log("print");
    var myWindow=window.open('','','width=800,height=800');
    myWindow.document.write("<p>This is 'myWindow'</p>");
    
    myWindow.document.close();
    myWindow.focus();
    myWindow.print();
    // myWindow.close();
    // var image = document.getElementById("qrCodeImage");
    // document.body.style.visibility = "hidden";
    // image.className = Styles.printing_area;
    // image.style.visibility = "visible";
    // window.print();
    // image.className = Styles.qrCode;
    // document.body.style.visibility = "visible";

    // var originalContents = document.body.innerHTML;
    // document.body.innerHTML = image;
    // window.print();
    // document.body.innerHTML = originalContents;
  }

  return (
    <>
      <div className={Styles.page}>
        <div className={Styles.title}>
          <h1>Generate QrCode</h1>
        </div>
        <div className={Styles.form}>
          <div>
            <select
              className={Styles.select}
              name="select"
              id="select"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              {options.map((option, index) => {
                return (
                  <option key={index} value={option}>
                    {option}
                  </option>
                );
              })}
            </select>
          </div>
          <div className={Styles.submit}>
            <button onClick={handleGenerate}>Generate</button>
          </div>
        </div>
        <div className={`${Styles.qrCode} `} id="qrCodeImage">
          <QRCodeCanvas
            value={qrCodeValue}
            size={193}
            level={"H"}
            includeMargin={true}
          />
        </div>
        <div className={Styles.actions}>
          <button id="printBtn" onClick={handlePrint}>
            Print
          </button>
        </div>
      </div>
    </>
  );
};

export default QrCode;
