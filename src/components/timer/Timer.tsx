import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ui from "../../acssets/socical-icon/UIstep.png";
const Timer = () => {
  const [minutes, setMinutes] = useState(60);
  const [seconds, setSeconds] = useState(0);
  const navigate = useNavigate();

  let timer: any;

  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds - 1);
      if (seconds === 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      }
      if (minutes === 0 && seconds === 1) {
        navigate("/login");
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [seconds]);

  return (
    <div>
      {" "}
      <div className=" flex items-center justify-center mb-4">
        <img className="mr-2" src={ui} alt="" />
        <p
          style={{
            color: minutes === 0 && seconds <= 30 ? "#FF2F48" : "",
          }}
        >
          Thời gian thanh toán còn lại{" "}
          <b>{minutes < 10 ? "0" + minutes : minutes}</b> phút{" "}
          <b>{seconds < 10 ? "0" + seconds : seconds}</b> giây
        </p>
      </div>
    </div>
  );
};

export default Timer;
