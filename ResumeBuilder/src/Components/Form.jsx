import React from "react";
import { useRef } from "react";
import Select from "react-select";

function Form() {
  const ref = useRef();
  const [checked, setChecked] = React.useState(false);

  const options = [
    { value: "High School Diploma", label: "High School Diploma" },
    { value: "GED", label: "GED" },
    { value: "Associate of Arts", label: "Associate of Arts" },
    { value: "Associate of Science", label: "Associate of Science" },
    {
      value: "Associate of Applied Science",
      label: "Associate of Applied Science",
    },
    { value: "Bachelor of Arts", label: "Bachelor of Arts" },
    { value: "Bachelor of Science", label: "Bachelor of Science" },
    { value: "BBA", label: "BBA" },
    { value: "Master of Arts", label: "Master of Arts" },
    { value: "Master of Science", label: "Master of Science" },
    { value: "MBA", label: "MBA" },
    { value: "J.D", label: "J.D" },
    { value: "M.D", label: "M.D" },
    { value: "Ph.D", label: "Ph.D" },
    { value: "Other", label: "Other" },
    { value: "No Degree", label: "No Degree" },
  ];

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <form>
      <div className="container">
        <p>Persnol Info</p>
        <label for="name">Full Name</label>
        <input type="text" placeholder="Name" id="name" />

        <label for="profession">Profession</label>
        <input type="text" id="profession" placeholder="Software Engineer" />

        <label for="Contact">Contact</label>
        <input type="text" id="Contact" placeholder="+1234567890" />

        <label for="mail">Mail</label>
        <input type="text" id="mail" placeholder="name@mail.com" />

        <label for="ProfileId">ProfileId</label>
        <input
          type="text"
          id="ProfileId"
          placeholder="http://github.com/name1"
        />
      </div>

      <div className="container">
        <p>Summary</p>
        <textarea value="Summary"></textarea>
      </div>

      <div className="container">
        <p>Experience</p>
        <label for="jobTitle">Job Title</label>
        <input type="text" id="jobTitle" placeholder="Software Engineer" />

        <label for="company">Company</label>
        <input type="text" id="company" placeholder="1234567890" />

        <label for="Contact">City &amp; Contry</label>
        <input type="text" id="Contact" placeholder="1234567890" />

        <label for="startDate">Start Date</label>
        <input
          type="date"
          id="startDate"
          ref={ref}
          onChange={(e) => console.log("start", e.target.value)}
          onFocus={() => (ref.current.type = "date")}
          onBlur={() => (ref.current.type = "date")}
        />

        <label for="endDate">End Date</label>
        <input
          type="date"
          id="endDate"
          ref={ref}
          onChange={(e) => console.log("end", e.target.value)}
          onFocus={() => (ref.current.type = "date")}
          onBlur={() => (ref.current.type = "date")}
        />

        <label>
          <input type="checkbox" checked={checked} onChange={handleChange} />I
          currently work here
        </label>
      </div>

      <div className="container">
        <p>Education</p>
        <label for="schoolName">School Name</label>
        <input type="text" id="schoolName" placeholder="xyz univercity" />

        <label for="city">City &amp; Contry</label>
        <input type="text" id="city" placeholder="Jalgaon,India" />

        <label for="degree">Degree</label>
        <Select options={options} id="degree" />

        <label for="field">Field of Study</label>
        <input type="text" id="field" placeholder="computer Science" />

        <label for="startDate">Start Date</label>
        <input
          type="date"
          id="startDate"
          ref={ref}
          onChange={(e) => console.log("start", e.target.value)}
          onFocus={() => (ref.current.type = "date")}
          onBlur={() => (ref.current.type = "date")}
        />

        <label for="endDate">End Date</label>
        <input
          type="date"
          id="endDate"
          ref={ref}
          onChange={(e) => console.log("end", e.target.value)}
          onFocus={() => (ref.current.type = "date")}
          onBlur={() => (ref.current.type = "date")}
        />

        <label>
          <input type="checkbox" checked={checked} onChange={handleChange} />I
          currently attend here
        </label>
      </div>

      <div className="container">
        <p>skills</p>
        <div>
          <input type="text" placeholder="Java" />
          <button type="submit">add</button>
          <button type="submit">remove</button>
        </div>
      </div>

      <div className="container">
        <p>Languages</p>
        <div>
          <input type="text" placeholder="English" />
          <button type="submit">add</button>
          <button type="submit">remove</button>
        </div>
      </div>

      <div className="container">
        <p>Intrests</p>
        <div>
          <input type="text" placeholder="Web Development" />
          <button type="submit">add</button>
          <button type="submit">remove</button>
        </div>
      </div>

      <div className="container">
        <p>Awards</p>
        <label for="awardsFor">Awards For</label>
        <input
          type="text"
          id="awardsFor"
          placeholder="Digital Compression Pioneer Award "
        />

        <label for="event">Event</label>
        <input type="text" id="event" placeholder="TechEvent" />

        <textarea value="There is no spoon"></textarea>
      </div>
    </form>
  );
}

export default Form;
