import React from "react";
import "../assets/css/admin.css";

function Admin() {
  return (
    <div class="row banner">
      <form class="adminForm">
        <h4>Add Education / Work Experience</h4>
        <label for="type">Choose type</label>
        <select name="type" id="type">
          <option value="education">Education</option>
          <option value="workex">Work Experience</option>
        </select>
        <br /><br />
        <input
          class="name"
          type="text"
          id="orguni"
          name="orguni"
          placeholder="Organization / University"
        />
        <input
          class="name"
          type="text"
          id="title"
          name="title"
          placeholder="Course / Job Title"
        />
        <input
          class="name"
          type="text"
          id="date"
          name="date"
          placeholder="Date"
        />
        <input
          class="name"
          type="text"
          id="desc"
          name="desc"
          placeholder="Description"
        />
        <input class="sub" type="submit" value="Add This!" />
      </form>
    </div>
  );
}

export default Admin;
