import { React, useState, useEffect } from "react";
import { db } from "../util/Firebase";
import ExperienceItem from "./ExperienceItem";

const PostitionsOfResponsibilities = () => {
  const [por, setPor] = useState([]);
  useEffect(() => {
    db.collection("positionsOfResponsibilities").onSnapshot((querySnapshot) => {
      let docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      docs.reverse();
      setPor(docs);
    });
    return () => {};
  }, []);
  return (
    <div>
      <div class="row por">
        <div class="three columns header-col">
          <h1>
            <span>Positions Held</span>
          </h1>
        </div>
        <div class="nine columns main-col">
          {por.map((porItem) => {
            return (
              <ExperienceItem
                orguni={porItem.organisation}
                courserole={porItem.title}
                date={porItem.date}
                desc={porItem.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PostitionsOfResponsibilities;
