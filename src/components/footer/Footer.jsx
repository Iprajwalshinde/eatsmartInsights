import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image
            src="/eatsmartlogo.png"
            alt="eatsmart"
            width={50}
            height={35}
          />
          <h1 className={styles.logoText}>Eatsmart</h1>
        </div>
        <p className={styles.desc}>
          At EatSmart, we're committed to empowering individuals on their
          journey to healthier living. Our mission is to provide reliable
          information, practical tips, and delicious recipes to help you make
          informed choices about your health and wellness. Whether you're
          looking to improve your nutrition, boost your fitness routine, or
          enhance your overall well-being, we're here to support you every step
          of the way. Join our community today and let's thrive together!
        </p>
        <div className={styles.icons}>
          <Image src="/facebook.png" alt="" width={18} height={18} />
          <Image src="/instagram.png" alt="" width={18} height={18} />
          <Image src="/tiktok.png" alt="" width={18} height={18} />
          <Image src="/youtube.png" alt="" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <a href="/">Homepage</a>
          <a href="https://eatsmart2024.wixsite.com/eatsmartlive/blog">Blog</a>
          <a href="https://eatsmart2024.wixsite.com/eatsmartlive/blank-1">
            About
          </a>
          <a href="https://eatsmart2024.wixsite.com/eatsmartlive/blank-2">
            Contact
          </a>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <a href="https://eatsmart2024.wixsite.com/eatsmartlive/blog">
            Latest
          </a>
          <a href="https://eatsmart2024.wixsite.com/eatsmartlive/post/alternative-options-for-common-unhealthy-foods">
            Popular
          </a>
          <a href="https://eatsmart2024.wixsite.com/eatsmartlive/post/tips-for-incorporating-healthy-eating-habits-into-your-routine">
            Health tips
          </a>
          <a href="https://eatsmart2024.wixsite.com/eatsmartlive/post/the-importance-of-a-balanced-diet">
            Wellbeing
          </a>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <a href="/">Facebook</a>
          <a href="/">Instagram</a>
          <a href="/">Tiktok</a>
          <a href="/">Youtube</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
