"use client";
import React from 'react'
import { useState ,useEffect } from 'react';
import styles from "./page.module.css";
import Link from 'next/link'
import Button from "../../../components/button/Button"
import RoomCard from "../../../components/roomCard/RoomCard"
import axios from 'axios';









function  Rooms() {

  const [option, setOption] = useState(null);
  const [roomNumber, setroomNumber] = useState(null);
  const [statusB, setStatus] = useState(null);
  const [selectList, setSelectList] = useState([]);
  const [roomList, setRoomList] = useState([]);

  const category = ["test2","43343"];
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  // <Select
  // value={option}
  // onChange={(e) => setOption(e)}
  // isMulti
  // className=''
  // options={options}
  // />

    useEffect(() => {
      fetch('https://localhost:7043/allRoomTypes')
      .then((res) => res.json())
      .then((data) => {
        setSelectList(data.result)
        console.log(data)
        // setLoading(false)
      });

      fetch('https://localhost:7043/allRooms')
      .then((res) => res.json())
      .then((data) => {
        setRoomList(data.result)
        console.log(data)
        // setLoading(false)
      });
    }, []);



    const create = e =>{
      e.preventDefault();  
     axios.post('https://localhost:7043/CreateRoom', 
     {roomNo:roomNumber,
      roomTypeName:option,
      status:statusB
      }).then(res => {
      console.log(res.data)
     }).catch(err => console.log(err))
    }




 
  return (
    <div className={styles.container}>
    <h1 className={styles.title}>Rooms</h1>
    <Button text={"Create New Room Type"} url={"/rooms/roomType"}/>
    <h1 className={styles.title}>Recent Rooms</h1>
    <div className={styles.grid} >
      {roomList.map((item) => (
      <RoomCard link={`/rooms/testId`}  img={"/Img/placeholder.jpg"} No={item.roomNo} title={item.roomType.roomtypeName} desc={item.roomType.description} status={item.status} />
        ))}
    </div>
    <h1 className={styles.title}>Create New a Room</h1>
    <form className={styles.form} onSubmit={create}>
    {/* <label for="">Choose a Room Type:</label> */}
    <select 
          value={"roomType"}
          onChange={(e) => setOption(e.target.value)}
         >
          <option value="">Select</option>
          {selectList && selectList.map((option: any) => (
           <option key={option.id} 
            value={option.roomtypeName}
           >
          {option.roomtypeName}
          </option>
        ))}
       </select>
        <input type='number'
        min="1"
        max="999"
        placeholder='number' 
        className={styles.input}
        onChange={(e) => setroomNumber(parseInt(e.target.value))}
        required/>
        <fieldset>
  <legend>Room Status:</legend>
  <div>
    <input type="radio" id="huey" name="drone" value={0} onChange={(e) => setStatus(parseInt(e.target.value))} />
    <label>Available</label>
  </div>

  <div>
    <input type="radio" id="dewey" name="drone" value={1} onChange={(e) => setStatus(parseInt(e.target.value))}/>
    <label>Booked</label>
  </div>
</fieldset>
<button className={styles.Button}>
        Create
        </button>
        </form>
  </div>
  )
}
export default Rooms