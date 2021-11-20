import { React, useEffect, useState } from "react";
import { db } from "../util/Firebase";
import ExperienceItem from "./ExperienceItem";

const Work = () => {
  const [work, setWork] = useState([]);
  useEffect(async () => {
    db.collection("work").onSnapshot(
      (querySnapshot) => {
        let docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setWork(docs);
      },
      (err) => {
        console.log(err);
      }
    );
    return () => {};
  }, []);
  return (
    <div>
      <div class="row work">
        <div class="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>
        <div class="nine columns main-col">
          {work.map((workItem) => {
            return (
              <ExperienceItem
                orguni={workItem.organisation}
                courserole={workItem.title}
                date={workItem.date}
                desc={workItem.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
