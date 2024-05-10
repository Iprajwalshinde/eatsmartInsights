import React from "react";
import styles from "./menu.module.css";
import MenuPosts from "../loudlist/MenuPosts";


const Menu = () => {
  return (
    <div className={styles.container}>

      <h2 className={styles.subtitle}>{"What's hot"}</h2>
      <h1 className={styles.title}>Most loud</h1>
      <MenuPosts withImage={true} />
    </div>
  );
};

export default Menu;
