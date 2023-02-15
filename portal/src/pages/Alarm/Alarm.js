import React, { useState, useEffect } from 'react';
import axios from "axios"
import ToastContainer from 'react-bootstrap/ToastContainer';
import Alarm_list from './Alarm_list';

import '../../css/alarm.css'

function Alarm() {

  const [newAlarm, setNewAlarm] = useState([])

  useEffect(() => {
    axios
      .get("/alarm/selectNewAlarm",
        {
          params: {
            mb_id_to: window.sessionStorage.getItem("loginId")
          }
        })
      .then(function (res) {
        setNewAlarm(res.data)
        console.log(res.data)
      })
      .catch(function (error) {
        console.log("error")
      })
  }, [])

  const newAlarmList =
    newAlarm.map((item) => <Alarm_list newAlarm={newAlarm} setNewAlarm={setNewAlarm} item={item} key={item.alarm_num} />)

  return (
    <div className='alarmPosition'>
      <ToastContainer autoclose={3000}>
        {newAlarmList}
      </ToastContainer>
    </div>
  );
}

export default Alarm