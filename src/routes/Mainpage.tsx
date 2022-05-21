import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import styled from "styled-components";
import { popupAtom } from "../atoms";
import Popup from "../hooks/Popup";

const Toggle = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  .title {
    color: #fff;
    justify-content: center;
    align-items: center;
    margin-left: 120px;
  }
`;
const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  border-radius: 50px;
  padding: 30px;
  margin: 20px 0 0 0;
  color: #fff;
  align-items: center;
  justify-content: center;
  background-color: #5d81d5;
  &:hover {
    cursor: pointer;
    background-color: #d4cece;
  }
  .checkbox {
    margin: 0 0 0 0;
  }
`;

function Mainpage() {
  const [title, setTitle] = useState("");
  const [data, setData] = useState("");
  const [uid, setUid] = useState("3");
  const [schedule, setSchedule] = useState("");
  const popup = useRecoilValue(popupAtom);
  const setPopup = useSetRecoilState(popupAtom);
  const select = (e: any) => {
    setPopup(popup === "popup" ? "popup active" : "popup");
    setSchedule(e.target.innerText);
  };

  const getData = async () => {
    let url = `http://15.165.67.130:9000/schedules/${uid}`;
    try {
      const response = await axios({
        method: "get",
        url: url,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      setData(response.data.result.dates);
      setTitle(response.data.result.groupName);
    } catch (err) {
      console.log(err);
    }
  };
  console.log(data);
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Toggle>
        <div className="title">{title}</div>
        <Box onClick={select}>{data}</Box>
        <Popup toggle={select} value={data} />
      </Toggle>
    </>
  );
}
export default Mainpage;
