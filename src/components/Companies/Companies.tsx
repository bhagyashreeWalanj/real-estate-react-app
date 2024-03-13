import React from "react";
import styles from "./Companies.module.scss";

function Companies() {
  return (
    <div>
      <section className={styles.companyWrapper}>
        <div
          className={`paddings innerWidth flexCenter ${styles.companyContainer}`}
        >
          <img src="./images/prologis.png" alt="" />
          <img src="./images/tower.png" alt="" />
          <img src="./images/equinix.png" alt="" />
          <img src="./images/realty.png" alt="" />
        </div>
      </section>
    </div>
  );
}

export default Companies;
