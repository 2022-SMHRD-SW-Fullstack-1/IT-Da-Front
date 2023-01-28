import React, { useEffect, useState, useRef, useCallback } from 'react'
import axios from "axios"

const M_e_list = (props) => {


  const [enter_pw, setEnter_pw] = useState("")
  const [enter_manager, setEnter_manager] = useState("")
  const [enter_tel, setEnter_tel] = useState("")
  const [enter_address, setEnter_address] = useState("")

  const onEnter_pw = e => {
    setEnter_pw(e.target.value)
  }
  const onEnter_manager = e => {
    setEnter_manager(e.target.value)
  }
  const onEnter_tel = e => {
    setEnter_tel(e.target.value)
  }
  const onEnter_address = e => {
    setEnter_address(e.target.value)
  }

  const [edit_style_po, setEdit_style_po] = useState({ display: "" })
  const [edit_style_op, setEdit_style_op] = useState({ display: "none" })

  // 기업수정 제출
  const edit_e_submit = (e) => {
    e.preventDefault();
    axios
      .post("/enterprise/edit_enterprise", {
        enter_id: props.item.enter_id,
        enter_pw: enter_pw,
        enter_manager: enter_manager,
        enter_tel: enter_tel,
        enter_address: enter_address
      }).then(function (res) {
        alert("기업 수정완료")
        window.location.reload()
      }).catch(function (err) {
        console.log("실패")
      })
  }

  // 기업제거
  const delete_e_submit = e => {
    e.preventDefault();
    if (window.confirm("삭제하시겠습니까?")) {


      axios
        .post("/enterprise/delete_enterprise", {
          enter_num: props.item.enter_num
        }).then(function (res) {
          alert("기업키 제거완료")
          window.location.reload()
        }).catch(function (err) {
          console.log("실패")
        })
    } else {
      alert("삭제취소");
    }
  }

  // 수정 클릭 시
  const edit_e_button = () => {
    setEdit_style_po({ display: "none" })
    setEdit_style_op({ display: "" })
  }

  const edit_e_button_quit = () => {
    setEdit_style_po({ display: "" })
    setEdit_style_op({ display: "none" })
  }

  return (
    <tr>
      <td>{props.item.enter_name}</td>

      <td>{props.item.enter_id}</td>

      <td style={edit_style_po} className='e_name'>{props.item.enter_pw}</td>
      <td style={edit_style_op} className='e_name'><input type='text' value={enter_pw} onChange={onEnter_pw} placeholder={props.item.enter_pw}></input></td>

      <td style={edit_style_po} className='e_name'>{props.item.enter_manager}</td>
      <td style={edit_style_op} className='e_name'><input type='text' value={enter_manager} onChange={onEnter_manager} placeholder={props.item.enter_manager}></input></td>

      <td style={edit_style_po} className='e_name'>{props.item.enter_tel}</td>
      <td style={edit_style_op} className='e_name'><input type='text' value={enter_tel} onChange={onEnter_tel} placeholder={props.item.enter_tel}></input></td>

      <td style={edit_style_po} className='e_name'>{props.item.enter_address}</td>
      <td style={edit_style_op} className='e_name'><input type='text' value={enter_address} onChange={onEnter_address} placeholder={props.item.enter_address}></input></td>      

      <td>{props.item.enter_num}</td>
      
      <td style={edit_style_po}><div className='content annViewButton'><button onClick={edit_e_button}>수정하기</button><button onClick={delete_e_submit}>삭제하기</button></div></td>
      <td style={edit_style_op}><div className='content annViewButton'><button onClick={edit_e_submit}>수정완료</button><button onClick={edit_e_button_quit}>취소하기</button></div></td>
    </tr>
  )
}

export default M_e_list