import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Accordion from "react-bootstrap/Accordion";
import dateCompare from "../../utils/filter";
import "bootstrap/dist/css/bootstrap.css";
import "../../css/E_main.css";
import axios from "axios";
import uuid from "react-uuid";
import { RiStarLine } from "react-icons/ri";
import { RiStarFill } from "react-icons/ri";
import E_main_detail from "./E_main_detail";
const E_main = () => {
  //맵으로 뿌려줄 임의 데이터
  const tempList = [
    {
      photo:
        "https://news.nateimg.co.kr/orgImg/my/2022/03/30/202203301657532027_1.jpg",
      name: "차은우",
      hopeLoc: ["서울", "경기"],
      skillStack: ["자바", "코틀린", "안드로이드", "스프링"],
      cmt: "분골쇄신의 정신으로 열심히 하겠습니다어쩌구저쩌구분골쇄신의 정신으로 열심히 하겠습니다어쩌구저쩌구",
      project: [
        "취업연계를 위한 이력 정보 관리 서비스",
        "웹소켓을 활용한 초단기 알바 구인구직 플랫폼",
      ],
      updateDT: "2023-01-17",
      gender: "남자",
      age: "27세",
    },
    {
      photo:
        "https://blog.kakaocdn.net/dn/IOYEi/btq1JzPmm2w/Jn7TB4RqutJNkyeAS8K0U1/img.jpg",
      name: "아무개",
      hopeLoc: ["제주"],
      skillStack: ["자바", "코틀린", "안드로이드", "스프링"],
      cmt: "분골쇄신의 정신으로 열심히 하겠습니다어쩌구저쩌구분골쇄신의 정신으로 열심히 하겠습니다어쩌구저쩌구",
      project: [
        "취업연계를 위한 이력 정보 관리 서비스",
        "웹소켓을 활용한 초단기 알바 구인구직 플랫폼",
      ],
      updateDT: "2022-11-22",
      gender: "여자",
      age: "25세",
    },
  ];
  //필터 데이터
  const month = ["전체", , "1주일전", "1개월전", "3개월전", "6개월전"];
  const location = [
    "전체",
    "서울",
    "부산",
    "대구",
    "광주",
    "세종특별자치",
    "경기",
    "강원",
    "전남",
    "전북",
    "제주",
  ];
  const skill_stack = [
    "전체",
    "java",
    "html",
    "css",
    "react",
    "Linux",
    "android",
    "IOS",
    "swift",
  ];

  const wanted_job = [
    "전체",
    "백엔드 개발자",
    "프론트엔드 개발자",

    "안드로이드 개발자",
    "ios 개발자",
  ];
  const navigate = useNavigate();
  const [update_month, setUpdate_month] = useState("전체");
  const [hope_location, setHope_location] = useState("전체");
  const [skill, setSkill] = useState("전체");
  const [hope_job, setHope_job] = useState("전체");
  //필터링 한 후 데이터 list
  const [filterDate, setFilterData] = useState([]);
  //수강생 데이터(MAP으로 뿌릴) 초기화용
  const [simple_info, setSimple_info] = useState([
    {
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
      project: "",
      project2: "",
      update_dt: "",
    },
  ]);
  const [member_info, setMember_info] = useState([{}]);
  //기업이 누구를 북마크했는지 정보
  const [bookmark_info, setBookmark_info] = useState([]);

  //수강생 디테일 페이지로 이동
  const go_to_userdetail = (e) => {
    navigate("/detail_user", {
      //버튼 클릭시 정보를 수강생 정보를 넘겨준다
      state: {
        mb_id: e.currentTarget.getAttribute("mb_id"),
        isBookmark: bookmark_info.includes(
          e.currentTarget.getAttribute("mb_id")
        ),
        onHandleBookmark: e.currentTarget.getAttribute(onHandleBookmark),
      },
    });
  };

  //찜하기 버튼
  const onHandleBookmark = (e) => {
    //북마크 여부 확인용
    console.log(e.currentTarget.getAttribute("mb_id"));
    if (bookmark_info.includes(e.currentTarget.getAttribute("mb_id"))) {
      // bookmark가 체크 되어있을때 => bookmark 삭제
      var mb_id = e.currentTarget.getAttribute("mb_id");
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

  //업데이트 날짜 필터
  const month_change = (e) => {
    const { value } = e.target;
    setUpdate_month(value);
  };

  //희망 지역 날짜 필터
  const hope_change = (e) => {
    const { value } = e.target;
    setHope_location(value);
  };

  //기술 스택 필터
  const skill_filter = (e) => {
    const { value } = e.target;
    setSkill(value);
  };

  //희망 직무 필터
  const hope_job_filter = (e) => {
    const { value } = e.target;
    setHope_job(value);
  };

  //상세보기 필터 적용 버튼
  const button_filterclick = () => {
    setFilterData(
      simple_info.filter(
        (item) =>
          (hope_location == "전체" ||
            item.wish_area1 == hope_location ||
            item.wish_area2 == hope_location ||
            item.wish_area3 == hope_location) &&
          (skill == "전체" || item.skills.includes(skill)) &&
          (hope_job == "전체" || item.wish_field.includes(hope_job)) &&
          dateCompare(update_month, item.update_dt)
      )
    );
    console.log(skill);
    console.log(typeof (new Date() - new Date("2022-01-20")));
  };

  // 이력서 입력한 정보 /기업이 저장한 인재 북마크 데이터
  useEffect(() => {
    axios
      .get("/bookmark/select_bookmark", {
        params: { enter_id: window.sessionStorage.getItem("loginId") },
      })
      .then((res) => {
        console.log(res.data);
        console.log(res.data.resume);
        setSimple_info(res.data.resume);
        setFilterData(res.data.resume);

        setBookmark_info(res.data.bookmark);
        setMember_info(res.data.member);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  //초기화면
  useEffect(() => {
    console.log(simple_info);
  }, [simple_info]);

  /**MAP으로 보여줄 필터 데이터 */
  let listMap = filterDate.map((item) => (
    <tr key={uuid()} className="E_main_info">
      <td mb_id={item.mb_id} onClick={onHandleBookmark}>
        {bookmark_info.includes(item.mb_id) ? <RiStarFill /> : <RiStarLine />}
      </td>
      <td mb_id={item.mb_id} onClick={go_to_userdetail}>
        {item.name}
      </td>

      <td mb_id={item.mb_id} onClick={go_to_userdetail}>
        {item.addr}
      </td>
      <td mb_id={item.mb_id} onClick={go_to_userdetail}>
        {item.birthday}
      </td>
      <td mb_id={item.mb_id} onClick={go_to_userdetail}>
        {item.skills}
      </td>
      <td mb_id={item.mb_id} onClick={go_to_userdetail}>
        {item.wish_field}
      </td>
      <td mb_id={item.mb_id} onClick={go_to_userdetail}>
        {item.wish_area1},{item.wish_area2},{item.wish_area3}
      </td>
      <td>{item.update_dt}</td>
    </tr>
  ));

  return (
    <div className="E_main_page">
      <div className="big_div">
        <div className="in">수료생 프로필</div>
        <div className="E_main_detail">
          <Accordion defaultActiveKey="1" className="a">
            <Accordion.Item eventKey="1">
              <Accordion.Header>상세검색</Accordion.Header>
              <Accordion.Body className="E_main_input_detail">
                <div className="E_main_input_detail_first_div">
                  <div className="detail_inner_info">
                    <div>
                      업데이트 날짜
                      <div>
                        <select onChange={month_change}>
                          {month.map((item) => (
                            <option key={item}>{item}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="E_main_input_detail_two_div">
                      <div>희망지역</div>
                      <div>
                        <select onChange={hope_change}>
                          {location.map((item) => (
                            <option key={item}>{item}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="E_main_input_detail_three_div">
                      <div>기술스택</div>
                      <div>
                        <select onChange={skill_filter}>
                          {skill_stack.map((item) => (
                            <option key={item}>{item}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="E_main_input_detail_three_div">
                      <div>희망 직무</div>
                      <div>
                        <select onChange={hope_job_filter}>
                          {wanted_job.map((item) => (
                            <option key={item}>{item}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="filter">
                  <div
                    onClick={button_filterclick}
                    id="btn_filter"
                    className="test"
                  >
                    적용
                  </div>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <table className="t">
          <thead>
            <tr className="E_main_title">
              <th></th>
              <th>이름</th>
              <th>주소</th>
              <th>나이</th>
              <th>기술스택</th>
              <th>지원 분야</th>
              <th>희망지역</th>
              <th>업데이트 날짜</th>
            </tr>
          </thead>
          <tbody>{listMap}</tbody>
        </table>
      </div>
    </div>
  );
};
export default E_main;
