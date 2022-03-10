import React from "react";
// import { useEffect, useState } from "react";
// import { db } from "../util/Firebase";
// import TestimonialItem from "./TestimonialItem";

const Testimonials = () => {
  // const [testimonial, setTestimonial] = useState([]);
  // useEffect(() => {
  //   db.collection("testimonials").onSnapshot((querySnapshots) => {
  //     let docs = [];
  //     querySnapshots.forEach((doc) => {
  //       docs.push({ ...doc.data(), id: doc.id });
  //     });
  //     console.log(docs);
  //     setTestimonial(docs);
  //   });
  //   return () => {};
  // }, []);
  return (
    <div>
      <section id="testimonials">
        <div class="text-container">
          <div class="row">
            <div class="two columns header-col">
              <h1>
                <span>Client Testimonials</span>
              </h1>
            </div>

            <div class="ten columns flex-container">
              <div class="flexslider">
                <ul class="slides">
                  {/* {testimonial.map((testimonialItem) => {
                    return (
                      <TestimonialItem
                        message={testimonialItem.message}
                        from={testimonialItem.from}
                      />
                    );
                  })} */}
                  <li>
                    <blockquote>
                      <p>
                        His contribution in the Whatsapp admission enquiry
                        chatbot project is precious. He has demonstrated good
                        creativity and excellent programming skills with a
                        self-motivated attitude to learn new things. I wish him
                        a good luck for all future endeavours.
                      </p>
                      <cite>
                        Dr. Sarita Ambadekar, HoD Computer Engineering
                        department
                      </cite>
                    </blockquote>
                  </li>

                  <li>
                    <blockquote>
                      <p>
                        Once I get the LORs from my teacher, I'll add more lmao.
                      </p>
                      <cite>Mohil</cite>
                    </blockquote>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
