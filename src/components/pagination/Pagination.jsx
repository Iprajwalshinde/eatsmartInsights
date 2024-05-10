// pagination.js
import React from "react";
import styles from "./pagination.module.css";
import Link from "next/link";

const Pagination = ({ page, hasPrev, hasNext }) => {
  return (
    <div className={styles.container}>
      {hasPrev && (
        <Link href={`?page=${page - 1}`} passHref>
          <button className={styles.button}>Previous</button>
        </Link>
      )}
      {hasNext && (
        <Link href={`?page=${page + 1}`} passHref>
          <button className={styles.button}>Next</button>
        </Link>
      )}
    </div>
  );
};

export default Pagination;
