import Image from "next/image";
import React from "react";
import { getServerSession } from "next-auth";
import { options } from "./api/auth/[...nextauth]/options";
import styles from "./page.module.css";
import { redirect } from "next/navigation"


export default async function HomePage(){
    const session = await getServerSession(options)

    if (!session) {
        redirect('/api/auth/signin?callbackUrl=/')
    }
    return(
        <>
            {session ? (<div className={styles.container}>
            <div className={styles.banner}>
            <Image src={"/Img/placeholder.jpg"} className={styles.bannerImg} fill={true}  alt="homeBanner"/>
            <div className={styles.bannerText}>
           <h1 className={styles.title}>Welcome to hotel</h1>
           <p className={styles.desc}> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
           <button className={styles.button}>Check out our rooms.</button>
            </div>
            </div>
        </div>):(
            <div className={styles.container}>
            <div className={styles.banner}>
            <Image src={"/Img/placeholder.jpg"} className={styles.bannerImg} fill={true}  alt="homeBanner"/>
            <div className={styles.bannerText}>
           <h1 className={styles.title}>you are not  welcome to  the hotel</h1>
           <p className={styles.desc}> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
           <button className={styles.button}>Check out our rooms.</button>
            </div>
            </div>
        </div>
        )}
        </>
    );
}