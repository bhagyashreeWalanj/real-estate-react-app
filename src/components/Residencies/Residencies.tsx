import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import styles from "./Residencies.module.scss";
import Data from "./../../utils/slider.json";
import { Pagination } from "swiper/modules";

const SliderButtons = () => {
  const swiper = useSwiper();

  return (
    <>
      <div className={`flexEnd ${styles.rButtons}`}>
        <button
          className={styles.rPrevButton}
          onClick={() => swiper.slidePrev()}
        >
          &lt;
        </button>
        <button
          className={styles.rNextButton}
          onClick={() => swiper.slideNext()}
        >
          &gt;
        </button>
      </div>
    </>
  );
};

function Residencies() {
  return (
    <>
      <section className={styles.rWrapper} id="/residencies">
        <div className={`paddings innerWidth ${styles.rContainer}`}>
          <div className={`${styles.rHead} flexColStart`}>
            <span className="orangeText">Best Choices</span>
            <span className="primaryText">Popular Residencies</span>
          </div>
          <SliderButtons />
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            pagination={true}
            modules={[Pagination]}
          >
            {Data.map((card, i) => (
              <SwiperSlide key={i}>
                <div className={`flexColStart ${styles.rCard}`}>
                  <img src={card.image} alt="home" />
                  <span className={`secondaryText ${styles.rPrice}`}>
                    <span style={{ color: "orange" }}>$</span>
                    <span>{card.price}</span>
                  </span>
                  <span className="primaryText">{card.name}</span>
                  <span className="secondaryText">{card.detail}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default Residencies;
