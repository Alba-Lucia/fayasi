import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const carrusel = [
  { imagen: "/carrusel-2.png" },
  { imagen: "/carrusel-3.png" },
  { imagen: "/carrusel-4.png" },
  { imagen: "/carrusel-5.png" },
  { imagen: "/carrusel-6.png" },
  { imagen: "/carrusel-7.png" },
  { imagen: "/carrusel-1.png" },
];

export const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true, 
    autoplaySpeed: 3000,
    slidesToShow: 3, 
    slidesToScroll: 3,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" m-auto">
      <Slider {...settings}>
        {carrusel.map((item, index) => (
          <div
            key={index}
            className="h-[450px] flex justify-center items-center object-cover"
          >
            <img
              src={item.imagen}
              className="shadow-md w-full h-full object-cover rounded-lg"
              alt={`Slide ${index}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
