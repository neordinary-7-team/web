import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { popupAtom } from "../atoms";
import Popup from "../hooks/Popup";
import { datas } from "../data";

const Toggle = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .title {
    color: #fff;
    margin-left: 0px;
    font-size: 30px;
    font-weight: 800;
  }
`;
const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  border-radius: 50px;
  padding-left: 60px;
  padding-top: 20px;
  height: 250px;
  margin: 20px 0 0 0px;
  font-size: 30px;
  width: 300px;
  color: #fff;
  background-color: #5d81d5;
  &:hover {
    cursor: pointer;
    background-color: #889cca;
  }
  .checkbox {
    margin: 0 0 0 0;
  }
`;
const Header = styled.div``;
function Mainpage() {
  const [schedule, setSchedule] = useState("");
  const popup = useRecoilValue(popupAtom);
  const setPopup = useSetRecoilState(popupAtom);
  const select = (e: any) => {
    setPopup(popup === "popup" ? "popup active" : "popup");
    setSchedule(e.target.innerText);
  };
  return (
    <>
      <Header></Header>
      <Toggle>
        <div className="title">{"모임"}</div>
        <Box onClick={select}>
          <span> {datas[0].date}</span>
          <span> {datas[1].date}</span>
          <span> {datas[2].date}</span>
          <span> {datas[3].date}</span>
        </Box>
        <Popup toggle={select} value={""} />
      </Toggle>
    </>
  );
}
export default Mainpage;
