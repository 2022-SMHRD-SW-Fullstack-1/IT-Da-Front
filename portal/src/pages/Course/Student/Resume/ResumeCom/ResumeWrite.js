import axios from 'axios'
import React, { useState } from 'react'
import UploadBtn from '../../../../../components/file/UploadBtn'

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

  const [edit_style_po, setEdit_style_po] = useState({ display: "" })
  const [edit_style_op, setEdit_style_op] = useState({ display: "none" })

      // 수정 클릭 시
      const edit_e_button = () => {
        setEdit_style_po({ display: "none" })
        setEdit_style_op({ display: "" })
    }

    const edit_e_button_quit = () => {
        setEdit_style_po({ display: "" })
        setEdit_style_op({ display: "none" })
        btnSave()
    }

    return (

        <div className='r_basic'>
            <div className='photoDiv'>
                <img className='r_photo' src={resume.photo}/>
                <UploadBtn btn_text={"수정"} file_name={resume.photo}/>
            </div>

            <div>
                <div>
                    <p ><input style={edit_style_op} type='text' name='name' onChange={(e) => { setResume({ ...resume, name: e.target.value }) }}
                        value={resume.name} />
                            <span style={edit_style_po}>{resume.name}</span>
                        </p>
                    <p><input style={edit_style_op} type='text' name='gender' className='crPosition' onChange={(e) => { setResume({ ...resume, gender: e.target.value }) }}
                        value={resume.gender} />
                            <span style={edit_style_po}>{resume.gender}</span>
                        /
                        <input style={edit_style_op} type='text' name='birthday' className='crPosition' onChange={(e) => { setResume({ ...resume, birthday: e.target.value }) }}
                        value={resume.birthday} />
                            <span style={edit_style_po}>{resume.birthday}</span>
                        </p>
                </div>
                <div>
                    <div>
                        <p>연락처</p>
                        <p><input style={edit_style_op} type='text' name='phone' onChange={(e) => { setResume({ ...resume, phone: e.target.value.replace(/[^0-9]/g, "") }); }}
                            value={resume.phone} />
                            <span style={edit_style_po}>{resume.phone}</span>
                            <span style={edit_style_po}>{resume.phone}</span>
                            </p>
                    </div>
                    <div>
                        <p>이메일</p>
                        <p><input style={edit_style_op} type='text' name='email' onChange={(e) => { setResume({ ...resume, email: e.target.value }); }}
                            value={resume.email} />
                            <span style={edit_style_po}>{resume.email}</span>
                            </p>
                    </div>
                    <div>
                        <p>주소</p>
                        <p><input style={edit_style_op} type='text' name='addr' onChange={(e) => { setResume({ ...resume, addr: e.target.value }); }}
                            value={resume.addr} />
                            <span style={edit_style_po}>{resume.addr}</span>
                            </p>
                    </div>
                    <div>
                        <p>전공</p>
                        <p><input style={edit_style_op} type='text' name='major' onChange={(e) => { setResume({ ...resume, major: e.target.value }); }}
                            value={resume.major} />
                            <span style={edit_style_po}>{resume.major}</span>
                            </p>
                    </div>
                    <div>
                        <p>희망지역</p>
                        <p><select style={edit_style_op} name='wish_area1' onChange={(e) => { setResume({ ...resume, wish_area1: e.target.value }) }} >
                            {areaList.map((area) => (
                                <option value={area} key={1 + area}>
                                    {area}
                                </option>
                            ))}
                        </select>
                            <span style={edit_style_po}>{resume.wish_area1}</span>
                            <select style={edit_style_op} name='wish_area2' onChange={(e) => { setResume({ ...resume, wish_area2: e.target.value }) }} >
                                {areaList.map((area) => (
                                    <option value={area} key={2 + area}>
                                        {area}
                                    </option>
                                ))}
                            </select>
                                <span style={edit_style_po}>{resume.wish_area2}</span>
                            <select style={edit_style_op} name='wish_area3' onChange={(e) => { setResume({ ...resume, wish_area3: e.target.value }) }} >
                                {areaList.map((area) => (
                                    <option value={area} key={3 + area}>
                                        {area}
                                    </option>
                                ))}
                            </select>
                                <span style={edit_style_po}>{resume.wish_area3}</span>
                                </p>
                    </div>
                    <div>
                        <p>희망연봉</p>
                        <p><input style={edit_style_op} type='text' name='wish_salary' onChange={(e) => { setResume({ ...resume, wish_salary: e.target.value }); }}
                            value={resume.wish_salary} />
                                <span style={edit_style_po}>{resume.wish_salary}</span>
                            </p>
                    </div>
                    <div>
                        <p>희망분야</p>
                        <p><input style={edit_style_op} type='text' name='wish_field' onChange={(e) => { setResume({ ...resume, wish_field: e.target.value }); }}
                            value={resume.wish_field} />
                                <span style={edit_style_po}>{resume.wish_field}</span>
                            </p>
                    </div>
                </div>
                <div>
                    <div>
                        <p>기술스택</p>
                        <p><input style={edit_style_op} type='text' name='skills' className='big_input_text' onChange={(e) => { setResume({ ...resume, skills: e.target.value }); }}
                            value={resume.skills}/>
                                <span style={edit_style_po}>{resume.skills}</span>
                        </p>
                    </div>
                </div>
                <div className='sRBtnDiv'>
                    <button style={edit_style_po} onClick={edit_e_button} >수정하기</button>
                    <button style={edit_style_op} onClick={edit_e_button_quit} >저장하기</button>
                </div>
            </div>
        </div>
    )
}

export default ResumeWrite