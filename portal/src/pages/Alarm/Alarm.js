import React, { useState, useEffect } from 'react';
import axios from "axios"
import ToastContainer from 'react-bootstrap/ToastContainer';
import Alarm_list from './Alarm_list';

import '../../css/alarm.css'

function Alarm({socket}) {

  const [newAlarm, setNewAlarm] = useState([])

  useEffect(() => {
    window.sessionStorage.getItem("role") !== null &&
    axios
      .get("/alarm/selectNewAlarm",
        {
          params: {
            mb_id_to: window.sessionStorage.getItem("loginId")
          }
        })
      .then(function (res) {
        setNewAlarm(res.data)
      })
      .catch(function (error) {
        console.log("error")
      })
  }, [])

  const newAlarmList =
    newAlarm.map((item) => <Alarm_list newAlarm={newAlarm} setNewAlarm={setNewAlarm} item={item} key={item.alarm_num} />)

  // //알림 실시간으로 띄우기
  // socket.onAlarm = function (event) {
  //   let alarm = JSON.parse(event.data);
  //   if (alarm.talker !== undefined) {
  //     let newRecentAlarm = {
  //       alarm_num: alarm.alarm_num, 
  //       mb_id_to: alarm.mb_id_to,
  //       alarm_content: alarm.alarm_content,
  //       alarm_check: alarm.alarm_check, 
  //       alarm_dt: alarm.alarm_dt, 
  //     }
  //     setNewAlarm(newAlarm.concat(newRecentAlarm))
  //     axios
  //       .post('gigwork/alert/addChatAlert', newRecentAlarm)
  //       .then(res => console.log(res))
  //       .catch(e => console.log(e));
  //   }
  // }

  return (
    <div className='alarmPosition'>
      <ToastContainer autoclose={3000}>
        {newAlarmList}
      </ToastContainer>
    </div>
  );
}

export default Alarm