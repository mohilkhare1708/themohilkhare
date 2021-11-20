import React, { useEffect, useState } from "react";
import { db } from "../util/Firebase";

const Skills = () => {
  const [skill, setSkill] = useState([]);
  useEffect(() => {
    db.collection("skills").onSnapshot((querySnapshot) => {
      let docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setSkill(docs);
    });
    return () => {};
  }, []);
  return (
    <div>
      <div class="row skill">
        <div class="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div class="nine columns main-col">
          <ul class="skills">
            {skill.map((mapItem) => {
              return (
                <li>
                  <em>{mapItem.skill}</em>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
