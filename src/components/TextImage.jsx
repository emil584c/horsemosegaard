import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";

function TextImage({
  title,
  text,
  images = [{ url: "", alt: "" }],
  listItems = [],
  backgroundSecondary,
}) {
  return (
    <>
      <section
        className={`text-image page-container ${
          backgroundSecondary ? "background-secondary" : ""
        }`}
      >
        <div className="text-image__inner">
          <div className="text-image__text-container">
            <h2 className="text-image__title">{title}</h2>
            <p className="text-image__text">{text}</p>
            {listItems && (
              <ul className="text-image__list">
                {listItems.map((item, index) => (
                  <li
                    key={index}
                    className="text-image__list-item"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="text-image__image-slider">
            <Swiper
              modules={[Navigation]}
              navigation={true}
              spaceBetween={50}
              slidesPerView={1}
            >
              {images.map((image) => (
                <SwiperSlide key={image.alt}>
                  <div className="text-image__slide object-fit">
                    <img
                      src={image.url}
                      alt={image.alt}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}

export default TextImage;
