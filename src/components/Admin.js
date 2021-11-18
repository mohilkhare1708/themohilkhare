import React, {useState} from "react";
import firebase from "../util/Firebase";
import "../assets/css/admin.css";

function Admin() {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('');
  const handleOcTitle = (e) => {
    setTitle(e.target.value);
  }
  const handleOcType = (e) => {
    setType(e.target.value);
  }

  const createDB = () => {
    console.log("broooooooooooooooooo");
    console.log(title);
    const dbRef = firebase.ref("education");
    console.log(title);
    const item = {title};
    dbRef.push(item);
  }
  return (
    <div class="row banner">
      <form class="adminForm">
        <h4>Add Education / Work Experience</h4>
        <input
          class="name"
          type="text"
          id="type"
          name="type"
          placeholder="Education or Work?"
          value={type}
          onChange={handleOcType}
        />
        <input
          class="name"
          type="text"
          id="title"
          name="title"
          placeholder="Course / Job Title"
          value={title}
          onChange={handleOcTitle}
        />
        {/* <input
          class="name"
          type="text"
          id="date"
          name="date"
          placeholder="Date"
          value={date}
          onChange={handleOcDate}
        />
        <input
          class="name"
          type="text"
          id="desc"
          name="desc"
          placeholder="Description"
          value={desc}
          onChange={handleOcDesc}
        /> */}
        <input class="sub" type="submit" value="Add This!" onClick={createDB}/>
      </form>
    </div>
  );
}

export default Admin;
