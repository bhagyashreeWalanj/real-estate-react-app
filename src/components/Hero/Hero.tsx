import { HiLocationMarker } from "react-icons/hi";
import styles from "./Hero.module.scss";
import CountUp from "react-countup";
import { motion } from "framer-motion";

function Hero() {
  return (
    <>
      <section className={styles.heroWrapper}>
        <div
          className={`paddings innerWidth flexCenter ${styles.heroContainer}`}
        >
          {/* left side */}
          <div className={`flexColStart ${styles.heroLeft}`}>
            <div className={styles.heroTitle}>
              <div className={styles.orangeCircle}></div>
              <motion.h1
                initial={{ y: "2rem", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 2,
                  type: "spring",
                }}
              >
                <h1>
                  Discover <br />
                  Most Suitable
                  <br /> Property
                </h1>
              </motion.h1>
            </div>
            <div className={`flexColStart ${styles.heroDes}`}>
              <span className={`secondaryText`}>
                Find a variety of properties that suit you very easily
              </span>
              <span className={`secondaryText`}>
                Forget all difficulties in finding a residence for you
              </span>
            </div>

            <div className={`flexCenter ${styles.searchBar}`}>
              <HiLocationMarker color="var(--blue)" size={25} />
              <input type="text" />
              <button className="button">Search</button>
            </div>

            <div className={`flexCenter ${styles.stats}`}>
              <div className={`flexColCenter ${styles.stat}`}>
                <span>
                  {" "}
                  <CountUp start={8800} end={9000} duration={4} />
                  <span>+</span>
                </span>
                <span className={`secondaryText`}>Premium Products</span>
              </div>
              <div className={`flexColCenter ${styles.stat}`}>
                <span>
                  {" "}
                  <CountUp start={1950} end={2000} duration={4} />
                  <span>+</span>
                </span>
                <span className={`secondaryText`}>Happy Customers</span>
              </div>
              <div className={`flexColCenter ${styles.stat}`}>
                <span>
                  {" "}
                  <CountUp end={28} />
                  <span>+</span>
                </span>
                <span className={`secondaryText`}>Award Winnings</span>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className={`${styles.heroRight} flexRight`}>
            <motion.div
              initial={{ x: "7rem", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "spring",
              }}
              className={styles.imageContainer}
            >
              <img src="./images/hero-image.png" alt="hero" />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
