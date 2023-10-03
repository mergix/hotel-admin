"use client";
import React, { useState,useEffect } from 'react'
import styles from "./page.module.css"
import Select from 'react-select';
import Image from 'next/image'
import Link from 'next/link'
import {
 Dialog, DialogTitle,
  DialogContent, DialogActions
} from '@mui/material'
import Calendar from '../../../components/calendar/index';
import Calender2 from '../../../components/calender2/index';
import axios from 'axios';
import Calendar2 from '../../../components/calender2/index';

function Bookings() {

  const [option, setOption] = useState(null);
  const [room, setRoom] = useState(null);
  const [roomList, setRoomList] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [viewImageUrl, setViewImageUrl] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  // function getData() {
  //   const res =   axios.get('http://localhost:5279/allRooms');


    
  //   if (!res) {
  //     console.log("bad")
  //   }
   
  //   return res;
  // }
  
  const handleOpen = () => {
    setOpen(true);

  };

  const handleClose = () => {
    setOpen(false);
    console.log("works")
  };

  const pick = (item) => {
     setRoom(item.id);
     setSelectedImage(item.roomType.roomPicture);
     console.log(room)
    handleClose();
  };


  
  useEffect(() => {
    fetch(`http://localhost:5279/allRooms`)
    .then(res =>{
      return res.json()
    }).then(
      data => {
        setRoomList(data.result)
        console.log(roomList)
      }
    ).catch(err => console.log(err))
  },[])
  
  useEffect(() => {
    if (selectedImage) {
      setViewImageUrl("data:image/jpg;base64,"+ selectedImage+"");
      setImageUrl(selectedImage);
      console.log(imageUrl)
    }
  }, [selectedImage]);
  // const data = getData();


  const create = e =>{
    e.preventDefault();  
   axios.post('https://localhost:7043/api/Booking', 
   {
    "dateIn": localStorage.getItem("startTime"),
    "dateOut": localStorage.getItem("endTime"),
    "roomid": room,
    "userid": "f1e03bc6-2f4d-4ee1-aa7e-e127535452a6"
    }).then(res => {
    console.log(res.data)
   }).catch(err => console.log(err))
  }



  return (
    <>
    <div className={styles.container}>
    <h1 className={styles.title}>Bookings</h1>
    {/* <Button text={"Create a new  Booking"} url={"/rooms/roomType"}/> */}
    <h1 className={styles.title}>Recent Bookings</h1>
    <div className={styles.grid} >
 <table className={styles.table} >
  <thead>
    <tr className={styles.tableHeader}>
      <th className={styles.tableHeaderText}>First name</th>
      <th className={styles.tableHeaderText}>Last name</th>
      <th className={styles.tableHeaderText}>E-mail</th>
      <th className={styles.tableHeaderText}>Last Modified</th>
      <th className={styles.tableHeaderText}>Address</th>
      <th className={styles.tableHeaderText}>Phone No</th>
    </tr>
  </thead>
  <tbody>
        <tr className={styles.tableRow}>
        <td className={styles.tableDiv}>test</td>
        <td className={styles.tableDiv}>test</td>
        <td className={styles.tableDiv}>test</td>
        <td className={styles.tableDiv}>test</td>
        <td className={styles.tableDiv}>test</td>
        <td className={styles.tableDiv}>test</td>
        <td className={styles.tableButton}>Button view</td>
        </tr>
    </tbody>
  </table>
    </div>

    <h1 className={styles.title}>Create New a Booking</h1>
    <form className={styles.form} onSubmit={create}>

<div>

</div>

<div className={styles.formContainer}>
<div className={styles.formPicker}>
{/* <input type='file'
         placeholder='cost'
          className={styles.input}
           onChange={(e) => setSelectedImage(e.target.files[0])}/> */}
           <button  type='button' onClick={handleOpen}>
        Select Room
      </button>
        <Dialog
        open={open}
        onClose={handleClose}
        maxWidth={"sm"}
      >
        <DialogTitle>
          {"Pick a Room"}
        </DialogTitle>
        <DialogContent >
        <div className={styles.grid} >

        {/* {data.then(res => res.result.map((item) => (
          <div onClick={() => pick(item)} className={styles.card} suppressHydrationWarning={true}>
    <div  className={styles.item}>
    <Image alt="" src={"data:image/jpg;base64,"+ item.roomType.roomPicture+""} fill={true} className="img" />
    <p className={styles.span}>{item.roomNo}</p>
    </div>
    <div className={styles.info}>
    <h1>{"title"}</h1>
    <p>{"desc"}</p>
    <p>{"status"}</p>
    </div>
    </div>
        )))} */}

{roomList.map((item) => (
          <div onClick={() => pick(item)} className={styles.card} suppressHydrationWarning={true}>
    <div  className={styles.item}>
    <Image alt="" src={"data:image/jpg;base64,"+ item.roomType.roomPicture+""} fill={true} className="img" />
    <p className={styles.span}>{item.roomNo}</p>
    </div>
    <div className={styles.info}>
    <h1>{"title"}</h1>
    <p>{"desc"}</p>
    <p>{"status"}</p>
    </div>
    </div>
        ))}
        </div>
        </DialogContent>
        <DialogActions>
          <button type='button' onClick={handleClose}>Close</button>
        </DialogActions>
      </Dialog>
<div className={styles.imgViewer}>
        { imageUrl && <Image src={viewImageUrl} alt="" fill={true} /> }
</div>

</div>
<div className={styles.formCalender}>
<Calendar />

<Calendar2/>
</div>

</div>


<button className={styles.Button}>
        Create Booking
        </button>
        </form>
  </div>
  </>
  )
}

export default Bookings