"use client";
import React from 'react'
import { useState } from 'react';
import styles from "./page.module.css";
import Link from 'next/link'
import Button from "../../components/button/Button"
import RoomCard from "../../components/roomCard/RoomCard"
import axios from 'axios';



// async function getData() {
//   const res = await axios.get('http://localhost:5279/allRooms', 
//   { withCredentials:true });
  
//   if (!res.data) {
//     console.log("bad")
//   }
 
//   return res.data;
// }


 async function  Rooms() {


const [file, setFile] = useState();

const handleFileChange = (e) => {
  if (e.target.files) {
    setFile(e.target.files[0]);
  }
};

  // const data = getData();
 
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
    <label for="pet-select">Choose a Room Type:</label>

<select name="pets" id="pet-select">
  <option value="">--Please choose an option--</option>
  <option value="dog">Dog</option>
</select>
        <input type='text' placeholder='number' className={styles.input}/>
        <input type='text' placeholder='roomName' className={styles.input}/>
        <input type='text' placeholder='cost' className={styles.input}/>
        <textarea 
        className={styles.textArea} 
        placeholder='description'
        cols="30"
        rows="10"
        />

        <button className={styles.button}>
          Send
        </button>
        </form>
  </div>
  )
}
export default Rooms