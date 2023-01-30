import axios from "axios";
import React from "react";
import "../../../css/Resume.css";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const S_CL_main = () => {
  const [coverLetter, SetCoverLetter] = useState({
    growth: "",
    pros_cons: "",
    goal_and_crisis: "",
    motivation: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    SetCoverLetter({
      ...coverLetter,
      [name]: value,
    });
    console.log(coverLetter);
  };

  const btnResume = () => {
    console.log("click");

    console.log(coverLetter);
    axios
      .post("/student/cover_letter/update", {
        growth: coverLetter.growth,
        pros_cons: coverLetter.pros_cons,
        goal_and_crisis: coverLetter.goal_and_crisis,
        motivation: coverLetter.motivation,
        id: sessionStorage.getItem("loginId"),
      })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    axios
      .get("/student/cover_letter/one", {
        params: { id: sessionStorage.getItem("loginId") },
      })
      .then((res) => {
        console.log(res.data);
        SetCoverLetter(res.data);
      })
      .catch((e) => console.error(e));
  }, []);


  const navigate = useNavigate()
  const goToCoverLetterFrame = () => {
    navigate('/cover_letter/frame', 
    {state:{ coverLetter: coverLetter}})
  }
  return (
    <div className="topDiv_resume">
      <div>
        <p>성장배경</p>
        <div>
          <p>
            <input
              className="cLInput"
              type="text"
              name="growth"
              onChange={onChange}
              value={coverLetter.growth||''}
            />
          </p>
        </div>
      </div>
      <div>
        <p>성격의 장단점</p>
        <div>
          <p>
            <input
              className="cLInput"
              type="text"
              name="pros_cons"
              onChange={onChange}
              value={coverLetter.pros_cons||''}
            />
          </p>
        </div>
      </div>
      <div>
        <p className="sCLTitle">위기극복 및 목표달성</p>
        <div>
          <p>
            <input
              className="cLInput"
              type="text"
              name="goal_and_crisis"
              onChange={onChange}
              value={coverLetter.goal_and_crisis||''}
            />
          </p>
        </div>
      </div>
      <div>
        <p>지원 동기 및 입사 후 포부</p>
        <div>
          <p>
            <input
              className="cLInput"
              type="text"
              name="motivation"
              onChange={onChange}
              value={coverLetter.motivation||''}
            />
          </p>
        </div>
      </div>
      <div className="saveDiv">
        <span>
          <button className="blueBtn" onClick={btnResume}>
            저장하기
          </button>
        </span>
        <span><button className="blueBtn" onClick={goToCoverLetterFrame}>출력페이지</button></span>
      </div>
    </div>
  );
};
export default S_CL_main;
