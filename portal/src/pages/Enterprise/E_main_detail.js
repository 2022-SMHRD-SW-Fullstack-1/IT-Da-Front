import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../../css/E_main_detail.css";

const E_main_detail = () => {
  const { state } = useLocation();
  console.log(state.mb_id, state.name);
  console.log(state.phone);
  const [resume, setResume] = useState({
    name: "",
    gender: "",
    birthday: "",
    phone: "",
    email: "",
    addr: "",
    skills: "",
    //
    wish_area1: "전체",
    wish_area2: "전체",
    wish_area3: "전체",
    //
    wish_salary: "내규에 따름",
    //
    wish_field: "",
    major: "",
  });
  //추가버튼있음
  const [graduation, setGraduation] = useState([
    {
      gradSchool: "",
      schoolType: "",
      gradDt: "",
      gradType: "",
      gradScore: "",
    },
  ]);
  //추가버튼있음
  const [career, setCareer] = useState([
    {
      organization: "",
      position: "",
      s_dt: "",
      e_dt: "",
      activity: "",
    },
  ]);
  //추가버튼있음
  const [certification, setCertification] = useState([
    {
      name: "",
      dt: "",
      org: "",
    },
  ]);
  //추가버튼있음
  const [prize, setPrize] = useState([
    {
      name: "",
      org: "",
      dt: "",
    },
  ]);
  //추가버튼있음
  const [military, setMilitary] = useState([
    {
      title: "",
      army: "",
      sDt: "",
      eDt: "",
      veteranYn: "",
    },
  ]);

  // useEffect(() => {
  //   axios
  //     .get("/resume/one", {
  //       params: { id: sessionStorage.getItem("loginId") },
  //     })
  //     .then((res) => {
  //       console.log(res.data);
  //       setResume(res.data[0]);
  //       setGraduation(res.data[1]);
  //       // console.log(res.data[1])
  //       setCareer(res.data[2]);
  //       // console.log(res.data[2])
  //       setCertification(res.data[3]);
  //       // console.log(res.data[3])
  //       setPrize(res.data[4]);
  //       // console.log(res.data[4])
  //       setMilitary(res.data[5]);
  //       // console.log(res.data[5])
  //     })
  //     .catch((e) => console.error(e));
  // });

  return (
    <div className="topDiv_resume">
      <div className="r_basic">
        <div>
          {/* <img
            // style={{ width: "6rem", height: "8rem", backgroundColor: "black" }}
          
          /> */}
          <img className="id_photo" src={state.photo}></img>
        </div>
        <div>
          <div className="test12">
            <p>{state.name}</p>
            <p>
              {state.gender} / {state.birthday}
            </p>
          </div>
          <div>
            <div>
              <p>연락처</p>
              <p>{state.phone}</p>
            </div>
            <div>
              <p>이메일</p>
              <p>{state.email}</p>
            </div>
            <div>
              <p>주소</p>
              <p>{state.addr}</p>
            </div>
            <div>
              <p>희망지역</p>
              <p>
                {state.wish_area1},{state.wish_area2},{state.wish_area3}
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
            <tr>
              <td>전남대학교</td>
              <td>소프트웨어전공</td>
              <td>2022-02-02 ~ 2026-02-02</td>
              <td>졸업</td>
              <td>4.4/4.5</td>
            </tr>
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
              <td>스마트인재개발원</td>
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
              <td>SQLD</td>
              <td>한국데이터산업진흥원</td>
              <td>2022-02-02</td>
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
