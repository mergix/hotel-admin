import React from "react";
import axios from 'axios';
import styles from "./page.module.css";
import Image from "next/image";


async function getData(id) {
    const res = await axios.get(`http://localhost:5279/room/${id}`, 
    { withCredentials:true });
    
    if (!res.data) {
      console.log("bad")
    }
   
    return res.data;
  }


  const HomePage = async ({params}) =>{

    // const data = getData(params.id);
    return(
        <div className={styles.container}>
            <h1> Home Page</h1>
            <div className={styles.infoContainer}>
            <div className={styles.imgContainer}>
            <Image  alt="" src={""} fill={true} />
            </div>
            <div className={styles.textContainer}>
                <div>
            <h1>Room Name</h1>
            <p>Room No</p>
                </div>
                <p>Price</p>
                <div>
                <p>Duration Selcector:</p>
                </div>
                <div>
                    buttons
                </div>
                <div>
                    room description
                </div>
            </div>
            </div>
        </div>
    );
}

export default HomePage;