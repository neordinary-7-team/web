import React from "react";

function InputBox() {
  const ClickedBox = (e: any) => {
    console.log(e);
    //팝업 띄우기
  };
  return (
    <input
    //   value={key}
      className="checkbox"  
      type="checkbox"
      onClick={ClickedBox}
    />
  );
}

export default InputBox;
