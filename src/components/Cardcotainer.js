import React from "react";
import { Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./CardSlider.css"

const CardCarousel = () => {
  const cards = [
    {
      id: 1,
      title: "Grilled  Tomatoes at Home",
      image: "./pic1.jpg",
      description:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
      id: 2,
      title: "Snacks for Trave",
      image: "./pic2.jpg",
      description:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
      id: 3,
      title: "Post-workout Recipes",
      image: "./pic3.jpg",
      description:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard....",
    },
    {
      id: 4,
      title: "How To Grill Corn",
      image: "./pic4.jpg",
      description:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
      id: 4,
      title: "Crunchwrap Supreme",
      image: "./pic5.jpg",
      description:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
    },
    {
      id: 6,
      title: "Broccoli Cheese Soup",
      image: "./pic6.jpg",
      description:
        "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..",
    },
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <Container className="my-5 p-5">
      <h1 style={{ color: "#0E2368" }}>Latest Articles</h1>
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={2000}
        centerMode={false}
        containerClass="carousel-container"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass="carousel-item-padding-40-px"
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={true}
        responsive={responsive}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
      >
        {cards.map((card) => (
          <div key={card.id} className="card">
            <img src={card.image} alt={card.title} className="card-image" />
            <div className="card-content" style={{ padding: "20px" }}>
              <h5 style={{ color: "#0E2368", fontWeight: "700" }}>
                {card.title}
              </h5>
              <p
                style={{
                  font: "Open Sans",
                  fontSize: "15px",
                  color: "#0E2368",
                  lineHeight: "27px",
                }}
              >
                {card.description}
              </p>
              <button className="cardbtn">Read More</button>
            </div>
          </div>
        ))}
      </Carousel>
    </Container>
  );
};
export default CardCarousel;
