import { useEffect, useState } from "react";
import { db } from "../util/Firebase";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);
  useEffect(() => {
    db.collection("projects").onSnapshot(
      (querySnapshot) => {
        let docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id + 1 });
        });
        docs.reverse();
        setPortfolio(docs);
      },
      (err) => {
        console.log(err);
      }
    );
    return () => {};
  }, []);
  return (
    <div>
      <section id="portfolio">
        <div class="row">
          <div class="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>

            <div
              id="portfolio-wrapper"
              class="bgrid-quarters s-bgrid-thirds cf"
            >
              {portfolio.map((portfolioItem) => {
                return (
                  <PortfolioItem
                    name={portfolioItem.name}
                    id={portfolioItem.id}
                    imgLink={portfolioItem.imgLink}
                  />
                );
              })}
              {/* <ProtfolioItem />
              <ProtfolioItem />
              <ProtfolioItem />
              <ProtfolioItem /> */}
            </div>
          </div>

          <div id="modal-01" class="popup-modal mfp-hide">
            <img
              class="scale-with-grid"
              src="images/portfolio/modals/m-coffee.jpg"
              alt=""
            />

            <div class="description-box">
              <h4>Coffee Cup</h4>
              <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit.
              </p>
              <span class="categories">
                <i class="fa fa-tag"></i>Branding, Webdesign
              </span>
            </div>

            <div class="link-box">
              <a href="http://www.behance.net" target="_blank">
                Details
              </a>
              <a class="popup-modal-dismiss">Close</a>
            </div>
          </div>

          <div id="modal-02" class="popup-modal mfp-hide">
            <img
              class="scale-with-grid"
              src="images/portfolio/modals/m-console.jpg"
              alt=""
            />

            <div class="description-box">
              <h4>Console</h4>
              <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit.
              </p>
              <span class="categories">
                <i class="fa fa-tag"></i>Branding, Web Development
              </span>
            </div>

            <div class="link-box">
              <a href="http://www.behance.net" target="_blank">
                Details
              </a>
              <a class="popup-modal-dismiss">Close</a>
            </div>
          </div>

          <div id="modal-03" class="popup-modal mfp-hide">
            <img
              class="scale-with-grid"
              src="images/portfolio/modals/m-judah.jpg"
              alt=""
            />

            <div class="description-box">
              <h4>Judah</h4>
              <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit.
              </p>
              <span class="categories">
                <i class="fa fa-tag"></i>Branding
              </span>
            </div>

            <div class="link-box">
              <a href="http://www.behance.net" target="_blank">
                Details
              </a>
              <a class="popup-modal-dismiss">Close</a>
            </div>
          </div>

          <div id="modal-04" class="popup-modal mfp-hide">
            <img
              class="scale-with-grid"
              src="images/portfolio/modals/m-intothelight.jpg"
              alt=""
            />

            <div class="description-box">
              <h4>Into the Light</h4>
              <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit.
              </p>
              <span class="categories">
                <i class="fa fa-tag"></i>Photography
              </span>
            </div>

            <div class="link-box">
              <a href="http://www.behance.net" target="_blank">
                Details
              </a>
              <a class="popup-modal-dismiss">Close</a>
            </div>
          </div>

          <div id="modal-05" class="popup-modal mfp-hide">
            <img
              class="scale-with-grid"
              src="images/portfolio/modals/m-farmerboy.jpg"
              alt=""
            />

            <div class="description-box">
              <h4>Farmer Boy</h4>
              <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit.
              </p>
              <span class="categories">
                <i class="fa fa-tag"></i>Branding, Webdesign
              </span>
            </div>

            <div class="link-box">
              <a href="http://www.behance.net" target="_blank">
                Details
              </a>
              <a class="popup-modal-dismiss">Close</a>
            </div>
          </div>

          <div id="modal-06" class="popup-modal mfp-hide">
            <img
              class="scale-with-grid"
              src="images/portfolio/modals/m-girl.jpg"
              alt=""
            />

            <div class="description-box">
              <h4>Girl</h4>
              <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit.
              </p>
              <span class="categories">
                <i class="fa fa-tag"></i>Photography
              </span>
            </div>

            <div class="link-box">
              <a href="http://www.behance.net" target="_blank">
                Details
              </a>
              <a class="popup-modal-dismiss">Close</a>
            </div>
          </div>

          <div id="modal-07" class="popup-modal mfp-hide">
            <img
              class="scale-with-grid"
              src="images/portfolio/modals/m-origami.jpg"
              alt=""
            />

            <div class="description-box">
              <h4>Origami</h4>
              <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit.
              </p>
              <span class="categories">
                <i class="fa fa-tag"></i>Branding, Illustration
              </span>
            </div>

            <div class="link-box">
              <a href="http://www.behance.net" target="_blank">
                Details
              </a>
              <a class="popup-modal-dismiss">Close</a>
            </div>
          </div>

          <div id="modal-08" class="popup-modal mfp-hide">
            <img
              class="scale-with-grid"
              src="images/portfolio/modals/m-retrocam.jpg"
              alt=""
            />

            <div class="description-box">
              <h4>Retrocam</h4>
              <p>
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin, lorem quis bibendum auctor, nisi elit consequat
                ipsum, nec sagittis sem nibh id elit.
              </p>
              <span class="categories">
                <i class="fa fa-tag"></i>Webdesign, Photography
              </span>
            </div>

            <div class="link-box">
              <a href="http://www.behance.net" target="_blank">
                Details
              </a>
              <a class="popup-modal-dismiss">Close</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
