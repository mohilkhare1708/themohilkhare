import { useEffect, useState } from "react";
import { db } from "../util/Firebase";
import PortfolioItem from "./PortfolioItem";

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState([]);
  useEffect(async () => {
    db.collection("projects").onSnapshot(
      (querySnapshot) => {
        let docs = [];
        querySnapshot.forEach((doc) => {
          let idx = "" + (parseInt(doc.id) + 1);
          console.log(idx);
          docs.push({ ...doc.data(), id: idx });
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
                    repoLink={portfolioItem.repoLink}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
