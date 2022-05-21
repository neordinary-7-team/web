import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { popupAtom } from "../atoms";
import { data1 } from "../data";
import InputBox from "./InputBox";

const Popups = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 670px;
  height: 370px;
  padding: 60px 80px 80px 70px;
  box-shadow: 0 5px 30px rgba(0, 0, 0, 0.3);
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
  grid-template-columns: repeat(3, 1fr);
  .checkbox {
    float: right;
  }
  &:hover {
    cursor: pointer;
    background-color: #6683c7;
    border-radius: 50px;
    width: 100%;
  }
`;
const vote = (e:any) => {
if(e.target.checked) {
  console.log(e.name)
}
}

function Popup({ toggle, value }: any) {
  const popup = useRecoilValue(popupAtom);
  return (
    <Popups className={popup}>
      <Close onClick={toggle}>Ｘ</Close>
      <Datas>
        {value[0]}
        <input onClick={vote} name="checkedValue" className="checkbox" type="checkbox"></input>
      </Datas>
      
      <Datas>
        {value[1]}
        <input onClick={vote} name="checkedValue" className="checkbox" type="checkbox"></input>
      </Datas>
      <Datas>
        {value[2]}
        <input onClick={vote} name="checkedValue" className="checkbox" type="checkbox"></input>
      </Datas>
    </Popups>
  );
}

export default Popup;
