import Image from "next/image";
import React from "react";
import styles from "./page.module.css";


export default function HomePage(){
    return(
        <div className={styles.container}>
            <div className={styles.banner}>
            <Image src={"/Img/placeholder.jpg"} className={styles.bannerImg} fill={true}  alt="homeBanner"/>
            <div className={styles.bannerText}>
           <h1 className={styles.title}>Welcome to hotel</h1>
           <p className={styles.desc}> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
           <button className={styles.button}>Check out our rooms.</button>
            </div>
            </div>
        </div>
    );
}