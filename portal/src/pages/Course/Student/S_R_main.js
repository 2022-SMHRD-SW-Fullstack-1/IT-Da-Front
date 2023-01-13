import SCareer from "./Resume/SCareer"
import SCertification from "./Resume/SCertification"
import SGraduation from "./Resume/SGraduation"
import SMilitary from "./Resume/SMilitary"
import SPrize from "./Resume/SPrize"
import SResume from "./Resume/SResume"
import SWishArea from "./Resume/SWishArea"
import SWishSalary from "./Resume/SWishSalary"
import "../../../css/SRMainComponent.css"

function S_R_main() {

  const resume = {
    name: '유성용',
    gender: '남',
    age: 'age',
    phone: '01011112222',
    email: 'email@naver.com',
    addr: '광주광역시 북구 용봉동',
    skills: 'Java, Kotlin',
  }

  const wishArea = {
    wishArea1: '전체',
    wishArea2: '전체',
    wishArea3: '전체',
  }

  const wishSalary = {
    wishSalary: '내규에 따름',
  }
  const graduation = {
    gradSchool: '00학교',
    schoolType: '대학원',
    gradDt: '2022.02.25',
    gradType: '휴학',
    gradScore: '2.7/4.5',
  }

  const career = {
    organization: '스인재',
    position: '대리',
    dt: '3년',
    activity: '',
  }

  const certification = {
    name: '정보처리기사',
    dt: '20230223',
    org: '산업인력공단',
  }

  const prize = {
    name: '대상',
    org: '과기부',
    dt: '20220202',
  }

  const military = {
    title:'면제',
    army:'',
    sDt:'',
    eDt:'',
    veteranYn:'X',
  }

  return (
    <div className="T_rMain">

    <div className='resumeMain'>
      
      <div>
        <SResume item={resume}/>
        <SWishArea item={wishArea} />
      </div>
      <div>
        <SWishSalary item={wishSalary} />
      </div>
      <div>
        <SGraduation item={graduation} />
        <SCareer item={career} />
      </div>
      <div>
        <SCertification item={certification} />
        <SPrize item={prize} />
        <SMilitary item={military} />
        <button>저장하기</button>
      </div>
    </div>
    </div>
  );
}

export default S_R_main;
