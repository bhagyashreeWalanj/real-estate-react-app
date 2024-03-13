import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import OutSideClickHandler from "react-outside-click-handler";

import styles from "./Header.module.scss";

function Header() {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyles = (menuOpened: any) => {
    if (document.documentElement.clientWidth <= 800 && menuOpened) {
      // setMenuOpened(!menuOpened);
      return { right: "-100%" };
    }
  };
  return (
    <>
      <section className={styles.hWrapper}>
        <div className={`${styles.hContainer} flexCenter paddings innerWidth`}>
          <img src="./images/logo.png" alt="logo" width={100} />
          <OutSideClickHandler onOutsideClick={() => setMenuOpened(false)}>
            <div
              className={`${styles.hMenu} flexCenter`}
              style={getMenuStyles(menuOpened)}
            >
              <a href="/residencies">Residencies</a>
              <a href="/">Our Value</a>
              <a href="/">Contact Us</a>
              <a href="/">Get Started</a>
              <button className="button">
                <a href="/">Contact</a>
              </button>
            </div>
          </OutSideClickHandler>
          <div
            className={styles.menuIcon}
            onClick={() => setMenuOpened((prev) => !prev)}
          >
            <BiMenuAltRight size={30} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
