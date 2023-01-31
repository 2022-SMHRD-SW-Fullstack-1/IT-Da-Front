import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { RiStarLine } from "react-icons/ri";
import { RiStarFill } from "react-icons/ri";
import "../../css/E_main_detail.css";

const E_main_detail = () => {
  const { state } = useLocation();
  const [resume, setResume] = useState({
    mb_id: "",
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

  const [bookmark_info, setBookmark_info] = useState([]);

  // 인적사항, 학력, 경력/교육, 자격증, 수상내역, 병역, 기술스택 정보 백에서 가져옴
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

  useEffect(() => {
    axios
      .get("/bookmark/select_bookmark", {
        params: { enter_id: window.sessionStorage.getItem("loginId") },
      })
      .then((res) => {
        console.log(res.data);
        console.log(res.data.resume);

        setBookmark_info(res.data.bookmark);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  console.log("안녕하세요", bookmark_info);

  const onHandleBookmark = (e) => {
    //북마크 여부 확인용
    console.log("a아이디", state.mb_id);
    if (bookmark_info.includes(e.currentTarget.getAttribute("mb_id"))) {
      // bookmark가 체크 되어있을때 => bookmark 삭제
      var mb_id = state.mb_id;
      setBookmark_info(bookmark_info.filter((e) => e !== mb_id));
      axios
        .post("/bookmark/delete_bookmark", {
          enter_id: window.sessionStorage.getItem("loginId"),
          mb_id: e.currentTarget.getAttribute("mb_id"),
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      // bookmark가 체크 안되어있을때 => bookmark 추가
      setBookmark_info([
        ...bookmark_info,
        e.currentTarget.getAttribute("mb_id"),
      ]);
      axios
        .post("/bookmark/add_bookmark", {
          enter_id: window.sessionStorage.getItem("loginId"),
          mb_id: e.currentTarget.getAttribute("mb_id"),
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <div className="topDiv_resume">
      <div className="r_basic">
        <div>
          <img
            className="id_photo"
            src={`https://smhrdportal.s3.ap-northeast-2.amazonaws.com/upload/photo/${state.mb_id}/${resume.photo}`}
          ></img>
        </div>
        <div>
          <div className="e_detail_name">
            <p>{resume.name}</p>
            <p>
              {resume.gender} / {resume.birthday}
            </p>
            <div className="" onClick={onHandleBookmark}>
              {bookmark_info.includes(state.mb_id) ? (
                <RiStarFill />
              ) : (
                <RiStarLine />
              )}
            </div>
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
            {career.map((career, idx) => (
              <tr key={idx}>
                <td>
                  <p>{career.cr_organization}</p>
                </td>
                <td>
                  <p>{career.cr_position}</p>
                </td>
                <td>
                  <p>
                    {career.cr_s_dt}~{career.cr_e_dt}
                  </p>
                </td>
                <td>
                  <p>{career.activity}</p>
                </td>
              </tr>
            ))}
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
            {certification.map((certification, idx) => (
              <tr key={idx}>
                <td>
                  <p>{certification.cert_name}</p>
                </td>
                <td>
                  <p>{certification.cert_org}</p>
                </td>
                <td>
                  <p>{certification.cert_dt} </p>
                </td>
              </tr>
            ))}
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
            {prize.map((prize, idx) => (
              <tr key={idx}>
                <td>
                  <p>{prize.prize_name}</p>
                </td>
                <td>
                  <p>{prize.prize_dt} </p>
                </td>
                <td>
                  <p>{prize.prize_org}</p>
                </td>
              </tr>
            ))}
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
            {military.map((military, idx) => (
              <tr key={idx}>
                <td>
                  <p>{military.mili_title}</p>
                </td>
                <td>
                  <p>{military.mili_army}</p>
                </td>
                <td>
                  <p>
                    {military.mili_s_dt}~{military.mili_e_dt}
                  </p>
                </td>
                <td>
                  <p>{military.veteran_yn}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <p>기술스택</p>
        <div>{resume.skills}</div>
      </div>
    </div>
  );
};
export default E_main_detail;
