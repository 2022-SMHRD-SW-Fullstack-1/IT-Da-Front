import axios from 'axios'
import React from 'react'

const ResumeWrite = ({ resume, setResume }) => {
    /**지역 전체 리스트 */
    const areaList = ['전체', '서울', '부산', '대구', '인천', '광주', '대전', '울산', '경기', '강원', '충북', '충남', '전북', '전남', '경북', '경남', '제주', '해외']

    // simple_comment:'',
    // photo:'',
    // project1:'1',
    // project2:'2',

      /**저장하기 버튼 */
  const btnSave = () => {
    console.log('click')
    axios
      .post("/student/update",{
        name: resume.name,
        gender: resume.gender,
        birthday: resume.birthday,
        major: resume.major,
        phone: resume.phone,
        email: resume.email,
        addr: resume.addr,
        skills: resume.skills,
        wish_field: resume.wish_field,
        wish_salary: resume.wish_salary,
        wish_area1: resume.wish_area1,
        wish_area2: resume.wish_area2,
        wish_area3: resume.wish_area3,
        simple_comment:resume.simple_comment,
        photo:resume.photo,
        project1:resume.project1,
        project2:resume.project2,
        id: sessionStorage.getItem("loginId")
      })
      .then(res => console.log(res))
      .catch(e => console.error(e))
    console.log(resume)
  }
    return (

        <div className='r_basic'>
            <div>
                <img style={{ width: '6rem', height: '8rem', backgroundColor: 'black' }} />
            </div>

            <div>
                <div>
                    <p><input type='text' name='name' onChange={(e) => { setResume({ ...resume, name: e.target.value }) }}
                        value={resume.name} /></p>
                    <p><input type='text' name='gender' className='crPosition' onChange={(e) => { setResume({ ...resume, gender: e.target.value }) }}
                        value={resume.gender} />
                        /
                        <input type='text' name='birthday' className='crPosition' onChange={(e) => { setResume({ ...resume, birthday: e.target.value }) }}
                            value={resume.birthday} /></p>
                </div>
                <div>
                    <div>
                        <p>연락처</p>
                        <p><input type='text' name='phone' onChange={(e) => { setResume({ ...resume, phone: e.target.value.replace(/[^0-9]/g, "") }); }}
                            value={resume.phone} /></p>
                    </div>
                    <div>
                        <p>이메일</p>
                        <p><input type='text' name='email' onChange={(e) => { setResume({ ...resume, email: e.target.value }); }}
                            value={resume.email} /></p>
                    </div>
                    <div>
                        <p>주소</p>
                        <p><input type='text' name='addr' onChange={(e) => { setResume({ ...resume, addr: e.target.value }); }}
                            value={resume.addr} /></p>
                    </div>
                    <div>
                        <p>전공</p>
                        <p><input type='text' name='major' onChange={(e) => { setResume({ ...resume, major: e.target.value }); }}
                            value={resume.major} /></p>
                    </div>
                    <div>
                        <p>희망지역</p>
                        <p><select name='wish_area1' onChange={(e) => { setResume({ ...resume, wish_area1: e.target.value }) }} >
                            {areaList.map((area) => (
                                <option value={area} key={1 + area}>
                                    {area}
                                </option>
                            ))}
                        </select>
                            <select name='wish_area2' onChange={(e) => { setResume({ ...resume, wish_area2: e.target.value }) }} >
                                {areaList.map((area) => (
                                    <option value={area} key={2 + area}>
                                        {area}
                                    </option>
                                ))}
                            </select>
                            <select name='wish_area3' onChange={(e) => { setResume({ ...resume, wish_area3: e.target.value }) }} >
                                {areaList.map((area) => (
                                    <option value={area} key={3 + area}>
                                        {area}
                                    </option>
                                ))}
                            </select></p>
                    </div>
                    <div>
                        <p>희망연봉</p>
                        <p><input type='text' name='wish_salary' onChange={(e) => { setResume({ ...resume, wish_salary: e.target.value }); }}
                            value={resume.wish_salary} /></p>
                    </div>
                    <div>
                        <p>희망분야</p>
                        <p><input type='text' name='wish_field' onChange={(e) => { setResume({ ...resume, wish_field: e.target.value }); }}
                            value={resume.wish_field} /></p>
                    </div>
                </div>
                <div>
                    <div>
                        <p>기술스택</p>
                        <p><input type='text' name='skills' onChange={(e) => { setResume({ ...resume, skills: e.target.value }); }}
                            value={resume.skills}
                        /></p>
                    </div>
                </div>
                <div className='sRBtnDiv'>
                    <button onClick={btnSave} >저장하기</button>
                </div>
            </div>
        </div>
    )
}

export default ResumeWrite