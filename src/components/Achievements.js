import { useEffect, useState } from "react";
import { db } from "../util/Firebase";
import ExperienceItem from "./ExperienceItem";

const Achievements = () => {
  const [achievement, setAchievement] = useState([]);
  useEffect(() => {
    db.collection("achievements").onSnapshot((querySnapshot) => {
      let docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      docs.reverse();
      setAchievement(docs);
    });
    return () => {};
  }, []);
  return (
    <div>
      <div class="row achievements">
        <div class="three columns header-col">
          <h1>
            <span>Achievements</span>
          </h1>
        </div>
        <div class="nine columns main-col">
          {achievement.map((achievementItem) => {
            return (
              <ExperienceItem
                orguni={achievementItem.organisation}
                courserole={achievementItem.title}
                date={achievementItem.date}
                desc={achievementItem.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
