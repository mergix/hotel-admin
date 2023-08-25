import React, { use } from 'react'
import styles from "./roomcard.module.css"
import Image from 'next/image'
import Link from 'next/link'
export default function RoomCard  ({link,img,No,title,desc,status}) {
  return (
    <div className={styles.card} suppressHydrationWarning={true}>
    <Link href={link} className={styles.item}>
    <Image alt="" src={img} fill={true} className="img" />
    <p className={styles.span}>{No}</p>
    </Link>
    <div className={styles.info}>
    <h1>{title}</h1>
    <p>{desc}</p>
    <p>{status}</p>
    </div>
    </div>
  )
}
