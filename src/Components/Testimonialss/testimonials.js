import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./testimonials.css";
import photo1 from "../../assets/review/rev1.png";
import photo2 from "../../assets/review/review2.png";
import { Rating } from "@mui/material";
import { useState } from "react";

function Testimonials() {
  const [value] = useState("5");

  return (
    <>
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-content" data-aos="fade-up">
            <div className="testimonials-content__title">
              <h2>Reviewed by People</h2>
              <p>
                Dive into the inspiring stories of our clients, sharing their
                firsthand experiences with our services and the positive
                transformations they've achieved. Join us in celebrating these
                stories of growth and accomplishment, and let them assure you of
                the positive difference we can bring to your journey as well.
              </p>
            </div>

            <div className="all-testimonials">
              <div className="all-testimonials__box">
                <span className="quotes-icon">
                  <Rating name="read-only" value={value} readOnly />
                </span>
                <p>
                  "Quick, hassle-free, and budget-friendly—this website exceeded
                  our expectations for car rentals. 5 stars!"
                </p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <img src={photo1} alt="user_img" />
                    <span>
                      <h4>Xavier Tim</h4>
                      <p>Canada</p>
                    </span>
                  </div>
                </div>
              </div>

              <div className="all-testimonials__box box-2">
                <span className="quotes-icon">
                  <Rating name="read-only" value={value} readOnly />
                </span>
                <p>
                  "Smooth booking process and affordable rates made our car
                  rental experience fantastic! Highly recommend!"
                </p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <img src={photo2} alt="user_img" />
                    <span>
                      <h4>Roman Ice</h4>
                      <p>Finland</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
