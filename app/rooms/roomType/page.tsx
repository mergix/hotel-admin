"use client";
import React from 'react'
import { useState, useEffect } from 'react';
import styles from "./page.module.css";
import RoomCard from '../../../components/roomCard/RoomCard';
import Button from '../../../components/button/Button';
import Image from "next/image";
import Link from 'next/link'
import axios from 'axios';



async function getData() {
  const res = await axios.get('http://localhost:5279/allRoomTypes', 
  { withCredentials:true });
  
  if (!res.data) {
    console.log("bad")
  }
 
  return res.data;
}



  function  RoomType() {

  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [viewImageUrl, setViewImageUrl] = useState(null);
  const [roomName, setRoomName] = useState(null);
  const [description, setDescription] = useState(null);
  const [cost, setCost] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      setViewImageUrl(URL.createObjectURL(selectedImage));
      setImageUrl(selectedImage);
      console.log(imageUrl)
    }
  }, [selectedImage]);


  const data = getData();

  const create = e =>{
    e.preventDefault();

    let roomTypeObj = JSON.stringify({
        roomtypeName:roomName,
        cost:cost,
        description:description
  });


  let formData = new FormData();

formData.append("file", imageUrl);
formData.append("roomType", roomTypeObj);



   axios.post('https://localhost:7043/CreateRoomType', formData,{
    headers: {
      'Content-Type': "multipart/form-data",
    }
  }).then(res => {
    console.log(res.data)
   }).catch(err => console.log(err))
  }
 
  return (
    <div className={styles.container}>
    <h1 className={styles.title}>Room Types</h1>
    <h1 className={styles.title}>Latest Created</h1>
    <div className={styles.grid} >
    {data.then(res => res.result.map((item) => (
      <RoomCard link={`/rooms/testId`}  img={"data:image/jpg;base64,"+ item.roomPicture+""} No={item.cost} title={item.roomtypeName} desc={item.description} status={item.lastModified} />
        )))}
    </div>
    <h1 className={styles.title}>Create a new Room Type</h1>
    <form className={styles.form} onSubmit={create}>
    <div className={styles.formContainer}>
      <div className={styles.formText}>
        <input type='text'
         placeholder='roomName'
          className={styles.input}
          onChange={(e) => setRoomName(e.target.value)}/>
        <textarea 
        className={styles.textArea} 
        placeholder='description'
        cols="10"
        rows="5"
        onChange={(e) => setDescription(e.target.value)}
        />
        <input type='text'
         placeholder='cost'
          className={styles.input}
          onChange={(e) => setCost(e.target.value)}/>
        <input type='file'
         placeholder='cost'
          className={styles.input}
           onChange={(e) => setSelectedImage(e.target.files[0])}/>
        </div>
        <div className={styles.imgViewer}>
        { imageUrl && <Image src={viewImageUrl} alt="" fill={true} /> }
        </div>
        </div>
        <Button text={"Create"} url={"/test"}/>
        </form>
  </div>
  )
}
export default RoomType