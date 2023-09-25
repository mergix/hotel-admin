"use client";
import React, { useState,useEffect } from 'react'
import styles from "./page.module.css"
import Select from 'react-select';
import Image from 'next/image'
import Link from 'next/link'
import {
 Dialog, DialogTitle,
  DialogContent, DialogContentText, DialogActions
} from '@mui/material'
import Calendar from '../../../components/calendar/index';
import axios from 'axios';

function Bookings() {

  const [option, setOption] = useState(null);
  const [room, setRoom] = useState(null);
  const [open, setOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [viewImageUrl, setViewImageUrl] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const handleOpen = () => {
    setOpen(true);
    console.log("works")
  };

  const handleClose = () => {
    setOpen(false);
  };

  const pick = (item) => {
    setRoom(item.roomPicture);
     setSelectedImage(item.roomPicture);
     console.log("works")
  };

   function getData() {
    const res =  axios.get('https://localhost:7043/allRooms', 
    { withCredentials:true });
    
    if (!res.data) {
      console.log("bad")
    }
   
    return res.data;
  }

  const data = getData();

    useEffect(() => {
      if (selectedImage) {
        setViewImageUrl(URL.createObjectURL(selectedImage));
        setImageUrl(selectedImage);
        console.log(imageUrl)
      }
    }, [selectedImage]);


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
    <form className={styles.form}>

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

        {data.then(res => res.result.map((item) => (
          <div className={styles.card} suppressHydrationWarning={true}>
    <div onClick={(e) => pick(item)} className={styles.item}>
    <Image alt="" src={"data:image/jpg;base64,"+ item.roomPicture+""} fill={true} className="img" />
    <p className={styles.span}>{"Number"}</p>
    </div>
    <div className={styles.info}>
    <h1>{"title"}</h1>
    <p>{"desc"}</p>
    <p>{"status"}</p>
    </div>
    </div>
        )))}
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
<Calendar/>

<Calendar/>
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