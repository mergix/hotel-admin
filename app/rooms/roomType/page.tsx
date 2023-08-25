"use client";
import React from 'react'
import { useState, useEffect } from 'react';
import styles from "./page.module.css";
import Image from "next/image";
import Link from 'next/link'
import axios from 'axios';



// async function getData() {
//   const res = await axios.get('http://localhost:5279/allRooms', 
//   { withCredentials:true });
  
//   if (!res.data) {
//     console.log("bad")
//   }
 
//   return res.data;
// }



  function  RoomType() {

  const [file, setFile] = useState([]);

  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage));
    }
  }, [selectedImage]);

//   function imgViewer()
// {

//   var test = window.URL.createObjectURL(file[0])
//   console.log(test);
//   return test;
// }

// const handleChange = (file) => {
//   const input = file.currentTarget;

//   var reader = new FileReader();
//   reader.onload = function () {
//     const dataURL = reader.result;
//     console.log(dataURL);
//     console.log(input.files[0].name);
//     setImage({src: dataURL });
//   };
//   reader.readAsDataURL(input.files[0]);
// };


  // const data = getData();
 
  return (
    <div className={styles.container}>
    <h1 className={styles.title}>Room Types</h1>
    <div className={styles.grid} >
      {/* {data.then(res => res.result.map((item) => (
      <RoomCard link={`/rooms/testId`}  img={"/Img/placeholder.jpg"} No={item.roomNo} title={item.roomType.roomtypeName} desc={item.roomType.description} status={item.status} />
        )))} */}
    </div>
    <form className={styles.form}>
        <input type='text' placeholder='roomName' className={styles.input}/>
        <textarea 
        className={styles.textArea} 
        placeholder='description'
        cols="30"
        rows="10"
        />
        <input type='text' placeholder='cost' className={styles.input}/>
        <input type='file' placeholder='cost' className={styles.input} onChange={(e) => setSelectedImage(e.target.files[0])}/>
        <div className={styles.imgViewer}>
        { imageUrl && <Image src={imageUrl} alt="" height={900} width={900} layout="responsive" /> }
        </div>
        <button className={styles.button}>
          Done
        </button>
        </form>
  </div>
  )
}
export default RoomType