"use client";
import React from 'react'
import { useState ,useEffect } from 'react';
import styles from "./page.module.css";
import Link from 'next/link'
import Button from "../../components/button/Button"
import RoomCard from "../../components/roomCard/RoomCard"
import axios from 'axios';









function  Rooms() {
    useEffect(() => {
      fetch('https://localhost:7043/allRoomTypes')
      .then((res) => res.json())
      .then((data) => {
        setList(data.result)
        console.log(data)
        // setLoading(false)
      })
    }, []);


  const [option, setOption] = useState(null);
  const [roomNumber, setroomNumber] = useState(null);
  const [status, setStatus] = useState(null);
  const [list, setList] = useState(null);



 
  return (
    <div className={styles.container}>
    <h1 className={styles.title}>Rooms</h1>
    <Button text={"Create New Room Type"} url={"/rooms/roomType"}/>
    <h1 className={styles.title}>Recent Rooms</h1>
    <div className={styles.grid} >
      {/* {data.then(res => res.result.map((item) => (
      <RoomCard link={`/rooms/testId`}  img={"/Img/placeholder.jpg"} No={item.roomNo} title={item.roomType.roomtypeName} desc={item.roomType.description} status={item.status} />
        )))} */}
    </div>
    <h1 className={styles.title}>Create New a Room</h1>
    <form className={styles.form}>
    {/* <label for="">Choose a Room Type:</label> */}
    <select 
          value={"roomType"}
          onChange={(e) => setOption(e.target.value)}
         >
          <option value="">Select</option>
          {list && list.map((option: any) => (
           <option key={option.id} 
            value={option.roomtypeName}
           >
          {option.roomtypeName}
          </option>
        ))}
       </select>
        <input type='text'
        minLength={1}
        maxLength={3}
        placeholder='number' 
        className={styles.input}
        onChange={(e) => setroomNumber(e.target.value)}/>
        <fieldset>
  <legend>Room Status:</legend>
  <div>
    <input type="radio" id="huey" name="drone" value="huey"  />
    <label>Available</label>
  </div>

  <div>
    <input type="radio" id="dewey" name="drone" value="dewey" />
    <label>Booked</label>
  </div>
</fieldset>
 <Button text={"Create"} url={"/test"}/>
        </form>
  </div>
  )
}
export default Rooms