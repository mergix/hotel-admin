import Link from 'next/link';
import React from 'react'
import styles from "./navbar.module.css"

const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Room",
      url: "/rooms",
    },
    {
      id: 3,
      title: "Users",
      url: "/users",
    },
    {
      id: 4,
      title: "Bookings",
      url: "/bookings",
    },
    {
      id: 5,
      title: "Dashboard",
      url: "/dashboard",
    },
        {
      id: 6,
      title: "SignUp/Register",
      url: "/login",
    },
  ];

function Navbar() {
  return (
    <div className={styles.container}>
        <Link href="/" className={styles.logo}>
        Somnia Hotel
        </Link>
        <div className={styles.links}>
        {links.map(link =>(
          <Link key={link.id} href={link.url} className={styles.link}>{link.title}</Link>
        ))}
        <button className={styles.logout}>
          Logout
        </button>
        </div>
    </div>
  )
}

export default Navbar;