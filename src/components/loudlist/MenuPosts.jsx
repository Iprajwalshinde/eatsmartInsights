import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./menuPosts.module.css"

const MenuPosts = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link href="" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Spices</span>
          <h3 className={styles.postTitle}>
            Ban on MDH and Everest spices due to the alleged presence of
            pesticide 'ethylene oxide' beyond permissible limits.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Joseph Gonzalez</span>
            <span className={styles.date}> - 04.05.2024</span>
          </div>
        </div>
      </Link>
      <Link href="" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p2.jpg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.culture}`}>
            Newborn
          </span>
          <h3 className={styles.postTitle}>
            Nestlé's recent update reveals the addition of 3 grams of sugar in
            each serving of Cerelac sold in India.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Olivia Smith</span>
            <span className={styles.date}> - 10.05.2024</span>
          </div>
        </div>
      </Link>
      <Link href="" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p3.jpg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.food}`}>Adventure</span>
          <h3 className={styles.postTitle}>
            Swiss Military announces plans to invest Rs 56.5 crore in
            establishing a new manufacturing unit in Haryana.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Noah Williams</span>
            <span className={styles.date}> - 20.05.2024</span>
          </div>
        </div>
      </Link>
      <Link href="" className={styles.item}>
        {withImage && (
          <div className={styles.imageContainer}>
            <Image src="/p4.jpg" alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>
            Fashion
          </span>
          <h3 className={styles.postTitle}>
            The Indian diamond jewelry market is projected to reach a value of
            US$ 17 billion by 2031.
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Emma Brown</span>
            <span className={styles.date}> - 25.05.2024</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
