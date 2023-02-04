import React from 'react'
import styles from "./list-books.module.css"
import Dummy1 from "../../public/assets/book1.png"
import Image from 'next/image'

const ListBooks: React.FC = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.left}>
            <Image src={Dummy1} alt='simple dummy books' style={{ width: "100%", height: "100%"}} />
          </div>
          <div className={styles.right}>
            description
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.left}>
            <Image src={Dummy1} alt='simple dummy books' style={{ width: "100%", height: "100%"}} />
          </div>
          <div className={styles.right}>
            description
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.left}>
            <Image src={Dummy1} alt='simple dummy books' style={{ width: "100%", height: "100%"}} />
          </div>
          <div className={styles.right}>
            description
          </div>
        </div>
      </div>
    </>
  )
}

export default ListBooks
