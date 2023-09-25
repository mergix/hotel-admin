"use client";
import React from 'react'
import { useState ,useEffect } from 'react';
import styles from "./page.module.css"

function Users() {

  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetch('https://localhost:7043/api/User')
    .then((res) => res.json())
    .then((data) => {
      setUserList(data.result)
      console.log(data)
      // setLoading(false)
    });
  }, []);




 
  return (
    <>
    <div className={styles.container}>
    <h1 className={styles.title}>Users</h1>
    {/* <Button text={"Create New Room Type"} url={"/rooms/roomType"}/> */}
    <h1 className={styles.title}>Recent Users</h1>
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
      {userList.map(p=> (
        
        <tr className={styles.tableRow}>
        <td className={styles.tableDiv}>{p.firstName}</td>
        <td className={styles.tableDiv}>{p.lastName}</td>
        <td className={styles.tableDiv}>{p.userEmail}</td>
        <td className={styles.tableDiv}>{p.lastModified}</td>
        <td className={styles.tableDiv}>{p.address}</td>
        <td className={styles.tableDiv}>{p.phoneNo}</td>
        <td className={styles.tableButton}>Button view</td>
        
  </tr>
      ))}

    </tbody>
  </table>
    </div>
  </div>
  </>
  )
}

export default Users