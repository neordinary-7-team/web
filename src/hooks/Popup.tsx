import { useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { popupAtom } from "../atoms";

const Popups = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 300px;
  padding: 60px 80px 80px 70px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  background-color: #4a6fc7;
  color: #fff;
  visibility: hidden;
  border-radius: 10px;
  transition: 0.1s;
  z-index: 10000;
  &.active {
    visibility: visible;
    opacity: 1;
  }
  .submit {
    padding: 10px;
    border-radius: 15px;
    float: right;
    width: 50px;
    background-color: #7e94c8;
    color: #fff;
    border: none;
    margin-bottom: 50px;
    margin-left: 50px;
    &:hover {
      background-color: #34456d;
      cursor: pointer;
    }
  }
  .hidden {
    margin-top: 20px;
    visibility: hidden;
  }
  .visible {
    margin-top: 20px;
    visibility: visible;
  }
  #end {
    z-index: 1;
  }
`;
const Close = styled.div`
  font-size: 25px;
  float: right;
  margin: -60px -115px 0 0;
  cursor: pointer;
  color: #000;
  &:hover {
    color: #8a8787;
  }
`;
const Datas = styled.div`
  justify-content: center;
  align-items: center;
  font-size: 20px;
  display: grid;
  width: 400px;
  margin-top: 0px;
  margin-bottom: 10px;
  grid-template-columns: repeat(3, 1fr);
  .button {
    padding: 10px;
    width: 10px;
    &:hover {
      cursor: pointer;
      background-color: #6683c7;
      border-radius: 50px;
    }
  }
  .black {
    color: purple;
  }
  .white {
    color: white;
  }
`;

function Popup({ toggle, value }: any) {
  const popup = useRecoilValue(popupAtom);
  const value1 = "2022-06-06";
  const value2 = "2022-06-10";
  const value3 = "2022-06-11";
  const value4 = "2022-06-15";
  const [color1, setColor1] = useState("white");
  const [color2, setColor2] = useState("white");
  const [color3, setColor3] = useState("white");
  const [color4, setColor4] = useState("white");
  const vote = (e: any) => {
    setResults("hidden");
    if (e.target.value === "2022-06-06") {
      setColor1(color1 === "white" ? "black" : "white");
    }
    if (e.target.value === "2022-06-10") {
      setColor2(color2 === "white" ? "black" : "white");
    }
    if (e.target.value === "2022-06-11") {
      setColor3(color3 === "white" ? "black" : "white");
    }
    if (e.target.value === "2022-06-15") {
      setColor4(color4 === "white" ? "black" : "white");
    }
  };
  const submitButton = () => {
    setColor1("white");
    setColor2("white");
    setColor3("white");
    setColor4("white");
    setResults(results === "visible" ? "hidden" : "visible");
  };
  const [results, setResults] = useState("hidden");
  const close = () => {
    setResults("hidden");
    setColor1("white");
    setColor2("white");
    setColor3("white");
    setColor4("white");
    toggle();
  };

  return (
    <>
      <Popups className={popup}>
        <Close onClick={close}>Ｘ</Close>
        <Datas>
          {value[0]}
          <span className={color1}> {value1}</span>
          <button
            value={"2022-06-06"}
            className="button"
            onClick={vote}
          ></button>
        </Datas>
        <Datas>
          {value[1]}
          <span className={color2}> {value2}</span>
          <button
            value={"2022-06-10"}
            className="button"
            onClick={vote}
          ></button>
        </Datas>
        <Datas>
          {value[2]}
          <span className={color3}> {value3}</span>
          <button
            value={"2022-06-11"}
            className="button"
            onClick={vote}
          ></button>
        </Datas>
        <Datas>
          {value[3]}
          <span className={color4}> {value4}</span>
          <button
            value={"2022-06-15"}
            className="button"
            onClick={vote}
          ></button>
        </Datas>
        <button className="submit" type="submit" onClick={submitButton}>
          확인
        </button>
        <span id="end" className={results}>
          {"user2님의 투표가 완료되었습니다."}
        </span>
      </Popups>
    </>
  );
}

export default Popup;
