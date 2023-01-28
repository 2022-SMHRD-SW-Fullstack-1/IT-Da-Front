import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../../css/E_main_detail.css";

const E_main_detail = () => {
  const { state } = useLocation();

  const [resume, setResume] = useState({
    name: "",
    gender: "",
    birthday: "",
    major: "",
    phone: "",
    email: "",
    addr: "",
    skills: "",
    wish_field: "",
    wish_salary: "",
    wish_area1: "",
    wish_area2: "",
    wish_area3: "",
    simple_comment: "",
    photo: "",
    project1: "1",
    project2: "2",
  });
  //추가버튼있음
  const [graduation, setGraduation] = useState([
    {
      grad_num: "",
      grad_school: "",
      school_type: "",
      grad_dt: "",
      grad_type: "",
      grad_score: "",
    },
  ]);
  //추가버튼있음
  const [career, setCareer] = useState([
    {
      cr_num: "",
      cr_organization: "",
      cr_position: "",
      cr_s_dt: "",
      cr_e_dt: "",
      activity: "",
    },
  ]);
  //추가버튼있음
  const [certification, setCertification] = useState([
    {
      cert_num: "",
      cert_org: "",
      cert_name: "",
      cert_dt: "",
    },
  ]);
  //추가버튼있음
  const [prize, setPrize] = useState([
    {
      prize_num: "",
      prize_org: "",
      prize_name: "",
      prize_dt: "",
    },
  ]);
  //추가버튼있음
  const [military, setMilitary] = useState([
    {
      mili_num: "",
      mili_title: "",
      mili_army: "",
      mili_s_dt: "",
      mili_e_dt: "",
      veteran_yn: "",
    },
  ]);

  useEffect(() => {
    axios
      .get("/student/resume/one", {
        params: { id: state.mb_id },
      })
      .then((res) => {
        // console.log(res);
        setResume(res.data[0]);
        setGraduation(res.data[1]);
        // console.log("뭐에요".res.data[1]);
        setCareer(res.data[2]);
        // console.log(res.data[2]);
        setCertification(res.data[3]);
        // console.log(res.data[3]);
        setPrize(res.data[4]);
        // console.log(res.data[4]);
        setMilitary(res.data[5]);
        // console.log(res.data[5]);
      })
      .catch((e) => console.error(e));
  }, []);

  console.log("들어", certification);
  return (
    <div className="topDiv_resume">
      <div className="r_basic">
        <div>
          {/* <img
            // style={{ width: "6rem", height: "8rem", backgroundColor: "black" }}
          
          /> */}
          <img className="id_photo" src={resume.photo}></img>
        </div>
        <div>
          <div className="test12">
            <p>{resume.name}</p>
            <p>
              {resume.gender} / {resume.birthday}
            </p>
          </div>
          <div>
            <div>
              <p>연락처</p>
              <p>{resume.phone}</p>
            </div>
            <div>
              <p>이메일</p>
              <p>{resume.email}</p>
            </div>
            <div>
              <p>주소</p>
              <p>{resume.addr}</p>
            </div>
            <div>
              <p>희망지역</p>
              <p>
                {resume.wish_area1},{resume.wish_area2},{resume.wish_area3}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p>학력</p>
        <table>
          <thead>
            <tr>
              <th>학교명</th>
              <th>전공</th>
              <th>기간</th>
              <th>구분</th>
              <th>학점</th>
            </tr>
          </thead>
          <tbody>
            {graduation.map((graduation, idx) => (
              <tr key={idx}>
                <td>
                  <p>{graduation.grad_school}</p>
                </td>
                <td>
                  <p>{graduation.school_type}</p>
                </td>
                <td>
                  <p>{graduation.grad_dt}</p>
                </td>
                <td>
                  <p>{graduation.grad_type}</p>
                </td>
                <td>
                  <p>{graduation.grad_score}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <p>경력 · 교육</p>
        <table>
          <thead>
            <tr>
              <th>기관명</th>
              <th>직책</th>
              <th>기간</th>
              <th>직무/활동사항</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>훈련생</td>
              <td>2022-02-02 ~ 2026-02-02</td>
              <td>Full Stack SW융합 실무 부트캠프</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <p>자격증</p>
        <table>
          <thead>
            <tr>
              <th>자격증명</th>
              <th>발급기관</th>
              <th>발급일자</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{certification.cert_name}</td>
              <td>{certification.cert_name}</td>
              <td>{certification.cert_dt}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <p>수상내역</p>
        <table>
          <thead>
            <tr>
              <th>수상명</th>
              <th>내용</th>
              <th>수상일자</th>
              <th>기관명</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>최우수상</td>
              <td>캡스톤대회</td>
              <td>2022-02-02</td>
              <td>스마트인재개발원</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <p>병역</p>
        <table>
          <thead>
            <tr>
              <th>구분</th>
              <th>군별</th>
              <th>복무기간</th>
              <th>보훈대상</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>필</td>
              <td>육군</td>
              <td>2015-07-25 ~ 2017-10-26</td>
              <td>없음</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <p>기술스택</p>
        <div>블라블라~</div>
      </div>
    </div>
  );
};

export default E_main_detail;
