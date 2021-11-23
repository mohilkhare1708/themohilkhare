import { React, useEffect, useState } from "react";
import { db } from "../util/Firebase";
import ExperienceItem from "./ExperienceItem";

const Education = () => {
  const [education, setEducation] = useState([]);
  useEffect(async () => {
    db.collection("education").onSnapshot(
      (querySnapshot) => {
        let docs = [];
        querySnapshot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        docs.reverse();
        setEducation(docs);
      },
      (err) => {
        console.log(err);
      }
    );
    return () => {};
  }, []);
  return (
    <div>
      <div class="row education">
        <div class="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>
        <div class="nine columns main-col">
          {education.map((educationItem) => {
            return (
              <ExperienceItem
                orguni={educationItem.institute}
                courserole={educationItem.course}
                date={educationItem.date}
                desc={educationItem.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Education;
