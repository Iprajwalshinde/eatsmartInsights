import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Namaste!,🧑🏻</b>Your trusted community-driven platform for uncovering
        the real scoop on consumer products.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/featured.png" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Welcome to EatSmart, Get the inside scoop on what's good and what's
            not before you buy!
          </h1>
          <p className={styles.postDesc}>
            "Explore the latest global insights across a myriad of products on
            our feature page. We invite you to contribute your valuable
            experiences and findings by logging in and accessing the 'Write'
            button. Join us in fostering a community driven by shared knowledge
            and expertise."
          </p>
          <button className={styles.button}>Explore Below</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
